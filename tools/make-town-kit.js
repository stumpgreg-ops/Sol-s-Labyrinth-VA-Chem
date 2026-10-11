#!/usr/bin/env node
/* History 1.1 (engine): the Town builds with the same 3D models as the Castle.
     node tools/make-town-kit.js      (after tools/make-castle-kit.py, which writes the castle's kit pieces)
   Rewrites the "village" theme in assets/build/pieces.json as a kit theme like the castle (cells, the 3D view of
   js/build3d.js, pieces that turn with the map by the degree, a core that grows a storey, a fence that goes up round
   the town at the wall level). Its pieces are the castle's own kit pieces (the same models), chosen for a town:
     - the Town's old piece ids stay (cottage, tavern, town-hall, well, fence, …), so a town saved before keeps its
       pieces and an old progress code still restores it; each now draws with the matching 3D model;
     - the three cores (cottage, stone-cottage, house) are stacks of the town kit's walls and roofs that grow a storey
       at each growAt, like the castle keep;
     - the rest of the castle's town-like pieces (houses, market, mills, props, trees, flowers, statues, animals,
       people) come over under their castle ids. Towers, castle walls, siege engines and flags stay castle-only.
   js/build.js migrates an old (2D, lot-based) town to the kit once: styles tile/slate/thatch become red/blue/gold and
   the pieces are laid out again on the cells. */
var fs = require("fs"), path = require("path");
var file = path.join(__dirname, "..", "assets", "build", "pieces.json");
var data = JSON.parse(fs.readFileSync(file, "utf8"));
var castle = {};
data.pieces.forEach(function (p) { if (p.theme === "castle") castle[p.id] = p; });
var C = data.themes.castle;
if (!C || !C.kit) throw new Error("tools/make-town-kit.js: the castle theme is not a kit theme (run tools/make-castle-kit.py first)");

/* the Town's own ids, each drawn as a castle kit piece (name and description stay the Town's) */
var OLD = {};
data.pieces.forEach(function (p) { if (p.theme === "village") OLD[p.id] = p; });
var REUSE = {
  stall: "stall-red", steps: "stone-stairs", "cottage-wing": "k-home-a", "stone-wing": "c-cottage", "house-wing": "k-home-b",
  "lamp-path": "lamp-post", bakery: "stone-hall", dock: "planks", chapel: "c-chapel", arch: "stone-ring", tavern: "c-tavern",
  windmill: "c-windmill", watermill: "k-watermill", square: "fountain", harbour: "k-shipyard", manor: "c-manor",
  "town-hall": "k-townhall", "bell-tower": "k-church", "grand-mill": "k-windmill", fence: "c-fence", well: "k-well",
  lamp: "lantern", barrels: "k-barrels", crates: "k-crates", "hay-cart": "c-hay-cart", "barrel-cart": "k-cart",
  haystacks: "k-hay", cobbles: "stone-path", signpost: "well-sign"
};
/* the three cores grow like the castle keep (one stack per growAt stage) */
var W = "t_wallBlock_NE", WW = "t_wallWoodBlock_NE";
var CORES = {
  cottage: [[W, "t_roofGable_NE"], [W, "t_roofHighGable_NE"], [W, W, "t_roofGable_NE"], [W, W, "t_roofHighWindow_NE"]],
  "stone-cottage": [[W, "t_roofPoint_NE"], [W, "t_roofHighPoint_NE"], [W, W, "t_roofPoint_NE"], [W, W, "t_roofHighPoint_NE"]],
  house: [[WW, "t_roof_NE"], [WW, "t_roofHigh_NE"], [WW, WW, "t_roof_NE"], [WW, WW, "t_roofHigh_NE"]]
};
/* castle pieces that stay castle-only */
var SKIP = { "k-castle": 1, "k-barracks": 1, "k-archery": 1, ballista: 1, catapult: 1, ram: 1, trebuchet: 1, "siege-tower": 1,
  "k-target": 1, "k-weapons": 1, "k-cannonballs": 1, "k-catapult": 1, "k-cannon": 1, "k-soldier": 1, "k-flag": 1, "k-warhorse": 1, "k-mine": 1 };
var TOWN_CATS = { house: 1, village: 1, nature: 1, statue: 1, animal: 1, people: 1 };

