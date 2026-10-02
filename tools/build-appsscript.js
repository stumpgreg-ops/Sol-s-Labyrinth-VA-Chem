/* Build the Google Apps Script version of the Chemistry game: node tools/build-appsscript.js
   (SOL Labyrinth v5.8.0's tools/build-appsscript.js, for one game built straight from this repository.)

   School filters block github.io, netlify.app and the like, but not script.google.com. The teacher pastes
   one small file (appsscript/Code.gs) into an Apps Script project and deploys it as a web app. The game
   itself stays in this public repository: Google's servers fetch it (the school's filter never sees that
   request) and hand it to the Chromebook through google.script.run.

   Writes appsscript/ (committed, so raw.githubusercontent.com can serve it from the game's branch):
     Code.gs                 the whole Apps Script project (doGet + the helpers the page calls)
     loader.html             the page doGet serves: a loading bar and the loader (nothing game-specific)
     manifest.json           version, bundle hash, part file names, and the stylesheets and scripts in page order
     sol-<hash>-<n>.bin      the game's files (no music) packed into one gzip, cut into parts of PART_BYTES
     test.html               a local stand-in for Apps Script (serves loader.html in a sandboxed frame and
                             answers google.script.run from the local files) — for tools/smoke-appsscript.js

   The body markup travels inside the bundle as __page.html, so the markup, styles and scripts a Chromebook
   runs always come from the same version.
   Bundle format (before gzip): 4-byte big-endian header length, header JSON [[path, offset, length], …], bytes.
   The loader keeps the unpacked bundle in IndexedDB, so a Chromebook downloads it once per version. */
var fs = require("fs"), path = require("path"), zlib = require("zlib"), crypto = require("crypto");
var root = path.join(__dirname, "..");
var st = "VA", lo = "va";
var src = root, out = path.join(root, "appsscript"), outSt = out;
var BRANCH = process.argv[2] || (function () {
  try { return require("child_process").execSync("git rev-parse --abbrev-ref HEAD", { cwd: root }).toString().trim(); } catch (e) { return "claude/youthful-tesla-cgmb12"; }
})();
var REPO_RAW = "https://raw.githubusercontent.com/stumpgreg-ops/Sol-s-Labyrinth-VA-Chem/" + BRANCH + "/appsscript/";
var REPO_PAGES = "https://stumpgreg-ops.github.io/Sol-s-Labyrinth-VA-Chem/appsscript/";
var PART_BYTES = 3 * 1024 * 1024;
var TITLE = "SOL Lab · Virginia EOC Chemistry";
/* left out of the bundle: the tooling, the build output itself, docs, and the files the page does not load */
var SKIP_DIRS = { "tools": 1, "dist": 1, "docs": 1, "appsscript": 1, ".git": 1, "node_modules": 1, ".claude": 1, "assets/music": 1 };
var SKIP_FILES = { "index.html": 1, "admin.html": 1, ".gitignore": 1, ".DS_Store": 1, "Thumbs.db": 1 };

var html = fs.readFileSync(path.join(src, "index.html"), "utf8");
var version = (html.match(/\?v=([0-9.]+)/) || [0, "0"])[1];

/* ── the files: everything the built game has except music, docs and the page itself ── */
var files = [];
(function walk(d) {
  fs.readdirSync(d).sort().forEach(function (n) {
    var p = path.join(d, n), rel = path.relative(src, p).split(path.sep).join("/");
    if (fs.statSync(p).isDirectory()) { if (!SKIP_DIRS[rel]) walk(p); return; }
    if (SKIP_FILES[rel] || SKIP_FILES[n] || /\.(md|zip)$/i.test(n)) return;
    files.push(rel);
  });
})(src);

/* ── the page: head styles and body markup; scripts run by the loader in their original order ── */
var scripts = [];
var headCss = [];
html.replace(/<link rel="stylesheet" href="([^"?]+)[^"]*"\s*\/?>/g, function (m, href) { headCss.push(href); return ""; });
var body = html.slice(html.indexOf("<body"), html.lastIndexOf("</body>"));
var bodyOpen = body.slice(0, body.indexOf(">") + 1);
body = body.slice(body.indexOf(">") + 1);
/* head scripts first (e.g. window.SOL_STATE), then the body's */
var headPart = html.slice(0, html.indexOf("<body"));
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
scripts.forEach(function (s) { if (s.src && files.indexOf(s.src) === -1) throw new Error("tools/build-appsscript.js: " + s.src + " is not in the repository"); });
headCss.forEach(function (c) { if (files.indexOf(c) === -1) throw new Error("tools/build-appsscript.js: " + c + " is not in the repository"); });

