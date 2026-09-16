/* SOL Lab — Nomenclature, Chemical Formulas & Reactions (CH.3). Original text only. */
(function (global) {
  var P = global.HEIST_PACKS;
  if (!P || !P.push) return;
  var N = function (i) { return '<span class="n">(' + i + ')</span> '; };   // numbered sentence

  var PACKS = [
    /* ---------- tiny ---------- */
    {
      id: "rxn-stockroom-labels",
      family: "RXN",
      title: "Stockroom label check",
      kind: "Formulas & Reactions · CH.3",
      blurb: "Four bottles, four labels: do the names match the formulas on the caps?",
      level: 1,
      passage: "<p>" + N(1) + "A student helper checked the labels on four stockroom bottles against the formulas printed on the caps. " + N(2) + "The rule on the wall: a metal with a nonmetal forms an <strong>ionic compound</strong>, named from its ions; two nonmetals form a <strong>covalent compound</strong>, named with prefixes. " + N(3) + "The four bottles are listed below.</p>" +
        "<table><tr><th>Bottle</th><th>Formula on cap</th><th>Name on label</th></tr><tr><td>1</td><td>NaCl</td><td>sodium chloride</td></tr><tr><td>2</td><td>N₂O₄</td><td>nitrogen oxide</td></tr><tr><td>3</td><td>Fe₂O₃</td><td>iron(III) oxide</td></tr><tr><td>4</td><td>K₂SO₄</td><td>potassium sulfate</td></tr></table>",
      claims: [
        {
          id: "wrong-label",
          sol: "CH.3.a",
          stem: "Which bottle has a label that does not follow the naming rules?",
          choices: [
            { letter: "A", text: "bottle 1" },
            { letter: "B", text: "bottle 2" },
            { letter: "C", text: "bottle 3" },
            { letter: "D", text: "bottle 4" }
          ],
          correct: "B"
        },
        {
          id: "n2o4",
          sol: "CH.3.a",
          stem: "The correct name for the compound in bottle 2 is —",
          choices: [
            { letter: "A", text: "nitrogen(IV) oxide" },
            { letter: "B", text: "tetranitrogen dioxide" },
            { letter: "C", text: "dinitrogen tetroxide" },
            { letter: "D", text: "dinitrogen oxide" }
          ],
          correct: "C"
        },
        {
          id: "fe-charge",
          sol: "CH.3.c",
          stem: "The Roman numeral in iron(III) oxide tells the student that —",
          choices: [
            { letter: "A", text: "each iron ion carries a 3+ charge" },
            { letter: "B", text: "there are three iron atoms in each formula unit" },
            { letter: "C", text: "the oxide ion carries a 3− charge" },
            { letter: "D", text: "the compound has three oxygen atoms" }
          ],
          correct: "A"
        },
        {
          id: "sulfate",
          sol: "CH.3.c",
          stem: "Why does the formula for potassium sulfate need two potassium ions?",
          choices: [
            { letter: "A", text: "Each K⁺ is 1+ and SO₄²⁻ is 2−, so two K⁺ balance one sulfate ion." },
            { letter: "B", text: "Potassium forms a 2+ ion, so it needs a 2− sulfate ion to balance the charge." },
            { letter: "C", text: "Sulfate contains four oxygen atoms, so the formula needs two metal atoms." },
            { letter: "D", text: "Potassium is a metal, and every ionic formula has two metal ions in it." }
          ],
          correct: "A"
        },
        {
          id: "ionic-name",
          sol: "CH.3.a",
          stem: "According to sentence 2, the name sodium chloride is built from —",
          choices: [
            { letter: "A", text: "prefixes showing the number of each atom" },
            { letter: "B", text: "the Roman numeral charge of sodium" },
            { letter: "C", text: "the names of the two nonmetals" },
            { letter: "D", text: "the names of its two ions" }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "rxn-demo-day-equations",
      family: "RXN",
      title: "Demo day, unbalanced",
      kind: "Formulas & Reactions · CH.3",
      blurb: "Three reactions from the demo table, written before the coefficients were added.",
      level: 1,
      passage: "<p>" + N(1) + "After a demo day, the teacher wrote three reactions on the board without coefficients and asked the class to balance them. " + N(2) + "She reminded the class that mass is <strong>conserved</strong>: each element must have the same number of atoms on both sides. " + N(3) + "The skeleton equations were:</p>" +
        "<ol><li>H₂ + O₂ → H₂O (the hydrogen balloon)</li><li>Mg + O₂ → MgO (the burning ribbon)</li><li>CH₄ + O₂ → CO₂ + H₂O (the methane bubbles)</li></ol>",
      claims: [
        {
          id: "balloon",
          sol: "CH.3.b",
          stem: "Which is the correctly balanced equation for the hydrogen balloon?",
          choices: [
            { letter: "A", text: "H₂ + O₂ → H₂O₂" },
            { letter: "B", text: "2 H₂ + O₂ → 2 H₂O" },
            { letter: "C", text: "H₂ + O₂ → 2 H₂O" },
            { letter: "D", text: "4 H₂ + 2 O₂ → 4 H₂O" }
          ],
          correct: "B"
        },
        {
          id: "ribbon",
          sol: "CH.3.b",
          stem: "Which coefficients balance the burning-ribbon equation, in order from left to right?",
          choices: [
            { letter: "A", text: "1, 1, 1" },
            { letter: "B", text: "2, 1, 1" },
            { letter: "C", text: "2, 1, 2" },
            { letter: "D", text: "1, 2, 2" }
          ],
          correct: "C"
        },
        {
          id: "methane",
          sol: "CH.3.b",
          stem: "When the methane equation is balanced with the smallest whole numbers, the coefficient of O₂ is —",
          choices: [
            { letter: "A", text: "2" },
            { letter: "B", text: "1" },
            { letter: "C", text: "3" },
            { letter: "D", text: "4" }
          ],
          correct: "A"
        },
        {
          id: "subscript-error",
          sol: "CH.3.b",
          stem: "A student balanced equation 1 by writing H₂ + O₂ → H₂O₂. Why is this wrong?",
          choices: [
            { letter: "A", text: "H₂O₂ is a different compound from water, so the product changed." },
            { letter: "B", text: "Oxygen is still unbalanced, with more atoms on the left side." },
            { letter: "C", text: "Subscripts may be changed only on the reactant side of an equation." },
            { letter: "D", text: "The coefficient 2 is required in front of O₂ in every combustion." }
          ],
          correct: "A"
        },
        {
          id: "type",
          sol: "CH.3.e",
          stem: "Reaction 2, magnesium burning in oxygen, is best classified as —",
          choices: [
            { letter: "A", text: "decomposition, because one reactant splits into two" },
            { letter: "B", text: "single replacement, because Mg takes the place of oxygen" },
            { letter: "C", text: "double replacement, because two ions trade partners" },
            { letter: "D", text: "synthesis, because two elements join into one compound" }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "rxn-fizz-tablet-rate",
      family: "RXN",
      title: "Fizz tablets and temperature",
      kind: "Formulas & Reactions · CH.3",
      blurb: "One tablet, three water temperatures, a stopwatch.",
      level: 1,
      passage: "<p>" + N(1) + "A student dropped one antacid tablet into 100 mL of water and timed the fizzing until it stopped. " + N(2) + "She repeated the test at three water temperatures, using a whole tablet each time. " + N(3) + "The fizz is carbon dioxide gas released when citric acid reacts with sodium bicarbonate. " + N(4) + "<strong>Reaction rate</strong> is the change in amount of product per unit time.</p>" +
        "<table><tr><th>Water temperature (°C)</th><th>Time to stop fizzing (s)</th></tr><tr><td>5</td><td>128</td></tr><tr><td>22</td><td>61</td></tr><tr><td>50</td><td>24</td></tr></table>",
      claims: [
        {
          id: "trend",
          sol: "CH.3.f",
          stem: "Which statement about fizzing time is supported by the table?",
          choices: [
            { letter: "A", text: "The reaction ran fastest in the coldest water." },
            { letter: "B", text: "Raising the temperature shortened the fizzing time." },
            { letter: "C", text: "Temperature had no clear effect on fizzing time." },
            { letter: "D", text: "Doubling the water temperature doubled the fizzing time." }
          ],
          correct: "B"
        },
        {
          id: "why",
          sol: "CH.3.f",
          stem: "Which explanation best accounts for the trend in the table?",
          choices: [
            { letter: "A", text: "Warm water holds more dissolved carbon dioxide than cold water." },
            { letter: "B", text: "At higher temperatures the tablet holds more sodium bicarbonate." },
            { letter: "C", text: "Faster-moving particles collide more often and with more energy." },
            { letter: "D", text: "Heat lowers the activation energy so fewer collisions are needed." }
          ],
          correct: "C"
        },
        {
          id: "crushed",
          sol: "CH.3.f",
          stem: "If the student crushed the tablet before dropping it into 22 °C water, the fizzing time would most likely —",
          choices: [
            { letter: "A", text: "be shorter, because more surface area is exposed to the water" },
            { letter: "B", text: "be longer, because the powder has less surface area" },
            { letter: "C", text: "stay the same, because the mass of the tablet did not change" },
            { letter: "D", text: "stay the same, because surface area affects only solids in gases" }
          ],
          correct: "A"
        },
        {
          id: "iv",
          sol: "CH.3.f",
          stem: "In this rate investigation, the independent variable is —",
          choices: [
            { letter: "A", text: "the time until the fizzing stopped" },
            { letter: "B", text: "the volume of water in the cup" },
            { letter: "C", text: "the number of tablets used" },
            { letter: "D", text: "the temperature of the water" }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "rxn-oyster-shell-kiln",
      family: "RXN",
      title: "Oyster shells in the crucible",
      kind: "Formulas & Reactions · CH.3",
      blurb: "Chesapeake oyster shell is mostly calcium carbonate. Heat it and see what leaves.",
      level: 1,
      passage: "<p>" + N(1) + "Oyster shells from the Chesapeake Bay are mostly <strong>calcium carbonate</strong>, CaCO₃. " + N(2) + "A student heated 5.00 g of crushed shell strongly in a crucible for 20 minutes and let it cool. " + N(3) + "The white solid that remained had a mass of 2.85 g, and a gas that turned limewater cloudy escaped during heating. " + N(4) + "The reaction is CaCO₃(s) → CaO(s) + CO₂(g).</p>",
      claims: [
        {
          id: "type",
          sol: "CH.3.e",
          stem: "The reaction in sentence 4 is classified as —",
          choices: [
            { letter: "A", text: "synthesis" },
            { letter: "B", text: "decomposition" },
            { letter: "C", text: "combustion" },
            { letter: "D", text: "double replacement" }
          ],
          correct: "B"
        },
        {
          id: "balanced",
          sol: "CH.3.b",
          stem: "Is the equation in sentence 4 balanced as written?",
          choices: [
            { letter: "A", text: "Yes; each side has one Ca, one C and three O." },
            { letter: "B", text: "No; a coefficient of 2 is needed in front of CO₂." },
            { letter: "C", text: "No; the left side has more atoms than the right side." },
            { letter: "D", text: "Yes, but only if the CaO is written as Ca₂O." }
          ],
          correct: "A"
        },
        {
          id: "cao-name",
          sol: "CH.3.a",
          stem: "The product CaO is named —",
          choices: [
            { letter: "A", text: "calcium monoxide" },
            { letter: "B", text: "calcium(II) oxide" },
            { letter: "C", text: "calcium oxide" },
            { letter: "D", text: "carbon oxide" }
          ],
          correct: "C"
        },
        {
          id: "formula-units",
          sol: "CH.3.c",
          stem: "The formula CaCO₃ shows that one formula unit contains —",
          choices: [
            { letter: "A", text: "one calcium atom bonded to three CO molecules" },
            { letter: "B", text: "three calcium atoms and one carbon atom" },
            { letter: "C", text: "one calcium ion and three oxide ions" },
            { letter: "D", text: "one calcium ion and one carbonate ion" }
          ],
          correct: "D"
        },
        {
          id: "mass",
          sol: "CH.3.e",
          stem: "The mass of the solid dropped from 5.00 g to 2.85 g. Which statement best explains the loss?",
          choices: [
            { letter: "A", text: "Mass was destroyed when the solid decomposed." },
            { letter: "B", text: "Carbon dioxide gas left the crucible as a product." },
            { letter: "C", text: "The calcium oxide is lighter because it is white." },
            { letter: "D", text: "Heating converted part of the shell into heat energy." }
          ],
          correct: "B"
        }
      ]
    },

    /* ---------- short ---------- */
    {
      id: "rxn-acid-hydrate-shelf",
      family: "RXN",
      title: "Acids and hydrates on the shelf",
      kind: "Formulas & Reactions · CH.3",
      blurb: "The acid shelf and a blue bottle that turns white in the oven.",
      level: 1,
      passage: "<p>" + N(1) + "Two shelves of the stockroom were relabeled. " + N(2) + "On the acid shelf, a note explained that the pure gas HCl is named <strong>hydrogen chloride</strong>, but dissolved in water it is <strong>hydrochloric acid</strong>. " + N(3) + "Acids that contain a polyatomic ion ending in -ate are named with -ic acid, as in sulfuric acid, H₂SO₄. " + N(4) + "On the next shelf sat a blue bottle labeled copper(II) sulfate pentahydrate, CuSO₄·5H₂O. " + N(5) + "A <strong>hydrate</strong> holds a fixed number of water molecules in its crystal; heating 2.50 g of the blue solid drove off the water, leaving 1.60 g of white solid.</p>" +
        "<table><tr><th>Label</th><th>Formula</th></tr><tr><td>hydrochloric acid</td><td>HCl(aq)</td></tr><tr><td>nitric acid</td><td>HNO₃(aq)</td></tr><tr><td>sulfuric acid</td><td>H₂SO₄(aq)</td></tr><tr><td>copper(II) sulfate pentahydrate</td><td>CuSO₄·5H₂O</td></tr></table>",
      claims: [
        {
          id: "hcl-gas",
          sol: "CH.3.a",
          stem: "A tank of pure HCl gas, not dissolved in water, is correctly labeled —",
          choices: [
            { letter: "A", text: "hydrochloric acid" },
            { letter: "B", text: "hydrogen chloride" },
            { letter: "C", text: "chloric acid" },
            { letter: "D", text: "hydrogen chlorate" }
          ],
          correct: "B"
        },
        {
          id: "nitric",
          sol: "CH.3.a",
          stem: "Nitric acid is named with -ic because it contains the —",
          choices: [
            { letter: "A", text: "nitride ion, N³⁻" },
            { letter: "B", text: "nitrite ion, NO₂⁻" },
            { letter: "C", text: "nitrate ion, NO₃⁻" },
            { letter: "D", text: "ammonium ion, NH₄⁺" }
          ],
          correct: "C"
        },
        {
          id: "hydrate-five",
          sol: "CH.3.c",
          stem: "What does the 5 in CuSO₄·5H₂O tell a student?",
          choices: [
            { letter: "A", text: "Five sulfate ions are attached to each copper ion." },
            { letter: "B", text: "Five water molecules are held for each CuSO₄ unit." },
            { letter: "C", text: "The copper ion carries a charge of 5+." },
            { letter: "D", text: "The compound contains five oxygen atoms in all." }
          ],
          correct: "B"
        },
        {
          id: "anhydrous",
          sol: "CH.3.a",
          stem: "The white solid left after heating is named —",
          choices: [
            { letter: "A", text: "copper(II) sulfate, the anhydrous salt" },
            { letter: "B", text: "copper(II) sulfide, the dried salt" },
            { letter: "C", text: "copper(I) sulfate, because one water is left" },
            { letter: "D", text: "copper oxide, because the water burned off" }
          ],
          correct: "A"
        },
        {
          id: "sulfuric-formula",
          sol: "CH.3.c",
          stem: "Why does sulfuric acid, H₂SO₄, have two hydrogen atoms in its formula?",
          choices: [
            { letter: "A", text: "Sulfur forms two bonds to hydrogen in every compound." },
            { letter: "B", text: "Every acid formula begins with two hydrogen atoms." },
            { letter: "C", text: "Sulfate contains two oxygen atoms for each hydrogen." },
            { letter: "D", text: "Two H⁺ ions are needed to balance one SO₄²⁻ ion." }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "rxn-activity-series-strips",
      family: "RXN",
      title: "Metal strips in salt solutions",
      kind: "Formulas & Reactions · CH.3",
      blurb: "Zinc, copper and magnesium strips meet three solutions; only some react.",
      level: 2,
      passage: "<p>" + N(1) + "Students placed small strips of three metals into 2 mL of each of three salt solutions and looked for a color change or a coating on the strip after five minutes. " + N(2) + "In a <strong>single replacement</strong> reaction, a more active metal takes the place of a less active metal ion in solution. " + N(3) + "The activity series on the wall lists Mg above Zn, Zn above Cu, and Cu above Ag. " + N(4) + "A check mark means a reaction was observed.</p>" +
        "<table><tr><th>Metal strip</th><th>CuSO₄(aq)</th><th>AgNO₃(aq)</th><th>MgCl₂(aq)</th></tr><tr><td>Mg</td><td>✓</td><td>✓</td><td>no</td></tr><tr><td>Zn</td><td>✓</td><td>✓</td><td>no</td></tr><tr><td>Cu</td><td>no</td><td>✓</td><td>no</td></tr></table>",
      claims: [
        {
          id: "cu-in-mgcl2",
          sol: "CH.3.e",
          stem: "Why did no reaction occur when copper was placed in MgCl₂(aq)?",
          choices: [
            { letter: "A", text: "Copper only reacts with solutions that contain a nonmetal ion." },
            { letter: "B", text: "Magnesium chloride is a covalent compound, so it does not form ions in water." },
            { letter: "C", text: "Copper sits below magnesium in the series, so it cannot replace Mg²⁺." },
            { letter: "D", text: "Copper strips must be heated before any single replacement occurs." }
          ],
          correct: "C"
        },
        {
          id: "zn-cuso4",
          sol: "CH.3.e",
          stem: "Which equation shows the reaction between zinc and copper(II) sulfate?",
          choices: [
            { letter: "A", text: "Zn + CuSO₄ → ZnSO₄ + Cu" },
            { letter: "B", text: "Zn + CuSO₄ → ZnS + CuO₄" },
            { letter: "C", text: "Zn + Cu → ZnCu" },
            { letter: "D", text: "ZnSO₄ + Cu → Zn + CuSO₄" }
          ],
          correct: "A"
        },
        {
          id: "balance-ag",
          sol: "CH.3.b",
          stem: "Which is the balanced equation for copper reacting with silver nitrate?",
          choices: [
            { letter: "A", text: "Cu + AgNO₃ → CuNO₃ + Ag" },
            { letter: "B", text: "Cu + 2 AgNO₃ → Cu(NO₃)₂ + 2 Ag" },
            { letter: "C", text: "Cu + AgNO₃ → Cu(NO₃)₂ + Ag" },
            { letter: "D", text: "2 Cu + 2 AgNO₃ → 2 Cu(NO₃)₂ + Ag" }
          ],
          correct: "B"
        },
        {
          id: "znso4-formula",
          sol: "CH.3.c",
          stem: "The zinc compound formed in CuSO₄ solution has the formula ZnSO₄ because —",
          choices: [
            { letter: "A", text: "zinc forms a 2+ ion that balances one 2− sulfate ion" },
            { letter: "B", text: "zinc forms a 1+ ion that balances one 1− sulfate ion" },
            { letter: "C", text: "zinc and sulfate always combine in a 1:4 ratio" },
            { letter: "D", text: "zinc copies the subscripts of the copper compound" }
          ],
          correct: "A"
        },
        {
          id: "predict-ag",
          sol: "CH.3.e",
          stem: "Based on the activity series, which prediction is correct for a silver strip placed in CuSO₄(aq)?",
          choices: [
            { letter: "A", text: "Silver will replace copper and a red-brown coating forms." },
            { letter: "B", text: "No reaction, because silver is below copper in the series." },
            { letter: "C", text: "Silver will dissolve and the blue solution turns colorless." },
            { letter: "D", text: "Silver and copper will both plate out onto the strip." }
          ],
          correct: "B"
        },
        {
          id: "name-agno3",
          sol: "CH.3.a",
          stem: "The compound AgNO₃ is named —",
          choices: [
            { letter: "A", text: "silver nitride" },
            { letter: "B", text: "silver(I) nitrite" },
            { letter: "C", text: "silver nitrite" },
            { letter: "D", text: "silver nitrate" }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "rxn-shipyard-rust",
      family: "RXN",
      title: "Rust on the shipyard rail",
      kind: "Formulas & Reactions · CH.3",
      blurb: "Steel plates, salt spray and a slow reaction on the James River.",
      level: 2,
      passage: "<p>" + N(1) + "A technician at a shipyard on the James River tracked rusting on four steel test plates bolted to a pier rail for 30 days. " + N(2) + "<strong>Rust</strong> is iron(III) oxide, formed when iron reacts with oxygen: 4 Fe + 3 O₂ → 2 Fe₂O₃. " + N(3) + "Two plates were sprayed daily with salt water and two with fresh water; one plate in each pair was coated with paint. " + N(4) + "Salt water contains dissolved ions that let the electrons involved in rusting move more easily. " + N(5) + "The rust scraped from each plate was massed.</p>" +
        "<table><tr><th>Plate</th><th>Spray</th><th>Paint</th><th>Rust (g)</th></tr><tr><td>1</td><td>fresh</td><td>none</td><td>0.8</td></tr><tr><td>2</td><td>fresh</td><td>painted</td><td>0.1</td></tr><tr><td>3</td><td>salt</td><td>none</td><td>2.6</td></tr><tr><td>4</td><td>salt</td><td>painted</td><td>0.2</td></tr></table>",
      claims: [
        {
          id: "oxygen-count",
          sol: "CH.3.b",
          stem: "In the equation 4 Fe + 3 O₂ → 2 Fe₂O₃, how many oxygen atoms are on each side?",
          choices: [
            { letter: "A", text: "3" },
            { letter: "B", text: "4" },
            { letter: "C", text: "6" },
            { letter: "D", text: "2" }
          ],
          correct: "C"
        },
        {
          id: "type",
          sol: "CH.3.e",
          stem: "The rusting reaction is best classified as —",
          choices: [
            { letter: "A", text: "synthesis, since two elements form one compound" },
            { letter: "B", text: "decomposition, since the plate breaks down" },
            { letter: "C", text: "single replacement, since oxygen takes the place of iron" },
            { letter: "D", text: "double replacement, since ions trade places" }
          ],
          correct: "A"
        },
        {
          id: "numeral",
          sol: "CH.3.a",
          stem: "Why is rust named iron(III) oxide rather than simply iron oxide?",
          choices: [
            { letter: "A", text: "Iron is a nonmetal, so a prefix is needed instead of a numeral." },
            { letter: "B", text: "Iron forms more than one ion, so the numeral shows its charge." },
            { letter: "C", text: "The numeral shows that three iron atoms bond to each oxygen." },
            { letter: "D", text: "Every oxide of a transition metal is named with the numeral III." }
          ],
          correct: "B"
        },
        {
          id: "salt-effect",
          sol: "CH.3.f",
          stem: "Which statement best explains why plate 3 rusted more than plate 1?",
          choices: [
            { letter: "A", text: "Salt water contains more oxygen than fresh water does." },
            { letter: "B", text: "Salt water is a catalyst that gets used up as the rust forms." },
            { letter: "C", text: "Dissolved ions let electrons move, speeding the reaction." },
            { letter: "D", text: "The salt itself was converted into iron(III) oxide." }
          ],
          correct: "C"
        },
        {
          id: "paint",
          sol: "CH.3.f",
          stem: "The paint reduced rusting on plates 2 and 4 mainly by —",
          choices: [
            { letter: "A", text: "lowering the activation energy of the reaction" },
            { letter: "B", text: "keeping oxygen and water from touching the iron" },
            { letter: "C", text: "raising the temperature of the steel plate" },
            { letter: "D", text: "reacting with the salt before it reached the iron" }
          ],
          correct: "B"
        },
        {
          id: "formula-fix",
          sol: "CH.3.c",
          stem: "A student wrote the formula for rust as Fe₃O₂. Which correction is right?",
          choices: [
            { letter: "A", text: "Fe₃O₂ is right, because the numeral III means three iron atoms." },
            { letter: "B", text: "It should be FeO₃, with one iron for every three oxygens." },
            { letter: "C", text: "It should be FeO, since both ions carry a charge of 2." },
            { letter: "D", text: "It should be Fe₂O₃; two 3+ ions balance three 2− ions." }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "rxn-bond-type-table",
      family: "RXN",
      title: "What kind of bond is it?",
      kind: "Formulas & Reactions · CH.3",
      blurb: "Melting points and a conductivity probe sort four unlabeled solids by bond type.",
      level: 1,
      passage: "<p>" + N(1) + "Four unlabeled solids, one of them road salt from the VDOT pile beside I-64, were tested to identify their bond types. " + N(2) + "Each was checked for melting point, whether the solid conducted electricity, and whether a solution in water conducted. " + N(3) + "<strong>Ionic compounds</strong> have high melting points and conduct only when melted or dissolved; <strong>covalent</strong> molecular solids have low melting points and rarely conduct; <strong>metallic</strong> solids conduct as solids. " + N(4) + "The results are below.</p>" +
        "<table><tr><th>Solid</th><th>Melting point (°C)</th><th>Conducts as solid?</th><th>Solution conducts?</th></tr><tr><td>W</td><td>801</td><td>no</td><td>yes</td></tr><tr><td>X</td><td>185</td><td>no</td><td>no</td></tr><tr><td>Y</td><td>660</td><td>yes</td><td>does not dissolve</td></tr><tr><td>Z</td><td>80</td><td>no</td><td>no</td></tr></table>",
      claims: [
        {
          id: "road-salt",
          sol: "CH.3.d",
          stem: "Which solid is most likely the road salt, sodium chloride?",
          choices: [
            { letter: "A", text: "W" },
            { letter: "B", text: "X" },
            { letter: "C", text: "Y" },
            { letter: "D", text: "Z" }
          ],
          correct: "A"
        },
        {
          id: "metallic",
          sol: "CH.3.d",
          stem: "Solid Y conducts electricity as a solid. This is best explained by —",
          choices: [
            { letter: "A", text: "ions that are free to move through the crystal" },
            { letter: "B", text: "a sea of mobile electrons shared among metal atoms" },
            { letter: "C", text: "polar molecules that line up inside an electric field" },
            { letter: "D", text: "water molecules trapped inside the crystal" }
          ],
          correct: "B"
        },
        {
          id: "ionic-solution",
          sol: "CH.3.d",
          stem: "Why does solid W conduct only after it dissolves in water?",
          choices: [
            { letter: "A", text: "Water breaks its covalent bonds apart into free, charged atoms." },
            { letter: "B", text: "Dissolving adds extra electrons to the crystal." },
            { letter: "C", text: "Its ions are locked in the solid but move freely in solution." },
            { letter: "D", text: "Only liquids can conduct electricity of any kind." }
          ],
          correct: "C"
        },
        {
          id: "molecular",
          sol: "CH.3.d",
          stem: "Solids X and Z share low melting points and do not conduct. They are most likely —",
          choices: [
            { letter: "A", text: "ionic compounds made from a metal and a nonmetal ion" },
            { letter: "B", text: "metallic elements with a sea of electrons" },
            { letter: "C", text: "ionic hydrates that have lost their water" },
            { letter: "D", text: "molecular solids held by weak intermolecular forces" }
          ],
          correct: "D"
        },
        {
          id: "nacl-name",
          sol: "CH.3.a",
          stem: "Solid W was identified as NaCl. The correct name is —",
          choices: [
            { letter: "A", text: "sodium chlorine" },
            { letter: "B", text: "sodium monochloride" },
            { letter: "C", text: "sodium(I) chloride" },
            { letter: "D", text: "sodium chloride" }
          ],
          correct: "D"
        }
      ]
    },

    /* ---------- medium ---------- */
    {
      id: "rxn-five-station-sort",
      family: "RXN",
      title: "Five reactions, five cards",
      kind: "Formulas & Reactions · CH.3",
      blurb: "Sort the demo-day reactions by type using what you saw and what was written.",
      level: 2,
      passage: "<p>" + N(1) + "At five stations, students recorded what they saw and then sorted each reaction onto a card by type: <strong>synthesis</strong>, <strong>decomposition</strong>, <strong>single replacement</strong>, <strong>double replacement</strong> or <strong>combustion</strong>. " + N(2) + "A double replacement reaction is usually recognized by a precipitate, a gas or water forming when two solutions are mixed. " + N(3) + "Station 4 was the only one where two clear solutions were combined. " + N(4) + "The stations and observations are listed.</p>" +
        "<table><tr><th>Station</th><th>Equation</th><th>Observation</th></tr><tr><td>1</td><td>2 H₂O₂ → 2 H₂O + O₂</td><td>bubbles; glowing splint relit</td></tr><tr><td>2</td><td>C₃H₈ + 5 O₂ → 3 CO₂ + 4 H₂O</td><td>blue flame, heat</td></tr><tr><td>3</td><td>Zn + 2 HCl → ZnCl₂ + H₂</td><td>fizzing on the metal</td></tr><tr><td>4</td><td>Pb(NO₃)₂ + 2 KI → PbI₂ + 2 KNO₃</td><td>bright yellow solid</td></tr><tr><td>5</td><td>2 Na + Cl₂ → 2 NaCl</td><td>white smoke, bright flash</td></tr></table>",
      claims: [
        {
          id: "decomp",
          sol: "CH.3.e",
          stem: "Which station shows a decomposition reaction?",
          choices: [
            { letter: "A", text: "station 1" },
            { letter: "B", text: "station 2" },
            { letter: "C", text: "station 4" },
            { letter: "D", text: "station 5" }
          ],
          correct: "A"
        },
        {
          id: "station3",
          sol: "CH.3.e",
          stem: "Station 3 is classified as single replacement because —",
          choices: [
            { letter: "A", text: "zinc and chlorine combine to form one compound" },
            { letter: "B", text: "zinc takes the place of hydrogen in the acid" },
            { letter: "C", text: "two compounds trade their positive ions" },
            { letter: "D", text: "hydrogen burns in oxygen to release heat" }
          ],
          correct: "B"
        },
        {
          id: "evidence",
          sol: "CH.3.e",
          stem: "Which observation is the best evidence that station 4 is a double replacement reaction?",
          choices: [
            { letter: "A", text: "The mixture became hot to the touch." },
            { letter: "B", text: "A gas bubbled out of the solution." },
            { letter: "C", text: "A yellow solid, a precipitate, formed." },
            { letter: "D", text: "A flame appeared when the solutions met." }
          ],
          correct: "C"
        },
        {
          id: "oxygen-products",
          sol: "CH.3.b",
          stem: "In the station 2 equation, how many oxygen atoms appear on the product side?",
          choices: [
            { letter: "A", text: "7" },
            { letter: "B", text: "12" },
            { letter: "C", text: "13" },
            { letter: "D", text: "10" }
          ],
          correct: "D"
        },
        {
          id: "name-pbi2",
          sol: "CH.3.a",
          stem: "The yellow solid at station 4, PbI₂, is named —",
          choices: [
            { letter: "A", text: "lead iodide" },
            { letter: "B", text: "lead(II) iodide" },
            { letter: "C", text: "lead(I) diiodide" },
            { letter: "D", text: "lead diiodine" }
          ],
          correct: "B"
        },
        {
          id: "common",
          sol: "CH.3.e",
          stem: "Station 5 was sorted as synthesis and station 2 as combustion. What do these two reactions have in common?",
          choices: [
            { letter: "A", text: "Both release energy as heat and light." },
            { letter: "B", text: "Both produce carbon dioxide and water." },
            { letter: "C", text: "Both have a single element as the only product." },
            { letter: "D", text: "Both involve a compound breaking apart." }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "rxn-precipitate-wells",
      family: "RXN",
      title: "Cloudy or clear?",
      kind: "Formulas & Reactions · CH.3",
      blurb: "Mix four pairs of solutions; the solubility notes tell you which cloud up.",
      level: 2,
      passage: "<p>" + N(1) + "Students mixed pairs of clear salt solutions in a well plate and noted whether a <strong>precipitate</strong>, an insoluble solid, appeared. " + N(2) + "Their solubility notes read: all nitrates and all sodium, potassium and ammonium compounds are soluble; most chlorides are soluble except those of silver and lead; most carbonates and hydroxides are insoluble except those of sodium, potassium and ammonium. " + N(3) + "In a <strong>double replacement</strong> reaction the positive ions of the two compounds trade partners, and a precipitate forms only if one of the new pairs is insoluble. " + N(4) + "The wells and results are shown.</p>" +
        "<table><tr><th>Well</th><th>Solutions mixed</th><th>Result</th></tr><tr><td>1</td><td>NaCl + AgNO₃</td><td>white solid</td></tr><tr><td>2</td><td>Na₂CO₃ + CaCl₂</td><td>white solid</td></tr><tr><td>3</td><td>KNO₃ + NaCl</td><td>stayed clear</td></tr><tr><td>4</td><td>CuCl₂ + NaOH</td><td>blue solid</td></tr></table>",
      claims: [
        {
          id: "well3",
          sol: "CH.3.e",
          stem: "Why did well 3 stay clear?",
          choices: [
            { letter: "A", text: "Potassium and sodium ions are too small to form a solid." },
            { letter: "B", text: "Both possible new pairs, KCl and NaNO₃, are soluble." },
            { letter: "C", text: "Nitrate ions prevent any double replacement reaction." },
            { letter: "D", text: "The two solutions were too dilute to react with each other." }
          ],
          correct: "B"
        },
        {
          id: "agcl-formula",
          sol: "CH.3.c",
          stem: "The white solid in well 1 has the formula —",
          choices: [
            { letter: "A", text: "AgCl" },
            { letter: "B", text: "AgCl₂" },
            { letter: "C", text: "Ag₂Cl" },
            { letter: "D", text: "NaNO₃" }
          ],
          correct: "A"
        },
        {
          id: "well2-name",
          sol: "CH.3.a",
          stem: "The white solid in well 2 is named —",
          choices: [
            { letter: "A", text: "calcium carbide" },
            { letter: "B", text: "calcium(II) carbonate" },
            { letter: "C", text: "calcium carbonate" },
            { letter: "D", text: "sodium chloride" }
          ],
          correct: "C"
        },
        {
          id: "well2-balance",
          sol: "CH.3.b",
          stem: "Which is the balanced equation for the reaction in well 2?",
          choices: [
            { letter: "A", text: "Na₂CO₃ + CaCl₂ → CaCO₃ + NaCl" },
            { letter: "B", text: "Na₂CO₃ + CaCl₂ → CaCO₃ + 2 NaCl" },
            { letter: "C", text: "2 Na₂CO₃ + CaCl₂ → CaCO₃ + 2 NaCl" },
            { letter: "D", text: "Na₂CO₃ + CaCl₂ → Ca₂CO₃ + NaCl₂" }
          ],
          correct: "B"
        },
        {
          id: "cuoh2-formula",
          sol: "CH.3.c",
          stem: "The blue solid in well 4 is copper(II) hydroxide. Its formula is —",
          choices: [
            { letter: "A", text: "CuOH₂" },
            { letter: "B", text: "Cu₂OH" },
            { letter: "C", text: "Cu(OH)₃" },
            { letter: "D", text: "Cu(OH)₂" }
          ],
          correct: "D"
        },
        {
          id: "predict-pb",
          sol: "CH.3.e",
          stem: "A student proposes mixing Pb(NO₃)₂ with KCl. Based on the notes, which prediction is correct?",
          choices: [
            { letter: "A", text: "A precipitate of lead(II) chloride will form." },
            { letter: "B", text: "A precipitate of potassium nitrate will form." },
            { letter: "C", text: "No precipitate, because all nitrates are soluble." },
            { letter: "D", text: "No precipitate, because both salts contain chloride." }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "rxn-lewis-shapes",
      family: "RXN",
      title: "Dots, shapes and polarity",
      kind: "Formulas & Reactions · CH.3",
      blurb: "Four molecules built from a model kit, described in words.",
      level: 2,
      passage: "<p>" + N(1) + "A class built four molecules with a model kit and drew each <strong>Lewis structure</strong>, then predicted the shape and whether the molecule was polar. " + N(2) + "For water, the oxygen atom holds two bonding pairs and two lone pairs, giving a bent shape with a 105° angle. " + N(3) + "Carbon dioxide has two double bonds and no lone pairs on carbon, so it is linear. " + N(4) + "Ammonia's nitrogen holds three bonding pairs and one lone pair, giving a trigonal pyramidal shape. " + N(5) + "Methane's carbon holds four bonding pairs and no lone pairs, giving a tetrahedral shape. " + N(6) + "A bond is <strong>polar</strong> when the two atoms differ in electronegativity; a molecule is polar when its polar bonds do not cancel.</p>" +
        "<table><tr><th>Molecule</th><th>Shape</th><th>Polar molecule?</th></tr><tr><td>H₂O</td><td>bent</td><td>yes</td></tr><tr><td>CO₂</td><td>linear</td><td>no</td></tr><tr><td>NH₃</td><td>trigonal pyramidal</td><td>yes</td></tr><tr><td>CH₄</td><td>tetrahedral</td><td>no</td></tr></table>",
      claims: [
        {
          id: "co2-nonpolar",
          sol: "CH.3.d",
          stem: "Carbon dioxide has polar C=O bonds, yet the molecule is nonpolar. Why?",
          choices: [
            { letter: "A", text: "Oxygen and carbon have the same electronegativity." },
            { letter: "B", text: "The two bond dipoles point opposite ways and cancel." },
            { letter: "C", text: "Double bonds are never polar, whatever the atoms." },
            { letter: "D", text: "The lone pairs on carbon balance out the bond polarity." }
          ],
          correct: "B"
        },
        {
          id: "bent",
          sol: "CH.3.d",
          stem: "What causes water to be bent rather than linear?",
          choices: [
            { letter: "A", text: "Two lone pairs on oxygen repel the bonding pairs." },
            { letter: "B", text: "Hydrogen atoms are too small to sit in a straight line." },
            { letter: "C", text: "The O–H bonds are double bonds, which bend the molecule." },
            { letter: "D", text: "Water molecules stick to each other by hydrogen bonds." }
          ],
          correct: "A"
        },
        {
          id: "bond-type",
          sol: "CH.3.d",
          stem: "The bonds within all four molecules are best described as —",
          choices: [
            { letter: "A", text: "ionic, because electrons are transferred between atoms" },
            { letter: "B", text: "metallic, because electrons are shared by all atoms" },
            { letter: "C", text: "covalent, because pairs of electrons are shared" },
            { letter: "D", text: "hydrogen bonds, because hydrogen is present in each" }
          ],
          correct: "C"
        },
        {
          id: "ch4-formula",
          sol: "CH.3.c",
          stem: "Carbon has four valence electrons and hydrogen has one. The formula CH₄ follows because —",
          choices: [
            { letter: "A", text: "carbon needs four shared pairs to complete its octet" },
            { letter: "B", text: "hydrogen can share up to four electrons at once" },
            { letter: "C", text: "carbon gives away four electrons to the hydrogens" },
            { letter: "D", text: "four is the largest number of bonds any atom can form" }
          ],
          correct: "A"
        },
        {
          id: "ch4-nonpolar",
          sol: "CH.3.d",
          stem: "Why is methane a nonpolar molecule?",
          choices: [
            { letter: "A", text: "The C–H bonds are ionic and carry no dipole." },
            { letter: "B", text: "Its four identical bonds are symmetric and cancel out." },
            { letter: "C", text: "Carbon has a lone pair that balances out the four bonds." },
            { letter: "D", text: "Hydrogen atoms never carry any partial charge." }
          ],
          correct: "B"
        },
        {
          id: "co2-name",
          sol: "CH.3.a",
          stem: "The compound NH₃ is named ammonia; the compound CO₂ is named —",
          choices: [
            { letter: "A", text: "carbon oxide" },
            { letter: "B", text: "carbon(IV) oxide" },
            { letter: "C", text: "monocarbon dioxide" },
            { letter: "D", text: "carbon dioxide" }
          ],
          correct: "D"
        }
      ]
    },

    /* ---------- long ---------- */
    {
      id: "rxn-magnesium-ribbon-rate",
      family: "RXN",
      title: "Magnesium ribbon, four ways",
      kind: "Formulas & Reactions · CH.3",
      blurb: "Temperature, concentration, surface area and a catalyst: what changes the rate?",
      level: 3,
      passage: "<p>" + N(1) + "A class measured the <strong>rate</strong> of the reaction Mg(s) + 2 HCl(aq) → MgCl₂(aq) + H₂(g) by timing how long a 2.0 cm strip of magnesium ribbon took to disappear in 20 mL of acid. " + N(2) + "According to <strong>collision theory</strong>, a reaction occurs only when particles collide with enough energy and the correct orientation. " + N(3) + "In part 1, students varied the acid concentration at 22 °C. " + N(4) + "In part 2, they varied the temperature using 1.0 M acid. " + N(5) + "In part 3, they used the same mass of magnesium either as a single strip or as fine turnings, in 1.0 M acid at 22 °C. " + N(6) + "One group also added a drop of copper(II) sulfate solution to a 1.0 M trial and found the ribbon disappeared faster, with the copper unchanged at the end.</p>" +
        "<table><tr><th>Part</th><th>Condition</th><th>Time to disappear (s)</th></tr><tr><td>1</td><td>0.5 M, strip</td><td>190</td></tr><tr><td>1</td><td>1.0 M, strip</td><td>95</td></tr><tr><td>1</td><td>2.0 M, strip</td><td>46</td></tr><tr><td>2</td><td>12 °C, strip</td><td>180</td></tr><tr><td>2</td><td>32 °C, strip</td><td>50</td></tr><tr><td>3</td><td>22 °C, turnings</td><td>31</td></tr></table>",
      claims: [
        {
          id: "conc-trend",
          sol: "CH.3.f",
          stem: "Which conclusion about acid concentration is best supported by part 1?",
          choices: [
            { letter: "A", text: "Doubling the concentration roughly halved the reaction time." },
            { letter: "B", text: "Doubling the concentration had no effect on the reaction time." },
            { letter: "C", text: "The rate fell steadily as the concentration was raised." },
            { letter: "D", text: "Concentration only affected the rate above 2.0 M." }
          ],
          correct: "A"
        },
        {
          id: "collision-conc",
          sol: "CH.3.f",
          stem: "Using collision theory, why does a higher HCl concentration speed the reaction?",
          choices: [
            { letter: "A", text: "Each collision carries far more energy in concentrated acid." },
            { letter: "B", text: "More H⁺ ions per volume means more collisions each second." },
            { letter: "C", text: "The activation energy is lower in concentrated acid." },
            { letter: "D", text: "Concentrated acid makes the magnesium strip larger." }
          ],
          correct: "B"
        },
        {
          id: "turnings",
          sol: "CH.3.f",
          stem: "The turnings reacted in 31 s while the strip took 95 s under the same conditions. This is because the turnings —",
          choices: [
            { letter: "A", text: "contain more magnesium than the strip" },
            { letter: "B", text: "raise the temperature of the acid" },
            { letter: "C", text: "expose more surface area to the acid" },
            { letter: "D", text: "lower the concentration of acid needed" }
          ],
          correct: "C"
        },
        {
          id: "atom-counts",
          sol: "CH.3.b",
          stem: "In Mg + 2 HCl → MgCl₂ + H₂, which statement about atom counts is true?",
          choices: [
            { letter: "A", text: "Each side has two chlorine and two hydrogen atoms." },
            { letter: "B", text: "There is one hydrogen atom on each side of the arrow." },
            { letter: "C", text: "Chlorine is unbalanced, with two on the left and one on the right." },
            { letter: "D", text: "The equation still needs a coefficient of 2 before MgCl₂." }
          ],
          correct: "A"
        },
        {
          id: "catalyst-evidence",
          sol: "CH.3.f",
          stem: "The copper(II) sulfate drop acted as a catalyst. Which evidence in the passage supports this?",
          choices: [
            { letter: "A", text: "The copper was consumed as the reaction went all the way to completion." },
            { letter: "B", text: "More hydrogen gas was released than in the other trials." },
            { letter: "C", text: "The temperature of the acid rose during the catalyst trial." },
            { letter: "D", text: "The rate rose while the copper was left unchanged at the end." }
          ],
          correct: "D"
        },
        {
          id: "type",
          sol: "CH.3.e",
          stem: "The reaction Mg + 2 HCl → MgCl₂ + H₂ is an example of —",
          choices: [
            { letter: "A", text: "synthesis" },
            { letter: "B", text: "decomposition" },
            { letter: "C", text: "single replacement" },
            { letter: "D", text: "double replacement" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "rxn-brown-tube-equilibrium",
      family: "RXN",
      title: "The brown tube in hot and cold water",
      kind: "Formulas & Reactions · CH.3",
      blurb: "A sealed tube of NO₂ and N₂O₄ shifts color with temperature; an energy diagram explains why.",
      level: 3,
      passage: "<p>" + N(1) + "A sealed glass tube holds the <strong>equilibrium</strong> mixture N₂O₄(g) ⇌ 2 NO₂(g), in which N₂O₄ is colorless and NO₂ is red-brown. " + N(2) + "The forward reaction absorbs 58 kJ of heat per mole of N₂O₄. " + N(3) + "The teacher moved the tube between three water baths and the class recorded the color after one minute in each. " + N(4) + "On the board she sketched a <strong>reaction energy diagram</strong> for the forward reaction: the reactant line sits at 0 kJ, the curve rises to a peak at 100 kJ, and the product line sits at 58 kJ. " + N(5) + "She then explained <strong>Le Chatelier's principle</strong>: when a stress is applied to a system at equilibrium, the system shifts in the direction that relieves the stress. " + N(6) + "A second demo used a syringe of the same gas mixture: when the plunger was pushed in, the gas darkened for an instant and then grew paler than before as the equilibrium shifted toward fewer gas molecules.</p>" +
        "<table><tr><th>Bath</th><th>Temperature (°C)</th><th>Color after 1 min</th></tr><tr><td>ice water</td><td>0</td><td>almost colorless</td></tr><tr><td>room</td><td>22</td><td>pale brown</td></tr><tr><td>hot</td><td>80</td><td>dark red-brown</td></tr></table>",
      claims: [
        {
          id: "endothermic",
          sol: "CH.3.f",
          stem: "Based on sentence 2 and the energy diagram, the forward reaction is —",
          choices: [
            { letter: "A", text: "exothermic, because the products sit well above the reactants" },
            { letter: "B", text: "endothermic, because the products sit above the reactants" },
            { letter: "C", text: "exothermic, because heat flows out into the water bath" },
            { letter: "D", text: "endothermic, because the peak lies above the products" }
          ],
          correct: "B"
        },
        {
          id: "activation",
          sol: "CH.3.f",
          stem: "The activation energy of the forward reaction shown on the diagram is —",
          choices: [
            { letter: "A", text: "42 kJ" },
            { letter: "B", text: "58 kJ" },
            { letter: "C", text: "100 kJ" },
            { letter: "D", text: "158 kJ" }
          ],
          correct: "C"
        },
        {
          id: "hot-bath",
          sol: "CH.3.f",
          stem: "Why did the tube darken in the 80 °C bath?",
          choices: [
            { letter: "A", text: "Heat acts as a reactant, so adding heat shifted the equilibrium toward NO₂." },
            { letter: "B", text: "Heat acts as a product, so adding heat shifted the equilibrium toward N₂O₄." },
            { letter: "C", text: "High temperature breaks NO₂ apart into nitrogen and oxygen gas." },
            { letter: "D", text: "The glass tube expanded in the hot water and let in more gas." }
          ],
          correct: "A"
        },
        {
          id: "syringe",
          sol: "CH.3.f",
          stem: "In the syringe demo, pushing the plunger in made the gas paler after the first instant because —",
          choices: [
            { letter: "A", text: "higher pressure favored the side with fewer gas molecules, N₂O₄" },
            { letter: "B", text: "compressing the gas cooled it, which favored N₂O₄" },
            { letter: "C", text: "higher pressure favored the side with more gas molecules, red-brown NO₂" },
            { letter: "D", text: "part of the darker gas escaped around the plunger" }
          ],
          correct: "A"
        },
        {
          id: "bond",
          sol: "CH.3.d",
          stem: "Both NO₂ and N₂O₄ are held together by which type of bond?",
          choices: [
            { letter: "A", text: "ionic bonds, because nitrogen and oxygen are in different groups" },
            { letter: "B", text: "metallic bonds, because the electrons are delocalized" },
            { letter: "C", text: "covalent bonds, because two nonmetals share electron pairs" },
            { letter: "D", text: "hydrogen bonds, because the molecules stick to each other" }
          ],
          correct: "C"
        },
        {
          id: "no2-name",
          sol: "CH.3.a",
          stem: "The red-brown gas NO₂ is named —",
          choices: [
            { letter: "A", text: "nitrogen oxide" },
            { letter: "B", text: "nitrogen(II) oxide" },
            { letter: "C", text: "dinitrogen oxide" },
            { letter: "D", text: "nitrogen dioxide" }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "rxn-shenandoah-limestone",
      family: "RXN",
      title: "Acid rain on Shenandoah limestone",
      kind: "Formulas & Reactions · CH.3",
      blurb: "Limestone chips, dilute acid and a gas that clouds limewater: a cave forming in a beaker.",
      level: 2,
      passage: "<p>" + N(1) + "Caves in the Shenandoah Valley form when slightly acidic water dissolves <strong>limestone</strong>, which is mostly calcium carbonate, CaCO₃. " + N(2) + "To model acid rain, students placed 2.0 g of limestone chips in 50 mL of dilute hydrochloric acid and collected the gas in a balloon; the gas turned limewater cloudy, showing it was carbon dioxide. " + N(3) + "In the reaction the ions trade partners, and the carbonic acid formed breaks into water and carbon dioxide: CaCO₃(s) + 2 HCl(aq) → CaCl₂(aq) + H₂O(l) + CO₂(g). " + N(4) + "A second beaker held chips in rainwater collected from the school roof, with a pH of 5.6; a third held chips in tap water at pH 7.2. " + N(5) + "After three days the chips were dried and massed again. " + N(6) + "The class also noted that natural rain is weakly acidic because carbon dioxide from the air dissolves in it, forming <strong>carbonic acid</strong>, H₂CO₃, in the reaction CO₂ + H₂O ⇌ H₂CO₃.</p>" +
        "<table><tr><th>Beaker</th><th>Liquid</th><th>pH</th><th>Mass lost (g)</th></tr><tr><td>1</td><td>dilute HCl</td><td>1.5</td><td>1.62</td></tr><tr><td>2</td><td>roof rainwater</td><td>5.6</td><td>0.04</td></tr><tr><td>3</td><td>tap water</td><td>7.2</td><td>0.01</td></tr></table>",
      claims: [
        {
          id: "type",
          sol: "CH.3.e",
          stem: "Based on sentence 3, the reaction between limestone and hydrochloric acid is best classified as —",
          choices: [
            { letter: "A", text: "synthesis" },
            { letter: "B", text: "decomposition" },
            { letter: "C", text: "single replacement" },
            { letter: "D", text: "double replacement" }
          ],
          correct: "D"
        },
        {
          id: "coefficient",
          sol: "CH.3.b",
          stem: "In the balanced equation in sentence 3, the coefficient 2 in front of HCl is needed because —",
          choices: [
            { letter: "A", text: "CaCl₂ needs two Cl atoms and H₂O needs two H atoms" },
            { letter: "B", text: "hydrochloric acid is about twice as strong as carbonic acid" },
            { letter: "C", text: "each formula unit of CaCO₃ contains two calcium atoms" },
            { letter: "D", text: "carbon dioxide carries two oxygen atoms per molecule" }
          ],
          correct: "A"
        },
        {
          id: "cacl2-name",
          sol: "CH.3.a",
          stem: "The product CaCl₂ is named —",
          choices: [
            { letter: "A", text: "calcium dichloride" },
            { letter: "B", text: "calcium chlorate" },
            { letter: "C", text: "calcium chloride" },
            { letter: "D", text: "calcium(II) chloride" }
          ],
          correct: "C"
        },
        {
          id: "carbonate-charge",
          sol: "CH.3.c",
          stem: "The formula H₂CO₃ for carbonic acid is consistent with the carbonate ion having a charge of —",
          choices: [
            { letter: "A", text: "1−" },
            { letter: "B", text: "2−" },
            { letter: "C", text: "3−" },
            { letter: "D", text: "2+" }
          ],
          correct: "B"
        },
        {
          id: "rate-ph",
          sol: "CH.3.f",
          stem: "Which statement best explains the pattern of mass loss across the three beakers?",
          choices: [
            { letter: "A", text: "Limestone reacts only with laboratory acids and never with rainwater." },
            { letter: "B", text: "More H⁺ ions in solution means more collisions with the carbonate." },
            { letter: "C", text: "The tap water contained a catalyst that stopped the reaction." },
            { letter: "D", text: "The three beakers must have started with different chip masses." }
          ],
          correct: "B"
        },
        {
          id: "carbonate-bonds",
          sol: "CH.3.d",
          stem: "In CaCO₃, the attraction between Ca²⁺ and CO₃²⁻ is ionic, while the bonds inside the carbonate ion are —",
          choices: [
            { letter: "A", text: "ionic, because oxygen takes electrons away from carbon" },
            { letter: "B", text: "metallic, because the electrons move freely" },
            { letter: "C", text: "covalent, because carbon and oxygen share electrons" },
            { letter: "D", text: "hydrogen bonds, because water is present" }
          ],
          correct: "C"
        }
      ]
    }
  ];

  for (var i = 0; i < PACKS.length; i++) P.push(PACKS[i]);
})(typeof window !== "undefined" ? window : global);
