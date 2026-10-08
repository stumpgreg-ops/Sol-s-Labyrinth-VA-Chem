/* Chemistry 1.5: build js/acc-chem.js, the word lists for the accommodations (js/accommodations.js), from
   tools/acc/chem-def.json and tools/acc/chem-tr.json:  node tools/build-acc-chem.js
     def  short definitions of the difficult EVERYDAY and ACADEMIC words in the lab notes, questions and answers.
          Never chemistry content, lab equipment, units, measurement or data words: those are what the questions
          assess. Written for this game; review them like the questions.
     tr   a word-to-word dictionary of every word in the questions and answers (es Spanish, ar Arabic, fa Farsi,
          ru Russian), in the sense the question uses; "—" where a language has no word-to-word equivalent
          (articles, chemical symbols, formula pieces). Machine-drafted: have a bilingual colleague check them.
   The script also reports question-and-answer words with no translation (new or reworded questions) and
   definitions of words that no longer appear in the bank, so the lists can be topped up when questions change. */
var fs = require("fs"), path = require("path"), vm = require("vm");
var root = path.join(__dirname, "..");
var def = JSON.parse(fs.readFileSync(path.join(__dirname, "acc", "chem-def.json"), "utf8"));
var tr = JSON.parse(fs.readFileSync(path.join(__dirname, "acc", "chem-tr.json"), "utf8"));
var ctx = { window: {}, document: {}, console: console }; ctx.window.window = ctx.window; vm.createContext(ctx);
["content.js", "content2.js", "content3.js", "content4.js", "content5.js", "content6.js"].forEach(function (f) {
  vm.runInContext(fs.readFileSync(path.join(root, "js", f), "utf8"), ctx, { filename: f });
});
/* the same word rule as js/accommodations.js */
var RE = /[A-Za-z][A-Za-z'’-]*[A-Za-z]|[A-Za-z]/g;
function norm(w) { return String(w).replace(/’/g, "'").replace(/'s$/i, "").replace(/'$/, "").toLowerCase(); }
function strip(h) { return String(h || "").replace(/<[^>]+>/g, " "); }
var qa = {}, all = {};
ctx.window.HEIST_PACKS.forEach(function (p) {
  (strip(p.passage).match(RE) || []).forEach(function (w) { all[norm(w)] = 1; });
  p.claims.forEach(function (c) {
    [c.stem].concat((c.choices || []).map(function (x) { return x.text; })).forEach(function (t) {
      (strip(t).match(RE) || []).forEach(function (w) { qa[norm(w)] = 1; all[norm(w)] = 1; });
    });
  });
});
var LANGS = ["es", "ar", "fa", "ru"], bad = [];
Object.keys(tr).forEach(function (w) {
  var v = tr[w];
  if (!v || typeof v !== "object" || LANGS.some(function (l) { return typeof v[l] !== "string" || !v[l].trim(); })) bad.push(w);
});
Object.keys(def).forEach(function (w) { if (typeof def[w] !== "string" || !def[w].trim()) bad.push("def:" + w); });
if (bad.length) throw new Error("tools/build-acc-chem.js: incomplete entries: " + bad.slice(0, 20).join(", "));
var missing = Object.keys(qa).filter(function (w) { return !tr[w]; });
var staleTr = Object.keys(tr).filter(function (w) { return !qa[w]; }), staleDef = Object.keys(def).filter(function (w) { return !all[w]; });
var sortObj = function (o) { var out = {}; Object.keys(o).sort().forEach(function (k) { out[k] = o[k]; }); return out; };
var data = { def: sortObj(def), tr: sortObj(tr) };
fs.writeFileSync(path.join(root, "js", "acc-chem.js"),
  "/* SOL Lab (Virginia Chemistry): the word lists for the accommodations (js/accommodations.js), Chemistry 1.5.\n" +
  "   Built by tools/build-acc-chem.js from tools/acc/chem-def.json and tools/acc/chem-tr.json: edit those, then rebuild.\n" +
  "   def: everyday and academic words only (never chemistry content). tr: every word of the questions and answers. */\n" +
  "window.SOL_ACC_DATA = " + JSON.stringify(data) + ";\n");
console.log("js/acc-chem.js: " + Object.keys(def).length + " definitions, " + Object.keys(tr).length + " dictionary words; " +
  Object.keys(qa).length + " question/answer words, " + missing.length + " without a translation" + (missing.length ? " (" + missing.slice(0, 15).join(", ") + ")" : "") +
  (staleTr.length ? "; " + staleTr.length + " translations of words no longer in the questions" : "") +
  (staleDef.length ? "; " + staleDef.length + " definitions of words no longer in the bank (" + staleDef.slice(0, 10).join(", ") + ")" : ""));
if (missing.length) process.exitCode = 2;
