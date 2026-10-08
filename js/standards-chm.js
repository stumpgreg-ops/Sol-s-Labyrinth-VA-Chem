/* SOL Lab (Virginia Chemistry): the Chemistry Standards of Learning CH.1-CH.5 and their lettered key concepts (Chemistry 1.4.1).
   The same shape as SOL Labyrinth v5.17's js/standards-va.js, so the teacher page's standards report (tools/teacher/teacher.js) can
   nest each key concept under its standard: STANDARDS[code] = { text, skills: [{ id, text, level }] }. A question's sol code
   ("CH.4.b") is the key concept, and the standard is its first two parts ("CH.4"). The Chemistry SOL has no lower-/higher-order
   (LOTS/HOTS) split, so every level is "" and the report shows no LOTS/HOTS totals. The key-concept wording is the game's
   (js/content.js STANDARDS); the standard statements are paraphrased from the 2010 Chemistry SOL and should be checked against
   the VDOE document like the rest of the standards text. */
(function (root) {
  "use strict";
  var STANDARDS = {
 "CH.1": {
  "text": "Scientific investigation: The student will investigate and understand that experiments in which variables are measured, analyzed, and evaluated produce observations and verifiable data. Key concepts include:",
  "skills": [
   {
    "id": "CH.1.a",
    "text": "designated laboratory techniques",
    "level": ""
   },
   {
    "id": "CH.1.b",
    "text": "safe use of chemicals and equipment",
    "level": ""
   },
   {
    "id": "CH.1.c",
    "text": "proper response to emergency situations",
    "level": ""
   },
   {
    "id": "CH.1.d",
    "text": "manipulation of multiple variables, using repeated trials",
    "level": ""
   },
   {
    "id": "CH.1.e",
    "text": "accurate recording, organization, and analysis of data through repeated trials",
    "level": ""
   },
   {
    "id": "CH.1.f",
    "text": "mathematical and procedural error analysis",
    "level": ""
   },
   {
    "id": "CH.1.g",
    "text": "mathematical manipulations including SI units, scientific notation, linear equations, graphing, ratio and proportion, significant digits, and dimensional analysis",
    "level": ""
   },
   {
    "id": "CH.1.h",
    "text": "use of appropriate technology including calculators, computers, balances, pH meters, spectrophotometers, probeware, and standard laboratory glassware",
    "level": ""
   },
   {
    "id": "CH.1.i",
    "text": "construction and defense of a scientific viewpoint",
    "level": ""
   },
   {
    "id": "CH.1.j",
    "text": "the use of current applications to reinforce chemistry concepts",
    "level": ""
   }
  ]
 },
 "CH.2": {
  "text": "Atomic structure and periodic relationships: The student will investigate and understand that the placement of elements on the periodic table is a function of their atomic structure. The periodic table is a tool used for the investigations of the elements. Key concepts include:",
  "skills": [
   {
    "id": "CH.2.a",
    "text": "average atomic mass, mass number, and atomic number",
    "level": ""
   },
   {
    "id": "CH.2.b",
    "text": "isotopes, half lives, and radioactive decay",
    "level": ""
   },
   {
    "id": "CH.2.c",
    "text": "mass and charge characteristics of subatomic particles",
    "level": ""
   },
   {
    "id": "CH.2.d",
    "text": "families or groups",
    "level": ""
   },
   {
    "id": "CH.2.e",
    "text": "periods",
    "level": ""
   },
   {
    "id": "CH.2.f",
    "text": "trends including atomic radii, electronegativity, shielding effect, and ionization energy",
    "level": ""
   },
   {
    "id": "CH.2.g",
    "text": "electron configurations, valence electrons, and oxidation numbers",
    "level": ""
   },
   {
    "id": "CH.2.h",
    "text": "chemical and physical properties",
    "level": ""
   },
   {
    "id": "CH.2.i",
    "text": "historical and quantum models",
    "level": ""
   }
  ]
 },
 "CH.3": {
  "text": "Nomenclature, chemical formulas, and reactions: The student will investigate and understand how conservation of energy and matter is expressed in chemical formulas and balanced equations. Key concepts include:",
  "skills": [
   {
    "id": "CH.3.a",
    "text": "nomenclature",
    "level": ""
   },
   {
    "id": "CH.3.b",
    "text": "balancing chemical equations",
    "level": ""
   },
   {
    "id": "CH.3.c",
    "text": "writing chemical formulas",
    "level": ""
   },
   {
    "id": "CH.3.d",
    "text": "bonding types",
    "level": ""
   },
   {
    "id": "CH.3.e",
    "text": "reaction types",
    "level": ""
   },
   {
    "id": "CH.3.f",
    "text": "reaction rates, kinetics, and equilibrium",
    "level": ""
   }
  ]
 },
 "CH.4": {
  "text": "Molar relationships: The student will investigate and understand that chemical quantities are based on molar relationships. Key concepts include:",
  "skills": [
   {
    "id": "CH.4.a",
    "text": "Avogadro's principle and molar volume",
    "level": ""
   },
   {
    "id": "CH.4.b",
    "text": "stoichiometric relationships",
    "level": ""
   },
   {
    "id": "CH.4.c",
    "text": "solution concentrations",
    "level": ""
   },
   {
    "id": "CH.4.d",
    "text": "acid/base theory: strong, weak, and nonelectrolytes; dissociation and ionization; pH and pOH; and the titration process",
    "level": ""
   }
  ]
 },
 "CH.5": {
  "text": "Phases of matter and kinetic molecular theory: The student will investigate and understand that the phases of matter are explained by kinetic theory and forces of attraction between particles. Key concepts include:",
  "skills": [
   {
    "id": "CH.5.a",
    "text": "pressure, temperature, and volume",
    "level": ""
   },
   {
    "id": "CH.5.b",
    "text": "partial pressure and gas laws",
    "level": ""
   },
   {
    "id": "CH.5.c",
    "text": "vapor pressure",
    "level": ""
   },
   {
    "id": "CH.5.d",
    "text": "phase changes",
    "level": ""
   },
   {
    "id": "CH.5.e",
    "text": "molar heats of fusion and vaporization",
    "level": ""
   },
   {
    "id": "CH.5.f",
    "text": "specific heat capacity",
    "level": ""
   },
   {
    "id": "CH.5.g",
    "text": "colligative properties",
    "level": ""
   }
  ]
 }
};
  var SKILL = {};
  Object.keys(STANDARDS).forEach(function (code) { STANDARDS[code].skills.forEach(function (s) { SKILL[s.id] = { code: code, text: s.text, level: s.level }; }); });
  var api = { STANDARDS: STANDARDS, SKILL: SKILL };
  if (typeof module !== "undefined" && module.exports) module.exports = api;
  if (root) root.SolStandards = api;
})(typeof window !== "undefined" ? window : (typeof globalThis !== "undefined" ? globalThis : this));
