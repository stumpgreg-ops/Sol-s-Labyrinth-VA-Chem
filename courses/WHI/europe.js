/* SOL Lab — World History I · Medieval Europe & the Renaissance (WHI.10, WHI.11, WHI.13). Original text only. */
(function (global) {
  var P = global.HEIST_PACKS;
  if (!P || !P.push) return;
  var N = function (i) { return '<span class="n">(' + i + ')</span> '; };   // numbered sentence

  var PACKS = [
    /* ---------- tiny ---------- */
    {
      id: "europe-manor-plan",
      family: "EUROPE",
      title: "A plan of a medieval manor",
      kind: "Medieval Europe · WHI.10",
      blurb: "Fields in strips, a mill by the stream and no market in sight.",
      level: 1,
      passage: "<p>" + N(1) + "A plan of a typical <strong>manor</strong> shows the lord's manor house and a church at the center, with a village of peasant cottages nearby. " + N(2) + "Around them lie three large fields divided into strips, plus a meadow for hay, common pasture and woods. " + N(3) + "A mill, a bakehouse and a blacksmith's shop stand beside a stream. " + N(4) + "No market town appears on the plan.</p>",
      claims: [
        {
          id: "selfsuff",
          sol: "WHI.10.c",
          stem: "The plan best shows that a medieval manor was —",
          choices: [
            { letter: "A", text: "a large trading city run by merchant guilds" },
            { letter: "B", text: "a mostly self-sufficient farming estate" },
            { letter: "C", text: "a monastery where monks copied books" },
            { letter: "D", text: "a fortress held by a royal standing army" }
          ],
          correct: "B"
        },
        {
          id: "serfs",
          sol: "WHI.10.c",
          stem: "Who did most of the farm work in the fields shown on the plan?",
          choices: [
            { letter: "A", text: "knights who owed the lord military service" },
            { letter: "B", text: "monks and nuns from a nearby abbey" },
            { letter: "C", text: "guild masters and their apprentices" },
            { letter: "D", text: "serfs who were bound to the land" }
          ],
          correct: "D"
        },
        {
          id: "threefield",
          sol: "WHI.10.c",
          stem: "Why were the manor's fields divided into three large parts?",
          choices: [
            { letter: "A", text: "One field could rest each year while two were planted." },
            { letter: "B", text: "Each field belonged to a different noble family." },
            { letter: "C", text: "The law required grain and livestock to be kept apart." },
            { letter: "D", text: "One field was always set aside for a town market." }
          ],
          correct: "A"
        },
        {
          id: "nomarket",
          sol: "WHI.10.d",
          stem: "Sentence 4 notes that no market town appears on the plan. Which later development most reduced the isolation of manors?",
          choices: [
            { letter: "A", text: "the fall of the Western Roman Empire" },
            { letter: "B", text: "Viking raids along Europe's rivers" },
            { letter: "C", text: "the growth of towns, fairs and money" },
            { letter: "D", text: "the building of more castles by lords" }
          ],
          correct: "C"
        },
        {
          id: "stream",
          sol: "WHI.10.a",
          stem: "Which natural feature on the plan was most useful for running the mill?",
          choices: [
            { letter: "A", text: "the woods" },
            { letter: "B", text: "the common pasture" },
            { letter: "C", text: "the strip fields" },
            { letter: "D", text: "the stream" }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "europe-schism-1054",
      family: "EUROPE",
      title: "East and West part ways",
      kind: "Papacy & monarchs · WHI.11",
      blurb: "Rome and Constantinople drift apart, and in 1054 they split.",
      level: 1,
      passage: "<p>" + N(1) + "By the 1000s, the Church in the West, led by the pope in Rome, and the Church in the East, centered in Constantinople, had drifted apart. " + N(2) + "They disagreed over the pope's authority, the use of Latin or Greek, whether priests could marry, and the use of <strong>icons</strong>. " + N(3) + "In 1054, leaders of each side excommunicated the other.</p>",
      claims: [
        {
          id: "name",
          sol: "WHI.11.b",
          stem: "The split described in sentence 3 is known as the —",
          choices: [
            { letter: "A", text: "Great Schism" },
            { letter: "B", text: "Reconquista" },
            { letter: "C", text: "First Crusade" },
            { letter: "D", text: "Model Parliament" }
          ],
          correct: "A"
        },
        {
          id: "east",
          sol: "WHI.11.b",
          stem: "Which church developed from the eastern side of the split?",
          choices: [
            { letter: "A", text: "the Roman Catholic Church" },
            { letter: "B", text: "the Eastern Orthodox Church" },
            { letter: "C", text: "the Church of England" },
            { letter: "D", text: "the Lutheran Church" }
          ],
          correct: "B"
        },
        {
          id: "icons",
          sol: "WHI.11.b",
          stem: "In sentence 2, the word icons most nearly means —",
          choices: [
            { letter: "A", text: "church taxes paid by peasants" },
            { letter: "B", text: "written rules for monks" },
            { letter: "C", text: "lands granted by a lord" },
            { letter: "D", text: "religious images of holy figures" }
          ],
          correct: "D"
        },
        {
          id: "latin",
          sol: "WHI.11.b",
          stem: "Which language did the western church use in its worship?",
          choices: [
            { letter: "A", text: "Greek" },
            { letter: "B", text: "Arabic" },
            { letter: "C", text: "Latin" },
            { letter: "D", text: "Hebrew" }
          ],
          correct: "C"
        },
        {
          id: "issue",
          sol: "WHI.11.b",
          stem: "Based on the passage, which issue divided the two churches?",
          choices: [
            { letter: "A", text: "how much authority the pope held" },
            { letter: "B", text: "whether to build monasteries" },
            { letter: "C", text: "whether Christians could trade" },
            { letter: "D", text: "who should rule Muslim Spain" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "europe-petrarch",
      family: "EUROPE",
      title: "The father of humanism",
      kind: "The Italian Renaissance · WHI.13",
      blurb: "Petrarch hunts for lost Roman books and writes poems in Italian.",
      level: 1,
      passage: "<p>" + N(1) + "Francesco Petrarch (1304–1374) of Italy searched old libraries for lost Latin writings by Cicero and other Roman authors. " + N(2) + "He urged readers to study grammar, history, poetry and moral philosophy, the subjects later called the humanities. " + N(3) + "He also wrote love poems in Italian, the everyday language of his region. " + N(4) + "For this work he is often called the father of <strong>humanism</strong>.</p>",
      claims: [
        {
          id: "known",
          sol: "WHI.13.c",
          stem: "Petrarch is best known as —",
          choices: [
            { letter: "A", text: "an early leader of Renaissance humanism" },
            { letter: "B", text: "the painter of the Sistine Chapel ceiling" },
            { letter: "C", text: "the author of the book The Prince" },
            { letter: "D", text: "the banker who ruled the city of Florence" }
          ],
          correct: "A"
        },
        {
          id: "humanism",
          sol: "WHI.13.a",
          stem: "In sentence 4, the word humanism most nearly means —",
          choices: [
            { letter: "A", text: "rule by a single strong prince" },
            { letter: "B", text: "study of classical texts and human achievement" },
            { letter: "C", text: "a vow of poverty taken by traveling friars" },
            { letter: "D", text: "a system of land granted for military service" }
          ],
          correct: "B"
        },
        {
          id: "why",
          sol: "WHI.13.a",
          stem: "Why did Petrarch search old libraries?",
          choices: [
            { letter: "A", text: "to find tax records for the pope" },
            { letter: "B", text: "to copy Bibles for missionaries" },
            { letter: "C", text: "to recover writings of ancient Rome" },
            { letter: "D", text: "to collect maps for the Crusaders" }
          ],
          correct: "C"
        },
        {
          id: "vernacular",
          sol: "WHI.13.c",
          stem: "Petrarch's choice to write poems in Italian shows the growing use of —",
          choices: [
            { letter: "A", text: "Latin for all serious writing" },
            { letter: "B", text: "Greek in church services" },
            { letter: "C", text: "Arabic in trade records" },
            { letter: "D", text: "vernacular, or everyday, languages" }
          ],
          correct: "D"
        },
        {
          id: "italy",
          sol: "WHI.13.a",
          stem: "Which statement best explains why the Renaissance began in Italy?",
          choices: [
            { letter: "A", text: "Its cities were wealthy and full of Roman ruins and texts." },
            { letter: "B", text: "It had been cut off from trade with the eastern Mediterranean." },
            { letter: "C", text: "A single strong king had united all of Italy." },
            { letter: "D", text: "Its peasants were the first to farm with the heavy plow." }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "europe-feudal-oath",
      family: "EUROPE",
      title: "Land for loyalty",
      kind: "Medieval Europe · WHI.10",
      blurb: "Raiders strike, kings are weak, and lords turn to their vassals.",
      level: 1,
      passage: "<p>" + N(1) + "After Charlemagne's empire broke apart in the 800s, Vikings, Magyars and Muslim raiders attacked Europe. " + N(2) + "Kings were too weak to defend every region, so local lords gave land, called a <strong>fief</strong>, to warriors who swore loyalty. " + N(3) + "These <strong>vassals</strong>, often knights, promised military service in return. " + N(4) + "This system of land in exchange for loyalty is called feudalism.</p>",
      claims: [
        {
          id: "cause",
          sol: "WHI.10.c",
          stem: "Which statement best explains why feudalism developed?",
          choices: [
            { letter: "A", text: "Strong kings wanted to share power with merchants." },
            { letter: "B", text: "Invasions created a need for local protection." },
            { letter: "C", text: "The Crusades brought new wealth into Europe." },
            { letter: "D", text: "Monasteries needed knights to guard their libraries." }
          ],
          correct: "B"
        },
        {
          id: "fief",
          sol: "WHI.10.c",
          stem: "In sentence 2, the word fief most nearly means —",
          choices: [
            { letter: "A", text: "a tax paid to the Church" },
            { letter: "B", text: "a written code of laws" },
            { letter: "C", text: "a guild of skilled workers" },
            { letter: "D", text: "land granted for loyal service" }
          ],
          correct: "D"
        },
        {
          id: "owed",
          sol: "WHI.10.c",
          stem: "According to sentence 3, what did a vassal owe his lord?",
          choices: [
            { letter: "A", text: "military service" },
            { letter: "B", text: "a share of trade profits" },
            { letter: "C", text: "a seat in Parliament" },
            { letter: "D", text: "a vow of poverty" }
          ],
          correct: "A"
        },
        {
          id: "rivers",
          sol: "WHI.10.a",
          stem: "Which geographic feature most helped Viking raiders reach towns far inland?",
          choices: [
            { letter: "A", text: "the dry central deserts" },
            { letter: "B", text: "the high Alps" },
            { letter: "C", text: "rivers like the Seine" },
            { letter: "D", text: "frozen northern tundra" }
          ],
          correct: "C"
        },
        {
          id: "bottom",
          sol: "WHI.10.c",
          stem: "In feudal society, which group was at the bottom of the social order?",
          choices: [
            { letter: "A", text: "serfs" },
            { letter: "B", text: "knights" },
            { letter: "C", text: "bishops" },
            { letter: "D", text: "nobles" }
          ],
          correct: "A"
        }
      ]
    },

    /* ---------- short ---------- */
    {
      id: "europe-magna-carta",
      family: "EUROPE",
      title: "The barons and King John",
      kind: "Papacy & monarchs · WHI.11",
      blurb: "Runnymede, 1215: a king agrees that he, too, is bound by law.",
      level: 1,
      passage: "<p>" + N(1) + "In 1215, English barons forced <strong>King John</strong> to accept Magna Carta at Runnymede. " + N(2) + "Its most famous clause reads:</p><blockquote>\"No free man shall be seized or imprisoned, or stripped of his rights or possessions, or outlawed or exiled, or deprived of his standing in any other way, nor will we proceed with force against him, or send others to do so, except by the lawful judgement of his equals or by the law of the land.\"</blockquote><p class=\"src\">— Magna Carta, clause 39, 1215 (translated)</p><p>" + N(3) + "Later English law built on this idea through <strong>habeas corpus</strong>, a court order requiring that a jailed person be brought before a judge.</p>",
      claims: [
        {
          id: "purpose",
          sol: "WHI.11.a",
          stem: "The main purpose of clause 39 was to —",
          choices: [
            { letter: "A", text: "keep the king from punishing people without lawful judgment" },
            { letter: "B", text: "give all English people the right to vote for Parliament" },
            { letter: "C", text: "make the pope the final judge in English royal courts" },
            { letter: "D", text: "end all the feudal duties the barons owed to the king" }
          ],
          correct: "A"
        },
        {
          id: "jury",
          sol: "WHI.11.a",
          stem: "The phrase \"the lawful judgement of his equals\" is most closely connected to which later legal idea?",
          choices: [
            { letter: "A", text: "the divine right of kings" },
            { letter: "B", text: "trial by a jury of peers" },
            { letter: "C", text: "excommunication by the pope" },
            { letter: "D", text: "the tithe paid to the Church" }
          ],
          correct: "B"
        },
        {
          id: "habeas",
          sol: "WHI.11.a",
          stem: "In sentence 3, habeas corpus is a court order that —",
          choices: [
            { letter: "A", text: "lets the king collect a new tax" },
            { letter: "B", text: "moves a fief from a lord to a vassal" },
            { letter: "C", text: "requires a jailed person to be brought before a judge" },
            { letter: "D", text: "grants a growing town its own charter" }
          ],
          correct: "C"
        },
        {
          id: "principle",
          sol: "WHI.11.a",
          stem: "Which principle is most strongly supported by Magna Carta?",
          choices: [
            { letter: "A", text: "The king stands above the law." },
            { letter: "B", text: "Church courts outrank royal courts." },
            { letter: "C", text: "Only nobles may own any land." },
            { letter: "D", text: "Even the king must obey the law." }
          ],
          correct: "D"
        },
        {
          id: "parliament",
          sol: "WHI.11.a",
          stem: "Which English institution grew out of the practice of kings consulting nobles, and later townspeople, before raising taxes?",
          choices: [
            { letter: "A", text: "Parliament" },
            { letter: "B", text: "the manor court" },
            { letter: "C", text: "the papacy" },
            { letter: "D", text: "the merchant guild" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "europe-geography-map",
      family: "EUROPE",
      title: "Plains, rivers and mountain walls",
      kind: "Medieval Europe · WHI.10",
      blurb: "A physical map of Europe and what it meant for medieval life.",
      level: 2,
      passage: "<p>" + N(1) + "A physical map of Europe shows the broad <strong>North European Plain</strong> stretching from France across Germany and Poland. " + N(2) + "Rivers such as the Rhine, Danube and Seine cross the land, and long coastlines face the Mediterranean, North and Baltic seas. " + N(3) + "The Alps and the Pyrenees form mountain walls in the south. " + N(4) + "A note on the map explains that a warm ocean current, the Gulf Stream, gives western Europe milder winters than lands as far north in Asia. " + N(5) + "Thick forests once covered much of the plain.</p>",
      claims: [
        {
          id: "conclude",
          sol: "WHI.10.a",
          stem: "Which conclusion about medieval Europe is best supported by the map?",
          choices: [
            { letter: "A", text: "Europe had no natural barriers to travel." },
            { letter: "B", text: "Its fertile plain and rivers supported farming and trade." },
            { letter: "C", text: "Most Europeans lived in high mountain valleys." },
            { letter: "D", text: "Deserts separated northern from southern Europe." }
          ],
          correct: "B"
        },
        {
          id: "alps",
          sol: "WHI.10.a",
          stem: "Which mountain range separated the Italian peninsula from the lands to its north?",
          choices: [
            { letter: "A", text: "the Pyrenees" },
            { letter: "B", text: "the Urals" },
            { letter: "C", text: "the Himalayas" },
            { letter: "D", text: "the Alps" }
          ],
          correct: "D"
        },
        {
          id: "current",
          sol: "WHI.10.a",
          stem: "According to sentence 4, the warm ocean current mainly affected western Europe's —",
          choices: [
            { letter: "A", text: "climate" },
            { letter: "B", text: "religion" },
            { letter: "C", text: "language" },
            { letter: "D", text: "government" }
          ],
          correct: "A"
        },
        {
          id: "missions",
          sol: "WHI.10.b",
          stem: "In the early Middle Ages, which group did the most to spread Christianity into the forests and plains north of the Alps?",
          choices: [
            { letter: "A", text: "crusading knights from France" },
            { letter: "B", text: "merchant guild masters" },
            { letter: "C", text: "monks and missionaries" },
            { letter: "D", text: "Italian banking families" }
          ],
          correct: "C"
        },
        {
          id: "rivertowns",
          sol: "WHI.10.d",
          stem: "Which statement best explains why many medieval trading towns grew along the Rhine and other rivers?",
          choices: [
            { letter: "A", text: "Boats made it cheaper to move heavy goods." },
            { letter: "B", text: "Rivers protected towns from every invader." },
            { letter: "C", text: "Kings banned the building of roads inland." },
            { letter: "D", text: "Rivers marked the borders of the papacy." }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "europe-benedict-rule",
      family: "EUROPE",
      title: "Work and prayer",
      kind: "Medieval Europe · WHI.10",
      blurb: "The Rule of Saint Benedict and the monasteries that spread it.",
      level: 2,
      passage: "<p>" + N(1) + "About 530, Benedict of Nursia wrote a rule for the monks of Monte Cassino in Italy. " + N(2) + "It told them:</p><blockquote>\"Idleness is the enemy of the soul. Therefore the brothers should be busy at fixed times with manual labor, and at other fixed hours with holy reading.\"</blockquote><p class=\"src\">— Rule of Saint Benedict, chapter 48 (adapted translation)</p><p>" + N(3) + "Monasteries following this rule spread across western Europe. " + N(4) + "Monks copied Latin texts by hand, ran schools, cared for the sick and sent <strong>missionaries</strong> to peoples who were not yet Christian.</p>",
      claims: [
        {
          id: "purpose",
          sol: "WHI.10.b",
          stem: "The main purpose of this part of the Rule was to —",
          choices: [
            { letter: "A", text: "organize monks' days around work and study" },
            { letter: "B", text: "explain how monks should fight in wars" },
            { letter: "C", text: "set the taxes that peasants owed the abbey" },
            { letter: "D", text: "describe how the king chose each abbot" }
          ],
          correct: "A"
        },
        {
          id: "preserve",
          sol: "WHI.11.e",
          stem: "Which effect of monasteries is best supported by sentence 4?",
          choices: [
            { letter: "A", text: "They ended the use of Latin in Europe." },
            { letter: "B", text: "They replaced the pope as head of the Church." },
            { letter: "C", text: "They helped preserve older writings." },
            { letter: "D", text: "They made serfdom illegal on manors." }
          ],
          correct: "C"
        },
        {
          id: "missionaries",
          sol: "WHI.10.b",
          stem: "In sentence 4, the word missionaries most nearly means —",
          choices: [
            { letter: "A", text: "soldiers who fought for a lord" },
            { letter: "B", text: "merchants who traveled to fairs" },
            { letter: "C", text: "judges who heard royal cases" },
            { letter: "D", text: "people sent to spread a faith" }
          ],
          correct: "D"
        },
        {
          id: "institution",
          sol: "WHI.10.b",
          stem: "After the fall of the Western Roman Empire, which institution did the most to spread Christianity north of the Alps?",
          choices: [
            { letter: "A", text: "the Byzantine army" },
            { letter: "B", text: "the Church and its monasteries" },
            { letter: "C", text: "the Hanseatic League" },
            { letter: "D", text: "the English Parliament" }
          ],
          correct: "B"
        },
        {
          id: "latin",
          sol: "WHI.11.e",
          stem: "Medieval monks and churchmen kept which language alive as the shared language of learning in western Europe?",
          choices: [
            { letter: "A", text: "Latin" },
            { letter: "B", text: "Greek" },
            { letter: "C", text: "Arabic" },
            { letter: "D", text: "English" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "europe-reconquista-timeline",
      family: "EUROPE",
      title: "Seven centuries in Iberia",
      kind: "Papacy & monarchs · WHI.11",
      blurb: "From 711 to 1492: Muslim rule in Iberia and the rise of Spain and Portugal.",
      level: 2,
      passage: "<p>" + N(1) + "Use the timeline to answer the questions.</p><ul><li><strong>711</strong> Muslim forces from North Africa cross into the Iberian Peninsula and conquer most of it</li><li><strong>929</strong> Córdoba becomes the capital of a caliphate and a great center of learning</li><li><strong>1085</strong> Christian Castile captures Toledo</li><li><strong>1212</strong> Christian kingdoms win the Battle of Las Navas de Tolosa</li><li><strong>1249</strong> Portugal completes its <strong>Reconquista</strong> by taking the Algarve</li><li><strong>1469</strong> Ferdinand of Aragon marries Isabella of Castile</li><li><strong>1492</strong> Granada, the last Muslim kingdom in Iberia, falls to Spain</li></ul>",
      claims: [
        {
          id: "first",
          sol: "WHI.11.d",
          stem: "Which of these events happened FIRST?",
          choices: [
            { letter: "A", text: "Castile captures Toledo." },
            { letter: "B", text: "Granada falls to Spain." },
            { letter: "C", text: "Ferdinand marries Isabella." },
            { letter: "D", text: "Las Navas de Tolosa is fought." }
          ],
          correct: "A"
        },
        {
          id: "term",
          sol: "WHI.11.d",
          stem: "The term Reconquista most nearly means —",
          choices: [
            { letter: "A", text: "a tax on Muslim merchants" },
            { letter: "B", text: "the Christian reconquest of Iberia" },
            { letter: "C", text: "a council that ended a schism" },
            { letter: "D", text: "a voyage of exploration to Africa" }
          ],
          correct: "B"
        },
        {
          id: "gradual",
          sol: "WHI.11.d",
          stem: "Which conclusion is best supported by the timeline?",
          choices: [
            { letter: "A", text: "Muslim rule in Iberia ended in one battle in 1212." },
            { letter: "B", text: "Portugal finished its reconquest after Spain did." },
            { letter: "C", text: "Christian rule expanded over several centuries." },
            { letter: "D", text: "Toledo was the last Muslim kingdom in Iberia." }
          ],
          correct: "C"
        },
        {
          id: "marriage",
          sol: "WHI.11.d",
          stem: "The marriage of 1469 most helped bring about the fall of Granada by —",
          choices: [
            { letter: "A", text: "giving the kingdom of Granada to the pope" },
            { letter: "B", text: "making Portugal a part of Castile" },
            { letter: "C", text: "ending the Crusades in the Holy Land" },
            { letter: "D", text: "joining the power of Castile and Aragon" }
          ],
          correct: "D"
        },
        {
          id: "results",
          sol: "WHI.11.d",
          stem: "Select TWO results of the end of Muslim rule in the Iberian Peninsula.",
          choices: [
            { letter: "A", text: "Spain and Portugal rose as strong Christian kingdoms." },
            { letter: "B", text: "Córdoba became the capital of a new caliphate." },
            { letter: "C", text: "Jews and Muslims were pressed to convert or leave." },
            { letter: "D", text: "The split between the Eastern and Western churches healed." }
          ],
          correct: ["A", "C"]
        }
      ]
    },

    /* ---------- medium ---------- */
    {
      id: "europe-crusades-call",
      family: "EUROPE",
      title: "The call at Clermont",
      kind: "Papacy & monarchs · WHI.11",
      blurb: "Urban II's appeal of 1095 and two centuries of Crusades.",
      level: 3,
      passage: "<p>" + N(1) + "In 1095, Byzantine Emperor Alexius I asked the pope for help against the Seljuk Turks, who had taken much of Anatolia and threatened the Holy Land. " + N(2) + "Pope Urban II answered with a call to arms.</p><blockquote>\"Christians, hurry to help your brothers in the East, for the Turks have attacked them. ... All who die on the way, by land or by sea, or in battle against the pagans, will have their sins forgiven.\"</blockquote><p class=\"src\">— Urban II at Clermont, 1095, as recorded by Fulcher of Chartres (adapted)</p><ul><li><strong>1099</strong> Crusaders capture Jerusalem</li><li><strong>1187</strong> Saladin retakes Jerusalem</li><li><strong>1204</strong> The Fourth Crusade sacks Constantinople</li><li><strong>1291</strong> Acre, the last crusader stronghold, falls</li></ul><p>" + N(3) + "On their way east in 1096, some crusader bands attacked Jewish communities in Rhineland towns such as Mainz and Worms, killing many people.</p>",
      claims: [
        {
          id: "cause",
          sol: "WHI.11.c",
          stem: "Which was a cause of the First Crusade?",
          choices: [
            { letter: "A", text: "the fall of Granada to Spain" },
            { letter: "B", text: "a Byzantine call for help against the Turks" },
            { letter: "C", text: "King John's acceptance of Magna Carta" },
            { letter: "D", text: "the spread of the Black Death in Italy" }
          ],
          correct: "B"
        },
        {
          id: "promise",
          sol: "WHI.11.c",
          stem: "According to the excerpt, what did Urban II promise to those who died on the way?",
          choices: [
            { letter: "A", text: "land in England" },
            { letter: "B", text: "a seat in Parliament" },
            { letter: "C", text: "forgiveness of their sins" },
            { letter: "D", text: "freedom from all taxes" }
          ],
          correct: "C"
        },
        {
          id: "sack",
          sol: "WHI.11.b",
          stem: "Which was an effect of the sack of Constantinople in 1204?",
          choices: [
            { letter: "A", text: "It united the Eastern and Western churches." },
            { letter: "B", text: "It ended Muslim rule in the Iberian Peninsula." },
            { letter: "C", text: "It returned Jerusalem to crusader control." },
            { letter: "D", text: "It weakened Byzantium and deepened the East-West split." }
          ],
          correct: "D"
        },
        {
          id: "timeline",
          sol: "WHI.11.c",
          stem: "Which conclusion about the Crusades is best supported by the timeline?",
          choices: [
            { letter: "A", text: "Crusaders held Jerusalem for less than a century." },
            { letter: "B", text: "The Crusades lasted less than fifty years in all." },
            { letter: "C", text: "Saladin captured Constantinople in 1204." },
            { letter: "D", text: "Acre fell before Saladin retook Jerusalem." }
          ],
          correct: "A"
        },
        {
          id: "effects",
          sol: "WHI.10.d",
          stem: "Select TWO lasting effects of the Crusades on Europe.",
          choices: [
            { letter: "A", text: "Trade between Europe and the eastern Mediterranean increased." },
            { letter: "B", text: "Christian rule over the Holy Land became permanent." },
            { letter: "C", text: "Italian ports such as Venice and Genoa grew richer." },
            { letter: "D", text: "The pope lost all of his political influence." }
          ],
          correct: ["A", "C"]
        },
        {
          id: "jews",
          sol: "WHI.11.c",
          stem: "Sentence 3 provides evidence that the Crusades also —",
          choices: [
            { letter: "A", text: "freed Jewish communities from royal taxes" },
            { letter: "B", text: "brought violence against Jewish communities in Europe" },
            { letter: "C", text: "moved most Rhineland Jews to Jerusalem" },
            { letter: "D", text: "ended all trade between Christians and Jews" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "europe-towns-guilds",
      family: "EUROPE",
      title: "Town air makes free",
      kind: "Medieval Europe · WHI.10",
      blurb: "Surplus grain, busy fairs, guilds and the plague reshape the manor world.",
      level: 2,
      passage: "<p>" + N(1) + "After about 1000, new tools such as the heavy plow and the three-field system raised harvests, and Europe's population grew. " + N(2) + "The Crusades revived trade with the eastern Mediterranean, and great fairs in Champagne drew merchants from distant regions. " + N(3) + "Craftsmen and merchants formed <strong>guilds</strong> that set prices, wages and standards of quality. " + N(4) + "When the Black Death killed about a third of Europe's people between 1347 and 1351, surviving workers were scarce and could demand wages.</p><table><tr><th></th><th>Manor</th><th>Town</th></tr><tr><td>Economy</td><td>farming, little money</td><td>crafts, trade, money</td></tr><tr><td>Who ruled</td><td>the lord</td><td>merchants and guilds, under a charter</td></tr><tr><td>Workers</td><td>serfs bound to the land</td><td>free townspeople</td></tr><tr><td>Main buildings</td><td>manor house, church, mill</td><td>market square, guildhall, cathedral</td></tr></table>",
      claims: [
        {
          id: "growth",
          sol: "WHI.10.d",
          stem: "Which statement best explains why towns grew in Europe after about 1000?",
          choices: [
            { letter: "A", text: "Viking raids increased along the rivers." },
            { letter: "B", text: "Better farming led to surpluses and more people." },
            { letter: "C", text: "Kings banned all trade outside the manor." },
            { letter: "D", text: "The Western Roman Empire was restored." }
          ],
          correct: "B"
        },
        {
          id: "guild",
          sol: "WHI.10.d",
          stem: "In sentence 3, a guild was —",
          choices: [
            { letter: "A", text: "a grant of land for military service" },
            { letter: "B", text: "a church court that tried heretics" },
            { letter: "C", text: "an association that set rules for a trade" },
            { letter: "D", text: "a tax paid to the lord at each harvest" }
          ],
          correct: "C"
        },
        {
          id: "table",
          sol: "WHI.10.d",
          stem: "Based on the table, which was a difference between life on a manor and life in a town?",
          choices: [
            { letter: "A", text: "Towns relied more on money and trade." },
            { letter: "B", text: "Manors had larger markets than towns." },
            { letter: "C", text: "Serfs ruled the towns through guilds." },
            { letter: "D", text: "Towns were built without any churches." }
          ],
          correct: "A"
        },
        {
          id: "plague",
          sol: "WHI.10.c",
          stem: "How did the Black Death help weaken the manor system?",
          choices: [
            { letter: "A", text: "It brought new serfs to Europe from Asia." },
            { letter: "B", text: "It ended the use of coins in towns." },
            { letter: "C", text: "It led lords to give their land to the Church." },
            { letter: "D", text: "Fewer workers could demand wages or freedom." }
          ],
          correct: "D"
        },
        {
          id: "crusadetrade",
          sol: "WHI.11.c",
          stem: "According to sentence 2, how did the Crusades affect the growth of European towns?",
          choices: [
            { letter: "A", text: "They ended trade with Muslim lands." },
            { letter: "B", text: "They moved the great fairs to Jerusalem." },
            { letter: "C", text: "They revived trade with the eastern Mediterranean." },
            { letter: "D", text: "They forced town merchants to become serfs." }
          ],
          correct: "C"
        },
        {
          id: "oppcost",
          sol: "WHI.10.d",
          stem: "A cloth merchant can spend his savings on the fee to join a guild or on more wool to sell. If he joins the guild, what is his opportunity cost?",
          choices: [
            { letter: "A", text: "the wool he could have bought instead" },
            { letter: "B", text: "the protection the guild gives him" },
            { letter: "C", text: "the higher prices the guild may set" },
            { letter: "D", text: "the dues he owes a lord on the manor" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "europe-city-states",
      family: "EUROPE",
      title: "Four powers of Renaissance Italy",
      kind: "The Italian Renaissance · WHI.13",
      blurb: "Florence, Venice, Milan and the Papal States compared.",
      level: 2,
      passage: "<p>" + N(1) + "In the 1300s and 1400s, northern and central Italy was divided into independent <strong>city-states</strong>, each a city that controlled the countryside around it. " + N(2) + "Trade between Europe and the eastern Mediterranean, which had grown after the Crusades, made their merchants rich. " + N(3) + "Wealthy families became <strong>patrons</strong>, paying artists and scholars to glorify their cities. " + N(4) + "The city-states often fought one another, and after 1494 the armies of France and Spain invaded Italy.</p><table><tr><th>City-state</th><th>Government</th><th>Main source of wealth</th></tr><tr><td>Florence</td><td>republic dominated by the Medici family</td><td>banking and wool cloth</td></tr><tr><td>Venice</td><td>republic led by an elected doge and councils</td><td>sea trade with the eastern Mediterranean</td></tr><tr><td>Milan</td><td>duchy ruled by a duke</td><td>farming, textiles and armor</td></tr><tr><td>Papal States</td><td>ruled by the pope</td><td>Church income</td></tr></table>",
      claims: [
        {
          id: "sea",
          sol: "WHI.13.b",
          stem: "According to the table, which city-state's wealth depended most on sea trade?",
          choices: [
            { letter: "A", text: "Florence" },
            { letter: "B", text: "Milan" },
            { letter: "C", text: "Venice" },
            { letter: "D", text: "the Papal States" }
          ],
          correct: "C"
        },
        {
          id: "patrons",
          sol: "WHI.13.a",
          stem: "In sentence 3, the word patrons most nearly means —",
          choices: [
            { letter: "A", text: "skilled workers in a craft guild" },
            { letter: "B", text: "supporters who paid for art and learning" },
            { letter: "C", text: "elected leaders of a city republic" },
            { letter: "D", text: "soldiers who were hired to fight for pay" }
          ],
          correct: "B"
        },
        {
          id: "crusades",
          sol: "WHI.13.a",
          stem: "Which statement best explains how the Crusades helped lay an economic foundation for the Renaissance?",
          choices: [
            { letter: "A", text: "They increased trade that made Italian cities rich." },
            { letter: "B", text: "They united all of Italy under a single king." },
            { letter: "C", text: "They moved the home of the pope to Constantinople." },
            { letter: "D", text: "They ended the use of Latin in Italian schools." }
          ],
          correct: "A"
        },
        {
          id: "last",
          sol: "WHI.13.b",
          stem: "Which of these events happened LAST?",
          choices: [
            { letter: "A", text: "The First Crusade begins." },
            { letter: "B", text: "Petrarch writes his poems." },
            { letter: "C", text: "The Medici gain power in Florence." },
            { letter: "D", text: "French armies invade Italy." }
          ],
          correct: "D"
        },
        {
          id: "divided",
          sol: "WHI.13.b",
          stem: "Which conclusion is best supported by the passage and the table?",
          choices: [
            { letter: "A", text: "Italy was united and at peace during the Renaissance." },
            { letter: "B", text: "The pope governed every Italian city directly." },
            { letter: "C", text: "The city-states were rich but politically divided." },
            { letter: "D", text: "Venice was ruled by the Medici family of bankers." }
          ],
          correct: "C"
        },
        {
          id: "medici",
          sol: "WHI.13.c",
          stem: "Florence's banking families most helped Renaissance artists such as Michelangelo by —",
          choices: [
            { letter: "A", text: "lending money only to monasteries" },
            { letter: "B", text: "banning the study of ancient texts" },
            { letter: "C", text: "leading armies in the Crusades" },
            { letter: "D", text: "paying for art, buildings and learning" }
          ],
          correct: "D"
        }
      ]
    },

    /* ---------- long ---------- */
    {
      id: "europe-machiavelli",
      family: "EUROPE",
      title: "The fox and the lion",
      kind: "The Italian Renaissance · WHI.13",
      blurb: "Machiavelli's advice to princes beside the older ideal of the Christian king.",
      level: 3,
      passage: "<p><strong>Source 1</strong></p><p>" + N(1) + "Niccolò Machiavelli (1469–1527) served the republic of Florence as a diplomat during years when rival city-states and foreign armies fought over Italy. " + N(2) + "When the Medici family returned to power in 1512, he lost his post, and in 1513 he wrote <strong>The Prince</strong>, a handbook for rulers. " + N(3) + "He said he would describe how rulers actually behave, not how they ought to behave.</p><blockquote>\"It is much safer to be feared than loved, if a prince cannot be both. ... A prince must know how to act like a beast as well as a man: he must be a fox to recognize traps and a lion to frighten wolves.\"</blockquote><p class=\"src\">— Machiavelli, The Prince, 1513 (adapted)</p><p><strong>Source 2</strong></p><p>" + N(4) + "Many medieval writers on kingship, most of them churchmen, taught that a good king should be just, merciful and humble, obey God's law, protect the Church and set a Christian example for his people. " + N(5) + "In their view, a ruler who used cruelty or deceit could not be a good king, whatever he achieved.</p><p class=\"src\">— summary of medieval advice to kings</p>",
      claims: [
        {
          id: "purpose",
          sol: "WHI.13.b",
          stem: "The main purpose of The Prince was to —",
          choices: [
            { letter: "A", text: "urge Italians to join a new Crusade" },
            { letter: "B", text: "advise rulers how to gain and keep power" },
            { letter: "C", text: "describe the daily duties of monks" },
            { letter: "D", text: "defend the authority of the pope" }
          ],
          correct: "B"
        },
        {
          id: "compare",
          sol: "WHI.13.b",
          stem: "Which statement best compares the two sources?",
          choices: [
            { letter: "A", text: "Both say a ruler should be loved rather than feared." },
            { letter: "B", text: "Source 2 praises cunning, while Source 1 rejects it." },
            { letter: "C", text: "Source 1 stresses results; Source 2 stresses virtue." },
            { letter: "D", text: "Both were written by officials of the Church." }
          ],
          correct: "C"
        },
        {
          id: "context",
          sol: "WHI.13.b",
          stem: "Machiavelli's own experience most likely shaped his advice because —",
          choices: [
            { letter: "A", text: "he saw rival states and foreign armies fight over Italy" },
            { letter: "B", text: "Florence had known centuries of peace under one king" },
            { letter: "C", text: "he had studied only in quiet monastery schools" },
            { letter: "D", text: "he had once led a Crusade to the Holy Land" }
          ],
          correct: "A"
        },
        {
          id: "foxlion",
          sol: "WHI.13.b",
          stem: "In the excerpt, the fox and the lion stand for a ruler who combines —",
          choices: [
            { letter: "A", text: "kindness and patience" },
            { letter: "B", text: "faith and prayer" },
            { letter: "C", text: "wealth and art" },
            { letter: "D", text: "cunning and strength" }
          ],
          correct: "D"
        },
        {
          id: "secular",
          sol: "WHI.13.a",
          stem: "Machiavelli's promise in sentence 3 to describe how rulers actually behave reflects which Renaissance trend?",
          choices: [
            { letter: "A", text: "a return to strict feudal loyalty" },
            { letter: "B", text: "a turn toward practical, worldly questions" },
            { letter: "C", text: "the rejection of all classical learning" },
            { letter: "D", text: "the rule of Church councils over kings" }
          ],
          correct: "B"
        },
        {
          id: "humanist",
          sol: "WHI.13.c",
          stem: "Select TWO ideas Machiavelli shared with other Renaissance humanists.",
          choices: [
            { letter: "A", text: "admiration for the history of ancient Rome" },
            { letter: "B", text: "a belief that every ruler must obey the pope" },
            { letter: "C", text: "interest in human behavior in this world" },
            { letter: "D", text: "a preference for manor life over city life" }
          ],
          correct: ["A", "C"]
        }
      ]
    },
    {
      id: "europe-popes-kings",
      family: "EUROPE",
      title: "Popes, kings and the law",
      kind: "Papacy & monarchs · WHI.11",
      blurb: "Tithes, universities, Canossa, Becket, Magna Carta and the first parliaments.",
      level: 3,
      passage: "<p>" + N(1) + "In the Middle Ages the Catholic Church was the most powerful institution in western Europe. " + N(2) + "It collected the <strong>tithe</strong>, a tenth of each person's income, ran its own courts under church law, and could excommunicate rulers, cutting them off from the sacraments. " + N(3) + "Priests and monks were often among the few people who could read, so kings relied on them as officials. " + N(4) + "Cathedral schools grew into the first universities, such as Bologna, Paris and Oxford, where scholars like Thomas Aquinas argued that Christian faith and reason, including the ideas of Aristotle, could work together.</p><ul><li><strong>1077</strong> King Henry IV of Germany seeks forgiveness at Canossa after Pope Gregory VII excommunicates him</li><li><strong>1154–1189</strong> Henry II of England sends royal judges across the country, building a common law</li><li><strong>1170</strong> Archbishop Thomas Becket is murdered in Canterbury Cathedral by knights of Henry II after quarreling with the king</li><li><strong>1215</strong> King John accepts Magna Carta</li><li><strong>1295</strong> Edward I summons the Model Parliament, which includes knights and townspeople</li></ul>",
      claims: [
        {
          id: "schism",
          sol: "WHI.11.b",
          stem: "Pope Gregory VII claimed authority over rulers and churches. Disputes over the pope's authority had earlier helped cause which event of 1054?",
          choices: [
            { letter: "A", text: "the First Crusade" },
            { letter: "B", text: "the fall of Toledo" },
            { letter: "C", text: "the Great Schism" },
            { letter: "D", text: "the Model Parliament" }
          ],
          correct: "C"
        },
        {
          id: "tithe",
          sol: "WHI.11.e",
          stem: "In sentence 2, the word tithe means —",
          choices: [
            { letter: "A", text: "a tenth of income given to the Church" },
            { letter: "B", text: "a court order to bring a prisoner to trial" },
            { letter: "C", text: "a grant of land given to a knight" },
            { letter: "D", text: "a meeting of nobles and townspeople" }
          ],
          correct: "A"
        },
        {
          id: "canossa",
          sol: "WHI.11.e",
          stem: "Which event on the timeline best shows a pope's power over a monarch?",
          choices: [
            { letter: "A", text: "the Model Parliament of 1295" },
            { letter: "B", text: "Henry IV at Canossa in 1077" },
            { letter: "C", text: "Henry II's royal judges" },
            { letter: "D", text: "King John's acceptance of Magna Carta" }
          ],
          correct: "B"
        },
        {
          id: "aquinas",
          sol: "WHI.11.e",
          stem: "According to sentence 4, Thomas Aquinas is known for —",
          choices: [
            { letter: "A", text: "leading the First Crusade" },
            { letter: "B", text: "writing The Prince for the Medici" },
            { letter: "C", text: "founding the first monastery in Italy" },
            { letter: "D", text: "joining Christian faith with Greek reason" }
          ],
          correct: "D"
        },
        {
          id: "limits",
          sol: "WHI.11.a",
          stem: "Select TWO events on the timeline that limited the English king's power or widened who took part in government.",
          choices: [
            { letter: "A", text: "Henry II sends royal judges across England" },
            { letter: "B", text: "King John accepts Magna Carta" },
            { letter: "C", text: "Thomas Becket is murdered at Canterbury" },
            { letter: "D", text: "Edward I summons the Model Parliament" }
          ],
          correct: ["B", "D"]
        },
        {
          id: "judiciary",
          sol: "WHI.11.a",
          stem: "Over centuries, English courts in which judges decided cases by established law, not by the monarch's wishes, became the basis of —",
          choices: [
            { letter: "A", text: "an independent judiciary" },
            { letter: "B", text: "the feudal social order" },
            { letter: "C", text: "the papal church courts" },
            { letter: "D", text: "the divine right of kings" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "europe-renaissance-artists",
      family: "EUROPE",
      title: "Leonardo and Michelangelo",
      kind: "The Italian Renaissance · WHI.13",
      blurb: "Perspective, anatomy, marble and a chapel ceiling: two masters of the Renaissance.",
      level: 3,
      passage: "<p>" + N(1) + "Renaissance artists studied the human body closely and used <strong>perspective</strong>, a technique that makes a flat painting appear to have depth. " + N(2) + "Leonardo da Vinci (1452–1519) painted the Mona Lisa and The Last Supper. " + N(3) + "In The Last Supper, the lines of the ceiling and walls all lead the viewer's eye toward the head of Jesus at the center of the scene. " + N(4) + "Leonardo's notebooks are filled with sketches of human anatomy, birds in flight and imagined machines, including flying devices. " + N(5) + "Michelangelo Buonarroti (1475–1564) carved the marble statue David for Florence, showing the biblical hero as a powerful nude figure in the style of ancient Greek and Roman sculpture. " + N(6) + "He painted the ceiling of the Sistine Chapel in Rome for Pope Julius II and later designed the dome of Saint Peter's Basilica. " + N(7) + "Both men depended on patrons, including the Medici of Florence and the popes in Rome. " + N(8) + "Their wide talents in art, science and engineering led later writers to describe such a person as a \"Renaissance man.\"</p>",
      claims: [
        {
          id: "michelangelo",
          sol: "WHI.13.c",
          stem: "Which work did Michelangelo create?",
          choices: [
            { letter: "A", text: "the Mona Lisa" },
            { letter: "B", text: "The Prince" },
            { letter: "C", text: "the Sistine Chapel ceiling" },
            { letter: "D", text: "sonnets in praise of Laura" }
          ],
          correct: "C"
        },
        {
          id: "perspective",
          sol: "WHI.13.c",
          stem: "In sentence 1, the word perspective most nearly means —",
          choices: [
            { letter: "A", text: "the use of gold leaf in religious art" },
            { letter: "B", text: "a technique that creates the look of depth" },
            { letter: "C", text: "a style that copies flat Byzantine icons" },
            { letter: "D", text: "a poem written in everyday Italian" }
          ],
          correct: "B"
        },
        {
          id: "renman",
          sol: "WHI.13.c",
          stem: "Which evidence from the passage best supports calling Leonardo a \"Renaissance man\"?",
          choices: [
            { letter: "A", text: "He painted for wealthy patrons in Italy." },
            { letter: "B", text: "He lived during the 1400s and 1500s." },
            { letter: "C", text: "He worked for a time for the Medici." },
            { letter: "D", text: "He studied anatomy, flight and machines." }
          ],
          correct: "D"
        },
        {
          id: "lastsupper",
          sol: "WHI.13.a",
          stem: "Sentence 3 shows that Renaissance painters —",
          choices: [
            { letter: "A", text: "used geometry to create realistic space" },
            { letter: "B", text: "avoided all religious subjects" },
            { letter: "C", text: "copied the flat style of the Middle Ages" },
            { letter: "D", text: "painted only for merchant patrons" }
          ],
          correct: "A"
        },
        {
          id: "patrons",
          sol: "WHI.13.b",
          stem: "Sentence 7 names the Medici of Florence and the popes in Rome as patrons. What did these patrons have in common?",
          choices: [
            { letter: "A", text: "Both were merchant guilds based in Venice." },
            { letter: "B", text: "Both led Italian states and used art to show power." },
            { letter: "C", text: "Both opposed the revival of classical learning." },
            { letter: "D", text: "Both lived in kingdoms north of the Alps." }
          ],
          correct: "B"
        },
        {
          id: "david",
          sol: "WHI.13.c",
          stem: "Select TWO ways Michelangelo's David reflects Renaissance values.",
          choices: [
            { letter: "A", text: "It shows a realistic, idealized human body." },
            { letter: "B", text: "It was carved for a monastery in Germany." },
            { letter: "C", text: "It draws on classical Greek and Roman sculpture." },
            { letter: "D", text: "It shows little interest in the human form." }
          ],
          correct: ["A", "C"]
        }
      ]
    }
  ];

  for (var i = 0; i < PACKS.length; i++) P.push(PACKS[i]);
})(typeof window !== "undefined" ? window : global);
