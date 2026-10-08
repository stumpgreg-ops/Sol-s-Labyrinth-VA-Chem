#!/usr/bin/env node
/* Exports the question bank as a Word document for teachers:
     node tools/export-questions-docx.js [out.docx]       (default dist/SOL Lab VA Chem - question pool.docx)
   The same order as tools/export-questions.js: unit (reporting category), then level 1 → 2 → 3, then pack by the
   length of its lab notes. Every pack shows its lab notes (with their data tables), and every question its SOL key
   concept, the four choices and the key. Needs the docx package (npm install docx, or NODE_PATH pointing at one). */
var fs = require("fs"), path = require("path"), vm = require("vm");
var docx;
try { docx = require("docx"); } catch (e) { console.error("tools/export-questions-docx.js needs the docx package: npm install docx (or set NODE_PATH to where it is)"); process.exit(1); }
var D = docx, root = path.join(__dirname, "..");

var W = {}; W.window = W; W.global = W;
fs.readdirSync(path.join(root, "js")).filter(function (f) { return /^content\d*\.js$/.test(f); })
  .sort(function (a, b) { return num(a) - num(b); })
  .forEach(function (f) { vm.runInNewContext(fs.readFileSync(path.join(root, "js", f), "utf8"), W, { filename: f }); });
function num(f) { var m = f.match(/content(\d*)\.js/); return m[1] === "" ? 0 : parseInt(m[1], 10); }
var PACKS = W.HEIST_PACKS, FAMILIES = W.HEIST_FAMILIES.filter(function (f) { return f.id !== "ALL"; }), STANDARDS = W.HEIST_STANDARDS;
var ver = (fs.readFileSync(path.join(root, "index.html"), "utf8").match(/<p class="ver">([^<]*)<\/p>/) || [0, ""])[1];
var out = process.argv[2] || path.join(root, "dist", "SOL Lab VA Chem - question pool.docx");

var FONT = "Arial", PAGE_W = 12240, MARGIN = 1440, BODY_W = PAGE_W - 2 * MARGIN;
var GREY = "666666", KEY = "0A7A3E", NOTE_FILL = "F3F4F6", HEAD_FILL = "E5E7EB", RULE = "9CA3AF";

