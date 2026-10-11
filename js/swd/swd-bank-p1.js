/* Sol's Labyrinth · SWD: Path 1 "First Skills" (kindergarten to grade 1 skills) for high-school students in a
   self-contained class: money, math, reading and life skills. Every item can be read aloud; most have a picture.
   Skills open by difficulty step (tier 1-5, SWD.tierOf(level)): a student starts with the easiest few and the rest
   join as the levels go up. Pictures are teen-respectful everyday objects (food, phones, buses, money, signs). */
(function () {
  "use strict";
  var SWD = window.SWD, A = SWD.art, item = SWD.item, money = SWD.money, sayMoney = SWD.sayMoney;
  function add(subject, def) { return SWD.skill("P1", subject, def); }
  var W = SWD.NUMWORDS;

  /* ───────────── MONEY ───────────── */
  var COINV = [1, 5, 10, 25];
  function coinChoice(v, big) { return { text: A.coinName(v), html: A.coin(v, big ? 1.5 : 1.25), say: A.coinName(v) }; }
  add("money", { code: "P1.money.coin-name", name: "Name the coin", tier: 1,
    gen: function (r, t) {
      /* from the 2nd step, the back of the coin some of the time: students meet both sides */
      var v = r.pick(COINV), others = COINV.filter(function (x) { return x !== v; }), back = t >= 2 && r.chance(0.4);
      return item({ prompt: back ? "This is the <b>back</b> of a coin. What coin is it?" : "What is this coin called?", visual: A.coin(v, 3, { side: back ? "back" : "front" }), choices: [A.coinName(v)].concat(r.shuffle(others).map(function (x) { return A.coinName(x); })),
        hint: { 1: "A penny is the copper (brown) coin.", 5: "A nickel is a big silver coin with a smooth edge.", 10: "A dime is the smallest coin.", 25: "A quarter is the biggest coin." }[v] });
    },
    pair: function (r) { var v = r.pick(COINV); return { a: { text: "", html: A.coin(v, 1.4), say: "a coin" }, b: A.coinName(v), key: "coin" + v }; },
    sort: function (r) {
      var v = r.pick([1, 5, 10, 25, 100, 500, 1000]);
      return { bins: ["Coins", "Bills"], prompt: "Is it a coin or a bill?", item: v >= 100 ? { text: "", html: A.bill(v, 0.8), say: "$" + v / 100 + " bill" } : { text: "", html: A.coin(v, 1.5), say: A.coinName(v) }, bin: v >= 100 ? 1 : 0 };
    } });
  add("money", { code: "P1.money.bill-name", name: "Name the bill", tier: 1,
    gen: function (r) {
      var v = r.pick([100, 500, 1000, 2000]), all = ["$1", "$5", "$10", "$20"];
      return item({ prompt: "How much is this bill?", visual: A.bill(v, 1.4), choices: ["$" + v / 100].concat(r.shuffle(all.filter(function (x) { return x !== "$" + v / 100; }))),
        say: "How much is this bill worth?", hint: "Look at the number in the corners of the bill." });
    },
    pair: function (r) { var v = r.pick([100, 500, 1000, 2000]); return { a: { text: "", html: A.bill(v, 0.7), say: "a bill" }, b: { text: "$" + v / 100, say: v / 100 + " dollars" }, key: "bill" + v }; } });
  add("money", { code: "P1.money.coin-value", name: "How much is the coin worth?", tier: 2,
    gen: function (r, t) {
      var v = r.pick(COINV), back = t >= 3 && r.chance(0.35);
      return item({ prompt: back ? "This is the <b>back</b> of a coin. How much is it worth?" : "How much is this coin worth?", visual: A.coin(v, 3, { side: back ? "back" : "front" }), choices: [v + "¢"].concat(r.shuffle(COINV.filter(function (x) { return x !== v; })).map(function (x) { return x + "¢"; })),
        hint: "Penny 1¢, nickel 5¢, dime 10¢, quarter 25¢." });
    },
    pair: function (r) { var v = r.pick(COINV); return { a: { text: "", html: A.coin(v, 1.4), say: A.coinName(v) }, b: { text: v + "¢", say: v + " cents" }, key: "cv" + v }; },
    sort: function (r) {
      var v = r.pick([1, 5, 10]);
      return { bins: ["Penny 1¢", "Nickel 5¢", "Dime 10¢"], prompt: "Put the coin with its name.", item: { text: "", html: A.coin(v, 1.6, { values: false }), say: "a coin" }, bin: [1, 5, 10].indexOf(v) };
    } });
  add("money", { code: "P1.money.more-coin", name: "Which coin is worth more?", tier: 2,
    gen: function (r) {
      var pair = r.pick([[10, 5], [10, 1], [25, 10], [5, 1], [25, 5], [10, 5], [25, 1]]);
      return item({ prompt: "Which coin is worth <b>more</b>?", say: "Which coin is worth more?", choices: [coinChoice(pair[0], true), coinChoice(pair[1], true)],
        hint: pair[0] === 10 ? "A dime is small, but it is worth 10 cents. A nickel is only 5 cents." : "A quarter is worth 25 cents, the most of these coins." });
    } });
  function countItem(r, kind, n) {
    var list = [];
    for (var i = 0; i < n; i++) list.push(kind);
    var total = kind * n;
    return item({ prompt: "How much money is this?", visual: A.money(list), choices: [money(total)].concat(SWD.near(total, r, { step: kind, lo: kind }).map(function (x) { return money(x); })),
      hint: kind === 1 ? "Count each penny: 1, 2, 3 …" : kind === 5 ? "Count by 5s: 5, 10, 15 …" : kind === 10 ? "Count by 10s: 10, 20, 30 …" : "Count by 25s: 25, 50, 75, 100." });
  }
  add("money", { code: "P1.money.count-pennies", name: "Count pennies", tier: 2,
    gen: function (r, t) { return countItem(r, 1, r.int(2, t >= 3 ? 15 : 9)); },
    pair: function (r) { var n = r.int(2, 9), l = []; for (var i = 0; i < n; i++) l.push(1); return { a: { text: "", html: A.money(l, 0.75), say: n + " pennies" }, b: n + "¢", key: "pn" + n }; } });
  add("money", { code: "P1.money.count-nickels", name: "Count nickels by 5s", tier: 3, gen: function (r) { return countItem(r, 5, r.int(2, 8)); } });
  add("money", { code: "P1.money.count-dimes", name: "Count dimes by 10s", tier: 3, gen: function (r) { return countItem(r, 10, r.int(2, 9)); },
    pair: function (r) { var n = r.int(2, 6), l = []; for (var i = 0; i < n; i++) l.push(10); return { a: { text: "", html: A.money(l, 0.75), say: n + " dimes" }, b: n * 10 + "¢", key: "dm" + n }; } });
  add("money", { code: "P1.money.dimes-pennies", name: "Count dimes and pennies", tier: 4,
    gen: function (r) {
      var d = r.int(1, 4), p = r.int(1, 6), l = [], i;
      for (i = 0; i < d; i++) l.push(10);
      for (i = 0; i < p; i++) l.push(1);
      var tot = d * 10 + p;
      return item({ prompt: "How much money is this?", visual: A.money(l), choices: [money(tot)].concat(SWD.near(tot, r, { extra: [d + p, tot + 10, tot - 1], lo: 1 }).map(function (x) { return money(x); })),
        hint: "Count the dimes by 10s first, then count on the pennies by 1s." });
    } });
  add("money", { code: "P1.money.count-quarters", name: "Count quarters", tier: 4, gen: function (r) { return countItem(r, 25, r.int(2, 4)); } });
  add("money", { code: "P1.money.count-bills", name: "Count dollar bills", tier: 3,
    gen: function (r, t) {
      var n = r.int(2, t >= 4 ? 9 : 5), l = [], i, five = t >= 5 && r.chance(0.5);
      if (five) l.push(500);
      for (i = 0; i < n; i++) l.push(100);
      var tot = l.reduce(function (a, b) { return a + b; }, 0) / 100;
      return item({ prompt: "How many dollars?", visual: A.money(l, 1.05), choices: ["$" + tot].concat(SWD.near(tot, r, { lo: 1, extra: five ? [n + 1] : [] }).map(function (x) { return "$" + x; })),
        hint: five ? "Start at 5 for the five-dollar bill, then count on: 6, 7, 8 …" : "Count each one-dollar bill: 1, 2, 3 …" });
    } });
  add("money", { code: "P1.money.enough", name: "Do I have enough money?", tier: 4,
    gen: function (r) {
      var have = r.int(2, 9), cost = r.int(2, 9), l = [];
      while (cost === have) cost = r.int(2, 9);
      for (var i = 0; i < have; i++) l.push(100);
      var yes = have >= cost, snack = r.pick([["🥤", "a drink"], ["🍕", "a slice of pizza"], ["🎧", "a pair of earbuds"], ["🍔", "a burger"], ["📕", "a notebook"]]);
      return item({ prompt: "You have this money. " + snack[1].charAt(0).toUpperCase() + snack[1].slice(1) + " costs <b>$" + cost + "</b>. Do you have enough?",
        say: "You have this money. " + snack[1] + " costs " + cost + " dollars. Do you have enough?",
        visual: A.money(l, 0.9) + A.tag(snack[0], snack[1], cost * 100), choices: yes ? ["Yes, I have enough", "No, I need more"] : ["No, I need more", "Yes, I have enough"],
        hint: "Count your dollars: you have $" + have + ". Is that the same as or more than $" + cost + "?" });
    } });
  add("money", { code: "P1.money.next-dollar", name: "Pay with the next dollar", tier: 5,
    gen: function (r) {
      var d = r.int(1, 8), c = r.int(1, 99), price = d * 100 + c, need = d + 1, it = r.pick([["🧃", "juice"], ["🍞", "bread"], ["🧢", "a cap"], ["🔋", "batteries"], ["🧦", "socks"]]);
      return item({ prompt: "It costs <b>" + money(price, "d") + "</b>. How many one-dollar bills do you give?", say: "It costs " + sayMoney(price) + ". How many one-dollar bills do you give?",
        visual: A.tag(it[0], it[1], price), choices: [String(need), String(d), String(need + 1), String(d - 1 > 0 ? d - 1 : need + 2)],
        hint: "The next-dollar way: look at the dollars (" + d + ") and give one more: " + need + "." });
    } });

  /* ───────────── MATH ───────────── */
  var THINGS = [["🍎", "apples"], ["⚽", "balls"], ["🚗", "cars"], ["🍪", "cookies"], ["✏️", "pencils"], ["📱", "phones"], ["🏀", "basketballs"], ["🌮", "tacos"], ["🎧", "headphones"], ["⭐", "stars"], ["🥤", "drinks"], ["🍌", "bananas"]];
  function countItemM(r, lo, hi) {
    var n = r.int(lo, hi), th = r.pick(THINGS);
    return item({ prompt: "How many " + th[1] + "?", visual: A.objects(th[0], n), choices: [String(n)].concat(SWD.near(n, r, { lo: 1, hi: 20 }).map(String)),
      hint: "Touch each one as you count. Say one number for each." });
  }
  add("math", { code: "P1.math.count5", name: "Count to 5", tier: 1, gen: function (r) { return countItemM(r, 1, 5); },
    pair: function (r) { var n = r.int(1, 5), th = r.pick(THINGS); return { a: { text: "", html: A.objects(th[0], n), say: n + " " + th[1] }, b: { text: String(n), big: true }, key: "c" + n }; } });
  add("math", { code: "P1.math.count10", name: "Count to 10", tier: 2, gen: function (r) { return countItemM(r, 4, 10); },
    pair: function (r) { var n = r.int(1, 10); return { a: { text: "", html: A.tenFrame(n), say: n + " dots" }, b: { text: String(n), big: true }, key: "c" + n }; } });
  add("math", { code: "P1.math.count20", name: "Count to 20", tier: 4, gen: function (r) { return countItemM(r, 11, 20); } });
  add("math", { code: "P1.math.numeral", name: "Find the number", tier: 1,
    gen: function (r, t) {
      var hi = t >= 3 ? 20 : 10, n = r.int(0, hi), look = { 1: [7, 4, 11], 6: [9, 8, 16], 9: [6, 19, 8], 2: [5, 7, 12], 5: [2, 3, 15], 7: [1, 4, 17], 3: [8, 5, 13], 8: [3, 0, 18], 0: [8, 6, 10], 4: [1, 9, 14],
        12: [21, 2, 13], 13: [31, 3, 15], 14: [41, 4, 17], 15: [51, 5, 16], 16: [61, 6, 19], 17: [71, 7, 11], 18: [81, 8, 13], 19: [91, 9, 16], 11: [1, 17, 10], 10: [1, 0, 20], 20: [2, 12, 10] }[n] || SWD.near(n, r);
      return item({ prompt: "Find the number <b>" + W[n] + "</b>.", say: "Find the number " + n + ".", choices: [{ text: String(n), big: true }].concat(look.map(function (x) { return { text: String(x), big: true }; })), hint: "Listen again, then look at each number." });
    },
    pair: function (r, t) { var n = r.int(1, t >= 3 ? 20 : 10); return { a: { text: String(n), big: true }, b: W[n], key: "w" + n }; } });
  add("math", { code: "P1.math.more", name: "Which group has more?", tier: 2,
    gen: function (r) {
      var th = r.pick(THINGS), a = r.int(1, 8), b = r.int(1, 8);
      while (Math.abs(a - b) < 2) b = r.int(1, 9);
      var big = Math.max(a, b), small = Math.min(a, b), fewer = r.chance(0.35);
      var C = function (n) { return { text: "", html: A.objects(th[0], n, "small"), say: n + " " + th[1] }; };
      return item({ prompt: "Which group has <b>" + (fewer ? "fewer" : "more") + "</b>?", say: "Which group has " + (fewer ? "fewer" : "more") + "?", choices: fewer ? [C(small), C(big)] : [C(big), C(small)],
        hint: "Count each group. " + (fewer ? "Fewer means less." : "More is the bigger number.") });
    } });
  add("math", { code: "P1.math.next", name: "What number comes next?", tier: 2,
    gen: function (r, t) {
      var by = t >= 5 && r.chance(0.5) ? 10 : t >= 4 && r.chance(0.4) ? 5 : 1, s = r.int(by === 1 ? 1 : 0, by === 1 ? (t >= 3 ? 16 : 7) : 4) * (by === 1 ? 1 : 1), seq = [];
      if (by > 1) s = s * by;
      for (var i = 0; i < 3; i++) seq.push(s + i * by);
      var ans = s + 3 * by;
      return item({ prompt: seq.join(", ") + ", <b>?</b>", say: seq.join(", ") + ". What number comes next?", visual: by === 1 ? A.numberLine(Math.max(0, s - 1), s + 5, ans, true) : null,
        choices: [String(ans)].concat(SWD.near(ans, r, { step: by, lo: 0, extra: [ans + 1, ans - 1] }).map(String)), hint: by === 1 ? "Count up by one." : "Count by " + by + "s." });
    } });
  add("math", { code: "P1.math.onemore", name: "One more, one less", tier: 3,
    gen: function (r) {
      var n = r.int(2, 18), more = r.chance(0.5), ans = more ? n + 1 : n - 1;
      return item({ prompt: "What is one <b>" + (more ? "more" : "less") + "</b> than " + n + "?", say: "What is one " + (more ? "more" : "less") + " than " + n + "?",
        visual: A.numberLine(Math.max(0, n - 3), n + 3, n, false), choices: [String(ans)].concat([more ? n - 1 : n + 1, n, ans + (more ? 1 : -1)].filter(function (x) { return x >= 0; }).map(String)),
        hint: more ? "One more is the next number when you count up." : "One less is the number just before." });
    } });
  function addPic(r, maxSum, sub) {
    var th = r.pick(THINGS), a, b, ans, prompt, say, vis;
    if (!sub) {
      a = r.int(1, maxSum - 1); b = r.int(1, maxSum - a); ans = a + b;
      prompt = a + " + " + b + " = <b>?</b>"; say = a + " plus " + b + " equals what?";
      vis = '<div class="eq-pics">' + A.objects(th[0], a, "small") + '<span class="op">+</span>' + A.objects(th[0], b, "small") + "</div>";
    } else {
      a = r.int(2, maxSum); b = r.int(1, a - 1); ans = a - b;
      prompt = a + " − " + b + " = <b>?</b>"; say = a + " take away " + b + " equals what?";
      vis = '<div class="eq-pics">' + A.objects(th[0], a, "small taken-" + b) + "</div>";
    }
    return item({ prompt: prompt, say: say, visual: vis, choices: [String(ans)].concat(SWD.near(ans, r, { lo: 0, extra: sub ? [a + b] : [Math.abs(a - b)] }).map(String)),
      hint: sub ? "Count all " + a + ", then cross out " + b + ". Count what is left." : "Count all the " + th[1] + " together." });
  }
  add("math", { code: "P1.math.add5", name: "Add to 5", tier: 3, gen: function (r) { return addPic(r, 5, false); },
    pair: function (r) { var a = r.int(1, 4), b = r.int(1, 5 - a); return { a: a + " + " + b, b: { text: String(a + b), big: true }, key: "s" + (a + b), say: a + " plus " + b }; } });
  add("math", { code: "P1.math.add10", name: "Add to 10", tier: 4, gen: function (r) { return addPic(r, 10, false); },
    pair: function (r) { var a = r.int(1, 9), b = r.int(1, 10 - a); return { a: a + " + " + b, b: { text: String(a + b), big: true }, key: "s" + (a + b) }; } });
  add("math", { code: "P1.math.sub5", name: "Take away from 5", tier: 4, gen: function (r) { return addPic(r, 5, true); } });
  add("math", { code: "P1.math.sub10", name: "Take away from 10", tier: 5, gen: function (r) { return addPic(r, 10, true); } });
  var SHAPES = ["circle", "square", "triangle", "rectangle", "star", "oval", "diamond", "hexagon"];
  add("math", { code: "P1.math.shapes", name: "Name the shape", tier: 1,
    gen: function (r, t) {
      var pool = t >= 3 ? SHAPES : SHAPES.slice(0, 4), s = r.pick(pool);
      return item({ prompt: "What shape is this?", visual: A.shape(s, r.pick(["#3f8fd6", "#e8b04a", "#4fb36a", "#d65f5f"])), choices: [s].concat(SWD.others(s, pool, r, 3)),
        hint: { circle: "A circle is round.", square: "A square has 4 sides that are all the same.", triangle: "A triangle has 3 sides.", rectangle: "A rectangle has 4 sides: 2 long and 2 short." }[s] || "Count the sides and corners." });
    },
    pair: function (r) { var s = r.pick(SHAPES.slice(0, 6)); return { a: { text: "", html: A.shape(s), say: "a shape" }, b: s, key: s }; },
    sort: function (r) { var s = r.pick(SHAPES); return { bins: ["Round", "Has corners"], prompt: "Is the shape round, or does it have corners?", item: { text: "", html: A.shape(s), say: s }, bin: s === "circle" || s === "oval" ? 0 : 1 }; } });
  add("math", { code: "P1.math.bigger", name: "Which number is bigger?", tier: 3,
    gen: function (r) {
      var a = r.int(0, 20), b = r.int(0, 20);
      while (a === b) b = r.int(0, 20);
      var small = r.chance(0.3), ans = small ? Math.min(a, b) : Math.max(a, b);
      return item({ prompt: "Which number is <b>" + (small ? "smaller" : "bigger") + "</b>?", say: "Which number is " + (small ? "smaller" : "bigger") + "?",
        choices: [{ text: String(ans), big: true }, { text: String(ans === a ? b : a), big: true }], visual: A.numberLine(0, 20, null), hint: "On the number line, bigger numbers are farther to the right." });
    },
    sort: function (r) { var n = r.int(0, 10); return { bins: ["Less than 5", "5 or more"], prompt: "Is it less than 5, or 5 or more?", item: { text: "", html: A.tenFrame(n), say: n + " dots" }, bin: n < 5 ? 0 : 1 }; } });

  /* ───────────── READING ───────────── */
  var LETTERS = "ABCDEFGHIJKLMNOPRSTUVWY".split("");
  var LOOKALIKE = { b: "dpqh", d: "bpqa", p: "qbdg", q: "pgdb", m: "nwu", n: "mhu", u: "nvw", w: "mvu", E: "FBL", F: "EPT", M: "NWH", N: "MHZ", O: "QCD", Q: "OGC", C: "GOU", G: "CQO", I: "LTJ", L: "IJT", P: "RBF", R: "PBK", V: "UWY", W: "MVN", h: "nbk", i: "jlt", j: "igy", a: "oed", e: "oca", o: "aec", c: "oea", s: "zca", g: "qpy", t: "fli", f: "tlk", k: "hxl", l: "itj", r: "nvt", v: "wuy", y: "vgj", x: "kzy", z: "sxn" };
  function letterChoices(L, r) {
    var lk = (LOOKALIKE[L] || "").split(""), pool = (L === L.toUpperCase() ? LETTERS : "abcdefghijklmnoprstuvwy".split("")).filter(function (x) { return x !== L && lk.indexOf(x) === -1; });
    return [L].concat(lk.concat(r.shuffle(pool)).slice(0, 3));
  }
  add("reading", { code: "P1.reading.letter", name: "Find the letter", tier: 1,
    gen: function (r, t) {
      var upper = t < 2 || r.chance(0.5), L = r.pick(LETTERS);
      if (!upper) L = L.toLowerCase();
      return item({ prompt: "Find the letter <b>" + L + "</b>.", say: "Find the letter " + L.toUpperCase() + (upper ? "." : ". The small letter."), choices: letterChoices(L, r).map(function (x) { return { text: x, big: true }; }),
        hint: "Look at the shape of each letter. Which one looks the same?" });
    } });
  add("reading", { code: "P1.reading.upper-lower", name: "Big and small letters", tier: 2,
    gen: function (r) {
      var L = r.pick(LETTERS), l = L.toLowerCase();
      return item({ prompt: "Find the small letter for <b>" + L + "</b>.", say: "Find the small letter for capital " + L + ".", choices: letterChoices(l, r).map(function (x) { return { text: x, big: true }; }),
        hint: "Capital " + L + " and small " + l + " are the same letter." });
    },
    pair: function (r) { var L = r.pick(LETTERS); return { a: { text: L, big: true, say: "capital " + L }, b: { text: L.toLowerCase(), big: true, say: "small " + L }, key: "L" + L }; } });
  var FIRST = [["A", "🍎", "apple"], ["B", "🚌", "bus"], ["C", "🚗", "car"], ["D", "🐕", "dog"], ["E", "🥚", "egg"], ["F", "🐟", "fish"], ["G", "🎁", "gift"], ["H", "🏠", "house"],
    ["J", "👖", "jeans"], ["K", "🔑", "key"], ["L", "🔒", "lock"], ["M", "🥛", "milk"], ["N", "🥅", "net"], ["P", "🍕", "pizza"], ["R", "💍", "ring"], ["S", "☀️", "sun"], ["T", "🌮", "taco"],
    ["V", "🚐", "van"], ["W", "⌚", "watch"], ["Y", "🧶", "yarn"], ["B", "🍞", "bread"], ["S", "🧦", "socks"], ["P", "📱", "phone"], ["T", "🐯", "tiger"], ["M", "🗺️", "map"], ["C", "🍪", "cookie"], ["D", "🚪", "door"]];
  add("reading", { code: "P1.reading.first-sound", name: "First sounds", tier: 2,
    gen: function (r) {
      var f = r.pick(FIRST.filter(function (x) { return x[2] !== "phone"; }));
      return item({ prompt: "<b>" + f[2] + "</b> starts with which letter?", say: f[2] + ". " + f[2] + " starts with which letter?", visual: A.pic(f[1], f[2]),
        choices: [f[0]].concat(SWD.others(f[0], "ABCDFGHKLMNPRSTVW".split(""), r, 3)).map(function (x) { return { text: x, big: true }; }), hint: "Say the word slowly. Listen to the very first sound." });
    },
    pair: function (r) { var f = r.pick(FIRST.filter(function (x) { return x[2] !== "phone"; })); return { a: { text: "", html: A.pic(f[1], f[2]), say: f[2] }, b: { text: f[0], big: true }, key: "F" + f[0] }; } });
  var PRE = "a and away big blue can come down find for funny go help here I in is it jump little look make me my not one play red run said see the three to two up we where yellow you".split(" ");
  var PRIMER = "all am are at ate be black brown but came did do eat four get good have he into like must new no now on our out please pretty ran ride saw say she so soon that there they this too under want was well went what white who will with yes".split(" ");
  var GR1 = "after again an any as ask by could every fly from give going had has her him his how just know let live may of old once open over put round some stop take thank them then think walk were when".split(" ");
  var SURVIVAL = ["STOP", "EXIT", "ENTER", "OPEN", "CLOSED", "PUSH", "PULL", "MEN", "WOMEN", "DANGER", "POISON", "HOT", "COLD", "IN", "OUT", "ON", "OFF", "WALK", "HELP", "NO", "YES", "BUS", "CAUTION", "KEEP OUT", "RESTROOM", "FIRE"];
  /* distractors that look alike: same first letter, or same length */
  function lookWords(w, pool, r) {
    var same = pool.filter(function (x) { return x !== w && x[0].toLowerCase() === w[0].toLowerCase(); }), len = pool.filter(function (x) { return x !== w && Math.abs(x.length - w.length) <= 1 && same.indexOf(x) === -1; });
    return r.shuffle(same).slice(0, 2).concat(r.shuffle(len)).concat(r.shuffle(pool.filter(function (x) { return x !== w; }))).filter(function (x, i, a) { return a.indexOf(x) === i; }).slice(0, 3);
  }
  function sightSkill(code, name, tier, list, pairFn) {
    add("reading", { code: code, name: name, tier: tier,
      gen: function (r) {
        var w = r.pick(list);
        return item({ prompt: "Find the word <b>" + w + "</b>.", say: "Find the word: " + w + ".", choices: [{ text: w, big: true }].concat(lookWords(w, list, r).map(function (x) { return { text: x, big: true }; })),
          hint: "The word starts with the letter " + w[0].toUpperCase() + " and has " + w.length + " letter" + (w.length === 1 ? "" : "s") + "." });
      },
      pair: pairFn || function (r) { var w = r.pick(list.filter(function (x) { return x.length > 1; })); return { a: { text: w, big: true }, b: { text: w.toUpperCase(), big: true, say: w }, key: "W" + w }; } });
  }
  /* sign words match the sign they are on */
  var SIGNWORD = { STOP: "stop", EXIT: "exit", ENTER: "enter", OPEN: "open", CLOSED: "closed", PUSH: "push", PULL: "pull", MEN: "men", WOMEN: "women", DANGER: "danger", POISON: "poison", WALK: "walk", RESTROOM: "restroom", BUS: "busstop", FIRE: "fire" };
  sightSkill("P1.reading.survival", "Sign words (STOP, EXIT …)", 1, SURVIVAL, function (r) {
    var w = r.pick(Object.keys(SIGNWORD));
    return { a: { text: w, big: true }, b: { text: "", html: A.sign(SIGNWORD[w]), say: "a sign" }, key: "S" + w };
  });
  sightSkill("P1.reading.sight-pre", "Sight words 1 (the, see, go …)", 1, PRE);
  sightSkill("P1.reading.sight-primer", "Sight words 2 (are, like, want …)", 3, PRIMER);
  sightSkill("P1.reading.sight-gr1", "Sight words 3 (after, could, open …)", 5, GR1);
  var PICWORDS = [["🐈", "cat"], ["🐕", "dog"], ["☀️", "sun"], ["🚌", "bus"], ["🧢", "cap"], ["🛏️", "bed"], ["🖊️", "pen"], ["🗺️", "map"], ["📦", "box"], ["🐖", "pig"], ["👜", "bag"], ["🚗", "car"], ["🔑", "key"], ["🥚", "egg"],
    ["🚐", "van"], ["🦊", "fox"], ["🐝", "bee"], ["🐄", "cow"], ["🥧", "pie"], ["👔", "tie"], ["📱", "phone"], ["👟", "shoe"], ["📖", "book"], ["⚽", "ball"], ["🐟", "fish"], ["🥛", "milk"], ["🍞", "bread"],
    ["🍕", "pizza"], ["🏠", "house"], ["🌳", "tree"], ["⭐", "star"], ["🌙", "moon"], ["🚲", "bike"], ["🍰", "cake"], ["🚪", "door"], ["🔔", "bell"], ["🔒", "lock"], ["🧦", "sock"], ["🎁", "gift"], ["🥁", "drum"], ["⌚", "watch"], ["🍔", "burger"]];
  add("reading", { code: "P1.reading.picture-word", name: "Picture words", tier: 2,
    gen: function (r, t) {
      var pool = t >= 4 ? PICWORDS : PICWORDS.slice(0, 20), p = r.pick(pool), words = pool.map(function (x) { return x[1]; });
      return item({ prompt: "Which word goes with the picture?", visual: A.pic(p[0], ""), say: "Which word goes with the picture?", choices: [{ text: p[1], big: true }].concat(lookWords(p[1], words, r).map(function (x) { return { text: x, big: true }; })),
        hint: "Say the name of the picture. What sound does it start with?" });
    },
    pair: function (r) { var p = r.pick(PICWORDS); return { a: { text: "", html: A.pic(p[0], p[1]), say: "a picture" }, b: { text: p[1], big: true }, key: "P" + p[1] }; } });
  var RHYME = [["cat", "hat", "bat", "mat"], ["dog", "log", "fog", "jog"], ["sun", "run", "fun", "bun"], ["bed", "red", "fed", "led"], ["pig", "big", "dig", "wig"], ["cake", "bake", "lake", "make"], ["bike", "like", "hike", "Mike"],
    ["car", "star", "jar", "far"], ["phone", "cone", "bone", "zone"], ["ball", "tall", "wall", "mall"], ["bus", "plus", "us", "fuss"], ["cap", "map", "nap", "tap"], ["shoe", "two", "blue", "new"], ["light", "night", "right", "bright"]];
  add("reading", { code: "P1.reading.rhyme", name: "Rhyming words", tier: 3,
    gen: function (r) {
      var g = r.pick(RHYME), w = g[0], ans = r.pick(g.slice(1)), others = [];
      RHYME.forEach(function (h) { if (h !== g) others.push(r.pick(h)); });
      return item({ prompt: "Which word rhymes with <b>" + w + "</b>?", say: "Which word rhymes with " + w + "?", choices: [{ text: ans, big: true }].concat(r.sample(others, 3).map(function (x) { return { text: x, big: true }; })),
        hint: "Rhyming words sound the same at the end: " + w + ", " + ans + "." });
    },
    pair: function (r) { var g = r.pick(RHYME); return { a: { text: g[0], big: true }, b: { text: g[1 + r.int(0, 2)], big: true }, key: "R" + g[0] }; } });
  var CVC = ["cat", "bus", "map", "sun", "hot", "red", "sit", "cup", "bed", "pig", "jog", "van", "net", "box", "mop", "hug", "tip", "pen", "fan", "job"];
  add("reading", { code: "P1.reading.blend", name: "Put the sounds together", tier: 4,
    gen: function (r) {
      var w = r.pick(CVC), others = lookWords(w, CVC, r);
      return item({ prompt: "<b>" + w.split("").join(" - ") + "</b> &nbsp;What word is it?", say: w.split("").join(", ") + ". Put the sounds together. What word is it?", choices: [{ text: w, big: true }].concat(others.map(function (x) { return { text: x, big: true }; })),
        hint: "Say each sound, then say them fast: " + w.split("").join("-") + " … " + w + "." });
    } });
  var SENT = [
    ["The bus is red.", "What color is the bus?", ["red", "blue", "green"]],
    ["I have a big dog.", "What do I have?", ["a dog", "a cat", "a bus"]],
    ["Sam can run fast.", "Who can run fast?", ["Sam", "Mom", "Ana"]],
    ["The cup is on the table.", "Where is the cup?", ["on the table", "in the bag", "on the bus"]],
    ["We eat lunch at 12.", "When do we eat lunch?", ["at 12", "at 3", "at 7"]],
    ["My phone is in my bag.", "Where is my phone?", ["in my bag", "on the bed", "in the car"]],
    ["Ana has two tacos.", "How many tacos does Ana have?", ["two", "one", "three"]],
    ["The store is open.", "Is the store open?", ["yes", "no"]],
    ["Jon likes to play ball.", "What does Jon like to do?", ["play ball", "eat cake", "read"]],
    ["It is hot. I need a drink.", "What do I need?", ["a drink", "a coat", "a hat"]],
    ["The bus stop is by the school.", "Where is the bus stop?", ["by the school", "by the store", "at home"]],
    ["Mia works at the store.", "Where does Mia work?", ["at the store", "at the school", "at the bank"]],
    ["I wash my hands. Then I eat.", "What do I do first?", ["wash my hands", "eat", "go to bed"]],
    ["The milk is cold.", "Is the milk hot or cold?", ["cold", "hot"]],
    ["Ben got a new blue cap.", "What color is the cap?", ["blue", "red", "black"]]
  ];
  add("reading", { code: "P1.reading.sentence", name: "Read a sentence", tier: 4, long: true,
    gen: function (r) {
      var s = r.pick(SENT);
      return item({ prompt: "<span class=\"read-line\">" + s[0] + "</span>" + s[1], say: s[0] + " " + s[1], choices: s[2], hint: "Read the sentence again. The answer is in it." });
    } });
  add("reading", { code: "P1.reading.letter-number", name: "Letter or number?", tier: 1,
    sort: function (r) {
      var isL = r.chance(0.5), v = isL ? r.pick(LETTERS) : String(r.int(0, 9));
      return { bins: ["Letter", "Number"], prompt: "Is it a letter or a number?", item: { text: v, big: true, say: v }, bin: isL ? 0 : 1 };
    } });

  /* ───────────── LIFE SKILLS ───────────── */
  var SIGNMEAN = [["stop", "Stop"], ["exit", "The way out"], ["enter", "The way in"], ["walk", "Walk across now"], ["dontwalk", "Do not walk now"], ["men", "Restroom for men"], ["women", "Restroom for women"],
    ["poison", "Poison: do not eat or drink"], ["nosmoking", "No smoking"], ["wetfloor", "Wet floor: walk carefully"], ["hospital", "Hospital"], ["busstop", "The bus stops here"], ["donotenter", "Do not go in"],
    ["danger", "Danger: keep out"], ["open", "The store is open"], ["closed", "The store is closed"], ["push", "Push the door"], ["pull", "Pull the door"], ["yield", "Slow down and let others go first"], ["fire", "Fire extinguisher"], ["elevator", "Elevator"]];
  add("life", { code: "P1.life.sign-meaning", name: "What does the sign mean?", tier: 1,
    gen: function (r, t) {
      var pool = t >= 3 ? SIGNMEAN : SIGNMEAN.slice(0, 12), s = r.pick(pool);
      return item({ prompt: "What does this sign mean?", visual: A.sign(s[0]), choices: [s[1]].concat(SWD.others(s[1], pool.map(function (x) { return x[1]; }), r, 3)), hint: "Look at the words and the picture on the sign." });
    },
    pair: function (r) { var s = r.pick(SIGNMEAN.slice(0, 14)); return { a: { text: "", html: A.sign(s[0]), say: "a sign" }, b: s[1], key: s[0] }; } });
  var FINDSIGN = [["Which sign shows the way out?", "exit", ["enter", "stop", "busstop"]], ["Which sign means you must stop?", "stop", ["yield", "walk", "exit"]], ["Which sign means it is safe to cross the street?", "walk", ["dontwalk", "stop", "donotenter"]],
    ["Which sign tells you where the restroom is?", "restroom", ["hospital", "exit", "elevator"]], ["Which one is on something you must never eat or drink?", "poison", ["open", "fire", "wetfloor"]], ["Which sign shows where to wait for the bus?", "busstop", ["hospital", "stop", "enter"]],
    ["Which sign means the store is closed?", "closed", ["open", "enter", "push"]], ["Which sign means be careful, the floor is wet?", "wetfloor", ["danger", "poison", "yield"]]];
  add("life", { code: "P1.life.find-sign", name: "Find the sign", tier: 2,
    gen: function (r) {
      var f = r.pick(FINDSIGN), opts = [f[1]].concat(f[2]);
      return item({ prompt: f[0], choices: opts.map(function (id) { return { text: "", html: A.sign(id), say: A.SIGNS[id].label }; }), hint: "Read the word on each sign." });
    } });
  add("life", { code: "P1.life.clock-hour", name: "Time to the hour", tier: 2,
    gen: function (r, t) {
      var h = r.int(1, 12), half = t >= 4 && r.chance(0.5), m = half ? 30 : 0, s = h + ":" + (half ? "30" : "00");
      var wrong = [(h % 12 + 1) + ":" + (half ? "30" : "00"), (half ? h + ":00" : h + ":30"), ((h + 10) % 12 + 1) + ":00", (h === 12 ? 6 : 12) + ":" + (half ? "30" : "00")];
      return item({ prompt: "What time is it?", visual: A.clock(h, m, 170), choices: [s].concat(wrong.filter(function (x) { return x !== s; })),
        hint: half ? "The long hand on 6 means 30. The short hand is just past " + h + "." : "The long hand is on 12, so it is o'clock. The short hand points to " + h + "." });
    },
    pair: function (r, t) { var h = r.int(1, 12), m = t >= 4 && r.chance(0.5) ? 30 : 0; return { a: { text: "", html: A.clock(h, m, 110), say: "a clock" }, b: { text: h + ":" + (m ? "30" : "00"), big: true }, key: "t" + h + m }; } });
  var DAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  add("life", { code: "P1.life.days", name: "Days of the week", tier: 3,
    gen: function (r) {
      var i = r.int(0, 6), kind = r.int(0, 2), ans, q;
      if (kind === 0) { ans = DAYS[(i + 1) % 7]; q = "What day comes <b>after</b> " + DAYS[i] + "?"; }
      else if (kind === 1) { ans = DAYS[(i + 6) % 7]; q = "What day comes <b>before</b> " + DAYS[i] + "?"; }
      else { ans = "7"; q = "How many days are in one week?"; return item({ prompt: q, choices: ["7", "5", "10", "12"], hint: "Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday: 7 days." }); }
      return item({ prompt: q, visual: '<div class="days-strip">' + DAYS.map(function (d) { return "<span>" + d.slice(0, 3) + "</span>"; }).join("") + "</div>",
        choices: [ans].concat(SWD.others(ans, DAYS.filter(function (d) { return d !== DAYS[i]; }), r, 3)), hint: "Say the days in order: Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday." });
    },
    sort: function (r) { var d = r.pick(DAYS); return { bins: ["School day", "Weekend"], prompt: "Is it a school day or the weekend?", item: { text: d, say: d }, bin: d === "Saturday" || d === "Sunday" ? 1 : 0 }; } });
  /* each weather with its answer and two choices that are clearly wrong for it */
  var WEATHER = [["🌧️", "rain", "☂️", "an umbrella", [["🕶️", "sunglasses"], ["🩳", "shorts and sandals"]]], ["❄️", "snow", "🧥", "a warm coat", [["🩳", "shorts and sandals"], ["🕶️", "sunglasses"]]],
    ["☀️", "a hot, sunny day", "💧", "water and a cap", [["🧥", "a warm coat"], ["🧤", "gloves"]]], ["⛈️", "a thunderstorm", "🏠", "stay inside", [["🏊", "go swimming"], ["🪁", "fly a kite"]]]];
  add("life", { code: "P1.life.weather", name: "Weather and what to wear", tier: 1,
    gen: function (r) {
      var w = r.pick(WEATHER);
      return item({ prompt: "Look outside: " + w[1] + ". What do you need?", visual: A.pic(w[0], w[1]), choices: [{ text: w[3], html: A.pic(w[2], ""), say: w[3] }].concat(w[4].map(function (x) { return { text: x[1], html: A.pic(x[0], ""), say: x[1] }; })),
        hint: "Think: what keeps you safe and comfortable in " + w[1] + "?" });
    },
    pair: function (r) { var w = r.pick(WEATHER); return { a: { text: w[1], html: A.pic(w[0], w[1]) }, b: { text: w[3], html: A.pic(w[2], w[3]) }, key: w[1] }; } });
  var PLACES = [["Where do you buy food?", "🛒", "grocery store"], ["Where do you go when you are very sick or hurt?", "🏥", "hospital"], ["Where do you mail a letter?", "📮", "post office"], ["Where do you put money in your account?", "🏦", "bank"],
    ["Where can you borrow a book for free?", "📚", "library"], ["Where do you get a haircut?", "💈", "barber shop"], ["Where do you buy medicine?", "💊", "pharmacy"], ["Where do you put gas in a car?", "⛽", "gas station"], ["Where do you eat a meal that someone cooks for you?", "🍽️", "restaurant"]];
  add("life", { code: "P1.life.places", name: "Places in the community", tier: 2,
    gen: function (r) {
      var p = r.pick(PLACES), others = r.sample(PLACES.filter(function (x) { return x !== p; }), 3);
      return item({ prompt: p[0], choices: [{ text: p[2], html: A.pic(p[1], ""), say: p[2] }].concat(others.map(function (x) { return { text: x[2], html: A.pic(x[1], ""), say: x[2] }; })), hint: "Think about what people do at each place." });
    },
    pair: function (r) { var p = r.pick(PLACES); return { a: { text: "", html: A.pic(p[1], p[2]), say: "a picture" }, b: p[2], key: p[2] }; } });
  var FIRSTS = [["Wash your hands", "Eat lunch"], ["Put on socks", "Put on shoes"], ["Pay for the food", "Leave the store"], ["Wait for the bus", "Get on the bus"], ["Brush your teeth", "Go to bed"], ["Wake up", "Get dressed"],
    ["Put the bread in the toaster", "Eat the toast"], ["Look both ways", "Cross the street"], ["Knock on the door", "Walk in"], ["Fill the cup with water", "Drink the water"], ["Turn on the water", "Wash the dishes"], ["Unlock the door", "Open the door"]];
  add("life", { code: "P1.life.first-next", name: "What comes first?", tier: 3,
    gen: function (r) {
      var f = r.pick(FIRSTS), last = r.chance(0.3);
      return item({ prompt: "What do you do <b>" + (last ? "last" : "first") + "</b>?", say: "What do you do " + (last ? "last" : "first") + "?", choices: last ? [f[1], f[0]] : [f[0], f[1]],
        hint: "Think about doing it for real. Which step has to happen before the other one?" });
    } });
  add("life", { code: "P1.life.emergency", name: "Emergencies and 911", tier: 2,
    gen: function (r) {
      var q = r.pick([
        ["There is a fire. What number do you call?", ["911", "411", "100", "123"], "Call 911 for a fire, a crime, or when someone is badly hurt."],
        ["Someone falls down and will not wake up. What do you do?", ["Call 911 and get an adult", "Walk away", "Take a nap", "Play a game"], "Get help fast. Call 911."],
        ["A stranger in a car asks you to get in. What do you do?", ["Say no and walk away to a safe adult", "Get in the car", "Give the stranger your phone"], "Never get in a car with a stranger. Go to an adult you trust."],
        ["You smell smoke in the building. What do you do?", ["Leave by the EXIT and tell an adult", "Hide under the bed", "Keep doing your work"], "Get out by the exit and tell an adult."],
        ["You are lost at the store. Who can you ask for help?", ["A worker at the store", "Nobody", "A person in the parking lot"], "Store workers wear name tags or uniforms. They can help."]]);
      return item({ prompt: q[0], choices: q[1], hint: q[2] });
    } });
  var SAFE = [["🍎", "apple", 0], ["🥛", "milk", 0], ["🍞", "bread", 0], ["🥕", "carrot", 0], ["🧀", "cheese", 0], ["🍌", "banana", 0], ["🧃", "juice", 0], ["🥚", "egg", 0],
    ["🧴", "bleach", 1], ["🧼", "soap", 1], ["🔋", "battery", 1], ["💊", "someone else's pills", 1], ["🧽", "dish sponge", 1], ["🪫", "old battery", 1], ["🧪", "cleaner", 1], ["🕯️", "candle", 1]];
  add("life", { code: "P1.life.safe-food", name: "Safe to eat?", tier: 1,
    sort: function (r) { var s = r.pick(SAFE); return { bins: ["Safe to eat", "NOT safe to eat"], prompt: "Is it safe to eat or drink?", item: { text: s[1], html: A.pic(s[0], ""), say: s[1] }, bin: s[2], hint: s[2] ? "Never eat or drink cleaners, batteries, soap or medicine that is not yours." : "This is food." }; } });
  var HOME = [["🍞", "bread", 0], ["🥫", "soup can", 0], ["🍎", "apple", 0], ["🧀", "cheese", 0], ["👕", "T-shirt", 1], ["👖", "jeans", 1], ["🧦", "socks", 1], ["🧥", "coat", 1], ["🧼", "soap", 2], ["🧽", "sponge", 2], ["🧹", "broom", 2], ["🧻", "paper towels", 2]];
  add("life", { code: "P1.life.sort-home", name: "Food, clothes or cleaning?", tier: 3,
    sort: function (r) { var s = r.pick(HOME); return { bins: ["Food", "Clothes", "Cleaning"], prompt: "Where does it go?", item: { text: s[1], html: A.pic(s[0], ""), say: s[1] }, bin: s[2] }; } });
  var HOTCOLD = [["🔥", "stove", 0], ["☕", "coffee", 0], ["🍲", "soup", 0], ["🌞", "summer sun", 0], ["🛁", "bath water", 0], ["🧊", "ice", 1], ["🍦", "ice cream", 1], ["❄️", "snow", 1], ["🥶", "a freezer", 1], ["🥤", "iced drink", 1]];
  add("life", { code: "P1.life.hot-cold", name: "Hot or cold?", tier: 2,
    sort: function (r) { var s = r.pick(HOTCOLD); return { bins: ["Hot", "Cold"], prompt: "Is it hot or cold?", item: { text: s[1], html: A.pic(s[0], ""), say: s[1] }, bin: s[2] }; } });
  var FEEL = [["😀", "happy"], ["😢", "sad"], ["😠", "angry"], ["😨", "scared"], ["😴", "tired"], ["😮", "surprised"], ["🤒", "sick"]];
  add("life", { code: "P1.life.feelings", name: "Feelings", tier: 1,
    gen: function (r) {
      var f = r.pick(FEEL);
      return item({ prompt: "How does this person feel?", visual: A.pic(f[0], ""), choices: [f[1]].concat(SWD.others(f[1], FEEL.map(function (x) { return x[1]; }), r, 3)), hint: "Look at the eyes and the mouth." });
    },
    pair: function (r) { var f = r.pick(FEEL); return { a: { text: "", html: A.pic(f[0], f[1]), say: "a face" }, b: f[1], key: f[1] }; } });
})();
