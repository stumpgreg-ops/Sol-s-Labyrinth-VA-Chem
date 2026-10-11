/* Sol's Labyrinth · SWD: Path 2 life skills, grade 2 to grade 6. Functional math and reading for everyday life:
   money and shopping, time and calendars, schedules, measuring and cooking, signs and safety, labels, pay, budgets.
   The math level follows the grade (grade 2: count coins and bills to $5; grade 6: sales tax, discounts and budgets).
   Market Day (js/swd/swd-modes.js) also uses SWD.marketTask(band) below for paying and making change. */
(function () {
  "use strict";
  var SWD = window.SWD, A = SWD.art, item = SWD.item, money = SWD.money, D = SWD.dollars;
  function add(band, def) { return SWD.skill(band, "life", def); }
  function nm(r) { return r.pick(["Ana", "Ben", "Carlos", "Dee", "Eli", "Fatima", "Gus", "Hana", "Jada", "Kim", "Leo", "Maya", "Omar", "Rosa", "Sam", "Zoe"]); }
  function nums(ans, r, opts) { return [String(ans)].concat(SWD.near(ans, r, opts).map(String)); }
  function dollarChoices(ans, r, extra) { return [D(ans)].concat(SWD.near(ans, r, { extra: extra || [], step: 5, lo: 0 }).map(D)); }
  var DAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  var MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  var GOODS = [["🥛", "milk"], ["🍞", "bread"], ["🥚", "eggs"], ["🧃", "juice"], ["🍌", "bananas"], ["🧻", "paper towels"], ["🧼", "soap"], ["🥫", "soup"], ["🧀", "cheese"], ["🍕", "frozen pizza"], ["🧴", "shampoo"], ["🪥", "toothbrush"], ["🧦", "socks"], ["🔋", "batteries"], ["🍫", "chocolate bar"]];

  /* ── Market Day tasks (one per band) ──
     kind "pay":   give exactly the price, from the wallet's coins and bills
     kind "next":  next-dollar: give only one-dollar bills, one more than the dollars in the price
     kind "change": the customer pays more; give back the change */
  SWD.marketTask = function (band, level, r) {
    var t = SWD.tierOf(level), g = r.pick(GOODS), price, kind, wallet;
    if (band === "P1") {
      if (t <= 1) { kind = "pay"; price = r.int(2, 9); wallet = [1]; }
      else if (t === 2) { kind = "pay"; price = r.int(11, 39); wallet = [10, 1]; }
      else if (t === 3) { kind = "pay"; price = r.int(2, 9) * 100; wallet = [100, 500]; }
      else if (t === 4) { kind = "next"; price = r.int(1, 6) * 100 + r.int(1, 99); wallet = [100]; }
      else { kind = "pay"; price = r.int(2, 18) * 5; wallet = [25, 10, 5, 1]; }
    } else if (band === "G2") {
      if (t <= 2) { kind = "pay"; price = r.int(15, 99); wallet = [25, 10, 5, 1]; }
      else if (t <= 4) { kind = "pay"; price = r.int(1, 4) * 100 + r.int(0, 19) * 5; wallet = [100, 25, 10, 5, 1]; }
      else { kind = "next"; price = r.int(2, 9) * 100 + r.int(1, 99); wallet = [100]; }
    } else if (band === "G3") {
      if (t <= 2) { kind = "next"; price = r.int(3, 19) * 100 + r.int(1, 99); wallet = [100, 500, 1000]; }
      else if (t <= 4) { kind = "pay"; price = r.int(1, 9) * 100 + r.int(0, 99); wallet = [500, 100, 25, 10, 5, 1]; }
      else { kind = "change"; price = r.int(1, 4) * 100 + r.int(1, 19) * 5; wallet = [100, 25, 10, 5]; }
    } else {
      if (t <= 2) { kind = "pay"; price = r.int(5, 39) * 100 + r.int(0, 99); wallet = [2000, 1000, 500, 100, 25, 10, 5, 1]; }
      else { kind = "change"; price = r.int(2, 18) * 100 + r.int(0, 99); wallet = [1000, 500, 100, 25, 10, 5, 1]; }
    }
    var paid = 0;
    if (kind === "change") {
      paid = price < 500 ? 500 : price < 1000 ? 1000 : 2000;
      if (band === "G3") paid = 500;
    }
    return { kind: kind, price: price, paid: paid, goal: kind === "change" ? paid - price : kind === "next" ? Math.ceil(price / 100) * 100 + (price % 100 === 0 ? 100 : 0) : price,
      wallet: wallet, emoji: g[0], name: g[1] };
  };

  /* ════════ GRADE 2 ════════ */
  add("G2", { code: "G2.life.coins", name: "Count coins", tier: 1,
    gen: function (r) {
      var l = [], q = r.int(0, 3), d = r.int(1, 4), n = r.int(0, 2), p = r.int(0, 4), i;
      for (i = 0; i < q; i++) l.push(25); for (i = 0; i < d; i++) l.push(10); for (i = 0; i < n; i++) l.push(5); for (i = 0; i < p; i++) l.push(1);
      var tot = q * 25 + d * 10 + n * 5 + p;
      return item({ prompt: "How much money is in the hand?", visual: A.money(l), choices: [money(tot)].concat(SWD.near(tot, r, { extra: [tot + 5, tot - 1, l.length], lo: 1 }).map(function (x) { return money(x); })),
        hint: "Count the biggest coins first, then count on." });
    },
    pair: function (r) { var v = r.pick([1, 5, 10, 25]); return { a: { text: "", html: A.coin(v, 1.3), say: A.coinName(v) }, b: v + "¢", key: "c" + v }; } });
  add("G2", { code: "G2.life.bills", name: "Count bills and coins to $5", tier: 2,
    gen: function (r) {
      var b = r.int(1, 4), q = r.int(0, 3), l = [], i;
      for (i = 0; i < b; i++) l.push(100); for (i = 0; i < q; i++) l.push(25);
      var tot = b * 100 + q * 25;
      return item({ prompt: "How much money?", visual: A.money(l, 0.9), choices: [D(tot)].concat([tot + 25, tot - 25, tot + 100].filter(function (x) { return x > 0; }).map(D)), hint: "Count the dollars first. Then count the quarters: 25, 50, 75." });
    } });
  add("G2", { code: "G2.life.time", name: "Read a clock", tier: 1,
    gen: function (r) {
      var h = r.int(1, 12), m = r.pick([0, 15, 30, 45, 5, 10, 20, 50]), s = h + ":" + ("0" + m).slice(-2);
      return item({ prompt: "What time does the clock show?", visual: A.clock(h, m, 160), choices: [s, (h % 12 + 1) + ":" + ("0" + m).slice(-2), h + ":" + ("0" + ((m + 15) % 60)).slice(-2), ((h + 5) % 12 + 1) + ":" + ("0" + m).slice(-2)], hint: "Short hand = hour. Long hand: count by 5s." });
    },
    pair: function (r) { var h = r.int(1, 12), m = r.pick([0, 15, 30, 45]); return { a: { text: "", html: A.clock(h, m, 110), say: "a clock" }, b: { text: h + ":" + ("0" + m).slice(-2), say: h + " " + (m ? m : "o'clock") }, key: h + "_" + m }; } });
  add("G2", { code: "G2.life.calendar", name: "Read a calendar", tier: 2,
    gen: function (r) {
      var start = r.int(0, 6), days = r.pick([30, 31]), mon = r.pick(MONTHS), dd = r.int(3, 27), ev = r.pick(["Dentist", "Game", "Payday", "Party", "Trip"]), marks = {};
      marks[dd] = ev;
      var dow = DAYS[(start + dd - 1) % 7], k = r.int(0, 2);
      var cal = A.calendar(mon, start, days, marks);
      if (k === 0) return item({ prompt: "What day of the week is the " + ev + "?", visual: cal, choices: [dow].concat(SWD.others(dow, DAYS, r, 3)), hint: "Find " + dd + ", then look up to the top of that column.", wide: true });
      if (k === 1) return item({ prompt: "What is the date of the " + ev + "?", visual: cal, choices: [mon + " " + dd].concat([dd + 1, dd - 1, dd + 7].map(function (x) { return mon + " " + x; })), hint: "Find the box with " + ev + " in it.", wide: true });
      var nx = MONTHS[(MONTHS.indexOf(mon) + 1) % 12];
      return item({ prompt: "What month comes after " + mon + "?", choices: [nx].concat(SWD.others(nx, MONTHS.filter(function (m) { return m !== mon; }), r, 3)), hint: "Say the months in order: January, February, March …" });
    },
    sort: function (r) { var m = r.int(0, 11); return { bins: ["Winter (Dec–Feb)", "Spring (Mar–May)", "Summer (Jun–Aug)", "Fall (Sep–Nov)"], prompt: "Which season is the month in?", item: { text: MONTHS[m] }, bin: [0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 0][m] }; } });
  var SIGNS2 = [["stop", "Stop completely"], ["yield", "Slow down and let others go first"], ["donotenter", "Do not go in this way"], ["oneway", "Traffic goes only one way"], ["railroad", "Train tracks ahead"], ["walk", "Walk across now"], ["dontwalk", "Do not start to cross"],
    ["poison", "Poison: do not eat or drink"], ["danger", "Danger: keep out"], ["wetfloor", "Wet floor: walk carefully"], ["fire", "Fire extinguisher"], ["exit", "The way out"], ["busstop", "The bus stops here"], ["help", "Information desk"]];
  add("G2", { code: "G2.life.signs", name: "Community and safety signs", tier: 1,
    gen: function (r) { var s = r.pick(SIGNS2); return item({ prompt: "What does this sign mean?", visual: A.sign(s[0]), choices: [s[1]].concat(SWD.others(s[1], SIGNS2.map(function (x) { return x[1]; }), r, 3)), hint: "Read the sign's words and look at its shape and color." }); },
    pair: function (r) { var s = r.pick(SIGNS2); return { a: { text: "", html: A.sign(s[0]), say: "a sign" }, b: s[1], key: s[0] }; } });
  var FOOD = [["🍎", "apple", 0], ["🥦", "broccoli", 0], ["🥛", "milk", 0], ["🍗", "baked chicken", 0], ["🥕", "carrots", 0], ["🍌", "banana", 0], ["💧", "water", 0], ["🥚", "eggs", 0],
    ["🍬", "candy", 1], ["🍩", "donut", 1], ["🍟", "fries", 1], ["🥤", "soda", 1], ["🍰", "cake", 1], ["🍫", "chocolate", 1], ["🍪", "cookies", 1]];
  add("G2", { code: "G2.life.food", name: "Every day or sometimes food?", tier: 2,
    sort: function (r) { var f = r.pick(FOOD); return { bins: ["Every-day food", "Sometimes food"], prompt: "Is it a healthy every-day food or a sometimes treat?", item: { text: f[1], html: A.pic(f[0], ""), say: f[1] }, bin: f[2] }; } });
  add("G2", { code: "G2.life.safety", name: "Safety", tier: 1,
    gen: function (r) {
      var q = r.pick([["What number do you call for a fire or a bad accident?", ["911", "411", "311", "123"], "911 is for emergencies."],
        ["A pot on the stove catches fire. What should you do first?", ["Get out and call 911", "Pour water on it", "Pick up the pot", "Ignore it"], "Never pour water on a grease fire. Get out and call 911."],
        ["Which is safe to share with a stranger online?", ["your favorite sport", "your home address", "your password", "your school's name and your schedule"], "Never share where you live, your passwords or your schedule."],
        ["Before you cross the street, you should …", ["look left, right and left again", "run fast", "look at your phone", "close your eyes"], "Stop, look both ways, then cross."],
        ["The smoke alarm beeps every minute. What does it usually mean?", ["The battery is low.", "There is a fire.", "Someone is at the door.", "It is time to eat."], "A chirp every minute means change the battery."]]);
      return item({ prompt: q[0], choices: q[1], hint: q[2] });
    } });
  add("G2", { code: "G2.life.routine", name: "Daily routine in order", tier: 3,
    gen: function (r) {
      var seqs = [["Wake up", "Brush teeth", "Eat breakfast", "Catch the bus"], ["Get the bread", "Add peanut butter", "Close the sandwich", "Eat it"], ["Fill the washer", "Add soap", "Start the washer", "Dry the clothes"], ["Wash hands", "Cook dinner", "Eat dinner", "Wash the dishes"]];
      var s = r.pick(seqs), i = r.int(1, s.length - 1);
      return item({ prompt: "What comes right after <b>" + s[i - 1] + "</b>?", say: "What comes right after " + s[i - 1] + "?", choices: [s[i]].concat(s.filter(function (_, j) { return j !== i && j !== i - 1; })), hint: "Think about doing these steps in real life, in order." });
    } });

  /* ════════ GRADE 3 ════════ */
  add("G3", { code: "G3.life.change", name: "Making change", tier: 3,
    gen: function (r) {
      var price = r.int(1, 19) * 5 + r.pick([0, 100, 200, 300]), paid = price < 100 ? 100 : 500, ch = paid - price, g = r.pick(GOODS);
      return item({ prompt: "A " + g[1] + " costs <b>" + D(price) + "</b>. You pay with " + D(paid) + ". How much change do you get?", visual: A.tag(g[0], g[1], price),
        choices: [D(ch)].concat([ch + 10, ch - 5, price].filter(function (x) { return x > 0 && x !== ch; }).map(D)), hint: "Count up from " + D(price) + " to " + D(paid) + "." });
    } });
  add("G3", { code: "G3.life.nextdollar", name: "Next-dollar way to $20", tier: 1,
    gen: function (r) {
      var d = r.int(2, 18), c = r.int(1, 99), price = d * 100 + c, g = r.pick(GOODS);
      return item({ prompt: "It costs <b>" + D(price) + "</b>. Using the next-dollar way, how much do you hand the cashier?", visual: A.tag(g[0], g[1], price),
        choices: ["$" + (d + 1) + ".00", "$" + d + ".00", "$" + (d + 2) + ".00", "$" + (d + 10) + ".00"], hint: "Look at the dollars ($" + d + ") and give one more dollar: $" + (d + 1) + "." });
    },
    pair: function (r) { var d = r.int(1, 15), c = r.int(1, 99); return { a: { text: D(d * 100 + c), say: SWD.sayMoney(d * 100 + c) }, b: { text: "give $" + (d + 1), say: "give " + (d + 1) + " dollars" }, key: "nd" + d }; } });
  add("G3", { code: "G3.life.schedule", name: "Read a schedule", tier: 2,
    gen: function (r) {
      var start = r.int(6, 9), gap = r.pick([20, 30]), rows = [], i;
      for (i = 0; i < 5; i++) { var m = start * 60 + i * gap; rows.push(["Route 7", Math.floor(m / 60) + ":" + ("0" + m % 60).slice(-2) + " a.m."]); }
      var target = r.int(1, 3), tm = start * 60 + target * gap - r.int(1, gap - 5), tmS = Math.floor(tm / 60) + ":" + ("0" + tm % 60).slice(-2);
      return item({ prompt: "You get to the bus stop at <b>" + tmS + " a.m.</b> What time is the next bus?", visual: A.table(["Bus", "Leaves"], rows, "Bus schedule"), choices: [rows[target][1]].concat(rows.filter(function (_, j) { return j !== target; }).slice(0, 3).map(function (x) { return x[1]; })),
        hint: "Find the first time on the schedule that is after " + tmS + "." });
    } });
  add("G3", { code: "G3.life.measure", name: "Measuring cups and spoons", tier: 2,
    gen: function (r) {
      var q = r.pick([["A recipe needs 1 cup of milk. You only have a ½ cup measure. How many times do you fill it?", ["2", "1", "3", "4"], "½ + ½ = 1 whole cup."],
        ["Which is bigger?", ["1 cup", "1 tablespoon", "1 teaspoon"], "A cup holds much more than a spoon."],
        ["A recipe needs 2 cups of flour for 1 batch. How much for 2 batches?", ["4 cups", "2 cups", "3 cups", "6 cups"], "Double it: 2 + 2."],
        ["Which tool measures 3 cups of water best?", ["a measuring cup", "a teaspoon", "a ruler", "a scale for people"], "Measuring cups measure liquids and dry food."],
        ["The recipe says bake at 350°. What does 350° tell you?", ["how hot the oven is", "how long to bake", "how much to make", "how many people"], "Degrees measure temperature."],
        ["The recipe says ¼ cup of sugar. Which is it?", ["one fourth of a cup", "four cups", "a cup and a fourth", "one cup"], "¼ means one of four equal parts."]]);
      return item({ prompt: q[0], choices: q[1], hint: q[2] });
    } });
  add("G3", { code: "G3.life.thermo", name: "Read a thermometer", tier: 3,
    gen: function (r) {
      var t = r.int(1, 9) * 10, wear = t >= 80 ? "shorts and a T-shirt" : t >= 60 ? "a light jacket" : t >= 40 ? "a warm coat" : "a heavy coat, hat and gloves";
      if (r.chance(0.5)) return item({ prompt: "What temperature does the thermometer show?", visual: A.thermo(t, 0, 100), choices: [t + "°F", (t + 10) + "°F", (t - 10) + "°F", (100 - t === t ? t + 20 : 100 - t) + "°F"], hint: "Read the number where the red line stops." });
      return item({ prompt: "It is <b>" + t + "°F</b> outside. What should you wear?", say: "It is " + t + " degrees outside. What should you wear?", visual: A.thermo(t, 0, 100), choices: [wear].concat(SWD.others(wear, ["shorts and a T-shirt", "a light jacket", "a warm coat", "a heavy coat, hat and gloves"], r, 3)),
        hint: "80 and up is hot, 60s and 70s are mild, 40s and 50s are cool, under 40 is cold." });
    } });
  add("G3", { code: "G3.life.phone", name: "Phones and messages", tier: 4,
    gen: function (r) {
      var q = r.pick([["You call a store and nobody answers. What do you say on voicemail?", ["Your name, why you called, and your number", "Nothing, just hang up", "Only your name", "A song"], "Say who you are, why you called and how to call you back."],
        ["You get a text from an unknown number: \"You won $1,000! Send your bank PIN.\" What do you do?", ["Delete it and do not reply", "Send your PIN", "Call your friends", "Reply with your address"], "Real prizes never ask for your PIN. It is a scam."],
        ["Your phone battery is at 5%. What should you do?", ["Charge it", "Turn up the brightness", "Download a game", "Nothing"], "Low battery means plug it in soon."],
        ["Which phone number is written the right way?", ["555-0142", "5-5-5-0-1-4-2-0-0", "555 01", "0142"], "A local phone number has 7 digits: 3, a dash, then 4."]]);
      return item({ prompt: q[0], choices: q[1], hint: q[2] });
    } });
  add("G3", { code: "G3.life.needs", name: "Needs and wants", tier: 1,
    sort: function (r) { var n = r.pick([["🍞", "food", 0], ["🏠", "a place to live", 0], ["🧥", "a winter coat", 0], ["💊", "medicine", 0], ["💧", "water", 0], ["🎮", "a new video game", 1], ["🍦", "ice cream", 1], ["👟", "a third pair of sneakers", 1], ["🎧", "fancy headphones", 1], ["💍", "a ring", 1]]);
      return { bins: ["Need", "Want"], prompt: "Is it a need or a want?", item: { text: n[1], html: A.pic(n[0], ""), say: n[1] }, bin: n[2], hint: "A need keeps you safe and healthy. A want is nice to have." }; } });

  /* ════════ GRADE 4 ════════ */
  add("G4", { code: "G4.life.bestbuy", name: "Which is the better buy?", tier: 2,
    gen: function (r) {
      var g = r.pick(GOODS), a = r.int(2, 6), pa = r.int(3, 9) * 25, b = a * 2, pb = pa * 2 + r.pick([-50, -25, 25, 50]), unitA = pa / a, unitB = pb / b, betterA = unitA < unitB;
      if (unitA === unitB) pb += 25;
      unitB = pb / b; betterA = unitA < unitB;
      return item({ prompt: "Which is the better buy?", visual: A.tag(g[0], g[1] + ", pack of " + a, pa) + A.tag(g[0], g[1] + ", pack of " + b, pb),
        choices: betterA ? [a + " for " + D(pa), b + " for " + D(pb)] : [b + " for " + D(pb), a + " for " + D(pa)], hint: "Find the price for one: " + D(pa) + " ÷ " + a + " and " + D(pb) + " ÷ " + b + ". The lower price for one is the better buy." });
    } });
  add("G4", { code: "G4.life.total", name: "Add up the total", tier: 1,
    gen: function (r) {
      var items = r.sample(GOODS, r.int(2, 3)).map(function (g) { return [g, r.int(1, 9) * 100 + r.pick([0, 25, 49, 50, 75, 99])]; }), tot = items.reduce(function (s, x) { return s + x[1]; }, 0);
      return item({ prompt: "You buy these. What is the total?", visual: items.map(function (x) { return A.tag(x[0][0], x[0][1], x[1]); }).join(""), choices: [D(tot)].concat([tot + 100, tot - 1, tot + 10].map(D)), hint: "Add the dollars, then add the cents." });
    },
    pair: function (r) { var a = r.int(1, 9) * 100 + r.pick([0, 25, 50, 75]), b = r.int(1, 5) * 100 + r.pick([0, 25, 50]); return { a: D(a) + " + " + D(b), b: D(a + b), key: "t" + (a + b) }; } });
  add("G4", { code: "G4.life.afford", name: "Can I afford it?", tier: 2,
    gen: function (r) {
      var have = r.int(8, 25) * 100, items = r.sample(GOODS, 3).map(function (g) { return [g, r.int(1, 9) * 100 + r.pick([0, 50, 99])]; }), tot = items.reduce(function (s, x) { return s + x[1]; }, 0);
      return item({ prompt: "You have <b>" + D(have) + "</b>. Can you buy all three?", visual: items.map(function (x) { return A.tag(x[0][0], x[0][1], x[1]); }).join(""), choices: tot <= have ? ["Yes, the total is " + D(tot), "No, I need more money"] : ["No, the total is " + D(tot), "Yes, I have enough"],
        hint: "Add the three prices and compare the total to " + D(have) + "." });
    } });
  add("G4", { code: "G4.life.label", name: "Read a food label", tier: 3,
    gen: function (r) {
      var cal = r.int(8, 30) * 10, serv = r.int(2, 6), sug = r.int(1, 20), k = r.int(0, 2);
      var lab = A.table(null, [["Servings per container", String(serv)], ["Serving size", "1 cup"], ["Calories", String(cal)], ["Sugar", sug + " g"], ["Sodium", r.int(50, 600) + " mg"]], "Nutrition Facts", "label");
      if (k === 0) return item({ prompt: "How many calories are in one serving?", visual: lab, choices: nums(cal, r, { step: 10, extra: [cal * serv] }), hint: "Find Calories on the label." });
      if (k === 1) return item({ prompt: "You eat the <b>whole container</b>. How many calories is that?", visual: lab, choices: nums(cal * serv, r, { step: 10, extra: [cal, cal + serv] }), hint: "Calories × servings = " + cal + " × " + serv + "." });
      return item({ prompt: "How many servings are in the container?", visual: lab, choices: nums(serv, r, { lo: 1 }), hint: "Find Servings per container." });
    } });
  add("G4", { code: "G4.life.pay", name: "Hours and pay", tier: 3,
    gen: function (r) {
      var rate = r.int(10, 16), h = r.int(4, 20);
      return item({ prompt: nm(r) + " earns <b>$" + rate + " an hour</b> and works <b>" + h + " hours</b>. How much does " + "that pay?", choices: ["$" + rate * h, "$" + (rate + h), "$" + rate * (h - 1), "$" + (rate * h + 10)], hint: "Pay = hours × rate = " + h + " × $" + rate + "." });
    },
    pair: function (r) { var rate = r.int(10, 15), h = r.pick([2, 4, 5, 8, 10]); return { a: { text: h + " hours at $" + rate, say: h + " hours at " + rate + " dollars an hour" }, b: "$" + rate * h, key: "p" + rate * h }; } });
  add("G4", { code: "G4.life.appointments", name: "Appointments and calendars", tier: 4,
    gen: function (r) {
      var start = r.int(0, 6), days = 30, mon = r.pick(MONTHS), d1 = r.int(2, 12), gap = r.pick([7, 14, 3, 5]), marks = {};
      marks[d1] = "Doctor";
      return item({ prompt: "Your doctor visit is on " + mon + " " + d1 + ". The next visit is <b>" + (gap === 7 ? "one week" : gap === 14 ? "two weeks" : gap + " days") + "</b> later. What is the date?", visual: A.calendar(mon, start, days, marks), wide: true,
        choices: [mon + " " + (d1 + gap)].concat([d1 + gap + 1, d1 + gap - 1, d1 + gap + 7].map(function (x) { return mon + " " + x; })), hint: gap % 7 === 0 ? "One week later is the same day, one row down." : "Count " + gap + " days forward." });
    } });
  add("G4", { code: "G4.life.bus", name: "Bus schedules", tier: 2,
    gen: function (r) {
      var stops = ["Main St", "Library", "Mall", "Hospital", "Park Ave"], base = r.int(7, 9) * 60, rows = [], buses = 3, i, j, gaps = [0, 6, 14, 21, 30];
      for (i = 0; i < stops.length; i++) { var row = [stops[i]]; for (j = 0; j < buses; j++) { var m = base + j * 30 + gaps[i]; row.push(Math.floor(m / 60) + ":" + ("0" + m % 60).slice(-2)); } rows.push(row); }
      var bus = r.int(0, 2), from = r.int(0, 2), to = r.int(from + 1, 4), mins = gaps[to] - gaps[from];
      if (r.chance(0.5)) return item({ prompt: "Bus " + (bus + 1) + " leaves " + stops[from] + " at " + rows[from][bus + 1] + ". When does it get to " + stops[to] + "?", visual: A.table(["Stop", "Bus 1", "Bus 2", "Bus 3"], rows, "Route 12"), wide: true,
        choices: [rows[to][bus + 1]].concat([rows[to][(bus + 1) % 3 + 1], rows[from][bus + 1], rows[(to + 1) % 5 === from ? (to + 2) % 5 : (to + 1) % 5][bus + 1]]), hint: "Stay in the Bus " + (bus + 1) + " column and go down to " + stops[to] + "." });
      return item({ prompt: "How many minutes is the ride from " + stops[from] + " to " + stops[to] + "?", visual: A.table(["Stop", "Bus 1", "Bus 2", "Bus 3"], rows, "Route 12"), wide: true, choices: nums(mins, r, { lo: 1, extra: [30, gaps[to]] }).map(function (x) { return x + " minutes"; }),
        hint: "Subtract the two times in one column." });
    } });

  var AISLES = [["🍎", "apples", 0], ["🥬", "lettuce", 0], ["🥕", "carrots", 0], ["🍌", "bananas", 0], ["🥛", "milk", 1], ["🧀", "cheese", 1], ["🥚", "eggs", 1], ["🧈", "butter", 1],
    ["🍦", "ice cream", 2], ["🍕", "frozen pizza", 2], ["🧊", "bag of ice", 2], ["🥟", "frozen dumplings", 2]];
  add("G4", { code: "G4.life.aisles", name: "Grocery store sections", tier: 1,
    sort: function (r) { var a = r.pick(AISLES); return { bins: ["Produce", "Dairy", "Frozen"], prompt: "Which section of the store?", item: { text: a[1], html: A.pic(a[0], ""), say: a[1] }, bin: a[2], hint: "Produce = fruits and vegetables. Dairy = milk foods. Frozen = kept in the freezer." }; } });

  /* ════════ GRADE 5 ════════ */
  add("G5", { code: "G5.life.paystub", name: "Pay stubs", tier: 1,
    gen: function (r) {
      var rate = r.int(11, 18), h = r.int(15, 35), gross = rate * h * 100, tax = Math.round(gross * r.pick([0.08, 0.1, 0.12]) / 100) * 100 / 1, net = gross - tax, k = r.int(0, 2);
      var stub = A.table(null, [["Hours worked", String(h)], ["Pay rate", "$" + rate + ".00 / hour"], ["Gross pay", D(gross)], ["Taxes", "−" + D(tax)], ["Net pay (take home)", D(net)]], "Pay stub", "label");
      if (k === 0) return item({ prompt: "How much money does the worker take home?", visual: stub, choices: [D(net), D(gross), D(tax), D(net + tax * 2)], hint: "Take-home pay is the net pay." });
      if (k === 1) return item({ prompt: "How much was taken out for taxes?", visual: stub, choices: [D(tax), D(net), D(gross), D(tax * 2)], hint: "Find Taxes on the stub." });
      return item({ prompt: "What is the gross pay? (hours × rate)", visual: stub, choices: [D(gross), D(net), D(gross + rate * 100), "$" + (rate + h)], hint: h + " × $" + rate + "." });
    },
    pair: function (r) { var rate = r.int(11, 18), h = r.pick([10, 20, 30, 40]); return { a: { text: h + " h × $" + rate, say: h + " hours times " + rate + " dollars" }, b: "$" + rate * h, key: "g" + rate * h }; } });
  add("G5", { code: "G5.life.unitprice", name: "Unit prices", tier: 2,
    gen: function (r) {
      var oz = r.pick([8, 10, 12, 16, 20]), per = r.int(10, 40), price = oz * per;
      return item({ prompt: "A " + oz + "-ounce box of cereal costs " + D(price) + ". What is the price per ounce?", choices: [per + "¢"].concat(SWD.near(per, r, { lo: 1, extra: [per * 2] }).map(function (x) { return x + "¢"; })), hint: D(price) + " ÷ " + oz + " = " + per + "¢ per ounce." });
    },
    pair: function (r) { var oz = r.pick([2, 4, 5, 10]), per = r.int(10, 40); return { a: oz + " oz for " + D(oz * per), b: per + "¢ per oz", key: "u" + per }; } });
  add("G5", { code: "G5.life.receipt", name: "Read a receipt", tier: 1,
    gen: function (r) {
      var items = r.sample(GOODS, 4).map(function (g) { return [g[1], r.int(1, 8) * 100 + r.pick([19, 29, 49, 79, 99])]; }), sub = items.reduce(function (s, x) { return s + x[1]; }, 0), tax = Math.round(sub * 0.05), tot = sub + tax;
      var rec = A.table(null, items.map(function (x) { return [x[0], D(x[1])]; }).concat([["Subtotal", D(sub)], ["Tax", D(tax)], ["TOTAL", D(tot)]]), "Receipt", "label");
      var k = r.int(0, 2), most = items.reduce(function (a, b) { return b[1] > a[1] ? b : a; });
      if (k === 0) return item({ prompt: "What was the total?", visual: rec, choices: [D(tot), D(sub), D(tax), D(tot + 100)], hint: "Find TOTAL at the bottom." });
      if (k === 1) return item({ prompt: "Which item cost the most?", visual: rec, choices: [most[0]].concat(items.filter(function (x) { return x !== most; }).map(function (x) { return x[0]; })), hint: "Compare the prices." });
      return item({ prompt: "How much was the tax?", visual: rec, choices: [D(tax), D(sub), D(tot), D(tax * 10)], hint: "Find Tax on the receipt." });
    } });
  add("G5", { code: "G5.life.bank", name: "Bank balance", tier: 3,
    gen: function (r) {
      var start = r.int(50, 300) * 100, dep = r.int(20, 150) * 100, spend = r.int(10, 90) * 100 + r.pick([0, 50, 99]), end = start + dep - spend;
      return item({ prompt: "Your balance is " + D(start) + ". You deposit your paycheck of " + D(dep) + " and buy groceries for " + D(spend) + ". What is your new balance?", choices: [D(end), D(start + dep), D(start - spend), D(start + dep + spend)],
        hint: "Deposit = add. Spend = subtract. " + D(start) + " + " + D(dep) + " − " + D(spend) + "." });
    } });
  var MONEYIO = [["paycheck", 0], ["birthday gift money", 0], ["refund for a return", 0], ["money from selling a bike", 0], ["rent", 1], ["groceries", 1], ["cash from the ATM", 1], ["phone bill", 1], ["bus pass", 1]];
  add("G5", { code: "G5.life.inout", name: "Deposits and withdrawals", tier: 1,
    sort: function (r) { var m = r.pick(MONEYIO); return { bins: ["Deposit (money in)", "Withdrawal (money out)"], prompt: "Does money go into the account or come out?", item: { text: m[0] }, bin: m[1], hint: "A deposit adds money to your account. A withdrawal or a payment takes money out." }; } });
  add("G5", { code: "G5.life.timecard", name: "Time cards", tier: 2,
    gen: function (r) {
      var rows = [], tot = 0, i, d = ["Mon", "Tue", "Wed", "Thu"];
      for (i = 0; i < 4; i++) { var s = r.int(8, 11), h = r.int(3, 6); tot += h; rows.push([d[i], (s > 12 ? s - 12 : s) + ":00", (s + h > 12 ? s + h - 12 : s + h) + ":00", String(h)]); }
      var hide = r.int(0, 3), ans = rows[hide][3];
      if (r.chance(0.5)) { rows[hide][3] = "?"; return item({ prompt: "How many hours did " + nm(r) + " work on " + d[hide] + "?", visual: A.table(["Day", "In", "Out", "Hours"], rows, "Time card"), choices: nums(Number(ans), r, { lo: 1 }), hint: "Count the hours from In to Out." }); }
      return item({ prompt: "How many hours in all this week?", visual: A.table(["Day", "In", "Out", "Hours"], rows, "Time card"), choices: nums(tot, r, { lo: 1, extra: [tot + 4] }), hint: "Add the Hours column." });
    } });
  add("G5", { code: "G5.life.map", name: "Maps and directions", tier: 3,
    gen: function (r) {
      var grid = { N: "Library", S: "Bank", E: "Grocery", W: "School" }, k = r.pick(["N", "S", "E", "W"]), names = { N: "north", S: "south", E: "east", W: "west" };
      var vis = '<div class="mini-map"><span class="mm n">' + grid.N + '</span><span class="mm w">' + grid.W + '</span><span class="mm c">🏠 Home</span><span class="mm e">' + grid.E + '</span><span class="mm s">' + grid.S + '</span><span class="mm rose">N ↑</span></div>';
      return item({ prompt: "You leave home and walk <b>" + names[k] + "</b>. Where do you get to?", say: "You leave home and walk " + names[k] + ". Where do you get to?", visual: vis, choices: [grid[k]].concat(Object.keys(grid).filter(function (x) { return x !== k; }).map(function (x) { return grid[x]; })),
        hint: "North is up, south is down, east is right, west is left." });
    } });
  add("G5", { code: "G5.life.medicine", name: "Read a medicine label", tier: 4,
    gen: function (r) {
      var n = r.pick([1, 2]), every = r.pick([4, 6, 8]), max = r.pick([4, 6, 8]), lab = A.table(null, [["Directions", "Adults: take " + n + " tablet" + (n > 1 ? "s" : "") + " every " + every + " hours."], ["Warning", "Do not take more than " + max + " tablets in 24 hours."], ["Ask", "Ask a doctor before use if you take other medicine."]], "Pain Relief Tablets", "label");
      var q = r.int(0, 2);
      if (q === 0) return item({ prompt: "How many tablets do you take at one time?", visual: lab, choices: nums(n, r, { lo: 1, extra: [max, every] }), hint: "Read the Directions." });
      if (q === 1) return item({ prompt: "What is the most tablets you can take in 24 hours?", visual: lab, choices: nums(max, r, { lo: 1, extra: [n, every] }), hint: "Read the Warning." });
      return item({ prompt: "How long should you wait between doses?", visual: lab, choices: [every + " hours", "1 hour", "24 hours", (every + 2) + " hours"], hint: "Read the Directions: every ___ hours." });
    } });

  /* ════════ GRADE 6 ════════ */
  add("G6", { code: "G6.life.budget", name: "Make a budget", tier: 1,
    gen: function (r) {
      var inc = r.int(12, 24) * 100, rent = Math.round(inc * 0.4 / 50) * 50, food = r.int(25, 40) * 10, bus = r.int(5, 9) * 10, phone = r.int(4, 8) * 10, left = inc - rent - food - bus - phone;
      var tb = A.table(["Item", "Per month"], [["Income (pay)", "$" + inc], ["Rent", "$" + rent], ["Food", "$" + food], ["Bus pass", "$" + bus], ["Phone", "$" + phone]], "Monthly budget");
      if (r.chance(0.5)) return item({ prompt: "How much money is left after all the bills?", visual: tb, choices: ["$" + left, "$" + (inc - rent), "$" + (rent + food + bus + phone), "$" + (left + 100)], hint: "Income − (rent + food + bus + phone)." });
      var save = r.pick([10, 20]), sv = inc * save / 100;
      return item({ prompt: "You want to save <b>" + save + "%</b> of your income. How much is that?", visual: tb, choices: ["$" + sv, "$" + save, "$" + (sv * 2), "$" + (inc - sv)], hint: save + "% of $" + inc + ": find 10% ($" + inc / 10 + ")" + (save === 20 ? " and double it." : ".") });
    } });
  add("G6", { code: "G6.life.tax", name: "Sales tax", tier: 2,
    gen: function (r) {
      var price = r.pick([10, 20, 30, 40, 50, 60, 80, 100]), p = r.pick([5, 6, 10]), tax = price * p / 100;
      return item({ prompt: "Headphones cost $" + price + ". Sales tax is <b>" + p + "%</b>. What is the total?", choices: [D((price + tax) * 100), D(tax * 100), D(price * 100), D((price + p) * 100)].filter(function (x, i, a) { return a.indexOf(x) === i; }),
        hint: "Tax = " + p + "% of $" + price + " = " + D(tax * 100) + ". Add it to the price." });
    } });
  add("G6", { code: "G6.life.tip", name: "Tips and discounts", tier: 2,
    gen: function (r) {
      if (r.chance(0.5)) { var bill = r.int(2, 9) * 10, p = r.pick([15, 20]), tip = bill * p / 100; return item({ prompt: "Your meal costs $" + bill + ". You leave a <b>" + p + "%</b> tip. How much is the tip?", choices: [D(tip * 100), D(bill * 10), D((bill + tip) * 100), D(p * 100)], hint: "10% of $" + bill + " is $" + bill / 10 + ". " + (p === 20 ? "Double it." : "Add half of that again.") }); }
      var price = r.pick([40, 60, 80, 120]), off = r.pick([25, 50]), sale = price * (100 - off) / 100;
      return item({ prompt: "A jacket is $" + price + ", now <b>" + off + "% off</b>. What is the sale price?", choices: ["$" + sale, "$" + (price * off / 100 === sale ? price + price * off / 100 : price * off / 100), "$" + (price - off), "$" + (price + 10)].filter(function (x, i, a) { return a.indexOf(x) === i; }),
        hint: off + "% of $" + price + " = $" + price * off / 100 + ". Subtract it." });
    } });
  add("G6", { code: "G6.life.plans", name: "Compare phone plans", tier: 3,
    gen: function (r) {
      var a = r.int(3, 6) * 10, b = r.int(1, 3) * 10, perGB = r.int(5, 10), gb = r.int(1, 8), costB = b + perGB * gb, cheaper = a < costB ? "Plan A" : a > costB ? "Plan B" : "They cost the same";
      return item({ prompt: "<b>Plan A:</b> $" + a + " a month, unlimited data.<br><b>Plan B:</b> $" + b + " a month plus $" + perGB + " for each GB of data.<br>You use " + gb + " GB a month. Which plan costs less?",
        say: "Plan A: " + a + " dollars a month, unlimited data. Plan B: " + b + " dollars a month plus " + perGB + " dollars for each gigabyte. You use " + gb + " gigabytes a month. Which plan costs less?",
        choices: [cheaper].concat(["Plan A", "Plan B", "They cost the same"].filter(function (x) { return x !== cheaper; })), hint: "Plan B costs $" + b + " + " + gb + " × $" + perGB + " = $" + costB + ". Compare with $" + a + "." });
    } });
  var JOBWORDS = [["DOB", "date of birth"], ["references", "people who can tell an employer about you"], ["availability", "the days and times you can work"], ["signature", "your name written in your own handwriting"], ["position", "the job you are applying for"], ["previous employer", "a place you worked before"], ["full-time", "about 40 hours a week"], ["part-time", "fewer hours than full-time"]];
  add("G6", { code: "G6.life.application", name: "Job application words", tier: 1,
    gen: function (r) { var w = r.pick(JOBWORDS); return item({ prompt: "On a job application, what does <b>" + w[0] + "</b> mean?", say: "On a job application, what does " + w[0] + " mean?", choices: [w[1]].concat(SWD.others(w[1], JOBWORDS.map(function (x) { return x[1]; }), r, 3)), hint: "Think about what an employer needs to know." }); },
    pair: function (r) { var w = r.pick(JOBWORDS); return { a: w[0], b: w[1], key: w[0] }; } });
  add("G6", { code: "G6.life.credit", name: "Credit, debit and saving", tier: 4,
    gen: function (r) {
      var q = r.pick([["What happens when you pay with a <b>debit card</b>?", ["Money comes out of your bank account right away.", "You borrow money and pay it back later.", "The store pays you.", "It is free."], "Debit = your own money from your account."],
        ["What happens when you pay with a <b>credit card</b>?", ["You borrow money and must pay it back, maybe with interest.", "Money comes out of your account right away.", "The store gives it to you free.", "Nothing, it is a gift."], "Credit = borrowed money. Pay the full bill to avoid interest."],
        ["You borrow $100 with 10% interest. How much do you pay back?", ["$110", "$100", "$90", "$10"], "10% of $100 is $10. $100 + $10."],
        ["Why is it smart to have an emergency fund?", ["To pay for surprise costs like a car repair", "To buy more games", "So you never need a job", "Banks require it"], "An emergency fund is savings for surprises."]]);
      return item({ prompt: q[0], say: SWD.strip(q[0]), choices: q[1], hint: q[2] });
    },
    sort: function (r) { var e = r.pick([["rent", 0], ["electric bill", 0], ["bus pass", 0], ["groceries", 0], ["phone bill", 0], ["concert ticket", 1], ["new video game", 1], ["eating out", 1], ["designer shoes", 1]]); return { bins: ["Fixed or needed bill", "Extra (want)"], prompt: "Is it a needed bill or an extra?", item: { text: e[0] }, bin: e[1] }; } });
  add("G6", { code: "G6.life.rent", name: "Renting an apartment", tier: 3,
    gen: function (r) {
      var rent = r.int(7, 14) * 100, dep = rent, util = r.int(5, 15) * 10;
      if (r.chance(0.5)) return item({ prompt: "Rent is $" + rent + " a month. The security deposit is one month's rent. How much do you pay to move in (first month + deposit)?", choices: ["$" + (rent + dep), "$" + rent, "$" + (rent * 3), "$" + (rent + 100)], hint: "$" + rent + " + $" + dep + "." });
      return item({ prompt: "Rent is $" + rent + " and utilities are about $" + util + " a month. What is the monthly cost of the home?", choices: ["$" + (rent + util), "$" + rent, "$" + (rent - util), "$" + (rent + util * 2)], hint: "Add rent and utilities." });
    } });
})();
