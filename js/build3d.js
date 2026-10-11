/* SOL Labyrinth — castle and town builder, the 3D view (v5.5; the Town in 3D since v6.1)
   Draws the castle's pieces with WebGL (three.js, js/vendor/three.min.js) instead of sprites, so every building,
   tower, prop and wall turns with the map by the degree: sprites only exist facing four ways, so between the
   quarter turns of the view a building sat still while its footprint turned under it.

   The camera is the builder's own isometric projection (true isometric: elevation atan(1/√2), a cell 151 px wide
   and 87.2 px tall at scale 1, +x down-right and +y down-left at view angle 0) with the same fit, zoom and pan as
   the 2D canvas, so the 2D layer underneath (sky, ground, footprints) and the hit tests in build.js line up with it
   exactly. Buildings are the kits' models (assets/build/models, packed by tools/pack-models.js), walls, gates,
   hedges and fences are boxes (the same plan as the 2D drawRun), and pieces whose kit has no model (trees, flowers,
   animals, statues from the nature and graveyard kits) stand upright as sprites facing the view. If WebGL, three.js
   or the models are missing the builder keeps its 2D drawing (SolBuild3D.ready() is false). */
(function () {
  "use strict";
  var api = null, R = null, models = null, modelsState = "idle", loads = {}, sprites = {}, THREE = null;
  var EL = Math.atan(Math.SQRT1_2), SQ2 = Math.SQRT2;
  var HUES = { "red/": [355, 1.05, 1.0], "green/": [128, 0.9, 0.95], "gold/": [44, 1.1, 1.08] };   /* the castle kit's blue accents, per style (tools/make-castle-kit.py COLORS) */
  var STONE = 0x9aa0ac;

  function webgl() { try { var c = document.createElement("canvas"); return !!(c.getContext("webgl2") || c.getContext("webgl")); } catch (e) { return false; } }
  /* the builder asks this every redraw: true once three.js, WebGL and the model list are all there */
  function ready() {
    if (modelsState === "idle" && api) loadModels();
    return modelsState === "ok" && !!THREE;
  }
  function init(a) { api = a; THREE = window.THREE || null; if (!THREE || !webgl()) { modelsState = "fail"; return; } loadModels(); }
  function loadModels() {
    if (modelsState !== "idle") return;
    modelsState = "loading";
    var done = function (j) { models = j; modelsState = "ok"; api.redraw(); }, fail = function () { modelsState = "fail"; api.redraw(); };
    try {
      if (window.fetch) fetch(api.modelsUrl, { cache: "no-cache" }).then(function (r) { if (!r.ok) throw new Error(r.status); return r.json(); }).then(done).catch(fail);
      else { var x = new XMLHttpRequest(); x.open("GET", api.modelsUrl); x.onload = function () { try { done(JSON.parse(x.responseText)); } catch (e) { fail(); } }; x.onerror = fail; x.send(); }
    } catch (e) { fail(); }
  }

  /* ── renderer, camera, lights ────────────────────────────────────────────── */
  function ensure(canvas, W, H, dpr) {
    if (R && R.canvas !== canvas) dispose();
    if (!R) {
      R = { canvas: canvas, pieces: {}, gen: 0 };
      R.renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true, antialias: true, powerPreference: "low-power" });
      R.renderer.setClearColor(0x000000, 0); R.renderer.outputColorSpace = THREE.SRGBColorSpace;
      R.scene = new THREE.Scene();
      R.cam = new THREE.OrthographicCamera(-1, 1, 1, -1, -400, 400);
      R.amb = new THREE.AmbientLight(0xffffff, 1.55); R.sun = new THREE.DirectionalLight(0xffffff, 2.3);
      R.scene.add(R.amb); R.scene.add(R.sun); R.scene.add(R.sun.target);
      R.group = new THREE.Group(); R.scene.add(R.group);
      /* one instanced mesh per shape for every wall, hedge and fence box on the field */
      R.boxes = inst(new THREE.BoxGeometry(1, 1, 1), 512);
      R.drums = inst(new THREE.CylinderGeometry(1, 1, 1, 24), 16);
      R.scene.add(R.boxes.mesh); R.scene.add(R.drums.mesh);
    }
    if (R.W !== W || R.H !== H || R.dpr !== dpr) { R.W = W; R.H = H; R.dpr = dpr; R.renderer.setPixelRatio(dpr); R.renderer.setSize(W, H, false); }
  }
  function inst(geom, cap) {
    var mat = new THREE.MeshLambertMaterial({ color: 0xffffff }), m = new THREE.InstancedMesh(geom, mat, cap);
    m.count = 0; m.frustumCulled = false;
    return { mesh: m, cap: cap, geom: geom, mat: mat, n: 0, mtx: new THREE.Matrix4(), col: new THREE.Color() };
  }
  function grow(o, need) {
    if (need <= o.cap) return;
    var cap = Math.max(need, o.cap * 2), m = new THREE.InstancedMesh(o.geom, o.mat, cap);
    m.count = 0; m.frustumCulled = false;
    R.scene.remove(o.mesh); o.mesh.dispose(); o.mesh = m; o.cap = cap; R.scene.add(m);
  }
  function setCamera(fit, W, H) {
    var s = fit.s / fit.base, ppu = api.cellPx() / SQ2 * s, az = (45 + api.angle()) * Math.PI / 180, cam = R.cam;
    var el = Math.asin(Math.min(0.99, api.cellH() / api.cellPx()));   /* v6.1: true isometric for the castle (87.2 / 151), 2:1 for the Town (cell 40 × 20) */
    var dir = new THREE.Vector3(Math.sin(az) * Math.cos(el), Math.sin(el), Math.cos(az) * Math.cos(el));
    var right = new THREE.Vector3(dir.z, 0, -dir.x).normalize(), up = new THREE.Vector3().crossVectors(dir, right).normalize();
    /* the world origin must land at (fit.ox, fit.oy) on the canvas */
    var T = new THREE.Vector3().addScaledVector(right, -(fit.ox - W / 2) / ppu).addScaledVector(up, (fit.oy - H / 2) / ppu);
    cam.left = -W / 2 / ppu; cam.right = W / 2 / ppu; cam.top = H / 2 / ppu; cam.bottom = -H / 2 / ppu;
    cam.position.copy(T).addScaledVector(dir, 150); cam.up.copy(up); cam.lookAt(T); cam.updateProjectionMatrix();
    /* light from the front-left of the view, wherever it turns, like the sprites were rendered */
    R.sun.position.copy(T).addScaledVector(right, -4).addScaledVector(dir, 2.5).add(new THREE.Vector3(0, 5, 0)); R.sun.target.position.copy(T);
    R.az = az; R.dir = dir; R.right = right; R.up = up; R.ppu = ppu; R.horiz = new THREE.Vector3(Math.sin(az), 0, Math.cos(az));
  }
  /* where a world point lands on the canvas (for tests): matches build.js worldPx through the fit */
  function project(x, y, z) {
    if (!R) return null;
    var v = new THREE.Vector3(x, z || 0, y).project(R.cam);
    return { x: (v.x + 1) / 2 * R.W, y: (1 - v.y) / 2 * R.H };
  }

  /* ── models ──────────────────────────────────────────────────────────────── */
  /* HSV, as tools/make-castle-kit.py judges the sprites' colours (three.js only offers HSL) */
  function hsvOf(c) {
    var r = c.r, g = c.g, b = c.b, mx = Math.max(r, g, b), mn = Math.min(r, g, b), d = mx - mn, h = 0;
    if (d > 0) { if (mx === r) h = ((g - b) / d + 6) % 6; else if (mx === g) h = (b - r) / d + 2; else h = (r - g) / d + 4; h /= 6; }
    return { h: h, s: mx ? d / mx : 0, v: mx };
  }
  function setHSV(c, h, s, v) {
    var i = Math.floor(h * 6), f = h * 6 - i, p = v * (1 - s), q = v * (1 - f * s), t = v * (1 - (1 - f) * s), k = i % 6;
    var r = [v, q, p, p, t, v][k], g = [t, v, v, q, p, p][k], b = [p, p, t, v, v, q][k];
    c.setRGB(r, g, b);
  }
  function isBlue(m) { var h = hsvOf(m.color); return h.h > 0.52 && h.h < 0.70 && h.s > 0.42 && h.v > 0.15; }
  function recolourMat(m, dir) {
    var t = HUES[dir], h;
    if (!t || !m.color || !isBlue(m)) return m;
    m = m.clone(); h = hsvOf(m.color);
    setHSV(m.color, t[0] / 360, Math.min(1, h.s * t[1]), Math.min(1, h.v * t[2]));
    return m;
  }
  function greystone(m) {                                  /* v5.3: Kenney's beige stone tinted grey, blue accents untouched */
    var h; if (!m.color) return m; h = hsvOf(m.color);
    if (h.h > 0.05 && h.h < 0.19 && h.s < 0.42 && h.v > 0.3) { m = m.clone(); setHSV(m.color, h.h, h.s * 0.3, h.v * 0.62); }   /* darker than the sprite tint: this light rig is brighter than Kenney's renders */
    return m;
  }
  function prepMaterials(obj, file) {
    var stoneKit = /castle\/(tower|wall)/.test(file);
    obj.traverse(function (o) {
      if (!o.isMesh) return;
      var ms = Array.isArray(o.material) ? o.material : [o.material];
      ms = ms.map(function (m) {
        if (m.isMeshStandardMaterial) { m.metalness = 0; m.roughness = 1; }
        if (m.isMeshPhongMaterial) { m.shininess = 4; m.specular.setHex(0x111111); if (!m.map) m.color.multiplyScalar(0.8); }
        if (stoneKit) m = greystone(m);
        return m;
      });
      o.material = Array.isArray(o.material) ? ms : ms[0];
      o.castShadow = o.receiveShadow = false;
    });
  }
  /* a model file, loaded once; null until it arrives (the piece is drawn again then) */
  function model(file) {
    var e = loads[file];
    if (e) return e.obj;
    e = loads[file] = { obj: null, err: false };
    var url = models.dir + file, arrive = function (o) { prepMaterials(o, file); e.obj = o; R && R.gen++; api.redraw(); }, fail = function (err) { e.err = true; console.warn("build3d: " + file, err && err.message); };
    try {
      if (/\.obj$/i.test(file)) {
        var mtl = new THREE.MTLLoader(), base = url.replace(/[^/]*$/, "");
        mtl.setResourcePath(base).setPath(base);
        mtl.loadAsync(file.replace(/^.*\//, "").replace(/\.obj$/i, ".mtl")).then(function (mats) {
          mats.preload();
          return new THREE.OBJLoader().setMaterials(mats).loadAsync(url);
        }).then(arrive).catch(fail);
      } else new THREE.GLTFLoader().loadAsync(url).then(function (g) { arrive(g.scene); }).catch(fail);
    } catch (err) { fail(err); }
    return null;
  }
  function baseName(n) { var m = /^(.*)_(NE|SE|SW|NW)$/.exec(n); return m ? m[1] : n; }
  function styleDir(style) { var st = api.styleDef(style); return (st && st.dir) || ""; }
  /* one part of a piece as a group: the model(s) scaled to the cell, footprint centred, base on y = 0 */
  function buildModelPart(spec, dir, stone) {
    var g = new THREE.Group(), complete = true, i, pt, file, src, obj, k, box, c;
    for (i = 0; i < spec.parts.length; i++) {
      pt = spec.parts[i]; file = typeof pt.file === "string" ? pt.file : (pt.file[dir] || pt.file[""]);
      src = model(file);
      if (!src) { complete = false; continue; }
      obj = src.clone();
      if (stone || (spec.coloured && dir && spec.kind === "obj")) obj.traverse(function (o) {
        if (!o.isMesh) return;
        var ms = Array.isArray(o.material) ? o.material : [o.material];
        ms = ms.map(function (m) { if (stone) { m = m.clone(); m.color.setHex(STONE); if (m.map) m.map = null; return m; } return recolourMat(m, dir); });
        o.material = Array.isArray(o.material) ? ms : ms[0];
      });
      k = (pt.scale || 1) * (spec.scale || 1);
      obj.scale.setScalar(k);
      if (pt.rotY || spec.rotY) obj.rotation.y = ((pt.rotY || 0) + (spec.rotY || 0)) * Math.PI / 180;
      obj.updateMatrixWorld(true);
      box = new THREE.Box3().setFromObject(obj); c = box.getCenter(new THREE.Vector3());
      obj.position.set(-c.x + (pt.dx || 0), -box.min.y, -c.z + (pt.dz || 0));
      g.add(obj);
    }
    g.userData.complete = complete;
    return g;
  }
  /* a sprite with no model: an upright plane facing the view, textured from the kit atlas */
  function spriteTexture(name, style) {
    var key = name + "|" + styleDir(style), e = sprites[key], ref, c, sp, cv, ctx;
    if (e) return e.tex;
    ref = api.spriteRef(name, style); c = api.getImg(ref.src); sp = api.kitSprite(name);
    if (!c.ok) return null;                                  /* still loading (build.js redraws when it lands) or missing */
    cv = document.createElement("canvas"); cv.width = sp.w; cv.height = sp.h; ctx = cv.getContext("2d");
    if (ref.whole) ctx.drawImage(c.img, 0, 0, sp.w, sp.h); else ctx.drawImage(c.img, ref.x, ref.y, sp.w, sp.h, 0, 0, sp.w, sp.h);
    var tex = new THREE.CanvasTexture(cv); tex.colorSpace = THREE.SRGBColorSpace; tex.minFilter = THREE.LinearFilter; tex.generateMipmaps = false;
    sprites[key] = { tex: tex };
    return tex;
  }
  var planeGeom = null;
  function buildBillboard(pt, style) {
    var tex = spriteTexture(pt.name, style), C = api.cellPx(), H = api.cellH(), mesh, mat;
    if (!planeGeom) planeGeom = new THREE.PlaneGeometry(1, 1).translate(0, 0.5, 0);
    if (!tex) return null;
    mat = new THREE.MeshBasicMaterial({ map: tex, transparent: true, alphaTest: 0.3, side: THREE.DoubleSide });
    mesh = new THREE.Mesh(planeGeom, mat);
    mesh.scale.set(pt.w * SQ2 / C, pt.h / H, 1);
    mesh.userData.billboard = true;
    return mesh;
  }

  /* ── pieces ──────────────────────────────────────────────────────────────── */
  function sig(it) {
    return [it.p.id, it.style || "", it.a, it.prot | 0, it.n, it.parts.map(function (q) { return q.name; }).join(","), it.hostKey || ""].join("|");
  }
  function buildPiece(it) {
    var g = new THREE.Group(), dir = styleDir(it.style), y = 0, i, pt, base, spec, part, box, complete = true;
    for (i = 0; i < it.parts.length; i++) {
      pt = it.parts[i]; base = baseName(pt.name); spec = models.sprites[base];
      if (spec) {
        part = buildModelPart(spec, dir, !!spec.stone);
        if (!part.userData.complete) complete = false;
        part.position.y = y;
        g.add(part);
        part.updateMatrixWorld(true);
        box = new THREE.Box3().setFromObject(part);
        if (box.max.y > -Infinity) y = box.max.y;                    /* the next part sits on this one */
      } else {
        part = buildBillboard(pt, it.style);
        if (!part) { complete = false; continue; }
        part.position.y = y - (pt.oy || 0) / api.cellH();      /* oy raises the sprite in build.js (bottom = y0 − (lift − oy)) */
        g.add(part);
      }
    }
    g.userData.complete = complete; g.userData.top = y;
    if (it.a < 1) g.traverse(function (o) {
      if (!o.isMesh) return;
      var ms = Array.isArray(o.material) ? o.material : [o.material];
      ms = ms.map(function (m) { m = m.clone(); m.transparent = true; m.opacity = it.a; m.depthWrite = false; return m; });
      o.material = Array.isArray(o.material) ? ms : ms[0];
    });
    return g;
  }
  function placePiece(g, it, y0) {
    var n = it.n, cx = it.cx + n / 2, cy = it.cy + n / 2;
    g.position.set(cx, y0, cy);
    g.rotation.y = -(it.prot | 0) * Math.PI / 2;
    g.traverse(function (o) {
      if (!o.userData.billboard) return;
      /* the sprite's foot is where build.js puts it: the point n/√2 toward the viewer from the footprint's centre, facing the view */
      o.rotation.y = R.az + (it.prot | 0) * Math.PI / 2;
      o.position.x = R.horiz.x * n / SQ2; o.position.z = R.horiz.z * n / SQ2;
      var w = new THREE.Vector3(o.position.x, 0, o.position.z).applyAxisAngle(new THREE.Vector3(0, 1, 0), -g.rotation.y);   /* undo the piece's turn */
      o.position.x = w.x; o.position.z = w.z;
    });
  }

  /* ── runs: walls, gates, hedges and fences as boxes ──────────────────────── */
  function addBox(x0, y0, x1, y1, z0, z1, col) {
    var o = R.boxes, i = o.n++;
    if (i >= o.cap) grow(o, i + 1);
    o.mtx.makeScale(Math.max(1e-3, x1 - x0), Math.max(1e-3, z1 - z0), Math.max(1e-3, y1 - y0)); o.mtx.setPosition((x0 + x1) / 2, (z0 + z1) / 2, (y0 + y1) / 2);
    o.mesh.setMatrixAt(i, o.mtx); o.mesh.setColorAt(i, o.col.set(col));
  }
  function addDrum(cx, cy, r, z0, z1, col) {
    var o = R.drums, i = o.n++;
    if (i >= o.cap) grow(o, i + 1);
    o.mtx.makeScale(r, Math.max(1e-3, z1 - z0), r); o.mtx.setPosition(cx, (z0 + z1) / 2, cy);
    o.mesh.setMatrixAt(i, o.mtx); o.mesh.setColorAt(i, o.col.set(col));
  }
  function drawRun(it) {
    var pl = api.runPlan(it), st = pl.st, cols = pl.cols, h = st.h, t = st.t, mx = pl.mx, my = pl.my, E = pl.E, k, b, ht = t / 2;
    var body = cols.body || cols.top, merlon = cols.merlon || cols.top;
    if (st.fence) {
      var n = st.rails || 2, pw = 0.08, posts = [], i;
      pl.parts.forEach(function (b) {
        if (b.axis === "x") { posts.push([b.x0 + E, my]); posts.push([b.x1 - E, my]); for (k = 0; k < n; k++) { var z = 0.14 + k * (h - 0.2) / Math.max(1, n - 1); addBox(b.x0, my - t / 2, b.x1, my + t / 2, z, z + 0.06, body); } }
        else { posts.push([mx, b.y0 + E]); posts.push([mx, b.y1 - E]); for (k = 0; k < n; k++) { var z2 = 0.14 + k * (h - 0.2) / Math.max(1, n - 1); addBox(mx - t / 2, b.y0, mx + t / 2, b.y1, z2, z2 + 0.06, body); } }
      });
      if (st.gate) posts.push([mx, my]);
      for (i = 0; i < posts.length; i++) addBox(posts[i][0] - pw / 2, posts[i][1] - pw / 2, posts[i][0] + pw / 2, posts[i][1] + pw / 2, 0, h, body);
      return;
    }
    pl.parts.forEach(function (b) {
      if (st.arch && b === pl.main) {                         /* a gate: two piers and a lintel leave the way through open */
        var u = b.axis === "x" ? mx : my, o0 = u - 0.2, o1 = u + 0.2, top = 0.78;
        if (b.axis === "x") { addBox(b.x0, b.y0, o0, b.y1, 0, h, body); addBox(o1, b.y0, b.x1, b.y1, 0, h, body); addBox(o0 - 0.01, b.y0, o1 + 0.01, b.y1, top, h, body); }
        else { addBox(b.x0, b.y0, b.x1, o0, 0, h, body); addBox(b.x0, o1, b.x1, b.y1, 0, h, body); addBox(b.x0, o0 - 0.01, b.x1, o1 + 0.01, top, h, body); }
        if (st.bars) {                                        /* the portcullis: iron bars in the middle of the gateway */
          for (k = -2; k <= 2; k++) { if (b.axis === "x") addBox(u + k * 0.08 - 0.015, my - 0.02, u + k * 0.08 + 0.015, my + 0.02, 0, top, cols.bar); else addBox(mx - 0.02, u + k * 0.08 - 0.015, mx + 0.02, u + k * 0.08 + 0.015, 0, top, cols.bar); }
          for (var z = 0.15; z < top; z += 0.18) { if (b.axis === "x") addBox(o0 + 0.02, my - 0.02, o1 - 0.02, my + 0.02, z, z + 0.03, cols.bar); else addBox(mx - 0.02, o0 + 0.02, mx + 0.02, o1 - 0.02, z, z + 0.03, cols.bar); }
        }
      } else addBox(b.x0, b.y0, b.x1, b.y1, 0, h, body);
    });
    if (st.stairs && pl.main) {                               /* three steps against one long face (turning the piece swaps the side) */
      var sw = 0.22, sd = 0.24, e0 = pl.side > 0 ? ht : -ht - sd, e1 = e0 + sd;
      for (k = 0; k < 3; k++) {
        if (pl.main.axis === "x") addBox(mx - 0.33 + k * sw, my + e0, mx - 0.33 + (k + 1) * sw, my + e1, 0, 0.3 * (k + 1), body);
        else addBox(mx + e0, my - 0.33 + k * sw, mx + e1, my - 0.33 + (k + 1) * sw, 0, 0.3 * (k + 1), body);
      }
    }
    if (st.merlons) {                                         /* battlements along both long edges of every box */
      var mw = 0.12, md = 0.13, mh = 0.22;
      pl.parts.forEach(function (b) {
        var len = b.axis === "x" ? b.x1 - b.x0 : b.y1 - b.y0, n2 = Math.max(1, Math.round(len / 0.25)), k4, u;
        for (k4 = 0; k4 < n2; k4++) {
          u = (b.axis === "x" ? b.x0 : b.y0) + (k4 + 0.5) * len / n2 - mw / 2;
          if (b.axis === "x") { addBox(u, b.y0, u + mw, b.y0 + md, h, h + mh, merlon); addBox(u, b.y1 - md, u + mw, b.y1, h, h + mh, merlon); }
          else { addBox(b.x0, u, b.x0 + md, u + mw, h, h + mh, merlon); addBox(b.x1 - md, u, b.x1, u + mw, h, h + mh, merlon); }
        }
      });
    }
    if (st.turret) {                                          /* a round turret on the corner with its own ring of merlons */
      var r = 0.36, th = h + 0.45, a, q;
      addDrum(mx, my, r, 0, th, body);
      for (k = 0; k < 8; k++) { a = k * Math.PI / 4; q = { x: mx + (r - 0.07) * Math.cos(a), y: my + (r - 0.07) * Math.sin(a) }; addBox(q.x - 0.06, q.y - 0.06, q.x + 0.06, q.y + 0.06, th, th + 0.18, merlon); }
    }
  }

  /* ── the Town in 3D (v6.1) ─────────────────────────────────────────────────
     A Town piece used to be one flat picture, so when the map turned by the degree the pictures stood still while their
     spots turned: a wing slid around its house and joined buildings came apart. Each Town piece is now a small model made
     here from boxes, prisms and cylinders after its picture (assets/build/village-*.png), in the style's colours, so the
     whole town turns together like the castle. Units are cells; a piece sits on its n×n footprint centred on (0, 0), y up,
     its front (door) on the +x side and its ridge along z, the way the picture faces at view angle 0. */
  var PAL = {
    tile:   { wall: 0xe2d4ba, roof: 0xa65b4d, trim: 0x5e4a3a, chim: 0x8c7b69, stone: 0xa59a8a, door: 0x5a4130 },
    slate:  { wall: 0xf4f1eb, roof: 0x5e7089, trim: 0x4a4646, chim: 0x8f949d, stone: 0xaaa9a5, door: 0x4d3a2d },
    thatch: { wall: 0xc7b297, roof: 0xd6ab4f, trim: 0x5e452f, chim: 0xa6845b, stone: 0xb9a074, door: 0x6c4c2c }
  };
  var TC = { wood: 0x8c6746, dark: 0x4b3727, glass: 0x52698c, canvas: 0xe0d0a8, canvas2: 0xc9a77a, hay: 0xe2c060, cobble: 0xb8a690,
    iron: 0x3c3b3b, bell: 0xcfa23e, grey: 0x9f9a92, plank: 0xa07b54, light: 0xffd36b };
  var texs = {}, mats = {}, shadowTex = null;
  function canvasTex(name, draw) {
    if (texs[name]) return texs[name];
    var cv = document.createElement("canvas"), ctx; cv.width = cv.height = 64; ctx = cv.getContext("2d");
    ctx.fillStyle = "#fff"; ctx.fillRect(0, 0, 64, 64); draw(ctx);
    var t = new THREE.CanvasTexture(cv); t.wrapS = t.wrapT = THREE.RepeatWrapping; t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 4;
    return (texs[name] = t);
  }
  /* grey patterns: the material's colour tints them */
  function texOf(name) {
    if (name === "shingle") return canvasTex(name, function (c) {
      for (var r = 0; r < 4; r++) for (var k = -1; k < 4; k++) {
        var x = k * 16 + (r % 2) * 8, y = r * 16, g = 205 + ((r * 7 + k * 13) % 5) * 10;
        c.fillStyle = "rgb(" + g + "," + g + "," + g + ")"; c.fillRect(x + 1, y + 1, 14, 14);
        c.fillStyle = "rgba(0,0,0,.28)"; c.fillRect(x, y + 13, 16, 3); c.fillRect(x, y, 1, 16);
      }
    });
    if (name === "stone") return canvasTex(name, function (c) {
      for (var r = 0; r < 4; r++) for (var k = -1; k < 3; k++) {
        var x = k * 26 + (r % 2) * 13, y = r * 16, g = 185 + ((r * 5 + k * 11) % 6) * 12;
        c.fillStyle = "rgb(" + g + "," + g + "," + (g - 6) + ")"; c.fillRect(x + 2, y + 2, 23, 13);
        c.fillStyle = "rgba(0,0,0,.35)"; c.fillRect(x, y, 26, 2); c.fillRect(x, y, 2, 16);
      }
    });
    if (name === "cobble") return canvasTex(name, function (c) {
      c.fillStyle = "#8a8a8a"; c.fillRect(0, 0, 64, 64);
      for (var r = 0; r < 5; r++) for (var k = 0; k < 5; k++) {
        var x = k * 13 + (r % 2) * 6 + 6, y = r * 13 + 6, g = 190 + ((r * 3 + k * 7) % 5) * 13;
        c.fillStyle = "rgb(" + g + "," + g + "," + g + ")"; c.beginPath(); c.ellipse(x, y, 5.6, 5, 0, 0, Math.PI * 2); c.fill();
      }
    });
    if (name === "plank") return canvasTex(name, function (c) {
      for (var r = 0; r < 4; r++) { var g = 200 + (r % 3) * 18; c.fillStyle = "rgb(" + g + "," + g + "," + g + ")"; c.fillRect(0, r * 16, 64, 15); c.fillStyle = "rgba(0,0,0,.3)"; c.fillRect(0, r * 16 + 15, 64, 1); c.fillRect((r * 23) % 64, r * 16, 1, 16); }
    });
    return null;
  }
  function mat(col, tex, glow) {
    var k = col + "|" + (tex || "") + "|" + (glow ? 1 : 0);
    if (!mats[k]) mats[k] = new THREE.MeshLambertMaterial({ color: col, map: tex ? texOf(tex) : null, emissive: glow ? col : 0x000000, emissiveIntensity: glow ? 0.6 : 0 });
    return mats[k];
  }
  /* repeat a box's texture by the size of each face (k repeats per cell) */
  function texBox(geo, w, h, d, k) {
    var uv = geo.attributes.uv, dims = [[d, h], [d, h], [w, d], [w, d], [w, h], [w, h]], f, i, j;
    for (f = 0; f < 6; f++) for (i = 0; i < 4; i++) { j = f * 4 + i; uv.setXY(j, uv.getX(j) * dims[f][0] * k, uv.getY(j) * dims[f][1] * k); }
  }
  /* a box w (x) × h (y) × d (z) standing on y, centred on x, z */
  function box(g, w, h, d, x, y, z, col, tex, k) {
    var geo = new THREE.BoxGeometry(w, h, d), m;
    if (tex) texBox(geo, w, h, d, k || 2);
    m = new THREE.Mesh(geo, mat(col, tex)); m.position.set(x, y + h / 2, z); g.add(m); return m;
  }
  function cyl(g, rt, rb, h, x, y, z, col, seg, glow) {
    var m = new THREE.Mesh(new THREE.CylinderGeometry(rt, rb, h, seg || 14), mat(col, null, glow)); m.position.set(x, y + h / 2, z); g.add(m); return m;
  }
  /* a gabled building: walls w × h × l, a roof rising `rise` over a ridge along z, eaves overhanging */
  function gable(g, o) {
    var w = o.w, l = o.l, h = o.h, rise = o.rise, x0 = o.x || 0, z0 = o.z || 0, y0 = o.y || 0, ov = o.ov != null ? o.ov : 0.14, t = 0.09, s, sh, a, half, L, m, geo;
    box(g, w, h, l, x0, y0, z0, o.wall, o.wallTex, 1.6);
    sh = new THREE.Shape(); sh.moveTo(-w / 2, 0); sh.lineTo(w / 2, 0); sh.lineTo(0, rise); sh.lineTo(-w / 2, 0);
    geo = new THREE.ExtrudeGeometry(sh, { depth: l, bevelEnabled: false }); geo.translate(0, 0, -l / 2);
    m = new THREE.Mesh(geo, mat(o.gableCol || o.wall, o.wallTex && o.wallTex !== "stone" ? o.wallTex : null)); m.position.set(x0, y0 + h, z0); g.add(m);
    half = w / 2 + ov; a = Math.atan2(rise, w / 2); L = half / Math.cos(a);
    for (s = -1; s <= 1; s += 2) {
      geo = new THREE.BoxGeometry(L, t, l + 2 * ov); texBox(geo, L, t, l + 2 * ov, 2.2);
      m = new THREE.Mesh(geo, mat(o.roof, "shingle"));
      m.rotation.z = -s * a;
      m.position.set(x0 + s * half / 2 + s * Math.sin(a) * t / 2, y0 + h + rise - half * Math.tan(a) / 2 + Math.cos(a) * t / 2, z0);
      g.add(m);
    }
    box(g, 0.14, 0.1, l + 2 * ov, x0, y0 + h + rise - 0.01, z0, o.trim);
    return y0 + h;
  }
  /* things on the front (+x) face at x = xf */
  /* (a negative xf puts it on the back, −x, face) */
  function door(g, xf, z, w, h, P, y) { var d = xf < 0 ? -1 : 1; box(g, 0.05, h + 0.08, w + 0.14, xf + d * 0.02, y || 0, z, P.trim); box(g, 0.05, h, w, xf + d * 0.05, y || 0, z, P.door, "plank", 3); }
  function win(g, xf, y, z, w, h, P) { var d = xf < 0 ? -1 : 1; box(g, 0.04, h + 0.1, w + 0.1, xf + d * 0.02, y - 0.05, z, P.trim); box(g, 0.04, h, w, xf + d * 0.04, y, z, TC.glass); box(g, 0.03, h, 0.03, xf + d * 0.06, y, z, P.trim); }
  /* a row of windows on the back face, so a building turned round still looks lived in */
  function backWins(g, xb, ys, zs, P) { ys.forEach(function (y) { zs.forEach(function (z) { win(g, -xb, y, z, 0.3, 0.4, P); }); }); }
  function roundWin(g, xf, y, z, r, P) {
    var a = cyl(g, r + 0.05, r + 0.05, 0.04, xf + 0.02, 0, z, P.trim, 16), b = cyl(g, r, r, 0.04, xf + 0.04, 0, z, TC.glass, 16);
    [a, b].forEach(function (m) { m.rotation.z = Math.PI / 2; m.position.y = y; });
  }
  function archWin(g, xf, y, z, w, h, P) { win(g, xf, y, z, w, h, P); var m = cyl(g, w / 2 + 0.05, w / 2 + 0.05, 0.04, xf + 0.02, 0, z, P.trim, 12); m.rotation.z = Math.PI / 2; m.position.y = y + h; m.scale.set(1, 1, 1); }
  function chimney(g, x, z, y0, y1, P) { box(g, 0.34, y1 - y0, 0.34, x, y0, z, P.chim, "stone", 3); box(g, 0.42, 0.08, 0.42, x, y1, z, P.trim); }
  function post(g, x, z, h, col, s) { return box(g, s || 0.1, h, s || 0.1, x, 0, z, col || TC.dark); }
  function barrel(g, x, y, z) { cyl(g, 0.15, 0.15, 0.4, x, y, z, TC.wood, 12); cyl(g, 0.156, 0.156, 0.04, x, y + 0.08, z, TC.iron, 12); cyl(g, 0.156, 0.156, 0.04, x, y + 0.28, z, TC.iron, 12); }
  function crate(g, x, y, z, s) { box(g, s, s, s, x, y, z, TC.plank, "plank", 3); }
  function bale(g, x, y, z, ry) { var m = box(g, 0.5, 0.28, 0.3, x, y, z, TC.hay); m.rotation.y = ry || 0; }
  function lamp(g, x, z, h) {
    post(g, x, z, h, TC.dark, 0.08); box(g, 0.28, 0.05, 0.05, x + 0.12, h - 0.12, z, TC.dark);
    box(g, 0.14, 0.18, 0.14, x + 0.24, h - 0.34, z, TC.light).material = mat(TC.light, null, true);
  }
  function wheel(g, x, y, z, r, axis) {
    var w = new THREE.Group(), i, m;
    m = new THREE.Mesh(new THREE.TorusGeometry(r, 0.035, 6, 20), mat(TC.dark)); w.add(m);
    for (i = 0; i < 4; i++) { m = new THREE.Mesh(new THREE.BoxGeometry(0.03, r * 2, 0.03), mat(TC.wood)); m.rotation.z = i * Math.PI / 4; w.add(m); }
    w.position.set(x, y, z); if (axis === "x") w.rotation.y = Math.PI / 2; g.add(w); return w;
  }
  function boat(g, x, z, len, ry) {
    var b = new THREE.Group(), sh = new THREE.Shape(), w = len * 0.36, geo, m;
    sh.moveTo(-len / 2, 0); sh.quadraticCurveTo(-len / 4, w / 2, 0, w / 2); sh.quadraticCurveTo(len / 4, w / 2, len / 2, 0);
    sh.quadraticCurveTo(len / 4, -w / 2, 0, -w / 2); sh.quadraticCurveTo(-len / 4, -w / 2, -len / 2, 0);
    geo = new THREE.ExtrudeGeometry(sh, { depth: 0.2, bevelEnabled: false }); geo.rotateX(-Math.PI / 2);
    m = new THREE.Mesh(geo, mat(TC.wood)); b.add(m);
    m = new THREE.Mesh(geo, mat(TC.dark)); m.scale.set(0.84, 0.2, 0.7); m.position.y = 0.17; b.add(m);
    box(b, 0.1, 0.04, w * 0.8, -len * 0.12, 0.17, 0, TC.plank); box(b, 0.1, 0.04, w * 0.8, len * 0.16, 0.17, 0, TC.plank);
    b.position.set(x, 0, z); b.rotation.y = ry || 0; g.add(b);
  }
  function pier(g, x0, x1, z0, z1, y) {
    box(g, x1 - x0, 0.08, z1 - z0, (x0 + x1) / 2, y, (z0 + z1) / 2, TC.plank, "plank", 2.5);
    [[x0 + 0.1, z0 + 0.1], [x1 - 0.1, z0 + 0.1], [x0 + 0.1, z1 - 0.1], [x1 - 0.1, z1 - 0.1]].forEach(function (q) { post(g, q[0], q[1], y, TC.dark, 0.1); });
  }
  function stall(g, x, z, P, cloth) {
    var s = 0.9;
    [[-1, -1], [1, -1], [-1, 1], [1, 1]].forEach(function (q) { post(g, x + q[0] * s / 2, z + q[1] * s / 2, 1.0, TC.dark, 0.06); });
    box(g, s + 0.16, 0.36, s + 0.16, x, 1.0, z, cloth || TC.canvas);
    box(g, 0.3, 0.32, s, x + s / 2 - 0.12, 0, z, TC.plank, "plank", 3);
    crate(g, x - 0.15, 0, z - 0.2, 0.26); barrel(g, x - 0.15, 0, z + 0.22);
  }
  function well(g, x, z, P) {
    cyl(g, 0.34, 0.36, 0.4, x, 0, z, P.stone, 16); cyl(g, 0.27, 0.27, 0.02, x, 0.39, z, TC.glass, 16);
    post(g, x, z - 0.3, 1.0, TC.wood, 0.07); post(g, x, z + 0.3, 1.0, TC.wood, 0.07);
    var r = new THREE.Group(); gable(r, { w: 0.62, l: 0.8, h: 0, rise: 0.3, wall: P.roof, roof: P.roof, trim: P.trim, ov: 0.04 }); r.position.set(x, 1.0, z); g.add(r);
    box(g, 0.12, 0.13, 0.12, x, 0.62, z, TC.wood);
  }
  function sails(g, x, y, z, len) {
    var s = new THREE.Group(), i, arm;
    box(s, 0.12, 0.2, 0.2, 0, -0.1, 0, TC.dark);
    for (i = 0; i < 4; i++) {
      arm = new THREE.Group(); arm.rotation.x = i * Math.PI / 2 + Math.PI / 4;
      box(arm, 0.04, len, 0.06, 0.08, 0.08, 0, TC.dark);
      box(arm, 0.02, len * 0.78, len * 0.24, 0.1, 0.2 * len, len * 0.14, TC.canvas);
      s.add(arm);
    }
    s.position.set(x, y, z); g.add(s);
  }
  function pal(style) { return PAL[style] || PAL.tile; }
  /* one builder per Town piece, by id (the wings are their building's twin) */
  var TOWN = {
    cottage: function (g, P, n) { var w = n - 0.06; gable(g, { w: w, l: n, h: 1.4, rise: 1.0, wall: P.wall, roof: P.roof, trim: P.trim }); door(g, w / 2, -0.3, 0.42, 0.8, P); win(g, w / 2, 0.55, 0.45, 0.3, 0.32, P); backWins(g, w / 2, [0.55], [0], P); },
    "stone-cottage": function (g, P, n) {
      var w = n - 0.06; gable(g, { w: w, l: n, h: 1.55, rise: 1.3, wall: P.stone, wallTex: "stone", gableCol: P.wall, roof: P.roof, trim: P.trim });
      door(g, w / 2, 0, 0.5, 0.9, P); box(g, 0.2, 0.12, 0.8, w / 2 + 0.08, 0, 0, P.stone, "stone", 3); win(g, w / 2, 0.6, -0.85, 0.3, 0.34, P); win(g, w / 2, 0.6, 0.85, 0.3, 0.34, P);
    },
    house: function (g, P, n) {
      var w = n - 0.06, top = gable(g, { w: w, l: n, h: 2.3, rise: 1.45, wall: P.wall, roof: P.roof, trim: P.trim });
      door(g, w / 2, -0.75, 0.5, 0.95, P); backWins(g, w / 2, [0.45, 1.4], [-0.75, 0.45], P); win(g, w / 2, 0.45, 0.45, 0.32, 0.42, P); win(g, w / 2, 1.4, 0.45, 0.32, 0.42, P); win(g, w / 2, 1.4, -0.75, 0.32, 0.42, P);
      chimney(g, 0, n / 2 - 0.4, top + 0.4, top + 1.6, P);
    },
    stall: function (g, P, n) { stall(g, 0, 0, P, P.roof === PAL.slate.roof ? 0xb8c2cf : TC.canvas); },
    steps: function (g, P, n) {
      for (var k = 0; k < 4; k++) box(g, 0.34, 0.18 * (k + 1), 1.0, 0.5 - k * 0.32, 0, 0, P.stone, "stone", 2.5);
      post(g, 0.6, 0.55, 0.9, TC.dark, 0.06); post(g, -0.5, 0.55, 1.4, TC.dark, 0.06); var r = box(g, 1.16, 0.05, 0.05, 0.05, 1.0, 0.55, TC.dark); r.rotation.z = -0.48;
    },
    "lamp-path": function (g, P, n) { box(g, n * 0.5, 0.06, n * 0.92, 0.2, 0, 0, TC.cobble, "cobble", 1.4); lamp(g, 0.75, -1.1, 1.5); lamp(g, 0.75, 1.1, 1.5); },
    bakery: function (g, P, n) {
      var w = n - 0.08, top = gable(g, { w: w, l: n - 0.08, h: 2.1, rise: 1.8, wall: P.wall, roof: P.roof, trim: P.trim }), xf = w / 2;
      backWins(g, w / 2, [0.6, 1.5], [-1, 0.2, 1.2], P);
      door(g, xf, -0.7, 0.5, 0.95, P); roundWin(g, xf, 0.62, 0.55, 0.22, P); roundWin(g, xf, 1.45, 0.55, 0.2, P); roundWin(g, xf, 1.45, -0.7, 0.2, P);
      chimney(g, -0.6, n / 2 - 0.5, top + 0.5, top + 2.2, P); roundWin(g, xf, 0.62, 1.4, 0.22, P);
    },
    dock: function (g, P, n) { pier(g, -n / 2 + 0.2, n / 2 - 0.2, -0.45, 0.45, 0.32); post(g, n / 2 - 0.3, -0.6, 0.9, TC.dark, 0.12); post(g, -n / 2 + 0.3, 0.6, 0.7, TC.dark, 0.12); boat(g, 0.2, 1.2, 1.7, 0.1); },
    chapel: function (g, P, n) {
      var w = n * 0.66, top = gable(g, { w: w, l: n - 0.06, h: 2.7, rise: 1.1, wall: P.wall, roof: P.roof, trim: P.trim });
      door(g, w / 2, 0, 0.5, 1.0, P); archWin(g, w / 2, 1.55, 0, 0.32, 0.5, P);
      box(g, 0.5, 0.06, 0.06, w / 2 + 0.2, 2.55, 0, TC.dark); cyl(g, 0.06, 0.16, 0.22, w / 2 + 0.38, 2.3, 0, TC.bell, 12);
    },
    arch: function (g, P, n) {
      box(g, 0.5, 1.7, 0.5, 0, 0, -0.85, P.stone, "stone", 2.5); box(g, 0.5, 1.7, 0.5, 0, 0, 0.85, P.stone, "stone", 2.5);
      var a = new THREE.Mesh(new THREE.TorusGeometry(0.85, 0.22, 6, 18, Math.PI), mat(P.stone)); a.position.set(0, 1.7, 0); a.rotation.y = Math.PI / 2; g.add(a);
      box(g, 0.5, 0.3, 2.2, 0, 2.3, 0, P.stone, "stone", 2.5); crate(g, 0.9, 0, -1.2, 0.22); crate(g, 0.9, 0, 1.2, 0.22);
    },
    tavern: function (g, P, n) {
      var w = n - 0.08, top = gable(g, { w: w, l: n - 0.08, h: 2.3, rise: 1.8, wall: P.wall, roof: P.roof, trim: P.trim });
      backWins(g, w / 2, [0.55, 1.5], [-1, 0.2, 1.2], P); win(g, w / 2, 1.45, 1.4, 0.34, 0.4, P);
      door(g, w / 2, -0.75, 0.55, 1.0, P); archWin(g, w / 2, 0.5, 0.65, 0.4, 0.45, P); win(g, w / 2, 1.45, 0.65, 0.34, 0.4, P); win(g, w / 2, 1.45, -0.75, 0.34, 0.4, P);
      box(g, 0.5, 0.06, 0.06, w / 2 + 0.25, 1.75, 0.05, TC.dark); box(g, 0.06, 0.4, 0.5, w / 2 + 0.4, 1.3, 0.05, TC.plank, "plank", 3);
      lamp(g, w / 2 - 0.05, -1.5, 1.4); chimney(g, 0.5, -n / 2 + 0.45, top + 0.3, top + 1.9, P);
    },
    windmill: function (g, P, n) {
      var t = cyl(g, 0.6, 0.95, 2.9, 0, 0, 0, P.wall, 4); t.rotation.y = Math.PI / 4;
      var r = cyl(g, 0.02, 0.8, 0.7, 0, 2.9, 0, P.roof, 4); r.rotation.y = Math.PI / 4;
      door(g, 0.66, 0, 0.42, 0.8, P); sails(g, 0.62, 2.55, 0, 2.6);
    },
    watermill: function (g, P, n) {
      var w = n * 0.42, top = gable(g, { w: w, l: n * 0.5, h: 2.0, rise: 1.0, x: -0.9, z: -0.6, wall: P.wall, roof: P.roof, trim: P.trim });
      door(g, -0.9 + w / 2, -0.6, 0.5, 0.95, P); win(g, -0.9 + w / 2, 1.3, -1.3, 0.3, 0.38, P);
      wheel(g, 0.75, 1.0, 1.0, 0.95, "x"); box(g, 0.24, 0.2, 0.24, 0.75, 0.9, 1.0, TC.dark);
      post(g, 1.6, -0.2, 2.7, TC.wood, 0.14); post(g, 1.6, 1.9, 2.7, TC.wood, 0.14); box(g, 0.2, 0.18, 2.3, 1.6, 2.6, 0.85, TC.wood);
    },
    square: function (g, P, n) {
      box(g, n * 0.92, 0.06, n * 0.92, 0, 0, 0, TC.cobble, "cobble", 1.4);
      well(g, 0, 0, P); stall(g, -1.4, -1.4, P, TC.canvas); stall(g, 1.3, 1.4, P, TC.canvas2);
      post(g, 2.1, -2.1, 0.7, TC.dark, 0.12); post(g, -2.1, 2.1, 0.7, TC.dark, 0.12); lamp(g, 1.6, -0.9, 1.4);
    },
    harbour: function (g, P, n) {
      pier(g, -0.5, 0.5, -n / 2 + 0.2, n / 2 - 0.2, 0.32); pier(g, -n / 2 + 0.3, 0.5, -0.4, 0.4, 0.32);
      boat(g, 1.4, -1.0, 1.7, Math.PI / 2 - 0.15); boat(g, -1.4, 1.2, 1.6, 0.2); lamp(g, -0.3, -2.0, 1.8); crate(g, 0.2, 0.4, 1.4, 0.3);
    },
    manor: function (g, P, n) {
      var w = n - 0.1, l = n - 0.06, top = gable(g, { w: w, l: l, h: 3.3, rise: 2.2, wall: P.wall, roof: P.roof, trim: P.trim }), z;
      backWins(g, w / 2, [0.4, 1.4, 2.35], [-1.6, -0.4, 0.8, 1.9], P);
      door(g, w / 2, 0.9, 0.6, 1.05, P);
      for (z = -1.9; z <= 2.0; z += 0.76) { if (Math.abs(z - 0.9) > 0.3) win(g, w / 2, 0.4, z, 0.32, 0.5, P); win(g, w / 2, 1.4, z, 0.32, 0.5, P); win(g, w / 2, 2.35, z, 0.32, 0.5, P); }
      chimney(g, 0, -l / 2 + 0.45, top + 0.8, top + 2.6, P); chimney(g, 0, l / 2 - 0.45, top + 0.8, top + 2.6, P);
    },
    "town-hall": function (g, P, n) {
      var w = n - 0.9, top = gable(g, { w: w, l: n - 0.06, h: 2.9, rise: 1.5, x: -0.42, wall: P.wall, roof: P.roof, trim: P.trim }), xf = w / 2 - 0.42;
      backWins(g, w / 2 + 0.42, [0.5, 1.65], [-1.1, 0, 1.1], P);
      door(g, xf, 0.4, 0.6, 1.1, P); archWin(g, xf, 0.5, -0.85, 0.32, 0.5, P); archWin(g, xf, 1.65, -0.85, 0.32, 0.5, P); archWin(g, xf, 1.65, 0.4, 0.32, 0.5, P); archWin(g, xf, 1.65, 1.3, 0.32, 0.5, P);
      for (var k = 0; k < 3; k++) box(g, 0.26, 0.14 * (k + 1), 1.1, xf + 0.7 - k * 0.26, 0, 0.4, P.stone, "stone", 2.5);
      box(g, 0.5, 0.06, 0.06, xf + 0.2, 2.75, -0.2, TC.dark); cyl(g, 0.06, 0.16, 0.22, xf + 0.38, 2.5, -0.2, TC.bell, 12);
    },
    "bell-tower": function (g, P, n) {
      box(g, 1.1, 3.6, 1.1, 0, 0, 0, P.wall); box(g, 1.2, 0.12, 1.2, 0, 3.6, 0, P.trim);
      [[-1, -1], [1, -1], [-1, 1], [1, 1]].forEach(function (q) { box(g, 0.14, 0.8, 0.14, q[0] * 0.48, 3.72, q[1] * 0.48, P.wall); });
      cyl(g, 0.1, 0.26, 0.38, 0, 3.95, 0, TC.bell, 14);
      var r = new THREE.Group(); gable(r, { w: 1.2, l: 1.2, h: 0, rise: 0.75, wall: P.roof, roof: P.roof, trim: P.trim }); r.position.y = 4.52; g.add(r);
      box(g, 0.14, 0.12, 1.2, 0, 4.52, 0, P.trim); door(g, 0.55, 0, 0.42, 0.85, P); post(g, 0.9, -0.85, 0.7, TC.dark, 0.1);
    },
    "grand-mill": function (g, P, n) {
      var t = cyl(g, 0.8, 1.2, 3.9, 0, 0, 0, P.stone, 4); t.rotation.y = Math.PI / 4;
      var r = cyl(g, 0.02, 1.0, 0.8, 0, 3.9, 0, P.roof, 4); r.rotation.y = Math.PI / 4;
      door(g, 0.86, 0, 0.5, 0.95, P); win(g, 0.72, 1.9, 0, 0.3, 0.4, P); sails(g, 0.8, 3.4, 0, 3.6);
    },
    fence: function (g, P, n) { var z; for (z = -n / 2 + 0.1; z <= n / 2; z += n / 2 - 0.1) post(g, 0, z, 0.75, TC.dark, 0.1); box(g, 0.05, 0.08, n, 0, 0.28, 0, TC.wood); box(g, 0.05, 0.08, n, 0, 0.55, 0, TC.wood); },
    well: function (g, P, n) { well(g, 0, 0, P); },
    lamp: function (g, P, n) { lamp(g, -0.1, 0, 1.4); },
    barrels: function (g, P, n) { barrel(g, -0.12, 0, -0.15); barrel(g, 0.18, 0, 0.1); barrel(g, -0.15, 0, 0.22); },
    crates: function (g, P, n) { box(g, 0.6, 1.3, 0.6, -0.2, 0, -0.2, TC.plank, "plank", 3); bale(g, 0.5, 0, 0.3, 0.3); bale(g, 0.3, 0, 0.7, -0.4); bale(g, 0.45, 0.28, 0.5, 0.1); },
    "hay-cart": function (g, P, n) { cart(g, function () { bale(g, 0, 0.55, -0.3); bale(g, 0, 0.55, 0.15); bale(g, 0, 0.83, -0.08, 0.2); }); },
    "barrel-cart": function (g, P, n) { cart(g, function () { barrel(g, 0.05, 0.5, -0.35); barrel(g, 0.05, 0.5, 0.05); crate(g, 0, 0.5, 0.45, 0.3); }); },
    haystacks: function (g, P, n) { bale(g, -0.2, 0, -0.3, 0.2); bale(g, 0.3, 0, 0.1, -0.3); bale(g, 0.05, 0.28, -0.1, 0.5); bale(g, -0.3, 0, 0.5, 0); },
    cobbles: function (g, P, n) { box(g, n * 0.9, 0.06, n * 0.9, 0, 0, 0, TC.cobble, "cobble", 1.4); barrel(g, -0.3, 0.06, -0.35); crate(g, 0.35, 0.06, 0.3, 0.34); },
    signpost: function (g, P, n) { post(g, 0, -0.6, 1.2, TC.dark, 0.12); post(g, 0, 0.5, 1.6, TC.dark, 0.12); box(g, 0.06, 0.4, 0.8, 0.08, 1.05, 0.15, TC.plank, "plank", 3); }
  };
  TOWN["cottage-wing"] = TOWN.cottage; TOWN["stone-wing"] = TOWN["stone-cottage"]; TOWN["house-wing"] = TOWN.house;
  function cart(g, load) {
    box(g, 0.85, 0.1, 1.4, 0, 0.4, 0, TC.plank, "plank", 3); box(g, 0.06, 0.22, 1.4, 0.42, 0.5, 0, TC.wood); box(g, 0.06, 0.22, 1.4, -0.42, 0.5, 0, TC.wood);
    wheel(g, 0.5, 0.38, 0.1, 0.36, "x"); wheel(g, -0.5, 0.38, 0.1, 0.36, "x");
    var s1 = box(g, 0.05, 0.05, 1.2, 0.3, 0.2, -1.1, TC.wood), s2 = box(g, 0.05, 0.05, 1.2, -0.3, 0.2, -1.1, TC.wood); s1.rotation.x = s2.rotation.x = -0.25;
    load();
  }
  function shadowDisc(g, n) {
    if (!shadowTex) {
      var cv = document.createElement("canvas"), c, gr; cv.width = cv.height = 64; c = cv.getContext("2d");
      gr = c.createRadialGradient(32, 32, 4, 32, 32, 32); gr.addColorStop(0, "rgba(0,0,0,.32)"); gr.addColorStop(0.7, "rgba(0,0,0,.16)"); gr.addColorStop(1, "rgba(0,0,0,0)");
      c.fillStyle = gr; c.fillRect(0, 0, 64, 64); shadowTex = new THREE.CanvasTexture(cv);
    }
    var m = new THREE.Mesh(new THREE.PlaneGeometry(n * 1.15, n * 1.15), new THREE.MeshBasicMaterial({ map: shadowTex, transparent: true, depthWrite: false }));
    m.rotation.x = -Math.PI / 2; m.position.y = 0.005; m.renderOrder = -1; g.add(m);
  }
  function townSig(it) { return ["T", it.p.id, it.style || "", it.a, it.n, it.bad ? 1 : 0].join("|"); }
  function buildTown(it) {
    var g = new THREE.Group(), inner = new THREE.Group(), f = TOWN[it.p.id], P = pal(it.style), n = it.n || 1;
    if (f) f(inner, P, n);
    else gable(inner, { w: n * 0.85, l: n * 0.9, h: n * 0.6, rise: n * 0.35, wall: P.wall, roof: P.roof, trim: P.trim });
    if (!it.ring) shadowDisc(g, n);
    g.add(inner);
    if (it.a < 1 || it.bad) g.traverse(function (o) {
      if (!o.isMesh) return;
      o.material = o.material.clone(); o.material.transparent = true; o.material.opacity = Math.min(o.material.opacity, it.a); o.material.depthWrite = false;
      if (it.bad && o.material.color) o.material.color.lerp(new THREE.Color(0xd04040), 0.45);
    });
    g.userData.complete = true; g.userData.top = 0; g.userData.town = true; g.userData.own = it.a < 1 || !!it.bad;
    return g;
  }
  function placeTown(g, it) {
    var n = it.n || 1, x = it.wx != null ? it.wx : it.cx + n / 2, z = it.wy != null ? it.wy : it.cy + n / 2;
    g.position.set(x, 0, z);
    g.rotation.y = it.axis === "x" ? Math.PI / 2 : -(it.prot | 0) * Math.PI / 2;
  }

  /* ── a frame ─────────────────────────────────────────────────────────────── */
  function render(f) {
    if (!ready()) return false;
    ensure(f.canvas, f.W, f.H, f.dpr);
    setCamera(f.fit, f.W, f.H);
    var seen = {}, i, it, key, e, s, g, host;
    R.boxes.n = 0; R.drums.n = 0;
    /* hosts before the flags that stand on them */
    var items = f.items.slice().sort(function (a, b) { return (a.hostKey ? 1 : 0) - (b.hostKey ? 1 : 0); }), tops = {};
    for (i = 0; i < items.length; i++) {
      it = items[i];
      if (it.town) {                                          /* v6.1: a Town piece as a model */
        key = "t:" + it.key; seen[key] = 1; e = R.pieces[key]; s = townSig(it);
        if (!e || e.sig !== s) { if (e) { R.group.remove(e.g); disposeGroup(e.g); } g = buildTown(it); e = R.pieces[key] = { g: g, sig: s, complete: true, top: 0 }; R.group.add(g); }
        placeTown(e.g, it);
        continue;
      }
      if (!it.kit) continue;
      if (it.run) { drawRun(it); continue; }
      key = it.key; seen[key] = 1;
      e = R.pieces[key]; s = sig(it) + "|" + (e && !e.complete ? R.gen : "");
      if (!e || e.sig !== s) {
        if (e) { R.group.remove(e.g); disposeGroup(e.g); }
        g = buildPiece(it);
        e = R.pieces[key] = { g: g, sig: s, complete: g.userData.complete, top: g.userData.top };
        R.group.add(g);
      }
      host = it.hostKey && tops[it.hostKey];
      placePiece(e.g, it, host != null ? host : (it.base || 0) / api.cellH());
      if (!it.hostKey) tops[key] = e.top;
    }
    for (key in R.pieces) if (!seen[key]) { R.group.remove(R.pieces[key].g); disposeGroup(R.pieces[key].g); delete R.pieces[key]; }
    [R.boxes, R.drums].forEach(function (o) { o.mesh.count = o.n; o.mesh.instanceMatrix.needsUpdate = true; if (o.mesh.instanceColor) o.mesh.instanceColor.needsUpdate = true; });
    R.renderer.render(R.scene, R.cam);
    return true;
  }
  function disposeGroup(g) {
    g.traverse(function (o) { if (o.isMesh && o.material && o.material !== o.material.__shared) { /* clones only: shared materials stay */ } });
    if (g.userData.town) g.traverse(function (o) { if (o.isMesh) { o.geometry.dispose(); if (g.userData.own) o.material.dispose(); } });   /* a Town model's own geometry (and its see-through copies of the materials) */
  }
  function dispose() {
    if (!R) return;
    try { R.renderer.dispose(); } catch (e) {}
    R = null;
  }
  /* v6.1: the canvas rectangle a Town model covers (build.js hit tests use it in place of the picture's) */
  function screenBox(key) {
    var e = R && R.pieces["t:" + key], b, x0 = Infinity, y0 = Infinity, x1 = -Infinity, y1 = -Infinity, i, v;
    if (!e) return null;
    b = new THREE.Box3().setFromObject(e.g);
    if (!isFinite(b.min.x)) return null;
    for (i = 0; i < 8; i++) {
      v = new THREE.Vector3(i & 1 ? b.max.x : b.min.x, i & 2 ? b.max.y : b.min.y, i & 4 ? b.max.z : b.min.z).project(R.cam);
      v = { x: (v.x + 1) / 2 * R.W, y: (1 - v.y) / 2 * R.H };
      x0 = Math.min(x0, v.x); x1 = Math.max(x1, v.x); y0 = Math.min(y0, v.y); y1 = Math.max(y1, v.y);
    }
    return { x0: x0, y0: y0, x1: x1, y1: y1 };
  }
  function clear() { if (R) { R.renderer.setClearColor(0x000000, 0); R.renderer.clear(); } }

  window.SolBuild3D = { init: init, ready: ready, render: render, project: project, screenBox: screenBox, clear: clear, dispose: dispose,
    _loads: function () { var n = 0, err = 0, k; for (k in loads) { if (loads[k].obj) n++; if (loads[k].err) err++; } return { loaded: n, failed: err, total: Object.keys(loads).length, models: modelsState }; } };
})();
