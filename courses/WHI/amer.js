/* SOL Lab — World History I · Maya, Aztec & Inca (WHI.12). Original text only. */
(function (global) {
  var P = global.HEIST_PACKS;
  if (!P || !P.push) return;
  var N = function (i) { return '<span class="n">(' + i + ')</span> '; };   // numbered sentence

  var PACKS = [
    /* ---------- tiny ---------- */
    {
      id: "amer-tenochtitlan-map",
      family: "AMER",
      title: "A city in the lake",
      kind: "Maya, Aztec & Inca · WHI.12",
      blurb: "A map of Tenochtitlan described in words: an island, causeways and floating gardens.",
      level: 1,
      passage: "<p>" + N(1) + "On the map, Tenochtitlan stands on an island in <strong>Lake Texcoco</strong>, in the high Valley of Mexico. " + N(2) + "Three long <strong>causeways</strong> connect the island to the shore. " + N(3) + "Around the city, rectangles of farmland called <strong>chinampas</strong> rise from the shallow water. " + N(4) + "A note says the Aztecs, also called the Mexica, founded the city about 1325.</p>",
      claims: [
        {
          id: "chinampas",
          sol: "WHI.12.a",
          stem: "In sentence 3, chinampas were —",
          choices: [
            { letter: "A", text: "stone temples built on top of pyramids" },
            { letter: "B", text: "raised farm plots built in the lake" },
            { letter: "C", text: "roads of packed earth across the hills" },
            { letter: "D", text: "storehouses that held tribute goods" }
          ],
          correct: "B"
        },
        {
          id: "causeways",
          sol: "WHI.12.a",
          stem: "According to the map, what was the purpose of the causeways?",
          choices: [
            { letter: "A", text: "to carry water away from the farm fields" },
            { letter: "B", text: "to mark the border with the Inca Empire" },
            { letter: "C", text: "to hold back the ocean tides" },
            { letter: "D", text: "to link the island city to the shore" }
          ],
          correct: "D"
        },
        {
          id: "adapt",
          sol: "WHI.12.a",
          stem: "Which conclusion about Aztec farming is best supported by the map?",
          choices: [
            { letter: "A", text: "The Aztecs adapted farming to a lake setting." },
            { letter: "B", text: "The Aztecs lived in a tropical rain forest." },
            { letter: "C", text: "The Aztec capital sat high in the Andes." },
            { letter: "D", text: "The Aztecs had no way to grow their own food." }
          ],
          correct: "A"
        },
        {
          id: "where",
          sol: "WHI.12.b",
          stem: "Where did the Aztec Empire arise?",
          choices: [
            { letter: "A", text: "on the Yucatán Peninsula" },
            { letter: "B", text: "in the Andes Mountains" },
            { letter: "C", text: "in the Valley of Mexico" },
            { letter: "D", text: "along the Amazon River" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "amer-maya-numbers",
      family: "AMER",
      title: "Dots, bars and a shell",
      kind: "Maya, Aztec & Inca · WHI.12",
      blurb: "How the Maya wrote numbers, including a symbol for zero.",
      level: 1,
      passage: "<p>" + N(1) + "The Maya wrote numbers with three symbols: a dot for one, a bar for five, and a shell for <strong>zero</strong>. " + N(2) + "Their number system was based on twenty, not ten. " + N(3) + "For example, three bars and two dots stood for 17. " + N(4) + "Maya priests used these numbers to track the movements of the sun, the moon and the planet Venus.</p>",
      claims: [
        {
          id: "eight",
          sol: "WHI.12.d",
          stem: "Using sentences 1 and 3, how would the Maya write the number 8?",
          choices: [
            { letter: "A", text: "eight dots in a row" },
            { letter: "B", text: "one bar and three dots" },
            { letter: "C", text: "two bars and no dots" },
            { letter: "D", text: "a shell and eight dots" }
          ],
          correct: "B"
        },
        {
          id: "base",
          sol: "WHI.12.d",
          stem: "According to sentence 2, the Maya number system was based on —",
          choices: [
            { letter: "A", text: "groups of twenty" },
            { letter: "B", text: "groups of ten" },
            { letter: "C", text: "groups of sixty" },
            { letter: "D", text: "groups of twelve" }
          ],
          correct: "A"
        },
        {
          id: "zero",
          sol: "WHI.12.d",
          stem: "Why is the Maya use of zero considered an important achievement?",
          choices: [
            { letter: "A", text: "It let the Maya trade goods with the Romans." },
            { letter: "B", text: "It replaced the need for a calendar." },
            { letter: "C", text: "Few ancient peoples had a symbol for zero." },
            { letter: "D", text: "It was used only for counting soldiers." }
          ],
          correct: "C"
        },
        {
          id: "purpose",
          sol: "WHI.12.d",
          stem: "Which use of Maya mathematics is described in sentence 4?",
          choices: [
            { letter: "A", text: "building roads across the Andes" },
            { letter: "B", text: "counting tribute for the Aztec emperor" },
            { letter: "C", text: "measuring land for chinampas" },
            { letter: "D", text: "studying the sky to keep calendars" }
          ],
          correct: "D"
        },
        {
          id: "glyphs",
          sol: "WHI.12.c",
          stem: "Besides numbers, the Maya developed a writing system that used —",
          choices: [
            { letter: "A", text: "an alphabet borrowed from Spain" },
            { letter: "B", text: "knotted cords that held no symbols" },
            { letter: "C", text: "glyphs that stood for words and sounds" },
            { letter: "D", text: "characters borrowed from China" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "amer-quipu",
      family: "AMER",
      title: "Knots that keep count",
      kind: "Maya, Aztec & Inca · WHI.12",
      blurb: "How the Inca kept records without writing.",
      level: 1,
      passage: "<p>" + N(1) + "The Inca had no written language. " + N(2) + "Instead, trained record keepers used the <strong>quipu</strong>, a main cord with many colored strings hanging from it. " + N(3) + "Knots tied at different places on each string stood for numbers in a base-ten system. " + N(4) + "Quipus recorded harvests, taxes, labor service and population, and runners carried them along Inca roads. " + N(5) + "Other experts memorized the history of the rulers and recited it at ceremonies.</p>",
      claims: [
        {
          id: "quipu",
          sol: "WHI.12.d",
          stem: "In sentence 2, a quipu was —",
          choices: [
            { letter: "A", text: "knotted cords used to keep records" },
            { letter: "B", text: "a stone calendar carved with glyphs" },
            { letter: "C", text: "a rope bridge across a canyon" },
            { letter: "D", text: "a book made of bark paper" }
          ],
          correct: "A"
        },
        {
          id: "useful",
          sol: "WHI.12.b",
          stem: "Why was the quipu useful to Inca rulers?",
          choices: [
            { letter: "A", text: "It let them send letters to the king of Spain." },
            { letter: "B", text: "It replaced the need for roads." },
            { letter: "C", text: "It tracked taxes and labor across the empire." },
            { letter: "D", text: "It recorded the Maya calendar." }
          ],
          correct: "C"
        },
        {
          id: "history",
          sol: "WHI.12.c",
          stem: "According to sentence 5, how did the Inca preserve their history?",
          choices: [
            { letter: "A", text: "Scribes wrote it in books of bark paper." },
            { letter: "B", text: "Experts memorized it and recited it aloud." },
            { letter: "C", text: "Artists carved it on stone pyramids." },
            { letter: "D", text: "Priests painted it on the walls of Cusco." }
          ],
          correct: "B"
        },
        {
          id: "terrain",
          sol: "WHI.12.a",
          stem: "Runners carried quipus along roads. Which geographic challenge did the road system help the Inca overcome?",
          choices: [
            { letter: "A", text: "the swamps of the Valley of Mexico" },
            { letter: "B", text: "frozen tundra in the far north" },
            { letter: "C", text: "the dense rain forests of the Yucatán" },
            { letter: "D", text: "great distances in the rugged Andes" }
          ],
          correct: "D"
        }
      ]
    },
    /* ---------- short ---------- */
    {
      id: "amer-three-civs",
      family: "AMER",
      title: "Three civilizations at a glance",
      kind: "Maya, Aztec & Inca · WHI.12",
      blurb: "A table of where and when the Maya, Aztec and Inca flourished.",
      level: 1,
      passage: "<p>" + N(1) + "The table compares where and when three civilizations of the Americas reached their height.</p><table><tr><th>Civilization</th><th>Location and land</th><th>Major cities</th><th>Height of power</th></tr><tr><td>Maya</td><td>Yucatán Peninsula, southern Mexico and Central America; tropical rain forest and lowlands</td><td>city-states such as Tikal and Copán</td><td>about A.D. 250–900</td></tr><tr><td>Aztec</td><td>Valley of Mexico, a high basin in central Mexico</td><td>Tenochtitlan</td><td>about 1428–1521</td></tr><tr><td>Inca</td><td>Andes Mountains along the Pacific coast of South America</td><td>Cusco</td><td>about 1438–1533</td></tr></table>",
      claims: [
        {
          id: "rainforest",
          sol: "WHI.12.a",
          stem: "According to the table, which civilization developed in a tropical rain forest?",
          choices: [
            { letter: "A", text: "the Maya" },
            { letter: "B", text: "the Aztec" },
            { letter: "C", text: "the Inca" },
            { letter: "D", text: "all three civilizations" }
          ],
          correct: "A"
        },
        {
          id: "timing",
          sol: "WHI.12.b",
          stem: "Which conclusion about when these civilizations flourished is best supported by the table?",
          choices: [
            { letter: "A", text: "All three were ruled from a single capital." },
            { letter: "B", text: "The Maya peaked centuries before the Aztec and Inca." },
            { letter: "C", text: "The Inca built their empire in the Valley of Mexico." },
            { letter: "D", text: "The Aztec and Inca rose after the Spanish arrived." }
          ],
          correct: "B"
        },
        {
          id: "end",
          sol: "WHI.12.b",
          stem: "The Aztec and Inca dates both end in the early 1500s. Which event explains this?",
          choices: [
            { letter: "A", text: "a long drought in the Andes" },
            { letter: "B", text: "an invasion by Maya armies" },
            { letter: "C", text: "conquest by the Spanish" },
            { letter: "D", text: "a war between the two empires" }
          ],
          correct: "C"
        },
        {
          id: "andes",
          sol: "WHI.12.a",
          stem: "Which geographic feature most shaped the way of life of the Inca?",
          choices: [
            { letter: "A", text: "the Yucatán Peninsula" },
            { letter: "B", text: "Lake Texcoco" },
            { letter: "C", text: "the Mississippi River" },
            { letter: "D", text: "the Andes Mountains" }
          ],
          correct: "D"
        },
        {
          id: "citystates",
          sol: "WHI.12.b",
          stem: "Unlike the Aztec and Inca, the Maya were organized as —",
          choices: [
            { letter: "A", text: "a single empire ruled from Cusco" },
            { letter: "B", text: "independent city-states with their own kings" },
            { letter: "C", text: "colonies ruled by Spain from the start" },
            { letter: "D", text: "nomadic bands that built no cities at all" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "amer-andes-farming",
      family: "AMER",
      title: "Farming on a mountainside",
      kind: "Maya, Aztec & Inca · WHI.12",
      blurb: "Altitude, terraces and freeze-dried potatoes in the Andes.",
      level: 2,
      passage: "<p>" + N(1) + "The Andes rise from a dry coastal desert to snowy peaks more than 20,000 feet high. " + N(2) + "Each zone of height, or <strong>altitude</strong>, has its own climate. " + N(3) + "Inca farmers grew maize in warm valleys and potatoes and quinoa higher up, and grazed llamas and alpacas near the peaks. " + N(4) + "To farm the slopes, they cut <strong>terraces</strong>, flat steps of soil held up by stone walls, and built canals to bring water from mountain streams. " + N(5) + "In the freezing nights and sunny days of the high country, they freeze-dried potatoes into chuño, which could be stored for years. " + N(6) + "Government storehouses along the roads held food for hard times.</p>",
      claims: [
        {
          id: "altitude",
          sol: "WHI.12.a",
          stem: "In sentence 2, the word altitude means —",
          choices: [
            { letter: "A", text: "height above sea level" },
            { letter: "B", text: "amount of yearly rainfall" },
            { letter: "C", text: "distance from the equator" },
            { letter: "D", text: "type of soil in a field" }
          ],
          correct: "A"
        },
        {
          id: "terraces",
          sol: "WHI.12.a",
          stem: "What was the main purpose of the terraces described in sentence 4?",
          choices: [
            { letter: "A", text: "to defend cities from invaders" },
            { letter: "B", text: "to mark the borders of the empire" },
            { letter: "C", text: "to create flat farmland on slopes" },
            { letter: "D", text: "to give priests a place to watch stars" }
          ],
          correct: "C"
        },
        {
          id: "zones",
          sol: "WHI.12.a",
          stem: "Which conclusion about Inca farming is best supported by the passage?",
          choices: [
            { letter: "A", text: "Inca farmers grew only maize in every zone." },
            { letter: "B", text: "The Andes had one climate from coast to peak." },
            { letter: "C", text: "Llamas were raised mainly in the coastal desert." },
            { letter: "D", text: "Farmers grew different crops at different heights." }
          ],
          correct: "D"
        },
        {
          id: "storehouses",
          sol: "WHI.12.b",
          stem: "The government storehouses in sentence 6 show that the Inca state —",
          choices: [
            { letter: "A", text: "had no interest in farming" },
            { letter: "B", text: "planned ahead to feed people" },
            { letter: "C", text: "traded its food to the Aztecs" },
            { letter: "D", text: "relied on supplies from Spain" }
          ],
          correct: "B"
        },
        {
          id: "seasons",
          sol: "WHI.12.d",
          stem: "The Maya and Aztecs also depended on farming. How did Mesoamerican calendars help their agriculture?",
          choices: [
            { letter: "A", text: "They marked the seasons, so farmers knew when to plant." },
            { letter: "B", text: "They told merchants when ships would arrive from Spain." },
            { letter: "C", text: "They set the dates for paying taxes to the Inca." },
            { letter: "D", text: "They replaced the need for irrigation canals." }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "amer-aztec-classes",
      family: "AMER",
      title: "The Aztec social pyramid",
      kind: "Maya, Aztec & Inca · WHI.12",
      blurb: "A diagram of Aztec social classes, described in words.",
      level: 2,
      passage: "<p>" + N(1) + "A diagram of Aztec society is drawn as a pyramid. " + N(2) + "At the top is the emperor, or <strong>tlatoani</strong>, who was believed to rule with the favor of the gods. " + N(3) + "Below him are nobles and priests, then warriors, and then the <strong>pochteca</strong>, merchants who traveled long distances and also gathered information for the emperor. " + N(4) + "The wide base holds commoners, who farmed, fished and made crafts, and below them landless laborers and slaves. " + N(5) + "A note explains that commoners could rise in rank by capturing enemies in battle, that people could become slaves through debt or crime, and that the children of slaves were born free.</p>",
      claims: [
        {
          id: "top",
          sol: "WHI.12.e",
          stem: "According to the diagram, who held the most power in Aztec society?",
          choices: [
            { letter: "A", text: "the high priests" },
            { letter: "B", text: "the emperor" },
            { letter: "C", text: "the leading warriors" },
            { letter: "D", text: "the pochteca merchants" }
          ],
          correct: "B"
        },
        {
          id: "pochteca",
          sol: "WHI.12.e",
          stem: "In sentence 3, the pochteca were —",
          choices: [
            { letter: "A", text: "priests who kept the sacred calendar" },
            { letter: "B", text: "farmers who worked the chinampas" },
            { letter: "C", text: "soldiers who guarded the causeways" },
            { letter: "D", text: "merchants who traveled long distances" }
          ],
          correct: "D"
        },
        {
          id: "mobility",
          sol: "WHI.12.e",
          stem: "Which conclusion about Aztec society is best supported by sentence 5?",
          choices: [
            { letter: "A", text: "Some people could change their social rank." },
            { letter: "B", text: "Slavery passed from parents to their children." },
            { letter: "C", text: "Commoners could never serve as warriors." },
            { letter: "D", text: "Merchants ranked above the emperor." }
          ],
          correct: "A"
        },
        {
          id: "captives",
          sol: "WHI.12.e",
          stem: "Aztec warriors tried to capture enemies in battle rather than kill them. What was the main reason?",
          choices: [
            { letter: "A", text: "to trade the captives to the Spanish" },
            { letter: "B", text: "to teach the captives the Nahuatl language" },
            { letter: "C", text: "to offer the captives in religious sacrifices" },
            { letter: "D", text: "to train the captives to serve as temple priests" }
          ],
          correct: "C"
        },
        {
          id: "tribute",
          sol: "WHI.12.b",
          stem: "The Aztecs collected cotton cloth, cacao, feathers and other goods from the peoples they conquered. These payments are called —",
          choices: [
            { letter: "A", text: "the mit'a" },
            { letter: "B", text: "tribute" },
            { letter: "C", text: "the encomienda" },
            { letter: "D", text: "feudal dues" }
          ],
          correct: "B"
        }
      ]
    },
    /* ---------- medium ---------- */
    {
      id: "amer-cortes",
      family: "AMER",
      title: "The fall of Tenochtitlan",
      kind: "Maya, Aztec & Inca · WHI.12",
      blurb: "A timeline of the Aztec Empire from its founding to the Spanish conquest.",
      level: 2,
      passage: "<ul><li><strong>1325</strong> The Mexica found Tenochtitlan on an island in Lake Texcoco.</li><li><strong>1428</strong> Tenochtitlan forms the <strong>Triple Alliance</strong> with the cities of Texcoco and Tlacopan and begins to conquer its neighbors.</li><li><strong>1519</strong> Hernán Cortés lands on the Gulf coast with about 500 soldiers, horses and guns. A Native woman, Malinche, becomes his <strong>interpreter</strong>.</li><li><strong>1519</strong> The Tlaxcalans, longtime enemies of the Aztecs, join Cortés. The Spanish enter Tenochtitlan as guests of the emperor Moctezuma II and soon hold him prisoner.</li><li><strong>1520</strong> Moctezuma dies in Spanish custody. The Aztecs drive the Spanish from the city. Smallpox spreads through the population.</li><li><strong>1521</strong> After a long siege, Tenochtitlan falls. The Spanish build Mexico City on its ruins.</li></ul>",
      claims: [
        {
          id: "order",
          sol: "WHI.12.b",
          stem: "Which of these events in Aztec history came FIRST?",
          choices: [
            { letter: "A", text: "Cortés lands on the Gulf coast." },
            { letter: "B", text: "Smallpox spreads through the city." },
            { letter: "C", text: "The Triple Alliance is formed." },
            { letter: "D", text: "Tenochtitlan falls after a siege." }
          ],
          correct: "C"
        },
        {
          id: "factors",
          sol: "WHI.12.b",
          stem: "Which TWO factors on the timeline best explain how a small Spanish force defeated the Aztec Empire? Select TWO.",
          choices: [
            { letter: "A", text: "alliances with Native enemies of the Aztecs" },
            { letter: "B", text: "a smallpox epidemic" },
            { letter: "C", text: "Spanish soldiers outnumbered Aztec warriors" },
            { letter: "D", text: "the Aztecs had no army of their own" }
          ],
          correct: ["A", "B"]
        },
        {
          id: "malinche",
          sol: "WHI.12.b",
          stem: "Why did Malinche's role as an interpreter matter so much to Cortés?",
          choices: [
            { letter: "A", text: "She led the Aztec army during the siege." },
            { letter: "B", text: "She designed the causeways to the city." },
            { letter: "C", text: "She ruled the Tlaxcalans as their queen." },
            { letter: "D", text: "She let him talk with Native leaders." }
          ],
          correct: "D"
        },
        {
          id: "enemies",
          sol: "WHI.12.e",
          stem: "The Tlaxcalans were longtime enemies of the Aztecs. Which Aztec practice most likely angered neighboring peoples?",
          choices: [
            { letter: "A", text: "teaching them to farm on chinampas" },
            { letter: "B", text: "sharing the Aztec calendar with them" },
            { letter: "C", text: "demanding tribute and war captives" },
            { letter: "D", text: "sending them gifts of gold and jade" }
          ],
          correct: "C"
        },
        {
          id: "smallpox",
          sol: "WHI.12.b",
          stem: "Which statement best describes the effect of smallpox on the Aztecs?",
          choices: [
            { letter: "A", text: "It killed many who had no immunity." },
            { letter: "B", text: "It struck only the Spanish soldiers." },
            { letter: "C", text: "It had no effect until the 1600s." },
            { letter: "D", text: "It forced the Spanish to leave Mexico." }
          ],
          correct: "A"
        },
        {
          id: "island",
          sol: "WHI.12.a",
          stem: "Before Cortés arrived, how did Tenochtitlan's island location help the Aztecs?",
          choices: [
            { letter: "A", text: "It gave them a port on the Pacific Ocean." },
            { letter: "B", text: "Water and causeways made it easy to defend." },
            { letter: "C", text: "It placed the city high in the Andes." },
            { letter: "D", text: "It kept all outside traders from the city." }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "amer-maya-calendar",
      family: "AMER",
      title: "Watching the sky",
      kind: "Maya, Aztec & Inca · WHI.12",
      blurb: "Maya astronomers, two calendars and a pyramid built to catch the sun.",
      level: 2,
      passage: "<p>" + N(1) + "Maya priests watched the sky from tall temples and from buildings such as the round tower at Chichén Itzá, which many scholars think served as an <strong>observatory</strong>. " + N(2) + "They tracked the cycles of the sun, the moon and Venus and recorded them in bark-paper books. " + N(3) + "The Maya used two calendars together. " + N(4) + "A 260-day sacred calendar set the dates of religious ceremonies, and a 365-day solar calendar followed the seasons. " + N(5) + "The two calendars lined up again only once every 52 years, a cycle the Aztecs also observed. " + N(6) + "Knowing when the rainy season would begin told farmers when to clear and plant their fields of maize, beans and squash. " + N(7) + "At the pyramid of Kukulcan at Chichén Itzá, the late-afternoon sun on the spring and fall <strong>equinoxes</strong> casts shadows that look like a serpent sliding down the stairs.</p>",
      claims: [
        {
          id: "observatory",
          sol: "WHI.12.d",
          stem: "In sentence 1, an observatory is —",
          choices: [
            { letter: "A", text: "a market for trading goods" },
            { letter: "B", text: "a place for studying the sky" },
            { letter: "C", text: "a school for young warriors" },
            { letter: "D", text: "a tomb for a dead ruler" }
          ],
          correct: "B"
        },
        {
          id: "solar",
          sol: "WHI.12.d",
          stem: "According to sentence 4, the 365-day calendar was mainly used to —",
          choices: [
            { letter: "A", text: "set the dates of religious ceremonies" },
            { letter: "B", text: "count the tribute owed to the ruler" },
            { letter: "C", text: "record trade with the Inca Empire" },
            { letter: "D", text: "follow the seasons of the year" }
          ],
          correct: "D"
        },
        {
          id: "farming",
          sol: "WHI.12.d",
          stem: "How did knowledge of the seasons help Maya agriculture?",
          choices: [
            { letter: "A", text: "Farmers could plant just before the rains began." },
            { letter: "B", text: "Farmers could grow their crops without any rain." },
            { letter: "C", text: "Farmers could stop planting maize entirely." },
            { letter: "D", text: "Farmers could sell their crops to Spain." }
          ],
          correct: "A"
        },
        {
          id: "cycle",
          sol: "WHI.12.d",
          stem: "According to sentence 5, how often did the two calendars line up?",
          choices: [
            { letter: "A", text: "once every 20 years" },
            { letter: "B", text: "once every 36 years" },
            { letter: "C", text: "once every 52 years" },
            { letter: "D", text: "once every 365 years" }
          ],
          correct: "C"
        },
        {
          id: "serpent",
          sol: "WHI.12.c",
          stem: "The shadow effect at the pyramid of Kukulcan best shows that Maya builders —",
          choices: [
            { letter: "A", text: "built their temples only for defense" },
            { letter: "B", text: "lined up buildings with the sun" },
            { letter: "C", text: "copied the design of Spanish churches" },
            { letter: "D", text: "knew nothing about the movements of the sun" }
          ],
          correct: "B"
        },
        {
          id: "books",
          sol: "WHI.12.b",
          stem: "Sentence 2 mentions Maya bark-paper books. What happened to most of these books after the Spanish conquest?",
          choices: [
            { letter: "A", text: "They were taken to Spain and kept safe." },
            { letter: "B", text: "They were rewritten in the Quechua language." },
            { letter: "C", text: "They were buried with Inca rulers." },
            { letter: "D", text: "Spanish priests burned most of them." }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "amer-inca-roads",
      family: "AMER",
      title: "Roads across the Andes",
      kind: "Maya, Aztec & Inca · WHI.12",
      blurb: "How the Inca held a long mountain empire together, and what a Spanish observer thought of their road.",
      level: 2,
      passage: "<p>" + N(1) + "Under Pachacuti, who began ruling about 1438, the Inca expanded from their capital at <strong>Cusco</strong> until their empire stretched about 2,500 miles along the Andes. " + N(2) + "To hold it together, they built a road network thousands of miles long, with rope suspension bridges over deep gorges and relay runners who carried messages. " + N(3) + "Instead of paying taxes in money, families owed the state labor, a system called the <strong>mit'a</strong>; men took turns building roads, farming state lands and serving in the army. " + N(4) + "Quechua became the official language across the empire.</p><blockquote>I believe that since the history of man there has been no account of such grandeur as is seen in this road, which passes over deep valleys and lofty mountains, by snowy heights and over falls of water.</blockquote><p class=\"src\">— Pedro de Cieza de León, Spanish soldier and chronicler, 1550s (adapted)</p>",
      claims: [
        {
          id: "pachacuti",
          sol: "WHI.12.b",
          stem: "According to sentence 1, the Inca Empire began its great expansion under —",
          choices: [
            { letter: "A", text: "Atahualpa" },
            { letter: "B", text: "Moctezuma" },
            { letter: "C", text: "Pachacuti" },
            { letter: "D", text: "Cortés" }
          ],
          correct: "C"
        },
        {
          id: "bridges",
          sol: "WHI.12.a",
          stem: "Why were rope suspension bridges necessary in the Inca Empire?",
          choices: [
            { letter: "A", text: "Roads had to cross deep mountain gorges." },
            { letter: "B", text: "The empire was built on a large lake." },
            { letter: "C", text: "The rain forest had no trees for wood." },
            { letter: "D", text: "The Spanish required them for horses." }
          ],
          correct: "A"
        },
        {
          id: "mita",
          sol: "WHI.12.e",
          stem: "In sentence 3, the mit'a was —",
          choices: [
            { letter: "A", text: "a tax paid in gold coins" },
            { letter: "B", text: "labor service owed to the state" },
            { letter: "C", text: "a religious festival for the sun" },
            { letter: "D", text: "a council of Inca nobles" }
          ],
          correct: "B"
        },
        {
          id: "hold",
          sol: "WHI.12.b",
          stem: "Which statement best explains how the road system helped the Inca rule a long, narrow empire?",
          choices: [
            { letter: "A", text: "It kept the Spanish from finding Cusco." },
            { letter: "B", text: "It replaced the need for an army." },
            { letter: "C", text: "It linked Cusco to the Aztec capital." },
            { letter: "D", text: "It moved troops and messages quickly." }
          ],
          correct: "D"
        },
        {
          id: "cieza",
          sol: "WHI.12.c",
          stem: "Cieza de León's point of view toward the Inca road is best described as —",
          choices: [
            { letter: "A", text: "admiration for its size and engineering" },
            { letter: "B", text: "anger at the great cost of building it" },
            { letter: "C", text: "doubt that the road really existed" },
            { letter: "D", text: "fear of the people who had built it" }
          ],
          correct: "A"
        },
        {
          id: "govt",
          sol: "WHI.12.e",
          stem: "Which conclusion about Inca government is best supported by the passage?",
          choices: [
            { letter: "A", text: "It let each village govern itself freely." },
            { letter: "B", text: "It depended on written laws in Spanish." },
            { letter: "C", text: "It was organized and controlled labor." },
            { letter: "D", text: "It had no contact with conquered peoples." }
          ],
          correct: "C"
        }
      ]
    },
    /* ---------- long ---------- */
    {
      id: "amer-two-views",
      family: "AMER",
      title: "Two views of Tenochtitlan",
      kind: "Maya, Aztec & Inca · WHI.12",
      blurb: "A Spanish soldier's first look at the Aztec capital, and Aztec memories of the sickness and siege.",
      level: 3,
      passage: "<p>" + N(1) + "In November 1519, Hernán Cortés and his soldiers first saw the Aztec capital. " + N(2) + "Years later, one of those soldiers, Bernal Díaz del Castillo, described the moment.</p><blockquote><strong>Source 1:</strong> When we saw so many cities and villages built in the water, and other great towns on dry land, and that straight and level causeway going toward the city, we were amazed. Some of our soldiers asked whether what we saw was a dream. ... Great towers and temples rose from the water, all built of stone.</blockquote><p class=\"src\">— Bernal Díaz del Castillo, The True History of the Conquest of New Spain (adapted)</p><blockquote><strong>Source 2:</strong> After the Spaniards were driven out, a great sickness spread through the city. Sores covered people's bodies; many could not move or care for one another, and many died. ... Later, during the siege, the people had no fresh water and little food.</blockquote><p class=\"src\">— Aztec accounts recorded in the Florentine Codex, 1500s (summary)</p><p>" + N(3) + "The Florentine Codex was put together by a Spanish friar, Bernardino de Sahagún, from interviews with Nahua elders, and was written in both Nahuatl and Spanish.</p>",
      claims: [
        {
          id: "diaz",
          sol: "WHI.12.b",
          stem: "What is Bernal Díaz's main point in Source 1?",
          choices: [
            { letter: "A", text: "The city looked small, poor and plain." },
            { letter: "B", text: "The city seemed weak and easy to attack." },
            { letter: "C", text: "The city was grander than they expected." },
            { letter: "D", text: "The soldiers wanted to go home to Spain." }
          ],
          correct: "C"
        },
        {
          id: "builders",
          sol: "WHI.12.c",
          stem: "Which detail in Source 1 best shows the skill of Aztec builders?",
          choices: [
            { letter: "A", text: "stone towers and temples rising from the water" },
            { letter: "B", text: "soldiers asking if what they saw was a dream" },
            { letter: "C", text: "other great towns standing on dry land" },
            { letter: "D", text: "the amazement felt by the Spanish soldiers" }
          ],
          correct: "A"
        },
        {
          id: "disease",
          sol: "WHI.12.b",
          stem: "How does Source 2 help explain the Spanish victory?",
          choices: [
            { letter: "A", text: "The Aztecs had welcomed help from the Inca." },
            { letter: "B", text: "Spanish ships had blocked the Pacific coast." },
            { letter: "C", text: "The Aztecs had no army to defend the city." },
            { letter: "D", text: "Disease weakened the city before the siege." }
          ],
          correct: "D"
        },
        {
          id: "value",
          sol: "WHI.12.b",
          stem: "Based on sentence 3, why is Source 2 especially valuable to historians?",
          choices: [
            { letter: "A", text: "It was written by Cortés to win the king's favor." },
            { letter: "B", text: "It records the conquest as the Aztecs remembered it." },
            { letter: "C", text: "It was carved in stone at the time of the siege." },
            { letter: "D", text: "It describes the Inca as well as the Aztecs." }
          ],
          correct: "B"
        },
        {
          id: "setting",
          sol: "WHI.12.a",
          stem: "Source 1 describes towns built in the water and a long causeway. Which setting does this describe?",
          choices: [
            { letter: "A", text: "a city built on an island in a lake" },
            { letter: "B", text: "terraced slopes high in the Andes" },
            { letter: "C", text: "a rain forest on the Yucatán Peninsula" },
            { letter: "D", text: "a desert along the Pacific coast" }
          ],
          correct: "A"
        },
        {
          id: "tlaloc",
          sol: "WHI.12.e",
          stem: "The Templo Mayor, the great temple of Tenochtitlan, honored Huitzilopochtli, god of the sun and war, and Tlaloc, a god of —",
          choices: [
            { letter: "A", text: "the sea and fishermen" },
            { letter: "B", text: "trade and merchants" },
            { letter: "C", text: "rain and fertility" },
            { letter: "D", text: "death and the underworld" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "amer-pizarro",
      family: "AMER",
      title: "The fall of the Inca",
      kind: "Maya, Aztec & Inca · WHI.12",
      blurb: "Disease, civil war and a small Spanish force at Cajamarca.",
      level: 3,
      passage: "<p>" + N(1) + "In the late 1520s, a smallpox epidemic spread into the Andes ahead of the Spanish and killed the Inca ruler Huayna Capac. " + N(2) + "Two of his sons, Atahualpa and Huáscar, then fought a <strong>civil war</strong> for the throne. " + N(3) + "Atahualpa had just won when Francisco Pizarro arrived in 1532 with fewer than 200 soldiers. " + N(4) + "At the town of Cajamarca, the Spanish attacked Atahualpa's mostly unarmed escort with guns, steel swords and horses, and took him prisoner. " + N(5) + "Atahualpa offered a <strong>ransom</strong>: a large room filled once with gold and twice with silver. " + N(6) + "The treasure was delivered, but the Spanish executed him in 1533 and soon captured Cusco. " + N(7) + "Some Inca leaders resisted from mountain strongholds for decades, until the last Inca ruler, Túpac Amaru, was executed in 1572.</p><p>" + N(8) + "Historians point out that the Inca Empire was huge and well organized, but it depended on obedience to one ruler. " + N(9) + "With that ruler captured, and the empire already divided by war and weakened by disease, a small force could take control.</p>",
      claims: [
        {
          id: "before",
          sol: "WHI.12.b",
          stem: "Which of these happened before Pizarro arrived in 1532?",
          choices: [
            { letter: "A", text: "the capture of Atahualpa at Cajamarca" },
            { letter: "B", text: "the war between Atahualpa and Huáscar" },
            { letter: "C", text: "the execution of the ruler Túpac Amaru" },
            { letter: "D", text: "the capture of the Inca capital, Cusco" }
          ],
          correct: "B"
        },
        {
          id: "civilwar",
          sol: "WHI.12.b",
          stem: "In sentence 2, a civil war is —",
          choices: [
            { letter: "A", text: "a war between two separate empires" },
            { letter: "B", text: "a war fought only at sea" },
            { letter: "C", text: "a war against a foreign invader" },
            { letter: "D", text: "a war between groups in one country" }
          ],
          correct: "D"
        },
        {
          id: "factors",
          sol: "WHI.12.b",
          stem: "Which TWO factors most helped the Spanish conquer the Inca Empire? Select TWO.",
          choices: [
            { letter: "A", text: "a civil war that had divided the empire" },
            { letter: "B", text: "a Spanish army of many thousands" },
            { letter: "C", text: "smallpox that had killed the ruler and many others" },
            { letter: "D", text: "Inca roads that had fallen into ruin" }
          ],
          correct: ["A", "C"]
        },
        {
          id: "ruler",
          sol: "WHI.12.b",
          stem: "According to sentences 8 and 9, why did capturing Atahualpa have such a large effect?",
          choices: [
            { letter: "A", text: "Atahualpa was the only Inca who could fight." },
            { letter: "B", text: "The empire depended on obeying one ruler." },
            { letter: "C", text: "Cusco had no buildings left to defend." },
            { letter: "D", text: "The Inca had already surrendered to the Aztecs." }
          ],
          correct: "B"
        },
        {
          id: "holdout",
          sol: "WHI.12.a",
          stem: "Some Inca leaders resisted from mountain strongholds for decades. Which geographic feature most helped them hold out?",
          choices: [
            { letter: "A", text: "the open coastal desert" },
            { letter: "B", text: "the flat grasslands of the east" },
            { letter: "C", text: "the causeways of Lake Texcoco" },
            { letter: "D", text: "the steep, remote Andes" }
          ],
          correct: "D"
        },
        {
          id: "sapa",
          sol: "WHI.12.e",
          stem: "The Inca ruler was called the Sapa Inca. Inca people believed that he was —",
          choices: [
            { letter: "A", text: "a Spanish noble chosen by the king" },
            { letter: "B", text: "an elected leader who served one year" },
            { letter: "C", text: "a descendant of Inti, the sun god" },
            { letter: "D", text: "a priest of the Maya rain god" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "amer-builders",
      family: "AMER",
      title: "Temples, stories and gods",
      kind: "Maya, Aztec & Inca · WHI.12",
      blurb: "A table comparing the building, record keeping, religion and rulers of the three civilizations.",
      level: 3,
      passage: "<p>" + N(1) + "The table compares the building traditions, records and beliefs of the three civilizations of the Americas.</p><table><tr><th></th><th>Maya</th><th>Aztec</th><th>Inca</th></tr><tr><td>Famous sites</td><td>stepped pyramids and ball courts at Tikal and Chichén Itzá</td><td>the Templo Mayor, a twin-temple pyramid in Tenochtitlan</td><td>Machu Picchu; stone walls in Cusco fitted without mortar</td></tr><tr><td>Records and stories</td><td>glyph writing on stone and in bark-paper books; the <strong>Popol Vuh</strong></td><td>painted books called codices; poems and songs</td><td>quipus; histories memorized and recited</td></tr><tr><td>Religion</td><td>many gods; kings led ceremonies, including bloodletting</td><td>many gods, including Huitzilopochtli; human sacrifice</td><td>many gods; Inti, the sun god, and the Sapa Inca as his descendant</td></tr><tr><td>Rulers</td><td>kings of separate city-states</td><td>an emperor over conquered cities that paid tribute</td><td>the Sapa Inca, ruler of a unified empire</td></tr></table><p>" + N(2) + "The Popol Vuh, a sacred book of the K'iche' Maya written down in the 1550s, tells how the gods made the first people from maize dough after earlier attempts failed; it also tells of hero twins who defeated the lords of the underworld.</p>",
      claims: [
        {
          id: "memory",
          sol: "WHI.12.c",
          stem: "According to the table, which civilization kept its history mainly through memory and knotted cords rather than writing?",
          choices: [
            { letter: "A", text: "the Maya" },
            { letter: "B", text: "the Aztec" },
            { letter: "C", text: "the Inca" },
            { letter: "D", text: "none of the three" }
          ],
          correct: "C"
        },
        {
          id: "popol",
          sol: "WHI.12.c",
          stem: "In sentence 2, the Popol Vuh is best described as —",
          choices: [
            { letter: "A", text: "a sacred book of Maya creation stories" },
            { letter: "B", text: "a record of the tribute paid to the Aztecs" },
            { letter: "C", text: "a map of the roads of the Inca Empire" },
            { letter: "D", text: "a code of laws written by Spanish judges" }
          ],
          correct: "A"
        },
        {
          id: "religion",
          sol: "WHI.12.e",
          stem: "Which statement about religion is supported by the table?",
          choices: [
            { letter: "A", text: "Only the Inca believed in more than one god." },
            { letter: "B", text: "The Aztecs worshiped a single god." },
            { letter: "C", text: "The Maya held no religious ceremonies." },
            { letter: "D", text: "All three civilizations worshiped many gods." }
          ],
          correct: "D"
        },
        {
          id: "rulers",
          sol: "WHI.12.e",
          stem: "Which statement best compares the political organization of the Maya and the Inca?",
          choices: [
            { letter: "A", text: "The Maya had one emperor; the Inca had many separate kings." },
            { letter: "B", text: "The Maya formed separate city-states; the Inca built one empire." },
            { letter: "C", text: "Both were ruled by Spanish governors well before the year 1500." },
            { letter: "D", text: "Both chose all of their leaders through elections held every year." }
          ],
          correct: "B"
        },
        {
          id: "walls",
          sol: "WHI.12.c",
          stem: "Inca stone walls fitted without mortar have survived centuries of earthquakes. This best shows —",
          choices: [
            { letter: "A", text: "the skill of Inca stone builders" },
            { letter: "B", text: "that the Spanish later rebuilt the walls" },
            { letter: "C", text: "that the Andes have never had earthquakes" },
            { letter: "D", text: "the help of engineers from Rome" }
          ],
          correct: "A"
        },
        {
          id: "venus",
          sol: "WHI.12.d",
          stem: "Maya priests who led ceremonies were also astronomers. Which achievement shows Maya skill in astronomy?",
          choices: [
            { letter: "A", text: "building roads across the Andes" },
            { letter: "B", text: "inventing the knotted quipu" },
            { letter: "C", text: "draining the waters of Lake Texcoco" },
            { letter: "D", text: "tracking the movements of Venus" }
          ],
          correct: "D"
        }
      ]
    }
  ];

  for (var i = 0; i < PACKS.length; i++) P.push(PACKS[i]);
})(typeof window !== "undefined" ? window : global);
