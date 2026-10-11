/* Sol's Labyrinth · SWD: players, accommodations, read aloud, sounds and the one input layer every mode uses.
   No PIN and no teacher page: a teacher, a parent or the student opens Accommodations on the main selection screen
   and changes them. Each player on the Chromebook has their own accommodations and progress (localStorage, this
   browser profile only; nothing leaves the Chromebook):
     swd.v1.players            [{ id, name }]
     swd.v1.current            the player id
     swd.v1.p.<id>             { acc: {...}, prog: {...}, last: {...} }
   The input layer (SWD.input.attach) lets a student choose an answer by
     tap or click (with "hold to choose" and "ignore extra taps" for tremor or accidental taps),
     hovering (dwell) for head pointers and eye-gaze mice,
     number keys 1-5, arrows and Enter,
     one-switch scanning: the choices light up one at a time and Space, Enter, any key or a tap anywhere picks the lit one. */
(function () {
  "use strict";
  var SWD = window.SWD = window.SWD || {};
  var LS_PLAYERS = "swd.v1.players", LS_CUR = "swd.v1.current", LS_P = "swd.v1.p.";
  function lsGet(k, d) { try { var v = localStorage.getItem(k); return v == null ? d : JSON.parse(v); } catch (e) { return d; } }
  function lsSet(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); return true; } catch (e) { return false; } }
  SWD.lsGet = lsGet; SWD.lsSet = lsSet;

  /* ── the accommodations ── */
  var DEFS = [
    { group: "Hearing and seeing", id: "readAloud", name: "Read aloud", what: "Every question and answer is read out loud when it appears. (The 🔊 button always works.)", type: "bool", def: false },
    { group: "Hearing and seeing", id: "voiceRate", name: "Reading voice speed", type: "pick", def: "0.85", opts: [["0.65", "Slow"], ["0.85", "Medium"], ["1", "Normal"]] },
    { group: "Hearing and seeing", id: "textSize", name: "Text size", type: "pick", def: "normal", opts: [["normal", "Normal"], ["large", "Large"], ["xlarge", "Extra large"]] },
    { group: "Hearing and seeing", id: "contrast", name: "High contrast", what: "Black and white with yellow outlines.", type: "bool", def: false },
    { group: "Hearing and seeing", id: "spacing", name: "Extra space between letters and lines", what: "Easier to track for some readers.", type: "bool", def: false },
    { group: "Hearing and seeing", id: "coinValues", name: "Show coin values", what: "Coins also show 1¢, 5¢, 10¢, 25¢.", type: "bool", def: false },
    { group: "Moving and touching", id: "targetSize", name: "Button size", type: "pick", def: "large", opts: [["normal", "Normal"], ["large", "Large"], ["huge", "Huge"]] },
    { group: "Moving and touching", id: "hold", name: "Hold to choose", what: "Keep a finger or the mouse button down on an answer until the ring fills. Stops accidental taps.", type: "pick", def: "0", opts: [["0", "Off"], ["400", "Short hold"], ["900", "Long hold"]] },
    { group: "Moving and touching", id: "ignoreRepeat", name: "Ignore extra taps", what: "After one choice, taps are ignored for a moment (helps with tremor).", type: "bool", def: true },
    { group: "Moving and touching", id: "dwell", name: "Hover to choose", what: "Rest the pointer on an answer to choose it (head pointer, eye gaze, joystick mouse).", type: "pick", def: "0", opts: [["0", "Off"], ["1200", "1 second"], ["2000", "2 seconds"]] },
    { group: "Moving and touching", id: "scan", name: "Switch scanning", what: "The answers light up one at a time. Press a switch, Space, Enter or tap anywhere to choose the lit one.", type: "bool", def: false },
    { group: "Moving and touching", id: "scanSpeed", name: "Scanning speed", type: "pick", def: "2000", opts: [["1200", "Fast"], ["2000", "Medium"], ["3000", "Slow"], ["4500", "Very slow"]] },
    { group: "Thinking and pace", id: "choices", name: "Answer choices", what: "How many answers to pick from.", type: "pick", def: "4", opts: [["2", "2"], ["3", "3"], ["4", "4"]] },
    { group: "Thinking and pace", id: "perLevel", name: "Questions in a level", type: "pick", def: "8", opts: [["5", "5"], ["8", "8"], ["10", "10"]] },
    { group: "Thinking and pace", id: "speed", name: "Game speed", what: "For games with moving parts (Raven Catch and the main game's modes).", type: "pick", def: "100", opts: [["100", "Normal"], ["85", "85 %"], ["75", "75 %"], ["60", "60 %"], ["50", "50 %"]] },
    { group: "Thinking and pace", id: "hint", name: "Hints", what: "A hint after a wrong answer; then the right answer glows.", type: "pick", def: "1", opts: [["1", "After 1 wrong answer"], ["2", "After 2 wrong answers"], ["0", "Never"]] },
    { group: "Thinking and pace", id: "memory", name: "Rune Match cards", type: "pick", def: "up", opts: [["up", "Face up (no memory needed)"], ["down", "Face down (memory game)"]] },
    { group: "Thinking and pace", id: "runningTotal", name: "Market Day: show the running total", what: "Shows how much money is on the counter so far.", type: "bool", def: true },
    { group: "Sound and calm", id: "sounds", name: "Sound effects", type: "bool", def: true },
    { group: "Sound and calm", id: "music", name: "Background music", type: "bool", def: false },
    { group: "Sound and calm", id: "calm", name: "Calm screen", what: "No shaking, flashing or bouncing; gentle colors.", type: "bool", def: false }
  ];
  var PRESETS = [
    { id: "p1", name: "Path 1 starter", what: "Read aloud, large text, huge buttons, 2 choices, 5 questions, hints right away, coin values.",
      set: { readAloud: true, textSize: "large", targetSize: "huge", choices: "2", perLevel: "5", hint: "1", coinValues: true, memory: "up", runningTotal: true } },
    { id: "p2", name: "Path 2 starter", what: "Large buttons, 3 choices, 8 questions, hints after 1 wrong answer.",
      set: { textSize: "normal", targetSize: "large", choices: "3", perLevel: "8", hint: "1" } },
    { id: "switch", name: "Switch user", what: "Scanning on (slow), huge buttons, read aloud, 2 choices, calm screen.",
      set: { scan: true, scanSpeed: "3000", targetSize: "huge", readAloud: true, choices: "2", hint: "1", calm: true, hold: "0", dwell: "0" } },
    { id: "tremor", name: "Shaky hands", what: "Hold to choose, ignore extra taps, huge buttons, slower game.",
      set: { hold: "400", ignoreRepeat: true, targetSize: "huge", speed: "60" } }
  ];
  SWD.ACC_DEFS = DEFS; SWD.ACC_PRESETS = PRESETS;
  function defaults() { var o = {}; DEFS.forEach(function (d) { o[d.id] = d.def; }); return o; }

  /* ── players ── */
  function newId() { return "p" + Date.now().toString(36) + Math.floor(Math.random() * 1296).toString(36); }
  var players = lsGet(LS_PLAYERS, null);
  if (!players || !players.length) { players = [{ id: newId(), name: "Player 1" }]; lsSet(LS_PLAYERS, players); }
  var curId = lsGet(LS_CUR, players[0].id);
  if (!players.some(function (p) { return p.id === curId; })) curId = players[0].id;
  var data = null;
  function load() {
    data = lsGet(LS_P + curId, null) || {};
    data.acc = Object.assign(defaults(), data.acc || {});
    data.prog = data.prog || { levels: {}, skills: {}, stars: 0, town: [], log: [] };
    data.last = data.last || {};
  }
  function save() { lsSet(LS_P + curId, data); lsSet(LS_CUR, curId); }
  load();
  var listeners = [];
  function changed() { listeners.forEach(function (f) { try { f(); } catch (e) {} }); }
  SWD.players = {
    list: function () { return players.slice(); },
    current: function () { return players.filter(function (p) { return p.id === curId; })[0]; },
    id: function () { return curId; },
    use: function (id) { if (!players.some(function (p) { return p.id === id; })) return; save(); curId = id; load(); save(); SWD.acc.apply(); changed(); },
    add: function (name) {
      name = String(name || "").trim().slice(0, 20) || "Player " + (players.length + 1);
      var p = { id: newId(), name: name };
      players.push(p); lsSet(LS_PLAYERS, players); SWD.players.use(p.id); return p;
    },
    rename: function (id, name) { players.forEach(function (p) { if (p.id === id) p.name = String(name || "").trim().slice(0, 20) || p.name; }); lsSet(LS_PLAYERS, players); changed(); },
    remove: function (id) {
      if (players.length <= 1) return false;
      players = players.filter(function (p) { return p.id !== id; }); lsSet(LS_PLAYERS, players);
      try { localStorage.removeItem(LS_P + id); } catch (e) {}
      if (curId === id) { curId = players[0].id; load(); save(); SWD.acc.apply(); }
      changed(); return true;
    },
    data: function () { return data; },
    save: save,
    onChange: function (f) { listeners.push(f); }
  };

  /* ── accommodations: read, write, apply to the page ── */
  SWD.acc = {
    get: function (id) { return data.acc[id]; },
    num: function (id) { return Number(data.acc[id]) || 0; },
    set: function (id, v) { data.acc[id] = v; save(); SWD.acc.apply(); changed(); },
    preset: function (pid) {
      var p = PRESETS.filter(function (x) { return x.id === pid; })[0];
      if (!p) return;
      Object.keys(p.set).forEach(function (k) { data.acc[k] = p.set[k]; });
      save(); SWD.acc.apply(); changed();
    },
    reset: function () { data.acc = defaults(); save(); SWD.acc.apply(); changed(); },
    all: function () { return Object.assign({}, data.acc); },
    /* what is on, in a few words each (the summary on the main screen) */
    summary: function () {
      var out = [], a = data.acc, d = defaults();
      DEFS.forEach(function (def) {
        var v = a[def.id];
        if (v === d[def.id] || def.id === "voiceRate" || def.id === "scanSpeed") return;
        if (def.type === "bool") { if (v) out.push(def.name); else if (d[def.id]) out.push(def.name + ": off"); return; }
        var o = def.opts.filter(function (x) { return x[0] === v; })[0];
        if (o) out.push(def.name + ": " + o[1]);
      });
      return out;
    },
    apply: function () {
      var b = document.body; if (!b) return;
      var a = data.acc;
      b.classList.toggle("acc-large", a.textSize === "large");
      b.classList.toggle("acc-xlarge", a.textSize === "xlarge");
      b.classList.toggle("acc-hc", !!a.contrast);
      b.classList.toggle("acc-space", !!a.spacing);
      b.classList.toggle("acc-calm", !!a.calm);
      b.classList.toggle("tgt-large", a.targetSize === "large");
      b.classList.toggle("tgt-huge", a.targetSize === "huge");
      b.classList.toggle("acc-scan", !!a.scan);
      SWD.music && SWD.music.sync && SWD.music.sync();
    }
  };

  /* ── read aloud (the Chromebook's own voice: no audio files, works offline) ── */
  var voice = null;
  function pickVoice() {
    try {
      var vs = window.speechSynthesis.getVoices() || [];
      voice = vs.filter(function (v) { return /^en(-|_)US/i.test(v.lang) && /Google|Natural|Samantha/i.test(v.name); })[0] || vs.filter(function (v) { return /^en(-|_)US/i.test(v.lang); })[0] || vs.filter(function (v) { return /^en/i.test(v.lang); })[0] || null;
    } catch (e) { voice = null; }
  }
  var speechOk = typeof window.speechSynthesis !== "undefined" && typeof window.SpeechSynthesisUtterance !== "undefined";
  if (speechOk) { pickVoice(); try { window.speechSynthesis.onvoiceschanged = pickVoice; } catch (e) {} }
  /* say a list of parts in order; onPart(i) as each starts (for highlighting) */
  var sayToken = 0;
  SWD.speech = {
    ok: function () { return speechOk; },
    stop: function () { sayToken++; if (speechOk) try { window.speechSynthesis.cancel(); } catch (e) {} },
    say: function (parts, onPart, onDone) {
      if (!speechOk) { if (onDone) onDone(); return; }
      SWD.speech.stop();
      var tok = sayToken;
      parts = (Array.isArray(parts) ? parts : [parts]).map(function (p) { return SWD.strip(p); }).filter(Boolean);
      var i = 0;
      (function next() {
        if (tok !== sayToken) return;
        if (i >= parts.length) { if (onDone) onDone(); return; }
        var u = new SpeechSynthesisUtterance(parts[i].replace(/¢/g, " cents").replace(/—/g, ", ").replace(/×/g, " times ").replace(/÷/g, " divided by ").replace(/−/g, " minus "));
        u.rate = Number(data.acc.voiceRate) || 0.85; u.lang = "en-US";
        if (voice) u.voice = voice;
        var idx = i;
        u.onstart = function () { if (onPart && tok === sayToken) onPart(idx); };
        u.onend = u.onerror = function () { i++; setTimeout(next, 120); };
        try { window.speechSynthesis.speak(u); } catch (e) { if (onDone) onDone(); }
      })();
    }
  };

  /* ── sounds: short tones made with Web Audio ── */
  var actx = null;
  function ctx() { if (!actx) { try { actx = new (window.AudioContext || window.webkitAudioContext)(); } catch (e) { actx = null; } } return actx; }
  function tone(freq, t0, dur, type, vol) {
    var c = ctx(); if (!c) return;
    var o = c.createOscillator(), g = c.createGain();
    o.type = type || "sine"; o.frequency.value = freq;
    g.gain.setValueAtTime(0, c.currentTime + t0);
    g.gain.linearRampToValueAtTime(vol || 0.12, c.currentTime + t0 + 0.02);
    g.gain.exponentialRampToValueAtTime(0.0001, c.currentTime + t0 + dur);
    o.connect(g); g.connect(c.destination);
    o.start(c.currentTime + t0); o.stop(c.currentTime + t0 + dur + 0.05);
  }
  SWD.sound = function (kind) {
    if (!data.acc.sounds) return;
    var calm = !!data.acc.calm, v = calm ? 0.06 : 0.12;
    try {
      if (ctx() && actx.state === "suspended") actx.resume();
      if (kind === "right") { tone(660, 0, 0.18, "triangle", v); tone(880, 0.12, 0.25, "triangle", v); }
      else if (kind === "wrong") { tone(220, 0, 0.22, "sine", v * 0.8); }
      else if (kind === "tap") { tone(520, 0, 0.06, "sine", v * 0.5); }
      else if (kind === "coin") { tone(1250, 0, 0.08, "square", v * 0.35); tone(1650, 0.05, 0.12, "square", v * 0.3); }
      else if (kind === "done") { [523, 659, 784, 1046].forEach(function (f, i) { tone(f, i * 0.13, 0.3, "triangle", v); }); }
      else if (kind === "scan") { tone(440, 0, 0.04, "sine", v * 0.25); }
    } catch (e) {}
  };
  /* background music: the main game's calm tracks */
  var audioEl = null, TRACKS = ["assets/music/chill-1.mp3", "assets/music/chill-2.mp3", "assets/music/chill-3.mp3", "assets/music/spring-forest.mp3"];
  SWD.music = {
    playing: false,
    sync: function () {
      var want = !!data.acc.music && SWD.music.wanted;
      if (want && !audioEl) { try { audioEl = new Audio(TRACKS[Math.floor(Math.random() * TRACKS.length)]); audioEl.loop = true; audioEl.volume = 0.35; } catch (e) { audioEl = null; } }
      if (!audioEl) return;
      if (want) { var p = audioEl.play(); if (p && p.catch) p.catch(function () {}); } else audioEl.pause();
    },
    wanted: false
  };

  /* ── the input layer ── */
  /* attach(targets, onPick, opts): targets is an array of elements (re-read through opts.list() if given, so a mode can
     add and remove targets); onPick(i, el). Returns { destroy, pause(bool), refresh() }.
     opts.root: the element whose taps count as "the switch" when scanning (default the document). */
  var allPaused = false;
  SWD.input = {
    /* the Menu box and other windows pause every answer set at once */
    pauseAll: function (p) { allPaused = !!p; },
    attach: function (targets, onPick, opts) {
      opts = opts || {};
      var a = data.acc, holdMs = Number(a.hold) || 0, dwellMs = Number(a.dwell) || 0, scan = !!a.scan, scanMs = Number(a.scanSpeed) || 2000, guard = a.ignoreRepeat ? (opts.quick ? 400 : 800) : 120;
      var dead = false, paused = false, lastPick = 0, scanI = -1, scanTimer = null, cleanups = [];
      function list() { return (opts.list ? opts.list() : targets).filter(function (el) { return el && el.isConnected && !el.disabled && !el.classList.contains("out"); }); }
      function pick(el) {
        if (dead || paused || allPaused) return;
        var now = Date.now();
        if (now - lastPick < guard) return;
        var all = opts.list ? opts.list() : targets, i = all.indexOf(el);
        if (i < 0 || el.disabled || el.classList.contains("out")) return;
        lastPick = now;
        SWD.speech.stop();
        onPick(i, el);
        if (scan) restartScan();
      }
      function on(el, ev, fn, o) { el.addEventListener(ev, fn, o); cleanups.push(function () { el.removeEventListener(ev, fn, o); }); }
      /* pointer: tap (or hold) */
      function bindEl(el) {
        if (el._swdBound) return;
        el._swdBound = true;
        var downAt = 0, timer = null, ring = null, x0 = 0, y0 = 0, moved = false;
        function clearHold() { if (timer) clearTimeout(timer); timer = null; el.classList.remove("holding"); if (ring) ring.style.animation = "none"; }
        on(el, "pointerdown", function (e) {
          if (dead || paused || allPaused || scan) return;
          if (holdMs) e.preventDefault();
          downAt = Date.now(); x0 = e.clientX; y0 = e.clientY; moved = false;
          if (holdMs) {
            el.classList.add("holding");
            el.style.setProperty("--hold", holdMs + "ms");
            ring = el.querySelector(".hold-ring");
            if (!ring) { ring = document.createElement("span"); ring.className = "hold-ring"; el.appendChild(ring); }
            ring.style.animation = "none"; void ring.offsetWidth; ring.style.animation = "";
            timer = setTimeout(function () { clearHold(); pick(el); }, holdMs);
          }
        });
        /* a finger that slides (scrolling the page) never chooses */
        on(el, "pointermove", function (e) { if (downAt && (Math.abs(e.clientX - x0) > 14 || Math.abs(e.clientY - y0) > 14)) { moved = true; if (holdMs) clearHold(); } });
        on(el, "pointerup", function () { if (scan) return; if (holdMs) { clearHold(); return; } if (downAt && !moved && Date.now() - downAt < 4000) pick(el); downAt = 0; });
        on(el, "pointerleave", function () { if (holdMs) clearHold(); });
        on(el, "pointercancel", clearHold);
        /* keyboard focus + Enter */
        on(el, "keydown", function (e) { if (!scan && !allPaused && (e.key === "Enter" || e.key === " ")) { e.preventDefault(); pick(el); } });
        /* dwell */
        if (dwellMs && !scan) {
          var dt = null;
          on(el, "pointerenter", function (e) {
            if (e.pointerType === "touch") return;
            el.classList.add("dwelling"); el.style.setProperty("--dwell", dwellMs + "ms");
            dt = setTimeout(function () { el.classList.remove("dwelling"); pick(el); }, dwellMs);
          });
          on(el, "pointerleave", function () { el.classList.remove("dwelling"); if (dt) clearTimeout(dt); dt = null; });
        }
      }
      function bindAll() { (opts.list ? opts.list() : targets).forEach(bindEl); }
      bindAll();
      /* number keys and switch keys */
      on(document, "keydown", function (e) {
        if (dead || paused || allPaused) return;
        if (e.target && /INPUT|SELECT|TEXTAREA/.test(e.target.tagName)) return;
        if (scan) {
          if (e.key === "Escape" || e.key === "Tab") return;
          e.preventDefault();
          var L = list(); if (L[scanI]) pick(L[scanI]);
          return;
        }
        var n = parseInt(e.key, 10);
        if (n >= 1 && n <= 9) { var L2 = list(); if (L2[n - 1]) { e.preventDefault(); pick(L2[n - 1]); } }
      });
      /* scanning: the lit target moves on every scanMs; any tap on the root picks it */
      function light() {
        var L = list();
        (opts.list ? opts.list() : targets).forEach(function (el) { if (el) el.classList.remove("scan-lit"); });
        if (!L.length) return;
        scanI = (scanI + 1) % L.length;
        L[scanI].classList.add("scan-lit");
        SWD.sound("scan");
        if (opts.sayScan && data.acc.readAloud) { var t = L[scanI].getAttribute("aria-label") || L[scanI].textContent; if (t) SWD.speech.say(t); }
      }
      function restartScan() {
        if (scanTimer) clearInterval(scanTimer);
        scanI = -1;
        scanTimer = setInterval(function () { if (!paused && !allPaused) light(); }, scanMs);
        setTimeout(function () { if (!dead && !paused && !allPaused && scanI === -1) light(); }, Math.min(900, scanMs / 2));
      }
      if (scan) {
        restartScan();
        var root = opts.root || document;
        on(root, "pointerdown", function (e) {
          if (dead || paused || allPaused) return;
          if (e.target && e.target.closest && e.target.closest(".no-scan")) return;
          e.preventDefault();
          var L = list(); if (L[scanI]) pick(L[scanI]);
        });
      }
      return {
        destroy: function () { dead = true; if (scanTimer) clearInterval(scanTimer); cleanups.forEach(function (f) { f(); }); (opts.list ? opts.list() : targets).forEach(function (el) { if (el) { el._swdBound = false; el.classList.remove("scan-lit"); } }); },
        pause: function (p) { paused = !!p; },
        refresh: function () { bindAll(); },
        scanning: scan
      };
    }
  };
})();
