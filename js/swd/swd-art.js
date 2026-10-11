/* Sol's Labyrinth · SWD: the pictures. Money is real photos (assets/money/: both sides of the penny, nickel, dime and
   quarter, and the $1, $2, $5, $10, $20, $50 and $100 bills), shown in the coins' true size order (dime < penny < nickel
   < quarter); with the "Show coin values" accommodation a coin also shows 1¢, 5¢, 10¢ or 25¢ under it. Bills are always
   shown well under three-fourths of their real size and one side only, as US rules on pictures of currency require.
   Everything else (clocks, signs, ten-frames, fraction pictures …) is drawn in SVG. Each function returns an HTML string. */
(function () {
  "use strict";
  var SWD = window.SWD = window.SWD || {};
  var A = SWD.art = {};
  var esc = function (s) { return SWD.esc ? SWD.esc(s) : String(s); };
  function svg(w, h, body, cls, label) {
    return '<svg class="art ' + (cls || "") + '" viewBox="0 0 ' + w + " " + h + '" width="' + w + '" height="' + h + '" role="img"' +
      (label ? ' aria-label="' + esc(label) + '"' : ' aria-hidden="true"') + ">" + body + "</svg>";
  }
  A.svg = svg;
  var showValues = function () { return !!(SWD.acc && SWD.acc.get && SWD.acc.get("coinValues")); };

  /* ── coins ── */
  var COINS = {
    1: { name: "penny", plural: "pennies", word: ["ONE", "CENT"], d: 38, fill: "#c27a3e", rim: "#8a4f22", ink: "#5a2e10", hi: "#e8a86a" },
    5: { name: "nickel", plural: "nickels", word: ["FIVE", "CENTS"], d: 42, fill: "#b9bec4", rim: "#7c8288", ink: "#3d4247", hi: "#e3e6ea" },
    10: { name: "dime", plural: "dimes", word: ["ONE", "DIME"], d: 35, fill: "#c9ced4", rim: "#80868d", ink: "#3d4247", hi: "#eef0f2", reed: true },
    25: { name: "quarter", plural: "quarters", word: ["QUARTER", "DOLLAR"], d: 48, fill: "#c3c8ce", rim: "#7a8087", ink: "#3d4247", hi: "#eceef1", reed: true }
  };
  A.COINS = COINS;
  A.coinName = function (v, n) { var c = COINS[v]; return c ? (n === 1 || n == null ? c.name : c.plural) : ""; };
  /* one coin; scale 1 = real size order at about 2 px per mm */
  A.coin = function (v, scale, opts) {
    opts = opts || {};
    var c = COINS[v]; if (!c) return "";
    var d = Math.round(c.d * (scale || 1.6)), vals = opts.values != null ? opts.values : showValues(), side = opts.side === "back" ? "back" : "front";
    return '<span class="coin-photo coin-' + v + '" style="width:' + d + 'px"><img src="assets/money/coin-' + v + "-" + side + '.png" width="' + d + '" height="' + d + '" alt="' +
      (opts.label === false ? "" : esc(c.name + (side === "back" ? " (back)" : ""))) + '" draggable="false">' + (vals ? '<span class="coin-val">' + v + "¢</span>" : "") + "</span>";
  };
  /* the drawn coin (before SWD 1.0 used photos); kept for anything that needs a picture without an image file */
  A.coinDrawn = function (v, scale, opts) {
    opts = opts || {};
    var c = COINS[v]; if (!c) return "";
    var s = (scale || 1.6), d = c.d * s, r = d / 2, cx = r + 2, cy = r + 2, W = d + 4, body = "";
    body += '<circle cx="' + cx + '" cy="' + cy + '" r="' + r + '" fill="' + c.rim + '"/>';
    if (c.reed) {
      for (var i = 0; i < 48; i++) {
        var a = i / 48 * Math.PI * 2, x1 = cx + Math.cos(a) * (r - 0.5), y1 = cy + Math.sin(a) * (r - 0.5), x2 = cx + Math.cos(a) * (r - 2.6 * s / 1.6), y2 = cy + Math.sin(a) * (r - 2.6 * s / 1.6);
        body += '<line x1="' + x1.toFixed(1) + '" y1="' + y1.toFixed(1) + '" x2="' + x2.toFixed(1) + '" y2="' + y2.toFixed(1) + '" stroke="' + c.hi + '" stroke-width="1"/>';
      }
    }
    body += '<circle cx="' + cx + '" cy="' + cy + '" r="' + (r - 3 * s / 1.6) + '" fill="' + c.fill + '"/>';
    body += '<circle cx="' + cx + '" cy="' + cy + '" r="' + (r - 5 * s / 1.6) + '" fill="none" stroke="' + c.hi + '" stroke-opacity=".55" stroke-width="' + (1.2 * s / 1.6) + '"/>';
    var vals = opts.values != null ? opts.values : showValues();
    if (vals) {
      body += '<text x="' + cx + '" y="' + (cy + r * 0.2) + '" text-anchor="middle" font-family="Trebuchet MS, sans-serif" font-weight="700" font-size="' + (r * 0.62) + '" fill="' + c.ink + '">' + v + "¢</text>";
      body += '<text x="' + cx + '" y="' + (cy + r * 0.62) + '" text-anchor="middle" font-family="Trebuchet MS, sans-serif" font-weight="700" font-size="' + (r * 0.22) + '" fill="' + c.ink + '">' + c.word.join(" ") + "</text>";
    } else {
      var fs = v === 25 ? r * 0.25 : r * 0.3;
      body += '<text x="' + cx + '" y="' + (cy - r * 0.04) + '" text-anchor="middle" font-family="Georgia, serif" font-weight="700" font-size="' + fs + '" fill="' + c.ink + '">' + c.word[0] + "</text>";
      body += '<text x="' + cx + '" y="' + (cy + fs * 1.05) + '" text-anchor="middle" font-family="Georgia, serif" font-weight="700" font-size="' + fs + '" fill="' + c.ink + '">' + c.word[1] + "</text>";
    }
    return svg(W, W, body, "coin coin-" + v, opts.label === false ? null : c.name);
  };
  /* ── bills ── */
  var BILL_WORD = { 100: "ONE", 500: "FIVE", 1000: "TEN", 2000: "TWENTY", 5000: "FIFTY", 10000: "ONE HUNDRED" };
  A.bill = function (cents, scale) {
    var n = cents / 100;
    if ([1, 2, 5, 10, 20, 50, 100].indexOf(n) !== -1) {
      /* 156 px wide at scale 1: about a quarter of a real bill's size on a classroom screen */
      var w = Math.round(156 * (scale || 1)), h = Math.round(w * 100 / 236);
      return '<img class="bill-photo" src="assets/money/bill-' + n + '.png" width="' + w + '" height="' + h + '" alt="$' + n + ' bill" draggable="false">';
    }
    return A.billDrawn(cents, scale);
  };
  A.billDrawn = function (cents, scale) {
    var s = scale || 1, W = 156 * s, H = 66 * s, n = cents / 100, body = "";
    body += '<rect x="1" y="1" width="' + (W - 2) + '" height="' + (H - 2) + '" rx="' + 4 * s + '" fill="#d9e4cf" stroke="#53704a" stroke-width="' + 2 * s + '"/>';
    body += '<rect x="' + 7 * s + '" y="' + 7 * s + '" width="' + (W - 14 * s) + '" height="' + (H - 14 * s) + '" rx="' + 3 * s + '" fill="none" stroke="#7d9a6f" stroke-width="' + 1.2 * s + '"/>';
    body += '<ellipse cx="' + W / 2 + '" cy="' + H / 2 + '" rx="' + 22 * s + '" ry="' + 24 * s + '" fill="#b9cbaa" stroke="#53704a" stroke-width="' + s + '"/>';
    body += '<text x="' + W / 2 + '" y="' + (H / 2 + 9 * s) + '" text-anchor="middle" font-family="Georgia, serif" font-weight="700" font-size="' + 26 * s + '" fill="#2f4a28">' + n + "</text>";
    [[16, 22], [W / s - 16, 22], [16, H / s - 10], [W / s - 16, H / s - 10]].forEach(function (p) {
      body += '<text x="' + p[0] * s + '" y="' + p[1] * s + '" text-anchor="middle" font-family="Georgia, serif" font-weight="700" font-size="' + 14 * s + '" fill="#2f4a28">' + n + "</text>";
    });
    body += '<text x="' + W / 2 + '" y="' + (H - 9 * s) + '" text-anchor="middle" font-family="Georgia, serif" font-size="' + 8.5 * s + '" fill="#2f4a28" letter-spacing="1">' + (BILL_WORD[cents] || "") + (n === 1 ? " DOLLAR" : " DOLLARS") + "</text>";
    body += '<text x="' + W / 2 + '" y="' + 15 * s + '" text-anchor="middle" font-family="Georgia, serif" font-size="' + 7 * s + '" fill="#2f4a28" letter-spacing="1">THE UNITED STATES OF AMERICA</text>';
    return svg(W, H, body, "bill bill-" + n, "$" + n + " bill");
  };
  /* a pile of money: [25, 10, 10, 1] or {cents: count} */
  A.money = function (list, scale) {
    var out = [];
    list.forEach(function (v) { out.push(v >= 100 ? A.bill(v, (scale || 1) * 0.62) : A.coin(v, (scale || 1) * 1.25)); });
    return '<div class="money-row">' + out.join("") + "</div>";
  };
  /* coins for an amount, largest first (the greedy set) */
  A.coinsFor = function (cents, kinds) {
    kinds = (kinds || [25, 10, 5, 1]).slice().sort(function (a, b) { return b - a; });
    var out = [];
    kinds.forEach(function (k) { while (cents >= k) { out.push(k); cents -= k; } });
    return out;
  };

  /* ── a clock ── */
  A.clock = function (h, m, size) {
    var S = size || 150, r = S / 2 - 4, c = S / 2, body = "";
    body += '<circle cx="' + c + '" cy="' + c + '" r="' + r + '" fill="#fbf7ea" stroke="#2c2f38" stroke-width="5"/>';
    for (var i = 0; i < 60; i++) {
      var a = i / 60 * Math.PI * 2, big = i % 5 === 0, r1 = r - (big ? 11 : 6);
      body += '<line x1="' + (c + Math.sin(a) * r1).toFixed(1) + '" y1="' + (c - Math.cos(a) * r1).toFixed(1) + '" x2="' + (c + Math.sin(a) * (r - 3)).toFixed(1) + '" y2="' + (c - Math.cos(a) * (r - 3)).toFixed(1) + '" stroke="#2c2f38" stroke-width="' + (big ? 2.4 : 1) + '"/>';
    }
    for (var n = 1; n <= 12; n++) {
      var an = n / 12 * Math.PI * 2, rr = r - 24;
      body += '<text x="' + (c + Math.sin(an) * rr).toFixed(1) + '" y="' + (c - Math.cos(an) * rr + S * 0.045).toFixed(1) + '" text-anchor="middle" font-family="Trebuchet MS, sans-serif" font-weight="700" font-size="' + (S * 0.12) + '" fill="#2c2f38">' + n + "</text>";
    }
    var ha = ((h % 12) + m / 60) / 12 * Math.PI * 2, ma = m / 60 * Math.PI * 2;
    body += '<line x1="' + c + '" y1="' + c + '" x2="' + (c + Math.sin(ha) * r * 0.5).toFixed(1) + '" y2="' + (c - Math.cos(ha) * r * 0.5).toFixed(1) + '" stroke="#1d3f8a" stroke-width="' + S * 0.045 + '" stroke-linecap="round"/>';
    body += '<line x1="' + c + '" y1="' + c + '" x2="' + (c + Math.sin(ma) * r * 0.78).toFixed(1) + '" y2="' + (c - Math.cos(ma) * r * 0.78).toFixed(1) + '" stroke="#c0392b" stroke-width="' + S * 0.028 + '" stroke-linecap="round"/>';
    body += '<circle cx="' + c + '" cy="' + c + '" r="' + S * 0.035 + '" fill="#2c2f38"/>';
    return svg(S, S, body, "clock", "a clock");
  };
  A.digital = function (h, m) {
    return '<div class="digital">' + h + ":" + ("0" + m).slice(-2) + "</div>";
  };

  /* ── signs ── */
  function txt(x, y, s, size, fill, weight) { return '<text x="' + x + '" y="' + y + '" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-weight="' + (weight || 700) + '" font-size="' + size + '" fill="' + fill + '">' + esc(s) + "</text>"; }
  function figure(x, y, s, fill, skirt) {
    var b = '<circle cx="' + x + '" cy="' + (y - 26 * s) + '" r="' + 7 * s + '" fill="' + fill + '"/>';
    if (skirt) b += '<path d="M' + (x - 9 * s) + " " + (y - 17 * s) + " L" + (x + 9 * s) + " " + (y - 17 * s) + " L" + (x + 15 * s) + " " + (y + 8 * s) + " L" + (x - 15 * s) + " " + (y + 8 * s) + 'Z" fill="' + fill + '"/>';
    else b += '<rect x="' + (x - 10 * s) + '" y="' + (y - 17 * s) + '" width="' + 20 * s + '" height="' + 25 * s + '" rx="' + 4 * s + '" fill="' + fill + '"/>';
    b += '<rect x="' + (x - 8 * s) + '" y="' + (y + 6 * s) + '" width="' + 6 * s + '" height="' + 18 * s + '" fill="' + fill + '"/><rect x="' + (x + 2 * s) + '" y="' + (y + 6 * s) + '" width="' + 6 * s + '" height="' + 18 * s + '" fill="' + fill + '"/>';
    return b;
  }
  var SIGNS = {
    stop: { label: "STOP sign", draw: function () {
      var pts = [], c = 60, r = 56;
      for (var i = 0; i < 8; i++) { var a = (i + 0.5) / 8 * Math.PI * 2; pts.push((c + Math.cos(a) * r).toFixed(1) + "," + (c + Math.sin(a) * r).toFixed(1)); }
      return svg(120, 120, '<polygon points="' + pts.join(" ") + '" fill="#c8102e" stroke="#fff" stroke-width="4"/>' + txt(60, 71, "STOP", 30, "#fff"));
    } },
    yield: { label: "YIELD sign", draw: function () { return svg(130, 116, '<polygon points="5,6 125,6 65,112" fill="#fff" stroke="#c8102e" stroke-width="14" stroke-linejoin="round"/>' + txt(65, 46, "YIELD", 19, "#c8102e")); } },
    exit: { label: "EXIT sign", draw: function () { return svg(150, 70, '<rect x="2" y="2" width="146" height="66" rx="6" fill="#0b7a3b" stroke="#e8f5ec" stroke-width="3"/>' + txt(75, 48, "EXIT", 36, "#fff")); } },
    enter: { label: "ENTER sign", draw: function () { return svg(150, 70, '<rect x="2" y="2" width="146" height="66" rx="6" fill="#1d4f91" stroke="#e8eef8"  stroke-width="3"/>' + txt(75, 47, "ENTER", 30, "#fff")); } },
    walk: { label: "WALK signal", draw: function () { return svg(120, 120, '<rect x="2" y="2" width="116" height="116" rx="10" fill="#1b1b1b"/>' + figure(60, 62, 1.5, "#f3f3f3") + txt(60, 112, "WALK", 14, "#f3f3f3")); } },
    dontwalk: { label: "DON'T WALK signal", draw: function () {
      var hand = '<path d="M44 92 L44 50 Q44 44 50 44 Q55 44 55 50 L55 34 Q55 28 61 28 Q66 28 66 34 L66 32 Q66 26 72 26 Q77 26 77 32 L77 40 Q77 34 83 34 Q88 34 88 40 L88 76 Q88 96 70 98 L56 98 Q46 98 44 92Z" fill="#ff8a1e"/>';
      return svg(120, 120, '<rect x="2" y="2" width="116" height="116" rx="10" fill="#1b1b1b"/>' + hand + txt(60, 114, "DON'T WALK", 11, "#ff8a1e"));
    } },
    men: { label: "MEN restroom sign", draw: function () { return svg(110, 120, '<rect x="2" y="2" width="106" height="116" rx="8" fill="#1d4f91"/>' + figure(55, 55, 1.4, "#fff") + txt(55, 108, "MEN", 18, "#fff")); } },
    women: { label: "WOMEN restroom sign", draw: function () { return svg(110, 120, '<rect x="2" y="2" width="106" height="116" rx="8" fill="#8e2a6a"/>' + figure(55, 55, 1.4, "#fff", true) + txt(55, 108, "WOMEN", 17, "#fff")); } },
    restroom: { label: "RESTROOM sign", draw: function () { return svg(140, 120, '<rect x="2" y="2" width="136" height="116" rx="8" fill="#1d4f91"/>' + figure(44, 52, 1.2, "#fff") + figure(96, 52, 1.2, "#fff", true) + '<line x1="70" y1="14" x2="70" y2="86" stroke="#fff" stroke-width="3"/>' + txt(70, 108, "RESTROOM", 16, "#fff")); } },
    poison: { label: "POISON label", draw: function () {
      var skull = '<circle cx="60" cy="46" r="24" fill="#111"/><rect x="47" y="60" width="26" height="14" rx="3" fill="#111"/><circle cx="51" cy="44" r="6" fill="#fff"/><circle cx="69" cy="44" r="6" fill="#fff"/><path d="M57 56 L60 51 L63 56Z" fill="#fff"/>' +
        '<line x1="28" y1="78" x2="92" y2="94" stroke="#111" stroke-width="7" stroke-linecap="round"/><line x1="92" y1="78" x2="28" y2="94" stroke="#111" stroke-width="7" stroke-linecap="round"/>';
      return svg(120, 130, '<rect x="2" y="2" width="116" height="126" rx="8" fill="#ffd400" stroke="#111" stroke-width="3"/>' + skull + txt(60, 120, "POISON", 18, "#111"));
    } },
    nosmoking: { label: "NO SMOKING sign", draw: function () { return svg(120, 120, '<circle cx="60" cy="60" r="54" fill="#fff" stroke="#c8102e" stroke-width="10"/><rect x="24" y="56" width="60" height="10" fill="#555"/><rect x="84" y="56" width="12" height="10" fill="#e0602b"/><path d="M90 50 Q96 40 90 30" stroke="#999" stroke-width="3" fill="none"/><line x1="22" y1="22" x2="98" y2="98" stroke="#c8102e" stroke-width="10"/>'); } },
    wetfloor: { label: "WET FLOOR sign", draw: function () { return svg(120, 130, '<polygon points="60,6 114,124 6,124" fill="#ffd400" stroke="#111" stroke-width="4" stroke-linejoin="round"/>' + txt(60, 92, "WET", 22, "#111") + txt(60, 114, "FLOOR", 18, "#111") + txt(60, 64, "!", 34, "#111")); } },
    hospital: { label: "HOSPITAL sign", draw: function () { return svg(120, 120, '<rect x="2" y="2" width="116" height="116" rx="8" fill="#1d4f91"/>' + txt(60, 82, "H", 70, "#fff")); } },
    busstop: { label: "BUS STOP sign", draw: function () { return svg(130, 120, '<rect x="2" y="2" width="126" height="116" rx="8" fill="#fff" stroke="#1d4f91" stroke-width="5"/><rect x="34" y="16" width="62" height="50" rx="8" fill="#1d4f91"/><rect x="40" y="22" width="22" height="18" fill="#cfe0f5"/><rect x="68" y="22" width="22" height="18" fill="#cfe0f5"/><circle cx="46" cy="68" r="6" fill="#111"/><circle cx="84" cy="68" r="6" fill="#111"/>' + txt(65, 104, "BUS STOP", 18, "#1d4f91")); } },
    oneway: { label: "ONE WAY sign", draw: function () { return svg(170, 60, '<rect x="2" y="2" width="166" height="56" fill="#111"/><polygon points="12,22 120,22 120,10 158,30 120,50 120,38 12,38" fill="#fff"/>' + txt(66, 36, "ONE WAY", 13, "#111")); } },
    donotenter: { label: "DO NOT ENTER sign", draw: function () { return svg(120, 120, '<circle cx="60" cy="60" r="56" fill="#c8102e"/><rect x="18" y="50" width="84" height="20" fill="#fff"/>' + txt(60, 36, "DO NOT", 14, "#fff") + txt(60, 94, "ENTER", 15, "#fff")); } },
    danger: { label: "DANGER sign", draw: function () { return svg(160, 80, '<rect x="2" y="2" width="156" height="76" fill="#fff" stroke="#111" stroke-width="3"/><rect x="8" y="8" width="144" height="34" fill="#c8102e"/>' + txt(80, 34, "DANGER", 26, "#fff") + txt(80, 66, "KEEP OUT", 16, "#111")); } },
    open: { label: "OPEN sign", draw: function () { return svg(150, 70, '<rect x="2" y="2" width="146" height="66" rx="10" fill="#0b7a3b"/>' + txt(75, 48, "OPEN", 34, "#fff")); } },
    closed: { label: "CLOSED sign", draw: function () { return svg(150, 70, '<rect x="2" y="2" width="146" height="66" rx="10" fill="#c8102e"/>' + txt(75, 47, "CLOSED", 28, "#fff")); } },
    push: { label: "PUSH sign", draw: function () { return svg(130, 60, '<rect x="2" y="2" width="126" height="56" rx="6" fill="#e8e8e8" stroke="#555" stroke-width="2"/>' + txt(65, 42, "PUSH", 30, "#222")); } },
    pull: { label: "PULL sign", draw: function () { return svg(130, 60, '<rect x="2" y="2" width="126" height="56" rx="6" fill="#e8e8e8" stroke="#555" stroke-width="2"/>' + txt(65, 42, "PULL", 30, "#222")); } },
    fire: { label: "FIRE EXTINGUISHER sign", draw: function () { return svg(120, 130, '<rect x="2" y="2" width="116" height="126" rx="6" fill="#c8102e"/><rect x="44" y="30" width="32" height="64" rx="10" fill="#fff"/><rect x="52" y="18" width="16" height="14" fill="#fff"/><path d="M68 22 L90 16" stroke="#fff" stroke-width="5"/>' + txt(60, 118, "FIRE", 16, "#fff")); } },
    elevator: { label: "ELEVATOR sign", draw: function () { return svg(120, 120, '<rect x="2" y="2" width="116" height="116" rx="8" fill="#1d4f91"/><polygon points="40,40 56,20 72,40" fill="#fff"/><polygon points="48,58 64,78 80,58" fill="#fff"/>' + txt(60, 108, "ELEVATOR", 14, "#fff")); } },
    railroad: { label: "RAILROAD CROSSING sign", draw: function () { return svg(130, 130, '<g transform="rotate(45 65 65)"><rect x="5" y="50" width="120" height="30" fill="#fff" stroke="#111" stroke-width="3"/></g><g transform="rotate(-45 65 65)"><rect x="5" y="50" width="120" height="30" fill="#fff" stroke="#111" stroke-width="3"/></g>' + txt(65, 70, "RAILROAD", 11, "#111")); } },
    help: { label: "INFORMATION sign", draw: function () { return svg(120, 120, '<rect x="2" y="2" width="116" height="116" rx="8" fill="#1d4f91"/>' + txt(60, 88, "?", 74, "#fff")); } }
  };
  A.SIGNS = SIGNS;
  A.sign = function (id) { var s = SIGNS[id]; return s ? s.draw().replace("<svg ", '<svg aria-label="' + esc(s.label) + '" ') : ""; };

  /* ── counting pictures ── */
  /* n copies of an emoji, in rows of five */
  A.objects = function (emoji, n, cls) {
    var out = [];
    for (var i = 0; i < n; i++) out.push('<span class="obj">' + emoji + "</span>");
    var rows = [], per = n > 10 ? 10 : 5;
    for (var j = 0; j < out.length; j += per) rows.push('<div class="obj-row">' + out.slice(j, j + per).join("") + "</div>");
    return '<div class="objects ' + (cls || "") + '" aria-label="' + n + " " + esc(emoji) + '">' + rows.join("") + "</div>";
  };
  /* a ten-frame with n dots (n up to 10) */
  A.tenFrame = function (n, color) {
    var body = "", W = 210, H = 88;
    for (var i = 0; i < 10; i++) {
      var x = 4 + (i % 5) * 40, y = 4 + Math.floor(i / 5) * 40;
      body += '<rect x="' + x + '" y="' + y + '" width="40" height="40" fill="#fbf7ea" stroke="#2c2f38" stroke-width="2"/>';
      if (i < n) body += '<circle cx="' + (x + 20) + '" cy="' + (y + 20) + '" r="14" fill="' + (color || "#c0392b") + '"/>';
    }
    return svg(W, H, body, "tenframe", n + " in a ten frame");
  };
  /* base-ten blocks: hundreds, tens, ones */
  A.blocks = function (h, t, o) {
    var body = "", x = 4, W, H = 112;
    for (var i = 0; i < h; i++) {
      body += '<rect x="' + x + '" y="4" width="100" height="100" fill="#8fc1e3" stroke="#1d4f91" stroke-width="2"/>';
      for (var g = 1; g < 10; g++) body += '<line x1="' + (x + g * 10) + '" y1="4" x2="' + (x + g * 10) + '" y2="104" stroke="#1d4f91" stroke-width=".6"/><line x1="' + x + '" y1="' + (4 + g * 10) + '" x2="' + (x + 100) + '" y2="' + (4 + g * 10) + '" stroke="#1d4f91" stroke-width=".6"/>';
      x += 108;
    }
    for (var j = 0; j < t; j++) {
      body += '<rect x="' + x + '" y="4" width="10" height="100" fill="#9be0a3" stroke="#1d6b2a" stroke-width="1.5"/>';
      for (var k = 1; k < 10; k++) body += '<line x1="' + x + '" y1="' + (4 + k * 10) + '" x2="' + (x + 10) + '" y2="' + (4 + k * 10) + '" stroke="#1d6b2a" stroke-width=".6"/>';
      x += 14;
    }
    if (t) x += 6;
    for (var m = 0; m < o; m++) {
      body += '<rect x="' + (x + (m % 2) * 14) + '" y="' + (84 - Math.floor(m / 2) * 14) + '" width="10" height="10" fill="#ffd27a" stroke="#8a5a00" stroke-width="1.5"/>';
    }
    if (o) x += 30;
    W = Math.max(40, x);
    return svg(W, H, body, "blocks", h + " hundreds " + t + " tens " + o + " ones");
  };
  /* an array of dots: r rows of c */
  A.array = function (rows, cols) {
    var body = "", W = cols * 28 + 8, H = rows * 28 + 8;
    for (var i = 0; i < rows; i++) for (var j = 0; j < cols; j++) body += '<circle cx="' + (18 + j * 28) + '" cy="' + (18 + i * 28) + '" r="10" fill="#e8b04a" stroke="#8a5a00" stroke-width="1.5"/>';
    return svg(W, H, body, "array", rows + " rows of " + cols);
  };
  /* a fraction bar: d parts, n shaded */
  A.fractionBar = function (n, d, w) {
    w = w || 240;
    var body = "", pw = (w - 8) / d;
    for (var i = 0; i < d; i++) body += '<rect x="' + (4 + i * pw).toFixed(1) + '" y="4" width="' + pw.toFixed(1) + '" height="40" fill="' + (i < n ? "#e8b04a" : "#fbf7ea") + '" stroke="#2c2f38" stroke-width="2"/>';
    return svg(w, 48, body, "fbar", n + " out of " + d + " parts shaded");
  };
  /* a fraction circle: d slices, n shaded */
  A.fractionCircle = function (n, d, size) {
    var S = size || 120, c = S / 2, r = S / 2 - 4, body = "";
    if (d === 1) return svg(S, S, '<circle cx="' + c + '" cy="' + c + '" r="' + r + '" fill="' + (n ? "#e8b04a" : "#fbf7ea") + '" stroke="#2c2f38" stroke-width="2.5"/>', "fcircle");
    for (var i = 0; i < d; i++) {
      var a0 = i / d * Math.PI * 2 - Math.PI / 2, a1 = (i + 1) / d * Math.PI * 2 - Math.PI / 2;
      var x0 = c + Math.cos(a0) * r, y0 = c + Math.sin(a0) * r, x1 = c + Math.cos(a1) * r, y1 = c + Math.sin(a1) * r;
      body += '<path d="M' + c + " " + c + " L" + x0.toFixed(1) + " " + y0.toFixed(1) + " A" + r + " " + r + " 0 " + (1 / d > 0.5 ? 1 : 0) + " 1 " + x1.toFixed(1) + " " + y1.toFixed(1) + 'Z" fill="' + (i < n ? "#e8b04a" : "#fbf7ea") + '" stroke="#2c2f38" stroke-width="2.5"/>';
    }
    return svg(S, S, body, "fcircle", n + " out of " + d + " slices shaded");
  };
  /* a number line from a to b with a dot at v (or a "?" mark) */
  A.numberLine = function (a, b, v, mark, step) {
    step = step || 1;
    var n = Math.round((b - a) / step), W = Math.max(260, n * 34 + 40), body = "", px = function (x) { return 20 + (x - a) / (b - a) * (W - 40); };
    body += '<line x1="12" y1="40" x2="' + (W - 12) + '" y2="40" stroke="#e8e6df" stroke-width="3"/>';
    for (var i = 0; i <= n; i++) {
      var x = a + i * step, X = px(x);
      body += '<line x1="' + X + '" y1="32" x2="' + X + '" y2="48" stroke="#e8e6df" stroke-width="2"/>';
      body += '<text x="' + X + '" y="70" text-anchor="middle" font-family="Trebuchet MS, sans-serif" font-size="15" fill="#e8e6df">' + (x === v && mark ? "?" : x) + "</text>";
    }
    if (v != null) body += '<circle cx="' + px(v) + '" cy="40" r="9" fill="#f5c842" stroke="#3a2f12" stroke-width="2"/>';
    return svg(W, 80, body, "nline", "number line");
  };
  /* a ruler from 0 to n inches with a bar of length L inches above it */
  A.ruler = function (n, L, emoji) {
    var W = n * 50 + 30, body = "";
    body += '<rect x="10" y="50" width="' + (n * 50 + 10) + '" height="44" fill="#f2d48a" stroke="#8a5a00" stroke-width="2"/>';
    for (var i = 0; i <= n * 4; i++) {
      var X = 15 + i * 12.5, len = i % 4 === 0 ? 22 : i % 2 === 0 ? 14 : 8;
      body += '<line x1="' + X + '" y1="50" x2="' + X + '" y2="' + (50 + len) + '" stroke="#5a3a00" stroke-width="' + (i % 4 === 0 ? 2 : 1) + '"/>';
      if (i % 4 === 0) body += '<text x="' + X + '" y="88" text-anchor="middle" font-family="Trebuchet MS, sans-serif" font-size="14" font-weight="700" fill="#5a3a00">' + i / 4 + "</text>";
    }
    body += '<rect x="15" y="22" width="' + L * 50 + '" height="20" rx="6" fill="' + (emoji || "#3f8fd6") + '" stroke="#1d4f91" stroke-width="2"/>';
    return svg(W, 100, body, "ruler", "a ruler");
  };
  /* a thermometer showing t degrees (range lo to hi) */
  A.thermo = function (t, lo, hi) {
    lo = lo == null ? 0 : lo; hi = hi == null ? 100 : hi;
    var H = 200, top = 14, bot = 160, y = function (v) { return bot - (v - lo) / (hi - lo) * (bot - top); }, body = "";
    body += '<rect x="44" y="8" width="24" height="160" rx="12" fill="#fbf7ea" stroke="#2c2f38" stroke-width="2"/>';
    body += '<circle cx="56" cy="178" r="18" fill="#c0392b" stroke="#2c2f38" stroke-width="2"/>';
    body += '<rect x="50" y="' + y(t) + '" width="12" height="' + (172 - y(t)) + '" fill="#c0392b"/>';
    for (var v = lo; v <= hi; v += (hi - lo) / 10) {
      body += '<line x1="68" y1="' + y(v) + '" x2="78" y2="' + y(v) + '" stroke="#e8e6df" stroke-width="1.5"/>';
      if (Math.round(v - lo) % Math.round((hi - lo) / 5) === 0) body += '<text x="82" y="' + (y(v) + 5) + '" font-family="Trebuchet MS, sans-serif" font-size="13" fill="#e8e6df">' + Math.round(v) + "°</text>";
    }
    return svg(120, H, body, "thermo", t + " degrees");
  };
  /* simple shapes */
  A.shape = function (kind, color) {
    color = color || "#3f8fd6";
    var s = { circle: '<circle cx="50" cy="50" r="42" fill="' + color + '"/>', square: '<rect x="10" y="10" width="80" height="80" fill="' + color + '"/>',
      rectangle: '<rect x="2" y="24" width="96" height="52" fill="' + color + '"/>', triangle: '<polygon points="50,6 96,92 4,92" fill="' + color + '"/>',
      oval: '<ellipse cx="50" cy="50" rx="46" ry="30" fill="' + color + '"/>', star: '<polygon points="50,4 61,38 97,38 68,59 79,94 50,73 21,94 32,59 3,38 39,38" fill="' + color + '"/>',
      hexagon: '<polygon points="27,8 73,8 96,50 73,92 27,92 4,50" fill="' + color + '"/>', pentagon: '<polygon points="50,4 96,38 78,94 22,94 4,38" fill="' + color + '"/>',
      diamond: '<polygon points="50,4 92,50 50,96 8,50" fill="' + color + '"/>' }[kind] || "";
    return svg(100, 100, s, "shape", kind);
  };
  /* a grid of squares w by h (area / perimeter) */
  A.grid = function (w, h, fill) {
    var u = Math.min(30, Math.floor(260 / Math.max(w, h))), body = "";
    for (var i = 0; i < h; i++) for (var j = 0; j < w; j++) body += '<rect x="' + (4 + j * u) + '" y="' + (4 + i * u) + '" width="' + u + '" height="' + u + '" fill="' + (fill || "#8fc1e3") + '" stroke="#1d4f91" stroke-width="1.5"/>';
    return svg(w * u + 8, h * u + 8, body, "grid", w + " by " + h + " squares");
  };
  /* a rectangle with side labels */
  A.rect = function (w, h, unit, label) {
    var W = 220, H = Math.max(70, Math.min(150, 220 * h / w)), body = "";
    body += '<rect x="40" y="20" width="' + (W - 60) + '" height="' + H + '" fill="#8fc1e3" fill-opacity=".35" stroke="#8fc1e3" stroke-width="3"/>';
    body += '<text x="' + (20 + W / 2) + '" y="14" text-anchor="middle" font-family="Trebuchet MS, sans-serif" font-size="15" fill="#e8e6df">' + w + " " + unit + "</text>";
    body += '<text x="34" y="' + (24 + H / 2) + '" text-anchor="end" font-family="Trebuchet MS, sans-serif" font-size="15" fill="#e8e6df">' + h + " " + unit + "</text>";
    return svg(W + 10, H + 30, body, "rectfig", label || (w + " by " + h));
  };
  /* a bar graph: [[label, value], ...] */
  A.barGraph = function (rows, title, max) {
    max = max || Math.max.apply(null, rows.map(function (r) { return r[1]; }));
    var step = max <= 10 ? 1 : max <= 20 ? 2 : max <= 50 ? 5 : 10, top = Math.ceil(max / step) * step;
    var W = 70 + rows.length * 66, H = 210, body = "", y = function (v) { return 170 - v / top * 140; };
    for (var v = 0; v <= top; v += step) {
      body += '<line x1="50" y1="' + y(v) + '" x2="' + (W - 6) + '" y2="' + y(v) + '" stroke="#3a4150" stroke-width="1"/>';
      body += '<text x="44" y="' + (y(v) + 5) + '" text-anchor="end" font-family="Trebuchet MS, sans-serif" font-size="12" fill="#e8e6df">' + v + "</text>";
    }
    var colors = ["#3f8fd6", "#e8b04a", "#4fb36a", "#d65f5f", "#9a6fd6", "#3fbfbf"];
    rows.forEach(function (r, i) {
      var x = 62 + i * 66;
      body += '<rect x="' + x + '" y="' + y(r[1]) + '" width="44" height="' + (170 - y(r[1])) + '" fill="' + colors[i % colors.length] + '"/>';
      body += '<text x="' + (x + 22) + '" y="190" text-anchor="middle" font-family="Trebuchet MS, sans-serif" font-size="13" fill="#e8e6df">' + esc(r[0]) + "</text>";
    });
    if (title) body += '<text x="' + W / 2 + '" y="16" text-anchor="middle" font-family="Trebuchet MS, sans-serif" font-weight="700" font-size="14" fill="#f5c842">' + esc(title) + "</text>";
    return svg(W, H, body, "bars", title || "bar graph");
  };
  /* a table: header row and body rows (strings) */
  A.table = function (head, rows, caption, cls) {
    var h = '<table class="swd-table ' + (cls || "") + '">' + (caption ? "<caption>" + esc(caption) + "</caption>" : "");
    if (head) h += "<thead><tr>" + head.map(function (c) { return "<th>" + esc(c) + "</th>"; }).join("") + "</tr></thead>";
    h += "<tbody>" + rows.map(function (r) { return "<tr>" + r.map(function (c) { return "<td>" + esc(c) + "</td>"; }).join("") + "</tr>"; }).join("") + "</tbody></table>";
    return h;
  };
  /* a month calendar: startDay 0 = Sunday, days in month, marks {day: "text"} */
  A.calendar = function (month, startDay, days, marks) {
    marks = marks || {};
    var h = '<table class="swd-cal"><caption>' + esc(month) + "</caption><thead><tr>" + ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(function (d) { return "<th>" + d + "</th>"; }).join("") + "</tr></thead><tbody><tr>";
    var col = 0;
    for (var i = 0; i < startDay; i++) { h += "<td></td>"; col++; }
    for (var d = 1; d <= days; d++) {
      h += '<td class="' + (marks[d] ? "mark" : "") + '"><b>' + d + "</b>" + (marks[d] ? "<span>" + esc(marks[d]) + "</span>" : "") + "</td>";
      col++;
      if (col === 7 && d < days) { h += "</tr><tr>"; col = 0; }
    }
    while (col < 7 && col > 0) { h += "<td></td>"; col++; }
    return h + "</tr></tbody></table>";
  };
  /* a price tag */
  A.tag = function (emoji, name, cents) {
    return '<div class="price-tag"><span class="pt-emoji">' + emoji + '</span><span class="pt-name">' + esc(name) + '</span><span class="pt-price">' + SWD.money(cents, "d") + "</span></div>";
  };
  /* big emoji picture */
  A.pic = function (emoji, label) { return '<span class="pic" role="img" aria-label="' + esc(label || "") + '">' + emoji + "</span>"; };
  /* a color swatch */
  A.swatch = function (color, label) { return '<span class="swatch" style="background:' + color + '" role="img" aria-label="' + esc(label || color) + '"></span>'; };
})();
