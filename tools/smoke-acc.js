/* Headless check of the accommodations (js/accommodations.js + js/acc-chem.js): node tools/smoke-acc.js
   (Chemistry 1.5). Off for everyone until a teacher turns them on; the PIN gate; each option's effect on a real
   level (word meanings, the word-to-word dictionary, read aloud, larger text, the slower game); an end date that
   has passed turns an option off; Turn all off; and the word lists never define chemistry content. */
var path = require("path"), fs = require("fs"), http = require("http"), url = require("url");
var { chromium } = require("/opt/node22/lib/node_modules/playwright");
var root = path.join(__dirname, ".."), shots = path.join(__dirname, "shots");
fs.mkdirSync(shots, { recursive: true });
var MIME = { html: "text/html", js: "application/javascript", css: "text/css", json: "application/json", png: "image/png" };
var srv = http.createServer(function (req, res) {
  var f = path.join(root, decodeURIComponent(url.parse(req.url).pathname)); if (f.endsWith("/")) f += "index.html";
  fs.readFile(f, function (err, buf) { if (err) { res.writeHead(404); res.end(); return; } res.writeHead(200, { "Content-Type": MIME[f.split(".").pop()] || "application/octet-stream" }); res.end(buf); });
});
var fails = [];
function check(c, m) { if (!c) fails.push(m); console.log((c ? "ok   " : "FAIL ") + m); }
(async function () {
  await new Promise(function (r) { srv.listen(0, r); });
  var base = "http://127.0.0.1:" + srv.address().port + "/";
  var glArgs = { args: ["--use-gl=angle", "--use-angle=swiftshader", "--enable-unsafe-swiftshader"] };
  var browser = await chromium.launch(Object.assign({ executablePath: "/opt/pw-browsers/chromium/chrome-linux/chrome" }, glArgs)).catch(function () { return chromium.launch(glArgs); });
  var page = await browser.newPage({ viewport: { width: 1280, height: 720 } });
  var errors = [];
  page.on("pageerror", function (e) { errors.push(e.message); });
  page.on("dialog", function (d) { d.accept(); });
  /* the page's own speech engine stands in for the Chromebook's voice (headless Chromium has none) */
  await page.addInitScript(function () {
    window.__spoken = [];
    Object.defineProperty(window, "SpeechSynthesisUtterance", { configurable: true, writable: true, value: function (t) { this.text = t; } });
    Object.defineProperty(window, "speechSynthesis", { configurable: true, value: { speaking: false, getVoices: function () { return []; }, cancel: function () {},
      addEventListener: function () {}, speak: function (u) { window.__spoken.push(u.text); setTimeout(function () { if (u.onend) u.onend(); }, 60); } } });
  });
  await page.goto(base + "index.html", { waitUntil: "load" }); await page.waitForTimeout(800);

  /* the word lists */
  var lists = await page.evaluate(function () {
    var D = window.SOL_ACC_DATA || {}, def = D.def || {}, tr = D.tr || {};
    var bad = ["isotope", "molarity", "mole", "molar", "valence", "electron", "titration", "buret", "meniscus", "solution", "solute", "density", "precision",
      "accuracy", "variable", "electronegativity", "ionization", "sublimation", "enthalpy", "catalyst", "equilibrium", "pressure", "volume", "celsius", "kelvin", "half-life"];
    return { def: Object.keys(def).length, tr: Object.keys(tr).length, chemDefined: bad.filter(function (w) { return def[w]; }),
      sample: tr.molarity || tr.solution, hasLangs: Object.keys(tr).every(function (w) { var v = tr[w]; return v && v.es && v.ar && v.fa && v.ru; }) };
  });
  console.log("lists", JSON.stringify(lists));
  check(lists.def >= 50 && lists.tr >= 1500 && lists.hasLangs, "the Chemistry word lists are loaded: " + lists.def + " definitions, " + lists.tr + " dictionary words in four languages");
  check(lists.chemDefined.length === 0, "no chemistry content word is defined (they are what the questions test)" + (lists.chemDefined.length ? ": " + lists.chemDefined.join(", ") : ""));

  /* off for everyone until a teacher turns them on */
  var off = await page.evaluate(function () { return { note: !!document.getElementById("acc-note"), big: document.body.classList.contains("acc-big"), k: SolAcc.speedK() }; });
  check(!off.note && !off.big && off.k === 1, "no accommodation is on until a teacher turns it on");

  /* the PIN gate */
  await page.fill("#join-nick", "accommodations");
  await page.waitForSelector("#acc-overlay:not(.hidden)");
  check(await page.evaluate(function () { return document.getElementById("join-nick").value === ""; }), "typing accommodations in the nickname box opens the teacher panel and clears the box");
  await page.fill("#acc-pin", "1111"); await page.click("#acc-pin-go");
  check(/not right/.test(await page.textContent("#acc-msg")) && !(await page.isVisible("#acc-save")), "a wrong PIN is refused");
  await page.fill("#acc-pin", "4826"); await page.click("#acc-pin-go");
  await page.waitForSelector("#acc-save");
  for (var id of ["define", "dict", "audio", "big", "slow"]) await page.check("#acc-" + id);
  await page.selectOption("#acc-lang", "es"); await page.selectOption("#acc-pct", "75");
  await page.screenshot({ path: path.join(shots, "acc-01-panel.png") });
  await page.click("#acc-save");
  var saved = await page.textContent("#acc-msg");
  await page.click("#acc-close");
  var note = await page.textContent("#acc-note");
  check(/word meanings/.test(note) && /Español/.test(note) && /read aloud/.test(note) && /larger text/.test(note) && /75%/.test(note), "Save turns them on and the title screen says which: " + note);

  /* a level */
  await page.click('#title-screen .card[data-family="ALL"]'); await page.waitForSelector("#mode-screen:not(.hidden)");
  await page.click('#mode-packs .card[data-gamemode="maze"]'); await page.waitForSelector("#skill-screen:not(.hidden)"); await page.waitForTimeout(500);
  await page.click("#btn-skill-start"); await page.waitForTimeout(400);
  if (await page.isVisible("#btn-char-confirm")) await page.click("#btn-char-confirm");
  for (var w = 0; w < 60; w++) { await page.mouse.move(100 + w, 300); await page.waitForTimeout(250); if (await page.evaluate(function () { var s = window.SolScene; return !!(s && s.claim && s.readOpen); })) break; }
  for (var i = 0; i < 12; i++) { if (await page.isVisible("#tut-skip")) { await page.click("#tut-skip"); break; } await page.waitForTimeout(250); }
  await page.waitForTimeout(600);
  await page.screenshot({ path: path.join(shots, "acc-02-reading.png") });
  var lv = await page.evaluate(function () {
    var q = function (s) { return document.querySelectorAll(s).length; };
    return { big: document.body.classList.contains("acc-big"), passBtn: q("#read-card .acc-say-pass") + q("#hud .acc-say-pass"), qBtn: q("#eoc-stem .acc-say-q"), chBtn: q("#eoc-choices .acc-say-ch"),
      dict: document.getElementById("eoc-stem").classList.contains("acc-dict"), trWords: q("#eoc-stem .acc-w, #eoc-choices .acc-w"), sents: q("#eoc-passage .acc-s"),
      font: parseFloat(getComputedStyle(document.querySelector("#eoc-passage")).fontSize) };
  });
  console.log("level", JSON.stringify(lv));
  check(lv.big && lv.font >= 16.5, "larger text: the side panel's lab notes are bigger (" + lv.font + " px)");
  check(lv.passBtn >= 1 && lv.qBtn === 1 && lv.chBtn >= 4 && lv.sents >= 2, "read aloud: a Read the passage button, a speaker on the question and on every answer, the lab notes split into sentences");
  check(lv.dict && lv.trWords >= 4, "word-to-word dictionary: the question and answers' words can be clicked (" + lv.trWords + ")");
  /* a click on a word in the question shows it in Spanish */
  if (await page.isVisible("#read-go")) await page.click("#read-go");
  await page.waitForTimeout(300);
  var pop = await page.evaluate(function () {
    var sp = Array.prototype.filter.call(document.querySelectorAll("#eoc-stem .acc-w, #eoc-choices .acc-w"), function (x) { var t = (SOL_ACC_DATA.tr[x.getAttribute("data-w")] || {}).es; return t && t !== "—"; })[0];
    if (!sp) return { none: true };
    sp.click();
    var p = document.getElementById("acc-pop");
    return { word: sp.textContent, shown: p && p.style.display === "block", text: p ? p.textContent : "", es: SOL_ACC_DATA.tr[sp.getAttribute("data-w")].es };
  });
  check(pop.shown && pop.text.indexOf(pop.es) !== -1 && /Español/.test(pop.text), "clicking a question word shows it in Spanish: " + pop.word + " → " + pop.es);
  await page.screenshot({ path: path.join(shots, "acc-03-dictionary.png") });
  await page.keyboard.press("Escape");
  /* a word with a definition, in a passage that has one */
  var defd = await page.evaluate(function () {
    var el = document.createElement("div"); el.className = "passage";
    var w = SOL_ACC_DATA.def.eventually ? "eventually" : Object.keys(SOL_ACC_DATA.def).filter(function (k) { return k.length > 5; })[0];
    var host = document.getElementById("eoc-passage"), keep = host.innerHTML;
    host.innerHTML = '<p><span class="n">(1)</span> The class must ' + w + ' finish.</p>';
    return new Promise(function (r) { setTimeout(function () {
      var sp = host.querySelector('.acc-w.acc-def[data-w="' + w + '"]'), o = { word: w, underlined: !!sp };
      if (sp) { sp.click(); var p = document.getElementById("acc-pop"); o.pop = p.textContent; o.def = SOL_ACC_DATA.def[w]; }
      host.innerHTML = keep; r(o);
    }, 600); });
  });
  check(defd.underlined && defd.pop && defd.pop.indexOf(defd.def) !== -1, "word meanings: a listed word in the lab notes is underlined and a click shows its definition (" + defd.word + ": " + defd.def + ")");
  await page.keyboard.press("Escape");
  /* read aloud: the passage, sentence by sentence, with the one being read highlighted */
  var said = await page.evaluate(function () {
    window.__spoken = [];
    var b = document.querySelector("#hud .acc-say-pass"); b.click();
    var hl = !!document.querySelector("#eoc-passage .acc-s.acc-reading");
    return new Promise(function (r) { setTimeout(function () { r({ n: window.__spoken.length, first: window.__spoken[0] || "", hl: hl, sents: document.querySelectorAll("#eoc-passage .acc-s").length }); }, 1500); });
  });
  check(said.hl && said.n >= 2 && said.n <= said.sents && !/^\(1\)/.test(said.first), "read aloud reads the lab notes sentence by sentence, highlighting each (" + said.n + " read; first: " + said.first.slice(0, 50) + ")");
  var sayQ = await page.evaluate(function () { window.__spoken = []; document.querySelector("#eoc-choices .acc-say-ch").click(); return new Promise(function (r) { setTimeout(function () { r(window.__spoken.slice()); }, 200); }); });
  check(sayQ.length === 1 && /^A\. /.test(sayQ[0]), "an answer's speaker reads its letter and text: " + (sayQ[0] || "").slice(0, 60));
  /* the slower game */
  var slow = await page.evaluate(function () { var s = SolScene; s.update(0, 16); return { k: SolAcc.speedK(), ts: s.time.timeScale, tw: s.tweens.timeScale, ph: s.physics.world.timeScale }; });
  check(slow.k === 0.75 && Math.abs(slow.ts - 0.75) < 1e-6 && Math.abs(slow.ph - 1 / 0.75) < 1e-6, "slower game: the level runs at 75 % (timers " + slow.ts + ", physics step " + slow.ph.toFixed(3) + ")");
  /* it stays slow: through the game's stuck-slow-motion watchdog (1.2 s) and after something puts the clock back to 1 */
  var kept = await page.evaluate(function () {
    var s = SolScene, i;
    for (i = 0; i < 180; i++) s.update(0, 16);
    var afterWatchdog = s.time.timeScale;
    s.time.timeScale = 1; s.physics.world.timeScale = 1; s.update(0, 16);
    return { afterWatchdog: afterWatchdog, afterReset: s.time.timeScale, ph: s.physics.world.timeScale };
  });
  check(Math.abs(kept.afterWatchdog - 0.75) < 1e-6 && Math.abs(kept.afterReset - 0.75) < 1e-6 && Math.abs(kept.ph - 1 / 0.75) < 1e-6, "slower game stays on through the slow-motion watchdog and after a reset to normal speed " + JSON.stringify(kept));

  /* an end date that has passed turns that option off */
  var ended = await page.evaluate(function () { var n = SolAcc.settings(); n.big.until = "2020-01-01"; SolAcc.set(n); return { big: document.body.classList.contains("acc-big"), audio: SolAcc.on("audio") }; });
  check(!ended.big && ended.audio, "an option whose end date has passed is off; the others stay on");
  /* Turn all off */
  await page.evaluate(function () { SolAcc.set({}); });
  await page.waitForTimeout(300);
  /* (the word pop-up keeps its own speaker; it is hidden) */
  var none = await page.evaluate(function () { var out = function (x) { return !x.closest("#acc-pop"); };
    return { btns: Array.prototype.filter.call(document.querySelectorAll(".acc-say"), out).length, words: document.querySelectorAll(".acc-w").length, k: SolAcc.speedK() }; });
  check(none.btns === 0 && none.words === 0 && none.k === 1, "turning them all off removes every speaker, word mark and the slowdown");
  check(errors.length === 0, "no page errors" + (errors.length ? ": " + errors.slice(0, 4).join(" | ") : ""));
  await browser.close(); srv.close();
  console.log(fails.length ? fails.length + " FAILED" : "ALL OK");
  process.exit(fails.length ? 1 : 0);
})().catch(function (e) { console.error(e); process.exit(2); });
