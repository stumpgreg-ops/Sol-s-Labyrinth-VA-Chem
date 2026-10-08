/* SOL Lab — Virginia & U.S. Government · The Federal Government (GOVT.7–9). Original text only;
   quotations from the Constitution, its amendments and Marbury v. Madison are public domain. */
(function (global) {
  var P = global.HEIST_PACKS;
  if (!P || !P.push) return;
  var N = function (i) { return '<span class="n">(' + i + ')</span> '; };   // numbered sentence

  var PACKS = [
    /* ---------- tiny ---------- */
    {
      id: "fed-article-one-opening",
      family: "FED",
      title: "The first words of Article I",
      kind: "The Federal Government · GOVT.7",
      blurb: "Two sentences that set up a two-house Congress.",
      level: 1,
      passage: "<blockquote><p>" + N(1) + "All legislative Powers herein granted shall be vested in a Congress of the United States, which shall consist of a Senate and House of Representatives.</p>" +
        "<p>" + N(2) + "The House of Representatives shall be composed of Members chosen every second Year by the People of the several States.</p></blockquote>" +
        "<p class=\"src\">— Constitution of the United States, Article I, Sections 1 and 2</p>" +
        "<p>" + N(3) + "A Congress made of two houses is called <strong>bicameral</strong>.</p>",
      claims: [
        {
          id: "bicameral",
          sol: "GOVT.7.a",
          stem: "In sentence 3, the word bicameral most nearly means —",
          choices: [
            { letter: "A", text: "elected directly by the people" },
            { letter: "B", text: "having two legislative houses" },
            { letter: "C", text: "sharing power with the states" },
            { letter: "D", text: "meeting twice each year" }
          ],
          correct: "B"
        },
        {
          id: "house-term",
          sol: "GOVT.7.a",
          stem: "According to sentence 2, how long is the term of a member of the House of Representatives?",
          choices: [
            { letter: "A", text: "four years" },
            { letter: "B", text: "six years" },
            { letter: "C", text: "two years" },
            { letter: "D", text: "one year" }
          ],
          correct: "C"
        },
        {
          id: "herein",
          sol: "GOVT.7.c",
          stem: "The phrase \"powers herein granted\" in sentence 1 shows which principle of American government?",
          choices: [
            { letter: "A", text: "limited government, because Congress has only the powers the Constitution gives it" },
            { letter: "B", text: "judicial review, because federal courts decide which laws Congress is allowed to pass" },
            { letter: "C", text: "federalism, because the states choose the members of the House" },
            { letter: "D", text: "majority rule, because every law needs the support of most voters" }
          ],
          correct: "A"
        },
        {
          id: "senate-size",
          sol: "GOVT.7.a",
          stem: "Which statement correctly describes the Senate today?",
          choices: [
            { letter: "A", text: "It has 435 members divided among the states by population." },
            { letter: "B", text: "Its members are chosen by the state legislatures." },
            { letter: "C", text: "Its members serve two-year terms, like House members." },
            { letter: "D", text: "It has 100 members, two from each state." }
          ],
          correct: "D"
        },
        {
          id: "people",
          sol: "GOVT.7.c",
          stem: "Having the people elect House members every two years was meant mainly to —",
          choices: [
            { letter: "A", text: "keep one house of Congress close to the voters" },
            { letter: "B", text: "give small states the same voice as large states" },
            { letter: "C", text: "let the president choose members of Congress" },
            { letter: "D", text: "protect representatives from public opinion" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "fed-article-two-opening",
      family: "FED",
      title: "Who may be president?",
      kind: "The Federal Government · GOVT.8",
      blurb: "Article II vests the executive power in one person.",
      level: 1,
      passage: "<blockquote><p>" + N(1) + "The executive Power shall be vested in a President of the United States of America. " + N(2) + "He shall hold his Office during the Term of four Years.</p></blockquote>" +
        "<p class=\"src\">— Constitution of the United States, Article II, Section 1</p>" +
        "<p>" + N(3) + "Article II also requires the president to be a <strong>natural-born citizen</strong>, at least 35 years old, and a resident of the United States for at least 14 years.</p>",
      claims: [
        {
          id: "qualify",
          sol: "GOVT.8.a",
          stem: "Based on sentence 3, which person could legally be elected president?",
          choices: [
            { letter: "A", text: "a 33-year-old governor born in Richmond" },
            { letter: "B", text: "a 50-year-old senator who became a citizen through naturalization" },
            { letter: "C", text: "a 45-year-old general born in Virginia who has always lived in the United States" },
            { letter: "D", text: "a 60-year-old citizen who moved back to the country 5 years ago after living abroad since birth" }
          ],
          correct: "C"
        },
        {
          id: "natural-born",
          sol: "GOVT.8.a",
          stem: "In sentence 3, a natural-born citizen is a person who —",
          choices: [
            { letter: "A", text: "was a citizen at birth" },
            { letter: "B", text: "passed the naturalization test" },
            { letter: "C", text: "has voted in a federal election" },
            { letter: "D", text: "was born in one of the original states" }
          ],
          correct: "A"
        },
        {
          id: "one-person",
          sol: "GOVT.8.a",
          stem: "Sentence 1 places the executive power in —",
          choices: [
            { letter: "A", text: "a council made up of the heads of departments" },
            { letter: "B", text: "the Senate acting with the vice president" },
            { letter: "C", text: "the governors of the several states" },
            { letter: "D", text: "a single president" }
          ],
          correct: "D"
        },
        {
          id: "compare-age",
          sol: "GOVT.8.c",
          stem: "How do the age requirements for president compare with those for Congress?",
          choices: [
            { letter: "A", text: "The president must be at least 25, the same as a representative." },
            { letter: "B", text: "The minimum age is higher for the president than for either house." },
            { letter: "C", text: "The president must be at least 30, the same as a senator." },
            { letter: "D", text: "The Constitution sets no minimum age for members of either house of Congress." }
          ],
          correct: "B"
        },
        {
          id: "term-limit",
          sol: "GOVT.8.b",
          stem: "Sentence 2 sets a four-year term. Which amendment later limited how many times a person may be elected president?",
          choices: [
            { letter: "A", text: "the Twenty-seventh Amendment" },
            { letter: "B", text: "the Twenty-second Amendment" },
            { letter: "C", text: "the Twentieth Amendment" },
            { letter: "D", text: "the Twenty-fifth Amendment" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "fed-province-and-duty",
      family: "FED",
      title: "\"To say what the law is\"",
      kind: "The Federal Government · GOVT.9",
      blurb: "One sentence from 1803 that gave the Court its most important power.",
      level: 1,
      passage: "<blockquote><p>" + N(1) + "It is emphatically the province and duty of the judicial department to say what the law is.</p></blockquote>" +
        "<p class=\"src\">— Chief Justice John Marshall, Marbury v. Madison, 1803</p>" +
        "<p>" + N(2) + "With this reasoning the Court struck down part of a law passed by Congress. " + N(3) + "The power of courts to declare a law or government action unconstitutional is called <strong>judicial review</strong>.</p>",
      claims: [
        {
          id: "review",
          sol: "GOVT.9.b",
          stem: "In sentence 3, judicial review is the power of courts to —",
          choices: [
            { letter: "A", text: "appoint new federal judges whenever a seat on a court becomes empty" },
            { letter: "B", text: "review the qualifications of members of Congress" },
            { letter: "C", text: "veto a bill before it becomes law" },
            { letter: "D", text: "decide whether laws and actions follow the Constitution" }
          ],
          correct: "D"
        },
        {
          id: "province",
          sol: "GOVT.9.b",
          stem: "In sentence 1, Marshall uses the word province to mean the courts' —",
          choices: [
            { letter: "A", text: "proper area of responsibility" },
            { letter: "B", text: "home state or territory" },
            { letter: "C", text: "power to raise money through court fees" },
            { letter: "D", text: "right to make new laws" }
          ],
          correct: "A"
        },
        {
          id: "marshall",
          sol: "GOVT.9.b",
          stem: "John Marshall, the author of this opinion, was —",
          choices: [
            { letter: "A", text: "the president who appointed William Marbury" },
            { letter: "B", text: "a Virginian who served as Chief Justice from 1801 to 1835" },
            { letter: "C", text: "the secretary of state who refused to deliver the commission" },
            { letter: "D", text: "the first Chief Justice, named by George Washington" }
          ],
          correct: "B"
        },
        {
          id: "independent",
          sol: "GOVT.9.b",
          stem: "How did the ruling described in sentence 2 strengthen the judicial branch?",
          choices: [
            { letter: "A", text: "It gave the Supreme Court the power to enforce its rulings with troops." },
            { letter: "B", text: "It allowed judges to run for election to Congress." },
            { letter: "C", text: "It established the Court as an equal check on the other two branches." },
            { letter: "D", text: "It made the Court's decisions subject to approval by the Senate." }
          ],
          correct: "C"
        },
        {
          id: "check",
          sol: "GOVT.9.a",
          stem: "Which statement about federal judges is correct?",
          choices: [
            { letter: "A", text: "They are elected by the voters of their districts for six-year terms." },
            { letter: "B", text: "They are chosen by the House and serve until age 70." },
            { letter: "C", text: "They are appointed by state governors with Senate approval." },
            { letter: "D", text: "They are nominated by the president and confirmed by the Senate." }
          ],
          correct: "D"
        }
      ]
    },

    /* ---------- short ---------- */
    {
      id: "fed-two-chambers-table",
      family: "FED",
      title: "House and Senate side by side",
      kind: "The Federal Government · GOVT.7",
      blurb: "Members, terms, ages and special jobs of the two houses.",
      level: 1,
      passage: "<table><tr><th></th><th>House of Representatives</th><th>Senate</th></tr>" +
        "<tr><td>Members</td><td>435, by state population</td><td>100, two per state</td></tr>" +
        "<tr><td>Term</td><td>2 years</td><td>6 years</td></tr>" +
        "<tr><td>Minimum age</td><td>25</td><td>30</td></tr>" +
        "<tr><td>Presiding officer</td><td>Speaker of the House</td><td>Vice president</td></tr>" +
        "<tr><td>Special power</td><td>Starts revenue bills; impeaches</td><td>Tries impeachments; approves treaties and appointments</td></tr></table>" +
        "<p>" + N(1) + "Seats in the House are divided among the states after each ten-year census, a process called <strong>reapportionment</strong>. " + N(2) + "A state's number of representatives can therefore rise or fall, but every state keeps at least one.</p>",
      claims: [
        {
          id: "chart-read",
          sol: "GOVT.7.a",
          stem: "Which conclusion about Congress is best supported by the table?",
          choices: [
            { letter: "A", text: "A large state and a small state have equal numbers of senators." },
            { letter: "B", text: "Senators must be younger than members of the House of Representatives." },
            { letter: "C", text: "The Speaker of the House presides over the Senate." },
            { letter: "D", text: "The House must approve all treaties." }
          ],
          correct: "A"
        },
        {
          id: "reapportion",
          sol: "GOVT.7.a",
          stem: "In sentence 1, reapportionment means —",
          choices: [
            { letter: "A", text: "redrawing the outer boundaries of a state after each census" },
            { letter: "B", text: "reassigning House seats among the states based on population" },
            { letter: "C", text: "electing a new Speaker of the House after each general election" },
            { letter: "D", text: "adding new states to the Union" }
          ],
          correct: "B"
        },
        {
          id: "impeach",
          sol: "GOVT.7.a",
          stem: "According to the table, how are the jobs in the impeachment process divided?",
          choices: [
            { letter: "A", text: "The Senate brings charges and the House holds the trial." },
            { letter: "B", text: "The Supreme Court brings charges and the Senate holds the trial." },
            { letter: "C", text: "Both houses hold separate trials and must agree." },
            { letter: "D", text: "The House brings charges and the Senate holds the trial." }
          ],
          correct: "D"
        },
        {
          id: "terms-democracy",
          sol: "GOVT.7.c",
          stem: "Which statement best explains why the framers gave senators longer terms than representatives?",
          choices: [
            { letter: "A", text: "to let senators serve as judges between elections" },
            { letter: "B", text: "to make the Senate steadier and less swayed by sudden public moods" },
            { letter: "C", text: "to keep the Senate from ever voting on revenue bills or taxes" },
            { letter: "D", text: "to make sure senators would be chosen by the president, not by voters" }
          ],
          correct: "B"
        },
        {
          id: "staggered",
          sol: "GOVT.7.a",
          stem: "Every two years, about how much of the Senate is up for election?",
          choices: [
            { letter: "A", text: "all of it" },
            { letter: "B", text: "one-half" },
            { letter: "C", text: "one-third" },
            { letter: "D", text: "one-fourth" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "fed-executive-org-chart",
      family: "FED",
      title: "Reading the executive org chart",
      kind: "The Federal Government · GOVT.8",
      blurb: "The president, the EOP, the cabinet and the agencies.",
      level: 2,
      passage: "<p>" + N(1) + "An organization chart of the executive branch puts the president at the top. " + N(2) + "Just below is the <strong>Executive Office of the President</strong>, created in 1939, which includes the White House staff, the Office of Management and Budget and the National Security Council. " + N(3) + "Next come the 15 executive departments, such as State, Defense and Treasury; their heads form the cabinet and advise the president. " + N(4) + "At the bottom are independent agencies such as NASA and the Environmental Protection Agency, regulatory commissions such as the Federal Communications Commission, and government corporations such as the U.S. Postal Service. " + N(5) + "Together these offices form the federal <strong>bureaucracy</strong>.</p>",
      claims: [
        {
          id: "bureaucracy",
          sol: "GOVT.8.a",
          stem: "In sentence 5, the word bureaucracy refers to —",
          choices: [
            { letter: "A", text: "the committees and subcommittees of Congress" },
            { letter: "B", text: "the system of federal trial courts and appeals courts" },
            { letter: "C", text: "the agencies and departments that carry out laws" },
            { letter: "D", text: "the political party of the president" }
          ],
          correct: "C"
        },
        {
          id: "omb",
          sol: "GOVT.8.a",
          stem: "Which office in sentence 2 prepares the budget the president sends to Congress?",
          choices: [
            { letter: "A", text: "the Office of Management and Budget" },
            { letter: "B", text: "the National Security Council" },
            { letter: "C", text: "the Department of State" },
            { letter: "D", text: "the Federal Communications Commission" }
          ],
          correct: "A"
        },
        {
          id: "cabinet",
          sol: "GOVT.8.a",
          stem: "Based on sentence 3, the cabinet is made up mainly of —",
          choices: [
            { letter: "A", text: "the president's closest friends in Congress" },
            { letter: "B", text: "the justices of the Supreme Court" },
            { letter: "C", text: "the governors of the largest states" },
            { letter: "D", text: "the heads of the executive departments" }
          ],
          correct: "D"
        },
        {
          id: "postal",
          sol: "GOVT.8.a",
          stem: "The U.S. Postal Service is placed in which category on the chart?",
          choices: [
            { letter: "A", text: "executive department" },
            { letter: "B", text: "government corporation" },
            { letter: "C", text: "regulatory commission" },
            { letter: "D", text: "Executive Office of the President" }
          ],
          correct: "B"
        },
        {
          id: "growth",
          sol: "GOVT.8.b",
          stem: "The creation of the Executive Office in 1939, during the New Deal, is evidence that —",
          choices: [
            { letter: "A", text: "Congress had abolished the cabinet" },
            { letter: "B", text: "the president's duties had shrunk since the 1800s" },
            { letter: "C", text: "the presidency had grown in size and duties" },
            { letter: "D", text: "the states had taken over the federal budget" }
          ],
          correct: "C"
        },
        {
          id: "exec-order",
          sol: "GOVT.8.c",
          stem: "Presidents often direct the agencies on this chart through executive orders. Unlike a law passed by Congress, an executive order —",
          choices: [
            { letter: "A", text: "requires approval by majorities of both houses" },
            { letter: "B", text: "is issued by the president without a vote of Congress" },
            { letter: "C", text: "can be canceled only by a two-thirds vote of Congress" },
            { letter: "D", text: "must be reviewed by the Supreme Court before it takes effect" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "fed-court-ladder",
      family: "FED",
      title: "Three levels of federal courts",
      kind: "The Federal Government · GOVT.9",
      blurb: "From a trial in Alexandria to the Supreme Court.",
      level: 2,
      passage: "<p>" + N(1) + "Article III created one Supreme Court and let Congress set up lower courts. " + N(2) + "The 94 district courts are trial courts with <strong>original jurisdiction</strong>: they hear cases first, with witnesses, evidence and often a jury. " + N(3) + "Virginia has two, the Eastern and Western Districts. " + N(4) + "A losing party may ask one of the 13 courts of appeals to review the case; these courts have <strong>appellate jurisdiction</strong> and hear no new witnesses. " + N(5) + "Appeals from Virginia go to the Fourth Circuit, which sits in Richmond. " + N(6) + "The Supreme Court hears a small number of cases at the top.</p>",
      claims: [
        {
          id: "original",
          sol: "GOVT.9.a",
          stem: "In sentence 2, a court with original jurisdiction is one that —",
          choices: [
            { letter: "A", text: "reviews the decisions of other courts" },
            { letter: "B", text: "hears a case for the first time" },
            { letter: "C", text: "was created by the first Congress" },
            { letter: "D", text: "decides only cases about the Constitution" }
          ],
          correct: "B"
        },
        {
          id: "path",
          sol: "GOVT.9.a",
          stem: "A person convicted of a federal crime in the Eastern District of Virginia wants to appeal. Where does the appeal go FIRST?",
          choices: [
            { letter: "A", text: "the Supreme Court of Virginia" },
            { letter: "B", text: "the Supreme Court of the United States" },
            { letter: "C", text: "the federal district court for the Western District of Virginia" },
            { letter: "D", text: "the Court of Appeals for the Fourth Circuit" }
          ],
          correct: "D"
        },
        {
          id: "appellate",
          sol: "GOVT.9.a",
          stem: "Based on sentence 4, how does an appeals court differ from a district court?",
          choices: [
            { letter: "A", text: "It looks for legal errors rather than holding a new trial." },
            { letter: "B", text: "It always uses a larger jury chosen from several states." },
            { letter: "C", text: "It hears only cases between two or more state governments." },
            { letter: "D", text: "Its judges are elected by the voters instead of being appointed." }
          ],
          correct: "A"
        },
        {
          id: "congress-creates",
          sol: "GOVT.9.a",
          stem: "According to sentence 1, the lower federal courts exist because —",
          choices: [
            { letter: "A", text: "the states created them under the Tenth Amendment" },
            { letter: "B", text: "the Supreme Court established them in Marbury v. Madison in 1803" },
            { letter: "C", text: "Congress established them using power given in Article III" },
            { letter: "D", text: "the president created them by executive order in the 1790s" }
          ],
          correct: "C"
        },
        {
          id: "federal-case",
          sol: "GOVT.9.a",
          stem: "Which case would most likely begin in a federal district court rather than a state court?",
          choices: [
            { letter: "A", text: "a dispute over a broken lease between neighbors in Norfolk" },
            { letter: "B", text: "a speeding ticket issued by a county deputy" },
            { letter: "C", text: "a divorce between two residents of Roanoke" },
            { letter: "D", text: "a charge of counterfeiting U.S. currency" }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "fed-lame-duck",
      family: "FED",
      title: "Shortening the lame-duck months",
      kind: "The Federal Government · GOVT.8",
      blurb: "Why the president is now sworn in on January 20.",
      level: 2,
      passage: "<ul><li><strong>1789–1933</strong> New presidential terms begin on March 4, four months after the November election.</li>" +
        "<li><strong>Winter 1932–1933</strong> Voters have elected Franklin D. Roosevelt, but President Herbert Hoover remains in office as banks fail across the country.</li>" +
        "<li><strong>1933</strong> The Twentieth Amendment is ratified. It moves the start of the president's term to January 20 and of Congress's term to January 3.</li>" +
        "<li><strong>1937</strong> Roosevelt's second inauguration is the first held on January 20.</li></ul>" +
        "<p>" + N(1) + "An official serving out a term after a successor has been chosen is called a <strong>lame duck</strong>.</p>",
      claims: [
        {
          id: "lame",
          sol: "GOVT.8.b",
          stem: "In sentence 1, a lame duck is an official who —",
          choices: [
            { letter: "A", text: "has been impeached by the House but not removed by the Senate" },
            { letter: "B", text: "is still in office after a successor has been elected" },
            { letter: "C", text: "was appointed rather than elected" },
            { letter: "D", text: "has served more than two terms" }
          ],
          correct: "B"
        },
        {
          id: "purpose",
          sol: "GOVT.8.b",
          stem: "Which statement best explains the main purpose of the Twentieth Amendment?",
          choices: [
            { letter: "A", text: "to limit presidents to two elected terms" },
            { letter: "B", text: "to let the vice president act when the president is disabled" },
            { letter: "C", text: "to shorten the wait between election and inauguration" },
            { letter: "D", text: "to require senators to be elected directly by the people" }
          ],
          correct: "C"
        },
        {
          id: "sequence",
          sol: "GOVT.8.b",
          stem: "According to the timeline, which happened FIRST?",
          choices: [
            { letter: "A", text: "Hoover stayed in office after losing in 1932." },
            { letter: "B", text: "The Twentieth Amendment was ratified." },
            { letter: "C", text: "A president was inaugurated on January 20." },
            { letter: "D", text: "A new Congress first began its term on January 3." }
          ],
          correct: "A"
        },
        {
          id: "crisis",
          sol: "GOVT.8.b",
          stem: "The second entry of the timeline suggests that the long gap was a problem mainly because —",
          choices: [
            { letter: "A", text: "the outgoing president had lost all legal power to sign new laws" },
            { letter: "B", text: "Congress could not meet until the new president took office" },
            { letter: "C", text: "the Supreme Court refused to hear cases during the gap" },
            { letter: "D", text: "a crisis deepened while a defeated president still held office" }
          ],
          correct: "D"
        },
        {
          id: "congress-date",
          sol: "GOVT.7.a",
          stem: "Under the Twentieth Amendment, a newly elected Congress begins its term —",
          choices: [
            { letter: "A", text: "on January 3, before the new president takes office" },
            { letter: "B", text: "on March 4, after the new president takes office" },
            { letter: "C", text: "on the first Tuesday after the first Monday in November" },
            { letter: "D", text: "on the day the Electoral College votes are cast" }
          ],
          correct: "A"
        }
      ]
    },

    /* ---------- medium ---------- */
    {
      id: "fed-bill-journey",
      family: "FED",
      title: "The journey of a bill",
      kind: "The Federal Government · GOVT.7",
      blurb: "From a member's desk to the president's signature, or veto.",
      level: 2,
      passage: "<p>" + N(1) + "Only a member of Congress may introduce a bill, though ideas often come from the president, interest groups or ordinary citizens. " + N(2) + "The bill is sent to a <strong>standing committee</strong>, where most bills quietly die. " + N(3) + "If the committee holds hearings and approves it, the bill goes to the floor; in the House, the Rules Committee first sets the terms of debate. " + N(4) + "In the Senate, debate is less limited, and a <strong>filibuster</strong> can delay a vote unless 60 senators vote for cloture to end debate. " + N(5) + "If the two houses pass different versions, a conference committee may work out one text, which both houses must pass again. " + N(6) + "The president may then sign the bill or veto it. " + N(7) + "Congress can override a veto by a two-thirds vote of each house. " + N(8) + "If the president does nothing for ten days (Sundays excepted) while Congress is in session, the bill becomes law without a signature.</p>",
      claims: [
        {
          id: "committee",
          sol: "GOVT.7.c",
          stem: "According to sentence 2, a standing committee is important in the process because it —",
          choices: [
            { letter: "A", text: "chooses the Speaker of the House each session" },
            { letter: "B", text: "decides which bills move forward for a vote" },
            { letter: "C", text: "can veto bills passed by both houses" },
            { letter: "D", text: "drafts the opinions of the Supreme Court" }
          ],
          correct: "B"
        },
        {
          id: "filibuster",
          sol: "GOVT.7.c",
          stem: "The filibuster described in sentence 4 is most often defended as a way to —",
          choices: [
            { letter: "A", text: "speed up the passage of popular bills" },
            { letter: "B", text: "let the House overrule a vote taken in the Senate" },
            { letter: "C", text: "protect the voice of a minority of senators" },
            { letter: "D", text: "give the president a vote in the Senate" }
          ],
          correct: "C"
        },
        {
          id: "order",
          sol: "GOVT.7.c",
          stem: "Which step in the passage comes LAST for a bill that passes both houses in different forms?",
          choices: [
            { letter: "A", text: "The president signs or vetoes the bill." },
            { letter: "B", text: "A conference committee writes a single version." },
            { letter: "C", text: "The bill is referred to a standing committee." },
            { letter: "D", text: "Both houses vote again on the compromise text." }
          ],
          correct: "A"
        },
        {
          id: "override",
          sol: "GOVT.8.c",
          stem: "The veto in sentence 6 and the override in sentence 7 are best described as examples of —",
          choices: [
            { letter: "A", text: "federalism" },
            { letter: "B", text: "judicial review" },
            { letter: "C", text: "representative democracy" },
            { letter: "D", text: "checks and balances" }
          ],
          correct: "D"
        },
        {
          id: "math",
          sol: "GOVT.7.c",
          stem: "A vetoed bill gets 300 of 435 votes in the House and 64 of 100 votes in the Senate, with every member voting. What happens?",
          choices: [
            { letter: "A", text: "It becomes law, because it won a majority in each of the houses." },
            { letter: "B", text: "It fails, because the Senate vote is short of two-thirds." },
            { letter: "C", text: "It becomes law, because the House reached two-thirds." },
            { letter: "D", text: "The Supreme Court decides whether it becomes law." }
          ],
          correct: "B"
        },
        {
          id: "revenue",
          sol: "GOVT.7.a",
          stem: "Under the Constitution, bills for raising revenue must begin in —",
          choices: [
            { letter: "A", text: "the Senate Finance Committee alone" },
            { letter: "B", text: "a conference committee" },
            { letter: "C", text: "the Office of Management and Budget" },
            { letter: "D", text: "the House of Representatives" }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "fed-cert-to-opinion",
      family: "FED",
      title: "How the Supreme Court decides",
      kind: "The Federal Government · GOVT.9",
      blurb: "Thousands of requests, a few dozen decisions.",
      level: 2,
      passage: "<p>" + N(1) + "Each year thousands of parties ask the Supreme Court to hear their cases, usually by filing a petition for a <strong>writ of certiorari</strong>, an order calling up the record from a lower court. " + N(2) + "If at least four of the nine justices agree, the Court accepts the case; this is called the rule of four. " + N(3) + "Each side then files a written brief, and outside groups may file amicus curiae (\"friend of the court\") briefs. " + N(4) + "At oral argument, lawyers usually get about thirty minutes per side and face sharp questions from the bench. " + N(5) + "The justices then vote in a private conference. " + N(6) + "One justice writes the majority opinion; others may write a concurring opinion, agreeing with the result for different reasons, or a <strong>dissenting opinion</strong>. " + N(7) + "Most decisions rely on <strong>precedent</strong>, the rulings of earlier cases.</p>",
      claims: [
        {
          id: "cert",
          sol: "GOVT.9.c",
          stem: "In sentence 1, a writ of certiorari is —",
          choices: [
            { letter: "A", text: "an order to a lower court to send up a case for review" },
            { letter: "B", text: "a written statement of a justice's disagreement" },
            { letter: "C", text: "a brief filed by an outside group" },
            { letter: "D", text: "a warrant allowing police to arrest a person accused of a crime" }
          ],
          correct: "A"
        },
        {
          id: "rule-four",
          sol: "GOVT.9.c",
          stem: "Three justices want to hear a case and six do not. Based on sentence 2, what happens?",
          choices: [
            { letter: "A", text: "The Court hears the case because one-third of the justices agreed." },
            { letter: "B", text: "The Chief Justice breaks the tie." },
            { letter: "C", text: "The case returns to Congress for a vote." },
            { letter: "D", text: "The Court declines the case and the lower-court ruling stands." }
          ],
          correct: "D"
        },
        {
          id: "dissent",
          sol: "GOVT.9.c",
          stem: "In sentence 6, a dissenting opinion is written by a justice who —",
          choices: [
            { letter: "A", text: "agrees with the majority for the same reasons" },
            { letter: "B", text: "disagrees with the decision of the majority" },
            { letter: "C", text: "represents one of the parties in the case" },
            { letter: "D", text: "was absent from oral argument" }
          ],
          correct: "B"
        },
        {
          id: "sequence",
          sol: "GOVT.9.c",
          stem: "Which step in the Supreme Court's process comes FIRST?",
          choices: [
            { letter: "A", text: "oral argument before the justices" },
            { letter: "B", text: "the vote the justices take in their private conference" },
            { letter: "C", text: "the decision to grant a petition for certiorari" },
            { letter: "D", text: "the release of the majority opinion" }
          ],
          correct: "C"
        },
        {
          id: "precedent",
          sol: "GOVT.9.d",
          stem: "A justice who usually follows precedent and hesitates to strike down laws passed by elected officials is practicing —",
          choices: [
            { letter: "A", text: "judicial activism" },
            { letter: "B", text: "judicial pragmatism" },
            { letter: "C", text: "judicial restraint" },
            { letter: "D", text: "originalism" }
          ],
          correct: "C"
        },
        {
          id: "jurisdiction",
          sol: "GOVT.9.a",
          stem: "Most cases reach the Supreme Court under its —",
          choices: [
            { letter: "A", text: "original jurisdiction over every federal crime" },
            { letter: "B", text: "appellate jurisdiction to review lower-court decisions" },
            { letter: "C", text: "power to give advice to Congress on pending bills" },
            { letter: "D", text: "duty to hold the first trial in disputes between citizens" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "fed-two-term-tradition",
      family: "FED",
      title: "From tradition to the Twenty-second Amendment",
      kind: "The Federal Government · GOVT.8",
      blurb: "Washington's example, Roosevelt's four elections, and a new rule.",
      level: 3,
      passage: "<ul><li><strong>1796</strong> George Washington declines a third term, setting a two-term tradition.</li>" +
        "<li><strong>1932–1944</strong> Franklin D. Roosevelt wins four presidential elections during the Great Depression and World War II.</li>" +
        "<li><strong>1947</strong> Congress proposes a term-limit amendment.</li>" +
        "<li><strong>1951</strong> The states ratify the Twenty-second Amendment.</li></ul>" +
        "<blockquote><p>" + N(1) + "No person shall be elected to the office of the President more than twice, and no person who has held the office of President, or acted as President, for more than two years of a term to which some other person was elected President shall be elected to the office of the President more than once.</p></blockquote>" +
        "<p class=\"src\">— Twenty-second Amendment, Section 1</p>" +
        "<p>" + N(2) + "Supporters saw the limit as a guard against concentrated <strong>executive power</strong>.</p>",
      claims: [
        {
          id: "cause",
          sol: "GOVT.8.b",
          stem: "Which event on the timeline most directly led Congress to propose the Twenty-second Amendment?",
          choices: [
            { letter: "A", text: "Washington's farewell in 1796" },
            { letter: "B", text: "Roosevelt's election to four terms" },
            { letter: "C", text: "the ratification of the amendment in 1951" },
            { letter: "D", text: "the start of the Great Depression" }
          ],
          correct: "B"
        },
        {
          id: "apply",
          sol: "GOVT.8.b",
          stem: "A vice president becomes president when 18 months remain in the term and then wins two elections. Under sentence 1, this is —",
          choices: [
            { letter: "A", text: "not allowed, because no one may serve more than eight years" },
            { letter: "B", text: "not allowed, because the vice president was not elected president first" },
            { letter: "C", text: "allowed only if Congress approves by a two-thirds vote" },
            { letter: "D", text: "allowed, because the first stint was under two years" }
          ],
          correct: "D"
        },
        {
          id: "max",
          sol: "GOVT.8.b",
          stem: "Under the Twenty-second Amendment, what is the longest a person can serve as president?",
          choices: [
            { letter: "A", text: "eight years" },
            { letter: "B", text: "twelve years" },
            { letter: "C", text: "ten years" },
            { letter: "D", text: "sixteen years" }
          ],
          correct: "C"
        },
        {
          id: "tradition",
          sol: "GOVT.8.b",
          stem: "Before 1951, the two-term limit on presidents was —",
          choices: [
            { letter: "A", text: "an unwritten custom started by Washington" },
            { letter: "B", text: "written into Article II by the framers" },
            { letter: "C", text: "a federal law passed by the First Congress" },
            { letter: "D", text: "set by a ruling of the Marshall Court" }
          ],
          correct: "A"
        },
        {
          id: "exec-power",
          sol: "GOVT.7.a",
          stem: "How does the limit on presidents compare with the rules for members of Congress?",
          choices: [
            { letter: "A", text: "Members of Congress are limited to two terms in each house." },
            { letter: "B", text: "The Constitution puts no term limits on members of Congress." },
            { letter: "C", text: "Senators are limited to two terms, but representatives are not." },
            { letter: "D", text: "Members of Congress must retire at age 70." }
          ],
          correct: "B"
        },
        {
          id: "succession",
          sol: "GOVT.8.a",
          stem: "Roosevelt died in office in 1945, early in his fourth term. Who became president?",
          choices: [
            { letter: "A", text: "the Speaker of the House" },
            { letter: "B", text: "the Chief Justice of the United States" },
            { letter: "C", text: "the secretary of state" },
            { letter: "D", text: "the vice president" }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "fed-reading-the-constitution",
      family: "FED",
      title: "Two ways to read the Constitution",
      kind: "The Federal Government · GOVT.9",
      blurb: "Two judges explain how they approach a hard case.",
      level: 3,
      passage: "<p><strong>Judge A:</strong> " + N(1) + "My job is to apply the Constitution as its words were understood by the people who ratified them. " + N(2) + "If the people want a different rule, they can amend the Constitution or ask their elected representatives to change the law. " + N(3) + "Judges should overturn the acts of elected officials only when those acts clearly conflict with the Constitution.</p>" +
        "<p><strong>Judge B:</strong> " + N(4) + "The framers could not foresee the internet or modern medicine. " + N(5) + "When the text is unclear, I weigh the practical results of each possible ruling and choose the one that works best for society today. " + N(6) + "Sometimes that means the Court must act when the other branches have not.</p>" +
        "<p>(Both statements are original illustrations, not quotations from real judges.)</p>",
      claims: [
        {
          id: "judge-a",
          sol: "GOVT.9.d",
          stem: "Judge A's statement in sentence 1 best reflects the philosophy of —",
          choices: [
            { letter: "A", text: "judicial pragmatism" },
            { letter: "B", text: "judicial activism" },
            { letter: "C", text: "originalism" },
            { letter: "D", text: "selective incorporation" }
          ],
          correct: "C"
        },
        {
          id: "judge-b",
          sol: "GOVT.9.d",
          stem: "Sentence 5 most closely describes judicial pragmatism because Judge B —",
          choices: [
            { letter: "A", text: "considers the real-world effects of a decision" },
            { letter: "B", text: "relies only on the original meaning of the words" },
            { letter: "C", text: "always defers to Congress and the president" },
            { letter: "D", text: "refuses to hear cases about new technology" }
          ],
          correct: "A"
        },
        {
          id: "restraint",
          sol: "GOVT.9.d",
          stem: "Sentence 3 is an example of judicial restraint because it —",
          choices: [
            { letter: "A", text: "urges judges to make new policy whenever Congress fails to act on a problem" },
            { letter: "B", text: "asks judges to defer to elected officials unless a violation is clear" },
            { letter: "C", text: "lets the president decide which laws are constitutional" },
            { letter: "D", text: "requires the Court to hear every case that is appealed" }
          ],
          correct: "B"
        },
        {
          id: "activism",
          sol: "GOVT.9.d",
          stem: "Which sentence comes closest to describing judicial activism?",
          choices: [
            { letter: "A", text: "sentence 1" },
            { letter: "B", text: "sentence 2" },
            { letter: "C", text: "sentence 3" },
            { letter: "D", text: "sentence 6" }
          ],
          correct: "D"
        },
        {
          id: "amend",
          sol: "GOVT.9.d",
          stem: "In sentence 2, Judge A suggests that the proper way to change the meaning of the Constitution is through —",
          choices: [
            { letter: "A", text: "the amendment process" },
            { letter: "B", text: "new rulings by federal judges" },
            { letter: "C", text: "executive orders" },
            { letter: "D", text: "opinion polls" }
          ],
          correct: "A"
        }
      ]
    },

    /* ---------- long ---------- */
    {
      id: "fed-congress-power-grows",
      family: "FED",
      title: "How the reach of Congress changed",
      kind: "The Federal Government · GOVT.7",
      blurb: "Implied powers, new amendments and a fight over war powers.",
      level: 3,
      passage: "<p>" + N(1) + "Article I, Section 8, lists the <strong>expressed powers</strong> of Congress, such as the power to tax, coin money, declare war and regulate commerce among the states. " + N(2) + "Its final clause gives Congress power to make all laws \"necessary and proper\" for carrying out those powers. " + N(3) + "Over two centuries, this clause and the commerce clause became the basis for a much larger national government.</p>" +
        "<ul><li><strong>1819</strong> In McCulloch v. Maryland, the Supreme Court rules that Congress has <strong>implied powers</strong>, such as creating a national bank.</li>" +
        "<li><strong>1824</strong> Gibbons v. Ogden gives Congress broad power over interstate commerce.</li>" +
        "<li><strong>1913</strong> The Sixteenth Amendment allows a federal income tax; the Seventeenth provides for the direct election of senators.</li>" +
        "<li><strong>1930s</strong> New Deal laws regulate wages, banking and farming under the commerce power.</li>" +
        "<li><strong>1964</strong> The Civil Rights Act bans discrimination in hotels and restaurants, relying on the commerce power.</li>" +
        "<li><strong>1973</strong> Over President Nixon's veto, Congress passes the War Powers Resolution, requiring the president to report to Congress within 48 hours of sending troops into hostilities.</li></ul>",
      claims: [
        {
          id: "implied",
          sol: "GOVT.7.b",
          stem: "In the McCulloch entry, implied powers are powers that —",
          choices: [
            { letter: "A", text: "belong only to the states under the Tenth Amendment" },
            { letter: "B", text: "are listed word for word in Article I, Section 8" },
            { letter: "C", text: "are shared by Congress and the president" },
            { letter: "D", text: "are not listed but come from the listed ones" }
          ],
          correct: "D"
        },
        {
          id: "clause",
          sol: "GOVT.7.b",
          stem: "The clause quoted in sentence 2 is often called the —",
          choices: [
            { letter: "A", text: "elastic clause" },
            { letter: "B", text: "supremacy clause" },
            { letter: "C", text: "full faith and credit clause" },
            { letter: "D", text: "establishment clause" }
          ],
          correct: "A"
        },
        {
          id: "commerce",
          sol: "GOVT.7.b",
          stem: "Which conclusion about the commerce power is best supported by the timeline?",
          choices: [
            { letter: "A", text: "Congress's power over commerce has narrowed steadily since 1824." },
            { letter: "B", text: "Most growth in Congress's power came through executive orders." },
            { letter: "C", text: "The commerce power has supported many kinds of federal laws." },
            { letter: "D", text: "The Supreme Court has never ruled on the powers of Congress." }
          ],
          correct: "C"
        },
        {
          id: "seventeenth",
          sol: "GOVT.7.a",
          stem: "How did the Seventeenth Amendment change the way senators are chosen?",
          choices: [
            { letter: "A", text: "Senators were appointed by the president instead of elected." },
            { letter: "B", text: "Voters, not state legislatures, began electing senators." },
            { letter: "C", text: "Each state's number of senators began to depend on its population." },
            { letter: "D", text: "Senators' terms were shortened from six years to four." }
          ],
          correct: "B"
        },
        {
          id: "war-powers",
          sol: "GOVT.8.c",
          stem: "The War Powers Resolution is best understood as an effort by Congress to —",
          choices: [
            { letter: "A", text: "give the president sole power to declare war" },
            { letter: "B", text: "transfer command of the armed forces from the president to the Senate" },
            { letter: "C", text: "end the president's role as commander in chief" },
            { letter: "D", text: "check the president's use of troops without a declaration of war" }
          ],
          correct: "D"
        },
        {
          id: "veto-override",
          sol: "GOVT.7.b",
          stem: "The phrase \"over President Nixon's veto\" in the 1973 entry shows that —",
          choices: [
            { letter: "A", text: "Nixon signed the bill after Congress changed it" },
            { letter: "B", text: "the Supreme Court approved the law instead of the president" },
            { letter: "C", text: "two-thirds of each house voted to pass the law anyway" },
            { letter: "D", text: "the bill became law because Congress adjourned" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "fed-twenty-fifth",
      family: "FED",
      title: "Filling the top offices",
      kind: "The Federal Government · GOVT.8",
      blurb: "The Twenty-fifth Amendment and the only unelected president.",
      level: 3,
      passage: "<p>" + N(1) + "The original Constitution was unclear about what happened when a president died or became unable to serve, and it had no way to fill an empty vice presidency. " + N(2) + "After the assassination of President John F. Kennedy in 1963, Congress proposed the <strong>Twenty-fifth Amendment</strong>, ratified in 1967.</p>" +
        "<blockquote><p>" + N(3) + "In case of the removal of the President from office or of his death or resignation, the Vice President shall become President.</p>" +
        "<p>" + N(4) + "Whenever there is a vacancy in the office of the Vice President, the President shall nominate a Vice President who shall take office upon confirmation by a majority vote of both Houses of Congress.</p></blockquote>" +
        "<p class=\"src\">— Twenty-fifth Amendment, Sections 1 and 2</p>" +
        "<p>" + N(5) + "The amendment was soon tested. " + N(6) + "In 1973 Vice President Spiro Agnew resigned, and President Richard Nixon nominated Gerald Ford, whom Congress confirmed. " + N(7) + "When Nixon resigned in 1974, Ford became president, and Congress confirmed Nelson Rockefeller as his vice president. " + N(8) + "Other sections let a president, or the vice president and a majority of the cabinet, declare that the president is temporarily unable to serve, making the vice president <strong>acting president</strong>.</p>",
      claims: [
        {
          id: "ford",
          sol: "GOVT.8.b",
          stem: "Based on the passage, Gerald Ford became president without ever being —",
          choices: [
            { letter: "A", text: "confirmed by Congress" },
            { letter: "B", text: "a member of Congress" },
            { letter: "C", text: "elected president or vice president" },
            { letter: "D", text: "nominated for office by a sitting president" }
          ],
          correct: "C"
        },
        {
          id: "cause",
          sol: "GOVT.8.b",
          stem: "According to sentence 2, which event led Congress to propose the Twenty-fifth Amendment?",
          choices: [
            { letter: "A", text: "the assassination of President Kennedy" },
            { letter: "B", text: "the resignation of President Nixon" },
            { letter: "C", text: "Roosevelt's election to a fourth term" },
            { letter: "D", text: "the impeachment of President Andrew Johnson" }
          ],
          correct: "A"
        },
        {
          id: "both-houses",
          sol: "GOVT.8.c",
          stem: "How does filling a vice presidential vacancy under sentence 4 differ from the usual Senate approval of a cabinet member?",
          choices: [
            { letter: "A", text: "No vote of Congress is needed to fill the vice presidency." },
            { letter: "B", text: "The House as well as the Senate must confirm a new vice president." },
            { letter: "C", text: "The Supreme Court must also approve the new vice president." },
            { letter: "D", text: "A two-thirds vote of the Senate alone is required for a vice president." }
          ],
          correct: "B"
        },
        {
          id: "acting",
          sol: "GOVT.8.b",
          stem: "In sentence 8, an acting president is a vice president who —",
          choices: [
            { letter: "A", text: "has been elected to a full four-year term of office" },
            { letter: "B", text: "presides over an impeachment trial" },
            { letter: "C", text: "serves as head of the cabinet only" },
            { letter: "D", text: "temporarily carries out the president's duties" }
          ],
          correct: "D"
        },
        {
          id: "sequence",
          sol: "GOVT.8.b",
          stem: "Which event described in the passage happened LAST?",
          choices: [
            { letter: "A", text: "Agnew resigned from the office of vice president." },
            { letter: "B", text: "Ford was confirmed as vice president." },
            { letter: "C", text: "The Twenty-fifth Amendment was ratified." },
            { letter: "D", text: "Rockefeller was confirmed as vice president." }
          ],
          correct: "D"
        },
        {
          id: "purpose",
          sol: "GOVT.8.a",
          stem: "The main purpose of the Twenty-fifth Amendment was to —",
          choices: [
            { letter: "A", text: "ensure the executive branch always has a lawful leader" },
            { letter: "B", text: "allow Congress to remove a president without impeachment" },
            { letter: "C", text: "limit presidents to two elected terms" },
            { letter: "D", text: "move Inauguration Day from March to January" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "fed-marbury-story",
      family: "FED",
      title: "Midnight judges and Marbury v. Madison",
      kind: "The Federal Government · GOVT.9",
      blurb: "A missing commission and a case that shaped the Supreme Court.",
      level: 3,
      passage: "<p>" + N(1) + "In the last days of his term in 1801, President John Adams, a Federalist, appointed dozens of judges and justices of the peace. " + N(2) + "One of them, William Marbury, never received his commission before Thomas Jefferson took office. " + N(3) + "Jefferson's secretary of state, James Madison, refused to deliver it. " + N(4) + "Marbury asked the Supreme Court for a <strong>writ of mandamus</strong>, a court order commanding an official to perform a duty. " + N(5) + "He relied on the Judiciary Act of 1789, which seemed to let him bring such a case directly to the Supreme Court.</p>" +
        "<p>" + N(6) + "Chief Justice John Marshall's opinion of 1803 said that Marbury had a right to his commission. " + N(7) + "But it also held that the part of the Judiciary Act he relied on was unconstitutional, because Congress could not add to the Court's original jurisdiction as set in Article III. " + N(8) + "In Marshall's words, \"a law repugnant to the constitution is void.\" " + N(9) + "Marbury lost his case, and the Court gave Jefferson's administration nothing to defy. " + N(10) + "Yet the Court claimed a far greater power: <strong>judicial review</strong> of acts of Congress.</p>",
      claims: [
        {
          id: "restraint",
          sol: "GOVT.9.d",
          stem: "A judge who believes courts should use the power named in sentence 10 rarely, striking down a law only when it clearly violates the Constitution, follows the philosophy of —",
          choices: [
            { letter: "A", text: "judicial activism" },
            { letter: "B", text: "judicial restraint" },
            { letter: "C", text: "judicial pragmatism" },
            { letter: "D", text: "selective incorporation" }
          ],
          correct: "B"
        },
        {
          id: "holding",
          sol: "GOVT.9.b",
          stem: "Which statement best summarizes the Court's decision?",
          choices: [
            { letter: "A", text: "Marbury won, and Madison was ordered to hand over the commission at once." },
            { letter: "B", text: "All of Adams's last-minute appointments were declared unconstitutional." },
            { letter: "C", text: "Marbury deserved his commission, but the Court could not order it delivered." },
            { letter: "D", text: "The Judiciary Act of 1789 was fully upheld as a proper use of Congress's power." }
          ],
          correct: "C"
        },
        {
          id: "repugnant",
          sol: "GOVT.9.b",
          stem: "In sentence 8, \"repugnant to the constitution\" most nearly means —",
          choices: [
            { letter: "A", text: "in conflict with the Constitution" },
            { letter: "B", text: "unpopular with the public" },
            { letter: "C", text: "passed without a recorded vote in Congress" },
            { letter: "D", text: "not yet signed by the president" }
          ],
          correct: "A"
        },
        {
          id: "strategy",
          sol: "GOVT.9.b",
          stem: "Sentences 9 and 10 suggest that Marshall's ruling was clever because it —",
          choices: [
            { letter: "A", text: "forced Jefferson to resign" },
            { letter: "B", text: "gave Congress the power to overrule the Court" },
            { letter: "C", text: "created a new federal court just for Marbury's commission case" },
            { letter: "D", text: "avoided a clash with Jefferson yet gained lasting power" }
          ],
          correct: "D"
        },
        {
          id: "original-jur",
          sol: "GOVT.9.a",
          stem: "Sentence 7 shows that the Supreme Court's original jurisdiction is —",
          choices: [
            { letter: "A", text: "set by each new Congress through ordinary laws" },
            { letter: "B", text: "defined by Article III of the Constitution" },
            { letter: "C", text: "decided by the president" },
            { letter: "D", text: "limited to criminal cases" }
          ],
          correct: "B"
        },
        {
          id: "effect",
          sol: "GOVT.9.b",
          stem: "Which TWO were long-term results of Marbury v. Madison? Select TWO.",
          choices: [
            { letter: "A", text: "Federal courts could declare acts of Congress unconstitutional." },
            { letter: "B", text: "Federal judges began to be elected by voters." },
            { letter: "C", text: "The judiciary became a stronger, more independent branch." },
            { letter: "D", text: "The president gained the power to remove federal judges." }
          ],
          correct: ["A", "C"]
        }
      ]
    }
  ];

  for (var i = 0; i < PACKS.length; i++) P.push(PACKS[i]);
})(typeof window !== "undefined" ? window : global);
