/* SOL Lab — World History II · The World in 1500, Renaissance & Reformation (WHII.1–2). Original text only. */
(function (global) {
  var P = global.HEIST_PACKS;
  if (!P || !P.push) return;
  var N = function (i) { return '<span class="n">(' + i + ')</span> '; };   // numbered sentence

  var PACKS = [
    /* ---------- tiny ---------- */
    {
      id: "r1500-printing-press",
      family: "R1500",
      title: "Gutenberg's press",
      kind: "Renaissance & Reformation · WHII.2",
      blurb: "Metal letters, faster books and a Europe full of new readers.",
      level: 1,
      passage: "<p>" + N(1) + "Around 1450, Johannes Gutenberg of Mainz, Germany, built a printing press that used <strong>movable type</strong>, small metal letters that could be rearranged for each page. " + N(2) + "Books that once took scribes months to copy by hand could now be printed in days. " + N(3) + "By 1500, presses were working in many European cities. " + N(4) + "Bibles, humanist writings and, after 1517, Luther's pamphlets spread quickly.</p>",
      claims: [
        {
          id: "movable",
          sol: "WHII.2.b",
          stem: "In sentence 1, the term movable type most nearly means —",
          choices: [
            { letter: "A", text: "books that could be carried from city to city" },
            { letter: "B", text: "presses that were moved on carts to new towns" },
            { letter: "C", text: "metal letters that could be rearranged and reused" },
            { letter: "D", text: "pages written by scribes who traveled for work" }
          ],
          correct: "C"
        },
        {
          id: "effect",
          sol: "WHII.2.b",
          stem: "Which was the most important effect of the printing press in Europe?",
          choices: [
            { letter: "A", text: "Ideas and information spread faster to more people." },
            { letter: "B", text: "The Church gained control over all books in Europe." },
            { letter: "C", text: "Fewer people learned to read in their own language." },
            { letter: "D", text: "Latin became the only language used in printed books." }
          ],
          correct: "A"
        },
        {
          id: "luther",
          sol: "WHII.2.a",
          stem: "How did the printing press help Martin Luther's movement?",
          choices: [
            { letter: "A", text: "It allowed Luther to keep his ideas secret from the pope." },
            { letter: "B", text: "It made the sale of indulgences more profitable." },
            { letter: "C", text: "It let Luther print money to pay for his own army." },
            { letter: "D", text: "It spread copies of his writings quickly across Germany." }
          ],
          correct: "D"
        },
        {
          id: "conclude",
          sol: "WHII.2.b",
          stem: "Which conclusion is best supported by sentence 2?",
          choices: [
            { letter: "A", text: "Scribes copied more books after 1450 than before." },
            { letter: "B", text: "Books became cheaper and easier to obtain." },
            { letter: "C", text: "Printed books were less accurate than copies." },
            { letter: "D", text: "Only rulers were allowed to own printed books." }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "r1500-sikhism",
      family: "R1500",
      title: "The teachings of Guru Nanak",
      kind: "The World in 1500 · WHII.1",
      blurb: "A new faith in the Punjab, where Hindu and Muslim traditions met.",
      level: 1,
      passage: "<p>" + N(1) + "<strong>Sikhism</strong> began in the Punjab region of northern India in the late 1400s. " + N(2) + "Its founder, Guru Nanak, taught that there is one God and that all people are equal before God. " + N(3) + "Sikhs rejected the caste system. " + N(4) + "Their sacred text is the Guru Granth Sahib. " + N(5) + "Sikhism grew in a region where Hindu and Muslim traditions met.</p>",
      claims: [
        {
          id: "founder",
          sol: "WHII.1.b",
          stem: "Who founded Sikhism?",
          choices: [
            { letter: "A", text: "Siddhartha Gautama" },
            { letter: "B", text: "Guru Nanak" },
            { letter: "C", text: "Muhammad" },
            { letter: "D", text: "Abraham" }
          ],
          correct: "B"
        },
        {
          id: "text",
          sol: "WHII.1.b",
          stem: "Which sacred writing is central to Sikhism?",
          choices: [
            { letter: "A", text: "the Hindu Vedas" },
            { letter: "B", text: "the Hebrew Torah" },
            { letter: "C", text: "the Islamic Quran" },
            { letter: "D", text: "the Guru Granth Sahib" }
          ],
          correct: "D"
        },
        {
          id: "monotheism",
          sol: "WHII.1.b",
          stem: "Which belief did Sikhism share with Judaism, Christianity and Islam?",
          choices: [
            { letter: "A", text: "belief in one God" },
            { letter: "B", text: "belief in the caste system" },
            { letter: "C", text: "the Four Noble Truths" },
            { letter: "D", text: "the Five Pillars of faith" }
          ],
          correct: "A"
        },
        {
          id: "region",
          sol: "WHII.1.b",
          stem: "According to the passage, where did Sikhism begin?",
          choices: [
            { letter: "A", text: "in the Arabian Peninsula" },
            { letter: "B", text: "in southern China" },
            { letter: "C", text: "in northern India" },
            { letter: "D", text: "in East Africa" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "r1500-reform-timeline",
      family: "R1500",
      title: "Reformation timeline",
      kind: "Renaissance & Reformation · WHII.2",
      blurb: "Five dates that split Western Christianity.",
      level: 1,
      passage: "<p>" + N(1) + "Key dates of the Protestant and Catholic Reformations:</p><ul>" +
        "<li><strong>1517</strong> Martin Luther posts the Ninety-five Theses in Wittenberg</li>" +
        "<li><strong>1521</strong> Luther refuses to <strong>recant</strong> his writings at the Diet of Worms</li>" +
        "<li><strong>1534</strong> The Act of Supremacy makes Henry VIII head of the Church of England</li>" +
        "<li><strong>1536</strong> John Calvin publishes the Institutes of the Christian Religion</li>" +
        "<li><strong>1545</strong> The Council of Trent opens</li></ul>",
      claims: [
        {
          id: "first",
          sol: "WHII.2.a",
          stem: "Which of these events happened FIRST?",
          choices: [
            { letter: "A", text: "Calvin publishes his Institutes" },
            { letter: "B", text: "Luther appears at the Diet of Worms" },
            { letter: "C", text: "The Council of Trent opens" },
            { letter: "D", text: "Henry VIII becomes head of the church" }
          ],
          correct: "B"
        },
        {
          id: "recant",
          sol: "WHII.2.a",
          stem: "In the timeline, the word recant most nearly means —",
          choices: [
            { letter: "A", text: "publish again" },
            { letter: "B", text: "translate" },
            { letter: "C", text: "sell for profit" },
            { letter: "D", text: "take back" }
          ],
          correct: "D"
        },
        {
          id: "trent",
          sol: "WHII.2.c",
          stem: "The Council of Trent was part of which movement?",
          choices: [
            { letter: "A", text: "the Catholic Reformation" },
            { letter: "B", text: "the Lutheran Reformation" },
            { letter: "C", text: "the English Reformation" },
            { letter: "D", text: "the Italian Renaissance" }
          ],
          correct: "A"
        },
        {
          id: "henry",
          sol: "WHII.2.a",
          stem: "Why did Henry VIII break with the Catholic Church?",
          choices: [
            { letter: "A", text: "He agreed with Luther's view of salvation." },
            { letter: "B", text: "He wanted to end the Inquisition in England." },
            { letter: "C", text: "The pope refused to annul his marriage." },
            { letter: "D", text: "Calvin persuaded him to follow predestination." }
          ],
          correct: "C"
        },
        {
          id: "spread",
          sol: "WHII.2.a",
          stem: "Which conclusion is best supported by the timeline?",
          choices: [
            { letter: "A", text: "The Reformation ended within five years of 1517." },
            { letter: "B", text: "Protestant ideas spread to several lands within twenty years." },
            { letter: "C", text: "The Catholic Church made no response to Luther." },
            { letter: "D", text: "England was the first country to reject the pope." }
          ],
          correct: "B"
        }
      ]
    },

    /* ---------- short ---------- */
    {
      id: "r1500-empires-table",
      family: "R1500",
      title: "Empires around 1500",
      kind: "The World in 1500 · WHII.1",
      blurb: "Five great states on three continents.",
      level: 1,
      passage: "<p>" + N(1) + "Around 1500, powerful states ruled large parts of the world. " + N(2) + "In Europe, the monarchies of England, France, Spain and Portugal were growing stronger. " + N(3) + "The table lists five <strong>empires</strong> elsewhere.</p>" +
        "<table><tr><th>Empire</th><th>Region</th><th>Capital</th><th>Note</th></tr>" +
        "<tr><td>Ottoman</td><td>Anatolia and southeastern Europe</td><td>Istanbul</td><td>Captured Constantinople in 1453</td></tr>" +
        "<tr><td>Ming</td><td>East Asia</td><td>Beijing</td><td>Built the Forbidden City</td></tr>" +
        "<tr><td>Songhai</td><td>West Africa</td><td>Gao</td><td>Controlled trade through Timbuktu</td></tr>" +
        "<tr><td>Aztec</td><td>Central Mexico</td><td>Tenochtitlan</td><td>Built on an island in a lake</td></tr>" +
        "<tr><td>Inca</td><td>Andes Mountains</td><td>Cuzco</td><td>Linked by a vast road system</td></tr></table>",
      claims: [
        {
          id: "andes",
          sol: "WHII.1.a",
          stem: "Which empire was centered in the Andes Mountains of South America?",
          choices: [
            { letter: "A", text: "the Aztec Empire" },
            { letter: "B", text: "the Songhai Empire" },
            { letter: "C", text: "the Inca Empire" },
            { letter: "D", text: "the Ming dynasty" }
          ],
          correct: "C"
        },
        {
          id: "bridge",
          sol: "WHII.1.a",
          stem: "Which empire controlled the city that links Europe and Asia?",
          choices: [
            { letter: "A", text: "the Ottoman Empire" },
            { letter: "B", text: "the Inca Empire" },
            { letter: "C", text: "the Ming dynasty" },
            { letter: "D", text: "the Songhai Empire" }
          ],
          correct: "A"
        },
        {
          id: "timbuktu",
          sol: "WHII.1.c",
          stem: "Songhai's control of Timbuktu mattered most because the city was —",
          choices: [
            { letter: "A", text: "the main port for ships sailing to India" },
            { letter: "B", text: "the capital of the Holy Roman Empire" },
            { letter: "C", text: "a fortress guarding the Andes road system" },
            { letter: "D", text: "a center of trans-Saharan trade and learning" }
          ],
          correct: "D"
        },
        {
          id: "conclusion",
          sol: "WHII.1.a",
          stem: "Which conclusion is best supported by the table?",
          choices: [
            { letter: "A", text: "Europe held the only strong governments in 1500." },
            { letter: "B", text: "Large, organized states existed on several continents." },
            { letter: "C", text: "Every empire in 1500 was ruled from a seaport." },
            { letter: "D", text: "The empires of the Americas traded with China." }
          ],
          correct: "B"
        },
        {
          id: "empire",
          sol: "WHII.1.a",
          stem: "In sentence 3, an empire is best defined as —",
          choices: [
            { letter: "A", text: "a city that governs only itself" },
            { letter: "B", text: "a trade route crossing a desert" },
            { letter: "C", text: "a group of lands and peoples under one ruler" },
            { letter: "D", text: "a council of elected town leaders" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "r1500-henry-viii",
      family: "R1500",
      title: "Henry VIII and the break with Rome",
      kind: "Renaissance & Reformation · WHII.2",
      blurb: "A king, a marriage, a pope and a new national church.",
      level: 2,
      passage: "<p>" + N(1) + "King Henry VIII of England first defended the Catholic Church, and the pope named him \"Defender of the Faith.\" " + N(2) + "By the 1520s, Henry had no male heir by his wife, Catherine of Aragon, and he asked the pope to <strong>annul</strong> the marriage. " + N(3) + "The pope refused, partly because Catherine's nephew, the Holy Roman Emperor Charles V, controlled Rome at the time. " + N(4) + "In 1534 Parliament passed the Act of Supremacy, which made the king head of the Church of England. " + N(5) + "Henry then closed the monasteries and took their lands, selling or granting many of them to nobles who supported him.</p>",
      claims: [
        {
          id: "annul",
          sol: "WHII.2.a",
          stem: "In sentence 2, the word annul most nearly means —",
          choices: [
            { letter: "A", text: "bless in a church ceremony" },
            { letter: "B", text: "declare not legally valid" },
            { letter: "C", text: "record in a royal register" },
            { letter: "D", text: "delay until a later date" }
          ],
          correct: "B"
        },
        {
          id: "motive",
          sol: "WHII.2.a",
          stem: "Which statement best explains why Henry VIII broke with the pope?",
          choices: [
            { letter: "A", text: "He wanted a male heir and a new marriage." },
            { letter: "B", text: "He accepted Calvin's teaching on predestination." },
            { letter: "C", text: "He wished to end the sale of indulgences." },
            { letter: "D", text: "He hoped to unite England with Spain." }
          ],
          correct: "A"
        },
        {
          id: "monasteries",
          sol: "WHII.2.a",
          stem: "Which was a result of Henry's closing of the monasteries?",
          choices: [
            { letter: "A", text: "Monks gained seats in Parliament." },
            { letter: "B", text: "England returned to obedience to Rome." },
            { letter: "C", text: "The pope received new lands in England." },
            { letter: "D", text: "The crown and loyal nobles gained wealth." }
          ],
          correct: "D"
        },
        {
          id: "politics",
          sol: "WHII.2.c",
          stem: "Sentence 3 best supports the idea that in the 1500s —",
          choices: [
            { letter: "A", text: "religious decisions were often shaped by politics" },
            { letter: "B", text: "the pope ruled England directly" },
            { letter: "C", text: "Charles V was a Protestant ruler" },
            { letter: "D", text: "Parliament chose the head of the Catholic Church" }
          ],
          correct: "A"
        },
        {
          id: "compare",
          sol: "WHII.2.a",
          stem: "How did Henry VIII's break with Rome differ from Martin Luther's?",
          choices: [
            { letter: "A", text: "Henry's break began with a debate over indulgences." },
            { letter: "B", text: "Henry wanted every believer to read the Bible alone." },
            { letter: "C", text: "Henry's reasons were mainly political and personal." },
            { letter: "D", text: "Henry was excommunicated before Luther was." }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "r1500-religions-table",
      family: "R1500",
      title: "Five world religions",
      kind: "The World in 1500 · WHII.1",
      blurb: "Founders, sacred writings and beliefs side by side.",
      level: 2,
      passage: "<p>" + N(1) + "Around 1500, these religions shaped daily life across Europe, Asia and Africa, and each had spread far from its <strong>place of origin</strong>.</p>" +
        "<table><tr><th>Religion</th><th>Founder or key figure</th><th>Sacred writings</th><th>A central belief</th></tr>" +
        "<tr><td>Judaism</td><td>Abraham, Moses</td><td>Torah</td><td>One God and a covenant with the Jewish people</td></tr>" +
        "<tr><td>Christianity</td><td>Jesus</td><td>Bible</td><td>Christians believe Jesus is the Son of God</td></tr>" +
        "<tr><td>Islam</td><td>Muhammad</td><td>Quran</td><td>One God (Allah); the Five Pillars</td></tr>" +
        "<tr><td>Hinduism</td><td>No single founder</td><td>Vedas, Upanishads</td><td>Karma and reincarnation</td></tr>" +
        "<tr><td>Buddhism</td><td>Siddhartha Gautama</td><td>Sutras</td><td>Four Noble Truths, Eightfold Path</td></tr></table>",
      claims: [
        {
          id: "quran",
          sol: "WHII.1.b",
          stem: "According to the table, the Quran is the sacred text of which religion?",
          choices: [
            { letter: "A", text: "Judaism" },
            { letter: "B", text: "Hinduism" },
            { letter: "C", text: "Buddhism" },
            { letter: "D", text: "Islam" }
          ],
          correct: "D"
        },
        {
          id: "nofounder",
          sol: "WHII.1.b",
          stem: "Which religion in the table developed over centuries without a single founder?",
          choices: [
            { letter: "A", text: "Christianity" },
            { letter: "B", text: "Hinduism" },
            { letter: "C", text: "Islam" },
            { letter: "D", text: "Buddhism" }
          ],
          correct: "B"
        },
        {
          id: "mono",
          sol: "WHII.1.b",
          stem: "Which TWO religions in the table teach belief in one God? Select TWO.",
          choices: [
            { letter: "A", text: "Judaism" },
            { letter: "B", text: "Buddhism" },
            { letter: "C", text: "Islam" },
            { letter: "D", text: "Hinduism" }
          ],
          correct: ["A", "C"]
        },
        {
          id: "buddhism",
          sol: "WHII.1.b",
          stem: "How did Buddhism spread from India to China, Korea and Japan?",
          choices: [
            { letter: "A", text: "through missionaries and merchants on trade routes" },
            { letter: "B", text: "through conquest by the armies of the Ming dynasty" },
            { letter: "C", text: "through Portuguese ships sailing from Europe" },
            { letter: "D", text: "through decrees issued by the Ottoman sultans" }
          ],
          correct: "A"
        },
        {
          id: "islam",
          sol: "WHII.1.b",
          stem: "Which statement best explains how Islam reached West Africa and Indonesia by 1500?",
          choices: [
            { letter: "A", text: "Monks from Europe carried it along the Silk Road." },
            { letter: "B", text: "It was spread mainly by Mongol rulers in China." },
            { letter: "C", text: "Muslim merchants carried it along trade routes." },
            { letter: "D", text: "Spanish explorers brought it by sea." }
          ],
          correct: "C"
        }
      ]
    },

    /* ---------- medium ---------- */
    {
      id: "r1500-ninety-five-theses",
      family: "R1500",
      title: "The Ninety-five Theses",
      kind: "Renaissance & Reformation · WHII.2",
      blurb: "A monk in Wittenberg questions the sale of indulgences.",
      level: 2,
      passage: "<p>" + N(1) + "In 1517 the friar Johann Tetzel was selling <strong>indulgences</strong> in Germany to raise money to rebuild St. Peter's Basilica in Rome. " + N(2) + "An indulgence was a pardon from the Church that was believed to reduce punishment for sins after death. " + N(3) + "Martin Luther, a monk and professor at Wittenberg, objected and wrote ninety-five theses, or arguments, for debate.</p>" +
        "<blockquote><p>27. They preach only human doctrines who say that as soon as the money clinks into the money chest, the soul flies out of purgatory.</p>" +
        "<p>86. Why does not the pope, whose wealth today is greater than the wealth of the richest Crassus, build the basilica of St. Peter with his own money rather than with the money of poor believers?</p></blockquote>" +
        "<p class=\"src\">— Martin Luther, Ninety-five Theses, 1517 (translated; adapted)</p>" +
        "<p>" + N(4) + "Luther came to teach that people are saved by faith alone and that the Bible, not the pope, is the final authority.</p>",
      claims: [
        {
          id: "indulgence",
          sol: "WHII.2.a",
          stem: "In sentence 1, the word indulgences refers to —",
          choices: [
            { letter: "A", text: "taxes paid by German princes to the emperor" },
            { letter: "B", text: "church pardons believed to lessen punishment for sin" },
            { letter: "C", text: "printed copies of the Bible sold in Germany" },
            { letter: "D", text: "fees paid by monks to enter a monastery" }
          ],
          correct: "B"
        },
        {
          id: "purpose",
          sol: "WHII.2.a",
          stem: "The main purpose of the Ninety-five Theses was to —",
          choices: [
            { letter: "A", text: "challenge the sale of indulgences and invite debate" },
            { letter: "B", text: "raise money to rebuild St. Peter's Basilica" },
            { letter: "C", text: "announce the founding of the Church of England" },
            { letter: "D", text: "praise the pope for his care of poor believers" }
          ],
          correct: "A"
        },
        {
          id: "pov",
          sol: "WHII.2.a",
          stem: "Thesis 86 shows that Luther believed —",
          choices: [
            { letter: "A", text: "the pope was too poor to pay for a new church" },
            { letter: "B", text: "the basilica should not be built at all" },
            { letter: "C", text: "Crassus should pay for St. Peter's Basilica" },
            { letter: "D", text: "poor believers were unfairly paying for the Church" }
          ],
          correct: "D"
        },
        {
          id: "beliefs",
          sol: "WHII.2.a",
          stem: "Which belief is most closely associated with Martin Luther?",
          choices: [
            { letter: "A", text: "salvation through faith and good works together" },
            { letter: "B", text: "the king as the head of the national church" },
            { letter: "C", text: "salvation by faith alone" },
            { letter: "D", text: "the pope as the final authority on the Bible" }
          ],
          correct: "C"
        },
        {
          id: "press",
          sol: "WHII.2.b",
          stem: "Which development most helped Luther's ideas reach people across Germany within weeks?",
          choices: [
            { letter: "A", text: "the printing press" },
            { letter: "B", text: "the Council of Trent" },
            { letter: "C", text: "the Spanish Inquisition" },
            { letter: "D", text: "the Silk Road" }
          ],
          correct: "A"
        },
        {
          id: "augsburg",
          sol: "WHII.2.c",
          stem: "Which was a long-term result of the conflict that followed Luther's protest?",
          choices: [
            { letter: "A", text: "The pope gave Luther control of the Church in Rome." },
            { letter: "B", text: "Indulgences became the main tax of the Holy Roman Empire." },
            { letter: "C", text: "German princes won the right to choose their lands' faith." },
            { letter: "D", text: "Every German state became Calvinist by 1520." }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "r1500-calvin-geneva",
      family: "R1500",
      title: "Calvin's Geneva",
      kind: "Renaissance & Reformation · WHII.2",
      blurb: "Predestination, a strict city and a faith that crossed borders.",
      level: 2,
      passage: "<p>" + N(1) + "John Calvin, a French scholar trained in law, became the leading Protestant reformer in Geneva, Switzerland. " + N(2) + "In his Institutes of the Christian Religion, first published in 1536, he taught <strong>predestination</strong>, the belief that God has already chosen who will be saved. " + N(3) + "Like Luther, Calvin rejected the authority of the pope and held that the Bible is the highest authority for Christians. " + N(4) + "In Geneva, church leaders worked closely with the city government to enforce strict rules of behavior, such as bans on gambling and dancing. " + N(5) + "Calvinist ideas spread to the Huguenots of France, to the Presbyterians of Scotland under John Knox, and to the Puritans of England. " + N(6) + "Calvinists, like other Protestants, stressed that believers should read the Bible themselves.</p>",
      claims: [
        {
          id: "predestination",
          sol: "WHII.2.a",
          stem: "In sentence 2, predestination means the belief that —",
          choices: [
            { letter: "A", text: "good works can earn a place in heaven" },
            { letter: "B", text: "the pope decides who will be saved" },
            { letter: "C", text: "God has already chosen who will be saved" },
            { letter: "D", text: "every soul is reborn in a new body" }
          ],
          correct: "C"
        },
        {
          id: "both",
          sol: "WHII.2.a",
          stem: "Which TWO statements describe both Luther and Calvin? Select TWO.",
          choices: [
            { letter: "A", text: "They rejected the authority of the pope." },
            { letter: "B", text: "They supported the sale of indulgences." },
            { letter: "C", text: "They founded the Church of England." },
            { letter: "D", text: "They held that the Bible is the highest authority." }
          ],
          correct: ["A", "D"]
        },
        {
          id: "scotland",
          sol: "WHII.2.a",
          stem: "According to sentence 5, Calvinism took root in Scotland as —",
          choices: [
            { letter: "A", text: "the Huguenot movement" },
            { letter: "B", text: "the Presbyterian Church" },
            { letter: "C", text: "the Society of Jesus" },
            { letter: "D", text: "the Lutheran Church" }
          ],
          correct: "B"
        },
        {
          id: "huguenots",
          sol: "WHII.2.c",
          stem: "Which was a result of the spread of Calvinism to France?",
          choices: [
            { letter: "A", text: "France broke with Rome and formed a national church." },
            { letter: "B", text: "The Council of Trent moved its meetings to Paris." },
            { letter: "C", text: "French kings made Calvinism the only legal faith." },
            { letter: "D", text: "Catholics and Huguenots fought in wars of religion." }
          ],
          correct: "D"
        },
        {
          id: "literacy",
          sol: "WHII.2.b",
          stem: "Which change in society was encouraged by the idea in sentence 6?",
          choices: [
            { letter: "A", text: "more schools and greater literacy" },
            { letter: "B", text: "fewer books printed in local languages" },
            { letter: "C", text: "a return to Latin-only church services" },
            { letter: "D", text: "the end of city governments in Europe" }
          ],
          correct: "A"
        },
        {
          id: "geneva",
          sol: "WHII.2.c",
          stem: "Sentence 4 best supports which conclusion about Geneva?",
          choices: [
            { letter: "A", text: "The pope appointed Geneva's city council." },
            { letter: "B", text: "Geneva separated religion from government." },
            { letter: "C", text: "Religious leaders shaped the city's laws." },
            { letter: "D", text: "Geneva banned the reading of the Bible." }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "r1500-trade-routes",
      family: "R1500",
      title: "A map of trade around 1500",
      kind: "The World in 1500 · WHII.1",
      blurb: "Silk Road caravans, monsoon ships and Saharan camels.",
      level: 3,
      passage: "<p>" + N(1) + "On a map of major trade routes around 1500, the overland <strong>Silk Road</strong> runs from China across Central Asia to the eastern Mediterranean. " + N(2) + "Sea routes cross the Indian Ocean, linking East Africa, Arabia, India and Southeast Asia; seasonal monsoon winds set the sailing times. " + N(3) + "Caravans cross the Sahara, carrying West African gold north and salt south. " + N(4) + "In the Mediterranean, Venice and Genoa carry Asian spices and silk to European buyers. " + N(5) + "Goods were not the only cargo: paper, the compass and gunpowder reached Europe from China, and Indian numerals spread west through Muslim scholars, becoming known in Europe as Arabic numerals. " + N(6) + "Because Asian goods passed through many Muslim and Italian <strong>middlemen</strong>, they were very costly by the time they reached western Europe.</p>",
      claims: [
        {
          id: "monsoon",
          sol: "WHII.1.c",
          stem: "Which geographic feature most affected the timing of Indian Ocean trade?",
          choices: [
            { letter: "A", text: "the Andes Mountains" },
            { letter: "B", text: "the Sahara Desert" },
            { letter: "C", text: "the Gobi Desert" },
            { letter: "D", text: "the monsoon winds" }
          ],
          correct: "D"
        },
        {
          id: "religion",
          sol: "WHII.1.b",
          stem: "Merchants on the Saharan and Indian Ocean routes shown on the map helped spread which religion to West Africa and the East African coast?",
          choices: [
            { letter: "A", text: "Islam" },
            { letter: "B", text: "Sikhism" },
            { letter: "C", text: "Hinduism" },
            { letter: "D", text: "Judaism" }
          ],
          correct: "A"
        },
        {
          id: "middlemen",
          sol: "WHII.1.c",
          stem: "In sentence 6, middlemen are best described as —",
          choices: [
            { letter: "A", text: "soldiers who guarded caravans" },
            { letter: "B", text: "traders who bought and resold goods" },
            { letter: "C", text: "officials who collected church taxes" },
            { letter: "D", text: "farmers who grew spices for export" }
          ],
          correct: "B"
        },
        {
          id: "ottoman",
          sol: "WHII.1.a",
          stem: "After 1453, which empire controlled the land routes where Europe meets Asia?",
          choices: [
            { letter: "A", text: "the Songhai Empire" },
            { letter: "B", text: "the Ming dynasty" },
            { letter: "C", text: "the Ottoman Empire" },
            { letter: "D", text: "the Holy Roman Empire" }
          ],
          correct: "C"
        },
        {
          id: "cause",
          sol: "WHII.1.c",
          stem: "The situation in sentence 6 most directly encouraged Portugal and Spain to —",
          choices: [
            { letter: "A", text: "close their ports to all Asian goods" },
            { letter: "B", text: "search for a sea route to Asia" },
            { letter: "C", text: "join the Ottoman Empire as allies" },
            { letter: "D", text: "build new caravan routes across the Sahara" }
          ],
          correct: "B"
        },
        {
          id: "ideas",
          sol: "WHII.1.c",
          stem: "Which conclusion is best supported by sentence 5?",
          choices: [
            { letter: "A", text: "Europe invented most of the tools used in trade." },
            { letter: "B", text: "China refused to share its inventions with others." },
            { letter: "C", text: "Trade routes carried knowledge as well as goods." },
            { letter: "D", text: "Numbers were first used by European merchants." }
          ],
          correct: "C"
        }
      ]
    },

    /* ---------- long ---------- */
    {
      id: "r1500-catholic-reformation",
      family: "R1500",
      title: "The Catholic Reformation",
      kind: "Renaissance & Reformation · WHII.2",
      blurb: "Trent, the Jesuits, the Index and the Inquisition.",
      level: 3,
      passage: "<p>" + N(1) + "The Catholic Church answered the Protestant challenge with a movement called the Catholic Reformation, or Counter-Reformation. " + N(2) + "From 1545 to 1563, bishops met at the Council of Trent in northern Italy. " + N(3) + "The council reaffirmed teachings that Protestants rejected: salvation comes through faith and good works, the Church has authority to interpret the Bible, and there are seven sacraments. " + N(4) + "It also ordered bishops to correct abuses among the clergy and called for seminaries to train priests. " + N(5) + "In 1540 the pope approved the Society of Jesus, or Jesuits, founded by Ignatius of Loyola. " + N(6) + "Jesuits opened schools and universities and sent missionaries to Asia, Africa and the Americas.</p>" +
        "<p>" + N(7) + "The Church also used the Inquisition, a system of church courts, to find and punish people it judged to be <strong>heretics</strong>. " + N(8) + "In 1559 the pope issued the Index of Prohibited Books, a list of works Catholics were forbidden to read. " + N(9) + "In Spain, a separate Inquisition controlled by the monarchs had operated since 1478, mainly against converts suspected of secretly practicing Judaism or Islam.</p>",
      claims: [
        {
          id: "heretics",
          sol: "WHII.2.c",
          stem: "In sentence 7, the word heretics refers to people who —",
          choices: [
            { letter: "A", text: "held beliefs that went against official church teaching" },
            { letter: "B", text: "trained young men to become priests" },
            { letter: "C", text: "traveled overseas as Jesuit missionaries" },
            { letter: "D", text: "printed books for the Catholic Church" }
          ],
          correct: "A"
        },
        {
          id: "trent",
          sol: "WHII.2.c",
          stem: "The main goals of the Council of Trent were to —",
          choices: [
            { letter: "A", text: "accept Luther's teachings and reunite the church" },
            { letter: "B", text: "reaffirm Catholic doctrine and reform abuses" },
            { letter: "C", text: "end the authority of bishops over priests" },
            { letter: "D", text: "make the Bible available only in Latin schools" }
          ],
          correct: "B"
        },
        {
          id: "salvation",
          sol: "WHII.2.a",
          stem: "How did the teaching in sentence 3 differ from Martin Luther's view?",
          choices: [
            { letter: "A", text: "Luther taught that there were seven sacraments." },
            { letter: "B", text: "Luther said only the pope could read the Bible." },
            { letter: "C", text: "Luther agreed with Trent on every main point." },
            { letter: "D", text: "Luther taught salvation by faith alone." }
          ],
          correct: "D"
        },
        {
          id: "jesuits",
          sol: "WHII.2.c",
          stem: "Which statement best describes the role of the Jesuits?",
          choices: [
            { letter: "A", text: "They led Protestant churches in Switzerland." },
            { letter: "B", text: "They ran the courts of the Spanish monarchs." },
            { letter: "C", text: "They spread Catholicism through schools and missions." },
            { letter: "D", text: "They wrote the Index of Prohibited Books in 1540." }
          ],
          correct: "C"
        },
        {
          id: "index",
          sol: "WHII.2.b",
          stem: "Which development best explains why the Church created the Index of Prohibited Books?",
          choices: [
            { letter: "A", text: "Printed books were spreading Protestant ideas quickly." },
            { letter: "B", text: "Monks were copying too few books by hand." },
            { letter: "C", text: "Jesuit schools had run out of textbooks." },
            { letter: "D", text: "The Council of Trent banned all printing presses." }
          ],
          correct: "A"
        },
        {
          id: "stop",
          sol: "WHII.2.c",
          stem: "Which TWO actions did the Catholic Church take to stop the spread of Protestant ideas? Select TWO.",
          choices: [
            { letter: "A", text: "allowing each prince to choose his land's religion" },
            { letter: "B", text: "trying suspected heretics in church courts" },
            { letter: "C", text: "selling more indulgences to raise funds" },
            { letter: "D", text: "forbidding Catholics to read certain books" }
          ],
          correct: ["B", "D"]
        }
      ]
    },
    {
      id: "r1500-elizabeth",
      family: "R1500",
      title: "Elizabeth I and the middle way",
      kind: "Renaissance & Reformation · WHII.2",
      blurb: "A Protestant queen, a Catholic rival and the Spanish Armada.",
      level: 3,
      passage: "<p>" + N(1) + "Elizabeth I, the daughter of Henry VIII and Anne Boleyn, became queen of England in 1558. " + N(2) + "Before her, England's official religion had swung back and forth: her half-brother Edward VI made the church more Protestant, and her half-sister Mary I restored Catholicism and executed many Protestants for heresy. " + N(3) + "Elizabeth sought a middle way, often called the Elizabethan <strong>Settlement</strong>. " + N(4) + "The Act of Supremacy of 1559 made her Supreme Governor of the Church of England, which kept Protestant teachings along with bishops and much traditional ceremony. " + N(5) + "Catholic Spain, ruled by Philip II, saw Protestant England as a rival. " + N(6) + "In 1588 Philip sent the Spanish Armada to invade England, but English ships and storms defeated it. " + N(7) + "As fears of invasion continued that summer, Elizabeth spoke to her soldiers at Tilbury:</p>" +
        "<blockquote><p>I know I have the body of a weak and feeble woman; but I have the heart and stomach of a king, and of a king of England too.</p></blockquote>" +
        "<p class=\"src\">— Elizabeth I, speech to the troops at Tilbury, 1588 (as recorded; adapted)</p>" +
        "<p>" + N(8) + "Her long reign also saw the growth of English trade and the plays of William Shakespeare.</p>",
      claims: [
        {
          id: "settlement",
          sol: "WHII.2.a",
          stem: "In sentence 3, the word Settlement most nearly means —",
          choices: [
            { letter: "A", text: "a new colony overseas" },
            { letter: "B", text: "a compromise agreement" },
            { letter: "C", text: "a payment of debts" },
            { letter: "D", text: "a military victory" }
          ],
          correct: "B"
        },
        {
          id: "policy",
          sol: "WHII.2.a",
          stem: "Which statement best describes Elizabeth I's religious policy?",
          choices: [
            { letter: "A", text: "She returned England to obedience to the pope." },
            { letter: "B", text: "She made Calvin's Geneva the model for England." },
            { letter: "C", text: "She kept a Protestant church with some Catholic traditions." },
            { letter: "D", text: "She ended the Church of England founded by her father." }
          ],
          correct: "C"
        },
        {
          id: "armada",
          sol: "WHII.2.c",
          stem: "Which was the main cause of the conflict that led to the Spanish Armada?",
          choices: [
            { letter: "A", text: "religious and political rivalry between Spain and England" },
            { letter: "B", text: "a dispute over the Ottoman control of Constantinople" },
            { letter: "C", text: "Spain's wish to adopt the Church of England" },
            { letter: "D", text: "England's attempt to conquer the Spanish throne" }
          ],
          correct: "A"
        },
        {
          id: "tilbury",
          sol: "WHII.2.a",
          stem: "The main purpose of Elizabeth's words at Tilbury was to —",
          choices: [
            { letter: "A", text: "apologize to Spain for England's attacks" },
            { letter: "B", text: "announce that she would soon marry a king" },
            { letter: "C", text: "explain the teachings of the Church of England" },
            { letter: "D", text: "inspire her soldiers' courage and loyalty" }
          ],
          correct: "D"
        },
        {
          id: "shakespeare",
          sol: "WHII.2.b",
          stem: "Shakespeare's plays, written in English for wide audiences, best reflect which Renaissance change?",
          choices: [
            { letter: "A", text: "a return to Latin for all serious writing" },
            { letter: "B", text: "a loss of interest in human character" },
            { letter: "C", text: "a ban on secular books across Europe" },
            { letter: "D", text: "the growing use of everyday languages in literature" }
          ],
          correct: "D"
        },
        {
          id: "conclusion",
          sol: "WHII.2.c",
          stem: "Which conclusion is best supported by sentences 2 through 4?",
          choices: [
            { letter: "A", text: "Parliament had no role in English religion." },
            { letter: "B", text: "The ruler's faith shaped England's official church." },
            { letter: "C", text: "England stayed Catholic throughout the 1500s." },
            { letter: "D", text: "Religious change in England happened without conflict." }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "r1500-two-humanists",
      family: "R1500",
      title: "Two Renaissance writers",
      kind: "Renaissance & Reformation · WHII.2",
      blurb: "Machiavelli on power, Erasmus on the Church.",
      level: 3,
      passage: "<p>" + N(1) + "The Renaissance, a rebirth of interest in the learning of ancient Greece and Rome, began in the wealthy Italian city-states, where merchants and bankers paid artists and scholars. " + N(2) + "<strong>Humanism</strong> celebrated human achievement and studied history, poetry and politics as well as religion. " + N(3) + "Two writers, one Italian and one Dutch, show different sides of the movement.</p>" +
        "<p><strong>Source A</strong></p><blockquote><p>It is much safer for a prince to be feared than loved, if he cannot be both. A prince who wishes to keep power must learn how not to be good, and use that knowledge or not as necessity requires.</p></blockquote>" +
        "<p class=\"src\">— Niccolò Machiavelli, The Prince, 1513 (translated; adapted)</p>" +
        "<p><strong>Source B</strong></p><blockquote><p>In The Praise of Folly (1511), the Dutch scholar Desiderius Erasmus mocked monks, theologians and church officials who cared more about wealth and ceremony than about living as Christ taught. He also published the New Testament in Greek and hoped the Scriptures would be translated into everyday languages.</p></blockquote>" +
        "<p class=\"src\">— Summary of the writings of Erasmus</p>",
      claims: [
        {
          id: "humanism",
          sol: "WHII.2.b",
          stem: "In sentence 2, humanism is best described as a movement that —",
          choices: [
            { letter: "A", text: "rejected all study of religion" },
            { letter: "B", text: "focused only on the lives of the saints" },
            { letter: "C", text: "valued human achievement and classical learning" },
            { letter: "D", text: "opposed the use of the printing press" }
          ],
          correct: "C"
        },
        {
          id: "machiavelli",
          sol: "WHII.2.b",
          stem: "The author of Source A would most likely support a ruler who —",
          choices: [
            { letter: "A", text: "does whatever is needed to keep power" },
            { letter: "B", text: "gives up the throne to avoid conflict" },
            { letter: "C", text: "lets the pope make all political decisions" },
            { letter: "D", text: "always acts kindly even when it is risky" }
          ],
          correct: "A"
        },
        {
          id: "erasmus",
          sol: "WHII.2.a",
          stem: "Which idea in Source B was shared by Martin Luther?",
          choices: [
            { letter: "A", text: "Monks should be given more wealth and land." },
            { letter: "B", text: "Rulers should be feared rather than loved." },
            { letter: "C", text: "The Bible should be read only in Latin." },
            { letter: "D", text: "Church leaders had become too focused on wealth." }
          ],
          correct: "D"
        },
        {
          id: "compare",
          sol: "WHII.2.b",
          stem: "Which statement best describes BOTH sources?",
          choices: [
            { letter: "A", text: "Both defend medieval traditions without change." },
            { letter: "B", text: "Both question accepted ideas about how people should act." },
            { letter: "C", text: "Both were written to support the Council of Trent." },
            { letter: "D", text: "Both argue that kings should obey the Church." }
          ],
          correct: "B"
        },
        {
          id: "patrons",
          sol: "WHII.1.c",
          stem: "According to sentence 1, the Renaissance began in Italy mainly because —",
          choices: [
            { letter: "A", text: "Italy had been isolated from all trade" },
            { letter: "B", text: "trade wealth let patrons support artists and scholars" },
            { letter: "C", text: "the Ottoman sultans paid for Italian schools" },
            { letter: "D", text: "Italian kings banned the study of religion" }
          ],
          correct: "B"
        },
        {
          id: "print",
          sol: "WHII.2.b",
          stem: "Erasmus's ideas reached readers across Europe in the early 1500s mainly because —",
          choices: [
            { letter: "A", text: "the Inquisition required all priests to read them" },
            { letter: "B", text: "he was elected pope after 1511" },
            { letter: "C", text: "his books were printed in large numbers" },
            { letter: "D", text: "monks copied his books by hand" }
          ],
          correct: "C"
        }
      ]
    }
  ];

  for (var i = 0; i < PACKS.length; i++) P.push(PACKS[i]);
})(typeof window !== "undefined" ? window : global);
