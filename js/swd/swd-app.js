/* Sol's Labyrinth · SWD: the page (swd.html). One selection screen, the play screen, and a few windows.
   Selection screen: 1 who is playing, 2 the path (Path 1 First Skills K-1, or Path 2 with grade 2, 3, 4, 5 or 6), 3 the
   subject, 4 the game; beside it the Accommodations for this player (no PIN), the progress report and My Town.
   A level is perLevel questions (Accommodations); 60 % right on the first try moves the player's level up one, and
   every level finished adds a building to My Town. The main game's modes (Path 2) open swd-play.html. */
(function () {
  "use strict";
  var SWD = window.SWD, esc = SWD.esc;
  function $(id) { return document.getElementById(id); }
  function el(tag, cls, html) { var e = document.createElement(tag); if (cls) e.className = cls; if (html != null) e.innerHTML = html; return e; }
  function D() { return SWD.players.data(); }
  var CHARS = ["sol_a", "sol_b", "sol_c", "sol_d", "sol_e", "sol_f", "sol_g", "sol_h"];
  /* the town or castle: the main game's builder (js/build.js), one build per player. The key is the one the main game's
     modes use for this player (swd-play.html gives its saves the prefix "swd.<player>."), so both share coins and town. */
  function buildKey() { return "swd." + SWD.players.id() + ".afterHours.v1.build"; }
  function B() { return window.SolBuild || null; }
  function useBuild() { if (B()) { B().useKey(buildKey()); B().init(); } }
  /* the builder's words for this game: a piece every 2 levels finished (any path, subject or game) */
  if (window.SolBuild && SolBuild.setText) SolBuild.setText({
    rewardKicker: function (night, k, total) { return "Reward " + k + " of " + total; },
    firstKicker: function () { return "Your first reward · your first building"; },
    shopKicker: function () { return "Shop"; },
    every: "every 2 levels you finish",
    everyShort: "every 2 levels you finish",
    firstFree: "finish 2 levels for your first free piece",
    nextReward: function (night) { return "next free piece after " + (night / 5 * 2) + " levels finished"; },
    coinsFrom: function (e) { return "right answers (" + e.answer + " each on the first try) and a perfect level (+" + e.perfectNight + ")"; }
  });
  /* a new piece to choose every 2 levels finished: the builder's reward n is "level" 5n */
  var REWARD_EVERY = 2;

  /* ── state of the selection ── */
  function last() { var l = D().last; l.band = l.band || "P1"; l.subject = l.subject || SWD.SUBJECTS[l.band][0]; l.mode = l.mode || "path"; return l; }
  function modeDef(id) { return SWD.MODES.filter(function (m) { return m.id === id; })[0] || null; }
  function classicDef(id) { return SWD.CLASSIC.filter(function (m) { return m.id === id; })[0] || null; }
  function levelKey(band, subject, mode) { return band + "|" + subject + "|" + mode; }
  function savedLevel(band, subject, mode) { return D().prog.levels[levelKey(band, subject, mode)] || 1; }

  /* ── the selection screen ── */
  function renderPlayers() {
    var host = $("player-chips"); host.innerHTML = "";
    SWD.players.list().forEach(function (p) {
      var b = el("button", "chip" + (p.id === SWD.players.id() ? " on" : ""), esc(p.name));
      b.type = "button"; b.setAttribute("aria-pressed", p.id === SWD.players.id() ? "true" : "false");
      b.addEventListener("click", function () { SWD.players.use(p.id); renderAll(); });
      host.appendChild(b);
    });
    var add = el("button", "chip add", "+ Add player"); add.type = "button";
    add.addEventListener("click", function () {
      askName("Add a player", "First name or nickname (no last names):", "", function (n) { SWD.players.add(n); renderAll(); });
    });
    host.appendChild(add);
    var cur = SWD.players.current();
    $("player-tools").innerHTML = "";
    var look = el("button", "btn small", '<img src="assets/chars/' + (D().last.char || CHARS[0]) + '_preview.png" alt="" width="28" height="28"> Look'); look.type = "button";
    look.addEventListener("click", openLook);
    var ren = el("button", "btn small", "Rename"); ren.type = "button";
    ren.addEventListener("click", function () { askName("Rename", "New name for " + cur.name + ":", cur.name, function (n) { SWD.players.rename(cur.id, n); renderAll(); }); });
    var del = el("button", "btn small", "Remove"); del.type = "button";
    del.addEventListener("click", function () {
      if (SWD.players.list().length <= 1) { window.alert("There must be at least one player."); return; }
      if (window.confirm("Remove " + cur.name + " and all of " + cur.name + "'s progress from this Chromebook?")) {
        var gone = cur.id;
        if (SWD.players.remove(gone)) { try { Object.keys(localStorage).forEach(function (k) { if (k.indexOf("swd." + gone + ".") === 0) localStorage.removeItem(k); }); } catch (e) {} }
        renderAll();
      }
    });
    $("player-tools").appendChild(look); $("player-tools").appendChild(ren); $("player-tools").appendChild(del);
  }
  function renderPath() {
    var l = last(), p1 = l.band === "P1";
    document.querySelectorAll("#path-cards .card").forEach(function (c) { var on = c.getAttribute("data-path") === (p1 ? "1" : "2"); c.classList.toggle("selected", on); c.setAttribute("aria-pressed", on ? "true" : "false"); });
    var g = $("grade-chips"); g.innerHTML = ""; g.classList.toggle("hidden", p1);
    if (!p1) {
      g.appendChild(el("span", "chips-label", "Grade:"));
      SWD.BANDS.filter(function (b) { return b.path === 2; }).forEach(function (b) {
        var c = el("button", "chip grade" + (b.id === l.band ? " on" : ""), b.grade); c.type = "button";
        c.setAttribute("aria-label", "Grade " + b.grade); c.setAttribute("aria-pressed", b.id === l.band ? "true" : "false");
        c.addEventListener("click", function () { setBand(b.id); });
        g.appendChild(c);
      });
    }
  }
  function setBand(id) {
    var l = last();
    l.band = id;
    if (SWD.SUBJECTS[id].indexOf(l.subject) === -1) l.subject = SWD.SUBJECTS[id][0];
    l.focus = "";
    if (!modeAvailable(l.mode)) l.mode = "path";
    SWD.players.save(); renderAll();
  }
  function modeAvailable(id) {
    var l = last(), m = modeDef(id);
    if (m) return m.fits(l.band, l.subject);
    return l.band !== "P1" && !!classicDef(id);
  }
  function renderSubjects() {
    var l = last(), host = $("subject-cards"); host.innerHTML = "";
    SWD.SUBJECTS[l.band].forEach(function (s) {
      var d = SWD.SUBJECT_DEFS[s], c = el("button", "card subject" + (s === l.subject ? " selected" : ""), '<span class="icon">' + d.icon + '</span><span class="name">' + d.name + '</span><span class="meta">' + esc(SWD.SUBJECT_META[l.band][s]) + "</span>");
      c.type = "button"; c.setAttribute("aria-pressed", s === l.subject ? "true" : "false");
      c.addEventListener("click", function () { l.subject = s; l.focus = ""; if (!modeAvailable(l.mode)) l.mode = "path"; SWD.players.save(); renderAll(); });
      host.appendChild(c);
    });
  }
  function renderModes() {
    var l = last(), host = $("mode-cards"); host.innerHTML = "";
    SWD.MODES.forEach(function (m) {
      if (!m.fits(l.band, l.subject)) return;
      host.appendChild(modeCard(m, m.dex === "tap" ? "Tap only · no timer" : "Moving targets · slow"));
    });
    var ch = $("classic-cards"); ch.innerHTML = "";
    $("classic-wrap").classList.toggle("hidden", l.band === "P1");
    if (l.band !== "P1") SWD.CLASSIC.forEach(function (m) { ch.appendChild(modeCard(m, "Main game · needs quicker hands", true)); });
    if (!modeAvailable(l.mode)) { l.mode = "path"; SWD.players.save(); }
    document.querySelectorAll(".mode-card").forEach(function (c) { var on = c.getAttribute("data-mode") === l.mode; c.classList.toggle("selected", on); c.setAttribute("aria-pressed", on ? "true" : "false"); });
  }
  function modeCard(m, badge, classic) {
    var c = el("button", "card mode-card" + (classic ? " classic" : ""), '<span class="icon">' + m.icon + '</span><span class="name">' + esc(m.name) + '</span><span class="badge ' + (badge.indexOf("Tap") === 0 ? "easy" : "") + '">' + esc(badge) + '</span><span class="meta">' + esc(m.meta) + "</span>");
    c.type = "button"; c.setAttribute("data-mode", m.id);
    c.addEventListener("click", function () { last().mode = m.id; last().focus = ""; SWD.players.save(); renderModes(); renderPlay(); });
    return c;
  }
  function renderPlay() {
    var l = last(), lv = savedLevel(l.band, l.subject, l.mode), m = modeDef(l.mode) || classicDef(l.mode), band = SWD.band(l.band);
    $("play-line").innerHTML = "<b>" + esc(SWD.players.current().name) + "</b> · " + esc(band.label) + " · " + esc(SWD.SUBJECT_DEFS[l.subject].name) + " · " + esc(m ? m.name : "") + (modeDef(l.mode) ? " · <b>Level " + lv + "</b>" : "");
    var sel = $("focus-select"); sel.innerHTML = '<option value="">All the skills for this level</option>';
    var list = SWD.skills(l.band, l.subject).filter(function (k) { return modeDef(l.mode) ? SWD.fits(k, l.mode === "market" ? "path" : l.mode) : SWD.fits(k, "path"); });
    list.forEach(function (k) { var o = el("option", null, esc(k.name)); o.value = k.code; if (k.code === l.focus) o.selected = true; sel.appendChild(o); });
    $("focus-row").classList.toggle("hidden", l.mode === "market" || !!classicDef(l.mode));
    $("btn-play").textContent = modeDef(l.mode) ? (lv > 1 ? "▶ Play level " + lv : "▶ Play") : "▶ Open " + (m ? m.name : "");
    $("btn-restart").classList.toggle("hidden", !(modeDef(l.mode) && lv > 1));
  }
  function renderAcc() {
    var name = SWD.players.current().name;
    $("acc-title").textContent = "Accommodations for " + name;
    var sum = SWD.acc.summary();
    /* the bottom bar shows the first few; the window has them all */
    var MAXP = 4, shown = sum.slice(0, MAXP).map(function (s) { return '<span class="pill">' + esc(s) + "</span>"; });
    if (sum.length > MAXP) shown.push('<button type="button" class="pill more" id="acc-more">+' + (sum.length - MAXP) + " more</button>");
    $("acc-summary").innerHTML = sum.length ? shown.join("") : '<span class="dim">none (standard settings)</span>';
    if ($("acc-more")) $("acc-more").addEventListener("click", openAcc);
    var pre = $("acc-presets"); pre.innerHTML = "";
    SWD.ACC_PRESETS.forEach(function (p) {
      var b = el("button", "btn small", esc(p.name)); b.type = "button"; b.title = p.what;
      b.addEventListener("click", function () { SWD.acc.preset(p.id); renderAcc(); renderPlay(); });
      pre.appendChild(b);
    });
    var rs = el("button", "btn small", "Standard settings"); rs.type = "button";
    rs.addEventListener("click", function () { SWD.acc.reset(); renderAcc(); });
    pre.appendChild(rs);
    var host = $("acc-groups"); host.innerHTML = "";
    var groups = {};
    SWD.ACC_DEFS.forEach(function (d) { (groups[d.group] = groups[d.group] || []).push(d); });
    /* three columns: the short Sound and calm group goes under Hearing and seeing, so the window fits one screen */
    var COLS = [["Hearing and seeing", "Sound and calm"], ["Moving and touching"], ["Thinking and pace"]], colEls = COLS.map(function () { var c = el("div", "acc-col"); host.appendChild(c); return c; });
    Object.keys(groups).forEach(function (g) {
      var ci = 0; COLS.forEach(function (c, i) { if (c.indexOf(g) !== -1) ci = i; });
      var box = el("fieldset", "acc-group"); box.appendChild(el("legend", null, esc(g)));
      groups[g].forEach(function (d) {
        var row = el("div", "acc-row"), v = SWD.acc.get(d.id);
        var lab = el("div", "acc-lab", '<span class="acc-name">' + esc(d.name) + "</span>" + (d.what ? '<span class="acc-what">' + esc(d.what) + "</span>" : ""));
        row.appendChild(lab);
        var ctl = el("div", "acc-ctl");
        if (d.type === "bool") {
          var t = el("button", "toggle" + (v ? " on" : ""), v ? "On" : "Off"); t.type = "button"; t.setAttribute("aria-pressed", v ? "true" : "false"); t.setAttribute("aria-label", d.name);
          t.addEventListener("click", function () { SWD.acc.set(d.id, !SWD.acc.get(d.id)); renderAcc(); if (d.id === "readAloud" && SWD.acc.get(d.id)) SWD.speech.say("Read aloud is on."); });
          ctl.appendChild(t);
        } else {
          var seg = el("div", "seg"); seg.setAttribute("role", "group"); seg.setAttribute("aria-label", d.name);
          d.opts.forEach(function (o) {
            var b = el("button", o[0] === v ? "on" : "", esc(o[1])); b.type = "button"; b.setAttribute("aria-pressed", o[0] === v ? "true" : "false");
            b.addEventListener("click", function () { SWD.acc.set(d.id, o[0]); renderAcc(); if (d.id === "voiceRate") SWD.speech.say("This is how fast I will read."); });
            seg.appendChild(b);
          });
          ctl.appendChild(seg);
        }
        row.appendChild(ctl); box.appendChild(row);
      });
      colEls[ci].appendChild(box);
    });
    if (!SWD.speech.ok()) $("acc-summary").insertAdjacentHTML("beforeend", '<span class="pill warn">This browser cannot read aloud.</span>');
  }
  function renderAll() {
    SWD.acc.apply();
    useBuild();
    renderPlayers(); renderPath(); renderSubjects(); renderModes(); renderPlay(); renderAcc();
    $("stars-line").textContent = "★ " + (D().prog.stars || 0) + (B() ? " · 🪙 " + B().coins() + " coins" : "");
  }

  /* ── playing ── */
  var run = null;
  function startPlay(level) {
    var l = last(), m = modeDef(l.mode);
    if (!m) { openClassic(); return; }
    level = level || savedLevel(l.band, l.subject, l.mode);
    SWD.speech.stop();
    $("home").classList.add("hidden"); $("play").classList.remove("hidden");
    var stage = $("stage"); stage.innerHTML = ""; stage.className = "stage mode-" + m.id;
    $("hud-title").textContent = m.name + " · " + SWD.band(l.band).short + " · " + SWD.SUBJECT_DEFS[l.subject].name + " · Level " + level;
    $("hud-dots").innerHTML = "";
    var cleanups = [], gone = false, sayFn = null, paused = false, results = { list: [] };
    run = {
      leave: function () { gone = true; cleanups.forEach(function (f) { try { f(); } catch (e) {} }); cleanups = []; SWD.speech.stop(); },
      say: function () { if (sayFn) sayFn(); },
      pause: function (p) { paused = !!p; }
    };
    var ctx = {
      band: l.band, subject: l.subject, level: level, focus: l.focus || "", stage: stage,
      n: Number(SWD.acc.get("perLevel")) || 8, choices: Number(SWD.acc.get("choices")) || 4,
      rng: SWD.rng(SWD.seed()),
      acc: function (id) { return SWD.acc.get(id); },
      hintAfter: function () { return Number(SWD.acc.get("hint")) || 0; },
      gone: function () { return gone; },
      isPaused: function () { return paused; },
      onCleanup: function (f) { cleanups.push(f); },
      setSay: function (f) { sayFn = f; },
      progress: function (i, n) {
        var h = $("hud-dots"), s = "";
        for (var k = 0; k < n; k++) s += '<span class="dot' + (k < i ? " done" : k === i ? " now" : "") + '"></span>';
        h.innerHTML = s; h.setAttribute("aria-label", "Question " + (i + 1) + " of " + n);
      },
      record: function (it, first) {
        var code = it.skill || "misc", st = D().prog.skills[code] = D().prog.skills[code] || { r: 0, n: 0, name: it.skillName || code };
        st.n++; if (first) st.r++; st.t = Date.now(); st.name = it.skillName || st.name;
        results.list.push(first);
        /* coins for the shop: the main game's rate for a right answer on the first try, a few after a hint */
        if (B()) { var c = first ? B().economy().answer : 2; B().addCoins(c, "answer"); results.coins = (results.coins || 0) + c; }
        SWD.players.save();
      },
      /* through an <img>, so the Canvas build (which serves files from its bundle through img src) can map the address */
      styleSprite: function (e) { var im = new Image(); im.src = "assets/chars/" + (D().last.char || CHARS[0]) + "_sheet.png"; e.style.backgroundImage = 'url("' + im.src + '")'; },
      walk: function (e, on) {
        if (e._walk) { clearInterval(e._walk); e._walk = null; }
        e.classList.toggle("walking", !!on);
        if (on) { var c = 0; e._walk = setInterval(function () { c = (c + 1) % 6; e.style.setProperty("--fx", c); }, 110); cleanups.push(function () { clearInterval(e._walk); }); }
        else e.style.setProperty("--fx", 0);
      },
      finish: function (res) { if (gone) return; run.leave(); res.coins = results.coins || 0; showResults(l, m, level, res); }
    };
    SWD.music.wanted = true; SWD.music.sync();
    m.start(ctx);
  }
  function showResults(l, m, level, res) {
    var total = res.total || 0, right = res.right || 0, pct = total ? right / total : 0;
    var stars = pct >= 0.9 ? 3 : pct >= 0.6 ? 2 : 1, up = pct >= 0.6, prog = D().prog, key = levelKey(l.band, l.subject, m.id);
    if (up && (prog.levels[key] || 1) <= level) prog.levels[key] = level + 1;
    prog.stars = (prog.stars || 0) + stars;
    /* the town: a perfect level's bonus coins, and a new piece to pick every REWARD_EVERY levels */
    var coins = res.coins || 0;
    if (B() && total && right === total) { var bonus = B().economy().perfectNight; B().addCoins(bonus, "perfect"); coins += bonus; }
    prog.done = (prog.done || 0) + 1;
    var night = prog.done % REWARD_EVERY === 0 ? prog.done / REWARD_EVERY * 5 : 0, reward = !!(B() && night && B().rewardDue(night));
    prog.log = (prog.log || []).concat([{ d: new Date().toISOString().slice(0, 16).replace("T", " "), b: l.band, s: l.subject, m: m.id, lv: level, r: right, n: total }]).slice(-60);
    SWD.players.save();
    SWD.sound("done");
    var box = $("results");
    $("res-title").textContent = up ? "Level " + level + " done!" : "Good work!";
    $("res-stars").innerHTML = [1, 2, 3].map(function (k) { return '<span class="star' + (k <= stars ? " on" : "") + '">★</span>'; }).join("");
    $("res-msg").innerHTML = (total ? right + " of " + total + " right on the first try." : "") + (up ? " Level " + (level + 1) + " is next." : " Let's practice this level once more.") +
      '<span class="res-town">' + (coins ? "🪙 +" + coins + " coins for the shop" + (B() ? " (" + B().coins() + " in all)" : "") + ". " : "") +
      (reward ? "🏰 You earned a new piece for your town!" : B() ? "Build with them in My Town." : "") + "</span>";
    $("btn-res-next").textContent = up ? "▶ Next level" : "▶ Play again";
    $("btn-res-next").onclick = function () { box.classList.add("hidden"); startPlay(up ? level + 1 : level); };
    $("btn-res-again").classList.toggle("hidden", !up);
    $("btn-res-again").onclick = function () { box.classList.add("hidden"); startPlay(level); };
    box.classList.remove("hidden");
    if (SWD.acc.get("readAloud")) SWD.speech.say(SWD.strip($("res-title").textContent + ". " + $("res-msg").innerHTML));
    setTimeout(function () { $("btn-res-next").focus(); }, 50);
    /* the reward: the builder's own window (pick one of three pieces and place it), over the results */
    if (reward) setTimeout(function () { B().showReward(night, function () { $("btn-res-next").focus(); }); }, 900);
  }
  function goHome() {
    if (run) { run.leave(); run = null; }
    ["results", "leave"].forEach(function (id) { $(id).classList.add("hidden"); });
    SWD.input.pauseAll(false);
    $("play").classList.add("hidden"); $("home").classList.remove("hidden");
    SWD.music.wanted = false; SWD.music.sync();
    renderAll();
  }
  function askLeave() {
    if ($("play").classList.contains("hidden") || !run) return;
    run.pause(true);
    SWD.input.pauseAll(true);
    SWD.speech.stop();
    $("leave").classList.remove("hidden");
    setTimeout(function () { $("btn-leave-stay").focus(); }, 30);
  }
  /* ── full screen: the start screen's one button goes in; leaving full screen (the Exit button or Esc) comes back to it ── */
  function fsEl() { return document.fullscreenElement || document.webkitFullscreenElement || null; }
  var fsWorks = true;
  function showLaunch() {
    if (!fsWorks) return;
    SWD.speech.stop();
    if (run && !$("play").classList.contains("hidden") && $("results").classList.contains("hidden") && $("leave").classList.contains("hidden")) askLeave();
    SWD.input.pauseAll(true);
    $("launch").classList.remove("hidden");
    setTimeout(function () { $("btn-launch").focus(); }, 30);
  }
  function hideLaunch() {
    $("launch").classList.add("hidden");
    if ($("leave").classList.contains("hidden")) SWD.input.pauseAll(false);
  }
  function noFullScreen() {
    /* not allowed here (a frame without allowfullscreen) or not supported: play in the page; the Full screen
       buttons stay on screen to try again */
    fsWorks = false;
    hideLaunch();
    document.body.classList.remove("is-full");
  }
  function enterFull() {
    var el = document.documentElement, req = el.requestFullscreen || el.webkitRequestFullscreen;
    fsWorks = true;
    hideLaunch();
    if (!req || document.fullscreenEnabled === false) { noFullScreen(); return; }
    try { var p = req.call(el); if (p && p.catch) p.catch(noFullScreen); } catch (e) { noFullScreen(); }
  }
  function exitFull() {
    var ex = document.exitFullscreen || document.webkitExitFullscreen;
    if (fsEl() && ex) { try { var p = ex.call(document); if (p && p.catch) p.catch(function () {}); } catch (e) {} }
    else showLaunch();
  }
  function onFullChange() {
    var full = !!fsEl();
    document.body.classList.toggle("is-full", full);
    if (full) hideLaunch(); else showLaunch();
  }
  window.SWDFull = { enter: enterFull, exit: exitFull };

  function stay() { $("leave").classList.add("hidden"); SWD.input.pauseAll(false); if (run) run.pause(false); }

  /* ── the main game's modes ── */
  function openClassic() {
    var l = last();
    try {
      /* the accommodations the main game understands: read aloud, larger text and a slower game (its own store, with the prefix swd-play.html gives it) */
      var k = "swd." + SWD.players.id() + ".afterHours.v1.acc.VA", sp = Number(SWD.acc.get("speed")) || 100, accE = {};
      if (SWD.acc.get("readAloud")) accE.audio = { on: true };
      if (SWD.acc.get("textSize") !== "normal") accE.big = { on: true };
      if (sp < 100) accE.slow = { on: true, pct: sp };
      localStorage.setItem(k, JSON.stringify(accE));
    } catch (e) {}
    var go = { p: SWD.players.id(), band: l.band, subject: l.subject, mode: l.mode };
    /* the Canvas build is one page: it reloads itself as the main game (tools/build-swd-canvas.js), told which by sessionStorage */
    if (window.SOL_CANVAS) { try { sessionStorage.setItem("solSWD.play", JSON.stringify(go)); } catch (e) {} location.reload(); return; }
    location.href = "swd-play.html?p=" + encodeURIComponent(go.p) + "&band=" + go.band + "&subject=" + go.subject + "&mode=" + go.mode;
  }

  /* ── windows: the accommodations, a name, the look, My Town, the progress report ── */
  function openAcc() { renderAcc(); $("acc-dlg").classList.remove("hidden"); setTimeout(function () { var b = $("acc-dlg").querySelector("[data-close]"); if (b) b.focus(); }, 30); }
  var nameCb = null;
  function askName(title, label, val, cb) {
    $("name-title").textContent = title; $("name-label").textContent = label;
    var inp = $("name-input"); inp.value = val || ""; nameCb = cb;
    $("name-dlg").classList.remove("hidden");
    setTimeout(function () { inp.focus(); inp.select(); }, 30);
  }
  function nameOk() { var v = $("name-input").value.trim(); $("name-dlg").classList.add("hidden"); if (v && nameCb) nameCb(v); nameCb = null; }
  function openLook() {
    var g = $("look-grid"); g.innerHTML = "";
    CHARS.forEach(function (c) {
      var b = el("button", "look" + ((D().last.char || CHARS[0]) === c ? " on" : ""), '<img src="assets/chars/' + c + '_preview.png" alt="" width="64" height="64">'); b.type = "button";
      b.setAttribute("aria-label", "Look " + (CHARS.indexOf(c) + 1));
      b.addEventListener("click", function () { D().last.char = c; SWD.players.save(); $("look").classList.add("hidden"); renderPlayers(); });
      g.appendChild(b);
    });
    $("look").classList.remove("hidden");
  }
  /* My Town: the builder's editor (place, move, turn, recolour and delete pieces); the Shop spends the coins */
  function openTown() {
    if (!B()) return;
    useBuild();
    if (!B().state().theme) { B().showShop(Math.max(5, (D().prog.done || 0) * 5), renderAll); return; }
    B().showGallery(renderAll);
  }
  function openShop() { if (!B()) return; useBuild(); B().showShop(Math.max(5, (D().prog.done || 0) * 5), renderAll); }
  function openReport() {
    var p = D().prog, h = "", name = SWD.players.current().name;
    h += "<p>" + esc(name) + " · ★ " + (p.stars || 0) + " stars · " + (p.log || []).length + " levels played (last 60 kept)</p>";
    SWD.BANDS.forEach(function (b) {
      SWD.SUBJECTS[b.id].forEach(function (s) {
        var rows = SWD.skills(b.id, s).map(function (k) { return [k, p.skills[k.code]]; }).filter(function (x) { return x[1] && x[1].n; });
        var mk = Object.keys(p.skills).filter(function (c) { return c.indexOf(b.id + "." + s + ".market-") === 0; }).map(function (c) { return [{ name: p.skills[c].name, code: c }, p.skills[c]]; });
        rows = rows.concat(mk);
        var lv = Object.keys(p.levels).filter(function (k) { return k.indexOf(b.id + "|" + s + "|") === 0; }).map(function (k) { var md = modeDef(k.split("|")[2]); return (md ? md.name : k.split("|")[2]) + ": level " + p.levels[k]; });
        if (!rows.length && !lv.length) return;
        h += "<h3>" + esc(b.label) + " · " + esc(SWD.SUBJECT_DEFS[s].name) + "</h3>";
        if (lv.length) h += '<p class="dim">' + esc(lv.join(" · ")) + "</p>";
        if (rows.length) {
          h += '<table class="swd-table rep"><thead><tr><th>Skill</th><th>Right on the first try</th><th></th></tr></thead><tbody>';
          rows.forEach(function (x) {
            var pc = Math.round(100 * x[1].r / x[1].n);
            h += "<tr><td>" + esc(x[0].name) + "</td><td>" + x[1].r + " of " + x[1].n + " (" + pc + "%)</td><td><span class=\"bar\"><span style=\"width:" + pc + "%\" class=\"" + (pc >= 80 ? "good" : pc >= 60 ? "ok" : "low") + "\"></span></span></td></tr>";
          });
          h += "</tbody></table>";
        }
      });
    });
    if (h.indexOf("<h3>") === -1) h += '<p class="dim">No answers yet. Play a level and the skills show up here.</p>';
    var log = (p.log || []).slice(-12).reverse();
    if (log.length) {
      h += "<h3>Latest levels</h3>" + SWD.art.table(["When", "Path", "Subject", "Game", "Level", "Right"], log.map(function (x) {
        var md = modeDef(x.m); return [x.d, SWD.band(x.b).short, SWD.SUBJECT_DEFS[x.s].name, md ? md.name : x.m, String(x.lv), x.r + " / " + x.n];
      }), null, "rep");
    }
    $("report-body").innerHTML = h;
    $("report-title").textContent = "Progress: " + name;
    $("report").classList.remove("hidden");
  }

  /* ── wiring ── */
  function closeOnBackdrop(id) { $(id).addEventListener("click", function (e) { if (e.target === $(id)) $(id).classList.add("hidden"); }); }
  function init() {
    SWD.acc.apply();
    document.querySelectorAll("#path-cards .card").forEach(function (c) {
      c.addEventListener("click", function () {
        var p = c.getAttribute("data-path"), l = last();
        if (p === "1") setBand("P1"); else setBand(l.band !== "P1" ? l.band : (l.lastGrade || "G2"));
      });
    });
    $("focus-select").addEventListener("change", function () { last().focus = this.value; SWD.players.save(); });
    $("btn-play").addEventListener("click", function () { if (last().band !== "P1") last().lastGrade = last().band; SWD.players.save(); startPlay(); });
    $("btn-restart").addEventListener("click", function () { startPlay(1); });
    $("btn-menu").addEventListener("click", askLeave);
    $("btn-launch").addEventListener("click", enterFull);
    $("btn-exit-full").addEventListener("click", exitFull);
    $("btn-exit-full-play").addEventListener("click", exitFull);
    $("btn-enter-full").addEventListener("click", enterFull);
    $("btn-enter-full-play").addEventListener("click", enterFull);
    document.addEventListener("fullscreenchange", onFullChange);
    document.addEventListener("webkitfullscreenchange", onFullChange);
    SWD.input.pauseAll(true);   /* nothing behind the start screen takes keys */
    $("btn-say").addEventListener("click", function () { if (run) run.say(); });
    $("btn-leave-stay").addEventListener("click", stay);
    $("btn-leave-go").addEventListener("click", goHome);
    $("btn-res-home").addEventListener("click", goHome);
    $("btn-report").addEventListener("click", openReport);
    $("btn-town").addEventListener("click", openTown);
    $("btn-shop").addEventListener("click", openShop);
    $("btn-print").addEventListener("click", function () { window.print(); });
    $("btn-reset-prog").addEventListener("click", function () {
      if (!window.confirm("Erase all of " + SWD.players.current().name + "'s levels, stars, town and skill results on this Chromebook? (Accommodations stay.)")) return;
      D().prog = { levels: {}, skills: {}, stars: 0, log: [] }; SWD.players.save();
      try { localStorage.removeItem(buildKey()); } catch (e) {}
      if (B() && B()._reload) B()._reload();
      openReport(); renderAll();
    });
    document.querySelectorAll("[data-close]").forEach(function (b) { b.addEventListener("click", function () { $(b.getAttribute("data-close")).classList.add("hidden"); }); });
    ["report", "look", "name-dlg", "acc-dlg"].forEach(closeOnBackdrop);
    $("btn-acc").addEventListener("click", openAcc);
    $("btn-name-ok").addEventListener("click", nameOk);
    $("name-input").addEventListener("keydown", function (e) { if (e.key === "Enter") { e.preventDefault(); nameOk(); } });
    $("leave").addEventListener("click", function (e) { if (e.target === $("leave")) stay(); });
    document.addEventListener("keydown", function (e) {
      if (!$("launch").classList.contains("hidden")) return;   /* the start screen: only its button */
      if (e.key === "Escape") {
        if (!$("leave").classList.contains("hidden")) { stay(); e.preventDefault(); return; }
        ["report", "look", "name-dlg", "acc-dlg"].forEach(function (id) { $(id).classList.add("hidden"); });
        if (!$("play").classList.contains("hidden") && $("results").classList.contains("hidden")) { askLeave(); e.preventDefault(); }
      }
      if ((e.key === "r" || e.key === "R") && run && !SWD.acc.get("scan") && !(e.target && /INPUT|SELECT|TEXTAREA/.test(e.target.tagName))) run.say();
    });
    document.addEventListener("visibilitychange", function () { if (document.hidden && run && !$("play").classList.contains("hidden")) askLeave(); });
    SWD.players.onChange(function () {});
    renderAll();
    window.SWDApp = { startPlay: startPlay, goHome: goHome, renderAll: renderAll, openReport: openReport };
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init); else init();
})();
