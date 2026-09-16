# Writing question packs for SOL Lab (Virginia EOC Chemistry)

Every pack is one **stimulus** (a short lab note, procedure, data table, equation set or model
description) plus 4–6 multiple-choice questions ("claims"). Packs live in `js/content*.js`, one
file per unit. Each file is an IIFE that pushes into the live `HEIST_PACKS` array:

```js
/* SOL Lab — <unit>. Original text only. */
(function (global) {
  var P = global.HEIST_PACKS;
  if (!P || !P.push) return;
  var N = function (i) { return '<span class="n">(' + i + ')</span> '; };   // numbered sentence

  var PACKS = [
    { /* pack */ },
    ...
  ];

  for (var i = 0; i < PACKS.length; i++) P.push(PACKS[i]);
})(typeof window !== "undefined" ? window : global);
```

Validate with `node tools/validate-content.js js/contentN.js` — it must print `OK — no errors`.
Fix warnings too where you can (spread answer keys, keep the correct choice from being the longest).

## Pack shape

```js
{
  id: "mole-baking-soda-yield",     // unique, lowercase, unit-slug
  family: "MOLE",                  // INV | ATOM | RXN | MOLE | KMT
  title: "Baking soda in the beaker",
  kind: "Molar Relationships · CH.4",   // unit name · standard
  blurb: "One line shown on the pack card.",
  level: 2,                        // 1 easy · 2 medium · 3 hard (reading + reasoning load)
  passage: "<p>" + N(1) + "First sentence. " + N(2) + "Second sentence. ... </p>",
  claims: [
    {
      id: "limiting",              // unique within the pack
      sol: "CH.4.b",               // standard code from the map below (lower-case letter)
      stem: "Which reactant limits the amount of CO₂ produced?",
      choices: [
        { letter: "A", text: "..." },
        { letter: "B", text: "..." },
        { letter: "C", text: "..." },
        { letter: "D", text: "..." }
      ],
      correct: "B"                 // or ["A", "C"] for a Select TWO item (stem must say "Select TWO")
    }
  ]
}
```

## The stimulus

The stimulus is what the Virginia test calls the "passage" of a science item set: a few
sentences that set up a lab, a procedure, a data set, a set of equations or a model, and that
the questions can point back to. Write it as HTML:

- `<p>` paragraphs, every sentence numbered with `N(i)` so stems can say "In sentence 3, …".
- Data tables use a real `<table>`: `<table><tr><th>Trial</th><th>Mass Mg (g)</th><th>Volume H<sub>2</sub> (mL)</th></tr><tr><td>1</td><td>0.12</td><td>118</td></tr>…</table>`.
  Keep tables to 2–4 columns and 3–6 rows so they fit the side panel on a Chromebook.
