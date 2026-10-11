#!/usr/bin/env node
/* Chemistry 1.6: the Town is built from the castle's 3D models.   node tools/make-town-kit.js

   Rewrites the "village" theme in assets/build/pieces.json as a kit theme, like the castle: every piece is a stack of
   the castle kit's parts, so js/build3d.js draws it with the same 3D models (KayKit and Kenney, assets/build/models)
   and it turns with the view by the degree, instead of the one flat picture per piece the Town used to have.

   The Town's 32 pieces keep their ids (saved towns, build codes, progress codes and the maze perks name them) and get
   3D parts; the castle's town-style buildings, market and yard props, fences and hedges, trees, statues, animals and
   Fenrir's monuments are added under the same ids as the castle's, so a piece is the same model in both. Styles keep
   their ids (tile, slate, thatch) and recolour the models like the castle's colours do. Run it again after changing
   the castle's pieces; it only touches the village theme and its pieces. */
var fs = require("fs"), path = require("path");
var file = path.join(__dirname, "..", "assets", "build", "pieces.json");
var data = JSON.parse(fs.readFileSync(file, "utf8"));
var castle = {}; data.pieces.forEach(function (p) { if (p.theme === "castle") castle[p.id] = p; });

var W = "t_wallBlock_NE", WOOD = "t_wallWoodBlock_NE";
/* the Town's own pieces: id → [name, role, kind, cat, tier, price, cells, parts | {grow} | {auto}, desc] */
var OWN = [
  ["cottage", "Cottage", "core", "core", "core", 1, 40, 1, { grow: [[WOOD, "t_roofGable_NE"], [W, "t_roofGable_NE"], [W, WOOD, "t_roofHighGable_NE"], [W, W, "t_roofHighWindow_NE"]] },
    "A snug timber cottage. It grows a storey as your town grows."],
  ["stone-cottage", "Stone cottage", "core", "core", "core", 1, 40, 1, { grow: [[W, "t_roof_NE"], [W, "t_roofHigh_NE"], [W, W, "t_roofHigh_NE"], [W, W, "t_roofHighPoint_NE"]] },
    "Thick stone walls and a low roof. It grows a storey as your town grows."],
  ["house", "Two-storey house", "core", "core", "core", 1, 40, 1, { grow: [[W, WOOD, "t_roofHighGable_NE"], [W, WOOD, "t_roofHighWindow_NE"], [W, W, "t_roofHighWindow_NE"], [W, W, WOOD, "t_roofHighWindow_NE"]] },
    "Windows upstairs and a tall roof. It grows a storey as your town grows."],
  ["cottage-wing", "Cottage", "module", "house", "house", 1, 40, 1, [WOOD, "t_roofGable_NE"], "A second timber cottage for the lane."],
  ["stone-wing", "Stone house", "module", "house", "house", 1, 40, 1, [W, "t_roof_NE"], "A stone house with a low roof."],
  ["house-wing", "Gabled house", "module", "house", "house", 2, 80, 1, ["k_home_B_NE"], "A neat house with a gable and a chimney."],
  ["bakery", "Bakery", "module", "house", "house", 2, 80, 1, [W, "t_roofPoint_NE"], "A stone bakery under a pointed roof. Fresh bread every morning."],
  ["chapel", "Chapel", "module", "house", "house", 2, 80, 1, [W, W, "t_roofHighPoint_NE"], "A tall stone chapel with a steep roof."],
  ["arch", "Stone arch", "module", "house", "house", 2, 80, 1, ["towerSquareArch_NE"], "A grand stone gate into the town."],
  ["tavern", "Tavern", "module", "house", "house", 3, 140, 1, ["k_tavern_NE"], "A sign, a lamp and a warm door."],
  ["windmill", "Windmill", "module", "house", "house", 3, 140, 1, ["k_windmill_NE"], "Sails turning over the fields."],
  ["watermill", "Watermill", "module", "house", "house", 3, 140, 1, ["k_watermill_NE"], "A wheel turned by the stream."],
  ["square", "Market square", "module", "house", "house", 3, 140, 2, ["k_market_NE"], "A covered market with stalls all round. Two cells wide."],
  ["harbour", "Harbour", "module", "house", "house", 3, 140, 2, ["k_shipyard_NE"], "A boat shed and a slipway on the water. Two cells wide."],
  ["manor", "Manor house", "module", "house", "house", 4, 220, 1, [W, W, "t_roofHighWindow_NE"], "Two storeys of stone under a windowed roof."],
  ["town-hall", "Town hall", "module", "house", "house", 4, 220, 2, ["k_townhall_NE"], "Steps, a clock and an ornate door. Two cells wide."],
  ["bell-tower", "Bell tower", "module", "tower", "house", 4, 220, 1, ["towerSquareBase_NE", "towerSquareMidOpen_NE", "towerSquareTopRoofHigh_NE"], "An open belfry: the tallest thing in town."],
  ["grand-mill", "Grand windmill", "module", "house", "house", 4, 220, 1, [W, W, "t_windmill_NE"], "A stone mill with huge sails."],
  ["fence", "Picket fence", "module", "wall", "wall", 1, 10, 1, { auto: castle["c-fence"].auto }, "Joins the fences beside it and turns corners by itself."],
  ["stall", "Market stall", "deco", "prop", "village", 1, 40, 1, ["t_stallRed_NE"], "A striped canopy and goods to sell."],
  ["steps", "Stone steps", "deco", "prop", "village", 1, 40, 1, ["stairsStone_NE"], "A short flight of stone steps."],
  ["lamp-path", "Double lamp", "deco", "prop", "village", 2, 80, 1, ["g_lightpostDouble_NE"], "Two lamps on one post to light the lane."],
  ["dock", "Boat dock", "deco", "prop", "village", 2, 80, 1, ["n_bridge_wood_NE"], "A wooden landing on the water."],
  ["well", "Village well", "deco", "prop", "village", 1, 30, 1, ["k_well_NE"], "Fresh water in the yard."],
  ["lamp", "Street lamp", "deco", "prop", "village", 1, 15, 1, ["g_lightpostSingle_NE"], "A little light for the path."],
  ["barrels", "Barrel stack", "deco", "prop", "village", 1, 15, 1, ["k_barrels_NE"], "Barrels by the door."],
  ["crates", "Crates", "deco", "prop", "village", 1, 20, 1, ["k_crates_NE"], "Supplies for the household."],
  ["hay-cart", "Hay cart", "deco", "prop", "village", 1, 25, 1, ["t_cartHigh_NE"], "A farmer's cart full of hay."],
  ["barrel-cart", "Merchant cart", "deco", "prop", "village", 1, 25, 1, ["k_merchant_cart_NE"], "Goods bound for market."],
  ["haystacks", "Hay bales", "deco", "prop", "village", 1, 20, 1, ["k_haybales_NE"], "Harvest piled high."],
  ["cobbles", "Stone path", "deco", "prop", "village", 1, 20, 1, ["n_path_stone_NE"], "Stepping stones across the yard."],
  ["signpost", "Sign post", "deco", "prop", "village", 1, 15, 1, ["n_sign_NE"], "Which way to the market?"]
];
/* castle pieces the Town shares (same id, same model); cat moves a piece to a Town tab */
var SHARED = [
  "hut", "stable", "barn", "stone-hall", "k-home-a", "k-home-b", "k-blacksmith", "k-lumbermill", "k-stables", "k-workshop", "k-mine", "k-church", "k-shrine",
  "fence-gate", "hedge", "hedge-gate", "rail-fence",
  "stall-green", "cart", "lantern", "bench", "waterwheel", "planks", "campfire", "tent", "log-pile", "pot", "glass-lantern",
  "k-site", "k-stage", "k-platform", "k-supplies", "k-wheelbarrow", "k-trough", "k-bucket", "k-pallet", "k-cart",
  "wheat", "pumpkins", "k-grain", "oak", "pine", "round-pine", "autumn-tree", "tall-tree", "small-tree", "fir", "tall-fir", "poplar", "bush", "bushes",
  "flowers-red", "flowers-yellow", "flowers-purple", "flowers-mixed", "mushrooms", "tan-mushrooms", "boulder", "rocks", "tall-rock", "crag", "stump",
  "lily-pads", "k-tree-a", "k-tree-b", "k-grove-a", "k-grove-b", "k-rock", "k-stones",
  "fountain", "pool", "urn", "obelisk", "column", "great-column", "stone-head", "stone-ring", "pedestal", "knight-statue", "king-statue", "stone-pillar", "small-obelisk",
  "cow", "horse", "pig", "goat", "chicken", "dog", "rabbit", "duck", "owl",
  "knight", "king"
].concat(Object.keys(castle).filter(function (id) { return castle[id].boss; }));
var CAT = { "fence-gate": "wall", hedge: "wall", "hedge-gate": "wall", "rail-fence": "wall" };

