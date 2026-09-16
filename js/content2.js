/* SOL Lab — Scientific Investigation (CH.1). Original text only. */
(function (global) {
  var P = global.HEIST_PACKS;
  if (!P || !P.push) return;
  var N = function (i) { return '<span class="n">(' + i + ')</span> '; };   // numbered sentence

  var PACKS = [
    /* ---------- tiny ---------- */
    {
      id: "inv-density-cylinder",
      family: "INV",
      title: "Density of a metal cylinder",
      kind: "Scientific Investigation · CH.1",
      blurb: "A balance, a graduated cylinder and 10.0 mL of displaced water.",
      level: 1,
      passage: "<p>" + N(1) + "A student measured a small metal cylinder on an electronic balance: 27.06 g. " + N(2) + "She poured water into a 50 mL graduated cylinder, read the bottom of the <strong>meniscus</strong> at eye level (20.0 mL), lowered the metal in, and read again (30.0 mL). " + N(3) + "Reference densities: aluminum 2.70, zinc 7.14, iron 7.87, lead 11.3 g/cm³.</p>",
      claims: [
        {
          id: "meniscus",
          sol: "CH.1.a",
          stem: "Why did the student read the volume at eye level?",
          choices: [
            { letter: "A", text: "to keep the metal from splashing water out of the top of the graduated cylinder" },
            { letter: "B", text: "to avoid the reading error that comes from viewing the curve at an angle" },
            { letter: "C", text: "to make the water level rise more slowly" },
            { letter: "D", text: "to warm the water to the same temperature as the metal" }
          ],
          correct: "B"
        },
        {
          id: "density",
          sol: "CH.1.g",
          stem: "What is the density of the metal, reported to the correct number of significant digits?",
          choices: [
            { letter: "A", text: "0.902 g/cm³" },
            { letter: "B", text: "1.35 g/cm³" },
            { letter: "C", text: "2.706 g/cm³" },
            { letter: "D", text: "2.71 g/cm³" }
          ],
          correct: "D"
        },
        {
          id: "sigfig",
          sol: "CH.1.g",
          stem: "The volume of the metal, 10.0 mL, is known to how many significant digits?",
          choices: [
            { letter: "A", text: "1 significant digit" },
            { letter: "B", text: "2 significant digits" },
            { letter: "C", text: "3 significant digits" },
            { letter: "D", text: "4 significant digits" }
          ],
          correct: "C"
        },
        {
          id: "glassware",
          sol: "CH.1.h",
          stem: "Why was a graduated cylinder used for the volume instead of a beaker?",
          choices: [
            { letter: "A", text: "A graduated cylinder has finer markings, so the volume is more precise." },
            { letter: "B", text: "A beaker cannot hold water and a metal object at the same time without spilling." },
            { letter: "C", text: "A graduated cylinder holds more water than any beaker." },
            { letter: "D", text: "A beaker changes the density of the metal placed in it." }
          ],
          correct: "A"
        },
        {
          id: "identify",
          sol: "CH.1.i",
          stem: "Which claim about the cylinder is best supported by the measurements and the reference list?",
          choices: [
            { letter: "A", text: "It is lead, because it was the heaviest object on the bench." },
            { letter: "B", text: "It is zinc, because its mass is close to 27 g." },
            { letter: "C", text: "It is aluminum, because its density is close to 2.70 g/cm³." },
            { letter: "D", text: "It is iron, because it sank in the water." }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "inv-acid-spill",
      family: "INV",
      title: "Acid on the bench",
      kind: "Scientific Investigation · CH.1",
      blurb: "A beaker of hydrochloric acid tips over. What happens in the next minute?",
      level: 1,
      passage: "<p>" + N(1) + "A beaker of 1.0 M hydrochloric acid sitting at the edge of the bench was knocked over, and a few drops splashed onto a student's forearm. " + N(2) + "The teacher had him rinse the arm under running water for 15 minutes. " + N(3) + "She covered the puddle with sodium bicarbonate to <strong>neutralize</strong> the acid, waited until the fizzing stopped, and wiped it up wearing gloves. " + N(4) + "The spill was written up on an incident form.</p>",
      claims: [
        {
          id: "first",
          sol: "CH.1.c",
          stem: "What is the correct first response when acid splashes on skin?",
          choices: [
            { letter: "A", text: "rub the spot dry with a paper towel and keep working" },
            { letter: "B", text: "cover the skin with baking soda" },
            { letter: "C", text: "flush the skin with running water right away" },
            { letter: "D", text: "wait to see whether the skin turns red" }
          ],
          correct: "C"
        },
        {
          id: "fizz",
          sol: "CH.1.c",
          stem: "Why did the teacher wait until the fizzing stopped before wiping up the puddle?",
          choices: [
            { letter: "A", text: "The bubbles showed that acid was still reacting with the bicarbonate." },
            { letter: "B", text: "The bubbles were poisonous chlorine gas that had to escape from the room first." },
            { letter: "C", text: "The paper towels would have dissolved in the fizzing liquid." },
            { letter: "D", text: "The bicarbonate needed time to dry into a solid crust." }
          ],
          correct: "A"
        },
        {
          id: "gloves",
          sol: "CH.1.b",
          stem: "During the cleanup, which action would have been unsafe?",
          choices: [
            { letter: "A", text: "wearing goggles while wiping up the bench and the floor around it" },
            { letter: "B", text: "picking up the wet paper towels with bare hands" },
            { letter: "C", text: "keeping other students away from the puddle" },
            { letter: "D", text: "washing hands after removing the gloves" }
          ],
          correct: "B"
        },
        {
          id: "report",
          sol: "CH.1.b",
          stem: "According to sentence 4, why is even a small spill written up?",
          choices: [
            { letter: "A", text: "so the student can be graded on the lab" },
            { letter: "B", text: "so the leftover acid can be poured back into the stock bottle later" },
            { letter: "C", text: "so the beaker can be replaced by the supplier" },
            { letter: "D", text: "so the injury and the hazard are documented and followed up" }
          ],
          correct: "D"
        },
        {
          id: "prevent",
          sol: "CH.1.a",
          stem: "Which lab habit would most likely have prevented this spill?",
          choices: [
            { letter: "A", text: "keeping containers away from the edge of the bench" },
            { letter: "B", text: "using a larger beaker for the same volume of acid" },
            { letter: "C", text: "labeling the beaker with the date it was filled" },
            { letter: "D", text: "adding sodium bicarbonate to the acid before carrying it to the bench" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "inv-balance-check",
      family: "INV",
      title: "Checking the balance",
      kind: "Scientific Investigation · CH.1",
      blurb: "A 50.000 g standard mass and three readings that are all a little high.",
      level: 1,
      passage: "<p>" + N(1) + "Before massing samples, a student placed a <strong>standard mass</strong> labeled 50.000 g on the electronic balance three times, zeroing the empty pan before each reading. " + N(2) + "After pressing the calibrate button, the balance read 50.000 g.</p>" +
        "<table><tr><th>Reading</th><th>Balance display (g)</th></tr><tr><td>1</td><td>50.012</td></tr><tr><td>2</td><td>50.011</td></tr><tr><td>3</td><td>50.013</td></tr></table>",
      claims: [
        {
          id: "precision",
          sol: "CH.1.f",
          stem: "Before calibration, the three readings are best described as —",
          choices: [
            { letter: "A", text: "accurate but not precise" },
            { letter: "B", text: "precise but not accurate" },
            { letter: "C", text: "both accurate and precise" },
            { letter: "D", text: "neither accurate nor precise" }
          ],
          correct: "B"
        },
        {
          id: "pcterr",
          sol: "CH.1.f",
          stem: "Using the average of the three readings, what was the percent error of the balance before calibration?",
          choices: [
            { letter: "A", text: "0.00024%" },
            { letter: "B", text: "0.012%" },
            { letter: "C", text: "0.024%" },
            { letter: "D", text: "0.24%" }
          ],
          correct: "C"
        },
        {
          id: "why",
          sol: "CH.1.h",
          stem: "The purpose of placing a standard mass on the balance is to —",
          choices: [
            { letter: "A", text: "check that the instrument reads a known value correctly" },
            { letter: "B", text: "warm up the balance before it is used" },
            { letter: "C", text: "find the mass of the standard, which is not known until it is weighed" },
            { letter: "D", text: "clean dust off the weighing pan" }
          ],
          correct: "A"
        },
        {
          id: "sigfig",
          sol: "CH.1.g",
          stem: "How many significant digits are in the label 50.000 g?",
          choices: [
            { letter: "A", text: "one" },
            { letter: "B", text: "two" },
            { letter: "C", text: "four" },
            { letter: "D", text: "five" }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "inv-road-salt",
      family: "INV",
      title: "Which salt clears the road?",
      kind: "Scientific Investigation · CH.1",
      blurb: "Two road salts, one freezer at −5 °C, and a control cube that never melted.",
      level: 1,
      passage: "<p>" + N(1) + "Highway crews spread salt on I-81 before winter storms. " + N(2) + "A student compared two salts by sprinkling 5.0 g of each on a 100.0 g ice block in a freezer held at −5 °C; a third block got no salt. " + N(3) + "After 20 minutes she poured off and massed the liquid water. " + N(4) + "Each setup was run three times.</p>" +
        "<table><tr><th>Salt added</th><th>Average water melted (g)</th></tr><tr><td>none</td><td>0.0</td></tr><tr><td>NaCl</td><td>18.5</td></tr><tr><td>CaCl₂</td><td>27.2</td></tr></table>",
      claims: [
        {
          id: "iv",
          sol: "CH.1.d",
          stem: "The independent variable in this investigation is —",
          choices: [
            { letter: "A", text: "the mass of water melted" },
            { letter: "B", text: "the kind of salt added" },
            { letter: "C", text: "the temperature of the freezer" },
            { letter: "D", text: "the mass of each ice block" }
          ],
          correct: "B"
        },
        {
          id: "control",
          sol: "CH.1.d",
          stem: "What is the purpose of the ice block that received no salt?",
          choices: [
            { letter: "A", text: "to show how much ice melts at −5 °C without any salt" },
            { letter: "B", text: "to test whether the freezer can actually hold a temperature of −5 °C" },
            { letter: "C", text: "to provide extra water for the other two blocks" },
            { letter: "D", text: "to add a third salt to the comparison" }
          ],
          correct: "A"
        },
        {
          id: "data",
          sol: "CH.1.e",
          stem: "Which statement is supported by the data in the table?",
          choices: [
            { letter: "A", text: "NaCl melted about twice as much ice as CaCl₂." },
            { letter: "B", text: "Both salts melted the same mass of ice." },
            { letter: "C", text: "The untreated block melted 5.0 g of water." },
            { letter: "D", text: "CaCl₂ melted about 9 g more water than NaCl." }
          ],
          correct: "D"
        },
        {
          id: "claim",
          sol: "CH.1.i",
          stem: "The student claims that CaCl₂ is the better choice for roads at −5 °C. Which evidence best supports her claim?",
          choices: [
            { letter: "A", text: "CaCl₂ costs more than NaCl at the hardware store, so it must work better." },
            { letter: "B", text: "Both salts dissolved completely in the melted water." },
            { letter: "C", text: "In three repeated trials, CaCl₂ melted more ice than NaCl." },
            { letter: "D", text: "The freezer stayed at −5 °C for the whole 20 minutes." }
          ],
          correct: "C"
        },
        {
          id: "app",
          sol: "CH.1.j",
          stem: "Road crews spread salt before a storm because dissolved salt —",
          choices: [
            { letter: "A", text: "raises the temperature of the pavement" },
            { letter: "B", text: "lowers the freezing point of water on the road" },
            { letter: "C", text: "makes the snowflakes heavier so that they fall faster and pack down" },
            { letter: "D", text: "reacts with ice to release heat and light" }
          ],
          correct: "B"
        }
      ]
    },

    /* ---------- short ---------- */
    {
      id: "inv-titration-setup",
      family: "INV",
      title: "Vinegar meets the buret",
      kind: "Scientific Investigation · CH.1",
      blurb: "Rinse the buret, drop the funnel, and stop at the first faint pink.",
      level: 1,
      passage: "<p>" + N(1) + "A student titrated 25.0 mL of vinegar with 0.100 M sodium hydroxide using phenolphthalein indicator. " + N(2) + "She rinsed the <strong>buret</strong> with a little of the NaOH solution before filling it, removed the funnel, and read the bottom of the meniscus at eye level: 0.35 mL. " + N(3) + "She swirled the flask while adding base and stopped at the first faint pink that lasted 30 seconds; the buret then read 21.60 mL. " + N(4) + "Two more trials delivered 21.35 mL and 21.20 mL of base.</p>",
      claims: [
        {
          id: "rinse",
          sol: "CH.1.a",
          stem: "Why was the buret rinsed with NaOH solution instead of with water before filling?",
          choices: [
            { letter: "A", text: "Water left inside would dilute the base and change its concentration." },
            { letter: "B", text: "Water would react with the glass and cloud the buret so it cannot be read." },
            { letter: "C", text: "The NaOH rinse makes the pink color appear sooner." },
            { letter: "D", text: "The base rinse keeps the stopcock from opening." }
          ],
          correct: "A"
        },
        {
          id: "volume",
          sol: "CH.1.g",
          stem: "What volume of NaOH was delivered in the first trial?",
          choices: [
            { letter: "A", text: "21.60 mL" },
            { letter: "B", text: "21.3 mL" },
            { letter: "C", text: "21.25 mL" },
            { letter: "D", text: "21.95 mL" }
          ],
          correct: "C"
        },
        {
          id: "average",
          sol: "CH.1.e",
          stem: "What is the average volume of NaOH delivered over the three trials?",
          choices: [
            { letter: "A", text: "21.25 mL" },
            { letter: "B", text: "21.27 mL" },
            { letter: "C", text: "21.35 mL" },
            { letter: "D", text: "63.80 mL" }
          ],
          correct: "B"
        },
        {
          id: "endpoint",
          sol: "CH.1.a",
          stem: "Why did the student stop at a faint pink rather than a deep pink?",
          choices: [
            { letter: "A", text: "Deep pink means the vinegar has evaporated from the flask." },
            { letter: "B", text: "Faint pink shows that no base has been added yet." },
            { letter: "C", text: "Deep pink fades too quickly to be recorded." },
            { letter: "D", text: "Deep pink means extra base was added past the endpoint." }
          ],
          correct: "D"
        },
        {
          id: "goggles",
          sol: "CH.1.b",
          stem: "Goggles are required for this titration mainly because sodium hydroxide —",
          choices: [
            { letter: "A", text: "gives off a strong odor that irritates the nose and throat" },
            { letter: "B", text: "is a colorless liquid" },
            { letter: "C", text: "can cause serious eye damage even when dilute" },
            { letter: "D", text: "turns pink when it touches skin" }
          ],
          correct: "C"
        },
        {
          id: "glassware",
          sol: "CH.1.h",
          stem: "A buret is used to add the base rather than a graduated cylinder because a buret —",
          choices: [
            { letter: "A", text: "holds a larger volume of solution" },
            { letter: "B", text: "delivers drop by drop and reads to the nearest 0.05 mL" },
            { letter: "C", text: "changes color at the endpoint" },
            { letter: "D", text: "keeps the base from reacting with the acid until the flask is swirled" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "inv-calorimetry-cup",
      family: "INV",
      title: "Hot metal, foam cup",
      kind: "Scientific Investigation · CH.1",
      blurb: "A 5.0 °C rise in 50.0 g of water, three times over.",
      level: 2,
      passage: "<p>" + N(1) + "A group built a <strong>calorimeter</strong> from two nested foam cups with a lid holding a temperature probe. " + N(2) + "They placed 50.0 g of water at 21.0 °C in the cup, heated a 40.0 g metal sample in a boiling-water bath to 100.0 °C, and dropped it in. " + N(3) + "They stirred and recorded the highest temperature the probe reached: 26.0 °C. " + N(4) + "Two repeat trials gave 25.8 °C and 26.2 °C. " + N(5) + "Use c of water = 4.18 J/(g·°C).</p>",
      claims: [
        {
          id: "heat",
          sol: "CH.1.g",
          stem: "About how much heat did the water gain in the first trial?",
          choices: [
            { letter: "A", text: "21 J" },
            { letter: "B", text: "2.1 × 10² J" },
            { letter: "C", text: "1.0 × 10³ J" },
            { letter: "D", text: "5.4 × 10³ J" }
          ],
          correct: "C"
        },
        {
          id: "loss",
          sol: "CH.1.f",
          stem: "Which error would make the measured temperature rise smaller than the true value in every trial?",
          choices: [
            { letter: "A", text: "reading the probe to the nearest 0.1 °C instead of the nearest degree" },
            { letter: "B", text: "heat escaping through the opening around the probe" },
            { letter: "C", text: "using the same mass of water in each trial" },
            { letter: "D", text: "stirring the water before reading the probe" }
          ],
          correct: "B"
        },
        {
          id: "controlled",
          sol: "CH.1.d",
          stem: "Which of these was a controlled variable in the three trials?",
          choices: [
            { letter: "A", text: "the highest temperature reached by the water" },
            { letter: "B", text: "the heat gained by the water" },
            { letter: "C", text: "the change in temperature of the metal" },
            { letter: "D", text: "the mass of water in the cup" }
          ],
          correct: "D"
        },
        {
          id: "probe",
          sol: "CH.1.h",
          stem: "What is one advantage of a temperature probe with data logging over a glass thermometer here?",
          choices: [
            { letter: "A", text: "It records the brief peak temperature without the student watching." },
            { letter: "B", text: "It adds a small amount of heat to the water so the reaction finishes faster." },
            { letter: "C", text: "It can measure the mass of the metal at the same time." },
            { letter: "D", text: "It does not need to touch the water." }
          ],
          correct: "A"
        },
        {
          id: "repro",
          sol: "CH.1.e",
          stem: "The three final temperatures (26.0, 25.8 and 26.2 °C) show that the results are —",
          choices: [
            { letter: "A", text: "closely repeatable, with a range of 0.4 °C" },
            { letter: "B", text: "widely scattered, so the average is meaningless" },
            { letter: "C", text: "rising with each trial because the cup warmed up" },
            { letter: "D", text: "exactly the same in every trial" }
          ],
          correct: "A"
        },
        {
          id: "stir",
          sol: "CH.1.a",
          stem: "Why was the water stirred before the highest temperature was recorded?",
          choices: [
            { letter: "A", text: "to cool the metal back to room temperature" },
            { letter: "B", text: "to dissolve the metal in the water" },
            { letter: "C", text: "to make the temperature the same throughout the water" },
            { letter: "D", text: "to let heat escape faster through the opening in the lid" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "inv-percent-error-copper",
      family: "INV",
      title: "Four groups, one copper sample",
      kind: "Scientific Investigation · CH.1",
      blurb: "Three groups land near 8.96 g/cm³. Group 4 has a bubble problem.",
      level: 2,
      passage: "<p>" + N(1) + "Four lab groups each found the density of the same copper sample by massing it and measuring its volume by water displacement. " + N(2) + "The accepted density of copper is 8.96 g/cm³, and each group calculated its <strong>percent error</strong>. " + N(3) + "Group 4 noticed afterward that an air bubble had clung to the sample inside the graduated cylinder.</p>" +
        "<table><tr><th>Group</th><th>Density (g/cm³)</th><th>Percent error</th></tr><tr><td>1</td><td>8.71</td><td>2.79%</td></tr><tr><td>2</td><td>9.14</td><td>2.01%</td></tr><tr><td>3</td><td>8.95</td><td>0.11%</td></tr><tr><td>4</td><td>7.98</td><td>?</td></tr></table>",
      claims: [
        {
          id: "compute",
          sol: "CH.1.f",
          stem: "What is the percent error for Group 4?",
          choices: [
            { letter: "A", text: "0.98%" },
            { letter: "B", text: "10.9%" },
            { letter: "C", text: "12.3%" },
            { letter: "D", text: "89.1%" }
          ],
          correct: "B"
        },
        {
          id: "bubble",
          sol: "CH.1.f",
          stem: "How did the trapped air bubble affect Group 4's result?",
          choices: [
            { letter: "A", text: "It made the measured volume too large, so the density came out too low." },
            { letter: "B", text: "It made the measured mass too small, so the density came out too high." },
            { letter: "C", text: "It made the measured volume too small, so the density came out too high." },
            { letter: "D", text: "It had no effect, because air has almost no mass." }
          ],
          correct: "A"
        },
        {
          id: "closest",
          sol: "CH.1.e",
          stem: "Which group's measurement was the most accurate?",
          choices: [
            { letter: "A", text: "Group 1" },
            { letter: "B", text: "Group 2" },
            { letter: "C", text: "Group 3" },
            { letter: "D", text: "Group 4" }
          ],
          correct: "C"
        },
        {
          id: "challenge",
          sol: "CH.1.i",
          stem: "Group 4 argues that its sample must have been a different metal. Which response best challenges that claim?",
          choices: [
            { letter: "A", text: "Percent error is always largest for the last group to finish." },
            { letter: "B", text: "Copper is the only metal that can be measured by displacement." },
            { letter: "C", text: "Group 4 used a different balance than the other groups, so its mass was wrong." },
            { letter: "D", text: "The bubble explains the low value, and all four groups used the same sample." }
          ],
          correct: "D"
        },
        {
          id: "si",
          sol: "CH.1.g",
          stem: "Expressed in kg/m³, the accepted density of copper is —",
          choices: [
            { letter: "A", text: "8.96 × 10⁻³ kg/m³" },
            { letter: "B", text: "8.96 kg/m³" },
            { letter: "C", text: "8.96 × 10³ kg/m³" },
            { letter: "D", text: "8.96 × 10⁶ kg/m³" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "inv-river-oxygen-units",
      family: "INV",
      title: "Oxygen in a river sample",
      kind: "Scientific Investigation · CH.1",
      blurb: "A worked unit conversion from mg/L to grams, and one factor written upside down.",
      level: 1,
      passage: "<p>" + N(1) + "A teacher wrote this worked example on the board after a field trip to the James River. " + N(2) + "<strong>Problem:</strong> river water holds 8.4 mg of dissolved oxygen per liter; how many grams of O₂ are in a 250 mL sample? " + N(3) + "<strong>Setup:</strong> 250 mL × (1 L / 1000 mL) × (8.4 mg / 1 L) × (1 g / 1000 mg) = 0.0021 g. " + N(4) + "She explained that each conversion factor is written so the old unit cancels and the new unit remains. " + N(5) + "One student instead wrote the first factor as 1000 mL / 1 L and got 2100 g.</p>",
      claims: [
        {
          id: "factor",
          sol: "CH.1.g",
          stem: "In the setup, the factor (1 L / 1000 mL) is placed so that —",
          choices: [
            { letter: "A", text: "milliliters cancel and liters remain" },
            { letter: "B", text: "liters cancel and milliliters remain" },
            { letter: "C", text: "the answer is multiplied by 1000 before the next step" },
            { letter: "D", text: "the answer comes out in milligrams" }
          ],
          correct: "A"
        },
        {
          id: "scinot",
          sol: "CH.1.g",
          stem: "The answer 0.0021 g written in scientific notation is —",
          choices: [
            { letter: "A", text: "2.1 × 10⁻² g" },
            { letter: "B", text: "2.1 × 10⁻³ g" },
            { letter: "C", text: "2.1 × 10³ g" },
            { letter: "D", text: "21 × 10⁻⁴ g" }
          ],
          correct: "B"
        },
        {
          id: "new",
          sol: "CH.1.g",
          stem: "Using the same oxygen concentration, how many milligrams of O₂ are dissolved in 2.0 L of river water?",
          choices: [
            { letter: "A", text: "4.2 mg" },
            { letter: "B", text: "8.4 mg" },
            { letter: "C", text: "17 mg" },
            { letter: "D", text: "1.7 × 10² mg" }
          ],
          correct: "C"
        },
        {
          id: "inverted",
          sol: "CH.1.f",
          stem: "What went wrong in the student's calculation described in sentence 5?",
          choices: [
            { letter: "A", text: "He forgot to include the oxygen concentration of the river water." },
            { letter: "B", text: "He rounded to too few significant digits." },
            { letter: "C", text: "He used 250 L instead of 250 mL." },
            { letter: "D", text: "He inverted a conversion factor, so the units did not cancel." }
          ],
          correct: "D"
        },
        {
          id: "why",
          sol: "CH.1.j",
          stem: "Scientists monitor dissolved oxygen in the James River mainly because —",
          choices: [
            { letter: "A", text: "oxygen is what makes river water safe to drink without any further treatment" },
            { letter: "B", text: "fish and other aquatic animals need it, and low levels signal pollution" },
            { letter: "C", text: "oxygen levels tell them how deep the river is" },
            { letter: "D", text: "dissolved oxygen is the main cause of flooding" }
          ],
          correct: "B"
        }
      ]
    },

    /* ---------- medium ---------- */
    {
      id: "inv-phosphate-curve",
      family: "INV",
      title: "Calibration curve for phosphate",
      kind: "Scientific Investigation · CH.1",
      blurb: "Four standards, a blank, and a creek sample from the Chesapeake Bay watershed.",
      level: 2,
      passage: "<p>" + N(1) + "A class measured phosphate in water from a creek that drains into the Chesapeake Bay. " + N(2) + "They treated each sample with a reagent that turns blue in proportion to phosphate, then read the <strong>absorbance</strong> in a spectrophotometer set to 880 nm. " + N(3) + "A <strong>blank</strong> of distilled water plus reagent was used to set the absorbance to zero. " + N(4) + "Four standard solutions were each read three times, and the averages were plotted to make a calibration curve. " + N(5) + "Every cuvette was wiped with a lint-free tissue, filled to the line, and placed with its clear faces toward the light beam. " + N(6) + "The creek sample had an absorbance of 0.30.</p>" +
        "<table><tr><th>Phosphate (mg/L)</th><th>Absorbance</th></tr><tr><td>0.10</td><td>0.12</td></tr><tr><td>0.20</td><td>0.24</td></tr><tr><td>0.30</td><td>0.35</td></tr><tr><td>0.40</td><td>0.48</td></tr></table>",
      claims: [
        {
          id: "blank",
          sol: "CH.1.h",
          stem: "Why is the blank read before the standards and the sample?",
          choices: [
            { letter: "A", text: "so the spectrophotometer reads zero for everything except the phosphate color" },
            { letter: "B", text: "so the reagent has time to turn blue" },
            { letter: "C", text: "so the cuvette is rinsed with distilled water" },
            { letter: "D", text: "so the class can check that the creek water is clear enough to measure before starting" }
          ],
          correct: "A"
        },
        {
          id: "sample",
          sol: "CH.1.g",
          stem: "Based on the calibration data, the phosphate concentration of the creek sample is closest to —",
          choices: [
            { letter: "A", text: "0.30 mg/L" },
            { letter: "B", text: "0.25 mg/L" },
            { letter: "C", text: "0.36 mg/L" },
            { letter: "D", text: "2.5 mg/L" }
          ],
          correct: "B"
        },
        {
          id: "graph",
          sol: "CH.1.g",
          stem: "A graph of absorbance against phosphate concentration for these standards is best described as —",
          choices: [
            { letter: "A", text: "a curve that rises quickly at first and then flattens at high concentration" },
            { letter: "B", text: "a horizontal line, showing no relationship" },
            { letter: "C", text: "a line that slopes downward from left to right" },
            { letter: "D", text: "a straight line through the origin, showing direct proportion" }
          ],
          correct: "D"
        },
        {
          id: "smudge",
          sol: "CH.1.f",
          stem: "A fingerprint left on the cuvette holding the creek sample would most likely —",
          choices: [
            { letter: "A", text: "lower the absorbance and make the reported phosphate concentration too low" },
            { letter: "B", text: "have no effect, because the blank corrects for it" },
            { letter: "C", text: "raise the absorbance and make the reported phosphate too high" },
            { letter: "D", text: "change the wavelength selected on the instrument" }
          ],
          correct: "C"
        },
        {
          id: "trials",
          sol: "CH.1.d",
          stem: "Reading each standard three times and plotting the average mainly helps to —",
          choices: [
            { letter: "A", text: "increase the phosphate concentration of the standard" },
            { letter: "B", text: "change the independent variable more often during the investigation" },
            { letter: "C", text: "make the blue color darker before reading" },
            { letter: "D", text: "reduce the effect of random error on each point of the curve" }
          ],
          correct: "D"
        },
        {
          id: "bay",
          sol: "CH.1.j",
          stem: "Phosphate levels in Bay tributaries are tracked because excess phosphate —",
          choices: [
            { letter: "A", text: "makes the water too acidic for oysters to build their shells in the Bay" },
            { letter: "B", text: "feeds algae blooms whose decay uses up dissolved oxygen" },
            { letter: "C", text: "raises the water temperature of the Bay" },
            { letter: "D", text: "turns the water blue at 880 nm" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "inv-safety-walkthrough",
      family: "INV",
      title: "First day in the chem lab",
      kind: "Scientific Investigation · CH.1",
      blurb: "Eyewash, fire blanket, fume hood, and why acid goes into water.",
      level: 2,
      passage: "<p>" + N(1) + "On the first day, the teacher walked the class around the room. " + N(2) + "Beside the door were the safety shower and the eyewash station, where an eye splash is flushed for a full 15 minutes with the eyelids held open. " + N(3) + "A fire blanket hung next to the extinguisher. " + N(4) + "The <strong>fume hood</strong> is used whenever a procedure releases <strong>volatile</strong> or toxic vapors, such as heating concentrated hydrochloric acid. " + N(5) + "The glassware cabinet holds graduated cylinders and volumetric flasks for measuring volumes; beakers are for holding and mixing only. " + N(6) + "Rules on the wall: goggles on whenever chemicals are out, always add acid to water, never return unused chemical to the stock bottle, and report every injury.</p>",
      claims: [
        {
          id: "acidwater",
          sol: "CH.1.b",
          stem: "Why must acid be added to water rather than water to acid?",
          choices: [
            { letter: "A", text: "Adding water to acid can release heat so fast that the mixture spatters." },
            { letter: "B", text: "Adding acid to water makes the solution more concentrated." },
            { letter: "C", text: "Water is less dense than acid, so it floats on top and the two never mix." },
            { letter: "D", text: "Acid added to water does not need goggles." }
          ],
          correct: "A"
        },
        {
          id: "eye",
          sol: "CH.1.c",
          stem: "A student gets a drop of base in one eye. The correct response is to —",
          choices: [
            { letter: "A", text: "rub the eye with a clean towel until it stops stinging" },
            { letter: "B", text: "wait for the teacher before doing anything" },
            { letter: "C", text: "flush the eye at the eyewash for 15 minutes with the lid held open" },
            { letter: "D", text: "rinse the eye one time with dilute vinegar to neutralize the base right away" }
          ],
          correct: "C"
        },
        {
          id: "fire",
          sol: "CH.1.c",
          stem: "If a student's sleeve catches fire, the best immediate response is to —",
          choices: [
            { letter: "A", text: "run to the hallway for fresh air" },
            { letter: "B", text: "smother the flames with the fire blanket or stop, drop and roll" },
            { letter: "C", text: "pour the contents of the nearest beaker over the sleeve to put it out" },
            { letter: "D", text: "fan the sleeve to blow the flames out" }
          ],
          correct: "B"
        },
        {
          id: "volatile",
          sol: "CH.1.b",
          stem: "In sentence 4, a volatile chemical is one that —",
          choices: [
            { letter: "A", text: "explodes when it is heated over a burner" },
            { letter: "B", text: "dissolves easily in water" },
            { letter: "C", text: "has a high melting point" },
            { letter: "D", text: "evaporates readily at room temperature" }
          ],
          correct: "D"
        },
        {
          id: "stock",
          sol: "CH.1.a",
          stem: "Unused chemical is never poured back into the stock bottle because —",
          choices: [
            { letter: "A", text: "the stock bottle would overflow" },
            { letter: "B", text: "the chemical loses its label once it leaves the bottle and cannot be identified" },
            { letter: "C", text: "anything picked up in the beaker would contaminate the whole supply" },
            { letter: "D", text: "the chemical becomes more concentrated after use" }
          ],
          correct: "C"
        },
        {
          id: "glass",
          sol: "CH.1.h",
          stem: "A procedure calls for 25.0 mL of solution. According to the walkthrough, which glassware should be used to measure it?",
          choices: [
            { letter: "A", text: "a 100 mL beaker" },
            { letter: "B", text: "a 250 mL Erlenmeyer flask" },
            { letter: "C", text: "a watch glass" },
            { letter: "D", text: "a graduated cylinder" }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "inv-cave-limestone-cer",
      family: "INV",
      title: "Acid rain and cave limestone",
      kind: "Scientific Investigation · CH.1",
      blurb: "A claim, four pH baths, a cracked chip, and a paragraph of reasoning.",
      level: 2,
      passage: "<p>" + N(1) + "After visiting a Shenandoah limestone cave, a student wrote a claim-evidence-reasoning report on whether more acidic water dissolves limestone (CaCO₃) faster. " + N(2) + "<strong>Claim:</strong> the lower the pH, the faster limestone dissolves. " + N(3) + "<strong>Evidence:</strong> 5.00 g limestone chips were soaked for 24 hours in solutions of pH 3.0, 4.0 and 5.0 and in distilled water, three chips per solution, and the average mass lost is shown in the table. " + N(4) + "One pH 4.0 chip lost 0.55 g, but it had cracked in half during the soak, so that trial was recorded, excluded, and replaced. " + N(5) + "<strong>Reasoning:</strong> hydrogen ions react with carbonate ions, and a lower pH means more hydrogen ions are available.</p>" +
        "<table><tr><th>pH</th><th>Average mass lost (g)</th></tr><tr><td>3.0</td><td>0.62</td></tr><tr><td>4.0</td><td>0.31</td></tr><tr><td>5.0</td><td>0.14</td></tr><tr><td>7.0 (water)</td><td>0.02</td></tr></table>",
      claims: [
        {
          id: "claim",
          sol: "CH.1.i",
          stem: "Which part of the report states the student's scientific viewpoint?",
          choices: [
            { letter: "A", text: "the data table showing the average mass lost by the chips at each pH" },
            { letter: "B", text: "the statement that lower pH dissolves limestone faster" },
            { letter: "C", text: "the note about the cracked chip" },
            { letter: "D", text: "the description of the cave visit" }
          ],
          correct: "B"
        },
        {
          id: "reasoning",
          sol: "CH.1.i",
          stem: "The reasoning in sentence 5 strengthens the report because it —",
          choices: [
            { letter: "A", text: "repeats the numbers from the table" },
            { letter: "B", text: "proves that the cave ceiling will eventually collapse because of acid rain" },
            { letter: "C", text: "explains why the evidence should be expected if the claim is true" },
            { letter: "D", text: "shows that distilled water is the most acidic solution" }
          ],
          correct: "C"
        },
        {
          id: "trend",
          sol: "CH.1.e",
          stem: "Which pattern in the table best supports the claim?",
          choices: [
            { letter: "A", text: "Each drop of one pH unit roughly doubled the mass lost." },
            { letter: "B", text: "The mass lost was the same at every pH." },
            { letter: "C", text: "The chips in distilled water lost the most mass." },
            { letter: "D", text: "Mass lost increased steadily as the pH of the solution increased." }
          ],
          correct: "A"
        },
        {
          id: "control",
          sol: "CH.1.d",
          stem: "The chips soaked in distilled water serve as —",
          choices: [
            { letter: "A", text: "the dependent variable" },
            { letter: "B", text: "a second independent variable" },
            { letter: "C", text: "a source of additional hydrogen ions for the reaction" },
            { letter: "D", text: "a control for comparison with the acid solutions" }
          ],
          correct: "D"
        },
        {
          id: "outlier",
          sol: "CH.1.f",
          stem: "Why was the student right to record the cracked-chip trial rather than simply delete it?",
          choices: [
            { letter: "A", text: "A cracked chip always gives the most accurate result." },
            { letter: "B", text: "Readers can see why the result was excluded and judge the decision." },
            { letter: "C", text: "The 0.55 g value should have been included in the average with the others." },
            { letter: "D", text: "Deleting a trial makes the pH of the solution change." }
          ],
          correct: "B"
        },
        {
          id: "percent",
          sol: "CH.1.g",
          stem: "What percent of the original chip mass was lost at pH 3.0?",
          choices: [
            { letter: "A", text: "0.124%" },
            { letter: "B", text: "1.24%" },
            { letter: "C", text: "8.06%" },
            { letter: "D", text: "12.4%" }
          ],
          correct: "D"
        }
      ]
    },

    /* ---------- long ---------- */
    {
      id: "inv-water-plant-log",
      family: "INV",
      title: "A day at the water plant",
      kind: "Scientific Investigation · CH.1",
      blurb: "Alum, chlorine, a calibrated pH meter and one reading that slipped out of range.",
      level: 3,
      passage: "<p>" + N(1) + "A treatment plant supplying tap water to Newport News draws from a reservoir and treats about 45 million liters per day. " + N(2) + "Aluminum sulfate (<strong>alum</strong>) is added first so that fine suspended particles clump into floc that settles out; the water is then filtered through sand. " + N(3) + "Chlorine is dosed at 2.5 mg per liter to kill microbes, and enough must remain in the pipes as a <strong>residual</strong> of 1.0 to 2.0 mg/L. " + N(4) + "Lime is added to hold the pH between 7.2 and 7.8 so the water does not corrode pipes, and a small amount of fluoride is added to help prevent tooth decay. " + N(5) + "The operator calibrates the pH meter every morning with buffer solutions of pH 4.00, 7.00 and 10.00 and measures chlorine with a colorimeter. " + N(6) + "The state limit for turbidity, a measure of cloudiness, is 0.3 NTU. " + N(7) + "One day's log is shown.</p>" +
        "<table><tr><th>Time</th><th>pH</th><th>Cl residual (mg/L)</th><th>Turbidity (NTU)</th></tr><tr><td>06:00</td><td>7.5</td><td>1.6</td><td>0.08</td></tr><tr><td>12:00</td><td>7.4</td><td>1.4</td><td>0.10</td></tr><tr><td>18:00</td><td>7.1</td><td>1.1</td><td>0.12</td></tr><tr><td>24:00</td><td>7.6</td><td>1.5</td><td>0.07</td></tr></table>",
      claims: [
        {
          id: "calibrate",
          sol: "CH.1.h",
          stem: "Why does the operator calibrate the pH meter with buffer solutions each morning?",
          choices: [
            { letter: "A", text: "The buffers add chlorine to the electrode." },
            { letter: "B", text: "The meter's response drifts, and the buffers give known values to set it against." },
            { letter: "C", text: "The buffer solutions rinse reservoir water and floc off the probe before each reading." },
            { letter: "D", text: "The meter cannot turn on without a buffer reading." }
          ],
          correct: "B"
        },
        {
          id: "dose",
          sol: "CH.1.g",
          stem: "About how many kilograms of chlorine does the plant use in one day?",
          choices: [
            { letter: "A", text: "1.1 × 10⁻¹ kg" },
            { letter: "B", text: "1.1 × 10² kg" },
            { letter: "C", text: "1.1 × 10⁵ kg" },
            { letter: "D", text: "1.1 × 10⁸ kg" }
          ],
          correct: "B"
        },
        {
          id: "outofrange",
          sol: "CH.1.e",
          stem: "Which log entry fell outside its target range?",
          choices: [
            { letter: "A", text: "the pH at 18:00" },
            { letter: "B", text: "the chlorine residual at 18:00" },
            { letter: "C", text: "the turbidity at 12:00" },
            { letter: "D", text: "the pH at 24:00" }
          ],
          correct: "A"
        },
        {
          id: "residual",
          sol: "CH.1.j",
          stem: "Why must some chlorine remain in the water after it leaves the plant?",
          choices: [
            { letter: "A", text: "to keep microbes from regrowing in the pipes on the way to homes" },
            { letter: "B", text: "to make the water taste sweeter" },
            { letter: "C", text: "to dissolve the floc that the alum formed before the water reaches homes" },
            { letter: "D", text: "to raise the pH above 7.8" }
          ],
          correct: "A"
        },
        {
          id: "rebut",
          sol: "CH.1.i",
          stem: "A resident claims the water was unsafe on this day because turbidity rose from 0.07 to 0.12 NTU. Which rebuttal is best supported by the log?",
          choices: [
            { letter: "A", text: "Turbidity has nothing to do with water safety." },
            { letter: "B", text: "The colorimeter cannot measure turbidity at all, so the turbidity values in the log mean nothing." },
            { letter: "C", text: "Every turbidity reading stayed far below the 0.3 NTU limit, and chlorine stayed in range." },
            { letter: "D", text: "The pH was in range at 06:00, so the water was safe all day." }
          ],
          correct: "C"
        },
        {
          id: "alum",
          sol: "CH.1.j",
          stem: "The alum step improves the water mainly by —",
          choices: [
            { letter: "A", text: "killing bacteria and viruses before the water passes through the sand filters" },
            { letter: "B", text: "adding fluoride to protect teeth" },
            { letter: "C", text: "lowering the pH into the target range" },
            { letter: "D", text: "gathering fine particles into clumps that settle and can be filtered" }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "inv-cold-battery",
      family: "INV",
      title: "Batteries in the cold",
      kind: "Scientific Investigation · CH.1",
      blurb: "Twelve AA cells, four temperatures, one flashlight bulb.",
      level: 2,
      passage: "<p>" + N(1) + "After a school bus in Winchester failed to start on a January morning, a class tested how temperature affects the voltage an alkaline AA cell delivers. " + N(2) + "Cells from the same package were held for one hour in baths at −10, 5, 20 and 35 °C, three cells per temperature. " + N(3) + "Each cell was then connected to the same flashlight bulb, and a voltage probe recorded the voltage across the bulb after 60 seconds; the bulb, the wires and the probe were the same for every trial, and each cell was used only once. " + N(4) + "A cell delivers less voltage under load when its <strong>internal resistance</strong> rises, and ions move more slowly through a cold electrolyte. " + N(5) + "The <strong>range</strong> is the difference between the highest and lowest of the three readings. " + N(6) + "While checking the notes, the class found that one of the 35 °C cells had come from a different package.</p>" +
        "<table><tr><th>Temperature (°C)</th><th>Average voltage (V)</th><th>Range (V)</th></tr><tr><td>−10</td><td>1.21</td><td>0.03</td></tr><tr><td>5</td><td>1.32</td><td>0.02</td></tr><tr><td>20</td><td>1.41</td><td>0.02</td></tr><tr><td>35</td><td>1.45</td><td>0.06</td></tr></table>",
      claims: [
        {
          id: "dv",
          sol: "CH.1.d",
          stem: "The dependent variable in this investigation is —",
          choices: [
            { letter: "A", text: "the temperature of the water bath holding the cells" },
            { letter: "B", text: "the voltage across the bulb after 60 seconds" },
            { letter: "C", text: "the number of cells at each temperature" },
            { letter: "D", text: "the brand of flashlight bulb" }
          ],
          correct: "B"
        },
        {
          id: "step",
          sol: "CH.1.e",
          stem: "Between which two temperatures did the average voltage change the most?",
          choices: [
            { letter: "A", text: "−10 °C and 5 °C" },
            { letter: "B", text: "5 °C and 20 °C" },
            { letter: "C", text: "20 °C and 35 °C" },
            { letter: "D", text: "the change was the same for each step" }
          ],
          correct: "A"
        },
        {
          id: "percent",
          sol: "CH.1.g",
          stem: "By what percent did the average voltage at −10 °C fall below the average at 20 °C?",
          choices: [
            { letter: "A", text: "0.14%" },
            { letter: "B", text: "20%" },
            { letter: "C", text: "14%" },
            { letter: "D", text: "17%" }
          ],
          correct: "C"
        },
        {
          id: "package",
          sol: "CH.1.f",
          stem: "The cell from a different package is a problem because it —",
          choices: [
            { letter: "A", text: "raised the temperature of the 35 °C bath" },
            { letter: "B", text: "was tested for longer than 60 seconds" },
            { letter: "C", text: "changed the independent variable from temperature to brand for the whole investigation" },
            { letter: "D", text: "added an uncontrolled variable that may explain the larger range at 35 °C" }
          ],
          correct: "D"
        },
        {
          id: "defend",
          sol: "CH.1.i",
          stem: "The class concludes that cold lowers the voltage a cell delivers. Which statement best defends this conclusion?",
          choices: [
            { letter: "A", text: "The school bus failed to start on a cold January morning, which proves the point." },
            { letter: "B", text: "Voltage rose at every step in temperature, by more than the range within any step." },
            { letter: "C", text: "The manufacturer labels every alkaline cell 1.5 V, no matter what the temperature is." },
            { letter: "D", text: "The probe recorded each voltage to three significant digits." }
          ],
          correct: "B"
        },
        {
          id: "ev",
          sol: "CH.1.j",
          stem: "Based on sentence 4, why does an electric car lose driving range in winter?",
          choices: [
            { letter: "A", text: "Cold air makes the tires heavier." },
            { letter: "B", text: "Snow on the roof reflects sunlight away from the solar panels that charge the battery." },
            { letter: "C", text: "The battery freezes solid below 0 °C." },
            { letter: "D", text: "Ions in the cold electrolyte move more slowly, so the battery delivers less energy." }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "inv-juice-vitamin-c",
      family: "INV",
      title: "Vitamin C in three juices",
      kind: "Scientific Investigation · CH.1",
      blurb: "Iodine, starch, and how much ascorbic acid survives three days in an open carton.",
      level: 3,
      passage: "<p>" + N(1) + "Students compared the vitamin C (ascorbic acid) content of fresh-squeezed orange juice, juice from a sealed carton, and carton juice that had been open in the refrigerator for three days. " + N(2) + "A 10.0 mL portion of each juice was mixed with a few drops of starch solution and titrated with iodine solution from a buret. " + N(3) + "Iodine reacts with ascorbic acid first; once all of it is used up, free iodine turns the starch blue-black, marking the <strong>endpoint</strong>. " + N(4) + "The iodine solution had been standardized so that 1.00 mL reacts with 0.50 mg of vitamin C. " + N(5) + "Each juice was titrated three times, and the averages are shown. " + N(6) + "One student in the fresh-juice group kept adding iodine until the flask was deep blue, and her volume was 1.5 mL higher than her partners' readings. " + N(7) + "A food label on the carton claims 60 mg of vitamin C per 250 mL glass.</p>" +
        "<table><tr><th>Juice</th><th>Iodine used (mL)</th><th>Vitamin C (mg per 10.0 mL)</th></tr><tr><td>fresh-squeezed</td><td>14.2</td><td>7.1</td></tr><tr><td>sealed carton</td><td>10.6</td><td>5.3</td></tr><tr><td>open 3 days</td><td>6.4</td><td>3.2</td></tr></table>",
      claims: [
        {
          id: "endpoint",
          sol: "CH.1.a",
          stem: "The blue-black color appears at the endpoint because —",
          choices: [
            { letter: "A", text: "the starch has finished reacting with the vitamin C" },
            { letter: "B", text: "iodine is no longer being consumed by vitamin C, so it reacts with the starch" },
            { letter: "C", text: "the orange pigment in the juice has been completely bleached by the iodine solution" },
            { letter: "D", text: "the iodine solution has become more concentrated" }
          ],
          correct: "B"
        },
        {
          id: "glass",
          sol: "CH.1.g",
          stem: "Based on the table, about how much vitamin C is in a 250 mL glass of fresh-squeezed juice?",
          choices: [
            { letter: "A", text: "18 mg" },
            { letter: "B", text: "1.8 × 10³ mg" },
            { letter: "C", text: "71 mg" },
            { letter: "D", text: "1.8 × 10² mg" }
          ],
          correct: "D"
        },
        {
          id: "loss",
          sol: "CH.1.e",
          stem: "Compared with fresh-squeezed juice, the juice left open for three days contained —",
          choices: [
            { letter: "A", text: "about the same amount of vitamin C" },
            { letter: "B", text: "about three-quarters as much vitamin C" },
            { letter: "C", text: "less than half as much vitamin C" },
            { letter: "D", text: "no measurable vitamin C" }
          ],
          correct: "C"
        },
        {
          id: "controlled",
          sol: "CH.1.d",
          stem: "Which of these was held constant for every titration?",
          choices: [
            { letter: "A", text: "the volume of juice in the flask" },
            { letter: "B", text: "the volume of iodine solution added" },
            { letter: "C", text: "the source of the juice" },
            { letter: "D", text: "the mass of vitamin C in the flask" }
          ],
          correct: "A"
        },
        {
          id: "overshoot",
          sol: "CH.1.f",
          stem: "What effect did the deep-blue titration in sentence 6 have on that student's result?",
          choices: [
            { letter: "A", text: "It made her calculated vitamin C too low." },
            { letter: "B", text: "It had no effect, because the endpoint is only a color." },
            { letter: "C", text: "It made her buret reading too low by 1.5 mL." },
            { letter: "D", text: "It made her calculated vitamin C too high." }
          ],
          correct: "D"
        },
        {
          id: "oxidize",
          sol: "CH.1.j",
          stem: "Which explanation best accounts for the drop in vitamin C after the carton was opened?",
          choices: [
            { letter: "A", text: "Ascorbic acid evaporates from cold juice." },
            { letter: "B", text: "Ascorbic acid is oxidized by oxygen from the air." },
            { letter: "C", text: "The refrigerator light converts vitamin C to starch." },
            { letter: "D", text: "The carton absorbs vitamin C from the juice." }
          ],
          correct: "B"
        }
      ]
    }
  ];

  for (var i = 0; i < PACKS.length; i++) P.push(PACKS[i]);
})(typeof window !== "undefined" ? window : global);
