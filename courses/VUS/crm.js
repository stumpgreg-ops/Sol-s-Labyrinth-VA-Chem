/* SOL Lab — Virginia and United States History · The Civil Rights Movement (VUS.16). Original text only.
   Dr. King's speeches and letters are summarized, never quoted at length. */
(function (global) {
  var P = global.HEIST_PACKS;
  if (!P || !P.push) return;
  var N = function (i) { return '<span class="n">(' + i + ')</span> '; };   // numbered sentence

  var PACKS = [
    /* ---------- tiny ---------- */
    {
      id: "crm-barbara-johns",
      family: "CRM",
      title: "The Moton walkout",
      kind: "The Civil Rights Movement · VUS.16",
      blurb: "Farmville, 1951: a sixteen-year-old leads her school out the door.",
      level: 1,
      passage: "<p>" + N(1) + "In April 1951, sixteen-year-old <strong>Barbara Johns</strong> led a student <strong>walkout</strong> at R.R. Moton High School in Prince Edward County, Virginia. " + N(2) + "Moton was overcrowded, and some classes met in tar-paper shacks, while the county's white high school had far better buildings. " + N(3) + "NAACP lawyers Oliver W. Hill, Sr. and Spottswood Robinson took the students' case. " + N(4) + "It became one of the five cases decided together in <strong>Brown v. Board of Education</strong> (1954).</p>",
      claims: [
        {
          id: "why",
          sol: "VUS.16.b",
          stem: "According to the passage, what did the Moton students protest?",
          choices: [
            { letter: "A", text: "a state law that kept them from voting" },
            { letter: "B", text: "segregated seating on county buses" },
            { letter: "C", text: "unequal and overcrowded school buildings" },
            { letter: "D", text: "the closing of their school by the county" }
          ],
          correct: "C"
        },
        {
          id: "walkout",
          sol: "VUS.16.a",
          stem: "In sentence 1, the word walkout most nearly means —",
          choices: [
            { letter: "A", text: "a protest in which people leave together" },
            { letter: "B", text: "a march from one city to another" },
            { letter: "C", text: "a lawsuit filed in federal court" },
            { letter: "D", text: "a vote by the school board" }
          ],
          correct: "A"
        },
        {
          id: "lawyers",
          sol: "VUS.16.b",
          stem: "Oliver W. Hill, Sr. is best known as —",
          choices: [
            { letter: "A", text: "the governor who closed Virginia schools in 1958" },
            { letter: "B", text: "a Richmond civil rights lawyer for the NAACP" },
            { letter: "C", text: "the founder of the Black Panther Party" },
            { letter: "D", text: "the student who led the Greensboro sit-in" }
          ],
          correct: "B"
        },
        {
          id: "result",
          sol: "VUS.16.b",
          stem: "Which statement best describes the importance of the Moton case?",
          choices: [
            { letter: "A", text: "It was settled when Virginia built a new school." },
            { letter: "B", text: "It was the first case Thurgood Marshall ever lost." },
            { letter: "C", text: "It ended segregation on interstate buses." },
            { letter: "D", text: "It was part of the case that ended legal school segregation." }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "crm-montgomery-timeline",
      family: "CRM",
      title: "From Till to Little Rock",
      kind: "The Civil Rights Movement · VUS.16",
      blurb: "Three years that turned a legal ruling into a mass movement.",
      level: 1,
      passage: "<ul><li><strong>1954</strong> Brown v. Board of Education ends legal school segregation</li><li><strong>1955</strong> Fourteen-year-old Emmett Till is murdered in Mississippi</li><li><strong>1955</strong> Rosa Parks is arrested in Montgomery, Alabama; the <strong>bus boycott</strong> begins</li><li><strong>1956</strong> The Supreme Court rules Montgomery's bus segregation unconstitutional; the boycott ends</li><li><strong>1957</strong> Nine students integrate Central High School in Little Rock, Arkansas</li></ul>",
      claims: [
        {
          id: "first",
          sol: "VUS.16.d",
          stem: "Which event on the timeline happened FIRST?",
          choices: [
            { letter: "A", text: "the integration of Central High School" },
            { letter: "B", text: "the end of the Montgomery Bus Boycott" },
            { letter: "C", text: "the arrest of Rosa Parks" },
            { letter: "D", text: "the Brown v. Board of Education decision" }
          ],
          correct: "D"
        },
        {
          id: "boycott",
          sol: "VUS.16.d",
          stem: "During the Montgomery Bus Boycott, African Americans —",
          choices: [
            { letter: "A", text: "refused to ride city buses for more than a year" },
            { letter: "B", text: "sat at lunch counters until they were served" },
            { letter: "C", text: "rode interstate buses into the Deep South" },
            { letter: "D", text: "marched from Selma to the state capital" }
          ],
          correct: "A"
        },
        {
          id: "king",
          sol: "VUS.16.c",
          stem: "The Montgomery Bus Boycott first brought national attention to which leader?",
          choices: [
            { letter: "A", text: "Malcolm X of the Nation of Islam" },
            { letter: "B", text: "Dr. Martin Luther King, Jr." },
            { letter: "C", text: "Thurgood Marshall of the NAACP" },
            { letter: "D", text: "Stokely Carmichael of SNCC" }
          ],
          correct: "B"
        },
        {
          id: "littlerock",
          sol: "VUS.16.d",
          stem: "How did President Eisenhower respond when Arkansas's governor blocked the Little Rock Nine?",
          choices: [
            { letter: "A", text: "He asked Congress to delay the Brown decision." },
            { letter: "B", text: "He closed Central High School for a year." },
            { letter: "C", text: "He sent federal troops to protect the students." },
            { letter: "D", text: "He moved the nine students to another school." }
          ],
          correct: "C"
        },
        {
          id: "till",
          sol: "VUS.16.d",
          stem: "Why did the murder of Emmett Till become a turning point?",
          choices: [
            { letter: "A", text: "It led Congress to pass the Voting Rights Act that year." },
            { letter: "B", text: "It took place during the Freedom Rides." },
            { letter: "C", text: "It ended the Montgomery Bus Boycott." },
            { letter: "D", text: "Wide coverage of the killing outraged many Americans." }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "crm-black-power",
      family: "CRM",
      title: "Black Power",
      kind: "The Civil Rights Movement · VUS.16",
      blurb: "In the mid-1960s, some activists took the movement in a new direction.",
      level: 1,
      passage: "<p>" + N(1) + "In 1966, Stokely Carmichael of the Student Nonviolent Coordinating Committee (SNCC) made the slogan <strong>Black Power</strong> popular. " + N(2) + "Supporters, inspired in part by Malcolm X, stressed racial pride, Black-owned businesses and political <strong>self-determination</strong>. " + N(3) + "Some doubted that nonviolence alone would win equality. " + N(4) + "The Black Panther Party, founded in Oakland, California, ran free breakfast programs and also carried weapons for self-defense.</p>",
      claims: [
        {
          id: "goals",
          sol: "VUS.16.f",
          stem: "Which goal did the Black Power Movement stress?",
          choices: [
            { letter: "A", text: "racial pride and community control" },
            { letter: "B", text: "returning to separate but equal schools" },
            { letter: "C", text: "ending the draft for the Korean War" },
            { letter: "D", text: "electing Martin Luther King, Jr. to Congress" }
          ],
          correct: "A"
        },
        {
          id: "differ",
          sol: "VUS.16.f",
          stem: "How did some Black Power leaders differ from Dr. King?",
          choices: [
            { letter: "A", text: "They opposed the Brown decision." },
            { letter: "B", text: "They did not support African American voting." },
            { letter: "C", text: "They questioned strict nonviolence." },
            { letter: "D", text: "They wanted to keep segregation laws." }
          ],
          correct: "C"
        },
        {
          id: "selfdet",
          sol: "VUS.16.f",
          stem: "In sentence 2, the term self-determination most nearly means —",
          choices: [
            { letter: "A", text: "obeying unjust laws without complaint" },
            { letter: "B", text: "a community deciding its own affairs" },
            { letter: "C", text: "moving to a different country" },
            { letter: "D", text: "asking courts to decide every question" }
          ],
          correct: "B"
        },
        {
          id: "panthers",
          sol: "VUS.16.f",
          stem: "Which statement is supported by sentence 4?",
          choices: [
            { letter: "A", text: "The Black Panthers were founded in the Deep South." },
            { letter: "B", text: "The Black Panthers worked only through lawsuits." },
            { letter: "C", text: "The Black Panthers were part of the SCLC." },
            { letter: "D", text: "The Black Panthers combined social programs with armed self-defense." }
          ],
          correct: "D"
        }
      ]
    },

    /* ---------- short ---------- */
    {
      id: "crm-plessy-brown",
      family: "CRM",
      title: "Two rulings, fifty-eight years apart",
      kind: "The Civil Rights Movement · VUS.16",
      blurb: "Justice Harlan's lone dissent and a unanimous Court in 1954.",
      level: 2,
      passage: "<p><strong>Source 1</strong></p><blockquote>Our Constitution is color-blind, and neither knows nor tolerates classes among citizens.</blockquote><p class=\"src\">— Justice John Marshall Harlan, dissenting in Plessy v. Ferguson, 1896</p><p><strong>Source 2</strong></p><blockquote>We conclude that in the field of public education the doctrine of \"separate but equal\" has no place. Separate educational facilities are inherently unequal.</blockquote><p class=\"src\">— Chief Justice Earl Warren, Brown v. Board of Education, 1954</p><p>" + N(1) + "In 1896, the majority in Plessy had upheld <strong>segregation</strong> laws as long as facilities were \"equal.\"</p>",
      claims: [
        {
          id: "plessy",
          sol: "VUS.16.a",
          stem: "The majority decision in Plessy v. Ferguson —",
          choices: [
            { letter: "A", text: "gave African Americans the right to vote" },
            { letter: "B", text: "ended segregation on trains" },
            { letter: "C", text: "allowed states to keep separate facilities" },
            { letter: "D", text: "was overturned by the Civil Rights Act of 1875" }
          ],
          correct: "C"
        },
        {
          id: "compare",
          sol: "VUS.16.b",
          stem: "Which statement best explains how Source 1 relates to Source 2?",
          choices: [
            { letter: "A", text: "The 1954 Court reached a view close to Harlan's earlier dissent." },
            { letter: "B", text: "Both sources defend the separate but equal doctrine." },
            { letter: "C", text: "Source 2 was written to answer Harlan directly in 1896." },
            { letter: "D", text: "Both sources deal only with railroad seating." }
          ],
          correct: "A"
        },
        {
          id: "inherent",
          sol: "VUS.16.b",
          stem: "In Source 2, the phrase inherently unequal means that separate schools —",
          choices: [
            { letter: "A", text: "were unequal only where funding was lower" },
            { letter: "B", text: "could be fixed by building new schools" },
            { letter: "C", text: "were equal if teachers had the same training" },
            { letter: "D", text: "could never be equal because separation itself harmed students" }
          ],
          correct: "D"
        },
        {
          id: "marshall",
          sol: "VUS.16.e",
          stem: "Which NAACP lawyer argued Brown before the Supreme Court and later became a justice?",
          choices: [
            { letter: "A", text: "Oliver W. Hill, Sr." },
            { letter: "B", text: "Thurgood Marshall" },
            { letter: "C", text: "A. Philip Randolph" },
            { letter: "D", text: "Bayard Rustin" }
          ],
          correct: "B"
        },
        {
          id: "virginia",
          sol: "VUS.16.b",
          stem: "How did many of Virginia's political leaders respond to the Brown decision?",
          choices: [
            { letter: "A", text: "They integrated every school in the state within a year." },
            { letter: "B", text: "They asked federal troops to enforce the decision." },
            { letter: "C", text: "They organized a policy of Massive Resistance." },
            { letter: "D", text: "They added a civil rights article to the state constitution." }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "crm-richmond-sit-ins",
      family: "CRM",
      title: "Lunch counters in Greensboro and Richmond",
      kind: "The Civil Rights Movement · VUS.16",
      blurb: "College students sit down and refuse to leave, 1960.",
      level: 2,
      passage: "<p>" + N(1) + "On February 1, 1960, four students from North Carolina A&amp;T sat down at the whites-only lunch counter of a Woolworth's store in Greensboro and asked to be served. " + N(2) + "Within weeks, <strong>sit-ins</strong> spread to dozens of Southern cities. " + N(3) + "In Richmond, students from Virginia Union University sat at the lunch counter of Thalhimers department store; thirty-four were arrested and became known as the <strong>Richmond 34</strong>. " + N(4) + "Protesters dressed neatly and did not strike back when harassed. " + N(5) + "Their arrests drew support from many Black residents, who boycotted downtown stores.</p>",
      claims: [
        {
          id: "tactic",
          sol: "VUS.16.d",
          stem: "What was the main tactic of the students in this passage?",
          choices: [
            { letter: "A", text: "filing lawsuits in state courts" },
            { letter: "B", text: "occupying segregated lunch counters peacefully" },
            { letter: "C", text: "marching across a bridge to the state capitol" },
            { letter: "D", text: "registering voters in rural counties" }
          ],
          correct: "B"
        },
        {
          id: "va",
          sol: "VUS.16.d",
          stem: "Which statement about Virginia is supported by the passage?",
          choices: [
            { letter: "A", text: "The sit-in movement began in Richmond." },
            { letter: "B", text: "Richmond's lunch counters were never segregated." },
            { letter: "C", text: "Virginia Union students joined the 1960 sit-in movement." },
            { letter: "D", text: "The Richmond 34 were students at North Carolina A&T." }
          ],
          correct: "C"
        },
        {
          id: "cd",
          sol: "VUS.16.c",
          stem: "Breaking a segregation rule openly and peacefully while accepting arrest is an example of —",
          choices: [
            { letter: "A", text: "civil disobedience" },
            { letter: "B", text: "judicial review" },
            { letter: "C", text: "Massive Resistance" },
            { letter: "D", text: "containment" }
          ],
          correct: "A"
        },
        {
          id: "boycott",
          sol: "VUS.16.a",
          stem: "According to sentence 5, how did other Richmond residents support the protest?",
          choices: [
            { letter: "A", text: "They ran for seats in the General Assembly." },
            { letter: "B", text: "They paid the students' college tuition." },
            { letter: "C", text: "They asked the governor to close the stores." },
            { letter: "D", text: "They stopped shopping at downtown stores." }
          ],
          correct: "D"
        },
        {
          id: "why-neat",
          sol: "VUS.16.d",
          stem: "Which is the most likely reason protesters dressed neatly and did not strike back?",
          choices: [
            { letter: "A", text: "to win public sympathy by contrasting with violent opponents" },
            { letter: "B", text: "to follow a court order about their behavior" },
            { letter: "C", text: "to show they were not college students" },
            { letter: "D", text: "to apply for jobs at the stores" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "crm-freedom-rides",
      family: "CRM",
      title: "Virginia cases and the Freedom Rides",
      kind: "The Civil Rights Movement · VUS.16",
      blurb: "Two Virginia lawsuits, then a bus trip to test them.",
      level: 2,
      passage: "<ul><li><strong>1944</strong> Irene Morgan refuses to give up her seat on an interstate bus in Virginia</li><li><strong>1946</strong> In Morgan v. Virginia, the Supreme Court strikes down segregated seating on interstate buses</li><li><strong>1958</strong> Law student Bruce Boynton is arrested at a bus terminal restaurant in Richmond</li><li><strong>1960</strong> Boynton v. Virginia bans segregation in terminals serving interstate travelers</li><li><strong>1961</strong> CORE's integrated <strong>Freedom Riders</strong> leave Washington, D.C., by bus; in Alabama, one bus is firebombed and riders are beaten</li><li><strong>1961</strong> A federal agency orders an end to segregated bus terminals</li></ul>",
      claims: [
        {
          id: "purpose",
          sol: "VUS.16.d",
          stem: "What was the main purpose of the Freedom Rides?",
          choices: [
            { letter: "A", text: "to register Black voters in rural Mississippi" },
            { letter: "B", text: "to protest the growing war in Vietnam" },
            { letter: "C", text: "to test whether rulings on interstate travel were obeyed" },
            { letter: "D", text: "to support the bus boycott in Montgomery" }
          ],
          correct: "C"
        },
        {
          id: "seq",
          sol: "VUS.16.a",
          stem: "Which conclusion is best supported by the timeline?",
          choices: [
            { letter: "A", text: "Court rulings alone quickly ended segregation in travel." },
            { letter: "B", text: "Rulings came first, but direct action was needed to enforce them." },
            { letter: "C", text: "The Freedom Rides happened before Morgan v. Virginia." },
            { letter: "D", text: "Virginia had no part in desegregating transportation." }
          ],
          correct: "B"
        },
        {
          id: "morgan",
          sol: "VUS.16.a",
          stem: "Morgan v. Virginia and Boynton v. Virginia both dealt with segregation in —",
          choices: [
            { letter: "A", text: "public universities" },
            { letter: "B", text: "voting and elections" },
            { letter: "C", text: "housing and real estate" },
            { letter: "D", text: "interstate travel" }
          ],
          correct: "D"
        },
        {
          id: "violence",
          sol: "VUS.16.d",
          stem: "What was one effect of the violence against the Freedom Riders in Alabama?",
          choices: [
            { letter: "A", text: "It drew national attention and pressure on the federal government." },
            { letter: "B", text: "It caused CORE to end the rides the same day." },
            { letter: "C", text: "It led the Supreme Court to reverse the Boynton ruling." },
            { letter: "D", text: "It ended the Montgomery Bus Boycott." }
          ],
          correct: "A"
        },
        {
          id: "core",
          sol: "VUS.16.d",
          stem: "Based on the timeline, the Freedom Riders were integrated, which means —",
          choices: [
            { letter: "A", text: "they were all members of Congress" },
            { letter: "B", text: "they traveled on separate buses" },
            { letter: "C", text: "they were all from Virginia" },
            { letter: "D", text: "Black and white riders traveled together" }
          ],
          correct: "D"
        }
      ]
    },

    /* ---------- medium ---------- */
    {
      id: "crm-massive-resistance",
      family: "CRM",
      title: "Massive Resistance in Virginia",
      kind: "The Civil Rights Movement · VUS.16",
      blurb: "Virginia's leaders try to stop school integration by closing schools.",
      level: 2,
      passage: "<p>" + N(1) + "In 1956, U.S. Senator Harry F. Byrd, Sr. called on the South to answer the Brown decision with <strong>Massive Resistance</strong>. " + N(2) + "The Virginia General Assembly passed laws to cut off funds to, and close, any public school that integrated. " + N(3) + "It also offered <strong>tuition grants</strong> so white students could attend private schools. " + N(4) + "In 1958, Governor J. Lindsay Almond, Jr. closed schools in Warren County, Charlottesville and Norfolk, locking out about 13,000 students. " + N(5) + "In January 1959, both the Virginia Supreme Court of Appeals and a federal court struck down the school-closing laws. " + N(6) + "In February, a small number of Black students entered white schools in Norfolk and Arlington. " + N(7) + "Prince Edward County went further: it closed its entire public school system from 1959 to 1964, until the U.S. Supreme Court ordered the schools reopened.</p>",
      claims: [
        {
          id: "meaning",
          sol: "VUS.16.b",
          stem: "Which statement best describes the goal of Massive Resistance?",
          choices: [
            { letter: "A", text: "to build new schools for Black students" },
            { letter: "B", text: "to prevent the integration of public schools" },
            { letter: "C", text: "to speed up the Brown decision" },
            { letter: "D", text: "to give the federal government control of schools" }
          ],
          correct: "B"
        },
        {
          id: "byrd",
          sol: "VUS.16.b",
          stem: "Harry F. Byrd, Sr. was important to Massive Resistance because he —",
          choices: [
            { letter: "A", text: "led the walkout at R.R. Moton High School" },
            { letter: "B", text: "wrote the Supreme Court's opinion in Brown" },
            { letter: "C", text: "was the senator whose political organization led the policy" },
            { letter: "D", text: "sent federal troops to Norfolk in 1959" }
          ],
          correct: "C"
        },
        {
          id: "tuition",
          sol: "VUS.16.b",
          stem: "In sentence 3, tuition grants were meant to —",
          choices: [
            { letter: "A", text: "help white families leave integrated public schools" },
            { letter: "B", text: "pay NAACP lawyers to bring school cases" },
            { letter: "C", text: "fund new Black colleges in the state" },
            { letter: "D", text: "pay teachers in the closed schools" }
          ],
          correct: "A"
        },
        {
          id: "littlerock",
          sol: "VUS.16.d",
          stem: "How did Virginia's approach differ from the Little Rock crisis of 1957?",
          choices: [
            { letter: "A", text: "Virginia asked for federal troops to protect Black students." },
            { letter: "B", text: "Virginia integrated its schools before Arkansas did." },
            { letter: "C", text: "Virginia's governor used the National Guard at a school door." },
            { letter: "D", text: "Virginia closed schools by law rather than integrate them." }
          ],
          correct: "D"
        },
        {
          id: "prince-ed",
          sol: "VUS.16.b",
          stem: "Which conclusion is best supported by sentence 7?",
          choices: [
            { letter: "A", text: "Prince Edward County integrated its schools first in Virginia." },
            { letter: "B", text: "Prince Edward students were the first Freedom Riders." },
            { letter: "C", text: "Many children in Prince Edward County lost years of public schooling." },
            { letter: "D", text: "The General Assembly ordered Prince Edward to keep its schools open." }
          ],
          correct: "C"
        },
        {
          id: "effect",
          sol: "VUS.16.a",
          stem: "Why is the Prince Edward story often linked to the Moton walkout?",
          choices: [
            { letter: "A", text: "The same county had brought one of the Brown cases." },
            { letter: "B", text: "Both events happened in Norfolk." },
            { letter: "C", text: "Both were led by Senator Byrd." },
            { letter: "D", text: "The walkout took place after the schools reopened." }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "crm-birmingham-letter",
      family: "CRM",
      title: "Birmingham, 1963",
      kind: "The Civil Rights Movement · VUS.16",
      blurb: "Fire hoses, a jail cell and an answer to eight clergymen.",
      level: 3,
      passage: "<p>" + N(1) + "In the spring of 1963, Dr. Martin Luther King, Jr. and the Southern Christian Leadership Conference (SCLC) led protests against segregation in Birmingham, Alabama. " + N(2) + "King was jailed for marching without a permit. " + N(3) + "Eight white clergymen had published a statement calling the demonstrations \"unwise and untimely.\" " + N(4) + "In his <strong>Letter from a Birmingham Jail</strong>, King answered them. " + N(5) + "He argued that people have a moral duty to disobey <strong>unjust</strong> laws, openly and peacefully, and to accept the penalty. " + N(6) + "He warned that \"injustice anywhere is a threat to justice everywhere\" and wrote that Black Americans had already waited too long. " + N(7) + "In May, thousands of young people marched, and police chief Eugene \"Bull\" Connor turned fire hoses and police dogs on them. " + N(8) + "Television images shocked the nation.</p><p class=\"src\">Letter summarized; one short phrase quoted.</p>",
      claims: [
        {
          id: "audience",
          sol: "VUS.16.c",
          stem: "Who was the main audience King was answering in the letter?",
          choices: [
            { letter: "A", text: "President Kennedy and his cabinet" },
            { letter: "B", text: "white clergymen who criticized the protests" },
            { letter: "C", text: "Black Power leaders in SNCC" },
            { letter: "D", text: "the judges of the Supreme Court" }
          ],
          correct: "B"
        },
        {
          id: "argument",
          sol: "VUS.16.c",
          stem: "Which idea is central to King's argument in the letter?",
          choices: [
            { letter: "A", text: "Protesters should wait for the courts and Congress to act." },
            { letter: "B", text: "Unjust laws should be resisted with force when necessary." },
            { letter: "C", text: "Unjust laws may be broken peacefully, accepting the penalty." },
            { letter: "D", text: "Segregation should be left for each state to decide." }
          ],
          correct: "C"
        },
        {
          id: "unjust",
          sol: "VUS.16.c",
          stem: "In sentence 5, the word unjust most nearly means —",
          choices: [
            { letter: "A", text: "unfair or morally wrong" },
            { letter: "B", text: "passed by Congress" },
            { letter: "C", text: "never enforced" },
            { letter: "D", text: "written long ago" }
          ],
          correct: "A"
        },
        {
          id: "sclc",
          sol: "VUS.16.c",
          stem: "The SCLC, which King led, was an organization of —",
          choices: [
            { letter: "A", text: "college students who started the sit-ins" },
            { letter: "B", text: "lawyers who argued school cases" },
            { letter: "C", text: "labor unions in Northern cities" },
            { letter: "D", text: "Southern Black ministers and churches" }
          ],
          correct: "D"
        },
        {
          id: "tv",
          sol: "VUS.16.d",
          stem: "Which statement best explains the effect of sentences 7 and 8?",
          choices: [
            { letter: "A", text: "The images ended the protests within a day." },
            { letter: "B", text: "Television coverage built national support for civil rights laws." },
            { letter: "C", text: "The marches convinced Alabama to repeal its poll tax." },
            { letter: "D", text: "Bull Connor was named to a federal post." }
          ],
          correct: "B"
        },
        {
          id: "next",
          sol: "VUS.16.e",
          stem: "Soon after the Birmingham campaign, President Kennedy —",
          choices: [
            { letter: "A", text: "proposed a major civil rights bill to Congress" },
            { letter: "B", text: "sent troops to Little Rock" },
            { letter: "C", text: "signed the Voting Rights Act" },
            { letter: "D", text: "ordered Virginia's schools closed" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "crm-laws-table",
      family: "CRM",
      title: "Three changes in federal law",
      kind: "The Civil Rights Movement · VUS.16",
      blurb: "What the civil rights laws of 1964 to 1968 did, and who pushed them through.",
      level: 2,
      passage: "<table><tr><th>Law</th><th>Year</th><th>Main effect</th></tr><tr><td>Civil Rights Act</td><td>1964</td><td>Banned segregation in public accommodations such as hotels, restaurants and theaters; banned job discrimination based on race, color, religion, sex or national origin</td></tr><tr><td>Twenty-fourth Amendment</td><td>1964</td><td>Banned <strong>poll taxes</strong> in federal elections</td></tr><tr><td>Voting Rights Act</td><td>1965</td><td>Banned literacy tests; sent federal examiners to register voters in places with a history of discrimination</td></tr><tr><td>Civil Rights Act (Fair Housing)</td><td>1968</td><td>Banned discrimination in the sale or rental of housing</td></tr></table><p>" + N(1) + "President Lyndon B. Johnson, a former Senate leader from Texas, used his skill with Congress to push the 1964 and 1965 laws through over long Southern opposition. " + N(2) + "In 1966, in Harper v. Virginia State Board of Elections, the Supreme Court also struck down Virginia's poll tax in state elections.</p>",
      claims: [
        {
          id: "cra",
          sol: "VUS.16.e",
          stem: "According to the table, which law made it illegal for a restaurant to refuse service because of race?",
          choices: [
            { letter: "A", text: "the Twenty-fourth Amendment" },
            { letter: "B", text: "the Voting Rights Act" },
            { letter: "C", text: "the Civil Rights Act" },
            { letter: "D", text: "Harper v. Virginia State Board of Elections" }
          ],
          correct: "C"
        },
        {
          id: "polltax",
          sol: "VUS.16.e",
          stem: "In the table, a poll tax is best described as —",
          choices: [
            { letter: "A", text: "a fee a person had to pay in order to vote" },
            { letter: "B", text: "a tax on goods sold in stores" },
            { letter: "C", text: "a test of a voter's reading skills" },
            { letter: "D", text: "a fine for marching without a permit" }
          ],
          correct: "A"
        },
        {
          id: "all",
          sol: "VUS.16.e",
          stem: "Which detail best shows that the Civil Rights Act of 1964 protected Americans beyond African Americans?",
          choices: [
            { letter: "A", text: "It was signed into law in the summer of 1964." },
            { letter: "B", text: "It applied to hotels, restaurants and theaters." },
            { letter: "C", text: "It was proposed after the Birmingham protests." },
            { letter: "D", text: "It banned job discrimination based on sex and religion." }
          ],
          correct: "D"
        },
        {
          id: "selma",
          sol: "VUS.16.d",
          stem: "Which event most directly built support for the Voting Rights Act of 1965?",
          choices: [
            { letter: "A", text: "the Greensboro sit-ins" },
            { letter: "B", text: "the Selma to Montgomery marches" },
            { letter: "C", text: "the Montgomery Bus Boycott" },
            { letter: "D", text: "the Little Rock crisis" }
          ],
          correct: "B"
        },
        {
          id: "virginia",
          sol: "VUS.16.e",
          stem: "Which conclusion about Virginia is best supported by the table and sentence 2?",
          choices: [
            { letter: "A", text: "Virginia never used a poll tax in any election." },
            { letter: "B", text: "Virginia's poll tax ended in 1964 for all elections." },
            { letter: "C", text: "Virginia kept a state poll tax until 1966." },
            { letter: "D", text: "The Voting Rights Act did not apply to Southern states." }
          ],
          correct: "C"
        }
      ]
    },

    /* ---------- long ---------- */
    {
      id: "crm-march-on-washington",
      family: "CRM",
      title: "The March on Washington",
      kind: "The Civil Rights Movement · VUS.16",
      blurb: "August 28, 1963: a quarter of a million people at the Lincoln Memorial.",
      level: 3,
      passage: "<p>" + N(1) + "On August 28, 1963, about 250,000 people gathered in Washington, D.C., for the <strong>March on Washington for Jobs and Freedom</strong>. " + N(2) + "Labor leader A. Philip Randolph and organizer Bayard Rustin planned the event with civil rights groups, including the NAACP and the SCLC, as well as unions and churches. " + N(3) + "Marchers, Black and white, called for passage of the civil rights bill then before Congress, fair employment and an end to segregation. " + N(4) + "The crowd stretched from the Lincoln Memorial along the Reflecting Pool. " + N(5) + "Speaking near the end of the day, Dr. Martin Luther King, Jr. reminded listeners that the Emancipation Proclamation had been signed a century earlier, yet African Americans were still not free. " + N(6) + "Repeating the phrase \"I have a dream,\" he described a future in which his children would be judged by their character rather than the color of their skin. " + N(7) + "The march was peaceful, and it was broadcast on national television. " + N(8) + "After President Kennedy was assassinated that November, President Lyndon B. Johnson pushed the bill through Congress, and he signed the <strong>Civil Rights Act</strong> in July 1964.</p><p class=\"src\">Speech summarized; one short phrase quoted.</p>",
      claims: [
        {
          id: "goals",
          sol: "VUS.16.e",
          stem: "According to sentence 3, what was one main goal of the march?",
          choices: [
            { letter: "A", text: "ending the war in Vietnam" },
            { letter: "B", text: "creating a separate Black nation" },
            { letter: "C", text: "freeing King from the Birmingham jail" },
            { letter: "D", text: "passing the civil rights bill in Congress" }
          ],
          correct: "D"
        },
        {
          id: "speech",
          sol: "VUS.16.c",
          stem: "Which idea best summarizes King's speech at the march?",
          choices: [
            { letter: "A", text: "a hope for a nation where people are judged by character, not race" },
            { letter: "B", text: "a call for Black Americans to leave the South for Northern cities" },
            { letter: "C", text: "a demand that protesters arm themselves for self-defense" },
            { letter: "D", text: "a plan to close segregated schools until they were equal" }
          ],
          correct: "A"
        },
        {
          id: "lincoln",
          sol: "VUS.16.c",
          stem: "Why did King's reference to the Emancipation Proclamation fit the setting of the speech?",
          choices: [
            { letter: "A", text: "The march took place in Richmond, the old Confederate capital." },
            { letter: "B", text: "He spoke at the Lincoln Memorial, a century after emancipation." },
            { letter: "C", text: "Congress was voting on the proclamation that day." },
            { letter: "D", text: "The Supreme Court had just overturned the proclamation." }
          ],
          correct: "B"
        },
        {
          id: "coalition",
          sol: "VUS.16.e",
          stem: "Which conclusion is best supported by sentences 2 and 3?",
          choices: [
            { letter: "A", text: "The march was organized by a single church." },
            { letter: "B", text: "Only African Americans from the South took part." },
            { letter: "C", text: "The march united a wide coalition of groups and races." },
            { letter: "D", text: "Labor unions opposed the march." }
          ],
          correct: "C"
        },
        {
          id: "seq",
          sol: "VUS.16.d",
          stem: "Which event happened LAST?",
          choices: [
            { letter: "A", text: "the March on Washington" },
            { letter: "B", text: "the Greensboro sit-ins" },
            { letter: "C", text: "the assassination of President Kennedy" },
            { letter: "D", text: "the signing of the Civil Rights Act" }
          ],
          correct: "D"
        },
        {
          id: "naacp",
          sol: "VUS.16.e",
          stem: "The NAACP, one of the groups at the march, was best known for —",
          choices: [
            { letter: "A", text: "fighting segregation through the courts" },
            { letter: "B", text: "organizing the Black Panther Party" },
            { letter: "C", text: "leading the Freedom Rides in 1961" },
            { letter: "D", text: "supporting Massive Resistance" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "crm-selma-voting",
      family: "CRM",
      title: "Freedom Summer and Selma",
      kind: "The Civil Rights Movement · VUS.16",
      blurb: "The fight for the ballot in Mississippi and Alabama, 1964–1965.",
      level: 3,
      passage: "<p>" + N(1) + "In 1964, only about 7 percent of Black adults in Mississippi were registered to vote, because of literacy tests, poll taxes and threats of violence. " + N(2) + "That summer, during <strong>Freedom Summer</strong>, hundreds of volunteers, many of them white college students from the North, came to Mississippi to register voters and teach in Freedom Schools. " + N(3) + "Three civil rights workers, James Chaney, Andrew Goodman and Michael Schwerner, were murdered by Klansmen near Philadelphia, Mississippi. " + N(4) + "In March 1965, marchers set out from Selma, Alabama, toward the state capital of Montgomery to demand voting rights. " + N(5) + "On the Edmund Pettus Bridge, state troopers attacked them with clubs and tear gas; John Lewis was among the injured, and the day became known as <strong>Bloody Sunday</strong> as television carried the images across the nation. " + N(6) + "Two weeks later, under federal protection, King led thousands of marchers to Montgomery. " + N(7) + "In August, President Johnson signed the Voting Rights Act. " + N(8) + "By 1967, Black voter registration in Mississippi had risen to about 60 percent.</p>",
      claims: [
        {
          id: "barriers",
          sol: "VUS.16.a",
          stem: "According to sentence 1, why was Black voter registration so low in Mississippi?",
          choices: [
            { letter: "A", text: "The Fifteenth Amendment had not yet been ratified." },
            { letter: "B", text: "Few Black adults lived in Mississippi." },
            { letter: "C", text: "Literacy tests, poll taxes and threats kept people from registering." },
            { letter: "D", text: "Federal examiners had closed the voting offices." }
          ],
          correct: "C"
        },
        {
          id: "fs",
          sol: "VUS.16.d",
          stem: "The main purpose of Freedom Summer was to —",
          choices: [
            { letter: "A", text: "register Black voters in Mississippi" },
            { letter: "B", text: "desegregate interstate bus terminals" },
            { letter: "C", text: "integrate Central High School" },
            { letter: "D", text: "end segregation at lunch counters" }
          ],
          correct: "A"
        },
        {
          id: "bloody",
          sol: "VUS.16.d",
          stem: "In sentence 5, Bloody Sunday refers to —",
          choices: [
            { letter: "A", text: "the murder of three workers in Mississippi" },
            { letter: "B", text: "the attack on marchers at the Edmund Pettus Bridge" },
            { letter: "C", text: "the bombing of a bus in Anniston" },
            { letter: "D", text: "the assassination of Dr. King" }
          ],
          correct: "B"
        },
        {
          id: "effect",
          sol: "VUS.16.e",
          stem: "Which conclusion is best supported by sentences 1 and 8?",
          choices: [
            { letter: "A", text: "Freedom Summer alone registered most Mississippi voters." },
            { letter: "B", text: "The Voting Rights Act had little effect in the South." },
            { letter: "C", text: "Registration fell after the Voting Rights Act." },
            { letter: "D", text: "Black registration rose sharply after the Voting Rights Act." }
          ],
          correct: "D"
        },
        {
          id: "cause",
          sol: "VUS.16.e",
          stem: "Which sequence best shows cause and effect in the passage?",
          choices: [
            { letter: "A", text: "Voting Rights Act → Bloody Sunday → Freedom Summer" },
            { letter: "B", text: "Montgomery march → Bloody Sunday → Freedom Summer" },
            { letter: "C", text: "Bloody Sunday → national outrage → Voting Rights Act" },
            { letter: "D", text: "Voting Rights Act → literacy tests → low registration" }
          ],
          correct: "C"
        },
        {
          id: "lewis",
          sol: "VUS.16.d",
          stem: "John Lewis, injured on the bridge in 1965, later became —",
          choices: [
            { letter: "A", text: "a longtime member of the U.S. House of Representatives" },
            { letter: "B", text: "the first African American governor of Virginia" },
            { letter: "C", text: "a justice of the U.S. Supreme Court" },
            { letter: "D", text: "the founder of the NAACP" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "crm-king-legacy",
      family: "CRM",
      title: "Courts, nonviolence and a legacy",
      kind: "The Civil Rights Movement · VUS.16",
      blurb: "The NAACP's legal strategy, Dr. King's life and his assassination.",
      level: 3,
      passage: "<p>" + N(1) + "Founded in 1909, the <strong>NAACP</strong> worked for equal rights mainly through the courts. " + N(2) + "In the 1930s and 1940s its lawyers, led by Charles Hamilton Houston and his student Thurgood Marshall, won cases showing that segregated schools were not equal; Oliver W. Hill, Sr. brought many such cases in Virginia. " + N(3) + "Dr. Martin Luther King, Jr. used a different tool: <strong>nonviolent direct action</strong>. " + N(4) + "Influenced by his Christian faith and by Mohandas Gandhi's campaigns in India, he believed protesters could expose injustice by meeting hatred with peaceful resistance. " + N(5) + "In 1957, King helped found the Southern Christian Leadership Conference and became its first president. " + N(6) + "In 1964 he received the Nobel Peace Prize. " + N(7) + "In his last years he spoke out against poverty and the Vietnam War. " + N(8) + "On April 4, 1968, while in Memphis, Tennessee, to support striking sanitation workers, King was assassinated. " + N(9) + "Riots broke out in many cities. " + N(10) + "Days later, Congress passed the Civil Rights Act of 1968, which banned discrimination in housing. " + N(11) + "In 1983, his birthday became a federal holiday.</p>",
      claims: [
        {
          id: "compare",
          sol: "VUS.16.c",
          stem: "How did King's main method differ from the NAACP's main method described in the passage?",
          choices: [
            { letter: "A", text: "King relied on lawsuits; the NAACP used marches." },
            { letter: "B", text: "King used nonviolent protest; the NAACP worked mainly through courts." },
            { letter: "C", text: "King favored armed self-defense; the NAACP favored voting." },
            { letter: "D", text: "King worked only in the North; the NAACP worked only in the South." }
          ],
          correct: "B"
        },
        {
          id: "gandhi",
          sol: "VUS.16.c",
          stem: "According to sentence 4, which two influences shaped King's ideas?",
          choices: [
            { letter: "A", text: "Marxism and the Black Panthers" },
            { letter: "B", text: "Malcolm X and Marcus Garvey" },
            { letter: "C", text: "the Southern Manifesto and the Byrd machine" },
            { letter: "D", text: "his Christian faith and Gandhi's campaigns" }
          ],
          correct: "D"
        },
        {
          id: "tenets",
          sol: "VUS.16.e",
          stem: "Which statement best describes a core tenet of the NAACP?",
          choices: [
            { letter: "A", text: "equal rights won through law and the Constitution" },
            { letter: "B", text: "a separate nation for African Americans" },
            { letter: "C", text: "staying out of politics and elections" },
            { letter: "D", text: "ending all federal civil rights laws" }
          ],
          correct: "A"
        },
        {
          id: "memphis",
          sol: "VUS.16.c",
          stem: "Why was King in Memphis in April 1968?",
          choices: [
            { letter: "A", text: "to lead the March on Washington" },
            { letter: "B", text: "to accept the Nobel Peace Prize" },
            { letter: "C", text: "to support striking sanitation workers" },
            { letter: "D", text: "to testify before Congress" }
          ],
          correct: "C"
        },
        {
          id: "effects",
          sol: "VUS.16.c",
          stem: "Select TWO events that followed King's assassination, according to the passage.",
          choices: [
            { letter: "A", text: "the founding of the SCLC" },
            { letter: "B", text: "riots in many cities" },
            { letter: "C", text: "the Nobel Peace Prize" },
            { letter: "D", text: "a federal law against housing discrimination" }
          ],
          correct: ["B", "D"]
        },
        {
          id: "nva",
          sol: "VUS.16.a",
          stem: "In sentence 3, nonviolent direct action most nearly means —",
          choices: [
            { letter: "A", text: "peaceful protests such as marches and sit-ins" },
            { letter: "B", text: "suing state governments in federal court" },
            { letter: "C", text: "using force to defend a community from attack" },
            { letter: "D", text: "waiting patiently for unfair laws to change" }
          ],
          correct: "A"
        }
      ]
    }
  ];

  for (var i = 0; i < PACKS.length; i++) P.push(PACKS[i]);
})(typeof window !== "undefined" ? window : global);
