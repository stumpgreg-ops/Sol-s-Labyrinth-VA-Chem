/* Checks every SWD skill generator (js/swd/swd-bank-*.js): node tools/validate-swd.js [runs per skill, default 300]
   Each generated item must have a prompt, 2-5 distinct choices with text or a picture, no "undefined" or "NaN" anywhere, and
   the answer (choices[0]) must not appear again among the distractors. Pairs need two different faces; sorts need a valid bin.
   Also builds a level for every band, subject and mode, and a Market Day task for every band and level. */
var fs = require("fs"), path = require("path"), vm = require("vm");
var root = path.join(__dirname, "..");
var ctx = { console: console, Math: Math, Date: Date, JSON: JSON };
ctx.window = ctx; vm.createContext(ctx);
["swd-core", "swd-art", "swd-bank-p1", "swd-bank-math", "swd-bank-reading", "swd-bank-life"].forEach(function (f) {
  vm.runInContext(fs.readFileSync(path.join(root, "js/swd/" + f + ".js"), "utf8"), ctx, { filename: f + ".js" });
});
var SWD = ctx.SWD, RUNS = Number(process.argv[2]) || 300, fails = [], count = 0, skills = 0;
function bad(s) { return /undefined|NaN|\[object Object\]|Infinity/.test(String(s)); }
var perCode = {};
function fail(code, msg, it) { perCode[code] = (perCode[code] || 0) + 1; if (perCode[code] <= 3 && fails.length < 80) fails.push(code + ": " + msg + (it ? "  " + JSON.stringify(it).slice(0, 300) : "")); }
Object.keys(SWD.SKILLS).forEach(function (band) {
  Object.keys(SWD.SKILLS[band]).forEach(function (subj) {
    SWD.SKILLS[band][subj].forEach(function (k) {
      skills++;
      if (!k.gen && !k.pair && !k.sort) fail(k.code, "no gen, pair or sort");
      for (var t = 1; t <= 5; t++) for (var i = 0; i < RUNS / 5; i++) {
        var r = SWD.rng(1000 * t + i + 7 * skills);
        if (k.gen) {
          var it; try { it = k.gen(r, t); } catch (e) { fail(k.code, "gen threw " + e.message); continue; }
          count++;
          if (!it || !it.prompt) fail(k.code, "no prompt", it);
          else if (it.choices.length < 2 || it.choices.length > 5) fail(k.code, it.choices.length + " choices", it);
          else {
            var texts = it.choices.map(function (c) { return (c.text || "") + "|" + (c.html || ""); });
            if (it.choices.some(function (c) { return !c.text && !c.html; })) fail(k.code, "empty choice", it);
            if (bad(it.prompt) || bad(it.say) || texts.some(bad) || bad(it.hint) || bad(it.visual)) fail(k.code, "bad text", it);
            var ans = it.choices[0], ansKey = (ans.text || "").trim().toLowerCase();
            if (ansKey && it.choices.slice(1).some(function (c) { return (c.text || "").trim().toLowerCase() === ansKey && !c.html; })) fail(k.code, "answer repeated", it);
          }
        }
        if (k.pair) {
          var p; try { p = k.pair(r, t); } catch (e) { fail(k.code, "pair threw " + e.message); continue; }
          var a = SWD.choice(p.a), b = SWD.choice(p.b);
          if ((a.text || "") + (a.html || "") === (b.text || "") + (b.html || "")) fail(k.code, "pair faces equal", p);
          if (bad(a.text) || bad(b.text) || bad(a.html) || bad(b.html) || p.key == null) fail(k.code, "bad pair", p);
        }
        if (k.sort) {
          var s; try { s = k.sort(r, t); } catch (e) { fail(k.code, "sort threw " + e.message); continue; }
          if (!s.bins || s.bins.length < 2 || !(s.bin >= 0 && s.bin < s.bins.length)) fail(k.code, "bad bin", s);
          var si = SWD.choice(s.item); if (bad(si.text) || bad(si.html) || (!si.text && !si.html)) fail(k.code, "bad sort item", s);
        }
      }
    });
  });
});
/* every band, subject and mode makes a level */
var modes = ["path", "raven", "match", "sort"];
SWD.BANDS.forEach(function (b) {
  SWD.SUBJECTS[b.id].forEach(function (s) {
    modes.forEach(function (m) {
      [1, 4, 7, 10, 13, 20].forEach(function (lv) {
        var r = SWD.rng(lv * 31 + m.length);
        if (m === "match") { var ps = SWD.makePairs(b.id, s, lv, 6, r); if (ps.length < 3) fail(b.id + "." + s, "match level " + lv + ": only " + ps.length + " pairs"); }
        else if (m === "sort") { var so = SWD.makeSorts(b.id, s, lv, 8, r); if (!so || so.items.length < 4) fail(b.id + "." + s, "sort level " + lv + ": " + (so ? so.items.length : 0) + " items"); }
        else { var its = SWD.makeLevel(b.id, s, lv, 8, r, m); if (its.length < 8) fail(b.id + "." + s, m + " level " + lv + ": only " + its.length + " items"); }
      });
    });
  });
  for (var lv = 1; lv <= 20; lv++) for (var j = 0; j < 20; j++) {
    var t = SWD.marketTask(b.id, lv, SWD.rng(lv * 100 + j));
    if (!(t.goal > 0) || !t.wallet.length || bad(JSON.stringify(t))) fail(b.id + ".market", "bad task", t);
    var g = t.goal; t.wallet.slice().sort(function (x, y) { return y - x; }).forEach(function (v) { g = g % v; });
    if (g !== 0) fail(b.id + ".market", "goal cannot be made from the wallet", t);
  }
});
console.log(skills + " skills, " + count + " items checked");
if (fails.length) { console.log(fails.join("\n")); console.log("problems per skill: " + JSON.stringify(perCode)); process.exitCode = 1; } else console.log("ok: no problems found");
