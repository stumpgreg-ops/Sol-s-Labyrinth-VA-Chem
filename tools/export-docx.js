#!/usr/bin/env node
/* Exports a history course's question pool as a Word document for teachers:
     node tools/export-docx.js WHI            -> dist/questions/SOL Lab VA WHI - Question Pool.docx
     node tools/export-docx.js                -> all four courses (WHI, WHII, VUS, GOVT)
   Unit by unit (the title-screen cards), then pack by pack in the order the game meets them (level 1 → 3, short
   sources → long), each pack's source as the game shows it (numbered sentences, quotations, tables, lists) and its
   questions with the SOL code, the four choices and the key marked. Uses the docx package (npm). */
var fs = require("fs"), path = require("path"), vm = require("vm");
var D = require("docx");
var root = path.join(__dirname, "..");
var COURSES = ["WHI", "WHII", "VUS", "GOVT"];
var FONT = "Calibri", GOLD = "8A6D1E", KEY = "1E7B3A", DIM = "666666";
var PAGE_W = 12240, MARGIN = 1080, TEXT_W = PAGE_W - 2 * MARGIN;

function load(id) {
  var W = {}; W.window = W; W.global = W;
  var files = ["courses/" + id + "/course.js", "js/content.js"].concat(
    JSON.parse(fs.readFileSync(path.join(root, "courses", id, "units.json"), "utf8")).map(function (f) { return "courses/" + id + "/" + f; }));
  files.forEach(function (f) { vm.runInNewContext(fs.readFileSync(path.join(root, f), "utf8"), W, { filename: f }); });
  return W;
}
function ent(s) {
  return String(s).replace(/&nbsp;/g, " ").replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"')
    .replace(/&#39;|&apos;/g, "'").replace(/&mdash;/g, "—").replace(/&ndash;/g, "–").replace(/&#(\d+);/g, function (m, n) { return String.fromCharCode(+n); });
}
function words(html) { return String(html).replace(/<[^>]+>/g, " ").replace(/\(\d+\)/g, " ").replace(/\s+/g, " ").trim().split(" ").filter(Boolean).length; }

/* ── a small HTML reader for the pack sources (p, blockquote, ul/ol/li, table, strong/em, span.n, br, sub/sup) ── */
function parse(html) {
  var rootN = { tag: "#root", kids: [], attrs: "" }, stack = [rootN], re = /<(\/?)([a-zA-Z0-9]+)([^>]*)>|([^<]+)/g, m;
  var VOID = { br: 1, hr: 1, img: 1 };
  while ((m = re.exec(String(html)))) {
    var top = stack[stack.length - 1];
    if (m[4] != null) { top.kids.push({ text: ent(m[4]) }); continue; }
    var tag = m[2].toLowerCase();
    if (m[1]) { for (var i = stack.length - 1; i > 0; i--) if (stack[i].tag === tag) { stack.length = i; break; } continue; }
    var n = { tag: tag, attrs: m[3] || "", kids: [] };
    top.kids.push(n);
    if (!VOID[tag] && !/\/\s*$/.test(m[3] || "")) stack.push(n);
  }
  return rootN;
}
function cls(n) { var m = /class="([^"]*)"/.exec(n.attrs || ""); return m ? m[1] : ""; }
/* inline runs from a node's children */
function runs(n, fmt, size) {
  fmt = fmt || {}; var out = [];
  (n.kids || []).forEach(function (k) {
    if (k.text != null) { var t = k.text.replace(/\s+/g, " "); if (t) out.push(new D.TextRun(Object.assign({ text: t, font: FONT, size: size || 21 }, fmt))); return; }
    var f = Object.assign({}, fmt);
    if (k.tag === "strong" || k.tag === "b" || k.tag === "th") f.bold = true;
    if (k.tag === "em" || k.tag === "i") f.italics = true;
    if (k.tag === "sub") f.subScript = true;
    if (k.tag === "sup") f.superScript = true;
    if (k.tag === "br") { out.push(new D.TextRun({ break: 1 })); return; }
    if (k.tag === "span" && /\bn\b/.test(cls(k))) { f.bold = true; f.color = GOLD; f.size = 17; }
    out = out.concat(runs(k, f, f.size || size));
  });
  return out;
}
function trimRuns(r) { return r.length ? r : [new D.TextRun({ text: "", font: FONT })]; }
/* block elements of a source */
function blocks(n, ctx) {
  ctx = ctx || {}; var out = [], inline = [];
  function flush() { if (inline.length) { out.push(para(inline, ctx)); inline = []; } }
  (n.kids || []).forEach(function (k) {
    if (k.text != null || /^(strong|b|em|i|span|sub|sup|br|a)$/.test(k.tag)) { inline = inline.concat(runs({ kids: [k] }, ctx.fmt)); return; }
    flush();
    if (k.tag === "p") {
      var src = /\bsrc\b/.test(cls(k));
      out.push(para(runs(k, src ? { italics: true, color: DIM } : ctx.fmt), Object.assign({}, ctx, src ? { align: D.AlignmentType.RIGHT } : {})));
    } else if (k.tag === "blockquote") {
      out = out.concat(blocks(k, Object.assign({}, ctx, { indent: (ctx.indent || 0) + 540, fmt: { italics: true } })));
    } else if (k.tag === "ul" || k.tag === "ol") {
      k.kids.filter(function (li) { return li.tag === "li"; }).forEach(function (li) {
        out.push(new D.Paragraph({ children: trimRuns(runs(li)), numbering: { reference: k.tag === "ol" ? "nums" : "bullets", level: 0 },
          spacing: { after: 40 }, indent: ctx.indent ? { left: ctx.indent + 360, hanging: 260 } : undefined }));
      });
    } else if (k.tag === "table") {
      out.push(table(k, ctx));
      out.push(new D.Paragraph({ children: [], spacing: { after: 60 } }));
    } else out = out.concat(blocks(k, ctx));
  });
  flush();
  return out;
}
function para(r, ctx) {
  return new D.Paragraph({ children: trimRuns(r), spacing: { after: 100, line: 276 }, alignment: ctx && ctx.align,
    indent: ctx && ctx.indent ? { left: ctx.indent, right: ctx.indent / 2 } : undefined });
}
function table(t, ctx) {
  var rows = [];
  (function walk(n) { (n.kids || []).forEach(function (k) { if (k.tag === "tr") rows.push(k); else if (k.tag) walk(k); }); })(t);
  var ncol = Math.max.apply(null, rows.map(function (r) { return r.kids.filter(function (c) { return c.tag === "td" || c.tag === "th"; }).length; }).concat([1]));
  var width = TEXT_W - (ctx.indent || 0) - 200, cw = Math.floor(width / ncol), widths = [];
  for (var i = 0; i < ncol; i++) widths.push(i === ncol - 1 ? width - cw * (ncol - 1) : cw);
  var border = { style: D.BorderStyle.SINGLE, size: 4, color: "999999" };
  return new D.Table({
    width: { size: width, type: D.WidthType.DXA }, columnWidths: widths, indent: { size: (ctx.indent || 0), type: D.WidthType.DXA },
    rows: rows.map(function (r) {
      var cells = r.kids.filter(function (c) { return c.tag === "td" || c.tag === "th"; });
      while (cells.length < ncol) cells.push({ tag: "td", kids: [] });
      return new D.TableRow({ children: cells.map(function (c, ci) {
        var head = c.tag === "th";
        return new D.TableCell({ width: { size: widths[ci], type: D.WidthType.DXA },
          borders: { top: border, bottom: border, left: border, right: border },
          shading: head ? { type: D.ShadingType.CLEAR, color: "auto", fill: "F2E7C9" } : undefined,
          margins: { top: 40, bottom: 40, left: 80, right: 80 },
          children: [new D.Paragraph({ children: trimRuns(runs(c, head ? { bold: true } : {}, 19)) })] });
      }) });
    })
  });
}