var town = OWN.map(function (o) {
  var p = { id: o[0], theme: "village", name: o[1], desc: o[9], role: o[2], kind: o[3], tier: o[5], price: o[6], cells: o[7], cat: o[4] };
  var g = o[8];
  if (Array.isArray(g)) p.parts = g;
  else if (g.grow) { p.parts = g.grow[0]; p.grow = g.grow; }
  else if (g.auto) p.auto = g.auto;
  p.img = ""; p.nostyle = p.role === "deco";
  return p;
});
SHARED.forEach(function (id) {
  var c = castle[id];
  if (!c) throw new Error("tools/make-town-kit.js: the castle has no piece " + id);
  var p = JSON.parse(JSON.stringify(c)); p.theme = "village"; if (CAT[id]) p.cat = CAT[id];
  town.push(p);
});
/* every stacked part is a sprite the castle kit has (and so a model in models.json, or a box or upright sprite like the castle's) */
var have = data.kit.sprites;
town.forEach(function (p) {
  var names = [].concat(p.parts || [], [].concat.apply([], p.grow || []));
  /* (fences, hedges and walls are 3D boxes laid out by js/build3d.js, so their auto names need no model) */
  [].concat.apply([], names).forEach(function (n) { if (!have[n]) throw new Error("tools/make-town-kit.js: " + p.id + " uses " + n + ", which the castle kit lacks"); });
});

