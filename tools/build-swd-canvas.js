/* Build the Canvas (LMS) version of the SWD Contained edition: node tools/build-swd-canvas.js
   (run node tools/build-swd-play.js first if index.html changed.)

   The same Canvas set-up as the Chemistry game (tools/build-canvas.js): nothing is hosted outside the school's Canvas.
   Canvas runs the scripts of a small uploaded page but not of a big one, and a small page can read files next to it
   in its folder with a relative <script src>. So the game is:
     SOLLab-SWD.html          the starter page (a few KB): the loading screen and one <script src>
     SOLLab-SWD-game.js       the loader (tools/appsscript/loader.js), the manifest and the list of data files
     SOLLab-SWD-data-NN.js    the gzip bundle (no music) as base64, in pieces of 576 KB
   The bundle holds BOTH SWD pages: swd.html (the selection screen and the new modes) and swd-play.html (the main
   game's modes for Path 2). Links between Canvas files are not dependable, so the Canvas game is one page: choosing a
   main-game mode puts what to play in sessionStorage ("solSWD.play") and reloads, and SOLLab-SWD-game.js then picks
   the swd-play manifest; "SWD menu" clears it and reloads. One embed code for everything.
   Saves carry the prefix solReading.va-swd: (the loader's canvasStorage), so they never mix with the Chemistry or
   Reading games' saves on the same Canvas.

   Writes dist/canvas/SWD/, dist/canvas/SOL Lab SWD.zip (first-time setup) and dist/canvas/SOL Lab SWD update.zip
   (the .js files only). Each zip carries a READ ME with the Canvas steps and the embed code. */
var fs = require("fs"), path = require("path"), cp = require("child_process");
var PB = require("./pack-bundle");
var root = path.join(__dirname, ".."), dist = path.join(root, "dist"), outAll = path.join(dist, "canvas"), out = path.join(outAll, "SWD");
var base = "SOLLab-SWD", game = base + "-game.js", LABEL = "Sol's Labyrinth · SWD Contained", CANVAS_ID = "va-swd";
var zipFull = "SOL Lab SWD.zip", zipUpd = "SOL Lab SWD update.zip";

var swdHtml = fs.readFileSync(path.join(root, "swd.html"), "utf8");
var playHtml = fs.readFileSync(path.join(root, "swd-play.html"), "utf8");
var version = (swdHtml.match(/\?v=([0-9.]+)/) || [0, "1.0.0"])[1];

/* ── the files: what the two pages load (no music, no Chemistry questions, no tooling) ── */
var SKIP_DIRS = { "tools": 1, "dist": 1, "docs": 1, "appsscript": 1, "teacher": 1, ".git": 1, "node_modules": 1, ".claude": 1, "assets/music": 1 };
var SKIP_FILES = { "index.html": 1, "admin.html": 1, "swd.html": 1, "swd-play.html": 1, "js/admin.js": 1, "js/acc-chem.js": 1, "js/standards-chm.js": 1, ".gitignore": 1 };
var files = PB.listFiles(root, SKIP_DIRS, function (rel, n) {
  return SKIP_FILES[rel] || /^js\/content\d*\.js$/.test(rel) || /\.(md|zip)$/i.test(n) || n === ".DS_Store" || n === "Thumbs.db";
});
var A = PB.splitPage(swdHtml, files, "swd.html"), B = PB.splitPage(playHtml, files, "swd-play.html");

/* ── pack: both pages' markup, then the files ── */
var packed = PB.pack(root, files, [["__page.html", Buffer.from(A.headStyles + "\n" + A.body)], ["__page-play.html", Buffer.from(B.headStyles + "\n" + B.body)]]);
var gz = packed.gz;
var manifest = { state: "SWD", version: version, hash: packed.hash, bytes: gz.length, files: files.length, parts: [], body: A.bodyClass, css: A.css, scripts: A.scripts };
var PLAY = { page: "__page-play.html", body: B.bodyClass, css: B.css, scripts: B.scripts };

/* ── the data files: 576 KB of bundle each (768 KB of base64) ── */
fs.mkdirSync(out, { recursive: true });
var PIECE = 576 * 1024, data = [];
for (var o = 0, n = 1; o < gz.length; o += PIECE, n++) {
  var name = base + "-data-" + (n < 10 ? "0" : "") + n + ".js";
  data.push(name);
  fs.writeFileSync(path.join(out, name), "/* " + LABEL + " v" + version + ": game data " + n + " (open " + base + ".html, not this file) */\n" +
    "solPart(" + (n - 1) + "," + JSON.stringify(manifest.hash) + ',"' + gz.subarray(o, o + PIECE).toString("base64") + '");\n');
}

