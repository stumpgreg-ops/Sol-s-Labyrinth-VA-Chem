/* SOL Lab — Virginia & United States History · Early America & the Colonies (VUS.1–VUS.4). Original text only. */
(function (global) {
  var P = global.HEIST_PACKS;
  if (!P || !P.push) return;
  var N = function (i) { return '<span class="n">(' + i + ')</span> '; };   // numbered sentence

  var PACKS = [
    /* ---------- tiny ---------- */
    {
      id: "colo-first-nations",
      family: "COLO",
      title: "Nations of many regions",
      kind: "Early America & the Colonies · VUS.1",
      blurb: "Five Indigenous peoples and the resources that shaped their lives.",
      level: 1,
      passage: "<p>" + N(1) + "Indigenous nations built their ways of life around the resources of their regions.</p><table><tr><th>Region</th><th>People</th><th>Way of life</th></tr><tr><td>Northeast</td><td>Haudenosaunee (Iroquois)</td><td>Forests; longhouses; corn, beans and squash</td></tr><tr><td>Mississippi River Valley</td><td>Mississippians (Cahokia)</td><td>Earthen mounds; large farming towns</td></tr><tr><td>Southwest</td><td>Pueblo</td><td>Dry land; adobe homes; irrigated fields</td></tr><tr><td>Pacific coast</td><td>Kwakiutl</td><td>Salmon and cedar; plank houses; canoes</td></tr><tr><td>Atlantic seaboard</td><td>Powhatan</td><td>Rivers and woods; farming, fishing, hunting</td></tr></table>",
      claims: [
        {
          id: "adobe",
          sol: "VUS.1.a",
          stem: "According to the table, which people built adobe homes in a dry region?",
          choices: [
            { letter: "A", text: "Haudenosaunee" },
            { letter: "B", text: "Powhatan" },
            { letter: "C", text: "Pueblo" },
            { letter: "D", text: "Kwakiutl" }
          ],
          correct: "C"
        },
        {
          id: "conclusion",
          sol: "VUS.1.a",
          stem: "Which conclusion is best supported by the table?",
          choices: [
            { letter: "A", text: "Each people adapted to the resources of its region." },
            { letter: "B", text: "Most peoples depended on hunting buffalo on the plains." },
            { letter: "C", text: "Peoples in every region built the same kind of home." },
            { letter: "D", text: "Farming began in North America only after 1600." }
          ],
          correct: "A"
        },
        {
          id: "kwakiutl",
          sol: "VUS.1.a",
          stem: "The Kwakiutl of the Pacific coast relied most heavily on —",
          choices: [
            { letter: "A", text: "corn, beans and squash" },
            { letter: "B", text: "fish and cedar trees" },
            { letter: "C", text: "buffalo and prairie grass" },
            { letter: "D", text: "adobe clay and irrigation" }
          ],
          correct: "B"
        },
        {
          id: "mounds",
          sol: "VUS.1.a",
          stem: "Earthen mounds and large farming towns such as Cahokia were built by people of which region?",
          choices: [
            { letter: "A", text: "the dry Southwest" },
            { letter: "B", text: "the rainy Pacific coast" },
            { letter: "C", text: "the forested Northeast" },
            { letter: "D", text: "the Mississippi Valley" }
          ],
          correct: "D"
        },
        {
          id: "irrigation",
          sol: "VUS.1.a",
          stem: "Which geographic factor best explains why the Pueblo irrigated their fields?",
          choices: [
            { letter: "A", text: "a dry climate with little rain" },
            { letter: "B", text: "thick forests that blocked sunlight" },
            { letter: "C", text: "ground that stayed frozen all year" },
            { letter: "D", text: "frequent flooding from the ocean" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "colo-sea-tools",
      family: "COLO",
      title: "Tools for the open ocean",
      kind: "Early America & the Colonies · VUS.1",
      blurb: "Caravels, compasses and astrolabes made long voyages possible.",
      level: 1,
      passage: "<p>" + N(1) + "In the 1400s, European sailors gained new tools for long ocean voyages. " + N(2) + "The <strong>caravel</strong>, a small, fast ship with triangular sails, could sail closer into the wind than older ships. " + N(3) + "The magnetic compass showed direction, and the <strong>astrolabe</strong> helped sailors find their latitude from the sun and stars. " + N(4) + "Better maps, many drawn from Portuguese voyages along Africa, guided later explorers such as Columbus.</p>",
      claims: [
        {
          id: "caravel",
          sol: "VUS.1.b",
          stem: "In sentence 2, a caravel is best described as —",
          choices: [
            { letter: "A", text: "a tool for measuring the height of stars" },
            { letter: "B", text: "a map of the African coast" },
            { letter: "C", text: "a trading post run by Portugal" },
            { letter: "D", text: "a light ship suited to ocean voyages" }
          ],
          correct: "D"
        },
        {
          id: "astrolabe",
          sol: "VUS.1.b",
          stem: "Which tool helped sailors determine their latitude?",
          choices: [
            { letter: "A", text: "the magnetic compass" },
            { letter: "B", text: "the caravel" },
            { letter: "C", text: "the astrolabe" },
            { letter: "D", text: "the printing press" }
          ],
          correct: "C"
        },
        {
          id: "effect",
          sol: "VUS.1.b",
          stem: "Which statement best explains how these tools affected exploration?",
          choices: [
            { letter: "A", text: "They made voyages far from land more practical." },
            { letter: "B", text: "They let Europeans reach Asia by an overland route." },
            { letter: "C", text: "They ended explorers' need for royal sponsors." },
            { letter: "D", text: "They cut the Atlantic crossing to a few days." }
          ],
          correct: "A"
        },
        {
          id: "columbus",
          sol: "VUS.1.b",
          stem: "Columbus sought a royal sponsor for his 1492 voyage mainly because he hoped to —",
          choices: [
            { letter: "A", text: "spread Protestant ideas in Asia" },
            { letter: "B", text: "find a western sea route to Asia" },
            { letter: "C", text: "found a colony for religious dissenters" },
            { letter: "D", text: "map the coast of Africa for Portugal" }
          ],
          correct: "B"
        },
        {
          id: "portugal",
          sol: "VUS.1.b",
          stem: "According to sentence 4, which country's voyages along Africa produced many of the new maps?",
          choices: [
            { letter: "A", text: "Spain" },
            { letter: "B", text: "England" },
            { letter: "C", text: "Portugal" },
            { letter: "D", text: "the Netherlands" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "colo-mayflower",
      family: "COLO",
      title: "The Mayflower Compact",
      kind: "Early America & the Colonies · VUS.2",
      blurb: "Forty-one men aboard a ship agree to make their own laws.",
      level: 1,
      passage: "<p>" + N(1) + "In 1620, Pilgrims aboard the Mayflower signed an agreement before landing.</p><blockquote>...covenant and combine ourselves together into a <strong>civil body politic</strong>... and by virtue hereof to enact, constitute, and frame such just and equal laws... as shall be thought most meet and convenient for the general good of the colony, unto which we promise all due submission and obedience.</blockquote><p class=\"src\">— The Mayflower Compact, 1620 (excerpt, modernized spelling)</p>",
      claims: [
        {
          id: "purpose",
          sol: "VUS.2.d",
          stem: "The main purpose of this document was to —",
          choices: [
            { letter: "A", text: "declare the colony independent of England" },
            { letter: "B", text: "form a body to make laws for the colony" },
            { letter: "C", text: "seal a trade agreement with the Wampanoag" },
            { letter: "D", text: "establish the Church of England at Plymouth" }
          ],
          correct: "B"
        },
        {
          id: "bodypolitic",
          sol: "VUS.2.d",
          stem: "In the excerpt, the phrase civil body politic most nearly means —",
          choices: [
            { letter: "A", text: "a congregation that worships together" },
            { letter: "B", text: "a company formed to trade for profit" },
            { letter: "C", text: "an organized political community" },
            { letter: "D", text: "a militia that defends a town" }
          ],
          correct: "C"
        },
        {
          id: "consent",
          sol: "VUS.2.d",
          stem: "The signers' promise to obey laws they themselves would make best reflects the idea of —",
          choices: [
            { letter: "A", text: "government by consent of the governed" },
            { letter: "B", text: "rule by a monarch who inherits power" },
            { letter: "C", text: "strict separation of church and state" },
            { letter: "D", text: "judicial review of laws by a court" }
          ],
          correct: "A"
        },
        {
          id: "bradford",
          sol: "VUS.2.a",
          stem: "Which leader served for many years as governor of Plymouth Colony?",
          choices: [
            { letter: "A", text: "John Winthrop" },
            { letter: "B", text: "Peter Stuyvesant" },
            { letter: "C", text: "Roger Williams" },
            { letter: "D", text: "William Bradford" }
          ],
          correct: "D"
        },
        {
          id: "pilgrims",
          sol: "VUS.2.a",
          stem: "The Pilgrims came to North America mainly to —",
          choices: [
            { letter: "A", text: "worship apart from the Church of England" },
            { letter: "B", text: "search the coast for gold and silver mines" },
            { letter: "C", text: "build a refuge for persecuted Catholics" },
            { letter: "D", text: "trade furs with French and Dutch merchants" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "colo-jamestown-years",
      family: "COLO",
      title: "Jamestown's first years",
      kind: "Early America & the Colonies · VUS.2",
      blurb: "From a struggling fort to tobacco, the Burgesses and a royal colony.",
      level: 1,
      passage: "<ul><li><strong>1607</strong> The Virginia Company of London founds Jamestown.</li><li><strong>1608</strong> John Smith leads the colony and orders settlers to work for their food.</li><li><strong>1612</strong> John Rolfe plants a sweeter tobacco that sells well in England.</li><li><strong>1619</strong> The House of Burgesses first meets; the first recorded Africans arrive at Point Comfort.</li><li><strong>1624</strong> Virginia becomes a royal colony.</li></ul>",
      claims: [
        {
          id: "company",
          sol: "VUS.2.a",
          stem: "The Virginia Company founded Jamestown mainly to —",
          choices: [
            { letter: "A", text: "earn a profit for its investors" },
            { letter: "B", text: "create a refuge for English Quakers" },
            { letter: "C", text: "convert Spanish settlers in Florida" },
            { letter: "D", text: "escape religious persecution in France" }
          ],
          correct: "A"
        },
        {
          id: "burgesses",
          sol: "VUS.2.d",
          stem: "The House of Burgesses was significant because it was —",
          choices: [
            { letter: "A", text: "the first court to hear appeals in the English colonies" },
            { letter: "B", text: "a council of advisers named by the king of Spain" },
            { letter: "C", text: "the first elected assembly in the English colonies" },
            { letter: "D", text: "a town meeting open to every adult colonist" }
          ],
          correct: "C"
        },
        {
          id: "tobacco",
          sol: "VUS.2.c",
          stem: "Which event on the timeline did the most to make Virginia profitable?",
          choices: [
            { letter: "A", text: "the founding of Jamestown in 1607" },
            { letter: "B", text: "the planting of Rolfe's tobacco" },
            { letter: "C", text: "John Smith's leadership of the colony" },
            { letter: "D", text: "the change to a royal colony in 1624" }
          ],
          correct: "B"
        },
        {
          id: "africans",
          sol: "VUS.3.c",
          stem: "According to the timeline, the first recorded Africans arrived in Virginia in the same year that —",
          choices: [
            { letter: "A", text: "Jamestown was founded on the James River" },
            { letter: "B", text: "Virginia became a royal colony" },
            { letter: "C", text: "John Rolfe first planted tobacco" },
            { letter: "D", text: "the House of Burgesses first met" }
          ],
          correct: "D"
        },
        {
          id: "first",
          sol: "VUS.2.a",
          stem: "Which event happened FIRST?",
          choices: [
            { letter: "A", text: "Virginia becomes a royal colony." },
            { letter: "B", text: "The House of Burgesses meets." },
            { letter: "C", text: "John Smith leads the colony." },
            { letter: "D", text: "Rolfe plants his tobacco." }
          ],
          correct: "C"
        }
      ]
    },
    /* ---------- short ---------- */
    {
      id: "colo-founders",
      family: "COLO",
      title: "Why the colonies were founded",
      kind: "Early America & the Colonies · VUS.2",
      blurb: "Six colonies, six founders, and the reasons behind them.",
      level: 1,
      passage: "<p>" + N(1) + "English colonies were founded for different reasons, and religion was often one of them.</p><table><tr><th>Colony</th><th>Leader</th><th>Main reason</th></tr><tr><td>Virginia (1607)</td><td>Virginia Company; John Smith</td><td>Profit for investors</td></tr><tr><td>Plymouth (1620)</td><td>William Bradford</td><td>Religious freedom for Pilgrims (Separatists)</td></tr><tr><td>Massachusetts Bay (1630)</td><td>John Winthrop</td><td>A model Puritan community</td></tr><tr><td>Maryland (1634)</td><td>Lord Baltimore</td><td>Refuge for English Catholics</td></tr><tr><td>Rhode Island (1636)</td><td>Roger Williams</td><td>Religious toleration after his banishment from Massachusetts</td></tr><tr><td>Pennsylvania (1681)</td><td>William Penn</td><td>A <strong>holy experiment</strong> of toleration for Quakers and others</td></tr></table>",
      claims: [
        {
          id: "maryland",
          sol: "VUS.2.a",
          stem: "Which colony was founded mainly as a refuge for Catholics?",
          choices: [
            { letter: "A", text: "Pennsylvania" },
            { letter: "B", text: "Rhode Island" },
            { letter: "C", text: "Maryland" },
            { letter: "D", text: "Plymouth" }
          ],
          correct: "C"
        },
        {
          id: "religion",
          sol: "VUS.2.b",
          stem: "Which conclusion about the six colonies is best supported by the table?",
          choices: [
            { letter: "A", text: "Religion was a motive for most of them." },
            { letter: "B", text: "Every one was founded mainly to earn a profit." },
            { letter: "C", text: "All of them were founded before the year 1620." },
            { letter: "D", text: "Each one was founded by a governor the king chose." }
          ],
          correct: "A"
        },
        {
          id: "williams",
          sol: "VUS.2.b",
          stem: "Roger Williams was banished from Massachusetts Bay mainly for arguing that —",
          choices: [
            { letter: "A", text: "colonists should stop paying taxes to the king" },
            { letter: "B", text: "government should not control religious belief" },
            { letter: "C", text: "the colony should rejoin the Catholic Church" },
            { letter: "D", text: "the Puritans should all return to England" }
          ],
          correct: "B"
        },
        {
          id: "winthrop",
          sol: "VUS.2.a",
          stem: "Which leader hoped Massachusetts Bay would be a model Puritan community?",
          choices: [
            { letter: "A", text: "William Penn" },
            { letter: "B", text: "Lord Baltimore" },
            { letter: "C", text: "John Smith" },
            { letter: "D", text: "John Winthrop" }
          ],
          correct: "D"
        },
        {
          id: "compare",
          sol: "VUS.2.b",
          stem: "How did Puritan Massachusetts Bay differ from Penn's Pennsylvania?",
          choices: [
            { letter: "A", text: "Massachusetts welcomed all faiths; Penn allowed only Quakers." },
            { letter: "B", text: "Massachusetts sought profit; Pennsylvania sought gold." },
            { letter: "C", text: "Massachusetts was Catholic; Pennsylvania was Anglican." },
            { letter: "D", text: "Massachusetts expected conformity; Penn welcomed many faiths." }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "colo-crowns-and-crosses",
      family: "COLO",
      title: "Crowns, gold and faith",
      kind: "Early America & the Colonies · VUS.1",
      blurb: "How the Reconquista and the Reformation shaped Spain's explorers.",
      level: 2,
      passage: "<p>" + N(1) + "In January 1492, the Spanish monarchs Ferdinand and Isabella captured Granada, the last Muslim kingdom in Spain, completing the <strong>Reconquista</strong>. " + N(2) + "Months later they sponsored Christopher Columbus, who promised a western route to Asia. " + N(3) + "Spanish explorers who followed sought gold, land and fame, and they also aimed to spread Catholicism. " + N(4) + "Juan Ponce de León claimed Florida for Spain in 1513, and Francisco Vázquez de Coronado searched the Southwest for the legendary Seven Cities of Gold from 1540 to 1542. " + N(5) + "After Martin Luther began the Protestant Reformation in 1517, Catholic Spain and France sent missionaries to the Americas as part of the Counter-Reformation.</p>",
      claims: [
        {
          id: "reconquista",
          sol: "VUS.1.c",
          stem: "In sentence 1, the word Reconquista refers to —",
          choices: [
            { letter: "A", text: "the Spanish conquest of the Aztec Empire in Mexico" },
            { letter: "B", text: "the Christian retaking of Spain from Muslim rulers" },
            { letter: "C", text: "a Protestant movement to reform the church in Germany" },
            { letter: "D", text: "a Portuguese sea route around the tip of Africa" }
          ],
          correct: "B"
        },
        {
          id: "sponsor",
          sol: "VUS.1.c",
          stem: "How did completing the Reconquista most likely affect Spain's support for Columbus?",
          choices: [
            { letter: "A", text: "It freed the monarchs to fund overseas ventures." },
            { letter: "B", text: "It forced Spain to give up most of its navy." },
            { letter: "C", text: "It made Spain a close ally of Protestant England." },
            { letter: "D", text: "It ended Spain's interest in any trade with Asia." }
          ],
          correct: "A"
        },
        {
          id: "coronado",
          sol: "VUS.1.b",
          stem: "Coronado's expedition through the Southwest was searching for —",
          choices: [
            { letter: "A", text: "a northwest water passage to Asia" },
            { letter: "B", text: "a good site for a Quaker colony" },
            { letter: "C", text: "the legendary Seven Cities of Gold" },
            { letter: "D", text: "beaver furs to sell to French traders" }
          ],
          correct: "C"
        },
        {
          id: "counter",
          sol: "VUS.1.c",
          stem: "Which statement best describes how the Counter-Reformation affected the Americas?",
          choices: [
            { letter: "A", text: "Protestant ministers converted most of the Aztecs." },
            { letter: "B", text: "Spain closed its missions in order to focus on trade." },
            { letter: "C", text: "England sent Jesuit priests to help found Jamestown." },
            { letter: "D", text: "Catholic powers sent missionaries to Native peoples." }
          ],
          correct: "D"
        },
        {
          id: "ponce",
          sol: "VUS.1.b",
          stem: "Which explorer claimed Florida for Spain in 1513?",
          choices: [
            { letter: "A", text: "Christopher Columbus" },
            { letter: "B", text: "Juan Ponce de León" },
            { letter: "C", text: "Francisco Vázquez de Coronado" },
            { letter: "D", text: "John Cabot" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "colo-atlantic-routes",
      family: "COLO",
      title: "Arrows across the Atlantic",
      kind: "Early America & the Colonies · VUS.1",
      blurb: "A map of the trade that linked four continents' ports.",
      level: 2,
      passage: "<p>" + N(1) + "A map of Atlantic trade in the 1700s shows arrows forming rough triangles across the ocean. " + N(2) + "Ships carried manufactured goods such as cloth, guns and tools from Europe to West Africa. " + N(3) + "There, the goods were traded for captive Africans, who were carried across the Atlantic on the <strong>Middle Passage</strong> to the West Indies and the mainland colonies. " + N(4) + "Ships returned to Europe with sugar, tobacco, rice and indigo. " + N(5) + "A second route linked New England, whose distillers turned West Indian <strong>molasses</strong> into rum, with Africa and the Caribbean.</p>",
      claims: [
        {
          id: "eurogoods",
          sol: "VUS.1.d",
          stem: "Which goods were most often carried from Europe to West Africa?",
          choices: [
            { letter: "A", text: "sugar and molasses" },
            { letter: "B", text: "tobacco, rice and indigo" },
            { letter: "C", text: "silver mined in Mexico" },
            { letter: "D", text: "cloth, guns and tools" }
          ],
          correct: "D"
        },
        {
          id: "passage",
          sol: "VUS.3.b",
          stem: "In sentence 3, the Middle Passage was —",
          choices: [
            { letter: "A", text: "the land route from Virginia west to the Ohio Valley" },
            { letter: "B", text: "the forced voyage of captives across the Atlantic" },
            { letter: "C", text: "a canal linking the Great Lakes to the Hudson River" },
            { letter: "D", text: "the sea route that carried sugar from Cuba to Spain" }
          ],
          correct: "B"
        },
        {
          id: "molasses",
          sol: "VUS.1.d",
          stem: "New England merchants used molasses from the West Indies mainly to —",
          choices: [
            { letter: "A", text: "feed workers on ships" },
            { letter: "B", text: "pay their taxes" },
            { letter: "C", text: "make rum" },
            { letter: "D", text: "grow tobacco" }
          ],
          correct: "C"
        },
        {
          id: "linked",
          sol: "VUS.1.d",
          stem: "Which conclusion is best supported by the map description?",
          choices: [
            { letter: "A", text: "Trade tied the economies of four regions together." },
            { letter: "B", text: "Trade moved only between England and Virginia." },
            { letter: "C", text: "Africa traded only with the New England colonies." },
            { letter: "D", text: "Europe bought almost nothing grown in the colonies." }
          ],
          correct: "A"
        },
        {
          id: "crops",
          sol: "VUS.3.d",
          stem: "The sugar, rice and tobacco shipped to Europe were produced mainly by —",
          choices: [
            { letter: "A", text: "the forced labor of enslaved Africans" },
            { letter: "B", text: "free wage workers hired in European ports" },
            { letter: "C", text: "Native nations paid with trade goods" },
            { letter: "D", text: "new machines powered by waterwheels" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "colo-bacon-1676",
      family: "COLO",
      title: "Jamestown burns: Bacon's Rebellion",
      kind: "Early America & the Colonies · VUS.4",
      blurb: "Frontier anger, a defiant governor and a turning point for labor in Virginia.",
      level: 2,
      passage: "<p>" + N(1) + "In 1676, many farmers on Virginia's frontier were angry. " + N(2) + "Many were former <strong>indentured servants</strong> who could find only poor land at the edge of settlement, where they clashed with Indigenous nations. " + N(3) + "Governor William Berkeley would not authorize a war against Native peoples on the frontier. " + N(4) + "Nathaniel Bacon led the farmers in attacks on Indigenous people, including nations at peace with the colony, and then turned against the governor and burned Jamestown. " + N(5) + "The rebellion collapsed after Bacon died of disease. " + N(6) + "Afterward, wealthy planters relied less on indentured servants and more on enslaved Africans.</p>",
      claims: [
        {
          id: "followers",
          sol: "VUS.4.c",
          stem: "Most of Bacon's followers were —",
          choices: [
            { letter: "A", text: "wealthy planters along the tidewater rivers" },
            { letter: "B", text: "frontier farmers, many of them ex-servants" },
            { letter: "C", text: "royal soldiers sent over from London" },
            { letter: "D", text: "Native nations allied with Governor Berkeley" }
          ],
          correct: "B"
        },
        {
          id: "cause",
          sol: "VUS.4.c",
          stem: "Bacon's followers turned against Governor Berkeley mainly because he —",
          choices: [
            { letter: "A", text: "raised taxes to build a new colonial capital" },
            { letter: "B", text: "freed all of the colony's indentured servants" },
            { letter: "C", text: "would not authorize war on the frontier" },
            { letter: "D", text: "made an alliance with French fur traders" }
          ],
          correct: "C"
        },
        {
          id: "result",
          sol: "VUS.3.d",
          stem: "Which was a long-term result of Bacon's Rebellion?",
          choices: [
            { letter: "A", text: "Planters turned more to enslaved African labor." },
            { letter: "B", text: "Virginia gained independence from England." },
            { letter: "C", text: "Indentured servitude became the main labor system." },
            { letter: "D", text: "The colony's capital moved to Plymouth." }
          ],
          correct: "A"
        },
        {
          id: "indenture",
          sol: "VUS.3.b",
          stem: "In sentence 2, indentured servants were people who —",
          choices: [
            { letter: "A", text: "were held in bondage for their whole lives" },
            { letter: "B", text: "owned large plantations along the rivers" },
            { letter: "C", text: "served as elected members of the Burgesses" },
            { letter: "D", text: "worked a set term to repay their passage" }
          ],
          correct: "D"
        },
        {
          id: "tension",
          sol: "VUS.4.c",
          stem: "Bacon's Rebellion revealed tension between —",
          choices: [
            { letter: "A", text: "England and Spain over control of Florida" },
            { letter: "B", text: "poor frontier settlers and the colony's elite" },
            { letter: "C", text: "Puritans and Quakers who had moved to Virginia" },
            { letter: "D", text: "French traders and the Haudenosaunee nations" }
          ],
          correct: "B"
        }
      ]
    },
    /* ---------- medium ---------- */
    {
      id: "colo-great-awakening",
      family: "COLO",
      title: "The Great Awakening",
      kind: "Early America & the Colonies · VUS.2",
      blurb: "Outdoor sermons, new churches and the habit of choosing for oneself.",
      level: 2,
      passage: "<p>" + N(1) + "In the 1730s and 1740s, a religious revival called the <strong>Great Awakening</strong> swept through the colonies. " + N(2) + "Preachers such as Jonathan Edwards of Massachusetts and George Whitefield, a traveling minister from England, drew huge crowds. " + N(3) + "They stressed personal faith and emotion over formal ritual and taught that all people were equal before God. " + N(4) + "Many colonists left the established churches and joined growing denominations such as the Baptists and Methodists. " + N(5) + "In Virginia, where the Anglican Church was the official, tax-supported church, Baptist preachers without a license were sometimes jailed. " + N(6) + "Many enslaved and free Africans joined these new churches and blended Christianity with African traditions of song and worship. " + N(7) + "Historians argue that the revival encouraged <strong>religious toleration</strong> and taught colonists to question authority.</p>",
      claims: [
        {
          id: "define",
          sol: "VUS.2.b",
          stem: "The Great Awakening is best described as —",
          choices: [
            { letter: "A", text: "a series of laws that limited colonial trade" },
            { letter: "B", text: "a religious revival that stressed personal faith" },
            { letter: "C", text: "a movement to restore the Catholic Church in England" },
            { letter: "D", text: "a wave of immigration from the German states" }
          ],
          correct: "B"
        },
        {
          id: "whitefield",
          sol: "VUS.2.b",
          stem: "Which leader was a traveling preacher who drew large crowds during the Great Awakening?",
          choices: [
            { letter: "A", text: "George Whitefield" },
            { letter: "B", text: "Roger Williams" },
            { letter: "C", text: "William Penn" },
            { letter: "D", text: "Cecil Calvert, Lord Baltimore" }
          ],
          correct: "A"
        },
        {
          id: "effect",
          sol: "VUS.2.b",
          stem: "Which effect of the Great Awakening is best supported by sentence 4?",
          choices: [
            { letter: "A", text: "The Anglican Church gained thousands of new members." },
            { letter: "B", text: "Most colonists stopped attending any church altogether." },
            { letter: "C", text: "New denominations grew as colonists left old churches." },
            { letter: "D", text: "Virginia outlawed the Baptist Church in every county." }
          ],
          correct: "C"
        },
        {
          id: "toleration",
          sol: "VUS.2.b",
          stem: "In sentence 7, religious toleration most nearly means —",
          choices: [
            { letter: "A", text: "requiring everyone to attend one church" },
            { letter: "B", text: "a tax that supports the official church" },
            { letter: "C", text: "a ban on preaching outdoors without a license" },
            { letter: "D", text: "acceptance of people whose beliefs differ" }
          ],
          correct: "D"
        },
        {
          id: "democracy",
          sol: "VUS.2.d",
          stem: "Which teaching of the Great Awakening was most closely connected to later democratic thinking?",
          choices: [
            { letter: "A", text: "that all people were equal before God" },
            { letter: "B", text: "that only ministers could read the Bible" },
            { letter: "C", text: "that the king headed the church" },
            { letter: "D", text: "that ritual mattered more than faith" }
          ],
          correct: "A"
        },
        {
          id: "africans",
          sol: "VUS.3.e",
          stem: "According to sentence 6, many enslaved and free Africans responded to the revival by —",
          choices: [
            { letter: "A", text: "refusing to attend services of any church" },
            { letter: "B", text: "forming new parishes of the Anglican Church" },
            { letter: "C", text: "joining new churches and adding African traditions" },
            { letter: "D", text: "returning to West Africa to serve there as missionaries" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "colo-three-empires",
      family: "COLO",
      title: "Three empires, three systems",
      kind: "Early America & the Colonies · VUS.2",
      blurb: "Spain, France and England ran their colonies in very different ways.",
      level: 2,
      passage: "<p>" + N(1) + "Spain, France and England built very different colonial systems in North America.</p><table><tr><th></th><th>Spanish</th><th>French</th><th>English</th></tr><tr><td>Main goals</td><td>Gold, silver and converting Native peoples to Catholicism</td><td>Fur trade and missions</td><td>Farmland, trade and religious freedom</td></tr><tr><td>Settlers</td><td>Soldiers, priests and officials</td><td>Few settlers; traders and priests</td><td>Many farming families</td></tr><tr><td>Government</td><td>Viceroys ruling for the king</td><td>Royal governors</td><td>Elected assemblies and royal governors</td></tr><tr><td>Native peoples</td><td>Forced labor on estates and missions</td><td>Trade partners and military allies</td><td>Often pushed off land for farms</td></tr></table><p>" + N(2) + "English colonists also owned property and traded in fairly <strong>free markets</strong>, where people chose what to make, buy and sell, though Britain regulated their trade with other nations. " + N(3) + "Rivalry among the three empires, and with Native nations, led to repeated wars for control of the continent.</p>",
      claims: [
        {
          id: "french",
          sol: "VUS.4.b",
          stem: "According to the table, which colonial power most often treated Native peoples as trade partners and allies?",
          choices: [
            { letter: "A", text: "Spain" },
            { letter: "B", text: "England" },
            { letter: "C", text: "France" },
            { letter: "D", text: "the Netherlands" }
          ],
          correct: "C"
        },
        {
          id: "english",
          sol: "VUS.2.c",
          stem: "Which feature made the English system different from the Spanish and French systems?",
          choices: [
            { letter: "A", text: "elected representative assemblies" },
            { letter: "B", text: "missions run by Catholic priests" },
            { letter: "C", text: "rule by viceroys acting for the king" },
            { letter: "D", text: "a heavy focus on the fur trade" }
          ],
          correct: "A"
        },
        {
          id: "population",
          sol: "VUS.2.c",
          stem: "Which statement best explains why New France had a small population?",
          choices: [
            { letter: "A", text: "The French king banned all emigration to America." },
            { letter: "B", text: "The fur trade needed few settlers." },
            { letter: "C", text: "Disease killed most French farmers who arrived." },
            { letter: "D", text: "English warships blocked every French ship at sea." }
          ],
          correct: "B"
        },
        {
          id: "freemarket",
          sol: "VUS.2.c",
          stem: "In sentence 2, free markets are best described as an economy in which —",
          choices: [
            { letter: "A", text: "the king sets the price of every good sold" },
            { letter: "B", text: "the church owns most of the land and shops" },
            { letter: "C", text: "the law requires goods to be shared equally" },
            { letter: "D", text: "people choose what to buy, sell and own" }
          ],
          correct: "D"
        },
        {
          id: "counter",
          sol: "VUS.1.c",
          stem: "Spain's goal of converting Native peoples to Catholicism was most closely connected to —",
          choices: [
            { letter: "A", text: "the Great Awakening" },
            { letter: "B", text: "the Counter-Reformation" },
            { letter: "C", text: "the Glorious Revolution" },
            { letter: "D", text: "the Enlightenment" }
          ],
          correct: "B"
        },
        {
          id: "compete",
          sol: "VUS.4.a",
          stem: "Which conclusion about the competition for North America is best supported by the table?",
          choices: [
            { letter: "A", text: "Each empire's goals shaped how it treated Native peoples." },
            { letter: "B", text: "All three empires relied mainly on the forced labor of Native peoples." },
            { letter: "C", text: "France sent far more settlers than England did." },
            { letter: "D", text: "Spain and England had the same goals in America." }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "colo-middle-passage",
      family: "COLO",
      title: "Peoples, skills and the Middle Passage",
      kind: "Early America & the Colonies · VUS.3",
      blurb: "Who the captives were, what they knew and the voyage they were forced to make.",
      level: 2,
      passage: "<p>" + N(1) + "The Africans carried to the Americas came from many peoples of West and Central Africa, including the Akan, Igbo, Yoruba, Wolof and Kongo. " + N(2) + "They spoke many languages and brought valuable skills. " + N(3) + "People from the rice-growing regions of West Africa knew how to grow rice in flooded fields, knowledge that made rice planting in South Carolina profitable; others were skilled ironworkers, weavers, potters and cattle herders. " + N(4) + "Captives were forced aboard European ships for the <strong>Middle Passage</strong>, a voyage of weeks or months in crowded holds where disease spread and many died. " + N(5) + "From the 1500s to the 1800s, more than 12 million Africans were forced onto slave ships. " + N(6) + "Most were taken to Brazil and the Caribbean; roughly 400,000 were carried directly to mainland North America. " + N(7) + "In the colonies they were held in <strong>chattel slavery</strong>: they were treated as property, and their children were born enslaved.</p>",
      claims: [
        {
          id: "diverse",
          sol: "VUS.3.a",
          stem: "Which statement is best supported by sentences 1 and 2?",
          choices: [
            { letter: "A", text: "The captives all shared a single African language." },
            { letter: "B", text: "Most of the captives came from North Africa." },
            { letter: "C", text: "The captives came from many different cultures." },
            { letter: "D", text: "Few of the captives had any skills of value." }
          ],
          correct: "C"
        },
        {
          id: "rice",
          sol: "VUS.3.a",
          stem: "South Carolina planters valued captives from West Africa's rice-growing regions because they —",
          choices: [
            { letter: "A", text: "knew how to grow rice in flooded fields" },
            { letter: "B", text: "could build the ships used in the rice trade" },
            { letter: "C", text: "already spoke English before they arrived" },
            { letter: "D", text: "had worked on sugar estates in Brazil first" }
          ],
          correct: "A"
        },
        {
          id: "chattel",
          sol: "VUS.3.b",
          stem: "In sentence 7, chattel slavery means —",
          choices: [
            { letter: "A", text: "work for a set number of years to repay a ship fare" },
            { letter: "B", text: "lifelong bondage as property, passed to children" },
            { letter: "C", text: "labor paid for with grants of farmland" },
            { letter: "D", text: "required service in a colonial militia" }
          ],
          correct: "B"
        },
        {
          id: "where",
          sol: "VUS.3.b",
          stem: "According to sentence 6, most enslaved Africans were carried to —",
          choices: [
            { letter: "A", text: "Virginia and Maryland" },
            { letter: "B", text: "the New England colonies" },
            { letter: "C", text: "Spain and Portugal" },
            { letter: "D", text: "Brazil and the Caribbean" }
          ],
          correct: "D"
        },
        {
          id: "skills",
          sol: "VUS.3.a",
          stem: "Which skill does the passage say some captives brought from Africa?",
          choices: [
            { letter: "A", text: "printing" },
            { letter: "B", text: "ironworking" },
            { letter: "C", text: "shipbuilding" },
            { letter: "D", text: "glassmaking" }
          ],
          correct: "B"
        },
        {
          id: "sugar",
          sol: "VUS.3.d",
          stem: "Which economic factor best explains why so many captives were taken to Brazil and the Caribbean?",
          choices: [
            { letter: "A", text: "Free settlers there refused to do any farm work." },
            { letter: "B", text: "The voyage there was shorter than the trip to Europe." },
            { letter: "C", text: "Sugar plantations demanded huge numbers of workers." },
            { letter: "D", text: "Spain paid planters a bounty for each worker bought." }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "colo-servants-to-slavery",
      family: "COLO",
      title: "From servants to slavery in Virginia",
      kind: "Early America & the Colonies · VUS.3",
      blurb: "How tobacco, land grants and new laws built race-based slavery.",
      level: 3,
      passage: "<p>" + N(1) + "Tobacco needed many workers, and Virginia planters first relied on English <strong>indentured servants</strong>, who worked four to seven years in exchange for their passage. " + N(2) + "Under the <strong>headright system</strong>, a planter received 50 acres of land for each person whose passage he paid. " + N(3) + "Over time, Virginia's laws turned slavery into a lifelong, inherited status based on race.</p><ul><li><strong>1619</strong> About 20 Africans arrive at Point Comfort; their exact status is unclear.</li><li><strong>1662</strong> A Virginia law says a child's status follows the mother's.</li><li><strong>1676</strong> Former servants join Bacon's Rebellion.</li><li><strong>1705</strong> Virginia's slave codes define enslaved people as property and limit their rights.</li></ul><p>" + N(4) + "By about 1700, enslaved Africans outnumbered indentured servants in Virginia.</p>",
      claims: [
        {
          id: "why",
          sol: "VUS.3.d",
          stem: "Which reason best explains why planters shifted from indentured servants to enslaved Africans?",
          choices: [
            { letter: "A", text: "Servants were held for life, but enslaved people were not." },
            { letter: "B", text: "Enslaved people were held for life, as were their children." },
            { letter: "C", text: "Tobacco farming no longer needed a large number of workers." },
            { letter: "D", text: "A new English law banned indentured servitude entirely." }
          ],
          correct: "B"
        },
        {
          id: "headright",
          sol: "VUS.3.d",
          stem: "Under the headright system, a planter who paid the passage of five servants would receive —",
          choices: [
            { letter: "A", text: "50 acres" },
            { letter: "B", text: "100 acres" },
            { letter: "C", text: "250 acres" },
            { letter: "D", text: "500 acres" }
          ],
          correct: "C"
        },
        {
          id: "1662",
          sol: "VUS.3.d",
          stem: "The law of 1662 most directly made slavery —",
          choices: [
            { letter: "A", text: "illegal in Virginia" },
            { letter: "B", text: "a status that ended at age 21" },
            { letter: "C", text: "a punishment for crimes" },
            { letter: "D", text: "inherited through the mother" }
          ],
          correct: "D"
        },
        {
          id: "last",
          sol: "VUS.3.b",
          stem: "Which event on the timeline happened LAST?",
          choices: [
            { letter: "A", text: "Virginia's slave codes are passed." },
            { letter: "B", text: "Africans arrive at Point Comfort." },
            { letter: "C", text: "The law on a child's status is passed." },
            { letter: "D", text: "Former servants join Bacon's Rebellion." }
          ],
          correct: "A"
        },
        {
          id: "compare",
          sol: "VUS.3.b",
          stem: "How did indentured servitude differ from chattel slavery?",
          choices: [
            { letter: "A", text: "Servants were all African; enslaved people were all English." },
            { letter: "B", text: "Servants could vote in every election; enslaved people could not." },
            { letter: "C", text: "Servants served a limited term; enslaved people were held for life." },
            { letter: "D", text: "Servants worked only in the towns; enslaved people worked on ships." }
          ],
          correct: "C"
        },
        {
          id: "bacon",
          sol: "VUS.4.c",
          stem: "Which conclusion best explains why the timeline includes Bacon's Rebellion?",
          choices: [
            { letter: "A", text: "It brought an end to the tobacco economy in Virginia." },
            { letter: "B", text: "It showed that enslaved people had gained the right to vote." },
            { letter: "C", text: "It ended the headright system and all grants of land." },
            { letter: "D", text: "Unrest among former servants pushed planters toward slavery." }
          ],
          correct: "D"
        }
      ]
    },
    /* ---------- long ---------- */
    {
      id: "colo-powhatan-english",
      family: "COLO",
      title: "The Powhatan and the English",
      kind: "Early America & the Colonies · VUS.4",
      blurb: "Two sources on corn, a marriage, tobacco and war in early Virginia.",
      level: 3,
      passage: "<p><strong>Source 1</strong> " + N(1) + "When the English arrived in 1607, Jamestown lay inside the lands of the <strong>Powhatan Confederacy</strong>, an alliance of about 30 Algonquian-speaking peoples led by Wahunsenaca, whom the English called Powhatan. " + N(2) + "The colonists, more interested in searching for gold than in farming, depended on Powhatan corn to survive their first winters. " + N(3) + "John Smith traded copper, beads and tools for food and insisted that colonists who did not work would not eat. " + N(4) + "The marriage of Pocahontas, Powhatan's daughter, to the colonist John Rolfe in 1614 brought several years of peace.</p><p><strong>Source 2</strong> " + N(5) + "As tobacco farming spread, colonists cleared more and more Powhatan land. " + N(6) + "In 1622, Powhatan's brother Opechancanough led a coordinated attack that killed about 350 colonists, roughly a quarter of the English population. " + N(7) + "The English answered with years of war against Powhatan towns. " + N(8) + "After another war in the 1640s, the weakened Powhatan peoples signed a treaty in 1646 that placed them under English authority and limited them to reserved lands.</p>",
      claims: [
        {
          id: "coop",
          sol: "VUS.4.b",
          stem: "Which example of cooperation is described in Source 1?",
          choices: [
            { letter: "A", text: "a joint attack on the Spanish in Florida" },
            { letter: "B", text: "trading English goods for Powhatan corn" },
            { letter: "C", text: "a shared government for the Jamestown fort" },
            { letter: "D", text: "an alliance against French traders to the north" }
          ],
          correct: "B"
        },
        {
          id: "cause",
          sol: "VUS.4.d",
          stem: "Which development in Source 2 best explains the cause of the 1622 attack?",
          choices: [
            { letter: "A", text: "tobacco farming spreading onto Powhatan land" },
            { letter: "B", text: "the marriage of Pocahontas and John Rolfe" },
            { letter: "C", text: "the arrival of French traders on the James River" },
            { letter: "D", text: "John Smith's return to England after an injury" }
          ],
          correct: "A"
        },
        {
          id: "smith",
          sol: "VUS.2.a",
          stem: "John Smith's rule that colonists who did not work would not eat was meant to —",
          choices: [
            { letter: "A", text: "end all trade between the colony and the Powhatan towns" },
            { letter: "B", text: "punish colonists who practiced other religions" },
            { letter: "C", text: "make settlers grow food instead of hunting for gold" },
            { letter: "D", text: "force Native peoples to work in English fields" }
          ],
          correct: "C"
        },
        {
          id: "compare",
          sol: "VUS.4.d",
          stem: "How does the focus of Source 2 differ from that of Source 1?",
          choices: [
            { letter: "A", text: "Source 1 describes war, while Source 2 describes trade and peace." },
            { letter: "B", text: "Source 1 is about the French, while Source 2 is about the English settlers." },
            { letter: "C", text: "Source 1 covers the 1640s, while Source 2 covers the year 1607." },
            { letter: "D", text: "Source 1 stresses cooperation; Source 2 stresses conflict over land." }
          ],
          correct: "D"
        },
        {
          id: "first",
          sol: "VUS.4.b",
          stem: "Which event in the two sources happened FIRST?",
          choices: [
            { letter: "A", text: "Opechancanough's attack on the colony" },
            { letter: "B", text: "the treaty placing the Powhatan under English authority" },
            { letter: "C", text: "the marriage of Pocahontas and John Rolfe" },
            { letter: "D", text: "the war of the 1640s" }
          ],
          correct: "C"
        },
        {
          id: "confed",
          sol: "VUS.1.a",
          stem: "In sentence 1, the Powhatan Confederacy is best described as —",
          choices: [
            { letter: "A", text: "an alliance of many peoples under one chief" },
            { letter: "B", text: "an English company that traded for furs" },
            { letter: "C", text: "a single village on the banks of the James River" },
            { letter: "D", text: "a treaty signed between England and Spain" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "colo-rival-claims",
      family: "COLO",
      title: "A continent of rival claims",
      kind: "Early America & the Colonies · VUS.4",
      blurb: "A map of North America around 1700: empires, rivers and Native nations.",
      level: 3,
      passage: "<p>" + N(1) + "A map of North America around 1700 shows European rivals and many Indigenous nations. " + N(2) + "Spain held Florida, where it had founded St. Augustine in 1565, and the Southwest, where Santa Fe became a capital about 1610. " + N(3) + "France claimed a long arc of land from Quebec, founded in 1608, along the St. Lawrence River and the Great Lakes and down the Mississippi River. " + N(4) + "The Dutch colony of New Netherland on the Hudson River had been seized by England in 1664 and renamed New York. " + N(5) + "English colonies lined the Atlantic coast from New England to the Carolinas. " + N(6) + "Between these claims lived powerful Indigenous nations. " + N(7) + "The <strong>Haudenosaunee (Iroquois) Confederacy</strong>, trading first with the Dutch and later with the English, fought the Huron (Wendat), allies of the French, in the Beaver Wars of the 1600s for control of hunting lands and the fur trade. " + N(8) + "In New England, King Philip's War (1675–1676) pitted the Wampanoag leader Metacom and his allies against English colonists expanding onto their lands. " + N(9) + "In 1680, the Pueblo of New Mexico rose up against Spanish rule and drove the Spanish out for twelve years.</p>",
      claims: [
        {
          id: "france",
          sol: "VUS.4.a",
          stem: "Which European power's claims followed the St. Lawrence River, the Great Lakes and the Mississippi River?",
          choices: [
            { letter: "A", text: "Spain" },
            { letter: "B", text: "the Netherlands" },
            { letter: "C", text: "France" },
            { letter: "D", text: "England" }
          ],
          correct: "C"
        },
        {
          id: "rivers",
          sol: "VUS.4.a",
          stem: "Which advantage did France gain from controlling these waterways?",
          choices: [
            { letter: "A", text: "fertile land for large tobacco plantations" },
            { letter: "B", text: "rich gold and silver mines close to the Atlantic coast" },
            { letter: "C", text: "warm-water ports that never froze in winter" },
            { letter: "D", text: "a water route into the interior for the fur trade" }
          ],
          correct: "D"
        },
        {
          id: "beaver",
          sol: "VUS.4.e",
          stem: "According to sentence 7, the Beaver Wars were fought mainly over —",
          choices: [
            { letter: "A", text: "control of hunting lands and the fur trade" },
            { letter: "B", text: "the right to settle in the Dutch colony" },
            { letter: "C", text: "the Spanish missions built in New Mexico" },
            { letter: "D", text: "the exact northern boundary of the Carolinas" }
          ],
          correct: "A"
        },
        {
          id: "philip",
          sol: "VUS.4.d",
          stem: "King Philip's War was mainly caused by —",
          choices: [
            { letter: "A", text: "Spanish raids on Wampanoag towns" },
            { letter: "B", text: "English expansion onto Wampanoag lands" },
            { letter: "C", text: "a dispute among rival French fur traders" },
            { letter: "D", text: "news of the Pueblo uprising in New Mexico" }
          ],
          correct: "B"
        },
        {
          id: "pueblo",
          sol: "VUS.4.d",
          stem: "The events of 1680 in New Mexico show that —",
          choices: [
            { letter: "A", text: "Spain and France were close allies in the Southwest" },
            { letter: "B", text: "the Pueblo welcomed the Spanish missions" },
            { letter: "C", text: "Native peoples resisted European rule by force" },
            { letter: "D", text: "England had gained control of the Southwest by then" }
          ],
          correct: "C"
        },
        {
          id: "two",
          sol: "VUS.4.e",
          stem: "Select TWO conclusions supported by the passage.",
          choices: [
            { letter: "A", text: "Some Native nations fought each other for land and trade." },
            { letter: "B", text: "Spain controlled the Great Lakes region." },
            { letter: "C", text: "English colonies reached the Mississippi by 1700." },
            { letter: "D", text: "Native nations formed ties with rival European powers." }
          ],
          correct: ["A", "D"]
        }
      ]
    },
    {
      id: "colo-richmond-freedom",
      family: "COLO",
      title: "Resistance, culture and the Richmond trade",
      kind: "Early America & the Colonies · VUS.3",
      blurb: "Revolts, everyday resistance, spirituals and a city's slave market.",
      level: 3,
      passage: "<p>" + N(1) + "Enslaved people resisted slavery in many ways and kept their cultures alive.</p><ul><li><strong>1739</strong> Stono Rebellion: enslaved people in South Carolina rise up and march south toward Spanish Florida, where they had been promised freedom.</li><li><strong>1800</strong> Gabriel, an enslaved blacksmith near Richmond, plans a large revolt; it is betrayed, and he is executed.</li><li><strong>1808</strong> Congress bans the importation of enslaved Africans, but the slave trade within the United States grows.</li><li><strong>1831</strong> Nat Turner leads a revolt in Southampton County, Virginia; the General Assembly then passes harsher laws.</li><li><strong>1830s–1850s</strong> Richmond becomes one of the largest slave-trading centers in the Upper South; traders in Shockoe Bottom sell many thousands of enslaved Virginians to the Deep South.</li></ul><p>" + N(2) + "Day to day, enslaved people resisted by working slowly, breaking tools, learning to read in secret and escaping. " + N(3) + "They kept African traditions alive in music, stories, foods and crafts, created <strong>spirituals</strong> that joined Christian faith with hopes of freedom, and held families together despite sales that separated them.</p>",
      claims: [
        {
          id: "domestic",
          sol: "VUS.3.c",
          stem: "Which statement best explains why the slave trade within the United States grew after 1808?",
          choices: [
            { letter: "A", text: "Congress began paying planters to move west." },
            { letter: "B", text: "Imports were banned, but demand for labor rose." },
            { letter: "C", text: "Virginia banned slavery inside its own borders." },
            { letter: "D", text: "Most enslaved people had been freed by that year." }
          ],
          correct: "B"
        },
        {
          id: "richmond",
          sol: "VUS.3.c",
          stem: "According to the timeline, Richmond's role in the 1830s–1850s was as —",
          choices: [
            { letter: "A", text: "a center where enslaved people were set free by law" },
            { letter: "B", text: "a port that imported captives from Africa" },
            { letter: "C", text: "a major market selling people to the Deep South" },
            { letter: "D", text: "the capital of the new Confederate States" }
          ],
          correct: "C"
        },
        {
          id: "everyday",
          sol: "VUS.3.e",
          stem: "Which was an example of everyday resistance described in sentence 2?",
          choices: [
            { letter: "A", text: "working slowly or breaking tools" },
            { letter: "B", text: "voting against slavery in elections" },
            { letter: "C", text: "petitioning the king of England" },
            { letter: "D", text: "joining the colonial militia" }
          ],
          correct: "A"
        },
        {
          id: "spirituals",
          sol: "VUS.3.e",
          stem: "In sentence 3, spirituals are best described as —",
          choices: [
            { letter: "A", text: "laws that were passed by the General Assembly" },
            { letter: "B", text: "letters written to abolitionist newspapers" },
            { letter: "C", text: "secret maps that showed the routes of escape north" },
            { letter: "D", text: "religious songs that expressed hope of freedom" }
          ],
          correct: "D"
        },
        {
          id: "first",
          sol: "VUS.3.e",
          stem: "Which act of resistance on the timeline happened FIRST?",
          choices: [
            { letter: "A", text: "Nat Turner's revolt" },
            { letter: "B", text: "Gabriel's planned revolt" },
            { letter: "C", text: "the Stono Rebellion" },
            { letter: "D", text: "escapes from Shockoe Bottom" }
          ],
          correct: "C"
        },
        {
          id: "culture",
          sol: "VUS.3.a",
          stem: "Select TWO details from the passage that show enslaved people preserving their cultures.",
          choices: [
            { letter: "A", text: "Congress banned importing enslaved Africans." },
            { letter: "B", text: "They kept African traditions alive in music and stories." },
            { letter: "C", text: "The General Assembly passed harsher laws." },
            { letter: "D", text: "They created spirituals that joined faith and hope." }
          ],
          correct: ["B", "D"]
        }
      ]
    }
  ];

  for (var i = 0; i < PACKS.length; i++) P.push(PACKS[i]);
})(typeof window !== "undefined" ? window : global);
