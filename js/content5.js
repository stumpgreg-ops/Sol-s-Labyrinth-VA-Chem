/* SOL Lab — Molar Relationships (CH.4). Original text only. */
(function (global) {
  var P = global.HEIST_PACKS;
  if (!P || !P.push) return;
  var N = function (i) { return '<span class="n">(' + i + ')</span> '; };   // numbered sentence

  var PACKS = [
    /* ---------- tiny ---------- */
    {
      id: "mole-weighing-out-moles",
      family: "MOLE",
      title: "Weighing out a mole",
      kind: "Molar Relationships · CH.4",
      blurb: "Two compounds, a periodic table and a balance: grams to moles and back.",
      level: 1,
      passage: "<p>" + N(1) + "A student needs 0.200 mol of sodium chloride, NaCl, and 0.500 mol of calcium carbonate, CaCO₃, for a reaction lab. " + N(2) + "She works out the <strong>molar mass</strong> of each compound from the periodic table, then weighs each one on a balance to the nearest 0.01 g. " + N(3) + "Use: Na = 23.0, Cl = 35.5, Ca = 40.1, C = 12.0, O = 16.0 g/mol; 1 mol contains 6.02 × 10²³ particles.</p>",
      claims: [
        {
          id: "mm-nacl",
          sol: "CH.4.a",
          stem: "What is the molar mass of sodium chloride, NaCl?",
          choices: [
            { letter: "A", text: "23.0 g/mol" },
            { letter: "B", text: "58.5 g/mol" },
            { letter: "C", text: "29.3 g/mol" },
            { letter: "D", text: "117 g/mol" }
          ],
          correct: "B"
        },
        {
          id: "mass-nacl",
          sol: "CH.4.a",
          stem: "What mass of NaCl should the student weigh out to obtain 0.200 mol?",
          choices: [
            { letter: "A", text: "0.00342 g" },
            { letter: "B", text: "58.5 g" },
            { letter: "C", text: "11.7 g" },
            { letter: "D", text: "29.3 g" }
          ],
          correct: "C"
        },
        {
          id: "particles",
          sol: "CH.4.a",
          stem: "How many formula units of NaCl are present in 0.200 mol?",
          choices: [
            { letter: "A", text: "1.20 × 10²³" },
            { letter: "B", text: "3.01 × 10²⁴" },
            { letter: "C", text: "6.02 × 10²³" },
            { letter: "D", text: "1.20 × 10²²" }
          ],
          correct: "A"
        },
        {
          id: "mass-caco3",
          sol: "CH.4.a",
          stem: "What mass of CaCO₃ contains 0.500 mol?",
          choices: [
            { letter: "A", text: "200 g" },
            { letter: "B", text: "20.1 g" },
            { letter: "C", text: "11.2 g" },
            { letter: "D", text: "50.1 g" }
          ],
          correct: "D"
        },
        {
          id: "term",
          sol: "CH.4.a",
          stem: "As used in sentence 2, the molar mass of a compound is —",
          choices: [
            { letter: "A", text: "the number of atoms in one formula unit" },
            { letter: "B", text: "the mass in grams of one mole of the compound" },
            { letter: "C", text: "the volume one mole occupies at STP" },
            { letter: "D", text: "the mass of one particle in atomic mass units" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "mole-hydrogen-at-stp",
      family: "MOLE",
      title: "Hydrogen collected at STP",
      kind: "Molar Relationships · CH.4",
      blurb: "Zinc meets acid; 448 mL of gas tells you how much metal reacted.",
      level: 1,
      passage: "<p>" + N(1) + "A student drops a strip of zinc into excess hydrochloric acid and collects the hydrogen gas over water: Zn(s) + 2 HCl(aq) → ZnCl₂(aq) + H₂(g). " + N(2) + "After the volume is corrected to <strong>STP</strong> (0 °C and 1 atm), the gas occupies 448 mL. " + N(3) + "Use: 1 mol of any gas at STP occupies 22.4 L; Zn = 65.4 g/mol.</p>",
      claims: [
        {
          id: "mol-h2",
          sol: "CH.4.a",
          stem: "How many moles of H₂ were collected?",
          choices: [
            { letter: "A", text: "20.0 mol" },
            { letter: "B", text: "10.0 mol" },
            { letter: "C", text: "0.0200 mol" },
            { letter: "D", text: "0.0100 mol" }
          ],
          correct: "C"
        },
        {
          id: "avogadro",
          sol: "CH.4.a",
          stem: "According to Avogadro's principle, 448 mL of H₂ and 448 mL of CO₂ at STP contain —",
          choices: [
            { letter: "A", text: "the same number of molecules" },
            { letter: "B", text: "the same mass of gas" },
            { letter: "C", text: "the same number of atoms of each element" },
            { letter: "D", text: "the same density" }
          ],
          correct: "A"
        },
        {
          id: "mol-zn",
          sol: "CH.4.b",
          stem: "Based on the balanced equation, how many moles of zinc reacted?",
          choices: [
            { letter: "A", text: "0.0400 mol" },
            { letter: "B", text: "0.0100 mol" },
            { letter: "C", text: "0.448 mol" },
            { letter: "D", text: "0.0200 mol" }
          ],
          correct: "D"
        },
        {
          id: "mass-zn",
          sol: "CH.4.b",
          stem: "What mass of zinc was used up in the reaction?",
          choices: [
            { letter: "A", text: "2.62 g" },
            { letter: "B", text: "1.31 g" },
            { letter: "C", text: "0.654 g" },
            { letter: "D", text: "29.3 g" }
          ],
          correct: "B"
        },
        {
          id: "why-stp",
          sol: "CH.4.a",
          stem: "Why is the gas volume corrected to STP before the moles are calculated?",
          choices: [
            { letter: "A", text: "The molar volume of 22.4 L applies only at 0 °C and 1 atm." },
            { letter: "B", text: "Hydrogen gas cannot be measured accurately at room temperature." },
            { letter: "C", text: "Zinc reacts with acid only at 0 °C and 1 atm." },
            { letter: "D", text: "Water vapor condenses to a liquid at STP." }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "mole-kitchen-ph-meter",
      family: "MOLE",
      title: "A pH meter in the kitchen",
      kind: "Molar Relationships · CH.4",
      blurb: "Lemon juice to ammonia: read the meter and find the ion concentrations.",
      level: 1,
      passage: "<p>" + N(1) + "A student calibrates a pH meter with buffer solutions and then tests five liquids from home, including Newport News tap water. " + N(2) + "A pH of 7.0 is <strong>neutral</strong>: the concentrations of H⁺ and OH⁻ are equal. " + N(3) + "Use: pH = −log[H⁺]; pH + pOH = 14.</p>" +
        "<table><tr><th>Liquid</th><th>pH</th></tr><tr><td>Lemon juice</td><td>2.0</td></tr><tr><td>Black coffee</td><td>5.0</td></tr><tr><td>Tap water</td><td>7.0</td></tr><tr><td>Baking soda solution</td><td>8.0</td></tr><tr><td>Ammonia cleaner</td><td>11.0</td></tr></table>",
      claims: [
        {
          id: "h-lemon",
          sol: "CH.4.d",
          stem: "What is the hydrogen ion concentration, [H⁺], of the lemon juice?",
          choices: [
            { letter: "A", text: "2.0 M" },
            { letter: "B", text: "1.0 × 10⁻² M" },
            { letter: "C", text: "1.0 × 10⁻¹² M" },
            { letter: "D", text: "1.0 × 10² M" }
          ],
          correct: "B"
        },
        {
          id: "poh-ammonia",
          sol: "CH.4.d",
          stem: "What is the pOH of the ammonia cleaner?",
          choices: [
            { letter: "A", text: "3.0" },
            { letter: "B", text: "11.0" },
            { letter: "C", text: "25.0" },
            { letter: "D", text: "1.0 × 10⁻¹¹" }
          ],
          correct: "A"
        },
        {
          id: "most-basic",
          sol: "CH.4.d",
          stem: "Which liquid in the table has the highest concentration of OH⁻ ions?",
          choices: [
            { letter: "A", text: "lemon juice" },
            { letter: "B", text: "black coffee" },
            { letter: "C", text: "baking soda solution" },
            { letter: "D", text: "ammonia cleaner" }
          ],
          correct: "D"
        },
        {
          id: "ratio",
          sol: "CH.4.d",
          stem: "The [H⁺] of lemon juice is how many times greater than the [H⁺] of black coffee?",
          choices: [
            { letter: "A", text: "3 times" },
            { letter: "B", text: "30 times" },
            { letter: "C", text: "1000 times" },
            { letter: "D", text: "100 000 times" }
          ],
          correct: "C"
        },
        {
          id: "neutral",
          sol: "CH.4.d",
          stem: "Based on sentence 2, which statement about the tap water is correct?",
          choices: [
            { letter: "A", text: "It contains no H⁺ or OH⁻ ions at all." },
            { letter: "B", text: "Its [H⁺] and [OH⁻] are both 1.0 × 10⁻⁷ M." },
            { letter: "C", text: "Its pOH is 0 because it is not basic." },
            { letter: "D", text: "It has more H⁺ ions than the baking soda solution has OH⁻." }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "mole-volumetric-flask",
      family: "MOLE",
      title: "Filling to the line",
      kind: "Molar Relationships · CH.4",
      blurb: "0.585 g of salt and a 100.0 mL volumetric flask make a 0.100 M solution.",
      level: 1,
      passage: "<p>" + N(1) + "To prepare 100.0 mL of 0.100 M sodium chloride, a student weighs 0.585 g of NaCl into a beaker, dissolves it in about 50 mL of distilled water, and pours the solution into a 100.0 mL <strong>volumetric flask</strong>. " + N(2) + "He rinses the beaker into the flask, adds water until the bottom of the meniscus sits on the etched line, then caps and inverts the flask. " + N(3) + "Use: NaCl = 58.5 g/mol.</p>",
      claims: [
        {
          id: "molarity-def",
          sol: "CH.4.c",
          stem: "The molarity of a solution is defined as —",
          choices: [
            { letter: "A", text: "grams of solute per liter of solvent" },
            { letter: "B", text: "moles of solute per kilogram of solvent" },
            { letter: "C", text: "moles of solute per liter of solution" },
            { letter: "D", text: "grams of solute per 100 g of solution" }
          ],
          correct: "C"
        },
        {
          id: "mol-in-flask",
          sol: "CH.4.c",
          stem: "How many moles of NaCl are in the finished 100.0 mL of solution?",
          choices: [
            { letter: "A", text: "0.0100 mol" },
            { letter: "B", text: "0.100 mol" },
            { letter: "C", text: "0.585 mol" },
            { letter: "D", text: "0.00585 mol" }
          ],
          correct: "A"
        },
        {
          id: "why-line",
          sol: "CH.4.c",
          stem: "Why does the student fill the flask to the line instead of adding exactly 100.0 mL of water to the salt?",
          choices: [
            { letter: "A", text: "Adding water first would keep the salt from dissolving." },
            { letter: "B", text: "A volumetric flask cannot measure the volume of pure water accurately." },
            { letter: "C", text: "The salt would react with exactly 100.0 mL of water." },
            { letter: "D", text: "Molarity is based on the total volume of solution, not of water." }
          ],
          correct: "D"
        },
        {
          id: "scale-up",
          sol: "CH.4.c",
          stem: "What mass of NaCl would be needed to prepare 250.0 mL of the same 0.100 M solution?",
          choices: [
            { letter: "A", text: "5.85 g" },
            { letter: "B", text: "1.46 g" },
            { letter: "C", text: "14.6 g" },
            { letter: "D", text: "0.146 g" }
          ],
          correct: "B"
        }
      ]
    },

    /* ---------- short ---------- */
    {
      id: "mole-road-salt-brine",
      family: "MOLE",
      title: "Brine on I-64",
      kind: "Molar Relationships · CH.4",
      blurb: "A 23 percent salt brine from the VDOT tank: moles, molality and a dilution.",
      level: 2,
      passage: "<p>" + N(1) + "Before a winter storm, a highway crew sprays a salt <strong>brine</strong> on I-64 near Williamsburg so that ice cannot bond to the pavement. " + N(2) + "The brine is 23.0% sodium chloride by mass: every 100.0 g of brine contains 23.0 g of NaCl dissolved in 77.0 g of water. " + N(3) + "A student notes that the tank solution is close to 5.00 M and that a small test batch for a freezing-point experiment is made by diluting 500.0 mL of it to a final volume of 2.00 L. " + N(4) + "Use: Na = 23.0, Cl = 35.5 g/mol; molality = moles of solute per kilogram of solvent.</p>",
      claims: [
        {
          id: "mol-nacl",
          sol: "CH.4.a",
          stem: "How many moles of NaCl are in 23.0 g of the salt?",
          choices: [
            { letter: "A", text: "2.54 mol" },
            { letter: "B", text: "0.393 mol" },
            { letter: "C", text: "1.00 mol" },
            { letter: "D", text: "1.35 × 10³ mol" }
          ],
          correct: "B"
        },
        {
          id: "molality",
          sol: "CH.4.c",
          stem: "What is the molality of the brine described in sentence 2?",
          choices: [
            { letter: "A", text: "3.93 m" },
            { letter: "B", text: "17.1 m" },
            { letter: "C", text: "299 m" },
            { letter: "D", text: "5.11 m" }
          ],
          correct: "D"
        },
        {
          id: "pct-na",
          sol: "CH.4.a",
          stem: "What is the percent by mass of sodium in NaCl?",
          choices: [
            { letter: "A", text: "39.3%" },
            { letter: "B", text: "60.7%" },
            { letter: "C", text: "23.0%" },
            { letter: "D", text: "50.0%" }
          ],
          correct: "A"
        },
        {
          id: "dilution",
          sol: "CH.4.c",
          stem: "What is the molarity of the test batch after 500.0 mL of 5.00 M brine is diluted to 2.00 L?",
          choices: [
            { letter: "A", text: "20.0 M" },
            { letter: "B", text: "2.50 M" },
            { letter: "C", text: "1.25 M" },
            { letter: "D", text: "0.500 M" }
          ],
          correct: "C"
        },
        {
          id: "electrolyte",
          sol: "CH.4.d",
          stem: "The brine conducts electricity well because —",
          choices: [
            { letter: "A", text: "the salt ionizes only partially, producing a small number of free ions" },
            { letter: "B", text: "the salt dissociates completely into mobile Na⁺ and Cl⁻ ions" },
            { letter: "C", text: "whole NaCl molecules move freely through the water" },
            { letter: "D", text: "water molecules gain a charge when salt dissolves" }
          ],
          correct: "B"
        },
        {
          id: "term",
          sol: "CH.4.c",
          stem: "As used in sentence 1, a brine is best described as —",
          choices: [
            { letter: "A", text: "a mixture of salt crystals and sand" },
            { letter: "B", text: "a solid coating that melts ice as soon as it touches the road" },
            { letter: "C", text: "pure water that has been chilled below 0 °C" },
            { letter: "D", text: "a concentrated solution of salt dissolved in water" }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "mole-conductivity-tester",
      family: "MOLE",
      title: "Bright, dim or dark",
      kind: "Molar Relationships · CH.4",
      blurb: "Six solutions and a light bulb sort the strong, weak and non-electrolytes.",
      level: 1,
      passage: "<p>" + N(1) + "A student places the probes of a conductivity tester into six 0.10 M solutions and records the brightness of the bulb. " + N(2) + "A bright bulb means the solution contains many mobile ions; a dim bulb means only a few. " + N(3) + "A <strong>strong electrolyte</strong> breaks up completely into ions in water, a <strong>weak electrolyte</strong> forms only a small fraction of ions, and a <strong>nonelectrolyte</strong> forms none. " + N(4) + "The student must explain each result using the terms dissociation or ionization.</p>" +
        "<table><tr><th>Solution (0.10 M)</th><th>Bulb</th></tr><tr><td>HCl</td><td>bright</td></tr><tr><td>NaOH</td><td>bright</td></tr><tr><td>NaCl</td><td>bright</td></tr><tr><td>CH₃COOH</td><td>dim</td></tr><tr><td>NH₃</td><td>dim</td></tr><tr><td>Sucrose, C₁₂H₂₂O₁₁</td><td>off</td></tr></table>",
      claims: [
        {
          id: "weak",
          sol: "CH.4.d",
          stem: "Which solution in the table contains a weak electrolyte?",
          choices: [
            { letter: "A", text: "HCl" },
            { letter: "B", text: "NaCl" },
            { letter: "C", text: "CH₃COOH" },
            { letter: "D", text: "sucrose" }
          ],
          correct: "C"
        },
        {
          id: "sucrose",
          sol: "CH.4.d",
          stem: "Which statement best explains why the bulb stayed off in the sucrose solution?",
          choices: [
            { letter: "A", text: "Sucrose dissolves as whole molecules and forms no ions." },
            { letter: "B", text: "Sucrose does not dissolve in water at all." },
            { letter: "C", text: "Sucrose ions are too large to move through the water toward the probes." },
            { letter: "D", text: "Sucrose reacts with water to form a solid." }
          ],
          correct: "A"
        },
        {
          id: "hcl-vs-acetic",
          sol: "CH.4.d",
          stem: "HCl and CH₃COOH are both acids at the same concentration. Which statement explains the different bulb readings?",
          choices: [
            { letter: "A", text: "HCl contains more hydrogen atoms in each molecule than CH₃COOH does." },
            { letter: "B", text: "CH₃COOH has a higher molar mass, so it produces more ions." },
            { letter: "C", text: "CH₃COOH is a stronger acid than HCl at 0.10 M." },
            { letter: "D", text: "HCl ionizes completely in water; CH₃COOH ionizes only partly." }
          ],
          correct: "D"
        },
        {
          id: "dissociation",
          sol: "CH.4.d",
          stem: "Which term best describes what happens when solid NaCl dissolves and its ions separate in water?",
          choices: [
            { letter: "A", text: "ionization" },
            { letter: "B", text: "dissociation" },
            { letter: "C", text: "neutralization" },
            { letter: "D", text: "precipitation" }
          ],
          correct: "B"
        },
        {
          id: "mm-sucrose",
          sol: "CH.4.a",
          stem: "What is the molar mass of sucrose, C₁₂H₂₂O₁₁? (Use: C = 12.0, H = 1.0, O = 16.0 g/mol.)",
          choices: [
            { letter: "A", text: "45 g/mol" },
            { letter: "B", text: "342 g/mol" },
            { letter: "C", text: "29.0 g/mol" },
            { letter: "D", text: "182 g/mol" }
          ],
          correct: "B"
        },
        {
          id: "mol-nacl",
          sol: "CH.4.c",
          stem: "How many moles of NaCl are dissolved in 250 mL of the 0.10 M NaCl solution?",
          choices: [
            { letter: "A", text: "0.025 mol" },
            { letter: "B", text: "0.40 mol" },
            { letter: "C", text: "25 mol" },
            { letter: "D", text: "0.0025 mol" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "mole-magnesium-crucible",
      family: "MOLE",
      title: "Magnesium in the crucible",
      kind: "Molar Relationships · CH.4",
      blurb: "Burn a ribbon, weigh the ash, find the empirical formula of the oxide.",
      level: 2,
      passage: "<p>" + N(1) + "A student heats a coil of magnesium ribbon in a covered crucible until it burns completely in air to form magnesium oxide. " + N(2) + "She lifts the lid briefly every minute so oxygen can reach the metal, then lets the crucible cool and weighs it. " + N(3) + "From the masses she finds the <strong>empirical formula</strong>, the simplest whole-number ratio of atoms in the compound. " + N(4) + "She then dissolves all of the product in acid and dilutes it to 100.0 mL for a later test. " + N(5) + "Use: Mg = 24.3, O = 16.0 g/mol; 2 Mg + O₂ → 2 MgO.</p>" +
        "<table><tr><th>Item</th><th>Mass (g)</th></tr><tr><td>Empty crucible</td><td>21.155</td></tr><tr><td>Crucible + Mg</td><td>21.398</td></tr><tr><td>Crucible + product</td><td>21.558</td></tr></table>",
      claims: [
        {
          id: "mass-o",
          sol: "CH.4.a",
          stem: "What mass of oxygen combined with the magnesium?",
          choices: [
            { letter: "A", text: "0.243 g" },
            { letter: "B", text: "0.160 g" },
            { letter: "C", text: "0.403 g" },
            { letter: "D", text: "0.646 g" }
          ],
          correct: "B"
        },
        {
          id: "mol-mg",
          sol: "CH.4.a",
          stem: "How many moles of magnesium were in the crucible?",
          choices: [
            { letter: "A", text: "0.0100 mol" },
            { letter: "B", text: "100 mol" },
            { letter: "C", text: "5.91 mol" },
            { letter: "D", text: "0.0166 mol" }
          ],
          correct: "A"
        },
        {
          id: "empirical",
          sol: "CH.4.a",
          stem: "Based on the data, what is the empirical formula of the product?",
          choices: [
            { letter: "A", text: "Mg₂O" },
            { letter: "B", text: "MgO₂" },
            { letter: "C", text: "MgO" },
            { letter: "D", text: "Mg₂O₃" }
          ],
          correct: "C"
        },
        {
          id: "mg-molarity",
          sol: "CH.4.c",
          stem: "After the product is dissolved and diluted to 100.0 mL as in sentence 4, what is the molarity of Mg²⁺ in the solution?",
          choices: [
            { letter: "A", text: "0.0100 M" },
            { letter: "B", text: "1.00 × 10⁻⁴ M" },
            { letter: "C", text: "0.403 M" },
            { letter: "D", text: "0.100 M" }
          ],
          correct: "D"
        },
        {
          id: "mol-o2",
          sol: "CH.4.b",
          stem: "Based on the balanced equation, how many moles of O₂ are needed to react with 0.0100 mol of Mg?",
          choices: [
            { letter: "A", text: "0.00500 mol" },
            { letter: "B", text: "0.0100 mol" },
            { letter: "C", text: "0.0200 mol" },
            { letter: "D", text: "0.00250 mol" }
          ],
          correct: "A"
        },
        {
          id: "smoke",
          sol: "CH.4.a",
          stem: "If some white smoke of MgO escaped from the crucible during heating, how would the calculated result change?",
          choices: [
            { letter: "A", text: "The mass of magnesium would appear too large." },
            { letter: "B", text: "The moles of magnesium would appear too small." },
            { letter: "C", text: "The ratio of oxygen to magnesium would be unchanged." },
            { letter: "D", text: "The mass of oxygen would appear too small." }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "mole-diluting-stock-acid",
      family: "MOLE",
      title: "Diluting the stock acid",
      kind: "Molar Relationships · CH.4",
      blurb: "From a 6.00 M bottle to 250.0 mL of 0.500 M: how much stock, and what pH?",
      level: 2,
      passage: "<p>" + N(1) + "A lab assistant must prepare 250.0 mL of 0.500 M hydrochloric acid from a bottle of 6.00 M <strong>stock solution</strong>. " + N(2) + "She pours about 150 mL of distilled water into a 250.0 mL volumetric flask, measures the stock acid with a graduated pipette, adds it slowly to the water, and then fills the flask to the line. " + N(3) + "She labels the flask and records the volume of stock she used. " + N(4) + "Use: M₁V₁ = M₂V₂; HCl is a strong acid; pH = −log[H⁺]; 1 mol = 6.02 × 10²³ particles.</p>",
      claims: [
        {
          id: "v1",
          sol: "CH.4.c",
          stem: "What volume of the 6.00 M stock solution is needed?",
          choices: [
            { letter: "A", text: "41.7 mL" },
            { letter: "B", text: "20.8 mL" },
            { letter: "C", text: "125 mL" },
            { letter: "D", text: "3000 mL" }
          ],
          correct: "B"
        },
        {
          id: "acid-to-water",
          sol: "CH.4.c",
          stem: "Why is the concentrated acid added to the water rather than water added to the acid?",
          choices: [
            { letter: "A", text: "The acid would not dissolve properly if the water were poured in afterward." },
            { letter: "B", text: "The final volume would be too large the other way." },
            { letter: "C", text: "Adding water last would change the number of moles of HCl." },
            { letter: "D", text: "The water absorbs the heat released, so the mixture does not spatter." }
          ],
          correct: "D"
        },
        {
          id: "mol-hcl",
          sol: "CH.4.c",
          stem: "How many moles of HCl are in the finished 250.0 mL of 0.500 M solution?",
          choices: [
            { letter: "A", text: "0.125 mol" },
            { letter: "B", text: "0.500 mol" },
            { letter: "C", text: "1.50 mol" },
            { letter: "D", text: "0.0208 mol" }
          ],
          correct: "A"
        },
        {
          id: "ph",
          sol: "CH.4.d",
          stem: "What is the pH of the 0.500 M HCl solution?",
          choices: [
            { letter: "A", text: "0.50" },
            { letter: "B", text: "13.7" },
            { letter: "C", text: "0.30" },
            { letter: "D", text: "0.60" }
          ],
          correct: "C"
        },
        {
          id: "hcl-units",
          sol: "CH.4.a",
          stem: "How many HCl formula units are in the finished 250.0 mL of solution?",
          choices: [
            { letter: "A", text: "7.53 × 10²²" },
            { letter: "B", text: "4.82 × 10²⁴" },
            { letter: "C", text: "6.02 × 10²³" },
            { letter: "D", text: "7.53 × 10²³" }
          ],
          correct: "A"
        },
        {
          id: "term",
          sol: "CH.4.c",
          stem: "As used in sentence 1, a stock solution is —",
          choices: [
            { letter: "A", text: "a solution that has already been neutralized" },
            { letter: "B", text: "a dilute solution ready to use in a titration" },
            { letter: "C", text: "a saturated solution that is stored at a low temperature" },
            { letter: "D", text: "a concentrated solution kept for making dilute ones" }
          ],
          correct: "D"
        }
      ]
    },

    /* ---------- medium ---------- */
    {
      id: "mole-baking-soda-vinegar",
      family: "MOLE",
      title: "Baking soda meets vinegar",
      kind: "Molar Relationships · CH.4",
      blurb: "Four groups, four masses of baking soda, one flask on a balance: who runs out first?",
      level: 2,
      passage: "<p>" + N(1) + "A class studies the reaction between baking soda and vinegar: NaHCO₃(s) + CH₃COOH(aq) → NaCH₃COO(aq) + H₂O(l) + CO₂(g). " + N(2) + "Each group pours 50.0 mL of vinegar containing 3.00 g of acetic acid (0.0500 mol) into a flask standing on a balance, adds a measured mass of baking soda, and records the mass lost as carbon dioxide escapes. " + N(3) + "The <strong>limiting reactant</strong> is the one used up first; when it is gone the reaction stops. " + N(4) + "Groups 1 and 2 saw the fizzing stop within a minute, while in group 4 a layer of unreacted powder remained on the bottom of the flask. " + N(5) + "Use: NaHCO₃ = 84.0, CH₃COOH = 60.0, CO₂ = 44.0 g/mol.</p>" +
        "<table><tr><th>Group</th><th>NaHCO₃ added (g)</th><th>Mass lost (g)</th></tr><tr><td>1</td><td>1.00</td><td>0.52</td></tr><tr><td>2</td><td>2.00</td><td>1.05</td></tr><tr><td>3</td><td>4.00</td><td>2.09</td></tr><tr><td>4</td><td>6.00</td><td>2.20</td></tr></table>",
      claims: [
        {
          id: "ratio",
          sol: "CH.4.b",
          stem: "According to the balanced equation, the mole ratio of NaHCO₃ reacted to CO₂ produced is —",
          choices: [
            { letter: "A", text: "1 : 2" },
            { letter: "B", text: "2 : 1" },
            { letter: "C", text: "1 : 1" },
            { letter: "D", text: "1 : 3" }
          ],
          correct: "C"
        },
        {
          id: "mol-group2",
          sol: "CH.4.a",
          stem: "How many moles of NaHCO₃ did group 2 add to the flask?",
          choices: [
            { letter: "A", text: "168 mol" },
            { letter: "B", text: "0.0238 mol" },
            { letter: "C", text: "0.0455 mol" },
            { letter: "D", text: "0.0333 mol" }
          ],
          correct: "B"
        },
        {
          id: "theo-group2",
          sol: "CH.4.b",
          stem: "What is the theoretical mass of CO₂ that group 2's baking soda can produce?",
          choices: [
            { letter: "A", text: "2.00 g" },
            { letter: "B", text: "88.0 g" },
            { letter: "C", text: "0.0238 g" },
            { letter: "D", text: "1.05 g" }
          ],
          correct: "D"
        },
        {
          id: "limiting4",
          sol: "CH.4.b",
          stem: "Which reactant limits the amount of CO₂ produced in group 4, and why?",
          choices: [
            { letter: "A", text: "acetic acid, because 0.0500 mol of acid is less than 0.0714 mol of NaHCO₃" },
            { letter: "B", text: "baking soda, because 6.00 g of solid is more than the 3.00 g of acetic acid in the vinegar" },
            { letter: "C", text: "baking soda, because it is a solid and dissolves slowly" },
            { letter: "D", text: "acetic acid, because 50.0 mL is a smaller amount than 6.00 g" }
          ],
          correct: "A"
        },
        {
          id: "plateau",
          sol: "CH.4.b",
          stem: "Which statement best explains why the mass lost levels off at about 2.20 g?",
          choices: [
            { letter: "A", text: "The flask can hold only about 2.20 g of gas before the rest escapes into the room." },
            { letter: "B", text: "Baking soda stops dissolving once 4.00 g has been added." },
            { letter: "C", text: "All of the acetic acid has been used up, so extra baking soda cannot react." },
            { letter: "D", text: "The carbon dioxide is reabsorbed by the vinegar solution." }
          ],
          correct: "C"
        },
        {
          id: "vinegar-molarity",
          sol: "CH.4.c",
          stem: "What is the molarity of acetic acid in the vinegar used by each group?",
          choices: [
            { letter: "A", text: "1.00 M" },
            { letter: "B", text: "0.0500 M" },
            { letter: "C", text: "2.50 M" },
            { letter: "D", text: "0.00100 M" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "mole-silver-chloride-yield",
      family: "MOLE",
      title: "The white precipitate",
      kind: "Molar Relationships · CH.4",
      blurb: "Silver nitrate plus sodium chloride: filter, dry, weigh and find the percent yield.",
      level: 2,
      passage: "<p>" + N(1) + "A student mixes 25.0 mL of 0.200 M silver nitrate with 30.0 mL of 0.200 M sodium chloride in a beaker. " + N(2) + "A white <strong>precipitate</strong> of silver chloride forms at once: AgNO₃(aq) + NaCl(aq) → AgCl(s) + NaNO₃(aq). " + N(3) + "She filters the mixture through pre-weighed filter paper, rinses the solid with a little distilled water, dries it overnight and weighs the paper again. " + N(4) + "Some fine solid was seen in the liquid that passed through on the first pour, so she poured that liquid through the same paper a second time. " + N(5) + "Use: AgNO₃ = 169.9, AgCl = 143.4, NaCl = 58.5 g/mol; percent yield = actual yield ÷ theoretical yield × 100.</p>" +
        "<table><tr><th>Item</th><th>Mass (g)</th></tr><tr><td>Dry filter paper</td><td>0.912</td></tr><tr><td>Paper + dry AgCl</td><td>1.564</td></tr><tr><td>AgCl recovered</td><td>0.652</td></tr></table>",
      claims: [
        {
          id: "mol-agno3",
          sol: "CH.4.c",
          stem: "How many moles of AgNO₃ were in the 25.0 mL of 0.200 M solution?",
          choices: [
            { letter: "A", text: "0.0500 mol" },
            { letter: "B", text: "0.00500 mol" },
            { letter: "C", text: "5.00 mol" },
            { letter: "D", text: "0.00600 mol" }
          ],
          correct: "B"
        },
        {
          id: "limiting",
          sol: "CH.4.b",
          stem: "Which reactant is limiting in this precipitation, and why?",
          choices: [
            { letter: "A", text: "NaCl, because its molar mass is much smaller than the molar mass of AgNO₃" },
            { letter: "B", text: "NaCl, because 0.00600 mol is less than 0.00500 mol" },
            { letter: "C", text: "AgNO₃, because it has the larger molar mass" },
            { letter: "D", text: "AgNO₃, because 0.00500 mol is less than 0.00600 mol of NaCl" }
          ],
          correct: "D"
        },
        {
          id: "theoretical",
          sol: "CH.4.b",
          stem: "What is the theoretical yield of AgCl?",
          choices: [
            { letter: "A", text: "0.717 g" },
            { letter: "B", text: "0.860 g" },
            { letter: "C", text: "0.850 g" },
            { letter: "D", text: "3.59 g" }
          ],
          correct: "A"
        },
        {
          id: "pct-yield",
          sol: "CH.4.b",
          stem: "What is the percent yield of AgCl in this experiment?",
          choices: [
            { letter: "A", text: "110%" },
            { letter: "B", text: "76.7%" },
            { letter: "C", text: "90.9%" },
            { letter: "D", text: "0.909%" }
          ],
          correct: "C"
        },
        {
          id: "conduct",
          sol: "CH.4.d",
          stem: "Before mixing, both the AgNO₃ and NaCl solutions conduct electricity well because —",
          choices: [
            { letter: "A", text: "both are soluble ionic compounds that dissociate completely in water" },
            { letter: "B", text: "both are weak electrolytes that ionize only slightly when dissolved in water" },
            { letter: "C", text: "both contain covalent molecules that carry a charge" },
            { letter: "D", text: "both form a precipitate that carries current" }
          ],
          correct: "A"
        },
        {
          id: "excess-cl",
          sol: "CH.4.b",
          stem: "How many moles of Cl⁻ ions remain in solution after the reaction is complete?",
          choices: [
            { letter: "A", text: "0.00600 mol" },
            { letter: "B", text: "0.00100 mol" },
            { letter: "C", text: "0.00500 mol" },
            { letter: "D", text: "0.0110 mol" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "mole-vinegar-titration",
      family: "MOLE",
      title: "Titrating the vinegar",
      kind: "Molar Relationships · CH.4",
      blurb: "Burette readings, a faint pink end point and one overshoot: find the acid's molarity.",
      level: 2,
      passage: "<p>" + N(1) + "A student determines the concentration of acetic acid in white vinegar by <strong>titration</strong> with 0.500 M sodium hydroxide: CH₃COOH(aq) + NaOH(aq) → NaCH₃COO(aq) + H₂O(l). " + N(2) + "She pipettes 10.00 mL of vinegar into a flask, adds three drops of phenolphthalein, and runs base in from a burette until the solution stays faintly pink for 30 seconds. " + N(3) + "In trial 1 she added base too fast and the solution turned deep pink. " + N(4) + "She reads the burette at the bottom of the meniscus to the nearest 0.05 mL and refills it only when the level nears the bottom of the scale. " + N(5) + "Use: CH₃COOH = 60.0 g/mol.</p>" +
        "<table><tr><th>Trial</th><th>Initial (mL)</th><th>Final (mL)</th><th>NaOH used (mL)</th></tr><tr><td>1</td><td>0.00</td><td>18.90</td><td>18.90</td></tr><tr><td>2</td><td>0.00</td><td>16.60</td><td>16.60</td></tr><tr><td>3</td><td>16.60</td><td>33.30</td><td>16.70</td></tr><tr><td>4</td><td>0.50</td><td>17.15</td><td>16.65</td></tr></table>",
      claims: [
        {
          id: "discard",
          sol: "CH.4.d",
          stem: "Why should trial 1 be left out when the average volume of NaOH is calculated?",
          choices: [
            { letter: "A", text: "The burette was not filled exactly to 0.00 mL at the start." },
            { letter: "B", text: "The end point was overshot, so the volume is too large." },
            { letter: "C", text: "The first trial always contains the most acid." },
            { letter: "D", text: "The indicator was not added until after the base." }
          ],
          correct: "B"
        },
        {
          id: "mol-naoh",
          sol: "CH.4.c",
          stem: "Using the average of trials 2, 3 and 4 (16.65 mL), how many moles of NaOH were needed to reach the end point?",
          choices: [
            { letter: "A", text: "8.33 mol" },
            { letter: "B", text: "0.00500 mol" },
            { letter: "C", text: "0.00833 mol" },
            { letter: "D", text: "0.0166 mol" }
          ],
          correct: "C"
        },
        {
          id: "molarity",
          sol: "CH.4.d",
          stem: "What is the molarity of acetic acid in the vinegar?",
          choices: [
            { letter: "A", text: "0.833 M" },
            { letter: "B", text: "0.300 M" },
            { letter: "C", text: "8.33 M" },
            { letter: "D", text: "1.67 M" }
          ],
          correct: "A"
        },
        {
          id: "indicator",
          sol: "CH.4.d",
          stem: "What is the purpose of the phenolphthalein in this procedure?",
          choices: [
            { letter: "A", text: "to react with the acetic acid so it can be measured" },
            { letter: "B", text: "to slow the reaction so the base can be added carefully" },
            { letter: "C", text: "to keep the solution at a constant pH during the titration" },
            { letter: "D", text: "to change color when the acid has just been neutralized" }
          ],
          correct: "D"
        },
        {
          id: "bronsted",
          sol: "CH.4.d",
          stem: "In the Brønsted-Lowry model, which statement describes the reaction in sentence 1?",
          choices: [
            { letter: "A", text: "NaOH donates a proton to the acetic acid molecule." },
            { letter: "B", text: "CH₃COOH donates a proton and OH⁻ accepts it." },
            { letter: "C", text: "CH₃COOH accepts a hydroxide ion from the water." },
            { letter: "D", text: "Water donates a proton to the sodium ion." }
          ],
          correct: "B"
        },
        {
          id: "mol-acid-trial2",
          sol: "CH.4.b",
          stem: "Based on the balanced equation, how many moles of acetic acid were neutralized in trial 2?",
          choices: [
            { letter: "A", text: "0.0166 mol" },
            { letter: "B", text: "0.00415 mol" },
            { letter: "C", text: "0.0500 mol" },
            { letter: "D", text: "0.00830 mol" }
          ],
          correct: "D"
        }
      ]
    },

    /* ---------- long ---------- */
    {
      id: "mole-peanut-field-lime",
      family: "MOLE",
      title: "Lime for the peanut field",
      kind: "Molar Relationships · CH.4",
      blurb: "Sour soil in Southampton County: model the lime treatment with carbonate and acid.",
      level: 3,
      passage: "<p>" + N(1) + "A soil test from a peanut field in Southampton County reports a pH that is too acidic for a good crop and recommends spreading agricultural lime, which is mostly calcium carbonate. " + N(2) + "In the school lab, a student models the treatment by adding powdered CaCO₃ to a beaker of dilute acid and measuring the gas released: CaCO₃(s) + 2 HCl(aq) → CaCl₂(aq) + H₂O(l) + CO₂(g). " + N(3) + "The acid sample contains 0.0400 mol of H⁺, and the student wants to add just enough lime to use all of it. " + N(4) + "Lime raises the soil pH because the <strong>carbonate ion</strong> accepts hydrogen ions and leaves the soil as carbon dioxide. " + N(5) + "The farm's report lists three fields so the lab ratio can be scaled up to tons per acre. " + N(6) + "Lime that is spread but not mixed into the soil reacts slowly, so the pH change may take a full growing season. " + N(7) + "Use: Ca = 40.1, C = 12.0, O = 16.0 g/mol; 1 mol of gas at STP occupies 22.4 L; pH = −log[H⁺].</p>" +
        "<table><tr><th>Field</th><th>Soil pH</th></tr><tr><td>A</td><td>5.0</td></tr><tr><td>B</td><td>5.5</td></tr><tr><td>C</td><td>6.5</td></tr></table>",
      claims: [
        {
          id: "h-field-b",
          sol: "CH.4.d",
          stem: "What is the hydrogen ion concentration in the soil water of field B?",
          choices: [
            { letter: "A", text: "5.5 M" },
            { letter: "B", text: "3.2 × 10⁻⁹ M" },
            { letter: "C", text: "3.2 × 10⁻⁶ M" },
            { letter: "D", text: "1.0 × 10⁻⁵ M" }
          ],
          correct: "C"
        },
        {
          id: "ratio-a-c",
          sol: "CH.4.d",
          stem: "The [H⁺] in field A is about how many times greater than the [H⁺] in field C?",
          choices: [
            { letter: "A", text: "1.5 times" },
            { letter: "B", text: "32 times" },
            { letter: "C", text: "15 times" },
            { letter: "D", text: "100 times" }
          ],
          correct: "B"
        },
        {
          id: "mass-lime",
          sol: "CH.4.b",
          stem: "What mass of CaCO₃ is needed to react with all 0.0400 mol of H⁺ in the beaker?",
          choices: [
            { letter: "A", text: "2.00 g" },
            { letter: "B", text: "4.00 g" },
            { letter: "C", text: "8.01 g" },
            { letter: "D", text: "1.00 g" }
          ],
          correct: "A"
        },
        {
          id: "co2-volume",
          sol: "CH.4.a",
          stem: "What volume of CO₂, measured at STP, is released when the 0.0400 mol of H⁺ is completely used up?",
          choices: [
            { letter: "A", text: "0.896 L" },
            { letter: "B", text: "0.224 L" },
            { letter: "C", text: "22.4 L" },
            { letter: "D", text: "0.448 L" }
          ],
          correct: "D"
        },
        {
          id: "pct-ca",
          sol: "CH.4.a",
          stem: "What is the percent by mass of calcium in CaCO₃?",
          choices: [
            { letter: "A", text: "12.0%" },
            { letter: "B", text: "40.1%" },
            { letter: "C", text: "47.9%" },
            { letter: "D", text: "60.0%" }
          ],
          correct: "B"
        },
        {
          id: "carbonate-base",
          sol: "CH.4.d",
          stem: "Based on sentence 4, the carbonate ion acts as a Brønsted-Lowry base because it —",
          choices: [
            { letter: "A", text: "releases hydroxide ions into the soil water" },
            { letter: "B", text: "dissolves completely to form a strong electrolyte" },
            { letter: "C", text: "donates a proton to the water molecules" },
            { letter: "D", text: "accepts a proton from the acid in the soil" }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "mole-antacid-tablets",
      family: "MOLE",
      title: "Two antacid tablets",
      kind: "Molar Relationships · CH.4",
      blurb: "Same mass, different base: which tablet neutralizes more model stomach acid?",
      level: 3,
      passage: "<p>" + N(1) + "Two antacid tablets are compared in a lab: tablet X contains 0.500 g of magnesium hydroxide, Mg(OH)₂, and tablet Y contains 0.500 g of calcium carbonate, CaCO₃. " + N(2) + "Stomach acid is modeled with 0.100 M hydrochloric acid, and the acid each crushed tablet can neutralize is measured by adding acid from a burette until a drop of bromothymol blue indicator turns from blue to yellow. " + N(3) + "The reactions are Mg(OH)₂(s) + 2 HCl(aq) → MgCl₂(aq) + 2 H₂O(l) and CaCO₃(s) + 2 HCl(aq) → CaCl₂(aq) + H₂O(l) + CO₂(g). " + N(4) + "Magnesium hydroxide is an <strong>Arrhenius base</strong>: it releases hydroxide ions in water, even though only a little of it dissolves at a time. " + N(5) + "Each tablet is crushed and stirred into 50 mL of distilled water before the titration so that the acid can reach all of the powder. " + N(6) + "Use: Mg = 24.3, O = 16.0, H = 1.0, Ca = 40.1, C = 12.0 g/mol; pH = −log[H⁺].</p>" +
        "<table><tr><th>Tablet</th><th>Active ingredient</th><th>Molar mass (g/mol)</th><th>Acid neutralized (mL)</th></tr><tr><td>X</td><td>Mg(OH)₂</td><td>58.3</td><td>168</td></tr><tr><td>Y</td><td>CaCO₃</td><td>100.1</td><td>97</td></tr></table>",
      claims: [
        {
          id: "ratio",
          sol: "CH.4.b",
          stem: "According to the balanced equation, the mole ratio of HCl to Mg(OH)₂ is —",
          choices: [
            { letter: "A", text: "1 : 1" },
            { letter: "B", text: "1 : 2" },
            { letter: "C", text: "3 : 1" },
            { letter: "D", text: "2 : 1" }
          ],
          correct: "D"
        },
        {
          id: "mol-mgoh2",
          sol: "CH.4.a",
          stem: "How many moles of Mg(OH)₂ are in tablet X?",
          choices: [
            { letter: "A", text: "0.00858 mol" },
            { letter: "B", text: "29.2 mol" },
            { letter: "C", text: "0.0172 mol" },
            { letter: "D", text: "0.00429 mol" }
          ],
          correct: "A"
        },
        {
          id: "predict-x",
          sol: "CH.4.b",
          stem: "What volume of 0.100 M HCl should tablet X be able to neutralize, based on the balanced equation?",
          choices: [
            { letter: "A", text: "85.8 mL" },
            { letter: "B", text: "343 mL" },
            { letter: "C", text: "172 mL" },
            { letter: "D", text: "1.72 mL" }
          ],
          correct: "C"
        },
        {
          id: "compare",
          sol: "CH.4.b",
          stem: "Both tablets contain 0.500 g of base and both react with HCl in a 1 : 2 ratio. Which statement best explains why tablet X neutralized more acid?",
          choices: [
            { letter: "A", text: "Tablet X released carbon dioxide gas, which carried acid away." },
            { letter: "B", text: "Mg(OH)₂ has a smaller molar mass, so 0.500 g contains more moles of base." },
            { letter: "C", text: "Calcium is heavier than magnesium, so CaCO₃ reacts more slowly." },
            { letter: "D", text: "Mg(OH)₂ contains two hydroxide ions, so its true mole ratio with HCl is 1 : 4." }
          ],
          correct: "B"
        },
        {
          id: "ph-acid",
          sol: "CH.4.d",
          stem: "What is the pH of the 0.100 M HCl used to model stomach acid?",
          choices: [
            { letter: "A", text: "1.00" },
            { letter: "B", text: "0.100" },
            { letter: "C", text: "13.0" },
            { letter: "D", text: "2.00" }
          ],
          correct: "A"
        },
        {
          id: "arrhenius",
          sol: "CH.4.d",
          stem: "Based on sentence 4, magnesium hydroxide neutralizes stomach acid because it —",
          choices: [
            { letter: "A", text: "accepts hydroxide ions directly from the hydrochloric acid solution" },
            { letter: "B", text: "produces OH⁻ ions that combine with H⁺ ions to form water" },
            { letter: "C", text: "dissolves completely and dilutes the acid" },
            { letter: "D", text: "donates protons to the chloride ions in solution" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "mole-james-river-to-bay",
      family: "MOLE",
      title: "From the James to the Bay",
      kind: "Molar Relationships · CH.4",
      blurb: "Fresh water at Richmond, salt water at the mouth: pH, salinity and a chloride titration.",
      level: 3,
      passage: "<p>" + N(1) + "A water-quality team samples the James River at Richmond, where the river is fresh, and again at its mouth near Newport News, where it meets the salty Chesapeake Bay. " + N(2) + "At each site they read pH with a calibrated meter and measure <strong>salinity</strong>, the grams of dissolved salt per kilogram of water, with a refractometer. " + N(3) + "They also titrate chloride ion: 50.0 mL of the Richmond sample needs 4.20 mL of 0.0100 M silver nitrate to precipitate all of the chloride as AgCl. " + N(4) + "Dissolved oxygen is recorded in milligrams of O₂ per liter of water. " + N(5) + "For the calculations, water at the mouth is treated as a sodium chloride solution. " + N(6) + "Oysters in the lower bay grow best at salinities above about 10 g/kg, so the team compares the two sites in its report. " + N(7) + "Use: Na = 23.0, Cl = 35.5, O = 16.0 g/mol; pH = −log[H⁺]; pH + pOH = 14; molality = moles of solute per kilogram of solvent.</p>" +
        "<table><tr><th>Site</th><th>pH</th><th>Salinity (g/kg)</th><th>Dissolved O₂ (mg/L)</th></tr><tr><td>Richmond</td><td>7.4</td><td>0.2</td><td>8.0</td></tr><tr><td>River mouth</td><td>8.1</td><td>20.0</td><td>6.4</td></tr></table>",
      claims: [
        {
          id: "h-richmond",
          sol: "CH.4.d",
          stem: "What is the [H⁺] of the Richmond sample?",
          choices: [
            { letter: "A", text: "7.4 × 10⁻¹ M" },
            { letter: "B", text: "4.0 × 10⁻⁸ M" },
            { letter: "C", text: "2.5 × 10⁻⁷ M" },
            { letter: "D", text: "1.0 × 10⁻⁷ M" }
          ],
          correct: "B"
        },
        {
          id: "poh-mouth",
          sol: "CH.4.d",
          stem: "What is the pOH of the sample taken at the river mouth?",
          choices: [
            { letter: "A", text: "8.1" },
            { letter: "B", text: "6.6" },
            { letter: "C", text: "1.0 × 10⁻⁶" },
            { letter: "D", text: "5.9" }
          ],
          correct: "D"
        },
        {
          id: "molality-mouth",
          sol: "CH.4.c",
          stem: "Treating the salt as NaCl, what is the molality of the water at the river mouth?",
          choices: [
            { letter: "A", text: "0.342 m" },
            { letter: "B", text: "0.171 m" },
            { letter: "C", text: "0.870 m" },
            { letter: "D", text: "0.684 m" }
          ],
          correct: "A"
        },
        {
          id: "chloride",
          sol: "CH.4.c",
          stem: "Each mole of AgNO₃ precipitates one mole of Cl⁻. What is the chloride ion concentration in the Richmond sample?",
          choices: [
            { letter: "A", text: "4.2 × 10⁻⁵ M" },
            { letter: "B", text: "8.4 × 10⁻⁵ M" },
            { letter: "C", text: "8.4 × 10⁻⁴ M" },
            { letter: "D", text: "1.0 × 10⁻² M" }
          ],
          correct: "C"
        },
        {
          id: "oxygen",
          sol: "CH.4.a",
          stem: "How many moles of O₂ are dissolved in each liter of the Richmond sample?",
          choices: [
            { letter: "A", text: "2.5 × 10⁻⁴ mol" },
            { letter: "B", text: "5.0 × 10⁻⁴ mol" },
            { letter: "C", text: "0.25 mol" },
            { letter: "D", text: "2.6 × 10⁻³ mol" }
          ],
          correct: "A"
        },
        {
          id: "conclude",
          sol: "CH.4.d",
          stem: "Which conclusion about the two sampling sites is best supported by the table?",
          choices: [
            { letter: "A", text: "The Richmond sample is more basic and holds less dissolved oxygen." },
            { letter: "B", text: "The mouth sample has a lower [H⁺] and more dissolved salt." },
            { letter: "C", text: "Both sites have the same [OH⁻] because pH + pOH = 14." },
            { letter: "D", text: "The mouth sample is too fresh for oysters to grow well." }
          ],
          correct: "B"
        }
      ]
    }
  ];

  for (var i = 0; i < PACKS.length; i++) P.push(PACKS[i]);
})(typeof window !== "undefined" ? window : global);