/* ── the game file: the manifest (the selection screen, or the main game when sessionStorage says so), then the loader ── */
var loaderJs = fs.readFileSync(path.join(__dirname, "appsscript", "loader.js"), "utf8");
fs.writeFileSync(path.join(out, game), "/* " + LABEL + " v" + version + " (open " + base + ".html, not this file) */\n" +
  "window.SOL_CANVAS_ID = " + JSON.stringify(CANVAS_ID) + ";\n" +
  "window.SOL_PARTS = " + JSON.stringify({ manifest: manifest, files: data }) + ";\n" +
  "/* Path 2's main-game modes: swd.html set solSWD.play and reloaded this page */\n" +
  "(function () { var play = null; try { play = sessionStorage.getItem(\"solSWD.play\"); } catch (e) {}\n" +
  "  if (play) { var P = " + JSON.stringify(PLAY) + "; for (var k in P) window.SOL_PARTS.manifest[k] = P[k]; } })();\n" +
  loaderJs + "\n");

/* ── the starter page ── */
var early = "<script>(function(){var n=document.getElementById('sol-noscript');if(n)n.parentNode.removeChild(n);" +
  "var blocked=[];document.addEventListener('securitypolicyviolation',function(e){var k=(e.effectiveDirective||e.violatedDirective)+' '+String(e.blockedURI).slice(0,12);" +
  "if(blocked.indexOf(k)>=0)return;blocked.push(k);var d=document.getElementById('sol-blocked');if(!d){d=document.createElement('div');d.id='sol-blocked';" +
  "d.setAttribute('style','position:fixed;left:8px;bottom:8px;z-index:100000;background:#3a1a14;color:#ffd8c8;border:1px solid #ff8b7a;border-radius:8px;padding:6px 10px;font:13px system-ui,sans-serif;max-width:90vw');" +
  "document.body.appendChild(d);}d.textContent='Canvas blocked part of the game: '+blocked.join(', ');});" +
  "window.addEventListener('error',function(e){var m=document.querySelector('#sol-boot .msg');if(m&&document.getElementById('sol-boot'))m.textContent='The game hit an error: '+(e.message||e)+' (line '+(e.lineno||'?')+')';});" +
  "window.solMissing=function(f){var m=document.querySelector('#sol-boot .msg');if(m)m.textContent='Can\\'t find '+f+'. Upload it to the same Canvas folder as this page, with the same name.';};})();</script>\n";
var starter = [
  "<!DOCTYPE html>",
  '<html lang="en">',
  "<head>",
  '<meta charset="utf-8" />',
  '<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />',
  "<title>" + LABEL + "</title>",
  "<style>",
  /* no music files in this build: the main game's music buttons, picker and HUD slider go */
  "#btn-music, #music-pick, #btn-music-hud, #music-vol-hud { display: none !important; }",
  "html, body { margin: 0; height: 100%; background: #07080d; }",
  "#sol-boot { position: fixed; inset: 0; z-index: 99999; display: flex; flex-direction: column; align-items: center; justify-content: center;",
  "  gap: 18px; background: #07080d; color: #ece9e1; font: 600 18px/1.4 system-ui, sans-serif; text-align: center; padding: 16px; }",
  "#sol-boot .bar { width: min(420px, 80vw); height: 14px; border-radius: 7px; background: #232838; overflow: hidden; }",
  "#sol-boot .fill { height: 100%; width: 0; background: linear-gradient(90deg, #f5c842, #4fd37b); transition: width .25s; }",
  "#sol-boot .msg { font-weight: 400; font-size: 15px; opacity: .85; max-width: 520px; }",
  "#sol-boot button { font: inherit; padding: 8px 18px; border-radius: 8px; border: 0; background: #f5c842; color: #1a1405; cursor: pointer; }",
  "</style>",
  "</head>",
  "<body>",
  '<div id="sol-boot"><div>' + LABEL + '</div><div class="bar"><div class="fill"></div></div><div class="msg">Loading the game…</div>' +
    '<div class="msg" id="sol-noscript" style="font-size:13px;opacity:.7">If this message never changes, the page is not allowed to run the game here (Canvas shows some files as a preview that cannot run games).</div></div>',
  early + '<script src="' + game + '" onerror="solMissing(\'' + game + '\')"></script>',
  "</body>",
  "</html>", ""
].join("\n");
if (Buffer.byteLength(starter) > 64 * 1024) throw new Error("tools/build-swd-canvas.js: the starter page is too big for Canvas to run");
fs.writeFileSync(path.join(out, base + ".html"), starter);
/* an older build's extra data files go */
fs.readdirSync(out).forEach(function (f) { if (f !== base + ".html" && f !== game && data.indexOf(f) < 0) fs.unlinkSync(path.join(out, f)); });

