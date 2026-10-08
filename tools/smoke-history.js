/* History 1.0 headless smoke test: node tools/smoke-history.js [WHI WHII VUS GOVT]
   For each history course page (WHI.html …, written by tools/make-course-pages.js): the title screen and its unit
   cards, the question pools (every unit and every skill card has questions), a maze level won from the title screen
   (HUD code, the sources card, the progress record and code, the unit badges), the Teacher screen's page, and that
   the course's saves never mix with the Chemistry game's or another course's on the same site. Screenshots go to
   tools/shots/hist-<ID>-*.png. */
var path = require("path"), fs = require("fs"), http = require("http"), url = require("url"), vm = require("vm");
var { chromium } = require("/opt/node22/lib/node_modules/playwright");
var root = path.join(__dirname, ".."), shots = path.join(__dirname, "shots");
fs.mkdirSync(shots, { recursive: true });
var MIME = { html: "text/html", js: "application/javascript", css: "text/css", json: "application/json", png: "image/png", mp3: "audio/mpeg" };
var COURSES = process.argv.slice(2).map(function (x) { return x.toUpperCase(); });
if (!COURSES.length) COURSES = ["WHI", "WHII", "VUS", "GOVT"];
var srv = http.createServer(function (req, res) {
  var f = path.join(root, decodeURIComponent(url.parse(req.url).pathname));
  if (f.endsWith("/")) f += "index.html";
  fs.readFile(f, function (err, buf) {
    if (err) { res.writeHead(404); res.end(); return; }
    res.writeHead(200, { "Content-Type": MIME[f.split(".").pop()] || "application/octet-stream" }); res.end(buf);
  });
});
function course(id) { var w = {}; vm.runInNewContext(fs.readFileSync(path.join(root, "courses", id, "course.js"), "utf8"), { window: w }); return w.HEIST_COURSE; }

