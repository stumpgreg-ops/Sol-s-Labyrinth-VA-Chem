/* Headless check of the SWD Contained edition (swd.html and swd-play.html): node tools/smoke-swd.js
   - the selection screen: players, Path 1 / Path 2 and the five separate grades, subjects, games, all with no page errors,
     at a laptop size and in a 500 px tall Canvas frame (nothing wider than the page)
   - accommodations on the selection screen, no PIN: they change the page at once, are saved per player and survive a reload
   - every new mode plays a whole level: Sol's Path, Market Day (exact pay, next dollar, change), Rune Match (face up and
     face down), Sort It, Raven Catch; a wrong answer is crossed out with a hint and the right one then glows; 60 % right
     moves the level up; the progress report lists the skills
   - input accommodations: 2 answer choices, hold to choose (a quick tap does nothing), switch scanning (Space picks the lit one)
   - Menu pauses and asks; Keep playing and Main menu
   - Path 2's main game modes open swd-play.html with the grade's questions, the player's own saves, and only as many maze
     letters as answer choices
   Uses window.SWD_TEST (set before the page loads) so the test can find the right answer; students never have it. */
var path = require("path"), fs = require("fs"), http = require("http"), url = require("url");
var { chromium } = require("/opt/node22/lib/node_modules/playwright");
var root = path.join(__dirname, ".."), shots = path.join(__dirname, "shots");
fs.mkdirSync(shots, { recursive: true });
var MIME = { html: "text/html", js: "application/javascript", css: "text/css", json: "application/json", png: "image/png", webp: "image/webp", mp3: "audio/mpeg" };
var srv = http.createServer(function (req, res) {
  var f = path.join(root, decodeURIComponent(url.parse(req.url).pathname)); if (f.endsWith("/")) f += "index.html";
  fs.readFile(f, function (err, buf) { if (err) { res.writeHead(404); res.end(); return; } res.writeHead(200, { "Content-Type": MIME[f.split(".").pop()] || "application/octet-stream" }); res.end(buf); });
});
var fails = [];
function check(c, m) { if (!c) fails.push(m); console.log((c ? "ok   " : "FAIL ") + m); }
async function tap(page, sel) {
  await page.evaluate(function (sel) {
    var b = typeof sel === "string" ? document.querySelector(sel) : sel; if (!b) throw new Error("no " + sel);
    var o = { bubbles: true, pointerType: "mouse", button: 0 };
    b.dispatchEvent(new PointerEvent("pointerdown", o)); b.dispatchEvent(new PointerEvent("pointerup", o));
  }, sel);
}
/* the start screen: its one button goes into full screen */
async function launch(page) { await page.click("#btn-launch"); await page.waitForTimeout(300); }
function shown(page, sel) { return page.evaluate(function (sel) { var e = document.querySelector(sel); return !!e && getComputedStyle(e).display !== "none" && !e.closest(".hidden") && e.getBoundingClientRect().width > 0; }, sel); }
async function choose(page, band, subject, mode, acc) {
  await page.evaluate(function (a) {
    Object.keys(a.acc || {}).forEach(function (k) { SWD.acc.set(k, a.acc[k]); });
    var l = SWD.players.data().last; l.band = a.band; l.subject = a.subject; l.mode = a.mode; l.focus = ""; SWD.players.save(); SWDApp.renderAll();
  }, { band: band, subject: subject, mode: mode, acc: acc || {} });
}
/* answer right every time (or wrong first when asked to) until the results window shows */
async function playLevel(page, opts) {
  opts = opts || {};
  for (var step = 0; step < 200; step++) {
    if (await page.isVisible("#results")) return true;
    var did = await page.evaluate(function (o) {
      function fire(b) { var e = { bubbles: true, pointerType: "mouse", button: 0 }; b.dispatchEvent(new PointerEvent("pointerdown", e)); b.dispatchEvent(new PointerEvent("pointerup", e)); }
      var stage = document.getElementById("stage");
      /* Market Day: put the right money on the counter, then Pay */
      var mk = stage.querySelector("[data-test-task]");
      if (mk && !mk.querySelector(".mk-counter.paid")) {
        if (mk._done === mk.getAttribute("data-test-task")) return "wait";
        var T = JSON.parse(mk.getAttribute("data-test-task")), need = [], g = T.goal;
        if (T.kind === "next") { for (var i = 0; i < g / 100; i++) need.push(100); }
        else T.wallet.slice().sort(function (a, b) { return b - a; }).forEach(function (v) { while (g >= v) { need.push(v); g -= v; } });
        mk._done = mk.getAttribute("data-test-task");
        return { market: need.map(function (v) { return "Add a " + ({ 1: "penny", 5: "nickel", 10: "dime", 25: "quarter", 100: "$1 bill", 500: "$5 bill", 1000: "$10 bill", 2000: "$20 bill" })[v]; }) };
      }
      /* Rune Match: the two stones of one pair */
      var st = [].slice.call(stage.querySelectorAll(".stone:not(.done)"));
      if (st.length) { var k = st[0].getAttribute("data-test-pair"); var two = st.filter(function (x) { return x.getAttribute("data-test-pair") === k; }); fire(two[0]); return { pair: true, a: two[0] === two[1] ? null : 1 }; }
      var right = stage.querySelector("[data-test-answer]:not(.out):not(.right)");
      if (!right) return "wait";
      if (o.wrongFirst && !right._triedWrong) {
        var wrong = [].slice.call(stage.querySelectorAll(".answer:not(.out):not([data-test-answer])"))[0];
        right._triedWrong = true;
        if (wrong) { fire(wrong); return "wrong"; }
      }
      fire(right); return "right";
    }, opts);
    if (did && did.market) {
      /* a tap right after another is ignored (the Ignore extra taps accommodation), so the test taps at a person's pace */
      for (var m of did.market) { await tap(page, '#stage .money-btn[aria-label="' + m + '"]'); await page.waitForTimeout(480); }
      await tap(page, "#stage .mk-pay"); await page.waitForTimeout(1500);
      continue;
    }
    if (did && did.pair) {
      await page.waitForTimeout(950);
      await page.evaluate(function () {
        var st = [].slice.call(document.querySelectorAll("#stage .stone:not(.done)")), a = st.filter(function (x) { return x.classList.contains("picked"); })[0];
        if (!a) return; var k = a.getAttribute("data-test-pair"), b = st.filter(function (x) { return x !== a && x.getAttribute("data-test-pair") === k; })[0];
        var e = { bubbles: true, pointerType: "mouse", button: 0 }; b.dispatchEvent(new PointerEvent("pointerdown", e)); b.dispatchEvent(new PointerEvent("pointerup", e));
      });
    }
    await page.waitForTimeout(did === "wait" ? 250 : 1000);
  }
  return await page.isVisible("#results");
}
(async function () {
  await new Promise(function (r) { srv.listen(0, r); });
  var base = "http://127.0.0.1:" + srv.address().port + "/";
  var browser = await chromium.launch({ args: ["--use-gl=angle", "--use-angle=swiftshader", "--enable-unsafe-swiftshader"] });
  var errors = [];
  async function newPage(w, h, test) {
    var p = await browser.newPage({ viewport: { width: w, height: h } });
    p.on("pageerror", function (e) { errors.push(e.message); });
    if (test !== false) await p.addInitScript(function () { window.SWD_TEST = true; });
    return p;
  }

  /* ── the selection screen ── */
  for (var size of [[1280, 800], [900, 500], [420, 500]]) {
    var pg = await newPage(size[0], size[1]);
    await pg.goto(base + "swd.html"); await pg.waitForTimeout(400);
    var ls = await pg.evaluate(function () {
      var l = document.getElementById("launch"), b = document.getElementById("btn-launch"), r = b.getBoundingClientRect(), top = document.elementFromPoint(innerWidth / 2, innerHeight / 2);
      return { on: !l.classList.contains("hidden"), text: b.textContent, inView: r.top >= 0 && r.bottom <= innerHeight && r.left >= 0 && r.right <= innerWidth, covers: l.contains(top) };
    });
    check(ls.on && /Click here for full screen mode/.test(ls.text) && ls.inView && ls.covers, size.join("×") + ": the first screen is only the Click here for full screen mode button, in view (" + JSON.stringify(ls) + ")");
    await launch(pg);
    var s = await pg.evaluate(function () {
      var se = document.querySelector("#home");
      return { players: document.querySelectorAll("#player-chips .chip").length, paths: document.querySelectorAll("#path-cards .card").length, subjects: document.querySelectorAll("#subject-cards .card").length,
        modes: document.querySelectorAll("#mode-cards .card").length, acc: document.querySelectorAll("#acc-groups .acc-row").length, wide: se.scrollWidth > se.clientWidth + 1, pin: /PIN/i.test(document.body.textContent) };
    });
    check(s.players === 2 && s.paths === 2 && s.subjects === 4 && s.modes >= 4 && s.acc >= 18, size.join("×") + ": selection screen has players, two paths, Path 1's four subjects, the games and the accommodations (" + JSON.stringify(s) + ")");
    check(!s.wide, size.join("×") + ": nothing wider than the page");
    check(!s.pin, size.join("×") + ": no PIN anywhere");
    await pg.screenshot({ path: path.join(shots, "swd-home-" + size[0] + "x" + size[1] + ".png") });
    await pg.close();
  }

  /* one screen, no scrolling: a Chromebook in full screen (1366 × 768), 1280 × 720 and a wide monitor; Path 1 and Path 2
     (Path 2 has the main game's modes too); and the accommodations window */
  for (var fit of [[1366, 768], [1280, 720], [1832, 1008], [1920, 1080]]) {
    var fp = await newPage(fit[0], fit[1]);
    await fp.goto(base + "swd.html"); await fp.waitForTimeout(300); await launch(fp);
    var over = [];
    for (var band of ["P1", "G3"]) {
      over.push(await fp.evaluate(function (b) {
        var l = SWD.players.data().last; l.band = b; l.subject = b === "P1" ? "money" : "math"; SWD.players.save(); SWDApp.renderAll();
        var h = document.getElementById("home"), cols = [].map.call(document.querySelectorAll("#home .col"), function (c) { return c.scrollHeight - c.clientHeight; });
        return Math.max.apply(null, [h.scrollHeight - h.clientHeight, document.getElementById("btn-play").getBoundingClientRect().bottom > innerHeight ? 99 : 0].concat(cols));
      }, band));
    }
    await fp.click("#btn-acc"); await fp.waitForTimeout(100);
    over.push(await fp.evaluate(function () { var b = document.querySelector(".acc-box"); return b.scrollHeight - b.clientHeight; }));
    check(over.every(function (x) { return x <= 0; }), fit.join("×") + ": the selection screen (Path 1 and Path 2) and the accommodations window fit with no scrolling (" + over.join(",") + ")");
    await fp.close();
  }

  var page = await newPage(1280, 800);
  await page.goto(base + "swd.html"); await page.waitForTimeout(400);
  /* full screen: in, the Exit button back to the start screen, in again */
  await launch(page);
  var f1 = await page.evaluate(function () { return { full: !!document.fullscreenElement, cls: document.body.classList.contains("is-full") }; });
  check(f1.full && f1.cls && await shown(page, "#btn-exit-full") && !(await shown(page, "#btn-enter-full")), "the button opens full screen, with an Exit full screen button on the selection screen");
  await page.click("#btn-exit-full"); await page.waitForTimeout(300);
  check(!(await page.evaluate(function () { return !!document.fullscreenElement; })) && await shown(page, "#btn-launch"), "Exit full screen goes back to the start screen, whose button goes back in");
  await launch(page);
  /* Path 2: five separate grades, three subjects each, and the main game's modes */
  await page.click('#path-cards .card[data-path="2"]'); await page.waitForTimeout(150);
  var g = await page.evaluate(function () { return { grades: [].map.call(document.querySelectorAll("#grade-chips .chip"), function (c) { return c.textContent; }).join(","), subjects: document.querySelectorAll("#subject-cards .card").length, classic: document.querySelectorAll("#classic-cards .card").length }; });
  check(g.grades === "2,3,4,5,6" && g.subjects === 3 && g.classic === 6, "Path 2: grades 2-6 as separate choices, math/reading/life, six main-game modes (" + JSON.stringify(g) + ")");
  await page.click('#grade-chips .chip[aria-label="Grade 5"]'); await page.waitForTimeout(150);
  check(await page.evaluate(function () { return SWD.players.data().last.band === "G5" && /Grade 5/.test(document.getElementById("play-line").textContent); }), "picking grade 5 selects the Grade 5 band");
  await page.click('#path-cards .card[data-path="1"]'); await page.waitForTimeout(150);
  check(await page.evaluate(function () { return SWD.players.data().last.band === "P1" && document.getElementById("grade-chips").classList.contains("hidden") && document.getElementById("classic-wrap").classList.contains("hidden"); }), "Path 1: no grade chips and no main-game modes");

  /* accommodations: one button on the selection screen opens them all (no PIN); live, per player, saved */
  await page.click("#btn-acc"); await page.waitForTimeout(100);
  check(await page.isVisible('#acc-groups .toggle[aria-label="Read aloud"]'), "the Accommodations button opens every accommodation");
  await page.click('#acc-groups .seg[aria-label="Text size"] button:nth-child(3)');
  await page.click('#acc-groups .toggle[aria-label="High contrast"]');
  await page.click('#acc-dlg [data-close="acc-dlg"]'); await page.waitForTimeout(100);
  var a1 = await page.evaluate(function () { return { xl: document.body.classList.contains("acc-xlarge"), hc: document.body.classList.contains("acc-hc"), sum: document.getElementById("acc-summary").textContent }; });
  check(a1.xl && a1.hc && /Extra large/.test(a1.sum) && /High contrast/.test(a1.sum), "accommodations change the page at once and show in the summary");
  await page.reload(); await page.waitForTimeout(400); await launch(page);
  check(await page.evaluate(function () { return document.body.classList.contains("acc-xlarge") && document.body.classList.contains("acc-hc"); }), "accommodations survive a reload");
  await page.click("#player-chips .chip.add"); await page.fill("#name-input", "Jay"); await page.click("#btn-name-ok"); await page.waitForTimeout(150);
  var a2 = await page.evaluate(function () { return { name: SWD.players.current().name, n: SWD.players.list().length, xl: document.body.classList.contains("acc-xlarge") }; });
  check(a2.name === "Jay" && a2.n === 2 && !a2.xl, "a new player gets standard accommodations (the first player's stay with the first player)");
  await page.click("#player-chips .chip:first-child"); await page.waitForTimeout(100);
  check(await page.evaluate(function () { return document.body.classList.contains("acc-xlarge"); }), "switching back brings the first player's accommodations back");
  await page.click("#btn-acc"); await page.waitForTimeout(100);
  await page.click('#acc-presets button:last-child'); await page.waitForTimeout(100);
  await page.click("#acc-presets button:first-child"); await page.waitForTimeout(100);
  await page.keyboard.press("Escape"); await page.waitForTimeout(100);
  check(!(await page.isVisible("#acc-dlg")), "Done or Esc closes the accommodations window");
  var pre = await page.evaluate(function () { return SWD.acc.all(); });
  check(pre.readAloud === true && pre.choices === "2" && pre.targetSize === "huge" && pre.perLevel === "5", "the Path 1 starter preset sets read aloud, 2 choices, huge buttons, 5 questions");
  await page.evaluate(function () { SWD.acc.set("readAloud", false); SWD.acc.set("sounds", false); });

  /* ── every new mode plays a level ── */
  var runs = [["P1", "money", "path"], ["P1", "math", "match"], ["P1", "life", "sort"], ["P1", "money", "market"], ["G3", "life", "market"], ["G6", "life", "market"], ["G4", "reading", "raven"], ["G2", "math", "path"], ["G6", "reading", "path"], ["G5", "math", "sort"]];
  for (var r of runs) {
    await choose(page, r[0], r[1], r[2]);
    var before = await page.evaluate(function (k) { return SWD.players.data().prog.levels[k] || 1; }, r.join("|"));
    await page.click("#btn-play"); await page.waitForTimeout(400);
    var n = await page.evaluate(function () { return document.querySelectorAll("#stage .answer").length; });
    if (r[2] === "path" && r[0] === "P1") await page.screenshot({ path: path.join(shots, "swd-path.png") });
    var done = await playLevel(page, { wrongFirst: r[2] === "path" && r[0] === "G2" });
    var res = await page.evaluate(function (k) { return { title: document.getElementById("res-title").textContent, msg: document.getElementById("res-msg").textContent, lv: SWD.players.data().prog.levels[k] || 1 }; }, r.join("|"));
    check(done && n >= (r[2] === "market" ? 1 : 2), r.join(" · ") + ": a whole level plays to the results (" + res.msg.replace(/\s+/g, " ").slice(0, 60) + ")");
    if (!(r[2] === "path" && r[0] === "G2")) check(res.lv === before + 1, r.join(" · ") + ": all right on the first try moves the level up (" + before + " → " + res.lv + ")");
    await page.screenshot({ path: path.join(shots, "swd-" + r.join("-") + ".png") });
    await page.click("#btn-res-home"); await page.waitForTimeout(200);
  }

  /* a wrong answer: crossed out, a hint, then the right answer glows */
  await choose(page, "G3", "math", "path", { hint: "1", choices: "4", perLevel: "5" });
  await page.click("#btn-play"); await page.waitForTimeout(300);
  await page.evaluate(function () { var w = [].slice.call(document.querySelectorAll("#stage .answer:not([data-test-answer])")); var e = { bubbles: true, pointerType: "mouse", button: 0 }; w[0].dispatchEvent(new PointerEvent("pointerdown", e)); w[0].dispatchEvent(new PointerEvent("pointerup", e)); });
  await page.waitForTimeout(1000);
  await page.evaluate(function () { var w = [].slice.call(document.querySelectorAll("#stage .answer:not([data-test-answer]):not(.out)")); var e = { bubbles: true, pointerType: "mouse", button: 0 }; w[0].dispatchEvent(new PointerEvent("pointerdown", e)); w[0].dispatchEvent(new PointerEvent("pointerup", e)); });
  await page.waitForTimeout(400);
  var wr = await page.evaluate(function () { return { out: document.querySelectorAll("#stage .answer.out").length, hint: document.querySelector("#stage .hint-line").textContent, glow: !!document.querySelector("#stage [data-test-answer].glow") }; });
  check(wr.out === 2 && /Hint|Try/.test(wr.hint) && wr.glow, "two wrong answers: both crossed out, a hint, and the right answer glows (" + JSON.stringify(wr) + ")");

  /* leaving full screen in a level: the start screen, and the level waits behind "Leave this level?" */
  await page.click("#btn-exit-full-play"); await page.waitForTimeout(300);
  check(await shown(page, "#btn-launch") && await page.isVisible("#leave"), "Exit full screen in a level shows the start screen and pauses the level");
  await launch(page);
  check(await page.isVisible("#leave") && await page.isVisible("#stage .answer"), "back in full screen, the level is still there behind Leave this level?");
  await page.click("#btn-leave-stay"); await page.waitForTimeout(100);

  /* Menu: pause and ask */
  await page.click("#btn-menu"); await page.waitForTimeout(100);
  check(await page.isVisible("#leave"), "Menu asks: Leave this level?");
  var outBefore = await page.evaluate(function () { return document.querySelectorAll("#stage .answer.out, #stage .answer.right").length; });
  await page.keyboard.press("3"); await page.keyboard.press("4"); await page.waitForTimeout(150);
  check(await page.evaluate(function (n) { return document.querySelectorAll("#stage .answer.out, #stage .answer.right").length === n; }, outBefore), "while the box is up, number keys choose nothing behind it");
  await page.click("#btn-leave-stay"); await page.waitForTimeout(100);
  check(!(await page.isVisible("#leave")) && await page.isVisible("#stage .answer"), "Keep playing goes back to the level");
  await page.keyboard.press("Escape"); await page.waitForTimeout(100);
  check(await page.isVisible("#leave"), "Esc opens the box too");
  await page.click("#btn-leave-go"); await page.waitForTimeout(200);
  check(await page.isVisible("#home"), "Main menu goes back to the selection screen");

  /* 2 answer choices */
  await choose(page, "G4", "math", "path", { choices: "2" });
  await page.click("#btn-play"); await page.waitForTimeout(300);
  check(await page.evaluate(function () { return document.querySelectorAll("#stage .answers .answer").length === 2; }), "Answer choices 2: two doors");
  await page.click("#btn-menu"); await page.click("#btn-leave-go"); await page.waitForTimeout(150);

  /* hold to choose: a quick tap does nothing; holding does */
  await choose(page, "G4", "math", "path", { choices: "4", hold: "400" });
  await page.click("#btn-play"); await page.waitForTimeout(300);
  await tap(page, "#stage [data-test-answer]"); await page.waitForTimeout(600);
  var held1 = await page.evaluate(function () { return !!document.querySelector("#stage .answer.right"); });
  await page.evaluate(function () { var b = document.querySelector("#stage [data-test-answer]"); b.dispatchEvent(new PointerEvent("pointerdown", { bubbles: true, pointerType: "mouse", button: 0 })); });
  await page.waitForTimeout(700);
  var held2 = await page.evaluate(function () { return !!document.querySelector("#stage .answer.right"); });
  check(!held1 && held2, "Hold to choose: a quick tap does nothing, a hold chooses");
  await page.click("#btn-menu"); await page.click("#btn-leave-go"); await page.waitForTimeout(150);

  /* switch scanning: the lit answer moves on; Space picks it */
  await choose(page, "P1", "math", "path", { hold: "0", scan: true, scanSpeed: "1200" });
  await page.click("#btn-play"); await page.waitForTimeout(1600);
  var lit = await page.evaluate(function () { return document.querySelectorAll("#stage .answer.scan-lit").length; });
  await page.keyboard.press("Space"); await page.waitForTimeout(300);
  var picked = await page.evaluate(function () { return document.querySelectorAll("#stage .answer.out, #stage .answer.right").length; });
  check(lit === 1 && picked === 1, "Switch scanning: one answer is lit at a time and Space chooses it");
  await page.click("#btn-menu"); await page.click("#btn-leave-go"); await page.waitForTimeout(150);
  await page.evaluate(function () { SWD.acc.set("scan", false); });

  /* face-down Rune Match */
  await choose(page, "G3", "math", "match", { memory: "down" });
  await page.click("#btn-play"); await page.waitForTimeout(300);
  check(await page.evaluate(function () { return document.querySelectorAll("#stage .stone.down").length >= 6; }), "Rune Match face down: the stones start turned over");
  check(await playLevel(page), "Rune Match face down plays a whole level");
  await page.click("#btn-res-home"); await page.waitForTimeout(150);

  /* full screen refused (a frame without allowfullscreen): the game plays in the page, with a Full screen button always there */
  var nf = await newPage(1000, 500);
  await nf.addInitScript(function () { Element.prototype.requestFullscreen = function () { return Promise.reject(new Error("not allowed")); }; });
  await nf.goto(base + "swd.html"); await nf.waitForTimeout(300);
  await launch(nf);
  check(!(await shown(nf, "#btn-launch")) && await shown(nf, "#btn-enter-full") && !(await shown(nf, "#btn-exit-full")), "full screen refused: the selection screen shows, with a Full screen button to try again");
  await nf.evaluate(function () { var l = SWD.players.data().last; l.band = "P1"; l.subject = "math"; l.mode = "path"; SWD.players.save(); SWDApp.renderAll(); });
  await nf.click("#btn-play"); await nf.waitForTimeout(300);
  check(await shown(nf, "#btn-enter-full-play"), "and a Full screen button in the game's top bar");
  await nf.close();

  /* the progress report */
  await page.click("#btn-report"); await page.waitForTimeout(150);
  var rep = await page.evaluate(function () { return { rows: document.querySelectorAll("#report-body table.rep tbody tr").length, txt: document.getElementById("report-body").textContent }; });
  check(rep.rows >= 8 && /Grade 3/.test(rep.txt) && /First Skills/.test(rep.txt), "the progress report lists the skills played, by path, grade and subject (" + rep.rows + " rows)");
  await page.click('[data-close="report"]');

  /* ── Path 2: the main game's modes in swd-play.html ── */
  await choose(page, "G3", "math", "maze", { choices: "3", speed: "60", textSize: "large" });
  var pid = await page.evaluate(function () { return SWD.players.id(); });
  await page.click("#btn-play"); await page.waitForURL(/swd-play\.html/); await page.waitForTimeout(1500);
  var cl = await page.evaluate(function (pid) {
    var mine = 0, chem = 0;
    for (var i = 0; i < localStorage.length; i++) { var k = localStorage.key(i); if (k.indexOf("afterHours.") === 0) mine++; }
    return { skill: !document.getElementById("skill-screen").classList.contains("hidden"), kicker: document.getElementById("skill-kicker").textContent, packs: HEIST_PACKS.length,
      fam: HEIST_FAMILIES.map(function (f) { return f.id; }).join(","), back: !!document.querySelector("#skill-screen .swd-back"), mine: mine };
  }, pid);
  check(cl.skill && /Grade 3/.test(cl.kicker) && /Labyrinth/.test(cl.kicker) && cl.fam === "ALL,G3MATH,G3READ,G3LIFE" && cl.packs > 300 && cl.back, "Path 2 · Grade 3 · Math · The Labyrinth opens swd-play.html on the Start screen with the grade's questions (" + JSON.stringify(cl) + ")");
  check(await shown(page, "#skill-screen .swd-fs-corner"), "the main game's start screens have a Full screen button (the page reloaded out of full screen)");
  await page.click("#btn-skill-start"); await page.waitForTimeout(400);
  if (await page.isVisible("#btn-char-confirm")) await page.click("#btn-char-confirm");
  for (var i = 0; i < 50; i++) { await page.mouse.move(200 + i, 300); await page.waitForTimeout(150); if (await page.evaluate(function () { return !!(window.SolScene && SolScene.sys && SolScene.sys.isActive() && SolScene.claim); })) break; }
  for (var j = 0; j < 20; j++) { if (await page.isVisible("#tut-skip")) await page.click("#tut-skip"); else if (await page.isVisible("#read-go")) await page.click("#read-go"); else if (await page.isVisible("#trap-skip")) await page.click("#trap-skip"); else break; await page.waitForTimeout(250); }
  await page.waitForTimeout(600);
  var mz = await page.evaluate(function () { return { slips: SolScene.slips.length, choices: SolScene.claim.choices.length, sol: SolScene.claim.sol, panel: document.querySelectorAll("#eoc-choices li").length }; });
  check(mz.slips === 3 && mz.choices === 3 && mz.panel === 3 && /^G3\./.test(mz.sol), "the maze places only as many letters as answer choices (3) and asks Grade 3 questions (" + JSON.stringify(mz) + ")");
  await page.screenshot({ path: path.join(shots, "swd-play-maze.png") });
  if (await page.evaluate(function () { return !!document.fullscreenElement; })) { await page.evaluate(function () { return document.exitFullscreen(); }); await page.waitForTimeout(400); }
  var fsb = await page.evaluate(function () { var b = document.getElementById("btn-fs"); return { text: b.textContent, hidden: b.classList.contains("hidden") }; });
  check(!fsb.hidden && /Full screen/.test(fsb.text) && !/Exit/.test(fsb.text), "out of full screen in a main-game level, its Full screen button stays on screen (" + JSON.stringify(fsb) + ")");
  await page.goto(base + "swd.html"); await page.waitForTimeout(300); await launch(page);
  var sep = await page.evaluate(function (pid) {
    var ks = Object.keys(localStorage);
    return { prefixed: ks.filter(function (k) { return k.indexOf("swd." + pid + ".afterHours.") === 0; }).length, bare: ks.filter(function (k) { return k.indexOf("afterHours.") === 0; }).length,
      acc: JSON.parse(localStorage.getItem("swd." + pid + ".afterHours.v1.acc.VA") || "{}") };
  }, pid);
  check(sep.prefixed >= 3 && sep.bare === 0, "the main game's saves go under this player's own prefix, never into the Chemistry game's (" + sep.prefixed + " keys)");
  check(sep.acc.slow && sep.acc.slow.pct === 60 && sep.acc.big && sep.acc.big.on, "Game speed 60 % and Large text carry over to the main game's accommodations");

  check(errors.length === 0, "no page errors" + (errors.length ? ": " + errors.slice(0, 4).join(" | ") : ""));
  await browser.close(); srv.close();
  console.log(fails.length ? "\n" + fails.length + " FAILED" : "\nall " + "checks passed");
  process.exitCode = fails.length ? 1 : 0;
})();
