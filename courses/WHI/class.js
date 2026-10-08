/* SOL Lab — World History I · Persia, Greece & Rome (WHI.4–5). Original text only. */
(function (global) {
  var P = global.HEIST_PACKS;
  if (!P || !P.push) return;
  var N = function (i) { return '<span class="n">(' + i + ')</span> '; };   // numbered sentence

  var PACKS = [
    /* ---------- tiny ---------- */
    {
      id: "class-greek-geography",
      family: "CLASS",
      title: "Mountains, valleys and the sea",
      kind: "Persia, Greece & Rome · WHI.4",
      blurb: "A map of Greece described in words: rocky valleys, islands and colonies.",
      level: 1,
      passage: "<p>" + N(1) + "On the map, the Greek mainland is a rocky peninsula in the <strong>Mediterranean Sea</strong>, with hundreds of islands to the east. " + N(2) + "Mountain ridges cut the land into small valleys with little good farmland. " + N(3) + "Each valley held its own independent <strong>polis</strong>, or city-state. " + N(4) + "Arrows show Greek ships sailing to colonies around the Black Sea and as far west as Sicily.</p>",
      claims: [
        {
          id: "divided",
          sol: "WHI.4.a",
          stem: "According to the map description, what divided Greece into many small, separate communities?",
          choices: [
            { letter: "A", text: "rivers that flooded each spring and fall" },
            { letter: "B", text: "mountain ridges between narrow valleys" },
            { letter: "C", text: "wide deserts along the coastline" },
            { letter: "D", text: "thick rain forests in the interior" }
          ],
          correct: "B"
        },
        {
          id: "polis",
          sol: "WHI.4.c",
          stem: "In sentence 3, the word polis most nearly means —",
          choices: [
            { letter: "A", text: "a temple built to honor the gods" },
            { letter: "B", text: "a council of elders that advised a king" },
            { letter: "C", text: "an independent city-state" },
            { letter: "D", text: "a farming village owned by a noble" }
          ],
          correct: "C"
        },
        {
          id: "arrows",
          sol: "WHI.4.a",
          stem: "Which conclusion is best supported by the arrows on the map?",
          choices: [
            { letter: "A", text: "Greeks used the sea for trade and settlement." },
            { letter: "B", text: "The Greeks avoided contact with other peoples." },
            { letter: "C", text: "Greek colonies were all on the mainland." },
            { letter: "D", text: "Greek ships were unable to cross open water." }
          ],
          correct: "A"
        },
        {
          id: "colonies",
          sol: "WHI.4.a",
          stem: "Which statement best explains why many Greeks founded colonies overseas?",
          choices: [
            { letter: "A", text: "Persian rulers forced them to leave the mainland." },
            { letter: "B", text: "Yearly Nile floods destroyed their farms." },
            { letter: "C", text: "Roman armies had taken over the peninsula." },
            { letter: "D", text: "A growing population needed more farmland." }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "class-royal-road",
      family: "CLASS",
      title: "The king's messengers",
      kind: "Persia, Greece & Rome · WHI.4",
      blurb: "Darius, the satrapies and a famous line from Herodotus about Persian couriers.",
      level: 1,
      passage: "<p>" + N(1) + "Darius I ruled the <strong>Persian Empire</strong>, from Egypt to the Indus River. " + N(2) + "He divided it into provinces called <strong>satrapies</strong>, each run by a governor who collected taxes. " + N(3) + "A royal road over 1,500 miles long linked Sardis to Susa.</p><blockquote>Nothing travels faster than these Persian couriers. Neither snow nor rain nor heat nor darkness keeps them from finishing their stage.</blockquote><p class=\"src\">— Herodotus, Histories, Book 8 (adapted)</p>",
      claims: [
        {
          id: "satrapy",
          sol: "WHI.4.b",
          stem: "In sentence 2, satrapies were —",
          choices: [
            { letter: "A", text: "temples where priests kept a sacred fire" },
            { letter: "B", text: "provinces run by governors for the king" },
            { letter: "C", text: "armies of hired foreign soldiers" },
            { letter: "D", text: "markets along the royal highway" }
          ],
          correct: "B"
        },
        {
          id: "herodotus",
          sol: "WHI.4.b",
          stem: "The excerpt from Herodotus is mainly about —",
          choices: [
            { letter: "A", text: "the high cost of building the royal road" },
            { letter: "B", text: "the harsh weather on the Iranian plateau" },
            { letter: "C", text: "the speed and reliability of the couriers" },
            { letter: "D", text: "the final defeat of Persia by the Greeks" }
          ],
          correct: "C"
        },
        {
          id: "road",
          sol: "WHI.4.b",
          stem: "How did the road system most help the Persian kings?",
          choices: [
            { letter: "A", text: "It moved orders, taxes and troops quickly." },
            { letter: "B", text: "It kept foreign traders out of Persia." },
            { letter: "C", text: "It replaced the need for local governors." },
            { letter: "D", text: "It carried water from mountains to cities." }
          ],
          correct: "A"
        },
        {
          id: "zoroaster",
          sol: "WHI.4.b",
          stem: "Many Persians followed the teachings of the prophet Zoroaster. Which belief was central to Zoroastrianism?",
          choices: [
            { letter: "A", text: "a cycle of rebirth that ends in nirvana" },
            { letter: "B", text: "worship of the king as a living god" },
            { letter: "C", text: "respect for ancestors and filial piety" },
            { letter: "D", text: "a cosmic struggle between good and evil" }
          ],
          correct: "D"
        },
        {
          id: "tolerance",
          sol: "WHI.4.b",
          stem: "Persian kings such as Cyrus the Great generally governed conquered peoples by —",
          choices: [
            { letter: "A", text: "letting them keep their own religions and customs" },
            { letter: "B", text: "forcing them to speak only the Persian language" },
            { letter: "C", text: "banning all of their trade with outsiders" },
            { letter: "D", text: "moving every conquered people to the Persian heartland" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "class-twelve-tables",
      family: "CLASS",
      title: "Laws on the tablets",
      kind: "Persia, Greece & Rome · WHI.5",
      blurb: "Three laws from Rome's Twelve Tables and why plebeians wanted them written down.",
      level: 1,
      passage: "<p>" + N(1) + "About 450 B.C., Rome wrote its laws on twelve tablets and posted them in the <strong>Forum</strong> for citizens to read.</p><blockquote>If anyone summons a man to court, he shall go. ... A judge who takes a bribe shall be put to death.</blockquote><p class=\"src\">— The Twelve Tables (adapted)</p><p>" + N(2) + "Plebeians had demanded written laws so patrician judges could not twist unwritten custom.</p>",
      claims: [
        {
          id: "purpose",
          sol: "WHI.5.e",
          stem: "What was the main purpose of writing the laws down and posting them in the Forum?",
          choices: [
            { letter: "A", text: "to honor the gods who protected the city" },
            { letter: "B", text: "to let citizens know what the law said" },
            { letter: "C", text: "to record the names of Rome's consuls" },
            { letter: "D", text: "to show Carthage's laws to Roman traders" }
          ],
          correct: "B"
        },
        {
          id: "plebeians",
          sol: "WHI.5.b",
          stem: "According to sentence 2, why did plebeians want written laws?",
          choices: [
            { letter: "A", text: "to end the power of the Senate over Rome" },
            { letter: "B", text: "to win the right to own enslaved workers" },
            { letter: "C", text: "to keep judges from twisting old custom" },
            { letter: "D", text: "to make Rome an empire ruled by one man" }
          ],
          correct: "C"
        },
        {
          id: "bribe",
          sol: "WHI.5.e",
          stem: "Which modern principle is most like the law against judges who take bribes?",
          choices: [
            { letter: "A", text: "freedom of speech and of the press" },
            { letter: "B", text: "separation of church and state" },
            { letter: "C", text: "the right to keep and bear arms" },
            { letter: "D", text: "the right to an impartial judge" }
          ],
          correct: "D"
        },
        {
          id: "forum",
          sol: "WHI.5.e",
          stem: "In sentence 1, the Forum was —",
          choices: [
            { letter: "A", text: "the public square at the center of Rome" },
            { letter: "B", text: "a fortress guarding the passes of the Alps" },
            { letter: "C", text: "the palace where the emperor lived" },
            { letter: "D", text: "the main temple of Jupiter on the hill" }
          ],
          correct: "A"
        }
      ]
    },
    /* ---------- short ---------- */
    {
      id: "class-athens-sparta",
      family: "CLASS",
      title: "Two city-states",
      kind: "Persia, Greece & Rome · WHI.4",
      blurb: "A table comparing government, citizens, schooling and labor in Athens and Sparta.",
      level: 1,
      passage: "<p>" + N(1) + "The table compares the two leading Greek city-states in the 400s B.C.</p><table><tr><th></th><th>Athens</th><th>Sparta</th></tr><tr><td>Government</td><td>direct democracy; citizens vote in the Assembly</td><td>oligarchy with two kings and a council of elders</td></tr><tr><td>Citizens</td><td>free adult men with Athenian parents</td><td>Spartan men who completed military training</td></tr><tr><td>Education of boys</td><td>reading, music, athletics and public speaking</td><td>the <strong>agoge</strong>, harsh military training from age 7</td></tr><tr><td>Women</td><td>few rights; managed the household</td><td>could own and manage property</td></tr><tr><td>Labor</td><td>slaves, farmers, artisans and traders</td><td><strong>helots</strong>, state-owned workers who farmed</td></tr></table>",
      claims: [
        {
          id: "vote",
          sol: "WHI.4.c",
          stem: "According to the table, which group could vote in the Athenian Assembly?",
          choices: [
            { letter: "A", text: "every adult who lived in the city" },
            { letter: "B", text: "women who managed property" },
            { letter: "C", text: "free men born to Athenian parents" },
            { letter: "D", text: "only wealthy landowners and nobles" }
          ],
          correct: "C"
        },
        {
          id: "conclude",
          sol: "WHI.4.c",
          stem: "Which conclusion about Sparta is best supported by the table?",
          choices: [
            { letter: "A", text: "Sparta built its society around military strength." },
            { letter: "B", text: "Athens trained its boys only for war." },
            { letter: "C", text: "Spartan women had fewer rights than Athenian women." },
            { letter: "D", text: "Both city-states were ruled by a single king." }
          ],
          correct: "A"
        },
        {
          id: "helots",
          sol: "WHI.4.c",
          stem: "In the table, helots were —",
          choices: [
            { letter: "A", text: "boys in Sparta's military school" },
            { letter: "B", text: "foreign merchants who traded in Athens" },
            { letter: "C", text: "elected members of Sparta's council" },
            { letter: "D", text: "state-owned laborers who farmed" }
          ],
          correct: "D"
        },
        {
          id: "direct",
          sol: "WHI.4.c",
          stem: "Athens practiced direct democracy. In a direct democracy, citizens —",
          choices: [
            { letter: "A", text: "elect a king to rule for life" },
            { letter: "B", text: "vote on laws themselves" },
            { letter: "C", text: "let a few rich families decide" },
            { letter: "D", text: "obey a ruler who seized power" }
          ],
          correct: "B"
        },
        {
          id: "contrast",
          sol: "WHI.4.c",
          stem: "Which statement best explains a key difference between Athens and Sparta?",
          choices: [
            { letter: "A", text: "Athens valued the arts and learning, while Sparta stressed military training." },
            { letter: "B", text: "Sparta was a democracy, while Athens was ruled by a council of two kings." },
            { letter: "C", text: "Athens banned slavery, while Sparta depended on the labor of the helots." },
            { letter: "D", text: "Sparta taught its boys philosophy, while Athens trained its boys only for war." }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "class-persian-wars",
      family: "CLASS",
      title: "Greeks against Persia",
      kind: "Persia, Greece & Rome · WHI.4",
      blurb: "A timeline from the Ionian revolt to the Delian League.",
      level: 2,
      passage: "<p>" + N(1) + "The timeline traces the wars between the Greek city-states and the Persian Empire.</p><ul><li><strong>499 B.C.</strong> Greek cities in Ionia revolt against Persian rule; Athens sends ships to help them.</li><li><strong>490 B.C.</strong> Athenians defeat a Persian landing force at <strong>Marathon</strong>.</li><li><strong>480 B.C.</strong> King Xerxes invades; a small force led by Spartans holds the pass at Thermopylae, then falls; the Athenian navy wins at Salamis.</li><li><strong>479 B.C.</strong> Greek armies win at Plataea, ending the invasion.</li><li><strong>478 B.C.</strong> Athens leads a new alliance of city-states, the <strong>Delian League</strong>.</li></ul>",
      claims: [
        {
          id: "first",
          sol: "WHI.4.d",
          stem: "Which event in the Persian Wars timeline happened FIRST?",
          choices: [
            { letter: "A", text: "Xerxes invades Greece" },
            { letter: "B", text: "the Battle of Marathon" },
            { letter: "C", text: "the revolt of the Ionian Greeks" },
            { letter: "D", text: "the founding of the Delian League" }
          ],
          correct: "C"
        },
        {
          id: "cause",
          sol: "WHI.4.d",
          stem: "According to the timeline, what was one cause of the Persian Wars?",
          choices: [
            { letter: "A", text: "Athens had aided an Ionian revolt against Persia." },
            { letter: "B", text: "Sparta had invaded the Persian capital at Susa." },
            { letter: "C", text: "Persia had refused to trade with any Greek city." },
            { letter: "D", text: "Alexander the Great had already conquered Persia." }
          ],
          correct: "A"
        },
        {
          id: "navy",
          sol: "WHI.4.a",
          stem: "The Athenians won the Battle of Salamis at sea. Which geographic fact best explains why Athens relied on a strong navy?",
          choices: [
            { letter: "A", text: "Athens was surrounded by deserts that armies could not cross." },
            { letter: "B", text: "Athens sat near the coast and traded across the Aegean." },
            { letter: "C", text: "Athens lay on a great river that flowed into Persia." },
            { letter: "D", text: "Athens had no mountains, so it was easy to attack by land." }
          ],
          correct: "B"
        },
        {
          id: "result",
          sol: "WHI.4.d",
          stem: "Which was a result of the Greek victory in the Persian Wars?",
          choices: [
            { letter: "A", text: "Persia took control of the Greek mainland." },
            { letter: "B", text: "Sparta and Athens merged into one state." },
            { letter: "C", text: "Greek city-states stopped all trade by sea." },
            { letter: "D", text: "Athens grew wealthy and entered a golden age." }
          ],
          correct: "D"
        },
        {
          id: "league",
          sol: "WHI.4.d",
          stem: "In the timeline, the Delian League was —",
          choices: [
            { letter: "A", text: "an alliance of city-states led by Athens" },
            { letter: "B", text: "a Persian province ruled by a royal satrap" },
            { letter: "C", text: "a Spartan school for training young soldiers" },
            { letter: "D", text: "a council that chose the next Persian king" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "class-constantinople",
      family: "CLASS",
      title: "A capital between two continents",
      kind: "Persia, Greece & Rome · WHI.5",
      blurb: "A map of Constantinople described in words, and the empire it ruled for a thousand years.",
      level: 2,
      passage: "<p>" + N(1) + "On the map, Constantinople sits on a point of land between the Black Sea and the Sea of Marmara, beside the narrow strait called the <strong>Bosporus</strong>. " + N(2) + "Water guards the city on three sides, and massive walls cross the land side. " + N(3) + "Europe lies west of the strait and Asia lies east of it. " + N(4) + "A note says the emperor Constantine made the old Greek town of Byzantium his new capital in A.D. 330. " + N(5) + "After the western half of the Roman Empire fell in 476, the city remained the capital of the eastern half, later called the <strong>Byzantine Empire</strong>, for nearly a thousand years.</p>",
      claims: [
        {
          id: "location",
          sol: "WHI.5.c",
          stem: "Which conclusion about Constantinople's location is best supported by the map?",
          choices: [
            { letter: "A", text: "It lay far from any of the major trade routes." },
            { letter: "B", text: "It controlled trade routes between Europe and Asia." },
            { letter: "C", text: "It was protected by high mountains on every side." },
            { letter: "D", text: "It lay near the center of the Italian peninsula." }
          ],
          correct: "B"
        },
        {
          id: "defense",
          sol: "WHI.5.c",
          stem: "According to sentence 2, how was the city defended?",
          choices: [
            { letter: "A", text: "by a ring of high mountains" },
            { letter: "B", text: "by deserts on the Asian side" },
            { letter: "C", text: "by a river that flooded each spring" },
            { letter: "D", text: "by water and massive land walls" }
          ],
          correct: "D"
        },
        {
          id: "divide",
          sol: "WHI.5.a",
          stem: "Which factor helped lead to the division of the Roman Empire into eastern and western halves?",
          choices: [
            { letter: "A", text: "The empire had grown too large to govern from one city." },
            { letter: "B", text: "Rome had no roads to connect its provinces." },
            { letter: "C", text: "The Senate had voted to give the West to Persia." },
            { letter: "D", text: "Christianity had been banned in the eastern provinces." }
          ],
          correct: "A"
        },
        {
          id: "justinian",
          sol: "WHI.5.c",
          stem: "Which Byzantine emperor is best known for organizing Roman law into a code that later shaped European law?",
          choices: [
            { letter: "A", text: "Augustus" },
            { letter: "B", text: "Constantine" },
            { letter: "C", text: "Justinian" },
            { letter: "D", text: "Diocletian" }
          ],
          correct: "C"
        },
        {
          id: "byzantine",
          sol: "WHI.5.c",
          stem: "In sentence 5, the Byzantine Empire refers to —",
          choices: [
            { letter: "A", text: "the western empire ruled from the city of Rome" },
            { letter: "B", text: "the eastern Roman Empire, ruled from Constantinople" },
            { letter: "C", text: "the Persian kingdoms after Alexander's death" },
            { letter: "D", text: "the Greek city-states led by Athens and Sparta" }
          ],
          correct: "B"
        }
      ]
    },
    /* ---------- medium ---------- */
    {
      id: "class-funeral-oration",
      family: "CLASS",
      title: "Pericles honors the dead",
      kind: "Persia, Greece & Rome · WHI.4",
      blurb: "Pericles' Funeral Oration on Athenian democracy, early in the Peloponnesian War.",
      level: 3,
      passage: "<p>" + N(1) + "In 431 B.C., after the first year of fighting in the <strong>Peloponnesian War</strong>, Athens held a public funeral for its fallen soldiers. " + N(2) + "The historian Thucydides recorded a speech by Pericles, the city's leading general.</p><blockquote>Our constitution does not copy the laws of neighbouring states; we are rather a pattern to others than imitators ourselves. Its administration favours the many instead of the few; this is why it is called a democracy. ... Advancement in public life falls to reputation for capacity, class considerations not being allowed to interfere with merit; nor again does poverty bar the way.</blockquote><p class=\"src\">— Pericles' Funeral Oration, in Thucydides, History of the Peloponnesian War (Crawley translation, adapted)</p><p>" + N(3) + "Within two years a plague had killed many Athenians, Pericles among them, and the war dragged on until Sparta won in 404 B.C.</p>",
      claims: [
        {
          id: "why-demo",
          sol: "WHI.4.c",
          stem: "In the excerpt, Pericles says Athens is called a democracy because —",
          choices: [
            { letter: "A", text: "power rests with the many, not a few" },
            { letter: "B", text: "it copies the laws of its neighbors" },
            { letter: "C", text: "it is ruled by its wisest general" },
            { letter: "D", text: "only the wealthy may hold office" }
          ],
          correct: "A"
        },
        {
          id: "purpose",
          sol: "WHI.4.c",
          stem: "The main purpose of this speech was to —",
          choices: [
            { letter: "A", text: "announce a peace treaty with Sparta" },
            { letter: "B", text: "propose new laws to the Assembly" },
            { letter: "C", text: "honor the dead by praising their city" },
            { letter: "D", text: "warn Athenians about the coming plague" }
          ],
          correct: "C"
        },
        {
          id: "limit",
          sol: "WHI.4.c",
          stem: "Which fact about Athens most limits Pericles' claim that its government favors the many?",
          choices: [
            { letter: "A", text: "Athens was the largest city in Greece." },
            { letter: "B", text: "Pericles was elected general many times." },
            { letter: "C", text: "Many Athenian juries were chosen by lot." },
            { letter: "D", text: "Women, slaves and foreigners could not vote." }
          ],
          correct: "D"
        },
        {
          id: "war-cause",
          sol: "WHI.4.d",
          stem: "Which was a major cause of the Peloponnesian War?",
          choices: [
            { letter: "A", text: "Persia invaded Greece for a second time." },
            { letter: "B", text: "Sparta feared the growing power of Athens." },
            { letter: "C", text: "Alexander the Great attacked Athens." },
            { letter: "D", text: "Rome tried to seize the Greek colonies." }
          ],
          correct: "B"
        },
        {
          id: "war-effect",
          sol: "WHI.4.d",
          stem: "What was one long-term consequence of the Peloponnesian War?",
          choices: [
            { letter: "A", text: "Athens became the ruler of all of Greece." },
            { letter: "B", text: "Persia lost all of its western lands." },
            { letter: "C", text: "A weakened Greece fell to Macedonia." },
            { letter: "D", text: "Sparta adopted a democratic government." }
          ],
          correct: "C"
        },
        {
          id: "parthenon",
          sol: "WHI.4.f",
          stem: "Under Pericles, Athens built a temple to Athena that is still a model for public buildings. Which building is it?",
          choices: [
            { letter: "A", text: "the Colosseum" },
            { letter: "B", text: "the Pantheon" },
            { letter: "C", text: "the Hagia Sophia" },
            { letter: "D", text: "the Parthenon" }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "class-alexander",
      family: "CLASS",
      title: "Alexander's road east",
      kind: "Persia, Greece & Rome · WHI.4",
      blurb: "How Macedonia conquered Greece and how Alexander spread a blended Hellenistic culture.",
      level: 2,
      passage: "<p>" + N(1) + "After the long Peloponnesian War, the Greek city-states were too weak and divided to resist King Philip II of <strong>Macedonia</strong>, who defeated Athens and Thebes in 338 B.C. " + N(2) + "His son Alexander, once a student of Aristotle, became king two years later. " + N(3) + "In just over a decade, Alexander's army defeated the Persian Empire and marched through Egypt and Mesopotamia as far as the Indus River. " + N(4) + "He founded many cities, several named <strong>Alexandria</strong>; the greatest, in Egypt, became a center of trade and learning with a famous library. " + N(5) + "When Alexander died in 323 B.C. at age 32, his generals split the empire into separate kingdoms. " + N(6) + "Across these lands, Greek culture blended with Persian, Egyptian and Indian traditions, a mix historians call <strong>Hellenistic</strong> culture. " + N(7) + "A common form of Greek became the language of trade from Egypt to Central Asia.</p>",
      claims: [
        {
          id: "hellenistic",
          sol: "WHI.4.e",
          stem: "In sentence 6, Hellenistic culture is best described as —",
          choices: [
            { letter: "A", text: "the culture of Athens before Alexander" },
            { letter: "B", text: "Greek culture mixed with Eastern ways" },
            { letter: "C", text: "a Persian religion spread by the army" },
            { letter: "D", text: "the Roman version of Greek art" }
          ],
          correct: "B"
        },
        {
          id: "philip",
          sol: "WHI.4.d",
          stem: "According to sentence 1, why was Philip II able to conquer Greece?",
          choices: [
            { letter: "A", text: "Greece had no armies or navies of its own." },
            { letter: "B", text: "Persia handed control of Greece to Macedonia." },
            { letter: "C", text: "Rome helped Philip invade Greece from the west." },
            { letter: "D", text: "War had left the city-states weak and divided." }
          ],
          correct: "D"
        },
        {
          id: "spread",
          sol: "WHI.4.e",
          stem: "Which statement best explains how Alexander's conquests spread Greek culture?",
          choices: [
            { letter: "A", text: "He founded Greek-style cities across his empire." },
            { letter: "B", text: "He forced all of his subjects to worship Athena." },
            { letter: "C", text: "He closed the great library at Alexandria." },
            { letter: "D", text: "He banned Persian customs at his court." }
          ],
          correct: "A"
        },
        {
          id: "euclid",
          sol: "WHI.4.f",
          stem: "Scholars in Hellenistic Alexandria made many discoveries. Which thinker there wrote a geometry textbook used for more than 2,000 years?",
          choices: [
            { letter: "A", text: "Homer" },
            { letter: "B", text: "Herodotus" },
            { letter: "C", text: "Euclid" },
            { letter: "D", text: "Socrates" }
          ],
          correct: "C"
        },
        {
          id: "after",
          sol: "WHI.4.e",
          stem: "What happened to Alexander's empire after his death?",
          choices: [
            { letter: "A", text: "Rome took over all of it at once." },
            { letter: "B", text: "His generals divided it into kingdoms." },
            { letter: "C", text: "It stayed united under his son for centuries." },
            { letter: "D", text: "Persia regained all of its lost lands." }
          ],
          correct: "B"
        },
        {
          id: "extent",
          sol: "WHI.4.e",
          stem: "Which geographic conclusion is best supported by the reading?",
          choices: [
            { letter: "A", text: "His empire stayed within the Greek peninsula." },
            { letter: "B", text: "His army never crossed a major river." },
            { letter: "C", text: "His empire was limited to the Black Sea coast." },
            { letter: "D", text: "His empire reached into Europe, Africa and Asia." }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "class-christianity",
      family: "CLASS",
      title: "From Judea to the empire",
      kind: "Persia, Greece & Rome · WHI.5",
      blurb: "A timeline of early Christianity, from persecution to official religion to the split of 1054.",
      level: 2,
      passage: "<ul><li><strong>c. A.D. 30</strong> Jesus of Nazareth, a Jewish teacher in the Roman province of Judea, is crucified under the Roman governor Pontius Pilate.</li><li><strong>A.D. 40s–50s</strong> The apostle <strong>Paul</strong> travels around the eastern Mediterranean, founding churches and writing letters later included in the New Testament.</li><li><strong>A.D. 64</strong> After a great fire in Rome, Emperor Nero blames and persecutes Christians.</li><li><strong>A.D. 313</strong> The Edict of Milan, issued under Constantine, grants tolerance to Christians.</li><li><strong>A.D. 380</strong> Theodosius makes Christianity the official religion of the empire.</li><li><strong>1054</strong> The church splits into the Roman Catholic Church in the West and the Eastern Orthodox Church in the East.</li></ul><p>" + N(1) + "Christians believe Jesus is the Son of God and that his death and resurrection offer salvation. " + N(2) + "Like Judaism, Christianity is <strong>monotheistic</strong>.</p>",
      claims: [
        {
          id: "first",
          sol: "WHI.5.d",
          stem: "Which event in early Christian history happened FIRST?",
          choices: [
            { letter: "A", text: "the Edict of Milan" },
            { letter: "B", text: "Nero's persecution of Christians" },
            { letter: "C", text: "Paul's journeys and letters" },
            { letter: "D", text: "Theodosius's decree on religion" }
          ],
          correct: "C"
        },
        {
          id: "trend",
          sol: "WHI.5.d",
          stem: "Which conclusion about early Christianity is best supported by the timeline?",
          choices: [
            { letter: "A", text: "Christianity went from persecuted to official in about 300 years." },
            { letter: "B", text: "Christianity began in Rome and only later spread to Judea." },
            { letter: "C", text: "Roman emperors always supported the Christian church." },
            { letter: "D", text: "Christianity was legal in the empire from its very beginning." }
          ],
          correct: "A"
        },
        {
          id: "paul",
          sol: "WHI.5.d",
          stem: "How did Paul's travels and letters help Christianity spread?",
          choices: [
            { letter: "A", text: "They convinced Nero to end the persecution." },
            { letter: "B", text: "They moved the church's center to Persia." },
            { letter: "C", text: "They led directly to the Edict of Milan." },
            { letter: "D", text: "They spread the faith to many cities." }
          ],
          correct: "D"
        },
        {
          id: "mono",
          sol: "WHI.5.d",
          stem: "In sentence 2, the word monotheistic means —",
          choices: [
            { letter: "A", text: "believing in many gods" },
            { letter: "B", text: "believing in one God" },
            { letter: "C", text: "ruled by a council of priests" },
            { letter: "D", text: "worshiping the emperor" }
          ],
          correct: "B"
        },
        {
          id: "roads",
          sol: "WHI.5.e",
          stem: "Which features of the Roman world helped Christianity spread? Select TWO.",
          choices: [
            { letter: "A", text: "Roman roads and safe sea lanes during the Pax Romana" },
            { letter: "B", text: "a shared Greek language in the eastern provinces" },
            { letter: "C", text: "a law of A.D. 30 that required citizens to convert" },
            { letter: "D", text: "the closing of Mediterranean ports to travelers" }
          ],
          correct: ["A", "B"]
        },
        {
          id: "split",
          sol: "WHI.5.c",
          stem: "After the split of 1054, which was a difference between the two churches?",
          choices: [
            { letter: "A", text: "The eastern church rejected the Bible." },
            { letter: "B", text: "The western church held services in Greek." },
            { letter: "C", text: "The pope led the West; patriarchs led the East." },
            { letter: "D", text: "The western church was based in Constantinople." }
          ],
          correct: "C"
        }
      ]
    },
    /* ---------- long ---------- */
    {
      id: "class-greek-legacy",
      family: "CLASS",
      title: "Greek ideas we still use",
      kind: "Persia, Greece & Rome · WHI.4",
      blurb: "A table of Greek philosophy, mathematics, science, architecture and drama, and their influence today.",
      level: 2,
      passage: "<p>" + N(1) + "Many ideas from ancient Greece are still part of daily life in the United States and around the world. " + N(2) + "The table lists some Greek thinkers and builders and where their influence shows today.</p><table><tr><th>Field</th><th>Greek contribution</th><th>Influence today</th></tr><tr><td>Philosophy</td><td>Socrates questioned his students to test their ideas; Plato wrote the Republic; Aristotle studied logic and politics</td><td>the <strong>Socratic method</strong> used in classrooms and law schools</td></tr><tr><td>Mathematics</td><td>Pythagoras' theorem on right triangles; Euclid's geometry</td><td>high school geometry courses</td></tr><tr><td>Science and medicine</td><td>Hippocrates taught that disease has natural causes; Archimedes studied levers and floating objects</td><td>the Hippocratic Oath taken by doctors</td></tr><tr><td>Architecture</td><td>the Parthenon, with columns, a triangular <strong>pediment</strong> and careful proportions</td><td>columns on courthouses, banks and the U.S. Supreme Court Building</td></tr><tr><td>Drama and history</td><td>tragedies by Sophocles; histories by Herodotus and Thucydides</td><td>modern theater, and history writing based on evidence</td></tr></table><p>" + N(3) + "In 399 B.C., a jury of Athenian citizens sentenced Socrates to death; his student Plato records him saying that \"the unexamined life is not worth living.\"</p>",
      claims: [
        {
          id: "socratic",
          sol: "WHI.4.f",
          stem: "Based on the table, the Socratic method most likely involves —",
          choices: [
            { letter: "A", text: "teaching by asking questions that test ideas" },
            { letter: "B", text: "memorizing the laws of the city word for word" },
            { letter: "C", text: "learning through daily military drills" },
            { letter: "D", text: "copying the works of earlier writers by hand" }
          ],
          correct: "A"
        },
        {
          id: "columns",
          sol: "WHI.4.f",
          stem: "Which modern building feature most clearly shows Greek influence on architecture?",
          choices: [
            { letter: "A", text: "a skyscraper framed in steel and glass" },
            { letter: "B", text: "an onion-shaped dome on a church" },
            { letter: "C", text: "a pagoda with curving tiled roofs" },
            { letter: "D", text: "columns under a triangular pediment" }
          ],
          correct: "D"
        },
        {
          id: "evidence",
          sol: "WHI.4.f",
          stem: "A student claims that Greek thinkers looked for natural explanations of the world. Which evidence from the table best supports this claim?",
          choices: [
            { letter: "A", text: "Sophocles wrote tragedies for the stage." },
            { letter: "B", text: "Hippocrates said disease has natural causes." },
            { letter: "C", text: "The Parthenon had careful proportions." },
            { letter: "D", text: "Plato wrote a famous book called the Republic." }
          ],
          correct: "B"
        },
        {
          id: "alexandria",
          sol: "WHI.4.e",
          stem: "Euclid taught in a city in Egypt that Alexander the Great founded and that became the center of Hellenistic learning. Which city was it?",
          choices: [
            { letter: "A", text: "Athens" },
            { letter: "B", text: "Sparta" },
            { letter: "C", text: "Alexandria" },
            { letter: "D", text: "Persepolis" }
          ],
          correct: "C"
        },
        {
          id: "jury",
          sol: "WHI.4.c",
          stem: "Sentence 3 says a jury of citizens tried Socrates. This shows that in Athenian democracy —",
          choices: [
            { letter: "A", text: "citizens themselves served on large juries" },
            { letter: "B", text: "a king judged all of the criminal cases" },
            { letter: "C", text: "only priests were allowed to hear a trial" },
            { letter: "D", text: "Sparta's council decided Athens' cases" }
          ],
          correct: "A"
        },
        {
          id: "pediment",
          sol: "WHI.4.f",
          stem: "In the table, a pediment is —",
          choices: [
            { letter: "A", text: "a stone column with a carved top piece" },
            { letter: "B", text: "a stone seat in an outdoor theater" },
            { letter: "C", text: "a speech given at a public funeral" },
            { letter: "D", text: "the triangle above a temple's columns" }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "class-republic-empire",
      family: "CLASS",
      title: "Republic or empire?",
      kind: "Persia, Greece & Rome · WHI.5",
      blurb: "Two short accounts of how Rome was governed before and after Augustus.",
      level: 3,
      passage: "<p><strong>Source 1: The Republic.</strong> " + N(1) + "After expelling their last king in 509 B.C., Romans created a <strong>republic</strong>, in which citizens elected officials to govern for them. " + N(2) + "Two consuls, elected each year, led the government and the army; the Senate, made up mostly of patricians, advised them and controlled spending. " + N(3) + "After long struggles, plebeians won their own assembly and officials called tribunes, who could <strong>veto</strong> actions that harmed plebeians. " + N(4) + "In an emergency, a dictator could rule for up to six months.</p><p><strong>Source 2: The Empire.</strong> " + N(5) + "After years of civil war, Julius Caesar was named dictator for life and was assassinated in 44 B.C. " + N(6) + "His adopted heir Octavian defeated his rivals, and in 27 B.C. the Senate gave him the title Augustus. " + N(7) + "The Senate still met, but real power belonged to the emperor, who commanded the army and chose his successor. " + N(8) + "Augustus began the <strong>Pax Romana</strong>, about 200 years of relative peace and prosperity. " + N(9) + "Romans kept worshiping their many gods, and emperors were often honored as gods after death.</p>",
      claims: [
        {
          id: "compare",
          sol: "WHI.5.b",
          stem: "Which statement best compares the Republic and the Empire?",
          choices: [
            { letter: "A", text: "In the Republic a king ruled; in the Empire the Senate alone held all of the power." },
            { letter: "B", text: "Both governments gave plebeians full control of the army and treasury." },
            { letter: "C", text: "In the Republic elected officials shared power; in the Empire one ruler held it." },
            { letter: "D", text: "In both, consuls were chosen by lot and served for the rest of their lives." }
          ],
          correct: "C"
        },
        {
          id: "veto",
          sol: "WHI.5.b",
          stem: "In sentence 3, the word veto most nearly means —",
          choices: [
            { letter: "A", text: "to block or reject" },
            { letter: "B", text: "to elect to office" },
            { letter: "C", text: "to collect a tax" },
            { letter: "D", text: "to declare war" }
          ],
          correct: "A"
        },
        {
          id: "last",
          sol: "WHI.5.b",
          stem: "Which event in Roman history happened LAST?",
          choices: [
            { letter: "A", text: "Romans expel their last king." },
            { letter: "B", text: "Plebeians win the right to elect tribunes." },
            { letter: "C", text: "Julius Caesar is named dictator for life." },
            { letter: "D", text: "Octavian receives the title Augustus." }
          ],
          correct: "D"
        },
        {
          id: "threat",
          sol: "WHI.5.a",
          stem: "Which factor most threatened the unity of the Roman Republic in the century before Augustus?",
          choices: [
            { letter: "A", text: "a lack of farmland on the Italian peninsula" },
            { letter: "B", text: "civil wars between generals and their armies" },
            { letter: "C", text: "the conquest of Rome by the Persians" },
            { letter: "D", text: "the split between the eastern and western churches" }
          ],
          correct: "B"
        },
        {
          id: "borrowed",
          sol: "WHI.5.e",
          stem: "The founders of the United States borrowed which idea from the Roman Republic described in Source 1?",
          choices: [
            { letter: "A", text: "a king who inherits the throne for life" },
            { letter: "B", text: "an emperor who chooses his own successor" },
            { letter: "C", text: "citizens electing leaders to govern them" },
            { letter: "D", text: "priests who rule in the name of the gods" }
          ],
          correct: "C"
        },
        {
          id: "religion",
          sol: "WHI.5.b",
          stem: "Based on Source 2, which TWO statements describe religion in the early Roman Empire? Select TWO.",
          choices: [
            { letter: "A", text: "Christianity was the official religion from the start." },
            { letter: "B", text: "Romans worshiped many gods." },
            { letter: "C", text: "Every religion but Judaism was banned." },
            { letter: "D", text: "Some emperors were honored as gods." }
          ],
          correct: ["B", "D"]
        }
      ]
    },
    {
      id: "class-rome-decline",
      family: "CLASS",
      title: "Fall and legacy of Rome",
      kind: "Persia, Greece & Rome · WHI.5",
      blurb: "Why the western empire fell, why the East lasted, and what Rome left behind.",
      level: 3,
      passage: "<p>" + N(1) + "By the A.D. 200s, the Roman Empire stretched from Britain to Egypt, and its long borders along the Rhine and Danube rivers were hard to defend. " + N(2) + "Germanic peoples pressed across these frontiers, and the army grew so costly that emperors raised taxes and minted coins with less silver, causing <strong>inflation</strong>. " + N(3) + "Generals fought one another for the throne, and more than twenty emperors ruled in about fifty years. " + N(4) + "Diocletian divided the empire into eastern and western parts to make it easier to govern, and Constantine later built a new capital at Constantinople. " + N(5) + "The richer eastern half survived, but in A.D. 476 a Germanic leader removed the last emperor in the West.</p><p>" + N(6) + "Rome's influence outlasted its fall. " + N(7) + "Its engineers built roads, <strong>aqueducts</strong> that carried water to cities, arches, domes and concrete buildings such as the Pantheon. " + N(8) + "Roman law held that an accused person is innocent until proven guilty, and Latin grew into Italian, French, Spanish, Portuguese and Romanian. " + N(9) + "Yet Roman wealth also rested on slavery; enslaved people, many of them war captives, worked in mines, on farms and in households.</p>",
      claims: [
        {
          id: "threats",
          sol: "WHI.5.a",
          stem: "Which TWO factors described in the reading threatened the unity of the Roman Empire? Select TWO.",
          choices: [
            { letter: "A", text: "invasions across long frontiers" },
            { letter: "B", text: "a shortage of paved roads" },
            { letter: "C", text: "inflation from coins with less silver" },
            { letter: "D", text: "the spread of the Latin language" }
          ],
          correct: ["A", "C"]
        },
        {
          id: "aqueduct",
          sol: "WHI.5.e",
          stem: "In sentence 7, aqueducts are —",
          choices: [
            { letter: "A", text: "stone roads built for marching armies" },
            { letter: "B", text: "structures that carried water to cities" },
            { letter: "C", text: "arenas used for public games" },
            { letter: "D", text: "walls built along the frontier" }
          ],
          correct: "B"
        },
        {
          id: "east",
          sol: "WHI.5.c",
          stem: "According to the reading, why did the eastern half of the empire survive after the West fell?",
          choices: [
            { letter: "A", text: "It had no long borders to defend." },
            { letter: "B", text: "Germanic kings had already ruled it." },
            { letter: "C", text: "It had given up Roman law." },
            { letter: "D", text: "It was richer and had a new capital." }
          ],
          correct: "D"
        },
        {
          id: "law",
          sol: "WHI.5.e",
          stem: "Which modern legal idea comes most directly from Roman law?",
          choices: [
            { letter: "A", text: "Accused people are innocent until proven guilty." },
            { letter: "B", text: "Voters elect a new president every four years." },
            { letter: "C", text: "A king rules by the will of God and no one else." },
            { letter: "D", text: "All people must belong to one church." }
          ],
          correct: "A"
        },
        {
          id: "inflation",
          sol: "WHI.5.a",
          stem: "According to sentence 2, what caused inflation in the empire?",
          choices: [
            { letter: "A", text: "the building of new aqueducts" },
            { letter: "B", text: "the move to a new capital city" },
            { letter: "C", text: "minting coins with less silver" },
            { letter: "D", text: "the spread of the Latin language" }
          ],
          correct: "C"
        },
        {
          id: "slavery",
          sol: "WHI.5.e",
          stem: "Which conclusion about slavery in Rome is supported by sentence 9?",
          choices: [
            { letter: "A", text: "Slavery ended when the Republic began." },
            { letter: "B", text: "Many enslaved people were war captives." },
            { letter: "C", text: "Only the emperor's household had slaves." },
            { letter: "D", text: "Enslaved people were citizens from birth." }
          ],
          correct: "B"
        }
      ]
    }
  ];

  for (var i = 0; i < PACKS.length; i++) P.push(PACKS[i]);
})(typeof window !== "undefined" ? window : global);
