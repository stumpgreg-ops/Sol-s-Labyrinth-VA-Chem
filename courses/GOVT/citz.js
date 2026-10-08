/* SOL Lab — Virginia & U.S. Government · Citizenship & Elections (GOVT.5–6). Original text only. */
(function (global) {
  var P = global.HEIST_PACKS;
  if (!P || !P.push) return;
  var N = function (i) { return '<span class="n">(' + i + ')</span> '; };   // numbered sentence

  var PACKS = [
    {
      id: "citz-born-or-naturalized",
      family: "CITZ",
      title: "Born or naturalized",
      kind: "Citizenship & Elections · GOVT.5",
      blurb: "The Fourteenth Amendment names the two main roads to citizenship.",
      level: 1,
      passage: "<blockquote>" + N(1) + "All persons born or naturalized in the United States, and subject to the jurisdiction thereof, are citizens of the United States and of the State wherein they reside.</blockquote><p class=\"src\">— Fourteenth Amendment, Section 1, 1868</p><p>" + N(2) + "Citizenship can also pass from parent to child: most children born abroad to U.S. citizen parents are citizens at birth. " + N(3) + "Immigrants may become citizens through <strong>naturalization</strong>, a legal process that ends with an oath.</p>",
      claims: [
        {
          id: "paths",
          sol: "GOVT.5.a",
          stem: "According to the excerpt, which two ways can a person become a citizen of the United States?",
          choices: [
            { letter: "A", text: "by living in one state for a year or by owning property" },
            { letter: "B", text: "by birth in the United States or by naturalization" },
            { letter: "C", text: "by paying taxes or by serving in the armed forces" },
            { letter: "D", text: "by registering to vote or by passing a civics course" }
          ],
          correct: "B"
        },
        {
          id: "vocab",
          sol: "GOVT.5.a",
          stem: "In sentence 3, the word naturalization most nearly means —",
          choices: [
            { letter: "A", text: "the act of leaving one's home country for good" },
            { letter: "B", text: "the process of registering to vote in a new state" },
            { letter: "C", text: "the granting of a short-term work permit" },
            { letter: "D", text: "the legal process by which an immigrant becomes a citizen" }
          ],
          correct: "D"
        },
        {
          id: "state",
          sol: "GOVT.5.a",
          stem: "According to the amendment, a citizen of the United States is also a citizen of —",
          choices: [
            { letter: "A", text: "the state in which he or she resides" },
            { letter: "B", text: "the state in which he or she was born" },
            { letter: "C", text: "the country where his or her parents were born" },
            { letter: "D", text: "every state in which he or she owns property" }
          ],
          correct: "A"
        },
        {
          id: "steps",
          sol: "GOVT.5.a",
          stem: "A woman born in Peru now lives in Virginia as a lawful permanent resident. What must she do before she can be naturalized?",
          choices: [
            { letter: "A", text: "serve two years in the U.S. armed forces" },
            { letter: "B", text: "marry a citizen of the United States" },
            { letter: "C", text: "pass tests of English and of U.S. civics" },
            { letter: "D", text: "buy a home in the state where she lives" }
          ],
          correct: "C"
        },
        {
          id: "office",
          sol: "GOVT.5.a",
          stem: "Which office may a naturalized citizen NOT hold?",
          choices: [
            { letter: "A", text: "United States senator" },
            { letter: "B", text: "President of the United States" },
            { letter: "C", text: "member of the House of Representatives" },
            { letter: "D", text: "governor of Virginia" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "citz-suffrage-amendments",
      family: "CITZ",
      title: "Five amendments, more voters",
      kind: "Citizenship & Elections · GOVT.6",
      blurb: "A timeline of the amendments that widened the right to vote.",
      level: 1,
      passage: "<p>" + N(1) + "Amendments that widened the right to vote:</p><ul><li><strong>1870</strong> Fifteenth: no denial of the vote because of race</li><li><strong>1920</strong> Nineteenth: no denial of the vote because of sex</li><li><strong>1961</strong> Twenty-third: residents of Washington, D.C., gain electoral votes for president</li><li><strong>1964</strong> Twenty-fourth: no <strong>poll tax</strong> in federal elections</li><li><strong>1971</strong> Twenty-sixth: voting age lowered to 18</li></ul>",
      claims: [
        {
          id: "first",
          sol: "GOVT.6.a",
          stem: "Which of these amendments was ratified FIRST?",
          choices: [
            { letter: "A", text: "the Nineteenth Amendment" },
            { letter: "B", text: "the Fifteenth Amendment" },
            { letter: "C", text: "the Twenty-sixth Amendment" },
            { letter: "D", text: "the Twenty-fourth Amendment" }
          ],
          correct: "B"
        },
        {
          id: "polltax",
          sol: "GOVT.6.a",
          stem: "In the timeline, a poll tax is —",
          choices: [
            { letter: "A", text: "a tax on the profits of companies that conduct polls" },
            { letter: "B", text: "a fine charged to citizens who do not vote" },
            { letter: "C", text: "a sales tax collected at polling places" },
            { letter: "D", text: "a fee a person had to pay in order to vote" }
          ],
          correct: "D"
        },
        {
          id: "young",
          sol: "GOVT.6.a",
          stem: "Which group gained the right to vote through the Twenty-sixth Amendment?",
          choices: [
            { letter: "A", text: "citizens aged 18 to 20" },
            { letter: "B", text: "women in every state" },
            { letter: "C", text: "residents of the District of Columbia" },
            { letter: "D", text: "formerly enslaved men" }
          ],
          correct: "A"
        },
        {
          id: "cause",
          sol: "GOVT.6.a",
          stem: "Which development most directly led to the Twenty-sixth Amendment?",
          choices: [
            { letter: "A", text: "the end of Reconstruction in the South" },
            { letter: "B", text: "the campaign for women's suffrage" },
            { letter: "C", text: "the drafting of young men who could not vote during the Vietnam War" },
            { letter: "D", text: "the march from Selma to Montgomery" }
          ],
          correct: "C"
        },
        {
          id: "pattern",
          sol: "GOVT.6.a",
          stem: "Which conclusion is best supported by the timeline?",
          choices: [
            { letter: "A", text: "Most changes to voting rights came from Supreme Court rulings." },
            { letter: "B", text: "Over time, amendments protected the votes of more groups." },
            { letter: "C", text: "The voting age has been lowered twice by amendment." },
            { letter: "D", text: "Voting rights were mostly settled before 1900." }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "citz-duty-or-responsibility",
      family: "CITZ",
      title: "Duty or responsibility?",
      kind: "Citizenship & Elections · GOVT.5",
      blurb: "A two-column chart sorts what citizens must do from what they should do.",
      level: 1,
      passage: "<p>" + N(1) + "A civics class sorted the obligations of citizens into two columns.</p><table><tr><th>Duties (required by law)</th><th>Responsibilities (voluntary)</th></tr><tr><td>Obey laws</td><td>Vote in elections</td></tr><tr><td>Pay taxes</td><td>Keep informed about issues</td></tr><tr><td>Serve on a jury when summoned</td><td>Perform public service</td></tr><tr><td>Register with Selective Service (men 18–25)</td><td>Practice personal and fiscal responsibility</td></tr></table><p>" + N(2) + "Failing to perform a <strong>duty</strong> can bring a legal penalty.</p>",
      claims: [
        {
          id: "jury",
          sol: "GOVT.5.c",
          stem: "A citizen ignores a jury summons without an excuse. According to the chart, this person has failed to —",
          choices: [
            { letter: "A", text: "carry out a duty required by law" },
            { letter: "B", text: "meet a voluntary responsibility" },
            { letter: "C", text: "complete a step of naturalization" },
            { letter: "D", text: "exercise a First Amendment right" }
          ],
          correct: "A"
        },
        {
          id: "vote",
          sol: "GOVT.5.d",
          stem: "Why is voting listed as a responsibility rather than a duty?",
          choices: [
            { letter: "A", text: "Only property owners may vote in local elections." },
            { letter: "B", text: "Voting is required only in presidential elections." },
            { letter: "C", text: "No law requires eligible citizens to cast a ballot." },
            { letter: "D", text: "The Constitution forbids states from requiring registration." }
          ],
          correct: "C"
        },
        {
          id: "tax",
          sol: "GOVT.5.b",
          stem: "Which action is an example of a citizen performing the duty of paying taxes?",
          choices: [
            { letter: "A", text: "volunteering at a food bank on weekends" },
            { letter: "B", text: "reading several news sources before an election" },
            { letter: "C", text: "making a monthly budget for household spending" },
            { letter: "D", text: "filing an income tax return by the April deadline" }
          ],
          correct: "D"
        },
        {
          id: "vocab",
          sol: "GOVT.5.b",
          stem: "In sentence 2, the word duty most nearly means —",
          choices: [
            { letter: "A", text: "a paid job with the government" },
            { letter: "B", text: "an action that the law requires" },
            { letter: "C", text: "a favor a person may choose to do" },
            { letter: "D", text: "a tax charged on imported goods" }
          ],
          correct: "B"
        },
        {
          id: "service",
          sol: "GOVT.5.e",
          stem: "Which activity is an example of public service?",
          choices: [
            { letter: "A", text: "joining a town's volunteer rescue squad" },
            { letter: "B", text: "paying a fine for a parking ticket" },
            { letter: "C", text: "registering with Selective Service at 18" },
            { letter: "D", text: "opening a savings account at a bank" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "citz-naturalization-path",
      family: "CITZ",
      title: "The road to the oath",
      kind: "Citizenship & Elections · GOVT.5",
      blurb: "The steps an immigrant takes to become a naturalized citizen.",
      level: 1,
      passage: "<p>" + N(1) + "Most immigrants who become citizens follow the path of naturalization. " + N(2) + "An applicant must usually be at least 18 and a <strong>lawful permanent resident</strong>, the status shown by a \"green card,\" for five years, or for three years if married to and living with a U.S. citizen. " + N(3) + "The applicant files a form with U.S. Citizenship and Immigration Services (USCIS), is fingerprinted for a background check, and must show good moral character. " + N(4) + "At an interview the applicant must speak and read basic English and pass a civics test on U.S. history and government. " + N(5) + "The final step is a public ceremony in which new citizens take the <strong>Oath of Allegiance</strong>. " + N(6) + "Children under 18 who hold green cards generally become citizens automatically when a parent is naturalized.</p>",
      claims: [
        {
          id: "last",
          sol: "GOVT.5.a",
          stem: "Which step in the process comes LAST?",
          choices: [
            { letter: "A", text: "filing an application with USCIS" },
            { letter: "B", text: "being fingerprinted for a background check" },
            { letter: "C", text: "passing the civics test at the interview" },
            { letter: "D", text: "taking the Oath of Allegiance at a ceremony" }
          ],
          correct: "D"
        },
        {
          id: "lpr",
          sol: "GOVT.5.a",
          stem: "In sentence 2, a lawful permanent resident is —",
          choices: [
            { letter: "A", text: "a noncitizen allowed to live and work in the country permanently" },
            { letter: "B", text: "a citizen who was born in a United States territory" },
            { letter: "C", text: "a visitor who holds a tourist visa for six months" },
            { letter: "D", text: "a citizen who has lived in one state since birth" }
          ],
          correct: "A"
        },
        {
          id: "wait",
          sol: "GOVT.5.a",
          stem: "A man has held a green card for two years and is not married. Based on the passage, he —",
          choices: [
            { letter: "A", text: "may apply for citizenship right away" },
            { letter: "B", text: "must first serve in the armed forces" },
            { letter: "C", text: "must usually wait about three more years to apply" },
            { letter: "D", text: "can never become a naturalized citizen" }
          ],
          correct: "C"
        },
        {
          id: "agency",
          sol: "GOVT.5.a",
          stem: "Which federal agency reviews applications for naturalization?",
          choices: [
            { letter: "A", text: "the Department of State" },
            { letter: "B", text: "U.S. Citizenship and Immigration Services" },
            { letter: "C", text: "the Federal Election Commission" },
            { letter: "D", text: "the Selective Service System" }
          ],
          correct: "B"
        },
        {
          id: "civics",
          sol: "GOVT.5.f",
          stem: "The civics test reflects the idea that citizens should —",
          choices: [
            { letter: "A", text: "keep informed about how their government works" },
            { letter: "B", text: "join a political party before voting" },
            { letter: "C", text: "serve on a jury within a year of the oath" },
            { letter: "D", text: "own property in the community where they live" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "citz-jury-box",
      family: "CITZ",
      title: "Twelve citizens in the box",
      kind: "Citizenship & Elections · GOVT.5",
      blurb: "The Sixth Amendment promises a jury trial, and ordinary citizens make it work.",
      level: 2,
      passage: "<blockquote>" + N(1) + "In all criminal prosecutions, the accused shall enjoy the right to a speedy and public trial, by an impartial jury of the State and district wherein the crime shall have been committed ...</blockquote><p class=\"src\">— Sixth Amendment, 1791</p><p>" + N(2) + "That promise depends on ordinary citizens. " + N(3) + "Courts draw the names of possible jurors from lists such as voter registration records. " + N(4) + "A person who receives a <strong>summons</strong> must report unless the court excuses him or her. " + N(5) + "Through questioning, the judge and lawyers remove people who might be biased. " + N(6) + "Jurors then hear the evidence, follow the judge's instructions on the law, and decide the facts.</p>",
      claims: [
        {
          id: "impartial",
          sol: "GOVT.5.c",
          stem: "According to the Sixth Amendment, a jury in a criminal trial must be —",
          choices: [
            { letter: "A", text: "chosen by the accused person's lawyer" },
            { letter: "B", text: "made up of judges from a higher court" },
            { letter: "C", text: "impartial and drawn from where the crime occurred" },
            { letter: "D", text: "selected from people who know the accused" }
          ],
          correct: "C"
        },
        {
          id: "summons",
          sol: "GOVT.5.c",
          stem: "In sentence 4, a summons is —",
          choices: [
            { letter: "A", text: "an official order to appear in court" },
            { letter: "B", text: "a written verdict signed by the jury" },
            { letter: "C", text: "a request by a defendant for a new trial" },
            { letter: "D", text: "a bill passed to pay jurors for their time" }
          ],
          correct: "A"
        },
        {
          id: "why",
          sol: "GOVT.5.c",
          stem: "Which statement best explains why jury service is important to American government?",
          choices: [
            { letter: "A", text: "It allows citizens to write the laws used in court." },
            { letter: "B", text: "It lets judges avoid deciding difficult cases." },
            { letter: "C", text: "It replaces the need for lawyers in criminal cases." },
            { letter: "D", text: "It protects the right of the accused to a fair trial." }
          ],
          correct: "D"
        },
        {
          id: "question",
          sol: "GOVT.5.c",
          stem: "The questioning described in sentence 5 is mainly meant to —",
          choices: [
            { letter: "A", text: "speed up the trial by skipping evidence" },
            { letter: "B", text: "remove possible jurors who may be biased" },
            { letter: "C", text: "choose the jurors who have legal training" },
            { letter: "D", text: "let the accused select the jury" }
          ],
          correct: "B"
        },
        {
          id: "alike",
          sol: "GOVT.5.b",
          stem: "Serving on a jury when summoned and paying taxes are alike because both are —",
          choices: [
            { letter: "A", text: "duties that the law requires of citizens" },
            { letter: "B", text: "voluntary acts of community service" },
            { letter: "C", text: "rights listed in the First Amendment" },
            { letter: "D", text: "steps required for naturalization" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "citz-selective-service",
      family: "CITZ",
      title: "Volunteers, and a list just in case",
      kind: "Citizenship & Elections · GOVT.5",
      blurb: "An all-volunteer military, Selective Service registration, and service out of uniform.",
      level: 2,
      passage: "<p>" + N(1) + "The United States has relied on an <strong>all-volunteer force</strong> since 1973, when the military draft ended near the close of the Vietnam War. " + N(2) + "Even so, almost all men living in the United States must register with the <strong>Selective Service System</strong> within 30 days of turning 18, and the requirement lasts through age 25. " + N(3) + "Registering does not mean a man will serve; it gives the government a list it could use if Congress and the president restored a draft in a national emergency. " + N(4) + "Men who fail to register can lose eligibility for federal jobs. " + N(5) + "Many Americans also serve without a uniform, through programs such as the Peace Corps and AmeriCorps or as volunteers in their own communities.</p>",
      claims: [
        {
          id: "today",
          sol: "GOVT.5.h",
          stem: "Which statement about the U.S. military today is accurate?",
          choices: [
            { letter: "A", text: "Every man is drafted for two years at age 18." },
            { letter: "B", text: "Its members volunteer; no one is currently drafted." },
            { letter: "C", text: "Only women may volunteer for military service." },
            { letter: "D", text: "Registering with Selective Service means enlisting." }
          ],
          correct: "B"
        },
        {
          id: "purpose",
          sol: "GOVT.5.h",
          stem: "According to sentence 3, the main purpose of registration is to —",
          choices: [
            { letter: "A", text: "keep a list ready in case a draft is restored" },
            { letter: "B", text: "recruit volunteers for the Peace Corps" },
            { letter: "C", text: "collect taxes from young workers" },
            { letter: "D", text: "register young men to vote" }
          ],
          correct: "A"
        },
        {
          id: "vocab",
          sol: "GOVT.5.h",
          stem: "In sentence 1, an all-volunteer force is —",
          choices: [
            { letter: "A", text: "a group of unpaid workers at a charity" },
            { letter: "B", text: "a militia organized by each state's governor" },
            { letter: "C", text: "a military made up of people who choose to enlist" },
            { letter: "D", text: "an army that serves only during wartime" }
          ],
          correct: "C"
        },
        {
          id: "penalty",
          sol: "GOVT.5.h",
          stem: "Based on the passage, a man who does not register may —",
          choices: [
            { letter: "A", text: "lose his citizenship" },
            { letter: "B", text: "be barred from voting in state elections" },
            { letter: "C", text: "be required to serve in the military at once" },
            { letter: "D", text: "lose eligibility for federal jobs" }
          ],
          correct: "D"
        },
        {
          id: "service",
          sol: "GOVT.5.e",
          stem: "Sentence 5 supports the conclusion that public service —",
          choices: [
            { letter: "A", text: "is limited to members of the armed forces" },
            { letter: "B", text: "can take place outside the military as well" },
            { letter: "C", text: "is required of every citizen by federal law" },
            { letter: "D", text: "ended when the draft ended in 1973" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "citz-poll-numbers",
      family: "CITZ",
      title: "Reading a poll",
      kind: "Citizenship & Elections · GOVT.6",
      blurb: "A poll a week before a governor's race, and an ad that spins it.",
      level: 2,
      passage: "<p>" + N(1) + "A news outlet polled 1,000 randomly selected likely voters one week before a governor's race. " + N(2) + "Pollsters use a <strong>random sample</strong> so that every likely voter has an equal chance of being chosen. " + N(3) + "The poll's <strong>margin of error</strong> is plus or minus 3 percentage points.</p><table><tr><th>Choice</th><th>Support</th></tr><tr><td>Candidate X</td><td>46%</td></tr><tr><td>Candidate Y</td><td>44%</td></tr><tr><td>Undecided</td><td>10%</td></tr></table><p>" + N(4) + "Two days later, an online ad for Candidate X claimed that X was \"pulling away\" from Y. " + N(5) + "Both campaigns began spending more on ads aimed at undecided voters.</p>",
      claims: [
        {
          id: "close",
          sol: "GOVT.6.d",
          stem: "Which conclusion is best supported by the poll?",
          choices: [
            { letter: "A", text: "Candidate X is certain to win the election." },
            { letter: "B", text: "Candidate Y has already lost most undecided voters." },
            { letter: "C", text: "The race is close, since the gap is within the margin of error." },
            { letter: "D", text: "Too few people were polled for the results to mean anything." }
          ],
          correct: "C"
        },
        {
          id: "margin",
          sol: "GOVT.6.d",
          stem: "In sentence 3, the margin of error is —",
          choices: [
            { letter: "A", text: "the number of voters who refused to answer" },
            { letter: "B", text: "the range within which the true result probably falls" },
            { letter: "C", text: "the lead a candidate needs in order to win" },
            { letter: "D", text: "the share of voters who are undecided" }
          ],
          correct: "B"
        },
        {
          id: "random",
          sol: "GOVT.6.d",
          stem: "Why do pollsters choose a random sample?",
          choices: [
            { letter: "A", text: "so the sample reflects the whole group of voters" },
            { letter: "B", text: "so only the most informed voters are counted" },
            { letter: "C", text: "so the poll can be finished more quickly" },
            { letter: "D", text: "so each campaign can choose half of those polled" }
          ],
          correct: "A"
        },
        {
          id: "check",
          sol: "GOVT.5.f",
          stem: "A voter wants to judge the claim in the ad. Which step would best help?",
          choices: [
            { letter: "A", text: "sharing the ad with friends to see their reactions" },
            { letter: "B", text: "trusting the claim because it appeared online" },
            { letter: "C", text: "waiting for the other campaign's ad in reply" },
            { letter: "D", text: "reading the full poll results, including the margin of error" }
          ],
          correct: "D"
        },
        {
          id: "effect",
          sol: "GOVT.6.d",
          stem: "Sentence 5 best shows how polls can —",
          choices: [
            { letter: "A", text: "decide the winner before votes are counted" },
            { letter: "B", text: "end the need for campaign advertising" },
            { letter: "C", text: "shape where campaigns spend time and money" },
            { letter: "D", text: "replace the primary election process" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "citz-money-timeline",
      family: "CITZ",
      title: "Rules for campaign money",
      kind: "Citizenship & Elections · GOVT.6",
      blurb: "Laws, court rulings and the rise of super PACs and online donors.",
      level: 3,
      passage: "<p>" + N(1) + "Rules for campaign money have changed through both laws and court decisions.</p><ul><li><strong>1971–1974</strong> The Federal Election Campaign Act requires disclosure of contributions, limits donations, and creates the Federal Election Commission (FEC).</li><li><strong>1976</strong> In <em>Buckley v. Valeo</em>, the Supreme Court upholds limits on contributions but strikes down limits on campaign spending, treating spending as a form of speech.</li><li><strong>2002</strong> The Bipartisan Campaign Reform Act bans unlimited \"soft money\" donations to national parties.</li><li><strong>2010</strong> In <em>Citizens United v. FEC</em>, the Court rules that government may not limit independent political spending by corporations and unions.</li><li><strong>2010</strong> After a lower-court ruling, <strong>super PACs</strong> form; they may raise and spend unlimited sums but may not coordinate with candidates.</li></ul><p>" + N(2) + "Online fundraising now lets donors anywhere in the country give to a race in a single state or district.</p>",
      claims: [
        {
          id: "first",
          sol: "GOVT.6.b",
          stem: "Which of these happened FIRST?",
          choices: [
            { letter: "A", text: "Super PACs began raising unlimited sums." },
            { letter: "B", text: "Congress banned soft money to national parties." },
            { letter: "C", text: "The Federal Election Commission was created." },
            { letter: "D", text: "The Court decided Citizens United v. FEC." }
          ],
          correct: "C"
        },
        {
          id: "speech",
          sol: "GOVT.6.b",
          stem: "In Buckley v. Valeo and Citizens United, the Supreme Court relied mainly on which constitutional protection?",
          choices: [
            { letter: "A", text: "the freedom of speech in the First Amendment" },
            { letter: "B", text: "the right to a jury trial in the Sixth Amendment" },
            { letter: "C", text: "the equal protection clause of the Fourteenth Amendment" },
            { letter: "D", text: "the powers reserved to the states in the Tenth Amendment" }
          ],
          correct: "A"
        },
        {
          id: "superpac",
          sol: "GOVT.6.b",
          stem: "As used in the timeline, a super PAC is a group that —",
          choices: [
            { letter: "A", text: "gives unlimited sums directly to a candidate" },
            { letter: "B", text: "spends unlimited sums but may not coordinate with a candidate" },
            { letter: "C", text: "collects taxes to pay for presidential campaigns" },
            { letter: "D", text: "enforces federal campaign finance laws" }
          ],
          correct: "B"
        },
        {
          id: "national",
          sol: "GOVT.6.b",
          stem: "Sentence 2 describes which trend in campaign finance?",
          choices: [
            { letter: "A", text: "the end of disclosure rules for donors" },
            { letter: "B", text: "a return to public funding of campaigns" },
            { letter: "C", text: "a ban on donations from individuals" },
            { letter: "D", text: "the nationalization of funding for local races" }
          ],
          correct: "D"
        },
        {
          id: "pac",
          sol: "GOVT.6.b",
          stem: "How do interest groups most often use a political action committee (PAC)?",
          choices: [
            { letter: "A", text: "to collect members' donations and give to candidates who share their goals" },
            { letter: "B", text: "to draw new district lines after each census" },
            { letter: "C", text: "to count ballots and certify election results" },
            { letter: "D", text: "to nominate candidates in place of a primary" }
          ],
          correct: "A"
        },
        {
          id: "two",
          sol: "GOVT.6.b",
          stem: "Which TWO statements are supported by the timeline? Select TWO.",
          choices: [
            { letter: "A", text: "Court rulings have limited some of Congress's rules on campaign spending." },
            { letter: "B", text: "Congress has ended all limits on contributions to candidates." },
            { letter: "C", text: "Disclosure of contributions became a federal requirement in the 1970s." },
            { letter: "D", text: "Super PACs may plan strategy directly with the candidates they support." }
          ],
          correct: ["A", "C"]
        }
      ]
    },
    {
      id: "citz-path-to-nomination",
      family: "CITZ",
      title: "Picking the party's nominee",
      kind: "Citizenship & Elections · GOVT.5–6",
      blurb: "Primaries, conventions, Virginia's open primaries and the role of third parties.",
      level: 2,
      passage: "<p>" + N(1) + "Before November, each party must decide who will carry its label. " + N(2) + "In a <strong>primary election</strong>, voters choose the party's nominee directly. " + N(3) + "In a closed primary only registered party members vote; in an open primary any registered voter may ask for either party's ballot. " + N(4) + "Virginia voters do not register by party, so the state's primaries are open, although a voter may take only one party's ballot. " + N(5) + "A party may instead choose its nominee at a <strong>convention</strong> run by party activists. " + N(6) + "Every four years, delegates meet at national conventions to nominate a presidential candidate and adopt a <strong>platform</strong>, a statement of the party's positions. " + N(7) + "Most American elections are won by the top vote-getter in a single-member district, a system that tends to keep two major parties strong. " + N(8) + "Third parties rarely win, but they can draw votes from major candidates and push the major parties to adopt their ideas.</p>",
      claims: [
        {
          id: "virginia",
          sol: "GOVT.6.c",
          stem: "Based on sentence 4, a Virginia voter on primary day may —",
          choices: [
            { letter: "A", text: "vote in both parties' primaries" },
            { letter: "B", text: "vote only after joining a party" },
            { letter: "C", text: "choose either party's ballot, but not both" },
            { letter: "D", text: "vote only in the party of the governor" }
          ],
          correct: "C"
        },
        {
          id: "platform",
          sol: "GOVT.6.c",
          stem: "In sentence 6, the word platform most nearly means —",
          choices: [
            { letter: "A", text: "the stage where the nominee speaks" },
            { letter: "B", text: "a statement of the party's positions" },
            { letter: "C", text: "the list of delegates from each state" },
            { letter: "D", text: "the rules for counting primary votes" }
          ],
          correct: "B"
        },
        {
          id: "compare",
          sol: "GOVT.6.c",
          stem: "How does a primary differ from a convention as a way to nominate candidates?",
          choices: [
            { letter: "A", text: "A primary lets voters decide; a convention is run by party activists." },
            { letter: "B", text: "A primary is run by party activists; a convention is open to all voters." },
            { letter: "C", text: "A primary chooses the president; a convention chooses local officials." },
            { letter: "D", text: "A primary is held after the general election; a convention is held before." }
          ],
          correct: "A"
        },
        {
          id: "twoparty",
          sol: "GOVT.6.c",
          stem: "Which feature of American elections most helps explain why two major parties dominate?",
          choices: [
            { letter: "A", text: "the use of public opinion polls" },
            { letter: "B", text: "the national party conventions" },
            { letter: "C", text: "the use of open primaries" },
            { letter: "D", text: "the winner-take-all single-member district" }
          ],
          correct: "D"
        },
        {
          id: "third",
          sol: "GOVT.6.c",
          stem: "Which example best illustrates sentence 8?",
          choices: [
            { letter: "A", text: "Ross Perot won about 19 percent of the popular vote in 1992 but no electoral votes." },
            { letter: "B", text: "George Washington warned against political parties in his Farewell Address." },
            { letter: "C", text: "The House of Representatives chose the president in the election of 1824." },
            { letter: "D", text: "The Republican Party first won the presidency with Abraham Lincoln in 1860." }
          ],
          correct: "A"
        },
        {
          id: "officer",
          sol: "GOVT.5.e",
          stem: "Which activity is an example of public service connected to elections?",
          choices: [
            { letter: "A", text: "donating money to a candidate" },
            { letter: "B", text: "working as an election officer at a polling place" },
            { letter: "C", text: "voting in a party primary" },
            { letter: "D", text: "putting a candidate's sign in one's yard" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "citz-electors-count",
      family: "CITZ",
      title: "Counting electors",
      kind: "Citizenship & Elections · GOVT.6",
      blurb: "How the census and reapportionment change each state's electoral votes.",
      level: 2,
      passage: "<p>" + N(1) + "Each state's number of electors equals its seats in the House of Representatives plus its two senators. " + N(2) + "The Twenty-third Amendment gives Washington, D.C., three electors, for a total of 538, and a candidate needs a majority, 270, to win. " + N(3) + "After every <strong>census</strong>, the 435 House seats are divided among the states by population, a process called <strong>reapportionment</strong>.</p><table><tr><th>State</th><th>Electoral votes, 2012–2020</th><th>Electoral votes, 2024–2028</th></tr><tr><td>Texas</td><td>38</td><td>40</td></tr><tr><td>Florida</td><td>29</td><td>30</td></tr><tr><td>Virginia</td><td>13</td><td>13</td></tr><tr><td>New York</td><td>29</td><td>28</td></tr><tr><td>California</td><td>55</td><td>54</td></tr></table><p>" + N(4) + "In 48 states and D.C., the candidate who wins the popular vote receives all of the electors; Maine and Nebraska award some electors by congressional district.</p>",
      claims: [
        {
          id: "trend",
          sol: "GOVT.6.e",
          stem: "Which conclusion is best supported by the table?",
          choices: [
            { letter: "A", text: "California lost population between 2010 and 2020." },
            { letter: "B", text: "Texas and Florida grew faster than New York and California." },
            { letter: "C", text: "Virginia's population did not change between 2010 and 2020." },
            { letter: "D", text: "Every state's electoral votes changed after the 2020 census." }
          ],
          correct: "B"
        },
        {
          id: "house",
          sol: "GOVT.6.e",
          stem: "Virginia has 13 electoral votes. How many members does Virginia have in the House of Representatives?",
          choices: [
            { letter: "A", text: "11" },
            { letter: "B", text: "13" },
            { letter: "C", text: "15" },
            { letter: "D", text: "2" }
          ],
          correct: "A"
        },
        {
          id: "reapp",
          sol: "GOVT.6.e",
          stem: "In sentence 3, reapportionment means —",
          choices: [
            { letter: "A", text: "drawing new lines for each congressional district" },
            { letter: "B", text: "counting each state's electoral votes in December" },
            { letter: "C", text: "redividing House seats among the states by population" },
            { letter: "D", text: "choosing which electors will represent a party" }
          ],
          correct: "C"
        },
        {
          id: "nomajority",
          sol: "GOVT.6.e",
          stem: "If no candidate wins 270 electoral votes, how is the president chosen?",
          choices: [
            { letter: "A", text: "The Senate chooses, with each senator casting one vote." },
            { letter: "B", text: "The candidate with the most popular votes wins." },
            { letter: "C", text: "The Supreme Court chooses between the top two." },
            { letter: "D", text: "The House chooses, with each state delegation casting one vote." }
          ],
          correct: "D"
        },
        {
          id: "popular",
          sol: "GOVT.6.e",
          stem: "Which statement best explains how a candidate can win the presidency while losing the national popular vote, as happened in 2000 and 2016?",
          choices: [
            { letter: "A", text: "Narrow wins in states with many electors can outweigh large losses elsewhere." },
            { letter: "B", text: "Electors in most states are free to ignore their state's voters." },
            { letter: "C", text: "The House of Representatives decides close national races." },
            { letter: "D", text: "Votes from large states count less than votes from small states." }
          ],
          correct: "A"
        },
        {
          id: "virginia",
          sol: "GOVT.6.e",
          stem: "How did the 2020 census affect Virginia's role in presidential elections?",
          choices: [
            { letter: "A", text: "Virginia gained an elector because its population grew." },
            { letter: "B", text: "Virginia lost an elector to a faster-growing state." },
            { letter: "C", text: "Virginia began dividing its electors by district." },
            { letter: "D", text: "Virginia kept the same number of electors as before." }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "citz-first-paycheck",
      family: "CITZ",
      title: "Maya's first paycheck",
      kind: "Citizenship & Elections · GOVT.5",
      blurb: "A pay stub, a budget and a car loan: taxes and fiscal responsibility.",
      level: 2,
      passage: "<p>" + N(1) + "Maya, 18, took a part-time job at a hardware store in Richmond. " + N(2) + "Her first pay stub showed these lines.</p><table><tr><th>Item</th><th>Amount</th></tr><tr><td>Gross pay (40 hours at $15)</td><td>$600.00</td></tr><tr><td>Federal income tax withheld</td><td>−$30.00</td></tr><tr><td>Social Security and Medicare</td><td>−$45.90</td></tr><tr><td>Virginia income tax withheld</td><td>−$18.00</td></tr><tr><td>Net pay</td><td>$506.10</td></tr></table><p>" + N(3) + "Maya made a <strong>budget</strong>: $200 into savings for a used car, $150 for gas and her phone, and the rest for other spending. " + N(4) + "Before choosing between two car loans, she compared their interest rates and read reviews of both lenders from several independent sources.</p>",
      claims: [
        {
          id: "taxes",
          sol: "GOVT.5.b",
          stem: "Which statement about Maya's pay stub is accurate?",
          choices: [
            { letter: "A", text: "Her employer kept money for the state but not the nation." },
            { letter: "B", text: "Her taxes were higher than her net pay." },
            { letter: "C", text: "Money was withheld for both federal and state taxes." },
            { letter: "D", text: "She will pay no tax because she works part-time." }
          ],
          correct: "C"
        },
        {
          id: "math",
          sol: "GOVT.5.g",
          stem: "How much of Maya's net pay is left for other spending?",
          choices: [
            { letter: "A", text: "$156.10" },
            { letter: "B", text: "$250.00" },
            { letter: "C", text: "$306.10" },
            { letter: "D", text: "$450.00" }
          ],
          correct: "A"
        },
        {
          id: "budget",
          sol: "GOVT.5.g",
          stem: "In sentence 3, a budget is —",
          choices: [
            { letter: "A", text: "a loan from a bank to buy a car" },
            { letter: "B", text: "a plan for how income will be saved and spent" },
            { letter: "C", text: "a tax withheld from each paycheck" },
            { letter: "D", text: "a report of a business's profits" }
          ],
          correct: "B"
        },
        {
          id: "cost",
          sol: "GOVT.5.g",
          stem: "Maya is tempted to spend her $200 savings on concert tickets. What is the opportunity cost of that choice?",
          choices: [
            { letter: "A", text: "the taxes withheld from her paycheck" },
            { letter: "B", text: "the price the concert charges other fans" },
            { letter: "C", text: "the interest a bank charges on loans" },
            { letter: "D", text: "the progress she would have made toward a car" }
          ],
          correct: "D"
        },
        {
          id: "informed",
          sol: "GOVT.5.f",
          stem: "Sentence 4 shows Maya keeping informed by —",
          choices: [
            { letter: "A", text: "choosing the first lender she heard about" },
            { letter: "B", text: "comparing several sources before deciding" },
            { letter: "C", text: "relying on the lender's own advertising" },
            { letter: "D", text: "asking the store manager to choose for her" }
          ],
          correct: "B"
        },
        {
          id: "why",
          sol: "GOVT.5.b",
          stem: "Why do governments collect taxes like those on Maya's pay stub?",
          choices: [
            { letter: "A", text: "to pay for public goods and services such as roads and defense" },
            { letter: "B", text: "to reward workers who save part of their pay" },
            { letter: "C", text: "to fund the profits of private companies" },
            { letter: "D", text: "to pay the salaries of political party leaders" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "citz-salamander-district",
      family: "CITZ",
      title: "The Gerry-mander",
      kind: "Citizenship & Elections · GOVT.6",
      blurb: "From an 1812 cartoon to Virginia's redistricting commission.",
      level: 3,
      passage: "<p>" + N(1) + "In 1812 Massachusetts governor Elbridge Gerry signed a law redrawing state senate districts to help his party. " + N(2) + "One district north of Boston twisted so oddly that a newspaper cartoon added claws, wings, and a dragon-like head to its outline and named it the \"Gerry-mander.\" " + N(3) + "The name stuck: <strong>gerrymandering</strong> means drawing district lines to give one party or group an advantage. " + N(4) + "Map-makers use two main methods. " + N(5) + "<strong>Packing</strong> crowds the other side's voters into a few districts that it wins by huge margins, while <strong>cracking</strong> splits those voters among many districts where they fall just short. " + N(6) + "After each census, states must redraw lines so that districts have nearly equal populations, a rule the Supreme Court set in its \"one person, one vote\" cases of the 1960s. " + N(7) + "In 2019, in <em>Rucho v. Common Cause</em>, the Court ruled that claims of partisan gerrymandering are political questions that federal courts cannot decide. " + N(8) + "Some states have turned to commissions instead. " + N(9) + "In 2020 Virginia voters approved a constitutional amendment creating a Virginia Redistricting Commission of eight legislators and eight citizens. " + N(10) + "When the commission deadlocked in 2021, the Supreme Court of Virginia drew the new maps with help from two outside experts.</p>",
      claims: [
        {
          id: "crack",
          sol: "GOVT.6.f",
          stem: "In sentence 5, cracking describes —",
          choices: [
            { letter: "A", text: "placing all of one party's voters in a single district" },
            { letter: "B", text: "splitting a group's voters among districts so they cannot win" },
            { letter: "C", text: "drawing districts with exactly equal land areas" },
            { letter: "D", text: "letting a court draw maps when a commission deadlocks" }
          ],
          correct: "B"
        },
        {
          id: "pack",
          sol: "GOVT.6.f",
          stem: "A state's map-makers place most of Party Q's voters into one district that Q wins with 90 percent of the vote. This is an example of —",
          choices: [
            { letter: "A", text: "cracking" },
            { letter: "B", text: "reapportionment" },
            { letter: "C", text: "packing" },
            { letter: "D", text: "a closed primary" }
          ],
          correct: "C"
        },
        {
          id: "census",
          sol: "GOVT.6.e",
          stem: "Why must states redraw district lines after each census?",
          choices: [
            { letter: "A", text: "to keep districts nearly equal in population as people move" },
            { letter: "B", text: "to change the number of senators each state elects" },
            { letter: "C", text: "to give the governor's party more seats" },
            { letter: "D", text: "to set the date of the next general election" }
          ],
          correct: "A"
        },
        {
          id: "rucho",
          sol: "GOVT.6.f",
          stem: "Which conclusion about Rucho v. Common Cause is best supported by sentence 7?",
          choices: [
            { letter: "A", text: "The Court banned all partisan gerrymandering nationwide." },
            { letter: "B", text: "The Court required every state to create a commission." },
            { letter: "C", text: "The Court struck down the one person, one vote rule." },
            { letter: "D", text: "The Court left limits on partisan maps to states and Congress." }
          ],
          correct: "D"
        },
        {
          id: "virginia",
          sol: "GOVT.6.f",
          stem: "The main purpose of Virginia's 2020 amendment was to —",
          choices: [
            { letter: "A", text: "move map-drawing from the legislature alone to a bipartisan commission" },
            { letter: "B", text: "increase the number of seats in the House of Delegates" },
            { letter: "C", text: "let the governor draw congressional districts alone" },
            { letter: "D", text: "end the census count in Virginia" }
          ],
          correct: "A"
        },
        {
          id: "effects",
          sol: "GOVT.6.f",
          stem: "Which TWO are common criticisms of gerrymandering? Select TWO.",
          choices: [
            { letter: "A", text: "It requires every district to cover the same land area." },
            { letter: "B", text: "It can leave few competitive districts where either party could win." },
            { letter: "C", text: "It moves the date of elections from year to year." },
            { letter: "D", text: "It can make some voters feel their votes count for less." }
          ],
          correct: ["B", "D"]
        }
      ]
    },
    {
      id: "citz-virginia-ballot-barriers",
      family: "CITZ",
      title: "Barriers at Virginia's polls",
      kind: "Citizenship & Elections · GOVT.6",
      blurb: "The Fifteenth Amendment's promise, the 1902 constitution, and the laws that followed.",
      level: 3,
      passage: "<blockquote>" + N(1) + "The right of citizens of the United States to vote shall not be denied or abridged by the United States or by any State on account of race, color, or previous condition of servitude.</blockquote><p class=\"src\">— Fifteenth Amendment, 1870</p><p>" + N(2) + "In Virginia that promise went unkept for decades. " + N(3) + "The Virginia Constitution of 1902 added a <strong>poll tax</strong> and strict registration requirements enforced by local registrars, and the number of Black voters in the state fell sharply. " + N(4) + "The poll tax also kept many poor white Virginians from voting. " + N(5) + "The Twenty-fourth Amendment (1964) banned poll taxes in federal elections, and in 1966, in <em>Harper v. Virginia Board of Elections</em>, the Supreme Court struck down Virginia's poll tax in state elections. " + N(6) + "The <strong>Voting Rights Act of 1965</strong> suspended literacy tests and required states with a history of discrimination, including Virginia, to get federal approval, called <strong>preclearance</strong>, before changing their voting rules. " + N(7) + "In <em>Shelby County v. Holder</em> (2013), the Court struck down the formula that decided which places needed preclearance, ruling that it rested on outdated data.</p>",
      claims: [
        {
          id: "fifteenth",
          sol: "GOVT.6.a",
          stem: "The Fifteenth Amendment prohibited governments from —",
          choices: [
            { letter: "A", text: "denying the vote because of a person's race" },
            { letter: "B", text: "denying the vote because of a person's sex" },
            { letter: "C", text: "charging a tax in order to vote" },
            { letter: "D", text: "setting the voting age above 18" }
          ],
          correct: "A"
        },
        {
          id: "cause",
          sol: "GOVT.6.a",
          stem: "Which statement best explains why the number of Black voters in Virginia fell after 1902?",
          choices: [
            { letter: "A", text: "Congress repealed the Fifteenth Amendment in 1902." },
            { letter: "B", text: "Virginia ended elections for state offices." },
            { letter: "C", text: "The new constitution added a poll tax and strict registration rules." },
            { letter: "D", text: "The Supreme Court ruled that states could ban voters by race." }
          ],
          correct: "C"
        },
        {
          id: "preclear",
          sol: "GOVT.6.a",
          stem: "In sentence 6, preclearance means —",
          choices: [
            { letter: "A", text: "federal approval of a change to voting rules before it took effect" },
            { letter: "B", text: "the removal of inactive voters from registration lists" },
            { letter: "C", text: "a test of a voter's ability to read" },
            { letter: "D", text: "the counting of absentee ballots before election day" }
          ],
          correct: "A"
        },
        {
          id: "last",
          sol: "GOVT.6.a",
          stem: "Which of these happened LAST?",
          choices: [
            { letter: "A", text: "Virginia adopted its 1902 constitution." },
            { letter: "B", text: "The Twenty-fourth Amendment was ratified." },
            { letter: "C", text: "Congress passed the Voting Rights Act." },
            { letter: "D", text: "The Court decided Harper v. Virginia Board of Elections." }
          ],
          correct: "D"
        },
        {
          id: "infer",
          sol: "GOVT.6.a",
          stem: "Sentences 3 and 5 together suggest that —",
          choices: [
            { letter: "A", text: "the poll tax never applied in Virginia" },
            { letter: "B", text: "the Twenty-fourth Amendment alone did not end Virginia's poll tax in state elections" },
            { letter: "C", text: "the Voting Rights Act created the poll tax" },
            { letter: "D", text: "the Supreme Court approved the 1902 constitution in 1966" }
          ],
          correct: "B"
        },
        {
          id: "today",
          sol: "GOVT.5.d",
          stem: "Which action by a citizen today best reflects the responsibility the passage's history highlights?",
          choices: [
            { letter: "A", text: "paying a fee to a registrar in order to vote" },
            { letter: "B", text: "registering to vote and casting a ballot in local, state and national elections" },
            { letter: "C", text: "letting others decide elections for the community" },
            { letter: "D", text: "voting only in presidential election years" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "citz-feeds-and-ads",
      family: "CITZ",
      title: "Campaigns in the feed",
      kind: "Citizenship & Elections · GOVT.5–6",
      blurb: "Two viewpoints on social media, ads and voters, with a 1960 lesson.",
      level: 3,
      passage: "<p>" + N(1) + "In 1960, the first televised presidential debates, between John F. Kennedy and Richard Nixon, showed how a new medium could shape voters' impressions. " + N(2) + "Today the new medium is digital.</p><p><strong>Viewpoint A</strong> (a campaign consultant): " + N(3) + "Social media lets a candidate with little money reach thousands of voters overnight. " + N(4) + "A video shot on a phone can travel farther than a television ad that costs millions. " + N(5) + "Small online donations let ordinary people fund the candidates they like, and voters can question candidates directly.</p><p><strong>Viewpoint B</strong> (a journalism professor): " + N(6) + "The same tools reward outrage. " + N(7) + "Platforms show users more of what they already agree with, creating <strong>echo chambers</strong>. " + N(8) + "False stories can spread faster than corrections, and <strong>microtargeted</strong> ads let campaigns send different messages to different voters with little public notice. " + N(9) + "Citizens must check claims against reliable sources before sharing them.</p><p class=\"src\">— Both viewpoints are hypothetical, written for this review.</p>",
      claims: [
        {
          id: "agree",
          sol: "GOVT.6.d",
          stem: "On which point would both writers most likely agree?",
          choices: [
            { letter: "A", text: "Television ads no longer matter in campaigns." },
            { letter: "B", text: "Social media should be banned during campaigns." },
            { letter: "C", text: "Digital media has changed how campaigns reach voters." },
            { letter: "D", text: "False stories are rare on social media." }
          ],
          correct: "C"
        },
        {
          id: "echo",
          sol: "GOVT.6.d",
          stem: "In sentence 7, an echo chamber is —",
          choices: [
            { letter: "A", text: "a setting where people mostly see views they already share" },
            { letter: "B", text: "a room used for recording campaign ads" },
            { letter: "C", text: "a debate in which each candidate repeats the other" },
            { letter: "D", text: "a poll that asks the same question twice" }
          ],
          correct: "A"
        },
        {
          id: "support",
          sol: "GOVT.6.b",
          stem: "Viewpoint A's point about small online donations relates most closely to which trend?",
          choices: [
            { letter: "A", text: "the ban on soft money to national parties" },
            { letter: "B", text: "the growing number of individual donors who give over the internet" },
            { letter: "C", text: "the end of disclosure rules for campaign donors" },
            { letter: "D", text: "the use of public funds for congressional campaigns" }
          ],
          correct: "B"
        },
        {
          id: "advice",
          sol: "GOVT.5.f",
          stem: "Which action follows the advice in sentence 9?",
          choices: [
            { letter: "A", text: "sharing a striking post quickly before it is removed" },
            { letter: "B", text: "trusting a claim because many friends have shared it" },
            { letter: "C", text: "checking a viral claim with several reliable news sources" },
            { letter: "D", text: "following only accounts that agree with one's own views" }
          ],
          correct: "C"
        },
        {
          id: "tv",
          sol: "GOVT.6.d",
          stem: "Sentence 1 supports which conclusion?",
          choices: [
            { letter: "A", text: "Debates have little effect on how voters see candidates." },
            { letter: "B", text: "Radio was more important than television in 1960." },
            { letter: "C", text: "Candidates stopped holding debates after 1960." },
            { letter: "D", text: "The way voters see candidates can depend on the medium used." }
          ],
          correct: "D"
        },
        {
          id: "micro",
          sol: "GOVT.6.d",
          stem: "Why does Viewpoint B see microtargeted ads as a problem?",
          choices: [
            { letter: "A", text: "They cost far more than television ads." },
            { letter: "B", text: "Voters may get different messages that the public rarely sees." },
            { letter: "C", text: "They can be shown only to voters over 65." },
            { letter: "D", text: "Federal law forbids candidates from paying for them." }
          ],
          correct: "B"
        }
      ]
    }
  ];

  for (var i = 0; i < PACKS.length; i++) P.push(PACKS[i]);
})(typeof window !== "undefined" ? window : global);
