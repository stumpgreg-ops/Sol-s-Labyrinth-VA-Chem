/* SOL Lab — Atomic Structure & Periodic Relationships (CH.2). Original text only. */
(function (global) {
  var P = global.HEIST_PACKS;
  if (!P || !P.push) return;
  var N = function (i) { return '<span class="n">(' + i + ')</span> '; };   // numbered sentence

  var PACKS = [
    /* ---------- tiny ---------- */
    {
      id: "atom-magnesium-isotopes",
      family: "ATOM",
      title: "Three kinds of magnesium",
      kind: "Atomic Structure · CH.2",
      blurb: "Three isotopes, three abundances: weigh them into one average atomic mass.",
      level: 1,
      passage: "<p>" + N(1) + "A student received a data card for the three natural <strong>isotopes</strong> of magnesium, atomic number 12. " + N(2) + "Each isotope has the same number of protons but a different number of neutrons, so each has its own mass number. " + N(3) + "The card listed each percent abundance, and the student had to calculate the average atomic mass.</p>" +
        "<table><tr><th>Isotope</th><th>Mass number</th><th>Abundance (%)</th></tr><tr><td>Mg-24</td><td>24</td><td>79.0</td></tr><tr><td>Mg-25</td><td>25</td><td>10.0</td></tr><tr><td>Mg-26</td><td>26</td><td>11.0</td></tr></table>",
      claims: [
        {
          id: "average",
          sol: "CH.2.a",
          stem: "Using the abundances in the table, what is the average atomic mass of magnesium?",
          choices: [
            { letter: "A", text: "24.00 amu" },
            { letter: "B", text: "24.32 amu" },
            { letter: "C", text: "25.00 amu" },
            { letter: "D", text: "26.00 amu" }
          ],
          correct: "B"
        },
        {
          id: "neutrons",
          sol: "CH.2.c",
          stem: "How many neutrons are in one atom of Mg-25?",
          choices: [
            { letter: "A", text: "13" },
            { letter: "B", text: "12" },
            { letter: "C", text: "25" },
            { letter: "D", text: "37" }
          ],
          correct: "A"
        },
        {
          id: "term",
          sol: "CH.2.b",
          stem: "Based on sentence 2, the three forms of magnesium are called isotopes because they —",
          choices: [
            { letter: "A", text: "have different numbers of protons and therefore different atomic numbers" },
            { letter: "B", text: "have the same mass number but carry different electric charges" },
            { letter: "C", text: "have the same number of protons but different numbers of neutrons" },
            { letter: "D", text: "have gained or lost electrons to become charged ions" }
          ],
          correct: "C"
        },
        {
          id: "atomic-number",
          sol: "CH.2.a",
          stem: "Which statement correctly describes the atomic number 12 for magnesium?",
          choices: [
            { letter: "A", text: "It equals the number of neutrons in the most common isotope." },
            { letter: "B", text: "It is the number of protons in every magnesium atom." },
            { letter: "C", text: "It is the sum of the protons and neutrons in Mg-24." },
            { letter: "D", text: "It is the average mass of the three isotopes in amu." }
          ],
          correct: "B"
        },
        {
          id: "contributes",
          sol: "CH.2.a",
          stem: "Which isotope contributes most to the average atomic mass, and why?",
          choices: [
            { letter: "A", text: "Mg-26, because it has the greatest mass number of the three" },
            { letter: "B", text: "Mg-25, because its mass number is in the middle" },
            { letter: "C", text: "Mg-26, because its abundance is above 10 percent" },
            { letter: "D", text: "Mg-24, because it is by far the most abundant isotope" }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "atom-tracer-halflife",
      family: "ATOM",
      title: "A tracer with a six-hour clock",
      kind: "Atomic Structure · CH.2",
      blurb: "Technetium-99m loses half its activity every six hours. Read the decay table.",
      level: 1,
      passage: "<p>" + N(1) + "A hospital in Richmond receives a dose of the radioactive tracer technetium-99m (Tc-99m) for a bone scan. " + N(2) + "Tc-99m has a <strong>half-life</strong> of 6.0 hours, so half of the sample decays away every 6.0 hours. " + N(3) + "A technician recorded the activity of an 800 MBq sample over one day.</p>" +
        "<table><tr><th>Time (h)</th><th>Activity (MBq)</th></tr><tr><td>0</td><td>800</td></tr><tr><td>6</td><td>400</td></tr><tr><td>12</td><td>200</td></tr><tr><td>18</td><td>100</td></tr><tr><td>24</td><td>50</td></tr></table>",
      claims: [
        {
          id: "fraction",
          sol: "CH.2.b",
          stem: "What fraction of the original Tc-99m remains after 24 hours?",
          choices: [
            { letter: "A", text: "1/4" },
            { letter: "B", text: "1/8" },
            { letter: "C", text: "1/16" },
            { letter: "D", text: "1/32" }
          ],
          correct: "C"
        },
        {
          id: "time",
          sol: "CH.2.b",
          stem: "How long after the sample arrives will its activity fall to 25 MBq?",
          choices: [
            { letter: "A", text: "24 hours" },
            { letter: "B", text: "30 hours" },
            { letter: "C", text: "32 hours" },
            { letter: "D", text: "36 hours" }
          ],
          correct: "B"
        },
        {
          id: "neutrons",
          sol: "CH.2.c",
          stem: "Technetium has atomic number 43. How many neutrons are in a Tc-99 nucleus?",
          choices: [
            { letter: "A", text: "56" },
            { letter: "B", text: "43" },
            { letter: "C", text: "99" },
            { letter: "D", text: "142" }
          ],
          correct: "A"
        },
        {
          id: "term",
          sol: "CH.2.b",
          stem: "In sentence 2, the half-life of Tc-99m is best described as the time needed for —",
          choices: [
            { letter: "A", text: "the whole sample to decay into a stable element" },
            { letter: "B", text: "the activity of the sample to double in size" },
            { letter: "C", text: "half of the nuclei in the sample to decay" },
            { letter: "D", text: "the tracer to leave the patient's body" }
          ],
          correct: "C"
        },
        {
          id: "mass-number",
          sol: "CH.2.a",
          stem: "The mass number 99 in Tc-99 represents —",
          choices: [
            { letter: "A", text: "the number of protons only" },
            { letter: "B", text: "the number of electrons in a neutral atom" },
            { letter: "C", text: "the average mass of all technetium isotopes" },
            { letter: "D", text: "the total number of protons and neutrons" }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "atom-alkali-water",
      family: "ATOM",
      title: "Group 1 meets water",
      kind: "Atomic Structure · CH.2",
      blurb: "Lithium fizzes, sodium races, potassium burns: why the group gets wilder going down.",
      level: 1,
      passage: "<p>" + N(1) + "A teacher dropped pea-sized pieces of lithium, sodium and potassium into separate troughs of water behind a safety screen. " + N(2) + "All three are <strong>alkali metals</strong>, the elements of group 1. " + N(3) + "Lithium fizzed gently. " + N(4) + "Sodium melted into a shiny ball and fizzed loudly. " + N(5) + "Potassium burst into a lilac flame on contact. " + N(6) + "Phenolphthalein turned each trough pink, showing that a base had formed.</p>",
      claims: [
        {
          id: "trend",
          sol: "CH.2.d",
          stem: "Which statement about the reactivity of the alkali metals is supported by the demonstration?",
          choices: [
            { letter: "A", text: "Reactivity increases going down group 1." },
            { letter: "B", text: "Reactivity decreases going down group 1." },
            { letter: "C", text: "All three metals react at about the same rate." },
            { letter: "D", text: "Only the heaviest metal reacts with water." }
          ],
          correct: "A"
        },
        {
          id: "evidence",
          sol: "CH.2.h",
          stem: "Which observation is the best evidence that a chemical change occurred?",
          choices: [
            { letter: "A", text: "Sodium melted into a shiny ball on the water surface." },
            { letter: "B", text: "The small metal pieces floated on top of the water." },
            { letter: "C", text: "Phenolphthalein turned pink because a base formed." },
            { letter: "D", text: "The pieces were cut to the same pea-sized shape." }
          ],
          correct: "C"
        },
        {
          id: "oxidation",
          sol: "CH.2.g",
          stem: "When a sodium atom reacts with water it forms Na⁺. The oxidation number of sodium in this ion is —",
          choices: [
            { letter: "A", text: "+1" },
            { letter: "B", text: "−1" },
            { letter: "C", text: "0" },
            { letter: "D", text: "+2" }
          ],
          correct: "A"
        },
        {
          id: "period",
          sol: "CH.2.e",
          stem: "Sodium is in period 3 and potassium is in period 4. Compared with a sodium atom, a potassium atom has —",
          choices: [
            { letter: "A", text: "one fewer valence electron" },
            { letter: "B", text: "one more occupied energy level" },
            { letter: "C", text: "one more proton in its outer level" },
            { letter: "D", text: "fewer electrons in total" }
          ],
          correct: "B"
        },
        {
          id: "why",
          sol: "CH.2.f",
          stem: "Which statement best explains why potassium reacts more violently than lithium?",
          choices: [
            { letter: "A", text: "Potassium atoms have more valence electrons to give away." },
            { letter: "B", text: "Potassium's outer electron is held closer to the nucleus." },
            { letter: "C", text: "Lithium atoms are larger, so they hold their electron more loosely." },
            { letter: "D", text: "Potassium's outer electron is farther out and more shielded." }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "atom-flame-test",
      family: "ATOM",
      title: "Colors in the flame",
      kind: "Atomic Structure · CH.2",
      blurb: "Four salts, four flame colors, and a Bohr-model reason for each.",
      level: 1,
      passage: "<p>" + N(1) + "Students dissolved four metal chlorides in water and held a wire loop dipped in each solution in a burner flame. " + N(2) + "The flame colors are listed in the table. " + N(3) + "In the <strong>Bohr model</strong>, heat lifts electrons to higher energy levels; as they fall back they give off light of specific colors.</p>" +
        "<table><tr><th>Salt</th><th>Flame color</th></tr><tr><td>NaCl</td><td>yellow</td></tr><tr><td>KCl</td><td>lilac</td></tr><tr><td>SrCl₂</td><td>red</td></tr><tr><td>CuCl₂</td><td>blue-green</td></tr></table>",
      claims: [
        {
          id: "emission",
          sol: "CH.2.i",
          stem: "According to the Bohr model, the light seen in each flame is produced when electrons —",
          choices: [
            { letter: "A", text: "absorb heat and jump up to a higher energy level" },
            { letter: "B", text: "are removed from the atom completely" },
            { letter: "C", text: "collide with chloride ions in the flame" },
            { letter: "D", text: "drop from a higher energy level to a lower one" }
          ],
          correct: "D"
        },
        {
          id: "unique",
          sol: "CH.2.i",
          stem: "Why does each metal give its own flame color?",
          choices: [
            { letter: "A", text: "Each element has its own set of allowed energy levels." },
            { letter: "B", text: "Heavier atoms always glow with redder light in a flame." },
            { letter: "C", text: "The chloride ion changes color with each metal." },
            { letter: "D", text: "Larger atoms absorb more heat from the flame." }
          ],
          correct: "A"
        },
        {
          id: "dissolve",
          sol: "CH.2.h",
          stem: "Dissolving the salts in water before the test is an example of —",
          choices: [
            { letter: "A", text: "a chemical change, because ions are formed" },
            { letter: "B", text: "a nuclear change in the metal atoms" },
            { letter: "C", text: "a physical change, because no new substance forms" },
            { letter: "D", text: "a chemical change, because the solid salt disappears from view" }
          ],
          correct: "C"
        },
        {
          id: "sodium-ion",
          sol: "CH.2.g",
          stem: "A sodium atom has 11 electrons. How many electrons does the sodium ion in NaCl have?",
          choices: [
            { letter: "A", text: "1" },
            { letter: "B", text: "10" },
            { letter: "C", text: "11" },
            { letter: "D", text: "12" }
          ],
          correct: "B"
        }
      ]
    },

    /* ---------- short ---------- */
    {
      id: "atom-period3-radii",
      family: "ATOM",
      title: "Walking across period 3",
      kind: "Atomic Structure · CH.2",
      blurb: "Radii shrink and ionization energies climb from sodium to chlorine. Explain why.",
      level: 2,
      passage: "<p>" + N(1) + "A class compared five elements of <strong>period 3</strong>. " + N(2) + "The table lists each atomic radius in picometers and the <strong>first ionization energy</strong>, the energy needed to remove one electron from a gaseous atom. " + N(3) + "Each step to the right adds one proton to the nucleus and one electron to the same outer energy level. " + N(4) + "Students were asked to predict where aluminum (atomic number 13) would fit.</p>" +
        "<table><tr><th>Element</th><th>Atomic number</th><th>Radius (pm)</th><th>First IE (kJ/mol)</th></tr><tr><td>Na</td><td>11</td><td>190</td><td>495</td></tr><tr><td>Mg</td><td>12</td><td>160</td><td>740</td></tr><tr><td>Si</td><td>14</td><td>120</td><td>785</td></tr><tr><td>P</td><td>15</td><td>110</td><td>1010</td></tr><tr><td>Cl</td><td>17</td><td>100</td><td>1250</td></tr></table>",
      claims: [
        {
          id: "radius-trend",
          sol: "CH.2.f",
          stem: "Which trend in atomic radius is shown by the table?",
          choices: [
            { letter: "A", text: "Radius decreases as atomic number increases across the period." },
            { letter: "B", text: "Radius increases as atomic number increases across the period." },
            { letter: "C", text: "Radius stays about the same across the period." },
            { letter: "D", text: "Radius decreases and then increases across the period." }
          ],
          correct: "A"
        },
        {
          id: "ie-why",
          sol: "CH.2.f",
          stem: "Which statement best explains the trend in ionization energy across period 3?",
          choices: [
            { letter: "A", text: "Each added electron starts a new energy level farther from the nucleus." },
            { letter: "B", text: "Extra neutrons make the nucleus heavier and harder to ionize." },
            { letter: "C", text: "Rising nuclear charge holds the outer electrons more tightly." },
            { letter: "D", text: "Shielding by inner electrons increases sharply from sodium to chlorine." }
          ],
          correct: "C"
        },
        {
          id: "period",
          sol: "CH.2.e",
          stem: "The five elements are placed in the same period because they —",
          choices: [
            { letter: "A", text: "have the same number of electrons in their outer level" },
            { letter: "B", text: "have the same number of occupied energy levels" },
            { letter: "C", text: "form ions with the same charge" },
            { letter: "D", text: "have nearly the same atomic radius" }
          ],
          correct: "B"
        },
        {
          id: "valence",
          sol: "CH.2.g",
          stem: "Which element in the table has seven valence electrons and is likely to gain one electron?",
          choices: [
            { letter: "A", text: "Na" },
            { letter: "B", text: "Mg" },
            { letter: "C", text: "P" },
            { letter: "D", text: "Cl" }
          ],
          correct: "D"
        },
        {
          id: "similar",
          sol: "CH.2.d",
          stem: "Sodium and which other element would be expected to have the most similar chemical properties?",
          choices: [
            { letter: "A", text: "magnesium, because it is next to sodium in the table" },
            { letter: "B", text: "chlorine, because it has the largest ionization energy" },
            { letter: "C", text: "potassium, because it is in the same group as sodium" },
            { letter: "D", text: "silicon, because it has a similar atomic radius" }
          ],
          correct: "C"
        },
        {
          id: "predict",
          sol: "CH.2.f",
          stem: "Based on the trends, the atomic radius of aluminum (atomic number 13) is most likely —",
          choices: [
            { letter: "A", text: "larger than sodium at 190 pm" },
            { letter: "B", text: "between 160 pm and 120 pm" },
            { letter: "C", text: "smaller than chlorine at 100 pm" },
            { letter: "D", text: "exactly 160 pm" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "atom-radon-basement",
      family: "ATOM",
      title: "Radon in the basement",
      kind: "Atomic Structure · CH.2",
      blurb: "A noble gas that seeps from Piedmont rock and decays every 3.8 days.",
      level: 2,
      passage: "<p>" + N(1) + "Radon-222 is a radioactive noble gas that seeps from uranium-bearing rock into basements in parts of the Virginia Piedmont. " + N(2) + "A homeowner in Charlottesville placed a sealed detector in the basement for a week. " + N(3) + "Rn-222, atomic number 86, has a half-life of 3.8 days and decays by emitting an <strong>alpha particle</strong> (2 protons and 2 neutrons), becoming polonium-218. " + N(4) + "A lab sample containing 160 units of Rn-222 activity was sealed and measured every half-life.</p>" +
        "<table><tr><th>Days elapsed</th><th>Half-lives</th><th>Activity (units)</th></tr><tr><td>0</td><td>0</td><td>160</td></tr><tr><td>3.8</td><td>1</td><td>80</td></tr><tr><td>7.6</td><td>2</td><td>40</td></tr><tr><td>11.4</td><td>3</td><td>20</td></tr><tr><td>15.2</td><td>4</td><td>10</td></tr></table>",
      claims: [
        {
          id: "remaining",
          sol: "CH.2.b",
          stem: "What activity would remain in the sealed sample after 11.4 days?",
          choices: [
            { letter: "A", text: "80 units" },
            { letter: "B", text: "40 units" },
            { letter: "C", text: "20 units" },
            { letter: "D", text: "10 units" }
          ],
          correct: "C"
        },
        {
          id: "alpha",
          sol: "CH.2.b",
          stem: "When Rn-222 emits an alpha particle, the new nucleus has —",
          choices: [
            { letter: "A", text: "2 fewer protons and 2 fewer neutrons" },
            { letter: "B", text: "2 more protons and the same mass number" },
            { letter: "C", text: "the same number of protons and 4 fewer neutrons" },
            { letter: "D", text: "1 fewer proton and 1 more neutron" }
          ],
          correct: "A"
        },
        {
          id: "neutrons",
          sol: "CH.2.c",
          stem: "How many neutrons are in a radon-222 nucleus?",
          choices: [
            { letter: "A", text: "86" },
            { letter: "B", text: "136" },
            { letter: "C", text: "222" },
            { letter: "D", text: "308" }
          ],
          correct: "B"
        },
        {
          id: "polonium",
          sol: "CH.2.a",
          stem: "The atomic number of polonium, the product named in sentence 3, must be —",
          choices: [
            { letter: "A", text: "82" },
            { letter: "B", text: "84" },
            { letter: "C", text: "88" },
            { letter: "D", text: "218" }
          ],
          correct: "B"
        },
        {
          id: "noble",
          sol: "CH.2.d",
          stem: "Radon is placed in group 18 because it —",
          choices: [
            { letter: "A", text: "has a single valence electron that it loses easily" },
            { letter: "B", text: "is a radioactive gas at room temperature" },
            { letter: "C", text: "reacts violently with water" },
            { letter: "D", text: "has a full outer energy level and rarely reacts" }
          ],
          correct: "D"
        },
        {
          id: "physical",
          sol: "CH.2.h",
          stem: "Which of these is a physical property of radon mentioned in the notes?",
          choices: [
            { letter: "A", text: "It is a gas that seeps through rock into basements." },
            { letter: "B", text: "It decays by emitting an alpha particle from its nucleus." },
            { letter: "C", text: "It changes into polonium-218 over time." },
            { letter: "D", text: "Its nucleus contains 86 protons." }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "atom-halogen-displacement",
      family: "ATOM",
      title: "Halogens trade places",
      kind: "Atomic Structure · CH.2",
      blurb: "Chlorine water, bromine water and two halide salts: who displaces whom?",
      level: 1,
      passage: "<p>" + N(1) + "Students tested the reactivity of three <strong>halogens</strong>, the elements of group 17. " + N(2) + "They added a few drops of chlorine water or bromine water to test tubes of sodium bromide and sodium iodide solutions. " + N(3) + "A darker color shows that the free halogen displaced the halide ion from the salt. " + N(4) + "The results are in the table.</p>" +
        "<table><tr><th>Halogen added</th><th>Solution</th><th>Result</th></tr><tr><td>chlorine water</td><td>NaBr</td><td>turned orange (Br₂ formed)</td></tr><tr><td>chlorine water</td><td>NaI</td><td>turned brown (I₂ formed)</td></tr><tr><td>bromine water</td><td>NaCl</td><td>no change</td></tr><tr><td>bromine water</td><td>NaI</td><td>turned brown (I₂ formed)</td></tr></table>",
      claims: [
        {
          id: "order",
          sol: "CH.2.d",
          stem: "Which order of reactivity is supported by the results?",
          choices: [
            { letter: "A", text: "chlorine > bromine > iodine" },
            { letter: "B", text: "iodine > bromine > chlorine" },
            { letter: "C", text: "bromine > chlorine > iodine" },
            { letter: "D", text: "all three halogens are equally reactive" }
          ],
          correct: "A"
        },
        {
          id: "no-change",
          sol: "CH.2.d",
          stem: "Why did bromine water produce no change in the sodium chloride solution?",
          choices: [
            { letter: "A", text: "Chloride ions do not belong to the same periodic group as bromine." },
            { letter: "B", text: "Bromine is less reactive than chlorine and cannot displace it." },
            { letter: "C", text: "Sodium chloride does not dissolve in water." },
            { letter: "D", text: "Bromine water contains no free halogen atoms to react." }
          ],
          correct: "B"
        },
        {
          id: "electronegativity",
          sol: "CH.2.f",
          stem: "Which statement about electronegativity in group 17 is correct?",
          choices: [
            { letter: "A", text: "Iodine is the most electronegative halogen." },
            { letter: "B", text: "Electronegativity increases going down the group." },
            { letter: "C", text: "Chlorine is more electronegative than bromine." },
            { letter: "D", text: "All halogens have the same electronegativity." }
          ],
          correct: "C"
        },
        {
          id: "charge",
          sol: "CH.2.g",
          stem: "Each halogen atom has seven valence electrons. The halide ions in the salts therefore have a charge of —",
          choices: [
            { letter: "A", text: "1+" },
            { letter: "B", text: "7−" },
            { letter: "C", text: "7+" },
            { letter: "D", text: "1−" }
          ],
          correct: "D"
        },
        {
          id: "color",
          sol: "CH.2.h",
          stem: "The color change in sentence 3 is evidence of a —",
          choices: [
            { letter: "A", text: "physical change, because the solution stayed liquid" },
            { letter: "B", text: "physical change, because color is a physical property" },
            { letter: "C", text: "chemical change, because a new substance formed" },
            { letter: "D", text: "nuclear change, because atoms of a new element formed" }
          ],
          correct: "C"
        },
        {
          id: "period",
          sol: "CH.2.e",
          stem: "Bromine is in period 4. This means a bromine atom has —",
          choices: [
            { letter: "A", text: "four valence electrons" },
            { letter: "B", text: "four occupied energy levels" },
            { letter: "C", text: "four more protons than chlorine" },
            { letter: "D", text: "an atomic number of 4" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "atom-copper-props",
      family: "ATOM",
      title: "Scrap copper from the shipyard",
      kind: "Atomic Structure · CH.2",
      blurb: "Shiny, bendable, slowly turning green: sort copper's properties into physical and chemical.",
      level: 1,
      passage: "<p>" + N(1) + "A student examined a piece of copper wire, atomic number 29, taken from a scrap bin at a Norfolk shipyard. " + N(2) + "She recorded her observations in a table and labeled each one as a <strong>physical property</strong>, which can be observed without changing the substance, or a <strong>chemical property</strong>, which describes how the substance reacts to form new substances. " + N(3) + "Two of her labels were left blank for a partner to check.</p>" +
        "<table><tr><th>Observation</th><th>Type</th></tr><tr><td>reddish-orange, shiny surface</td><td>physical</td></tr><tr><td>conducts electricity</td><td>physical</td></tr><tr><td>bends easily without breaking</td><td>physical</td></tr><tr><td>turns green in moist air over years</td><td>(blank)</td></tr><tr><td>does not fizz in dilute acid</td><td>chemical</td></tr><tr><td>melts at 1085 °C</td><td>(blank)</td></tr></table>",
      claims: [
        {
          id: "green",
          sol: "CH.2.h",
          stem: "The observation \"turns green in moist air\" should be labeled —",
          choices: [
            { letter: "A", text: "physical, because color is a physical property" },
            { letter: "B", text: "chemical, because a new substance forms on the surface" },
            { letter: "C", text: "physical, because the wire keeps its shape" },
            { letter: "D", text: "chemical, because the wire conducts electricity so well" }
          ],
          correct: "B"
        },
        {
          id: "melt",
          sol: "CH.2.h",
          stem: "Melting at 1085 °C is a physical property because —",
          choices: [
            { letter: "A", text: "the liquid copper is still copper" },
            { letter: "B", text: "a new substance is produced by heating" },
            { letter: "C", text: "the wire changes color when heated" },
            { letter: "D", text: "the atoms of copper are destroyed" }
          ],
          correct: "A"
        },
        {
          id: "physical-change",
          sol: "CH.2.h",
          stem: "Which of these is a physical change that the student could carry out on the wire?",
          choices: [
            { letter: "A", text: "leaving it in moist air until it turns green" },
            { letter: "B", text: "dissolving it in nitric acid to make a blue solution" },
            { letter: "C", text: "hammering it flat into a thin strip" },
            { letter: "D", text: "heating it in a flame to form black copper oxide" }
          ],
          correct: "C"
        },
        {
          id: "oxidation",
          sol: "CH.2.g",
          stem: "Copper commonly forms Cu⁺ and Cu²⁺ ions. This shows that copper —",
          choices: [
            { letter: "A", text: "has more than one oxidation number" },
            { letter: "B", text: "always loses exactly one electron" },
            { letter: "C", text: "gains electrons to form its ions" },
            { letter: "D", text: "has a single fixed charge like sodium" }
          ],
          correct: "A"
        },
        {
          id: "particles",
          sol: "CH.2.c",
          stem: "Copper-63 is the most common isotope of copper. A neutral atom of Cu-63 has —",
          choices: [
            { letter: "A", text: "29 protons, 63 neutrons, 29 electrons" },
            { letter: "B", text: "34 protons, 29 neutrons, 34 electrons" },
            { letter: "C", text: "29 protons, 34 neutrons, 34 electrons" },
            { letter: "D", text: "29 protons, 34 neutrons, 29 electrons" }
          ],
          correct: "D"
        },
        {
          id: "block",
          sol: "CH.2.d",
          stem: "Copper is located in the middle block of the periodic table, so it is classified as —",
          choices: [
            { letter: "A", text: "an alkaline earth metal" },
            { letter: "B", text: "a transition metal" },
            { letter: "C", text: "a halogen" },
            { letter: "D", text: "a noble gas" }
          ],
          correct: "B"
        }
      ]
    },

    /* ---------- medium ---------- */
    {
      id: "atom-gold-foil",
      family: "ATOM",
      title: "Alpha particles and gold foil",
      kind: "Atomic Structure · CH.2",
      blurb: "Most fly straight through, a handful bounce back. What does that say about the atom?",
      level: 2,
      passage: "<p>" + N(1) + "A class modeled a famous scattering experiment. " + N(2) + "In the original work, a beam of positively charged <strong>alpha particles</strong>, each made of 2 protons and 2 neutrons, was fired at a sheet of gold foil only a few hundred atoms thick. " + N(3) + "A screen around the foil glowed wherever a particle struck it. " + N(4) + "Based on the earlier \"plum pudding\" model of a spread-out positive sphere, the class expected every particle to pass through with almost no deflection. " + N(5) + "Instead the counts in the table were recorded. " + N(6) + "Most particles passed straight through, a few were bent sharply, and roughly 1 in 8000 bounced back. " + N(7) + "Gold has atomic number 79, and its only stable isotope is gold-197.</p>" +
        "<table><tr><th>Deflection angle</th><th>Particles counted</th></tr><tr><td>less than 5°</td><td>15,850</td></tr><tr><td>5° to 90°</td><td>148</td></tr><tr><td>more than 90°</td><td>2</td></tr></table>",
      claims: [
        {
          id: "empty",
          sol: "CH.2.i",
          stem: "Which conclusion about the atom is best supported by the fact that most alpha particles passed straight through?",
          choices: [
            { letter: "A", text: "The nucleus is spread throughout the whole atom." },
            { letter: "B", text: "Electrons repel alpha particles strongly." },
            { letter: "C", text: "The atom is mostly empty space." },
            { letter: "D", text: "Gold atoms are much smaller than alpha particles." }
          ],
          correct: "C"
        },
        {
          id: "nucleus",
          sol: "CH.2.i",
          stem: "The few particles that bounced back showed that the atom contains —",
          choices: [
            { letter: "A", text: "a large, soft, positively charged cloud" },
            { letter: "B", text: "a small, dense, positively charged core" },
            { letter: "C", text: "many negative electrons at its center" },
            { letter: "D", text: "neutrons spread evenly through the atom" }
          ],
          correct: "B"
        },
        {
          id: "repel",
          sol: "CH.2.c",
          stem: "An alpha particle is deflected by the nucleus because —",
          choices: [
            { letter: "A", text: "opposite charges attract each other" },
            { letter: "B", text: "neutrons in the nucleus block the particle" },
            { letter: "C", text: "the electrons have far too little mass to stop or turn it" },
            { letter: "D", text: "both are positively charged and repel each other" }
          ],
          correct: "D"
        },
        {
          id: "compare",
          sol: "CH.2.c",
          stem: "Which row correctly compares two subatomic particles?",
          choices: [
            { letter: "A", text: "proton: 1+, about 1 amu; electron: 1−, about 1 amu" },
            { letter: "B", text: "proton: 1+, about 1 amu; neutron: 0, about 1 amu" },
            { letter: "C", text: "neutron: 1+, about 1 amu; electron: 1−, nearly 0 amu" },
            { letter: "D", text: "proton: 0, about 1 amu; neutron: 1+, nearly 0 amu" }
          ],
          correct: "B"
        },
        {
          id: "neutrons",
          sol: "CH.2.a",
          stem: "How many neutrons are in a gold-197 nucleus?",
          choices: [
            { letter: "A", text: "118" },
            { letter: "B", text: "79" },
            { letter: "C", text: "197" },
            { letter: "D", text: "276" }
          ],
          correct: "A"
        },
        {
          id: "replaced",
          sol: "CH.2.i",
          stem: "Which model of the atom did the results of this experiment replace?",
          choices: [
            { letter: "A", text: "the Bohr model, with electrons circling in fixed orbits" },
            { letter: "B", text: "the Dalton model of tiny, indivisible solid spheres" },
            { letter: "C", text: "the plum pudding model with positive charge spread out" },
            { letter: "D", text: "the quantum model with electron clouds and orbitals" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "atom-config-words",
      family: "ATOM",
      title: "Name that element",
      kind: "Atomic Structure · CH.2",
      blurb: "Four electron arrangements described in words. Identify each unknown.",
      level: 2,
      passage: "<p>" + N(1) + "A teacher described the electron arrangement of four unknown elements in words and asked students to identify them using a periodic table. " + N(2) + "In the <strong>quantum model</strong>, electrons fill sublevels from lowest energy upward, and each orbital holds at most two electrons with opposite spins. " + N(3) + "A <strong>valence electron</strong> is one in the outermost occupied energy level. " + N(4) + "Students were reminded that the number of electrons in a neutral atom equals its atomic number, and that elements in the same group have the same number of valence electrons.</p>" +
        "<table><tr><th>Element</th><th>Description</th></tr><tr><td>W</td><td>2 electrons in level 1, 8 in level 2, 7 in level 3</td></tr><tr><td>X</td><td>2 electrons in level 1, 8 in level 2, 2 in level 3</td></tr><tr><td>Y</td><td>1s²2s²2p⁶3s²3p⁶4s¹</td></tr><tr><td>Z</td><td>orbital diagram ends with three 2p boxes, each holding one arrow</td></tr></table>",
      claims: [
        {
          id: "w",
          sol: "CH.2.g",
          stem: "Which element is W?",
          choices: [
            { letter: "A", text: "argon" },
            { letter: "B", text: "fluorine" },
            { letter: "C", text: "sulfur" },
            { letter: "D", text: "chlorine" }
          ],
          correct: "D"
        },
        {
          id: "x-config",
          sol: "CH.2.g",
          stem: "The full electron configuration of element X is —",
          choices: [
            { letter: "A", text: "1s²2s²2p⁶3s²" },
            { letter: "B", text: "1s²2s²2p⁶3s¹" },
            { letter: "C", text: "1s²2s²2p⁶3s²3p²" },
            { letter: "D", text: "1s²2s²2p⁴3s²" }
          ],
          correct: "A"
        },
        {
          id: "y-valence",
          sol: "CH.2.g",
          stem: "Element Y has how many valence electrons, and what is its most likely oxidation number?",
          choices: [
            { letter: "A", text: "9 valence electrons; +1" },
            { letter: "B", text: "1 valence electron; +1" },
            { letter: "C", text: "1 valence electron; −1" },
            { letter: "D", text: "7 valence electrons; −1" }
          ],
          correct: "B"
        },
        {
          id: "y-period",
          sol: "CH.2.e",
          stem: "Element Y is in which period of the periodic table?",
          choices: [
            { letter: "A", text: "period 1" },
            { letter: "B", text: "period 3" },
            { letter: "C", text: "period 4" },
            { letter: "D", text: "period 19" }
          ],
          correct: "C"
        },
        {
          id: "z-group",
          sol: "CH.2.d",
          stem: "Element Z, with three half-filled 2p orbitals, has the same number of valence electrons as —",
          choices: [
            { letter: "A", text: "phosphorus, atomic number 15" },
            { letter: "B", text: "oxygen, atomic number 8" },
            { letter: "C", text: "beryllium, atomic number 4" },
            { letter: "D", text: "silicon, atomic number 14, a neighbor" }
          ],
          correct: "A"
        },
        {
          id: "w-vs-x",
          sol: "CH.2.f",
          stem: "Elements W and X are in the same period. Which comparison of the two is correct?",
          choices: [
            { letter: "A", text: "W has the larger atomic radius." },
            { letter: "B", text: "X has the higher ionization energy." },
            { letter: "C", text: "W has the higher electronegativity." },
            { letter: "D", text: "X has more occupied energy levels." }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "atom-oyster-c14",
      family: "ATOM",
      title: "Dating a Bay oyster shell",
      kind: "Atomic Structure · CH.2",
      blurb: "Carbon-14 in shells from a Chesapeake sediment core, half-life 5730 years.",
      level: 2,
      passage: "<p>" + N(1) + "A research team pulled a sediment core from the bottom of the Chesapeake Bay and found oyster shells at several depths. " + N(2) + "Living oysters build shell from carbon in the water, which contains a tiny, steady fraction of radioactive <strong>carbon-14</strong>. " + N(3) + "When the oyster dies, no new carbon is added, and the C-14 decays by beta emission into nitrogen-14 with a half-life of 5730 years. " + N(4) + "The team compared the C-14 in each shell with the amount in a modern shell taken from a living reef nearby. " + N(5) + "Carbon has atomic number 6; its common stable isotope is carbon-12.</p>" +
        "<table><tr><th>Shell</th><th>Depth (cm)</th><th>C-14 remaining (% of modern)</th></tr><tr><td>1</td><td>15</td><td>88</td></tr><tr><td>2</td><td>60</td><td>50</td></tr><tr><td>3</td><td>140</td><td>25</td></tr><tr><td>4</td><td>220</td><td>12.5</td></tr></table>",
      claims: [
        {
          id: "age",
          sol: "CH.2.b",
          stem: "Approximately how old is shell 3?",
          choices: [
            { letter: "A", text: "5730 years" },
            { letter: "B", text: "11,460 years" },
            { letter: "C", text: "17,190 years" },
            { letter: "D", text: "22,920 years" }
          ],
          correct: "B"
        },
        {
          id: "halflives",
          sol: "CH.2.b",
          stem: "How many half-lives have passed for shell 4?",
          choices: [
            { letter: "A", text: "1" },
            { letter: "B", text: "2" },
            { letter: "C", text: "3" },
            { letter: "D", text: "4" }
          ],
          correct: "C"
        },
        {
          id: "c14-vs-c12",
          sol: "CH.2.c",
          stem: "Compared with an atom of carbon-12, an atom of carbon-14 has —",
          choices: [
            { letter: "A", text: "two more protons" },
            { letter: "B", text: "two more neutrons" },
            { letter: "C", text: "two more electrons" },
            { letter: "D", text: "two fewer neutrons" }
          ],
          correct: "B"
        },
        {
          id: "c14-n14",
          sol: "CH.2.a",
          stem: "Which statement about carbon-14 and nitrogen-14 is correct?",
          choices: [
            { letter: "A", text: "They have the same atomic number." },
            { letter: "B", text: "They have the same number of neutrons." },
            { letter: "C", text: "They have the same mass number." },
            { letter: "D", text: "They are isotopes of the same element." }
          ],
          correct: "C"
        },
        {
          id: "beta",
          sol: "CH.2.b",
          stem: "During beta decay of C-14, a neutron in the nucleus changes into —",
          choices: [
            { letter: "A", text: "a proton and an emitted electron" },
            { letter: "B", text: "an alpha particle and a gamma ray" },
            { letter: "C", text: "a gamma ray and nothing else" },
            { letter: "D", text: "two protons and an electron" }
          ],
          correct: "A"
        },
        {
          id: "carbonate",
          sol: "CH.2.h",
          stem: "The oyster shell is mostly calcium carbonate, which fizzes and releases CO₂ when acid is added. This describes a —",
          choices: [
            { letter: "A", text: "physical property of the shell" },
            { letter: "B", text: "nuclear property of the carbon" },
            { letter: "C", text: "physical change in the acid" },
            { letter: "D", text: "chemical property of the shell" }
          ],
          correct: "D"
        }
      ]
    },

    /* ---------- long ---------- */
    {
      id: "atom-shielding-group1",
      family: "ATOM",
      title: "Shielding down group 1",
      kind: "Atomic Structure · CH.2",
      blurb: "Inner electrons cancel part of the nuclear pull. Use that to explain a whole column.",
      level: 3,
      passage: "<p>" + N(1) + "A chemistry class studied why the alkali metals become more reactive down group 1. " + N(2) + "Each of these metals has a single valence electron in an s sublevel, and the table lists the number of occupied energy levels, the atomic radius and the first ionization energy for four of them. " + N(3) + "The teacher explained the <strong>shielding effect</strong>: electrons in the inner, filled energy levels sit between the nucleus and the valence electron and cancel part of the nuclear pull. " + N(4) + "The net attraction felt by the outer electron is called the <strong>effective nuclear charge</strong>. " + N(5) + "Down a group, each new period adds an inner level of shielding electrons, so the effective charge on the valence electron stays roughly the same even though the actual number of protons rises. " + N(6) + "The outer electron is also farther from the nucleus in each successive period. " + N(7) + "Together these two factors explain why the largest atom in the table loses its electron most easily. " + N(8) + "The class then predicted the values for cesium, the next member of the group.</p>" +
        "<table><tr><th>Element</th><th>Occupied levels</th><th>Radius (pm)</th><th>First IE (kJ/mol)</th></tr><tr><td>Li</td><td>2</td><td>150</td><td>520</td></tr><tr><td>Na</td><td>3</td><td>190</td><td>495</td></tr><tr><td>K</td><td>4</td><td>230</td><td>420</td></tr><tr><td>Rb</td><td>5</td><td>250</td><td>405</td></tr></table>",
      claims: [
        {
          id: "trend",
          sol: "CH.2.f",
          stem: "Which trend is shown by the table as the group is descended?",
          choices: [
            { letter: "A", text: "Radius increases and ionization energy decreases." },
            { letter: "B", text: "Radius decreases and ionization energy increases." },
            { letter: "C", text: "Both radius and ionization energy increase." },
            { letter: "D", text: "Both radius and ionization energy decrease." }
          ],
          correct: "A"
        },
        {
          id: "effective",
          sol: "CH.2.f",
          stem: "According to the notes, why does the effective nuclear charge on the valence electron stay about the same from lithium to rubidium?",
          choices: [
            { letter: "A", text: "The number of protons does not change down the group." },
            { letter: "B", text: "Each added inner level shields the extra protons." },
            { letter: "C", text: "The valence electron moves into a d sublevel." },
            { letter: "D", text: "Neutrons cancel the charge of the added protons." }
          ],
          correct: "B"
        },
        {
          id: "cesium",
          sol: "CH.2.f",
          stem: "Which is the best prediction for cesium, the next element in group 1?",
          choices: [
            { letter: "A", text: "radius about 230 pm and ionization energy about 420 kJ/mol" },
            { letter: "B", text: "radius less than 250 pm and ionization energy more than 405 kJ/mol" },
            { letter: "C", text: "radius more than 250 pm and ionization energy less than 405 kJ/mol" },
            { letter: "D", text: "radius about 150 pm and ionization energy about 520 kJ/mol" }
          ],
          correct: "C"
        },
        {
          id: "group",
          sol: "CH.2.d",
          stem: "Which statement explains why all four elements are placed in the same group?",
          choices: [
            { letter: "A", text: "They have the same number of occupied energy levels." },
            { letter: "B", text: "They have nearly the same atomic radius." },
            { letter: "C", text: "They have the same number of protons." },
            { letter: "D", text: "They have the same number of valence electrons." }
          ],
          correct: "D"
        },
        {
          id: "potassium-ion",
          sol: "CH.2.g",
          stem: "The electron configuration of potassium ends in 4s¹. When potassium reacts, it most likely forms an ion by —",
          choices: [
            { letter: "A", text: "gaining one electron to become K⁻" },
            { letter: "B", text: "losing one electron to become K⁺" },
            { letter: "C", text: "losing four electrons to become K⁴⁺" },
            { letter: "D", text: "sharing its 4s electron with another potassium atom" }
          ],
          correct: "B"
        },
        {
          id: "periods",
          sol: "CH.2.e",
          stem: "Sodium and potassium are in different periods. Which comparison of the two atoms is correct?",
          choices: [
            { letter: "A", text: "A potassium atom has one more occupied energy level than a sodium atom." },
            { letter: "B", text: "A sodium atom has more inner electrons shielding its valence electron." },
            { letter: "C", text: "A potassium atom has the smaller radius because it has more protons." },
            { letter: "D", text: "A sodium atom has a much larger effective nuclear charge on its valence electron." }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "atom-road-salt-ions",
      family: "ATOM",
      title: "Road salt on I-64",
      kind: "Atomic Structure · CH.2",
      blurb: "Sodium, calcium and magnesium chlorides from the highway shoulder: who lost what?",
      level: 3,
      passage: "<p>" + N(1) + "After a January storm, highway crews spread rock salt (sodium chloride) and calcium chloride on Interstate 64 near Richmond. " + N(2) + "A student collected meltwater from the shoulder and evaporated it in a dish to recover the dissolved salts. " + N(3) + "Both salts are <strong>ionic compounds</strong>: the metal atoms have lost electrons to form positive ions, and chlorine atoms have gained electrons to form negative ions. " + N(4) + "The <strong>oxidation number</strong> of an element in a simple ion equals the charge of the ion. " + N(5) + "The student built the table using a periodic table and the rule that atoms lose or gain electrons to reach a full outer level of eight electrons. " + N(6) + "She noted that calcium-40 is the most common isotope of calcium and that magnesium chloride, a third de-icer, contains the ion Mg²⁺. " + N(7) + "Finally she checked that each formula had a total charge of zero, since the compounds themselves are neutral.</p>" +
        "<table><tr><th>Atom</th><th>Atomic number</th><th>Valence electrons</th><th>Ion formed</th></tr><tr><td>Na</td><td>11</td><td>1</td><td>Na⁺</td></tr><tr><td>Ca</td><td>20</td><td>2</td><td>Ca²⁺</td></tr><tr><td>Mg</td><td>12</td><td>2</td><td>Mg²⁺</td></tr><tr><td>Cl</td><td>17</td><td>7</td><td>Cl⁻</td></tr></table>",
      claims: [
        {
          id: "ca-oxidation",
          sol: "CH.2.g",
          stem: "What is the oxidation number of calcium in calcium chloride?",
          choices: [
            { letter: "A", text: "−2" },
            { letter: "B", text: "−1" },
            { letter: "C", text: "+1" },
            { letter: "D", text: "+2" }
          ],
          correct: "D"
        },
        {
          id: "ca-electrons",
          sol: "CH.2.c",
          stem: "How many electrons does a Ca²⁺ ion contain?",
          choices: [
            { letter: "A", text: "2" },
            { letter: "B", text: "18" },
            { letter: "C", text: "20" },
            { letter: "D", text: "22" }
          ],
          correct: "B"
        },
        {
          id: "why-ions",
          sol: "CH.2.g",
          stem: "Why does a sodium atom form a 1+ ion while a chlorine atom forms a 1− ion?",
          choices: [
            { letter: "A", text: "Sodium gains one electron; chlorine loses one electron." },
            { letter: "B", text: "Sodium loses one electron; chlorine gains one to reach eight." },
            { letter: "C", text: "Sodium has one proton more than chlorine has valence electrons." },
            { letter: "D", text: "Both atoms lose electrons, but sodium loses fewer of them." }
          ],
          correct: "B"
        },
        {
          id: "ca40",
          sol: "CH.2.a",
          stem: "A neutral calcium-40 atom has —",
          choices: [
            { letter: "A", text: "20 protons, 20 neutrons, 20 electrons" },
            { letter: "B", text: "20 protons, 40 neutrons, 20 electrons" },
            { letter: "C", text: "40 protons, 20 neutrons, 40 electrons" },
            { letter: "D", text: "20 protons, 20 neutrons, 18 electrons" }
          ],
          correct: "A"
        },
        {
          id: "same-group",
          sol: "CH.2.d",
          stem: "Calcium and magnesium form ions with the same charge because they —",
          choices: [
            { letter: "A", text: "are next to each other in the same period" },
            { letter: "B", text: "are both transition metals with d electrons" },
            { letter: "C", text: "are in the same group, with two valence electrons each" },
            { letter: "D", text: "have the same number of protons and neutrons in the nucleus" }
          ],
          correct: "C"
        },
        {
          id: "physical",
          sol: "CH.2.h",
          stem: "Which of these describes a physical change in the student's procedure?",
          choices: [
            { letter: "A", text: "Chlorine atoms gained electrons to form chloride ions." },
            { letter: "B", text: "The rock salt reacted with a steel guardrail, forming rust." },
            { letter: "C", text: "Sodium atoms lost electrons when the salt formed." },
            { letter: "D", text: "Water evaporated, leaving the salts behind in the dish." }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "atom-models-stations",
      family: "ATOM",
      title: "Five models, five stations",
      kind: "Atomic Structure · CH.2",
      blurb: "A wooden ball, a raisin muffin, a marble in a hula hoop, a mobile and a cotton ball.",
      level: 2,
      passage: "<p>" + N(1) + "A class set up five stations, each holding a model of the atom built from classroom materials, and matched each to the evidence that led to it. " + N(2) + "Station 1 held a solid wooden ball: atoms as tiny, indivisible spheres, with every atom of an element identical. " + N(3) + "Station 2 held a muffin studded with raisins, representing negative electrons scattered through a ball of positive charge, proposed after <strong>cathode rays</strong> were shown to be streams of tiny negative particles. " + N(4) + "Station 3 held a marble at the center of an empty hula hoop: a small, dense, positive nucleus with electrons far outside it, based on gold-foil scattering results. " + N(5) + "Station 4 held a mobile with beads on rings at fixed distances, one ring for each energy level, which explained the bright lines in hydrogen's spectrum. " + N(6) + "Station 5 held a fuzzy cotton ball with no defined edge: the <strong>quantum model</strong>, in which each electron occupies an orbital, a region of space where it is likely to be found, rather than a fixed path. " + N(7) + "Students were asked to name each model and place the stations in order of discovery.</p>",
      claims: [
        {
          id: "first-nucleus",
          sol: "CH.2.i",
          stem: "Which station shows the model that first included a nucleus?",
          choices: [
            { letter: "A", text: "station 1" },
            { letter: "B", text: "station 2" },
            { letter: "C", text: "station 3" },
            { letter: "D", text: "station 4" }
          ],
          correct: "C"
        },
        {
          id: "discovery",
          sol: "CH.2.i",
          stem: "The model at station 2 was proposed after the discovery of —",
          choices: [
            { letter: "A", text: "neutrons" },
            { letter: "B", text: "electrons" },
            { letter: "C", text: "protons" },
            { letter: "D", text: "the nucleus" }
          ],
          correct: "B"
        },
        {
          id: "bohr-vs-quantum",
          sol: "CH.2.i",
          stem: "Which statement describes the main difference between the models at stations 4 and 5?",
          choices: [
            { letter: "A", text: "Station 4 contains no electrons at all; station 5 contains many." },
            { letter: "B", text: "Station 4 fixes electron paths; station 5 gives probable regions." },
            { letter: "C", text: "Station 4 has a central nucleus; station 5 removes the nucleus entirely." },
            { letter: "D", text: "Station 5 shows only one energy level; station 4 shows several." }
          ],
          correct: "B"
        },
        {
          id: "orbital",
          sol: "CH.2.g",
          stem: "In the model at station 5, an orbital is best described as —",
          choices: [
            { letter: "A", text: "a region where an electron is likely to be found" },
            { letter: "B", text: "a circular ring at a fixed distance from the nucleus" },
            { letter: "C", text: "the exact path an electron follows around the nucleus" },
            { letter: "D", text: "the empty space between the nucleus and the first ring" }
          ],
          correct: "A"
        },
        {
          id: "rings",
          sol: "CH.2.e",
          stem: "A station-4 style drawing of a magnesium atom has beads arranged 2, 8, 2 on three rings. This arrangement shows that magnesium is in —",
          choices: [
            { letter: "A", text: "group 2 only" },
            { letter: "B", text: "period 2" },
            { letter: "C", text: "period 3" },
            { letter: "D", text: "group 12" }
          ],
          correct: "C"
        },
        {
          id: "cathode",
          sol: "CH.2.c",
          stem: "The cathode-ray particles in sentence 3 were later shown to have —",
          choices: [
            { letter: "A", text: "no charge and a mass about equal to a proton" },
            { letter: "B", text: "a positive charge and a mass about equal to a proton" },
            { letter: "C", text: "a negative charge and a mass about equal to a neutron" },
            { letter: "D", text: "a negative charge and a mass about 1/2000 of a proton" }
          ],
          correct: "D"
        }
      ]
    }
  ];

  for (var i = 0; i < PACKS.length; i++) P.push(PACKS[i]);
})(typeof window !== "undefined" ? window : global);
