/* SOL Lab — World History II · Exploration & Colonization (WHII.3). Original text only. */
(function (global) {
  var P = global.HEIST_PACKS;
  if (!P || !P.push) return;
  var N = function (i) { return '<span class="n">(' + i + ')</span> '; };   // numbered sentence

  var PACKS = [
    /* ---------- tiny ---------- */
    {
      id: "expl-god-gold-glory",
      family: "EXPL",
      title: "God, gold and glory",
      kind: "Exploration & Colonization · WHII.3",
      blurb: "Three words that sum up why Europeans sailed.",
      level: 1,
      passage: "<p>" + N(1) + "Historians often sum up the <strong>motives</strong> of European explorers in the 1400s and 1500s as \"God, gold and glory.\" " + N(2) + "Explorers and rulers hoped to spread Christianity to new peoples. " + N(3) + "They wanted gold, silver and a direct sea route to the valuable spices of Asia. " + N(4) + "Monarchs and sailors also sought fame and power for themselves and their nations.</p>",
      claims: [
        {
          id: "god",
          sol: "WHII.3.a",
          stem: "Which goal does the word God stand for in the phrase \"God, gold and glory\"?",
          choices: [
            { letter: "A", text: "building churches only in Europe" },
            { letter: "B", text: "spreading Christianity to new peoples" },
            { letter: "C", text: "ending the power of the pope" },
            { letter: "D", text: "protecting sailors from storms" }
          ],
          correct: "B"
        },
        {
          id: "gold",
          sol: "WHII.3.a",
          stem: "Which was an economic goal of European exploration?",
          choices: [
            { letter: "A", text: "winning fame for the ship's captain" },
            { letter: "B", text: "converting rulers to Christianity" },
            { letter: "C", text: "mapping the stars of the southern sky" },
            { letter: "D", text: "reaching Asian spices without middlemen" }
          ],
          correct: "D"
        },
        {
          id: "glory",
          sol: "WHII.3.a",
          stem: "According to sentence 4, monarchs sponsored voyages partly to —",
          choices: [
            { letter: "A", text: "gain fame and power over rival nations" },
            { letter: "B", text: "escape religious wars at home" },
            { letter: "C", text: "find new lands for farmers to settle" },
            { letter: "D", text: "learn the languages of Asia" }
          ],
          correct: "A"
        },
        {
          id: "motives",
          sol: "WHII.3.a",
          stem: "In sentence 1, the word motives most nearly means —",
          choices: [
            { letter: "A", text: "ships" },
            { letter: "B", text: "maps" },
            { letter: "C", text: "reasons" },
            { letter: "D", text: "rewards" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "expl-sailing-tools",
      family: "EXPL",
      title: "Tools for the open ocean",
      kind: "Exploration & Colonization · WHII.3",
      blurb: "Caravels, astrolabes and compasses.",
      level: 1,
      passage: "<p>" + N(1) + "New tools made long ocean voyages possible. " + N(2) + "The <strong>caravel</strong>, a small, fast Portuguese ship with triangular sails, could sail closer into the wind than older ships. " + N(3) + "The astrolabe let sailors find their latitude by measuring the height of the sun or stars. " + N(4) + "The magnetic compass, which reached Europe from China, showed direction. " + N(5) + "Prince Henry of Portugal, called \"the Navigator,\" paid for voyages along Africa's west coast.</p>",
      claims: [
        {
          id: "astrolabe",
          sol: "WHII.3.a",
          stem: "Sailors used the astrolabe to —",
          choices: [
            { letter: "A", text: "measure the depth of the water" },
            { letter: "B", text: "signal other ships at night" },
            { letter: "C", text: "find their latitude at sea" },
            { letter: "D", text: "steer the ship in a storm" }
          ],
          correct: "C"
        },
        {
          id: "caravel",
          sol: "WHII.3.a",
          stem: "In sentence 2, a caravel is —",
          choices: [
            { letter: "A", text: "a light, fast sailing ship" },
            { letter: "B", text: "a map of ocean currents" },
            { letter: "C", text: "a tool for telling time" },
            { letter: "D", text: "a fort on the coast of Africa" }
          ],
          correct: "A"
        },
        {
          id: "portugal",
          sol: "WHII.3.a",
          stem: "Which country led the earliest European voyages along the west coast of Africa?",
          choices: [
            { letter: "A", text: "England" },
            { letter: "B", text: "France" },
            { letter: "C", text: "the Netherlands" },
            { letter: "D", text: "Portugal" }
          ],
          correct: "D"
        },
        {
          id: "compass",
          sol: "WHII.3.a",
          stem: "Which conclusion is best supported by sentence 4?",
          choices: [
            { letter: "A", text: "Europeans invented every tool they used at sea." },
            { letter: "B", text: "European sailing borrowed technology from Asia." },
            { letter: "C", text: "The compass was first used by Prince Henry." },
            { letter: "D", text: "Chinese sailors reached Portugal before 1400." }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "expl-exchange-table",
      family: "EXPL",
      title: "The Columbian Exchange",
      kind: "Exploration & Colonization · WHII.3",
      blurb: "Corn east, horses west, and diseases that changed two hemispheres.",
      level: 1,
      passage: "<p>" + N(1) + "The <strong>Columbian Exchange</strong> was the transfer of plants, animals, people and diseases between the Eastern and Western Hemispheres after 1492.</p>" +
        "<table><tr><th>From the Americas</th><th>To the Americas</th></tr>" +
        "<tr><td>Corn (maize), potatoes</td><td>Wheat, rice, sugarcane</td></tr>" +
        "<tr><td>Tomatoes, cacao, tobacco</td><td>Horses, cattle, pigs</td></tr>" +
        "<tr><td>Squash, beans, peppers</td><td>Smallpox, measles</td></tr></table>",
      claims: [
        {
          id: "horses",
          sol: "WHII.3.b",
          stem: "According to the table, which animals were brought to the Americas?",
          choices: [
            { letter: "A", text: "llamas and turkeys" },
            { letter: "B", text: "bison and deer" },
            { letter: "C", text: "jaguars and alpacas" },
            { letter: "D", text: "horses and cattle" }
          ],
          correct: "D"
        },
        {
          id: "potatoes",
          sol: "WHII.3.b",
          stem: "Which was a result of potatoes and corn reaching Europe, Africa and Asia?",
          choices: [
            { letter: "A", text: "Food supplies and populations grew." },
            { letter: "B", text: "Europeans stopped growing wheat." },
            { letter: "C", text: "Famine became more common in Europe." },
            { letter: "D", text: "Trade with the Americas came to an end." }
          ],
          correct: "A"
        },
        {
          id: "smallpox",
          sol: "WHII.3.b",
          stem: "Why did diseases such as smallpox kill so many Indigenous people in the Americas?",
          choices: [
            { letter: "A", text: "Europeans spread them on purpose in every colony." },
            { letter: "B", text: "Indigenous people had no immunity to them." },
            { letter: "C", text: "The diseases came from American crops." },
            { letter: "D", text: "Indigenous people refused to eat European foods." }
          ],
          correct: "B"
        },
        {
          id: "exchange",
          sol: "WHII.3.b",
          stem: "In sentence 1, the word Exchange shows that goods and living things —",
          choices: [
            { letter: "A", text: "moved only from Europe to the Americas" },
            { letter: "B", text: "were sold only to Christopher Columbus" },
            { letter: "C", text: "moved in both directions across the ocean" },
            { letter: "D", text: "stayed in their original hemisphere" }
          ],
          correct: "C"
        }
      ]
    },

    /* ---------- short ---------- */
    {
      id: "expl-voyages-timeline",
      family: "EXPL",
      title: "Voyages of exploration",
      kind: "Exploration & Colonization · WHII.3",
      blurb: "From the Cape of Good Hope to the Hudson River.",
      level: 1,
      passage: "<p>" + N(1) + "Major voyages and the countries that <strong>sponsored</strong> them:</p><ul>" +
        "<li><strong>1488</strong> Bartolomeu Dias (Portugal) rounds the Cape of Good Hope at the southern tip of Africa</li>" +
        "<li><strong>1492</strong> Christopher Columbus (Spain) reaches the Caribbean</li>" +
        "<li><strong>1498</strong> Vasco da Gama (Portugal) reaches India by sailing around Africa</li>" +
        "<li><strong>1519–1522</strong> Ferdinand Magellan's expedition (Spain) sails around the world</li>" +
        "<li><strong>1534</strong> Jacques Cartier (France) explores the St. Lawrence River</li>" +
        "<li><strong>1609</strong> Henry Hudson (Netherlands) explores the river later named for him</li></ul>",
      claims: [
        {
          id: "earliest",
          sol: "WHII.3.a",
          stem: "Which of these voyages took place earliest?",
          choices: [
            { letter: "A", text: "Cartier's voyage up the St. Lawrence" },
            { letter: "B", text: "Hudson's voyage for the Dutch" },
            { letter: "C", text: "Magellan's voyage around the world" },
            { letter: "D", text: "Columbus's voyage to the Caribbean" }
          ],
          correct: "D"
        },
        {
          id: "route",
          sol: "WHII.3.a",
          stem: "The voyages of Dias and da Gama show that Portugal's main goal was to —",
          choices: [
            { letter: "A", text: "find an all-water route to Asia around Africa" },
            { letter: "B", text: "build colonies in the Caribbean islands" },
            { letter: "C", text: "find a northern route through Canada" },
            { letter: "D", text: "conquer the Aztec and Inca empires" }
          ],
          correct: "A"
        },
        {
          id: "leaders",
          sol: "WHII.3.c",
          stem: "Which conclusion is best supported by the timeline?",
          choices: [
            { letter: "A", text: "France sponsored the first voyages to Asia." },
            { letter: "B", text: "Spain and Portugal led before France and the Dutch." },
            { letter: "C", text: "The Netherlands explored South America first." },
            { letter: "D", text: "Each voyage was sponsored by the same monarch." }
          ],
          correct: "B"
        },
        {
          id: "sponsored",
          sol: "WHII.3.a",
          stem: "In sentence 1, a country that sponsored a voyage —",
          choices: [
            { letter: "A", text: "tried to stop it from sailing" },
            { letter: "B", text: "was the place it was going" },
            { letter: "C", text: "paid for and supported it" },
            { letter: "D", text: "was later conquered by it" }
          ],
          correct: "C"
        },
        {
          id: "magellan",
          sol: "WHII.3.a",
          stem: "What did the voyage of Magellan's expedition demonstrate?",
          choices: [
            { letter: "A", text: "that Asia could not be reached by sea" },
            { letter: "B", text: "that Africa was larger than the Americas" },
            { letter: "C", text: "that Spain had no interest in Asia" },
            { letter: "D", text: "that ships could sail around the world" }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "expl-tordesillas",
      family: "EXPL",
      title: "A line across the ocean",
      kind: "Exploration & Colonization · WHII.3",
      blurb: "The Treaty of Tordesillas splits the world between two kingdoms.",
      level: 2,
      passage: "<p>" + N(1) + "After Columbus's first voyage, Spain and Portugal both claimed newly reached lands. " + N(2) + "In 1494 the Treaty of Tordesillas drew a <strong>line of demarcation</strong> running north to south through the Atlantic Ocean, west of the Cape Verde Islands. " + N(3) + "Spain could claim lands west of the line, and Portugal lands to the east. " + N(4) + "On a map, the line cuts through the eastern bulge of South America, leaving most of the Americas on the Spanish side. " + N(5) + "England, France and the Netherlands refused to accept the treaty.</p>",
      claims: [
        {
          id: "demarcation",
          sol: "WHII.3.c",
          stem: "In sentence 2, a line of demarcation is —",
          choices: [
            { letter: "A", text: "a route followed by trading ships" },
            { letter: "B", text: "a boundary that divides claims" },
            { letter: "C", text: "a chain of forts along a coast" },
            { letter: "D", text: "a list of goods a colony may sell" }
          ],
          correct: "B"
        },
        {
          id: "brazil",
          sol: "WHII.3.b",
          stem: "Based on sentence 4, why is Portuguese the main language of Brazil today?",
          choices: [
            { letter: "A", text: "Brazil lay east of the line, so Portugal colonized it." },
            { letter: "B", text: "Portugal bought Brazil from England in 1494." },
            { letter: "C", text: "Columbus claimed Brazil for Portugal in 1492." },
            { letter: "D", text: "Spain gave Brazil to Portugal after a war." }
          ],
          correct: "A"
        },
        {
          id: "rivals",
          sol: "WHII.3.c",
          stem: "Sentence 5 best explains why —",
          choices: [
            { letter: "A", text: "Spain and Portugal later became one kingdom" },
            { letter: "B", text: "the treaty ended all conflict over colonies" },
            { letter: "C", text: "only Spain founded colonies in North America" },
            { letter: "D", text: "other nations later competed for American colonies" }
          ],
          correct: "D"
        },
        {
          id: "spanish",
          sol: "WHII.3.c",
          stem: "Which conclusion about the treaty is supported by the map description?",
          choices: [
            { letter: "A", text: "Portugal received most lands in the Americas." },
            { letter: "B", text: "The treaty gave Africa to Spain." },
            { letter: "C", text: "Spain received most lands in the Americas." },
            { letter: "D", text: "The line ran east to west across Europe." }
          ],
          correct: "C"
        },
        {
          id: "political",
          sol: "WHII.3.a",
          stem: "The treaty most clearly reflects which goal of exploration?",
          choices: [
            { letter: "A", text: "learning about Indigenous religions" },
            { letter: "B", text: "claiming lands to increase royal power" },
            { letter: "C", text: "ending the trade in spices" },
            { letter: "D", text: "escaping persecution at home" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "expl-mercantilism",
      family: "EXPL",
      title: "Colonies and mercantilism",
      kind: "Exploration & Colonization · WHII.3",
      blurb: "Gold, a favorable balance of trade and a cow in the Atlantic.",
      level: 2,
      passage: "<p>" + N(1) + "As colonies grew, European nations followed an economic policy called <strong>mercantilism</strong>. " + N(2) + "Mercantilists believed a nation's power depended on its wealth, especially gold and silver. " + N(3) + "A nation tried to export more than it imported, creating a favorable balance of trade. " + N(4) + "Colonies supplied raw materials such as sugar, tobacco and furs, and they bought manufactured goods from the home country. " + N(5) + "A cartoon in the style of the period shows a cow standing in the Atlantic Ocean: it grazes on American grass while a merchant in London milks it.</p>",
      claims: [
        {
          id: "define",
          sol: "WHII.3.c",
          stem: "In sentence 1, mercantilism is best described as —",
          choices: [
            { letter: "A", text: "a system in which colonies governed themselves" },
            { letter: "B", text: "a policy of open trade with all nations" },
            { letter: "C", text: "a religious movement among merchants" },
            { letter: "D", text: "a policy of building national wealth through trade" }
          ],
          correct: "D"
        },
        {
          id: "colonies",
          sol: "WHII.3.c",
          stem: "Under mercantilism, the main role of colonies was to —",
          choices: [
            { letter: "A", text: "supply raw materials and buy the home country's goods" },
            { letter: "B", text: "manufacture goods to compete with the home country" },
            { letter: "C", text: "trade freely with any nation they chose" },
            { letter: "D", text: "send settlers back to Europe each year" }
          ],
          correct: "A"
        },
        {
          id: "balance",
          sol: "WHII.3.c",
          stem: "A nation has a favorable balance of trade when it —",
          choices: [
            { letter: "A", text: "imports more goods than it exports" },
            { letter: "B", text: "trades only with its own colonies" },
            { letter: "C", text: "exports more goods than it imports" },
            { letter: "D", text: "stops using gold and silver" }
          ],
          correct: "C"
        },
        {
          id: "cartoon",
          sol: "WHII.3.c",
          stem: "The cartoonist's main point is that —",
          choices: [
            { letter: "A", text: "the colonies' wealth flows to the home country" },
            { letter: "B", text: "American farmers raise the best cattle" },
            { letter: "C", text: "London depends on the colonies for milk alone" },
            { letter: "D", text: "the colonies and Britain share profits equally" }
          ],
          correct: "A"
        },
        {
          id: "silver",
          sol: "WHII.3.a",
          stem: "Why did Spain place such high value on the silver mines of its American colonies?",
          choices: [
            { letter: "A", text: "Silver was needed to build Spanish ships." },
            { letter: "B", text: "Gold and silver were seen as the measure of a nation's power." },
            { letter: "C", text: "The pope required Spain to pay him in silver." },
            { letter: "D", text: "Silver could be traded only within Spain." }
          ],
          correct: "B"
        }
      ]
    },

    /* ---------- medium ---------- */
    {
      id: "expl-encomienda-debate",
      family: "EXPL",
      title: "Debating the encomienda",
      kind: "Exploration & Colonization · WHII.3",
      blurb: "Las Casas and Sepúlveda argue over the treatment of Indigenous people.",
      level: 3,
      passage: "<p>" + N(1) + "Under the <strong>encomienda</strong> system, the Spanish crown gave colonists the right to demand labor or tribute from the Indigenous people of an area; in return, colonists were supposed to protect them and teach them Christianity. " + N(2) + "In practice, many Indigenous people were forced to work in mines and fields, and huge numbers died. " + N(3) + "In 1550–1551, Spanish officials heard a famous debate at Valladolid.</p>" +
        "<p><strong>Source A</strong></p><blockquote><p>The friar Bartolomé de las Casas described the cruelty of Spanish colonists, argued that Indigenous people were fully human and capable of reason, and insisted that they be brought to Christianity only by peaceful persuasion.</p></blockquote>" +
        "<p><strong>Source B</strong></p><blockquote><p>The scholar Juan Ginés de Sepúlveda argued that war against Indigenous peoples was just, because conquest would bring them Christianity and European ways of life.</p></blockquote>" +
        "<p class=\"src\">— Summaries of the arguments at Valladolid</p>",
      claims: [
        {
          id: "encomienda",
          sol: "WHII.3.b",
          stem: "In sentence 1, the encomienda system gave Spanish colonists —",
          choices: [
            { letter: "A", text: "the right to demand labor from Indigenous people" },
            { letter: "B", text: "land that Indigenous people had sold to them" },
            { letter: "C", text: "the duty to pay wages to Indigenous farmers" },
            { letter: "D", text: "control over Spain's royal treasury" }
          ],
          correct: "A"
        },
        {
          id: "lascasas",
          sol: "WHII.3.b",
          stem: "The author of Source A would most likely support —",
          choices: [
            { letter: "A", text: "more encomienda grants to colonists" },
            { letter: "B", text: "laws to limit the abuse of Indigenous workers" },
            { letter: "C", text: "a war to conquer the remaining Indigenous peoples" },
            { letter: "D", text: "ending all Spanish missionary work" }
          ],
          correct: "B"
        },
        {
          id: "sepulveda",
          sol: "WHII.3.a",
          stem: "Source B shows how which goal of colonization was used to justify conquest?",
          choices: [
            { letter: "A", text: "the search for a sea route to Asia" },
            { letter: "B", text: "the desire to find gold and silver" },
            { letter: "C", text: "the wish to spread Christianity" },
            { letter: "D", text: "the need for new markets for goods" }
          ],
          correct: "C"
        },
        {
          id: "both",
          sol: "WHII.3.b",
          stem: "Which statement describes BOTH Source A and Source B?",
          choices: [
            { letter: "A", text: "Both say Indigenous peoples should keep their own religions." },
            { letter: "B", text: "Both call for Spain to leave the Americas." },
            { letter: "C", text: "Both praise the encomienda system as fair." },
            { letter: "D", text: "Both want Indigenous people to become Christians." }
          ],
          correct: "D"
        },
        {
          id: "differ",
          sol: "WHII.3.b",
          stem: "On which question did the two sources most clearly disagree?",
          choices: [
            { letter: "A", text: "whether force could be used to convert Indigenous people" },
            { letter: "B", text: "whether Spain had sent ships to the Americas" },
            { letter: "C", text: "whether Christianity should be taught at all" },
            { letter: "D", text: "whether silver had been found in the colonies" }
          ],
          correct: "A"
        },
        {
          id: "labor",
          sol: "WHII.3.c",
          stem: "Spanish colonists valued the encomienda mainly because it —",
          choices: [
            { letter: "A", text: "paid them wages from the royal treasury" },
            { letter: "B", text: "let them trade freely with France" },
            { letter: "C", text: "supplied forced labor for mines and fields" },
            { letter: "D", text: "freed them from serving the Spanish crown" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "expl-aztec-inca",
      family: "EXPL",
      title: "The fall of the Aztec and Inca",
      kind: "Exploration & Colonization · WHII.3",
      blurb: "Small Spanish forces topple two great empires.",
      level: 2,
      passage: "<p>" + N(1) + "In 1519 the Spanish <strong>conquistador</strong> Hernán Cortés landed in Mexico with a few hundred soldiers. " + N(2) + "Thousands of warriors from the Tlaxcalans and other peoples who resented Aztec rule joined him. " + N(3) + "A smallpox epidemic swept through the Aztec capital, Tenochtitlan, which fell in 1521. " + N(4) + "In 1532 Francisco Pizarro reached the Inca Empire, which had been weakened by disease and by a civil war between two brothers who claimed the throne. " + N(5) + "Pizarro captured the Inca ruler Atahualpa and later had him executed. " + N(6) + "Steel swords, guns and horses also gave the Spanish an advantage. " + N(7) + "Spain built Mexico City on the ruins of Tenochtitlan, and silver from Mexico and Peru soon flowed to Spain.</p>",
      claims: [
        {
          id: "conquistador",
          sol: "WHII.3.a",
          stem: "In sentence 1, a conquistador was —",
          choices: [
            { letter: "A", text: "an Aztec priest" },
            { letter: "B", text: "a Portuguese merchant" },
            { letter: "C", text: "an Inca road builder" },
            { letter: "D", text: "a Spanish conqueror" }
          ],
          correct: "D"
        },
        {
          id: "why",
          sol: "WHII.3.b",
          stem: "Which TWO factors from the passage best explain the Spanish defeat of the Aztec? Select TWO.",
          choices: [
            { letter: "A", text: "the spread of smallpox" },
            { letter: "B", text: "a much larger Spanish army" },
            { letter: "C", text: "help from Indigenous allies" },
            { letter: "D", text: "an Aztec alliance with Portugal" }
          ],
          correct: ["A", "C"]
        },
        {
          id: "allies",
          sol: "WHII.3.b",
          stem: "Sentence 2 shows that some Indigenous peoples responded to the Spanish by —",
          choices: [
            { letter: "A", text: "fleeing to the islands of the Caribbean" },
            { letter: "B", text: "joining them against the Aztec rulers" },
            { letter: "C", text: "asking Portugal to protect them" },
            { letter: "D", text: "converting at once to Christianity" }
          ],
          correct: "B"
        },
        {
          id: "goal",
          sol: "WHII.3.a",
          stem: "Which goal most motivated conquistadors such as Cortés and Pizarro?",
          choices: [
            { letter: "A", text: "the search for gold and riches" },
            { letter: "B", text: "the hope of a northern sea route" },
            { letter: "C", text: "the wish to escape religious wars" },
            { letter: "D", text: "the need for farmland in Spain" }
          ],
          correct: "A"
        },
        {
          id: "culture",
          sol: "WHII.3.b",
          stem: "Which was a lasting cultural effect of the Spanish conquest?",
          choices: [
            { letter: "A", text: "The Aztec language replaced Spanish in Spain." },
            { letter: "B", text: "Islam became the main religion of Mexico." },
            { letter: "C", text: "Spanish and Catholicism spread across Latin America." },
            { letter: "D", text: "The Inca road system was extended into Europe." }
          ],
          correct: "C"
        },
        {
          id: "silver",
          sol: "WHII.3.c",
          stem: "How did the events in sentence 7 affect Spain's position in Europe?",
          choices: [
            { letter: "A", text: "Spain lost its colonies to France." },
            { letter: "B", text: "American silver made Spain a wealthy, powerful state." },
            { letter: "C", text: "Spain stopped trading with Asia and Africa." },
            { letter: "D", text: "Spain became too poor to build a navy." }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "expl-joint-stock",
      family: "EXPL",
      title: "Sharing the risk",
      kind: "Exploration & Colonization · WHII.3",
      blurb: "Joint-stock companies, Jamestown and the Commercial Revolution.",
      level: 2,
      passage: "<p>" + N(1) + "Overseas voyages were costly and risky; a single lost ship could ruin an investor. " + N(2) + "To share the risk, merchants formed <strong>joint-stock companies</strong>, businesses in which many investors bought shares and divided the profits or losses. " + N(3) + "The English East India Company was chartered in 1600, and the Dutch East India Company in 1602. " + N(4) + "The Dutch company seized control of much of the spice trade of the East Indies, forcing local rulers to sell spices only to the Dutch. " + N(5) + "In 1606 the Virginia Company of London received a charter, and in 1607 its colonists founded Jamestown, the first permanent English settlement in North America. " + N(6) + "Banking and insurance grew to handle the new flow of money, and Amsterdam and London became financial centers. " + N(7) + "Historians call these changes the Commercial Revolution.</p>",
      claims: [
        {
          id: "jointstock",
          sol: "WHII.3.c",
          stem: "In sentence 2, a joint-stock company is a business that —",
          choices: [
            { letter: "A", text: "is owned and run by a single monarch" },
            { letter: "B", text: "trades only in livestock and farm goods" },
            { letter: "C", text: "is owned by many investors who share profits" },
            { letter: "D", text: "is forbidden to trade outside Europe" }
          ],
          correct: "C"
        },
        {
          id: "invest",
          sol: "WHII.3.c",
          stem: "Why would a merchant choose to buy shares instead of paying for a whole voyage alone?",
          choices: [
            { letter: "A", text: "Shares let him avoid paying any taxes." },
            { letter: "B", text: "Buying shares spread the risk of losing everything." },
            { letter: "C", text: "Shares guaranteed that every voyage made a profit." },
            { letter: "D", text: "Only shareholders were allowed to sail on ships." }
          ],
          correct: "B"
        },
        {
          id: "jamestown",
          sol: "WHII.3.c",
          stem: "Jamestown, Virginia, was founded by —",
          choices: [
            { letter: "A", text: "the Virginia Company of London" },
            { letter: "B", text: "the Dutch East India Company" },
            { letter: "C", text: "Spanish conquistadors" },
            { letter: "D", text: "French fur traders" }
          ],
          correct: "A"
        },
        {
          id: "spice",
          sol: "WHII.3.b",
          stem: "According to sentence 4, the Dutch East India Company affected the East Indies by —",
          choices: [
            { letter: "A", text: "ending the spice trade in the region" },
            { letter: "B", text: "giving local rulers control of Dutch ships" },
            { letter: "C", text: "opening the region to every European nation" },
            { letter: "D", text: "forcing local rulers to sell only to the Dutch" }
          ],
          correct: "D"
        },
        {
          id: "commercial",
          sol: "WHII.3.c",
          stem: "Which change in Europe's economy is described in sentences 6 and 7?",
          choices: [
            { letter: "A", text: "a return to farming as the only source of wealth" },
            { letter: "B", text: "the decline of cities such as London" },
            { letter: "C", text: "the end of trade with colonies" },
            { letter: "D", text: "the growth of banking and investment" }
          ],
          correct: "D"
        },
        {
          id: "profit",
          sol: "WHII.3.a",
          stem: "The founding of these companies most clearly reflects which goal of colonization?",
          choices: [
            { letter: "A", text: "earning profits from overseas trade" },
            { letter: "B", text: "spreading the Catholic faith" },
            { letter: "C", text: "proving that the Earth is round" },
            { letter: "D", text: "escaping the Inquisition in Spain" }
          ],
          correct: "A"
        }
      ]
    },

    /* ---------- long ---------- */
    {
      id: "expl-africa-asia",
      family: "EXPL",
      title: "Trading posts in Africa and Asia",
      kind: "Exploration & Colonization · WHII.3",
      blurb: "Forts on the coast, a king's complaint and a closed country.",
      level: 3,
      passage: "<p>" + N(1) + "In Africa and Asia, European activity before 1800 looked very different from what happened in the Americas. " + N(2) + "Portuguese sailors built forts and <strong>trading posts</strong> along the African coast, such as Elmina in present-day Ghana, where they traded cloth, metal goods and guns for gold, ivory and, increasingly, enslaved people. " + N(3) + "African rulers often controlled the terms of trade, and Europeans rarely moved far inland. " + N(4) + "In the Kingdom of Kongo, King Afonso I accepted Christianity and welcomed Portuguese priests, but in 1526 he wrote to the king of Portugal complaining that Portuguese traders were seizing and enslaving his people.</p>" +
        "<p>" + N(5) + "In Asia, Portugal seized ports such as Goa in India and Malacca in Southeast Asia, and it was allowed to settle at Macao in China. " + N(6) + "In the 1600s the Dutch drove out the Portuguese from much of the spice trade of the East Indies. " + N(7) + "Powerful Asian states limited European influence. " + N(8) + "Ming China allowed only restricted trade, and Japan's Tokugawa shoguns expelled most Europeans and banned Christianity, leaving the Dutch as the only Europeans allowed to trade, at a small post in Nagasaki harbor.</p>",
      claims: [
        {
          id: "contrast",
          sol: "WHII.3.b",
          stem: "How did European activity in Africa and Asia before 1800 differ from that in the Americas?",
          choices: [
            { letter: "A", text: "Europeans conquered larger empires in Africa." },
            { letter: "B", text: "It was mostly coastal trading rather than conquest and settlement." },
            { letter: "C", text: "Europeans did not trade at all in Asia." },
            { letter: "D", text: "African and Asian rulers had no part in trade." }
          ],
          correct: "B"
        },
        {
          id: "afonso",
          sol: "WHII.3.b",
          stem: "The main purpose of King Afonso I's letter of 1526 was to —",
          choices: [
            { letter: "A", text: "protest the enslavement of his people" },
            { letter: "B", text: "ask Portugal to send more traders" },
            { letter: "C", text: "reject Christianity in Kongo" },
            { letter: "D", text: "offer his kingdom to the pope" }
          ],
          correct: "A"
        },
        {
          id: "japan",
          sol: "WHII.3.b",
          stem: "How did Japan's Tokugawa shoguns respond to European contact?",
          choices: [
            { letter: "A", text: "They made Christianity the state religion." },
            { letter: "B", text: "They allowed every European nation to trade freely." },
            { letter: "C", text: "They sharply limited contact and banned Christianity." },
            { letter: "D", text: "They became a colony of Portugal." }
          ],
          correct: "C"
        },
        {
          id: "goa",
          sol: "WHII.3.a",
          stem: "Portugal seized ports such as Goa and Malacca mainly to —",
          choices: [
            { letter: "A", text: "find a northern route to Asia" },
            { letter: "B", text: "settle large numbers of farmers" },
            { letter: "C", text: "spread the Protestant faith" },
            { letter: "D", text: "control the trade in Asian spices" }
          ],
          correct: "D"
        },
        {
          id: "posts",
          sol: "WHII.3.b",
          stem: "In sentence 2, trading posts were —",
          choices: [
            { letter: "A", text: "large farming colonies" },
            { letter: "B", text: "coastal places for exchanging goods" },
            { letter: "C", text: "routes across the Sahara" },
            { letter: "D", text: "letters sent between kings" }
          ],
          correct: "B"
        },
        {
          id: "dutch",
          sol: "WHII.3.c",
          stem: "Sentence 6 is evidence of —",
          choices: [
            { letter: "A", text: "cooperation between all European traders" },
            { letter: "B", text: "Asian conquest of European ports" },
            { letter: "C", text: "competition among European powers for trade" },
            { letter: "D", text: "the end of the spice trade" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "expl-rivalry",
      family: "EXPL",
      title: "Britain, France and Spain compete",
      kind: "Exploration & Colonization · WHII.3",
      blurb: "Silver, furs, tobacco and a war fought on several continents.",
      level: 3,
      passage: "<p>" + N(1) + "By the 1700s, Britain, France and Spain competed fiercely for colonies, trade and sea power in the Americas and beyond.</p>" +
        "<table><tr><th>Empire</th><th>Main colonies in the Americas</th><th>Leading products</th></tr>" +
        "<tr><td>Spain</td><td>Mexico, Central and South America, Caribbean</td><td>Silver, gold, sugar</td></tr>" +
        "<tr><td>France</td><td>Canada, Mississippi River valley, Caribbean</td><td>Furs, sugar</td></tr>" +
        "<tr><td>Britain</td><td>Atlantic coast of North America, Caribbean</td><td>Tobacco, rice, sugar, timber</td></tr></table>" +
        "<p>" + N(2) + "England's defeat of the Spanish Armada in 1588 weakened Spain's control of the seas and opened the way for English and Dutch colonies. " + N(3) + "In North America, French fur traders often worked alongside Native American trading partners, while growing numbers of British settlers cleared farmland and pushed westward. " + N(4) + "The Seven Years' War (1756–1763), called the French and Indian War in North America, was a <strong>global</strong> conflict fought in Europe, the Americas and Asia. " + N(5) + "In the Treaty of Paris of 1763, France gave up Canada to Britain, and Britain became the leading colonial power. " + N(6) + "To pay its war debts, Britain then raised taxes on its American colonists, a decision that angered many of them.</p>",
      claims: [
        {
          id: "silver",
          sol: "WHII.3.a",
          stem: "According to the table, which empire's colonies best met the goal of finding gold and silver?",
          choices: [
            { letter: "A", text: "Britain" },
            { letter: "B", text: "France" },
            { letter: "C", text: "the Netherlands" },
            { letter: "D", text: "Spain" }
          ],
          correct: "D"
        },
        {
          id: "global",
          sol: "WHII.3.c",
          stem: "In sentence 4, the word global most nearly means —",
          choices: [
            { letter: "A", text: "brief" },
            { letter: "B", text: "worldwide" },
            { letter: "C", text: "religious" },
            { letter: "D", text: "local" }
          ],
          correct: "B"
        },
        {
          id: "native",
          sol: "WHII.3.b",
          stem: "Sentence 3 best explains why many Native American nations —",
          choices: [
            { letter: "A", text: "allied with France against Britain" },
            { letter: "B", text: "moved to Europe after 1763" },
            { letter: "C", text: "joined Spain in the Armada" },
            { letter: "D", text: "welcomed British farmers onto their lands" }
          ],
          correct: "A"
        },
        {
          id: "paris",
          sol: "WHII.3.c",
          stem: "Which was a result of the Treaty of Paris of 1763?",
          choices: [
            { letter: "A", text: "Spain lost all its colonies in South America." },
            { letter: "B", text: "France gained control of the Atlantic coast." },
            { letter: "C", text: "Britain gained Canada from France." },
            { letter: "D", text: "The British colonies became independent." }
          ],
          correct: "C"
        },
        {
          id: "armada",
          sol: "WHII.3.c",
          stem: "According to sentence 2, the defeat of the Spanish Armada helped —",
          choices: [
            { letter: "A", text: "Spain gain control of North America" },
            { letter: "B", text: "England and the Netherlands found colonies" },
            { letter: "C", text: "France take over Spain's silver mines" },
            { letter: "D", text: "Portugal win back the spice trade" }
          ],
          correct: "B"
        },
        {
          id: "taxes",
          sol: "WHII.3.c",
          stem: "Which chain of events is best supported by sentences 4 through 6?",
          choices: [
            { letter: "A", text: "colonial taxes, then war, then the loss of Canada" },
            { letter: "B", text: "peace treaty, then war, then lower taxes" },
            { letter: "C", text: "war for empire, then war debts, then new colonial taxes" },
            { letter: "D", text: "new taxes, then a Spanish invasion, then war" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "expl-triangular-trade",
      family: "EXPL",
      title: "Sugar and the triangular trade",
      kind: "Exploration & Colonization · WHII.3",
      blurb: "Plantations, the Middle Passage and the wealth of Atlantic ports.",
      level: 3,
      passage: "<p>" + N(1) + "Sugar became one of the most profitable crops in the Americas, and growing it on plantations required enormous labor. " + N(2) + "As disease and forced labor killed large numbers of Indigenous people, colonists in Brazil and the Caribbean turned to enslaved Africans. " + N(3) + "Ships followed a route often called the <strong>triangular trade</strong>. " + N(4) + "On the first leg, ships carried manufactured goods such as cloth, guns and metal tools from Europe to West Africa, where the goods were traded for captive Africans. " + N(5) + "The second leg, the Middle Passage, carried enslaved people across the Atlantic in crowded and deadly conditions. " + N(6) + "On the third leg, ships carried sugar, molasses and tobacco back to Europe. " + N(7) + "Historians estimate that about 12 million Africans were forced onto slave ships between the 1500s and the 1800s. " + N(8) + "A graph of the number of people carried rises slowly in the 1500s, climbs steeply after 1650 and peaks in the 1700s. " + N(9) + "Profits from sugar and the slave trade helped port cities such as Liverpool and Bristol grow and provided capital for European banks and businesses.</p>",
      claims: [
        {
          id: "triangular",
          sol: "WHII.3.c",
          stem: "The route described in sentences 3 through 6 is called triangular because it —",
          choices: [
            { letter: "A", text: "was used by only three nations" },
            { letter: "B", text: "linked three regions across the Atlantic" },
            { letter: "C", text: "lasted for three centuries" },
            { letter: "D", text: "carried only three kinds of goods" }
          ],
          correct: "B"
        },
        {
          id: "cause",
          sol: "WHII.3.b",
          stem: "According to sentence 2, why did colonists turn to enslaved African labor?",
          choices: [
            { letter: "A", text: "Indigenous populations had fallen sharply." },
            { letter: "B", text: "European workers refused to cross the ocean." },
            { letter: "C", text: "African rulers asked to send workers abroad." },
            { letter: "D", text: "Sugar could be grown only in Africa." }
          ],
          correct: "A"
        },
        {
          id: "graph",
          sol: "WHII.3.c",
          stem: "According to the graph described in sentence 8, the slave trade was greatest —",
          choices: [
            { letter: "A", text: "in the 1400s" },
            { letter: "B", text: "in the 1700s" },
            { letter: "C", text: "in the early 1500s" },
            { letter: "D", text: "after 1900" }
          ],
          correct: "B"
        },
        {
          id: "europe",
          sol: "WHII.3.c",
          stem: "Which effect on Europe's economy is described in sentence 9?",
          choices: [
            { letter: "A", text: "Europe's port cities declined." },
            { letter: "B", text: "Banks lost money on colonial trade." },
            { letter: "C", text: "Profits supplied capital for business." },
            { letter: "D", text: "Europe stopped importing sugar." }
          ],
          correct: "C"
        },
        {
          id: "africa",
          sol: "WHII.3.b",
          stem: "Which TWO statements describe effects of the Atlantic slave trade on Africa? Select TWO.",
          choices: [
            { letter: "A", text: "Millions of young people were taken from their homelands." },
            { letter: "B", text: "African states were left without any trade at all." },
            { letter: "C", text: "Europeans settled most of the African interior." },
            { letter: "D", text: "Warfare grew as some states raided others for captives." }
          ],
          correct: ["A", "D"]
        },
        {
          id: "goal",
          sol: "WHII.3.a",
          stem: "Sugar plantations in Brazil and the Caribbean best reflect which goal of colonization?",
          choices: [
            { letter: "A", text: "spreading Christianity" },
            { letter: "B", text: "finding a route to Asia" },
            { letter: "C", text: "winning glory in battle" },
            { letter: "D", text: "gaining wealth from colonies" }
          ],
          correct: "D"
        }
      ]
    }
  ];

  for (var i = 0; i < PACKS.length; i++) P.push(PACKS[i]);
})(typeof window !== "undefined" ? window : global);
