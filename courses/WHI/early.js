/* SOL Lab — World History I · Early Humans & the Fertile Crescent (WHI.1–2). Original text only. */
(function (global) {
  var P = global.HEIST_PACKS;
  if (!P || !P.push) return;
  var N = function (i) { return '<span class="n">(' + i + ')</span> '; };   // numbered sentence

  var PACKS = [
    /* ---------- tiny ---------- */
    {
      id: "early-lucy",
      family: "EARLY",
      title: "A skeleton called Lucy",
      kind: "Early Humans & the Fertile Crescent · WHI.1",
      blurb: "A 3.2-million-year-old skeleton from Ethiopia and what it revealed.",
      level: 1,
      passage: "<p>" + N(1) + "In 1974, scientists in Ethiopia found about 40 percent of the skeleton of an early hominin nicknamed Lucy. " + N(2) + "Her bones are about 3.2 million years old. " + N(3) + "The shape of her hips and knees showed that she walked upright on two legs. " + N(4) + "Yet her brain was about the size of a chimpanzee's. " + N(5) + "Many of the oldest <strong>fossils</strong> of human ancestors have been found in East Africa.</p>",
      claims: [
        {
          id: "where",
          sol: "WHI.1.a",
          stem: "According to the passage, where have many of the oldest fossils of human ancestors been found?",
          choices: [
            { letter: "A", text: "Western Europe" },
            { letter: "B", text: "East Africa" },
            { letter: "C", text: "Southeast Asia" },
            { letter: "D", text: "the Americas" }
          ],
          correct: "B"
        },
        {
          id: "vocab",
          sol: "WHI.1.a",
          stem: "In sentence 5, the word fossils most nearly means —",
          choices: [
            { letter: "A", text: "tools made of chipped stone" },
            { letter: "B", text: "paintings on the walls of caves" },
            { letter: "C", text: "clay tablets covered with writing" },
            { letter: "D", text: "preserved remains of ancient living things" }
          ],
          correct: "D"
        },
        {
          id: "evidence",
          sol: "WHI.1.e",
          stem: "Which conclusion did scientists draw from the evidence described in sentence 3?",
          choices: [
            { letter: "A", text: "She walked on two legs rather than on all fours." },
            { letter: "B", text: "She cooked her food over a controlled fire." },
            { letter: "C", text: "She lived in a permanent farming village." },
            { letter: "D", text: "She hunted with carved stone spear points." }
          ],
          correct: "A"
        },
        {
          id: "change",
          sol: "WHI.1.e",
          stem: "Taken together, sentences 3 and 4 suggest that Lucy's skeleton changed scientists' understanding by showing that —",
          choices: [
            { letter: "A", text: "human ancestors first appeared in Europe" },
            { letter: "B", text: "farming began in Africa millions of years ago" },
            { letter: "C", text: "walking upright developed before large brains" },
            { letter: "D", text: "early hominins already lived in large cities" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "early-fire",
      family: "EARLY",
      title: "Life on the move",
      kind: "Early Humans & the Fertile Crescent · WHI.1",
      blurb: "Stone tools, fire and the seasonal travels of hunter-gatherers.",
      level: 1,
      passage: "<p>" + N(1) + "Hunter-gatherers lived in small, <strong>nomadic</strong> groups that moved with the seasons, following herds of animals and ripening wild plants. " + N(2) + "They made tools of stone, bone and wood. " + N(3) + "Controlling fire let them cook food, keep warm, scare off predators and extend the day after dark. " + N(4) + "Fire also helped groups survive as they moved into colder lands in Europe and Asia.</p>",
      claims: [
        {
          id: "vocab",
          sol: "WHI.1.c",
          stem: "In sentence 1, the word nomadic most nearly means —",
          choices: [
            { letter: "A", text: "moving from place to place" },
            { letter: "B", text: "living in walled towns" },
            { letter: "C", text: "ruled by a single king" },
            { letter: "D", text: "raising crops for trade" }
          ],
          correct: "A"
        },
        {
          id: "why-move",
          sol: "WHI.1.c",
          stem: "Why did hunter-gatherer groups move with the seasons?",
          choices: [
            { letter: "A", text: "to trade surplus grain with farming villages" },
            { letter: "B", text: "to follow food sources as they became available" },
            { letter: "C", text: "to escape tax collectors sent by early kings" },
            { letter: "D", text: "to reach river valleys where they could irrigate" }
          ],
          correct: "B"
        },
        {
          id: "not-fire",
          sol: "WHI.1.c",
          stem: "Which use of fire is NOT described in the passage?",
          choices: [
            { letter: "A", text: "cooking food" },
            { letter: "B", text: "keeping warm" },
            { letter: "C", text: "scaring off predators" },
            { letter: "D", text: "smelting metal for tools" }
          ],
          correct: "D"
        },
        {
          id: "migrate",
          sol: "WHI.1.b",
          stem: "According to sentence 4, how did fire affect the migration of early humans?",
          choices: [
            { letter: "A", text: "It kept groups from ever leaving Africa." },
            { letter: "B", text: "It forced groups to settle in one place." },
            { letter: "C", text: "It let groups survive in colder regions." },
            { letter: "D", text: "It allowed groups to cross oceans by boat." }
          ],
          correct: "C"
        },
        {
          id: "toolkit",
          sol: "WHI.1.c",
          stem: "Which set of tools best fits Paleolithic hunter-gatherers?",
          choices: [
            { letter: "A", text: "bronze swords, iron plows and chariots" },
            { letter: "B", text: "stone hand axes, bone needles, spears" },
            { letter: "C", text: "clay tablets, reed styluses and seals" },
            { letter: "D", text: "potter's wheels, looms and copper axes" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "early-purple",
      family: "EARLY",
      title: "Traders of the purple cloth",
      kind: "Early Humans & the Fertile Crescent · WHI.2",
      blurb: "Why a people squeezed between mountains and sea took to ships.",
      level: 1,
      passage: "<p>" + N(1) + "The Phoenicians lived on a narrow strip of coast at the eastern end of the Mediterranean Sea, in what is now Lebanon. " + N(2) + "Mountains left them little farmland, so they turned to the sea. " + N(3) + "From cities such as Tyre and Sidon, they traded cedar wood and cloth colored with a costly purple dye. " + N(4) + "They founded <strong>colonies</strong>, including Carthage in North Africa.</p>",
      claims: [
        {
          id: "geo",
          sol: "WHI.2.d",
          stem: "Which geographic factor best explains why the Phoenicians became seafaring traders?",
          choices: [
            { letter: "A", text: "wide river valleys with rich soil" },
            { letter: "B", text: "little farmland between mountains and sea" },
            { letter: "C", text: "a location far from any coastline" },
            { letter: "D", text: "large deserts that protected their cities" }
          ],
          correct: "B"
        },
        {
          id: "vocab",
          sol: "WHI.2.d",
          stem: "In sentence 4, the word colonies most nearly means —",
          choices: [
            { letter: "A", text: "temples built for the gods" },
            { letter: "B", text: "trade goods carried by ship" },
            { letter: "C", text: "settlements founded in distant lands" },
            { letter: "D", text: "laws written down by a king" }
          ],
          correct: "C"
        },
        {
          id: "alphabet",
          sol: "WHI.2.d",
          stem: "Which Phoenician achievement had the greatest long-term influence on the Greek and Latin writing systems?",
          choices: [
            { letter: "A", text: "a system of picture writing on papyrus" },
            { letter: "B", text: "wedge-shaped marks pressed into clay" },
            { letter: "C", text: "a calendar based on the Nile's floods" },
            { letter: "D", text: "an alphabet of letters standing for sounds" }
          ],
          correct: "D"
        },
        {
          id: "carthage",
          sol: "WHI.2.d",
          stem: "Based on the passage, the Phoenician colony of Carthage was located in —",
          choices: [
            { letter: "A", text: "North Africa" },
            { letter: "B", text: "southern Greece" },
            { letter: "C", text: "the Nile delta" },
            { letter: "D", text: "Mesopotamia" }
          ],
          correct: "A"
        }
      ]
    },

    /* ---------- short ---------- */
    {
      id: "early-out-of-africa",
      family: "EARLY",
      title: "Arrows out of Africa",
      kind: "Early Humans & the Fertile Crescent · WHI.1",
      blurb: "A migration map from Africa to Australia and the Americas.",
      level: 2,
      passage: "<p>" + N(1) + "A map shows the spread of <strong>Homo sapiens</strong>, or modern humans. " + N(2) + "Arrows begin in Africa, where the oldest fossils of modern humans have been found. " + N(3) + "One path leads northeast into Southwest Asia. " + N(4) + "From there, arrows branch west into Europe and east across southern Asia, reaching Australia more than 40,000 years ago. " + N(5) + "A much later arrow crosses Beringia, a land bridge between Siberia and Alaska, into the Americas. " + N(6) + "A note explains that lower sea levels during the Ice Age exposed this land bridge.</p>",
      claims: [
        {
          id: "origin",
          sol: "WHI.1.a",
          stem: "According to the map, on which continent did modern humans first appear?",
          choices: [
            { letter: "A", text: "Europe" },
            { letter: "B", text: "Australia" },
            { letter: "C", text: "Africa" },
            { letter: "D", text: "North America" }
          ],
          correct: "C"
        },
        {
          id: "bridge",
          sol: "WHI.1.b",
          stem: "Which geographic change made it possible for people to walk from Asia into the Americas?",
          choices: [
            { letter: "A", text: "Lower sea levels exposed a land bridge." },
            { letter: "B", text: "Rivers changed course toward the east." },
            { letter: "C", text: "Deserts spread across North Africa." },
            { letter: "D", text: "Volcanoes formed a chain of new islands." }
          ],
          correct: "A"
        },
        {
          id: "last",
          sol: "WHI.1.b",
          stem: "According to the map, which region did migrating humans reach LAST?",
          choices: [
            { letter: "A", text: "Southwest Asia" },
            { letter: "B", text: "Europe" },
            { letter: "C", text: "Australia" },
            { letter: "D", text: "the Americas" }
          ],
          correct: "D"
        },
        {
          id: "why",
          sol: "WHI.1.b",
          stem: "Which statement best explains why hunter-gatherer groups kept moving into new lands?",
          choices: [
            { letter: "A", text: "They searched for copper and tin to make bronze." },
            { letter: "B", text: "They followed game animals and new food sources." },
            { letter: "C", text: "They were driven out by the rulers of early cities." },
            { letter: "D", text: "They wanted to trade with farming villages." }
          ],
          correct: "B"
        },
        {
          id: "cold",
          sol: "WHI.1.c",
          stem: "Which skills would have been most necessary for groups moving into Ice Age Europe?",
          choices: [
            { letter: "A", text: "writing laws and records on clay tablets" },
            { letter: "B", text: "digging canals to irrigate wheat fields" },
            { letter: "C", text: "using fire and sewing hides into clothing" },
            { letter: "D", text: "smelting iron to forge stronger weapons" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "early-hammurabi",
      family: "EARLY",
      title: "Laws on a stone pillar",
      kind: "Early Humans & the Fertile Crescent · WHI.2",
      blurb: "Three laws from Hammurabi's Code and what they reveal about Babylon.",
      level: 2,
      passage: "<p>" + N(1) + "Hammurabi ruled the city of Babylon, in Mesopotamia, from about 1792 to 1750 B.C. " + N(2) + "His <strong>code</strong> of about 282 laws was carved on a tall stone pillar.</p><blockquote>196. If a man put out the eye of another man, his eye shall be put out.<br>198. If he put out the eye of a freed man, or break the bone of a freed man, he shall pay one gold mina.<br>199. If he put out the eye of a man's slave, or break the bone of a man's slave, he shall pay one-half of its value.</blockquote><p class=\"src\">— Code of Hammurabi (L. W. King translation, adapted)</p>",
      claims: [
        {
          id: "class",
          sol: "WHI.2.b",
          stem: "Which conclusion is best supported by laws 196, 198 and 199?",
          choices: [
            { letter: "A", text: "Penalties depended on the social rank of the victim." },
            { letter: "B", text: "All people were treated the same under the law." },
            { letter: "C", text: "Enslaved people could not be harmed in any way." },
            { letter: "D", text: "Only priests were allowed to judge legal cases." }
          ],
          correct: "A"
        },
        {
          id: "vocab",
          sol: "WHI.2.b",
          stem: "In sentence 2, the word code most nearly means —",
          choices: [
            { letter: "A", text: "a secret message" },
            { letter: "B", text: "a list of numbers" },
            { letter: "C", text: "a religious hymn" },
            { letter: "D", text: "an organized set of laws" }
          ],
          correct: "D"
        },
        {
          id: "public",
          sol: "WHI.2.b",
          stem: "Why was it important that the laws were carved in stone and set up where people could see them?",
          choices: [
            { letter: "A", text: "so that only the king could change them in secret" },
            { letter: "B", text: "so that people could know the laws and penalties" },
            { letter: "C", text: "so that they would be hidden from foreign enemies" },
            { letter: "D", text: "so that scribes would not need to learn cuneiform" }
          ],
          correct: "B"
        },
        {
          id: "principle",
          sol: "WHI.2.b",
          stem: "Law 196 is an example of which principle?",
          choices: [
            { letter: "A", text: "innocent until proven guilty" },
            { letter: "B", text: "trial by a jury of peers" },
            { letter: "C", text: "equal retaliation for an injury" },
            { letter: "D", text: "freedom of speech and religion" }
          ],
          correct: "C"
        },
        {
          id: "rivers",
          sol: "WHI.2.b",
          stem: "Babylon and the other cities of Mesopotamia grew up between which two rivers?",
          choices: [
            { letter: "A", text: "the Nile and the Jordan" },
            { letter: "B", text: "the Indus and the Ganges" },
            { letter: "C", text: "the Huang He and the Yangtze" },
            { letter: "D", text: "the Tigris and the Euphrates" }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "early-nile-map",
      family: "EARLY",
      title: "A green ribbon in the desert",
      kind: "Early Humans & the Fertile Crescent · WHI.2",
      blurb: "A map of the Nile from the cataracts of Nubia to the delta.",
      level: 1,
      passage: "<p>" + N(1) + "On the map, the Nile flows north from the highlands of East Africa to the Mediterranean Sea. " + N(2) + "Desert lies on both sides of a narrow green strip of farmland. " + N(3) + "Near the sea, the river fans out into a wide <strong>delta</strong>, the heart of Lower Egypt. " + N(4) + "Upriver to the south, rocky rapids called cataracts mark the border with Nubia, home of the kingdom of Kush. " + N(5) + "A label notes that Kush traded gold, ivory and ebony with Egypt and, in the 700s B.C., conquered Egypt and ruled it for several decades. " + N(6) + "Another label explains that each year the river flooded, leaving rich black silt on the fields.</p>",
      claims: [
        {
          id: "strip",
          sol: "WHI.2.a",
          stem: "Why did most ancient Egyptians live in a narrow strip along the Nile?",
          choices: [
            { letter: "A", text: "The river protected them from all invaders." },
            { letter: "B", text: "Only land near the river could be farmed." },
            { letter: "C", text: "The pharaoh banned settlement in the delta." },
            { letter: "D", text: "Mountains blocked travel away from the river." }
          ],
          correct: "B"
        },
        {
          id: "vocab",
          sol: "WHI.2.a",
          stem: "In sentence 3, a delta is —",
          choices: [
            { letter: "A", text: "a range of mountains along a coast" },
            { letter: "B", text: "a stretch of rocky rapids in a river" },
            { letter: "C", text: "a fan of land where a river meets the sea" },
            { letter: "D", text: "a spring of fresh water in the desert" }
          ],
          correct: "C"
        },
        {
          id: "kush",
          sol: "WHI.2.a",
          stem: "Which detail from the map labels best shows that Kush became a powerful kingdom?",
          choices: [
            { letter: "A", text: "Its kings conquered and ruled Egypt." },
            { letter: "B", text: "It lay south of the Nile's cataracts." },
            { letter: "C", text: "It was surrounded by desert on both sides." },
            { letter: "D", text: "Its land was flooded by the river each year." }
          ],
          correct: "A"
        },
        {
          id: "flood",
          sol: "WHI.2.a",
          stem: "How did the yearly flood help Egyptian farmers?",
          choices: [
            { letter: "A", text: "It washed away the salt left by irrigation canals." },
            { letter: "B", text: "It drove wild animals out of the farm fields." },
            { letter: "C", text: "It made the river deep enough for warships." },
            { letter: "D", text: "It left fertile silt for growing crops." }
          ],
          correct: "D"
        },
        {
          id: "link",
          sol: "WHI.2.a",
          stem: "Which relationship between Egypt and Nubia does the map best help explain?",
          choices: [
            { letter: "A", text: "The Nile connected them, encouraging both trade and conflict." },
            { letter: "B", text: "The desert completely cut them off from each other." },
            { letter: "C", text: "The Mediterranean Sea lay between the two lands." },
            { letter: "D", text: "They were never ruled by the same government." }
          ],
          correct: "A"
        }
      ]
    },

    /* ---------- medium ---------- */
    {
      id: "early-catalhoyuk",
      family: "EARLY",
      title: "Houses entered through the roof",
      kind: "Early Humans & the Fertile Crescent · WHI.1",
      blurb: "Farming, surplus and life in the Neolithic town of Catalhoyuk.",
      level: 2,
      passage: "<p>" + N(1) + "Around 10,000 years ago, people in Southwest Asia began to plant wheat and barley and to tame sheep and goats. " + N(2) + "This shift from gathering food to producing it is called the <strong>Neolithic Revolution</strong>, or Agricultural Revolution. " + N(3) + "Farming produced a <strong>surplus</strong>, more food than a family needed, so not everyone had to farm. " + N(4) + "Some villagers became toolmakers, potters or weavers. " + N(5) + "Çatalhöyük, in what is now Turkey, was home to several thousand people about 9,000 years ago. " + N(6) + "Its mud-brick houses were packed so tightly that people entered through openings in the roofs. " + N(7) + "Archaeologists have found grain bins, obsidian tools and wall paintings inside the houses. " + N(8) + "Settled life also brought new problems: crowded villages spread disease, and stored food had to be protected.</p>",
      claims: [
        {
          id: "vocab",
          sol: "WHI.1.d",
          stem: "In sentence 3, the word surplus most nearly means —",
          choices: [
            { letter: "A", text: "a shortage caused by drought" },
            { letter: "B", text: "a tax paid to the ruler" },
            { letter: "C", text: "an amount beyond what is needed" },
            { letter: "D", text: "a tool used to harvest grain" }
          ],
          correct: "C"
        },
        {
          id: "chain",
          sol: "WHI.1.d",
          stem: "Which sequence best shows the chain of causes described in sentences 1 through 4?",
          choices: [
            { letter: "A", text: "farming, then a food surplus, then specialized jobs" },
            { letter: "B", text: "specialized jobs, then farming, then hunting" },
            { letter: "C", text: "a food surplus, then hunting, then farming" },
            { letter: "D", text: "cave painting, then farming, then nomadic life" }
          ],
          correct: "A"
        },
        {
          id: "contrast",
          sol: "WHI.1.c",
          stem: "How did life at Çatalhöyük differ most from the life of earlier hunter-gatherers?",
          choices: [
            { letter: "A", text: "People there no longer used stone tools." },
            { letter: "B", text: "People there followed herds each season." },
            { letter: "C", text: "People there had no art or religion." },
            { letter: "D", text: "People there lived in permanent homes." }
          ],
          correct: "D"
        },
        {
          id: "evidence",
          sol: "WHI.1.e",
          stem: "Which artifact named in sentence 7 best supports the claim that people at Çatalhöyük stored food?",
          choices: [
            { letter: "A", text: "the obsidian tools" },
            { letter: "B", text: "the grain bins" },
            { letter: "C", text: "the wall paintings" },
            { letter: "D", text: "the mud bricks" }
          ],
          correct: "B"
        },
        {
          id: "problem",
          sol: "WHI.1.d",
          stem: "Which negative effect of settled farming life is described in the passage?",
          choices: [
            { letter: "A", text: "Disease spread more easily in crowded villages." },
            { letter: "B", text: "People had less food than hunter-gatherers." },
            { letter: "C", text: "People forgot how to make and control fire." },
            { letter: "D", text: "People stopped making art and decorations." }
          ],
          correct: "A"
        },
        {
          id: "animals",
          sol: "WHI.1.d",
          stem: "Domesticating sheep and goats gave early farmers —",
          choices: [
            { letter: "A", text: "animals strong enough to pull chariots into battle" },
            { letter: "B", text: "a way to send messages between distant villages" },
            { letter: "C", text: "a steady supply of meat, milk and wool" },
            { letter: "D", text: "the power to plow fields without any labor" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "early-torah",
      family: "EARLY",
      title: "Hear, O Israel",
      kind: "Early Humans & the Fertile Crescent · WHI.2",
      blurb: "The covenant, the Torah, the Ten Commandments and Jewish practice.",
      level: 2,
      passage: "<p>" + N(1) + "According to the Hebrew Bible, God made a <strong>covenant</strong>, or binding agreement, with Abraham, and later gave laws to Moses after the Israelites left slavery in Egypt. " + N(2) + "Judaism was one of the first religions based on <strong>monotheism</strong>, the belief in one God. " + N(3) + "Its teachings are found in the Torah, the first five books of the Hebrew Bible.</p><blockquote>Hear, O Israel: The LORD our God is one LORD.</blockquote><p class=\"src\">— Deuteronomy 6:4 (King James Version)</p><blockquote>Thou shalt have no other gods before me. ... Remember the sabbath day, to keep it holy. ... Thou shalt not kill. ... Thou shalt not steal.</blockquote><p class=\"src\">— from the Ten Commandments, Exodus 20 (King James Version)</p><p>" + N(4) + "Jews worship in synagogues, observe the Sabbath as a weekly day of rest, and celebrate holidays such as Passover, which recalls the Exodus from Egypt.</p>",
      claims: [
        {
          id: "vocab",
          sol: "WHI.2.c",
          stem: "In sentence 2, the word monotheism means —",
          choices: [
            { letter: "A", text: "the worship of many gods and goddesses" },
            { letter: "B", text: "the belief that there is only one God" },
            { letter: "C", text: "the worship of the spirits of ancestors" },
            { letter: "D", text: "the belief that the ruler is a god" }
          ],
          correct: "B"
        },
        {
          id: "line",
          sol: "WHI.2.c",
          stem: "Which line from the excerpts most directly expresses monotheism?",
          choices: [
            { letter: "A", text: "Thou shalt not steal." },
            { letter: "B", text: "Remember the sabbath day, to keep it holy." },
            { letter: "C", text: "Thou shalt not kill." },
            { letter: "D", text: "The LORD our God is one LORD." }
          ],
          correct: "D"
        },
        {
          id: "custom",
          sol: "WHI.2.c",
          stem: "Which Jewish custom described in sentence 4 is also commanded in the Ten Commandments excerpt?",
          choices: [
            { letter: "A", text: "keeping the Sabbath as a day of rest" },
            { letter: "B", text: "building pyramids as tombs for rulers" },
            { letter: "C", text: "offering sacrifices to many gods" },
            { letter: "D", text: "following the rules of a caste system" }
          ],
          correct: "A"
        },
        {
          id: "ur",
          sol: "WHI.2.b",
          stem: "According to the Hebrew Bible, Abraham's family came from the city of Ur, which was located in —",
          choices: [
            { letter: "A", text: "the Nile Valley" },
            { letter: "B", text: "Nubia, south of Egypt" },
            { letter: "C", text: "Mesopotamia" },
            { letter: "D", text: "the Phoenician coast" }
          ],
          correct: "C"
        },
        {
          id: "legacy",
          sol: "WHI.2.c",
          stem: "Which statement best explains how Judaism influenced later religions?",
          choices: [
            { letter: "A", text: "Its belief in one God shaped Christianity and Islam." },
            { letter: "B", text: "It introduced the worship of the Egyptian sun god." },
            { letter: "C", text: "It spread a caste system across Southwest Asia." },
            { letter: "D", text: "It replaced written law with oral traditions." }
          ],
          correct: "A"
        },
        {
          id: "egypt",
          sol: "WHI.2.a",
          stem: "According to sentence 1, before the Exodus the Israelites had been enslaved in —",
          choices: [
            { letter: "A", text: "Babylon" },
            { letter: "B", text: "Phoenicia" },
            { letter: "C", text: "Assyria" },
            { letter: "D", text: "Egypt" }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "early-writing",
      family: "EARLY",
      title: "Wedges, pictures and letters",
      kind: "Early Humans & the Fertile Crescent · WHI.2",
      blurb: "A table comparing cuneiform, hieroglyphics and the Phoenician alphabet.",
      level: 2,
      passage: "<p>" + N(1) + "Writing developed so that rulers, priests and merchants could keep records. " + N(2) + "The table compares three early writing systems.</p><table><tr><th>System</th><th>People</th><th>How it worked</th><th>Written on</th></tr><tr><td>Cuneiform</td><td>Sumerians of Mesopotamia</td><td>wedge-shaped marks for words and syllables</td><td>clay tablets, with a reed stylus</td></tr><tr><td>Hieroglyphics</td><td>Egyptians</td><td>picture signs for words, ideas and sounds</td><td>stone walls and papyrus</td></tr><tr><td>Alphabet</td><td>Phoenicians</td><td>about 22 letters, each standing for a consonant sound</td><td>papyrus, pottery and stone</td></tr></table><p>" + N(3) + "Learning hundreds of cuneiform or hieroglyphic signs took years of training, so only trained <strong>scribes</strong> could read and write. " + N(4) + "The Phoenician alphabet was easier to learn, and traders carried it around the Mediterranean, where the Greeks adapted it. " + N(5) + "The Greek alphabet in turn became the basis of the Latin alphabet used to write English today.</p>",
      claims: [
        {
          id: "differ",
          sol: "WHI.2.d",
          stem: "According to the table, how did the Phoenician alphabet differ from cuneiform and hieroglyphics?",
          choices: [
            { letter: "A", text: "It used pictures to stand for whole ideas." },
            { letter: "B", text: "It was pressed into clay with a reed." },
            { letter: "C", text: "It was used only by temple priests." },
            { letter: "D", text: "It used a small set of signs for sounds." }
          ],
          correct: "D"
        },
        {
          id: "who",
          sol: "WHI.2.b",
          stem: "According to the table, which people developed cuneiform?",
          choices: [
            { letter: "A", text: "the Phoenicians" },
            { letter: "B", text: "the Sumerians" },
            { letter: "C", text: "the Egyptians" },
            { letter: "D", text: "the Israelites" }
          ],
          correct: "B"
        },
        {
          id: "vocab",
          sol: "WHI.2.b",
          stem: "In sentence 3, scribes were —",
          choices: [
            { letter: "A", text: "trained writers and record keepers" },
            { letter: "B", text: "merchants who sailed to distant ports" },
            { letter: "C", text: "soldiers who guarded the temples" },
            { letter: "D", text: "farmers who paid their taxes in grain" }
          ],
          correct: "A"
        },
        {
          id: "spread",
          sol: "WHI.2.d",
          stem: "Which statement best explains why the Phoenician alphabet spread so widely?",
          choices: [
            { letter: "A", text: "Conquering kings forced subjects to use it." },
            { letter: "B", text: "Priests carved it on temple walls in Egypt." },
            { letter: "C", text: "Traders carried an easy-to-learn system abroad." },
            { letter: "D", text: "It was the only system written on papyrus." }
          ],
          correct: "C"
        },
        {
          id: "papyrus",
          sol: "WHI.2.a",
          stem: "Which writing material in the table was made from a reed that grew along the Nile?",
          choices: [
            { letter: "A", text: "clay" },
            { letter: "B", text: "papyrus" },
            { letter: "C", text: "stone" },
            { letter: "D", text: "pottery" }
          ],
          correct: "B"
        },
        {
          id: "today",
          sol: "WHI.2.d",
          stem: "Which conclusion is best supported by sentences 4 and 5?",
          choices: [
            { letter: "A", text: "The alphabet used for English today traces back to the Phoenicians." },
            { letter: "B", text: "The Greeks invented writing long before the Sumerians did." },
            { letter: "C", text: "Cuneiform was the direct basis of the Latin alphabet used today." },
            { letter: "D", text: "Hieroglyphics were replaced by cuneiform throughout Egypt." }
          ],
          correct: "A"
        }
      ]
    },

    /* ---------- long ---------- */
    {
      id: "early-gobekli",
      family: "EARLY",
      title: "Temple before farm?",
      kind: "Early Humans & the Fertile Crescent · WHI.1",
      blurb: "An older textbook view meets the stone pillars of Gobekli Tepe.",
      level: 3,
      passage: "<p><strong>Source A</strong> — a summary of an older textbook view. " + N(1) + "For much of the 1900s, many textbooks described a simple sequence. " + N(2) + "People first learned to farm, which created a food surplus and permanent villages. " + N(3) + "Only after that could societies organize the labor to build temples and monuments. " + N(4) + "In this view, large religious buildings came after agriculture.</p><p><strong>Source B</strong> — a summary of recent archaeology. " + N(5) + "In the 1990s, archaeologists led by Klaus Schmidt began excavating Göbekli Tepe in southeastern Turkey. " + N(6) + "Its rings of carved stone pillars, some taller than five meters and weighing many tons, were raised around 9500 B.C. " + N(7) + "<strong>Radiocarbon dating</strong> and the bones of wild animals found at the site led most researchers to conclude that the builders were hunter-gatherers. " + N(8) + "Some scholars now suggest that the need to feed large gatherings at such sites may have encouraged people to cultivate wild grains, a step toward farming. " + N(9) + "The debate is not settled, but the site shows how a single discovery can force historians to rethink an old timeline.</p>",
      claims: [
        {
          id: "challenge",
          sol: "WHI.1.e",
          stem: "How does Source B challenge the view in Source A?",
          choices: [
            { letter: "A", text: "It shows that farming began in Europe instead of Asia." },
            { letter: "B", text: "It suggests that monument building may have come before farming." },
            { letter: "C", text: "It proves that hunter-gatherers never used stone tools." },
            { letter: "D", text: "It shows that writing was invented before agriculture." }
          ],
          correct: "B"
        },
        {
          id: "evidence",
          sol: "WHI.1.e",
          stem: "Which evidence in Source B best supports the conclusion that the builders were hunter-gatherers?",
          choices: [
            { letter: "A", text: "the height of the stone pillars" },
            { letter: "B", text: "the site's location in Turkey" },
            { letter: "C", text: "the carvings on the pillars" },
            { letter: "D", text: "the bones of wild animals at the site" }
          ],
          correct: "D"
        },
        {
          id: "vocab",
          sol: "WHI.1.e",
          stem: "In sentence 7, radiocarbon dating is a method used to —",
          choices: [
            { letter: "A", text: "estimate the age of once-living material" },
            { letter: "B", text: "translate an ancient system of writing" },
            { letter: "C", text: "locate buried sites from an airplane" },
            { letter: "D", text: "measure the weight of large stones" }
          ],
          correct: "A"
        },
        {
          id: "food",
          sol: "WHI.1.c",
          stem: "According to Source B, the builders of Göbekli Tepe most likely got their food by —",
          choices: [
            { letter: "A", text: "growing wheat in irrigated fields" },
            { letter: "B", text: "trading with distant river cities" },
            { letter: "C", text: "hunting and gathering wild foods" },
            { letter: "D", text: "herding domesticated sheep" }
          ],
          correct: "C"
        },
        {
          id: "two",
          sol: "WHI.1.d",
          stem: "Select TWO developments that historians link to the rise of settled life in the Neolithic era.",
          choices: [
            { letter: "A", text: "the domestication of plants and animals" },
            { letter: "B", text: "the use of iron weapons and armor" },
            { letter: "C", text: "the storage of surplus grain" },
            { letter: "D", text: "the invention of the alphabet" }
          ],
          correct: ["A", "C"]
        },
        {
          id: "lesson",
          sol: "WHI.1.e",
          stem: "Sentence 9 implies which idea about the study of early societies?",
          choices: [
            { letter: "A", text: "Older textbooks were written without any evidence." },
            { letter: "B", text: "Archaeology cannot tell us anything about religion." },
            { letter: "C", text: "Once a timeline is published, it cannot be revised." },
            { letter: "D", text: "Conclusions can change when new evidence appears." }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "early-exile",
      family: "EARLY",
      title: "Kingdom, exile and Diaspora",
      kind: "Early Humans & the Fertile Crescent · WHI.2",
      blurb: "A timeline of the Israelites from King David to the fall of the Second Temple.",
      level: 3,
      passage: "<p>" + N(1) + "The history of the Israelites, as told in the Hebrew Bible and studied by archaeologists, includes periods of independence, conquest and <strong>exile</strong>. " + N(2) + "The timeline lists major events.</p><ul><li><strong>About 1000 B.C.</strong> King David makes Jerusalem the capital of a united kingdom of Israel.</li><li><strong>About 950 B.C.</strong> King Solomon builds the First Temple in Jerusalem.</li><li><strong>About 930 B.C.</strong> The kingdom splits into Israel in the north and Judah in the south.</li><li><strong>722 B.C.</strong> The Assyrian Empire conquers the northern kingdom of Israel.</li><li><strong>586 B.C.</strong> The Babylonians destroy the First Temple and carry many people of Judah into exile in Babylon.</li><li><strong>539 B.C.</strong> Cyrus the Great of Persia conquers Babylon and allows the exiles to return and rebuild the Temple.</li><li><strong>A.D. 70</strong> Roman armies destroy the Second Temple in Jerusalem.</li></ul><p>" + N(3) + "Exile and conquest scattered Jewish communities across Southwest Asia, North Africa and Europe, a dispersion called the <strong>Diaspora</strong>. " + N(4) + "Far from the Temple, Jews kept their identity through the Torah, the synagogue, the Sabbath and shared customs.</p>",
      claims: [
        {
          id: "first",
          sol: "WHI.2.c",
          stem: "Which of these events in Israelite history happened FIRST?",
          choices: [
            { letter: "A", text: "The Assyrians conquer the kingdom of Israel." },
            { letter: "B", text: "Cyrus allows the exiles to return." },
            { letter: "C", text: "The kingdom splits into Israel and Judah." },
            { letter: "D", text: "The Romans destroy the Second Temple." }
          ],
          correct: "C"
        },
        {
          id: "vocab",
          sol: "WHI.2.c",
          stem: "In sentence 3, the word Diaspora refers to —",
          choices: [
            { letter: "A", text: "the scattering of Jews beyond their homeland" },
            { letter: "B", text: "the building of the First Temple by Solomon" },
            { letter: "C", text: "a code of laws written in ancient Babylon" },
            { letter: "D", text: "a road built across the Persian Empire" }
          ],
          correct: "A"
        },
        {
          id: "babylon",
          sol: "WHI.2.b",
          stem: "Babylon, where many people of Judah were taken in 586 B.C., was located in —",
          choices: [
            { letter: "A", text: "the Nile Valley" },
            { letter: "B", text: "Phoenicia" },
            { letter: "C", text: "Nubia" },
            { letter: "D", text: "Mesopotamia" }
          ],
          correct: "D"
        },
        {
          id: "letters",
          sol: "WHI.2.d",
          stem: "The earliest Hebrew writing used letters borrowed from the alphabet of the Israelites' coastal neighbors to the north, the —",
          choices: [
            { letter: "A", text: "Sumerians" },
            { letter: "B", text: "Phoenicians" },
            { letter: "C", text: "Egyptians" },
            { letter: "D", text: "Nubians" }
          ],
          correct: "B"
        },
        {
          id: "cause",
          sol: "WHI.2.c",
          stem: "Which event most directly made it possible to build the Second Temple?",
          choices: [
            { letter: "A", text: "David makes Jerusalem his capital." },
            { letter: "B", text: "Cyrus conquers Babylon and frees the exiles." },
            { letter: "C", text: "Assyria conquers the northern kingdom." },
            { letter: "D", text: "The kingdom splits into two parts." }
          ],
          correct: "B"
        },
        {
          id: "synagogue",
          sol: "WHI.2.c",
          stem: "Synagogues became especially important during the Diaspora because they —",
          choices: [
            { letter: "A", text: "gave scattered communities a place to pray and study" },
            { letter: "B", text: "replaced the Torah with new laws written by kings" },
            { letter: "C", text: "served as royal palaces for the kings of Judah" },
            { letter: "D", text: "were the only places where trade was permitted" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "early-two-rivers",
      family: "EARLY",
      title: "Two river valleys",
      kind: "Early Humans & the Fertile Crescent · WHI.2",
      blurb: "Egypt and Mesopotamia compared: floods, barriers, rulers and gods.",
      level: 3,
      passage: "<p>" + N(1) + "Egypt and Mesopotamia both grew up along rivers in the dry lands of North Africa and Southwest Asia, but their rivers behaved very differently.</p><table><tr><th>Feature</th><th>Egypt</th><th>Mesopotamia</th></tr><tr><td>River(s)</td><td>Nile</td><td>Tigris and Euphrates</td></tr><tr><td>Flooding</td><td>yearly and fairly predictable</td><td>sudden and unpredictable</td></tr><tr><td>Natural barriers</td><td>deserts on both sides, cataracts to the south</td><td>few; open plains easy to invade</td></tr><tr><td>Government</td><td>one kingdom under a pharaoh, seen as a god-king</td><td>independent city-states, later united in empires</td></tr><tr><td>Religion</td><td>many gods; belief in an afterlife</td><td>many gods; a gloomy view of the afterlife</td></tr></table><p>" + N(2) + "Because Mesopotamian floods could come without warning, farmers there built levees and irrigation canals, work that required cooperation and strong leaders. " + N(3) + "City-states such as Ur and Uruk often fought over water and land. " + N(4) + "Around 2300 B.C., Sargon of Akkad conquered the city-states and created what many historians call the world's first <strong>empire</strong>. " + N(5) + "Egypt's protected location helped its kingdoms last for long periods, and pharaohs built pyramids as tombs to prepare for the afterlife.</p>",
      claims: [
        {
          id: "surplus",
          sol: "WHI.1.d",
          stem: "Which development, begun in the Neolithic era, made the cities of both river valleys possible?",
          choices: [
            { letter: "A", text: "farming that produced surplus food" },
            { letter: "B", text: "the use of iron tools and weapons" },
            { letter: "C", text: "the invention of the alphabet" },
            { letter: "D", text: "the spread of nomadic herding" }
          ],
          correct: "A"
        },
        {
          id: "invade",
          sol: "WHI.2.b",
          stem: "Which geographic factor best explains why Mesopotamia was invaded more often than Egypt?",
          choices: [
            { letter: "A", text: "its predictable yearly floods" },
            { letter: "B", text: "its location along the Nile" },
            { letter: "C", text: "its open plains with few barriers" },
            { letter: "D", text: "its deserts on both sides" }
          ],
          correct: "C"
        },
        {
          id: "vocab",
          sol: "WHI.2.b",
          stem: "In sentence 4, the word empire most nearly means —",
          choices: [
            { letter: "A", text: "a single city surrounded by walls" },
            { letter: "B", text: "a state that rules many lands and peoples" },
            { letter: "C", text: "a temple built with stepped sides" },
            { letter: "D", text: "a set of laws carved on a pillar" }
          ],
          correct: "B"
        },
        {
          id: "pharaoh",
          sol: "WHI.2.a",
          stem: "Which statement about the pharaoh is supported by the table?",
          choices: [
            { letter: "A", text: "He was elected by the leaders of city-states." },
            { letter: "B", text: "He ruled only the delta of Lower Egypt." },
            { letter: "C", text: "He shared power equally with the priests." },
            { letter: "D", text: "Egyptians viewed him as a god-king." }
          ],
          correct: "D"
        },
        {
          id: "afterlife",
          sol: "WHI.2.a",
          stem: "Egyptian beliefs about the afterlife most directly led to the building of —",
          choices: [
            { letter: "A", text: "ziggurats" },
            { letter: "B", text: "city walls" },
            { letter: "C", text: "irrigation canals" },
            { letter: "D", text: "pyramids" }
          ],
          correct: "D"
        },
        {
          id: "both",
          sol: "WHI.2.b",
          stem: "Select TWO statements that are true of BOTH Egypt and Mesopotamia.",
          choices: [
            { letter: "A", text: "Both depended on rivers for farming." },
            { letter: "B", text: "Both were united under one pharaoh." },
            { letter: "C", text: "Both people worshiped many gods." },
            { letter: "D", text: "Both were shielded by deserts on all sides." }
          ],
          correct: ["A", "C"]
        }
      ]
    }
  ];

  for (var i = 0; i < PACKS.length; i++) P.push(PACKS[i]);
})(typeof window !== "undefined" ? window : global);