/* ── the READ ME ── */
var EMBED = '<iframe src="/courses/COURSE/files/NUMBER/preview" width="100%" height="500" allowfullscreen="allowfullscreen"></iframe>';
var RULE = "================================================================================", THIN = "--------------------------------------------------------------------------------";
function sec(n, title) { return ["", RULE, "SECTION " + n + "  " + title.toUpperCase(), RULE, ""]; }
function sub(t) { return ["", t, THIN.slice(0, Math.min(80, t.length))]; }
var nFiles = data.length + 2;
function S_inZip(update) {
  return update ? [
    "- " + (nFiles - 1) + " game files (.js): they replace the ones already in your Canvas folder.",
    "- This READ ME. You don't upload it.",
    "There is no .html page in this zip on purpose: the page already in Canvas stays, so your embed code keeps",
    "working and every player's progress and accommodations stay."
  ] : [
    "- " + nFiles + " game files: one small page (" + base + ".html) and the .js files it loads.",
    "  All of them go in the SAME Canvas folder.",
    "- This READ ME. You don't upload it."
  ];
}
function S_setup() {
  return [].concat(
    sub("Step 1 - Upload the files"),
    ["1. Unzip this file on your computer.",
     "2. In Canvas, open your course, then Files.",
     "3. Click + Folder and make a new folder for the game (for example: Skills Game).",
     "4. Open that folder, click Upload, and select ALL " + nFiles + " game files (" + base + ".html and every .js file).",
     "   If Canvas asks, choose Replace."],
    sub("Step 2 - Find your numbers"),
    ["1. In that folder, click " + base + ".html once to open its preview.",
     "2. Look at the address bar. It looks like this:",
     "      https://yourschool.instructure.com/courses/152432/files/60512345?...",
     "   COURSE is the number after /courses/   (in the example: 152432)",
     "   NUMBER is the number after /files/     (in the example: 60512345)"],
    sub("Step 3 - Put the game on a Page"),
    ["1. Pages > + Page. Name it, for example, \"Sol's Labyrinth Skills\".",
     "2. In the editor, click the </> button (HTML Editor). On some Canvas versions it is at the bottom right.",
     "3. Paste the embed code (SECTION 3) and replace COURSE and NUMBER with your numbers.",
     "4. Click Save, and Publish when you are ready for students.",
     "(An assignment works too, with the same embed code. There are no progress codes to turn in in this game:",
     "see SECTION 4 for the progress report.)"]);
}
function S_embed() {
  return [
    "Paste the embed code with the </> button (HTML Editor) while editing a Page or assignment, then Save.",
    "",
    "THE GAME - NUMBER is the number of " + base + ".html:",
    "",
    "   " + EMBED,
    "",
    "   With the example numbers it would be:",
    "   " + EMBED.replace("COURSE", "152432").replace("NUMBER", "60512345"),
    "",
    "Too short or too tall? Change height=\"500\" (try 600 or 700). Path 1 students with Huge buttons may like 700.",
    "Everything is in this one page: the selection screen, the new games and (Path 2) the main game's modes."
  ];
}
function S_use() {
  return [].concat(
    sub("Players"),
    ["The first screen asks \"Who is playing?\". Add each student who uses this Chromebook (first name or nickname",
     "only). Each player has their own accommodations, levels, progress report and town. Everything stays in this",
     "Chromebook's browser profile; nothing is sent anywhere. A student who uses two Chromebooks has two separate",
     "records."],
    sub("Accommodations (no PIN)"),
    ["The Accommodations panel is on the selection screen. Anyone can change it: the student, a teacher, an aide or",
     "a parent. The presets are a quick start: Path 1 starter, Path 2 starter, Switch user, Shaky hands.",
     "- Hearing and seeing: read aloud (the Chromebook's own voice), voice speed, text size, high contrast, extra",
     "  spacing, coin values printed on the coins.",
     "- Moving and touching: button size, hold to choose, ignore extra taps, hover to choose (head pointer, eye gaze),",
     "  switch scanning (the answers light up one at a time; a switch, Space or a tap anywhere picks the lit one).",
     "- Thinking and pace: 2, 3 or 4 answer choices, 5, 8 or 10 questions a level, game speed, hints, Rune Match",
     "  face up or face down, the Market Day running total.",
     "- Calm screen: no shaking, flashing or bouncing. (This Canvas version has no background music.)"],
    sub("Paths, grades and games"),
    ["Path 1 First Skills (kindergarten to grade 1 skills): Money, Math, Reading, Life Skills.",
     "Path 2: Math, Reading and Life Skills for grade 2, 3, 4, 5 or 6 (each grade has its own levels).",
     "New games for any dexterity: Sol's Path, Market Day, Rune Match, Sort It, Raven Catch (moving targets).",
     "Path 2 also offers the main game's modes (The Labyrinth and five shooters) with the grade's questions; the",
     "\"<- SWD menu\" button goes back. A level is passed with 60% right on the first try."],
    sub("Progress report (IEP data)"),
    ["On the selection screen, Progress report shows, for the player chosen, every skill played (right on the first",
     "try out of answered, with a bar), each game's level and the last levels played. \"Print or save as PDF\" makes",
     "a copy for your records. If printing does not work inside Canvas, take a screenshot, or open the game file in",
     "a new tab (the Canvas file preview) and print from there."]);
}
function S_update(update) {
  return update ? [
    "1. Unzip this file on your computer.",
    "2. In Canvas, open Files and go to the folder that already holds " + base + ".html.",
    "3. Click Upload and select ALL the .js files from the unzipped folder.",
    "4. When Canvas asks, choose Replace for every file.",
    "5. Done. Nothing changes on your Page. Students may need to refresh the page once.",
    "Setting the game up for the first time? Use the full zip (" + zipFull + ") instead."
  ] : [
    "When you get a new version, use the update zip (" + zipUpd + "): upload its files to the same folder and",
    "choose Replace. Do not replace or delete " + base + ".html - your embed code and the players' saved progress",
    "stay with it."
  ];
}
function S_trouble() {
  return [
    "- The game says \"Can't find ...\": that file is missing from the folder. Upload it with exactly the same name.",
    "- Nothing is read aloud: check the Chromebook's sound, and that Read aloud is On (or tap the speaker button).",
    "- The game is too short or too tall: change height=\"500\" in the embed code (try 600 or 700).",
    "- A player's progress is missing: progress lives on one Chromebook and one browser profile. Check that the",
    "  student is on their usual Chromebook and picked their own name under \"Who is playing?\".",
    "- Stuck in a main-game mode: use \"<- SWD menu\" on its start screens, or the Menu button, then Title."
  ];
}
function readme(update) {
  var order = update
    ? [["What's in this zip", S_inZip], ["Update the game already in Canvas", S_update], ["The embed code (copy and paste)", S_embed],
       ["Players, accommodations and the progress report", S_use], ["Troubleshooting", S_trouble]]
    : [["What's in this zip", S_inZip], ["Set up the game in Canvas (first time)", S_setup], ["The embed code (copy and paste)", S_embed],
       ["Players, accommodations and the progress report", S_use], ["Updating to a new version", S_update], ["Troubleshooting", S_trouble]];
  var L = [LABEL + " (life skills, math and reading) - version " + version + (update ? " - UPDATE" : " - FIRST-TIME SETUP"), RULE, "",
    update ? "This zip UPDATES a game that is already in Canvas." : "This zip SETS UP the game in Canvas for the first time.",
    "Jump to a section with Ctrl+F (Cmd+F on a Mac) and its name, like SECTION 4.", "", "CONTENTS"];
  order.forEach(function (o, i) { L.push("  SECTION " + (i + 1) + "  " + o[0]); });
  order.forEach(function (o, i) { L = L.concat(sec(i + 1, o[0]), o[1](update)); });
  L.push("", RULE, "Files in the game: " + (update ? "" : base + ".html, ") + game + ", " + data[0] + " ... " + data[data.length - 1]);
  return L.join("\r\n") + "\r\n";
}
var tmpDir = fs.mkdtempSync(path.join(outAll, ".readme-"));
var RM_FULL = path.join(tmpDir, "READ ME FIRST - Canvas setup.txt"), RM_UPD = path.join(tmpDir, "READ ME FIRST - Canvas update.txt");
fs.writeFileSync(RM_FULL, readme(false));
fs.writeFileSync(RM_UPD, readme(true));
var zip = path.join(outAll, zipFull), upd = path.join(outAll, zipUpd);
[zip, upd].forEach(function (z) { if (fs.existsSync(z)) fs.unlinkSync(z); });
cp.execFileSync("zip", ["-q", "-X", "-j", zip, RM_FULL].concat([base + ".html", game].concat(data).map(function (f) { return path.join(out, f); })));
cp.execFileSync("zip", ["-q", "-X", "-j", upd, RM_UPD].concat([game].concat(data).map(function (f) { return path.join(out, f); })));
fs.rmSync(tmpDir, { recursive: true, force: true });

var mb = function (b) { return (b / 1048576).toFixed(1) + " MiB"; };
console.log("Canvas " + LABEL + " v" + version + ": " + files.length + " files, " + mb(packed.raw.length) + " -> " + mb(gz.length) + " gzip; " + path.relative(root, out) + "/ (" + base + ".html " +
  (Buffer.byteLength(starter) / 1024).toFixed(1) + " KiB, " + game + ", " + data.length + " data files), " + path.relative(root, zip) + " (" + mb(fs.statSync(zip).size) + "), " + path.basename(upd));
