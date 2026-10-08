/* SOL Lab — World History I · Ancient India & China (WHI.3). Original text only. */
(function (global) {
  var P = global.HEIST_PACKS;
  if (!P || !P.push) return;
  var N = function (i) { return '<span class="n">(' + i + ')</span> '; };   // numbered sentence

  var PACKS = [
    /* ---------- tiny ---------- */
    {
      id: "asia-monsoon",
      family: "ASIA",
      title: "Waiting for the rains",
      kind: "Ancient India & China · WHI.3",
      blurb: "The seasonal winds that decided whether Indian farmers ate.",
      level: 1,
      passage: "<p>" + N(1) + "Each summer, <strong>monsoon</strong> winds blow from the southwest across the Indian Ocean and carry heavy rains onto the Indian subcontinent. " + N(2) + "Farmers depended on these rains to grow rice and other crops. " + N(3) + "If the rains came late, crops failed and people went hungry; if they were too heavy, rivers flooded villages. " + N(4) + "In winter, the winds reverse and blow dry air from the northeast.</p>",
      claims: [
        {
          id: "vocab",
          sol: "WHI.3.a",
          stem: "In sentence 1, the word monsoon refers to —",
          choices: [
            { letter: "A", text: "a river that floods every spring" },
            { letter: "B", text: "a mountain range in the north" },
            { letter: "C", text: "a sandstorm from the desert" },
            { letter: "D", text: "a seasonal wind that shifts direction" }
          ],
          correct: "D"
        },
        {
          id: "why",
          sol: "WHI.3.a",
          stem: "Why were the summer monsoons so important to farmers in ancient India?",
          choices: [
            { letter: "A", text: "They brought the rain needed for crops." },
            { letter: "B", text: "They blew dry air over the fields." },
            { letter: "C", text: "They kept invaders out of the valleys." },
            { letter: "D", text: "They melted snow in the Himalayas." }
          ],
          correct: "A"
        },
        {
          id: "late",
          sol: "WHI.3.a",
          stem: "According to sentence 3, what could happen if the monsoon rains came late?",
          choices: [
            { letter: "A", text: "Rivers would flood the villages." },
            { letter: "B", text: "Winter winds would bring snow." },
            { letter: "C", text: "Crops would fail and people would go hungry." },
            { letter: "D", text: "Merchants would stop trading with China." }
          ],
          correct: "C"
        },
        {
          id: "conclude",
          sol: "WHI.3.a",
          stem: "Which conclusion is best supported by the passage?",
          choices: [
            { letter: "A", text: "Indian farmers did not need rivers or rain." },
            { letter: "B", text: "Life in ancient India depended on climate patterns." },
            { letter: "C", text: "India's climate stayed the same all year long." },
            { letter: "D", text: "The monsoon affected only people living in cities." }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "asia-mandate",
      family: "ASIA",
      title: "The Mandate of Heaven",
      kind: "Ancient India & China · WHI.3",
      blurb: "How the Zhou explained the right to rule, and to overthrow.",
      level: 1,
      passage: "<p>" + N(1) + "The Zhou dynasty, which overthrew the Shang around 1046 B.C., claimed to rule by the <strong>Mandate of Heaven</strong>. " + N(2) + "According to this idea, heaven granted a just ruler the right to govern. " + N(3) + "If a ruler became cruel or failed to protect the people, floods, famine and revolts were signs that heaven had withdrawn its approval, and a new family could rightfully take power.</p>",
      claims: [
        {
          id: "define",
          sol: "WHI.3.e",
          stem: "Which statement best describes the Mandate of Heaven?",
          choices: [
            { letter: "A", text: "Rulers were chosen by a vote of the people." },
            { letter: "B", text: "Heaven gave a just ruler the right to govern." },
            { letter: "C", text: "Priests ruled the land in place of kings." },
            { letter: "D", text: "A ruling family kept power no matter what." }
          ],
          correct: "B"
        },
        {
          id: "sign",
          sol: "WHI.3.e",
          stem: "According to sentence 3, which would have been seen as a sign that a ruler had lost the Mandate of Heaven?",
          choices: [
            { letter: "A", text: "a large harvest" },
            { letter: "B", text: "a peaceful border" },
            { letter: "C", text: "famine and revolt" },
            { letter: "D", text: "a newly dug canal" }
          ],
          correct: "C"
        },
        {
          id: "use",
          sol: "WHI.3.e",
          stem: "How did the Zhou use the idea of the Mandate of Heaven?",
          choices: [
            { letter: "A", text: "to justify overthrowing the Shang" },
            { letter: "B", text: "to enforce harsh Legalist laws" },
            { letter: "C", text: "to spread Buddhism to Korea" },
            { letter: "D", text: "to set up an elected assembly" }
          ],
          correct: "A"
        },
        {
          id: "cycle",
          sol: "WHI.3.e",
          stem: "The pattern of ruling families rising, weakening and being replaced in China is called the —",
          choices: [
            { letter: "A", text: "Silk Road" },
            { letter: "B", text: "Warring States" },
            { letter: "C", text: "Great Wall" },
            { letter: "D", text: "dynastic cycle" }
          ],
          correct: "D"
        },
        {
          id: "shang",
          sol: "WHI.3.e",
          stem: "According to sentence 1, which dynasty did the Zhou replace?",
          choices: [
            { letter: "A", text: "the Han" },
            { letter: "B", text: "the Qin" },
            { letter: "C", text: "the Shang" },
            { letter: "D", text: "the Ming" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "asia-four-truths",
      family: "ASIA",
      title: "The prince who left the palace",
      kind: "Ancient India & China · WHI.3",
      blurb: "Siddhartha Gautama, enlightenment and the path to end suffering.",
      level: 1,
      passage: "<p>" + N(1) + "Siddhartha Gautama was born a prince in the foothills of the Himalayas. " + N(2) + "After seeing old age, sickness and death, he left home to seek the cause of suffering. " + N(3) + "Buddhists believe he reached <strong>enlightenment</strong> while meditating under a tree and became the Buddha, or 'Enlightened One.' " + N(4) + "He taught the Four Noble Truths and the Eightfold Path as a way to end suffering and reach nirvana.</p>",
      claims: [
        {
          id: "cause",
          sol: "WHI.3.d",
          stem: "According to the Four Noble Truths, the main cause of suffering is —",
          choices: [
            { letter: "A", text: "desire, or craving" },
            { letter: "B", text: "a lack of wealth" },
            { letter: "C", text: "neglect of ancestors" },
            { letter: "D", text: "disobeying the state" }
          ],
          correct: "A"
        },
        {
          id: "vocab",
          sol: "WHI.3.d",
          stem: "In sentence 3, the word enlightenment most nearly means —",
          choices: [
            { letter: "A", text: "a reward of land and riches" },
            { letter: "B", text: "a ceremony crowning a new king" },
            { letter: "C", text: "a state of deep spiritual understanding" },
            { letter: "D", text: "a long journey to a holy city" }
          ],
          correct: "C"
        },
        {
          id: "path",
          sol: "WHI.3.d",
          stem: "According to sentence 4, what did the Buddha teach as the way to end suffering?",
          choices: [
            { letter: "A", text: "making sacrifices to many gods" },
            { letter: "B", text: "obeying the rules of one's varna" },
            { letter: "C", text: "memorizing the hymns of the Vedas" },
            { letter: "D", text: "following the Eightfold Path" }
          ],
          correct: "D"
        },
        {
          id: "born",
          sol: "WHI.3.d",
          stem: "According to the passage, where was Siddhartha Gautama born?",
          choices: [
            { letter: "A", text: "in the Huang He valley" },
            { letter: "B", text: "in the foothills of the Himalayas" },
            { letter: "C", text: "on the island of Sri Lanka" },
            { letter: "D", text: "on the Mesopotamian plain" }
          ],
          correct: "B"
        },
        {
          id: "nirvana",
          sol: "WHI.3.d",
          stem: "Nirvana, the goal named in sentence 4, is best described as —",
          choices: [
            { letter: "A", text: "release from suffering and rebirth" },
            { letter: "B", text: "rebirth into a higher varna" },
            { letter: "C", text: "service as a royal official" },
            { letter: "D", text: "a palace for the Buddha's monks" }
          ],
          correct: "A"
        }
      ]
    },

    /* ---------- short ---------- */
    {
      id: "asia-china-map",
      family: "ASIA",
      title: "China's Sorrow",
      kind: "Ancient India & China · WHI.3",
      blurb: "A map of the Huang He, the Yangtze and the barriers around China.",
      level: 2,
      passage: "<p>" + N(1) + "A map of ancient China shows the <strong>Huang He</strong>, or Yellow River, winding across the North China Plain to the sea. " + N(2) + "Farther south, the Yangtze River flows east to the East China Sea. " + N(3) + "The Himalayas and the Plateau of Tibet rise in the southwest, the Gobi Desert stretches across the north, and the Pacific Ocean lies to the east. " + N(4) + "A label notes that the Huang He carries yellow <strong>loess</strong> soil that enriches farmland, but its floods were so deadly that the river was called 'China's Sorrow.' " + N(5) + "Another label places the Shang dynasty along the Huang He.</p>",
      claims: [
        {
          id: "isolate",
          sol: "WHI.3.a",
          stem: "Which features on the map most isolated ancient China from other civilizations?",
          choices: [
            { letter: "A", text: "the Huang He and the Yangtze" },
            { letter: "B", text: "the loess soil of the plain" },
            { letter: "C", text: "mountains, deserts and an ocean" },
            { letter: "D", text: "the flat North China Plain" }
          ],
          correct: "C"
        },
        {
          id: "vocab",
          sol: "WHI.3.a",
          stem: "In sentence 4, the word loess most likely means —",
          choices: [
            { letter: "A", text: "fine, fertile soil that is easy to farm" },
            { letter: "B", text: "a kind of rice grown in flooded fields" },
            { letter: "C", text: "a wall of earth built to stop floods" },
            { letter: "D", text: "a sandstorm blowing from the desert" }
          ],
          correct: "A"
        },
        {
          id: "sorrow",
          sol: "WHI.3.a",
          stem: "Why was the Huang He called 'China's Sorrow'?",
          choices: [
            { letter: "A", text: "It was too shallow for boats." },
            { letter: "B", text: "It carried goods to China's enemies." },
            { letter: "C", text: "It froze solid every winter." },
            { letter: "D", text: "Its floods killed many people." }
          ],
          correct: "D"
        },
        {
          id: "cradle",
          sol: "WHI.3.e",
          stem: "Based on the map, where did early Chinese civilization under the Shang develop?",
          choices: [
            { letter: "A", text: "on the Plateau of Tibet" },
            { letter: "B", text: "in the Huang He valley" },
            { letter: "C", text: "in the Gobi Desert" },
            { letter: "D", text: "on islands in the Pacific" }
          ],
          correct: "B"
        },
        {
          id: "effect",
          sol: "WHI.3.e",
          stem: "How did geographic isolation most likely affect ancient Chinese culture?",
          choices: [
            { letter: "A", text: "It developed with little outside influence." },
            { letter: "B", text: "It came to depend on rulers from India." },
            { letter: "C", text: "It adopted the Phoenician alphabet." },
            { letter: "D", text: "It was unable to farm its river valleys." }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "asia-varna",
      family: "ASIA",
      title: "Varna and jati",
      kind: "Ancient India & China · WHI.3",
      blurb: "Four broad classes and thousands of birth groups in ancient India.",
      level: 1,
      passage: "<p>" + N(1) + "Ancient Indian society was organized into four broad <strong>varnas</strong>, or classes, described in the Vedas.</p><table><tr><th>Varna</th><th>Traditional role</th></tr><tr><td>Brahmins</td><td>priests and scholars</td></tr><tr><td>Kshatriyas</td><td>rulers and warriors</td></tr><tr><td>Vaishyas</td><td>merchants, traders and farmers</td></tr><tr><td>Shudras</td><td>laborers and servants</td></tr></table><p>" + N(2) + "Within the varnas were thousands of smaller groups called <strong>jati</strong>, usually linked to a family occupation, such as potter or weaver. " + N(3) + "People were born into their jati, married within it and followed its rules about food and work. " + N(4) + "Some groups were placed outside the varna system altogether and faced harsh discrimination.</p>",
      claims: [
        {
          id: "warriors",
          sol: "WHI.3.b",
          stem: "According to the table, which varna included rulers and warriors?",
          choices: [
            { letter: "A", text: "Brahmins" },
            { letter: "B", text: "Kshatriyas" },
            { letter: "C", text: "Vaishyas" },
            { letter: "D", text: "Shudras" }
          ],
          correct: "B"
        },
        {
          id: "vocab",
          sol: "WHI.3.b",
          stem: "In sentence 2, the word jati refers to —",
          choices: [
            { letter: "A", text: "a book of sacred hymns" },
            { letter: "B", text: "a type of Hindu temple" },
            { letter: "C", text: "a ruling family of kings" },
            { letter: "D", text: "a birth group tied to a job" }
          ],
          correct: "D"
        },
        {
          id: "birth",
          sol: "WHI.3.b",
          stem: "Which statement about jati is supported by sentence 3?",
          choices: [
            { letter: "A", text: "Membership was usually fixed at birth." },
            { letter: "B", text: "People chose a new jati every year." },
            { letter: "C", text: "Jati rules applied only to priests." },
            { letter: "D", text: "Members had to marry outside the group." }
          ],
          correct: "A"
        },
        {
          id: "karma",
          sol: "WHI.3.c",
          stem: "In Hindu belief, a person's birth into a certain varna was often explained as —",
          choices: [
            { letter: "A", text: "a reward for paying taxes" },
            { letter: "B", text: "a decision made by the king" },
            { letter: "C", text: "the result of karma from a past life" },
            { letter: "D", text: "the result of where a family moved" }
          ],
          correct: "C"
        },
        {
          id: "inherit",
          sol: "WHI.3.b",
          stem: "Which conclusion is best supported by the table and the passage?",
          choices: [
            { letter: "A", text: "Merchants held the highest rank in society." },
            { letter: "B", text: "There were no rules about work or marriage." },
            { letter: "C", text: "Priests and laborers shared the same varna." },
            { letter: "D", text: "Social position was largely inherited." }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "asia-analects",
      family: "ASIA",
      title: "Sayings of the Master",
      kind: "Ancient India & China · WHI.3",
      blurb: "Two passages from the Analects on virtue, law and reciprocity.",
      level: 2,
      passage: "<p>" + N(1) + "Confucius was a Chinese teacher who lived during a time of disorder, about 551 to 479 B.C. " + N(2) + "His students recorded his sayings in the <strong>Analects</strong>.</p><blockquote>If the people be led by laws, and uniformity sought to be given them by punishments, they will try to avoid the punishment, but have no sense of shame. If they be led by virtue, and uniformity sought to be given them by the rules of propriety, they will have the sense of shame, and moreover will become good.</blockquote><p class=\"src\">— Analects 2.3 (James Legge translation)</p><blockquote>What you do not want done to yourself, do not do to others.</blockquote><p class=\"src\">— Analects 15.23 (James Legge translation)</p>",
      claims: [
        {
          id: "virtue",
          sol: "WHI.3.f",
          stem: "According to the first excerpt, why is leading people by virtue better than leading them by punishment?",
          choices: [
            { letter: "A", text: "Punishments cost the state too much money." },
            { letter: "B", text: "People led by laws obey more willingly." },
            { letter: "C", text: "People led by virtue learn shame and become good." },
            { letter: "D", text: "Virtue lets rulers avoid writing any laws." }
          ],
          correct: "C"
        },
        {
          id: "disagree",
          sol: "WHI.3.f",
          stem: "Which Chinese philosophy would most strongly disagree with the first excerpt?",
          choices: [
            { letter: "A", text: "Legalism" },
            { letter: "B", text: "Confucianism" },
            { letter: "C", text: "filial piety" },
            { letter: "D", text: "the Mandate of Heaven" }
          ],
          correct: "A"
        },
        {
          id: "golden",
          sol: "WHI.3.f",
          stem: "The second excerpt is closest in meaning to which idea?",
          choices: [
            { letter: "A", text: "Obey the emperor without question." },
            { letter: "B", text: "Treat others as you want to be treated." },
            { letter: "C", text: "Seek harmony with nature by doing less." },
            { letter: "D", text: "Enforce the same law on every person." }
          ],
          correct: "B"
        },
        {
          id: "vocab",
          sol: "WHI.3.f",
          stem: "Based on sentence 2, the Analects is —",
          choices: [
            { letter: "A", text: "a code of laws carved in stone" },
            { letter: "B", text: "a book of Taoist nature poems" },
            { letter: "C", text: "a history of the Qin dynasty" },
            { letter: "D", text: "a collection of Confucius's sayings" }
          ],
          correct: "D"
        },
        {
          id: "filial",
          sol: "WHI.3.f",
          stem: "Which Confucian value stresses respect and duty toward parents and ancestors?",
          choices: [
            { letter: "A", text: "wu wei (non-action)" },
            { letter: "B", text: "filial piety" },
            { letter: "C", text: "nirvana" },
            { letter: "D", text: "the Tao (the Way)" }
          ],
          correct: "B"
        }
      ]
    },

    /* ---------- medium ---------- */
    {
      id: "asia-indus",
      family: "ASIA",
      title: "Cities of the Indus",
      kind: "Ancient India & China · WHI.3",
      blurb: "Planned streets, covered drains and a script no one can read.",
      level: 2,
      passage: "<p>" + N(1) + "India's first civilization arose around 2500 B.C. in the valley of the <strong>Indus River</strong>, in what is now Pakistan and northwest India. " + N(2) + "The Himalayas and the Hindu Kush mountains to the north sheltered the region, though passes such as the Khyber Pass let migrants, traders and invaders through. " + N(3) + "Archaeologists excavating Harappa and Mohenjo-daro found cities laid out in a <strong>grid</strong> of straight streets, with brick houses, covered drains and a large public bath. " + N(4) + "Bricks of the same size and standard weights suggest careful planning and organization. " + N(5) + "Indus seals have been found as far away as Mesopotamia, evidence of long-distance trade. " + N(6) + "The Indus script, however, has never been deciphered, so much about the society's beliefs and rulers remains unknown. " + N(7) + "By about 1900 B.C. the cities were in decline, possibly because of changes in rivers and climate.</p>",
      claims: [
        {
          id: "protect",
          sol: "WHI.3.a",
          stem: "Which geographic feature most helped protect the Indus Valley from invasion?",
          choices: [
            { letter: "A", text: "the Ganges River" },
            { letter: "B", text: "the Deccan Plateau" },
            { letter: "C", text: "the Indian Ocean" },
            { letter: "D", text: "the northern mountains" }
          ],
          correct: "D"
        },
        {
          id: "china",
          sol: "WHI.3.e",
          stem: "Like India's first civilization, the earliest Chinese civilization developed along —",
          choices: [
            { letter: "A", text: "the Nile River" },
            { letter: "B", text: "the Huang He" },
            { letter: "C", text: "the Tigris River" },
            { letter: "D", text: "the Ganges River" }
          ],
          correct: "B"
        },
        {
          id: "vocab",
          sol: "WHI.3.b",
          stem: "In sentence 3, the word grid refers to —",
          choices: [
            { letter: "A", text: "streets crossing at right angles" },
            { letter: "B", text: "a high wall around a city" },
            { letter: "C", text: "a ditch for irrigating fields" },
            { letter: "D", text: "a hill used for a temple" }
          ],
          correct: "A"
        },
        {
          id: "trade",
          sol: "WHI.3.b",
          stem: "Which evidence best supports the idea that the Indus people traded with distant lands?",
          choices: [
            { letter: "A", text: "covered drains" },
            { letter: "B", text: "a public bath" },
            { letter: "C", text: "seals found in Mesopotamia" },
            { letter: "D", text: "bricks of the same size" }
          ],
          correct: "C"
        },
        {
          id: "unknown",
          sol: "WHI.3.b",
          stem: "Why do historians know less about the Indus civilization than about Mesopotamia?",
          choices: [
            { letter: "A", text: "Its writing has never been deciphered." },
            { letter: "B", text: "It left behind no ruins or artifacts." },
            { letter: "C", text: "Its people never built any cities." },
            { letter: "D", text: "It lasted only a few years." }
          ],
          correct: "A"
        },
        {
          id: "decline",
          sol: "WHI.3.a",
          stem: "According to sentence 7, which possible cause of the Indus cities' decline is geographic?",
          choices: [
            { letter: "A", text: "an attack by the Qin army" },
            { letter: "B", text: "shifts in rivers and climate" },
            { letter: "C", text: "the spread of Buddhism" },
            { letter: "D", text: "the closing of the Silk Road" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "asia-hinduism",
      family: "ASIA",
      title: "Karma, dharma and rebirth",
      kind: "Ancient India & China · WHI.3",
      blurb: "The sacred texts, central beliefs and spread of Hinduism.",
      level: 2,
      passage: "<p>" + N(1) + "Hinduism has no single founder; it grew over many centuries from the beliefs of the peoples of ancient India. " + N(2) + "Its oldest sacred texts are the <strong>Vedas</strong>, hymns composed in Sanskrit, and later the Upanishads, which explore their meaning. " + N(3) + "Hindus believe in Brahman, a single universal spirit, and worship many gods and goddesses, such as Vishnu and Shiva, as forms of that spirit. " + N(4) + "Central beliefs include <strong>reincarnation</strong>, the rebirth of the soul in a new body; karma, the idea that actions in this life affect the next; and dharma, a person's duties. " + N(5) + "The goal is moksha, release from the cycle of rebirth. " + N(6) + "Merchants and priests carried Hindu beliefs across the Indian Ocean to Southeast Asia, where kings later built great temples such as Angkor Wat in Cambodia.</p>",
      claims: [
        {
          id: "vocab",
          sol: "WHI.3.c",
          stem: "In sentence 4, the word reincarnation refers to —",
          choices: [
            { letter: "A", text: "a soul being born again after death" },
            { letter: "B", text: "a prayer recited at a temple" },
            { letter: "C", text: "the duty to obey one's ruler" },
            { letter: "D", text: "a pilgrimage to the Ganges River" }
          ],
          correct: "A"
        },
        {
          id: "shared",
          sol: "WHI.3.d",
          stem: "Which beliefs did Buddhism share with Hinduism?",
          choices: [
            { letter: "A", text: "the need for priests to offer sacrifices" },
            { letter: "B", text: "the sacred authority of the Vedas" },
            { letter: "C", text: "reincarnation and the law of karma" },
            { letter: "D", text: "the worship of Vishnu and Shiva" }
          ],
          correct: "C"
        },
        {
          id: "karma",
          sol: "WHI.3.c",
          stem: "According to sentence 4, karma is —",
          choices: [
            { letter: "A", text: "release from the cycle of rebirth" },
            { letter: "B", text: "the idea that actions affect future lives" },
            { letter: "C", text: "a person's duties in his or her role" },
            { letter: "D", text: "the universal spirit present in all things" }
          ],
          correct: "B"
        },
        {
          id: "dharma",
          sol: "WHI.3.b",
          stem: "Which idea linked Hindu belief to the varna system?",
          choices: [
            { letter: "A", text: "Each person chose a new varna each year." },
            { letter: "B", text: "A family's varna depended only on wealth." },
            { letter: "C", text: "Priests and rulers had the same duties." },
            { letter: "D", text: "Each varna had its own dharma, or duties." }
          ],
          correct: "D"
        },
        {
          id: "spread",
          sol: "WHI.3.c",
          stem: "Angkor Wat in Cambodia, described in sentence 6, is evidence that —",
          choices: [
            { letter: "A", text: "Buddhism began in Southeast Asia" },
            { letter: "B", text: "Cambodia was ruled by the Qin dynasty" },
            { letter: "C", text: "Hinduism spread beyond India through trade" },
            { letter: "D", text: "Hinduism was spread only by armies" }
          ],
          correct: "C"
        },
        {
          id: "moksha",
          sol: "WHI.3.c",
          stem: "In Hinduism, moksha is the final goal because it —",
          choices: [
            { letter: "A", text: "places a person in the Brahmin varna" },
            { letter: "B", text: "guarantees wealth in this life" },
            { letter: "C", text: "makes a person a king in the next life" },
            { letter: "D", text: "frees the soul from the cycle of rebirth" }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "asia-qin",
      family: "ASIA",
      title: "The First Emperor",
      kind: "Ancient India & China · WHI.3",
      blurb: "A timeline of the short, harsh and lasting Qin dynasty.",
      level: 2,
      passage: "<p>" + N(1) + "After centuries of fighting among rival states, the ruler of Qin united China and took the title <strong>Shi Huangdi</strong>, 'First Emperor.' " + N(2) + "His government followed <strong>Legalism</strong>, which taught that people obey only strict laws backed by rewards and harsh punishments.</p><ul><li><strong>475–221 B.C.</strong> Warring States period: seven major states fight for control.</li><li><strong>221 B.C.</strong> Qin conquers the last rival state and unites China.</li><li><strong>After 221 B.C.</strong> Qin standardizes writing, coins, weights and measures, and the width of cart axles.</li><li><strong>About 214 B.C.</strong> Workers begin linking older walls into a long northern wall against nomadic invaders.</li><li><strong>213 B.C.</strong> Books of rival schools of thought, including Confucian works, are ordered burned.</li><li><strong>210 B.C.</strong> Shi Huangdi dies and is buried with an army of life-size clay soldiers.</li><li><strong>206 B.C.</strong> After revolts, the Qin dynasty falls; the Han dynasty soon takes power.</li></ul>",
      claims: [
        {
          id: "first",
          sol: "WHI.3.e",
          stem: "Which of these events of the Qin era happened FIRST?",
          choices: [
            { letter: "A", text: "Books of rival schools are burned." },
            { letter: "B", text: "Qin conquers the last rival state." },
            { letter: "C", text: "The Han dynasty takes power." },
            { letter: "D", text: "Shi Huangdi is buried with clay soldiers." }
          ],
          correct: "B"
        },
        {
          id: "legalism",
          sol: "WHI.3.f",
          stem: "Which statement best describes Legalism as it is defined in sentence 2?",
          choices: [
            { letter: "A", text: "Rulers should govern by moral example." },
            { letter: "B", text: "People should live simply, as nature does." },
            { letter: "C", text: "Desire is the cause of all suffering." },
            { letter: "D", text: "Strict laws and harsh penalties keep order." }
          ],
          correct: "D"
        },
        {
          id: "standard",
          sol: "WHI.3.e",
          stem: "Standardizing coins, weights and measures most likely helped the Qin —",
          choices: [
            { letter: "A", text: "spread Buddhism to Korea and Japan" },
            { letter: "B", text: "end the idea of the Mandate of Heaven" },
            { letter: "C", text: "increase trade and collect taxes" },
            { letter: "D", text: "keep merchants out of the cities" }
          ],
          correct: "C"
        },
        {
          id: "wall",
          sol: "WHI.3.a",
          stem: "According to the timeline, the long northern wall was built to defend against —",
          choices: [
            { letter: "A", text: "nomadic invaders from the north" },
            { letter: "B", text: "pirates along the Pacific coast" },
            { letter: "C", text: "armies crossing the Himalayas" },
            { letter: "D", text: "floods from the Yangtze River" }
          ],
          correct: "A"
        },
        {
          id: "burn",
          sol: "WHI.3.f",
          stem: "Why did the Qin government most likely order the burning of books from rival schools of thought?",
          choices: [
            { letter: "A", text: "to make room for new imperial libraries" },
            { letter: "B", text: "to silence ideas that challenged its rule" },
            { letter: "C", text: "to stop the spread of a foreign alphabet" },
            { letter: "D", text: "to offer a sacrifice to the gods of heaven" }
          ],
          correct: "B"
        },
        {
          id: "conclude",
          sol: "WHI.3.e",
          stem: "Which conclusion about the Qin dynasty is best supported by the timeline?",
          choices: [
            { letter: "A", text: "The Qin left lasting changes but ruled only briefly." },
            { letter: "B", text: "The Qin dynasty ruled China for many centuries." },
            { letter: "C", text: "The Qin rejected a single system of writing." },
            { letter: "D", text: "The Han dynasty came before the Warring States." }
          ],
          correct: "A"
        }
      ]
    },

    /* ---------- long ---------- */
    {
      id: "asia-three-teachings",
      family: "ASIA",
      title: "Three answers to disorder",
      kind: "Ancient India & China · WHI.3",
      blurb: "Confucianism, Taoism and Legalism side by side.",
      level: 3,
      passage: "<p>" + N(1) + "During the long decline of the Zhou dynasty, Chinese thinkers asked how to restore order. " + N(2) + "Three answers are summarized below.</p><p><strong>Confucianism</strong> (summary of the Analects) — " + N(3) + "Society is in harmony when people respect five relationships: ruler and subject, father and son, husband and wife, older and younger brother, and friend and friend. " + N(4) + "Rulers should govern by moral example, and children should show <strong>filial piety</strong>, respect for parents and ancestors. " + N(5) + "Officials should be educated and chosen for their virtue.</p><p><strong>Taoism</strong> (summary of the Tao Te Ching, credited to Laozi) — " + N(6) + "People should follow the Tao, or 'the Way,' living simply and in harmony with nature. " + N(7) + "The best ruler governs as little as possible, and the forces of yin and yang stay in balance.</p><p><strong>Legalism</strong> (summary of the writings of Han Feizi) — " + N(8) + "People are selfish by nature, so order depends on clear laws, rewards for obedience and harsh punishments for crimes. " + N(9) + "The ruler's power must be absolute.</p><p>" + N(10) + "The Qin dynasty relied on Legalism, but the Han dynasty that followed made Confucianism the basis of education and government service.</p>",
      claims: [
        {
          id: "taoist",
          sol: "WHI.3.f",
          stem: "A ruler who lets farmers live simply, without many rules or great building projects, is following the advice of which teaching?",
          choices: [
            { letter: "A", text: "Legalism" },
            { letter: "B", text: "Confucianism" },
            { letter: "C", text: "Taoism" },
            { letter: "D", text: "the varna system" }
          ],
          correct: "C"
        },
        {
          id: "vocab",
          sol: "WHI.3.f",
          stem: "In sentence 4, the term filial piety means —",
          choices: [
            { letter: "A", text: "respect and duty owed to parents and ancestors" },
            { letter: "B", text: "loyalty to a Buddhist monastery and its monks" },
            { letter: "C", text: "obedience to the written laws of the state" },
            { letter: "D", text: "a balance between the forces of yin and yang" }
          ],
          correct: "A"
        },
        {
          id: "contrast",
          sol: "WHI.3.f",
          stem: "Which statement best explains the main difference between Confucianism and Legalism?",
          choices: [
            { letter: "A", text: "Confucianism rejected education; Legalism required it." },
            { letter: "B", text: "Both taught that people are selfish by nature." },
            { letter: "C", text: "Legalism stressed harmony with nature; Confucianism did not." },
            { letter: "D", text: "Confucianism relied on moral example; Legalism on punishment." }
          ],
          correct: "D"
        },
        {
          id: "han",
          sol: "WHI.3.e",
          stem: "Based on sentence 10, how did Confucianism shape government under the Han dynasty?",
          choices: [
            { letter: "A", text: "Emperors abolished all written laws." },
            { letter: "B", text: "Officials were trained in Confucian learning." },
            { letter: "C", text: "Emperors gave up the Mandate of Heaven." },
            { letter: "D", text: "Taoist priests took command of the army." }
          ],
          correct: "B"
        },
        {
          id: "two",
          sol: "WHI.3.f",
          stem: "Select TWO ideas that Confucius taught.",
          choices: [
            { letter: "A", text: "the five relationships" },
            { letter: "B", text: "rule by harsh punishment" },
            { letter: "C", text: "following the Way by doing little" },
            { letter: "D", text: "the value of education and virtue" }
          ],
          correct: ["A", "D"]
        },
        {
          id: "buddhism",
          sol: "WHI.3.d",
          stem: "Which belief system reached China from India during the Han dynasty and later blended with Confucian and Taoist ideas?",
          choices: [
            { letter: "A", text: "Hinduism" },
            { letter: "B", text: "Judaism" },
            { letter: "C", text: "Buddhism" },
            { letter: "D", text: "Legalism" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "asia-india-timeline",
      family: "ASIA",
      title: "From the Indus to the Guptas",
      kind: "Ancient India & China · WHI.3",
      blurb: "Asoka's edicts, Gupta mathematics and two thousand years of Indian history.",
      level: 3,
      passage: "<p>" + N(1) + "The timeline traces major developments on the Indian subcontinent.</p><ul><li><strong>About 2500 B.C.</strong> Cities such as Harappa and Mohenjo-daro flourish in the Indus Valley.</li><li><strong>About 1500–500 B.C.</strong> The Vedas are composed in Sanskrit; the varna system takes shape.</li><li><strong>About 500s–400s B.C.</strong> Siddhartha Gautama, the Buddha, teaches in the Ganges Valley.</li><li><strong>About 321 B.C.</strong> Chandragupta Maurya founds the Mauryan Empire.</li><li><strong>About 268–232 B.C.</strong> Asoka rules the Mauryan Empire.</li><li><strong>About A.D. 320–550</strong> The Gupta Empire unites much of northern India.</li></ul><p>" + N(2) + "After a bloody war against the kingdom of Kalinga, Asoka turned to Buddhism. " + N(3) + "He had edicts carved on rocks and pillars urging nonviolence, religious tolerance and kindness to people and animals, and he sent Buddhist missionaries to Sri Lanka and other lands. " + N(4) + "Under the Guptas, in a period often called a golden age, Hindu culture flourished. " + N(5) + "Mathematicians used a <strong>decimal system</strong> with a zero, and the astronomer Aryabhata argued that Earth rotates on its axis. " + N(6) + "These numerals later passed to the Arab world and Europe, where they became known as 'Arabic' numerals.</p>",
      claims: [
        {
          id: "first",
          sol: "WHI.3.b",
          stem: "According to the timeline, which development happened FIRST?",
          choices: [
            { letter: "A", text: "Asoka rules the Mauryan Empire." },
            { letter: "B", text: "The Gupta Empire unites northern India." },
            { letter: "C", text: "Chandragupta founds the Mauryan Empire." },
            { letter: "D", text: "The Vedas are composed in Sanskrit." }
          ],
          correct: "D"
        },
        {
          id: "kalinga",
          sol: "WHI.3.d",
          stem: "According to sentence 2, which event led Asoka to turn to Buddhism?",
          choices: [
            { letter: "A", text: "the fall of the Gupta Empire" },
            { letter: "B", text: "a bloody war against Kalinga" },
            { letter: "C", text: "a meeting with Confucius" },
            { letter: "D", text: "the decline of the Indus cities" }
          ],
          correct: "B"
        },
        {
          id: "spread",
          sol: "WHI.3.d",
          stem: "Based on sentence 3, how did Asoka help spread Buddhism?",
          choices: [
            { letter: "A", text: "He sent missionaries to other lands." },
            { letter: "B", text: "He forced every subject to become a monk." },
            { letter: "C", text: "He tore down all the Hindu temples." },
            { letter: "D", text: "He wrote down the Four Noble Truths." }
          ],
          correct: "A"
        },
        {
          id: "vocab",
          sol: "WHI.3.b",
          stem: "In sentence 5, a decimal system is a way of —",
          choices: [
            { letter: "A", text: "measuring time by the moon" },
            { letter: "B", text: "dividing society into classes" },
            { letter: "C", text: "writing numbers in groups of ten" },
            { letter: "D", text: "recording laws on stone pillars" }
          ],
          correct: "C"
        },
        {
          id: "legacy",
          sol: "WHI.3.b",
          stem: "Which conclusion is best supported by sentences 5 and 6?",
          choices: [
            { letter: "A", text: "The Guptas borrowed their numerals from Europe." },
            { letter: "B", text: "Aryabhata invented the first alphabet." },
            { letter: "C", text: "India's golden age had no effect outside India." },
            { letter: "D", text: "Gupta mathematics shaped numbers used today." }
          ],
          correct: "D"
        },
        {
          id: "gupta-faith",
          sol: "WHI.3.c",
          stem: "Which statement best describes religion under the Gupta Empire?",
          choices: [
            { letter: "A", text: "Buddhism became the only religion allowed." },
            { letter: "B", text: "Hindu culture flourished under Gupta rule." },
            { letter: "C", text: "The emperors closed every temple in India." },
            { letter: "D", text: "Confucianism replaced the teachings of the Vedas." }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "asia-han-silk",
      family: "ASIA",
      title: "The Han and the Silk Road",
      kind: "Ancient India & China · WHI.3",
      blurb: "Confucian officials, Zhang Qian's journey and the goods that crossed Asia.",
      level: 3,
      passage: "<p>" + N(1) + "The Han dynasty ruled China from 206 B.C. to A.D. 220, a period so admired that many Chinese people still call themselves 'people of the Han.' " + N(2) + "Han emperors chose many officials from men trained in Confucian learning and tested on their knowledge, laying the foundation for China's <strong>civil service</strong>. " + N(3) + "Around 138 B.C., Emperor Wudi sent the envoy Zhang Qian west into Central Asia. " + N(4) + "His reports helped open the <strong>Silk Road</strong>, a network of overland routes linking China with Central Asia, Persia and, eventually, the Roman world. " + N(5) + "Few merchants traveled the whole route; goods passed from trader to trader along the way.</p><table><tr><th>Moving west from China</th><th>Moving east into China</th></tr><tr><td>silk</td><td>horses</td></tr><tr><td>lacquerware</td><td>glassware</td></tr><tr><td>bronze mirrors</td><td>grapes and alfalfa</td></tr><tr><td>peaches and apricots</td><td>Buddhism from India</td></tr></table><p>" + N(6) + "The route crossed deserts such as the Taklamakan and high mountain passes, so caravans moved from oasis to oasis. " + N(7) + "China guarded the secret of making silk closely, which kept its price high abroad. " + N(8) + "Along with goods, the Silk Road carried religions, technologies and diseases between distant peoples.</p>",
      claims: [
        {
          id: "officials",
          sol: "WHI.3.e",
          stem: "Based on sentence 2, Han officials were often chosen for their —",
          choices: [
            { letter: "A", text: "knowledge of Confucian learning" },
            { letter: "B", text: "wealth and family name alone" },
            { letter: "C", text: "skill in battle on the frontier" },
            { letter: "D", text: "membership in the Brahmin varna" }
          ],
          correct: "A"
        },
        {
          id: "vocab",
          sol: "WHI.3.e",
          stem: "In sentence 2, the term civil service refers to —",
          choices: [
            { letter: "A", text: "the army that guards the borders" },
            { letter: "B", text: "the priests who perform sacrifices" },
            { letter: "C", text: "the officials who run the government" },
            { letter: "D", text: "the merchants who travel the roads" }
          ],
          correct: "C"
        },
        {
          id: "terrain",
          sol: "WHI.3.a",
          stem: "Which geographic challenge does sentence 6 describe for Silk Road caravans?",
          choices: [
            { letter: "A", text: "sailing through monsoon storms" },
            { letter: "B", text: "crossing deserts and high mountains" },
            { letter: "C", text: "crossing a frozen land bridge" },
            { letter: "D", text: "passing the cataracts of the Nile" }
          ],
          correct: "B"
        },
        {
          id: "table",
          sol: "WHI.3.e",
          stem: "Which conclusion about Silk Road trade is best supported by the table?",
          choices: [
            { letter: "A", text: "China imported its silk from Rome." },
            { letter: "B", text: "Only food crops moved along the route." },
            { letter: "C", text: "Trade moved in only one direction." },
            { letter: "D", text: "The Silk Road carried goods and ideas." }
          ],
          correct: "D"
        },
        {
          id: "religion",
          sol: "WHI.3.d",
          stem: "According to the table, which religion entered China along the Silk Road?",
          choices: [
            { letter: "A", text: "Buddhism" },
            { letter: "B", text: "Judaism" },
            { letter: "C", text: "Hinduism" },
            { letter: "D", text: "Zoroastrianism" }
          ],
          correct: "A"
        },
        {
          id: "secret",
          sol: "WHI.3.e",
          stem: "Which economic reason best explains why China kept the method of making silk a secret?",
          choices: [
            { letter: "A", text: "to protect silkworms from disease" },
            { letter: "B", text: "because only priests could wear silk" },
            { letter: "C", text: "to protect a valuable monopoly" },
            { letter: "D", text: "because the emperor had banned trade" }
          ],
          correct: "C"
        }
      ]
    }
  ];

  for (var i = 0; i < PACKS.length; i++) P.push(PACKS[i]);
})(typeof window !== "undefined" ? window : global);
