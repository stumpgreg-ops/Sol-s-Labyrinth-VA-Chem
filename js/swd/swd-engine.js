/* Sol's Labyrinth · SWD: the main game's modes with SWD questions (swd-play.html, Path 2 only).
   This file takes the place of js/content.js … content6.js for the engine (js/game.js and js/modes.js): it defines the
   same globals (HEIST_PACKS, HEIST_FAMILIES, heistBuildPack …) but builds them from the SWD banks for one grade:
   one unit (family) per subject, one skill card per SWD skill, and one pack per generated question. A question's
   pictures (coins, clocks, tables) go in the side panel, its choices are plain text, and the number of choices follows
   the player's "Answer choices" accommodation (2, 3 or 4 letters). Questions whose answers are only pictures are
   left out here; they stay in the SWD modes. swd-play.html's first script reads window.SWD_PLAY from the link. */
(function (global) {
  "use strict";
  var SWD = global.SWD, P = global.SWD_PLAY || { band: "G2", subject: "math", acc: {} };
  var band = SWD.band(P.band).id === P.band ? P.band : "G2";
  if (band === "P1") band = "G2";
  /* the SWD pictures read the coin-values accommodation through SWD.acc */
  SWD.acc = SWD.acc || { get: function (k) { return (P.acc || {})[k]; } };
  var NCH = Math.max(2, Math.min(4, Number((P.acc || {}).choices) || 4));
  var SUBJ_ID = { math: "MATH", reading: "READ", life: "LIFE" };
  var B = SWD.band(band);

  var FAMILIES = [{ id: "ALL", label: "All subjects", short: "All", kind: B.name, meta: "Math, reading and life skills mixed.", stds: [] }];
  SWD.SUBJECTS[band].forEach(function (s) {
    var d = SWD.SUBJECT_DEFS[s];
    FAMILIES.push({ id: band + SUBJ_ID[s], label: d.name, short: d.name, kind: B.name, meta: SWD.SUBJECT_META[band][s], stds: [band + "." + s.toUpperCase()], subject: s });
  });
  var FAMILY_POOL = {};
  FAMILIES.forEach(function (f) { FAMILY_POOL[f.id] = f.id === "ALL" ? FAMILIES.slice(1).map(function (x) { return x.id; }) : [f.id]; });

  /* standards = the subjects, key concepts = the skills; skill cards per unit */
  var STANDARDS = {}, SKILLS = { ALL: [] };
  FAMILIES.slice(1).forEach(function (f) {
    var keys = {}, cards = [];
    SWD.skills(band, f.subject).forEach(function (k) {
      if (!k.gen) return;
      keys[k.code] = k.name;
      cards.push({ strand: k.code.toUpperCase(), kind: B.name + " · " + f.label, name: k.name, meta: "" });
    });
    STANDARDS[band + "." + f.subject.toUpperCase()] = { name: f.label, keys: keys };
    cards.push({ strand: "ALL", kind: "All skills", name: "All", meta: "Every " + f.label.toLowerCase() + " skill mixed, leaning toward the ones you miss most." });
    SKILLS[f.id] = cards;
    SKILLS.ALL.push({ strand: band + "." + f.subject.toUpperCase(), kind: B.name, name: f.label, meta: SWD.SUBJECT_META[band][f.subject] });
  });
  SKILLS.ALL.push({ strand: "ALL", kind: "All skills", name: "All", meta: "Every subject mixed." });

  /* ── the packs: one per question ── */
  var PACKS = [];
  function choiceText(c) {
    var t = String(c.text || "").trim();
    if (!t) return null;
    if (/[<>&]/.test(t)) t = c.say || t.replace(/&/g, "and").replace(/</g, "less than").replace(/>/g, "greater than");
    return t;
  }
  function addItem(k, f, it, n) {
    var list = it.choices.slice(0, NCH).map(choiceText);
    if (list.some(function (x) { return !x; })) return false;
    var r = SWD.rng(n * 7919 + 13), order = r.shuffle(list.map(function (_, i) { return i; }));
    var html = "";
    if (it.passage) html += '<p class="swd-p-title"><b>' + SWD.esc(it.passage.title) + "</b></p>" + it.passage.html;
    if (it.visual) html += '<div class="swd-visual">' + it.visual + "</div>";
    if (!html) html = "<p>" + SWD.esc(k.name) + "</p>";
    PACKS.push({
      id: k.code + "-" + n, family: f.id, title: k.name, kind: B.name + " · " + f.label, blurb: "", level: k.tier <= 2 ? 1 : k.tier === 3 ? 2 : 3, passage: html,
      claims: [{ id: "q", sol: k.code, stem: SWD.strip(it.prompt), choices: order.map(function (i, j) { return { letter: "ABCD"[j], text: SWD.esc(list[i]) }; }), correct: "ABCD"[order.indexOf(0)], hint: it.hint }]
    });
    return true;
  }
  FAMILIES.slice(1).forEach(function (f) {
    SWD.skills(band, f.subject).forEach(function (k) {
      if (!k.gen) return;
      var seen = {}, made = 0, n = 0;
      if (k.passages) {
        /* every question of every passage */
        k.passages.forEach(function (p, pi) {
          p.q.forEach(function (q, qi) {
            var hint = q[q.length - 1], html = p.text.map(function (t) { return "<p>" + t + "</p>"; }).join("") + (p.table ? SWD.art.table(p.table[0], p.table.slice(1), null) : "");
            addItem(k, f, SWD.item({ prompt: q[0], choices: q.slice(1, q.length - 1), hint: hint, passage: { title: p.title, html: html } }), pi * 100 + qi);
          });
        });
        return;
      }
      while (made < 40 && n < 160) {
        var r = SWD.rng(n * 104729 + k.code.length * 31 + 7), it = k.gen(r, 1 + (n % 5));
        n++;
        var sig = it.prompt + "|" + (it.visual || "") + "|" + (it.choices[0] && it.choices[0].text);
        if (seen[sig]) continue;
        seen[sig] = 1;
        if (addItem(k, f, it, n)) made++;
      }
    });
  });

  /* ── the same helpers js/content.js gives the engine ── */
  function wordCount(s) { return String(s).replace(/<[^>]+>/g, " ").trim().split(/\s+/).filter(Boolean).length; }
  function letterIndex(claim, letter) {
    var ch = (claim && claim.choices) || [], L = String(letter).toUpperCase();
    for (var i = 0; i < ch.length; i++) if (String(ch[i].letter).toUpperCase() === L) return i;
    var fb = "ABCD".indexOf(L); return fb >= 0 ? fb : 0;
  }
  function correctList(claim) {
    var c = claim && claim.correct;
    if (c == null) return [];
    return (Array.isArray(c) ? c.slice() : [c]).map(function (x) { return typeof x === "number" ? x : letterIndex(claim, x); });
  }
  function isMulti(claim) { return correctList(claim).length > 1; }
  function strandOf(claim) { return String((claim && (claim.strand || claim.sol)) || band + ".MATH").toUpperCase(); }
  function standardOf(claim) { var p = strandOf(claim).split("."); return p.slice(0, 2).join("."); }
  function strandMatch(claim, strand) {
    strand = String(strand || "ALL").toUpperCase();
    if (!strand || strand === "ALL" || strand === "NULL") return true;
    var code = strandOf(claim);
    return code === strand || code.indexOf(strand + ".") === 0;
  }
  function passageWords(p) { if (p._words) return p._words; p._words = wordCount(p.passage || ""); return p._words; }
  var STAMINA = { start: 20, step: 5, every: 5, max: 160 };
  function targetWords(night) { night = Math.max(1, parseInt(night, 10) || 1); return Math.min(STAMINA.max, STAMINA.start + STAMINA.step * Math.floor((night - 1) / STAMINA.every)); }
  function packLevel(p) { return p.level === 1 || p.level === 2 || p.level === 3 ? p.level : 1; }
  function familyDef(id) { for (var i = 0; i < FAMILIES.length; i++) if (FAMILIES[i].id === id) return FAMILIES[i]; return null; }
  function buildPack(family, strand) {
    family = family || "ALL";
    strand = String(strand == null ? "ALL" : strand).toUpperCase();
    if (!strand || strand === "NULL") strand = "ALL";
    var pool = FAMILY_POOL[family] || FAMILY_POOL.ALL, claims = [];
    PACKS.filter(function (p) { return pool.indexOf(p.family) !== -1; }).forEach(function (p) {
      p.claims.forEach(function (c) {
        if (!strandMatch(c, strand)) return;
        claims.push({ id: p.id + ":" + c.id, packId: p.id, sol: c.sol, strand: strandOf(c), standard: standardOf(c), level: packLevel(p), words: passageWords(p), partB: null, isPartB: false,
          stem: c.stem, doThis: c.stem, claim: c.stem, choices: c.choices.map(function (ch, i) { return { letter: ch.letter, text: ch.text, slipIndex: i }; }), correct: c.correct,
          passage: p.passage, packTitle: p.title, family: p.family });
      });
    });
    if (!claims.length && strand !== "ALL") return buildPack(family, "ALL");
    var card = familyDef(family);
    return { family: family, strand: strand, title: (card ? card.label : family) + (strand !== "ALL" ? " · " + strand : ""), slips: [], claims: claims };
  }

  global.HEIST_PACKS = PACKS;
  global.HEIST_FAMILIES = FAMILIES;
  global.HEIST_FAMILY_POOL = FAMILY_POOL;
  global.HEIST_STANDARDS = STANDARDS;
  global.HEIST_SKILLS = SKILLS;
  global.HEIST_STRAND_ALIASES = {};
  global.heistWordCount = wordCount;
  global.heistBuildPack = buildPack;
  global.heistCorrectList = correctList;
  global.heistStrandOf = strandOf;
  global.heistStandardOf = standardOf;
  global.heistStrandMatch = strandMatch;
  global.heistFamilyDef = familyDef;
  global.heistPackLevel = packLevel;
  global.heistTargetWords = targetWords;
  global.heistStamina = STAMINA;
  global.heistIsMulti = isMulti;

  /* the unit cards on the engine's title screen: one per subject of this grade */
  try {
    var host = document.querySelector("#title-screen .unit-packs");
    if (host) {
      host.innerHTML = "";
      FAMILIES.forEach(function (f) {
        var b = document.createElement("button");
        b.type = "button"; b.className = "card" + (f.subject === P.subject ? " selected" : ""); b.setAttribute("data-family", f.id);
        b.innerHTML = '<span class="kind">' + SWD.esc(f.kind) + '</span><span class="name">' + SWD.esc(f.label) + '</span><span class="meta">' + SWD.esc(f.meta) + "</span>";
        host.appendChild(b);
      });
    }
  } catch (e) {}
})(window);
