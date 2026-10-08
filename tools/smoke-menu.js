/* Headless check of the way out of a level and the one-window how-to-play (Chemistry 1.5): node tools/smoke-menu.js
   At the Canvas embed size (500 px tall, several widths): the Level 1 how-to is one card whose Got it button is on screen,
   a tap on the backdrop does not close it, Got it does. Then in the maze and in a shooter: Menu pauses the level and asks,
   Keep playing (and Esc) resumes it, Esc opens the box, Main menu goes back to the title screen and Continue still works. */
var path = require("path"), fs = require("fs"), http = require("http"), url = require("url");
var { chromium } = require("/opt/node22/lib/node_modules/playwright");
var root = path.join(__dirname, ".."), shots = path.join(__dirname, "shots");
fs.mkdirSync(shots, { recursive: true });
var MIME = { html: "text/html", js: "application/javascript", css: "text/css", json: "application/json", png: "image/png", webp: "image/webp" };
var srv = http.createServer(function (req, res) {
  var f = path.join(root, decodeURIComponent(url.parse(req.url).pathname)); if (f.endsWith("/")) f += "index.html";
  fs.readFile(f, function (err, buf) { if (err) { res.writeHead(404); res.end(); return; } res.writeHead(200, { "Content-Type": MIME[f.split(".").pop()] || "application/octet-stream" }); res.end(buf); });
});
var fails = [];
function check(c, m) { if (!c) fails.push(m); console.log((c ? "ok   " : "FAIL ") + m); }
function inView(page, sel) {
  return page.evaluate(function (sel) {
    var el = document.querySelector(sel); if (!el) return false;
    var r = el.getBoundingClientRect(), cs = getComputedStyle(el);
    if (cs.display === "none" || cs.visibility === "hidden" || r.width < 2) return false;
    var x = Math.min(innerWidth - 1, Math.max(0, r.left + r.width / 2)), y = Math.min(innerHeight - 1, Math.max(0, r.top + r.height / 2));
    var top = document.elementFromPoint(x, y);
    return r.top >= -1 && r.bottom <= innerHeight + 1 && r.left >= -1 && r.right <= innerWidth + 1 && !!top && (top === el || el.contains(top));
  }, sel);
}
async function start(page, base, mode) {
  await page.goto(base + "index.html", { waitUntil: "load" }); await page.waitForTimeout(600);
  await page.click('#title-screen .card[data-family="ALL"]'); await page.waitForSelector("#mode-screen:not(.hidden)");
  await page.click('#mode-packs .card[data-gamemode="' + mode + '"]'); await page.waitForSelector("#skill-screen:not(.hidden)"); await page.waitForTimeout(300);
  await page.click("#btn-skill-start"); await page.waitForTimeout(300);
  if (await page.isVisible("#btn-char-confirm")) await page.click("#btn-char-confirm");
  for (var i = 0; i < 60; i++) { await page.mouse.move(200 + i, 300); await page.waitForTimeout(120); if (await page.evaluate(function () { return !!(window.SolScene && SolScene.sys && SolScene.sys.isActive()); })) break; }
}
async function playing(page) {
  for (var i = 0; i < 25; i++) {
    if (await page.isVisible("#tut-skip")) { await page.click("#tut-skip"); await page.waitForTimeout(200); }
    else if (await page.isVisible("#read-go")) { await page.click("#read-go"); await page.waitForTimeout(200); }
    else if (await page.isVisible("#trap-skip")) { await page.click("#trap-skip"); await page.waitForTimeout(200); }
    else break;
    await page.mouse.move(300 + i, 250); await page.waitForTimeout(120);
  }
  await page.waitForTimeout(300);
}
(async function () {
  await new Promise(function (r) { srv.listen(0, r); });
  var base = "http://127.0.0.1:" + srv.address().port + "/";
  var browser = await chromium.launch({ args: ["--use-gl=angle", "--use-angle=swiftshader", "--enable-unsafe-swiftshader"] });
  var errors = [];

  /* the how-to-play: one card, fits the Canvas frame */
  for (var w of [1280, 900, 700, 420]) {
    var page = await browser.newPage({ viewport: { width: w, height: 500 } });
    page.on("pageerror", function (e) { errors.push(e.message); });
    await start(page, base, "maze");
    for (var i = 0; i < 30 && !(await page.isVisible("#tut-skip")); i++) { await page.mouse.move(100 + i, 300); await page.waitForTimeout(150); }
    var tut = await page.evaluate(function () {
      var sc = document.scrollingElement;
      return { items: document.querySelectorAll("#tut-body li").length, kicker: document.getElementById("tut-kicker").textContent, btn: document.getElementById("tut-skip").textContent,
        scroll: sc.scrollHeight > innerHeight + 1 || sc.scrollWidth > innerWidth + 1, list: SolScene.tutList.length,
        hidden: (function (c) { return c.scrollHeight - c.clientHeight; })(document.getElementById("tut-card")) };
    });
    await page.screenshot({ path: path.join(shots, "menu-tutorial-" + w + "x500.png") });
    check(tut.items === 8 && tut.list === 1 && !/ of /.test(tut.kicker) && /Got it/.test(tut.btn) && !tut.scroll && tut.hidden <= 1, w + "×500: the how-to-play is one card of 8 points with a Got it button; neither the page nor the card scrolls");
    check(await inView(page, "#tut-skip"), w + "×500: Got it is on screen without scrolling");
    if (w === 1280) {
      await page.mouse.click(30, 30); await page.waitForTimeout(500);
      await page.locator("#tut-card").click({ position: { x: 20, y: 20 } }); await page.waitForTimeout(500);
      check(await page.isVisible("#tut-skip"), "tapping the card or the backdrop does not close the how-to");
      await page.click("#tut-skip"); await page.waitForTimeout(400);
      check(!(await page.isVisible("#tut-overlay")) && SolSceneTutDone(await page.evaluate(function () { return SolScene.tutDone; })), "Got it closes it and the level goes on");
    }
    await page.close();
  }
  function SolSceneTutDone(v) { return v === true; }

  /* the way out, in the maze and in a shooter */
  for (var mode of ["maze", "raid", "worms"]) {
    var p = await browser.newPage({ viewport: { width: 1280, height: 500 } });
    p.on("pageerror", function (e) { errors.push(e.message); });
    await start(p, base, mode); await playing(p);
    check(await inView(p, "#btn-menu"), mode + ": the Menu button is on screen during play");
    await p.click("#btn-menu"); await p.waitForTimeout(250);
    var st = await p.evaluate(function () { return { open: !document.getElementById("leave-overlay").classList.contains("hidden"), paused: SolScene.scene.isPaused(), msg: document.getElementById("leave-msg").textContent }; });
    if (mode === "maze") await p.screenshot({ path: path.join(shots, "menu-leave-1280x500.png") });
    check(st.open && st.paused, mode + ": Menu pauses the level and asks first (" + st.msg + ")");
    check(await inView(p, "#btn-leave-go") && await inView(p, "#btn-leave-stay"), mode + ": both choices are on screen");
    await p.click("#btn-leave-stay"); await p.waitForTimeout(250);
    st = await p.evaluate(function () { return { open: !document.getElementById("leave-overlay").classList.contains("hidden"), paused: SolScene.scene.isPaused(), play: !document.getElementById("play").classList.contains("hidden") }; });
    check(!st.open && !st.paused && st.play, mode + ": Keep playing closes the box and the level runs again");
    await p.mouse.click(700, 250); await p.keyboard.press("Escape"); await p.waitForTimeout(250);
    var escOpen = await p.evaluate(function () { return !document.getElementById("leave-overlay").classList.contains("hidden") && SolScene.scene.isPaused(); });
    await p.keyboard.press("Escape"); await p.waitForTimeout(250);
    var escShut = await p.evaluate(function () { return document.getElementById("leave-overlay").classList.contains("hidden") && !SolScene.scene.isPaused(); });
    check(escOpen && escShut, mode + ": Esc opens the box and Esc again keeps playing");
    await p.click("#btn-menu"); await p.waitForTimeout(250);
    await p.click("#btn-leave-go"); await p.waitForTimeout(600);
    var back = await p.evaluate(function () {
      var vis = function (id) { var e = document.getElementById(id); return !!e && !e.classList.contains("hidden"); };
      return { title: vis("title-screen") || vis("state-screen"), play: vis("play"), leave: vis("leave-overlay"), read: vis("read-overlay"), canvas: !!document.querySelector("#game-root canvas") };
    });
    check(back.title && !back.play && !back.leave && !back.read && !back.canvas, mode + ": Main menu goes back to the main menu and shuts the level down");
    if (mode === "maze") {
      await p.screenshot({ path: path.join(shots, "menu-back-1280x500.png") });
      await p.click('#title-screen .card[data-family="ALL"]'); await p.waitForSelector("#mode-screen:not(.hidden)");
      await p.click('#mode-packs .card[data-gamemode="maze"]'); await p.waitForSelector("#skill-screen:not(.hidden)"); await p.waitForTimeout(300);
      await p.click("#btn-skill-start"); await p.waitForTimeout(300);
      if (await p.isVisible("#btn-char-confirm")) await p.click("#btn-char-confirm");
      for (var k = 0; k < 40; k++) { await p.mouse.move(200 + k, 300); await p.waitForTimeout(120); if (await p.evaluate(function () { return !!(window.SolScene && SolScene.sys && SolScene.sys.isActive() && SolScene.claim); })) break; }
      check(await p.evaluate(function () { return !!(SolScene.claim && !document.getElementById("play").classList.contains("hidden")); }), "a new game starts normally after leaving one");
    }
    await p.close();
  }
  check(errors.length === 0, "no page errors" + (errors.length ? ": " + errors.slice(0, 4).join(" | ") : ""));
  await browser.close(); srv.close();
  console.log(fails.length ? fails.length + " FAILED" : "ALL OK");
  process.exit(fails.length ? 1 : 0);
})().catch(function (e) { console.error(e); process.exit(2); });
