/* SOL Lab — Phases of Matter & Kinetic Molecular Theory (CH.5). Original text only. */
(function (global) {
  var P = global.HEIST_PACKS;
  if (!P || !P.push) return;
  var N = function (i) { return '<span class="n">(' + i + ')</span> '; };   // numbered sentence

  var PACKS = [
    /* ---------- tiny ---------- */
    {
      id: "kmt-syringe-boyle",
      family: "KMT",
      title: "Air in a capped syringe",
      kind: "Phases of Matter · CH.5",
      blurb: "Push the plunger, read the gauge: pressure and volume at 22 °C.",
      level: 1,
      passage: "<p>" + N(1) + "A student capped a syringe holding 40.0 mL of air at 22 °C and pushed the plunger in steps, reading a pressure gauge at each stop. " + N(2) + "The temperature did not change during the trial. " + N(3) + "Use: 1 atm = 760 mm Hg = 101.3 kPa; K = °C + 273.</p>" +
        "<table><tr><th>Volume (mL)</th><th>Pressure (atm)</th></tr><tr><td>40.0</td><td>1.00</td></tr><tr><td>20.0</td><td>2.00</td></tr><tr><td>10.0</td><td>4.00</td></tr><tr><td>8.0</td><td>5.00</td></tr></table>",
      claims: [
        {
          id: "kmt-why",
          sol: "CH.5.a",
          stem: "According to the kinetic molecular theory, why does the pressure rise as the plunger is pushed in?",
          choices: [
            { letter: "A", text: "The air particles strike the walls more often in the smaller space." },
            { letter: "B", text: "The air particles grow larger as they are squeezed together." },
            { letter: "C", text: "The air particles move faster because the space around them is smaller." },
            { letter: "D", text: "New air particles are created each time the plunger moves." }
          ],
          correct: "A"
        },
        {
          id: "law",
          sol: "CH.5.b",
          stem: "The pattern in the table, in which pressure and volume are inversely related at constant temperature, is described by —",
          choices: [
            { letter: "A", text: "Charles's law" },
            { letter: "B", text: "Gay-Lussac's law" },
            { letter: "C", text: "Boyle's law" },
            { letter: "D", text: "Dalton's law" }
          ],
          correct: "C"
        },
        {
          id: "predict",
          sol: "CH.5.b",
          stem: "If the plunger is pushed until the volume is 5.0 mL, the pressure should read —",
          choices: [
            { letter: "A", text: "0.125 atm" },
            { letter: "B", text: "4.00 atm" },
            { letter: "C", text: "6.00 atm" },
            { letter: "D", text: "8.00 atm" }
          ],
          correct: "D"
        },
        {
          id: "kpa",
          sol: "CH.5.a",
          stem: "The pressure recorded at 20.0 mL, 2.00 atm, is the same as —",
          choices: [
            { letter: "A", text: "0.0197 kPa" },
            { letter: "B", text: "203 kPa" },
            { letter: "C", text: "760 kPa" },
            { letter: "D", text: "1520 kPa" }
          ],
          correct: "B"
        },
        {
          id: "kelvin",
          sol: "CH.5.a",
          stem: "The temperature of the trapped air, 22 °C, is equal to —",
          choices: [
            { letter: "A", text: "22 K" },
            { letter: "B", text: "251 K" },
            { letter: "C", text: "295 K" },
            { letter: "D", text: "373 K" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "kmt-balloon-ice-hot",
      family: "KMT",
      title: "A balloon in two water baths",
      kind: "Phases of Matter · CH.5",
      blurb: "Ice water shrinks it, hot water swells it: Charles's law with a flask.",
      level: 1,
      passage: "<p>" + N(1) + "A balloon was stretched over the mouth of a flask holding 250 mL of air at 25 °C and room pressure, 1.00 atm. " + N(2) + "In an ice-water bath at 0 °C the balloon went limp; in a hot-water bath at 75 °C it swelled. " + N(3) + "The pressure inside stayed at 1.00 atm because the balloon could stretch. " + N(4) + "Use: K = °C + 273.</p>",
      claims: [
        {
          id: "ice",
          sol: "CH.5.b",
          stem: "What volume should the trapped air occupy in the ice-water bath at 0 °C?",
          choices: [
            { letter: "A", text: "0.0 mL" },
            { letter: "B", text: "229 mL" },
            { letter: "C", text: "250 mL" },
            { letter: "D", text: "273 mL" }
          ],
          correct: "B"
        },
        {
          id: "hot",
          sol: "CH.5.b",
          stem: "In the hot-water bath at 75 °C, the volume of the trapped air should be about —",
          choices: [
            { letter: "A", text: "214 mL" },
            { letter: "B", text: "292 mL" },
            { letter: "C", text: "325 mL" },
            { letter: "D", text: "750 mL" }
          ],
          correct: "B"
        },
        {
          id: "kmt-swell",
          sol: "CH.5.a",
          stem: "Which statement best explains, in terms of the kinetic molecular theory, why the balloon swelled in hot water?",
          choices: [
            { letter: "A", text: "Heat made the air particles expand to a larger size." },
            { letter: "B", text: "Water vapor from the bath leaked into the balloon." },
            { letter: "C", text: "The rubber of the balloon absorbed heat from the bath and stretched on its own." },
            { letter: "D", text: "Faster particles hit the balloon harder and more often, pushing it outward." }
          ],
          correct: "D"
        },
        {
          id: "constant",
          sol: "CH.5.a",
          stem: "The variable held constant while the volume changed in this investigation is —",
          choices: [
            { letter: "A", text: "the pressure of the trapped air" },
            { letter: "B", text: "the temperature of the trapped air" },
            { letter: "C", text: "the volume of the balloon" },
            { letter: "D", text: "the average speed of the air particles" }
          ],
          correct: "A"
        },
        {
          id: "law",
          sol: "CH.5.b",
          stem: "The relationship shown by this flask, volume rising with kelvin temperature at constant pressure, is —",
          choices: [
            { letter: "A", text: "Boyle's law" },
            { letter: "B", text: "Dalton's law" },
            { letter: "C", text: "Charles's law" },
            { letter: "D", text: "Gay-Lussac's law" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "kmt-tire-hot-day",
      family: "KMT",
      title: "Tire pressure on hot asphalt",
      kind: "Phases of Matter · CH.5",
      blurb: "Same tire, same air, hotter afternoon: what does the gauge read?",
      level: 1,
      passage: "<p>" + N(1) + "A student checked a car tire with a gauge at 7 a.m., when the tire was 17 °C, and read 220 kPa. " + N(2) + "After the car sat on hot asphalt all afternoon the tire was 46 °C. " + N(3) + "The stiff tire did not change volume, and no air was added or lost. " + N(4) + "Use: 1 atm = 101.3 kPa = 760 mm Hg; K = °C + 273.</p>",
      claims: [
        {
          id: "afternoon",
          sol: "CH.5.b",
          stem: "The afternoon gauge reading should be closest to —",
          choices: [
            { letter: "A", text: "200 kPa" },
            { letter: "B", text: "242 kPa" },
            { letter: "C", text: "249 kPa" },
            { letter: "D", text: "595 kPa" }
          ],
          correct: "B"
        },
        {
          id: "atm",
          sol: "CH.5.a",
          stem: "The morning reading of 220 kPa is equal to —",
          choices: [
            { letter: "A", text: "0.460 atm" },
            { letter: "B", text: "1.65 atm" },
            { letter: "C", text: "2.17 atm" },
            { letter: "D", text: "22.3 atm" }
          ],
          correct: "C"
        },
        {
          id: "kmt-collide",
          sol: "CH.5.a",
          stem: "According to the kinetic molecular theory, the pressure rose in the afternoon because the air particles —",
          choices: [
            { letter: "A", text: "collided with the tire wall harder and more often" },
            { letter: "B", text: "became larger and took up more of the tire" },
            { letter: "C", text: "stuck to the hot rubber and stopped moving" },
            { letter: "D", text: "increased in number as the hot rubber gave off gas" }
          ],
          correct: "A"
        },
        {
          id: "law",
          sol: "CH.5.b",
          stem: "Pressure rising in direct proportion to kelvin temperature at constant volume is described by —",
          choices: [
            { letter: "A", text: "Boyle's law" },
            { letter: "B", text: "Charles's law" },
            { letter: "C", text: "the combined gas law" },
            { letter: "D", text: "Gay-Lussac's law" }
          ],
          correct: "D"
        },
        {
          id: "why-kelvin",
          sol: "CH.5.a",
          stem: "Why must the temperatures be changed to kelvin before the pressures are compared?",
          choices: [
            { letter: "A", text: "Kelvin readings are always larger numbers, so a calculation with them gives a more precise result." },
            { letter: "B", text: "Tire gauges are calibrated in kelvin at the factory, so the numbers must match." },
            { letter: "C", text: "Only the kelvin scale is proportional to the average kinetic energy of the particles." },
            { letter: "D", text: "Celsius degrees are smaller than kelvin degrees." }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "kmt-three-liquids-vp",
      family: "KMT",
      title: "Three liquids, one thermometer",
      kind: "Phases of Matter · CH.5",
      blurb: "Ether, ethanol and water at 25 °C: whose vapor pushes hardest?",
      level: 1,
      passage: "<p>" + N(1) + "A student sealed three liquids in identical flasks with pressure sensors and let each reach equilibrium at 25 °C. " + N(2) + "The pressure of the vapor above each liquid at equilibrium is its <strong>vapor pressure</strong>. " + N(3) + "A liquid boils when its vapor pressure equals the pressure pushing down on its surface.</p>" +
        "<table><tr><th>Liquid</th><th>Vapor pressure at 25 °C (kPa)</th><th>Normal boiling point (°C)</th></tr><tr><td>Diethyl ether</td><td>71.0</td><td>35</td></tr><tr><td>Ethanol</td><td>7.9</td><td>78</td></tr><tr><td>Water</td><td>3.2</td><td>100</td></tr></table>",
      claims: [
        {
          id: "weakest",
          sol: "CH.5.c",
          stem: "Which liquid has the weakest attractions between its molecules?",
          choices: [
            { letter: "A", text: "diethyl ether, because its vapor pressure is highest" },
            { letter: "B", text: "ethanol, because its values fall between the other two" },
            { letter: "C", text: "water, because its boiling point is highest" },
            { letter: "D", text: "water, because its vapor pressure is lowest" }
          ],
          correct: "A"
        },
        {
          id: "equilibrium",
          sol: "CH.5.d",
          stem: "At equilibrium in a sealed flask, the rate at which molecules leave the liquid equals the rate of —",
          choices: [
            { letter: "A", text: "sublimation" },
            { letter: "B", text: "condensation" },
            { letter: "C", text: "solidification" },
            { letter: "D", text: "melting" }
          ],
          correct: "B"
        },
        {
          id: "lower-pressure",
          sol: "CH.5.c",
          stem: "If the air pressure above the ether flask were lowered to 71.0 kPa while it stayed at 25 °C, the ether would —",
          choices: [
            { letter: "A", text: "freeze" },
            { letter: "B", text: "stop evaporating" },
            { letter: "C", text: "begin to boil" },
            { letter: "D", text: "reach a higher vapor pressure" }
          ],
          correct: "C"
        },
        {
          id: "trend",
          sol: "CH.5.c",
          stem: "Which conclusion is best supported by the data in the table?",
          choices: [
            { letter: "A", text: "Liquids with higher vapor pressures have higher boiling points." },
            { letter: "B", text: "Vapor pressure does not depend on the kind of liquid." },
            { letter: "C", text: "All three liquids would boil at the same pressure." },
            { letter: "D", text: "Liquids with higher vapor pressures have lower boiling points." }
          ],
          correct: "D"
        },
        {
          id: "term",
          sol: "CH.5.c",
          stem: "Based on sentence 2, vapor pressure is best described as —",
          choices: [
            { letter: "A", text: "the pressure of the air pressing down on a liquid's surface" },
            { letter: "B", text: "the pressure of the gas in equilibrium above its liquid" },
            { letter: "C", text: "the temperature at which a liquid turns to gas" },
            { letter: "D", text: "the force needed to compress a gas into a liquid" }
          ],
          correct: "B"
        }
      ]
    },

    /* ---------- short ---------- */
    {
      id: "kmt-shipyard-cylinders",
      family: "KMT",
      title: "Cylinders on the shipyard dock",
      kind: "Phases of Matter · CH.5",
      blurb: "Argon at 120 atm, a sunny dock and a warning label: the ideal gas law at work.",
      level: 2,
      passage: "<p>" + N(1) + "A welding crew at the Newport News shipyard keeps steel cylinders of shielding gas on a dock beside the James River. " + N(2) + "A full argon cylinder holds 40.0 L at 120 atm and 20 °C. " + N(3) + "Its label warns: do not store above 52 °C. " + N(4) + "A second cylinder holds a mixture that is 75% argon and 25% carbon dioxide by volume at the same 120 atm. " + N(5) + "A third cylinder holds liquid carbon dioxide under its own vapor, so its gauge reads the liquid's vapor pressure. " + N(6) + "Use: R = 0.0821 L·atm/(mol·K); 1 atm = 101.3 kPa; 1 mol of gas at STP occupies 22.4 L; K = °C + 273.</p>",
      claims: [
        {
          id: "moles",
          sol: "CH.5.b",
          stem: "How many moles of argon does the full cylinder hold at 20 °C?",
          choices: [
            { letter: "A", text: "1.79 mol" },
            { letter: "B", text: "214 mol" },
            { letter: "C", text: "200 mol" },
            { letter: "D", text: "2920 mol" }
          ],
          correct: "C"
        },
        {
          id: "label",
          sol: "CH.5.b",
          stem: "If the sealed cylinder warmed to the label limit of 52 °C, its pressure would be closest to —",
          choices: [
            { letter: "A", text: "108 atm" },
            { letter: "B", text: "133 atm" },
            { letter: "C", text: "152 atm" },
            { letter: "D", text: "312 atm" }
          ],
          correct: "B"
        },
        {
          id: "kpa",
          sol: "CH.5.a",
          stem: "The cylinder pressure of 120 atm expressed in kilopascals is about —",
          choices: [
            { letter: "A", text: "1.18 kPa" },
            { letter: "B", text: "1.20 × 10³ kPa" },
            { letter: "C", text: "1.22 × 10⁴ kPa" },
            { letter: "D", text: "9.12 × 10⁴ kPa" }
          ],
          correct: "C"
        },
        {
          id: "liquid-co2",
          sol: "CH.5.c",
          stem: "As gas is drawn off the liquid-CO₂ cylinder at a steady temperature, the gauge reading stays the same until the liquid is gone because —",
          choices: [
            { letter: "A", text: "the steel walls squeeze the remaining gas to keep the pressure up" },
            { letter: "B", text: "carbon dioxide gas cannot escape through the valve while any liquid is still present" },
            { letter: "C", text: "the gas above the liquid is not affected by the temperature of the dock" },
            { letter: "D", text: "the liquid keeps evaporating to restore its vapor pressure at that temperature" }
          ],
          correct: "D"
        },
        {
          id: "kmt-fill",
          sol: "CH.5.a",
          stem: "According to the kinetic molecular theory, the argon exerts the same pressure on every part of the cylinder wall because its atoms —",
          choices: [
            { letter: "A", text: "move randomly in straight lines until they collide" },
            { letter: "B", text: "settle to the bottom under gravity" },
            { letter: "C", text: "are attracted strongly to the steel walls of the cylinder" },
            { letter: "D", text: "cluster together near the valve" }
          ],
          correct: "A"
        },
        {
          id: "partial",
          sol: "CH.5.b",
          stem: "In the mixed cylinder, the partial pressure of carbon dioxide is —",
          choices: [
            { letter: "A", text: "45 atm" },
            { letter: "B", text: "30 atm" },
            { letter: "C", text: "90 atm" },
            { letter: "D", text: "120 atm" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "kmt-hydrogen-over-water",
      family: "KMT",
      title: "Hydrogen collected over water",
      kind: "Phases of Matter · CH.5",
      blurb: "Zinc, acid and an upside-down cylinder: subtract the water vapor first.",
      level: 2,
      passage: "<p>" + N(1) + "Zinc reacted with hydrochloric acid, and the hydrogen was trapped in a water-filled graduated cylinder held upside down in a trough. " + N(2) + "When bubbling stopped, the student raised the cylinder until the water level inside matched the level outside, then read 48.0 mL of gas at 24 °C. " + N(3) + "The barometer read 754 mm Hg. " + N(4) + "The gas in the cylinder is a mixture of hydrogen and <strong>water vapor</strong>. " + N(5) + "Use: R = 0.0821 L·atm/(mol·K); 1 atm = 760 mm Hg; K = °C + 273.</p>" +
        "<table><tr><th>Temperature (°C)</th><th>Vapor pressure of water (mm Hg)</th></tr><tr><td>20</td><td>17.5</td></tr><tr><td>22</td><td>19.8</td></tr><tr><td>24</td><td>22.4</td></tr><tr><td>26</td><td>25.2</td></tr></table>",
      claims: [
        {
          id: "dry",
          sol: "CH.5.b",
          stem: "What is the partial pressure of the hydrogen in the cylinder?",
          choices: [
            { letter: "A", text: "729 mm Hg" },
            { letter: "B", text: "732 mm Hg" },
            { letter: "C", text: "754 mm Hg" },
            { letter: "D", text: "776 mm Hg" }
          ],
          correct: "B"
        },
        {
          id: "level",
          sol: "CH.5.a",
          stem: "Why did the student match the water levels inside and outside the cylinder before reading the volume?",
          choices: [
            { letter: "A", text: "to remove all of the water vapor from the hydrogen before it is measured" },
            { letter: "B", text: "to cool the gas to the temperature of the room" },
            { letter: "C", text: "to make the pressure of the trapped gas equal to the barometer reading" },
            { letter: "D", text: "to stop the zinc from reacting further" }
          ],
          correct: "C"
        },
        {
          id: "moles",
          sol: "CH.5.b",
          stem: "How many moles of hydrogen were collected?",
          choices: [
            { letter: "A", text: "1.95 × 10⁻³ mol" },
            { letter: "B", text: "1.90 × 10⁻³ mol" },
            { letter: "C", text: "2.14 × 10⁻³ mol" },
            { letter: "D", text: "2.35 × 10⁻² mol" }
          ],
          correct: "B"
        },
        {
          id: "vp-trend",
          sol: "CH.5.c",
          stem: "Which statement best explains why the vapor pressure of water is higher at 26 °C than at 20 °C?",
          choices: [
            { letter: "A", text: "Warmer water has more molecules with enough energy to escape the surface." },
            { letter: "B", text: "Warmer water takes up more space in the cylinder." },
            { letter: "C", text: "The barometer reading rises with the temperature of the room." },
            { letter: "D", text: "Hydrogen gas dissolves much more readily in warmer water than in cool water." }
          ],
          correct: "A"
        },
        {
          id: "warmer",
          sol: "CH.5.c",
          stem: "If the trough water had been 26 °C instead of 24 °C, the share of the total pressure due to water vapor would have been —",
          choices: [
            { letter: "A", text: "smaller, because the gas would expand" },
            { letter: "B", text: "smaller, because less hydrogen would form" },
            { letter: "C", text: "the same, because the barometer reading in the room did not change" },
            { letter: "D", text: "larger, because the vapor pressure of water rises with temperature" }
          ],
          correct: "D"
        },
        {
          id: "total",
          sol: "CH.5.a",
          stem: "After the water levels were matched, the total pressure of the gas mixture in the cylinder was equal to —",
          choices: [
            { letter: "A", text: "the vapor pressure of water at 24 °C" },
            { letter: "B", text: "the pressure of the hydrogen alone" },
            { letter: "C", text: "the barometer reading in the room" },
            { letter: "D", text: "exactly 760 mm Hg, the standard pressure" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "kmt-ice-cube-energy",
      family: "KMT",
      title: "Energy budget of one ice cube",
      kind: "Phases of Matter · CH.5",
      blurb: "A 36.0 g cube melts and warms to 20.0 °C: count the joules in two steps.",
      level: 1,
      passage: "<p>" + N(1) + "A student dropped a 36.0 g ice cube at 0 °C into an insulated cup and tracked its temperature with a probe. " + N(2) + "The reading stayed at 0 °C until the last sliver of ice was gone, then climbed to 20.0 °C. " + N(3) + "The energy needed to melt a sample at its melting point is its <strong>heat of fusion</strong>. " + N(4) + "Use: ΔH_fus of water = 334 J/g = 6.01 kJ/mol; ΔH_vap of water = 2260 J/g = 40.7 kJ/mol; c of water = 4.18 J/(g·°C); H₂O = 18.0 g/mol.</p>",
      claims: [
        {
          id: "melt",
          sol: "CH.5.e",
          stem: "How much energy was needed to melt the 36.0 g ice cube at 0 °C?",
          choices: [
            { letter: "A", text: "0 kJ" },
            { letter: "B", text: "6.01 kJ" },
            { letter: "C", text: "12.0 kJ" },
            { letter: "D", text: "81.4 kJ" }
          ],
          correct: "C"
        },
        {
          id: "per-mole",
          sol: "CH.5.e",
          stem: "Melting 3.00 mol of ice at 0 °C would require —",
          choices: [
            { letter: "A", text: "1.00 kJ" },
            { letter: "B", text: "18.0 kJ" },
            { letter: "C", text: "6.01 kJ" },
            { letter: "D", text: "122 kJ" }
          ],
          correct: "B"
        },
        {
          id: "warm",
          sol: "CH.5.f",
          stem: "How much energy was absorbed as the 36.0 g of melted water warmed from 0 °C to 20.0 °C?",
          choices: [
            { letter: "A", text: "150 J" },
            { letter: "B", text: "1.20 × 10⁴ J" },
            { letter: "C", text: "3.01 × 10³ J" },
            { letter: "D", text: "4.41 × 10⁴ J" }
          ],
          correct: "C"
        },
        {
          id: "plateau",
          sol: "CH.5.d",
          stem: "Which statement best explains why the probe stayed at 0 °C while the ice was melting?",
          choices: [
            { letter: "A", text: "The probe cannot respond to any change until every last bit of the ice has melted away." },
            { letter: "B", text: "Ice absorbs no energy at all until it has become a liquid." },
            { letter: "C", text: "The insulation of the cup blocked all of the heat from entering." },
            { letter: "D", text: "The energy loosened the attractions between molecules instead of speeding them up." }
          ],
          correct: "D"
        },
        {
          id: "term",
          sol: "CH.5.e",
          stem: "Based on sentence 3, the heat of fusion of water is the energy needed to —",
          choices: [
            { letter: "A", text: "change ice at 0 °C into liquid water at 0 °C" },
            { letter: "B", text: "raise 1 g of water by 1 °C" },
            { letter: "C", text: "change liquid water at 100 °C into steam at 100 °C" },
            { letter: "D", text: "cool liquid water until it freezes" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "kmt-blue-ridge-kettle",
      family: "KMT",
      title: "One kettle, three elevations",
      kind: "Phases of Matter · CH.5",
      blurb: "Sea level, a Blue Ridge campsite and a mountain pass: why the water boils cooler.",
      level: 1,
      passage: "<p>" + N(1) + "A hiking club boiled water in the same camp kettle at three places and recorded the temperature when the water reached a rolling boil. " + N(2) + "The <strong>normal boiling point</strong> of a liquid is the temperature at which its vapor pressure equals 101.3 kPa. " + N(3) + "At the Blue Ridge campsite one hiker stirred a spoonful of salt into the kettle before heating it.</p>" +
        "<table><tr><th>Site</th><th>Elevation (m)</th><th>Air pressure (kPa)</th><th>Boiling point (°C)</th></tr><tr><td>Virginia Beach shore</td><td>0</td><td>101.3</td><td>100</td></tr><tr><td>Blue Ridge campsite</td><td>1200</td><td>88</td><td>96</td></tr><tr><td>Colorado pass</td><td>3000</td><td>70</td><td>90</td></tr></table>",
      claims: [
        {
          id: "why-lower",
          sol: "CH.5.c",
          stem: "Which statement best explains why the water boiled at a lower temperature at the campsite than at the shore?",
          choices: [
            { letter: "A", text: "The vapor pressure of water reached the lower air pressure at a lower temperature." },
            { letter: "B", text: "The air on the mountain is much colder, so the water in the kettle cannot get as hot." },
            { letter: "C", text: "The camp stove delivered less energy at higher elevation." },
            { letter: "D", text: "The water at the campsite contained fewer dissolved minerals." }
          ],
          correct: "A"
        },
        {
          id: "vp-96",
          sol: "CH.5.c",
          stem: "Based on the table, the vapor pressure of pure water at 96 °C is about —",
          choices: [
            { letter: "A", text: "70 kPa" },
            { letter: "B", text: "88 kPa" },
            { letter: "C", text: "96 kPa" },
            { letter: "D", text: "101.3 kPa" }
          ],
          correct: "B"
        },
        {
          id: "bubbles",
          sol: "CH.5.d",
          stem: "The bubbles that rise through the water during a rolling boil are made of —",
          choices: [
            { letter: "A", text: "air that was dissolved in the water" },
            { letter: "B", text: "hydrogen and oxygen gas" },
            { letter: "C", text: "water vapor" },
            { letter: "D", text: "carbon dioxide from the stove flame" }
          ],
          correct: "C"
        },
        {
          id: "pressure-cooker",
          sol: "CH.5.c",
          stem: "A sealed pressure cooker lets food cook faster at the campsite because it —",
          choices: [
            { letter: "A", text: "lowers the vapor pressure of the water" },
            { letter: "B", text: "keeps the water from ever reaching its boiling point while the food is cooking" },
            { letter: "C", text: "removes the air above the water" },
            { letter: "D", text: "raises the pressure on the water so it boils at a higher temperature" }
          ],
          correct: "D"
        },
        {
          id: "salt",
          sol: "CH.5.g",
          stem: "Compared with pure water at the same site, the salted water in sentence 3 would boil at a temperature that is —",
          choices: [
            { letter: "A", text: "slightly lower, because the salt absorbs some of the heat from the stove" },
            { letter: "B", text: "exactly the same, because salt does not change the water" },
            { letter: "C", text: "slightly higher, because dissolved particles lower the vapor pressure" },
            { letter: "D", text: "much higher, because salt melts at over 800 °C" }
          ],
          correct: "C"
        },
        {
          id: "lid",
          sol: "CH.5.d",
          stem: "Drops of liquid water formed on the cool underside of the kettle lid. This change is called —",
          choices: [
            { letter: "A", text: "condensation; energy is absorbed" },
            { letter: "B", text: "condensation; energy is released" },
            { letter: "C", text: "evaporation; energy is released" },
            { letter: "D", text: "sublimation; energy is absorbed" }
          ],
          correct: "B"
        }
      ]
    },

    /* ---------- medium ---------- */
    {
      id: "kmt-heating-curve-ice",
      family: "KMT",
      title: "Heating curve of 50.0 g of ice",
      kind: "Phases of Matter · CH.5",
      blurb: "Two flat stretches and one climb: read the clock and the thermometer.",
      level: 2,
      passage: "<p>" + N(1) + "A student placed 50.0 g of crushed ice at 0 °C in a beaker on a hot plate that delivers 200 J every second, or 12.0 kJ per minute, and recorded the temperature until the last of the water had boiled away. " + N(2) + "The graph of temperature against time has two flat plateaus joined by a rising line. " + N(3) + "During each <strong>plateau</strong> two phases were present in the beaker at once. " + N(4) + "Use: ΔH_fus of water = 334 J/g; ΔH_vap of water = 2260 J/g; c of water = 4.18 J/(g·°C); K = °C + 273.</p>" +
        "<table><tr><th>Segment</th><th>Time (min)</th><th>Temperature (°C)</th><th>Observation</th></tr><tr><td>A</td><td>0.0 to 1.4</td><td>0, steady</td><td>ice melting</td></tr><tr><td>B</td><td>1.4 to 3.1</td><td>0 rising to 100</td><td>liquid warming</td></tr><tr><td>C</td><td>3.1 to 12.5</td><td>100, steady</td><td>water boiling</td></tr></table>",
      claims: [
        {
          id: "melt",
          sol: "CH.5.e",
          stem: "How much energy was absorbed by the ice during segment A?",
          choices: [
            { letter: "A", text: "334 J" },
            { letter: "B", text: "20.9 kJ" },
            { letter: "C", text: "16.7 kJ" },
            { letter: "D", text: "113 kJ" }
          ],
          correct: "C"
        },
        {
          id: "warm",
          sol: "CH.5.f",
          stem: "How much energy did the liquid water absorb during segment B?",
          choices: [
            { letter: "A", text: "16.7 kJ" },
            { letter: "B", text: "20.9 kJ" },
            { letter: "C", text: "209 J" },
            { letter: "D", text: "78.0 kJ" }
          ],
          correct: "B"
        },
        {
          id: "boil",
          sol: "CH.5.e",
          stem: "The energy required to boil away all 50.0 g of water during segment C is —",
          choices: [
            { letter: "A", text: "113 kJ" },
            { letter: "B", text: "16.7 kJ" },
            { letter: "C", text: "40.7 kJ" },
            { letter: "D", text: "226 kJ" }
          ],
          correct: "A"
        },
        {
          id: "plateau-why",
          sol: "CH.5.d",
          stem: "Which statement best explains why the temperature stayed at 100 °C for more than nine minutes during segment C?",
          choices: [
            { letter: "A", text: "The hot plate switched off each time the water reached 100 °C." },
            { letter: "B", text: "Liquid water is unable to absorb any more energy from the hot plate once it has reached its boiling point." },
            { letter: "C", text: "The steam carried the thermometer reading away from the beaker." },
            { letter: "D", text: "The energy was used to separate molecules into the gas phase rather than to speed them up." }
          ],
          correct: "D"
        },
        {
          id: "phases",
          sol: "CH.5.d",
          stem: "During which segment were liquid water and water vapor both present in the beaker at the same temperature?",
          choices: [
            { letter: "A", text: "segment C" },
            { letter: "B", text: "segment B" },
            { letter: "C", text: "segment A" },
            { letter: "D", text: "none, because only one phase is present at a time" }
          ],
          correct: "A"
        },
        {
          id: "double",
          sol: "CH.5.f",
          stem: "If 100.0 g of water were warmed from 0 °C to 100 °C on the same hot plate, segment B would last about —",
          choices: [
            { letter: "A", text: "0.9 min" },
            { letter: "B", text: "1.7 min" },
            { letter: "C", text: "3.5 min" },
            { letter: "D", text: "7.0 min" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "kmt-calorimeter-metal",
      family: "KMT",
      title: "Hot metal in a foam cup",
      kind: "Phases of Matter · CH.5",
      blurb: "A 45.0 g cylinder from boiling water drops into 100.0 g of water: name the metal.",
      level: 2,
      passage: "<p>" + N(1) + "A student heated a 45.0 g metal cylinder in boiling water until it reached 100.0 °C, then quickly moved it into a foam-cup <strong>calorimeter</strong> holding 100.0 g of water at 22.0 °C. " + N(2) + "The water rose to a final temperature of 25.6 °C, and the metal cooled to the same temperature. " + N(3) + "The student assumed that all of the energy lost by the metal was gained by the water. " + N(4) + "Before the trial she dried the cylinder with a paper towel so that no hot water was carried into the cup along with the metal. " + N(5) + "Use: c of water = 4.18 J/(g·°C); ΔH_fus of water = 334 J/g; ΔH_vap of water = 2260 J/g.</p>" +
        "<table><tr><th>Metal</th><th>Specific heat, J/(g·°C)</th></tr><tr><td>Aluminum</td><td>0.897</td></tr><tr><td>Iron</td><td>0.449</td></tr><tr><td>Copper</td><td>0.385</td></tr><tr><td>Lead</td><td>0.129</td></tr></table>",
      claims: [
        {
          id: "q-water",
          sol: "CH.5.f",
          stem: "How much energy did the water in the cup gain?",
          choices: [
            { letter: "A", text: "418 J" },
            { letter: "B", text: "1.07 × 10⁴ J" },
            { letter: "C", text: "1.50 × 10³ J" },
            { letter: "D", text: "3.11 × 10⁴ J" }
          ],
          correct: "C"
        },
        {
          id: "c-metal",
          sol: "CH.5.f",
          stem: "Using the energy gained by the water, the specific heat of the metal is closest to —",
          choices: [
            { letter: "A", text: "0.202 J/(g·°C)" },
            { letter: "B", text: "0.449 J/(g·°C)" },
            { letter: "C", text: "1.31 J/(g·°C)" },
            { letter: "D", text: "9.29 J/(g·°C)" }
          ],
          correct: "B"
        },
        {
          id: "identify",
          sol: "CH.5.f",
          stem: "Based on the table, the cylinder is most likely made of —",
          choices: [
            { letter: "A", text: "aluminum" },
            { letter: "B", text: "copper" },
            { letter: "C", text: "lead" },
            { letter: "D", text: "iron" }
          ],
          correct: "D"
        },
        {
          id: "kmt-flow",
          sol: "CH.5.a",
          stem: "According to the kinetic molecular theory, energy moved from the metal to the water because —",
          choices: [
            { letter: "A", text: "the metal particles had a higher average kinetic energy than the water molecules" },
            { letter: "B", text: "the metal contained more total energy than the water" },
            { letter: "C", text: "the metal particles were packed much more tightly together than the water molecules" },
            { letter: "D", text: "the water molecules were moving faster than the metal particles" }
          ],
          correct: "A"
        },
        {
          id: "foam",
          sol: "CH.5.f",
          stem: "The purpose of using a foam cup instead of a metal can for the calorimeter is to —",
          choices: [
            { letter: "A", text: "reduce the energy lost to the surroundings" },
            { letter: "B", text: "keep the metal cylinder from touching the water" },
            { letter: "C", text: "speed up the transfer of energy to the water" },
            { letter: "D", text: "hold the water at exactly 22.0 °C" }
          ],
          correct: "A"
        },
        {
          id: "ice",
          sol: "CH.5.e",
          stem: "If the same 1.50 × 10³ J had been transferred to ice at 0 °C instead, how many grams of ice would have melted?",
          choices: [
            { letter: "A", text: "0.250 g" },
            { letter: "B", text: "0.666 g" },
            { letter: "C", text: "4.50 g" },
            { letter: "D", text: "360 g" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "kmt-road-salt-i64",
      family: "KMT",
      title: "Road salt and the freezing point",
      kind: "Phases of Matter · CH.5",
      blurb: "Before the plows hit I-64, a class measures how far salt pushes the freezing point down.",
      level: 2,
      passage: "<p>" + N(1) + "Before a winter storm, state crews spread sodium chloride on I-64 so that melted snow will not refreeze on the pavement. " + N(2) + "To see how well this works, a class dissolved measured masses of NaCl in 100.0 g of water and cooled each solution while a probe recorded the temperature at which ice first formed. " + N(3) + "The <strong>molality</strong> of each solution is the moles of solute per kilogram of water. " + N(4) + "Use: K_f of water = 1.86 °C/m; NaCl = 58.5 g/mol; ΔT_f = i × K_f × m, where i is the number of particles each formula unit gives when it dissolves.</p>" +
        "<table><tr><th>NaCl (g)</th><th>Molality (m)</th><th>Observed freezing point (°C)</th></tr><tr><td>0</td><td>0</td><td>0.0</td></tr><tr><td>2.93</td><td>0.500</td><td>−1.8</td></tr><tr><td>5.85</td><td>1.00</td><td>−3.5</td></tr><tr><td>11.7</td><td>2.00</td><td>−6.9</td></tr></table>",
      claims: [
        {
          id: "predict",
          sol: "CH.5.g",
          stem: "Using i = 2 for NaCl, the predicted freezing point of the 1.00 m solution is —",
          choices: [
            { letter: "A", text: "−1.9 °C" },
            { letter: "B", text: "−3.7 °C" },
            { letter: "C", text: "−5.6 °C" },
            { letter: "D", text: "−7.4 °C" }
          ],
          correct: "B"
        },
        {
          id: "cacl2",
          sol: "CH.5.g",
          stem: "Some crews use calcium chloride, CaCl₂, instead. At the same molality, a CaCl₂ solution would freeze at a lower temperature than a NaCl solution because —",
          choices: [
            { letter: "A", text: "calcium is heavier than sodium" },
            { letter: "B", text: "CaCl₂ releases heat as it dissolves" },
            { letter: "C", text: "each CaCl₂ unit gives three dissolved particles instead of two" },
            { letter: "D", text: "CaCl₂ is far less soluble in cold water, so much more of it stays undissolved" }
          ],
          correct: "C"
        },
        {
          id: "molality",
          sol: "CH.5.g",
          stem: "If 5.85 g of NaCl were dissolved in 250.0 g of water instead, the molality of the solution would be —",
          choices: [
            { letter: "A", text: "0.0400 m" },
            { letter: "B", text: "0.100 m" },
            { letter: "C", text: "0.400 m" },
            { letter: "D", text: "2.50 m" }
          ],
          correct: "C"
        },
        {
          id: "cold-night",
          sol: "CH.5.g",
          stem: "Based on the table, which solution would still be liquid on a night when the pavement reaches −5.0 °C?",
          choices: [
            { letter: "A", text: "only the 2.00 m solution" },
            { letter: "B", text: "the 1.00 m and 2.00 m solutions" },
            { letter: "C", text: "every solution that contains any salt" },
            { letter: "D", text: "none of the solutions" }
          ],
          correct: "A"
        },
        {
          id: "freeze-energy",
          sol: "CH.5.d",
          stem: "When ice finally forms in one of the cooled solutions, the change from liquid to solid —",
          choices: [
            { letter: "A", text: "absorbs energy from the surroundings" },
            { letter: "B", text: "occurs at a higher temperature than in pure water" },
            { letter: "C", text: "traps all of the dissolved salt inside the ice" },
            { letter: "D", text: "releases energy to the surroundings" }
          ],
          correct: "D"
        },
        {
          id: "vp",
          sol: "CH.5.c",
          stem: "Dissolved salt lowers the vapor pressure of the water in each solution because —",
          choices: [
            { letter: "A", text: "the salt makes all of the water molecules move more slowly, so fewer of them have enough energy" },
            { letter: "B", text: "solute particles occupy part of the surface, so fewer water molecules can escape" },
            { letter: "C", text: "salt evaporates faster than water does" },
            { letter: "D", text: "the solution weighs more than pure water" }
          ],
          correct: "B"
        }
      ]
    },

    /* ---------- long ---------- */
    {
      id: "kmt-scuba-virginia-beach",
      family: "KMT",
      title: "Dive log off Virginia Beach",
      kind: "Phases of Matter · CH.5",
      blurb: "A wreck at 30 m, a lungful at 20 m and an 11.0 L tank: gas laws under the Atlantic.",
      level: 3,
      passage: "<p>" + N(1) + "A dive instructor keeps a log for the students in her class who explore an artificial reef made from sunken barges off Virginia Beach. " + N(2) + "At the surface the air pressure is 1.00 atm, and every 10 m of seawater adds another 1.0 atm. " + N(3) + "The air the divers breathe is 21% oxygen and 79% nitrogen by volume. " + N(4) + "Each aluminum tank holds 11.0 L of air at 200 atm when filled at 25 °C on the boat; the water at the reef is 12 °C. " + N(5) + "The table shows what happens to a 6.0 L lungful of surface air if a diver could carry it down without breathing it out. " + N(6) + "On a cold morning the instructor saw frost form on a tank valve as air rushed out of it. " + N(7) + "Use: R = 0.0821 L·atm/(mol·K); 1 mol of gas at STP occupies 22.4 L; K = °C + 273.</p>" +
        "<table><tr><th>Depth (m)</th><th>Total pressure (atm)</th><th>Volume of the lungful (L)</th></tr><tr><td>0</td><td>1.0</td><td>6.0</td></tr><tr><td>10</td><td>2.0</td><td>3.0</td></tr><tr><td>20</td><td>3.0</td><td>2.0</td></tr><tr><td>30</td><td>4.0</td><td>1.5</td></tr></table>",
      claims: [
        {
          id: "po2",
          sol: "CH.5.b",
          stem: "What is the partial pressure of oxygen in the air a diver breathes at 30 m?",
          choices: [
            { letter: "A", text: "0.21 atm" },
            { letter: "B", text: "0.84 atm" },
            { letter: "C", text: "0.63 atm" },
            { letter: "D", text: "3.16 atm" }
          ],
          correct: "B"
        },
        {
          id: "bag",
          sol: "CH.5.b",
          stem: "A diver fills a lift bag with 2.0 L of air at 20 m and lets it rise to the surface without venting. At the surface the bag holds —",
          choices: [
            { letter: "A", text: "0.67 L" },
            { letter: "B", text: "2.0 L" },
            { letter: "C", text: "4.0 L" },
            { letter: "D", text: "6.0 L" }
          ],
          correct: "D"
        },
        {
          id: "tank-moles",
          sol: "CH.5.b",
          stem: "How many moles of air does a freshly filled tank hold at 25 °C?",
          choices: [
            { letter: "A", text: "0.491 mol" },
            { letter: "B", text: "89.9 mol" },
            { letter: "C", text: "98.2 mol" },
            { letter: "D", text: "1.07 × 10³ mol" }
          ],
          correct: "B"
        },
        {
          id: "tank-cool",
          sol: "CH.5.a",
          stem: "When the sealed tank cools from 25 °C to the 12 °C reef water, its pressure should fall to about —",
          choices: [
            { letter: "A", text: "96 atm" },
            { letter: "B", text: "187 atm" },
            { letter: "C", text: "191 atm" },
            { letter: "D", text: "209 atm" }
          ],
          correct: "C"
        },
        {
          id: "frost",
          sol: "CH.5.d",
          stem: "The frost described in sentence 6 formed on the chilled valve by —",
          choices: [
            { letter: "A", text: "deposition of water vapor directly to solid ice" },
            { letter: "B", text: "sublimation of ice that was already on the valve" },
            { letter: "C", text: "freezing of liquid seawater that splashed onto the valve" },
            { letter: "D", text: "evaporation of water from the cold metal surface" }
          ],
          correct: "A"
        },
        {
          id: "two",
          sol: "CH.5.a",
          stem: "Select TWO statements that the data in the table support.",
          choices: [
            { letter: "A", text: "The product of pressure and volume is the same at every depth." },
            { letter: "B", text: "The volume drops by the same amount for each 10 m of descent." },
            { letter: "C", text: "The total pressure rises by 1.0 atm for each 10 m of descent." },
            { letter: "D", text: "At 40 m the lungful would shrink to 1.0 L." }
          ],
          correct: ["A", "C"]
        }
      ]
    },
    {
      id: "kmt-phase-diagram-words",
      family: "KMT",
      title: "Two phase diagrams, no picture",
      kind: "Phases of Matter · CH.5",
      blurb: "Water and carbon dioxide mapped in words: triple points, critical points and one odd slope.",
      level: 2,
      passage: "<p>" + N(1) + "A <strong>phase diagram</strong> plots pressure on the vertical axis against temperature on the horizontal axis and divides the plane into solid, liquid and gas regions. " + N(2) + "Three lines separate the regions and meet at the single <strong>triple point</strong>, where all three phases exist together in equilibrium. " + N(3) + "The liquid–gas line is a graph of vapor pressure against temperature; it ends at the critical point, above which no pressure can turn the gas into a liquid. " + N(4) + "For water the solid–liquid line leans slightly to the left as pressure rises, so ice under high pressure melts below 0 °C. " + N(5) + "For carbon dioxide the solid–liquid line leans to the right, and the triple point sits above normal air pressure. " + N(6) + "Normal melting and boiling points are read where a horizontal line at 1 atm crosses the boundaries.</p>" +
        "<table><tr><th>Substance</th><th>Triple point</th><th>Critical point</th><th>Behavior at 1 atm</th></tr><tr><td>Water</td><td>0.01 °C, 0.006 atm</td><td>374 °C, 218 atm</td><td>melts at 0 °C, boils at 100 °C</td></tr><tr><td>Carbon dioxide</td><td>−56.6 °C, 5.1 atm</td><td>31 °C, 73 atm</td><td>solid changes directly to gas at −78.5 °C</td></tr></table>",
      claims: [
        {
          id: "dry-ice",
          sol: "CH.5.d",
          stem: "Which statement best explains why a block of dry ice left on a lab bench shrinks without leaving a puddle?",
          choices: [
            { letter: "A", text: "Carbon dioxide has no liquid phase at any pressure." },
            { letter: "B", text: "At 1 atm the pressure is below the triple point of CO₂, so the solid sublimes." },
            { letter: "C", text: "The liquid that forms evaporates just as fast as it forms, so no puddle is seen." },
            { letter: "D", text: "Room temperature is above the critical temperature of CO₂." }
          ],
          correct: "B"
        },
        {
          id: "liquid-co2",
          sol: "CH.5.d",
          stem: "Liquid carbon dioxide, used inside some fire extinguishers, can exist only when the pressure is —",
          choices: [
            { letter: "A", text: "below 1 atm" },
            { letter: "B", text: "exactly 1 atm" },
            { letter: "C", text: "above 5.1 atm" },
            { letter: "D", text: "above 218 atm" }
          ],
          correct: "C"
        },
        {
          id: "ice-pressure",
          sol: "CH.5.d",
          stem: "Based on sentence 4, if the pressure on a piece of ice at −1 °C is raised sharply, the ice will —",
          choices: [
            { letter: "A", text: "melt, because the solid–liquid line for water slopes to the left" },
            { letter: "B", text: "sublime, because it moves toward the triple point" },
            { letter: "C", text: "stay solid, because increased pressure always favors the denser solid phase" },
            { letter: "D", text: "boil, because the vapor pressure rises with pressure" }
          ],
          correct: "A"
        },
        {
          id: "vp-line",
          sol: "CH.5.c",
          stem: "Moving along the liquid–gas line of water from the triple point toward the critical point, the vapor pressure of the liquid —",
          choices: [
            { letter: "A", text: "stays fixed at 0.006 atm" },
            { letter: "B", text: "falls steadily as the temperature rises toward the critical point" },
            { letter: "C", text: "rises with temperature until it reaches 218 atm" },
            { letter: "D", text: "drops to zero at 100 °C" }
          ],
          correct: "C"
        },
        {
          id: "critical",
          sol: "CH.5.c",
          stem: "A cylinder of carbon dioxide gas sits in a room at 35 °C. Which statement about liquefying the gas is accurate?",
          choices: [
            { letter: "A", text: "It will liquefy as soon as the pressure reaches 5.1 atm, because that is the triple-point pressure." },
            { letter: "B", text: "It cannot be liquefied by pressure alone because 35 °C is above the critical temperature." },
            { letter: "C", text: "It will liquefy at exactly 73 atm." },
            { letter: "D", text: "It will freeze before it liquefies." }
          ],
          correct: "B"
        },
        {
          id: "fusion",
          sol: "CH.5.e",
          stem: "Crossing the solid–liquid line of water from left to right at constant pressure requires an input of energy called the —",
          choices: [
            { letter: "A", text: "specific heat" },
            { letter: "B", text: "heat of vaporization" },
            { letter: "C", text: "critical energy" },
            { letter: "D", text: "heat of fusion" }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "kmt-chesapeake-freeze",
      family: "KMT",
      title: "When the Chesapeake freezes",
      kind: "Phases of Matter · CH.5",
      blurb: "River water, upper bay, bay mouth: salt decides who ices over first.",
      level: 3,
      passage: "<p>" + N(1) + "During a cold snap a monitoring team compared how easily water froze at four spots between the James River and the mouth of the Chesapeake Bay. " + N(2) + "Salinity rises toward the ocean, and the team treated the dissolved salt as NaCl to estimate the molality of each sample. " + N(3) + "Each sample was cooled slowly in a bath while a probe recorded the temperature at which the first ice crystals appeared. " + N(4) + "The team noted that the ice was nearly pure water and that the salt stayed in the unfrozen liquid. " + N(5) + "They also predicted the boiling point of each sample, since dissolved particles raise the boiling point as well as lowering the freezing point. " + N(6) + "Use: K_f of water = 1.86 °C/m; K_b of water = 0.512 °C/m; ΔH_fus of water = 334 J/g; c of water = 4.18 J/(g·°C); NaCl = 58.5 g/mol; i = 2 for NaCl; K = °C + 273.</p>" +
        "<table><tr><th>Site</th><th>Salt (g per kg water)</th><th>Molality (m)</th><th>Freezing point (°C)</th></tr><tr><td>James River</td><td>0</td><td>0</td><td>0.0</td></tr><tr><td>Upper bay</td><td>10</td><td>0.171</td><td>−0.6</td></tr><tr><td>Mid bay</td><td>20</td><td>0.342</td><td>−1.3</td></tr><tr><td>Bay mouth</td><td>30</td><td>0.513</td><td>−1.9</td></tr></table>",
      claims: [
        {
          id: "bp",
          sol: "CH.5.g",
          stem: "Using i = 2, the predicted boiling point of the bay-mouth sample at 1 atm is about —",
          choices: [
            { letter: "A", text: "100.3 °C" },
            { letter: "B", text: "100.5 °C" },
            { letter: "C", text: "100.8 °C" },
            { letter: "D", text: "101.9 °C" }
          ],
          correct: "B"
        },
        {
          id: "why",
          sol: "CH.5.g",
          stem: "Which statement best explains why the bay-mouth sample froze at a lower temperature than the upper-bay sample?",
          choices: [
            { letter: "A", text: "Ocean water is colder than river water in winter." },
            { letter: "B", text: "It contains more dissolved particles per kilogram of water, which interfere with ice forming." },
            { letter: "C", text: "The dissolved salt in it absorbs energy from the surrounding water as the sample is slowly cooled." },
            { letter: "D", text: "Its water molecules are heavier because of the salt." }
          ],
          correct: "B"
        },
        {
          id: "sample",
          sol: "CH.5.g",
          stem: "A student prepared a comparison sample by dissolving 4.68 g of NaCl in 200.0 g of water. Its predicted freezing point is —",
          choices: [
            { letter: "A", text: "−0.30 °C" },
            { letter: "B", text: "−0.74 °C" },
            { letter: "C", text: "−1.5 °C" },
            { letter: "D", text: "−2.2 °C" }
          ],
          correct: "C"
        },
        {
          id: "two",
          sol: "CH.5.g",
          stem: "Select TWO changes that would lower the freezing point of the mid-bay sample even further.",
          choices: [
            { letter: "A", text: "dissolving more NaCl in the sample" },
            { letter: "B", text: "replacing the NaCl with the same molality of sugar, which does not dissociate" },
            { letter: "C", text: "cooling the sample more slowly in the bath" },
            { letter: "D", text: "replacing the NaCl with the same molality of CaCl₂" }
          ],
          correct: ["A", "D"]
        },
        {
          id: "freeze-heat",
          sol: "CH.5.e",
          stem: "When 1.00 kg of James River water at 0 °C freezes completely, the energy released to the surroundings is —",
          choices: [
            { letter: "A", text: "4.18 kJ" },
            { letter: "B", text: "6.01 kJ" },
            { letter: "C", text: "2260 kJ" },
            { letter: "D", text: "334 kJ" }
          ],
          correct: "D"
        },
        {
          id: "cool",
          sol: "CH.5.f",
          stem: "Before it can freeze, 1.00 kg of river water must cool from 4.0 °C to 0.0 °C. The energy it gives up during this cooling is —",
          choices: [
            { letter: "A", text: "1.04 kJ" },
            { letter: "B", text: "4.18 kJ" },
            { letter: "C", text: "16.7 kJ" },
            { letter: "D", text: "1.14 × 10³ kJ" }
          ],
          correct: "C"
        }
      ]
    }
  ];

  for (var i = 0; i < PACKS.length; i++) P.push(PACKS[i]);
})(typeof window !== "undefined" ? window : global);