- Short lists of steps or observations may use `<ol>`/`<ul>`.
- Bold key terms with `<strong>`.
- No images. Describe a graph, a diagram, a heating curve or a model in words instead ("The
  graph of pressure against volume curves downward: doubling the volume halves the pressure").
- **Give the numbers the student would get from the test's periodic table or formula sheet.**
  State molar masses, constants and equations inside the stimulus when an item needs them:
  "Use: H = 1.0, C = 12.0, O = 16.0 g/mol", "R = 0.0821 L·atm/(mol·K)", "1 mol of gas at STP
  occupies 22.4 L", "c of water = 4.18 J/(g·°C)". Use these rounded values everywhere:
  H 1.0 · He 4.0 · Li 6.9 · C 12.0 · N 14.0 · O 16.0 · F 19.0 · Ne 20.2 · Na 23.0 · Mg 24.3 ·
  Al 27.0 · Si 28.1 · P 31.0 · S 32.1 · Cl 35.5 · Ar 39.9 · K 39.1 · Ca 40.1 · Fe 55.8 · Cu 63.5 ·
  Zn 65.4 · Ag 107.9 · I 126.9 · Ba 137.3 · Pb 207.2 g/mol. Avogadro 6.02 × 10²³. 1 atm = 760 mm Hg
  = 101.3 kPa. K = °C + 273. ΔH_fus water 334 J/g (6.01 kJ/mol), ΔH_vap water 2260 J/g (40.7 kJ/mol).
  K_w = 1.0 × 10⁻¹⁴. K_f water 1.86 °C/m, K_b water 0.512 °C/m.
- Word counts (excluding the sentence numbers) by tier; table cells count too:

| tier   | levels  | words   | questions |
|--------|---------|---------|-----------|
| tiny   | 1–15    | 40–70   | 4–5       |
| short  | 16–40   | 70–110  | 5–6       |
| medium | 41–70   | 110–160 | 6         |
| long   | 71–100  | 160–220 | 6         |

The picker aims for a longer stimulus as levels go by (`STAMINA` in `js/content.js`), so each
unit file needs every tier: aim for 4 tiny, 4 short, 3 medium and 3 long packs (about 14 packs
and 75–80 questions per unit).

## Formulas, subscripts and symbols

- **Stems are plain text** (the game sets them with `textContent`), so HTML tags would show as
  code. Use Unicode subscript and superscript characters in stems:
  `H₂O`, `CO₂`, `C₆H₁₂O₆`, `Na⁺`, `SO₄²⁻`, `6.02 × 10²³`, `1.0 × 10⁻⁷`, `Δ`, `°C`, `→`, `⇌`.
  Digits: ₀₁₂₃₄₅₆₇₈₉ and ⁰¹²³⁴⁵⁶⁷⁸⁹; signs: ⁺ ⁻.
- **Choices and the stimulus are HTML**, so either style works there; for consistency use the
  same Unicode characters in choices, and use `<sub>`/`<sup>` only inside tables if a cell needs
  them. Never put `<sub>` in a stem.
- Write equations with a real arrow and spaces: `2 H₂ + O₂ → 2 H₂O`. Show states when a question
  is about them: `(s) (l) (g) (aq)`.
- Use the multiplication sign `×` in scientific notation, and a space before units: `22.4 L`,
  `0.50 mol`, `101.3 kPa`.

## Units and standards

Packs align to the **Virginia Chemistry Standards of Learning CH.1–CH.5**, the five reporting
categories of the EOC Chemistry SOL test blueprint. `sol` is the standard and key-concept
letter (`CH.4.b`). A pack's `family` decides which unit card it sits under and which codes it
may use; the validator rejects a code outside the unit. CH.6 (organic chemistry and
biochemistry) is not on the test and has no unit.

| family | unit                                              | codes     | key concepts |
|--------|---------------------------------------------------|-----------|--------------|
| INV    | Scientific Investigation                          | CH.1.a–j  | a designated laboratory techniques · b safe use of chemicals and equipment · c proper response to emergency situations · d manipulation of multiple variables, using repeated trials · e accurate recording, organization, and analysis of data through repeated trials · f mathematical and procedural error analysis · g SI units, scientific notation, linear equations, graphing, ratio and proportion, significant digits, dimensional analysis · h appropriate technology: calculators, computers, balances, pH meters, spectrophotometers, probeware, standard glassware · i construction and defense of a scientific viewpoint · j current applications that reinforce chemistry concepts |
| ATOM   | Atomic Structure & Periodic Relationships          | CH.2.a–i  | a average atomic mass, mass number, atomic number · b isotopes, half-lives, radioactive decay · c mass and charge of subatomic particles · d families or groups · e periods · f trends: atomic radii, electronegativity, shielding effect, ionization energy · g electron configurations, valence electrons, oxidation numbers · h chemical and physical properties · i historical and quantum models |
| RXN    | Nomenclature, Chemical Formulas & Reactions        | CH.3.a–f  | a nomenclature · b balancing chemical equations · c writing chemical formulas · d bonding types · e reaction types · f reaction rates, kinetics, and equilibrium |
| MOLE   | Molar Relationships                               | CH.4.a–d  | a Avogadro's principle and molar volume · b stoichiometric relationships · c solution concentrations · d acid/base theory: strong, weak and nonelectrolytes; dissociation and ionization; pH and pOH; titration |
| KMT    | Phases of Matter & Kinetic Molecular Theory        | CH.5.a–g  | a pressure, temperature, and volume · b partial pressure and gas laws · c vapor pressure · d phase changes · e molar heats of fusion and vaporization · f specific heat capacity · g colligative properties |

The skill cards in `js/content.js` (`HEIST_SKILLS`) group neighbouring key concepts (for
example "Lab technique & safety" keeps CH.1 a, b, c and h; "Vapor pressure & phase changes"
keeps CH.5 c and d). Every key concept in the table must appear in at least one item of its
unit so no skill card is empty.

The Virginia test embeds the CH.1 practices in every category: a Molar Relationships pack can
(and should) include a question about significant digits in a mass reading or the trend in a
table, but tag it with the unit's own code (`CH.4.b`) when it is really about stoichiometry,
and with `CH.1.x` **only in the INV unit**. Every unit file should still read like a lab:
measurements, trials, procedures, data.

## Writing rules

- **Original text only.** No copied test items, textbook passages or real published data
  sets. No real people. Invented but realistic numbers.
- **Check every calculation.** Work each numeric item to the answer before writing the key;
  distractors are the results of common mistakes (forgot to convert to kelvin, used mass
  ratio instead of mole ratio, inverted a conversion factor, dropped a coefficient), so they
  must also be computed, not guessed. Answers to numeric items are rounded to the significant
  digits the data allow. Chemistry facts (trends, ion charges, formulas, reaction types,
  which acid is strong) must be textbook-correct.
- **Virginia where it fits.** The Chesapeake Bay and its oysters, the James River, road salt on
  I-64, Shenandoah limestone caves, peanut and soybean farms, the coal fields, the shipyard,
  Newport News tap water. Do not overdo it: about a third of the packs.
- **One defensible answer.** Distractors are plausible (a true-but-off-question fact, a common
  misconception such as "a catalyst is used up", a reversed trend, a misread table row) but
  clearly wrong on a careful re-read. Keep the four choices similar in length and grammar.
  Never let the correct choice be the only one that repeats a phrase from the stem.
- **Spread the keys**: across a pack's items use each letter at least once, no letter more than
  twice.
- **Stems** use test phrasing: "Which conclusion is best supported by the data in the table?",
  "The independent variable in this investigation is —", "Which statement best explains why…",
  "Based on the balanced equation, how many moles of…", "Which of these has the greatest
  ionization energy?", "According to the kinetic molecular theory…", "Select TWO …". Stems
  that end in a dash have choices that complete the sentence (lower-case start).
- **Skills per pack** (6 items): mix at least three different key concepts, and include at
  least one data or investigation item (a control, a variable, a trend, a conclusion) and one
  vocabulary-in-context item (a bold term from the stimulus).
- **Level tags**: in each file spread levels roughly evenly. Level 1 = one-step recall or a
  direct read of the table; level 3 = multi-step calculation, an explanation of mechanism, a
  prediction from a model, or a Select TWO.
- Escape quotes inside JS strings (`\"`), use plain apostrophes, and keep each choice on one
  line as in the existing files.