/* ── pack: the files, plus the body markup as __page.html (so page and scripts always come from one bundle) ── */
var header = [], bufs = [], off = 0;
function add(f, b) { header.push([f, off, b.length]); bufs.push(b); off += b.length; }
add("__page.html", Buffer.from(body.trim()));
/* v5.8: the teacher page (?admin=1) — run by the loader after the content files, instead of the game */
add("__admin.js", fs.readFileSync(path.join(__dirname, "appsscript", "admin.js")));
add("__admin.css", fs.readFileSync(path.join(__dirname, "appsscript", "admin.css")));
files.forEach(function (f) { add(f, fs.readFileSync(path.join(src, f))); });
var hj = Buffer.from(JSON.stringify(header)), hl = Buffer.alloc(4); hl.writeUInt32BE(hj.length, 0);
var raw = Buffer.concat([hl, hj].concat(bufs));
var gz = zlib.gzipSync(raw, { level: 9 });
var hash = crypto.createHash("sha1").update(gz).digest("hex").slice(0, 12);
fs.mkdirSync(outSt, { recursive: true });
/* the old version's parts go (one version per commit keeps the branch small) */
fs.readdirSync(outSt).forEach(function (n) { if (/^sol-[0-9a-f]+-\d+\.bin$/.test(n)) fs.unlinkSync(path.join(outSt, n)); });
var parts = [];
for (var i = 0; i * PART_BYTES < gz.length; i++) {
  var name = "sol-" + hash + "-" + i + ".bin";
  fs.writeFileSync(path.join(outSt, name), gz.subarray(i * PART_BYTES, (i + 1) * PART_BYTES));
  parts.push(name);
}
var manifest = { state: st, version: version, hash: hash, bytes: gz.length, files: files.length, parts: parts,
  body: (bodyOpen.match(/class="([^"]*)"/) || [0, ""])[1], css: headCss, scripts: scripts };
fs.writeFileSync(path.join(outSt, "manifest.json"), JSON.stringify(manifest, null, 1));

/* ── loader.html ── */
var loaderJs = fs.readFileSync(path.join(__dirname, "appsscript", "loader.js"), "utf8");
var page = [
  "<!DOCTYPE html>",
  '<html lang="en">',
  "<head>",
  '<meta charset="utf-8" />',
  '<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />',
  "<title>" + TITLE + "</title>",
  "<style>",
  /* no music files in this build: the music buttons, picker and HUD slider go */
  "#btn-music, #music-pick, #btn-music-hud, #music-vol-hud { display: none !important; }",
  "#sol-boot { position: fixed; inset: 0; z-index: 99999; display: flex; flex-direction: column; align-items: center; justify-content: center;",
  "  gap: 18px; background: #0d0b1a; color: #efe6ff; font: 600 18px/1.4 system-ui, sans-serif; text-align: center; padding: 16px; }",
  "#sol-boot .bar { width: min(420px, 80vw); height: 14px; border-radius: 7px; background: #2a2440; overflow: hidden; }",
  "#sol-boot .fill { height: 100%; width: 0; background: linear-gradient(90deg, #7c5cff, #37d6c4); transition: width .25s; }",
  "#sol-boot .msg { font-weight: 400; font-size: 15px; opacity: .85; max-width: 520px; }",
  "#sol-boot button { font: inherit; padding: 8px 18px; border-radius: 8px; border: 0; background: #7c5cff; color: #fff; cursor: pointer; }",
  "</style>",
  "</head>",
  "<body>",
  '<div id="sol-boot"><div>' + TITLE + '</div><div class="bar"><div class="fill"></div></div><div class="msg">Loading the game…</div></div>',
  "<script>" + loaderJs + "</script>",
  "</body>",
  "</html>", ""
].join("\n");
fs.writeFileSync(path.join(outSt, "loader.html"), page);

/* ── Code.gs ── */
var gs = fs.readFileSync(path.join(__dirname, "appsscript", "Code.gs"), "utf8")
  .replace("__BASES__", JSON.stringify([REPO_RAW, REPO_PAGES], null, 2).replace(/\n/g, "\n  "))
  .replace("__TITLE__", TITLE);
fs.writeFileSync(path.join(out, "Code.gs"), gs);

/* ── local test stand-in ── */
fs.copyFileSync(path.join(__dirname, "appsscript", "test.html"), path.join(out, "test.html"));

var mb = function (n) { return (n / 1048576).toFixed(1) + " MiB"; };
console.log("Apps Script " + TITLE + " v" + version + ": " + files.length + " files, " + mb(raw.length) + " -> " + mb(gz.length) + " gzip in " + parts.length +
  " parts; loader.html " + (page.length / 1024).toFixed(0) + " KiB; appsscript/Code.gs (bases: " + REPO_RAW + ", " + REPO_PAGES + ")");