(async function () {
  await new Promise(function (r) { srv.listen(0, r); });
  var base = "http://127.0.0.1:" + srv.address().port + "/";
  var glArgs = { args: ["--use-gl=angle", "--use-angle=swiftshader", "--enable-unsafe-swiftshader"] };
  var browser = await chromium.launch(Object.assign({ executablePath: "/opt/pw-browsers/chromium/chrome-linux/chrome" }, glArgs)).catch(function () { return chromium.launch(glArgs); });
  var fails = [];
  function check(cond, msg) { if (!cond) fails.push(msg); console.log((cond ? "ok   " : "FAIL ") + msg); }
  var bankRight = function () {
    var s = SolScene;
    s.player.carrying = null; s.player.carryExtra = [];
    s.need.forEach(function (L, i) { var sl = s.slips.filter(function (q) { return q.letter === L && q.active !== false; })[0]; if (!i) s.player.carrying = sl; else s.player.carryExtra.push(sl); });
    s.player.body.reset(s.exitZone.x, s.exitZone.y); s.player.x = s.exitZone.x; s.player.y = s.exitZone.y;
    s.tryExtract();
    return { score: s.score, need: s.needExtracts, ended: !!s.ended, sol: document.getElementById("job-sol").textContent };
  };

  for (var ci = 0; ci < COURSES.length; ci++) {
    var id = COURSES[ci], H = course(id), ctx = await browser.newContext({ viewport: { width: 1280, height: 760 } });
    var page = await ctx.newPage(), errors = [];
    page.on("response", function (r) { if (r.status() === 404) errors.push("404 " + r.url()); });
    page.on("pageerror", function (e) { errors.push("pageerror: " + e.message); });
    page.on("console", function (m) { if (m.type() === "error") { var t = m.text(); if (!/favicon|net::ERR|Autoplay|AudioContext|peerjs|WebGL|GL Driver|swiftshader|404/i.test(t)) errors.push("console: " + t); } });
    console.log("──── " + id + " · " + H.title);
    await page.goto(base + id + ".html", { waitUntil: "load" });
    await page.waitForTimeout(800);
    var t = await page.evaluate(function () {
      return { title: document.title, kick: document.getElementById("title-kicker").textContent, cards: Array.prototype.map.call(document.querySelectorAll("#title-screen .card[data-family]:not(.hidden)"), function (c) { return c.getAttribute("data-family"); }),
        sel: (document.querySelector("#title-screen .card.selected") || {}).getAttribute("data-family"), tag: window.HEIST_COURSE_TAG, state: SolProgress.state() };
    });
    check(t.title === "SOL Lab · " + H.name && t.kick.indexOf(H.kicker) === 0, id + ": the page and the kicker name the course: " + t.title + " | " + t.kick);
    check(t.cards.join() === H.families.map(function (f) { return f.id; }).join() && t.sel === "ALL", id + ": one card per unit plus Full review, Full review selected: " + t.cards.join());
    check(t.tag === id && t.state === id, id + ": the game's progress record and code are the course's own (" + t.state + ")");
    await page.screenshot({ path: path.join(shots, "hist-" + id + "-01-title.png") });

    var pools = await page.evaluate(function () {
      var out = { units: {}, empty: [], foreign: 0 };
      HEIST_FAMILIES.forEach(function (f) {
        var all = heistBuildPack(f.id, "ALL").claims.length;
        (HEIST_SKILLS[f.id] || []).forEach(function (sk) {
          if (sk.strand === "ALL") return;
          var n = heistBuildPack(f.id, sk.strand).claims.filter(function (c) { return heistStrandMatch(c, sk.strand); }).length;
          if (!n) out.empty.push(f.id + ":" + sk.strand);
        });
        out.units[f.id] = all;
      });
      HEIST_PACKS.forEach(function (p) { p.claims.forEach(function (c) { if (String(c.sol).indexOf(HEIST_PREFIX + ".") !== 0) out.foreign++; }); });
      out.packs = HEIST_PACKS.length;
      return out;
    });
    console.log("pools", JSON.stringify(pools));
    check(Object.keys(pools.units).every(function (k) { return k === "ALL" || pools.units[k] >= 50; }) && pools.units.ALL >= 350, id + ": every unit has 50+ questions and Full review 350+: " + JSON.stringify(pools.units));
    check(pools.empty.length === 0, id + ": every skill card has questions: " + (pools.empty.join(", ") || "none empty"));
    check(pools.foreign === 0, id + ": no Chemistry (or other course) question in the pool");

    /* a maze level, from the title screen, won with every question right */
    var unit = H.families[1].id;
    await page.click('#title-screen .card[data-family="' + unit + '"]');
    await page.waitForSelector("#mode-screen:not(.hidden)");
    await page.click('#mode-packs .card[data-gamemode="maze"]');
    await page.waitForSelector("#skill-screen:not(.hidden)");
    var sk = await page.evaluate(function () { return { n: document.querySelectorAll("#skill-packs .card").length, kick: document.getElementById("skill-kicker").textContent }; });
    check(sk.n === (H.skills[unit].length + 1) && sk.kick.indexOf(H.families[1].label) !== -1, id + ": the " + unit + " skill screen: " + sk.n + " cards, " + sk.kick);
    await page.waitForTimeout(500);
    await page.click("#btn-skill-start");
    await page.waitForTimeout(400);
    if (await page.isVisible("#btn-char-confirm")) await page.click("#btn-char-confirm");
    await page.waitForTimeout(2500);
    for (var i = 0; i < 12; i++) { if (await page.isVisible("#tut-skip")) { await page.click("#tut-skip"); break; } await page.waitForTimeout(250); }
    await page.waitForTimeout(800);
    var hud = await page.evaluate(function () { return { sol: document.getElementById("job-sol").textContent, stem: document.getElementById("eoc-stem").textContent, read: document.getElementById("read-title").textContent, passage: document.getElementById("eoc-passage").textContent.length }; });
    console.log("hud", JSON.stringify(hud));
    var re = new RegExp("^SOL · " + id + "\\.\\d+\\.[a-j] · Level [123]");
    check(re.test(hud.sol) && hud.stem.length > 10 && hud.passage > 100, id + ": a level starts with a " + id + " question and its sources: " + hud.sol);
    await page.screenshot({ path: path.join(shots, "hist-" + id + "-02-level.png") });
    var won = null, sols = [];
    for (var q = 0; q < 14; q++) {
      for (var k = 0; k < 10; k++) { if (await page.isVisible("#read-go")) { await page.click("#read-go"); break; } await page.waitForTimeout(150); }
      var r = await page.evaluate(bankRight);
      sols.push(r.sol.split(" · ")[1]);
      if (r.ended) { won = r; break; }
      await page.waitForTimeout(600);
    }
    await page.waitForTimeout(1200);
    var after = await page.evaluate(function (st) {
      var rec = SolProgress.record(st);
      return { title: document.getElementById("win-title").textContent, rec: { won: rec.levels.won, answered: rec.q.answered, right: rec.q.right, skills: rec.skills, std: Object.keys(rec.std || {}) }, code: SolProgress.code(st),
        night: localStorage.getItem("afterHours.v1.night." + "maze") || localStorage.getItem("afterHours.v1.night") };
    }, id);
    console.log("after", JSON.stringify(after.rec), after.code.slice(0, 30) + "…");
    check(won && after.rec.won === 1 && after.rec.answered === won.need && after.rec.right === won.need, id + ": the level is won and every answer is recorded: " + JSON.stringify(after.rec));
    check(after.rec.skills && after.rec.skills[unit] && after.rec.skills[unit].a === won.need, id + ": the answers count for the unit " + unit + ": " + JSON.stringify(after.rec.skills));
    check(after.rec.std.length && after.rec.std.every(function (s) { return s.indexOf(id + ".") === 0; }), id + ": the standards practiced are " + id + " codes: " + after.rec.std.join(" "));
    var dec = await page.evaluate(function (c) { var d = SolProgressCode.decode(c); return { ok: d.ok, build: d.build, answered: d.ok && d.data.answered, std: d.ok && d.data.std.map(function (x) { return x.code; }), skills: d.ok && d.data.skills.map(function (x) { return x.key + ":" + x.a; }) }; }, after.code);
    check(new RegExp("^SOL3-" + id + "-").test(after.code) && dec.ok && dec.build === id && dec.answered === won.need, id + ": the progress code is the course's and reads back: " + JSON.stringify(dec));
    await page.screenshot({ path: path.join(shots, "hist-" + id + "-03-won.png") });

    /* the unit badges: one pair per unit, named after the unit */
    var bd = await page.evaluate(function () {
      var rel = SolBadges.relevant(), u = rel.filter(function (b) { return /^u\d-/.test(b); });
      return { units: u, chem: rel.filter(function (b) { return /^(inv|atom|rxn|mole|kmt|rl|ri|rv|dsr)\d+$/.test(b); }), name: SolBadges.info("u2-25").name };
    });
    check(bd.units.length === 2 * (H.families.length - 1) && bd.chem.length === 0 && / Scholar$/.test(bd.name),
      id + ": a badge pair per unit, no Chemistry or Reading badges: " + bd.units.length + " unit badges, e.g. " + bd.name);

    /* the Teacher screen's page */
    var tp = await page.evaluate(async function (st) { var r = await fetch("teacher/" + st + ".html"); var tx = await r.text(); return { ok: r.ok, h1: (/<h1[^>]*>([^<]*)/.exec(tx) || [])[1] || "" }; }, id);
    check(tp.ok && /SOL Lab \(Virginia/.test(tp.h1), id + ": teacher/" + id + ".html is there: " + tp.h1);

    /* saves: the course's keys carry its prefix; Chemistry (index.html) on the same site sees none of them */
    var chem = await ctx.newPage();
    await chem.goto(base + "index.html", { waitUntil: "load" });
    await chem.waitForTimeout(600);
    var iso = await chem.evaluate(function (pre) {
      var raw = [];
      for (var i = 0; i < localStorage.length; i++) raw.push(Storage.prototype.key.call(localStorage, i));
      return { mine: raw.filter(function (k) { return k.indexOf(pre) === 0; }).length, chemRec: localStorage.getItem("afterHours.v1.progress.CHM"), histRec: localStorage.getItem("afterHours.v1.progress." + pre.slice(7, -1).toUpperCase()), state: SolProgress.state() };
    }, "solLab." + id.toLowerCase() + ":");
    check(iso.mine > 0 && iso.histRec === null && iso.chemRec === null && iso.state === "CHM", id + ": the course's saves carry solLab." + id.toLowerCase() + ": and the Chemistry page doesn't see them: " + JSON.stringify(iso));
    await chem.close();

    check(errors.length === 0, id + ": no page errors" + (errors.length ? ": " + errors.slice(0, 5).join(" | ") : ""));
    await ctx.close();
  }
  await browser.close(); srv.close();
  console.log(fails.length ? fails.length + " FAILED" : "all history checks passed");
  process.exit(fails.length ? 1 : 0);
})().catch(function (e) { console.error(e); process.exit(1); });
