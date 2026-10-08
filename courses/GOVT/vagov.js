/* SOL Lab — Virginia & U.S. Government · Virginia & Local Government (GOVT.10). Original text only. */
(function (global) {
  var P = global.HEIST_PACKS;
  if (!P || !P.push) return;
  var N = function (i) { return '<span class="n">(' + i + ')</span> '; };   // numbered sentence

  var PACKS = [
    {
      id: "vagov-two-houses",
      family: "VAGOV",
      title: "Two houses in Richmond",
      kind: "Virginia & Local Government · GOVT.10",
      blurb: "A table compares the House of Delegates and the Senate of Virginia.",
      level: 1,
      passage: "<p>" + N(1) + "Virginia's legislature, the <strong>General Assembly</strong>, is <strong>bicameral</strong> and meets in the State Capitol in Richmond.</p><table><tr><th></th><th>House of Delegates</th><th>Senate</th></tr><tr><td>Members</td><td>100</td><td>40</td></tr><tr><td>Term</td><td>2 years</td><td>4 years</td></tr><tr><td>Presiding officer</td><td>Speaker, chosen by the members</td><td>Lieutenant governor</td></tr></table><p>" + N(2) + "The General Assembly traces its roots to the House of Burgesses, which first met at Jamestown in 1619.</p>",
      claims: [
        {
          id: "table",
          sol: "GOVT.10.a",
          stem: "Which conclusion about the two houses is best supported by the table?",
          choices: [
            { letter: "A", text: "Senators face the voters more often than delegates do." },
            { letter: "B", text: "Delegates face the voters more often than senators do." },
            { letter: "C", text: "The Senate has more members than the House of Delegates." },
            { letter: "D", text: "The governor presides over both houses." }
          ],
          correct: "B"
        },
        {
          id: "bicameral",
          sol: "GOVT.10.a",
          stem: "In sentence 1, the word bicameral means the General Assembly —",
          choices: [
            { letter: "A", text: "meets twice each year" },
            { letter: "B", text: "is elected every two years" },
            { letter: "C", text: "is made up of two houses" },
            { letter: "D", text: "shares power with the governor" }
          ],
          correct: "C"
        },
        {
          id: "ltgov",
          sol: "GOVT.10.a",
          stem: "Who presides over the Senate of Virginia?",
          choices: [
            { letter: "A", text: "the lieutenant governor" },
            { letter: "B", text: "the Speaker of the House" },
            { letter: "C", text: "the attorney general" },
            { letter: "D", text: "the chief justice" }
          ],
          correct: "A"
        },
        {
          id: "power",
          sol: "GOVT.10.b",
          stem: "Which is a power of the General Assembly?",
          choices: [
            { letter: "A", text: "commanding the Virginia National Guard" },
            { letter: "B", text: "deciding appeals from the circuit courts" },
            { letter: "C", text: "approving zoning permits for a town" },
            { letter: "D", text: "passing state laws and the state budget" }
          ],
          correct: "D"
        },
        {
          id: "roots",
          sol: "GOVT.10.a",
          stem: "Sentence 2 best supports which conclusion?",
          choices: [
            { letter: "A", text: "Virginia's legislature was created by the U.S. Constitution." },
            { letter: "B", text: "Virginia has a long tradition of representative government." },
            { letter: "C", text: "Virginia's first legislature met in Richmond." },
            { letter: "D", text: "The House of Burgesses was chosen by the king." }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "vagov-one-term-governor",
      family: "VAGOV",
      title: "One term at a time",
      kind: "Virginia & Local Government · GOVT.10",
      blurb: "Virginia's constitution limits its governor to one term in a row.",
      level: 1,
      passage: "<blockquote>" + N(1) + "The chief executive power of the Commonwealth shall be vested in a Governor. " + N(2) + "The Governor serves a four-year term and is <strong>ineligible</strong> for the term that immediately follows.</blockquote><p class=\"src\">— Constitution of Virginia, Article V, Section 1 (adapted)</p><p>" + N(3) + "Virginia is the only state that bars its governor from serving two terms in a row. " + N(4) + "The lieutenant governor and the <strong>attorney general</strong> are elected separately and may seek re-election.</p>",
      claims: [
        {
          id: "next",
          sol: "GOVT.10.a",
          stem: "A governor elected in 2021 wants to serve again. According to the excerpt, the governor —",
          choices: [
            { letter: "A", text: "may run for re-election in 2025" },
            { letter: "B", text: "may serve for life if re-elected" },
            { letter: "C", text: "may not run in 2025 but may run in a later election" },
            { letter: "D", text: "may never again serve as governor" }
          ],
          correct: "C"
        },
        {
          id: "vocab",
          sol: "GOVT.10.a",
          stem: "In sentence 2, the word ineligible most nearly means —",
          choices: [
            { letter: "A", text: "not allowed" },
            { letter: "B", text: "not paid" },
            { letter: "C", text: "not elected" },
            { letter: "D", text: "not trusted" }
          ],
          correct: "A"
        },
        {
          id: "partisan",
          sol: "GOVT.10.e",
          stem: "Why are governor, lieutenant governor and attorney general considered partisan offices?",
          choices: [
            { letter: "A", text: "They are appointed by the General Assembly." },
            { letter: "B", text: "Party nominees run for them with a party label." },
            { letter: "C", text: "They must belong to the same party." },
            { letter: "D", text: "They are chosen by local party committees." }
          ],
          correct: "B"
        },
        {
          id: "ag",
          sol: "GOVT.10.a",
          stem: "Which is a main duty of the attorney general of Virginia?",
          choices: [
            { letter: "A", text: "presiding over the Senate" },
            { letter: "B", text: "commanding the state's National Guard" },
            { letter: "C", text: "deciding cases in the Supreme Court of Virginia" },
            { letter: "D", text: "serving as the state's chief lawyer" }
          ],
          correct: "D"
        },
        {
          id: "budget",
          sol: "GOVT.10.b",
          stem: "Which power belongs to the governor of Virginia?",
          choices: [
            { letter: "A", text: "proposing a two-year state budget" },
            { letter: "B", text: "electing the state's judges" },
            { letter: "C", text: "impeaching state officials" },
            { letter: "D", text: "setting a county's tax rate" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "vagov-county-city-town",
      family: "VAGOV",
      title: "County, city or town?",
      kind: "Virginia & Local Government · GOVT.10",
      blurb: "Virginia's three kinds of local government and how they fit together.",
      level: 1,
      passage: "<p>" + N(1) + "Virginia has 95 <strong>counties</strong> and 38 <strong>independent cities</strong>. " + N(2) + "Unlike cities in most states, a Virginia city is not part of any county; it is responsible for services that counties provide elsewhere, such as schools and local roads. " + N(3) + "<strong>Towns</strong> are smaller communities that remain inside a county. " + N(4) + "Town residents elect a town council and pay town taxes, but they also pay county taxes and usually attend county schools.</p>",
      claims: [
        {
          id: "move",
          sol: "GOVT.10.c",
          stem: "A family moves from a Virginia county into an independent city. Which local government is now responsible for its children's public schools?",
          choices: [
            { letter: "A", text: "the county it left" },
            { letter: "B", text: "the nearest town" },
            { letter: "C", text: "the city" },
            { letter: "D", text: "the state Board of Education" }
          ],
          correct: "C"
        },
        {
          id: "town",
          sol: "GOVT.10.c",
          stem: "Which kind of local government remains part of a county?",
          choices: [
            { letter: "A", text: "a town" },
            { letter: "B", text: "an independent city" },
            { letter: "C", text: "a regional authority" },
            { letter: "D", text: "a planning district" }
          ],
          correct: "A"
        },
        {
          id: "vocab",
          sol: "GOVT.10.c",
          stem: "As used in sentence 1, an independent city is one that —",
          choices: [
            { letter: "A", text: "has no elected officials" },
            { letter: "B", text: "is separate from any county" },
            { letter: "C", text: "is governed by the state" },
            { letter: "D", text: "pays no state taxes" }
          ],
          correct: "B"
        },
        {
          id: "board",
          sol: "GOVT.10.c",
          stem: "Which body makes local laws and sets the budget for a Virginia county?",
          choices: [
            { letter: "A", text: "the city council" },
            { letter: "B", text: "the county school board" },
            { letter: "C", text: "the circuit court" },
            { letter: "D", text: "the board of supervisors" }
          ],
          correct: "D"
        },
        {
          id: "taxes",
          sol: "GOVT.10.d",
          stem: "Based on sentence 4, a person who lives in a town pays taxes to —",
          choices: [
            { letter: "A", text: "the town only" },
            { letter: "B", text: "the town, the county and the state" },
            { letter: "C", text: "the county only" },
            { letter: "D", text: "the town and the federal government only" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "vagov-bill-journey",
      family: "VAGOV",
      title: "A bill's journey in Richmond",
      kind: "Virginia & Local Government · GOVT.10",
      blurb: "The steps a bill takes through the General Assembly, and a shorter local path.",
      level: 2,
      passage: "<p>" + N(1) + "The path of a bill in the General Assembly:</p><ul><li>A delegate or senator <strong>introduces</strong> the bill, often at the request of a constituent, a group, or the governor.</li><li>A committee holds a hearing, where citizens and lobbyists may speak, then reports, amends, or kills the bill.</li><li>The full house debates and votes.</li><li>The other house repeats the process; both must pass the same version.</li><li>The governor signs it, vetoes it, or returns it with recommended amendments.</li><li>Most new laws take effect on July 1.</li></ul><p>" + N(2) + "Localities follow a shorter path: after giving public notice, a county board or city council often holds a hearing and then votes on an <strong>ordinance</strong>.</p>",
      claims: [
        {
          id: "next",
          sol: "GOVT.10.b",
          stem: "What happens to a bill right after a committee reports it?",
          choices: [
            { letter: "A", text: "The governor signs it." },
            { letter: "B", text: "It takes effect on July 1." },
            { letter: "C", text: "The full house debates and votes on it." },
            { letter: "D", text: "It goes to the other house's committee." }
          ],
          correct: "C"
        },
        {
          id: "ordinance",
          sol: "GOVT.10.b",
          stem: "In sentence 2, an ordinance is —",
          choices: [
            { letter: "A", text: "a law passed by a local government" },
            { letter: "B", text: "a ruling by a circuit court judge" },
            { letter: "C", text: "a bill the governor has vetoed" },
            { letter: "D", text: "an order from the State Board of Education" }
          ],
          correct: "A"
        },
        {
          id: "speak",
          sol: "GOVT.10.f",
          stem: "At which step does a citizen have the best chance to speak about a state bill?",
          choices: [
            { letter: "A", text: "when the governor signs the bill" },
            { letter: "B", text: "when the bill takes effect" },
            { letter: "C", text: "during the full house's final vote" },
            { letter: "D", text: "at the committee hearing" }
          ],
          correct: "D"
        },
        {
          id: "versions",
          sol: "GOVT.10.b",
          stem: "The House and Senate pass different versions of a bill. What must happen before it goes to the governor?",
          choices: [
            { letter: "A", text: "The governor chooses the version she prefers." },
            { letter: "B", text: "Both houses must agree on the same version." },
            { letter: "C", text: "The Supreme Court of Virginia picks one version." },
            { letter: "D", text: "Voters decide between the versions in a referendum." }
          ],
          correct: "B"
        },
        {
          id: "effect",
          sol: "GOVT.10.b",
          stem: "A bill passes in February and is signed in March. When does it most likely take effect?",
          choices: [
            { letter: "A", text: "on July 1" },
            { letter: "B", text: "on the day it was signed" },
            { letter: "C", text: "on January 1 of the next year" },
            { letter: "D", text: "after the next election" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "vagov-court-ladder",
      family: "VAGOV",
      title: "Virginia's court ladder",
      kind: "Virginia & Local Government · GOVT.10",
      blurb: "A table of Virginia's courts, from district courts to the Supreme Court of Virginia.",
      level: 2,
      passage: "<p>" + N(1) + "Virginia's courts form a ladder.</p><table><tr><th>Court</th><th>Main work</th></tr><tr><td>Supreme Court of Virginia (7 justices)</td><td>Highest court; hears appeals</td></tr><tr><td>Court of Appeals of Virginia</td><td>Reviews decisions of circuit courts</td></tr><tr><td>Circuit courts</td><td>Felony and major civil trials, jury trials, appeals from district courts</td></tr><tr><td>General district courts</td><td>Traffic cases, misdemeanors, smaller civil claims</td></tr><tr><td>Juvenile and domestic relations district courts</td><td>Cases involving juveniles and families</td></tr></table><p>" + N(2) + "Virginia's judges are not chosen by the voters. " + N(3) + "The General Assembly elects them, and justices of the Supreme Court serve 12-year terms.</p>",
      claims: [
        {
          id: "felony",
          sol: "GOVT.10.a",
          stem: "A person charged with a felony asks for a jury trial. In which court will the trial be held?",
          choices: [
            { letter: "A", text: "general district court" },
            { letter: "B", text: "circuit court" },
            { letter: "C", text: "the Court of Appeals of Virginia" },
            { letter: "D", text: "juvenile and domestic relations district court" }
          ],
          correct: "B"
        },
        {
          id: "juvenile",
          sol: "GOVT.10.a",
          stem: "A 15-year-old is charged with a minor offense. Which court would most likely hear the case?",
          choices: [
            { letter: "A", text: "the Supreme Court of Virginia in Richmond" },
            { letter: "B", text: "the general district court for traffic cases" },
            { letter: "C", text: "the juvenile and domestic relations court" },
            { letter: "D", text: "the Court of Appeals of Virginia" }
          ],
          correct: "C"
        },
        {
          id: "select",
          sol: "GOVT.10.e",
          stem: "How does the selection of judges in Virginia differ from the election of delegates?",
          choices: [
            { letter: "A", text: "Judges are elected by the General Assembly, not by voters in partisan races." },
            { letter: "B", text: "Judges run in party primaries, but delegates do not." },
            { letter: "C", text: "Judges are appointed for life, and delegates serve for life." },
            { letter: "D", text: "Judges are chosen by the voters every two years." }
          ],
          correct: "A"
        },
        {
          id: "appeal",
          sol: "GOVT.10.a",
          stem: "A driver loses a traffic case in general district court and appeals. According to the table, which court hears the appeal?",
          choices: [
            { letter: "A", text: "the Supreme Court of Virginia" },
            { letter: "B", text: "the Court of Appeals of Virginia" },
            { letter: "C", text: "juvenile and domestic relations district court" },
            { letter: "D", text: "the circuit court" }
          ],
          correct: "D"
        },
        {
          id: "check",
          sol: "GOVT.10.a",
          stem: "Electing judges gives which branch of Virginia's government a check on the judicial branch?",
          choices: [
            { letter: "A", text: "the executive branch" },
            { letter: "B", text: "the legislative branch" },
            { letter: "C", text: "local governments" },
            { letter: "D", text: "the federal courts" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "vagov-dillon-rule",
      family: "VAGOV",
      title: "The Dillon Rule",
      kind: "Virginia & Local Government · GOVT.10",
      blurb: "Why Virginia's localities so often ask Richmond for permission.",
      level: 3,
      passage: "<blockquote>" + N(1) + "A city or county may exercise only the powers granted to it in express words, those necessarily implied in the powers granted, and those essential to its declared purposes, not simply convenient but <strong>indispensable</strong>. " + N(2) + "Any fair, reasonable doubt about whether a power exists is resolved against the local government.</blockquote><p class=\"src\">— the Dillon Rule, from the writings of Judge John F. Dillon on municipal law, 1870s (adapted)</p><p>" + N(3) + "Virginia's courts follow this rule. " + N(4) + "As a result, a county or city that wants a new kind of tax or regulation often must first ask the General Assembly for that power.</p>",
      claims: [
        {
          id: "main",
          sol: "GOVT.10.d",
          stem: "Under the Dillon Rule, Virginia's local governments —",
          choices: [
            { letter: "A", text: "may do anything the U.S. Constitution allows" },
            { letter: "B", text: "may ignore state laws they disagree with" },
            { letter: "C", text: "have only the powers the state grants them" },
            { letter: "D", text: "share equal power with the General Assembly" }
          ],
          correct: "C"
        },
        {
          id: "apply",
          sol: "GOVT.10.d",
          stem: "A county board wants to adopt a new kind of local tax that no state law mentions. Based on the passage, what should it do first?",
          choices: [
            { letter: "A", text: "ask the General Assembly to authorize the tax" },
            { letter: "B", text: "hold a statewide referendum on the tax" },
            { letter: "C", text: "ask Congress to approve the tax" },
            { letter: "D", text: "adopt the tax and wait for a court to rule" }
          ],
          correct: "A"
        },
        {
          id: "vocab",
          sol: "GOVT.10.d",
          stem: "In sentence 1, the word indispensable most nearly means —",
          choices: [
            { letter: "A", text: "easily affordable" },
            { letter: "B", text: "only temporary" },
            { letter: "C", text: "widely popular" },
            { letter: "D", text: "absolutely necessary" }
          ],
          correct: "D"
        },
        {
          id: "home",
          sol: "GOVT.10.d",
          stem: "How does the Dillon Rule differ from home rule, used in some other states?",
          choices: [
            { letter: "A", text: "Under home rule, local governments have no elected leaders." },
            { letter: "B", text: "Under home rule, localities may act on matters the state has not forbidden." },
            { letter: "C", text: "Under home rule, the state appoints every local official." },
            { letter: "D", text: "Under home rule, cities must merge with counties." }
          ],
          correct: "B"
        },
        {
          id: "charter",
          sol: "GOVT.10.c",
          stem: "From which body do Virginia's cities and towns receive their charters?",
          choices: [
            { letter: "A", text: "the General Assembly" },
            { letter: "B", text: "the United States Congress" },
            { letter: "C", text: "the Supreme Court of Virginia" },
            { letter: "D", text: "the board of supervisors" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "vagov-budget-hearing",
      family: "VAGOV",
      title: "Budget night at the county",
      kind: "Virginia & Local Government · GOVT.10",
      blurb: "A board of supervisors weighs a tax increase after a public hearing.",
      level: 2,
      passage: "<p>" + N(1) + "Every spring the Board of Supervisors of a Virginia county adopts a budget and sets the <strong>real estate tax</strong> rate, the county's largest source of local revenue. " + N(2) + "This year the county administrator, a manager hired by the board, proposed raising the rate by two cents per $100 of assessed value to build a new elementary school and raise teacher pay. " + N(3) + "State law required the board to advertise the proposed rate and hold a <strong>public hearing</strong> before voting. " + N(4) + "At the hearing, parents asked for the new school, a farmers' group warned that higher taxes would burden landowners, and a retired teacher presented a petition with 600 signatures. " + N(5) + "Members of the elected school board, who run without party labels, also spoke. " + N(6) + "After the hearing the supervisors approved a one-cent increase and delayed part of the school project.</p>",
      claims: [
        {
          id: "required",
          sol: "GOVT.10.b",
          stem: "According to sentence 3, what did state law require before the board could vote on the tax rate?",
          choices: [
            { letter: "A", text: "approval by the governor" },
            { letter: "B", text: "a countywide referendum" },
            { letter: "C", text: "an advertisement and a public hearing" },
            { letter: "D", text: "a vote of the school board" }
          ],
          correct: "C"
        },
        {
          id: "methods",
          sol: "GOVT.10.f",
          stem: "Which TWO methods of influence are described in the passage? Select TWO.",
          choices: [
            { letter: "A", text: "presenting a petition" },
            { letter: "B", text: "filing a lawsuit in circuit court" },
            { letter: "C", text: "speaking at a public hearing" },
            { letter: "D", text: "voting in a referendum" }
          ],
          correct: ["A", "C"]
        },
        {
          id: "admin",
          sol: "GOVT.10.c",
          stem: "The county administrator in sentence 2 is best described as —",
          choices: [
            { letter: "A", text: "an elected official who chairs the board" },
            { letter: "B", text: "a professional manager appointed by the board" },
            { letter: "C", text: "a state officer sent by the governor" },
            { letter: "D", text: "a judge who rules on tax disputes" }
          ],
          correct: "B"
        },
        {
          id: "nonpartisan",
          sol: "GOVT.10.e",
          stem: "Because school board members \"run without party labels,\" the school board is —",
          choices: [
            { letter: "A", text: "a nonpartisan office" },
            { letter: "B", text: "a partisan office" },
            { letter: "C", text: "an appointed office" },
            { letter: "D", text: "a state office" }
          ],
          correct: "A"
        },
        {
          id: "compromise",
          sol: "GOVT.10.f",
          stem: "The board's final decision best shows —",
          choices: [
            { letter: "A", text: "that petitions always decide local issues" },
            { letter: "B", text: "that the state set the county's tax rate" },
            { letter: "C", text: "that the farmers' group got all it wanted" },
            { letter: "D", text: "a compromise among competing local interests" }
          ],
          correct: "D"
        },
        {
          id: "vocab",
          sol: "GOVT.10.c",
          stem: "In sentence 1, a real estate tax is a tax on —",
          choices: [
            { letter: "A", text: "the income of county residents" },
            { letter: "B", text: "goods sold in county stores" },
            { letter: "C", text: "cars and trucks owned by residents" },
            { letter: "D", text: "the assessed value of land and buildings" }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "vagov-across-the-lines",
      family: "VAGOV",
      title: "Problems that cross the line",
      kind: "Virginia & Local Government · GOVT.10",
      blurb: "Regional authorities, state boards and commissions, and who chooses their members.",
      level: 2,
      passage: "<p>" + N(1) + "Many problems do not stop at a county or city line. " + N(2) + "Virginia localities therefore join <strong>regional authorities</strong>, public bodies set up under state law to provide a service across several jurisdictions. " + N(3) + "The Washington Metropolitan Area Transit Authority, created by a compact among Virginia, Maryland, and the District of Columbia and approved by Congress, runs Metrorail and Metrobus. " + N(4) + "Neighboring localities often share a regional jail or a water and sewer authority, and localities plan together through planning district commissions. " + N(5) + "At the state level, <strong>boards and commissions</strong> make policy in specific areas. " + N(6) + "The State Board of Education sets learning standards, and the State Corporation Commission regulates electric utilities and insurance companies. " + N(7) + "Members of these bodies are appointed by the governor or elected by the General Assembly rather than chosen by the voters.</p>",
      claims: [
        {
          id: "purpose",
          sol: "GOVT.10.d",
          stem: "What is the main purpose of a regional authority?",
          choices: [
            { letter: "A", text: "to replace county and city governments" },
            { letter: "B", text: "to provide a service across local boundaries" },
            { letter: "C", text: "to elect members of the General Assembly" },
            { letter: "D", text: "to hear appeals from local courts" }
          ],
          correct: "B"
        },
        {
          id: "compact",
          sol: "GOVT.10.d",
          stem: "Why did the agreement creating the Metro system need the approval of Congress?",
          choices: [
            { letter: "A", text: "It joined more than one state and the District of Columbia." },
            { letter: "B", text: "Only Congress may build roads in Virginia." },
            { letter: "C", text: "The governor of Virginia had vetoed it." },
            { letter: "D", text: "Local governments may not sign any agreements." }
          ],
          correct: "A"
        },
        {
          id: "vocab",
          sol: "GOVT.10.d",
          stem: "As used in sentence 5, boards and commissions are —",
          choices: [
            { letter: "A", text: "committees of the General Assembly" },
            { letter: "B", text: "groups of elected local judges" },
            { letter: "C", text: "bodies that make policy in a specific area" },
            { letter: "D", text: "private companies that sell services" }
          ],
          correct: "C"
        },
        {
          id: "scc",
          sol: "GOVT.10.d",
          stem: "A family's electric rates rise. Which state body regulates those rates?",
          choices: [
            { letter: "A", text: "the State Board of Education" },
            { letter: "B", text: "the planning district commission" },
            { letter: "C", text: "the regional jail authority" },
            { letter: "D", text: "the State Corporation Commission" }
          ],
          correct: "D"
        },
        {
          id: "chosen",
          sol: "GOVT.10.e",
          stem: "How does the selection of State Corporation Commission members differ from that of General Assembly members?",
          choices: [
            { letter: "A", text: "Commission members are elected by legislators; legislators are elected by voters." },
            { letter: "B", text: "Commission members run in partisan primaries; legislators are appointed." },
            { letter: "C", text: "Both are chosen by the governor without confirmation." },
            { letter: "D", text: "Both are elected by voters in nonpartisan races." }
          ],
          correct: "A"
        },
        {
          id: "tradeoff",
          sol: "GOVT.10.c",
          stem: "Two counties consider sharing one regional jail. Which trade-off are they most likely weighing?",
          choices: [
            { letter: "A", text: "higher state taxes against lower federal taxes" },
            { letter: "B", text: "more seats in Congress against fewer local offices" },
            { letter: "C", text: "lower costs for each county against less direct control" },
            { letter: "D", text: "faster trials against fewer judges" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "vagov-sample-ballot",
      family: "VAGOV",
      title: "Reading a sample ballot",
      kind: "Virginia & Local Government · GOVT.10",
      blurb: "Partisan and nonpartisan contests on one county ballot.",
      level: 2,
      passage: "<p>" + N(1) + "A sample ballot for a November election in a Virginia county listed these contests.</p><table><tr><th>Contest</th><th>How it appears</th></tr><tr><td>Member, House of Delegates</td><td>Candidate's name and party</td></tr><tr><td>Board of Supervisors</td><td>Candidate's name and party</td></tr><tr><td>Sheriff</td><td>Candidate's name and party</td></tr><tr><td>School Board</td><td>Candidate's name only</td></tr><tr><td>Question: Shall the county borrow money for new school buildings?</td><td>Yes / No</td></tr></table><p>" + N(2) + "<strong>Partisan</strong> offices list each candidate's party, while <strong>nonpartisan</strong> offices list only names. " + N(3) + "In nonpartisan races, parties may still endorse candidates, but the ballot does not show it. " + N(4) + "Supporters say nonpartisan races keep attention on local needs; critics say a party label gives busy voters useful information.</p>",
      claims: [
        {
          id: "which",
          sol: "GOVT.10.e",
          stem: "Which contest on this ballot is for a nonpartisan office?",
          choices: [
            { letter: "A", text: "Member, House of Delegates" },
            { letter: "B", text: "Board of Supervisors" },
            { letter: "C", text: "Sheriff" },
            { letter: "D", text: "School Board" }
          ],
          correct: "D"
        },
        {
          id: "define",
          sol: "GOVT.10.e",
          stem: "Based on sentence 2, the main difference between partisan and nonpartisan offices on the ballot is —",
          choices: [
            { letter: "A", text: "whether the candidate's party is shown" },
            { letter: "B", text: "whether the office is local or statewide" },
            { letter: "C", text: "whether the officeholder is paid" },
            { letter: "D", text: "whether voters or legislators choose" }
          ],
          correct: "A"
        },
        {
          id: "critics",
          sol: "GOVT.10.e",
          stem: "Critics of nonpartisan races, described in sentence 4, would most likely argue that —",
          choices: [
            { letter: "A", text: "school boards should be appointed by judges" },
            { letter: "B", text: "a party label helps voters judge unfamiliar candidates" },
            { letter: "C", text: "parties should be banned from local politics" },
            { letter: "D", text: "sheriffs should run without party labels" }
          ],
          correct: "B"
        },
        {
          id: "bond",
          sol: "GOVT.10.c",
          stem: "The question about borrowing money shows that in this county —",
          choices: [
            { letter: "A", text: "the sheriff decides how schools are built" },
            { letter: "B", text: "the state must approve every school building" },
            { letter: "C", text: "voters may approve or reject certain local borrowing" },
            { letter: "D", text: "the school board may borrow without limits" }
          ],
          correct: "C"
        },
        {
          id: "term",
          sol: "GOVT.10.a",
          stem: "A delegate elected on this ballot will next face the voters in —",
          choices: [
            { letter: "A", text: "two years" },
            { letter: "B", text: "four years" },
            { letter: "C", text: "six years" },
            { letter: "D", text: "eight years" }
          ],
          correct: "A"
        },
        {
          id: "influence",
          sol: "GOVT.10.f",
          stem: "A voter wants to shape decisions about local schools. Which choice on this ballot gives the most direct influence?",
          choices: [
            { letter: "A", text: "voting in the sheriff's race" },
            { letter: "B", text: "voting in the House of Delegates race" },
            { letter: "C", text: "leaving the school board race blank" },
            { letter: "D", text: "voting in the school board race" }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "vagov-constitution-roots",
      family: "VAGOV",
      title: "Virginia's constitution",
      kind: "Virginia & Local Government · GOVT.10",
      blurb: "Mason's Declaration of Rights, the 1971 constitution and how it is amended.",
      level: 3,
      passage: "<blockquote>" + N(1) + "That all power is vested in, and consequently derived from, the people, that magistrates are their trustees and servants, and at all times <strong>amenable</strong> to them.</blockquote><p class=\"src\">— Virginia Declaration of Rights, 1776; now Article I, Section 2, of the Constitution of Virginia</p><p>" + N(2) + "George Mason's Declaration of Rights, adopted in June 1776, still forms Article I of Virginia's constitution. " + N(3) + "Virginia has rewritten its constitution several times; the current version was approved by the voters in 1970 and took effect in 1971. " + N(4) + "It creates three branches: the General Assembly, an executive branch headed by the governor, and a judiciary led by the Supreme Court of Virginia. " + N(5) + "It replaced the constitution of 1902, whose poll tax and registration rules had kept many Virginians from voting. " + N(6) + "Amending the constitution takes patience. " + N(7) + "First, a majority of each house of the General Assembly must approve a proposed amendment. " + N(8) + "Then, after the next election of the House of Delegates, a majority of each house must approve it a second time. " + N(9) + "Finally, the voters decide in a <strong>referendum</strong>. " + N(10) + "In 2020, for example, voters approved an amendment creating a redistricting commission.</p>",
      claims: [
        {
          id: "principle",
          sol: "GOVT.10.a",
          stem: "The excerpt expresses which principle behind all three branches of Virginia's government?",
          choices: [
            { letter: "A", text: "Power comes from the people, and officials answer to them." },
            { letter: "B", text: "The governor holds power over the other branches." },
            { letter: "C", text: "Local governments hold power apart from the state." },
            { letter: "D", text: "Judges are the final source of political power." }
          ],
          correct: "A"
        },
        {
          id: "amenable",
          sol: "GOVT.10.a",
          stem: "In the excerpt, the word amenable most nearly means —",
          choices: [
            { letter: "A", text: "superior" },
            { letter: "B", text: "unknown" },
            { letter: "C", text: "answerable" },
            { letter: "D", text: "opposed" }
          ],
          correct: "C"
        },
        {
          id: "step",
          sol: "GOVT.10.b",
          stem: "Which step comes right after the General Assembly first approves a proposed amendment?",
          choices: [
            { letter: "A", text: "the voters decide in a referendum" },
            { letter: "B", text: "the governor signs the amendment" },
            { letter: "C", text: "the Supreme Court of Virginia reviews it" },
            { letter: "D", text: "an election for the House of Delegates is held" }
          ],
          correct: "D"
        },
        {
          id: "why",
          sol: "GOVT.10.b",
          stem: "Which statement best explains why the process requires two votes with an election in between?",
          choices: [
            { letter: "A", text: "It gives the governor time to veto the amendment." },
            { letter: "B", text: "It lets voters weigh in before a change becomes final." },
            { letter: "C", text: "It lets local governments replace the amendment." },
            { letter: "D", text: "It allows Congress to approve the amendment." }
          ],
          correct: "B"
        },
        {
          id: "compare",
          sol: "GOVT.10.b",
          stem: "How does amending Virginia's constitution differ from amending the U.S. Constitution?",
          choices: [
            { letter: "A", text: "Virginia's voters approve amendments directly in a referendum." },
            { letter: "B", text: "Virginia's amendments need the approval of Congress." },
            { letter: "C", text: "Virginia's governor may add amendments on his or her own." },
            { letter: "D", text: "Virginia's amendments are written by the state's courts." }
          ],
          correct: "A"
        },
        {
          id: "referendum",
          sol: "GOVT.10.f",
          stem: "In sentence 9, a referendum is —",
          choices: [
            { letter: "A", text: "a meeting of party delegates" },
            { letter: "B", text: "a court ruling on a law" },
            { letter: "C", text: "a vote by the people on a proposed measure" },
            { letter: "D", text: "a hearing held by a legislative committee" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "vagov-students-at-the-capitol",
      family: "VAGOV",
      title: "Students at the Capitol",
      kind: "Virginia & Local Government · GOVT.10",
      blurb: "A government class follows its idea from an email to a signed law.",
      level: 3,
      passage: "<p>" + N(1) + "Students in a Virginia high school government class wanted new public school buildings to include water-bottle filling stations. " + N(2) + "They first emailed their delegate, who agreed to <strong>introduce</strong> a bill. " + N(3) + "The students gathered 1,200 signatures on an online petition and won the support of a statewide parents' association, an <strong>interest group</strong> with a registered <strong>lobbyist</strong> in Richmond. " + N(4) + "In January two students testified before a House subcommittee. " + N(5) + "A lobbyist for building contractors warned that the stations would raise construction costs. " + N(6) + "The subcommittee amended the bill so it applied only to buildings begun after 2028. " + N(7) + "The bill passed both houses, and the governor signed it in March. " + N(8) + "Along the way the students used the Virginia Freedom of Information Act to obtain the state's cost estimates. " + N(9) + "They also learned a limit of state politics: Virginia has no process that lets citizens place a proposed law on the ballot themselves, so every state law must pass through the General Assembly. " + N(10) + "The class closed the project by thanking their delegate and registering eligible classmates to vote.</p><p class=\"src\">— A hypothetical case study</p>",
      claims: [
        {
          id: "branch",
          sol: "GOVT.10.a",
          stem: "With which branch of Virginia's government did the students work MOST in this case?",
          choices: [
            { letter: "A", text: "the judicial branch" },
            { letter: "B", text: "the legislative branch" },
            { letter: "C", text: "the executive branch" },
            { letter: "D", text: "local government" }
          ],
          correct: "B"
        },
        {
          id: "lobbyist",
          sol: "GOVT.10.f",
          stem: "In sentence 3, a lobbyist is a person who —",
          choices: [
            { letter: "A", text: "is paid to represent a group's views to lawmakers" },
            { letter: "B", text: "counts the votes in the General Assembly" },
            { letter: "C", text: "writes the final version of every bill" },
            { letter: "D", text: "enforces state laws for the governor" }
          ],
          correct: "A"
        },
        {
          id: "group",
          sol: "GOVT.10.f",
          stem: "How did the parents' association most help the students?",
          choices: [
            { letter: "A", text: "It wrote the bill and voted for it in the House." },
            { letter: "B", text: "It sued the state to require filling stations." },
            { letter: "C", text: "It added organized support and a lobbyist to their effort." },
            { letter: "D", text: "It placed the proposal directly on the ballot." }
          ],
          correct: "C"
        },
        {
          id: "amend",
          sol: "GOVT.10.b",
          stem: "Which statement best explains why the subcommittee amended the bill?",
          choices: [
            { letter: "A", text: "The governor had already vetoed it once." },
            { letter: "B", text: "The students asked for a later starting date." },
            { letter: "C", text: "Federal law required the change." },
            { letter: "D", text: "It responded to cost concerns raised by an opposing lobbyist." }
          ],
          correct: "D"
        },
        {
          id: "initiative",
          sol: "GOVT.10.b",
          stem: "Sentence 9 shows that in Virginia, citizens who want a new state law —",
          choices: [
            { letter: "A", text: "must work through members of the General Assembly" },
            { letter: "B", text: "may collect signatures to put it on the ballot" },
            { letter: "C", text: "must ask a circuit court to approve it" },
            { letter: "D", text: "may pass it at a local public hearing" }
          ],
          correct: "A"
        },
        {
          id: "foia",
          sol: "GOVT.10.f",
          stem: "How did the Virginia Freedom of Information Act help the students?",
          choices: [
            { letter: "A", text: "It required the General Assembly to pass their bill." },
            { letter: "B", text: "It gave them a right to see government records." },
            { letter: "C", text: "It let them vote in the subcommittee." },
            { letter: "D", text: "It paid for their trip to Richmond." }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "vagov-governors-pen",
      family: "VAGOV",
      title: "The governor's pen",
      kind: "Virginia & Local Government · GOVT.10",
      blurb: "Signing, vetoing, amending and line-item vetoes, plus the governor's other powers.",
      level: 3,
      passage: "<p>" + N(1) + "When the General Assembly sends a bill to the governor, the governor has several choices. " + N(2) + "The governor may sign it into law or <strong>veto</strong> it. " + N(3) + "The governor may also return it with recommended amendments; if both houses accept the changes, the bill goes back to the governor for final action, and if they reject them, the governor may sign or veto the original bill. " + N(4) + "For the budget and other spending bills, the governor has a <strong>line-item veto</strong>, which strikes out single items while approving the rest. " + N(5) + "Legislators take up these actions at a <strong>reconvened session</strong> held about six weeks after the regular session ends. " + N(6) + "Overriding a veto takes a two-thirds vote of the members present in each house, so most vetoes stand. " + N(7) + "The governor's power reaches beyond bills: the governor proposes the two-year budget, appoints cabinet secretaries and members of many state boards, commands the Virginia National Guard, and may grant pardons and restore the voting rights of people convicted of felonies. " + N(8) + "Some observers argue that the one-term limit weakens a governor's influence late in the term.</p>",
      claims: [
        {
          id: "lineitem",
          sol: "GOVT.10.b",
          stem: "The governor supports most of the budget but opposes funding for one building project. Which action fits best?",
          choices: [
            { letter: "A", text: "vetoing the entire budget bill" },
            { letter: "B", text: "using the line-item veto on that project" },
            { letter: "C", text: "asking the Supreme Court of Virginia to remove it" },
            { letter: "D", text: "calling a referendum on the project" }
          ],
          correct: "B"
        },
        {
          id: "reject",
          sol: "GOVT.10.b",
          stem: "The governor returns a bill with recommended amendments, and both houses reject them. What happens next?",
          choices: [
            { letter: "A", text: "The bill becomes law with the amendments." },
            { letter: "B", text: "The bill dies and cannot be considered again." },
            { letter: "C", text: "The voters decide in a referendum." },
            { letter: "D", text: "The governor may sign or veto the original bill." }
          ],
          correct: "D"
        },
        {
          id: "override",
          sol: "GOVT.10.a",
          stem: "Which conclusion about vetoes is best supported by sentence 6?",
          choices: [
            { letter: "A", text: "The two-thirds rule makes vetoes hard to override." },
            { letter: "B", text: "Legislators cannot override a governor's veto." },
            { letter: "C", text: "Vetoes are decided by the Supreme Court of Virginia." },
            { letter: "D", text: "A simple majority in one house can override a veto." }
          ],
          correct: "A"
        },
        {
          id: "reconvened",
          sol: "GOVT.10.b",
          stem: "In sentence 5, a reconvened session is —",
          choices: [
            { letter: "A", text: "a special election held to fill an empty seat" },
            { letter: "B", text: "a private meeting of the governor's cabinet" },
            { letter: "C", text: "a later meeting to act on the governor's vetoes" },
            { letter: "D", text: "the opening day of a newly elected legislature" }
          ],
          correct: "C"
        },
        {
          id: "powers",
          sol: "GOVT.10.a",
          stem: "Which TWO are powers of the governor named in sentence 7? Select TWO.",
          choices: [
            { letter: "A", text: "commanding the Virginia National Guard" },
            { letter: "B", text: "electing judges of the circuit courts" },
            { letter: "C", text: "restoring the voting rights of people convicted of felonies" },
            { letter: "D", text: "impeaching state officials" }
          ],
          correct: ["A", "C"]
        },
        {
          id: "boards",
          sol: "GOVT.10.d",
          stem: "The governor's power to appoint members of state boards gives the governor influence over —",
          choices: [
            { letter: "A", text: "the verdicts reached by local juries" },
            { letter: "B", text: "the election of members of the House of Delegates" },
            { letter: "C", text: "the rulings of the Supreme Court of Virginia" },
            { letter: "D", text: "policy set by bodies such as the State Board of Education" }
          ],
          correct: "D"
        }
      ]
    }
  ];

  for (var i = 0; i < PACKS.length; i++) P.push(PACKS[i]);
})(typeof window !== "undefined" ? window : global);
