/* SOL Lab — question-pack machinery for the Virginia EOC Chemistry SOL build.
   The packs themselves live in js/content2.js onward (one file per unit) and push into
   HEIST_PACKS. This file defines the units (families), the standards map that drives the
   skill screen, the strand filter, the adaptive level estimate and the stamina schedule. */
(function (global) {
  var PACKS = [];
  /* History 1.0: a course file loaded before this one (courses/<ID>/course.js, e.g. World History I) sets
     HEIST_COURSE with its own units, standards, skill cards and code prefix; without one this is the Chemistry game. */
  var COURSE = global.HEIST_COURSE || null;
  var PREFIX = COURSE ? COURSE.prefix : "CH";
  var CODE_RE = new RegExp("^" + PREFIX.replace(/\./g, "\\.") + "\\.\\d");
  var STD_RE = new RegExp("^(" + PREFIX.replace(/\./g, "\\.") + "\\.\\d+)");

  /* Units. `id` is the pack family; the title screen shows one card per unit plus Full review.
     The five units are the five reporting categories of the EOC Chemistry SOL test blueprint,
     one per standard CH.1–CH.5 (CH.6, organic chemistry and biochemistry, is not tested).
     `stds` lists the standard prefixes a pack in that unit may use (checked by the validator). */
  var FAMILIES = COURSE ? COURSE.families : [
    { id: "ALL", label: "Full review", short: "Full review", kind: "All units", meta: "Every reporting category mixed, leaning toward the standards you miss most. Best in the last weeks before the test.", stds: ["CH.1", "CH.2", "CH.3", "CH.4", "CH.5"] },
    { id: "INV", label: "Scientific Investigation", short: "Investigation", kind: "CH.1", meta: "Lab technique and safety, variables and trials, data and error analysis, SI units, significant digits and dimensional analysis.", stds: ["CH.1"] },
    { id: "ATOM", label: "Atomic Structure & Periodic Relationships", short: "Atoms & Periodic Table", kind: "CH.2", meta: "Atomic number and mass, isotopes and half-life, groups and periods, periodic trends, electron configurations and atomic models.", stds: ["CH.2"] },
    { id: "RXN", label: "Nomenclature, Formulas & Reactions", short: "Formulas & Reactions", kind: "CH.3", meta: "Naming compounds, writing formulas, balancing equations, bonding, reaction types, rates and equilibrium.", stds: ["CH.3"] },
    { id: "MOLE", label: "Molar Relationships", short: "Moles", kind: "CH.4", meta: "The mole and molar volume, stoichiometry, solution concentration, acids, bases, pH and titration.", stds: ["CH.4"] },
    { id: "KMT", label: "Phases of Matter & Kinetic Molecular Theory", short: "Gases & Phases", kind: "CH.5", meta: "Pressure, temperature and volume, gas laws, vapor pressure, phase changes, heats of fusion and vaporization, specific heat, colligative properties.", stds: ["CH.5"] }
  ];
  /* Which pack families feed each selection. */
  var FAMILY_POOL = {};
  FAMILIES.forEach(function (f) { FAMILY_POOL[f.id] = f.id === "ALL" ? FAMILIES.filter(function (x) { return x.id !== "ALL"; }).map(function (x) { return x.id; }) : [f.id]; });

  /* Standards map: the Virginia Chemistry Standards of Learning CH.1–CH.5 with their lettered key
     concepts, as the EOC Chemistry test blueprint cites them. The skill screen shows these as
     cards; `strand` is the prefix a claim's `sol` code must start with. */
  var STANDARDS = COURSE ? COURSE.standards : {
    "CH.1": { name: "Scientific investigation", keys: {
      a: "designated laboratory techniques",
      b: "safe use of chemicals and equipment",
      c: "proper response to emergency situations",
      d: "manipulation of multiple variables, using repeated trials",
      e: "accurate recording, organization, and analysis of data through repeated trials",
      f: "mathematical and procedural error analysis",
      g: "mathematical manipulations including SI units, scientific notation, linear equations, graphing, ratio and proportion, significant digits, and dimensional analysis",
      h: "use of appropriate technology including calculators, computers, balances, pH meters, spectrophotometers, probeware, and standard laboratory glassware",
      i: "construction and defense of a scientific viewpoint",
      j: "the use of current applications to reinforce chemistry concepts" } },
    "CH.2": { name: "Atomic structure and periodic relationships", keys: {
      a: "average atomic mass, mass number, and atomic number",
      b: "isotopes, half lives, and radioactive decay",
      c: "mass and charge characteristics of subatomic particles",
      d: "families or groups",
      e: "periods",
      f: "trends including atomic radii, electronegativity, shielding effect, and ionization energy",
      g: "electron configurations, valence electrons, and oxidation numbers",
      h: "chemical and physical properties",
      i: "historical and quantum models" } },
    "CH.3": { name: "Nomenclature, chemical formulas, and reactions", keys: {
      a: "nomenclature",
      b: "balancing chemical equations",
      c: "writing chemical formulas",
      d: "bonding types",
      e: "reaction types",
      f: "reaction rates, kinetics, and equilibrium" } },
    "CH.4": { name: "Molar relationships", keys: {
      a: "Avogadro's principle and molar volume",
      b: "stoichiometric relationships",
      c: "solution concentrations",
      d: "acid/base theory: strong, weak, and nonelectrolytes; dissociation and ionization; pH and pOH; and the titration process" } },
    "CH.5": { name: "Phases of matter and kinetic molecular theory", keys: {
      a: "pressure, temperature, and volume",
      b: "partial pressure and gas laws",
      c: "vapor pressure",
      d: "phase changes",
      e: "molar heats of fusion and vaporization",
      f: "specific heat capacity",
      g: "colligative properties" } }
  };

  /* Skill cards per unit (strand = the sol-code prefix the filter keeps; STRAND_ALIASES below
     lets one card cover neighbouring key concepts). */
  var SKILLS = COURSE ? COURSE.skills : {
    INV: [
      { strand: "CH.1.A", kind: "CH.1 a · b · c · h", name: "Lab technique & safety", meta: "Glassware, balances, probes and pH meters; handling chemicals, reading labels, responding to spills, burns and fires." },
      { strand: "CH.1.D", kind: "CH.1 d · e", name: "Design, trials & data", meta: "Independent, dependent and controlled variables, repeated trials, recording and organizing data, reading tables and graphs." },
      { strand: "CH.1.F", kind: "CH.1 f", name: "Error analysis", meta: "Percent error, precision and accuracy, systematic and random error, what a bad trial does to an average." },
      { strand: "CH.1.G", kind: "CH.1 g", name: "Math of chemistry", meta: "SI units and prefixes, scientific notation, significant digits, ratio and proportion, dimensional analysis, linear graphs." },
      { strand: "CH.1.I", kind: "CH.1 i · j", name: "Claims & applications", meta: "Defending a conclusion with evidence, and chemistry in current applications: batteries, water treatment, food, medicine." }
    ],
    ATOM: [
      { strand: "CH.2.A", kind: "CH.2 a · c", name: "Atomic number, mass & particles", meta: "Protons, neutrons and electrons; atomic number, mass number and average atomic mass from isotope abundances." },
      { strand: "CH.2.B", kind: "CH.2 b", name: "Isotopes & nuclear decay", meta: "Isotope notation, alpha, beta and gamma decay, half-life problems and decay equations." },
      { strand: "CH.2.D", kind: "CH.2 d · e", name: "Groups & periods", meta: "Alkali metals, alkaline earths, halogens, noble gases, transition metals; what a period and a group tell you." },
      { strand: "CH.2.F", kind: "CH.2 f", name: "Periodic trends", meta: "Atomic radius, ionization energy, electronegativity and shielding across a period and down a group." },
      { strand: "CH.2.G", kind: "CH.2 g", name: "Electrons & oxidation numbers", meta: "Electron configurations, orbital diagrams, valence electrons, ion charges and oxidation numbers." },
      { strand: "CH.2.H", kind: "CH.2 h · i", name: "Properties & atomic models", meta: "Physical and chemical properties and changes; Dalton, Thomson, Rutherford, Bohr and the quantum model." }
    ],
    RXN: [
      { strand: "CH.3.A", kind: "CH.3 a · c", name: "Nomenclature & formulas", meta: "Naming and writing formulas for ionic, covalent and acid compounds, polyatomic ions and hydrates." },
      { strand: "CH.3.B", kind: "CH.3 b", name: "Balancing equations", meta: "Coefficients, conservation of mass, states of matter in equations, and the smallest whole-number ratio." },
      { strand: "CH.3.D", kind: "CH.3 d", name: "Bonding", meta: "Ionic, covalent and metallic bonds, polarity, Lewis structures, molecular shape and intermolecular forces." },
      { strand: "CH.3.E", kind: "CH.3 e", name: "Reaction types", meta: "Synthesis, decomposition, single and double replacement, combustion, and predicting products." },
      { strand: "CH.3.F", kind: "CH.3 f", name: "Rates & equilibrium", meta: "Collision theory, catalysts, concentration and temperature, activation energy, and Le Chatelier's principle." }
    ],
    MOLE: [
      { strand: "CH.4.A", kind: "CH.4 a", name: "Moles & molar volume", meta: "Avogadro's number, molar mass, mole-mass-particle conversions, molar volume at STP, percent composition and empirical formulas." },
      { strand: "CH.4.B", kind: "CH.4 b", name: "Stoichiometry", meta: "Mole ratios from balanced equations, mass-to-mass problems, limiting reactant and percent yield." },
      { strand: "CH.4.C", kind: "CH.4 c", name: "Solutions", meta: "Molarity, dilution, molality, preparing a solution, solubility and concentration units." },
      { strand: "CH.4.D", kind: "CH.4 d", name: "Acids & bases", meta: "Arrhenius and Bronsted-Lowry, strong and weak electrolytes, dissociation and ionization, pH and pOH, titration." }
    ],
    KMT: [
      { strand: "CH.5.A", kind: "CH.5 a", name: "Pressure, temperature & volume", meta: "Kinetic molecular theory, kelvin, pressure units, and how P, V and T are related." },
      { strand: "CH.5.B", kind: "CH.5 b", name: "Gas laws & partial pressure", meta: "Boyle, Charles, Gay-Lussac, the combined and ideal gas laws, Dalton's law of partial pressures." },
      { strand: "CH.5.C", kind: "CH.5 c · d", name: "Vapor pressure & phase changes", meta: "Vapor pressure and boiling, heating curves, phase diagrams, melting, freezing, sublimation and condensation." },
      { strand: "CH.5.E", kind: "CH.5 e · f", name: "Heat: fusion, vaporization, specific heat", meta: "q = mcΔT, molar heat of fusion and vaporization, calorimetry and heating-curve energy." },
      { strand: "CH.5.G", kind: "CH.5 g", name: "Colligative properties", meta: "Freezing point depression, boiling point elevation, vapor pressure lowering, and how ionic solutes count." }
    ]
  };
  SKILLS.ALL = Object.keys(STANDARDS).map(function (k) {
    return { strand: k, kind: k, name: STANDARDS[k].name, meta: Object.keys(STANDARDS[k].keys).map(function (L) { return L + ") " + STANDARDS[k].keys[L]; }).join("; ") + "." };
  });
  Object.keys(SKILLS).forEach(function (fam) {
    SKILLS[fam].push({ strand: "ALL", kind: "All skills", name: "All", meta: fam === "ALL" ? "Every standard mixed, leaning toward the ones you miss most." : "Everything in this unit mixed, leaning toward the skills you miss most." });
  });
  /* Skill cards that cover several key concepts: extra prefixes the card also keeps. */
  var STRAND_ALIASES = COURSE ? (COURSE.aliases || {}) : {
    "CH.1.A": ["CH.1.B", "CH.1.C", "CH.1.H"],
    "CH.1.D": ["CH.1.E"],
    "CH.1.I": ["CH.1.J"],
    "CH.2.A": ["CH.2.C"],
    "CH.2.D": ["CH.2.E"],
    "CH.2.H": ["CH.2.I"],
    "CH.3.A": ["CH.3.C"],
    "CH.5.C": ["CH.5.D"],
    "CH.5.E": ["CH.5.F"]
  };

  function wordCount(s) {
    return String(s).replace(/<[^>]+>/g, " ").trim().split(/\s+/).filter(Boolean).length;
  }

  function letterIndex(claim, letter) {
    var ch = (claim && claim.choices) || [];
    var L = String(letter).toUpperCase();
    for (var i = 0; i < ch.length; i++) {
      if (String(ch[i].letter).toUpperCase() === L) return i;
    }
    var fallback = "ABCD".indexOf(L);
    return fallback >= 0 ? fallback : 0;
  }

  function correctList(claim) {
    var c = claim && claim.correct;
    if (c == null) return [];
    var raw = Array.isArray(c) ? c.slice() : [c];
    return raw.map(function (x) {
      if (typeof x === "number") return x;
      return letterIndex(claim, x);
    });
  }

  function isMulti(claim) {
    return correctList(claim).length > 1;
  }

  /* A claim's strand is its full standard code, upper-cased: "CH.4.b" -> "CH.4.B". */
  function strandOf(claim) {
    if (claim && claim.strand) return String(claim.strand).toUpperCase();
    var sol = String((claim && claim.sol) || "").toUpperCase().replace(/\s+/g, "");
    return CODE_RE.test(sol) ? sol : PREFIX + ".1";
  }
  function standardOf(claim) {
    var m = STD_RE.exec(strandOf(claim));
    return m ? m[1] : PREFIX + ".1";
  }
  function prefixMatch(code, prefix) {
    return code === prefix || code.indexOf(prefix + ".") === 0;
  }
  function strandMatch(claim, strand) {
    strand = String(strand || "ALL").toUpperCase();
    if (!strand || strand === "ALL" || strand === "NULL") return true;
    if (!CODE_RE.test(strand)) return true;
    var code = strandOf(claim);
    if (prefixMatch(code, strand)) return true;
    var extra = STRAND_ALIASES[strand] || [];
    for (var i = 0; i < extra.length; i++) if (prefixMatch(code, extra[i])) return true;
    return false;
  }

  /* Difficulty 1–3 for the adaptive picker: the pack's own `level` tag, or an
     estimate from sentence length and long words when a pack has none. */
  function syllables(word) {
    word = word.toLowerCase().replace(/[^a-z]/g, "");
    if (!word) return 0;
    if (word.length <= 3) return 1;
    var v = word.replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, "").replace(/^y/, "").match(/[aeiouy]{1,2}/g);
    return v ? v.length : 1;
  }
  function readingGrade(html) {
    var text = String(html).replace(/<[^>]+>/g, " ").replace(/\(\d+\)/g, " ");
    var words = text.split(/\s+/).filter(Boolean), sents = text.split(/[.!?]+\s/).filter(Boolean).length || 1, syl = 0;
    if (!words.length) return 5;
    words.forEach(function (w) { syl += syllables(w); });
    return 0.39 * (words.length / sents) + 11.8 * (syl / words.length) - 15.59;   /* Flesch–Kincaid grade */
  }
  function passageWords(p) {
    if (p._words) return p._words;
    var text = String(p.passage || "").replace(/<[^>]+>/g, " ").replace(/\(\d+\)/g, " ");
    p._words = text.split(/\s+/).filter(Boolean).length;
    return p._words;
  }
  /* Stamina schedule: the stimulus length the picker aims for on a given level. Word counts
     include table cells, so a "tiny" 60-word note with a data table measures 80-100.
     Level 1 targets ~65 words; every 3 levels the target grows by 5 words, reaching ~225
     words by level 99. Tune in STAMINA. */
  var STAMINA = { start: 65, step: 5, every: 3, max: 240 };
  function targetWords(night) {
    night = Math.max(1, parseInt(night, 10) || 1);
    return Math.min(STAMINA.max, STAMINA.start + STAMINA.step * Math.floor((night - 1) / STAMINA.every));
  }
  function packLevel(p) {
    if (p.level === 1 || p.level === 2 || p.level === 3) return p.level;
    var g = readingGrade(p.passage || "");
    return g < 8 ? 1 : g < 10.5 ? 2 : 3;
  }

  function familyDef(id) {
    for (var i = 0; i < FAMILIES.length; i++) if (FAMILIES[i].id === id) return FAMILIES[i];
    return null;
  }

  function buildPack(family, strand) {
    family = family || "ALL";
    strand = String(strand == null ? "ALL" : strand).toUpperCase();
    if (!strand || strand === "NULL") strand = "ALL";
    var pool = FAMILY_POOL[family] || FAMILY_POOL.ALL;
    var src = PACKS.filter(function (p) {
      return pool.indexOf(p.family) !== -1;
    });
    if (!src.length) src = PACKS.slice();
    var slips = [];
    var claims = [];
    src.forEach(function (p) {
      var lvl = packLevel(p);
      p.claims.forEach(function (c) {
        /* A Part B item is only ever asked right after its Part A, so the strand
           filter follows the Part A and Part B is never drawn on its own. */
        var isPartB = p.claims.some(function (o) { return o.partB === c.id; });
        if (!isPartB && !strandMatch(c, strand)) return;
        var choices = (c.choices || []).map(function (ch, i) {
          return {
            letter: ch.letter,
            text: ch.text,
            slipIndex: i
          };
        });
        claims.push({
          id: p.id + ":" + c.id,
          packId: p.id,
          sol: c.sol,
          strand: strandOf(c),
          standard: standardOf(c),
          level: lvl,
          words: passageWords(p),
          partB: c.partB ? p.id + ":" + c.partB : null,
          isPartB: isPartB,
          stem: c.stem,
          doThis: c.stem,
          claim: c.stem,
          choices: choices,
          correct: c.correct,
          passage: p.passage,
          packTitle: p.title,
          family: p.family
        });
      });
    });
    /* If the strand filter emptied the pool (sparse strand in a unit), fall back to unit-all. */
    if (!claims.length && strand !== "ALL") {
      return buildPack(family, "ALL");
    }
    var card = familyDef(family);
    var title = card ? card.label : family;
    if (strand && strand !== "ALL") title = title + " · " + strand;
    return {
      family: family,
      strand: strand,
      title: title,
      slips: slips,
      claims: claims
    };
  }

  global.HEIST_PACKS = PACKS;
  global.HEIST_PREFIX = PREFIX;
  global.HEIST_COURSE_TAG = COURSE ? COURSE.tag : "CHM";
  global.HEIST_FAMILIES = FAMILIES;
  global.HEIST_FAMILY_POOL = FAMILY_POOL;
  global.HEIST_STANDARDS = STANDARDS;
  global.HEIST_SKILLS = SKILLS;
  global.HEIST_STRAND_ALIASES = STRAND_ALIASES;
  global.heistWordCount = wordCount;
  global.heistBuildPack = buildPack;
  global.heistCorrectList = correctList;
  global.heistStrandOf = strandOf;
  global.heistStandardOf = standardOf;
  global.heistStrandMatch = strandMatch;
  global.heistFamilyDef = familyDef;
  global.heistPackLevel = packLevel;
  global.heistTargetWords = targetWords;
  global.heistStamina = STAMINA;
  global.heistIsMulti = isMulti;
})(typeof window !== "undefined" ? window : global);
