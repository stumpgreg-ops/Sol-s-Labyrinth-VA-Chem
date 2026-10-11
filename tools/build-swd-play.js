/* Builds swd-play.html (the main game's modes with SWD questions, Path 2) from index.html: node tools/build-swd-play.js
   Run it after index.html changes. What changes from index.html:
   - the first script reads the link (?p=player&band=G3&subject=math&mode=maze) and the SWD player's accommodations, then
     gives every localStorage key this page uses the prefix "swd.<player>." (the way the Canvas build keeps its saves
     apart), so the SWD players' saves never mix with each other or with the Chemistry game's
   - the Chemistry question files (js/content*.js, js/acc-chem.js) are replaced by the SWD banks and js/swd/swd-engine.js
   - the title screen is the grade's subjects; js/swd/swd-play-ui.js goes straight to the chosen subject and mode */
var fs = require("fs"), path = require("path");
var root = path.join(__dirname, "..");
var html = fs.readFileSync(path.join(root, "index.html"), "utf8");
var V = (/v=([\d.]+)/.exec(html) || [0, "1"])[1];
function rep(re, to, what) { if (!re.test(html)) throw new Error("build-swd-play: could not find " + what); html = html.replace(re, to); }
rep(/<title>[^<]*<\/title>/, "<title>Sol's Labyrinth · SWD · main game modes</title>", "the title");
rep(/<script>window\.SOL_STATE = "VA";<\/script>/, [
  "<script>",
  "  /* SWD: who is playing, the grade, subject and mode (from swd.html), and this player's own save space */",
  "  (function () {",
  "    var q = new URLSearchParams(location.search), g = {};",
  "    /* the Canvas build is one page: what to play comes in sessionStorage instead of the link */",
  "    if (!q.get(\"band\")) { try { g = JSON.parse(sessionStorage.getItem(\"solSWD.play\") || \"{}\") || {}; } catch (e) {} }",
  "    function v(k, d) { return q.get(k) || g[k] || d; }",
  "    var pid = String(v(\"p\", \"guest\")).replace(/[^A-Za-z0-9_-]/g, \"\");",
  "    var P = window.SWD_PLAY = { pid: pid, band: v(\"band\", \"G2\"), subject: v(\"subject\", \"math\"), mode: v(\"mode\", \"maze\"), acc: {} };",
  "    if (!/^G[2-6]$/.test(P.band)) P.band = \"G2\";",
  "    try { var d = JSON.parse(localStorage.getItem(\"swd.v1.p.\" + pid) || \"{}\"); P.acc = d.acc || {}; } catch (e) {}",
  "    var prefix = \"swd.\" + pid + \".\", S = Storage.prototype, get = S.getItem, set = S.setItem, rem = S.removeItem, keyAt = S.key;",
  "    function mine(st) { try { return st === window.localStorage; } catch (e) { return false; } }",
  "    S.getItem = function (k) { return get.call(this, mine(this) ? prefix + k : k); };",
  "    S.setItem = function (k, v) { return set.call(this, mine(this) ? prefix + k : k, v); };",
  "    S.removeItem = function (k) { return rem.call(this, mine(this) ? prefix + k : k); };",
  "    S.key = function (i) { var k = keyAt.call(this, i); return mine(this) && k && k.indexOf(prefix) === 0 ? k.slice(prefix.length) : k; };",
  "    try { localStorage.setItem(\"afterHours.v1.gameMode\", P.mode); localStorage.setItem(\"afterHours.v1.strand\", \"ALL\"); } catch (e) {}",
  "  })();",
  "  window.SOL_STATE = \"VA\";",
  "</script>",
  "<style>",
  "  .swd-back { position: absolute; left: 12px; top: 12px; z-index: 30; text-decoration: none; }",
  "  #eoc-passage .swd-visual { display: flex; flex-wrap: wrap; gap: 8px; justify-content: center; margin: 6px 0; }",
  "  #eoc-passage .swd-visual svg, #read-passage .swd-visual svg { max-width: 100%; height: auto; }",
  "  #eoc-passage .swd-q, #read-passage .swd-q { font-weight: 700; }",
  "  .swd-table { border-collapse: collapse; background: #fbf7ea; color: #1d1a10; font-size: 13px; }",
  "  .swd-table td, .swd-table th { border: 1px solid #c9bfa0; padding: 3px 6px; }",
  "  .swd-cal { border-collapse: collapse; background: #fbf7ea; color: #1d1a10; font-size: 11px; }",
  "  .swd-cal td, .swd-cal th { border: 1px solid #c9bfa0; padding: 2px 3px; }",
  "  .money-row, .objects { display: flex; flex-wrap: wrap; gap: 4px; justify-content: center; }",
  "  .price-tag { display: inline-flex; flex-direction: column; align-items: center; background: #fbf3d9; color: #1d1a10; border-radius: 8px; padding: 4px 10px; border: 2px solid #c79a2b; }",
  "  .price-tag .pt-price { font-weight: 800; color: #a32a14; }",
  "  .frac { display: inline-flex; flex-direction: column; align-items: center; line-height: 1; vertical-align: middle; }",
  "  .frac sup { border-bottom: 2px solid currentColor; }",
  "  .pic { font-size: 2.4em; }",
  "</style>"
].join("\n"), "the SOL_STATE script");
/* the title screen: the grade's subjects (js/swd/swd-engine.js fills the cards) */
rep(/<p class="kicker" id="title-kicker">[^<]*<\/p>/, '<p class="kicker" id="title-kicker">SWD Contained · Path 2 · the main game\'s modes</p>', "the kicker");
rep(/<p class="ver">[^<]*<\/p>/, '<p class="ver">SWD 1.0.0 · engine from the Chemistry game ' + V + "</p>", "the version line");
rep(/<p class="tag">[\s\S]*?<\/p>/, '<p class="tag">Pick a subject. Read the question in the side panel, then find the matching letter.</p>', "the tag line");
rep(/<div class="packs unit-packs">[\s\S]*?\n      <\/div>\n/, '<div class="packs unit-packs"><!-- filled by js/swd/swd-engine.js --></div>\n', "the unit cards");
rep(/<p class="howto">[\s\S]*?<\/p>\n/, "", "the how-to paragraph");
/* the scripts: SWD banks in place of the Chemistry question files */
var swd = ["swd-core", "swd-art", "swd-bank-p1", "swd-bank-math", "swd-bank-reading", "swd-bank-life", "swd-engine"].map(function (f) { return '  <script src="js/swd/' + f + '.js?v=' + V + '"></script>'; }).join("\n");
rep(/  <script src="js\/content\.js[^\n]*\n(  <script src="js\/content\d+\.js[^\n]*\n)+/, swd + "\n", "the content scripts");
rep(/  <script src="js\/acc-chem\.js[^\n]*\n/, "", "acc-chem.js");
rep(/(  <script src="js\/game\.js[^\n]*\n)/, '$1  <script src="js/swd/swd-play-ui.js?v=' + V + '"></script>\n', "game.js");
/* "lab notes" is the Chemistry game's word for the reading in the side panel */
html = html.replace(/Read the lab notes/g, "Read the question").replace(/>Lab notes</g, ">Read this<");
html = html.replace("<!DOCTYPE html>", "<!DOCTYPE html>\n<!-- Built by tools/build-swd-play.js from index.html: edit that, not this file. -->");
fs.writeFileSync(path.join(root, "swd-play.html"), html);
console.log("swd-play.html written (" + Math.round(html.length / 1024) + " KB)");
