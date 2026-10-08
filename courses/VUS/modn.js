/* SOL Lab — Virginia and United States History · Cold War & Modern America (VUS.15, VUS.17). Original text only. */
(function (global) {
  var P = global.HEIST_PACKS;
  if (!P || !P.push) return;
  var N = function (i) { return '<span class="n">(' + i + ')</span> '; };   // numbered sentence

  var PACKS = [
    /* ---------- tiny ---------- */
    {
      id: "modn-iron-curtain",
      family: "MODN",
      title: "An iron curtain and a doctrine",
      kind: "Cold War & Modern America · VUS.15",
      blurb: "Churchill names the divide; Truman answers it.",
      level: 1,
      passage: "<p><strong>Source 1</strong></p><blockquote>From Stettin in the Baltic to Trieste in the Adriatic, an iron curtain has descended across the Continent.</blockquote><p class=\"src\">— Winston Churchill, Fulton, Missouri, 1946</p><p><strong>Source 2</strong></p><blockquote>I believe that it must be the policy of the United States to support free peoples who are resisting attempted subjugation by armed minorities or by outside pressures.</blockquote><p class=\"src\">— President Harry S. Truman, address to Congress, 1947</p>",
      claims: [
        {
          id: "curtain",
          sol: "VUS.15.a",
          stem: "In Source 1, the iron curtain refers to —",
          choices: [
            { letter: "A", text: "a wall the Soviets built around West Berlin in 1946" },
            { letter: "B", text: "the split between Soviet-controlled Eastern Europe and the West" },
            { letter: "C", text: "a line of French forts built along the German border" },
            { letter: "D", text: "a trade agreement signed among Western European nations" }
          ],
          correct: "B"
        },
        {
          id: "subjugation",
          sol: "VUS.15.a",
          stem: "In Source 2, the word subjugation most nearly means —",
          choices: [
            { letter: "A", text: "free and open trade" },
            { letter: "B", text: "holding a fair election" },
            { letter: "C", text: "receiving foreign aid" },
            { letter: "D", text: "being brought under control" }
          ],
          correct: "D"
        },
        {
          id: "doctrine",
          sol: "VUS.15.a",
          stem: "Truman's statement in Source 2 led first to American aid for —",
          choices: [
            { letter: "A", text: "Greece and Turkey" },
            { letter: "B", text: "Cuba and Mexico" },
            { letter: "C", text: "Korea and Japan" },
            { letter: "D", text: "Poland and Hungary" }
          ],
          correct: "A"
        },
        {
          id: "containment",
          sol: "VUS.15.a",
          stem: "The policy behind Source 2 is best described as —",
          choices: [
            { letter: "A", text: "isolation from world affairs" },
            { letter: "B", text: "rolling back the Soviet Union by invasion" },
            { letter: "C", text: "containment of the spread of communism" },
            { letter: "D", text: "neutrality between East and West" }
          ],
          correct: "C"
        },
        {
          id: "change",
          sol: "VUS.15.a",
          stem: "How did the ideas in these sources change U.S. foreign policy?",
          choices: [
            { letter: "A", text: "The U.S. left the United Nations." },
            { letter: "B", text: "The U.S. took an active, long-term role in world affairs." },
            { letter: "C", text: "The U.S. returned to its policy of the 1920s." },
            { letter: "D", text: "The U.S. joined the Soviet Union in an alliance." }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "modn-nato-warsaw",
      family: "MODN",
      title: "Two alliances",
      kind: "Cold War & Modern America · VUS.15",
      blurb: "Europe splits into two armed camps.",
      level: 1,
      passage: "<table><tr><th>Alliance</th><th>Formed</th><th>Members</th></tr><tr><td><strong>NATO</strong></td><td>1949</td><td>The United States, Canada and Western European nations; an attack on one is an attack on all</td></tr><tr><td><strong>Warsaw Pact</strong></td><td>1955</td><td>The Soviet Union and the communist nations of Eastern Europe</td></tr></table><p>" + N(1) + "Earlier, the <strong>Marshall Plan</strong> (1948) had sent billions of dollars to rebuild Western Europe.</p>",
      claims: [
        {
          id: "nato",
          sol: "VUS.15.b",
          stem: "According to the table, the key promise of NATO was —",
          choices: [
            { letter: "A", text: "free trade among all European nations" },
            { letter: "B", text: "Soviet control of Eastern Europe" },
            { letter: "C", text: "collective defense of every member" },
            { letter: "D", text: "an end to nuclear weapons" }
          ],
          correct: "C"
        },
        {
          id: "warsaw",
          sol: "VUS.15.b",
          stem: "The Warsaw Pact was formed mainly as —",
          choices: [
            { letter: "A", text: "the Soviet answer to NATO" },
            { letter: "B", text: "a peace treaty ending World War II" },
            { letter: "C", text: "an American aid program for Poland" },
            { letter: "D", text: "a plan to reunite Germany" }
          ],
          correct: "A"
        },
        {
          id: "seq",
          sol: "VUS.15.b",
          stem: "Which came FIRST?",
          choices: [
            { letter: "A", text: "the Warsaw Pact" },
            { letter: "B", text: "NATO" },
            { letter: "C", text: "the Cuban Missile Crisis" },
            { letter: "D", text: "the Marshall Plan" }
          ],
          correct: "D"
        },
        {
          id: "marshall",
          sol: "VUS.15.b",
          stem: "What was one long-term effect of the Marshall Plan?",
          choices: [
            { letter: "A", text: "Eastern Europe joined NATO in 1949." },
            { letter: "B", text: "Western Europe recovered and stayed tied to the U.S." },
            { letter: "C", text: "The Soviet Union received most of the aid." },
            { letter: "D", text: "The United States left Europe after 1950." }
          ],
          correct: "B"
        },
        {
          id: "us",
          sol: "VUS.15.a",
          stem: "Joining NATO was a break from which earlier American tradition?",
          choices: [
            { letter: "A", text: "avoiding permanent alliances in peacetime" },
            { letter: "B", text: "trading with European nations" },
            { letter: "C", text: "joining the United Nations" },
            { letter: "D", text: "electing presidents every four years" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "modn-gideon-miranda",
      family: "MODN",
      title: "Rights of the accused",
      kind: "Cold War & Modern America · VUS.17",
      blurb: "Two 1960s cases that changed police stations and courtrooms.",
      level: 1,
      passage: "<p>" + N(1) + "In <strong>Gideon v. Wainwright</strong> (1963), the Supreme Court ruled that a state must provide a lawyer to a person accused of a serious crime who cannot afford one. " + N(2) + "In <strong>Miranda v. Arizona</strong> (1966), it ruled that police must tell suspects in custody of their rights, such as the right to remain silent and the right to a lawyer, before questioning them.</p>",
      claims: [
        {
          id: "gideon",
          sol: "VUS.17.a",
          stem: "Which right did Gideon v. Wainwright protect?",
          choices: [
            { letter: "A", text: "the right to vote at age eighteen in all elections" },
            { letter: "B", text: "the right to a free lawyer in serious criminal cases" },
            { letter: "C", text: "the right to attend an integrated public school" },
            { letter: "D", text: "the right to keep and bear arms at home" }
          ],
          correct: "B"
        },
        {
          id: "miranda",
          sol: "VUS.17.a",
          stem: "Because of Miranda v. Arizona, police must —",
          choices: [
            { letter: "A", text: "release suspects within one day" },
            { letter: "B", text: "get a warrant for every arrest" },
            { letter: "C", text: "warn suspects of their rights before questioning" },
            { letter: "D", text: "let suspects choose the judge" }
          ],
          correct: "C"
        },
        {
          id: "custody",
          sol: "VUS.17.a",
          stem: "In sentence 2, a suspect in custody is one who is —",
          choices: [
            { letter: "A", text: "held by the police" },
            { letter: "B", text: "found not guilty" },
            { letter: "C", text: "serving on a jury" },
            { letter: "D", text: "working as a lawyer" }
          ],
          correct: "A"
        },
        {
          id: "both",
          sol: "VUS.17.a",
          stem: "Which statement best describes both decisions?",
          choices: [
            { letter: "A", text: "They were passed by Congress as new laws." },
            { letter: "B", text: "They reduced the rights of accused persons." },
            { letter: "C", text: "They applied only to federal courts." },
            { letter: "D", text: "They required states to protect the rights of the accused." }
          ],
          correct: "D"
        }
      ]
    },

    /* ---------- short ---------- */
    {
      id: "modn-korea",
      family: "MODN",
      title: "The Korean War",
      kind: "Cold War & Modern America · VUS.15",
      blurb: "Containment is tested on a divided peninsula, 1950–1953.",
      level: 1,
      passage: "<p>" + N(1) + "After World War II, Korea was divided at the <strong>38th parallel</strong>, with a communist government in the North and a U.S.-backed government in the South. " + N(2) + "In June 1950, North Korea invaded South Korea. " + N(3) + "The United Nations sent troops, most of them American, under General Douglas MacArthur. " + N(4) + "After UN forces pushed north toward the Chinese border, China sent hundreds of thousands of soldiers into the war. " + N(5) + "President Truman later removed MacArthur for publicly urging a wider war against China. " + N(6) + "An <strong>armistice</strong> in 1953 stopped the fighting near the 38th parallel, where Korea remains divided today.</p>",
      claims: [
        {
          id: "cause",
          sol: "VUS.15.d",
          stem: "What event started the Korean War?",
          choices: [
            { letter: "A", text: "China attacked Japan." },
            { letter: "B", text: "The United States invaded North Korea." },
            { letter: "C", text: "North Korea invaded South Korea." },
            { letter: "D", text: "The Soviet Union blockaded Berlin." }
          ],
          correct: "C"
        },
        {
          id: "containment",
          sol: "VUS.15.a",
          stem: "U.S. involvement in Korea is best explained by the policy of —",
          choices: [
            { letter: "A", text: "containment" },
            { letter: "B", text: "isolationism" },
            { letter: "C", text: "détente" },
            { letter: "D", text: "the Good Neighbor Policy" }
          ],
          correct: "A"
        },
        {
          id: "china",
          sol: "VUS.15.d",
          stem: "According to sentence 4, why did China enter the war?",
          choices: [
            { letter: "A", text: "Japan had attacked Chinese cities." },
            { letter: "B", text: "UN forces were nearing China's border." },
            { letter: "C", text: "South Korea had invaded China." },
            { letter: "D", text: "The UN had asked China for help." }
          ],
          correct: "B"
        },
        {
          id: "armistice",
          sol: "VUS.15.d",
          stem: "In sentence 6, the word armistice most nearly means —",
          choices: [
            { letter: "A", text: "a final peace treaty" },
            { letter: "B", text: "a military invasion" },
            { letter: "C", text: "a surrender by one side" },
            { letter: "D", text: "an agreement to stop fighting" }
          ],
          correct: "D"
        },
        {
          id: "result",
          sol: "VUS.15.d",
          stem: "Which conclusion about the war's outcome is best supported by the passage?",
          choices: [
            { letter: "A", text: "Korea was united under a communist government." },
            { letter: "B", text: "The UN conquered all of North Korea." },
            { letter: "C", text: "The war ended with Korea still divided." },
            { letter: "D", text: "MacArthur's plan for a wider war was adopted." }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "modn-cuba",
      family: "MODN",
      title: "Cuba, 1961–1962",
      kind: "Cold War & Modern America · VUS.15",
      blurb: "A failed invasion, then thirteen days on the edge of nuclear war.",
      level: 2,
      passage: "<ul><li><strong>1959</strong> Fidel Castro takes power in Cuba and soon allies with the Soviet Union</li><li><strong>April 1961</strong> Cuban exiles trained by the CIA land at the <strong>Bay of Pigs</strong>; the invasion fails within days</li><li><strong>October 1962</strong> U.S. spy planes photograph Soviet nuclear missile sites in Cuba</li><li><strong>October 1962</strong> President John F. Kennedy orders a naval <strong>quarantine</strong> of Cuba</li><li><strong>October 1962</strong> Soviet leader Nikita Khrushchev agrees to remove the missiles; the U.S. pledges not to invade Cuba and later removes its missiles from Turkey</li><li><strong>1963</strong> A hotline links Washington and Moscow</li></ul>",
      claims: [
        {
          id: "bay",
          sol: "VUS.15.c",
          stem: "What was the Bay of Pigs invasion?",
          choices: [
            { letter: "A", text: "a Soviet attack on Florida" },
            { letter: "B", text: "a failed U.S.-backed attempt to overthrow Castro" },
            { letter: "C", text: "a naval blockade of Cuba in 1962" },
            { letter: "D", text: "a successful U.S. invasion of Cuba" }
          ],
          correct: "B"
        },
        {
          id: "quarantine",
          sol: "VUS.15.c",
          stem: "In the timeline, Kennedy's quarantine of Cuba was meant to —",
          choices: [
            { letter: "A", text: "stop Soviet ships from bringing more weapons" },
            { letter: "B", text: "keep Cuban refugees from leaving" },
            { letter: "C", text: "end a disease outbreak on the island" },
            { letter: "D", text: "land American troops on the beaches" }
          ],
          correct: "A"
        },
        {
          id: "resolve",
          sol: "VUS.15.c",
          stem: "How was the Cuban Missile Crisis resolved?",
          choices: [
            { letter: "A", text: "The United States invaded and occupied Cuba." },
            { letter: "B", text: "Castro was forced from power by Cuban exiles." },
            { letter: "C", text: "The United Nations took control of the island." },
            { letter: "D", text: "Both sides gave ground, and the missiles were removed." }
          ],
          correct: "D"
        },
        {
          id: "leaders",
          sol: "VUS.15.c",
          stem: "Which pair of leaders faced each other in the Cuban Missile Crisis?",
          choices: [
            { letter: "A", text: "Truman and Stalin" },
            { letter: "B", text: "Reagan and Gorbachev" },
            { letter: "C", text: "Kennedy and Khrushchev" },
            { letter: "D", text: "Eisenhower and Mao" }
          ],
          correct: "C"
        },
        {
          id: "hotline",
          sol: "VUS.15.c",
          stem: "Which conclusion is best supported by the last entry on the timeline?",
          choices: [
            { letter: "A", text: "The Cold War came to an end in 1963." },
            { letter: "B", text: "Cuba and the United States became close allies." },
            { letter: "C", text: "Both powers wanted quick contact in a future crisis." },
            { letter: "D", text: "The Soviet Union placed new missiles in Cuba." }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "modn-terror-timeline",
      family: "MODN",
      title: "Attacks on the United States, 1993–2001",
      kind: "Cold War & Modern America · VUS.17",
      blurb: "Four attacks by terrorists, and how the country responded.",
      level: 2,
      passage: "<ul><li><strong>1993</strong> A truck bomb explodes in the garage beneath the World Trade Center in New York City</li><li><strong>1998</strong> Truck bombs destroy U.S. embassies in Kenya and Tanzania, killing more than 200 people</li><li><strong>2000</strong> Suicide bombers in a small boat attack the destroyer USS Cole in Yemen, killing 17 sailors</li><li><strong>2001</strong> On <strong>September 11</strong>, hijackers crash planes into the World Trade Center and the Pentagon in Arlington, Virginia; a fourth plane crashes in Pennsylvania; nearly 3,000 people die</li></ul><p>" + N(1) + "The 1998, 2000 and 2001 attacks were carried out by <strong>al-Qaeda</strong>, a terrorist network led by Osama bin Laden.</p>",
      claims: [
        {
          id: "seq",
          sol: "VUS.17.b",
          stem: "Which attack happened FIRST?",
          choices: [
            { letter: "A", text: "the attack on the USS Cole" },
            { letter: "B", text: "the embassy bombings in East Africa" },
            { letter: "C", text: "the September 11 attacks" },
            { letter: "D", text: "the bombing beneath the World Trade Center" }
          ],
          correct: "D"
        },
        {
          id: "pattern",
          sol: "VUS.17.b",
          stem: "Which conclusion is best supported by the timeline?",
          choices: [
            { letter: "A", text: "Terrorists struck U.S. targets both at home and overseas." },
            { letter: "B", text: "All of the attacks took place inside the United States." },
            { letter: "C", text: "Each attack was carried out by a foreign army." },
            { letter: "D", text: "The attacks ended after 1998." }
          ],
          correct: "A"
        },
        {
          id: "virginia",
          sol: "VUS.17.b",
          stem: "Which target of the September 11 attacks was in Virginia?",
          choices: [
            { letter: "A", text: "the World Trade Center" },
            { letter: "B", text: "the U.S. Capitol" },
            { letter: "C", text: "the Pentagon" },
            { letter: "D", text: "Naval Station Norfolk" }
          ],
          correct: "C"
        },
        {
          id: "response",
          sol: "VUS.17.b",
          stem: "How did the United States respond to the September 11 attacks?",
          choices: [
            { letter: "A", text: "It withdrew from the United Nations entirely." },
            { letter: "B", text: "It sent forces to Afghanistan, where al-Qaeda was based." },
            { letter: "C", text: "It ended all commercial air travel for a year." },
            { letter: "D", text: "It closed all of its embassies around the world." }
          ],
          correct: "B"
        },
        {
          id: "democracy",
          sol: "VUS.17.b",
          stem: "Terrorism is called an attack on democracy mainly because it —",
          choices: [
            { letter: "A", text: "is always carried out by a national government" },
            { letter: "B", text: "takes place only during elections" },
            { letter: "C", text: "is a legal way to change policy" },
            { letter: "D", text: "uses fear and violence against civilians to force change" }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "modn-court-roe-dobbs",
      family: "MODN",
      title: "The Court and changing law",
      kind: "Cold War & Modern America · VUS.17",
      blurb: "Roe, Dobbs and Obergefell: rulings that changed national debates.",
      level: 2,
      passage: "<table><tr><th>Case</th><th>Year</th><th>Ruling</th></tr><tr><td>Roe v. Wade</td><td>1973</td><td>Recognized a constitutional right to abortion, limiting state laws</td></tr><tr><td>Obergefell v. Hodges</td><td>2015</td><td>Required every state to license and recognize marriages between same-sex couples</td></tr><tr><td>Dobbs v. Jackson Women's Health Organization</td><td>2022</td><td><strong>Overturned</strong> Roe, returning the authority to regulate abortion to the states</td></tr></table><p>" + N(1) + "Roe gave rise to the <strong>pro-life movement</strong>, which worked for decades to reverse it, while abortion-rights groups worked to keep it.</p>",
      claims: [
        {
          id: "overturn",
          sol: "VUS.17.a",
          stem: "In the table, the word overturned most nearly means —",
          choices: [
            { letter: "A", text: "reversed an earlier ruling" },
            { letter: "B", text: "agreed with an earlier ruling" },
            { letter: "C", text: "sent a case to Congress" },
            { letter: "D", text: "delayed a decision" }
          ],
          correct: "A"
        },
        {
          id: "dobbs",
          sol: "VUS.17.a",
          stem: "What was the effect of the Dobbs decision?",
          choices: [
            { letter: "A", text: "It banned abortion in every state." },
            { letter: "B", text: "It made abortion a right in every state." },
            { letter: "C", text: "It let each state decide how to regulate abortion." },
            { letter: "D", text: "It gave the president power over abortion law." }
          ],
          correct: "C"
        },
        {
          id: "obergefell",
          sol: "VUS.17.a",
          stem: "Obergefell v. Hodges dealt with —",
          choices: [
            { letter: "A", text: "the rights of suspects in police custody" },
            { letter: "B", text: "segregation in public schools" },
            { letter: "C", text: "voting rights in Southern states" },
            { letter: "D", text: "marriage for same-sex couples" }
          ],
          correct: "D"
        },
        {
          id: "prolife",
          sol: "VUS.17.c",
          stem: "According to sentence 1, the main goal of the pro-life movement was to —",
          choices: [
            { letter: "A", text: "pass the Equal Rights Amendment" },
            { letter: "B", text: "reverse the Roe v. Wade decision" },
            { letter: "C", text: "end the war in Vietnam" },
            { letter: "D", text: "expand the Title IX law" }
          ],
          correct: "B"
        },
        {
          id: "principle",
          sol: "VUS.17.a",
          stem: "Which conclusion is best supported by the table?",
          choices: [
            { letter: "A", text: "Supreme Court rulings never change." },
            { letter: "B", text: "The Court can reverse its own earlier decisions." },
            { letter: "C", text: "Congress wrote all three rulings." },
            { letter: "D", text: "Each ruling applied only to one state." }
          ],
          correct: "B"
        }
      ]
    },

    /* ---------- medium ---------- */
    {
      id: "modn-vietnam",
      family: "MODN",
      title: "Vietnam and the home front",
      kind: "Cold War & Modern America · VUS.15",
      blurb: "From the Gulf of Tonkin to the fall of Saigon.",
      level: 2,
      passage: "<p>" + N(1) + "After France lost its colony in Indochina in 1954, Vietnam was divided into a communist North and a non-communist South. " + N(2) + "American leaders feared the <strong>domino theory</strong>: if one nation in Southeast Asia fell to communism, its neighbors would follow. " + N(3) + "In 1964, Congress passed the Gulf of Tonkin Resolution, letting President Lyndon B. Johnson expand the war without a declaration of war. " + N(4) + "By 1968, more than 500,000 American troops were in Vietnam. " + N(5) + "That year, the Tet Offensive convinced many Americans that the war could not be won quickly. " + N(6) + "Television brought the fighting into living rooms, and an <strong>anti-war movement</strong> grew on college campuses. " + N(7) + "President Richard Nixon slowly withdrew U.S. troops, and the last combat forces left in 1973. " + N(8) + "In 1975, Saigon fell to North Vietnam. " + N(9) + "More than 58,000 Americans died in the war.</p>",
      claims: [
        {
          id: "domino",
          sol: "VUS.15.a",
          stem: "According to sentence 2, the domino theory held that —",
          choices: [
            { letter: "A", text: "the fall of one nation to communism would lead others to fall" },
            { letter: "B", text: "trade with Asia would end the Cold War" },
            { letter: "C", text: "the United States should leave Southeast Asia" },
            { letter: "D", text: "France would win back its colonies" }
          ],
          correct: "A"
        },
        {
          id: "tonkin",
          sol: "VUS.15.d",
          stem: "What was the significance of the Gulf of Tonkin Resolution?",
          choices: [
            { letter: "A", text: "It ended the military draft for college students." },
            { letter: "B", text: "It formally declared war on North Vietnam." },
            { letter: "C", text: "It gave the president broad power to expand the war." },
            { letter: "D", text: "It divided Vietnam into two separate nations." }
          ],
          correct: "C"
        },
        {
          id: "tet",
          sol: "VUS.15.d",
          stem: "Which statement best explains the effect of the Tet Offensive on Americans at home?",
          choices: [
            { letter: "A", text: "It increased support for sending more troops." },
            { letter: "B", text: "It weakened belief that the war would end soon." },
            { letter: "C", text: "It ended the anti-war movement." },
            { letter: "D", text: "It led to the immediate fall of Saigon." }
          ],
          correct: "B"
        },
        {
          id: "antiwar",
          sol: "VUS.17.c",
          stem: "Which factor in sentence 6 most helped the anti-war movement grow?",
          choices: [
            { letter: "A", text: "the end of the draft in 1950" },
            { letter: "B", text: "a ban on news coverage of the war" },
            { letter: "C", text: "the Marshall Plan" },
            { letter: "D", text: "television images of the fighting" }
          ],
          correct: "D"
        },
        {
          id: "refugees",
          sol: "VUS.15.d",
          stem: "What happened to many South Vietnamese after Saigon fell in 1975?",
          choices: [
            { letter: "A", text: "They fled as refugees, and many resettled in the U.S." },
            { letter: "B", text: "They were allowed to join NATO as a nation." },
            { letter: "C", text: "They moved north to settle in North Korea." },
            { letter: "D", text: "They voted to become a French colony again." }
          ],
          correct: "A"
        },
        {
          id: "woodstock",
          sol: "VUS.17.c",
          stem: "The Woodstock music festival of 1969 is often seen as a symbol of —",
          choices: [
            { letter: "A", text: "the conservative movement of the 1980s" },
            { letter: "B", text: "support for the Gulf of Tonkin Resolution" },
            { letter: "C", text: "the youth counterculture of the 1960s" },
            { letter: "D", text: "the end of the Cold War" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "modn-laws-table",
      family: "MODN",
      title: "Acts of Congress that changed daily life",
      kind: "Cold War & Modern America · VUS.17",
      blurb: "Highways, equal pay, girls' sports, tribal control and access for all.",
      level: 2,
      passage: "<table><tr><th>Law</th><th>Year</th><th>What it did</th></tr><tr><td>Federal Highway Act</td><td>1956</td><td>Funded a national system of <strong>interstate highways</strong>, partly for military defense</td></tr><tr><td>Equal Pay Act</td><td>1963</td><td>Required equal pay for men and women doing equal work</td></tr><tr><td>Title IX</td><td>1972</td><td>Banned sex discrimination in schools that receive federal money, including in sports</td></tr><tr><td>Indian Self-Determination and Education Assistance Act</td><td>1975</td><td>Let tribes run federal programs, such as schools and health care, for their own people</td></tr><tr><td>Americans with Disabilities Act (ADA)</td><td>1990</td><td>Banned discrimination against people with disabilities and required public places to be <strong>accessible</strong></td></tr></table><p>" + N(1) + "The Indian law followed protests by the <strong>American Indian Movement</strong> (AIM), including its 1973 occupation of Wounded Knee, South Dakota.</p>",
      claims: [
        {
          id: "titleix",
          sol: "VUS.17.a",
          stem: "According to the table, which law most increased opportunities for girls in school sports?",
          choices: [
            { letter: "A", text: "the Equal Pay Act" },
            { letter: "B", text: "the Americans with Disabilities Act" },
            { letter: "C", text: "the Federal Highway Act" },
            { letter: "D", text: "Title IX" }
          ],
          correct: "D"
        },
        {
          id: "highway",
          sol: "VUS.17.e",
          stem: "Which was a long-term effect of the Federal Highway Act?",
          choices: [
            { letter: "A", text: "Fewer Americans owned cars." },
            { letter: "B", text: "Suburbs grew as people could commute by car." },
            { letter: "C", text: "Railroads replaced trucks for shipping." },
            { letter: "D", text: "Cities grew more crowded than ever." }
          ],
          correct: "B"
        },
        {
          id: "accessible",
          sol: "VUS.17.a",
          stem: "In the table, the word accessible most nearly means —",
          choices: [
            { letter: "A", text: "possible for everyone to enter and use" },
            { letter: "B", text: "owned and run by the government" },
            { letter: "C", text: "open only during regular business hours" },
            { letter: "D", text: "free of charge to every visitor" }
          ],
          correct: "A"
        },
        {
          id: "aim",
          sol: "VUS.17.a",
          stem: "Which conclusion is best supported by sentence 1 and the table?",
          choices: [
            { letter: "A", text: "AIM opposed letting tribes run their own programs." },
            { letter: "B", text: "Congress passed the law before AIM was formed." },
            { letter: "C", text: "Native American activism helped win more tribal self-rule." },
            { letter: "D", text: "The Indian law ended all federal aid to tribes." }
          ],
          correct: "C"
        },
        {
          id: "women",
          sol: "VUS.17.c",
          stem: "Which two laws in the table most directly reflect goals of the women's movement?",
          choices: [
            { letter: "A", text: "the Highway Act and the ADA" },
            { letter: "B", text: "the Equal Pay Act and Title IX" },
            { letter: "C", text: "Title IX and the Indian law" },
            { letter: "D", text: "the ADA and the Equal Pay Act" }
          ],
          correct: "B"
        },
        {
          id: "seq",
          sol: "VUS.17.a",
          stem: "Which law in the table was passed MOST recently?",
          choices: [
            { letter: "A", text: "Title IX" },
            { letter: "B", text: "the Equal Pay Act" },
            { letter: "C", text: "the Indian Self-Determination Act" },
            { letter: "D", text: "the ADA" }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "modn-china-refugees",
      family: "MODN",
      title: "China, Southeast Asia and new Americans",
      kind: "Cold War & Modern America · VUS.15",
      blurb: "A communist China, a surprise visit, and refugees who rebuilt their lives.",
      level: 3,
      passage: "<p>" + N(1) + "In 1949, Mao Zedong's Communists won China's civil war, and the Nationalist government fled to the island of <strong>Taiwan</strong>. " + N(2) + "For more than twenty years, the United States recognized only the Nationalists as China's government. " + N(3) + "In 1972, President Richard Nixon visited the People's Republic of China, opening contact between the two nations, and in 1979 the United States established full diplomatic relations with Beijing. " + N(4) + "Meanwhile, the wars in Asia created millions of <strong>refugees</strong>. " + N(5) + "After 1975, many people from Vietnam, Laos and Cambodia, including Hmong families who had aided the United States, escaped; some fled by sea in crowded boats. " + N(6) + "Congress passed laws to admit them, and churches and families sponsored their resettlement. " + N(7) + "In Northern Virginia, Vietnamese Americans opened shops and restaurants, and the Eden Center in Falls Church became a gathering place for the community.</p>",
      claims: [
        {
          id: "1949",
          sol: "VUS.15.d",
          stem: "What happened in China in 1949?",
          choices: [
            { letter: "A", text: "Japan took control of the mainland." },
            { letter: "B", text: "Communists under Mao won the civil war." },
            { letter: "C", text: "China joined NATO." },
            { letter: "D", text: "The Nationalists defeated the Communists." }
          ],
          correct: "B"
        },
        {
          id: "nixon",
          sol: "VUS.15.c",
          stem: "Why was Nixon's 1972 visit to China significant?",
          choices: [
            { letter: "A", text: "It brought a formal end to the Korean War." },
            { letter: "B", text: "It made China a military ally of the U.S." },
            { letter: "C", text: "It opened relations after decades of no official contact." },
            { letter: "D", text: "It handed Taiwan over to the Communists." }
          ],
          correct: "C"
        },
        {
          id: "refugee",
          sol: "VUS.15.d",
          stem: "In sentence 4, the word refugees refers to people who —",
          choices: [
            { letter: "A", text: "flee their homeland to escape war or persecution" },
            { letter: "B", text: "move abroad only to find better jobs" },
            { letter: "C", text: "serve as diplomats in a foreign country" },
            { letter: "D", text: "fight as soldiers in a foreign army" }
          ],
          correct: "A"
        },
        {
          id: "hmong",
          sol: "VUS.15.d",
          stem: "According to sentence 5, why did many Hmong families leave Laos?",
          choices: [
            { letter: "A", text: "They were sent to Taiwan under a treaty." },
            { letter: "B", text: "They wished to fight for the UN in Korea." },
            { letter: "C", text: "They had been invited to China by Mao." },
            { letter: "D", text: "They had aided the U.S. and were in danger after 1975." }
          ],
          correct: "D"
        },
        {
          id: "virginia",
          sol: "VUS.15.d",
          stem: "Which conclusion about refugees is best supported by sentences 6 and 7?",
          choices: [
            { letter: "A", text: "Most refugees returned to Asia within a year." },
            { letter: "B", text: "Refugees helped shape communities such as Northern Virginia's." },
            { letter: "C", text: "Congress refused to admit refugees from Vietnam." },
            { letter: "D", text: "Refugees were allowed to settle only in California." }
          ],
          correct: "B"
        },
        {
          id: "shift",
          sol: "VUS.15.a",
          stem: "How did the 1949 events in China affect U.S. Cold War policy?",
          choices: [
            { letter: "A", text: "Fears grew that communism would spread across Asia." },
            { letter: "B", text: "The U.S. ended its policy of containing communism." },
            { letter: "C", text: "The U.S. withdrew all of its forces from Asia." },
            { letter: "D", text: "The Marshall Plan's aid was moved from Europe to China." }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "modn-technology",
      family: "MODN",
      title: "From Sputnik to smartphones",
      kind: "Cold War & Modern America · VUS.17",
      blurb: "How the space race, television and computers changed American life.",
      level: 2,
      passage: "<p>" + N(1) + "In 1957, the Soviet Union launched <strong>Sputnik</strong>, the first artificial satellite. " + N(2) + "Alarmed Americans created NASA in 1958 and spent heavily on science and math education. " + N(3) + "In 1969, the astronauts of Apollo 11 became the first people to walk on the Moon. " + N(4) + "At home, television reached most households by the 1960s; the 1960 Kennedy-Nixon debate was the first televised presidential debate, and news coverage shaped views of civil rights and Vietnam. " + N(5) + "The internet grew out of a Defense Department computer network created in 1969. " + N(6) + "Personal computers spread in the 1980s, and by the 2010s most Americans carried smartphones. " + N(7) + "These tools sped up communication and work, but they also raised new questions about privacy and the spread of false information.</p>",
      claims: [
        {
          id: "sputnik",
          sol: "VUS.15.a",
          stem: "Why did the launch of Sputnik alarm Americans?",
          choices: [
            { letter: "A", text: "It brought an end to the Korean War." },
            { letter: "B", text: "It was launched by the Soviets from Cuba." },
            { letter: "C", text: "It suggested the Soviets led in rocket technology." },
            { letter: "D", text: "It shot down an American satellite in orbit." }
          ],
          correct: "C"
        },
        {
          id: "response",
          sol: "VUS.17.e",
          stem: "According to sentence 2, how did the United States respond to Sputnik?",
          choices: [
            { letter: "A", text: "It created NASA and invested in science education." },
            { letter: "B", text: "It banned all space research for ten years." },
            { letter: "C", text: "It asked to join the Soviet space program." },
            { letter: "D", text: "It cut federal funding for public schools." }
          ],
          correct: "A"
        },
        {
          id: "tv",
          sol: "VUS.17.e",
          stem: "Which evidence from the passage best shows that television changed politics?",
          choices: [
            { letter: "A", text: "Apollo 11 landed on the Moon." },
            { letter: "B", text: "The internet began as a Defense network." },
            { letter: "C", text: "Personal computers spread in the 1980s." },
            { letter: "D", text: "Presidential candidates debated on television in 1960." }
          ],
          correct: "D"
        },
        {
          id: "coverage",
          sol: "VUS.17.c",
          stem: "According to sentence 4, television news shaped public views of —",
          choices: [
            { letter: "A", text: "the Bay of Pigs and the Berlin Airlift" },
            { letter: "B", text: "the civil rights struggle and the Vietnam War" },
            { letter: "C", text: "the Apollo 11 landing and Sputnik" },
            { letter: "D", text: "personal computers and smartphones" }
          ],
          correct: "B"
        },
        {
          id: "tradeoff",
          sol: "VUS.17.e",
          stem: "Which statement best describes the trade-off described in sentence 7?",
          choices: [
            { letter: "A", text: "New technology made life slower but more private." },
            { letter: "B", text: "Faster communication raised worries about privacy and falsehoods." },
            { letter: "C", text: "Computers replaced television sets in every home." },
            { letter: "D", text: "Technology ended the need for any news media." }
          ],
          correct: "B"
        },
        {
          id: "space-race",
          sol: "VUS.17.e",
          stem: "In sentence 1, the word satellite most nearly means —",
          choices: [
            { letter: "A", text: "an object that orbits Earth" },
            { letter: "B", text: "a long-range nuclear missile" },
            { letter: "C", text: "a base built on the Moon" },
            { letter: "D", text: "a radio station on the ground" }
          ],
          correct: "A"
        }
      ]
    },

    /* ---------- long ---------- */
    {
      id: "modn-end-cold-war",
      family: "MODN",
      title: "The end of the Cold War",
      kind: "Cold War & Modern America · VUS.15",
      blurb: "Pressure from Washington, reform in Moscow and a wall that fell.",
      level: 3,
      passage: "<p>" + N(1) + "President Ronald Reagan, elected in 1980, took a firm line against the Soviet Union. " + N(2) + "He greatly increased defense spending and proposed the <strong>Strategic Defense Initiative</strong>, a plan for a system to shoot down incoming missiles. " + N(3) + "The Soviet economy, already weak and strained by a long war in Afghanistan, struggled to keep up. " + N(4) + "In 1985, Mikhail Gorbachev became the Soviet leader and began reforms called <strong>glasnost</strong> (openness) and <strong>perestroika</strong> (restructuring of the economy). " + N(5) + "In 1987, Reagan and Gorbachev signed the INF Treaty, which removed a whole class of nuclear missiles. " + N(6) + "That same year, speaking at the Berlin Wall, Reagan declared:</p><blockquote>Mr. Gorbachev, tear down this wall!</blockquote><p>" + N(7) + "Reagan also spoke often of freedom, democracy and free markets, and the U.S. supported groups resisting communist rule. " + N(8) + "In 1989, peaceful revolutions swept Eastern Europe, and on November 9 East Germans began crossing and tearing down the Berlin Wall. " + N(9) + "Germany reunited in 1990. " + N(10) + "In December 1991, the Soviet Union broke apart into fifteen independent nations, and the Cold War was over.</p>",
      claims: [
        {
          id: "pressure",
          sol: "VUS.15.e",
          stem: "Which statement best explains how U.S. defense policy helped end the Cold War?",
          choices: [
            { letter: "A", text: "The U.S. cut its military to show good faith." },
            { letter: "B", text: "A U.S. buildup pressured a Soviet economy that could not keep pace." },
            { letter: "C", text: "The U.S. invaded the Soviet Union in 1989." },
            { letter: "D", text: "The U.S. gave the Soviets its missile technology." }
          ],
          correct: "B"
        },
        {
          id: "glasnost",
          sol: "VUS.15.e",
          stem: "In sentence 4, glasnost most nearly means —",
          choices: [
            { letter: "A", text: "a military alliance" },
            { letter: "B", text: "a five-year economic plan" },
            { letter: "C", text: "a ban on travel" },
            { letter: "D", text: "greater openness in society" }
          ],
          correct: "D"
        },
        {
          id: "wall",
          sol: "VUS.15.c",
          stem: "Reagan's words at the Berlin Wall were mainly meant to —",
          choices: [
            { letter: "A", text: "challenge the Soviet leader to allow more freedom" },
            { letter: "B", text: "announce a coming U.S. attack on East Germany" },
            { letter: "C", text: "praise the Soviet Union for building the wall" },
            { letter: "D", text: "ask Congress to pay for a new wall in Berlin" }
          ],
          correct: "A"
        },
        {
          id: "values",
          sol: "VUS.15.e",
          stem: "Which sentence best shows the assertion of American values as a factor in ending the Cold War?",
          choices: [
            { letter: "A", text: "sentence 3" },
            { letter: "B", text: "sentence 5" },
            { letter: "C", text: "sentence 7" },
            { letter: "D", text: "sentence 9" }
          ],
          correct: "C"
        },
        {
          id: "seq",
          sol: "VUS.15.e",
          stem: "Which event happened LAST?",
          choices: [
            { letter: "A", text: "the fall of the Berlin Wall" },
            { letter: "B", text: "the signing of the INF Treaty" },
            { letter: "C", text: "the reunification of Germany" },
            { letter: "D", text: "the breakup of the Soviet Union" }
          ],
          correct: "D"
        },
        {
          id: "nato",
          sol: "VUS.15.b",
          stem: "The fall of the Berlin Wall marked the end of a divide that began when —",
          choices: [
            { letter: "A", text: "Germany was split after World War II into Western and Soviet zones" },
            { letter: "B", text: "Cuba allied with the Soviet Union in 1960" },
            { letter: "C", text: "Korea was divided at the 38th parallel" },
            { letter: "D", text: "Vietnam was divided after France left Indochina" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "modn-social-movements",
      family: "MODN",
      title: "Movements that reshaped American politics",
      kind: "Cold War & Modern America · VUS.17",
      blurb: "Women's rights, gay rights, a conservative revival, AIDS and the fight against hate.",
      level: 3,
      passage: "<p>" + N(1) + "In the 1960s and 1970s, the <strong>women's movement</strong> pushed for equal pay, equal opportunity in schools and jobs, and an Equal Rights Amendment, which Congress passed in 1972 but which was not ratified by enough states before its deadline. " + N(2) + "The Gay Rights Movement grew after the 1969 Stonewall uprising in New York City. " + N(3) + "When AIDS was first identified in 1981, many patients faced fear and discrimination, and activists pressed for research and care; in 1990, Congress funded treatment through the Ryan White CARE Act. " + N(4) + "At the same time, a <strong>conservative movement</strong> called for lower taxes, a smaller federal government, a strong national defense and traditional family values. " + N(5) + "It helped elect Ronald Reagan in 1980. " + N(6) + "Americans also confronted violence driven by hatred. " + N(7) + "In 1995, an anti-government extremist bombed a federal building in Oklahoma City, killing 168 people. " + N(8) + "In 2017, a white supremacist rally in Charlottesville, Virginia, ended with a counter-protester killed, and in 2018 a gunman killed eleven worshippers at a Pittsburgh synagogue, the deadliest <strong>antisemitic</strong> attack in U.S. history.</p>",
      claims: [
        {
          id: "era",
          sol: "VUS.17.a",
          stem: "According to sentence 1, what happened to the Equal Rights Amendment?",
          choices: [
            { letter: "A", text: "It was never passed by Congress." },
            { letter: "B", text: "It was ratified in 1972." },
            { letter: "C", text: "It passed Congress but was not ratified in time." },
            { letter: "D", text: "It was struck down by the Supreme Court." }
          ],
          correct: "C"
        },
        {
          id: "conservative",
          sol: "VUS.17.c",
          stem: "Which goal was central to the conservative movement that elected Reagan?",
          choices: [
            { letter: "A", text: "smaller government and lower taxes" },
            { letter: "B", text: "ending the defense buildup" },
            { letter: "C", text: "a larger federal role in the economy" },
            { letter: "D", text: "leaving NATO" }
          ],
          correct: "A"
        },
        {
          id: "aids",
          sol: "VUS.17.c",
          stem: "Which statement about HIV/AIDS is supported by sentence 3?",
          choices: [
            { letter: "A", text: "AIDS was first identified in the 1960s." },
            { letter: "B", text: "Activism helped bring federal funding for treatment." },
            { letter: "C", text: "Congress refused to fund AIDS care." },
            { letter: "D", text: "AIDS patients faced no discrimination." }
          ],
          correct: "B"
        },
        {
          id: "domestic",
          sol: "VUS.17.b",
          stem: "The Oklahoma City bombing in sentence 7 is an example of —",
          choices: [
            { letter: "A", text: "a foreign army's invasion" },
            { letter: "B", text: "a Cold War proxy war" },
            { letter: "C", text: "a legal protest" },
            { letter: "D", text: "domestic terrorism" }
          ],
          correct: "D"
        },
        {
          id: "antisemitic",
          sol: "VUS.17.c",
          stem: "In sentence 8, the word antisemitic describes hostility toward —",
          choices: [
            { letter: "A", text: "immigrants from Asia" },
            { letter: "B", text: "members of the military" },
            { letter: "C", text: "government workers" },
            { letter: "D", text: "Jewish people" }
          ],
          correct: "D"
        },
        {
          id: "select",
          sol: "VUS.17.c",
          stem: "Select TWO movements in the passage that worked to expand rights for particular groups.",
          choices: [
            { letter: "A", text: "the women's movement" },
            { letter: "B", text: "the anti-government extremists" },
            { letter: "C", text: "the Gay Rights Movement" },
            { letter: "D", text: "the white supremacist rally" }
          ],
          correct: ["A", "C"]
        }
      ]
    },
    {
      id: "modn-selma-to-obama",
      family: "MODN",
      title: "From the Voting Rights Act to the White House",
      kind: "Cold War & Modern America · VUS.17",
      blurb: "How the Civil Rights Movement opened the way for Barack Obama.",
      level: 3,
      passage: "<p>" + N(1) + "The Voting Rights Act of 1965 removed barriers that had kept millions of African Americans from voting. " + N(2) + "Within a few years, Black voter registration in the South rose sharply, and the number of Black elected officials began to grow. " + N(3) + "In 1968, Shirley Chisholm became the first Black woman elected to Congress, and in 1972 she sought the Democratic nomination for president. " + N(4) + "Jesse Jackson, who had worked with Dr. King, ran strong campaigns for the nomination in 1984 and 1988. " + N(5) + "In 1989, Virginians elected L. Douglas Wilder, the grandson of enslaved people, as governor; he was the first African American elected governor of any state. " + N(6) + "In 2008, Senator <strong>Barack Obama</strong> of Illinois was elected the 44th president, the first African American to hold the office. " + N(7) + "He won Virginia, the first Democrat to carry the state since 1964. " + N(8) + "Many Americans saw his victory as a <strong>milestone</strong> that the Civil Rights Movement had made possible, while others noted that racial gaps in wealth, health and education remained. " + N(9) + "Obama was re-elected in 2012.</p>",
      claims: [
        {
          id: "link",
          sol: "VUS.17.d",
          stem: "Which statement best connects the Civil Rights Movement to Obama's election?",
          choices: [
            { letter: "A", text: "The movement ended all racial gaps by 2008." },
            { letter: "B", text: "Voting rights laws expanded the electorate and Black political leadership." },
            { letter: "C", text: "The movement opposed African Americans running for office." },
            { letter: "D", text: "Obama was elected before the Voting Rights Act passed." }
          ],
          correct: "B"
        },
        {
          id: "wilder",
          sol: "VUS.17.d",
          stem: "Why is L. Douglas Wilder's election in 1989 significant?",
          choices: [
            { letter: "A", text: "He was the first African American elected governor of any state." },
            { letter: "B", text: "He was the first African American in the U.S. Senate." },
            { letter: "C", text: "He wrote the Voting Rights Act." },
            { letter: "D", text: "He led the Moton High School walkout." }
          ],
          correct: "A"
        },
        {
          id: "milestone",
          sol: "VUS.17.d",
          stem: "In sentence 8, the word milestone most nearly means —",
          choices: [
            { letter: "A", text: "a serious setback" },
            { letter: "B", text: "a law passed by Congress" },
            { letter: "C", text: "an important turning point" },
            { letter: "D", text: "a heated debate" }
          ],
          correct: "C"
        },
        {
          id: "seq",
          sol: "VUS.17.d",
          stem: "Which event in the passage happened FIRST?",
          choices: [
            { letter: "A", text: "Jesse Jackson's first run for president" },
            { letter: "B", text: "Wilder's election as governor" },
            { letter: "C", text: "Obama's re-election" },
            { letter: "D", text: "Shirley Chisholm's election to Congress" }
          ],
          correct: "D"
        },
        {
          id: "chisholm",
          sol: "VUS.17.c",
          stem: "Shirley Chisholm's 1972 campaign drew on the civil rights movement and which other movement of the era?",
          choices: [
            { letter: "A", text: "the conservative movement" },
            { letter: "B", text: "the pro-life movement" },
            { letter: "C", text: "the Black Power Movement's Panthers" },
            { letter: "D", text: "the women's movement" }
          ],
          correct: "D"
        },
        {
          id: "brown",
          sol: "VUS.17.a",
          stem: "Which Supreme Court decision, an earlier step on this path, ended legal segregation in public schools?",
          choices: [
            { letter: "A", text: "Miranda v. Arizona" },
            { letter: "B", text: "Gideon v. Wainwright" },
            { letter: "C", text: "Brown v. Board of Education" },
            { letter: "D", text: "Plessy v. Ferguson" }
          ],
          correct: "C"
        }
      ]
    }
  ];

  for (var i = 0; i < PACKS.length; i++) P.push(PACKS[i]);
})(typeof window !== "undefined" ? window : global);