var old = data.themes.village;
data.themes.village = {
  name: "Town", desc: "A cottage that grows into a whole town: houses, a market, mills, a church and a harbour, all in 3D.",
  kit: true, cell: 151, cellH: 87.2, unitPx: 1, drawScale: 1, wallLevel: 8, growAt: [1, 4, 8, 13],
  autoWall: ["fence", "fence-gate"],
  wallsMsg: "A picket fence went up around your town — drag any fence to reshape it!",
  grewMsg: "Your home grew a storey",
  decoMsg: "Market stalls, carts, trees, flowers, statues and animals go anywhere on the field.",
  tabs: [["core", "Home"], ["house", "Buildings"], ["village", "Market & yard"], ["wall", "Fences & hedges"], ["nature", "Nature"], ["statue", "Statues & fountains"], ["animal", "Animals"], ["people", "People"]],
  styles: [
    { id: "tile", name: "Red Tile", desc: "Red roofs, doors and trim.", dir: "red/", pairs: ["thatch"] },
    { id: "slate", name: "Slate", desc: "Blue slate roofs, doors and trim.", dir: "", pairs: ["tile"] },
    { id: "thatch", name: "Golden Thatch", desc: "Golden roofs, doors and trim.", dir: "gold/", pairs: ["slate"] }
  ],
  ranks: [[0, "Homestead"], [120, "Hamlet"], [300, "Village"], [600, "Town"], [1000, "Market Town"], [1600, "City"], [2400, "Capital"]],
  packs: [
    { id: "fences", name: "Fence pack", desc: "Four picket fences, 25% off. They turn corners by themselves.", items: ["fence", "fence", "fence", "fence"], discount: 0.25 },
    { id: "homes", name: "Homes pack", desc: "Two houses, a cottage and a well, 20% off.", items: ["k-home-a", "k-home-b", "cottage-wing", "well"], discount: 0.2 },
    { id: "market", name: "Market pack", desc: "The market square, two stalls, a cart and barrels, 20% off.", items: ["square", "stall", "stall-green", "cart", "barrels"], discount: 0.2 },
    { id: "mills", name: "Mill pack", desc: "A windmill, a watermill and a lumber mill, 15% off.", items: ["windmill", "watermill", "k-lumbermill"], discount: 0.15 },
    { id: "farm", name: "Farm pack", desc: "A stable, a rail fence, a cow, a horse and a chicken, 20% off.", items: ["stable", "rail-fence", "cow", "horse", "chicken"], discount: 0.2 },
    { id: "harbour", name: "Harbour pack", desc: "The harbour, a dock, crates and a lantern, 15% off.", items: ["harbour", "dock", "crates", "lantern"], discount: 0.15 },
    { id: "garden", name: "Garden pack", desc: "Flowers, an oak, bushes and a hedge, 25% off.", items: ["flowers-mixed", "flowers-red", "oak", "bushes", "hedge"], discount: 0.25 },
    { id: "monuments", name: "Monument pack", desc: "A fountain, an obelisk, a column and a knight statue, 20% off.", items: ["fountain", "obelisk", "column", "knight-statue"], discount: 0.2 }
  ]
};
data.themes.village.packs.forEach(function (pk) { pk.items.forEach(function (id) { if (!town.some(function (p) { return p.id === id; })) throw new Error("pack " + pk.id + ": no town piece " + id); }); });

var ids = {}; town.forEach(function (p) { if (ids[p.id]) throw new Error("duplicate town piece " + p.id); ids[p.id] = 1; });
data.pieces = town.concat(data.pieces.filter(function (p) { return p.theme !== "village"; }));
fs.writeFileSync(file, JSON.stringify(data, null, 1) + (fs.readFileSync(file, "utf8").slice(-1) === "\n" ? "\n" : ""));
console.log("assets/build/pieces.json: the Town is a kit theme with " + town.length + " pieces (" + OWN.length + " of its own, " + SHARED.length +
  " shared with the castle); was " + (old.kit ? "already a kit theme" : "flat pictures"));
