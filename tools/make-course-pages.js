/* History 1.0: write the play page of each history course from index.html (the Chemistry page):
     node tools/make-course-pages.js            -> WHI.html, WHII.html, VUS.html, GOVT.html and teacher/<ID>.html
     node tools/make-course-pages.js WHI        -> one course
   The engine, the assets and the page markup are shared with the Chemistry game; a course page differs only in its
   title, its unit cards (from courses/<ID>/course.js), the words "sources" for "lab notes", its scripts (the course
   file before js/content.js, then the course's pack files from courses/<ID>/units.json in place of js/content2-6.js)
   and a small script that gives the course's saves their own prefix in localStorage, so a student's World History I
   level, town and progress never mix with Chemistry's or another course's on the same site (GitHub Pages serves
   every page of the repository from one origin). The Canvas and Apps Script builds set their own prefix instead
   (tools/appsscript/loader.js canvasStorage), and the shim then stands down. Run it after editing index.html or a
   course.js, and commit the pages: they are what GitHub Pages serves. */
var fs = require("fs"), path = require("path"), vm = require("vm");
var root = path.join(__dirname, "..");
var VERSION = "1.0.0";
var COURSES = ["WHI", "WHII", "VUS", "GOVT"];

function esc(s) { return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"); }
function loadCourse(id) {
  var w = {};
  vm.runInNewContext(fs.readFileSync(path.join(root, "courses", id, "course.js"), "utf8"), { window: w });
  if (!w.HEIST_COURSE || w.HEIST_COURSE.tag !== id) throw new Error("courses/" + id + "/course.js: HEIST_COURSE.tag is not " + id);
  return w.HEIST_COURSE;
}
function units(id) { return JSON.parse(fs.readFileSync(path.join(root, "courses", id, "units.json"), "utf8")); }
function engineVersion(html) { var m = /engine ([0-9.]+)/.exec(html); return m ? m[1] : "?"; }

function replaceOnce(s, a, b, what) {
  var i = s.indexOf(a);
  if (i < 0) throw new Error("tools/make-course-pages.js: index.html has no " + (what || JSON.stringify(a.slice(0, 60))));
  return s.slice(0, i) + b + s.slice(i + a.length);
}

function page(id) {
  var H = loadCourse(id), src = fs.readFileSync(path.join(root, "index.html"), "utf8"), s = src;
  var name = H.name || ("Virginia " + H.short), eng = engineVersion(src);
  var stds = H.families[0].stds, range = stds[0] + "–" + stds[stds.length - 1];
  s = s.replace(/<title>[^<]*<\/title>/, "<title>SOL Lab · " + esc(name) + "</title>");
  s = s.replace(/<script>window\.SOL_STATE = "VA";<\/script>/, function () {
    return "<script>window.SOL_STATE = \"VA\";\n" +
      "  /* History 1.0: this course's saves get their own prefix (tools/make-course-pages.js) */\n" +
      "  (function () {\n" +
      "    if (window.__solStorePrefix) return;\n" +
      "    var prefix = \"solLab." + id.toLowerCase() + ":\"; window.__solStorePrefix = prefix;\n" +
      "    try {\n" +
      "      var S = Storage.prototype, get = S.getItem, set = S.setItem, rem = S.removeItem, keyAt = S.key;\n" +
      "      var mine = function (st) { try { return st === window.localStorage; } catch (e) { return false; } };\n" +
      "      S.getItem = function (k) { return get.call(this, mine(this) ? prefix + k : k); };\n" +
      "      S.setItem = function (k, v) { return set.call(this, mine(this) ? prefix + k : k, v); };\n" +
      "      S.removeItem = function (k) { return rem.call(this, mine(this) ? prefix + k : k); };\n" +
      "      S.key = function (i) { var k = keyAt.call(this, i); return mine(this) && k && k.indexOf(prefix) === 0 ? k.slice(prefix.length) : k; };\n" +
      "    } catch (e) {}\n" +
      "  })();</script>";
  });
  if (s.indexOf("__solStorePrefix") < 0) throw new Error("tools/make-course-pages.js: index.html has no SOL_STATE script");
  s = s.replace(/<p class="kicker" id="title-kicker">[^<]*<\/p>/, '<p class="kicker" id="title-kicker">' + esc(H.kicker) + "</p>");
  s = s.replace(/alt="Sol's Labyrinth — SOL Lab, Virginia EOC Chemistry"/, 'alt="Sol\'s Labyrinth — SOL Lab, ' + esc(name) + '"');
  s = s.replace(/<p class="ver">[^<]*<\/p>/, '<p class="ver">v' + VERSION + " · " + esc(H.short) + " · engine " + eng + "</p>");
  s = s.split("Read the lab notes in the side panel.").join("Read the sources in the side panel.");
  s = s.replace('aria-label="Read the lab notes"', 'aria-label="Read the sources"');
  s = s.replace('<h2 id="read-title">Lab notes</h2>', '<h2 id="read-title">Sources</h2>');
  s = s.replace(/<p class="sol" id="job-sol">SOL · [^<]*<\/p>/, '<p class="sol" id="job-sol">SOL · ' + stds[0] + ".a</p>");

  /* the unit cards */
  var open = '<div class="packs unit-packs">', a = s.indexOf(open), b = s.indexOf("</div>", s.lastIndexOf("</button>", s.indexOf('<div class="row title-tools">')));
  if (a < 0 || b < 0) throw new Error("tools/make-course-pages.js: no unit cards in index.html");
  var cards = H.families.map(function (f, i) {
    return '        <button type="button" class="card' + (i === 0 ? " selected" : "") + '" data-family="' + f.id + '">\n' +
      '          <span class="kind">' + esc(f.kind) + "</span>\n" +
      '          <span class="name">' + esc(f.label) + "</span>\n" +
      '          <span class="meta">' + esc(f.meta) + "</span>\n" +
      "        </button>";
  }).join("\n");
  s = s.slice(0, a) + open + "\n" + cards + "\n      " + s.slice(b);

  /* the how-to: the course's standards in place of Chemistry's */
  s = s.replace(/Questions follow the Virginia Chemistry Standards of Learning[\s\S]*?EOC Chemistry SOL test\./,
    "Questions follow the 2023 Virginia History and Social Science Standards of Learning for " + esc(H.title) + " (" + range + ").");
  if (/Chemistry|lab notes|CH\.\d/.test(s.replace(/<!--[\s\S]*?-->/g, ""))) {
    var left = (s.match(/.{0,40}(Chemistry|lab notes|CH\.\d).{0,40}/) || [""])[0];
    throw new Error("tools/make-course-pages.js: " + id + " page still says: " + left);
  }

  /* the scripts: the course file, the engine's content.js, then the course's packs */
  var v = "?v=" + VERSION;
  s = s.replace(/\?v=[0-9.]+/g, v);
  var first = s.indexOf('<script src="js/content.js'), last = s.lastIndexOf('<script src="js/content');
  var lastEnd = s.indexOf("</script>", last) + "</script>".length;
  if (first < 0 || last < 0) throw new Error("tools/make-course-pages.js: no content scripts in index.html");
  var tags = ['<script src="courses/' + id + '/course.js' + v + '"></script>', '<script src="js/content.js' + v + '"></script>']
    .concat(units(id).map(function (f) { return '<script src="courses/' + id + "/" + f + v + '"></script>'; }));
  s = s.slice(0, first) + tags.join("\n  ") + s.slice(lastEnd);
  return s;
}

function main() {
var want = process.argv.slice(2).map(function (x) { return x.toUpperCase(); });
(want.length ? want : COURSES).forEach(function (id) {
  if (COURSES.indexOf(id) < 0) throw new Error("tools/make-course-pages.js: no course " + id);
  var html = page(id);
  fs.writeFileSync(path.join(root, id + ".html"), html);
  /* the Teacher screen inside the game reads teacher/<ID>.html (js/teacher-screen.js) */
  fs.mkdirSync(path.join(root, "teacher"), { recursive: true });
  fs.writeFileSync(path.join(root, "teacher", id + ".html"), require("./build-teacher").build(id, VERSION));
  console.log("wrote " + id + ".html and teacher/" + id + ".html");
});
}
if (require.main === module) main();
module.exports = { page: page, COURSES: COURSES, VERSION: VERSION };
