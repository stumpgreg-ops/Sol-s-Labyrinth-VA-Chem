#!/usr/bin/env node
/* Walks an imagined student through all 100 levels of Full review with the game's own
   adaptive picker, and writes the questions they would meet as one HTML document:
     node tools/simulate-student.js > walkthrough.html
     node tools/simulate-student.js average 7   (profile, random seed)

   The picker is the one in js/game.js nextClaim(): unused items first, items from lab notes
   not yet used this level first, the level's length band (60%–160% of the stamina target)
   when at least 8 items fit, then a weighted draw that favours items near the student's
   ability, near the target length, and (on Full review) from the standards the student has
   missed most. The ability starts at 1.6 and moves +0.12 on a clean right answer and -0.18
   on a wrong letter, clamped to 1–3, exactly as adaptEvent() does. Questions per level are
   5, 6 from level 55 and 7 from level 80 (game.js levelFor). Realms and shooter levels follow
   js/realms.js and js/modes.js.

   Student profiles are the chance of answering an item right at each item level:
     average   L1 85% · L2 70% · L3 55%   (a typical high-school chemistry student)
     strong    L1 95% · L2 88% · L3 75%
     struggling L1 70% · L2 50% · L3 35% */
var fs = require("fs"), path = require("path"), vm = require("vm");
var root = path.join(__dirname, "..");
var profileName = (process.argv[2] || "average").toLowerCase(), seed = parseInt(process.argv[3] || "7", 10);
var PROFILES = { average: { 1: 0.85, 2: 0.70, 3: 0.55 }, strong: { 1: 0.95, 2: 0.88, 3: 0.75 }, struggling: { 1: 0.70, 2: 0.50, 3: 0.35 } };
var P = PROFILES[profileName] || PROFILES.average;

var files = fs.readdirSync(path.join(root, "js")).filter(function (f) { return /^content\d*\.js$/.test(f); })
  .sort(function (a, b) { return num(a) - num(b); });
function num(f) { var m = f.match(/content(\d*)\.js/); return m[1] === "" ? 0 : parseInt(m[1], 10); }
var W = {}; W.window = W; W.global = W;
files.forEach(function (f) { vm.runInNewContext(fs.readFileSync(path.join(root, "js", f), "utf8"), W, { filename: f }); });
var pack = W.heistBuildPack("ALL", "ALL"), claims = pack.claims, FAM = {};
W.HEIST_FAMILIES.forEach(function (f) { FAM[f.id] = f; });

/* seeded random so the document is reproducible */
var s32 = seed >>> 0;
function rnd() { s32 |= 0; s32 = s32 + 0x6D2B79F5 | 0; var t = Math.imul(s32 ^ s32 >>> 15, 1 | s32); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; }

