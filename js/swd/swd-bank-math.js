/* Sol's Labyrinth · SWD: Path 2 math, grade 2 to grade 6 (one band per grade). Every item is generated, so the
   numbers change each time and the answer is always computed, never typed by hand. The skills follow the grade's
   usual order (Virginia Mathematics SOL, roughly): a student starts with the first ones and the rest open as the
   levels go up. Word problems are about jobs, shopping, sports, phones, food and travel. */
(function () {
  "use strict";
  var SWD = window.SWD, A = SWD.art, item = SWD.item, money = SWD.money;
  function add(band, def) { return SWD.skill(band, "math", def); }
  function nums(ans, r, opts) { return [String(ans)].concat(SWD.near(ans, r, opts).map(String)); }
  function fmt(n) { return SWD.num(n); }
  var NAMES = ["Ana", "Ben", "Carlos", "Dee", "Eli", "Fatima", "Gus", "Hana", "Ivan", "Jada", "Kim", "Leo", "Maya", "Nico", "Omar", "Pia", "Rosa", "Sam", "Tariq", "Uma", "Vic", "Zoe"];
  function nm(r) { return r.pick(NAMES); }
  function frac(n, d) { return n + "/" + d; }
  function fracHtml(n, d) { return '<span class="frac"><sup>' + n + "</sup><sub>" + d + "</sub></span>"; }
  function fracChoice(n, d) { return { text: n + "/" + d, html: fracHtml(n, d), say: n + " over " + d }; }
  function gcd(a, b) { return b ? gcd(b, a % b) : Math.abs(a); }
  function dec(x, p) { return Number(x.toFixed(p == null ? 2 : p)); }
  function decStr(x, p) { return x.toFixed(p == null ? 2 : p); }

  /* ════════ GRADE 2 ════════ */
  add("G2", { code: "G2.math.add", name: "Add two-digit numbers", tier: 1,
    gen: function (r, t) {
      var a, b;
      if (t < 3) { a = r.int(1, 7) * 10 + r.int(0, 4); b = r.int(1, 2) * 10 + r.int(0, 9 - a % 10); }
      else { a = r.int(15, 69); b = r.int(12, 99 - a); }
      return item({ prompt: a + " + " + b + " = <b>?</b>", say: a + " plus " + b + " equals what?", visual: A.blocks(0, Math.floor(a / 10), a % 10) + '<span class="op">+</span>' + A.blocks(0, Math.floor(b / 10), b % 10),
        choices: nums(a + b, r, { extra: [a + b - 10, a + b + 10], lo: 0 }), hint: "Add the ones first, then the tens. 10 ones make 1 ten." });
    },
    pair: function (r) { var a = r.int(11, 60), b = r.int(10, 30); return { a: a + " + " + b, b: String(a + b), key: "a" + (a + b) }; } });
  add("G2", { code: "G2.math.sub", name: "Subtract two-digit numbers", tier: 2,
    gen: function (r, t) {
      var a = r.int(30, 99), b = t < 3 ? r.int(1, Math.floor(a / 10) - 1) * 10 + r.int(0, a % 10) : r.int(11, a - 5);
      return item({ prompt: a + " − " + b + " = <b>?</b>", say: a + " minus " + b + " equals what?", choices: nums(a - b, r, { extra: [a - b + 10, a + b > 100 ? a - b - 10 : a + b], lo: 0 }),
        hint: "Take away the ones, then the tens. If there are not enough ones, trade 1 ten for 10 ones." });
    } });
  add("G2", { code: "G2.math.place", name: "Place value: tens and ones", tier: 1,
    gen: function (r, t) {
      var h = t >= 3 ? r.int(1, 4) : 0, tt = r.int(1, 9), o = r.int(0, 9), n = h * 100 + tt * 10 + o;
      if (r.chance(0.5)) return item({ prompt: "What number do the blocks show?", visual: A.blocks(h, tt, o), choices: nums(n, r, { extra: [Number(String(o) + String(tt)), n + 10, n - 1].filter(function (x) { return x !== n; }) }),
        hint: (h ? "Big squares are hundreds. " : "") + "Long sticks are tens. Small cubes are ones." });
      var d = r.pick(h ? ["hundreds", "tens", "ones"] : ["tens", "ones"]), v = { hundreds: h * 100, tens: tt * 10, ones: o }[d], digit = { hundreds: h, tens: tt, ones: o }[d];
      return item({ prompt: "In <b>" + n + "</b>, what is the value of the " + digit + "?", say: "In " + n + ", what is the value of the " + digit + "?",
        choices: [String(v)].concat([digit, digit * 10, digit * 100].filter(function (x) { return x !== v; }).map(String)).concat([String(v + 1)]).slice(0, 4), hint: "The " + digit + " is in the " + d + " place." });
    },
    pair: function (r) { var tt = r.int(1, 9), o = r.int(0, 9); return { a: { text: "", html: A.blocks(0, tt, o), say: tt + " tens and " + o + " ones" }, b: String(tt * 10 + o), key: "p" + tt + o }; } });
  add("G2", { code: "G2.math.compare", name: "Compare numbers (<, >, =)", tier: 2,
    gen: function (r) {
      var a = r.int(100, 999), b = r.chance(0.15) ? a : r.int(100, 999), s = a > b ? ">" : a < b ? "<" : "=";
      return item({ prompt: a + " <b>?</b> " + b, say: "Which sign goes between " + a + " and " + b + "?", choices: [{ text: s, big: true, say: { ">": "greater than", "<": "less than", "=": "equal to" }[s] }].concat(["<", ">", "="].filter(function (x) { return x !== s; }).map(function (x) { return { text: x, big: true, say: { ">": "greater than", "<": "less than", "=": "equal to" }[x] }; })),
        hint: "Compare the hundreds first. The open side of < or > faces the bigger number." });
    } });
  add("G2", { code: "G2.math.evenodd", name: "Even and odd", tier: 1,
    gen: function (r) { var n = r.int(1, 40), e = n % 2 === 0; return item({ prompt: "Is <b>" + n + "</b> even or odd?", say: "Is " + n + " even or odd?", choices: e ? ["even", "odd"] : ["odd", "even"], hint: "Look at the ones digit. 0, 2, 4, 6, 8 are even." }); },
    sort: function (r) { var n = r.int(1, 99); return { bins: ["Even", "Odd"], prompt: "Even or odd?", item: { text: String(n), big: true }, bin: n % 2 }; } });
  add("G2", { code: "G2.math.skip", name: "Skip count by 2s, 5s and 10s", tier: 1,
    gen: function (r) {
      var by = r.pick([2, 5, 10, 100]), s = r.int(0, 10) * by, seq = [s, s + by, s + 2 * by, s + 3 * by], miss = r.int(1, 3), ans = seq[miss];
      var shown = seq.map(function (x, i) { return i === miss ? "<b>?</b>" : x; });
      return item({ prompt: shown.join(", ") + ", " + (s + 4 * by), say: "Count by " + by + "s. What number is missing? " + seq.map(function (x, i) { return i === miss ? "blank" : x; }).join(", ") + ", " + (s + 4 * by),
        choices: nums(ans, r, { step: by === 100 ? 10 : 1, extra: [ans + by, ans - 1] }), hint: "Count by " + by + "s." });
    } });
  add("G2", { code: "G2.math.time5", name: "Time to 5 minutes", tier: 3,
    gen: function (r) {
      var h = r.int(1, 12), m = r.int(0, 11) * 5, s = h + ":" + ("0" + m).slice(-2), wm = (m / 5) % 12;
      var wrong = [h + ":" + ("0" + (wm || 12)).slice(-2), (h % 12 + 1) + ":" + ("0" + m).slice(-2), h + ":" + ("0" + ((m + 5) % 60)).slice(-2)];
      return item({ prompt: "What time is it?", visual: A.clock(h, m, 170), choices: [s].concat(wrong.filter(function (x) { return x !== s; })), hint: "The long hand: count by 5s from the 12. The short hand tells the hour." });
    },
    pair: function (r) { var h = r.int(1, 12), m = r.int(1, 11) * 5; return { a: { text: "", html: A.clock(h, m, 110), say: "a clock" }, b: h + ":" + ("0" + m).slice(-2), key: "t" + h + "_" + m }; } });
  add("G2", { code: "G2.math.coins", name: "Count coins to $1", tier: 3,
    gen: function (r) {
      var q = r.int(0, 3), d = r.int(0, 4), n = r.int(0, 2), p = r.int(0, 4), l = [], i;
      if (q + d + n + p < 2) d += 2;
      for (i = 0; i < q; i++) l.push(25); for (i = 0; i < d; i++) l.push(10); for (i = 0; i < n; i++) l.push(5); for (i = 0; i < p; i++) l.push(1);
      var tot = q * 25 + d * 10 + n * 5 + p;
      return item({ prompt: "How much money?", visual: A.money(l), choices: [money(tot)].concat(SWD.near(tot, r, { extra: [tot + 5, tot - 5, l.length], lo: 1 }).map(function (x) { return money(x); })),
        hint: "Start with the coins worth the most. Count on: quarters by 25, dimes by 10, nickels by 5, pennies by 1." });
    } });
  add("G2", { code: "G2.math.inches", name: "Measure in inches", tier: 4,
    gen: function (r) { var L = r.int(1, 6); return item({ prompt: "How long is the blue bar?", visual: A.ruler(7, L), choices: nums(L, r, { lo: 1, hi: 8 }).map(function (x) { return x + (x === "1" ? " inch" : " inches"); }), hint: "Start at 0. Read the number at the end of the bar." }); } });
  add("G2", { code: "G2.math.fractions", name: "Halves, thirds and fourths", tier: 4,
    gen: function (r) {
      var d = r.pick([2, 3, 4]), n = r.int(1, d - 1), pic = r.chance(0.5) ? A.fractionCircle(n, d) : A.fractionBar(n, d);
      return item({ prompt: "What part is shaded?", visual: pic, choices: [fracChoice(n, d)].concat([[d - n === n ? n + 1 : d - n, d], [n, d + 1], [d, n === d ? n + 1 : n]].filter(function (f) { return !(f[0] === n && f[1] === d) && f[0] > 0; }).map(function (f) { return fracChoice(f[0], f[1]); })),
        hint: "The bottom number is how many equal parts in all. The top number is how many are shaded." });
    },
    pair: function (r) { var d = r.pick([2, 3, 4]), n = r.int(1, d - 1); return { a: { text: "", html: A.fractionCircle(n, d, 90), say: "a circle" }, b: fracChoice(n, d), key: "f" + n + d }; } });
  add("G2", { code: "G2.math.graph", name: "Read a bar graph", tier: 5,
    gen: function (r) {
      var labels = r.sample(["Pizza", "Tacos", "Burgers", "Salad", "Pasta"], 4), rows = labels.map(function (l) { return [l, r.int(1, 10)]; }), q = r.int(0, 2);
      var max = rows.reduce(function (a, b) { return b[1] > a[1] ? b : a; }), min = rows.reduce(function (a, b) { return b[1] < a[1] ? b : a; });
      if (rows.filter(function (x) { return x[1] === max[1]; }).length > 1 || rows.filter(function (x) { return x[1] === min[1]; }).length > 1) { rows[0][1] = 11; max = rows[0]; q = q === 1 ? 0 : q; }
      var vis = A.barGraph(rows, "Favorite lunch"), pick = r.pick(rows);
      if (q === 0) return item({ prompt: "Which lunch got the <b>most</b> votes?", visual: vis, choices: [max[0]].concat(labels.filter(function (x) { return x !== max[0]; })), hint: "Find the tallest bar." });
      if (q === 1) return item({ prompt: "Which lunch got the <b>fewest</b> votes?", visual: vis, choices: [min[0]].concat(labels.filter(function (x) { return x !== min[0]; })), hint: "Find the shortest bar." });
      return item({ prompt: "How many votes did " + pick[0] + " get?", visual: vis, choices: nums(pick[1], r, { lo: 0 }), hint: "Go to the top of the " + pick[0] + " bar, then look across to the numbers." });
    } });
  add("G2", { code: "G2.math.story", name: "Word problems: add and subtract", tier: 2, long: true,
    gen: function (r) {
      var who = nm(r), k = r.int(0, 3), a, b, q, ans, hint;
      if (k === 0) { a = r.int(12, 45); b = r.int(10, 40); q = who + " has " + a + " songs on a playlist. " + who + " adds " + b + " more. How many songs now?"; ans = a + b; hint = "Adds more means put together: " + a + " + " + b + "."; }
      else if (k === 1) { a = r.int(40, 90); b = r.int(10, a - 10); q = "The store had " + a + " cans of soup. People bought " + b + ". How many cans are left?"; ans = a - b; hint = "Left means take away: " + a + " − " + b + "."; }
      else if (k === 2) { a = r.int(20, 60); b = r.int(5, 30); q = who + " scored " + a + " points. Jo scored " + b + " more than " + who + ". How many points did Jo score?"; ans = a + b; hint = "More than means add: " + a + " + " + b + "."; }
      else { a = r.int(50, 99); b = r.int(10, a - 5); q = "A bus can hold " + a + " people. " + b + " people are on it. How many more people can get on?"; ans = a - b; hint = "Find the difference: " + a + " − " + b + "."; }
      return item({ prompt: q, choices: nums(ans, r, { extra: [k % 2 ? a + b : Math.abs(a - b)], lo: 0 }), hint: hint });
    } });

  /* ════════ GRADE 3 ════════ */
  function factPool(t) { return t <= 1 ? [2, 5, 10] : t === 2 ? [2, 3, 4, 5, 10] : [2, 3, 4, 5, 6, 7, 8, 9, 10]; }
  add("G3", { code: "G3.math.mult", name: "Multiplication facts", tier: 1,
    gen: function (r, t) {
      var a = r.pick(factPool(t)), b = r.int(1, 10), ans = a * b;
      if (r.chance(0.5)) { var x = a; a = b; b = x; }
      return item({ prompt: a + " × " + b + " = <b>?</b>", say: a + " times " + b + " equals what?", visual: a <= 6 && b <= 10 ? A.array(a, b) : null,
        choices: nums(ans, r, { extra: [a + b, ans + a, ans - b].filter(function (x) { return x !== ans && x > 0; }), lo: 0 }), hint: a + " × " + b + " means " + a + (a === 1 ? " group" : " groups") + " of " + b + ". Skip count by " + b + ", " + a + (a === 1 ? " time." : " times.") });
    },
    pair: function (r, t) { var a = r.pick(factPool(t)), b = r.int(2, 10); return { a: a + " × " + b, b: String(a * b), key: "m" + a * b, say: a + " times " + b }; },
    sort: function (r, t) { var a = r.pick([2, 3, 4, 5, 6, 7, 8, 9]), b = r.int(1, 10), p = a * b; return { bins: ["Less than 30", "30 or more"], prompt: "Is the answer less than 30, or 30 or more?", item: { text: a + " × " + b, say: a + " times " + b }, bin: p < 30 ? 0 : 1, hint: a + " × " + b + " = " + p }; } });
  add("G3", { code: "G3.math.div", name: "Division facts", tier: 2,
    gen: function (r, t) {
      var b = r.pick(factPool(t)), ans = r.int(1, 10), a = b * ans;
      return item({ prompt: a + " ÷ " + b + " = <b>?</b>", say: a + " divided by " + b + " equals what?", choices: nums(ans, r, { extra: [a - b, ans + 1, b] .filter(function (x) { return x !== ans && x > 0; }), lo: 1 }),
        hint: "Think: " + b + " × what = " + a + "?" });
    },
    pair: function (r, t) { var b = r.pick(factPool(t)), ans = r.int(2, 10); return { a: b * ans + " ÷ " + b, b: String(ans), key: "d" + ans, say: b * ans + " divided by " + b }; } });
  add("G3", { code: "G3.math.addsub3", name: "Add and subtract to 1,000", tier: 1,
    gen: function (r) {
      var a = r.int(120, 650), b = r.int(100, 340), plus = r.chance(0.5);
      if (!plus && b > a) { var x = a; a = b; b = x; }
      var ans = plus ? a + b : a - b;
      return item({ prompt: a + (plus ? " + " : " − ") + b + " = <b>?</b>", say: a + (plus ? " plus " : " minus ") + b + " equals what?", choices: nums(ans, r, { extra: [ans + 100, ans - 10, ans + 10], lo: 0 }),
        hint: "Line up the ones, tens and hundreds. Start with the ones." });
    } });
  add("G3", { code: "G3.math.round", name: "Round to the nearest 10 or 100", tier: 3,
    gen: function (r) {
      var to = r.pick([10, 100]), n = to === 10 ? r.int(11, 99) : r.int(110, 990);
      if (n % to === 0) n += 3;
      var ans = Math.round(n / to) * to, down = Math.floor(n / to) * to, up = down + to;
      return item({ prompt: "Round <b>" + n + "</b> to the nearest " + to + ".", say: "Round " + n + " to the nearest " + to + ".", visual: A.numberLine(down, up, n, false, to / 10),
        choices: [String(ans), String(ans === up ? down : up), String(n - n % (to / 10)), String(ans + to)], hint: "Which is closer, " + down + " or " + up + "? Halfway (5) rounds up." });
    } });
  add("G3", { code: "G3.math.frac", name: "Fractions", tier: 2,
    gen: function (r, t) {
      var d = r.pick([2, 3, 4, 6, 8]), n = r.int(1, d - 1);
      if (t >= 3 && r.chance(0.5) && d > 2) {
        var m = r.int(1, d - 1);
        while (m === n) m = r.int(1, d - 1);
        var big = Math.max(n, m), sm = Math.min(n, m);
        return item({ prompt: "Which fraction is <b>bigger</b>?", say: "Which fraction is bigger, " + n + " over " + d + " or " + m + " over " + d + "?", visual: A.fractionBar(n, d) + A.fractionBar(m, d),
          choices: [fracChoice(big, d), fracChoice(sm, d)], hint: "Same bottom number: more parts shaded is bigger." });
      }
      return item({ prompt: "What fraction is shaded?", visual: A.fractionBar(n, d), choices: [fracChoice(n, d), fracChoice(d - n === n ? n + 1 : d - n, d), fracChoice(n, d + 2), fracChoice(d, n)], hint: "Count all the parts (bottom), then the shaded parts (top)." });
    },
    pair: function (r) { var d = r.pick([2, 3, 4, 6, 8]), n = r.int(1, d - 1); return { a: { text: "", html: A.fractionBar(n, d, 160), say: "a bar" }, b: fracChoice(n, d), key: "f" + n + "/" + d }; } });
  add("G3", { code: "G3.math.elapsed", name: "Elapsed time", tier: 4,
    gen: function (r) {
      var h = r.int(1, 9), m = r.pick([0, 15, 30, 45]), dh = r.int(1, 3), dm = r.pick([0, 0, 15, 30]), em = m + dm, eh = h + dh + Math.floor(em / 60);
      em %= 60;
      var t2 = eh + ":" + ("0" + em).slice(-2), dur = (dh ? dh + (dh === 1 ? " hour" : " hours") : "") + (dm ? (dh ? " " : "") + dm + " minutes" : ""), what = r.pick(["Work starts", "The movie starts", "The game starts", "Practice starts"]);
      var wrong = [(eh + 1) + ":" + ("0" + em).slice(-2), (eh - 1 > 0 ? eh - 1 : eh + 2) + ":" + ("0" + em).slice(-2), eh + ":" + ("0" + ((em + 30) % 60)).slice(-2)];
      return item({ prompt: what + " at <b>" + h + ":" + ("0" + m).slice(-2) + "</b>. It lasts <b>" + dur + "</b>. When does it end?", say: what + " at " + h + ":" + ("0" + m).slice(-2) + ". It lasts " + dur + ". When does it end?",
        visual: A.clock(h, m, 140), choices: [t2].concat(wrong.filter(function (x) { return x !== t2; })), hint: "Count on the hours first, then the minutes." });
    } });
  add("G3", { code: "G3.math.perimeter", name: "Perimeter and area", tier: 4,
    gen: function (r) {
      var w = r.int(2, 8), h = r.int(2, 6), area = r.chance(0.5);
      if (area) return item({ prompt: "What is the <b>area</b>? (Count the squares.)", say: "What is the area? Count the squares.", visual: A.grid(w, h), choices: nums(w * h, r, { extra: [2 * (w + h), w + h], lo: 1 }).map(function (x) { return x + " square units"; }), hint: "Area is the number of squares inside: " + h + " rows of " + w + "." });
      return item({ prompt: "What is the <b>perimeter</b> of the rectangle?", say: "What is the perimeter of the rectangle? It is " + w + " feet by " + h + " feet.", visual: A.rect(w, h, "ft"),
        choices: nums(2 * (w + h), r, { extra: [w * h, w + h], lo: 1 }).map(function (x) { return x + " ft"; }), hint: "Perimeter is the distance all the way around: " + w + " + " + h + " + " + w + " + " + h + "." });
    } });
  add("G3", { code: "G3.math.story", name: "Word problems: groups", tier: 3, long: true,
    gen: function (r) {
      var k = r.int(0, 2), a = r.int(2, 9), b = r.int(2, 9), q, ans, hint;
      if (k === 0) { q = "There are " + a + " packs of batteries. Each pack has " + b + " batteries. How many batteries in all?"; ans = a * b; hint = a + " groups of " + b + ": " + a + " × " + b + "."; }
      else if (k === 1) { q = a * b + " students sit at " + a + " tables. Each table has the same number. How many students at each table?"; ans = b; hint = "Share equally: " + a * b + " ÷ " + a + "."; }
      else { q = nm(r) + " works " + a + " hours a day for " + b + " days. How many hours in all?"; ans = a * b; hint = a + " × " + b + "."; }
      return item({ prompt: q, choices: nums(ans, r, { extra: [a + b], lo: 1 }), hint: hint });
    } });

  /* ════════ GRADE 4 ════════ */
  add("G4", { code: "G4.math.mult", name: "Multiply bigger numbers", tier: 1,
    gen: function (r, t) {
      var a = t >= 4 ? r.int(11, 49) : r.int(12, 99), b = t >= 4 ? r.int(11, 25) : r.int(2, 9), ans = a * b;
      return item({ prompt: a + " × " + b + " = <b>?</b>", say: a + " times " + b + " equals what?", choices: nums(ans, r, { extra: [ans + 10, ans - b, ans + a], lo: 1 }),
        hint: b < 10 ? "Break it apart: " + Math.floor(a / 10) * 10 + " × " + b + " plus " + a % 10 + " × " + b + "." : "Multiply by the ones, then by the tens, then add." });
    } });
  add("G4", { code: "G4.math.divrem", name: "Divide (with remainders)", tier: 2,
    gen: function (r) {
      var b = r.int(2, 9), q = r.int(3, 20), rem = r.int(0, b - 1), a = b * q + rem, s = rem ? q + " R" + rem : String(q);
      return item({ prompt: a + " ÷ " + b + " = <b>?</b>", say: a + " divided by " + b + " equals what?", choices: [s, (q + 1) + (rem ? " R" + rem : ""), q + " R" + ((rem + 1) % b || b - 1), (q - 1) + " R" + (rem + b > 9 ? rem : rem + b)].filter(function (x, i, arr) { return arr.indexOf(x) === i; }),
        hint: "How many groups of " + b + " fit in " + a + "? What is left over is the remainder." });
    } });
  add("G4", { code: "G4.math.equiv", name: "Equivalent fractions", tier: 2,
    gen: function (r) {
      var d = r.pick([2, 3, 4, 5]), n = r.int(1, d - 1), k = r.int(2, 4);
      return item({ prompt: fracHtml(n, d) + " = <b>?</b>", say: n + " over " + d + " is the same as which fraction?", visual: A.fractionBar(n, d) + A.fractionBar(n * k, d * k),
        choices: [fracChoice(n * k, d * k), fracChoice(n + k, d + k), fracChoice(n * k, d), fracChoice(n, d * k)], hint: "Multiply the top and the bottom by the same number." });
    },
    pair: function (r) { var d = r.pick([2, 3, 4, 5]), n = r.int(1, d - 1), k = r.int(2, 3); return { a: fracChoice(n, d), b: fracChoice(n * k, d * k), key: "e" + n / d }; } });
  add("G4", { code: "G4.math.fcompare", name: "Compare fractions", tier: 3,
    gen: function (r) {
      var p = r.pick([[1, 2, 1, 3], [1, 4, 1, 2], [2, 3, 1, 2], [3, 4, 2, 3], [1, 3, 1, 4], [3, 8, 1, 2], [5, 6, 2, 3], [2, 5, 1, 2]]), a = p[0] / p[1], b = p[2] / p[3];
      var big = a > b ? [p[0], p[1]] : [p[2], p[3]], sm = a > b ? [p[2], p[3]] : [p[0], p[1]];
      return item({ prompt: "Which fraction is <b>greater</b>?", visual: A.fractionCircle(p[0], p[1], 100) + A.fractionCircle(p[2], p[3], 100), choices: [fracChoice(big[0], big[1]), fracChoice(sm[0], sm[1])],
        hint: "Compare each to 1/2, or look at how much of each circle is shaded." });
    } });
  add("G4", { code: "G4.math.decimal", name: "Decimals and money", tier: 1,
    gen: function (r) {
      var c = r.int(1, 99), k = r.int(0, 2);
      if (k === 0) return item({ prompt: "Write <b>" + c + " cents</b> as dollars.", say: "Write " + c + " cents as dollars.", choices: ["$0." + ("0" + c).slice(-2), "$" + c + ".00", "$0." + c + "0", "$" + (c / 10).toFixed(1)].filter(function (x, i, a) { return a.indexOf(x) === i; }), hint: "100 cents = $1.00. Cents go after the decimal point, two places." });
      if (k === 1) { var tn = r.int(1, 9); return item({ prompt: "What decimal is shaded?", visual: A.fractionBar(tn, 10, 280), choices: ["0." + tn, "0.0" + tn, tn + ".0", "0." + (10 - tn)], hint: tn + " out of 10 parts = " + tn + (tn === 1 ? " tenth" : " tenths") + " = 0." + tn }); }
      var a = r.int(1, 99) / 100, b = r.int(1, 99) / 100;
      while (a === b) b = r.int(1, 99) / 100;
      return item({ prompt: "Which is <b>greater</b>?", choices: [decStr(Math.max(a, b)), decStr(Math.min(a, b))], hint: "Compare tenths first, then hundredths. Think of money: $" + decStr(Math.max(a, b)) + " is more." });
    },
    pair: function (r) { var c = r.int(5, 95); return { a: c + "¢", b: "$0." + ("0" + c).slice(-2), key: "c" + c, say: c + " cents" }; } });
  add("G4", { code: "G4.math.money-add", name: "Add and subtract money", tier: 3,
    gen: function (r) {
      var a = r.int(150, 1200), b = r.int(99, 800), plus = r.chance(0.6);
      if (!plus && b > a) { var x = a; a = b; b = x; }
      var ans = plus ? a + b : a - b;
      return item({ prompt: SWD.dollars(a) + (plus ? " + " : " − ") + SWD.dollars(b) + " = <b>?</b>", say: SWD.sayMoney(a) + (plus ? " plus " : " minus ") + SWD.sayMoney(b),
        choices: [SWD.dollars(ans)].concat(SWD.near(ans, r, { extra: [ans + 100, ans - 10, ans + 1], lo: 0 }).map(SWD.dollars)), hint: "Line up the decimal points. Add the cents, then the dollars." });
    } });
  var CONV = [["feet", "inches", 12], ["yards", "feet", 3], ["hours", "minutes", 60], ["minutes", "seconds", 60], ["pounds", "ounces", 16], ["gallons", "quarts", 4], ["quarts", "pints", 2], ["pints", "cups", 2], ["days", "hours", 24], ["weeks", "days", 7], ["dollars", "quarters", 4]];
  add("G4", { code: "G4.math.convert", name: "Measurement conversions", tier: 3,
    gen: function (r) {
      var c = r.pick(CONV), n = r.int(2, 6), ans = n * c[2];
      return item({ prompt: n + " " + c[0] + " = <b>?</b> " + c[1], say: n + " " + c[0] + " is how many " + c[1] + "?", choices: nums(ans, r, { extra: [n + c[2], ans + c[2], ans - c[2]], lo: 1 }).map(function (x) { return x + " " + c[1]; }),
        hint: "1 " + c[0].replace(/s$/, "") + " = " + c[2] + " " + c[1] + ". Multiply " + n + " × " + c[2] + "." });
    },
    pair: function (r) { var c = r.pick(CONV); return { a: "1 " + c[0].replace(/s$/, ""), b: c[2] + " " + c[1], key: c[0] }; } });
  add("G4", { code: "G4.math.factors", name: "Factors and multiples", tier: 4,
    gen: function (r) {
      var n = r.pick([12, 16, 18, 20, 24, 30, 36]), facs = [], i;
      for (i = 2; i < n; i++) if (n % i === 0) facs.push(i);
      var f = r.pick(facs), non = [];
      for (i = 2; i < n; i++) if (n % i !== 0) non.push(i);
      return item({ prompt: "Which number is a <b>factor</b> of " + n + "?", say: "Which number is a factor of " + n + "?", choices: [String(f)].concat(r.sample(non, 3).map(String)), hint: "A factor divides " + n + " with nothing left over." });
    },
    sort: function (r) { var n = r.int(2, 30), p = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29].indexOf(n) !== -1; return { bins: ["Prime", "Composite"], prompt: "Prime or composite?", item: { text: String(n), big: true }, bin: p ? 0 : 1, hint: "A prime number has only 2 factors: 1 and itself." }; } });
  add("G4", { code: "G4.math.story", name: "Word problems", tier: 4, long: true,
    gen: function (r) {
      var k = r.int(0, 2), q, ans, hint, who = nm(r);
      if (k === 0) { var p = r.int(3, 9), n = r.int(12, 30); q = who + " sells " + n + " T-shirts for $" + p + " each. How much money is that?"; ans = "$" + p * n; hint = n + " × $" + p + "."; return item({ prompt: q, choices: [ans].concat(SWD.near(p * n, r, { extra: [p + n], lo: 1 }).map(function (x) { return "$" + x; })), hint: hint }); }
      if (k === 1) { var tot = r.int(60, 200), per = r.int(6, 12); q = tot + " bottles of water are packed in boxes of " + per + ". How many boxes can be filled?"; ans = Math.floor(tot / per); hint = tot + " ÷ " + per + " = " + ans + " R" + tot % per + ". Only full boxes count."; return item({ prompt: q, choices: nums(ans, r, { extra: [ans + 1], lo: 1 }), hint: hint }); }
      var m = r.int(15, 45), d = r.int(4, 7); q = who + " walks " + m + " minutes a day for " + d + " days. How many minutes is that?"; return item({ prompt: q, choices: nums(m * d, r, { extra: [m + d], lo: 1 }), hint: m + " × " + d + "." });
    } });

  /* ════════ GRADE 5 ════════ */
  add("G5", { code: "G5.math.decadd", name: "Add and subtract decimals", tier: 1,
    gen: function (r) {
      var a = r.int(105, 999) / 100, b = r.int(11, 499) / 100, plus = r.chance(0.55);
      if (!plus && b > a) { var x = a; a = b; b = x; }
      var ans = dec(plus ? a + b : a - b), p = 2;
      var wrong = [dec(ans + 0.1), dec(ans - 0.01), dec(ans + 1)].concat(plus ? [] : [dec(a + b)]);
      return item({ prompt: decStr(a) + (plus ? " + " : " − ") + decStr(b) + " = <b>?</b>", say: decStr(a) + (plus ? " plus " : " minus ") + decStr(b),
        choices: [decStr(ans, p)].concat(wrong.filter(function (x) { return x !== ans && x >= 0; }).map(function (x) { return decStr(x, p); })), hint: "Line up the decimal points first." });
    },
    pair: function (r) { var a = r.int(11, 99) / 10, b = r.int(1, 9) / 10; return { a: decStr(a, 1) + " + " + decStr(b, 1), b: decStr(dec(a + b, 1), 1), key: "d" + dec(a + b, 1) }; } });
  add("G5", { code: "G5.math.decmult", name: "Multiply decimals", tier: 3,
    gen: function (r) {
      var a = r.int(11, 99) / 10, b = r.int(2, 9), ans = dec(a * b, 1);
      return item({ prompt: decStr(a, 1) + " × " + b + " = <b>?</b>", say: decStr(a, 1) + " times " + b, choices: [decStr(ans, 1), decStr(ans * 10, 0), decStr(ans / 10, 2), decStr(dec(ans + b / 10, 1), 1)].filter(function (x, i, arr) { return arr.indexOf(x) === i; }),
        hint: "Multiply as if there were no decimal: " + Math.round(a * 10) + " × " + b + " = " + Math.round(a * 10) * b + ". Then put back 1 decimal place." });
    } });
  add("G5", { code: "G5.math.fadd", name: "Add and subtract fractions", tier: 1,
    gen: function (r, t) {
      if (t >= 4 && r.chance(0.5)) {
        var p = r.pick([[1, 2, 1, 4], [1, 3, 1, 6], [1, 2, 1, 6], [1, 4, 1, 8], [1, 2, 3, 8], [2, 3, 1, 6]]), D = p[1] > p[3] ? p[1] : p[3], N = p[0] * D / p[1] + p[2] * D / p[3], g = gcd(N, D);
        return item({ prompt: fracHtml(p[0], p[1]) + " + " + fracHtml(p[2], p[3]) + " = <b>?</b>", say: p[0] + " over " + p[1] + " plus " + p[2] + " over " + p[3],
          choices: [fracChoice(N / g, D / g), fracChoice(p[0] + p[2], p[1] + p[3]), fracChoice(p[0] + p[2], D), fracChoice(N / g + 1, D / g)], hint: "Make the bottoms the same first: change " + p[0] + "/" + p[1] + " to " + p[0] * D / p[1] + "/" + D + "." });
      }
      var d = r.pick([4, 5, 6, 8, 10]), a = r.int(1, d - 2), b = r.int(1, d - a - 1), plus = r.chance(0.6);
      if (!plus && b > a) { var x = a; a = b; b = x; }
      if (!plus && a === b) plus = true;
      var n = plus ? a + b : a - b;
      return item({ prompt: fracHtml(a, d) + (plus ? " + " : " − ") + fracHtml(b, d) + " = <b>?</b>", say: a + " over " + d + (plus ? " plus " : " minus ") + b + " over " + d,
        choices: [fracChoice(n, d), fracChoice(n, plus ? d * 2 : d + 1), fracChoice(a + b, plus ? d + d : d), fracChoice(n + 1, d)], hint: "Same bottom number: add or subtract the tops. The bottom stays " + d + "." });
    },
    pair: function (r) { var d = r.pick([4, 5, 6, 8]), a = r.int(1, d - 2), b = r.int(1, d - a - 1); return { a: { text: a + "/" + d + " + " + b + "/" + d, html: fracHtml(a, d) + " + " + fracHtml(b, d), say: a + " over " + d + " plus " + b + " over " + d }, b: fracChoice(a + b, d), key: "f" + (a + b) + "/" + d }; } });
  add("G5", { code: "G5.math.areavol", name: "Area and volume", tier: 2,
    gen: function (r) {
      if (r.chance(0.5)) { var w = r.int(3, 12), h = r.int(2, 9); return item({ prompt: "A room is " + w + " ft by " + h + " ft. What is the <b>area</b> of the floor?", say: "A room is " + w + " feet by " + h + " feet. What is the area of the floor?", visual: A.rect(w, h, "ft"),
        choices: nums(w * h, r, { extra: [2 * (w + h), w + h], lo: 1 }).map(function (x) { return x + " sq ft"; }), hint: "Area = length × width = " + w + " × " + h + "." }); }
      var l = r.int(2, 8), wd = r.int(2, 5), ht = r.int(2, 5), v = l * wd * ht;
      return item({ prompt: "A box is " + l + " in long, " + wd + " in wide and " + ht + " in tall. What is its <b>volume</b>?", say: "A box is " + l + " inches long, " + wd + " inches wide and " + ht + " inches tall. What is its volume?",
        choices: nums(v, r, { extra: [l + wd + ht, l * wd, 2 * (l * wd + wd * ht + l * ht)], lo: 1 }).map(function (x) { return x + " cubic in"; }), hint: "Volume = length × width × height = " + l + " × " + wd + " × " + ht + "." });
    } });
  add("G5", { code: "G5.math.order", name: "Order of operations", tier: 3,
    gen: function (r) {
      var a = r.int(2, 9), b = r.int(2, 6), c = r.int(2, 6), k = r.int(0, 2), s, ans, wrong;
      if (k === 0) { s = a + " + " + b + " × " + c; ans = a + b * c; wrong = (a + b) * c; }
      else if (k === 1) { s = "(" + a + " + " + b + ") × " + c; ans = (a + b) * c; wrong = a + b * c; }
      else { var big = b * c + a; s = big + " − " + a + " × 2"; ans = big - a * 2; wrong = (big - a) * 2; }
      return item({ prompt: s + " = <b>?</b>", say: SWD.sayMath(s), choices: nums(ans, r, { extra: [wrong], lo: 0 }), hint: "Parentheses first, then × and ÷, then + and −." });
    } });
  add("G5", { code: "G5.math.mean", name: "Average (mean)", tier: 3,
    gen: function (r) {
      var n = r.pick([3, 4, 5]), m = r.int(5, 20), list = [], i, s = 0;
      for (i = 0; i < n - 1; i++) { var v = m + r.int(-4, 4); list.push(v); s += v; }
      list.push(m * n - s);
      if (list[n - 1] <= 0) list[n - 1] = m;
      var tot = list.reduce(function (a, b) { return a + b; }, 0);
      m = tot / n;
      if (m !== Math.round(m)) { list[n - 1] += n - tot % n; tot = list.reduce(function (a, b) { return a + b; }, 0); m = tot / n; }
      return item({ prompt: nm(r) + " scored " + list.join(", ") + " points in " + n + " games. What is the <b>mean</b> (average)?", choices: nums(m, r, { extra: [tot, Math.max.apply(null, list)], lo: 0 }),
        hint: "Add them all (" + tot + "), then divide by how many (" + n + ")." });
    } });
  add("G5", { code: "G5.math.elapsed", name: "Elapsed time", tier: 2,
    gen: function (r) {
      var h1 = r.int(7, 11), m1 = r.pick([0, 10, 15, 20, 30, 40, 45]), mins = r.int(5, 28) * 10, end = h1 * 60 + m1 + mins, h2 = Math.floor(end / 60), m2 = end % 60;
      var show = function (h, m) { var hh = h > 12 ? h - 12 : h; return hh + ":" + ("0" + m).slice(-2) + (h >= 12 ? " p.m." : " a.m."); };
      var hrs = Math.floor(mins / 60), rm = mins % 60, dur = function (h, m) { return ((h ? h + " h " : "") + (m ? m + " min" : "")).trim() || "0 min"; };
      return item({ prompt: nm(r) + " started work at <b>" + show(h1, m1) + "</b> and finished at <b>" + show(h2, m2) + "</b>. How long was the shift?",
        choices: [dur(hrs, rm), dur(hrs + 1, rm), dur(hrs, (rm + 30) % 60), dur(hrs ? hrs - 1 : hrs + 2, rm)],
        hint: "Count the hours to the closest time, then count the minutes." });
    } });
  add("G5", { code: "G5.math.rounddec", name: "Round decimals", tier: 2,
    gen: function (r) {
      var x = r.int(101, 999) / 100;
      if (Math.round(x * 100) % 10 === 0) x = dec(x + 0.03);
      var ans = Math.round(x * 10) / 10;
      return item({ prompt: "Round <b>" + decStr(x) + "</b> to the nearest tenth.", say: "Round " + decStr(x) + " to the nearest tenth.", choices: [decStr(ans, 1), decStr(dec(ans + (ans > x ? -0.1 : 0.1), 1), 1), String(Math.round(x)), decStr(x - 0.01)],
        hint: "Look at the hundredths digit. 5 or more rounds up." });
    } });
  add("G5", { code: "G5.math.prime", name: "Prime and composite", tier: 4,
    gen: function (r) { var ps = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37], cs = [4, 6, 8, 9, 10, 12, 14, 15, 16, 18, 21, 22, 25, 27], p = r.pick(ps); return item({ prompt: "Which number is <b>prime</b>?", choices: [String(p)].concat(r.sample(cs, 3).map(String)), hint: "A prime number can only be divided by 1 and itself." }); },
    sort: function (r) { var n = r.int(2, 40), p = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37].indexOf(n) !== -1; return { bins: ["Prime", "Composite"], prompt: "Prime or composite?", item: { text: String(n), big: true }, bin: p ? 0 : 1 }; } });
  add("G5", { code: "G5.math.story", name: "Word problems with money", tier: 4, long: true,
    gen: function (r) {
      var price = r.int(125, 899), n = r.int(2, 5), tot = price * n, paid = Math.ceil(tot / 1000) * 1000 + (tot % 1000 === 0 ? 1000 : 0), k = r.int(0, 1), thing = r.pick(["sandwiches", "notebooks", "bus passes", "phone cases"]);
      if (k === 0) return item({ prompt: nm(r) + " buys " + n + " " + thing + " at " + SWD.dollars(price) + " each. What is the total?", choices: [SWD.dollars(tot)].concat([tot + price, tot - price, price + n].map(SWD.dollars)), hint: n + " × " + SWD.dollars(price) + "." });
      return item({ prompt: "The total is " + SWD.dollars(tot) + ". " + nm(r) + " pays with " + SWD.dollars(paid) + ". How much change?", choices: [SWD.dollars(paid - tot)].concat([paid - tot + 100, paid - tot - 10, tot].map(SWD.dollars)), hint: "Change = money paid − total: " + SWD.dollars(paid) + " − " + SWD.dollars(tot) + "." });
    } });

  /* ════════ GRADE 6 ════════ */
  add("G6", { code: "G6.math.unitrate", name: "Unit rates and unit prices", tier: 1,
    gen: function (r) {
      var k = r.int(0, 1);
      if (k === 0) { var n = r.pick([2, 3, 4, 5, 6, 8, 10, 12]), each = r.int(25, 250), tot = n * each; return item({ prompt: n + " bottles of juice cost " + SWD.dollars(tot) + ". What is the price for <b>one</b> bottle?", choices: [SWD.dollars(each)].concat([each + 25, Math.round(tot / (n + 1)), tot].map(SWD.dollars)), hint: "Divide the total by the number of bottles: " + SWD.dollars(tot) + " ÷ " + n + "." }); }
      var h = r.int(2, 8), mph = r.int(25, 65), d = h * mph;
      return item({ prompt: "A bus goes " + d + " miles in " + h + " hours. How many miles in <b>one</b> hour?", choices: nums(mph, r, { extra: [d - h, mph + 10], lo: 1 }).map(function (x) { return x + " miles"; }), hint: d + " ÷ " + h + "." });
    } });
  add("G6", { code: "G6.math.ratio", name: "Ratios", tier: 1,
    gen: function (r) {
      var a = r.int(2, 9), b = r.int(2, 9);
      while (a === b) b = r.int(2, 9);
      var ta = r.pick(["🍎", "⚽", "🧢"]), tb = r.pick(["🍌", "🏀", "👟"]), names = { "🍎": "apples", "🍌": "bananas", "⚽": "soccer balls", "🏀": "basketballs", "🧢": "caps", "👟": "shoes" };
      if (r.chance(0.5)) return item({ prompt: "What is the ratio of " + names[ta] + " to " + names[tb] + "?", visual: A.objects(ta, a, "small") + A.objects(tb, b, "small"), choices: [a + " : " + b, b + " : " + a, a + " : " + (a + b), (a + b) + " : " + b], hint: "First the " + names[ta] + " (" + a + "), then the " + names[tb] + " (" + b + ")." });
      var k = r.int(2, 5);
      return item({ prompt: "A recipe uses " + a + " cups of rice for " + b + " people. How many cups for " + b * k + " people?", choices: nums(a * k, r, { extra: [a + b * k - b, a * k + 1], lo: 1 }).map(function (x) { return x + " cups"; }), hint: b * k + " people is " + k + " times as many, so use " + k + " × " + a + " cups." });
    } });
  add("G6", { code: "G6.math.percent", name: "Percent of a number", tier: 2,
    gen: function (r) {
      var p = r.pick([10, 20, 25, 50, 75, 5, 15]), n = r.pick([20, 40, 60, 80, 100, 120, 200, 300, 400]), ans = p * n / 100;
      return item({ prompt: "What is <b>" + p + "%</b> of " + n + "?", say: "What is " + p + " percent of " + n + "?", choices: nums(ans, r, { extra: [n - ans, p, n / p > 1 && n % p === 0 ? n / p : ans * 2], lo: 0, int: false }).map(function (x) { return String(x); }),
        hint: p === 10 ? "10% means move the decimal one place left." : p === 50 ? "50% is half." : p === 25 ? "25% is one fourth: divide by 4." : "Find 10% first (" + n / 10 + "), then use it to build " + p + "%." });
    },
    pair: function (r) { var p = r.pick([[50, "1/2"], [25, "1/4"], [10, "1/10"], [75, "3/4"], [20, "1/5"]]); return { a: p[0] + "%", b: p[1], key: "p" + p[0] }; } });
  add("G6", { code: "G6.math.integers", name: "Positive and negative numbers", tier: 2,
    gen: function (r) {
      var k = r.int(0, 2);
      if (k === 0) { var t = r.int(-10, 10), ch = r.int(3, 12), up = r.chance(0.5), ans = up ? t + ch : t - ch; return item({ prompt: "It is " + t + "°F. The temperature goes " + (up ? "up" : "down") + " " + ch + " degrees. What is the temperature now?", visual: A.thermo(t, -20, 30), choices: [ans + "°F", (up ? t - ch : t + ch) + "°F", -ans + "°F", (ans + (up ? 2 : -2)) + "°F"].filter(function (x, i, a) { return a.indexOf(x) === i; }), hint: "On the thermometer, up is warmer and down is colder." }); }
      if (k === 1) { var b = r.int(10, 80), s = r.int(b + 5, b + 60); return item({ prompt: nm(r) + " has $" + b + " in the bank and spends $" + s + ". What is the balance?", choices: ["-$" + (s - b), "$" + (s - b), "-$" + (s + b), "$" + (b + s)], hint: "Spending more than you have makes the balance negative: " + b + " − " + s + " = " + (b - s) + "." }); }
      var a = r.int(-15, 15), c = r.int(-15, 15);
      while (a === c) c = r.int(-15, 15);
      return item({ prompt: "Which number is <b>greater</b>?", choices: [String(Math.max(a, c)), String(Math.min(a, c))], visual: A.numberLine(-10, 10, null, false, 2), hint: "On a number line, numbers to the right are greater. -2 is greater than -8." });
    },
    sort: function (r) { var n = r.int(-12, 12); if (n === 0) n = 3; return { bins: ["Negative", "Positive"], prompt: "Negative or positive?", item: { text: String(n), big: true }, bin: n < 0 ? 0 : 1 }; } });
  add("G6", { code: "G6.math.equations", name: "One-step equations", tier: 3,
    gen: function (r) {
      var x = r.int(2, 15), k = r.int(0, 3), a = r.int(2, 12), s, ans = x, hint;
      if (k === 0) { s = "x + " + a + " = " + (x + a); hint = "Subtract " + a + " from both sides."; }
      else if (k === 1) { s = "x − " + a + " = " + (x - a); hint = "Add " + a + " to both sides."; }
      else if (k === 2) { s = a + "x = " + a * x; hint = "Divide both sides by " + a + "."; }
      else { s = "x ÷ " + a + " = " + x; ans = x * a; hint = "Multiply both sides by " + a + "."; }
      return item({ prompt: s, say: SWD.sayMath(s).replace(/x/g, "x"), choices: nums(ans, r, { extra: k === 3 ? [x] : [x + a, Math.abs(x - a) || x + 2], lo: -20 }).map(function (v) { return "x = " + v; }), hint: hint });
    } });
  add("G6", { code: "G6.math.expressions", name: "Evaluate expressions", tier: 3,
    gen: function (r) {
      var x = r.int(2, 9), a = r.int(2, 6), b = r.int(1, 9), k = r.int(0, 1), s = k ? a + "x + " + b : a + "(x + " + b + ")", ans = k ? a * x + b : a * (x + b);
      return item({ prompt: "If x = " + x + ", what is <b>" + s + "</b>?", say: "If x equals " + x + ", what is " + s.replace(/(\d)x/, "$1 times x") + "?", choices: nums(ans, r, { extra: [k ? a * (x + b) : a * x + b, a + x + b], lo: 0 }),
        hint: "Put " + x + " in place of x, then follow the order of operations." });
    } });
  add("G6", { code: "G6.math.stats", name: "Mean, median and range", tier: 4,
    gen: function (r) {
      var list = [], i, n = r.pick([5, 7]);
      for (i = 0; i < n; i++) list.push(r.int(2, 30));
      var sorted = list.slice().sort(function (a, b) { return a - b; }), k = r.int(0, 1);
      if (k === 0) { var med = sorted[(n - 1) / 2]; return item({ prompt: "Hours worked: " + list.join(", ") + ". What is the <b>median</b>?", choices: nums(med, r, { extra: [list[(n - 1) / 2], sorted[0], sorted[n - 1]], lo: 0 }), hint: "Put the numbers in order. The median is the one in the middle: " + sorted.join(", ") + "." }); }
      var range = sorted[n - 1] - sorted[0];
      return item({ prompt: "Hours worked: " + list.join(", ") + ". What is the <b>range</b>?", choices: nums(range, r, { extra: [sorted[n - 1], sorted[0] + sorted[n - 1]], lo: 0 }), hint: "Range = biggest − smallest = " + sorted[n - 1] + " − " + sorted[0] + "." });
    } });
  add("G6", { code: "G6.math.area", name: "Area of triangles and shapes", tier: 4,
    gen: function (r) {
      var b = r.int(2, 12) * 2, h = r.int(2, 10), tri = r.chance(0.6), ans = tri ? b * h / 2 : b * h;
      return item({ prompt: "A " + (tri ? "triangle" : "parallelogram") + " has a base of " + b + " cm and a height of " + h + " cm. What is its area?", choices: nums(ans, r, { extra: [tri ? b * h : b * h / 2, b + h], lo: 1 }).map(function (x) { return x + " sq cm"; }),
        hint: tri ? "Triangle: base × height ÷ 2." : "Parallelogram: base × height." });
    } });
  add("G6", { code: "G6.math.discount", name: "Discounts and tax", tier: 5, long: true,
    gen: function (r) {
      var price = r.pick([20, 30, 40, 50, 60, 80, 100]), p = r.pick([10, 20, 25, 50]), off = price * p / 100;
      return item({ prompt: "Shoes cost $" + price + ". They are <b>" + p + "% off</b>. What is the sale price?", choices: ["$" + (price - off), "$" + off, "$" + (price + off), "$" + (price - p > 0 ? price - p : price - off + 5)].filter(function (x, i, a) { return a.indexOf(x) === i; }),
        hint: p + "% of $" + price + " is $" + off + ". Subtract it from $" + price + "." });
    } });
})();
