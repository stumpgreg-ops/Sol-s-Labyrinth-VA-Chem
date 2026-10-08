/* SOL Lab — World History I · Medieval China & Japan (WHI.7, WHI.9). Original text only. */
(function (global) {
  var P = global.HEIST_PACKS;
  if (!P || !P.push) return;
  var N = function (i) { return '<span class="n">(' + i + ')</span> '; };   // numbered sentence

  var PACKS = [
    /* ---------- tiny ---------- */
    {
      id: "easia-japan-map",
      family: "EASIA",
      title: "Japan's place on the map",
      kind: "Medieval China & Japan · WHI.9",
      blurb: "An island chain close to Korea, farther from China.",
      level: 1,
      passage: "<p>" + N(1) + "On the map, Japan is an <strong>archipelago</strong> of four main islands and thousands of smaller ones off the coast of East Asia. " + N(2) + "The Korea Strait, about 120 miles wide, separates Japan from the Korean Peninsula. " + N(3) + "China lies farther west, across the wider East China Sea. " + N(4) + "Mountains cover most of Japan, so farms and towns crowd onto narrow coastal plains.</p>",
      claims: [
        {
          id: "archipelago",
          sol: "WHI.9.a",
          stem: "In sentence 1, the word archipelago most nearly means —",
          choices: [
            { letter: "A", text: "a chain or group of islands" },
            { letter: "B", text: "a high and narrow mountain range" },
            { letter: "C", text: "a wide plain along a river" },
            { letter: "D", text: "a peninsula joined to the mainland" }
          ],
          correct: "A"
        },
        {
          id: "korea",
          sol: "WHI.9.a",
          stem: "Based on the map, why did many Chinese ideas reach Japan by way of Korea?",
          choices: [
            { letter: "A", text: "Korea and Japan were joined by a land bridge." },
            { letter: "B", text: "China had no ships able to sail the sea." },
            { letter: "C", text: "Korea lies just across a narrow strait from Japan." },
            { letter: "D", text: "Japan ruled Korea throughout the Middle Ages." }
          ],
          correct: "C"
        },
        {
          id: "borrow",
          sol: "WHI.9.a",
          stem: "Which of these did Japan adopt from China, often through Korea?",
          choices: [
            { letter: "A", text: "the Arabic alphabet" },
            { letter: "B", text: "the Latin language" },
            { letter: "C", text: "the Christian faith" },
            { letter: "D", text: "Chinese writing and Buddhism" }
          ],
          correct: "D"
        },
        {
          id: "mountains",
          sol: "WHI.9.a",
          stem: "According to sentence 4, how did mountains affect life in Japan?",
          choices: [
            { letter: "A", text: "They made farming and settlement crowd onto the coasts." },
            { letter: "B", text: "They gave Japan wide grasslands for herding horses." },
            { letter: "C", text: "They blocked all trade between the islands." },
            { letter: "D", text: "They made Japan's rivers flow into China." }
          ],
          correct: "A"
        },
        {
          id: "isolation",
          sol: "WHI.9.a",
          stem: "Which conclusion about Japan is best supported by the map?",
          choices: [
            { letter: "A", text: "It was too far from the mainland to learn from it." },
            { letter: "B", text: "It was near its neighbors but separated by water." },
            { letter: "C", text: "It shared a long land border with China and Korea." },
            { letter: "D", text: "It was made up of one large and very flat island." }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "easia-inventions",
      family: "EASIA",
      title: "Five Chinese inventions",
      kind: "Medieval China & Japan · WHI.7",
      blurb: "Tea, paper, printing, the compass and gunpowder.",
      level: 1,
      passage: "<p>" + N(1) + "The table lists Chinese developments that later spread to other parts of the world.</p><table><tr><th>Development</th><th>When</th><th>Use</th></tr><tr><td>Paper</td><td>Han dynasty</td><td>writing, books and records</td></tr><tr><td>Tea drinking</td><td>popular in the Tang</td><td>drink and trade good</td></tr><tr><td><strong>Woodblock printing</strong></td><td>Tang dynasty</td><td>copying books and images</td></tr><tr><td>Gunpowder</td><td>Tang discovery, Song weapons</td><td>fireworks and warfare</td></tr><tr><td>Magnetic compass</td><td>Song sailors</td><td>finding direction at sea</td></tr></table>",
      claims: [
        {
          id: "navigation",
          sol: "WHI.7.e",
          stem: "According to the table, which development helped sailors most directly?",
          choices: [
            { letter: "A", text: "gunpowder" },
            { letter: "B", text: "tea drinking" },
            { letter: "C", text: "paper making" },
            { letter: "D", text: "the compass" }
          ],
          correct: "D"
        },
        {
          id: "oldest",
          sol: "WHI.7.e",
          stem: "According to the table, which development came FIRST?",
          choices: [
            { letter: "A", text: "woodblock printing" },
            { letter: "B", text: "paper" },
            { letter: "C", text: "gunpowder weapons" },
            { letter: "D", text: "the magnetic compass" }
          ],
          correct: "B"
        },
        {
          id: "woodblock",
          sol: "WHI.7.e",
          stem: "Woodblock printing worked by —",
          choices: [
            { letter: "A", text: "carving a whole page onto a block, inking it and pressing paper on it" },
            { letter: "B", text: "copying every page by hand with a brush and ink" },
            { letter: "C", text: "arranging metal letters in a press powered by steam" },
            { letter: "D", text: "scratching symbols into wet clay tablets" }
          ],
          correct: "A"
        },
        {
          id: "printing",
          sol: "WHI.7.e",
          stem: "Which was the most important effect of combining paper with printing?",
          choices: [
            { letter: "A", text: "Books became rare and costly." },
            { letter: "B", text: "Fewer people learned to read." },
            { letter: "C", text: "Books became cheaper and more common." },
            { letter: "D", text: "Writing was used only by priests." }
          ],
          correct: "C"
        },
        {
          id: "tea",
          sol: "WHI.7.e",
          stem: "Which conclusion about tea is supported by the table?",
          choices: [
            { letter: "A", text: "It was first grown by Song sailors at sea." },
            { letter: "B", text: "It was used mainly as a weapon." },
            { letter: "C", text: "It was banned during the Tang dynasty." },
            { letter: "D", text: "It became both a popular drink and a good for trade." }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "easia-feudal-pyramid",
      family: "EASIA",
      title: "The feudal pyramid of Japan",
      kind: "Medieval China & Japan · WHI.9",
      blurb: "Who served whom in a society ruled by warriors.",
      level: 1,
      passage: "<p>" + N(1) + "A diagram shows the society of feudal Japan as a pyramid. " + N(2) + "At the top sits the emperor, honored but with little real power. " + N(3) + "Below him is the <strong>shogun</strong>, the supreme military ruler. " + N(4) + "Next come the <strong>daimyo</strong>, great landowning lords, and under them the <strong>samurai</strong>, warriors sworn to serve their lord. " + N(5) + "Peasants, artisans and merchants form the wide base.</p>",
      claims: [
        {
          id: "power",
          sol: "WHI.9.c",
          stem: "According to the diagram, who held the real military and political power?",
          choices: [
            { letter: "A", text: "the emperor" },
            { letter: "B", text: "the merchants" },
            { letter: "C", text: "the shogun" },
            { letter: "D", text: "the peasants" }
          ],
          correct: "C"
        },
        {
          id: "daimyo",
          sol: "WHI.9.c",
          stem: "In sentence 4, the daimyo are best described as —",
          choices: [
            { letter: "A", text: "powerful lords who controlled land and warriors" },
            { letter: "B", text: "Buddhist monks who lived in mountain temples" },
            { letter: "C", text: "scholars who passed a government exam" },
            { letter: "D", text: "foreign traders who lived in port cities" }
          ],
          correct: "A"
        },
        {
          id: "samurai",
          sol: "WHI.9.c",
          stem: "What did a samurai owe his lord?",
          choices: [
            { letter: "A", text: "a share of his family's rice harvest only" },
            { letter: "B", text: "loyal military service" },
            { letter: "C", text: "payment for the right to trade" },
            { letter: "D", text: "nothing, since samurai served the emperor directly" }
          ],
          correct: "B"
        },
        {
          id: "compare",
          sol: "WHI.9.c",
          stem: "The relationship between a daimyo and his samurai is most similar to that between —",
          choices: [
            { letter: "A", text: "a Chinese emperor and his scholar-officials" },
            { letter: "B", text: "a Roman consul and the Senate" },
            { letter: "C", text: "a caliph and the People of the Book" },
            { letter: "D", text: "a European lord and his knights" }
          ],
          correct: "D"
        },
        {
          id: "emperor",
          sol: "WHI.9.f",
          stem: "Which conclusion about the emperor is best supported by sentence 2?",
          choices: [
            { letter: "A", text: "He commanded the samurai in every battle." },
            { letter: "B", text: "He was respected as a symbol while warriors governed." },
            { letter: "C", text: "He had been removed from Japan by the shogun." },
            { letter: "D", text: "He collected all taxes from the daimyo." }
          ],
          correct: "B"
        }
      ]
    },

    /* ---------- short ---------- */
    {
      id: "easia-tang-timeline",
      family: "EASIA",
      title: "Sui and Tang China",
      kind: "Medieval China & Japan · WHI.7",
      blurb: "A timeline of China's reunification and its golden age.",
      level: 2,
      passage: "<p>" + N(1) + "The timeline traces China from <strong>reunification</strong> to the end of the Tang dynasty.</p><ul><li><strong>589</strong> The Sui dynasty reunites China after nearly 400 years of division</li><li><strong>605–610</strong> The Sui build the Grand Canal, linking the Yellow and Yangtze river valleys</li><li><strong>618</strong> The Tang dynasty takes power; Chang'an becomes one of the world's largest cities</li><li><strong>645</strong> The monk Xuanzang returns from India with Buddhist writings</li><li><strong>868</strong> The Diamond Sutra, a Buddhist text, is printed with woodblocks</li><li><strong>907</strong> The Tang dynasty falls</li></ul>",
      claims: [
        {
          id: "reunify",
          sol: "WHI.7.a",
          stem: "In sentence 1, the word reunification refers to —",
          choices: [
            { letter: "A", text: "bringing a divided country back under one government" },
            { letter: "B", text: "splitting an empire among several rulers" },
            { letter: "C", text: "a peace treaty between China and Japan" },
            { letter: "D", text: "the return of a monk from a long journey" }
          ],
          correct: "A"
        },
        {
          id: "canal",
          sol: "WHI.7.b",
          stem: "How did the Grand Canal help Tang China's economy?",
          choices: [
            { letter: "A", text: "It kept northern invaders out of China." },
            { letter: "B", text: "It carried silk directly to Rome." },
            { letter: "C", text: "It moved rice and goods between south and north." },
            { letter: "D", text: "It supplied water to the deserts of the west." }
          ],
          correct: "C"
        },
        {
          id: "buddhism",
          sol: "WHI.7.a",
          stem: "Which TWO entries on the timeline show that Buddhism was growing in Tang China? Select TWO.",
          choices: [
            { letter: "A", text: "the building of the Grand Canal" },
            { letter: "B", text: "Xuanzang's return from India" },
            { letter: "C", text: "the fall of the Tang dynasty" },
            { letter: "D", text: "the printing of the Diamond Sutra" }
          ],
          correct: ["B", "D"]
        },
        {
          id: "why",
          sol: "WHI.7.a",
          stem: "Which statement best explains why Buddhism spread in China after the fall of the Han?",
          choices: [
            { letter: "A", text: "The emperors made it the only legal religion." },
            { letter: "B", text: "Its teachings offered comfort during war and disorder." },
            { letter: "C", text: "Muslim merchants carried it across the Sahara." },
            { letter: "D", text: "It was brought to China by Japanese monks." }
          ],
          correct: "B"
        },
        {
          id: "korea",
          sol: "WHI.7.a",
          stem: "How did Buddhism reach Japan in the 500s A.D.?",
          choices: [
            { letter: "A", text: "Spanish missionaries brought it by sea." },
            { letter: "B", text: "Mongol armies carried it during their conquest." },
            { letter: "C", text: "Japanese samurai found it in India." },
            { letter: "D", text: "It came from China by way of Korea." }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "easia-shotoku",
      family: "EASIA",
      title: "Prince Shotoku's constitution",
      kind: "Medieval China & Japan · WHI.9",
      blurb: "A Japanese regent borrows ideas from China to build a stronger state.",
      level: 2,
      passage: "<p>" + N(1) + "Prince Shotoku served as regent for the empress Suiko and in 604 issued the <strong>Seventeen Article Constitution</strong>, a set of moral rules for officials.</p><blockquote>" + N(2) + "Harmony is to be valued, and an avoidance of wanton opposition to be honored. " + N(3) + "Sincerely reverence the three treasures: the Buddha, the Law and the Priesthood. " + N(4) + "When you receive the imperial commands, fail not to obey them.</blockquote><p class=\"src\">— Seventeen Article Constitution, Articles 1–3, 604 (adapted from the W. G. Aston translation)</p><p>" + N(5) + "Shotoku also sent missions to China to study its government and culture.</p>",
      claims: [
        {
          id: "harmony",
          sol: "WHI.9.b",
          stem: "Which value is stressed in sentence 2?",
          choices: [
            { letter: "A", text: "competition among rival clans" },
            { letter: "B", text: "freedom of speech for all people" },
            { letter: "C", text: "harmony and cooperation" },
            { letter: "D", text: "loyalty to Shinto priests" }
          ],
          correct: "C"
        },
        {
          id: "treasures",
          sol: "WHI.9.d",
          stem: "Sentence 3 shows that Shotoku —",
          choices: [
            { letter: "A", text: "promoted Buddhism among Japan's officials" },
            { letter: "B", text: "tried to ban Buddhism from Japan" },
            { letter: "C", text: "wanted Japan to adopt Christianity" },
            { letter: "D", text: "rejected all ideas that came from Korea" }
          ],
          correct: "A"
        },
        {
          id: "purpose",
          sol: "WHI.9.b",
          stem: "The main purpose of the Seventeen Article Constitution was to —",
          choices: [
            { letter: "A", text: "set up an elected assembly to make laws" },
            { letter: "B", text: "guide officials and strengthen the central government" },
            { letter: "C", text: "divide Japan's land among samurai warriors" },
            { letter: "D", text: "declare war on the Sui dynasty of China" }
          ],
          correct: "B"
        },
        {
          id: "confucian",
          sol: "WHI.9.a",
          stem: "Sentence 4 reflects which idea that Japan borrowed from China?",
          choices: [
            { letter: "A", text: "the Muslim duty of pilgrimage" },
            { letter: "B", text: "Greek democracy and voting" },
            { letter: "C", text: "the Legalist ban on all books" },
            { letter: "D", text: "the Confucian duty to obey rulers" }
          ],
          correct: "D"
        },
        {
          id: "missions",
          sol: "WHI.9.b",
          stem: "Sentence 5 best supports which conclusion?",
          choices: [
            { letter: "A", text: "Japan tried to conquer China." },
            { letter: "B", text: "China forced Japan to send tribute." },
            { letter: "C", text: "Japan cut off all contact with its neighbors." },
            { letter: "D", text: "Japan deliberately learned from Chinese models." }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "easia-japan-buddhism",
      family: "EASIA",
      title: "Pure Land and Zen",
      kind: "Medieval China & Japan · WHI.9",
      blurb: "Buddhism takes new Japanese forms in the age of the samurai.",
      level: 2,
      passage: "<p>" + N(1) + "Buddhism reached Japan from Korea in the 500s, and for centuries it was practiced mostly by nobles and monks. " + N(2) + "In the 1100s and 1200s, new schools brought it to ordinary people. " + N(3) + "<strong>Pure Land</strong> Buddhism taught that anyone who called on Amida Buddha with faith could be reborn in a paradise. " + N(4) + "<strong>Zen</strong> Buddhism, based on the Chinese Chan school, stressed <strong>meditation</strong>, self-discipline and sudden insight. " + N(5) + "Zen appealed to many samurai and shaped the tea ceremony, rock gardens and ink painting. " + N(6) + "Many Japanese also kept honoring the kami, the spirits of Shinto.</p>",
      claims: [
        {
          id: "pureland",
          sol: "WHI.9.d",
          stem: "Why did Pure Land Buddhism spread widely among ordinary people?",
          choices: [
            { letter: "A", text: "It required years of study in a monastery." },
            { letter: "B", text: "It taught that faith in Amida Buddha was enough." },
            { letter: "C", text: "It was open only to members of noble families." },
            { letter: "D", text: "It was taught only in the Chinese language." }
          ],
          correct: "B"
        },
        {
          id: "zen",
          sol: "WHI.9.d",
          stem: "Which statement best explains why Zen appealed to many samurai?",
          choices: [
            { letter: "A", text: "It stressed discipline and calm focus." },
            { letter: "B", text: "It forbade all forms of fighting." },
            { letter: "C", text: "It promised land to every believer." },
            { letter: "D", text: "It honored the emperor as a god." }
          ],
          correct: "A"
        },
        {
          id: "meditation",
          sol: "WHI.9.d",
          stem: "In sentence 4, the word meditation most nearly means —",
          choices: [
            { letter: "A", text: "chanting a prayer aloud in a crowd" },
            { letter: "B", text: "making a pilgrimage to a holy place" },
            { letter: "C", text: "quiet, focused thought to calm the mind" },
            { letter: "D", text: "copying sacred texts by hand" }
          ],
          correct: "C"
        },
        {
          id: "culture",
          sol: "WHI.9.d",
          stem: "According to sentence 5, Zen influenced which part of Japanese culture?",
          choices: [
            { letter: "A", text: "the Seventeen Article Constitution" },
            { letter: "B", text: "the writing of the Tale of Genji" },
            { letter: "C", text: "the design of the Grand Canal" },
            { letter: "D", text: "the tea ceremony and rock gardens" }
          ],
          correct: "D"
        },
        {
          id: "shinto",
          sol: "WHI.9.d",
          stem: "Sentence 6 suggests that in medieval Japan —",
          choices: [
            { letter: "A", text: "Shinto was banned once Buddhism arrived" },
            { letter: "B", text: "Shinto and Buddhism were practiced side by side" },
            { letter: "C", text: "Buddhism was replaced by Shinto in the 1200s" },
            { letter: "D", text: "Shinto was a form of Chinese Confucianism" }
          ],
          correct: "B"
        }
      ]
    },

    /* ---------- medium ---------- */
    {
      id: "easia-song-economy",
      family: "EASIA",
      title: "Rice, canals and paper money",
      kind: "Medieval China & Japan · WHI.7",
      blurb: "How the Song dynasty became the richest society of its time.",
      level: 2,
      passage: "<p>" + N(1) + "Under the Song dynasty (960–1279), China's economy grew faster than ever before. " + N(2) + "Farmers in the south planted <strong>Champa rice</strong>, a fast-ripening variety from Southeast Asia that allowed two harvests a year in warm areas. " + N(3) + "With more food, China's population rose to about 100 million. " + N(4) + "Canals and rivers carried rice, tea, silk and porcelain to busy markets. " + N(5) + "Cities such as Kaifeng and Hangzhou grew to hundreds of thousands of people, with shops, restaurants and night markets. " + N(6) + "Because carrying heavy strings of copper coins was hard, merchants began using paper notes, and in the early 1000s the government began issuing <strong>paper money</strong> of its own. " + N(7) + "Printing made books cheaper, and a craftsman named Bi Sheng experimented with movable type.</p>",
      claims: [
        {
          id: "champa",
          sol: "WHI.7.b",
          stem: "Which chain of cause and effect is best supported by sentences 2 and 3?",
          choices: [
            { letter: "A", text: "fewer farms, then smaller harvests, then a falling population" },
            { letter: "B", text: "new rice, then more food, then a growing population" },
            { letter: "C", text: "paper money, then new crops, then fewer cities" },
            { letter: "D", text: "foreign wars, then famine, then the fall of the Song" }
          ],
          correct: "B"
        },
        {
          id: "money",
          sol: "WHI.7.b",
          stem: "According to sentence 6, why did paper money come into use?",
          choices: [
            { letter: "A", text: "China had run out of copper and silver entirely." },
            { letter: "B", text: "Foreign merchants refused to accept coins." },
            { letter: "C", text: "The emperor banned the use of coins in markets." },
            { letter: "D", text: "Strings of coins were heavy and hard to carry." }
          ],
          correct: "D"
        },
        {
          id: "cities",
          sol: "WHI.7.b",
          stem: "Which conclusion about Song cities is best supported by sentence 5?",
          choices: [
            { letter: "A", text: "They were large centers of trade and daily commerce." },
            { letter: "B", text: "They were mainly military forts on the frontier." },
            { letter: "C", text: "They were small villages built around temples." },
            { letter: "D", text: "They were closed to merchants and artisans." }
          ],
          correct: "A"
        },
        {
          id: "vocab",
          sol: "WHI.7.b",
          stem: "In sentence 2, Champa rice is described as rice that —",
          choices: [
            { letter: "A", text: "grew only in the cold north" },
            { letter: "B", text: "was traded for horses with Tibet" },
            { letter: "C", text: "ripened quickly, allowing two crops a year" },
            { letter: "D", text: "was used as money in place of coins" }
          ],
          correct: "C"
        },
        {
          id: "tradeoff",
          sol: "WHI.7.e",
          stem: "A Song farmer chose to grow tea for market instead of more rice for his family. What was the opportunity cost of that choice?",
          choices: [
            { letter: "A", text: "the money he earned by selling the tea" },
            { letter: "B", text: "the rice he could have grown on that land" },
            { letter: "C", text: "the canal boat that carried the tea" },
            { letter: "D", text: "the tax the government did not collect" }
          ],
          correct: "B"
        },
        {
          id: "printing",
          sol: "WHI.7.f",
          stem: "How did cheaper printed books, described in sentence 7, affect Song society?",
          choices: [
            { letter: "A", text: "They ended the use of paper for government records." },
            { letter: "B", text: "They made reading a crime for ordinary people." },
            { letter: "C", text: "They caused merchants to stop keeping accounts." },
            { letter: "D", text: "They spread learning and helped more men study for exams." }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "easia-scholar-officials",
      family: "EASIA",
      title: "The examination hall",
      kind: "Medieval China & Japan · WHI.7",
      blurb: "Confucian classics, long exams and the officials who ran China.",
      level: 3,
      passage: "<blockquote>" + N(1) + "The Master said, \"He who exercises government by means of his virtue may be compared to the north polar star, which keeps its place and all the stars turn towards it.\"</blockquote><p class=\"src\">— Confucius, Analects, Book 2 (James Legge translation)</p><p>" + N(2) + "China's emperors relied on <strong>scholar-officials</strong> to carry out their rule. " + N(3) + "Begun under the Sui and expanded under the Tang and Song, the <strong>civil service examination</strong> tested men on the Confucian classics. " + N(4) + "Candidates studied for years; only a small share passed the highest levels. " + N(5) + "Those who succeeded gained government posts, respect and wealth for their families. " + N(6) + "In the Song era, the thinker Zhu Xi developed <strong>Neo-Confucianism</strong>, which blended Confucian ethics with ideas drawn from Buddhism and Daoism. " + N(7) + "Cheaper printed books in the Song era let more families buy the classics that exam candidates had to master.</p>",
      claims: [
        {
          id: "star",
          sol: "WHI.7.c",
          stem: "In sentence 1, Confucius compares a good ruler to the north polar star in order to show that —",
          choices: [
            { letter: "A", text: "rulers should study the stars to predict the future" },
            { letter: "B", text: "a ruler should travel constantly around the empire" },
            { letter: "C", text: "a virtuous ruler draws people to follow him" },
            { letter: "D", text: "a ruler must use harsh punishments to keep order" }
          ],
          correct: "C"
        },
        {
          id: "books",
          sol: "WHI.7.e",
          stem: "Which Chinese development described in sentence 7 helped more men prepare for the examinations?",
          choices: [
            { letter: "A", text: "printing" },
            { letter: "B", text: "the compass" },
            { letter: "C", text: "gunpowder" },
            { letter: "D", text: "Champa rice" }
          ],
          correct: "A"
        },
        {
          id: "merit",
          sol: "WHI.7.f",
          stem: "Which statement best explains how the examination system affected the imperial state?",
          choices: [
            { letter: "A", text: "It gave military generals control of every province." },
            { letter: "B", text: "It filled the government with educated men chosen largely by ability." },
            { letter: "C", text: "It allowed Buddhist monks to replace the emperor." },
            { letter: "D", text: "It ended the practice of hereditary rule by emperors." }
          ],
          correct: "B"
        },
        {
          id: "neo",
          sol: "WHI.7.c",
          stem: "According to sentence 6, Neo-Confucianism —",
          choices: [
            { letter: "A", text: "rejected all of Confucius's teachings" },
            { letter: "B", text: "was brought to China by the Mongols" },
            { letter: "C", text: "replaced the exams with military service" },
            { letter: "D", text: "combined Confucian ethics with Buddhist and Daoist ideas" }
          ],
          correct: "D"
        },
        {
          id: "scholar",
          sol: "WHI.7.f",
          stem: "In sentence 2, the term scholar-officials refers to —",
          choices: [
            { letter: "A", text: "educated men who served in the government" },
            { letter: "B", text: "monks who copied Buddhist writings" },
            { letter: "C", text: "wealthy merchants who lent money to the state" },
            { letter: "D", text: "nobles who inherited land from their fathers" }
          ],
          correct: "A"
        },
        {
          id: "family",
          sol: "WHI.7.f",
          stem: "Based on sentences 4 and 5, why would a family spend years of savings on one son's education?",
          choices: [
            { letter: "A", text: "Passing the exam was required to own a farm." },
            { letter: "B", text: "Every candidate who took the exam got a post." },
            { letter: "C", text: "Success could bring an official post and honor to the whole family." },
            { letter: "D", text: "Education excused a family from paying taxes." }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "easia-heian",
      family: "EASIA",
      title: "The Heian court",
      kind: "Medieval China & Japan · WHI.9",
      blurb: "Poetry, painting and the Tale of Genji in Japan's golden age.",
      level: 2,
      passage: "<p>" + N(1) + "In 794 Japan's emperor moved the capital to Heian, later called Kyoto. " + N(2) + "During the Heian period that followed, the court enjoyed a <strong>golden age</strong> of art and literature. " + N(3) + "Nobles prized beauty and elegant manners; they wrote poems to one another, judged good handwriting and arranged their clothing in careful layers of color. " + N(4) + "Japanese writers had long used Chinese characters, but now a simpler phonetic script, <strong>kana</strong>, let them write Japanese words as they were spoken. " + N(5) + "Court women used kana to write some of the era's greatest works. " + N(6) + "Around the year 1000, the lady-in-waiting Murasaki Shikibu wrote <strong>The Tale of Genji</strong>, a long story about the life and loves of a prince, often called the world's first novel. " + N(7) + "It is still read, studied and retold in films and comics today. " + N(8) + "The golden age faded in the late 1100s, when warrior clans began fighting for control of the country.</p>",
      claims: [
        {
          id: "end",
          sol: "WHI.9.f",
          stem: "According to sentence 8, what brought the Heian golden age to a close?",
          choices: [
            { letter: "A", text: "a Mongol conquest of Kyoto" },
            { letter: "B", text: "the arrival of Buddhism from Korea" },
            { letter: "C", text: "a ban on writing in kana" },
            { letter: "D", text: "the rise of warring warrior clans" }
          ],
          correct: "D"
        },
        {
          id: "kana",
          sol: "WHI.9.e",
          stem: "According to sentence 4, why was kana important?",
          choices: [
            { letter: "A", text: "It let writers record Japanese as it was spoken." },
            { letter: "B", text: "It replaced writing with a system of knotted cords." },
            { letter: "C", text: "It was the script used in the Qur'an." },
            { letter: "D", text: "It was invented to keep tax records only." }
          ],
          correct: "A"
        },
        {
          id: "golden",
          sol: "WHI.9.e",
          stem: "In sentence 2, the phrase golden age most nearly means —",
          choices: [
            { letter: "A", text: "a time when gold was mined in Japan" },
            { letter: "B", text: "a period of great cultural achievement" },
            { letter: "C", text: "a time of constant civil war" },
            { letter: "D", text: "a period when the emperor had no court" }
          ],
          correct: "B"
        },
        {
          id: "china",
          sol: "WHI.9.a",
          stem: "Sentence 4 shows that Japanese culture —",
          choices: [
            { letter: "A", text: "rejected every influence from China" },
            { letter: "B", text: "never developed its own form of writing" },
            { letter: "C", text: "borrowed from China, then adapted what it borrowed" },
            { letter: "D", text: "spread its writing system to Tang China" }
          ],
          correct: "C"
        },
        {
          id: "lasting",
          sol: "WHI.9.e",
          stem: "Which evidence in the passage best shows the lasting effect of Heian culture?",
          choices: [
            { letter: "A", text: "The capital moved to Heian in 794." },
            { letter: "B", text: "Nobles wrote poems to one another." },
            { letter: "C", text: "Court clothing was layered by color." },
            { letter: "D", text: "The Tale of Genji is still read and retold." }
          ],
          correct: "D"
        },
        {
          id: "women",
          sol: "WHI.9.e",
          stem: "Which conclusion about women at the Heian court is best supported by sentences 5 and 6?",
          choices: [
            { letter: "A", text: "Some noblewomen were leading writers of the age." },
            { letter: "B", text: "Women were not allowed to learn to read or write." },
            { letter: "C", text: "Women ruled Japan as shoguns during this era." },
            { letter: "D", text: "Women wrote only in Chinese characters." }
          ],
          correct: "A"
        }
      ]
    },

    /* ---------- long ---------- */
    {
      id: "easia-mongols",
      family: "EASIA",
      title: "China under the Mongols",
      kind: "Medieval China & Japan · WHI.7",
      blurb: "The Yuan dynasty opens the roads, sidelines scholars and fails against Japan.",
      level: 3,
      passage: "<ul><li><strong>1206</strong> Genghis Khan unites the Mongol tribes</li><li><strong>1271</strong> His grandson Kublai Khan founds the Yuan dynasty</li><li><strong>1274</strong> The first Mongol invasion of Japan fails</li><li><strong>1279</strong> The Yuan complete the conquest of the Song</li><li><strong>1281</strong> A second, larger invasion of Japan fails</li><li><strong>1368</strong> A rebellion drives out the Mongols; the Ming dynasty begins</li></ul><p>" + N(1) + "The Mongol empire stretched from Korea to Eastern Europe, and its rulers protected merchants on the overland Silk Road. " + N(2) + "Historians call this period of safer travel the <strong>Pax Mongolica</strong>. " + N(3) + "Relay stations with fresh horses carried messages across the empire, and travelers such as the Venetian Marco Polo reached Kublai's court. " + N(4) + "Inside China, the Mongols relied on foreigners and Mongols for high offices and stopped holding the civil service examination for decades. " + N(5) + "Many Confucian scholars turned to teaching, painting and writing plays. " + N(6) + "When the exams returned in 1315, they were based on Zhu Xi's Neo-Confucian readings of the classics. " + N(7) + "Meanwhile, in Japan, samurai defended the coast, and storms that the Japanese called <strong>kamikaze</strong>, or divine winds, wrecked the Mongol fleets.</p>",
      claims: [
        {
          id: "order",
          sol: "WHI.7.d",
          stem: "Which event happened LAST?",
          choices: [
            { letter: "A", text: "Genghis Khan unites the Mongols" },
            { letter: "B", text: "the founding of the Ming dynasty" },
            { letter: "C", text: "the Yuan conquest of the Song" },
            { letter: "D", text: "the Mongol invasions of Japan" }
          ],
          correct: "B"
        },
        {
          id: "pax",
          sol: "WHI.7.d",
          stem: "According to sentences 1 and 2, the Pax Mongolica was a time when —",
          choices: [
            { letter: "A", text: "Mongol rule made overland trade and travel safer" },
            { letter: "B", text: "China closed its borders to all foreign traders" },
            { letter: "C", text: "the Silk Road was abandoned for sea routes" },
            { letter: "D", text: "the Mongols converted all of Asia to Buddhism" }
          ],
          correct: "A"
        },
        {
          id: "scholars",
          sol: "WHI.7.c",
          stem: "Which statement best describes how Mongol rule affected Confucian scholars in China?",
          choices: [
            { letter: "A", text: "They gained more power than under any earlier Chinese dynasty." },
            { letter: "B", text: "They were made the generals who led the Mongol armies." },
            { letter: "C", text: "They lost many offices, but Neo-Confucianism later shaped the exams." },
            { letter: "D", text: "They were required by law to give up all Confucian teachings." }
          ],
          correct: "C"
        },
        {
          id: "polo",
          sol: "WHI.7.d",
          stem: "Marco Polo's journey to Kublai Khan's court is best used as evidence that —",
          choices: [
            { letter: "A", text: "Europeans ruled parts of China under the Yuan" },
            { letter: "B", text: "China had no contact with the West before 1500" },
            { letter: "C", text: "the Mongols banned all foreigners from China" },
            { letter: "D", text: "long-distance travel between Europe and China was possible" }
          ],
          correct: "D"
        },
        {
          id: "kamikaze",
          sol: "WHI.9.f",
          stem: "In sentence 7, the word kamikaze refers to —",
          choices: [
            { letter: "A", text: "the samurai code of honor" },
            { letter: "B", text: "the storms that wrecked the invasion fleets" },
            { letter: "C", text: "the Mongol ships that landed in Japan" },
            { letter: "D", text: "a Japanese form of Buddhism" }
          ],
          correct: "B"
        },
        {
          id: "japan",
          sol: "WHI.9.f",
          stem: "Which was a result of the failed Mongol invasions for Japan?",
          choices: [
            { letter: "A", text: "Japan became part of the Yuan Empire." },
            { letter: "B", text: "Japan's samurai class was abolished by the shogun." },
            { letter: "C", text: "Japan adopted the civil service examination." },
            { letter: "D", text: "Japan stayed independent, and samurai gained prestige as defenders." }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "easia-zheng-he",
      family: "EASIA",
      title: "The voyages of Zheng He",
      kind: "Medieval China & Japan · WHI.7",
      blurb: "Two views of the great Ming fleets and why they stopped sailing.",
      level: 3,
      passage: "<p><strong>Viewpoint 1</strong> " + N(1) + "Between 1405 and 1433, the Ming admiral <strong>Zheng He</strong>, a Muslim court official who served the Yongle emperor, led seven voyages across the Indian Ocean. " + N(2) + "His fleets, with hundreds of ships and thousands of sailors, visited Southeast Asia, India, the Persian Gulf, Arabia and the east coast of Africa. " + N(3) + "Using the magnetic compass and large ships with watertight compartments, the voyages displayed Ming power, gathered <strong>tribute</strong> from foreign rulers and expanded trade. " + N(4) + "Zheng He returned with gifts such as spices, gems and even a giraffe from Africa.</p><p><strong>Viewpoint 2</strong> " + N(5) + "After 1433 the voyages ended. " + N(6) + "Many Confucian officials saw them as costly displays that did little to help farmers, the true foundation of the state in their view. " + N(7) + "The Ming also faced danger from Mongol forces on the northern frontier and spent heavily rebuilding the Great Wall. " + N(8) + "The government limited private overseas trade, and China turned its attention inward. " + N(9) + "Within a century, Portuguese ships were sailing into the same waters Zheng He had explored.</p>",
      claims: [
        {
          id: "purpose",
          sol: "WHI.7.d",
          stem: "According to Viewpoint 1, what was a main purpose of Zheng He's voyages?",
          choices: [
            { letter: "A", text: "to conquer and settle colonies in Africa" },
            { letter: "B", text: "to show Ming power and expand trade and tribute" },
            { letter: "C", text: "to spread Christianity to the Indian Ocean" },
            { letter: "D", text: "to find a new route to the Americas" }
          ],
          correct: "B"
        },
        {
          id: "tribute",
          sol: "WHI.7.d",
          stem: "In sentence 3, the word tribute most nearly means —",
          choices: [
            { letter: "A", text: "gifts or payments given to show respect to a stronger ruler" },
            { letter: "B", text: "a warship designed for long ocean voyages" },
            { letter: "C", text: "a map of the coastlines of Africa and Arabia" },
            { letter: "D", text: "a tax that Chinese farmers paid on rice" }
          ],
          correct: "A"
        },
        {
          id: "compass",
          sol: "WHI.7.e",
          stem: "Which Chinese invention named in Viewpoint 1 made such long ocean voyages easier?",
          choices: [
            { letter: "A", text: "woodblock printing" },
            { letter: "B", text: "paper money" },
            { letter: "C", text: "gunpowder" },
            { letter: "D", text: "the magnetic compass" }
          ],
          correct: "D"
        },
        {
          id: "end",
          sol: "WHI.7.d",
          stem: "Select TWO reasons given in Viewpoint 2 for the end of the voyages.",
          choices: [
            { letter: "A", text: "Officials thought the voyages cost too much for too little benefit." },
            { letter: "B", text: "Zheng He's fleets were destroyed by the Portuguese navy." },
            { letter: "C", text: "The Ming needed resources to defend the northern frontier." },
            { letter: "D", text: "The rulers of Africa refused to trade with China." }
          ],
          correct: ["A", "C"]
        },
        {
          id: "confucian",
          sol: "WHI.7.c",
          stem: "The officials described in sentence 6 most likely held that view because Confucian thought —",
          choices: [
            { letter: "A", text: "praised merchants as the most useful class" },
            { letter: "B", text: "valued farming above trade and display" },
            { letter: "C", text: "taught that sailors earned spiritual merit" },
            { letter: "D", text: "required emperors to explore the world" }
          ],
          correct: "B"
        },
        {
          id: "effect",
          sol: "WHI.7.d",
          stem: "Which conclusion is best supported by sentences 8 and 9?",
          choices: [
            { letter: "A", text: "The Ming continued sending large fleets until 1600." },
            { letter: "B", text: "Portugal and China formed an alliance to explore Africa together." },
            { letter: "C", text: "China's withdrawal from the seas left room for European sailors in Asia." },
            { letter: "D", text: "The end of the voyages caused the immediate fall of the Ming." }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "easia-samurai-rise",
      family: "EASIA",
      title: "The rise of the shogun",
      kind: "Medieval China & Japan · WHI.9",
      blurb: "How warriors took power in Japan in the late 1100s, and the code they lived by.",
      level: 3,
      passage: "<p>" + N(1) + "By the 1100s, the emperor's court in Kyoto had grown weak. " + N(2) + "Landowners in the provinces hired armed warriors, called <strong>samurai</strong>, to protect their estates and collect taxes. " + N(3) + "Two powerful warrior clans, the Taira and the Minamoto, fought for control of Japan in the Gempei War (1180–1185). " + N(4) + "The Minamoto won, and their leader, Minamoto Yoritomo, set up a military government at Kamakura, far from the court. " + N(5) + "In 1192 the emperor gave him the title <strong>shogun</strong>. " + N(6) + "For nearly 700 years afterward, shoguns, not emperors, held real power in Japan, though the emperor remained as a respected symbol. " + N(7) + "Samurai followed a code later called <strong>bushido</strong>, \"the way of the warrior.\" " + N(8) + "It stressed loyalty to one's lord, courage, honor and self-discipline, and a samurai was expected to prefer death to disgrace. " + N(9) + "Many samurai also practiced Zen Buddhism, whose meditation trained the calm focus a warrior needed. " + N(10) + "Although the samurai class was abolished in the 1870s, many Japanese still point to ideals such as loyalty, discipline and duty, and martial arts like kendo and judo are practiced around the world.</p>",
      claims: [
        {
          id: "cause",
          sol: "WHI.9.f",
          stem: "According to sentences 1 and 2, why did samurai become important in Japan?",
          choices: [
            { letter: "A", text: "The emperor's army conquered Korea and needed soldiers." },
            { letter: "B", text: "Buddhist temples required warriors to guard them." },
            { letter: "C", text: "The court was weak, so landowners hired warriors for protection." },
            { letter: "D", text: "The Mongols trained Japanese warriors after their invasion." }
          ],
          correct: "C"
        },
        {
          id: "order",
          sol: "WHI.9.f",
          stem: "Which event happened FIRST?",
          choices: [
            { letter: "A", text: "the Gempei War between the Taira and Minamoto" },
            { letter: "B", text: "Yoritomo receives the title of shogun" },
            { letter: "C", text: "the abolition of the samurai class" },
            { letter: "D", text: "the first Mongol invasion of Japan" }
          ],
          correct: "A"
        },
        {
          id: "shogun",
          sol: "WHI.9.c",
          stem: "In sentence 5, the title shogun refers to —",
          choices: [
            { letter: "A", text: "a Buddhist teacher of meditation" },
            { letter: "B", text: "the supreme military ruler of Japan" },
            { letter: "C", text: "the emperor's chief poet at court" },
            { letter: "D", text: "a landowner who paid samurai in rice" }
          ],
          correct: "B"
        },
        {
          id: "bushido",
          sol: "WHI.9.c",
          stem: "Which value was most central to bushido?",
          choices: [
            { letter: "A", text: "loyalty to one's lord" },
            { letter: "B", text: "freedom from all duties" },
            { letter: "C", text: "success as a merchant" },
            { letter: "D", text: "skill in writing poetry" }
          ],
          correct: "A"
        },
        {
          id: "zen",
          sol: "WHI.9.d",
          stem: "Based on sentence 9, which form of Buddhism was most closely tied to samurai culture?",
          choices: [
            { letter: "A", text: "Pure Land" },
            { letter: "B", text: "Theravada" },
            { letter: "C", text: "Tibetan" },
            { letter: "D", text: "Zen" }
          ],
          correct: "D"
        },
        {
          id: "today",
          sol: "WHI.9.c",
          stem: "Sentence 10 is best used to support which claim?",
          choices: [
            { letter: "A", text: "The samurai still govern Japan today." },
            { letter: "B", text: "Bushido was forgotten after the 1870s." },
            { letter: "C", text: "Martial arts were first invented in the 1900s." },
            { letter: "D", text: "The warrior code still influences culture today." }
          ],
          correct: "D"
        }
      ]
    }
  ];

  for (var i = 0; i < PACKS.length; i++) P.push(PACKS[i]);
})(typeof window !== "undefined" ? window : global);