var REALMS = ["Midgard", "Niflheim", "Jotunheim", "Muspelheim", "Svartalfheim", "Vanaheim", "Alfheim", "Helheim", "Asgard", "Ragnarok"];
var MODES = { 2: "Eagle Swoop (shooter)", 4: "Rune Rocks (shooter)", 6: "Sun Chariot (shooter)", 8: "Wolf Ring (shooter)" };
function realmOf(n) { return REALMS[Math.min(9, Math.floor((n - 1) / 10))]; }
function modeOf(n) { var slot = ((n - 1) % 10) + 1; if (slot === 10) return "Fenrir boss level (maze)"; return MODES[slot] || "maze"; }
function extractsFor(n) { return n >= 80 ? 7 : n >= 55 ? 6 : 5; }
function levelLabel(a) { return a < 1.5 ? 1 : a < 2.5 ? 2 : 3; }
function esc(s) { return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;"); }

var adapt = { ability: 1.6, strands: {}, seen: 0 }, used = [], levels = [], totals = { right: 0, wrong: 0, byLevel: { 1: 0, 2: 0, 3: 0 } };
for (var n = 1; n <= 100; n++) {
  var wantWords = W.heistTargetWords(n), nightPacks = [], rows = [], k;
  for (k = 0; k < extractsFor(n); k++) {
    var unused = function (c) { return used.indexOf(c.id) === -1; };
    var pool = [], fresh = [], i;
    for (i = 0; i < claims.length; i++) if (!claims[i].isPartB && unused(claims[i])) { pool.push(i); if (nightPacks.indexOf(claims[i].packId) === -1) fresh.push(i); }
    if (!pool.length) {
      used = used.slice(-20);
      for (i = 0; i < claims.length; i++) if (!claims[i].isPartB && unused(claims[i])) pool.push(i);
      fresh = pool.slice();
    }
    var inBand = function (idx) { var cw = claims[idx].words; return !cw || (cw >= wantWords * 0.6 && cw <= wantWords * 1.6); };
    var bandFresh = fresh.filter(inBand), bandAll = pool.filter(inBand), BAND_MIN = 8;
    if (bandFresh.length >= BAND_MIN) pool = bandFresh;
    else if (bandAll.length >= BAND_MIN) pool = bandAll;
    else if (fresh.length) pool = fresh;
    var weights = [], total = 0, target = adapt.ability;
    for (i = 0; i < pool.length; i++) {
      var c = claims[pool[i]], w = Math.exp(-Math.abs((c.level || 2) - target) * 1.3);
      if (c.words) w *= Math.exp(-Math.abs(c.words - wantWords) / (0.18 * wantWords));
      var rec = adapt.strands[c.strand || "CH.1"], acc = rec ? (rec.r + 1) / (rec.r + rec.w + 2) : 0.5;
      w *= 1 + (1 - acc) * 0.9;
      weights.push(w); total += w;
    }
    var r = rnd() * total;
    for (i = 0; i < pool.length; i++) { r -= weights[i]; if (r <= 0) break; }
    var pick = claims[pool[Math.min(i, pool.length - 1)]];
    if (nightPacks.indexOf(pick.packId) === -1) nightPacks.push(pick.packId);
    used.push(pick.id);
    /* the student answers */
    var abilityBefore = adapt.ability, right = rnd() < (P[pick.level] || P[2]);
    var st = pick.strand || "CH.1", sr = adapt.strands[st] || (adapt.strands[st] = { r: 0, w: 0 });
    if (right) { sr.r++; adapt.ability = Math.min(3, adapt.ability + 0.12); totals.right++; }
    else { sr.w++; adapt.ability = Math.max(1, adapt.ability - 0.18); totals.wrong++; }
    adapt.seen++; totals.byLevel[pick.level]++;
    rows.push({ c: pick, right: right, ability: abilityBefore });
  }
  levels.push({ n: n, want: wantWords, rows: rows, ability: adapt.ability });
}

var out = [];
out.push('<!DOCTYPE html><html><head><meta charset="utf-8"><title>SOL Lab · Chemistry · what an average student sees</title>');
out.push('<style>body{font-family:Arial,sans-serif;font-size:10.5pt;line-height:1.3} h1{font-size:19pt} h2{font-size:15pt;margin-top:26pt;border-bottom:2px solid #999} h3{font-size:12pt;margin:16pt 0 4pt} table{border-collapse:collapse;margin:4pt 0 8pt;width:100%} td,th{border:1px solid #bbb;padding:2pt 5pt;font-size:9.5pt;vertical-align:top;text-align:left} th{background:#eee} .meta{color:#666;font-size:9.5pt} .r{color:#0a6} .w{color:#c33} .lv{white-space:nowrap}</style></head><body>');
out.push("<h1>SOL Lab · Virginia EOC Chemistry — the questions an average student meets, levels 1–100</h1>");
out.push('<p class="meta">Profile: <b>' + esc(profileName) + "</b> (right-answer chance L1 " + Math.round(P[1] * 100) + "% · L2 " + Math.round(P[2] * 100) + "% · L3 " + Math.round(P[3] * 100) + "%), Full review, random seed " + seed + ". Generated by tools/simulate-student.js with the game's own picker rules. Re-run with another seed to see a different but equally typical path.</p>");
out.push("<h2>How to read this</h2><p>The game keeps an <b>ability</b> score from 1 to 3 for the student. It starts at 1.6, rises 0.12 for every clean right answer and falls 0.18 for every wrong letter. Each question is drawn from items near that ability and near the level's <b>target length</b> for the lab notes (about 65 words at level 1, growing 5 words every 3 levels to about 225 by level 99), and on Full review it leans toward the standards the student has been missing. Every 10 levels is a realm; levels 2, 4, 6 and 8 of each realm are shooter levels with the same questions; every 10th level is a Fenrir boss level. Questions per level: 5, then 6 from level 55 and 7 from level 80.</p>");
out.push("<p>For an average student the ability settles near 2, so most of what they see is <b>level 2</b> material, with level 1 items when they slip and level 3 items after a run of right answers. The lab notes grow from 60-word tiny notes to 170–180-word long notes as the levels rise. <span class=\"r\">✔</span> marks an item this simulated student got right, <span class=\"w\">✘</span> one they missed.</p>");
out.push("<h2>Summary</h2><table><tr><th>Levels</th><th>Realm</th><th>Ability at end</th><th>Student level shown</th><th>Target notes (words)</th><th>Items by level (L1 / L2 / L3)</th><th>Mean notes length</th></tr>");
for (var b = 0; b < 10; b++) {
  var chunk = levels.slice(b * 10, b * 10 + 10), items = [].concat.apply([], chunk.map(function (L) { return L.rows; }));
  var byL = { 1: 0, 2: 0, 3: 0 }; items.forEach(function (x) { byL[x.c.level]++; });
  var mean = Math.round(items.reduce(function (a, x) { return a + (x.c.words || 0); }, 0) / items.length);
  var last = chunk[chunk.length - 1];
  out.push("<tr><td>" + chunk[0].n + "–" + last.n + "</td><td>" + REALMS[b] + "</td><td>" + last.ability.toFixed(2) + "</td><td>" + levelLabel(last.ability) + "</td><td>" + chunk[0].want + "–" + last.want + "</td><td>" + byL[1] + " / " + byL[2] + " / " + byL[3] + "</td><td>" + mean + "</td></tr>");
}
out.push("</table>");
var totalQ = totals.right + totals.wrong;
out.push('<p class="meta">Over 100 levels: ' + totalQ + " questions (" + totals.right + " right, " + totals.wrong + " wrong, " + Math.round(100 * totals.right / totalQ) + "%). Items by level: L1 " + totals.byLevel[1] + " · L2 " + totals.byLevel[2] + " · L3 " + totals.byLevel[3] + ". The bank holds " + claims.length + " questions, so items start to come round again in the last third; the picker keeps the 20 most recent out.</p>");

out.push("<h2>Level by level</h2>");
levels.forEach(function (L) {
  out.push("<h3>Level " + L.n + " · " + realmOf(L.n) + " · " + modeOf(L.n) + " · " + L.rows.length + " questions · target ≈ " + L.want + " words · student level " + levelLabel(L.rows[0].ability) + " (ability " + L.rows[0].ability.toFixed(2) + ")</h3>");
  out.push("<table><tr><th>#</th><th>Unit · SOL</th><th>Lab notes (words · level)</th><th>Question</th><th>Key</th><th></th></tr>");
  L.rows.forEach(function (x, i) {
    var c = x.c, key = Array.isArray(c.correct) ? c.correct.join(", ") : c.correct;
    out.push("<tr><td>" + (i + 1) + "</td><td class=\"lv\">" + esc((FAM[c.family] || {}).short || c.family) + " · " + esc(c.sol) + "</td><td>" + esc(c.packTitle) + " (" + c.words + " w · L" + c.level + ")</td><td>" + esc(c.stem) + "</td><td>" + key + "</td><td>" + (x.right ? '<span class="r">✔</span>' : '<span class="w">✘</span>') + "</td></tr>");
  });
  out.push("</table>");
});
out.push("</body></html>");
process.stdout.write(out.join("\n"));
