/* The bundle the Apps Script and Canvas versions load, shared by tools/build-appsscript.js (the Chemistry game) and
   tools/build-swd-canvas.js (the SWD edition). Moved here unchanged from tools/build-appsscript.js (SWD 1.0).
   Bundle format (before gzip): 4-byte big-endian header length, header JSON [[path, offset, length(, delta base)], …], bytes.
   tools/appsscript/loader.js unpacks it. */
var fs = require("fs"), path = require("path"), zlib = require("zlib"), crypto = require("crypto");
var root = path.join(__dirname, ".."), dist = path.join(root, "dist");

/* every file under src except the skipped folders and files (paths with "/") */
function listFiles(src, skipDirs, skipFile) {
  var files = [];
  (function walk(d) {
    fs.readdirSync(d).sort().forEach(function (n) {
      var p = path.join(d, n), rel = path.relative(src, p).split(path.sep).join("/");
      if (fs.statSync(p).isDirectory()) { if (!skipDirs[rel]) walk(p); return; }
      if (skipFile(rel, n)) return;
      files.push(rel);
    });
  })(src);
  return files;
}

/* pack(src, files, extras): extras are [name, Buffer] put first (the page markup and the like).
   Returns { raw, gz, hash }. */
function pack(src, files, extras) {
  var header = [], bufs = [], off = 0;
  function add(f, b, base) { header.push(base ? [f, off, b.length, base] : [f, off, b.length]); bufs.push(b); off += b.length; }
  (extras || []).forEach(function (e) { add(e[0], e[1]); });
  /* v5.8.1: the castle's 3D models come in four colours that are nearly the same bytes, but each is ~140 KB and
     gzip only looks 32 KB back, so it can't see that. A model whose name differs from an earlier one's only by a
     word (blue → red) is stored as a delta of it (see delta()); header entry [path, offset, length, base path]. */
  /* v5.8.1: PNGs travel as lossless WebP when that is smaller (same pixels; the loader gives the blob the right
     type). tools/webp-cache.py does the encoding once per image and keeps it in dist/.webp-cache. */
  var WEBP = path.join(dist, ".webp-cache"), pngs = files.filter(function (f) { return /\.png$/i.test(f); });
  try {
    require("child_process").execFileSync("python3", [path.join(__dirname, "webp-cache.py"), WEBP].concat(pngs.map(function (f) { return path.join(src, f); })), { stdio: "inherit" });
  } catch (e) { console.warn("tools/pack-bundle.js: no WebP (" + e.message.split("\n")[0] + "); PNGs stay PNG"); }
  function smaller(f, b) {
    if (!/\.png$/i.test(f)) return b;
    var w = path.join(WEBP, crypto.createHash("sha1").update(b).digest("hex") + ".webp");
    if (!fs.existsSync(w)) return b;
    var wb = fs.readFileSync(w);
    return wb.length < b.length ? wb : b;
  }
  var plain = {};
  files.forEach(function (f) {
    var b = smaller(f, fs.readFileSync(path.join(src, f)));
    if (!/\.(glb|gltf|obj)$/i.test(f)) { add(f, b); return; }
    var dir = f.replace(/[^/]*$/, ""), stem = f.slice(dir.length).replace(/[^a-z]+/gi, " ").split(" ");
    var best = null;
    (plain[dir] || []).forEach(function (o) {
      var same = 0, n = Math.max(stem.length, o.stem.length);
      for (var i = 0; i < n; i++) if (stem[i] === o.stem[i]) same++;
      if (same < n - 1 || stem.length !== o.stem.length) return;   /* one word apart */
      var d = delta(o.b, b);
      if (d.length < b.length / 3 && (!best || d.length < best.d.length)) best = { f: o.f, d: d };
    });
    if (best) { add(f, best.d, best.f); return; }
    (plain[dir] = plain[dir] || []).push({ f: f, b: b, stem: stem });
    add(f, b);
  });
  var hj = Buffer.from(JSON.stringify(header)), hl = Buffer.alloc(4); hl.writeUInt32BE(hj.length, 0);
  var raw = Buffer.concat([hl, hj].concat(bufs));
  var gz = zlib.gzipSync(raw, { level: 9 });
  return { raw: raw, gz: gz, hash: crypto.createHash("sha1").update(gz).digest("hex").slice(0, 12) };
}
/* b as runs copied from a plus new bytes: [varint new-length, new bytes, varint copy-length, varint copy-offset]…
   (tools/appsscript/loader.js undelta() reverses it) */
function delta(a, b) {
  var K = 24, map = new Map(), out = [], lit = 0, i = 0, j;
  for (j = 0; j + K <= a.length; j += 4) { var k = a.toString("latin1", j, j + K); if (!map.has(k)) map.set(k, j); }
  function v(n) { while (n > 127) { out.push((n & 127) | 128); n = Math.floor(n / 128); } out.push(n); }
  function flush(copyLen, copyOff) { v(i - lit); for (var q = lit; q < i; q++) out.push(b[q]); v(copyLen); v(copyOff); }
  while (i < b.length) {
    var at = i + K <= b.length ? map.get(b.toString("latin1", i, i + K)) : undefined;
    if (at === undefined) { i++; continue; }
    var s = i, t = at;
    while (s > lit && t > 0 && b[s - 1] === a[t - 1]) { s--; t--; }   /* reach back into the new bytes */
    var e = i + K, u = at + K;
    while (e < b.length && u < a.length && b[e] === a[u]) { e++; u++; }
    i = s; flush(e - s, t); i = e; lit = e;
  }
  if (lit < b.length || !out.length) { i = b.length; flush(0, 0); }
  return Buffer.from(out);
}

/* a page's parts for the loader: its head stylesheets, its scripts (head first, in order) and its body markup */
function splitPage(html, files, who) {
  var scripts = [], headCss = [];
  html.replace(/<link rel="stylesheet" href="([^"?]+)[^"]*"\s*\/?>/g, function (m, href) { headCss.push(href); return ""; });
  var body = html.slice(html.indexOf("<body"), html.lastIndexOf("</body>"));
  var bodyOpen = body.slice(0, body.indexOf(">") + 1);
  body = body.slice(body.indexOf(">") + 1);
  var headPart = html.slice(0, html.indexOf("<body"));
  /* head <style> blocks travel with the markup */
  var headStyles = (headPart.match(/<style>[\s\S]*?<\/style>/g) || []).join("\n");
  function takeScripts(part) {
    return part.replace(/<script(?: src="([^"?]+)[^"]*")?>([\s\S]*?)<\/script>/g, function (m, s, code) {
      scripts.push(s ? { src: s } : { code: code });
      return "";
    });
  }
  takeScripts(headPart);
  body = takeScripts(body);
  /* images in the markup wait for the bundle */
  body = body.replace(/<img([^>]*?) src="((?:assets|js|css)\/[^"]+)"/g, '<img$1 data-vfs-src="$2"');
  scripts.forEach(function (s) { if (s.src && files.indexOf(s.src) === -1) throw new Error(who + ": " + s.src + " is not in the bundle"); });
  headCss.forEach(function (c) { if (files.indexOf(c) === -1) throw new Error(who + ": " + c + " is not in the bundle"); });
  return { css: headCss, scripts: scripts, body: body.trim(), bodyClass: (bodyOpen.match(/class="([^"]*)"/) || [0, ""])[1], headStyles: headStyles };
}

module.exports = { listFiles: listFiles, pack: pack, delta: delta, splitPage: splitPage };