function copy(o) { return JSON.parse(JSON.stringify(o)); }
var out = [], used = {};
Object.keys(CORES).forEach(function (id) {
  var o = OLD[id] || {};
  out.push({ id: id, theme: "village", name: o.name || id, role: "core", kind: "core", tier: 1, price: 80, score: 40, cells: 1, cat: "core",
    desc: (o.desc || "Your first building.") + " It grows a storey as your town grows.", parts: CORES[id][0], grow: CORES[id], img: "", nostyle: false });
});
Object.keys(REUSE).forEach(function (id) {
  var src = castle[REUSE[id]], o = OLD[id] || {};
  if (!src) throw new Error("tools/make-town-kit.js: no castle piece " + REUSE[id] + " for the town's " + id);
  var p = copy(src); p.id = id; p.theme = "village"; p.name = o.name || p.name; if (o.desc) p.desc = o.desc;
  out.push(p); used[REUSE[id]] = 1;
});
Object.keys(castle).forEach(function (cid) {
  var src = castle[cid];
  if (used[cid] || SKIP[cid] || !TOWN_CATS[src.cat] || src.role === "core") return;
  var p = copy(src); p.theme = "village"; out.push(p);
});
/* a town's first rewards are buildings (the castle's first are towers and gates, so its buildings start at tier 2):
   the town's buildings move down one tier, homes and huts first, the big halls later */
out.forEach(function (p) { if (p.role === "module") p.tier = Math.max(1, (p.tier || 1) - 1); });
var ids = {};
out.forEach(function (p) { if (ids[p.id]) throw new Error("tools/make-town-kit.js: two town pieces " + p.id); ids[p.id] = 1; });

/* the theme: the castle's kit settings, the town's own name, tabs, colours, ranks, packs and fence */
function remap(items) { var back = {}; Object.keys(REUSE).forEach(function (k) { back[REUSE[k]] = k; }); return items.map(function (i) { return back[i] || i; }); }
var packs = (C.packs || []).filter(function (pk) { return ["garden", "farm", "village", "monuments", "town", "mills"].indexOf(pk.id) !== -1; }).map(function (pk) {
  var q = copy(pk); q.items = remap(q.items); return q;
});
packs.forEach(function (pk) { pk.items.forEach(function (i) { if (!ids[i]) throw new Error("tools/make-town-kit.js: pack " + pk.id + " names " + i + ", not a town piece"); }); });
data.themes.village = {
  name: "Town",
  desc: "A cottage that grows into a whole town in 3D: houses, a market, mills, a church, gardens and a fence that goes up around it.",
  kit: true, cell: C.cell, cellH: C.cellH, unitPx: C.unitPx, drawScale: C.drawScale, wallLevel: C.wallLevel, growAt: C.growAt.slice(),
  autoWall: { wall: "fence", gate: "fence-gate" },
  ranks: [[0, "Hamlet"], [120, "Village"], [300, "Market town"], [600, "Town"], [1000, "Borough"], [1600, "City"], [2400, "Capital"]],
  tabs: [["core", "Your home"], ["house", "Buildings"], ["village", "Market & yard"], ["nature", "Nature"], ["statue", "Monuments"], ["animal", "Animals"], ["people", "People"]],
  styles: [
    { id: "red", name: "Red Roofs", desc: "Red roofs, banners and trim.", dir: "red/", pairs: ["gold"] },
    { id: "blue", name: "Blue Roofs", desc: "Blue roofs, banners and trim.", dir: "", pairs: ["gold"] },
    { id: "green", name: "Green Roofs", desc: "Green roofs, banners and trim.", dir: "green/", pairs: ["blue"] },
    { id: "gold", name: "Gold Roofs", desc: "Gold roofs, banners and trim.", dir: "gold/", pairs: ["red"] }
  ],
  packs: packs
};
var tabs = {};
data.themes.village.tabs.forEach(function (t) { tabs[t[0]] = 1; });
out.forEach(function (p) { if (!tabs[p.cat]) throw new Error("tools/make-town-kit.js: " + p.id + " is in tab " + p.cat + ", which the town does not have"); });
data.pieces = data.pieces.filter(function (p) { return p.theme !== "village"; }).concat(out);
fs.writeFileSync(file, JSON.stringify(data, null, 1));
var by = {};
out.forEach(function (p) { by[p.cat] = (by[p.cat] || 0) + 1; });
console.log("Town kit: " + out.length + " pieces (" + Object.keys(by).map(function (k) { return k + " " + by[k]; }).join(", ") + "), " + packs.length + " packs");
