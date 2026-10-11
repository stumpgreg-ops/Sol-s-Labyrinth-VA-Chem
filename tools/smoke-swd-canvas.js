/* Headless check of the SWD Canvas build: node tools/smoke-swd-canvas.js   (run node tools/build-swd-canvas.js first)
   The same stand-in for Canvas as tools/smoke-canvas.js: one server is Canvas's file domain and serves only the uploaded
   files from a folder path like Canvas's (with a space in it); a course page on another origin embeds the starter page
   in an iframe 500 px tall. Checks: the SWD selection screen loads from the uploaded files only (pictures as data: URLs),
   no music option, a Sol's Path and a Market Day level play through, the Path 2 main-game mode opens in the same page
   (the reload with sessionStorage) on the grade's questions with as many maze letters as answer choices, "SWD menu"
   comes back with the player's progress kept, saves carry the build's own prefix and leave another game's alone,
   accommodations are kept, and a missing data file is named on screen. */
var path = require("path"), fs = require("fs"), http = require("http"), url = require("url");
var { chromium } = require("/opt/node22/lib/node_modules/playwright");
var ID = "va-swd", dir = path.join(__dirname, "..", "dist", "canvas", "SWD");
var start = "SOLLab-SWD.html", uploaded = fs.readdirSync(dir), hide = null;
var FOLDER = "/courses/1~2/files/1~3/course files/Skills Game/";
var shots = path.join(__dirname, "shots");
fs.mkdirSync(shots, { recursive: true });
var served = [];
var files = http.createServer(function (req, res) {
  var p = decodeURIComponent(url.parse(req.url).pathname);
  served.push(p);
  if (p === "/blank") { res.writeHead(200, { "Content-Type": "text/html" }); res.end("<!DOCTYPE html><title>blank</title>"); return; }
  var f = p.indexOf(FOLDER) === 0 ? p.slice(FOLDER.length) : null;
  if (!f || uploaded.indexOf(f) < 0 || f === hide) { res.writeHead(404, { "Content-Type": "text/html" }); res.end("<h1>Page not found</h1>"); return; }
  res.writeHead(200, { "Content-Type": /\.js$/.test(f) ? "text/javascript" : "text/html" }); res.end(fs.readFileSync(path.join(dir, f)));
});
var lms = http.createServer(function (req, res) {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end('<!DOCTYPE html><html><body style="margin:0;background:#fff"><h1 style="font:20px sans-serif;margin:4px">Course page</h1>' +
    '<iframe id="app" src="' + lms.gameUrl + '" style="width:100%;height:500px;border:0" allowfullscreen></iframe></body></html>');
});
(async function () {
  await new Promise(function (r) { files.listen(0, r); });
  await new Promise(function (r) { lms.listen(0, r); });
  lms.gameUrl = "http://127.0.0.1:" + files.address().port + encodeURI(FOLDER + start);
  var course = "http://localhost:" + lms.address().port + "/";
  var browser = await chromium.launch({ args: ["--use-gl=angle", "--use-angle=swiftshader", "--enable-unsafe-swiftshader"] });
  var ctx = await browser.newContext({ viewport: { width: 1280, height: 600 } });
  await ctx.addInitScript(function () { window.SWD_TEST = true; });   /* marks the right answer for the test (js/swd/swd-modes.js) */
  var page = await ctx.newPage();
  var errors = [], fails = [];
  page.on("pageerror", function (e) { errors.push("pageerror: " + e.message); });
  page.on("console", function (m) { if (m.type() === "error") { var t = m.text(); if (!/favicon|Autoplay|AudioContext|peerjs|WebGL|GL Driver|swiftshader/i.test(t)) errors.push(t); } });
  function check(cond, msg) { if (!cond) fails.push(msg); console.log((cond ? "ok   " : "FAIL ") + msg); }
  async function frame() { var h = await page.waitForSelector("#app"); return h.contentFrame(); }
  async function fire(f, sel) {
    await f.evaluate(function (sel) { var b = document.querySelector(sel); if (!b) return; var e = { bubbles: true, pointerType: "mouse", button: 0 }; b.dispatchEvent(new PointerEvent("pointerdown", e)); b.dispatchEvent(new PointerEvent("pointerup", e)); }, sel);
  }
  /* answer right until the results show (Sol's Path, Market Day) */
  async function playLevel(f) {
    for (var s = 0; s < 120; s++) {
      if (await f.isVisible("#results")) return true;
      var task = await f.evaluate(function () {
        var mk = document.querySelector("#stage [data-test-task]");
        if (mk && !mk.querySelector(".mk-counter.paid") && mk._done !== mk.getAttribute("data-test-task")) {
          var T = JSON.parse(mk.getAttribute("data-test-task")), need = [], g = T.goal;
          if (T.kind === "next") { for (var i = 0; i < g / 100; i++) need.push(100); }
          else T.wallet.slice().sort(function (a, b) { return b - a; }).forEach(function (v) { while (g >= v) { need.push(v); g -= v; } });
          mk._done = mk.getAttribute("data-test-task");
          return need.map(function (v) { return "Add a " + ({ 1: "penny", 5: "nickel", 10: "dime", 25: "quarter", 100: "$1 bill", 500: "$5 bill", 1000: "$10 bill", 2000: "$20 bill" })[v]; });
        }
        return null;
      });
      if (task) { for (var m of task) { await fire(f, '#stage .money-btn[aria-label="' + m + '"]'); await page.waitForTimeout(480); } await fire(f, "#stage .mk-pay"); await page.waitForTimeout(1500); continue; }
      await fire(f, "#stage [data-test-answer]:not(.out):not(.right)");
      await page.waitForTimeout(1000);
    }
    return f.isVisible("#results");
  }

  /* another game already saved on Canvas's file domain */
  await page.goto("http://127.0.0.1:" + files.address().port + "/blank");
  await page.evaluate(function () { localStorage.setItem("afterHours.v1.night", "57"); localStorage.setItem("swd.v1.players", "[{\"id\":\"x\",\"name\":\"Other game\"}]"); });

  var t0 = Date.now();
  await page.goto(course);
  var f = await frame();
  await f.waitForSelector("#launch:not(.hidden) #btn-launch", { timeout: 60000 });
  var ls = await f.evaluate(function () { var b = document.getElementById("btn-launch"), r = b.getBoundingClientRect(), top = document.elementFromPoint(innerWidth / 2, innerHeight / 2);
    return { text: b.textContent, inView: r.top >= 0 && r.bottom <= innerHeight, covers: document.getElementById("launch").contains(top), h: innerHeight }; });
  check(/Click here for full screen mode/.test(ls.text) && ls.inView && ls.covers, "in the 500 px Canvas frame the first screen is only the Click here for full screen mode button (" + JSON.stringify(ls) + ")");
  await page.screenshot({ path: path.join(shots, "swdcv-00-launch.png") });
  await f.click("#btn-launch");
  await f.waitForSelector("#home:not(.hidden) #player-chips .chip", { timeout: 60000 });
  await page.waitForTimeout(300);
  var fs1 = await f.evaluate(function () { return { full: !!document.fullscreenElement, exit: getComputedStyle(document.getElementById("btn-exit-full")).display }; });
  check(fs1.full && fs1.exit !== "none", "the button puts the game in full screen inside Canvas, with an Exit full screen button");
  await f.click("#btn-exit-full"); await page.waitForTimeout(300);
  check(await f.isVisible("#btn-launch"), "Exit full screen goes back to the Click here for full screen mode button");
  await f.click("#btn-launch"); await page.waitForTimeout(300);
  console.log("load " + (Date.now() - t0) + " ms, " + uploaded.length + " files, " + (uploaded.reduce(function (a, x) { return a + fs.statSync(path.join(dir, x)).size; }, 0) / 1048576).toFixed(1) + " MiB; the page " + (fs.statSync(path.join(dir, start)).size / 1024).toFixed(1) + " KiB");
  var s1 = await f.evaluate(function () {
    var logo = document.querySelector(".home-bar .logo");
    return { canvas: !!window.SOL_CANVAS, boot: !!document.getElementById("sol-boot"), swd: !!(window.SWD && SWD.MODES && SWD.MODES.length), logo: logo.src.slice(0, 11), logoOk: logo.naturalWidth,
      music: SWD.ACC_DEFS.some(function (d) { return d.id === "music"; }), players: SWD.players.list().map(function (p) { return p.name; }).join(","), css: getComputedStyle(document.querySelector("#home .col")).borderRadius };
  });
  console.log(JSON.stringify(s1));
  check(s1.canvas && !s1.boot && s1.swd, "the starter page loads the SWD selection screen from the uploaded files");
  check(s1.logoOk > 0 && s1.logo === "data:image/", "the logo comes out of the files (a data: URL)");
  check(s1.css === "14px", "the SWD stylesheet is applied");
  check(!s1.music, "no Background music accommodation (this build has no music)");
  check(s1.players !== "Other game", "another game's saves on the same domain are not this game's players");
  await page.screenshot({ path: path.join(shots, "swdcv-01-home.png") });

  /* accommodations, then a Sol's Path level: Sol's picture comes out of the files */
  await f.evaluate(function () { SWD.acc.set("perLevel", "5"); SWD.acc.set("choices", "3"); SWD.acc.set("sounds", false); var l = SWD.players.data().last; l.band = "P1"; l.subject = "money"; l.mode = "path"; SWD.players.save(); SWDApp.renderAll(); });
  await f.click("#btn-play");
  await f.waitForSelector("#stage .answer");
  var sp = await f.evaluate(function () { var s = document.querySelector(".sol-sprite"); return { bg: getComputedStyle(s).backgroundImage.slice(0, 16), n: document.querySelectorAll("#stage .answers .answer").length }; });
  check(/^url\("data:image/.test(sp.bg), "Sol's sprite comes out of the files: " + sp.bg);
  check(sp.n === 3, "Answer choices 3: three doors");
  await page.screenshot({ path: path.join(shots, "swdcv-02-path.png") });
  check(await playLevel(f), "a Sol's Path level plays through in Canvas");
  await f.click("#btn-res-home");
  await f.evaluate(function () { var l = SWD.players.data().last; l.mode = "market"; SWD.players.save(); SWDApp.renderAll(); });
  await f.click("#btn-play");
  await f.waitForSelector("#stage .money-btn");
  check(await playLevel(f), "a Market Day level plays through in Canvas");
  await f.click("#btn-res-home");
  var lv = await f.evaluate(function () { return SWD.players.data().prog.levels; });

  /* Path 2: a main-game mode opens in the same page (reload) */
  await f.evaluate(function () { SWD.acc.set("speed", "75"); var l = SWD.players.data().last; l.band = "G3"; l.subject = "math"; l.mode = "maze"; SWD.players.save(); SWDApp.renderAll(); });
  await f.click("#btn-play");
  await page.waitForTimeout(1500);
  f = await frame();
  await f.waitForSelector("#skill-screen:not(.hidden)", { timeout: 60000 });
  var cl = await f.evaluate(function () { return { kicker: document.getElementById("skill-kicker").textContent, fam: HEIST_FAMILIES.map(function (x) { return x.id; }).join(","), back: !!document.querySelector("#skill-screen .swd-back"),
    music: getComputedStyle(document.getElementById("music-pick")).display, slow: JSON.parse(localStorage.getItem("afterHours.v1.acc.VA") || "{}") }; });
  check(/Grade 3/.test(cl.kicker) && /Labyrinth/.test(cl.kicker) && cl.fam === "ALL,G3MATH,G3READ,G3LIFE" && cl.back, "Path 2 · Grade 3 · Math · The Labyrinth opens in the same Canvas page on the grade's questions (" + cl.kicker + ")");
  check(cl.music === "none", "the main game's music picker is hidden");
  check(await f.isVisible("#skill-screen .swd-fs-corner"), "the main game's start screen has a Full screen button (the reload left full screen)");
  check(cl.slow.slow && cl.slow.slow.pct === 75, "Game speed 75 % reaches the main game");
  await f.click("#btn-skill-start");
  await page.waitForTimeout(400);
  if (await f.isVisible("#btn-char-confirm")) await f.click("#btn-char-confirm");
  for (var i = 0; i < 50; i++) { await page.waitForTimeout(200); if (await f.evaluate(function () { return !!(window.SolScene && SolScene.sys && SolScene.sys.isActive() && SolScene.claim); })) break; }
  for (var j = 0; j < 20; j++) { if (await f.isVisible("#tut-skip")) await f.click("#tut-skip"); else if (await f.isVisible("#read-go")) await f.click("#read-go"); else if (await f.isVisible("#trap-skip")) await f.click("#trap-skip"); else break; await page.waitForTimeout(250); }
  await page.waitForTimeout(800);
  var mz = await f.evaluate(function () {
    var g = SolScene.game, tx = g && g.textures, bad = [];
    if (tx) tx.getTextureKeys().forEach(function (k) { var s = tx.get(k).getSourceImage(); if (s && s.width === 0) bad.push(k); });
    return { slips: SolScene.slips.length, sol: SolScene.claim.sol, n: tx ? tx.getTextureKeys().length : 0, bad: bad };
  });
  check(mz.slips === 3 && /^G3\./.test(mz.sol), "the maze plays Grade 3 questions with three letters (" + JSON.stringify({ slips: mz.slips, sol: mz.sol }) + ")");
  check(mz.n > 10 && mz.bad.length === 0, "the main game's images loaded from the files: " + mz.n + " textures" + (mz.bad.length ? ", empty: " + mz.bad.join(",") : ""));
  await page.screenshot({ path: path.join(shots, "swdcv-03-maze.png") });

  /* back to the SWD menu: the same page reloads as the selection screen, progress kept */
  await f.click("#btn-menu"); await page.waitForTimeout(300);
  if (await f.isVisible("#btn-leave-go")) await f.click("#btn-leave-go");
  await page.waitForTimeout(600);
  await f.waitForSelector("#title-screen:not(.hidden)", { timeout: 20000 }).catch(function () {});
  if (!(await f.isVisible("#title-screen .swd-back"))) { if (await f.isVisible("#btn-again")) await f.click("#btn-again"); await page.waitForTimeout(500); }
  await f.click("#title-screen .swd-back");
  await page.waitForTimeout(1500);
  f = await frame();
  await f.waitForSelector("#launch:not(.hidden) #btn-launch", { timeout: 60000 });
  await f.click("#btn-launch");
  await f.waitForSelector("#home:not(.hidden) #player-chips .chip", { timeout: 60000 });
  var after = await f.evaluate(function () { return { levels: SWD.players.data().prog.levels, perLevel: SWD.acc.get("perLevel"), mode: SWD.players.data().last.mode }; });
  check(JSON.stringify(after.levels) === JSON.stringify(lv) && after.perLevel === "5", "\"SWD menu\" comes back to the selection screen with the levels and accommodations kept");

  /* saves: everything this build wrote carries its prefix; the other game's keys are untouched */
  var keys = await f.evaluate(function () { return Object.keys(localStorage); });
  var bare = keys.filter(function (k) { return (/^swd\./.test(k) && k !== "swd.v1.players") || (/^afterHours/.test(k) && k !== "afterHours.v1.night"); });
  check(bare.length === 0 && keys.some(function (k) { return k.indexOf("solReading." + ID + ":swd.v1.p.") === 0; }) && keys.some(function (k) { return k.indexOf("solReading." + ID + ":swd.") === 0 && /afterHours/.test(k); }),
    "the saves carry this build's own prefix (" + ID + ")" + (bare.length ? ": bare " + bare.join(",") : ""));
  check(await f.evaluate(function () { return localStorage["afterHours.v1.night"] === "57"; }), "another game's save is untouched");

  function own(p) { return p === "/blank" || (p.indexOf(FOLDER) === 0 && uploaded.indexOf(p.slice(FOLDER.length)) >= 0); }
  check(served.every(own), "the page asked its server for nothing but its own files: " + served.filter(function (p) { return !own(p); }).join(", "));
  check(uploaded.every(function (x) { return served.indexOf(FOLDER + x) >= 0; }), "every uploaded file was read");
  check(errors.length === 0, "no page errors" + (errors.length ? ": " + errors.slice(0, 5).join(" | ") : ""));

  /* a data file left out of the upload: the screen names it */
  hide = uploaded.filter(function (x) { return /-data-03\.js$/.test(x); })[0];
  await f.evaluate(function () { try { indexedDB.deleteDatabase("sol-bundle"); } catch (e) {} });
  await page.reload();
  f = await frame();
  var said = "";
  for (var k = 0; k < 40 && !/can't find/i.test(said); k++) { await page.waitForTimeout(250); said = await f.evaluate(function () { var m = document.querySelector("#sol-boot .msg"); return m ? m.textContent : ""; }); }
  check(/can't find .*-data-03\.js/i.test(said), "a missing data file is named on screen: " + said.slice(0, 120));
  await browser.close(); files.close(); lms.close();
  console.log(fails.length ? "FAILED: " + fails.length : "ALL OK");
  process.exit(fails.length ? 1 : 0);
})().catch(function (e) { console.error(e); process.exit(1); });
