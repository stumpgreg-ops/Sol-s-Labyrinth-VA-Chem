/* Sol's Labyrinth · SWD Contained edition: the shared core (no game code here).
   Everything the SWD page needs lives under window.SWD:
     SWD.BANDS      the two paths: Path 1 "First Skills" (kindergarten to grade 1 skills) and Path 2, grade 2 to grade 6,
                    each grade its own band (P1, G2, G3, G4, G5, G6)
     SWD.SUBJECTS   the subjects a band offers (Path 1: money, math, reading, life; Path 2: math, reading, life)
     SWD.skill()    the banks (js/swd/swd-bank-*.js) register their skills here, one per band and subject
     SWD.makeLevel  a level's questions for a band, subject and level number
   A skill: { code, band, subject, name, tier, gen(r, t) -> item, pair?(r, t), sort?(r, t), market? }
     tier   the first difficulty step (1-5) the skill appears at; a level's step is SWD.tierOf(level)
     gen    one multiple-choice item: { prompt, say, visual, choices: [answer, distractor, ...], hint, passage? }
            choices[0] is always the right answer (the modes shuffle); a choice is text or { text, html, say }
     pair   one matching pair for Rune Match: { a, b, key } (a and b are choices; key identifies the pair)
     sort   one sorting item for Sort It: { bins: [names], item: choice, bin: index, prompt }
   The items are teen-respectful: the skills are early-grade, the pictures and stories are about jobs, food, money,
   phones, buses, sports and errands, never baby themes. */
