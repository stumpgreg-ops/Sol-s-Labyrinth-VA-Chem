#!/usr/bin/env node
/* Exports the question bank as one HTML document for teacher review:
     node tools/export-questions.js > questions.html          (every unit)
     node tools/export-questions.js MOLE > mole.html         (one unit: INV | ATOM | RXN | MOLE | KMT)
   Organised by unit (reporting category), then by level 1 → 2 → 3, then by pack in
   order of stimulus length, so a reader can see questions getting harder and the lab
   notes getting longer as the levels rise. Every item shows its SOL code, the four
   choices and the key. Google Docs imports the file as-is. */
var fs = require("fs"), path = require("path"), vm = require("vm");
var root = path.join(__dirname, "..");
var files = fs.readdirSync(path.join(root, "js")).filter(function (f) { return /^content\d*\.js$/.test(f); })
  .sort(function (a, b) { return num(a) - num(b); });
function num(f) { var m = f.match(/content(\d*)\.js/); return m[1] === "" ? 0 : parseInt(m[1], 10); }
/* History 1.0: node tools/export-questions.js WHI > whi.html (a history course), or WHI CLASS (one of its units) */
var argv = process.argv.slice(2), COURSE = null;
if (argv[0] && fs.existsSync(path.join(root, "courses", argv[0].toUpperCase(), "course.js"))) COURSE = argv.shift().toUpperCase();
if (COURSE) {
  files = ["courses/" + COURSE + "/course.js", "js/content.js"].concat(JSON.parse(fs.readFileSync(path.join(root, "courses", COURSE, "units.json"), "utf8"))
    .map(function (f) { return "courses/" + COURSE + "/" + f; }).filter(function (f) { return fs.existsSync(path.join(root, f)); }));
} else files = files.map(function (f) { return "js/" + f; });
var W = {}; W.window = W; W.global = W;
files.forEach(function (f) { vm.runInNewContext(fs.readFileSync(path.join(root, f), "utf8"), W, { filename: f }); });
var ONLY = argv[0] ? String(argv[0]).toUpperCase() : null;
var NAME = COURSE ? W.HEIST_COURSE.name : "Virginia EOC Chemistry", NOTES = COURSE ? "sources" : "lab notes";
var PACKS = W.HEIST_PACKS, FAMILIES = W.HEIST_FAMILIES.filter(function (f) { return !ONLY || f.id === "ALL" || f.id === ONLY; }), STANDARDS = W.HEIST_STANDARDS;
if (ONLY) PACKS = PACKS.filter(function (p) { return p.family === ONLY; });
var TIERS = [["tiny", 1, 15, "40–70"], ["short", 16, 40, "70–110"], ["medium", 41, 70, "110–160"], ["long", 71, 100, "160–220"]];
function esc(s) { return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;"); }
function words(html) { return String(html).replace(/<[^>]+>/g, " ").replace(/\(\d+\)/g, " ").replace(/\s+/g, " ").trim().split(" ").filter(Boolean).length; }
function tierOf(wc) { return wc < 70 ? "tiny" : wc < 110 ? "short" : wc < 160 ? "medium" : "long"; }
function levelsFor(tier) { var t = TIERS.filter(function (x) { return x[0] === tier; })[0]; return t ? t[1] + "–" + t[2] : "?"; }
var ver = (fs.readFileSync(path.join(root, COURSE ? COURSE + ".html" : "index.html"), "utf8").match(/<p class="ver">([^<]*)<\/p>/) || [0, ""])[1];

var out = [];
out.push('<!DOCTYPE html><html><head><meta charset="utf-8"><title>SOL Lab · ' + esc(NAME) + ' · question bank</title>');
out.push('<style>body{font-family:Arial,sans-serif;font-size:11pt;line-height:1.35} h1{font-size:20pt} h2{font-size:16pt;margin-top:28pt;border-bottom:2px solid #999} h3{font-size:13pt;margin-top:20pt;color:#444} h4{font-size:11.5pt;margin:14pt 0 4pt} table{border-collapse:collapse;margin:4pt 0 8pt} td,th{border:1px solid #bbb;padding:2pt 6pt;font-size:10pt;vertical-align:top} .meta{color:#666;font-size:9.5pt} .stim{background:#f4f4f4;border-left:3px solid #999;padding:6pt 10pt;margin:6pt 0} .stim p{margin:3pt 0} .q{margin:6pt 0 0 0} .q p{margin:2pt 0} .key{font-weight:bold;color:#0a6} .n{color:#999;font-size:9pt} ol{margin:2pt 0 4pt 22pt;padding:0} ol li{margin:1pt 0} .ok{background:#e6f7ee}</style></head><body>');
out.push("<h1>SOL Lab · " + esc(NAME) + " — question bank for review</h1>");
out.push('<p class="meta">Build ' + esc(ver) + ". Generated from " + (COURSE ? "courses/" + COURSE + "/" : "js/content2.js–content6.js") + " by tools/export-questions.js. " + PACKS.length + " packs, " +
  PACKS.reduce(function (a, p) { return a + p.claims.length; }, 0) + " questions. The key is marked <span class=\"key\">✔</span>. Items are original; numeric keys were computed from the values printed in the lab notes.</p>");
out.push("<h2>How difficulty rises with level</h2>");
out.push("<p>Each pack carries a <b>level</b> (1 easy · 2 medium · 3 hard) that describes the reasoning load of its questions, and its " + NOTES + " fall in a <b>length tier</b>. In play, the adaptive picker leans toward packs near the student's current level, and the stamina schedule asks for longer notes as the level number rises (about 65 words at level 1, growing 5 words every 3 levels to about 225 by level 99). So a student on level 5 sees short, one-step items on tiny notes; a student on level 80 sees multi-step calculations and Select TWO items on long notes.</p>");
out.push("<table><tr><th>Length tier</th><th>Drawn mostly on levels</th><th>Words in the " + NOTES + "</th><th>Typical questions</th></tr>");
out.push("<tr><td>tiny</td><td>1–15</td><td>40–70</td><td>4–5 one-step recall or a direct read of the table (level 1)</td></tr>");
out.push("<tr><td>short</td><td>16–40</td><td>70–110</td><td>5–6, single calculation or trend (level 1–2)</td></tr>");
out.push("<tr><td>medium</td><td>41–70</td><td>110–160</td><td>6, two-step reasoning, explain a mechanism (level 2)</td></tr>");
out.push("<tr><td>long</td><td>71–100</td><td>160–220</td><td>6, multi-step calculation, prediction from a model, Select TWO (level 2–3)</td></tr></table>");

out.push("<h2>Contents</h2><ol>");
FAMILIES.filter(function (f) { return f.id !== "ALL"; }).forEach(function (f) {
  var n = PACKS.filter(function (p) { return p.family === f.id; });
  out.push("<li>" + esc(f.label) + " (" + esc(f.kind) + ") — " + n.length + " packs, " + n.reduce(function (a, p) { return a + p.claims.length; }, 0) + " questions</li>");
});
out.push("</ol>");

FAMILIES.filter(function (f) { return f.id !== "ALL"; }).forEach(function (f) {
  var std = STANDARDS[f.kind] || null;
  out.push("<h2>" + esc(f.label) + " · " + esc(f.kind) + "</h2>");
  if (std) {
    out.push("<p class=\"meta\"><b>" + esc(f.kind) + " " + esc(std.name) + ".</b> Key concepts: " + Object.keys(std.keys).map(function (L) { return "<b>" + L + "</b>) " + esc(std.keys[L]); }).join("; ") + ".</p>");
  }
  var packs = PACKS.filter(function (p) { return p.family === f.id; });
  [1, 2, 3].forEach(function (lvl) {
    var group = packs.filter(function (p) { return (p.level || 2) === lvl; }).sort(function (a, b) { return words(a.passage) - words(b.passage); });
    if (!group.length) return;
    out.push("<h3>Level " + lvl + " · " + group.length + " packs · " + group.reduce(function (a, p) { return a + p.claims.length; }, 0) + " questions</h3>");
    group.forEach(function (p, pi) {
      var wc = words(p.passage), tier = tierOf(wc);
      out.push("<h4>" + (pi + 1) + ". " + esc(p.title) + "</h4>");
      out.push('<p class="meta">id ' + esc(p.id) + " · " + esc(p.kind) + " · level " + lvl + " · " + wc + " words (" + tier + " tier, drawn mostly on levels " + levelsFor(tier) + ") · " + p.claims.length + " questions · standards " +
        p.claims.map(function (c) { return c.sol; }).filter(function (x, i, a) { return a.indexOf(x) === i; }).sort().join(", ") + "</p>");
      out.push('<div class="stim">' + p.passage + "</div>");
      p.claims.forEach(function (c, ci) {
        var corr = Array.isArray(c.correct) ? c.correct : [c.correct];
        out.push('<div class="q"><p><b>Q' + (ci + 1) + "</b> <span class=\"n\">[" + esc(c.sol) + "]</span> " + esc(c.stem) + "</p><ol type=\"A\">");
        c.choices.forEach(function (ch) {
          var ok = corr.indexOf(ch.letter) !== -1;
          out.push("<li" + (ok ? ' class="ok"' : "") + ">" + ch.text + (ok ? ' <span class="key">✔</span>' : "") + "</li>");
        });
        out.push("</ol><p class=\"meta\">Key: <b>" + corr.join(", ") + "</b>" + (corr.length > 1 ? " (Select TWO)" : "") + "</p></div>");
      });
    });
  });
});
out.push("</body></html>");
process.stdout.write(out.join("\n"));
