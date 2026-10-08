/* SOL Lab — World History I · Islamic Civilization & West Africa (WHI.6, WHI.8). Original text only. */
(function (global) {
  var P = global.HEIST_PACKS;
  if (!P || !P.push) return;
  var N = function (i) { return '<span class="n">(' + i + ')</span> '; };   // numbered sentence

  var PACKS = [
    /* ---------- tiny ---------- */
    {
      id: "islam-arabia-map",
      family: "ISLAM",
      title: "A map of the Arabian Peninsula",
      kind: "Islamic Civilization & West Africa · WHI.6",
      blurb: "Seas on three sides, desert in the middle, and green dots for water.",
      level: 1,
      passage: "<p>" + N(1) + "On the map, the <strong>Arabian Peninsula</strong> is bordered by the Red Sea on the west, the Persian Gulf on the east and the Arabian Sea on the south. " + N(2) + "Most of the land is desert, and there are no large rivers. " + N(3) + "Green dots mark <strong>oases</strong>, where springs and wells support date palms and small towns. " + N(4) + "A dashed line traces a caravan route along the western coast through Mecca and Medina.</p>",
      claims: [
        {
          id: "west",
          sol: "WHI.6.a",
          stem: "According to the map, which body of water lies along the western coast of the Arabian Peninsula?",
          choices: [
            { letter: "A", text: "the Persian Gulf" },
            { letter: "B", text: "the Red Sea" },
            { letter: "C", text: "the Caspian Sea" },
            { letter: "D", text: "the Black Sea" }
          ],
          correct: "B"
        },
        {
          id: "oases",
          sol: "WHI.6.a",
          stem: "In sentence 3, the word oases most nearly means —",
          choices: [
            { letter: "A", text: "fertile spots in a desert where water is found" },
            { letter: "B", text: "trading ports built along a rocky coast" },
            { letter: "C", text: "mountain passes used by caravans" },
            { letter: "D", text: "walled forts that guard a border" }
          ],
          correct: "A"
        },
        {
          id: "towns",
          sol: "WHI.6.a",
          stem: "Which statement best explains why settled towns in Arabia grew up where they did?",
          choices: [
            { letter: "A", text: "They were built along great rivers that flooded each year." },
            { letter: "B", text: "They were placed high in cool mountains far from trade." },
            { letter: "C", text: "They grew near reliable water and along trade routes." },
            { letter: "D", text: "They were founded where forests supplied lumber." }
          ],
          correct: "C"
        },
        {
          id: "bedouin",
          sol: "WHI.6.a",
          stem: "Which way of life was common among the Bedouin of the Arabian desert?",
          choices: [
            { letter: "A", text: "growing rice in flooded fields along the coast" },
            { letter: "B", text: "living in large cities ruled by a single king" },
            { letter: "C", text: "fishing for a living on the Persian Gulf" },
            { letter: "D", text: "herding camels, sheep and goats from pasture to pasture" }
          ],
          correct: "D"
        },
        {
          id: "mecca",
          sol: "WHI.6.a",
          stem: "Which conclusion about Mecca is best supported by the map?",
          choices: [
            { letter: "A", text: "It was the capital of the Persian Empire." },
            { letter: "B", text: "It lay at the mouth of the Persian Gulf." },
            { letter: "C", text: "It lay on a caravan route near the Red Sea coast." },
            { letter: "D", text: "It was surrounded by thick forests." }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "islam-five-pillars",
      family: "ISLAM",
      title: "The Five Pillars",
      kind: "Islamic Civilization & West Africa · WHI.6",
      blurb: "Five duties that shape a Muslim's day, year and life.",
      level: 1,
      passage: "<p>" + N(1) + "Muslims believe that the <strong>Five Pillars</strong> are the basic duties of Islam.</p><table><tr><th>Pillar</th><th>Practice</th></tr><tr><td>Shahada</td><td>declaring that there is one God and that Muhammad is his prophet</td></tr><tr><td>Salat</td><td>praying five times a day, facing Mecca</td></tr><tr><td>Zakat</td><td>giving charity to people in need</td></tr><tr><td>Sawm</td><td>fasting from dawn to sunset during Ramadan</td></tr><tr><td>Hajj</td><td>making a pilgrimage to Mecca once in a lifetime, if able</td></tr></table>",
      claims: [
        {
          id: "fast",
          sol: "WHI.6.b",
          stem: "According to the table, which pillar is practiced during the month of Ramadan?",
          choices: [
            { letter: "A", text: "Zakat" },
            { letter: "B", text: "Hajj" },
            { letter: "C", text: "Sawm" },
            { letter: "D", text: "Salat" }
          ],
          correct: "C"
        },
        {
          id: "mecca",
          sol: "WHI.6.b",
          stem: "Which conclusion is best supported by the table?",
          choices: [
            { letter: "A", text: "The city of Mecca holds a central place in Muslim worship." },
            { letter: "B", text: "Muslims are required to travel to Medina every year." },
            { letter: "C", text: "Prayer in Islam takes place only once a week." },
            { letter: "D", text: "Only religious leaders must follow the pillars." }
          ],
          correct: "A"
        },
        {
          id: "shahada",
          sol: "WHI.6.b",
          stem: "The Shahada shows that Islam, like Judaism and Christianity, is —",
          choices: [
            { letter: "A", text: "polytheistic, honoring many gods" },
            { letter: "B", text: "monotheistic, teaching belief in one God" },
            { letter: "C", text: "based on reincarnation and karma" },
            { letter: "D", text: "centered on the worship of ancestors" }
          ],
          correct: "B"
        },
        {
          id: "zakat",
          sol: "WHI.6.b",
          stem: "The practice of zakat most clearly reflects which value?",
          choices: [
            { letter: "A", text: "loyalty to a military lord" },
            { letter: "B", text: "obedience to the Roman emperor" },
            { letter: "C", text: "devotion to one's own ancestors" },
            { letter: "D", text: "responsibility for the poor in the community" }
          ],
          correct: "D"
        },
        {
          id: "sunnah",
          sol: "WHI.6.c",
          stem: "Muslims learn many details of how to perform the daily prayers from the Sunnah, which is —",
          choices: [
            { letter: "A", text: "the code of laws issued by the Byzantine emperors" },
            { letter: "B", text: "the example of Muhammad's own words and actions" },
            { letter: "C", text: "a collection of hymns from the ancient Vedas" },
            { letter: "D", text: "a set of rules written by Persian kings" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "islam-niger-zones",
      family: "ISLAM",
      title: "Desert, savanna and forest",
      kind: "Islamic Civilization & West Africa · WHI.8",
      blurb: "Three bands of land and one great river shape West African trade.",
      level: 1,
      passage: "<p>" + N(1) + "A map of West Africa shows three <strong>vegetation zones</strong> lying in bands from north to south: the Sahara desert, the grassy savanna and the tropical forest. " + N(2) + "The Niger River begins in highlands near the forest, flows northeast across the savanna and bends near Timbuktu at the desert's edge before turning south to the sea. " + N(3) + "Salt mines lie in the desert; gold fields lie in the south, near the forest.</p>",
      claims: [
        {
          id: "zone",
          sol: "WHI.8.a",
          stem: "In which vegetation zone did the empires of Ghana and Mali grow?",
          choices: [
            { letter: "A", text: "the tropical forest" },
            { letter: "B", text: "the savanna" },
            { letter: "C", text: "the deep Sahara" },
            { letter: "D", text: "the Mediterranean coast" }
          ],
          correct: "B"
        },
        {
          id: "trade",
          sol: "WHI.8.a",
          stem: "Based on sentence 3, which statement best explains why the gold-salt trade developed?",
          choices: [
            { letter: "A", text: "Gold was worthless to the people who mined it." },
            { letter: "B", text: "Rulers banned all other kinds of trade." },
            { letter: "C", text: "Both gold and salt were found in the savanna." },
            { letter: "D", text: "Each region had a resource that the other lacked." }
          ],
          correct: "D"
        },
        {
          id: "river",
          sol: "WHI.8.a",
          stem: "How did the Niger River help the growth of Mali?",
          choices: [
            { letter: "A", text: "It supplied water for farming and a route for boats." },
            { letter: "B", text: "It formed a wall that blocked all traders." },
            { letter: "C", text: "It carried caravans directly to Mecca." },
            { letter: "D", text: "It flowed north into the Mediterranean Sea." }
          ],
          correct: "A"
        },
        {
          id: "vocab",
          sol: "WHI.8.a",
          stem: "In sentence 1, vegetation zones are regions that differ mainly in their —",
          choices: [
            { letter: "A", text: "languages and religions" },
            { letter: "B", text: "rulers and capital cities" },
            { letter: "C", text: "plant life and rainfall" },
            { letter: "D", text: "metals and coins" }
          ],
          correct: "C"
        }
      ]
    },

    /* ---------- short ---------- */
    {
      id: "islam-hijrah-timeline",
      family: "ISLAM",
      title: "From Mecca to Baghdad",
      kind: "Islamic Civilization & West Africa · WHI.6",
      blurb: "A timeline of the first two centuries of Islam.",
      level: 2,
      passage: "<p>" + N(1) + "The timeline shows key events in the early history of Islam.</p><ul><li><strong>c. 570</strong> Muhammad is born in Mecca</li><li><strong>610</strong> Muslims believe Muhammad receives his first revelation from God through the angel Gabriel</li><li><strong>c. 613–622</strong> Muhammad preaches publicly; Mecca's leaders persecute his followers</li><li><strong>622</strong> The <strong>Hijrah</strong>: Muhammad and his followers move to Medina</li><li><strong>630</strong> Muhammad returns to Mecca, which accepts Islam</li><li><strong>632</strong> Muhammad dies; Abu Bakr becomes the first caliph</li><li><strong>661</strong> The Umayyad caliphs begin ruling from Damascus</li><li><strong>750</strong> The Abbasids take power and later build Baghdad</li></ul>",
      claims: [
        {
          id: "first",
          sol: "WHI.6.b",
          stem: "Which event happened FIRST?",
          choices: [
            { letter: "A", text: "the Hijrah to Medina" },
            { letter: "B", text: "the first revelation" },
            { letter: "C", text: "the return to Mecca" },
            { letter: "D", text: "the rise of the Umayyads" }
          ],
          correct: "B"
        },
        {
          id: "hijrah",
          sol: "WHI.6.b",
          stem: "As used in the timeline, the term Hijrah refers to —",
          choices: [
            { letter: "A", text: "a pilgrimage that every Muslim makes yearly" },
            { letter: "B", text: "the month of fasting from dawn to sunset" },
            { letter: "C", text: "the move of Muhammad's followers to Medina" },
            { letter: "D", text: "a war fought against the Byzantine Empire" }
          ],
          correct: "C"
        },
        {
          id: "why",
          sol: "WHI.6.b",
          stem: "Which statement best explains why Muhammad and his followers left Mecca in 622?",
          choices: [
            { letter: "A", text: "Mecca's leaders persecuted them for their beliefs." },
            { letter: "B", text: "A Persian army had captured the city of Mecca." },
            { letter: "C", text: "A long drought had dried up the wells of Mecca." },
            { letter: "D", text: "The caliph ordered them to settle in Damascus." }
          ],
          correct: "A"
        },
        {
          id: "calendar",
          sol: "WHI.6.b",
          stem: "The Muslim calendar counts its years from which event?",
          choices: [
            { letter: "A", text: "the birth of Muhammad" },
            { letter: "B", text: "the death of Muhammad" },
            { letter: "C", text: "the founding of Baghdad" },
            { letter: "D", text: "the Hijrah to Medina" }
          ],
          correct: "D"
        },
        {
          id: "capitals",
          sol: "WHI.6.d",
          stem: "Which conclusion about the years after 632 is best supported by the timeline?",
          choices: [
            { letter: "A", text: "Leadership passed to Muhammad's grandsons, who ruled from Mecca." },
            { letter: "B", text: "Caliphs led the Muslim state, and its capital moved beyond Arabia." },
            { letter: "C", text: "The Muslim state broke apart and disappeared within a decade." },
            { letter: "D", text: "The Byzantine emperors took control of Medina and Mecca." }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "islam-quran-sunnah",
      family: "ISLAM",
      title: "The Qur'an and the Sunnah",
      kind: "Islamic Civilization & West Africa · WHI.6",
      blurb: "The two main sources of Islamic belief, practice and law.",
      level: 2,
      passage: "<p>" + N(1) + "Muslims believe the <strong>Qur'an</strong> is the word of God as revealed to Muhammad, and they recite it in Arabic. " + N(2) + "Its verses were gathered into a single written book within a few decades of Muhammad's death. " + N(3) + "The <strong>Sunnah</strong> is the example of Muhammad's own words and deeds, recorded in reports called <strong>hadith</strong>. " + N(4) + "Together, the Qur'an and the Sunnah are the main sources of Islamic law, or <strong>sharia</strong>. " + N(5) + "They guide daily life: how to pray and fast, which foods are allowed, how to treat parents and neighbors, and how to settle questions of marriage, inheritance and trade.</p>",
      claims: [
        {
          id: "sunnah",
          sol: "WHI.6.c",
          stem: "According to sentence 3, the Sunnah is —",
          choices: [
            { letter: "A", text: "a list of the caliphs who ruled after Muhammad" },
            { letter: "B", text: "a book of laws borrowed from the Romans" },
            { letter: "C", text: "the example of Muhammad's words and deeds" },
            { letter: "D", text: "the yearly journey of pilgrims to Mecca" }
          ],
          correct: "C"
        },
        {
          id: "arabic",
          sol: "WHI.6.c",
          stem: "Why do many Muslims who speak Persian, Turkish or Malay still learn some Arabic?",
          choices: [
            { letter: "A", text: "The Qur'an is recited in Arabic." },
            { letter: "B", text: "Arabic was required to own land." },
            { letter: "C", text: "Arabic is the only written language." },
            { letter: "D", text: "Their rulers banned other languages." }
          ],
          correct: "A"
        },
        {
          id: "daily",
          sol: "WHI.6.c",
          stem: "Which is an example of the Qur'an and Sunnah shaping a Muslim's daily life?",
          choices: [
            { letter: "A", text: "choosing which caravan route to take across the desert" },
            { letter: "B", text: "deciding what color to paint a house" },
            { letter: "C", text: "selecting the crops that grow best in dry soil" },
            { letter: "D", text: "following rules about which foods may be eaten" }
          ],
          correct: "D"
        },
        {
          id: "hadith",
          sol: "WHI.6.c",
          stem: "In sentence 3, the word hadith most nearly means —",
          choices: [
            { letter: "A", text: "prayers said at sunset" },
            { letter: "B", text: "reports of what Muhammad said and did" },
            { letter: "C", text: "taxes paid by merchants" },
            { letter: "D", text: "verses of poetry about the desert" }
          ],
          correct: "B"
        },
        {
          id: "judge",
          sol: "WHI.6.c",
          stem: "A Muslim judge faces a question that the Qur'an does not answer directly. Based on the passage, where would the judge most likely look next?",
          choices: [
            { letter: "A", text: "the Sunnah" },
            { letter: "B", text: "the Torah" },
            { letter: "C", text: "Roman law" },
            { letter: "D", text: "the Vedas" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "islam-griots",
      family: "ISLAM",
      title: "Griots and manuscripts",
      kind: "Islamic Civilization & West Africa · WHI.8",
      blurb: "Two ways West Africans kept their history alive.",
      level: 2,
      passage: "<p>" + N(1) + "In the villages and royal courts of Mali, <strong>griots</strong> were trained storytellers, musicians and historians. " + N(2) + "They memorized the family histories of kings and the deeds of heroes and passed them on aloud from one generation to the next. " + N(3) + "The Epic of <strong>Sundiata</strong>, which tells how Mali's founder overcame a childhood disability and exile to defeat a rival king, survives through this <strong>oral tradition</strong>. " + N(4) + "Meanwhile, scholars in Timbuktu copied thousands of manuscripts in Arabic on law, medicine, astronomy and history. " + N(5) + "Historians today use both kinds of sources.</p>",
      claims: [
        {
          id: "griot",
          sol: "WHI.8.e",
          stem: "What was the main role of a griot in Mali?",
          choices: [
            { letter: "A", text: "collecting taxes on salt brought into the kingdom" },
            { letter: "B", text: "preserving history by memorizing and reciting it" },
            { letter: "C", text: "leading caravans across the Sahara" },
            { letter: "D", text: "copying the Qur'an by hand in Arabic" }
          ],
          correct: "B"
        },
        {
          id: "oral",
          sol: "WHI.8.e",
          stem: "In sentence 3, the term oral tradition most nearly means —",
          choices: [
            { letter: "A", text: "laws carved on stone pillars" },
            { letter: "B", text: "prayers recited five times a day" },
            { letter: "C", text: "records kept by tax collectors" },
            { letter: "D", text: "history passed on by speaking" }
          ],
          correct: "D"
        },
        {
          id: "arabic",
          sol: "WHI.8.d",
          stem: "The Timbuktu manuscripts described in sentence 4 are evidence that —",
          choices: [
            { letter: "A", text: "Arabic had become a language of learning in West Africa" },
            { letter: "B", text: "griots had stopped telling stories by the 1300s" },
            { letter: "C", text: "Mali's rulers wrote in Chinese characters" },
            { letter: "D", text: "West Africans had no contact with North Africa" }
          ],
          correct: "A"
        },
        {
          id: "both",
          sol: "WHI.8.e",
          stem: "Which statement best explains why historians use both griots' stories and written manuscripts?",
          choices: [
            { letter: "A", text: "Written sources were always more accurate than oral ones." },
            { letter: "B", text: "Oral stories were always more accurate than written ones." },
            { letter: "C", text: "Each kind of source records things the other may leave out." },
            { letter: "D", text: "Both kinds of sources were written in the same language." }
          ],
          correct: "C"
        },
        {
          id: "sundiata",
          sol: "WHI.8.e",
          stem: "According to the passage, Sundiata is remembered as —",
          choices: [
            { letter: "A", text: "the founder of the Mali Empire" },
            { letter: "B", text: "a merchant who crossed the Sahara" },
            { letter: "C", text: "the scholar who built Timbuktu" },
            { letter: "D", text: "a rival king defeated by Ghana" }
          ],
          correct: "A"
        }
      ]
    },

    /* ---------- medium ---------- */
    {
      id: "islam-trade-goods",
      family: "ISLAM",
      title: "Goods on the move",
      kind: "Islamic Civilization & West Africa · WHI.6",
      blurb: "Spices, paper, steel, cloth and new crops across the Muslim world.",
      level: 2,
      passage: "<p>" + N(1) + "By the 900s, Muslim merchants linked markets from Spain to China. " + N(2) + "Because one faith, one body of law and the <strong>Arabic</strong> language stretched across this vast region, a trader could travel, sign contracts and use letters of credit far from home. " + N(3) + "The table lists goods that moved along these routes.</p><table><tr><th>Good</th><th>Came from</th><th>Spread to</th></tr><tr><td>Spices (pepper, cloves)</td><td>India and Southeast Asia</td><td>Middle East and Europe</td></tr><tr><td>Paper</td><td>China</td><td>Baghdad, then Spain and Europe</td></tr><tr><td>Steel sword blades</td><td>India and Damascus</td><td>Across the Muslim world</td></tr><tr><td>Cotton and silk textiles</td><td>India, Egypt and Persia</td><td>Africa, Asia and Europe</td></tr><tr><td>New crops (sugar cane, citrus, rice)</td><td>India and Southeast Asia</td><td>Mediterranean lands and Spain</td></tr></table><p>" + N(4) + "Ships crossing the Indian Ocean used the <strong>monsoon</strong> winds, sailing toward India in summer and back toward Arabia and Africa in winter.</p>",
      claims: [
        {
          id: "paper",
          sol: "WHI.6.e",
          stem: "According to the table, which product reached the Muslim world from China?",
          choices: [
            { letter: "A", text: "paper" },
            { letter: "B", text: "pepper" },
            { letter: "C", text: "sugar cane" },
            { letter: "D", text: "steel blades" }
          ],
          correct: "A"
        },
        {
          id: "effect",
          sol: "WHI.6.e",
          stem: "Which was the most important result of paper spreading through the Muslim world?",
          choices: [
            { letter: "A", text: "Ships could sail without waiting for the winds." },
            { letter: "B", text: "Spices became too cheap to be worth trading." },
            { letter: "C", text: "Books and records became easier and cheaper to make." },
            { letter: "D", text: "Caravans no longer needed camels to cross deserts." }
          ],
          correct: "C"
        },
        {
          id: "monsoon",
          sol: "WHI.6.a",
          stem: "Sentence 4 suggests that merchants sailing from Arabia across the Indian Ocean had to —",
          choices: [
            { letter: "A", text: "row their ships against the wind all year" },
            { letter: "B", text: "time their voyages to the seasonal winds" },
            { letter: "C", text: "avoid the open sea and stay in rivers" },
            { letter: "D", text: "travel only during the month of Ramadan" }
          ],
          correct: "B"
        },
        {
          id: "language",
          sol: "WHI.6.d",
          stem: "According to sentence 2, how did the Arabic language help trade?",
          choices: [
            { letter: "A", text: "It replaced the use of coins in every market." },
            { letter: "B", text: "It was spoken only by sailors on the Indian Ocean." },
            { letter: "C", text: "It kept Christian and Jewish merchants out of trade." },
            { letter: "D", text: "It gave traders in distant lands a shared language." }
          ],
          correct: "D"
        },
        {
          id: "conclusion",
          sol: "WHI.6.e",
          stem: "Which generalization about Muslim trade is best supported by the table?",
          choices: [
            { letter: "A", text: "Europe produced most of the goods traded by Muslim merchants." },
            { letter: "B", text: "The Muslim world linked producers in Asia with buyers in Europe and Africa." },
            { letter: "C", text: "Trade in the Muslim world moved only in one direction, from west to east." },
            { letter: "D", text: "Muslim merchants traded mainly in weapons and few other goods." }
          ],
          correct: "B"
        },
        {
          id: "crops",
          sol: "WHI.6.e",
          stem: "Oranges and lemons grown in Spain by the 1000s are an example of which development shown in the table?",
          choices: [
            { letter: "A", text: "the spread of new crops from Asia" },
            { letter: "B", text: "the trade in steel sword blades" },
            { letter: "C", text: "the making of paper in Baghdad" },
            { letter: "D", text: "the export of textiles from Egypt" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "islam-ghana-bakri",
      family: "ISLAM",
      title: "Al-Bakri describes Ghana",
      kind: "Islamic Civilization & West Africa · WHI.8",
      blurb: "Two towns, twelve mosques and a king who taxed salt.",
      level: 3,
      passage: "<p>" + N(1) + "In 1068 the Muslim geographer al-Bakri, writing in Spain from travelers' reports, described the West African kingdom of <strong>Ghana</strong>.</p><blockquote>" + N(2) + "The city of Ghana consists of two towns. " + N(3) + "One, where the Muslims live, has twelve mosques. " + N(4) + "The king's town lies a short distance away. " + N(5) + "The king's interpreters, his treasurer and most of his ministers are Muslims. " + N(6) + "The king collects a <strong>tax</strong> of one dinar on every donkey-load of salt brought into the country and two dinars on every load taken out. " + N(7) + "All nuggets of gold found in the mines belong to the king; the people may keep only the gold dust.</blockquote><p class=\"src\">— al-Bakri, The Book of Roads and Kingdoms, 1068 (adapted)</p>",
      claims: [
        {
          id: "muslims",
          sol: "WHI.8.c",
          stem: "Sentences 3 and 5 best support which conclusion about Ghana in 1068?",
          choices: [
            { letter: "A", text: "Ghana's king had forced everyone in the kingdom to accept Islam." },
            { letter: "B", text: "Muslims lived in Ghana and served at court, though the king's town was separate." },
            { letter: "C", text: "Islam had not yet reached any part of West Africa." },
            { letter: "D", text: "The king had banned Muslims from his town and his government." }
          ],
          correct: "B"
        },
        {
          id: "advisers",
          sol: "WHI.8.d",
          stem: "Why would the king of Ghana have found Muslim officials useful?",
          choices: [
            { letter: "A", text: "They commanded the king's army of horsemen." },
            { letter: "B", text: "They owned the gold mines in the forest." },
            { letter: "C", text: "They were the only people who could farm the savanna." },
            { letter: "D", text: "They could keep records and write letters in Arabic." }
          ],
          correct: "D"
        },
        {
          id: "tax",
          sol: "WHI.8.a",
          stem: "Which conclusion is best supported by sentence 6?",
          choices: [
            { letter: "A", text: "Ghana's rulers grew wealthy by taxing the trade that passed through." },
            { letter: "B", text: "Ghana's rulers tried to stop all trade in salt." },
            { letter: "C", text: "Salt was so common in Ghana that it had no value." },
            { letter: "D", text: "Ghana's rulers paid traders to take salt away." }
          ],
          correct: "A"
        },
        {
          id: "nuggets",
          sol: "WHI.8.a",
          stem: "Historians often explain the rule in sentence 7 as a way for the king to —",
          choices: [
            { letter: "A", text: "give gold away to every family in the kingdom" },
            { letter: "B", text: "trade gold for paper money from China" },
            { letter: "C", text: "control the supply of gold and keep its value high" },
            { letter: "D", text: "send all of Ghana's gold to Mecca as a gift" }
          ],
          correct: "C"
        },
        {
          id: "salt",
          sol: "WHI.8.a",
          stem: "Why was salt so valuable to the people of the savanna and forest?",
          choices: [
            { letter: "A", text: "It was needed to preserve food and to stay healthy in the heat." },
            { letter: "B", text: "It was used as the only building material for houses." },
            { letter: "C", text: "It was mined in large amounts near the Niger River." },
            { letter: "D", text: "It was required by law as an offering at mosques." }
          ],
          correct: "A"
        },
        {
          id: "source",
          sol: "WHI.8.e",
          stem: "Which fact about this source should a historian keep in mind when using it?",
          choices: [
            { letter: "A", text: "It was written by a griot in the king's court." },
            { letter: "B", text: "Al-Bakri based it on reports rather than his own visit." },
            { letter: "C", text: "It was written centuries after Ghana disappeared." },
            { letter: "D", text: "It was translated from a Chinese original." }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "islam-arabic-spread",
      family: "ISLAM",
      title: "Faith, rule and language",
      kind: "Islamic Civilization & West Africa · WHI.6",
      blurb: "Muslim rule spread fast; conversion and Arabic followed at their own pace.",
      level: 2,
      passage: "<p>" + N(1) + "Within about a century of Muhammad's death in 632, Muslim armies had built an empire reaching from Spain and North Africa to Persia and the borders of India. " + N(2) + "The Byzantine and Persian empires, worn out by long wars with each other, could not stop the advance. " + N(3) + "Conquered Christians and Jews, called <strong>People of the Book</strong>, were usually allowed to keep their faith if they paid a special tax. " + N(4) + "Conversion to Islam happened gradually, over several centuries. " + N(5) + "The <strong>Arabic</strong> language spread faster, because it was the language of the Qur'an, of government and of trade. " + N(6) + "In Egypt, Syria and North Africa, Arabic slowly replaced older languages in daily life, while Persians accepted Islam but kept speaking Persian, now written in Arabic script.</p>",
      claims: [
        {
          id: "cause",
          sol: "WHI.6.d",
          stem: "According to sentence 2, which factor helped Muslim armies expand so quickly?",
          choices: [
            { letter: "A", text: "the help of Chinese armies from the east" },
            { letter: "B", text: "the weakness of the Byzantine and Persian empires" },
            { letter: "C", text: "the invention of gunpowder weapons" },
            { letter: "D", text: "the use of ships to cross the Atlantic" }
          ],
          correct: "B"
        },
        {
          id: "people",
          sol: "WHI.6.d",
          stem: "In sentence 3, the term People of the Book refers to —",
          choices: [
            { letter: "A", text: "scholars who copied manuscripts" },
            { letter: "B", text: "merchants who kept account books" },
            { letter: "C", text: "Jews and Christians, who had scriptures" },
            { letter: "D", text: "Persians who wrote in Arabic script" }
          ],
          correct: "C"
        },
        {
          id: "quran",
          sol: "WHI.6.c",
          stem: "Sentence 5 says Arabic spread partly because it was the language of the Qur'an. Why did that matter to new Muslims?",
          choices: [
            { letter: "A", text: "They recited the Qur'an in Arabic during prayer." },
            { letter: "B", text: "They needed Arabic to pay the special tax." },
            { letter: "C", text: "They were forbidden to speak any other language." },
            { letter: "D", text: "They used Arabic only when trading with China." }
          ],
          correct: "A"
        },
        {
          id: "compare",
          sol: "WHI.6.d",
          stem: "How did the experience of Persia differ from that of Egypt, according to sentence 6?",
          choices: [
            { letter: "A", text: "Persia rejected Islam, while Egypt accepted it." },
            { letter: "B", text: "Egypt kept its old language, while Persia adopted Arabic." },
            { letter: "C", text: "Neither Persia nor Egypt was ever under Muslim rule." },
            { letter: "D", text: "Both accepted Islam, but only Egypt came to speak Arabic." }
          ],
          correct: "D"
        },
        {
          id: "two",
          sol: "WHI.6.d",
          stem: "Select TWO reasons the passage gives for the spread of the Arabic language.",
          choices: [
            { letter: "A", text: "It was the language of the Qur'an." },
            { letter: "B", text: "It was the language of the Byzantine court." },
            { letter: "C", text: "It had replaced Persian in Persia by 700." },
            { letter: "D", text: "It was used in government and in trade." }
          ],
          correct: ["A", "D"]
        },
        {
          id: "split",
          sol: "WHI.6.b",
          stem: "Disagreement over who should lead the Muslim community after Muhammad's death led to —",
          choices: [
            { letter: "A", text: "the Great Schism between Rome and Constantinople" },
            { letter: "B", text: "the founding of the city of Mecca" },
            { letter: "C", text: "the division between Sunni and Shia Muslims" },
            { letter: "D", text: "the end of the Five Pillars as duties" }
          ],
          correct: "C"
        }
      ]
    },

    /* ---------- long ---------- */
    {
      id: "islam-mansa-musa",
      family: "ISLAM",
      title: "Mansa Musa's pilgrimage",
      kind: "Islamic Civilization & West Africa · WHI.8",
      blurb: "A king of Mali crosses the desert to Mecca, and the world takes notice.",
      level: 3,
      passage: "<p>" + N(1) + "In 1324, <strong>Mansa Musa</strong>, ruler of Mali, set out on the <strong>hajj</strong> to Mecca. " + N(2) + "Arab writers of the time describe a huge caravan of officials, soldiers and servants, with camels carrying large amounts of gold. " + N(3) + "In Cairo he gave away and spent so much gold that, according to the Arab historian al-Umari, its value there remained lower for years afterward. " + N(4) + "The journey made Mali famous: a European map drawn in 1375, the Catalan Atlas, shows Mansa Musa holding a gold nugget. " + N(5) + "Musa returned with Muslim scholars and an architect, and Mali built mosques and schools in <strong>Timbuktu</strong>, which grew into a center of Islamic learning. " + N(6) + "Mali's wealth rested on controlling the trade routes between the gold fields of the south and the salt mines of the Sahara. " + N(7) + "Its cities depended on many <strong>specialized</strong> workers: farmers along the Niger, fishers, blacksmiths, weavers, traders and scholars. " + N(8) + "Most people in the countryside, however, continued to follow traditional beliefs, and many rulers blended Islam with local customs.</p>",
      claims: [
        {
          id: "purpose",
          sol: "WHI.8.c",
          stem: "What was the main purpose of Mansa Musa's journey in 1324?",
          choices: [
            { letter: "A", text: "to conquer the city of Cairo" },
            { letter: "B", text: "to buy salt for the people of Mali" },
            { letter: "C", text: "to find a sea route to India" },
            { letter: "D", text: "to fulfill the Muslim duty of pilgrimage" }
          ],
          correct: "D"
        },
        {
          id: "gold",
          sol: "WHI.8.a",
          stem: "Which conclusion is best supported by sentence 3?",
          choices: [
            { letter: "A", text: "Mali controlled an enormous supply of gold." },
            { letter: "B", text: "Egypt had more gold than any West African kingdom." },
            { letter: "C", text: "Mansa Musa was robbed on his way to Mecca." },
            { letter: "D", text: "Gold was worth less in Mali than salt was in Cairo." }
          ],
          correct: "A"
        },
        {
          id: "timbuktu",
          sol: "WHI.8.c",
          stem: "Which was a result of Mansa Musa's pilgrimage?",
          choices: [
            { letter: "A", text: "Mali's capital moved across the Sahara to Morocco." },
            { letter: "B", text: "The gold-salt trade came to a sudden end." },
            { letter: "C", text: "Timbuktu became a center of Islamic learning." },
            { letter: "D", text: "Griots stopped reciting the history of Mali." }
          ],
          correct: "C"
        },
        {
          id: "special",
          sol: "WHI.8.b",
          stem: "In sentence 7, the word specialized describes workers who —",
          choices: [
            { letter: "A", text: "each produced everything their families needed" },
            { letter: "B", text: "concentrated on one kind of work or product" },
            { letter: "C", text: "were brought from Egypt to build mosques" },
            { letter: "D", text: "worked only for the king without pay" }
          ],
          correct: "B"
        },
        {
          id: "rural",
          sol: "WHI.8.c",
          stem: "Sentence 8 best supports which statement about Islam in Mali?",
          choices: [
            { letter: "A", text: "Islam was accepted by everyone in Mali by 1324." },
            { letter: "B", text: "Islam was banned in Mali's trading cities." },
            { letter: "C", text: "Traditional beliefs had vanished from West Africa." },
            { letter: "D", text: "Islam was strongest in towns and at court, less so in villages." }
          ],
          correct: "D"
        },
        {
          id: "arabic",
          sol: "WHI.8.d",
          stem: "Which statement best explains why Mali's rulers valued scholars who could read and write Arabic?",
          choices: [
            { letter: "A", text: "Arabic was used for religion, record keeping and trade with North Africa." },
            { letter: "B", text: "Arabic was the language spoken in most villages along the Niger River." },
            { letter: "C", text: "Arabic was needed to read the Catalan Atlas made in Europe." },
            { letter: "D", text: "Arabic was the language of the Epic of Sundiata told by griots." }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "islam-baghdad-cordoba",
      family: "ISLAM",
      title: "Baghdad and Cordoba",
      kind: "Islamic Civilization & West Africa · WHI.6",
      blurb: "Two great cities of the Muslim world, one on the Tigris and one in Spain.",
      level: 3,
      passage: "<p><strong>Source 1: Baghdad</strong> " + N(1) + "The Abbasid caliph al-Mansur founded Baghdad in 762 on the Tigris River, at a point where it runs close to the Euphrates. " + N(2) + "Its round walls enclosed palaces and government offices, while markets outside sold silk from China, spices from India and furs from the north. " + N(3) + "In the <strong>House of Wisdom</strong>, scholars translated Greek, Persian and Indian works into Arabic. " + N(4) + "Mathematicians such as al-Khwarizmi developed algebra and spread the Indian number system that Europeans later called Arabic numerals.</p><p><strong>Source 2: Cordoba</strong> " + N(5) + "In Spain, Umayyad rulers made Cordoba one of the largest cities in Europe by the 900s. " + N(6) + "It had paved streets, public baths, hundreds of mosques and a royal library said to hold hundreds of thousands of books. " + N(7) + "Muslim, Christian and Jewish scholars studied medicine, philosophy and astronomy there. " + N(8) + "Farmers in the region grew new crops such as oranges, rice and sugar cane, watered by irrigation canals.</p>",
      claims: [
        {
          id: "site",
          sol: "WHI.6.e",
          stem: "Which geographic feature most helped Baghdad grow into a trading center?",
          choices: [
            { letter: "A", text: "its position high in the mountains of Persia" },
            { letter: "B", text: "its location on the Atlantic coast of Spain" },
            { letter: "C", text: "its place on the Tigris near the Euphrates" },
            { letter: "D", text: "its distance from all major trade routes" }
          ],
          correct: "C"
        },
        {
          id: "compare",
          sol: "WHI.6.e",
          stem: "Which statement is supported by BOTH sources?",
          choices: [
            { letter: "A", text: "Each city was a center of learning as well as of wealth." },
            { letter: "B", text: "Each city was founded by the Abbasid caliph al-Mansur." },
            { letter: "C", text: "Each city banned scholars who were not Muslims." },
            { letter: "D", text: "Each city lay on the banks of the Tigris River." }
          ],
          correct: "A"
        },
        {
          id: "wisdom",
          sol: "WHI.6.e",
          stem: "As described in sentence 3, the House of Wisdom was —",
          choices: [
            { letter: "A", text: "the main mosque of Mecca" },
            { letter: "B", text: "a palace for the caliph's family" },
            { letter: "C", text: "a market for silk and spices" },
            { letter: "D", text: "a center of translation and study" }
          ],
          correct: "D"
        },
        {
          id: "europe",
          sol: "WHI.6.e",
          stem: "How did the work described in sentences 3, 4 and 7 later affect Europe?",
          choices: [
            { letter: "A", text: "It ended trade between Europe and the Muslim world." },
            { letter: "B", text: "Greek learning and new mathematics reached Europe, often through Spain." },
            { letter: "C", text: "European rulers adopted Arabic as their official language." },
            { letter: "D", text: "European scholars stopped studying medicine and astronomy." }
          ],
          correct: "B"
        },
        {
          id: "umayyad",
          sol: "WHI.6.d",
          stem: "Why was Cordoba ruled by the Umayyads while Baghdad was the capital of the Abbasids?",
          choices: [
            { letter: "A", text: "The Abbasids conquered Spain first and gave it to the Umayyads." },
            { letter: "B", text: "Cordoba had been the Umayyad capital since Muhammad's lifetime." },
            { letter: "C", text: "The Byzantines appointed the Umayyads to govern Spain for them." },
            { letter: "D", text: "An Umayyad prince fled to Spain after the Abbasids took power in 750." }
          ],
          correct: "D"
        },
        {
          id: "mosques",
          sol: "WHI.6.b",
          stem: "Sentence 6 mentions hundreds of mosques in Cordoba. Mosques were built mainly for which practice?",
          choices: [
            { letter: "A", text: "the yearly pilgrimage to Mecca" },
            { letter: "B", text: "prayer, especially the Friday prayer" },
            { letter: "C", text: "the translation of Greek books" },
            { letter: "D", text: "the trading of silk and spices" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "islam-caravan",
      family: "ISLAM",
      title: "Across the Sahara",
      kind: "Islamic Civilization & West Africa · WHI.8",
      blurb: "Camels, salt, gold and new ideas move between North and West Africa.",
      level: 2,
      passage: "<p>" + N(1) + "A caravan crossing the <strong>Sahara</strong> might include hundreds or even thousands of camels. " + N(2) + "Camels, which can travel many days without water, made regular desert crossings possible after they became common in North Africa in the early centuries A.D. " + N(3) + "Caravans left Sijilmasa in Morocco, stopped at the salt mines of Taghaza and reached the market towns of the Sahel, such as Walata and Timbuktu, after about two months. " + N(4) + "Southbound loads carried salt, cloth, copper, horses and books. " + N(5) + "Northbound loads carried gold, ivory, kola nuts and enslaved people, who were forced to walk across the desert. " + N(6) + "Guides, often Berbers of the desert, knew the way from oasis to oasis. " + N(7) + "Along with goods, the caravans carried ideas. " + N(8) + "Muslim merchants built mosques in trading towns, and local traders who became Muslims often found it easier to do business with them. " + N(9) + "Over time, West African families of Mande-speaking traders called <strong>Wangara</strong> specialized in long-distance <strong>commerce</strong>, linking the gold fields to the desert markets.</p>",
      claims: [
        {
          id: "camel",
          sol: "WHI.8.c",
          stem: "According to sentence 2, why were camels important to the trans-Saharan trade?",
          choices: [
            { letter: "A", text: "They could carry ships overland to the Niger." },
            { letter: "B", text: "They could cross long stretches without water." },
            { letter: "C", text: "They were traded for salt at Taghaza." },
            { letter: "D", text: "They were native to the West African forest." }
          ],
          correct: "B"
        },
        {
          id: "north",
          sol: "WHI.8.a",
          stem: "According to sentences 4 and 5, which good was carried NORTH across the Sahara?",
          choices: [
            { letter: "A", text: "salt" },
            { letter: "B", text: "copper" },
            { letter: "C", text: "horses" },
            { letter: "D", text: "gold" }
          ],
          correct: "D"
        },
        {
          id: "ideas",
          sol: "WHI.8.c",
          stem: "Which statement best explains how the caravan trade helped spread Islam in West Africa?",
          choices: [
            { letter: "A", text: "Merchants brought the faith, and shared beliefs made trade easier." },
            { letter: "B", text: "Armies from Mecca conquered the Sahel in a single war." },
            { letter: "C", text: "Griots required all traders to convert before entering towns." },
            { letter: "D", text: "The salt mines at Taghaza were owned by religious scholars." }
          ],
          correct: "A"
        },
        {
          id: "commerce",
          sol: "WHI.8.b",
          stem: "In sentence 9, the word commerce most nearly means —",
          choices: [
            { letter: "A", text: "farming" },
            { letter: "B", text: "warfare" },
            { letter: "C", text: "trade" },
            { letter: "D", text: "prayer" }
          ],
          correct: "C"
        },
        {
          id: "enslaved",
          sol: "WHI.8.a",
          stem: "Which statement about the trans-Saharan trade is supported by sentence 5?",
          choices: [
            { letter: "A", text: "Enslaved people were carried south from Morocco to Mali." },
            { letter: "B", text: "Only luxury goods such as ivory crossed the desert." },
            { letter: "C", text: "Enslaved people were among those forced north across the desert." },
            { letter: "D", text: "Kola nuts were the most valuable good in the trade." }
          ],
          correct: "C"
        },
        {
          id: "family",
          sol: "WHI.8.b",
          stem: "Why would long-distance trade often be organized through family networks like those in sentence 9?",
          choices: [
            { letter: "A", text: "Kings allowed only one family to trade at a time." },
            { letter: "B", text: "Trusted relatives in distant towns lowered the risk of trading." },
            { letter: "C", text: "Families could avoid paying any taxes on salt." },
            { letter: "D", text: "Traders were not allowed to speak to strangers." }
          ],
          correct: "B"
        }
      ]
    }
  ];

  for (var i = 0; i < PACKS.length; i++) P.push(PACKS[i]);
})(typeof window !== "undefined" ? window : global);