(function () {
  "use strict";
  var SWD = window.SWD = window.SWD || {};
  SWD.VERSION = "1.0.0";

  /* ── random numbers: a seeded generator so a level can be rebuilt the same way in a test ── */
  function rng(seed) {
    var a = (seed >>> 0) || 1;
    function next() {
      a = (a + 0x6D2B79F5) >>> 0;
      var t = a;
      t = Math.imul(t ^ (t >>> 15), t | 1);
      t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    }
    var r = {
      next: next,
      int: function (lo, hi) { return lo + Math.floor(next() * (hi - lo + 1)); },
      pick: function (arr) { return arr[Math.floor(next() * arr.length)]; },
      chance: function (p) { return next() < p; },
      shuffle: function (arr) {
        var a2 = arr.slice();
        for (var i = a2.length - 1; i > 0; i--) { var j = Math.floor(next() * (i + 1)), t = a2[i]; a2[i] = a2[j]; a2[j] = t; }
        return a2;
      },
      sample: function (arr, n) { return r.shuffle(arr).slice(0, n); }
    };
    return r;
  }
  SWD.rng = rng;
  SWD.seed = function () { return (Date.now() ^ Math.floor(Math.random() * 1e9)) >>> 0; };

  /* ── text helpers ── */
  function esc(s) { return String(s == null ? "" : s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
  SWD.esc = esc;
  SWD.strip = function (html) { return String(html == null ? "" : html).replace(/<[^>]+>/g, " ").replace(/&nbsp;/g, " ").replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/\s+/g, " ").trim(); };

  /* money: 35 -> "35¢", 135 -> "$1.35", 500 -> "$5.00" (style "d" always uses dollars) */
  function money(c, style) {
    c = Math.round(c);
    if (c < 100 && style !== "d") return c + "¢";
    var neg = c < 0; c = Math.abs(c);
    return (neg ? "-" : "") + "$" + Math.floor(c / 100) + "." + ("0" + (c % 100)).slice(-2);
  }
  SWD.money = money;
  /* money spoken: 135 -> "1 dollar and 35 cents" */
  SWD.sayMoney = function (c) {
    c = Math.round(c);
    var d = Math.floor(c / 100), m = c % 100, out = [];
    if (d) out.push(d + (d === 1 ? " dollar" : " dollars"));
    if (m || !d) out.push(m + (m === 1 ? " cent" : " cents"));
    return out.join(" and ");
  };
  SWD.dollars = function (c) { return "$" + (c / 100).toFixed(2); };
  /* 12345 -> "12,345" */
  SWD.num = function (n) { return String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ","); };
  /* say a math sentence: "7 × 8" -> "7 times 8" */
  SWD.sayMath = function (s) {
    return String(s).replace(/×/g, " times ").replace(/÷/g, " divided by ").replace(/−/g, " minus ").replace(/-(?=\s*\d)/g, " minus ")
      .replace(/\+/g, " plus ").replace(/=/g, " equals ").replace(/\?/g, " what number ").replace(/¢/g, " cents").replace(/\s+/g, " ").trim();
  };
  SWD.ordinal = function (n) { var s = ["th", "st", "nd", "rd"], v = n % 100; return n + (s[(v - 20) % 10] || s[v] || s[0]); };
  SWD.NUMWORDS = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen",
    "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen", "twenty"];
  SWD.plural = function (n, one, many) { return n + " " + (n === 1 ? one : (many || one + "s")); };

  /* ── items ── */
  /* a choice: a string, a number or { text, html, say } */
  function choice(c) {
    if (c && typeof c === "object") return { text: c.text != null ? String(c.text) : "", html: c.html || null, say: c.say || null, big: !!c.big };
    return { text: String(c), html: null, say: null, big: false };
  }
  SWD.choice = choice;
  function keyOf(c) { c = choice(c); return (c.text || "") + "|" + (c.html || ""); }
  /* An item: choices[0] is the answer. Duplicate distractors are dropped. */
  SWD.item = function (o) {
    var seen = {}, list = [];
    (o.choices || []).forEach(function (c) {
      var ch = choice(c), k = keyOf(ch);
      if (seen[k]) return;
      seen[k] = 1; list.push(ch);
    });
    return {
      prompt: o.prompt || "",
      say: o.say || SWD.strip(o.prompt || ""),
      visual: o.visual || null,
      choices: list,
      hint: o.hint || "",
      passage: o.passage || null,
      wide: !!o.wide,
      skill: o.skill || null
    };
  };
  /* numeric distractors close to n: off-by-one, off-by-ten, swapped digits, within [lo, hi] */
  SWD.near = function (n, r, opts) {
    opts = opts || {};
    var lo = opts.lo != null ? opts.lo : 0, hi = opts.hi != null ? opts.hi : Infinity, step = opts.step || 1, out = [];
    var near1 = r.shuffle([n + step, n - step]), far = r.shuffle([n + 2 * step, n - 2 * step, n + 10 * step, n - 10 * step]);
    var s = String(n), swap = (s.length === 2 && s[0] !== s[1] && s[1] !== "0") ? [Number(s[1] + s[0])] : [];
    var cands = (opts.extra || []).concat(near1.slice(0, 1), swap, near1.slice(1), far);
    for (var i = 0; i < 40; i++) cands.push(n + step * r.int(-6, 6));
    for (var j = 0; j < cands.length && out.length < (opts.n || 3); j++) {
      var c = cands[j];
      if (typeof c !== "number" || !isFinite(c)) continue;
      c = Math.round(c * 1000) / 1000;
      if (c === n || c < lo || c > hi || out.indexOf(c) !== -1) continue;
      out.push(c);
    }
    return out;
  };
  /* distractors from a list of alternatives (never the answer) */
  SWD.others = function (answer, pool, r, n) {
    return r.shuffle(pool.filter(function (x) { return keyOf(x) !== keyOf(answer); })).slice(0, n || 3);
  };

  /* ── the paths, bands and subjects ── */
  SWD.BANDS = [
    { id: "P1", path: 1, name: "First Skills", grade: "K–1", label: "Path 1 · First Skills (K–1)", short: "First Skills", gradeName: "Kindergarten to grade 1 skills" },
    { id: "G2", path: 2, name: "Grade 2", grade: "2", label: "Path 2 · Grade 2", short: "Grade 2", gradeName: "Grade 2 skills" },
    { id: "G3", path: 2, name: "Grade 3", grade: "3", label: "Path 2 · Grade 3", short: "Grade 3", gradeName: "Grade 3 skills" },
    { id: "G4", path: 2, name: "Grade 4", grade: "4", label: "Path 2 · Grade 4", short: "Grade 4", gradeName: "Grade 4 skills" },
    { id: "G5", path: 2, name: "Grade 5", grade: "5", label: "Path 2 · Grade 5", short: "Grade 5", gradeName: "Grade 5 skills" },
    { id: "G6", path: 2, name: "Grade 6", grade: "6", label: "Path 2 · Grade 6", short: "Grade 6", gradeName: "Grade 6 skills" }
  ];
  SWD.band = function (id) { for (var i = 0; i < SWD.BANDS.length; i++) if (SWD.BANDS[i].id === id) return SWD.BANDS[i]; return SWD.BANDS[0]; };
  SWD.SUBJECT_DEFS = {
    money: { id: "money", name: "Money", icon: "🪙", meta: "Coins and bills, counting money, paying at the store." },
    math: { id: "math", name: "Math", icon: "🔢", meta: "Numbers, counting, adding and taking away." },
    reading: { id: "reading", name: "Reading", icon: "📖", meta: "Letters, sounds, sight words and short reading." },
    life: { id: "life", name: "Life Skills", icon: "🏠", meta: "Signs, time, calendar, shopping, safety and every day." }
  };
  SWD.SUBJECTS = {
    P1: ["money", "math", "reading", "life"],
    G2: ["math", "reading", "life"], G3: ["math", "reading", "life"], G4: ["math", "reading", "life"],
    G5: ["math", "reading", "life"], G6: ["math", "reading", "life"]
  };
  /* what each subject covers in each band (the subject cards) */
  SWD.SUBJECT_META = {
    P1: { money: "Name the coins and bills, count pennies, nickels and dimes, pay with the next-dollar way.",
      math: "Count to 20, read numbers, more and less, add and take away with pictures, shapes.",
      reading: "Letters, first sounds, sight words and signs, picture words, short sentences.",
      life: "Safety and community signs, clocks to the hour, days of the week, weather, daily routines." },
    G2: { math: "Add and subtract to 100, place value, even and odd, skip counting, time, money, inches.",
      reading: "Sight words, short vowels and vowel teams, compound words, contractions, short stories.",
      life: "Count coins and bills, time to 5 minutes, the calendar, signs, safety, healthy food." },
    G3: { math: "Multiplication and division facts, rounding, fractions, elapsed time, perimeter and area.",
      reading: "Sight words, opposites and same meanings, prefixes, homophones, stories and main idea.",
      life: "Making change, the next-dollar way to $20, schedules, recipes, measuring cups, the thermometer." },
    G4: { math: "Multiply and divide, remainders, equivalent fractions, decimals and money, measurement.",
      reading: "Context clues, suffixes, multiple meanings, fact and opinion, signs, menus and labels.",
      life: "Better buys, totals and budgets, food labels, hours and pay, bus schedules, appointments." },
    G5: { math: "Decimals, adding fractions, area and volume, order of operations, averages.",
      reading: "Roots, figurative language, cause and effect, author's purpose, job ads and forms.",
      life: "Pay stubs, unit prices, receipts, bank balances, time cards, maps and medicine labels." },
    G6: { math: "Ratios and unit rates, percents, integers, one-step equations, mean and median.",
      reading: "Greek and Latin roots, inference, point of view, comparing texts, workplace reading.",
      life: "Budgets, sales tax, discounts and tips, phone plans, renting, job applications, credit." }
  };

  /* ── the skill registry ── */
  SWD.SKILLS = {};
  SWD.skill = function (band, subject, def) {
    var b = SWD.SKILLS[band] = SWD.SKILLS[band] || {};
    var list = b[subject] = b[subject] || [];
    def.band = band; def.subject = subject; def.tier = def.tier || 1;
    def.code = def.code || (band + "." + subject + "." + list.length);
    list.push(def);
    return def;
  };
  SWD.skills = function (band, subject) { return ((SWD.SKILLS[band] || {})[subject] || []).slice(); };
  SWD.skillByCode = function (code) {
    var out = null;
    Object.keys(SWD.SKILLS).forEach(function (b) { Object.keys(SWD.SKILLS[b]).forEach(function (s) { SWD.SKILLS[b][s].forEach(function (k) { if (k.code === code) out = k; }); }); });
    return out;
  };
  /* the difficulty step of a level: 1 for levels 1-3, then one step every 3 levels up to 5 */
  SWD.tierOf = function (level) { level = Math.max(1, level | 0); return Math.min(5, 1 + Math.floor((level - 1) / 3)); };

  /* ── a level ── */
  /* what each mode needs from a skill */
  SWD.fits = function (skill, mode) {
    if (mode === "match") return typeof skill.pair === "function";
    if (mode === "sort") return typeof skill.sort === "function";
    if (mode === "market") return false;
    if (mode === "raven") return typeof skill.gen === "function" && !skill.long;
    return typeof skill.gen === "function";
  };
  /* the skills a level draws from: the ones open at this step, the newest ones a little more often,
     narrowed to one skill when the player picked one (focus) */
  SWD.levelSkills = function (band, subject, level, mode, focus) {
    var t = SWD.tierOf(level), all = SWD.skills(band, subject).filter(function (k) { return SWD.fits(k, mode); });
    if (focus) { var f = all.filter(function (k) { return k.code === focus; }); if (f.length) return f; }
    var open = all.filter(function (k) { return k.tier <= t; });
    if (!open.length) open = all.filter(function (k) { return k.tier === Math.min.apply(null, all.map(function (x) { return x.tier; })); });
    return open;
  };
  /* n items for a choice mode; never the same prompt twice in a level */
  SWD.makeLevel = function (band, subject, level, n, r, mode, focus) {
    r = r || rng(SWD.seed());
    var t = SWD.tierOf(level), ks = SWD.levelSkills(band, subject, level, mode || "path", focus), out = [], seen = {}, tries = 0;
    if (!ks.length) return out;
    var weights = ks.map(function (k) { return k.tier === t ? 2 : 1; }), total = weights.reduce(function (a, b) { return a + b; }, 0);
    var order = r.shuffle(ks);
    while (out.length < n && tries < n * 30) {
      tries++;
      var k;
      if (out.length < order.length && out.length < n) k = order[out.length];   /* each open skill once first */
      else { var x = r.next() * total; for (var i = 0; i < ks.length; i++) { x -= weights[i]; if (x <= 0) { k = ks[i]; break; } } k = k || ks[0]; }
      var it;
      try { it = k.gen(r, t); } catch (e) { try { console.error("[SWD] " + k.code, e); } catch (x2) {} continue; }
      if (!it || !it.choices || it.choices.length < 2) continue;
      var sig = it.prompt + "|" + (it.visual || "") + "|" + it.choices[0].text;
      if (seen[sig] && tries < n * 25) continue;
      seen[sig] = 1;
      it.skill = k.code; it.skillName = k.name; it.band = band; it.subject = subject;
      out.push(it);
    }
    return out;
  };
  /* pairs for Rune Match */
  SWD.makePairs = function (band, subject, level, n, r, focus) {
    r = r || rng(SWD.seed());
    var ks = SWD.levelSkills(band, subject, level, "match", focus), t = SWD.tierOf(level), out = [], keys = {}, faces = {}, tries = 0;
    if (!ks.length) return out;
    while (out.length < n && tries < 200) {
      tries++;
      var k = ks[tries % ks.length === 0 ? 0 : r.int(0, ks.length - 1)], p;
      try { p = k.pair(r, t); } catch (e) { continue; }
      if (!p) continue;
      var a = choice(p.a), b = choice(p.b), fa = keyOf(a), fb = keyOf(b);
      if (keys[p.key] || faces[fa] || faces[fb]) continue;
      keys[p.key] = 1; faces[fa] = 1; faces[fb] = 1;
      out.push({ a: a, b: b, key: String(p.key), skill: k.code, skillName: k.name, say: p.say || null });
    }
    return out;
  };
  /* items for Sort It: one skill per level (the bins stay the same through a level) */
  SWD.makeSorts = function (band, subject, level, n, r, focus) {
    r = r || rng(SWD.seed());
    var ks = SWD.levelSkills(band, subject, level, "sort", focus), t = SWD.tierOf(level);
    if (!ks.length) return null;
    var k = r.pick(ks), out = [], seen = {}, tries = 0, bins = null, prompt = "";
    while (out.length < n && tries < n * 20) {
      tries++;
      var s;
      try { s = k.sort(r, t); } catch (e) { continue; }
      if (!s) continue;
      bins = bins || s.bins; prompt = prompt || s.prompt;
      if (s.bins.join("|") !== bins.join("|")) continue;
      var c = choice(s.item), sig = keyOf(c);
      if (seen[sig] && tries < n * 15) continue;
      seen[sig] = 1;
      out.push({ item: c, bin: s.bin, skill: k.code, skillName: k.name, hint: s.hint || "" });
    }
    /* both bins used */
    return { bins: bins.map(function (b) { return choice(b); }), prompt: prompt || "Where does it go?", items: out, skill: k.code, skillName: k.name };
  };

  /* every skill a band and subject has, for the focus picker and the progress report */
  SWD.skillList = function (band, subject) {
    return SWD.skills(band, subject).map(function (k) { return { code: k.code, name: k.name, tier: k.tier, match: !!k.pair, sort: !!k.sort }; });
  };
})();
