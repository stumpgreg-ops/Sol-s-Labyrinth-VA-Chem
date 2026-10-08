/* SOL Lab — World History II · Asia & Africa, 1500–1800 (WHII.5–6). Original text only. */
(function (global) {
  var P = global.HEIST_PACKS;
  if (!P || !P.push) return;
  var N = function (i) { return '<span class="n">(' + i + ')</span> '; };   // numbered sentence

  var PACKS = [
    /* ---------- tiny ---------- */
    {
      id: "glob-suleiman-istanbul",
      family: "GLOB",
      title: "Suleiman's Istanbul",
      kind: "Asia & Africa · WHII.5",
      blurb: "A city where two continents and many trade routes meet.",
      level: 1,
      passage: "<p>" + N(1) + "In 1453 the Ottoman Turks captured Constantinople and renamed it <strong>Istanbul</strong>. " +
        N(2) + "The city sits where Europe meets Asia, on trade routes linking the Black Sea and the Mediterranean. " +
        N(3) + "Under <strong>Suleiman the Magnificent</strong> (ruled 1520–1566), the empire reached its height. " +
        N(4) + "Ottomans called him \"the Lawgiver\" because he organized a code of law for the whole empire.</p>",
      claims: [
        {
          id: "capital",
          sol: "WHII.5.a",
          stem: "Which city became the capital of the Ottoman Empire after 1453?",
          choices: [
            { letter: "A", text: "Baghdad" },
            { letter: "B", text: "Cairo" },
            { letter: "C", text: "Istanbul" },
            { letter: "D", text: "Venice" }
          ],
          correct: "C"
        },
        {
          id: "location",
          sol: "WHII.5.a",
          stem: "According to sentence 2, why was the city's location valuable?",
          choices: [
            { letter: "A", text: "It controlled trade routes between Europe and Asia." },
            { letter: "B", text: "It was protected on all sides by wide deserts." },
            { letter: "C", text: "It was the main port on the Atlantic coast." },
            { letter: "D", text: "It was far from every rival empire and city." }
          ],
          correct: "A"
        },
        {
          id: "faith",
          sol: "WHII.5.a",
          stem: "Which religion was the faith of the Ottoman sultans and the official religion of their state?",
          choices: [
            { letter: "A", text: "Eastern Orthodox Christianity" },
            { letter: "B", text: "Sunni Islam" },
            { letter: "C", text: "Theravada Buddhism" },
            { letter: "D", text: "Sikhism" }
          ],
          correct: "B"
        },
        {
          id: "height",
          sol: "WHII.5.a",
          stem: "In sentence 3, the phrase \"reached its height\" most nearly means the empire —",
          choices: [
            { letter: "A", text: "moved its capital into the mountains" },
            { letter: "B", text: "was conquered by a rival empire" },
            { letter: "C", text: "began a long period of decline" },
            { letter: "D", text: "was at its greatest power and size" }
          ],
          correct: "D"
        },
        {
          id: "longevity",
          sol: "WHII.5.a",
          stem: "Which factor best helps explain why Ottoman power lasted for centuries?",
          choices: [
            { letter: "A", text: "isolation from all foreign trade and contact" },
            { letter: "B", text: "a strong army and an organized system of law" },
            { letter: "C", text: "forcing every subject to convert to Islam" },
            { letter: "D", text: "rule by elected assemblies in each province" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "glob-askia-songhai",
      family: "GLOB",
      title: "Askia Muhammad I of Songhai",
      kind: "Asia & Africa · WHII.6",
      blurb: "A ruler who built schools, provinces and an army along the Niger.",
      level: 1,
      passage: "<p>" + N(1) + "<strong>Askia Muhammad I</strong> took the throne of Songhai in 1493. " +
        N(2) + "A devout Muslim, he made a pilgrimage to Mecca and supported mosques and schools. " +
        N(3) + "He divided the empire into provinces run by governors, kept a standing army, and used standard <strong>weights and measures</strong> to aid trade. " +
        N(4) + "Timbuktu, near the Niger River, drew scholars from across the Islamic world.</p>",
      claims: [
        {
          id: "who",
          sol: "WHII.6.b",
          stem: "Which statement best describes Askia Muhammad I?",
          choices: [
            { letter: "A", text: "a Christian king of the Ethiopian highlands" },
            { letter: "B", text: "a Songhai ruler who promoted Islam and learning" },
            { letter: "C", text: "a Zulu king who built an army of regiments" },
            { letter: "D", text: "a Portuguese captain trading on the Gold Coast" }
          ],
          correct: "B"
        },
        {
          id: "river",
          sol: "WHII.6.a",
          stem: "Which river was most important to the Songhai Empire and the city of Timbuktu?",
          choices: [
            { letter: "A", text: "the Nile" },
            { letter: "B", text: "the Congo" },
            { letter: "C", text: "the Niger" },
            { letter: "D", text: "the Zambezi" }
          ],
          correct: "C"
        },
        {
          id: "weights",
          sol: "WHII.6.b",
          stem: "Using standard weights and measures most likely helped Songhai by —",
          choices: [
            { letter: "A", text: "making trade fairer and simpler for merchants" },
            { letter: "B", text: "ending the need for a standing army" },
            { letter: "C", text: "closing the empire to outside traders" },
            { letter: "D", text: "moving the capital away from the river" }
          ],
          correct: "A"
        },
        {
          id: "religion",
          sol: "WHII.6.c",
          stem: "Which religion did Askia Muhammad I promote as ruler of Songhai?",
          choices: [
            { letter: "A", text: "Animism" },
            { letter: "B", text: "Coptic Christianity" },
            { letter: "C", text: "Hinduism" },
            { letter: "D", text: "Islam" }
          ],
          correct: "D"
        },
        {
          id: "animism",
          sol: "WHII.6.c",
          stem: "Many farmers in Songhai kept practicing animism. Animism is the belief that —",
          choices: [
            { letter: "A", text: "spirits live in natural things such as rivers and trees" },
            { letter: "B", text: "one God revealed his law to the prophet Muhammad" },
            { letter: "C", text: "the emperor is descended from the sun goddess" },
            { letter: "D", text: "the soul escapes rebirth by following the Eightfold Path" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "glob-tokugawa-timeline",
      family: "GLOB",
      title: "Japan closes its doors",
      kind: "Asia & Africa · WHII.5",
      blurb: "A timeline of the Tokugawa shogunate and the closed-country policy.",
      level: 1,
      passage: "<p>" + N(1) + "Japan's emperor reigned in Kyoto, but the <strong>shogun</strong> held real power.</p>" +
        "<ul><li><strong>1603</strong> Tokugawa Ieyasu becomes shogun and governs from Edo (Tokyo).</li>" +
        "<li><strong>1614</strong> The shogunate bans Christianity.</li>" +
        "<li><strong>1635</strong> Japanese are forbidden to travel abroad.</li>" +
        "<li><strong>1639</strong> Portuguese traders are expelled; only Dutch and Chinese may trade, at Nagasaki.</li>" +
        "<li><strong>1853</strong> U.S. warships under Commodore Perry arrive and demand open ports.</li></ul>",
      claims: [
        {
          id: "first",
          sol: "WHII.5.d",
          stem: "Which of these events in Tokugawa Japan happened FIRST?",
          choices: [
            { letter: "A", text: "Christianity is banned in Japan." },
            { letter: "B", text: "Portuguese traders are expelled." },
            { letter: "C", text: "Tokugawa Ieyasu becomes shogun." },
            { letter: "D", text: "Commodore Perry's ships arrive." }
          ],
          correct: "C"
        },
        {
          id: "power",
          sol: "WHII.5.d",
          stem: "Who held real political power in Tokugawa Japan?",
          choices: [
            { letter: "A", text: "the emperor in Kyoto" },
            { letter: "B", text: "the shogun in Edo" },
            { letter: "C", text: "Dutch merchants in Nagasaki" },
            { letter: "D", text: "Buddhist abbots in Nara" }
          ],
          correct: "B"
        },
        {
          id: "why",
          sol: "WHII.5.d",
          stem: "Which was a main reason for the closed-country policy?",
          choices: [
            { letter: "A", text: "to limit European and Christian influence that could threaten the shogun" },
            { letter: "B", text: "to increase trade with Portugal and Spain at every Japanese port" },
            { letter: "C", text: "to let the emperor take back direct control of the government" },
            { letter: "D", text: "to free the army for an invasion of Ming China and Korea" }
          ],
          correct: "A"
        },
        {
          id: "conclude",
          sol: "WHII.5.d",
          stem: "Which conclusion about Japan's foreign trade is best supported by the timeline?",
          choices: [
            { letter: "A", text: "Japan ended all contact with every foreign country." },
            { letter: "B", text: "Christianity spread quickly in Japan after 1614." },
            { letter: "C", text: "Perry's arrival caused Japan to close its ports." },
            { letter: "D", text: "Japan kept limited trade with a few foreigners." }
          ],
          correct: "D"
        },
        {
          id: "shogun",
          sol: "WHII.5.d",
          stem: "In sentence 1, the word shogun most nearly means —",
          choices: [
            { letter: "A", text: "a military ruler who governed while the emperor reigned" },
            { letter: "B", text: "a Buddhist priest who advised the emperor on religion" },
            { letter: "C", text: "a foreign merchant allowed to trade in a Japanese port" },
            { letter: "D", text: "a farmer who paid rice taxes to a local lord" }
          ],
          correct: "A"
        }
      ]
    },

    /* ---------- short ---------- */
    {
      id: "glob-mughal-rulers",
      family: "GLOB",
      title: "Mughal emperors and the Sikhs",
      kind: "Asia & Africa · WHII.5",
      blurb: "Five emperors, a famous tomb and a faith that pushed back.",
      level: 2,
      passage: "<p>" + N(1) + "Muslim rulers from Central Asia founded the <strong>Mughal Empire</strong> in northern India in 1526. " +
        N(2) + "Most of their subjects were Hindu.</p>" +
        "<table><tr><th>Emperor</th><th>Reign</th><th>Known for</th></tr>" +
        "<tr><td>Babur</td><td>1526–1530</td><td>founded the empire after the battle of Panipat</td></tr>" +
        "<tr><td>Akbar</td><td>1556–1605</td><td>tolerance; ended the jizya, a tax on non-Muslims</td></tr>" +
        "<tr><td>Jahangir</td><td>1605–1627</td><td>Guru Arjan, fifth Sikh guru, executed (1606)</td></tr>" +
        "<tr><td>Shah Jahan</td><td>1628–1658</td><td>built the Taj Mahal as a tomb for his wife</td></tr>" +
        "<tr><td>Aurangzeb</td><td>1658–1707</td><td>restored the jizya; Guru Tegh Bahadur executed (1675)</td></tr></table>" +
        "<p>" + N(3) + "In 1699 the tenth guru, Gobind Singh, formed the <strong>Khalsa</strong>, a community of committed Sikhs ready to defend their faith.</p>",
      claims: [
        {
          id: "tolerant",
          sol: "WHII.5.b",
          stem: "Based on the table, which emperor would a historian most likely describe as tolerant of other religions?",
          choices: [
            { letter: "A", text: "Akbar" },
            { letter: "B", text: "Aurangzeb" },
            { letter: "C", text: "Jahangir" },
            { letter: "D", text: "Shah Jahan" }
          ],
          correct: "A"
        },
        {
          id: "culture",
          sol: "WHII.5.b",
          stem: "Which is the best-known example of Mughal architecture?",
          choices: [
            { letter: "A", text: "the Forbidden City" },
            { letter: "B", text: "the Taj Mahal" },
            { letter: "C", text: "the Hagia Sophia" },
            { letter: "D", text: "the churches of Lalibela" }
          ],
          correct: "B"
        },
        {
          id: "khalsa",
          sol: "WHII.5.b",
          stem: "Which conclusion about the Sikhs is best supported by the table and sentence 3?",
          choices: [
            { letter: "A", text: "Every Mughal emperor protected the Sikh gurus." },
            { letter: "B", text: "Sikhs helped Babur found the Mughal Empire." },
            { letter: "C", text: "Conflict with Mughal rulers led Sikhs to organize in defense." },
            { letter: "D", text: "Sikhs and Mughals joined forces against the Portuguese." }
          ],
          correct: "C"
        },
        {
          id: "beliefs",
          sol: "WHII.5.b",
          stem: "Sikhism began with Guru Nanak in the Punjab region around 1500. Sikhs believe in —",
          choices: [
            { letter: "A", text: "the caste system as the path to salvation" },
            { letter: "B", text: "the divine nature of the Mughal emperor" },
            { letter: "C", text: "many gods who live in nature and in rivers" },
            { letter: "D", text: "one God and the equality of all people" }
          ],
          correct: "D"
        },
        {
          id: "jizya",
          sol: "WHII.5.b",
          stem: "Which was the most likely effect of Aurangzeb's decision to restore the jizya?",
          choices: [
            { letter: "A", text: "Hindu and Sikh resistance to Mughal rule grew." },
            { letter: "B", text: "European trading posts in India were closed." },
            { letter: "C", text: "Most Hindus in the empire became Muslims." },
            { letter: "D", text: "The Mughal Empire expanded into China." }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "glob-swahili-map",
      family: "GLOB",
      title: "A map of the Swahili coast",
      kind: "Asia & Africa · WHII.6",
      blurb: "Port cities, monsoon winds and goods from three continents.",
      level: 2,
      passage: "<p>" + N(1) + "On the map, a string of port cities (Mogadishu, Malindi, Mombasa, Zanzibar, Kilwa and Sofala) lines the coast of East Africa along the Indian Ocean. " +
        N(2) + "Arrows show <strong>monsoon</strong> winds blowing toward Africa from Arabia and India in winter and back again in summer. " +
        N(3) + "Labels list exports: gold carried from the interior to Sofala, ivory, and enslaved people. " +
        N(4) + "Imports include cotton cloth from India, porcelain from China and glass beads. " +
        N(5) + "A note says the Portuguese attacked Kilwa and Mombasa in the early 1500s.</p>",
      claims: [
        {
          id: "winds",
          sol: "WHII.6.e",
          stem: "Which geographic feature most helped trade between East Africa and Asia?",
          choices: [
            { letter: "A", text: "the Sahara" },
            { letter: "B", text: "the monsoon winds" },
            { letter: "C", text: "the Niger River" },
            { letter: "D", text: "the Atlantic currents" }
          ],
          correct: "B"
        },
        {
          id: "culture",
          sol: "WHII.6.e",
          stem: "The Swahili language and culture of these cities blended —",
          choices: [
            { letter: "A", text: "Portuguese and Dutch traditions" },
            { letter: "B", text: "Chinese and Japanese traditions" },
            { letter: "C", text: "Zulu and Asante traditions" },
            { letter: "D", text: "Bantu African and Arab traditions" }
          ],
          correct: "D"
        },
        {
          id: "where",
          sol: "WHII.6.a",
          stem: "The cities on the map are located in —",
          choices: [
            { letter: "A", text: "western Africa, along the Gulf of Guinea" },
            { letter: "B", text: "southern Africa, near the Cape of Good Hope" },
            { letter: "C", text: "eastern Africa, along the Indian Ocean" },
            { letter: "D", text: "central Africa, along the Congo River" }
          ],
          correct: "C"
        },
        {
          id: "exchange",
          sol: "WHII.6.h",
          stem: "Which exchange is best supported by the map?",
          choices: [
            { letter: "A", text: "African gold and ivory for Asian cloth and porcelain" },
            { letter: "B", text: "African salt and copper for European guns and horses" },
            { letter: "C", text: "Asian silver and tea for African cattle and grain" },
            { letter: "D", text: "European wool and wine for African kola nuts" }
          ],
          correct: "A"
        },
        {
          id: "islam",
          sol: "WHII.6.e",
          stem: "Which religion spread to the Swahili city-states through trade and became the faith of most coastal merchants?",
          choices: [
            { letter: "A", text: "Coptic Christianity" },
            { letter: "B", text: "Islam" },
            { letter: "C", text: "Shinto" },
            { letter: "D", text: "Sikhism" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "glob-kongo-letter",
      family: "GLOB",
      title: "A king of Kongo writes to Portugal",
      kind: "Asia & Africa · WHII.6",
      blurb: "Afonso I welcomes Christianity but protests the slave trade.",
      level: 2,
      passage: "<p>" + N(1) + "The Kingdom of <strong>Kongo</strong> lay near the mouth of the Congo River in central Africa. " +
        N(2) + "After Portuguese ships arrived in the 1480s, King Afonso I adopted Christianity and sent young nobles to study in Portugal.</p>" +
        "<blockquote>" + N(3) + "Each day the traders are kidnapping our people, children of this country, sons of our nobles and vassals, even people of our own family. " +
        N(4) + "Our country is being completely <strong>depopulated</strong>. " +
        N(5) + "It is our will that in these kingdoms there should not be any trade of slaves.</blockquote>" +
        "<p class=\"src\">— King Afonso I of Kongo, letter to the King of Portugal, 1526 (adapted)</p>",
      claims: [
        {
          id: "purpose",
          sol: "WHII.6.d",
          stem: "The main purpose of Afonso's letter was to —",
          choices: [
            { letter: "A", text: "invite more Portuguese traders into Kongo" },
            { letter: "B", text: "ask for priests to replace Kongo's nobles" },
            { letter: "C", text: "ask Portugal to stop the slave trade in Kongo" },
            { letter: "D", text: "declare war on the kingdom of Portugal" }
          ],
          correct: "C"
        },
        {
          id: "faith",
          sol: "WHII.6.g",
          stem: "Which statement best describes religion in Kongo under Afonso I?",
          choices: [
            { letter: "A", text: "The king adopted Christianity, often blended with local beliefs." },
            { letter: "B", text: "The king made Islam the faith of the court and the schools." },
            { letter: "C", text: "The king banned Christianity and expelled the missionaries." },
            { letter: "D", text: "The king required all subjects to worship the Golden Stool." }
          ],
          correct: "A"
        },
        {
          id: "goods",
          sol: "WHII.6.h",
          stem: "Which goods did Portuguese traders most seek from Kongo?",
          choices: [
            { letter: "A", text: "silk and porcelain" },
            { letter: "B", text: "tea and silver" },
            { letter: "C", text: "cotton and pepper" },
            { letter: "D", text: "ivory, copper and captives" }
          ],
          correct: "D"
        },
        {
          id: "view",
          sol: "WHII.6.d",
          stem: "Which conclusion is best supported by the passage and the letter?",
          choices: [
            { letter: "A", text: "Afonso welcomed every part of the Portuguese presence." },
            { letter: "B", text: "Afonso valued ties to Portugal but saw harm in the slave trade." },
            { letter: "C", text: "The slave trade made Kongo's population grow larger." },
            { letter: "D", text: "Portugal had already outlawed the trade in enslaved people." }
          ],
          correct: "B"
        },
        {
          id: "depop",
          sol: "WHII.6.d",
          stem: "In sentence 4, the word depopulated most nearly means —",
          choices: [
            { letter: "A", text: "becoming crowded" },
            { letter: "B", text: "becoming Christian" },
            { letter: "C", text: "losing its people" },
            { letter: "D", text: "gaining new lands" }
          ],
          correct: "C"
        }
      ]
    },

    /* ---------- medium ---------- */
    {
      id: "glob-closed-doors",
      family: "GLOB",
      title: "China and Japan answer the outside world",
      kind: "Asia & Africa · WHII.5",
      blurb: "A Qing emperor and a Tokugawa edict limit foreign contact.",
      level: 3,
      passage: "<p>" + N(1) + "In 1793 a British mission asked the Qing emperor to open more Chinese ports to trade. " +
        N(2) + "He refused; Europeans could trade only at Canton (Guangzhou), under strict rules.</p>" +
        "<blockquote>" + N(3) + "Our Celestial Empire possesses all things in abundance and lacks no product within its own borders. " +
        N(4) + "There is therefore no need to import the manufactures of outside barbarians.</blockquote>" +
        "<p class=\"src\">Source A — the Qianlong Emperor to King George III, 1793 (translated, adapted)</p>" +
        "<blockquote>" + N(5) + "Japanese ships are strictly forbidden to leave for foreign countries. " +
        N(6) + "Any Japanese who returns after living overseas must be put to death. " +
        N(7) + "Where the teachings of the Christian priests are practiced, officials must investigate.</blockquote>" +
        "<p class=\"src\">Source B — Closed Country Edict, Japan, 1635 (adapted)</p>" +
        "<p>" + N(8) + "In Japan the emperor was honored in <strong>Shinto</strong> tradition as a descendant of the sun goddess, while Buddhism and Confucian ideas also shaped daily life.</p>",
      claims: [
        {
          id: "qing-view",
          sol: "WHII.5.c",
          stem: "Source A shows that the Qing emperor believed —",
          choices: [
            { letter: "A", text: "China needed British factories to modernize" },
            { letter: "B", text: "Britain was China's equal in power and culture" },
            { letter: "C", text: "China had all it needed and did not need European goods" },
            { letter: "D", text: "foreign trade should be open at every Chinese port" }
          ],
          correct: "C"
        },
        {
          id: "edict-purpose",
          sol: "WHII.5.d",
          stem: "The main purpose of the edict in Source B was to —",
          choices: [
            { letter: "A", text: "cut Japan off from foreign and Christian influence" },
            { letter: "B", text: "encourage Japanese merchants to settle overseas" },
            { letter: "C", text: "give the emperor command of the samurai armies" },
            { letter: "D", text: "invite Christian missionaries to teach in Japan" }
          ],
          correct: "A"
        },
        {
          id: "both",
          sol: "WHII.5.d",
          stem: "Select TWO conclusions supported by BOTH Source A and Source B.",
          choices: [
            { letter: "A", text: "Both governments welcomed Christian missionaries." },
            { letter: "B", text: "Both governments limited contact with Europeans." },
            { letter: "C", text: "Both governments sent fleets to explore the world." },
            { letter: "D", text: "Both rulers saw little benefit in more contact with outsiders." }
          ],
          correct: ["B", "D"]
        },
        {
          id: "manchu",
          sol: "WHII.5.c",
          stem: "The Qing dynasty that ruled China in 1793 had been founded by —",
          choices: [
            { letter: "A", text: "Manchus from beyond the Great Wall to the northeast" },
            { letter: "B", text: "Mongol horsemen led by the heirs of Genghis Khan" },
            { letter: "C", text: "Han Chinese rebels who drove out the Mongols" },
            { letter: "D", text: "Japanese samurai who had invaded through Korea" }
          ],
          correct: "A"
        },
        {
          id: "shinto",
          sol: "WHII.5.d",
          stem: "In sentence 8, Shinto is best described as —",
          choices: [
            { letter: "A", text: "a Chinese system of civil service exams" },
            { letter: "B", text: "a Christian church brought by the Portuguese" },
            { letter: "C", text: "a branch of Buddhism founded in India" },
            { letter: "D", text: "a Japanese religion that honors the kami, or spirits" }
          ],
          correct: "D"
        },
        {
          id: "ottoman",
          sol: "WHII.5.a",
          stem: "Unlike Qing China and Tokugawa Japan, the Ottoman Empire of the 1500s —",
          choices: [
            { letter: "A", text: "banned all foreign merchants from its ports" },
            { letter: "B", text: "chose its officials through Confucian exams" },
            { letter: "C", text: "grew rich by taxing trade between Asia and Europe" },
            { letter: "D", text: "was ruled by a shogun in the emperor's name" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "glob-asante-stool",
      family: "GLOB",
      title: "The Golden Stool of Asante",
      kind: "Asia & Africa · WHII.6",
      blurb: "Gold, guns, captives and a symbol of a nation's soul.",
      level: 2,
      passage: "<p>" + N(1) + "Around 1700, <strong>Osei Tutu</strong> united several Akan states into the Asante (Ashanti) Empire in the forests of present-day Ghana. " +
        N(2) + "According to tradition, the priest Okomfo Anokye called down a <strong>Golden Stool</strong> from the sky, and it became the symbol of the unity and soul of the Asante people. " +
        N(3) + "The ruler, the asantehene, governed from the capital, Kumasi, with a council of chiefs. " +
        N(4) + "Asante grew rich from gold. " +
        N(5) + "It also took captives in war and sold them to European traders on the coast in exchange for firearms and cloth. " +
        N(6) + "The guns helped Asante conquer more neighbors, producing still more captives. " +
        N(7) + "Most Asante followed a traditional religion that honored a supreme creator, spirits in nature, and the ancestors.</p>",
      claims: [
        {
          id: "government",
          sol: "WHII.6.f",
          stem: "Which statement best describes the Asante government?",
          choices: [
            { letter: "A", text: "a sultan who ruled by Islamic law from Timbuktu" },
            { letter: "B", text: "a king who ruled from Kumasi with a council of chiefs" },
            { letter: "C", text: "a Portuguese governor who ruled from a coastal fort" },
            { letter: "D", text: "an elected assembly of merchants from Akan towns" }
          ],
          correct: "B"
        },
        {
          id: "stool",
          sol: "WHII.6.c",
          stem: "According to sentence 2, the Golden Stool was important to the Asante because it —",
          choices: [
            { letter: "A", text: "served as the throne of the Portuguese governor" },
            { letter: "B", text: "was traded to Europeans for firearms and cloth" },
            { letter: "C", text: "marked the border between Asante and Songhai" },
            { letter: "D", text: "stood for the unity and soul of the Asante people" }
          ],
          correct: "D"
        },
        {
          id: "cycle",
          sol: "WHII.6.d",
          stem: "Sentences 5 and 6 describe a cycle. Which statement best explains it?",
          choices: [
            { letter: "A", text: "Guns bought with captives led to more wars and more captives." },
            { letter: "B", text: "Gold mining drew Europeans inland to settle in Kumasi." },
            { letter: "C", text: "Cloth imports ruined Asante weavers and ended the wars." },
            { letter: "D", text: "European traders conquered Asante and seized its gold." }
          ],
          correct: "A"
        },
        {
          id: "animism",
          sol: "WHII.6.c",
          stem: "The beliefs in sentence 7 are best described as —",
          choices: [
            { letter: "A", text: "Coptic Christianity from Egypt" },
            { letter: "B", text: "Sunni Islam from Arabia" },
            { letter: "C", text: "animism and honoring ancestors" },
            { letter: "D", text: "Confucian ideas of family duty" }
          ],
          correct: "C"
        },
        {
          id: "location",
          sol: "WHII.6.a",
          stem: "The Asante Empire was located in —",
          choices: [
            { letter: "A", text: "the forests of West Africa near the Gold Coast" },
            { letter: "B", text: "the highlands of East Africa near the Red Sea" },
            { letter: "C", text: "the grasslands of southern Africa near Natal" },
            { letter: "D", text: "the rain forest of central Africa near Angola" }
          ],
          correct: "A"
        },
        {
          id: "passage",
          sol: "WHII.6.d",
          stem: "Most captives sold on the West African coast in the 1700s were —",
          choices: [
            { letter: "A", text: "sent across the Sahara to work in Songhai salt mines" },
            { letter: "B", text: "taken to Portugal to serve as soldiers in Europe" },
            { letter: "C", text: "carried to Asia to work on Dutch spice islands" },
            { letter: "D", text: "shipped across the Atlantic to plantations in the Americas" }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "glob-faiths-compare",
      family: "GLOB",
      title: "Faith in Ethiopia and Songhai",
      kind: "Asia & Africa · WHII.6",
      blurb: "A Christian kingdom in the highlands, a Muslim empire on the Niger.",
      level: 3,
      passage: "<p><strong>Source 1: Ethiopia</strong> " + N(1) + "In the highlands of <strong>Ethiopia</strong>, Christianity had been the faith of kings since the 300s A.D. " +
        N(2) + "The Ethiopian Church was tied to the <strong>Coptic</strong> Church of Egypt and used the ancient language Ge'ez in worship. " +
        N(3) + "Mountains helped Ethiopia keep its faith as Muslim states grew around it. " +
        N(4) + "In the 1540s, Portuguese soldiers helped Ethiopia's emperor fight off an invasion by the Muslim Adal Sultanate. " +
        N(5) + "Churches carved from solid rock at Lalibela still draw pilgrims.</p>" +
        "<p><strong>Source 2: Songhai</strong> " + N(6) + "In Songhai, the rulers and the town merchants were Muslims, and scholars in Timbuktu studied Islamic law. " +
        N(7) + "In the countryside, most farmers kept older beliefs in nature spirits and ancestors, and some rulers honored both traditions to keep their support.</p>",
      claims: [
        {
          id: "mountains",
          sol: "WHII.6.c",
          stem: "According to Source 1, which geographic feature helped Ethiopia remain Christian?",
          choices: [
            { letter: "A", text: "the Niger River" },
            { letter: "B", text: "the Sahara" },
            { letter: "C", text: "the monsoon winds" },
            { letter: "D", text: "its mountain highlands" }
          ],
          correct: "D"
        },
        {
          id: "compare",
          sol: "WHII.6.c",
          stem: "Which statement best compares religion in the two sources?",
          choices: [
            { letter: "A", text: "Both states were ruled by Christian kings allied with Portugal." },
            { letter: "B", text: "Ethiopia's rulers were Christian, while Songhai's rulers were Muslim." },
            { letter: "C", text: "Both states banned traditional beliefs in the countryside." },
            { letter: "D", text: "Ethiopia's rulers were Muslim, while Songhai's rulers were Christian." }
          ],
          correct: "B"
        },
        {
          id: "songhai",
          sol: "WHII.6.c",
          stem: "According to Source 2, which statement describes religion in Songhai?",
          choices: [
            { letter: "A", text: "Islam was strong in towns, and animism was common in villages." },
            { letter: "B", text: "Christianity was strong in towns, and Islam in the villages." },
            { letter: "C", text: "Islam had replaced every older belief across the empire." },
            { letter: "D", text: "Songhai's rulers kept the people from learning about Islam." }
          ],
          correct: "A"
        },
        {
          id: "coptic",
          sol: "WHII.6.c",
          stem: "In sentence 2, the word Coptic refers to —",
          choices: [
            { letter: "A", text: "the Roman Catholic Church led by the pope" },
            { letter: "B", text: "a Muslim school of law in Timbuktu" },
            { letter: "C", text: "the ancient Christian church of Egypt" },
            { letter: "D", text: "a West African belief in nature spirits" }
          ],
          correct: "C"
        },
        {
          id: "askia",
          sol: "WHII.6.b",
          stem: "Askia Muhammad I most strengthened which pattern described in sentence 6?",
          choices: [
            { letter: "A", text: "the Portuguese defense of Christian kingdoms" },
            { letter: "B", text: "Islamic faith and learning in Songhai's towns" },
            { letter: "C", text: "the worship of ancestors in rural villages" },
            { letter: "D", text: "the carving of rock churches at Lalibela" }
          ],
          correct: "B"
        },
        {
          id: "horn",
          sol: "WHII.6.a",
          stem: "Which description best fits the location of Ethiopia?",
          choices: [
            { letter: "A", text: "eastern Africa, in the highlands of the Horn of Africa" },
            { letter: "B", text: "western Africa, along the bend of the Niger River" },
            { letter: "C", text: "central Africa, in the rain forest of the Congo basin" },
            { letter: "D", text: "southern Africa, on the grasslands near the Cape" }
          ],
          correct: "A"
        }
      ]
    },

    /* ---------- long ---------- */
    {
      id: "glob-ottoman-crossroads",
      family: "GLOB",
      title: "The Ottoman crossroads and the sea route to India",
      kind: "Asia & Africa · WHII.5",
      blurb: "Tariffs, trading posts and the secrets of a long-lived empire.",
      level: 3,
      passage: "<p>" + N(1) + "By the early 1500s the Ottoman Empire held Istanbul and the straits between the Black Sea and the Mediterranean, and in 1517 it conquered Egypt and gained control of the holy cities of Mecca and Medina. " +
        N(2) + "Silk, spices and other Asian goods bound for Europe by land or through the eastern Mediterranean passed through Ottoman hands, and the sultans collected <strong>tariffs</strong> on them. " +
        N(3) + "High prices helped push Portugal and other European states to seek an all-water route to Asia. " +
        N(4) + "After Vasco da Gama reached India in 1498, the Portuguese seized Goa (1510) as a trading post; later the Dutch, English and French built trading posts at Surat, Madras, Bombay, Calcutta and other ports. " +
        N(5) + "Still, Ottoman power lasted for centuries. " +
        N(6) + "A professional army that included the <strong>janissaries</strong>, a skilled bureaucracy, and a <strong>millet</strong> system that let Christian and Jewish communities follow their own religious laws helped hold together a diverse empire.</p>" +
        "<blockquote>" + N(7) + "In making his appointments the Sultan pays no regard to wealth or rank. " +
        N(8) + "Each man owes his position to his own merit.</blockquote>" +
        "<p class=\"src\">— Ogier Ghiselin de Busbecq, Hapsburg ambassador to Suleiman's court, 1550s (adapted)</p>",
      claims: [
        {
          id: "swahili",
          sol: "WHII.6.e",
          stem: "On the way to India in 1498, Vasco da Gama's ships stopped at ports belonging to which trade network?",
          choices: [
            { letter: "A", text: "the Swahili city-states of East Africa" },
            { letter: "B", text: "the trans-Saharan routes of Songhai" },
            { letter: "C", text: "the gold markets of the Asante forest" },
            { letter: "D", text: "the Silk Road caravans of Central Asia" }
          ],
          correct: "A"
        },
        {
          id: "tariffs",
          sol: "WHII.5.a",
          stem: "In sentence 2, the word tariffs most nearly means —",
          choices: [
            { letter: "A", text: "loans to merchants" },
            { letter: "B", text: "religious offerings" },
            { letter: "C", text: "taxes on traded goods" },
            { letter: "D", text: "maps of trade routes" }
          ],
          correct: "C"
        },
        {
          id: "chain",
          sol: "WHII.5.b",
          stem: "Which chain of events is best supported by the passage?",
          choices: [
            { letter: "A", text: "Portuguese posts in India → Ottoman conquest of Egypt → higher prices" },
            { letter: "B", text: "European posts in India → Ottoman tariffs → search for sea routes" },
            { letter: "C", text: "Search for sea routes → Ottoman tariffs → fall of Constantinople" },
            { letter: "D", text: "Ottoman tariffs → search for sea routes → European posts in India" }
          ],
          correct: "D"
        },
        {
          id: "goa",
          sol: "WHII.5.b",
          stem: "Which European power made Goa its main trading post in India in 1510?",
          choices: [
            { letter: "A", text: "England" },
            { letter: "B", text: "Portugal" },
            { letter: "C", text: "France" },
            { letter: "D", text: "the Netherlands" }
          ],
          correct: "B"
        },
        {
          id: "merit",
          sol: "WHII.5.a",
          stem: "Busbecq's observation best supports which reason for Ottoman strength?",
          choices: [
            { letter: "A", text: "Officials inherited their posts from noble fathers." },
            { letter: "B", text: "Wealthy merchants bought the highest offices." },
            { letter: "C", text: "The sultan shared power with an elected council." },
            { letter: "D", text: "Officials rose because of ability, not birth." }
          ],
          correct: "D"
        },
        {
          id: "longevity",
          sol: "WHII.5.a",
          stem: "Select TWO factors the passage gives for the long life of Ottoman power.",
          choices: [
            { letter: "A", text: "a professional army that included the janissaries" },
            { letter: "B", text: "an alliance with Portugal to share the spice trade" },
            { letter: "C", text: "a millet system that let religious groups keep their own laws" },
            { letter: "D", text: "a policy that required all subjects to convert to Islam" }
          ],
          correct: ["A", "C"]
        }
      ]
    },
    {
      id: "glob-ming-qing",
      family: "GLOB",
      title: "Ming and Qing China",
      kind: "Asia & Africa · WHII.5",
      blurb: "Palaces, voyages, exams and a Manchu takeover compared.",
      level: 2,
      passage: "<p>" + N(1) + "The <strong>Ming dynasty</strong> (1368–1644) drove out the Mongols and restored rule by Han Chinese. " +
        N(2) + "Ming emperors built the <strong>Forbidden City</strong>, a walled palace complex in Beijing, rebuilt the Great Wall in stone and brick, and from 1405 to 1433 sent Admiral Zheng He on huge voyages across the Indian Ocean as far as East Africa. " +
        N(3) + "In 1644 rebels took Beijing, and the <strong>Manchus</strong> from the northeast swept in to found the Qing dynasty. " +
        N(4) + "Both dynasties chose officials through civil service examinations based on the Confucian classics.</p>" +
        "<table><tr><th>Feature</th><th>Ming</th><th>Qing</th></tr>" +
        "<tr><td>Rulers</td><td>Han Chinese</td><td>Manchu minority</td></tr>" +
        "<tr><td>Territory</td><td>China proper</td><td>added Taiwan, Mongolia, Tibet and Xinjiang</td></tr>" +
        "<tr><td>European trade</td><td>Portuguese allowed at Macao</td><td>limited to Canton after 1757</td></tr>" +
        "<tr><td>Famous exports</td><td>porcelain, silk</td><td>porcelain, silk, tea</td></tr></table>" +
        "<p>" + N(5) + "Qing rulers required Han Chinese men to wear their hair in a <strong>queue</strong>, a long braid, as a sign of loyalty to the new dynasty. " +
        N(6) + "European merchants paid for Chinese goods largely in silver, much of it mined in Spanish America.</p>",
      claims: [
        {
          id: "territory",
          sol: "WHII.5.c",
          stem: "Which conclusion about the two dynasties is best supported by the table?",
          choices: [
            { letter: "A", text: "The Ming ruled more land than the Qing did." },
            { letter: "B", text: "The Qing expanded China's borders beyond Ming lands." },
            { letter: "C", text: "The Qing opened every port to European merchants." },
            { letter: "D", text: "The Ming stopped exporting porcelain and silk." }
          ],
          correct: "B"
        },
        {
          id: "zhenghe",
          sol: "WHII.6.e",
          stem: "Zheng He's fleets reached which region that was part of the Swahili trade network?",
          choices: [
            { letter: "A", text: "the Gold Coast of West Africa" },
            { letter: "B", text: "the Cape of Good Hope" },
            { letter: "C", text: "the mouth of the Congo River" },
            { letter: "D", text: "the East African coast" }
          ],
          correct: "D"
        },
        {
          id: "queue",
          sol: "WHII.5.c",
          stem: "Why did the Qing most likely require Han Chinese men to wear the queue?",
          choices: [
            { letter: "A", text: "to show the Han majority's submission to Manchu rule" },
            { letter: "B", text: "to mark which men had passed the civil service exams" },
            { letter: "C", text: "to set Chinese traders apart from the Portuguese" },
            { letter: "D", text: "to honor the Ming emperors who had built Beijing" }
          ],
          correct: "A"
        },
        {
          id: "exams",
          sol: "WHII.5.c",
          stem: "Because officials were chosen by exams on the Confucian classics, most government officials were —",
          choices: [
            { letter: "A", text: "Buddhist monks trained in monasteries" },
            { letter: "B", text: "army officers who had won battles" },
            { letter: "C", text: "scholars educated in Confucian ideas" },
            { letter: "D", text: "merchants from the port of Canton" }
          ],
          correct: "C"
        },
        {
          id: "forbidden",
          sol: "WHII.5.c",
          stem: "In sentence 2, the Forbidden City is described as —",
          choices: [
            { letter: "A", text: "the emperor's walled palace complex in Beijing" },
            { letter: "B", text: "a closed port where Europeans could not land" },
            { letter: "C", text: "a fortress built along the Great Wall" },
            { letter: "D", text: "a holy city that only monks could enter" }
          ],
          correct: "A"
        },
        {
          id: "japan",
          sol: "WHII.5.d",
          stem: "Tokugawa Japan's trade policy was most like the Qing policy in the table because Japan also —",
          choices: [
            { letter: "A", text: "conquered new lands in Tibet and Mongolia" },
            { letter: "B", text: "chose officials through Confucian exams" },
            { letter: "C", text: "let Portuguese traders settle at Macao" },
            { letter: "D", text: "limited European trade to one port" }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "glob-african-states",
      family: "GLOB",
      title: "Four African empires compared",
      kind: "Asia & Africa · WHII.6",
      blurb: "Songhai, Asante, Kongo and the Zulu: rulers, faiths and trade.",
      level: 3,
      passage: "<table><tr><th>Empire</th><th>Government</th><th>Religion of rulers</th><th>Main trade</th></tr>" +
        "<tr><td>Songhai (West Africa)</td><td>emperor with appointed provincial governors</td><td>Islam</td><td>gold and salt across the Sahara</td></tr>" +
        "<tr><td>Asante (West Africa)</td><td>asantehene with a council of chiefs</td><td>traditional religion</td><td>gold and captives for European guns</td></tr>" +
        "<tr><td>Kongo (central Africa)</td><td>king with appointed provincial governors</td><td>Christianity after 1491</td><td>ivory, copper and captives to Portugal</td></tr>" +
        "<tr><td>Zulu (southern Africa)</td><td>king commanding age-based regiments</td><td>traditional religion</td><td>cattle raised and raided</td></tr></table>" +
        "<p>" + N(1) + "In the early 1800s, <strong>Shaka</strong> built the Zulu kingdom in southern Africa. " +
        N(2) + "He organized young men into <strong>regiments</strong> by age, trained them to fight in close formation with short stabbing spears, and placed them under his own command. " +
        N(3) + "Zulu religion honored a creator, Unkulunkulu, and the spirits of ancestors, who were consulted through diviners and honored with cattle sacrifices. " +
        N(4) + "Cattle were the main measure of a family's wealth. " +
        N(5) + "In Kongo, by contrast, King Afonso I made Christianity the royal faith, built churches in the capital, Mbanza Kongo, and welcomed Portuguese priests. " +
        N(6) + "Many Kongolese blended Christian saints and rituals with older beliefs in spirits.</p>",
      claims: [
        {
          id: "islam",
          sol: "WHII.6.f",
          stem: "According to the table, in which empire did the rulers practice Islam?",
          choices: [
            { letter: "A", text: "Asante" },
            { letter: "B", text: "Kongo" },
            { letter: "C", text: "Songhai" },
            { letter: "D", text: "Zulu" }
          ],
          correct: "C"
        },
        {
          id: "politics",
          sol: "WHII.6.f",
          stem: "Which statement best contrasts the Kongo and Zulu political systems?",
          choices: [
            { letter: "A", text: "Kongo's king ruled through governors; the Zulu king relied on his regiments." },
            { letter: "B", text: "Kongo was ruled by a council of chiefs; the Zulu by an Islamic sultan." },
            { letter: "C", text: "Kongo's king ruled through his regiments; the Zulu king through governors." },
            { letter: "D", text: "Kongo was a Portuguese colony; the Zulu kingdom was a British colony." }
          ],
          correct: "A"
        },
        {
          id: "religion",
          sol: "WHII.6.g",
          stem: "Which statement best compares religion in Kongo and the Zulu Empire?",
          choices: [
            { letter: "A", text: "Both kingdoms adopted Islam through trade with Arab merchants." },
            { letter: "B", text: "Kongo kept Indigenous beliefs, while the Zulu adopted Christianity." },
            { letter: "C", text: "Both kingdoms rejected ancestor spirits and banned diviners." },
            { letter: "D", text: "Kongo's rulers adopted Christianity, while the Zulu kept Indigenous beliefs." }
          ],
          correct: "D"
        },
        {
          id: "blend",
          sol: "WHII.6.g",
          stem: "According to sentence 6, Christianity as practiced in Kongo —",
          choices: [
            { letter: "A", text: "was banned by the king after a few years" },
            { letter: "B", text: "was often mixed with older beliefs in spirits" },
            { letter: "C", text: "was brought to Kongo by Arab merchants" },
            { letter: "D", text: "replaced the king as the head of government" }
          ],
          correct: "B"
        },
        {
          id: "cattle",
          sol: "WHII.6.h",
          stem: "Based on the table and sentence 4, which resource was most valued in Zulu society?",
          choices: [
            { letter: "A", text: "gold" },
            { letter: "B", text: "salt" },
            { letter: "C", text: "cattle" },
            { letter: "D", text: "ivory" }
          ],
          correct: "C"
        },
        {
          id: "atlantic",
          sol: "WHII.6.d",
          stem: "Select TWO empires in the table that sold captives into the Transatlantic Slave Trade.",
          choices: [
            { letter: "A", text: "Asante" },
            { letter: "B", text: "Kongo" },
            { letter: "C", text: "Songhai" },
            { letter: "D", text: "Zulu" }
          ],
          correct: ["A", "B"]
        }
      ]
    }
  ];

  for (var i = 0; i < PACKS.length; i++) P.push(PACKS[i]);
})(typeof window !== "undefined" ? window : global);
