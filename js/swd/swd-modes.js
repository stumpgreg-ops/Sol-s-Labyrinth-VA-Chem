/* Sol's Labyrinth · SWD: the new game modes, built for students with poor or normal manual dexterity.
   Every mode is played by choosing (tap, hold, hover, keys or one-switch scanning; see SWD.input), never by steering,
   aiming or timing. There are no lives and no timers: a wrong answer is crossed out and the student tries again;
   after a wrong answer or two (the Hints accommodation) a hint shows and the right answer glows.
     path    Sol's Path       Sol walks the labyrinth; at each gate the right door opens the way on.
     market  Market Day       pay at the counter with coins and bills (exact amount, next dollar, or making change).
     match   Rune Match       match pairs of rune stones (face up, or face down as a memory game).
     sort    Sort It          put each thing in the right bin.
     raven   Raven Catch      ravens fly slowly across with answers; tap the one with the right answer
                              (moving targets: for normal dexterity, with the Game speed accommodation).
   A mode is { id, name, kind, icon, meta, dex, fits(band, subject), start(ctx) }; ctx comes from js/swd/swd-app.js. */
(function () {
  "use strict";
  var SWD = window.SWD, A = SWD.art, esc = SWD.esc;
  var MODES = SWD.MODES = [];
  function el(tag, cls, html) { var e = document.createElement(tag); if (cls) e.className = cls; if (html != null) e.innerHTML = html; return e; }
  function wait(ms) { return new Promise(function (r) { setTimeout(r, ms); }); }
  function choiceHtml(c) {
    if (c.html) return '<span class="ch-pic">' + c.html + "</span>" + (c.text ? '<span class="ch-cap">' + esc(c.text) + "</span>" : "");
    return '<span class="ch-text' + (c.big ? " big-text" : "") + (c.text.length > 40 ? " long" : "") + '">' + esc(c.text) + "</span>";
  }
  function choiceSay(c) { return c.say || c.text || "picture"; }
  SWD.choiceHtml = choiceHtml;
  /* keep the answer and the first (max - 1) distractors, then shuffle; returns { list, answer } */
  function trim(item, max, r) {
    var keep = item.choices.slice(0, Math.max(2, max)), order = r.shuffle(keep.map(function (_, i) { return i; }));
    return { list: order.map(function (i) { return keep[i]; }), answer: order.indexOf(0) };
  }
  SWD.trimChoices = trim;
  /* the question card: passage (if any), prompt, picture and a 🔊 button that reads it all */
  function questionCard(host, item, ctx, choices) {
    var card = el("div", "q-card");
    var head = "";
    if (item.passage) {
      head += '<details class="passage-box no-scan" open><summary>📖 ' + esc(item.passage.title) + '</summary><div class="passage">' + item.passage.html + "</div></details>";
    }
    card.innerHTML = head + '<div class="q-row"><button type="button" class="say-btn no-scan" aria-label="Read the question aloud" title="Read it to me (R)">🔊</button><div class="q-prompt">' + item.prompt + "</div></div>" +
      (item.visual ? '<div class="q-visual' + (item.wide ? " wide" : "") + '">' + item.visual + "</div>" : "");
    host.appendChild(card);
    var parts = [];
    if (item.passage) parts.push(item.passage.say || SWD.strip(item.passage.html));
    parts.push(item.say || SWD.strip(item.prompt));
    var sayAll = function () {
      var p = parts.slice();
      (choices || []).forEach(function (c, i) { p.push((i + 1) + ". " + choiceSay(c)); });
      SWD.speech.say(p);
    };
    card.querySelector(".say-btn").addEventListener("click", function (e) { e.stopPropagation(); sayAll(); });
    ctx.setSay(sayAll);
    return { card: card, sayAll: sayAll };
  }
  SWD.questionCard = questionCard;
  /* a row of answer buttons */
  function answerButtons(host, list, cls) {
    return list.map(function (c, i) {
      var b = el("button", "answer " + (cls || ""), '<span class="key">' + (i + 1) + "</span>" + choiceHtml(c));
      b.type = "button";
      b.setAttribute("aria-label", (i + 1) + ": " + choiceSay(c));
      host.appendChild(b);
      return b;
    });
  }
  /* one question, any number of tries: resolves with { first: true/false } when the right answer is chosen */
  function ask(ctx, host, item, opts) {
    opts = opts || {};
    return new Promise(function (resolve) {
      var t = trim(item, ctx.choices, ctx.rng), wrong = 0, q = questionCard(host, item, ctx, t.list);
      var row = el("div", "answers n" + t.list.length + (opts.rowCls ? " " + opts.rowCls : ""));
      host.appendChild(row);
      var btns = answerButtons(row, t.list, opts.btnCls), hintEl = el("p", "hint-line", "");
      if (window.SWD_TEST) btns[t.answer].setAttribute("data-test-answer", "1");
      hintEl.setAttribute("aria-live", "polite");
      host.appendChild(hintEl);
      if (ctx.acc("readAloud")) setTimeout(q.sayAll, 350);
      var inp = SWD.input.attach(btns, function (i, b) {
        if (i === t.answer) {
          inp.destroy();
          b.classList.add("right");
          SWD.sound("right");
          ctx.record(item, wrong === 0);
          if (opts.onRight) opts.onRight(b, wrong === 0).then(function () { resolve({ first: wrong === 0 }); });
          else setTimeout(function () { resolve({ first: wrong === 0 }); }, 700);
          return;
        }
        wrong++;
        b.classList.add("wrong", "out");
        b.disabled = true;
        b.setAttribute("aria-label", b.getAttribute("aria-label") + " (not this one)");
        SWD.sound("wrong");
        var hl = ctx.hintAfter();
        var msg = "Not that one. Try another.";
        if (hl && wrong >= hl && item.hint) msg = "Hint: " + item.hint;
        hintEl.textContent = msg;
        if (ctx.acc("readAloud")) SWD.speech.say(msg);
        if (hl && wrong >= hl + 1) btns[t.answer].classList.add("glow");
        /* only one answer left: show it */
        if (btns.filter(function (x) { return !x.disabled; }).length === 1) btns[t.answer].classList.add("glow");
        if (opts.onWrong) opts.onWrong(b);
      }, { root: ctx.stage, sayScan: true });
      ctx.onCleanup(function () { inp.destroy(); });
    });
  }
  SWD.ask = ask;

  /* ════════ Sol's Path ════════ */
  MODES.push({ id: "path", name: "Sol's Path", icon: "🚪", kind: "Tap a door", dex: "tap",
    meta: "Sol walks the labyrinth. At each gate, tap the door with the right answer and the way opens. No timer, no wolves.",
    fits: function (band, subject) { return SWD.levelSkills(band, subject, 99, "path").length > 0; },
    start: function (ctx) {
      var items = SWD.makeLevel(ctx.band, ctx.subject, ctx.level, ctx.n, ctx.rng, "path", ctx.focus);
      var scene = el("div", "sp-scene" + (ctx.level % 2 ? "" : " alt"));
      scene.innerHTML = '<div class="sp-wall"></div><div class="sp-floor"></div><div class="sp-gate"><span></span><span></span><span></span></div><div class="sol-sprite" aria-hidden="true"></div><div class="sp-suns"></div>';
      ctx.stage.appendChild(scene);
      var sol = scene.querySelector(".sol-sprite"), suns = scene.querySelector(".sp-suns");
      ctx.styleSprite(sol);
      items.forEach(function () { suns.appendChild(el("span", "sun", "☀")); });
      var body = el("div", "sp-body");
      ctx.stage.appendChild(body);
      var right = 0, i = 0;
      function next() {
        if (ctx.gone()) return;
        if (i >= items.length) { ctx.finish({ right: right, total: items.length }); return; }
        ctx.progress(i, items.length);
        body.innerHTML = "";
        var it = items[i];
        ask(ctx, body, it, { rowCls: "doors", btnCls: "door", onRight: function (b, first) {
          suns.children[i].classList.add(first ? "lit" : "half");
          ctx.walk(sol, true);
          scene.classList.add("open");
          return wait(ctx.acc("calm") ? 500 : 1100).then(function () { scene.classList.remove("open"); ctx.walk(sol, false); scene.classList.toggle("alt"); });
        } }).then(function (res) { if (res.first) right++; i++; next(); });
      }
      next();
    } });

  /* ════════ Market Day ════════ */
  var DENOM_NAME = { 1: "penny", 5: "nickel", 10: "dime", 25: "quarter", 100: "$1 bill", 500: "$5 bill", 1000: "$10 bill", 2000: "$20 bill" };
  function moneyPiece(v, s) { return v >= 100 ? A.bill(v, s || 0.62) : A.coin(v, (s || 0.62) * 1.9); }
  MODES.push({ id: "market", name: "Market Day", icon: "🛒", kind: "Pay at the counter", dex: "tap",
    meta: "Run the counter at Sol's market: tap coins and bills to pay the right amount, use the next-dollar way, or give change.",
    fits: function (band, subject) { return band === "P1" ? subject === "money" : subject === "life" || (band === "G2" && subject === "math"); },
    start: function (ctx) {
      var n = Math.min(ctx.n, 6), right = 0, i = 0;
      var wrap = el("div", "mk");
      ctx.stage.appendChild(wrap);
      function task() {
        if (ctx.gone()) return;
        if (i >= n) { ctx.finish({ right: right, total: n }); return; }
        ctx.progress(i, n);
        var T = SWD.marketTask(ctx.band, ctx.level, ctx.rng), placed = [], wrong = 0;
        var goalText, sayText, skill = { skill: ctx.band + "." + ctx.subject + ".market-" + T.kind, skillName: { pay: "Pay the exact amount", next: "Pay with the next dollar", change: "Give the change" }[T.kind] };
        if (T.kind === "pay") { goalText = "Pay exactly <b>" + SWD.money(T.price, T.price >= 100 ? "d" : "") + "</b>."; sayText = "The " + T.name + " costs " + SWD.sayMoney(T.price) + ". Pay exactly " + SWD.sayMoney(T.price) + "."; }
        else if (T.kind === "next") { goalText = "It costs <b>" + SWD.dollars(T.price) + "</b>. Pay with one-dollar bills, the next-dollar way."; sayText = "The " + T.name + " costs " + SWD.sayMoney(T.price) + ". Pay with one-dollar bills, the next-dollar way: one more dollar than the dollars in the price."; }
        else { goalText = "It costs <b>" + SWD.dollars(T.price) + "</b>. The customer pays <b>" + SWD.dollars(T.paid) + "</b>. Give the change."; sayText = "The " + T.name + " costs " + SWD.sayMoney(T.price) + ". The customer pays " + SWD.sayMoney(T.paid) + ". Count out the change."; }
        wrap.innerHTML = "";
        var top = el("div", "mk-top");
        top.innerHTML = '<div class="mk-item">' + A.tag(T.emoji, T.name, T.price) + (T.kind === "change" ? '<div class="mk-paid">Paid: ' + A.money(SWD.art.coinsFor(T.paid, [2000, 1000, 500, 100]), 0.8) + "</div>" : "") + "</div>" +
          '<div class="mk-goal"><button type="button" class="say-btn no-scan" aria-label="Read it aloud">🔊</button><span>' + goalText + "</span></div>";
        wrap.appendChild(top);
        var counter = el("div", "mk-counter");
        counter.innerHTML = '<div class="mk-label">' + (T.kind === "change" ? "Change to give" : "On the counter") + ' <span class="mk-total"></span></div><div class="mk-placed"></div>';
        wrap.appendChild(counter);
        var tray = el("div", "mk-tray"), hint = el("p", "hint-line", "");
        wrap.appendChild(tray); wrap.appendChild(hint);
        var acts = el("div", "mk-acts");
        acts.innerHTML = '<button type="button" class="btn mk-undo">↩ Take one back</button><button type="button" class="btn primary mk-pay">' + (T.kind === "change" ? "Give change" : "Pay") + "</button>";
        wrap.appendChild(acts);
        var placedEl = counter.querySelector(".mk-placed"), totalEl = counter.querySelector(".mk-total");
        if (window.SWD_TEST) wrap.setAttribute("data-test-task", JSON.stringify(T));
        var say = function () { SWD.speech.say(sayText); };
        top.querySelector(".say-btn").addEventListener("click", function (e) { e.stopPropagation(); say(); });
        ctx.setSay(say);
        if (ctx.acc("readAloud")) setTimeout(say, 300);
        var buttons = T.wallet.slice().sort(function (a, b) { return b - a; }).map(function (v) {
          var b = el("button", "answer money-btn", moneyPiece(v, 0.85) + '<span class="ch-cap">' + DENOM_NAME[v] + "</span>");
          b.type = "button"; b.setAttribute("aria-label", "Add a " + DENOM_NAME[v]); b._v = v;
          tray.appendChild(b); return b;
        });
        var undo = acts.querySelector(".mk-undo"), pay = acts.querySelector(".mk-pay");
        undo.setAttribute("aria-label", "Take one back"); pay.setAttribute("aria-label", T.kind === "change" ? "Give change" : "Pay");
        function sum() { return placed.reduce(function (a, b) { return a + b; }, 0); }
        function draw() {
          placedEl.innerHTML = placed.length ? placed.map(function (v) { return '<span class="mk-piece">' + moneyPiece(v, 0.5) + "</span>"; }).join("") : '<span class="dim">Tap the money below to put it here.</span>';
          totalEl.textContent = ctx.acc("runningTotal") ? "= " + SWD.money(sum(), sum() >= 100 || T.price >= 100 ? "d" : "") : "";
        }
        draw();
        var targets = buttons.concat([undo, pay]);
        var inp = SWD.input.attach(targets, function (k, b) {
          if (b === undo) { if (placed.length) { placed.pop(); SWD.sound("tap"); draw(); } return; }
          if (b !== pay) {
            if (placed.length >= 40) return;
            placed.push(b._v); SWD.sound("coin"); draw();
            if (ctx.acc("readAloud") && ctx.acc("runningTotal")) SWD.speech.say(SWD.sayMoney(sum()));
            return;
          }
          var s = sum(), ok = T.kind === "next" ? placed.every(function (v) { return v === 100; }) && s === T.goal : s === T.goal;
          if (ok) {
            inp.destroy();
            SWD.sound("right");
            ctx.record({ skill: skill.skill, skillName: skill.skillName }, wrong === 0);
            if (wrong === 0) right++;
            hint.textContent = T.kind === "change" ? "Right change! Thank you!" : "Paid! Thank you!";
            counter.classList.add("paid");
            if (ctx.acc("readAloud")) SWD.speech.say(hint.textContent);
            setTimeout(function () { i++; task(); }, 1200);
            return;
          }
          wrong++;
          SWD.sound("wrong");
          var msg;
          if (!placed.length) msg = "Put some money on the counter first.";
          else if (T.kind === "next") msg = s > T.goal ? "That is too much. The next dollar is " + SWD.dollars(T.goal) + ": " + T.goal / 100 + " one-dollar bills." : "Not enough. Look at the dollars in the price (" + Math.floor(T.price / 100) + ") and give one more: " + T.goal / 100 + " one-dollar bills.";
          else msg = (s > T.goal ? "That is too much: " : "Not enough yet: ") + SWD.money(s, "d") + ". You need " + SWD.money(T.goal, "d") + ".";
          var hl = ctx.hintAfter();
          if (hl && wrong >= hl) {
            var need = T.kind === "next" ? Array(T.goal / 100 + 1).join("1").split("").map(function () { return 100; }) : SWD.art.coinsFor(T.goal, T.wallet);
            msg += " Try: " + describe(need);
          }
          hint.textContent = msg;
          if (ctx.acc("readAloud")) SWD.speech.say(msg);
        }, { root: ctx.stage, sayScan: true, quick: true });
        ctx.onCleanup(function () { inp.destroy(); });
      }
      function describe(list) {
        var c = {}; list.forEach(function (v) { c[v] = (c[v] || 0) + 1; });
        return Object.keys(c).map(Number).sort(function (a, b) { return b - a; }).map(function (v) { return c[v] + " × " + DENOM_NAME[v]; }).join(", ") + ".";
      }
      task();
    } });

  /* ════════ Rune Match ════════ */
  MODES.push({ id: "match", name: "Rune Match", icon: "🪨", kind: "Match the pairs", dex: "tap",
    meta: "Tap a rune stone, then tap the stone that goes with it. Face up (no memory needed) or face down as a memory game.",
    fits: function (band, subject) { return SWD.levelSkills(band, subject, 99, "match").length > 0; },
    start: function (ctx) {
      var nPairs = ctx.n <= 5 ? 3 : ctx.n <= 8 ? 4 : 5, rounds = 2, round = 0, right = 0, total = 0;
      var down = ctx.acc("memory") === "down";
      var wrap = el("div", "rm");
      ctx.stage.appendChild(wrap);
      function play() {
        if (ctx.gone()) return;
        if (round >= rounds) { ctx.finish({ right: right, total: total }); return; }
        ctx.progress(round, rounds);
        var pairs = SWD.makePairs(ctx.band, ctx.subject, ctx.level, nPairs, ctx.rng, ctx.focus);
        if (!pairs.length) { ctx.finish({ right: right, total: total }); return; }
        var cards = [];
        pairs.forEach(function (p, k) { cards.push({ k: k, face: p.a, p: p }); cards.push({ k: k, face: p.b, p: p }); });
        cards = ctx.rng.shuffle(cards);
        wrap.innerHTML = '<div class="rm-head"><button type="button" class="say-btn no-scan" aria-label="Read the directions">🔊</button><span>' + (down ? "Turn over two stones. Find the ones that go together." : "Tap a stone, then tap the stone that goes with it.") + "</span></div>";
        var grid = el("div", "rm-grid c" + (cards.length <= 6 ? 3 : 4));
        wrap.appendChild(grid);
        var hint = el("p", "hint-line", "");
        wrap.appendChild(hint);
        var say = function () { SWD.speech.say(down ? "Turn over two stones. Find the ones that go together." : "Tap a stone, then tap the stone that goes with it."); };
        wrap.querySelector(".say-btn").addEventListener("click", function (e) { e.stopPropagation(); say(); });
        ctx.setSay(say);
        if (ctx.acc("readAloud")) setTimeout(say, 300);
        var btns = cards.map(function (c, i) {
          var b = el("button", "answer stone" + (down ? " down" : ""), '<span class="face">' + choiceHtml(c.face) + '</span><span class="back" aria-hidden="true">ᛟ</span>');
          b.type = "button"; b._c = c; b.setAttribute("aria-label", down ? "stone " + (i + 1) : choiceSay(c.face));
          if (window.SWD_TEST) b.setAttribute("data-test-pair", String(c.k));
          grid.appendChild(b); return b;
        });
        var first = null, misses = {}, left = pairs.length, busy = false;
        var inp = SWD.input.attach(btns, function (i, b) {
          if (busy || b.classList.contains("done") || b === first) return;
          if (down) { b.classList.add("up"); b.setAttribute("aria-label", choiceSay(b._c.face)); }
          if (ctx.acc("readAloud")) SWD.speech.say(choiceSay(b._c.face));
          if (!first) { first = b; b.classList.add("picked"); SWD.sound("tap"); return; }
          var a = first; first = null;
          a.classList.remove("picked");
          if (a._c.k === b._c.k) {
            [a, b].forEach(function (x) { x.classList.add("done", "right", "out"); x.disabled = true; });
            SWD.sound("right");
            var firstTry = !misses[a._c.k];
            ctx.record({ skill: a._c.p.skill, skillName: a._c.p.skillName }, firstTry);
            total++; if (firstTry) right++;
            hint.textContent = "";
            left--;
            if (!left) { inp.destroy(); setTimeout(function () { round++; play(); }, 900); }
            return;
          }
          misses[a._c.k] = (misses[a._c.k] || 0) + 1; misses[b._c.k] = (misses[b._c.k] || 0) + 1;
          SWD.sound("wrong");
          a.classList.add("wrong"); b.classList.add("wrong");
          busy = true;
          var hl = ctx.hintAfter();
          if (hl && misses[a._c.k] >= hl) {
            btns.forEach(function (x) { if (x._c.k === a._c.k && !x.classList.contains("done")) x.classList.add("glow"); });
            hint.textContent = "These two go together.";
          } else hint.textContent = "Those two don't go together. Try again.";
          setTimeout(function () {
            busy = false;
            a.classList.remove("wrong"); b.classList.remove("wrong");
            if (down) { [a, b].forEach(function (x) { if (!x.classList.contains("done") && !x.classList.contains("glow")) { x.classList.remove("up"); x.setAttribute("aria-label", "stone"); } }); }
          }, down ? 1400 : 700);
        }, { root: ctx.stage, sayScan: true });
        ctx.onCleanup(function () { inp.destroy(); });
      }
      play();
    } });

  /* ════════ Sort It ════════ */
  MODES.push({ id: "sort", name: "Sort It", icon: "🧺", kind: "Put it in the right bin", dex: "tap",
    meta: "One thing at a time comes down the line. Tap the bin it belongs in.",
    fits: function (band, subject) { return SWD.levelSkills(band, subject, 99, "sort").length > 0; },
    start: function (ctx) {
      var S = SWD.makeSorts(ctx.band, ctx.subject, ctx.level, ctx.n, ctx.rng, ctx.focus);
      if (!S || !S.items.length) { ctx.finish({ right: 0, total: 0 }); return; }
      var wrap = el("div", "so");
      ctx.stage.appendChild(wrap);
      wrap.innerHTML = '<div class="so-head"><button type="button" class="say-btn no-scan" aria-label="Read it aloud">🔊</button><span class="so-q">' + esc(S.prompt) + '</span></div><div class="so-belt"><div class="so-item"></div></div><div class="so-bins n' + S.bins.length + '"></div><p class="hint-line"></p>';
      var itemEl = wrap.querySelector(".so-item"), binsEl = wrap.querySelector(".so-bins"), hint = wrap.querySelector(".hint-line");
      var bins = S.bins.map(function (b, i) {
        var x = el("button", "answer bin", '<span class="key">' + (i + 1) + '</span><span class="bin-name">' + choiceHtml(b) + '</span><span class="bin-count">0</span>');
        x.type = "button"; x.setAttribute("aria-label", "Bin " + (i + 1) + ": " + choiceSay(b));
        binsEl.appendChild(x); return x;
      });
      var i = 0, right = 0, wrong = 0, cur = null;
      function sayIt() { if (!cur) return; SWD.speech.say([S.prompt, choiceSay(cur.item)].concat(S.bins.map(function (b, k) { return (k + 1) + ". " + choiceSay(b); }))); }
      wrap.querySelector(".say-btn").addEventListener("click", function (e) { e.stopPropagation(); sayIt(); });
      ctx.setSay(sayIt);
      function show() {
        if (ctx.gone()) return;
        if (i >= S.items.length) { inp.destroy(); ctx.finish({ right: right, total: S.items.length }); return; }
        ctx.progress(i, S.items.length);
        cur = S.items[i]; wrong = 0; hint.textContent = "";
        bins.forEach(function (b) { b.classList.remove("glow", "wrong"); });
        itemEl.className = "so-item enter";
        itemEl.innerHTML = choiceHtml(cur.item);
        if (window.SWD_TEST) bins.forEach(function (b, k) { if (k === cur.bin) b.setAttribute("data-test-answer", "1"); else b.removeAttribute("data-test-answer"); });
        if (ctx.acc("readAloud")) setTimeout(sayIt, 250);
      }
      var inp = SWD.input.attach(bins, function (k, b) {
        if (!cur) return;
        if (k === cur.bin) {
          SWD.sound("right");
          ctx.record({ skill: cur.skill, skillName: cur.skillName }, wrong === 0);
          if (wrong === 0) right++;
          var c = b.querySelector(".bin-count"); c.textContent = String(Number(c.textContent) + 1);
          b.classList.add("right"); itemEl.className = "so-item drop d" + k;
          cur = null;
          setTimeout(function () { b.classList.remove("right"); i++; show(); }, ctx.acc("calm") ? 450 : 750);
          return;
        }
        wrong++;
        SWD.sound("wrong");
        b.classList.add("wrong");
        setTimeout(function () { b.classList.remove("wrong"); }, 600);
        var hl = ctx.hintAfter(), msg = "Not that bin. Try again.";
        if (hl && wrong >= hl) { msg = cur.hint ? "Hint: " + cur.hint : "It goes in: " + choiceSay(S.bins[cur.bin]) + "."; bins[cur.bin].classList.add("glow"); }
        hint.textContent = msg;
        if (ctx.acc("readAloud")) SWD.speech.say(msg);
      }, { root: ctx.stage, sayScan: true });
      ctx.onCleanup(function () { inp.destroy(); });
      show();
    } });

  /* ════════ Raven Catch ════════ */
  var RAVEN = '<svg viewBox="0 0 90 46" width="90" height="46" aria-hidden="true"><path d="M8 26 Q22 6 40 18 Q52 4 70 14 Q60 20 58 24 L80 22 L64 30 Q52 40 34 34 Q20 36 8 26Z" fill="#1d1f29" stroke="#4a5068" stroke-width="2"/><circle cx="66" cy="20" r="2.4" fill="#f5c842"/><path d="M76 21 L88 19 L77 25Z" fill="#e8b04a"/></svg>';
  MODES.push({ id: "raven", name: "Raven Catch", icon: "🐦", kind: "Catch the right raven", dex: "move",
    meta: "Hugin's ravens fly across carrying answers. Tap the raven with the right one. Slow, big targets; change Game speed in Accommodations.",
    fits: function (band, subject) { return SWD.levelSkills(band, subject, 99, "raven").length > 0; },
    start: function (ctx) {
      var items = SWD.makeLevel(ctx.band, ctx.subject, ctx.level, ctx.n, ctx.rng, "raven", ctx.focus);
      var wrap = el("div", "rv");
      ctx.stage.appendChild(wrap);
      var qHost = el("div", "rv-q"), sky = el("div", "rv-sky");
      wrap.appendChild(qHost); wrap.appendChild(sky);
      var pauseBtn = el("button", "btn rv-pause no-scan", "⏸ Pause");
      pauseBtn.type = "button"; wrap.appendChild(pauseBtn);
      var paused = false, raf = 0, last = 0, ravens = [], i = 0, right = 0;
      var base = (ctx.band === "P1" ? 38 : 52) * (1 + Math.min(0.5, (ctx.level - 1) * 0.03)) * (Number(ctx.acc("speed")) || 100) / 100;
      pauseBtn.addEventListener("click", function (e) { e.stopPropagation(); paused = !paused; pauseBtn.textContent = paused ? "▶ Go" : "⏸ Pause"; if (inp) inp.pause(paused); });
      var inp = null;
      function frame(t) {
        if (ctx.gone()) return;
        var dt = last ? Math.min(0.05, (t - last) / 1000) : 0; last = t;
        if (!paused && !ctx.isPaused()) {
          var W = sky.clientWidth;
          /* the ravens fly to the edge of the sky and turn back, so every answer stays on screen */
          ravens.forEach(function (r) {
            if (r.caught) return;
            var w = r.el.offsetWidth || 160, max = Math.max(0, W - w - 4);
            r.x += r.v * dt * r.dir;
            if (r.x >= max) { r.x = max; r.dir = -1; }
            if (r.x <= 4) { r.x = 4; r.dir = 1; }
            r.el.classList.toggle("left", r.dir < 0);
            r.el.style.transform = "translateX(" + r.x.toFixed(1) + "px)";
          });
        }
        raf = requestAnimationFrame(frame);
      }
      function next() {
        if (ctx.gone()) return;
        if (inp) { inp.destroy(); inp = null; }
        if (i >= items.length) { cancelAnimationFrame(raf); ctx.finish({ right: right, total: items.length }); return; }
        ctx.progress(i, items.length);
        var it = items[i], t = trim(it, ctx.choices, ctx.rng), wrong = 0;
        qHost.innerHTML = "";
        var q = questionCard(qHost, it, ctx, t.list);
        var hint = el("p", "hint-line", ""); qHost.appendChild(hint);
        sky.innerHTML = ""; ravens = [];
        var lanes = t.list.length, W = sky.clientWidth || 600;
        t.list.forEach(function (c, k) {
          var b = el("button", "answer raven", RAVEN + '<span class="rv-sign"><span class="key">' + (k + 1) + "</span>" + choiceHtml(c) + "</span>");
          b.type = "button"; b.setAttribute("aria-label", (k + 1) + ": " + choiceSay(c));
          b.style.top = (k / lanes * 100) + "%"; b.style.height = (100 / lanes) + "%";
          sky.appendChild(b);
          var dir = k % 2 ? -1 : 1;
          ravens.push({ el: b, x: W * (0.05 + ((k * 0.31) % 0.55)), v: base * (0.85 + ctx.rng.next() * 0.3), dir: dir });
        });
        if (window.SWD_TEST) ravens[t.answer].el.setAttribute("data-test-answer", "1");
        if (ctx.acc("readAloud")) setTimeout(q.sayAll, 300);
        inp = SWD.input.attach(ravens.map(function (r) { return r.el; }), function (k, b) {
          if (k === t.answer) {
            ravens[k].caught = true; b.classList.add("right", "caught");
            SWD.sound("right");
            ctx.record(it, wrong === 0);
            if (wrong === 0) right++;
            inp.destroy(); inp = null;
            setTimeout(function () { i++; next(); }, 900);
            return;
          }
          wrong++;
          b.classList.add("wrong", "out"); b.disabled = true;
          SWD.sound("wrong");
          var hl = ctx.hintAfter(), msg = "Not that raven. Try another.";
          if (hl && wrong >= hl && it.hint) msg = "Hint: " + it.hint;
          if (hl && wrong >= hl + 1) ravens[t.answer].el.classList.add("glow");
          hint.textContent = msg;
          if (ctx.acc("readAloud")) SWD.speech.say(msg);
        }, { root: sky, sayScan: true });
      }
      ctx.onCleanup(function () { cancelAnimationFrame(raf); if (inp) inp.destroy(); });
      raf = requestAnimationFrame(frame);
      next();
    } });

  /* the main game's modes (Path 2 only): they run in swd-play.html with this band's questions */
  SWD.CLASSIC = [
    { id: "maze", name: "The Labyrinth", icon: "🐺", kind: "From the main game", meta: "The main game's maze: grab the right letter and carry it to EXIT · SAFE while Hati the wolves hunt. Needs arrow keys or the on-screen pad." },
    { id: "raid", name: "Eagle Swoop", icon: "🦅", kind: "From the main game", meta: "Shoot the bird with the right letter (Galaga style). Needs quick hands." },
    { id: "rocks", name: "Rune Rocks", icon: "☄️", kind: "From the main game", meta: "Pull in the rock with the right letter (Asteroids style). Needs quick hands." },
    { id: "sky", name: "Sun Chariot", icon: "🌞", kind: "From the main game", meta: "Fly the chariot to the right letter. Needs quick hands." },
    { id: "ring", name: "Wolf Ring", icon: "⭕", kind: "From the main game", meta: "Reach the right runestone in the wolves' ring. Needs quick hands." },
    { id: "worms", name: "Root Worms", icon: "🪱", kind: "From the main game", meta: "Shoot the glowing worm segment with the right letter (Centipede style). Needs quick hands." }
  ];
})();
