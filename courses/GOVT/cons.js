/* SOL Lab — Virginia & U.S. Government · The Constitution & American Values (GOVT.3–4). Original text only. */
(function (global) {
  var P = global.HEIST_PACKS;
  if (!P || !P.push) return;
  var N = function (i) { return '<span class="n">(' + i + ')</span> '; };   // numbered sentence

  var PACKS = [
    {
      id: "cons-preamble",
      family: "CONS",
      title: "We the People",
      kind: "The Constitution & American Values · GOVT.3–4",
      blurb: "One sentence names six purposes of the new government.",
      level: 1,
      passage: "<blockquote>" + N(1) + "We the People of the United States, in Order to form a more perfect Union, establish Justice, insure domestic <strong>Tranquility</strong>, provide for the common defence, promote the general Welfare, and secure the Blessings of Liberty to ourselves and our Posterity, do ordain and establish this Constitution for the United States of America.</blockquote><p class=\"src\">— Preamble to the Constitution of the United States, 1787</p>",
      claims: [
        {
          id: "defense",
          sol: "GOVT.3.b",
          stem: "Which phrase in the Preamble refers to protecting the nation from foreign attack?",
          choices: [
            { letter: "A", text: "insure domestic Tranquility" },
            { letter: "B", text: "secure the Blessings of Liberty" },
            { letter: "C", text: "provide for the common defence" },
            { letter: "D", text: "promote the general Welfare" }
          ],
          correct: "C"
        },
        {
          id: "people",
          sol: "GOVT.4.c",
          stem: "The opening words \"We the People\" show that the Constitution's authority comes from —",
          choices: [
            { letter: "A", text: "the governors of the thirteen states" },
            { letter: "B", text: "the British king and Parliament" },
            { letter: "C", text: "the Continental Army and its officers" },
            { letter: "D", text: "the citizens of the nation" }
          ],
          correct: "D"
        },
        {
          id: "vocab",
          sol: "GOVT.3.b",
          stem: "In the Preamble, the word Tranquility most nearly means —",
          choices: [
            { letter: "A", text: "wealth and trade" },
            { letter: "B", text: "peace and order" },
            { letter: "C", text: "speed and efficiency" },
            { letter: "D", text: "fame and glory" }
          ],
          correct: "B"
        },
        {
          id: "union",
          sol: "GOVT.3.b",
          stem: "The goal \"to form a more perfect Union\" was mainly a response to problems under —",
          choices: [
            { letter: "A", text: "the Declaration of Independence" },
            { letter: "B", text: "the English Bill of Rights" },
            { letter: "C", text: "the Virginia Company charters" },
            { letter: "D", text: "the Articles of Confederation" }
          ],
          correct: "D"
        },
        {
          id: "liberty",
          sol: "GOVT.3.b",
          stem: "Which purpose in the Preamble is most directly served by the Bill of Rights?",
          choices: [
            { letter: "A", text: "secure the Blessings of Liberty" },
            { letter: "B", text: "provide for the common defence" },
            { letter: "C", text: "insure domestic Tranquility" },
            { letter: "D", text: "in Order to form a more perfect Union" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "cons-mottos",
      family: "CONS",
      title: "Two national mottos",
      kind: "The Constitution & American Values · GOVT.4",
      blurb: "E Pluribus Unum and In God We Trust: where they came from and what they mean.",
      level: 1,
      passage: "<p>" + N(1) + "<strong>E Pluribus Unum</strong>, Latin for \"Out of many, one,\" appears on the Great Seal of the United States, adopted by Congress in 1782. " + N(2) + "It first described thirteen states joined as one nation; today it also describes people of many backgrounds forming one country. " + N(3) + "\"In God We Trust\" first appeared on a U.S. coin in 1864, during the Civil War. " + N(4) + "Congress made it the official national <strong>motto</strong> in 1956.</p>",
      claims: [
        {
          id: "meaning",
          sol: "GOVT.4.b",
          stem: "E Pluribus Unum expresses the idea that —",
          choices: [
            { letter: "A", text: "each state should become its own nation" },
            { letter: "B", text: "many states and peoples form one nation" },
            { letter: "C", text: "the nation should be ruled by one family" },
            { letter: "D", text: "the president rules over the state governors" }
          ],
          correct: "B"
        },
        {
          id: "when",
          sol: "GOVT.4.b",
          stem: "According to the passage, when did \"In God We Trust\" become the official national motto?",
          choices: [
            { letter: "A", text: "1956" },
            { letter: "B", text: "1782" },
            { letter: "C", text: "1864" },
            { letter: "D", text: "1776" }
          ],
          correct: "A"
        },
        {
          id: "vocab",
          sol: "GOVT.4.b",
          stem: "In sentence 4, the word motto most nearly means —",
          choices: [
            { letter: "A", text: "an oath that officials take in office" },
            { letter: "B", text: "a coin issued by the Treasury" },
            { letter: "C", text: "a phrase that states a guiding belief" },
            { letter: "D", text: "a design printed on the national flag" }
          ],
          correct: "C"
        },
        {
          id: "seq",
          sol: "GOVT.4.b",
          stem: "Which of these happened FIRST?",
          choices: [
            { letter: "A", text: "\"In God We Trust\" appears on a U.S. coin for the first time." },
            { letter: "B", text: "\"In God We Trust\" becomes the national motto." },
            { letter: "C", text: "The Civil War begins between North and South." },
            { letter: "D", text: "The Great Seal is adopted with E Pluribus Unum." }
          ],
          correct: "D"
        },
        {
          id: "unity",
          sol: "GOVT.4.d",
          stem: "Which idea is most closely connected to E Pluribus Unum?",
          choices: [
            { letter: "A", text: "a strict separation of the three branches" },
            { letter: "B", text: "national unity among diverse people" },
            { letter: "C", text: "lower taxes on trade between states" },
            { letter: "D", text: "limits on the number of presidential terms" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "cons-tenth",
      family: "CONS",
      title: "Powers reserved to the states",
      kind: "The Constitution & American Values · GOVT.3–4",
      blurb: "The Tenth Amendment and the line between national and state power.",
      level: 1,
      passage: "<p>" + N(1) + "The Tenth Amendment, ratified in 1791, states:</p><blockquote>The powers not delegated to the United States by the Constitution, nor prohibited by it to the States, are reserved to the States respectively, or to the people.</blockquote><p class=\"src\">— Tenth Amendment</p><p>" + N(2) + "Powers given to the national government are called <strong>delegated</strong> powers; powers kept by the states are called reserved powers.</p>",
      claims: [
        {
          id: "reserved",
          sol: "GOVT.3.d",
          stem: "Which power is reserved to the states?",
          choices: [
            { letter: "A", text: "coining money" },
            { letter: "B", text: "setting up public schools" },
            { letter: "C", text: "declaring war" },
            { letter: "D", text: "making treaties with other nations" }
          ],
          correct: "B"
        },
        {
          id: "vocab",
          sol: "GOVT.3.d",
          stem: "In sentence 2, delegated powers are powers that the Constitution —",
          choices: [
            { letter: "A", text: "grants to the national government" },
            { letter: "B", text: "keeps for the states and the people alone" },
            { letter: "C", text: "denies to every level of government" },
            { letter: "D", text: "shares only with foreign nations" }
          ],
          correct: "A"
        },
        {
          id: "purpose",
          sol: "GOVT.4.e",
          stem: "The main purpose of the Tenth Amendment is to —",
          choices: [
            { letter: "A", text: "allow Congress to make any law that it chooses to pass" },
            { letter: "B", text: "give the president direct power over all state governors" },
            { letter: "C", text: "end the power of the states to collect taxes" },
            { letter: "D", text: "limit the national government to the powers it is given" }
          ],
          correct: "D"
        },
        {
          id: "delegated",
          sol: "GOVT.3.d",
          stem: "Which power is delegated to the national government?",
          choices: [
            { letter: "A", text: "issuing driver's licenses" },
            { letter: "B", text: "creating city and county governments" },
            { letter: "C", text: "regulating trade between states" },
            { letter: "D", text: "setting rules for marriage licenses" }
          ],
          correct: "C"
        },
        {
          id: "federalism",
          sol: "GOVT.3.d",
          stem: "The division of power described in the passage is called —",
          choices: [
            { letter: "A", text: "checks and balances" },
            { letter: "B", text: "federalism" },
            { letter: "C", text: "judicial review" },
            { letter: "D", text: "popular sovereignty" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "cons-federalist-10",
      family: "CONS",
      title: "Federalist No. 10",
      kind: "The Constitution & American Values · GOVT.3–4",
      blurb: "Madison explains why a large republic guards against factions.",
      level: 2,
      passage: "<p>" + N(1) + "In 1787 and 1788, Alexander Hamilton, James Madison and John Jay published 85 essays, now called the <em>Federalist Papers</em>, urging New York to ratify the Constitution. " + N(2) + "In No. 10, Madison warned against <strong>factions</strong>, groups united by a passion or interest opposed to the rights of others or the good of the community. " + N(3) + "His answer was a large republic:</p><blockquote>Extend the sphere, and you take in a greater variety of parties and interests; you make it less probable that a majority of the whole will have a common motive to invade the rights of other citizens.</blockquote><p class=\"src\">— James Madison, Federalist No. 10, 1787</p>",
      claims: [
        {
          id: "purpose",
          sol: "GOVT.3.a",
          stem: "The main purpose of the Federalist Papers was to —",
          choices: [
            { letter: "A", text: "list the grievances against King George III" },
            { letter: "B", text: "persuade people to support ratification" },
            { letter: "C", text: "propose amendments to the Articles of Confederation" },
            { letter: "D", text: "call for a second constitutional convention" }
          ],
          correct: "B"
        },
        {
          id: "vocab",
          sol: "GOVT.3.a",
          stem: "In sentence 2, a faction is —",
          choices: [
            { letter: "A", text: "an official branch of the national government in Philadelphia" },
            { letter: "B", text: "a single vote cast in a state ratifying convention" },
            { letter: "C", text: "an essay published in a New York newspaper" },
            { letter: "D", text: "a group united against the rights or interests of others" }
          ],
          correct: "D"
        },
        {
          id: "large",
          sol: "GOVT.3.a",
          stem: "According to the excerpt, a large republic protects rights because —",
          choices: [
            { letter: "A", text: "a large army can stop any rebellion in the states at once" },
            { letter: "B", text: "every citizen can vote directly on each law" },
            { letter: "C", text: "it is harder for one faction to form a harmful majority" },
            { letter: "D", text: "a king can settle disputes between the states quickly" }
          ],
          correct: "C"
        },
        {
          id: "opponents",
          sol: "GOVT.3.a",
          stem: "Which group opposed the position argued in the Federalist Papers?",
          choices: [
            { letter: "A", text: "the Anti-Federalists" },
            { letter: "B", text: "the supporters of a stronger union" },
            { letter: "C", text: "the delegates who signed the Constitution" },
            { letter: "D", text: "the authors Hamilton, Madison and Jay" }
          ],
          correct: "A"
        },
        {
          id: "rights",
          sol: "GOVT.4.c",
          stem: "The excerpt shows that Madison was most concerned that a majority might —",
          choices: [
            { letter: "A", text: "refuse to pay any of the new national taxes" },
            { letter: "B", text: "violate the rights of other citizens" },
            { letter: "C", text: "elect too few members of Congress" },
            { letter: "D", text: "give too much power to the courts" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "cons-federalist-51",
      family: "CONS",
      title: "If men were angels",
      kind: "The Constitution & American Values · GOVT.3–4",
      blurb: "Federalist No. 51 on why a government must control itself.",
      level: 2,
      passage: "<p>" + N(1) + "In Federalist No. 51, Madison explained why the Constitution divides power:</p><blockquote>If men were angels, no government would be necessary. If angels were to govern men, neither external nor internal controls on government would be necessary. In <strong>framing</strong> a government which is to be administered by men over men, the great difficulty lies in this: you must first enable the government to control the governed; and in the next place oblige it to control itself. . . . Ambition must be made to counteract ambition.</blockquote><p class=\"src\">— James Madison, Federalist No. 51, 1788</p>",
      claims: [
        {
          id: "angels",
          sol: "GOVT.3.a",
          stem: "Madison's point in \"If men were angels\" is that —",
          choices: [
            { letter: "A", text: "only religious leaders should ever hold public office" },
            { letter: "B", text: "government is needed because people are not perfect" },
            { letter: "C", text: "government will soon become unnecessary" },
            { letter: "D", text: "people are good enough to live without any laws" }
          ],
          correct: "B"
        },
        {
          id: "control",
          sol: "GOVT.4.e",
          stem: "According to the excerpt, a well-designed government must both —",
          choices: [
            { letter: "A", text: "control the governed and control itself" },
            { letter: "B", text: "collect taxes and pay its soldiers on time" },
            { letter: "C", text: "make treaties and declare war on its own" },
            { letter: "D", text: "protect the states and abolish the courts" }
          ],
          correct: "A"
        },
        {
          id: "ambition",
          sol: "GOVT.3.e",
          stem: "\"Ambition must be made to counteract ambition\" describes which principle?",
          choices: [
            { letter: "A", text: "popular sovereignty" },
            { letter: "B", text: "federalism" },
            { letter: "C", text: "majority rule" },
            { letter: "D", text: "checks and balances" }
          ],
          correct: "D"
        },
        {
          id: "example",
          sol: "GOVT.3.e",
          stem: "Which is an example of ambition counteracting ambition?",
          choices: [
            { letter: "A", text: "A state sets the opening hours of its public schools each fall." },
            { letter: "B", text: "Citizens vote for members of a city council in May." },
            { letter: "C", text: "The Senate rejects a president's nominee for a federal court." },
            { letter: "D", text: "A governor gives a speech to open the legislative session." }
          ],
          correct: "C"
        },
        {
          id: "vocab",
          sol: "GOVT.3.a",
          stem: "In the excerpt, the word framing most nearly means —",
          choices: [
            { letter: "A", text: "designing" },
            { letter: "B", text: "decorating" },
            { letter: "C", text: "blaming" },
            { letter: "D", text: "ending" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "cons-article-five",
      family: "CONS",
      title: "How the Constitution is amended",
      kind: "The Constitution & American Values · GOVT.3",
      blurb: "Article V's two steps, in a table.",
      level: 2,
      passage: "<p>" + N(1) + "Article V sets out a two-step <strong>amendment</strong> process: an amendment is proposed at the national level and then ratified by the states.</p><table><tr><th>Step</th><th>Method</th><th>How often used</th></tr><tr><td>Propose</td><td>two-thirds vote of both houses of Congress</td><td>all 27 amendments</td></tr><tr><td>Propose</td><td>national convention called at the request of two-thirds of state legislatures</td><td>never</td></tr><tr><td>Ratify</td><td>legislatures in three-fourths of the states</td><td>26 amendments</td></tr><tr><td>Ratify</td><td>conventions in three-fourths of the states</td><td>once (Twenty-first Amendment, 1933)</td></tr></table>",
      claims: [
        {
          id: "propose",
          sol: "GOVT.3.g",
          stem: "According to the table, how have all 27 amendments been proposed?",
          choices: [
            { letter: "A", text: "by a national convention called by the states" },
            { letter: "B", text: "by a majority vote of the Supreme Court justices" },
            { letter: "C", text: "by an executive order signed by the president" },
            { letter: "D", text: "by a two-thirds vote of both houses of Congress" }
          ],
          correct: "D"
        },
        {
          id: "ratify",
          sol: "GOVT.3.g",
          stem: "With 50 states today, how many states must ratify an amendment?",
          choices: [
            { letter: "A", text: "26" },
            { letter: "B", text: "34" },
            { letter: "C", text: "38" },
            { letter: "D", text: "50" }
          ],
          correct: "C"
        },
        {
          id: "federal",
          sol: "GOVT.3.d",
          stem: "Requiring ratification by the states shows that the amendment process reflects —",
          choices: [
            { letter: "A", text: "judicial review" },
            { letter: "B", text: "executive privilege" },
            { letter: "C", text: "direct democracy" },
            { letter: "D", text: "federalism" }
          ],
          correct: "D"
        },
        {
          id: "hard",
          sol: "GOVT.3.g",
          stem: "Which conclusion about amending the Constitution is best supported by the table?",
          choices: [
            { letter: "A", text: "The president must approve every proposed amendment." },
            { letter: "B", text: "Amending the Constitution requires broad agreement." },
            { letter: "C", text: "The convention method is the one used most often." },
            { letter: "D", text: "Most amendments were ratified by state conventions." }
          ],
          correct: "B"
        },
        {
          id: "repeal",
          sol: "GOVT.3.g",
          stem: "The only amendment ratified by state conventions repealed an earlier amendment that had —",
          choices: [
            { letter: "A", text: "banned the sale of alcohol" },
            { letter: "B", text: "created the federal income tax" },
            { letter: "C", text: "limited presidents to two terms" },
            { letter: "D", text: "given women the right to vote" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "cons-american-creed",
      family: "CONS",
      title: "The American's Creed",
      kind: "The Constitution & American Values · GOVT.4",
      blurb: "A 1917 creed gathers phrases from the nation's founding words.",
      level: 2,
      passage: "<p>" + N(1) + "William Tyler Page wrote this <strong>creed</strong> in 1917, and the House of Representatives accepted it in 1918.</p><blockquote>I believe in the United States of America as a government of the people, by the people, for the people; whose just powers are derived from the consent of the governed; a democracy in a republic; a sovereign Nation of many sovereign States; a perfect union, one and inseparable . . . I therefore believe it is my duty to my country to love it, to support its Constitution, to obey its laws, to respect its flag, and to defend it against all enemies.</blockquote><p class=\"src\">— William Tyler Page, The American's Creed, 1917</p>",
      claims: [
        {
          id: "lincoln",
          sol: "GOVT.4.d",
          stem: "The phrase \"of the people, by the people, for the people\" was borrowed from —",
          choices: [
            { letter: "A", text: "Lincoln's Gettysburg Address" },
            { letter: "B", text: "the Mayflower Compact" },
            { letter: "C", text: "Washington's Farewell Address" },
            { letter: "D", text: "the Articles of Confederation" }
          ],
          correct: "A"
        },
        {
          id: "consent",
          sol: "GOVT.4.c",
          stem: "The phrase \"whose just powers are derived from the consent of the governed\" repeats an idea from —",
          choices: [
            { letter: "A", text: "the Treaty of Paris that ended the Revolution" },
            { letter: "B", text: "the Declaration of Independence" },
            { letter: "C", text: "the Emancipation Proclamation" },
            { letter: "D", text: "the Monroe Doctrine" }
          ],
          correct: "B"
        },
        {
          id: "duty",
          sol: "GOVT.4.d",
          stem: "According to the creed, which is a duty of every citizen?",
          choices: [
            { letter: "A", text: "to serve at least one term in the state legislature" },
            { letter: "B", text: "to join a political party before turning 21" },
            { letter: "C", text: "to support the Constitution and obey its laws" },
            { letter: "D", text: "to vote for the same party as the president" }
          ],
          correct: "C"
        },
        {
          id: "states",
          sol: "GOVT.3.d",
          stem: "The phrase \"a sovereign Nation of many sovereign States\" describes —",
          choices: [
            { letter: "A", text: "separation of powers" },
            { letter: "B", text: "judicial review" },
            { letter: "C", text: "direct democracy" },
            { letter: "D", text: "federalism" }
          ],
          correct: "D"
        },
        {
          id: "vocab",
          sol: "GOVT.4.d",
          stem: "In sentence 1, a creed is —",
          choices: [
            { letter: "A", text: "a law that every citizen must sign" },
            { letter: "B", text: "a list of the duties of Congress" },
            { letter: "C", text: "a song played at public events" },
            { letter: "D", text: "a statement of shared beliefs" }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "cons-powers-table",
      family: "CONS",
      title: "Who does what? Federal and state powers",
      kind: "The Constitution & American Values · GOVT.3–4",
      blurb: "Delegated, reserved and concurrent powers, and the supremacy clause.",
      level: 2,
      passage: "<p>" + N(1) + "The Constitution divides power between the national government and the states, a system called <strong>federalism</strong>.</p><table><tr><th>Delegated (national)</th><th>Reserved (state)</th><th>Concurrent (both)</th></tr><tr><td>coin money</td><td>establish public schools</td><td>levy taxes</td></tr><tr><td>declare war</td><td>set up local governments</td><td>borrow money</td></tr><tr><td>regulate interstate and foreign trade</td><td>conduct elections</td><td>establish courts</td></tr><tr><td>make treaties</td><td>issue licenses</td><td>make and enforce laws</td></tr></table><p>" + N(2) + "Article I also lets Congress make all laws \"necessary and proper\" for carrying out its listed powers, the source of its <strong>implied powers</strong>. " + N(3) + "Article VI makes the Constitution, federal laws made under it and treaties \"the supreme Law of the Land.\" " + N(4) + "Some powers are denied to both levels; for example, neither may pass an ex post facto law punishing an act that was legal when it was done.</p>",
      claims: [
        {
          id: "concurrent",
          sol: "GOVT.3.d",
          stem: "According to the table, which power is shared by the national and state governments?",
          choices: [
            { letter: "A", text: "coining money" },
            { letter: "B", text: "collecting taxes" },
            { letter: "C", text: "making treaties" },
            { letter: "D", text: "establishing public schools" }
          ],
          correct: "B"
        },
        {
          id: "supremacy",
          sol: "GOVT.3.d",
          stem: "A state law conflicts with a valid federal law. Based on sentence 3, what happens?",
          choices: [
            { letter: "A", text: "The state law prevails under the Tenth Amendment." },
            { letter: "B", text: "The federal law prevails." },
            { letter: "C", text: "The law passed most recently prevails in all cases." },
            { letter: "D", text: "The president decides which law the courts should follow." }
          ],
          correct: "B"
        },
        {
          id: "vocab",
          sol: "GOVT.3.c",
          stem: "In sentence 2, implied powers are powers that —",
          choices: [
            { letter: "A", text: "are not listed but are needed to carry out listed powers" },
            { letter: "B", text: "belong only to the states under the Tenth Amendment" },
            { letter: "C", text: "the president gains by declaring a national emergency" },
            { letter: "D", text: "are written out word for word in Article I of the Constitution" }
          ],
          correct: "A"
        },
        {
          id: "money",
          sol: "GOVT.3.d",
          stem: "A state wants to print its own paper money. Why may it not?",
          choices: [
            { letter: "A", text: "The Constitution reserves the power over money to county and city governments." },
            { letter: "B", text: "Only the Supreme Court has the power to print paper money for the states." },
            { letter: "C", text: "Congress holds the money power, and the Constitution denies it to the states." },
            { letter: "D", text: "States may print their own money only during a war declared by Congress." }
          ],
          correct: "C"
        },
        {
          id: "daily",
          sol: "GOVT.3.d",
          stem: "Which conclusion about federalism is best supported by the table?",
          choices: [
            { letter: "A", text: "The national government runs all of the nation's public schools." },
            { letter: "B", text: "States may make their own treaties with foreign nations." },
            { letter: "C", text: "States control many services of daily life, such as schools." },
            { letter: "D", text: "Only the states have the power to borrow money." }
          ],
          correct: "C"
        },
        {
          id: "limit",
          sol: "GOVT.4.e",
          stem: "How does federalism help limit government and protect freedom?",
          choices: [
            { letter: "A", text: "It lets the national government overrule every state law." },
            { letter: "B", text: "It gives the president control over state elections." },
            { letter: "C", text: "It allows each state to ignore the Bill of Rights." },
            { letter: "D", text: "It divides power so no single level holds all of it." }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "cons-checks",
      family: "CONS",
      title: "Checks and balances",
      kind: "The Constitution & American Values · GOVT.3",
      blurb: "A table of the three branches and how each limits the others.",
      level: 2,
      passage: "<p>" + N(1) + "The Constitution gives each branch its own job, a principle called <strong>separation of powers</strong>. " + N(2) + "It also lets each branch limit the others, a system called checks and balances.</p><table><tr><th>Branch</th><th>Main job</th><th>Examples of checks</th></tr><tr><td>Legislative (Article I)</td><td>makes laws</td><td>overrides a veto by a two-thirds vote of each house; Senate approves treaties and appointments; impeaches and removes officials</td></tr><tr><td>Executive (Article II)</td><td>carries out laws</td><td>vetoes bills; nominates federal judges</td></tr><tr><td>Judicial (Article III)</td><td>interprets laws</td><td>declares laws or executive actions unconstitutional</td></tr></table><p>" + N(3) + "The power of courts to strike down laws, called judicial review, is not named in the Constitution; the Supreme Court claimed it in <em>Marbury v. Madison</em> (1803). " + N(4) + "The Senate confirms the president's nominees by a simple majority, but a treaty needs a two-thirds vote.</p>",
      claims: [
        {
          id: "veto",
          sol: "GOVT.3.e",
          stem: "Which is a check by the executive branch on the legislative branch?",
          choices: [
            { letter: "A", text: "declaring a law unconstitutional" },
            { letter: "B", text: "overriding a veto" },
            { letter: "C", text: "approving a treaty" },
            { letter: "D", text: "vetoing a bill" }
          ],
          correct: "D"
        },
        {
          id: "override",
          sol: "GOVT.3.e",
          stem: "Congress passes a bill, and the president vetoes it. What can Congress do next?",
          choices: [
            { letter: "A", text: "ask the Supreme Court to sign the bill into law instead" },
            { letter: "B", text: "pass the bill again by a simple majority in either house" },
            { letter: "C", text: "override the veto by a two-thirds vote in each house" },
            { letter: "D", text: "send the bill straight to the states for their ratification" }
          ],
          correct: "C"
        },
        {
          id: "protect",
          sol: "GOVT.4.e",
          stem: "Checks and balances help protect freedom mainly by —",
          choices: [
            { letter: "A", text: "letting the strongest branch settle every dispute alone" },
            { letter: "B", text: "keeping any one branch from gaining too much power" },
            { letter: "C", text: "allowing the president to ignore rulings of the courts" },
            { letter: "D", text: "giving the state governments direct control over Congress" }
          ],
          correct: "B"
        },
        {
          id: "vocab",
          sol: "GOVT.3.e",
          stem: "In sentence 1, separation of powers means —",
          choices: [
            { letter: "A", text: "dividing government's work among three branches" },
            { letter: "B", text: "dividing power between the nation and the states" },
            { letter: "C", text: "letting voters choose between two major parties" },
            { letter: "D", text: "keeping church leaders out of government offices" }
          ],
          correct: "A"
        },
        {
          id: "article",
          sol: "GOVT.3.c",
          stem: "According to the table, which article of the Constitution creates the branch that carries out the laws?",
          choices: [
            { letter: "A", text: "Article I" },
            { letter: "B", text: "Article III" },
            { letter: "C", text: "Article V" },
            { letter: "D", text: "Article II" }
          ],
          correct: "D"
        },
        {
          id: "impeach",
          sol: "GOVT.3.c",
          stem: "Under Article I, how does the impeachment process work?",
          choices: [
            { letter: "A", text: "The Senate impeaches, and the House tries the case." },
            { letter: "B", text: "The House impeaches, and the Senate tries the case." },
            { letter: "C", text: "The Supreme Court impeaches, and Congress votes." },
            { letter: "D", text: "The president impeaches, and the Senate votes." }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "cons-tocqueville",
      family: "CONS",
      title: "Tocqueville's America",
      kind: "The Constitution & American Values · GOVT.4",
      blurb: "A French visitor and five values that shaped American democracy.",
      level: 2,
      passage: "<p>" + N(1) + "In 1831 and 1832, the French writer Alexis de Tocqueville toured the United States, and he later published <em>Democracy in America</em> (1835 and 1840). " + N(2) + "Five values often drawn from his work help explain American democracy. " + N(3) + "<strong>Liberty</strong> means freedom from unjust government control. " + N(4) + "<strong>Egalitarianism</strong> means equal standing and equal opportunity, not equal wealth. " + N(5) + "<strong>Individualism</strong> means relying on one's own effort and judgment. " + N(6) + "<strong>Populism</strong> means that ordinary people, not a privileged few, should hold power. " + N(7) + "<strong>Laissez-faire</strong>, French for \"let do,\" means government should interfere little in the economy. " + N(8) + "Tocqueville was also struck by how often Americans formed voluntary associations, such as clubs, churches and reform groups, to solve problems without waiting for the government.</p>",
      claims: [
        {
          id: "egal",
          sol: "GOVT.4.a",
          stem: "As described in sentence 4, egalitarianism refers mainly to —",
          choices: [
            { letter: "A", text: "equal standing and equal opportunity among citizens" },
            { letter: "B", text: "equal incomes guaranteed by law to every single family" },
            { letter: "C", text: "an equal number of House seats for every state" },
            { letter: "D", text: "equal power for the national and state courts" }
          ],
          correct: "A"
        },
        {
          id: "laissez",
          sol: "GOVT.4.a",
          stem: "In sentence 7, laissez-faire most nearly means —",
          choices: [
            { letter: "A", text: "government ownership of the nation's major factories" },
            { letter: "B", text: "limited government interference in the economy" },
            { letter: "C", text: "a plan in which officials set the prices of all goods" },
            { letter: "D", text: "high taxes on trade with other nations" }
          ],
          correct: "B"
        },
        {
          id: "popul",
          sol: "GOVT.4.a",
          stem: "Which statement best reflects populism as described in the passage?",
          choices: [
            { letter: "A", text: "A small group of experts should make all decisions." },
            { letter: "B", text: "Nobles should lead the nation because of their birth." },
            { letter: "C", text: "The army should choose the nation's leaders." },
            { letter: "D", text: "Ordinary people, not elites, should hold power." }
          ],
          correct: "D"
        },
        {
          id: "indiv",
          sol: "GOVT.4.a",
          stem: "Which example best shows individualism?",
          choices: [
            { letter: "A", text: "A town council sets one fixed price for all bread sold." },
            { letter: "B", text: "A king assigns a job to each family in the kingdom." },
            { letter: "C", text: "A young worker saves money to start her own business." },
            { letter: "D", text: "A state church requires everyone to attend services." }
          ],
          correct: "C"
        },
        {
          id: "assoc",
          sol: "GOVT.4.c",
          stem: "Tocqueville's observation in sentence 8 suggests that Americans —",
          choices: [
            { letter: "A", text: "waited for the national government to act first on every issue" },
            { letter: "B", text: "often solved problems by acting together voluntarily" },
            { letter: "C", text: "rarely took any part in the public life of their towns" },
            { letter: "D", text: "relied on nobles and royal officials to lead communities" }
          ],
          correct: "B"
        },
        {
          id: "liberty",
          sol: "GOVT.4.e",
          stem: "How does the Bill of Rights support the value of liberty described in sentence 3?",
          choices: [
            { letter: "A", text: "It allows Congress to limit any freedom it chooses during peacetime." },
            { letter: "B", text: "It requires every citizen to join a voluntary association." },
            { letter: "C", text: "It lets the president decide which newspapers may publish." },
            { letter: "D", text: "It protects freedoms such as speech and religion from government." }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "cons-ratification",
      family: "CONS",
      title: "The ratification debate",
      kind: "The Constitution & American Values · GOVT.3",
      blurb: "Federalists and Anti-Federalists argue, and Virginia decides by ten votes.",
      level: 3,
      passage: "<p><strong>Federalist view</strong> " + N(1) + "A stronger national government is needed to pay debts, defend the nation and regulate trade. " + N(2) + "Power divided among three branches and between nation and states will keep any one group from becoming tyrannical. " + N(3) + "A list of rights is unnecessary, since the national government has only the powers granted to it.</p><p><strong>Anti-Federalist view</strong> " + N(4) + "The new government will swallow up the states and threaten the people's liberties. " + N(5) + "The president could become like a king, and the \"necessary and proper\" clause is dangerously broad. " + N(6) + "Without a bill of rights, nothing protects freedom of the press or trial by jury.</p><p class=\"src\">— summaries of arguments made in 1787–1788</p><p>" + N(7) + "At Virginia's <strong>ratifying convention</strong> in June 1788, Patrick Henry and George Mason led the opposition, while James Madison defended the Constitution. " + N(8) + "Virginia ratified by a vote of 89 to 79 and recommended amendments.</p>",
      claims: [
        {
          id: "henry",
          sol: "GOVT.3.a",
          stem: "Which Virginian led the opposition to ratification at the 1788 convention?",
          choices: [
            { letter: "A", text: "James Madison" },
            { letter: "B", text: "George Washington" },
            { letter: "C", text: "Patrick Henry" },
            { letter: "D", text: "John Marshall" }
          ],
          correct: "C"
        },
        {
          id: "billrights",
          sol: "GOVT.3.f",
          stem: "Which later event best answered the concern in sentence 6?",
          choices: [
            { letter: "A", text: "the election of George Washington in 1789" },
            { letter: "B", text: "the adoption of the Bill of Rights in 1791" },
            { letter: "C", text: "the Louisiana Purchase of 1803 from France" },
            { letter: "D", text: "the creation of the first national bank in 1791" }
          ],
          correct: "B"
        },
        {
          id: "disagree",
          sol: "GOVT.3.a",
          stem: "On which point did the two sides most clearly disagree?",
          choices: [
            { letter: "A", text: "whether the nation should stay independent of Britain" },
            { letter: "B", text: "whether Virginia should remain a state" },
            { letter: "C", text: "whether citizens should have any rights at all" },
            { letter: "D", text: "whether a bill of rights was needed" }
          ],
          correct: "D"
        },
        {
          id: "vote",
          sol: "GOVT.3.a",
          stem: "Which conclusion is best supported by sentence 8?",
          choices: [
            { letter: "A", text: "Virginia rejected the Constitution by a wide margin." },
            { letter: "B", text: "Virginia was the first state to ratify the Constitution." },
            { letter: "C", text: "Virginia ratified the Constitution without any debate." },
            { letter: "D", text: "Virginians were deeply divided over the Constitution." }
          ],
          correct: "D"
        },
        {
          id: "states",
          sol: "GOVT.3.d",
          stem: "Sentence 4 reflects the Anti-Federalist fear that —",
          choices: [
            { letter: "A", text: "the national government would take power from the states" },
            { letter: "B", text: "the states would become too strong for the nation to survive" },
            { letter: "C", text: "foreign nations would invade the states" },
            { letter: "D", text: "the courts would have no power at all" }
          ],
          correct: "A"
        },
        {
          id: "limited",
          sol: "GOVT.4.e",
          stem: "The Federalist argument in sentence 3 rests on the idea that the Constitution —",
          choices: [
            { letter: "A", text: "limits the national government to the powers it grants" },
            { letter: "B", text: "gives Congress unlimited power to protect any right it chooses" },
            { letter: "C", text: "allows the states to write the national laws" },
            { letter: "D", text: "lets the president decide which rights exist" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "cons-three-articles",
      family: "CONS",
      title: "Articles I, II and III",
      kind: "The Constitution & American Values · GOVT.3",
      blurb: "The opening words of the first three articles and who may serve.",
      level: 3,
      passage: "<p>" + N(1) + "The first three articles of the Constitution create the three branches of the national government.</p><blockquote><p>Article I. All legislative Powers herein granted shall be <strong>vested</strong> in a Congress of the United States, which shall consist of a Senate and House of Representatives.</p><p>Article II. The executive Power shall be vested in a President of the United States of America.</p><p>Article III. The judicial Power of the United States, shall be vested in one supreme Court, and in such inferior Courts as the Congress may from time to time ordain and establish.</p></blockquote><p class=\"src\">— Constitution of the United States, 1787</p><table><tr><th>Office</th><th>Minimum age</th><th>Citizenship</th><th>Term</th></tr><tr><td>Representative</td><td>25</td><td>citizen for 7 years</td><td>2 years</td></tr><tr><td>Senator</td><td>30</td><td>citizen for 9 years</td><td>6 years</td></tr><tr><td>President</td><td>35</td><td>natural-born citizen</td><td>4 years</td></tr></table><p>" + N(2) + "Federal judges hold office \"during good Behaviour,\" which in practice means for life unless they are impeached and removed. " + N(3) + "Article I goes on to list the powers of Congress, Article II makes the president commander in chief of the armed forces, and Article III extends federal judicial power to cases arising under the Constitution and federal laws.</p>",
      claims: [
        {
          id: "article",
          sol: "GOVT.3.c",
          stem: "Which article creates the branch that makes laws?",
          choices: [
            { letter: "A", text: "Article II" },
            { letter: "B", text: "Article III" },
            { letter: "C", text: "Article VI" },
            { letter: "D", text: "Article I" }
          ],
          correct: "D"
        },
        {
          id: "senator",
          sol: "GOVT.3.c",
          stem: "According to the table, what is the youngest age at which a person may serve as a senator?",
          choices: [
            { letter: "A", text: "25" },
            { letter: "B", text: "35" },
            { letter: "C", text: "30" },
            { letter: "D", text: "21" }
          ],
          correct: "C"
        },
        {
          id: "judges",
          sol: "GOVT.3.e",
          stem: "Why does the Constitution let federal judges serve \"during good Behaviour\"?",
          choices: [
            { letter: "A", text: "to keep judges independent of political pressure" },
            { letter: "B", text: "to let each new president replace all the judges" },
            { letter: "C", text: "to make judges answer to the voters every year" },
            { letter: "D", text: "to ensure that judges also serve in Congress" }
          ],
          correct: "A"
        },
        {
          id: "inferior",
          sol: "GOVT.3.c",
          stem: "According to the Article III excerpt, who creates the federal courts below the Supreme Court?",
          choices: [
            { letter: "A", text: "the president" },
            { letter: "B", text: "the states" },
            { letter: "C", text: "the Supreme Court" },
            { letter: "D", text: "Congress" }
          ],
          correct: "D"
        },
        {
          id: "terms",
          sol: "GOVT.4.c",
          stem: "House members serve two-year terms and senators serve six-year terms. The framers most likely did this so that —",
          choices: [
            { letter: "A", text: "the House can vote to remove all of the senators every two years" },
            { letter: "B", text: "the House stays close to voters while the Senate stays steadier" },
            { letter: "C", text: "senators are chosen by the House at the end of each term" },
            { letter: "D", text: "the members of both houses change completely at every election" }
          ],
          correct: "B"
        },
        {
          id: "vested",
          sol: "GOVT.3.e",
          stem: "In the excerpts, the word vested is used to show that the Constitution —",
          choices: [
            { letter: "A", text: "places each kind of power in a separate branch" },
            { letter: "B", text: "puts all the powers of government in the hands of Congress" },
            { letter: "C", text: "gives the states control over each branch" },
            { letter: "D", text: "lets each branch choose its own powers" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "cons-natural-rights",
      family: "CONS",
      title: "Rights that come before government",
      kind: "The Constitution & American Values · GOVT.3–4",
      blurb: "How the First and Ninth Amendments treat rights as natural.",
      level: 3,
      passage: "<p>" + N(1) + "The Declaration of Independence holds that people are \"endowed by their Creator\" with rights and that governments are created \"to secure these rights.\" " + N(2) + "In this view, rights are not gifts from government; they exist before any government and are called <strong>natural rights</strong>. " + N(3) + "The Bill of Rights is written to match this idea. " + N(4) + "The First Amendment does not say that Congress grants freedom of speech; it says that Congress may not take it away:</p><blockquote>Congress shall make no law respecting an establishment of religion, or prohibiting the free exercise thereof; or <strong>abridging</strong> the freedom of speech, or of the press; or the right of the people peaceably to assemble, and to petition the Government for a redress of grievances.</blockquote><p class=\"src\">— First Amendment, 1791</p><p>" + N(5) + "The Ninth Amendment adds:</p><blockquote>The enumeration in the Constitution, of certain rights, shall not be construed to deny or disparage others retained by the people.</blockquote><p class=\"src\">— Ninth Amendment, 1791</p><p>" + N(6) + "Together, these amendments limit what government may do rather than list favors that government gives.</p>",
      claims: [
        {
          id: "natural",
          sol: "GOVT.3.f",
          stem: "According to the passage, the Bill of Rights treats rights as —",
          choices: [
            { letter: "A", text: "privileges that Congress may grant or take away at will" },
            { letter: "B", text: "rewards earned through service to the nation" },
            { letter: "C", text: "existing before government and protected from it" },
            { letter: "D", text: "rules that apply only to the state governments" }
          ],
          correct: "C"
        },
        {
          id: "vocab",
          sol: "GOVT.3.f",
          stem: "In the First Amendment, the word abridging most nearly means —",
          choices: [
            { letter: "A", text: "building" },
            { letter: "B", text: "explaining" },
            { letter: "C", text: "enforcing" },
            { letter: "D", text: "reducing" }
          ],
          correct: "D"
        },
        {
          id: "ninth",
          sol: "GOVT.3.f",
          stem: "The main purpose of the Ninth Amendment is to make clear that —",
          choices: [
            { letter: "A", text: "people keep rights not listed in the Constitution" },
            { letter: "B", text: "Congress may create new rights in each new session" },
            { letter: "C", text: "states may not protect any rights of their own" },
            { letter: "D", text: "the listed rights are the only rights people have" }
          ],
          correct: "A"
        },
        {
          id: "limits",
          sol: "GOVT.4.e",
          stem: "Which conclusion is best supported by sentence 6?",
          choices: [
            { letter: "A", text: "The Bill of Rights expands the power of Congress." },
            { letter: "B", text: "The Bill of Rights applies only to the president." },
            { letter: "C", text: "The Bill of Rights replaced the original Constitution." },
            { letter: "D", text: "The Bill of Rights restricts government power." }
          ],
          correct: "D"
        },
        {
          id: "primacy",
          sol: "GOVT.4.c",
          stem: "The idea in sentence 1 that government exists \"to secure these rights\" reflects —",
          choices: [
            { letter: "A", text: "the supremacy of the national government" },
            { letter: "B", text: "the primacy of individual liberty" },
            { letter: "C", text: "the divine right of kings to rule" },
            { letter: "D", text: "the power of the majority over the minority" }
          ],
          correct: "B"
        },
        {
          id: "two",
          sol: "GOVT.4.e",
          stem: "Select TWO freedoms protected by the First Amendment excerpt.",
          choices: [
            { letter: "A", text: "the right to petition the government" },
            { letter: "B", text: "the right to a speedy and public trial" },
            { letter: "C", text: "the free exercise of religion" },
            { letter: "D", text: "the right to keep and bear arms" }
          ],
          correct: ["A", "C"]
        }
      ]
    },
    {
      id: "cons-amendments-timeline",
      family: "CONS",
      title: "Seventeen more amendments",
      kind: "The Constitution & American Values · GOVT.3–4",
      blurb: "A timeline of amendments after the Bill of Rights.",
      level: 3,
      passage: "<p>" + N(1) + "Since the Bill of Rights, only seventeen <strong>amendments</strong> have been added to the Constitution, although thousands have been proposed in Congress.</p><ul><li><strong>1791</strong> " + N(2) + "First ten amendments, the Bill of Rights, are ratified.</li><li><strong>1804</strong> " + N(3) + "Twelfth Amendment has electors cast separate votes for president and vice president.</li><li><strong>1865</strong> " + N(4) + "Thirteenth Amendment abolishes slavery.</li><li><strong>1868</strong> " + N(5) + "Fourteenth Amendment defines citizenship and forbids states to deny due process or equal protection of the laws.</li><li><strong>1870</strong> " + N(6) + "Fifteenth Amendment forbids denying the vote because of race.</li><li><strong>1913</strong> " + N(7) + "Sixteenth Amendment allows a federal income tax.</li><li><strong>1913</strong> " + N(8) + "Seventeenth Amendment provides for the direct election of senators by the voters.</li><li><strong>1920</strong> " + N(9) + "Nineteenth Amendment forbids denying the vote because of sex.</li><li><strong>1933</strong> " + N(10) + "Twenty-first Amendment repeals Prohibition, the Eighteenth Amendment.</li><li><strong>1951</strong> " + N(11) + "Twenty-second Amendment limits a president to two elected terms.</li><li><strong>1964</strong> " + N(12) + "Twenty-fourth Amendment bans poll taxes in federal elections.</li><li><strong>1971</strong> " + N(13) + "Twenty-sixth Amendment sets the voting age at 18.</li><li><strong>1992</strong> " + N(14) + "Twenty-seventh Amendment, first proposed by Madison in 1789, delays congressional pay changes until after the next election.</li></ul>",
      claims: [
        {
          id: "pay",
          sol: "GOVT.3.g",
          stem: "Which conclusion about the Twenty-seventh Amendment is supported by the timeline?",
          choices: [
            { letter: "A", text: "It was the first amendment proposed by a national convention." },
            { letter: "B", text: "It was ratified by state conventions instead of legislatures." },
            { letter: "C", text: "An amendment can be ratified long after it is proposed." },
            { letter: "D", text: "It was proposed by the president rather than by Congress." }
          ],
          correct: "C"
        },
        {
          id: "vote",
          sol: "GOVT.4.c",
          stem: "Select TWO amendments on the timeline that expanded who could vote.",
          choices: [
            { letter: "A", text: "the Twenty-first Amendment" },
            { letter: "B", text: "the Nineteenth Amendment" },
            { letter: "C", text: "the Twenty-seventh Amendment" },
            { letter: "D", text: "the Twenty-sixth Amendment" }
          ],
          correct: ["B", "D"]
        },
        {
          id: "seventeenth",
          sol: "GOVT.4.c",
          stem: "The Seventeenth Amendment increased the people's power by —",
          choices: [
            { letter: "A", text: "letting voters elect the president directly" },
            { letter: "B", text: "letting state legislatures choose House members" },
            { letter: "C", text: "letting voters elect senators directly" },
            { letter: "D", text: "letting Congress choose the state governors" }
          ],
          correct: "C"
        },
        {
          id: "few",
          sol: "GOVT.3.g",
          stem: "Why have so few amendments been added even though thousands have been proposed?",
          choices: [
            { letter: "A", text: "The president must sign every amendment before it goes to the states." },
            { letter: "B", text: "Article V requires large majorities in Congress and the states." },
            { letter: "C", text: "The Supreme Court must approve each amendment in advance." },
            { letter: "D", text: "Amendments may be proposed only once in each decade." }
          ],
          correct: "B"
        },
        {
          id: "repeal",
          sol: "GOVT.3.g",
          stem: "What does the Twenty-first Amendment show about the amendment process?",
          choices: [
            { letter: "A", text: "Amendments expire after a set number of years." },
            { letter: "B", text: "The Supreme Court can cancel any amendment." },
            { letter: "C", text: "Only the president can end an amendment." },
            { letter: "D", text: "One amendment can undo an earlier amendment." }
          ],
          correct: "D"
        },
        {
          id: "fourteenth",
          sol: "GOVT.4.e",
          stem: "Which amendment on the timeline most directly limits the power of state governments to deny individual rights?",
          choices: [
            { letter: "A", text: "the Fourteenth Amendment" },
            { letter: "B", text: "the Seventeenth Amendment" },
            { letter: "C", text: "the Twenty-first Amendment" },
            { letter: "D", text: "the Twenty-seventh Amendment" }
          ],
          correct: "A"
        }
      ]
    }
  ];

  for (var i = 0; i < PACKS.length; i++) P.push(PACKS[i]);
})(typeof window !== "undefined" ? window : global);
