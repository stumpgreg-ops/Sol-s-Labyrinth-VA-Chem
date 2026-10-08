/* SOL Lab — Virginia & U.S. Government · Foundations of Government (GOVT.1–2). Original text only. */
(function (global) {
  var P = global.HEIST_PACKS;
  if (!P || !P.push) return;
  var N = function (i) { return '<span class="n">(' + i + ')</span> '; };   // numbered sentence

  var PACKS = [
    {
      id: "foun-athens-rome",
      family: "FOUN",
      title: "Athens and Rome side by side",
      kind: "Foundations of Government · GOVT.1–2",
      blurb: "A table compares the ancient democracy and the ancient republic.",
      level: 1,
      passage: "<p>" + N(1) + "The table compares two ancient governments that influenced the framers.</p><table><tr><th></th><th>Athens (500s–300s B.C.)</th><th>Roman Republic (509–27 B.C.)</th></tr><tr><td>Type</td><td><strong>direct democracy</strong></td><td><strong>republic</strong></td></tr><tr><td>Who makes laws</td><td>citizens voting in the Assembly</td><td>elected officials, the Senate and assemblies</td></tr><tr><td>Who took part</td><td>adult male citizens only</td><td>citizens; wealthy families held most power</td></tr></table>",
      claims: [
        {
          id: "direct",
          sol: "GOVT.1.a",
          stem: "According to the table, how were laws made in Athens?",
          choices: [
            { letter: "A", text: "Elected senators wrote the laws on behalf of the citizens." },
            { letter: "B", text: "A single king issued laws for the whole city." },
            { letter: "C", text: "Citizens voted on laws themselves in the Assembly." },
            { letter: "D", text: "Judges created the laws when deciding cases." }
          ],
          correct: "C"
        },
        {
          id: "rep",
          sol: "GOVT.1.a",
          stem: "Which feature of the American government comes most directly from the Roman Republic?",
          choices: [
            { letter: "A", text: "electing representatives to make laws" },
            { letter: "B", text: "letting every citizen vote on every law" },
            { letter: "C", text: "choosing public officials by lottery" },
            { letter: "D", text: "allowing a hereditary king to rule over the people" }
          ],
          correct: "A"
        },
        {
          id: "limit",
          sol: "GOVT.1.a",
          stem: "Which conclusion about Athenian democracy is best supported by the table?",
          choices: [
            { letter: "A", text: "Women held most of the seats in the Athenian Assembly." },
            { letter: "B", text: "Athens was ruled by a small group of elected senators." },
            { letter: "C", text: "Every resident of Athens voted on every law." },
            { letter: "D", text: "Many people who lived in Athens could not take part." }
          ],
          correct: "D"
        },
        {
          id: "vocab",
          sol: "GOVT.2.b",
          stem: "In the table, the term republic most nearly means a government in which —",
          choices: [
            { letter: "A", text: "citizens choose representatives to govern for them" },
            { letter: "B", text: "all citizens meet in one place to vote on each law directly" },
            { letter: "C", text: "one ruler holds power that is passed down in a family" },
            { letter: "D", text: "religious leaders make and enforce the laws" }
          ],
          correct: "A"
        },
        {
          id: "size",
          sol: "GOVT.2.b",
          stem: "Why did the framers of the U.S. Constitution choose a representative system instead of a direct democracy like Athens?",
          choices: [
            { letter: "A", text: "Athens had shown that a democracy could not last longer than a single year." },
            { letter: "B", text: "The nation was too large for all citizens to meet and vote on every law." },
            { letter: "C", text: "The colonists had no experience with elected assemblies of any kind." },
            { letter: "D", text: "The Roman Republic had allowed every adult to vote on every law." }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "foun-magna-carta",
      family: "FOUN",
      title: "The law of the land, 1215",
      kind: "Foundations of Government · GOVT.1",
      blurb: "One clause of Magna Carta puts the king under the law.",
      level: 1,
      passage: "<blockquote>" + N(1) + "No free man shall be seized or imprisoned, or stripped of his rights or possessions, or outlawed or exiled, or deprived of his standing in any other way, nor will we proceed with force against him, or send others to do so, except by the lawful judgement of his equals or by the <strong>law of the land</strong>.</blockquote><p class=\"src\">— Magna Carta, clause 39, accepted by King John, 1215 (translated)</p>",
      claims: [
        {
          id: "main",
          sol: "GOVT.1.b",
          stem: "What was the main importance of Magna Carta?",
          choices: [
            { letter: "A", text: "It limited the power of the king." },
            { letter: "B", text: "It created a democracy in England." },
            { letter: "C", text: "It gave the vote to all English people." },
            { letter: "D", text: "It ended the English monarchy forever." }
          ],
          correct: "A"
        },
        {
          id: "rule",
          sol: "GOVT.2.a",
          stem: "Which principle is best shown by the phrase \"by the law of the land\"?",
          choices: [
            { letter: "A", text: "majority rule" },
            { letter: "B", text: "federalism" },
            { letter: "C", text: "rule of law" },
            { letter: "D", text: "direct democracy" }
          ],
          correct: "C"
        },
        {
          id: "jury",
          sol: "GOVT.1.b",
          stem: "The phrase \"the lawful judgement of his equals\" is an early form of which American right?",
          choices: [
            { letter: "A", text: "freedom of the press" },
            { letter: "B", text: "trial by jury" },
            { letter: "C", text: "the right to vote" },
            { letter: "D", text: "freedom of religion" }
          ],
          correct: "B"
        },
        {
          id: "free",
          sol: "GOVT.2.c",
          stem: "The words \"No free man\" suggest that in 1215 these protections —",
          choices: [
            { letter: "A", text: "applied equally to every person in the world" },
            { letter: "B", text: "were meant only for the king and his family" },
            { letter: "C", text: "protected people from paying any taxes" },
            { letter: "D", text: "did not yet extend to everyone in England" }
          ],
          correct: "D"
        },
        {
          id: "legacy",
          sol: "GOVT.1.b",
          stem: "Which part of the U.S. Constitution most closely reflects this clause?",
          choices: [
            { letter: "A", text: "the due process protections of the Fifth Amendment" },
            { letter: "B", text: "the power of Congress to declare war on other nations" },
            { letter: "C", text: "the president's power to grant pardons" },
            { letter: "D", text: "the rule that each state has two senators" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "foun-rousseau-montesquieu",
      family: "FOUN",
      title: "Two French thinkers",
      kind: "Foundations of Government · GOVT.1–2",
      blurb: "Rousseau on the will of the people, Montesquieu on dividing power.",
      level: 1,
      passage: "<p>" + N(1) + "Jean-Jacques Rousseau's <em>The Social Contract</em> (1762) opens: \"Man is born free, and everywhere he is in chains.\" " + N(2) + "Rousseau argued that rightful government rests on the <strong>general will</strong> of the people. " + N(3) + "Earlier, the Baron de Montesquieu's <em>The Spirit of the Laws</em> (1748) argued that liberty is safest when lawmaking, executive and judging powers are held by separate bodies.</p>",
      claims: [
        {
          id: "rousseau",
          sol: "GOVT.1.b",
          stem: "Rousseau's idea that government must rest on the will of the people is closest to which principle?",
          choices: [
            { letter: "A", text: "popular sovereignty" },
            { letter: "B", text: "divine right of kings" },
            { letter: "C", text: "judicial review" },
            { letter: "D", text: "laissez-faire" }
          ],
          correct: "A"
        },
        {
          id: "montesquieu",
          sol: "GOVT.1.b",
          stem: "Montesquieu's idea in sentence 3 most influenced which feature of the U.S. Constitution?",
          choices: [
            { letter: "A", text: "separation of powers among three branches" },
            { letter: "B", text: "the protection of freedom of religion and speech" },
            { letter: "C", text: "the process for admitting new states" },
            { letter: "D", text: "the direct election of senators" }
          ],
          correct: "A"
        },
        {
          id: "vocab",
          sol: "GOVT.2.a",
          stem: "In sentence 2, the term general will most nearly means —",
          choices: [
            { letter: "A", text: "the private wishes of the most powerful leader in the land" },
            { letter: "B", text: "what the people as a whole want for the common good" },
            { letter: "C", text: "the orders of a general in time of war" },
            { letter: "D", text: "the laws that a church sets for its members" }
          ],
          correct: "B"
        },
        {
          id: "chains",
          sol: "GOVT.2.f",
          stem: "What did Rousseau most likely mean by \"everywhere he is in chains\"?",
          choices: [
            { letter: "A", text: "People are naturally wicked and must be kept under very strict control." },
            { letter: "B", text: "Enslaved people in Europe outnumbered free people at the time." },
            { letter: "C", text: "People are naturally free but are held down by unjust governments." },
            { letter: "D", text: "Governments should arrest anyone who questions the law." }
          ],
          correct: "C"
        },
        {
          id: "compare",
          sol: "GOVT.1.b",
          stem: "Which statement about both thinkers is accurate?",
          choices: [
            { letter: "A", text: "Both wrote in favor of absolute monarchy and the divine right of French kings." },
            { letter: "B", text: "Both were delegates to the Constitutional Convention." },
            { letter: "C", text: "Both lived after the U.S. Constitution was written." },
            { letter: "D", text: "Both were Enlightenment writers whose ideas shaped American government." }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "foun-hobbes-locke",
      family: "FOUN",
      title: "Hobbes and Locke",
      kind: "Foundations of Government · GOVT.1–2",
      blurb: "Two English philosophers imagine life before government — and reach different answers.",
      level: 2,
      passage: "<p><strong>Source 1</strong> " + N(1) + "Without government, Thomas Hobbes wrote, people would live in constant fear, and the life of man would be</p><blockquote>solitary, poor, nasty, brutish, and short.</blockquote><p class=\"src\">— Thomas Hobbes, <em>Leviathan</em>, 1651</p><p><strong>Source 2</strong></p><blockquote>Men being, as has been said, by nature all free, equal, and independent, no one can be put out of this estate, and subjected to the political power of another, without his own <strong>consent</strong>.</blockquote><p class=\"src\">— John Locke, <em>Second Treatise of Government</em>, 1689</p><p>" + N(2) + "Hobbes concluded that people should give their rights to a powerful ruler, while Locke held that government exists to protect natural rights.</p>",
      claims: [
        {
          id: "hobbes",
          sol: "GOVT.1.b",
          stem: "Hobbes's description of life without government was used to argue that —",
          choices: [
            { letter: "A", text: "people should overthrow any ruler they dislike" },
            { letter: "B", text: "government should be divided into three branches" },
            { letter: "C", text: "people need a strong ruler to keep order" },
            { letter: "D", text: "each person should vote directly on every law" }
          ],
          correct: "C"
        },
        {
          id: "consent",
          sol: "GOVT.2.a",
          stem: "Which principle is expressed in Source 2?",
          choices: [
            { letter: "A", text: "consent of the governed" },
            { letter: "B", text: "divine right of kings" },
            { letter: "C", text: "separation of church and state" },
            { letter: "D", text: "majority rule" }
          ],
          correct: "A"
        },
        {
          id: "vocab",
          sol: "GOVT.2.a",
          stem: "In Source 2, the word consent most nearly means —",
          choices: [
            { letter: "A", text: "punishment" },
            { letter: "B", text: "property" },
            { letter: "C", text: "ownership" },
            { letter: "D", text: "agreement" }
          ],
          correct: "D"
        },
        {
          id: "rights",
          sol: "GOVT.2.a",
          stem: "According to Locke, which rights belong to all people by nature?",
          choices: [
            { letter: "A", text: "life, liberty and property" },
            { letter: "B", text: "voting, jury duty and military service" },
            { letter: "C", text: "free education and health care" },
            { letter: "D", text: "titles, land grants and pensions" }
          ],
          correct: "A"
        },
        {
          id: "influence",
          sol: "GOVT.1.c",
          stem: "Which founding document drew most directly on Locke's ideas?",
          choices: [
            { letter: "A", text: "the Articles of Confederation's rule of one vote per state" },
            { letter: "B", text: "the Declaration of Independence" },
            { letter: "C", text: "the Northwest Ordinance's plan for new territories" },
            { letter: "D", text: "Washington's Farewell Address" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "foun-virginia-charters",
      family: "FOUN",
      title: "The Virginia Company's charters",
      kind: "Foundations of Government · GOVT.1–2",
      blurb: "A timeline from the first charter to the first elected assembly.",
      level: 2,
      passage: "<ul><li><strong>April 10, 1606</strong> " + N(1) + "King James I grants the first charter to the Virginia Company of London; colonists and their children are promised the same <strong>liberties</strong> as people born in England.</li><li><strong>1607</strong> " + N(2) + "Colonists found Jamestown.</li><li><strong>May 23, 1609</strong> " + N(3) + "The second charter moves control from a royal council to the Company and enlarges the colony.</li><li><strong>March 12, 1612</strong> " + N(4) + "The third charter lets the Company's members meet and decide its affairs.</li><li><strong>1619</strong> " + N(5) + "The General Assembly, with elected burgesses, meets at Jamestown, the first representative assembly in English America.</li></ul>",
      claims: [
        {
          id: "rights",
          sol: "GOVT.1.b",
          stem: "Why was the promise in the 1606 charter important to later colonists?",
          choices: [
            { letter: "A", text: "They used it to claim the rights of English citizens." },
            { letter: "B", text: "It allowed them to help elect the king of England." },
            { letter: "C", text: "It freed them from paying any taxes to anyone at all." },
            { letter: "D", text: "It made Virginia independent from England." }
          ],
          correct: "A"
        },
        {
          id: "first",
          sol: "GOVT.1.b",
          stem: "Which event on the timeline happened FIRST?",
          choices: [
            { letter: "A", text: "colonists found Jamestown" },
            { letter: "B", text: "the Company receives its first charter" },
            { letter: "C", text: "the Company takes control from a royal council" },
            { letter: "D", text: "elected burgesses meet at Jamestown" }
          ],
          correct: "B"
        },
        {
          id: "selfgov",
          sol: "GOVT.2.a",
          stem: "The meeting of the General Assembly in 1619 is an early example of —",
          choices: [
            { letter: "A", text: "rule by an absolute monarch" },
            { letter: "B", text: "direct democracy by all residents" },
            { letter: "C", text: "military rule over a colony" },
            { letter: "D", text: "representative self-government" }
          ],
          correct: "D"
        },
        {
          id: "vocab",
          sol: "GOVT.1.b",
          stem: "In sentence 1, the word liberties most nearly means —",
          choices: [
            { letter: "A", text: "rights and freedoms" },
            { letter: "B", text: "land and gold" },
            { letter: "C", text: "ships and supplies" },
            { letter: "D", text: "taxes and customs fees" }
          ],
          correct: "A"
        },
        {
          id: "trend",
          sol: "GOVT.2.b",
          stem: "Which conclusion is best supported by the timeline?",
          choices: [
            { letter: "A", text: "The king gained more and more direct control of Virginia over time." },
            { letter: "B", text: "Virginia was governed by elected officials from the start." },
            { letter: "C", text: "Decision-making moved closer to people involved in the colony." },
            { letter: "D", text: "The Company lost all its powers by 1612." }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "foun-systems-table",
      family: "FOUN",
      title: "Presidential or parliamentary?",
      kind: "Foundations of Government · GOVT.2",
      blurb: "A table compares how democracies choose and check their leaders.",
      level: 2,
      passage: "<table><tr><th>Feature</th><th>Presidential system</th><th>Parliamentary system</th></tr><tr><td>How the chief executive is chosen</td><td>elected separately from the legislature</td><td>the prime minister is chosen by the majority in the legislature</td></tr><tr><td>Relationship of branches</td><td>executive and legislature are separate</td><td>executive comes from the legislature</td></tr><tr><td>Removing the leader</td><td>fixed term; removal only by impeachment</td><td>can be removed by a vote of no confidence</td></tr><tr><td>Example</td><td>United States</td><td>United Kingdom</td></tr></table><p>" + N(1) + "Both differ from an <strong>autocracy</strong>, in which one person holds unlimited power.</p>",
      claims: [
        {
          id: "pm",
          sol: "GOVT.2.b",
          stem: "According to the table, how is the leader of a parliamentary government chosen?",
          choices: [
            { letter: "A", text: "by a national popular vote held every four years" },
            { letter: "B", text: "by the majority in the legislature" },
            { letter: "C", text: "by the highest court in the nation" },
            { letter: "D", text: "by inheritance within a royal family" }
          ],
          correct: "B"
        },
        {
          id: "us",
          sol: "GOVT.2.b",
          stem: "Which feature of the U.S. government shows that it is a presidential system?",
          choices: [
            { letter: "A", text: "The president is the leader of the majority in Congress." },
            { letter: "B", text: "Congress can remove the president by a vote of no confidence." },
            { letter: "C", text: "The president serves in the House of Representatives." },
            { letter: "D", text: "The president and Congress are elected separately." }
          ],
          correct: "D"
        },
        {
          id: "vocab",
          sol: "GOVT.2.b",
          stem: "In sentence 1, an autocracy is a government in which —",
          choices: [
            { letter: "A", text: "citizens vote directly on all laws" },
            { letter: "B", text: "power is divided among the states" },
            { letter: "C", text: "one ruler holds unlimited power" },
            { letter: "D", text: "elected representatives make the laws" }
          ],
          correct: "C"
        },
        {
          id: "compare",
          sol: "GOVT.2.b",
          stem: "Which conclusion is best supported by the table?",
          choices: [
            { letter: "A", text: "A prime minister can lose office sooner than a president." },
            { letter: "B", text: "A president can dissolve the legislature at any time he or she chooses." },
            { letter: "C", text: "Parliamentary systems do not hold elections." },
            { letter: "D", text: "Presidential systems have no legislature." }
          ],
          correct: "A"
        },
        {
          id: "minority",
          sol: "GOVT.2.d",
          stem: "In both systems, the majority party governs. Which practice best protects the rights of those who lose an election?",
          choices: [
            { letter: "A", text: "a rule that the winning party may close newspapers that oppose it" },
            { letter: "B", text: "a law that only the majority party may hold public meetings" },
            { letter: "C", text: "a written constitution that limits what any majority may do" },
            { letter: "D", text: "a ban on forming new parties after an election" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "foun-declaration",
      family: "FOUN",
      title: "Self-evident truths",
      kind: "Foundations of Government · GOVT.1–2",
      blurb: "The best-known sentence of the Declaration of Independence, phrase by phrase.",
      level: 2,
      passage: "<p>" + N(1) + "On July 4, 1776, the Second Continental Congress adopted the Declaration of Independence, drafted mainly by Thomas Jefferson of Virginia.</p><blockquote>We hold these truths to be self-evident, that all men are created equal, that they are endowed by their Creator with certain <strong>unalienable</strong> Rights, that among these are Life, Liberty and the pursuit of Happiness. — That to secure these rights, Governments are instituted among Men, deriving their just powers from the consent of the governed, — That whenever any Form of Government becomes destructive of these ends, it is the Right of the People to alter or to abolish it, and to institute new Government.</blockquote><p class=\"src\">— Declaration of Independence, 1776</p><p>" + N(2) + "The rest of the document lists the colonists' grievances against King George III.</p>",
      claims: [
        {
          id: "purpose",
          sol: "GOVT.1.c",
          stem: "According to the excerpt, the purpose of government is to —",
          choices: [
            { letter: "A", text: "expand the territory of the nation" },
            { letter: "B", text: "collect taxes for the king and Parliament" },
            { letter: "C", text: "secure the rights of the people" },
            { letter: "D", text: "establish an official church" }
          ],
          correct: "C"
        },
        {
          id: "vocab",
          sol: "GOVT.2.a",
          stem: "The word unalienable most nearly means —",
          choices: [
            { letter: "A", text: "cannot be taken away" },
            { letter: "B", text: "granted by the king" },
            { letter: "C", text: "shared with other nations" },
            { letter: "D", text: "written into law by Congress" }
          ],
          correct: "A"
        },
        {
          id: "consent",
          sol: "GOVT.2.a",
          stem: "The phrase \"deriving their just powers from the consent of the governed\" expresses the idea that —",
          choices: [
            { letter: "A", text: "government's authority comes from a monarch" },
            { letter: "B", text: "only those who own property may hold public office" },
            { letter: "C", text: "government's authority comes from the people" },
            { letter: "D", text: "laws must be approved by the courts" }
          ],
          correct: "C"
        },
        {
          id: "locke",
          sol: "GOVT.1.b",
          stem: "Which thinker's ideas are most clearly reflected in this excerpt?",
          choices: [
            { letter: "A", text: "Thomas Hobbes" },
            { letter: "B", text: "Niccolò Machiavelli" },
            { letter: "C", text: "King James I" },
            { letter: "D", text: "John Locke" }
          ],
          correct: "D"
        },
        {
          id: "equal",
          sol: "GOVT.2.c",
          stem: "The phrase \"all men are created equal\" was later used to support which goal?",
          choices: [
            { letter: "A", text: "a return to rule by the British king and Parliament" },
            { letter: "B", text: "equal treatment of all citizens under the law" },
            { letter: "C", text: "limits on the number of new states" },
            { letter: "D", text: "an end to elections for Congress" }
          ],
          correct: "B"
        },
        {
          id: "abolish",
          sol: "GOVT.1.c",
          stem: "Which conclusion is best supported by the last part of the excerpt?",
          choices: [
            { letter: "A", text: "The colonists believed they had no right to change their government." },
            { letter: "B", text: "Congress wanted King George III to gain more power." },
            { letter: "C", text: "Jefferson planned to restore the old colonial charters." },
            { letter: "D", text: "People may replace a government that destroys their rights." }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "foun-mason-rights",
      family: "FOUN",
      title: "Mason's Declaration of Rights",
      kind: "Foundations of Government · GOVT.1–2",
      blurb: "Three sections of Virginia's 1776 Declaration of Rights.",
      level: 2,
      passage: "<p>" + N(1) + "On June 12, 1776, Virginia's convention adopted the Virginia Declaration of Rights, written mainly by George Mason; Virginia's first constitution followed on June 29.</p><blockquote><p>Section 1. That all men are by nature equally free and independent, and have certain <strong>inherent</strong> rights . . . namely, the enjoyment of life and liberty, with the means of acquiring and possessing property, and pursuing and obtaining happiness and safety.</p><p>Section 2. That all power is vested in, and consequently derived from, the people; that magistrates are their trustees and servants, and at all times amenable to them.</p><p>Section 12. That the freedom of the press is one of the great bulwarks of liberty, and can never be restrained but by despotic governments.</p></blockquote><p class=\"src\">— Virginia Declaration of Rights, 1776</p>",
      claims: [
        {
          id: "sov",
          sol: "GOVT.2.a",
          stem: "Section 2 expresses which principle?",
          choices: [
            { letter: "A", text: "popular sovereignty" },
            { letter: "B", text: "judicial review" },
            { letter: "C", text: "federalism" },
            { letter: "D", text: "separation of church and state" }
          ],
          correct: "A"
        },
        {
          id: "vocab",
          sol: "GOVT.1.d",
          stem: "In Section 1, the word inherent most nearly means —",
          choices: [
            { letter: "A", text: "given by the General Assembly of Virginia" },
            { letter: "B", text: "earned through military service" },
            { letter: "C", text: "belonging to a person by nature" },
            { letter: "D", text: "passed down from a landowner" }
          ],
          correct: "C"
        },
        {
          id: "influence",
          sol: "GOVT.1.d",
          stem: "Mason's Declaration of Rights most directly influenced which later document?",
          choices: [
            { letter: "A", text: "the Articles of Confederation" },
            { letter: "B", text: "the Mayflower Compact" },
            { letter: "C", text: "the Emancipation Proclamation" },
            { letter: "D", text: "the U.S. Bill of Rights" }
          ],
          correct: "D"
        },
        {
          id: "press",
          sol: "GOVT.2.f",
          stem: "Section 12 suggests that a free press protects liberty mainly by —",
          choices: [
            { letter: "A", text: "deciding which laws are constitutional" },
            { letter: "B", text: "electing the members of the legislature" },
            { letter: "C", text: "allowing people to criticize government" },
            { letter: "D", text: "collecting taxes to pay for public schools" }
          ],
          correct: "C"
        },
        {
          id: "servants",
          sol: "GOVT.1.d",
          stem: "Calling officials \"trustees and servants\" of the people shows Mason believed that officials —",
          choices: [
            { letter: "A", text: "must answer to the people they govern" },
            { letter: "B", text: "should serve for life once they are elected" },
            { letter: "C", text: "hold power given to them by the king" },
            { letter: "D", text: "need not explain their decisions" }
          ],
          correct: "A"
        },
        {
          id: "jefferson",
          sol: "GOVT.1.c",
          stem: "Which document, adopted less than a month later, echoes the ideas in Section 1?",
          choices: [
            { letter: "A", text: "the Treaty of Paris that ended the war" },
            { letter: "B", text: "the Declaration of Independence" },
            { letter: "C", text: "the Virginia Plan for a new Congress" },
            { letter: "D", text: "the Monroe Doctrine on the Americas" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "foun-english-bill",
      family: "FOUN",
      title: "The English Bill of Rights, 1689",
      kind: "Foundations of Government · GOVT.1",
      blurb: "Parliament sets limits on the Crown after the Glorious Revolution.",
      level: 2,
      passage: "<p>" + N(1) + "After the <strong>Glorious Revolution</strong> of 1688, Parliament offered the throne to William and Mary, who accepted the English Bill of Rights in 1689. " + N(2) + "Among its provisions:</p><blockquote><p>That the pretended power of suspending of laws, or the execution of laws, by regal authority, without consent of Parliament, is illegal.</p><p>That it is the right of the subjects to petition the King, and all commitments and prosecutions for such petitioning are illegal.</p><p>That election of members of Parliament ought to be free.</p><p>That excessive bail ought not to be required, nor excessive fines imposed, nor cruel and unusual punishments inflicted.</p></blockquote><p class=\"src\">— English Bill of Rights, 1689 (spelling and punctuation modernized)</p><p>" + N(3) + "The act also declared it illegal for the Crown to raise money without a grant of Parliament or to keep a standing army in peacetime without Parliament's consent.</p>",
      claims: [
        {
          id: "limit",
          sol: "GOVT.1.b",
          stem: "The first provision in the excerpt shows that the English Bill of Rights —",
          choices: [
            { letter: "A", text: "gave the monarch the power to cancel any law at will" },
            { letter: "B", text: "placed the monarch under laws made by Parliament" },
            { letter: "C", text: "abolished Parliament and its elections" },
            { letter: "D", text: "made the monarch head of the courts" }
          ],
          correct: "B"
        },
        {
          id: "eighth",
          sol: "GOVT.1.d",
          stem: "Madison's Bill of Rights repeats almost the same words as the last provision in which amendment?",
          choices: [
            { letter: "A", text: "the First Amendment" },
            { letter: "B", text: "the Eighth Amendment" },
            { letter: "C", text: "the Tenth Amendment" },
            { letter: "D", text: "the Second Amendment" }
          ],
          correct: "B"
        },
        {
          id: "petition",
          sol: "GOVT.2.f",
          stem: "The right to petition in the excerpt later appeared in which American document?",
          choices: [
            { letter: "A", text: "the First Amendment" },
            { letter: "B", text: "the Articles of Confederation" },
            { letter: "C", text: "the Northwest Ordinance" },
            { letter: "D", text: "Article II of the Constitution" }
          ],
          correct: "A"
        },
        {
          id: "rule",
          sol: "GOVT.2.a",
          stem: "Which principle is best shown by declaring that even the king's acts can be \"illegal\"?",
          choices: [
            { letter: "A", text: "popular sovereignty" },
            { letter: "B", text: "federalism" },
            { letter: "C", text: "rule of law" },
            { letter: "D", text: "direct democracy" }
          ],
          correct: "C"
        },
        {
          id: "vocab",
          sol: "GOVT.1.b",
          stem: "The Glorious Revolution of 1688 is called \"glorious\" mainly because —",
          choices: [
            { letter: "A", text: "England won a great war against France and Spain" },
            { letter: "B", text: "the colonies won their independence" },
            { letter: "C", text: "power changed hands with little bloodshed" },
            { letter: "D", text: "the king gained absolute power" }
          ],
          correct: "C"
        },
        {
          id: "colonists",
          sol: "GOVT.1.b",
          stem: "Sentence 3 helps explain why colonists in the 1760s objected to —",
          choices: [
            { letter: "A", text: "laws passed by their own colonial assemblies" },
            { letter: "B", text: "the right to petition the king for help with grievances" },
            { letter: "C", text: "trials held before juries of their neighbors" },
            { letter: "D", text: "taxes and troops imposed without their consent" }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "foun-religious-freedom",
      family: "FOUN",
      title: "Virginia's Statute for Religious Freedom",
      kind: "Foundations of Government · GOVT.1–2",
      blurb: "From the Great Awakening to Jefferson's statute and the First Amendment.",
      level: 3,
      passage: "<p>" + N(1) + "In colonial Virginia, the Church of England was the <strong>established church</strong>, supported by taxes paid by everyone. " + N(2) + "The <strong>Great Awakening</strong> of the 1730s and 1740s, led by preachers such as George Whitefield and Jonathan Edwards, stressed each person's own faith and drew many colonists into Baptist and Presbyterian churches. " + N(3) + "These dissenters pressed Virginia to stop favoring one church. " + N(4) + "Thomas Jefferson drafted a bill for religious freedom in 1777. " + N(5) + "In 1784 and 1785, Patrick Henry backed a tax to support teachers of the Christian religion; James Madison answered with his <em>Memorial and Remonstrance</em>, and the tax failed. " + N(6) + "Madison then guided Jefferson's bill through the General Assembly, which passed it in January 1786:</p><blockquote>That no man shall be compelled to frequent or support any religious worship, place, or ministry whatsoever, nor shall be enforced, restrained, molested, or burthened in his body or goods, nor shall otherwise suffer on account of his religious opinions or belief; but that all men shall be free to profess, and by argument to maintain, their opinions in matters of religion.</blockquote><p class=\"src\">— Virginia Statute for Religious Freedom, 1786</p>",
      claims: [
        {
          id: "meaning",
          sol: "GOVT.1.d",
          stem: "According to the statute, Virginians could no longer be —",
          choices: [
            { letter: "A", text: "allowed to build new churches in their towns" },
            { letter: "B", text: "permitted to hold public office" },
            { letter: "C", text: "free to debate religious ideas" },
            { letter: "D", text: "forced to support a church" }
          ],
          correct: "D"
        },
        {
          id: "vocab",
          sol: "GOVT.1.d",
          stem: "In sentence 1, an established church is one that —",
          choices: [
            { letter: "A", text: "is officially supported by the government" },
            { letter: "B", text: "was founded within the last few years by new settlers" },
            { letter: "C", text: "has the largest building in a town" },
            { letter: "D", text: "refuses to accept new members" }
          ],
          correct: "A"
        },
        {
          id: "awakening",
          sol: "GOVT.1.b",
          stem: "How did the Great Awakening help lead to the statute?",
          choices: [
            { letter: "A", text: "It made the Church of England the only legal church in every colony." },
            { letter: "B", text: "It increased the number of colonists outside the official church." },
            { letter: "C", text: "It convinced Parliament to end all colonial taxes." },
            { letter: "D", text: "It led Virginia to elect ministers to the General Assembly." }
          ],
          correct: "B"
        },
        {
          id: "sequence",
          sol: "GOVT.1.d",
          stem: "Which event happened LAST?",
          choices: [
            { letter: "A", text: "Jefferson drafts the bill." },
            { letter: "B", text: "The General Assembly passes the statute." },
            { letter: "C", text: "Madison writes the Memorial and Remonstrance." },
            { letter: "D", text: "Henry proposes a tax for religious teachers." }
          ],
          correct: "B"
        },
        {
          id: "first",
          sol: "GOVT.2.f",
          stem: "The statute's ideas were later reflected in which part of the U.S. Constitution?",
          choices: [
            { letter: "A", text: "the Second Amendment's right to keep and bear arms" },
            { letter: "B", text: "the Fourth Amendment's warrant requirement" },
            { letter: "C", text: "the Tenth Amendment's reserved powers" },
            { letter: "D", text: "the religion clauses of the First Amendment" }
          ],
          correct: "D"
        },
        {
          id: "minority",
          sol: "GOVT.2.d",
          stem: "Select TWO statements that explain how the statute protected minority rights.",
          choices: [
            { letter: "A", text: "It shielded people of minority faiths from penalties for their beliefs." },
            { letter: "B", text: "It required all Virginians to join the largest church." },
            { letter: "C", text: "It kept a majority from taxing others to support its church." },
            { letter: "D", text: "It allowed the General Assembly to choose an official religion." }
          ],
          correct: ["A", "C"]
        }
      ]
    },
    {
      id: "foun-articles-constitution",
      family: "FOUN",
      title: "From the Articles to the Constitution",
      kind: "Foundations of Government · GOVT.1–2",
      blurb: "Why the first national government failed and how the convention compromised.",
      level: 3,
      passage: "<p>" + N(1) + "The <strong>Articles of Confederation</strong>, in force from 1781, created a \"firm league of friendship\" among sovereign states. " + N(2) + "Each state kept its sovereignty, freedom and independence. " + N(3) + "The table shows several weaknesses and how the 1787 Constitution answered them.</p><table><tr><th>Under the Articles</th><th>Under the Constitution</th></tr><tr><td>Congress could not tax; it could only ask the states for money</td><td>Congress may lay and collect taxes</td></tr><tr><td>No national executive or national courts</td><td>A president and a Supreme Court</td></tr><tr><td>Each state had one vote in Congress</td><td>House seats by population; two senators per state</td></tr><tr><td>Amendments needed all 13 states</td><td>Amendments need three-fourths of the states</td></tr></table><p>" + N(4) + "Shays's Rebellion in Massachusetts in 1786–1787 convinced many leaders that the national government was too weak. " + N(5) + "At the Constitutional Convention, the <strong>Great Compromise</strong> blended the Virginia Plan, which based representation on population, with the New Jersey Plan, which gave each state an equal vote. " + N(6) + "Delegates also agreed to the Three-Fifths Compromise, which counted three of every five enslaved people when dividing House seats and direct taxes. " + N(7) + "Enslaved people themselves had no voice in that decision.</p>",
      claims: [
        {
          id: "weak",
          sol: "GOVT.1.c",
          stem: "Which weakness of the Articles is shown in the first row of the table?",
          choices: [
            { letter: "A", text: "The president had far too much power over the states." },
            { letter: "B", text: "The national courts overruled the states." },
            { letter: "C", text: "Congress could not raise money on its own." },
            { letter: "D", text: "Large states controlled Congress." }
          ],
          correct: "C"
        },
        {
          id: "shays",
          sol: "GOVT.1.c",
          stem: "Shays's Rebellion led many Americans to support —",
          choices: [
            { letter: "A", text: "the return of British rule over the states" },
            { letter: "B", text: "a stronger national government" },
            { letter: "C", text: "the breakup of the Union" },
            { letter: "D", text: "the end of state governments" }
          ],
          correct: "B"
        },
        {
          id: "compromise",
          sol: "GOVT.2.e",
          stem: "The Great Compromise settled a conflict between —",
          choices: [
            { letter: "A", text: "Federalists and Anti-Federalists over a bill of rights" },
            { letter: "B", text: "large states and small states over representation" },
            { letter: "C", text: "farmers and merchants over tariffs" },
            { letter: "D", text: "Congress and the president over war powers" }
          ],
          correct: "B"
        },
        {
          id: "equal",
          sol: "GOVT.2.c",
          stem: "Which later amendment did the most to establish equality of all citizens under the law?",
          choices: [
            { letter: "A", text: "the Tenth Amendment, reserving powers to the states" },
            { letter: "B", text: "the Second Amendment, protecting the right to keep and bear arms" },
            { letter: "C", text: "the Twenty-second Amendment, limiting presidents to two terms" },
            { letter: "D", text: "the Fourteenth Amendment, guaranteeing equal protection of the laws" }
          ],
          correct: "D"
        },
        {
          id: "amend",
          sol: "GOVT.1.c",
          stem: "Why was the amendment rule under the Articles a weakness?",
          choices: [
            { letter: "A", text: "One state could block any change." },
            { letter: "B", text: "Congress could change it without the states." },
            { letter: "C", text: "The president could veto amendments." },
            { letter: "D", text: "No amendment had ever been proposed in Congress." }
          ],
          correct: "A"
        },
        {
          id: "necessity",
          sol: "GOVT.2.e",
          stem: "Which conclusion about the Convention is best supported by sentence 5?",
          choices: [
            { letter: "A", text: "Small states got everything they wanted from the large states." },
            { letter: "B", text: "Virginia's plan was adopted without changes." },
            { letter: "C", text: "Delegates refused to discuss representation." },
            { letter: "D", text: "Delegates had to give up some goals to reach agreement." }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "foun-madison-bill",
      family: "FOUN",
      title: "Madison and the Bill of Rights",
      kind: "Foundations of Government · GOVT.1–2",
      blurb: "How a promise in a Virginia election became the first ten amendments.",
      level: 3,
      passage: "<p>" + N(1) + "When the Constitution was signed in 1787, it had no bill of rights. " + N(2) + "George Mason of Virginia refused to sign it partly for that reason, and many <strong>Anti-Federalists</strong> feared that a strong national government could trample individual liberty. " + N(3) + "James Madison at first thought a list of rights was unnecessary, but to win ratification and calm these fears he promised to seek amendments.</p><ul><li><strong>June 1788</strong> " + N(4) + "Virginia ratifies the Constitution and recommends amendments.</li><li><strong>February 1789</strong> " + N(5) + "Madison defeats James Monroe for a seat in the House after pledging to support amendments.</li><li><strong>June 8, 1789</strong> " + N(6) + "Madison proposes amendments in the First Congress.</li><li><strong>September 1789</strong> " + N(7) + "Congress sends twelve amendments to the states.</li><li><strong>December 15, 1791</strong> " + N(8) + "Virginia's approval completes <strong>ratification</strong> of ten of them, the Bill of Rights.</li></ul><p>" + N(9) + "Madison drew heavily on Mason's Virginia Declaration of Rights and on amendments proposed by state conventions. " + N(10) + "The ten amendments protect freedoms such as religion, speech and the press, guarantee jury trials, and reserve to the states or the people the powers not delegated to the national government.</p>",
      claims: [
        {
          id: "why",
          sol: "GOVT.1.d",
          stem: "Why did Madison support adding a bill of rights?",
          choices: [
            { letter: "A", text: "to give the national government more power over the states" },
            { letter: "B", text: "because the Articles of Confederation required it" },
            { letter: "C", text: "because the Supreme Court ordered Congress to add one" },
            { letter: "D", text: "to answer Anti-Federalist fears and win support" }
          ],
          correct: "D"
        },
        {
          id: "seq",
          sol: "GOVT.1.d",
          stem: "Which event happened immediately BEFORE Madison proposed amendments in Congress?",
          choices: [
            { letter: "A", text: "Congress sent twelve amendments to the states." },
            { letter: "B", text: "Madison won a House seat against James Monroe." },
            { letter: "C", text: "Virginia completed ratification of the Bill of Rights." },
            { letter: "D", text: "Mason signed the Constitution in Philadelphia." }
          ],
          correct: "B"
        },
        {
          id: "vocab",
          sol: "GOVT.1.c",
          stem: "In sentence 8, the word ratification most nearly means —",
          choices: [
            { letter: "A", text: "public debate" },
            { letter: "B", text: "first rough draft" },
            { letter: "C", text: "final repeal" },
            { letter: "D", text: "formal approval" }
          ],
          correct: "D"
        },
        {
          id: "source",
          sol: "GOVT.1.d",
          stem: "According to sentence 9, which document was a major source for the Bill of Rights?",
          choices: [
            { letter: "A", text: "the Articles of Confederation and its league of states" },
            { letter: "B", text: "the Treaty of Paris of 1783" },
            { letter: "C", text: "the Virginia Declaration of Rights" },
            { letter: "D", text: "the Mayflower Compact" }
          ],
          correct: "C"
        },
        {
          id: "minority",
          sol: "GOVT.2.d",
          stem: "How does a bill of rights protect minority rights in a democracy?",
          choices: [
            { letter: "A", text: "It sets limits that a majority cannot override by ordinary law." },
            { letter: "B", text: "It lets the largest party decide which rights the minority may keep." },
            { letter: "C", text: "It requires every law to pass by a unanimous vote." },
            { letter: "D", text: "It gives small states more votes in the House." }
          ],
          correct: "A"
        },
        {
          id: "compromise",
          sol: "GOVT.2.e",
          stem: "Which conclusion is best supported by the passage?",
          choices: [
            { letter: "A", text: "The Bill of Rights helped bridge the divide over ratification." },
            { letter: "B", text: "Anti-Federalists wrote the Bill of Rights without any help from Federalists." },
            { letter: "C", text: "The Bill of Rights was added before the Constitution was ratified." },
            { letter: "D", text: "Madison opposed the Bill of Rights until the end of his career." }
          ],
          correct: "A"
        }
      ]
    }
  ];

  for (var i = 0; i < PACKS.length; i++) P.push(PACKS[i]);
})(typeof window !== "undefined" ? window : global);