function txt(t, o) { return new D.TextRun(Object.assign({ text: String(t), font: FONT, size: 21 }, o || {})); }
function heading(t, level) { return new D.Paragraph({ heading: level, children: [new D.TextRun({ text: t, font: FONT })], spacing: { before: 240, after: 120 } }); }

function build(id) {
  var W = load(id), H = W.HEIST_COURSE, P = W.HEIST_PACKS, nq = 0;
  P.forEach(function (p) { nq += p.claims.length; });
  var units = H.families.filter(function (f) { return f.id !== "ALL"; });
  var ver = (fs.readFileSync(path.join(root, id + ".html"), "utf8").match(/<p class="ver">([^<]*)<\/p>/) || [0, ""])[1];
  var kids = [];
  /* the cover */
  kids.push(new D.Paragraph({ children: [txt("SOL Lab · " + H.name, { bold: true, size: 40, color: GOLD })], spacing: { before: 1200, after: 120 } }));
  kids.push(new D.Paragraph({ children: [txt("Question Pool", { bold: true, size: 56 })], spacing: { after: 240 } }));
  kids.push(new D.Paragraph({ children: [txt(H.title + " · " + H.grade + " · 2023 Virginia History and Social Science Standards of Learning", { size: 24, color: DIM })], spacing: { after: 240 } }));
  kids.push(new D.Paragraph({ children: [txt(P.length + " sources (packs) · " + nq + " questions · " + units.length + " units · game " + ent(ver), { size: 22 })], spacing: { after: 360 } }));
  ["Every question the game can ask, unit by unit, in the order a student meets them: level 1 packs (short sources) first, level 3 (long sources) last.",
   "Each pack is one source (the side panel in the game) with its questions. Sentence numbers in gold are the numbers the questions refer to.",
   "Each question shows its SOL code (standard and key concept). The correct answer is in bold green and marked ✔. A Select TWO question has two.",
   "Quotations marked (adapted) or (summary) are paraphrased; others are quoted from public-domain documents."].forEach(function (s) {
    kids.push(new D.Paragraph({ children: [txt(s)], numbering: { reference: "bullets", level: 0 }, spacing: { after: 80 } }));
  });
  /* the units table */
  kids.push(heading("Units", D.HeadingLevel.HEADING_2));
  var widths = [3400, 1700, 1300, 1300, TEXT_W - 7700], border = { style: D.BorderStyle.SINGLE, size: 4, color: "999999" };
  function cell(t, w, head) {
    return new D.TableCell({ width: { size: w, type: D.WidthType.DXA }, borders: { top: border, bottom: border, left: border, right: border },
      shading: head ? { type: D.ShadingType.CLEAR, color: "auto", fill: "F2E7C9" } : undefined, margins: { top: 40, bottom: 40, left: 80, right: 80 },
      children: [new D.Paragraph({ children: [txt(t, { bold: !!head, size: 19 })] })] });
  }
  var urows = [new D.TableRow({ tableHeader: true, children: ["Unit", "Standards", "Packs", "Questions", "Levels 1 / 2 / 3"].map(function (h, i) { return cell(h, widths[i], true); }) })];
  units.forEach(function (u) {
    var ps = P.filter(function (p) { return p.family === u.id; }), q = ps.reduce(function (a, p) { return a + p.claims.length; }, 0);
    var lv = [1, 2, 3].map(function (l) { return ps.filter(function (p) { return p.level === l; }).length; }).join(" / ");
    urows.push(new D.TableRow({ children: [u.label, u.kind, String(ps.length), String(q), lv].map(function (t, i) { return cell(t, widths[i]); }) }));
  });
  kids.push(new D.Table({ width: { size: TEXT_W, type: D.WidthType.DXA }, columnWidths: widths, rows: urows }));

  /* unit by unit */
  units.forEach(function (u) {
    var ps = P.filter(function (p) { return p.family === u.id; }).sort(function (a, b) { return (a.level - b.level) || (words(a.passage) - words(b.passage)); });
    kids.push(new D.Paragraph({ children: [new D.PageBreak()] }));
    kids.push(heading(u.label + " (" + u.kind + ")", D.HeadingLevel.HEADING_1));
    kids.push(new D.Paragraph({ children: [txt(u.meta, { italics: true, color: DIM })], spacing: { after: 120 } }));
    var stds = {};
    (u.stds || []).forEach(function (s) { stds[s] = H.standards[s]; });
    Object.keys(stds).forEach(function (s) {
      kids.push(new D.Paragraph({ children: [txt(s + " " + stds[s].name + ": ", { bold: true, size: 19 }),
        txt(Object.keys(stds[s].keys).map(function (L) { return L + ") " + stds[s].keys[L]; }).join("; "), { size: 19, color: DIM })], spacing: { after: 60 } }));
    });
    var qn = 0;
    ps.forEach(function (p) {
      kids.push(heading(p.title, D.HeadingLevel.HEADING_2));
      kids.push(new D.Paragraph({ children: [txt("Level " + p.level + " · " + words(p.passage) + " words · " + p.kind + (p.blurb ? " · " + ent(p.blurb) : ""), { size: 18, color: DIM })], spacing: { after: 100 } }));
      kids = kids.concat(blocks(parse(p.passage)));
      p.claims.forEach(function (c) {
        qn++;
        var keys = (Array.isArray(c.correct) ? c.correct : [c.correct]).map(String);
        kids.push(new D.Paragraph({ keepNext: true, spacing: { before: 140, after: 60 },
          children: [txt(qn + ". ", { bold: true }), txt(ent(c.stem), { bold: true }), txt("   " + c.sol + (keys.length > 1 ? " · Select TWO" : ""), { size: 17, color: GOLD })] }));
        c.choices.forEach(function (ch, i) {
          var ok = keys.indexOf(ch.letter) !== -1, t = ent(String(ch.text).replace(/<[^>]+>/g, ""));
          kids.push(new D.Paragraph({ keepNext: i < c.choices.length - 1, indent: { left: 540, hanging: 300 }, spacing: { after: 30 },
            children: [txt(ch.letter + ".  ", { bold: true, color: ok ? KEY : undefined }), txt(t, ok ? { bold: true, color: KEY } : {})].concat(ok ? [txt("  ✔", { bold: true, color: KEY })] : []) }));
        });
      });
    });
  });

  var doc = new D.Document({
    creator: "SOL Lab", title: "SOL Lab · " + H.name + " · Question Pool",
    styles: {
      default: { document: { run: { font: FONT, size: 21 } } },
      paragraphStyles: [
        { id: "Heading1", name: "Heading 1", basedOn: "Normal", next: "Normal", quickFormat: true, run: { size: 34, bold: true, font: FONT, color: "2B2B2B" }, paragraph: { spacing: { before: 240, after: 120 }, outlineLevel: 0 } },
        { id: "Heading2", name: "Heading 2", basedOn: "Normal", next: "Normal", quickFormat: true, run: { size: 26, bold: true, font: FONT, color: GOLD }, paragraph: { spacing: { before: 280, after: 60 }, outlineLevel: 1, keepNext: true } }
      ]
    },
    numbering: { config: [
      { reference: "bullets", levels: [{ level: 0, format: D.LevelFormat.BULLET, text: "•", alignment: D.AlignmentType.LEFT, style: { paragraph: { indent: { left: 540, hanging: 260 } } } }] },
      { reference: "nums", levels: [{ level: 0, format: D.LevelFormat.DECIMAL, text: "%1.", alignment: D.AlignmentType.LEFT, style: { paragraph: { indent: { left: 540, hanging: 300 } } } }] }
    ] },
    sections: [{
      properties: { page: { size: { width: PAGE_W, height: 15840 }, margin: { top: MARGIN, bottom: MARGIN, left: MARGIN, right: MARGIN } } },
      footers: { default: new D.Footer({ children: [new D.Paragraph({ alignment: D.AlignmentType.CENTER, children: [txt("SOL Lab · " + H.name + " · Question Pool · page ", { size: 16, color: DIM }), new D.TextRun({ children: [D.PageNumber.CURRENT], size: 16, color: DIM, font: FONT })] })] }) },
      children: kids
    }]
  });
  var outDir = path.join(root, "dist", "questions");
  fs.mkdirSync(outDir, { recursive: true });
  var out = path.join(outDir, "SOL Lab VA " + id + " - Question Pool.docx");
  return D.Packer.toBuffer(doc).then(function (buf) { fs.writeFileSync(out, buf); console.log(path.relative(root, out) + ": " + P.length + " packs, " + nq + " questions, " + (buf.length / 1024).toFixed(0) + " KB"); });
}

var want = process.argv.slice(2).map(function (x) { return x.toUpperCase(); });
(want.length ? want : COURSES).reduce(function (p, id) { return p.then(function () { return build(id); }); }, Promise.resolve())
  .catch(function (e) { console.error(e); process.exit(1); });