function decode(s) {
  return String(s).replace(/&nbsp;/g, " ").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&#39;/g, "'")
    .replace(/&#(\d+);/g, function (m, n) { return String.fromCharCode(+n); }).replace(/&amp;/g, "&");
}
function plain(html) { return decode(String(html).replace(/<[^>]+>/g, " ")).replace(/\s+/g, " ").trim(); }
function words(html) { return plain(String(html).replace(/\(\d+\)/g, " ")).split(" ").filter(Boolean).length; }
function tierOf(wc) { return wc < 70 ? "tiny" : wc < 110 ? "short" : wc < 160 ? "medium" : "long"; }
var TIER_LEVELS = { tiny: "1–15", short: "16–40", medium: "41–70", long: "71–100" };

/* inline HTML (the lab notes use <strong> and <span class="n">(1)</span> sentence numbers) → TextRuns */
function runs(html, base) {
  base = base || {};
  var out = [], bold = false, num = false, re = /<(\/?)(strong|b|span)([^>]*)>|([^<]+)/gi, m;
  while ((m = re.exec(html))) {
    if (m[4] != null) {
      var t = decode(m[4]);
      if (!t) continue;
      out.push(new D.TextRun(Object.assign({}, base, { text: t, bold: bold || base.bold, color: num ? GREY : base.color, size: num ? 18 : base.size })));
    } else if (/^(strong|b)$/i.test(m[2])) bold = !m[1];
    else if (/^span$/i.test(m[2])) num = !m[1] && /class="n"/.test(m[3]);
  }
  return out;
}
function note(children, opts) {
  return new D.Paragraph(Object.assign({
    children: children, shading: { type: D.ShadingType.CLEAR, color: "auto", fill: NOTE_FILL },
    border: { left: { style: D.BorderStyle.SINGLE, size: 18, color: RULE, space: 8 } },
    indent: { left: 200, right: 120 }, spacing: { before: 0, after: 80, line: 276 }
  }, opts || {}));
}
/* the lab notes: <p>, <table> and <ol> blocks */
function labNotes(html) {
  var blocks = [], re = /<(p|table|ol)>([\s\S]*?)<\/\1>/gi, m;
  while ((m = re.exec(html))) {
    var tag = m[1].toLowerCase(), inner = m[2];
    if (tag === "p") blocks.push(note(runs(inner)));
    else if (tag === "ol") {
      var i = 0;
      inner.replace(/<li>([\s\S]*?)<\/li>/gi, function (x, li) { i++; blocks.push(note([new D.TextRun({ text: i + ". " })].concat(runs(li)), { indent: { left: 560, right: 120, hanging: 280 } })); });
    } else blocks.push(table(inner), new D.Paragraph({ children: [], spacing: { after: 60 } }));
  }
  return blocks;
}
function table(inner) {
  var rows = [];
  inner.replace(/<tr>([\s\S]*?)<\/tr>/gi, function (x, tr) {
    var cells = [];
    tr.replace(/<(th|td)>([\s\S]*?)<\/\1>/gi, function (y, kind, c) { cells.push({ head: kind.toLowerCase() === "th", html: c }); });
    rows.push(cells);
  });
  var n = Math.max.apply(null, rows.map(function (r) { return r.length; }));
  /* columns sized by their longest entry, between 1.1" and the page */
  var len = []; for (var c = 0; c < n; c++) len[c] = Math.max.apply(null, rows.map(function (r) { return r[c] ? plain(r[c].html).length : 0; }).concat([4]));
  var want = len.map(function (l) { return Math.max(1600, Math.min(4200, l * 150 + 400)); }), sum = want.reduce(function (a, b) { return a + b; }, 0);
  var tw = Math.min(BODY_W - 200, sum), widths = want.map(function (w) { return Math.floor(w * tw / sum); });
  tw = widths.reduce(function (a, b) { return a + b; }, 0);
  var border = { style: D.BorderStyle.SINGLE, size: 4, color: "BFBFBF" };
  return new D.Table({
    width: { size: tw, type: D.WidthType.DXA }, columnWidths: widths, indent: { size: 200, type: D.WidthType.DXA },
    rows: rows.map(function (r) {
      return new D.TableRow({ tableHeader: r[0] && r[0].head, children: widths.map(function (w, c) {
        var cell = r[c] || { head: false, html: "" };
        return new D.TableCell({
          width: { size: w, type: D.WidthType.DXA }, borders: { top: border, bottom: border, left: border, right: border },
          shading: cell.head ? { type: D.ShadingType.CLEAR, color: "auto", fill: HEAD_FILL } : undefined,
          margins: { top: 40, bottom: 40, left: 100, right: 100 },
          children: [new D.Paragraph({ children: runs(cell.html, { size: 19, bold: cell.head }) })]
        });
      }) });
    })
  });
}
function p(text, o) { o = o || {}; return new D.Paragraph({ children: [new D.TextRun({ text: text, bold: o.bold, color: o.color, size: o.size, italics: o.italics })], spacing: o.spacing, keepNext: o.keepNext }); }
function meta(text) { return new D.Paragraph({ children: [new D.TextRun({ text: text, color: GREY, size: 18 })], spacing: { after: 100 }, keepNext: true }); }

var body = [], total = PACKS.reduce(function (a, pk) { return a + pk.claims.length; }, 0);
body.push(new D.Paragraph({ heading: D.HeadingLevel.TITLE, children: [new D.TextRun("SOL Lab · Virginia EOC Chemistry")] }));
body.push(p("Question pool", { size: 32, color: "374151", spacing: { after: 240 } }));
body.push(p(PACKS.length + " lab-note passages · " + total + " questions · " + FAMILIES.length + " units", { bold: true, spacing: { after: 80 } }));
body.push(p("Build " + ver + ". Generated from the game's question bank (js/content*.js) by tools/export-questions-docx.js.", { color: GREY, size: 20, spacing: { after: 240 } }));
body.push(new D.Paragraph({ children: [
  new D.TextRun("Each passage is a set of lab notes, often with a data table, followed by its questions. Every question shows the "),
  new D.TextRun({ text: "SOL key concept", bold: true }), new D.TextRun(" it assesses in brackets, its four choices, and the "),
  new D.TextRun({ text: "key", bold: true }), new D.TextRun(" (marked "), new D.TextRun({ text: "✔", bold: true, color: KEY }),
  new D.TextRun(" and repeated below the choices). Two questions are Select TWO items with two keys.")], spacing: { after: 160 } }));
body.push(new D.Paragraph({ children: [
  new D.TextRun("Passages are grouped by unit, then by "), new D.TextRun({ text: "level", bold: true }),
  new D.TextRun(" (1 easy, 2 medium, 3 hard: the reasoning load of the questions), and within a level from the shortest lab notes to the longest. In the game, short notes come up mostly on the early levels and long notes on the late ones (tiny notes on levels 1–15, short 16–40, medium 41–70, long 71–100).")],
  spacing: { after: 240 } }));
body.push(new D.Paragraph({ heading: D.HeadingLevel.HEADING_2, children: [new D.TextRun("Contents")] }));
FAMILIES.forEach(function (f) {
  var ps = PACKS.filter(function (pk) { return pk.family === f.id; });
  body.push(new D.Paragraph({ numbering: { reference: "units", level: 0 }, children: [
    new D.TextRun({ text: f.label + " (" + f.kind + ")", bold: true }),
    new D.TextRun(" — " + ps.length + " passages, " + ps.reduce(function (a, pk) { return a + pk.claims.length; }, 0) + " questions")] }));
});

FAMILIES.forEach(function (f) {
  var std = STANDARDS[f.kind];
  body.push(new D.Paragraph({ heading: D.HeadingLevel.HEADING_1, pageBreakBefore: true, children: [new D.TextRun(f.label + " · " + f.kind)] }));
  if (std) {
    body.push(new D.Paragraph({ children: [new D.TextRun({ text: f.kind + " " + std.name + ". ", bold: true })].concat(
      [new D.TextRun({ text: "Key concepts: " })],
      Object.keys(std.keys).reduce(function (a, L, i, all) {
        return a.concat([new D.TextRun({ text: f.kind + "." + L, bold: true }), new D.TextRun({ text: " " + std.keys[L] + (i < all.length - 1 ? "; " : ".") })]);
      }, [])), spacing: { after: 200 } }));
  }
  var packs = PACKS.filter(function (pk) { return pk.family === f.id; });
  [1, 2, 3].forEach(function (lvl) {
    var group = packs.filter(function (pk) { return (pk.level || 2) === lvl; }).sort(function (a, b) { return words(a.passage) - words(b.passage); });
    if (!group.length) return;
    body.push(new D.Paragraph({ heading: D.HeadingLevel.HEADING_2, children: [new D.TextRun("Level " + lvl + " · " + group.length + " passages · " +
      group.reduce(function (a, pk) { return a + pk.claims.length; }, 0) + " questions")] }));
    group.forEach(function (pk, pi) {
      var wc = words(pk.passage), tier = tierOf(wc);
      body.push(new D.Paragraph({ heading: D.HeadingLevel.HEADING_3, keepNext: true, children: [new D.TextRun(pk.title)] }));
      body.push(meta(wc + " words (" + tier + ", mostly levels " + TIER_LEVELS[tier] + ") · " + pk.claims.length + " questions · " +
        pk.claims.map(function (c) { return c.sol; }).filter(function (x, i, a) { return a.indexOf(x) === i; }).sort().join(", ") + " · id " + pk.id));
      body.push(new D.Paragraph({ keepNext: true, spacing: { after: 60 }, children: [new D.TextRun({ text: "Lab notes", bold: true, size: 18, color: "374151", allCaps: true })] }));
      body = body.concat(labNotes(pk.passage));
      pk.claims.forEach(function (c, ci) {
        var corr = Array.isArray(c.correct) ? c.correct : [c.correct];
        body.push(new D.Paragraph({ keepNext: true, keepLines: true, spacing: { before: 160, after: 60 }, children: [
          new D.TextRun({ text: (ci + 1) + ". ", bold: true }), new D.TextRun({ text: "[" + c.sol + "] ", color: GREY, size: 18 })].concat(runs(c.stem)) }));
        c.choices.forEach(function (ch) {
          var ok = corr.indexOf(ch.letter) !== -1;
          body.push(new D.Paragraph({ keepNext: true, indent: { left: 720, hanging: 360 }, spacing: { after: 30 }, children: [
            new D.TextRun({ text: ch.letter + ".\t", bold: ok, color: ok ? KEY : undefined })].concat(
            runs(ch.text, { bold: ok, color: ok ? KEY : undefined }), ok ? [new D.TextRun({ text: "  ✔", bold: true, color: KEY })] : []),
            tabStops: [{ type: D.TabStopType.LEFT, position: 720 }] }));
        });
        body.push(new D.Paragraph({ indent: { left: 360 }, spacing: { before: 40, after: 60 }, children: [
          new D.TextRun({ text: "Key: ", color: GREY, size: 18 }), new D.TextRun({ text: corr.join(" and "), bold: true, color: KEY, size: 18 }),
          new D.TextRun({ text: corr.length > 1 ? "  (Select TWO)" : "", color: GREY, size: 18 })] }));
      });
      body.push(new D.Paragraph({ children: [], spacing: { after: 120 }, border: { bottom: { style: D.BorderStyle.SINGLE, size: 4, color: "D1D5DB", space: 6 } } }));
    });
  });
});

var doc = new D.Document({
  creator: "SOL Lab", title: "SOL Lab · Virginia EOC Chemistry · question pool",
  styles: {
    default: { document: { run: { font: FONT, size: 21 }, paragraph: { spacing: { after: 80, line: 264 } } } },
    paragraphStyles: [
      { id: "Title", name: "Title", basedOn: "Normal", next: "Normal", run: { size: 48, bold: true, font: FONT, color: "111827" }, paragraph: { spacing: { after: 80 } } },
      { id: "Heading1", name: "Heading 1", basedOn: "Normal", next: "Normal", quickFormat: true, run: { size: 34, bold: true, font: FONT, color: "111827" }, paragraph: { spacing: { before: 0, after: 160 }, outlineLevel: 0 } },
      { id: "Heading2", name: "Heading 2", basedOn: "Normal", next: "Normal", quickFormat: true, run: { size: 27, bold: true, font: FONT, color: "1F2937" }, paragraph: { spacing: { before: 300, after: 140 }, outlineLevel: 1, border: { bottom: { style: D.BorderStyle.SINGLE, size: 8, color: RULE, space: 4 } } } },
      { id: "Footer", name: "footer", basedOn: "Normal", run: { size: 16, color: GREY, font: FONT }, paragraph: { spacing: { after: 0 } } },
      { id: "Heading3", name: "Heading 3", basedOn: "Normal", next: "Normal", quickFormat: true, run: { size: 24, bold: true, font: FONT, color: "1F2937" }, paragraph: { spacing: { before: 240, after: 40 }, outlineLevel: 2 } }
    ]
  },
  numbering: { config: [{ reference: "units", levels: [{ level: 0, format: D.LevelFormat.DECIMAL, text: "%1.", alignment: D.AlignmentType.LEFT, style: { paragraph: { indent: { left: 720, hanging: 360 } } } }] }] },
  sections: [{
    properties: { page: { size: { width: PAGE_W, height: 15840 }, margin: { top: MARGIN, right: MARGIN, bottom: MARGIN, left: MARGIN } } },
    headers: { default: new D.Header({ children: [new D.Paragraph({ alignment: D.AlignmentType.RIGHT, children: [new D.TextRun({ text: "SOL Lab · Virginia EOC Chemistry · question pool", color: GREY, size: 16 })] })] }) },
    footers: { default: new D.Footer({ children: [new D.Paragraph({ style: "Footer", alignment: D.AlignmentType.CENTER, children: [new D.TextRun({ text: "Page ", color: GREY, size: 16 }), new D.TextRun({ children: [D.PageNumber.CURRENT], color: GREY, size: 16 }),
      new D.TextRun({ text: " of ", color: GREY, size: 16 }), new D.TextRun({ children: [D.PageNumber.TOTAL_PAGES], color: GREY, size: 16 })] })] }) },
    children: body
  }]
});
fs.mkdirSync(path.dirname(out), { recursive: true });
D.Packer.toBuffer(doc).then(function (buf) {
  fs.writeFileSync(out, buf);
  console.log(out + ": " + PACKS.length + " passages, " + total + " questions, " + (buf.length / 1024).toFixed(0) + " KiB");
});
