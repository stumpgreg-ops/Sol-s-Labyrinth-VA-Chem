/* SOL Lab — World History II · Cold War & the Modern World (WHII.10–12). Original text only. */
(function (global) {
  var P = global.HEIST_PACKS;
  if (!P || !P.push) return;
  var N = function (i) { return '<span class="n">(' + i + ')</span> '; };   // numbered sentence

  var PACKS = [
    /* ---------- tiny ---------- */
    {
      id: "cold-iron-curtain",
      family: "COLD",
      title: "An iron curtain descends",
      kind: "Cold War & the Modern World · WHII.10",
      blurb: "Churchill's 1946 warning about a divided Europe.",
      level: 1,
      passage: "<blockquote>From Stettin in the Baltic to Trieste in the Adriatic, an iron curtain has descended across the Continent. Behind that line lie all the capitals of the ancient states of Central and Eastern Europe.</blockquote>" +
        "<p class=\"src\">— Winston Churchill, speech at Westminster College, Fulton, Missouri, 1946</p>" +
        "<p>" + N(1) + "Churchill spoke less than a year after World War II ended. " + N(2) + "By then Soviet troops occupied most of Eastern Europe, where communist governments were taking power.</p>",
      claims: [
        {
          id: "meaning",
          sol: "WHII.10.a",
          stem: "In this speech, the iron curtain refers to —",
          choices: [
            { letter: "A", text: "the line of forts France built along its border with Germany" },
            { letter: "B", text: "the division between Soviet-controlled Eastern Europe and the West" },
            { letter: "C", text: "the wall the Soviets built around West Berlin in 1961" },
            { letter: "D", text: "the trench lines of the Western Front in World War I" }
          ],
          correct: "B"
        },
        {
          id: "cause",
          sol: "WHII.10.a",
          stem: "Which of these was a cause of the Cold War?",
          choices: [
            { letter: "A", text: "Soviet control of Eastern European governments after World War II" },
            { letter: "B", text: "the failure of the League of Nations to stop Italy in Ethiopia" },
            { letter: "C", text: "the Japanese attack on Pearl Harbor in 1941" },
            { letter: "D", text: "the breakup of the Soviet Union into separate republics" }
          ],
          correct: "A"
        },
        {
          id: "purpose",
          sol: "WHII.10.a",
          stem: "Churchill's main purpose in giving this speech in the United States was most likely to —",
          choices: [
            { letter: "A", text: "praise the Soviet Union for its role in defeating Germany" },
            { letter: "B", text: "warn Americans about Soviet expansion in Europe" },
            { letter: "C", text: "announce that Britain would leave the United Nations" },
            { letter: "D", text: "call for Germany to be united under Soviet rule" }
          ],
          correct: "B"
        },
        {
          id: "containment",
          sol: "WHII.10.a",
          stem: "The U.S. policy of containment was meant to —",
          choices: [
            { letter: "A", text: "overthrow the Soviet government by invading Russia" },
            { letter: "B", text: "return Eastern Europe to German control" },
            { letter: "C", text: "stop the spread of communism to new countries" },
            { letter: "D", text: "end American trade with Western Europe" }
          ],
          correct: "C"
        },
        {
          id: "systems",
          sol: "WHII.10.a",
          stem: "Which statement correctly contrasts the economic systems of the two superpowers?",
          choices: [
            { letter: "A", text: "The Soviet Union relied on private business; the United States relied on central planning." },
            { letter: "B", text: "Both superpowers used command economies run by a single political party." },
            { letter: "C", text: "The United States had a command economy; the Soviet Union had a mixed one." },
            { letter: "D", text: "The United States had a market economy; the Soviet Union had a command economy." }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "cold-berlin-airlift",
      family: "COLD",
      title: "Lifeline to West Berlin",
      kind: "Cold War & the Modern World · WHII.10",
      blurb: "A blockade, an airlift and a new alliance, 1945–1949.",
      level: 1,
      passage: "<p>" + N(1) + "Berlin lay deep inside the Soviet zone of occupied Germany.</p>" +
        "<ul><li><strong>1945</strong> Germany and Berlin are each divided into four occupation zones.</li>" +
        "<li><strong>June 1948</strong> The Soviets block all roads, railways and canals into West Berlin.</li>" +
        "<li><strong>1948–1949</strong> American and British planes fly in food and coal: the <strong>Berlin Airlift</strong>.</li>" +
        "<li><strong>April 1949</strong> The United States, Canada and Western European nations form <strong>NATO</strong>.</li>" +
        "<li><strong>May 1949</strong> The Soviets lift the blockade.</li></ul>",
      claims: [
        {
          id: "why",
          sol: "WHII.10.b",
          stem: "Why did the Soviet Union block the routes into West Berlin?",
          choices: [
            { letter: "A", text: "to force the Western Allies to give up their part of the city" },
            { letter: "B", text: "to stop Nazi leaders from escaping to the West" },
            { letter: "C", text: "to punish Britain for leaving the United Nations" },
            { letter: "D", text: "to stop East Germans from fleeing to the West" }
          ],
          correct: "A"
        },
        {
          id: "response",
          sol: "WHII.10.b",
          stem: "How did the United States and Britain respond to the blockade?",
          choices: [
            { letter: "A", text: "They sent tanks to invade East Germany." },
            { letter: "B", text: "They tested an atomic bomb near Berlin as a warning." },
            { letter: "C", text: "They supplied the city by air for about a year." },
            { letter: "D", text: "They agreed to turn West Berlin over to the Soviets." }
          ],
          correct: "C"
        },
        {
          id: "first",
          sol: "WHII.10.a",
          stem: "Which event in the Berlin timeline happened FIRST?",
          choices: [
            { letter: "A", text: "NATO is formed" },
            { letter: "B", text: "the blockade is lifted" },
            { letter: "C", text: "the blockade begins" },
            { letter: "D", text: "Germany is divided into zones" }
          ],
          correct: "D"
        },
        {
          id: "nato",
          sol: "WHII.10.a",
          stem: "By joining NATO, member nations agreed —",
          choices: [
            { letter: "A", text: "to share a single currency" },
            { letter: "B", text: "to defend one another against an attack" },
            { letter: "C", text: "to follow Soviet economic plans" },
            { letter: "D", text: "to give their armies to the United Nations" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "cold-gandhi-salt",
      family: "COLD",
      title: "The march to the sea",
      kind: "Cold War & the Modern World · WHII.11",
      blurb: "Gandhi turns a tax on salt into a challenge to British rule.",
      level: 1,
      passage: "<p>" + N(1) + "In 1930 Mohandas Gandhi led a 240-mile <strong>Salt March</strong> to the sea to make salt, breaking a British law that taxed it. " + N(2) + "His method was <strong>civil disobedience</strong>: nonviolent refusal to obey unjust laws. " + N(3) + "Indians also boycotted British cloth and spun their own. " + N(4) + "In 1947 Britain granted independence, and British India was divided into mostly Hindu India and mostly Muslim Pakistan.</p>",
      claims: [
        {
          id: "vocab",
          sol: "WHII.11.a",
          stem: "In sentence 2, the term civil disobedience most nearly means —",
          choices: [
            { letter: "A", text: "armed revolt against a colonial army" },
            { letter: "B", text: "peaceful refusal to obey laws seen as unjust" },
            { letter: "C", text: "voting to elect members of a parliament" },
            { letter: "D", text: "moving to another country to escape a law" }
          ],
          correct: "B"
        },
        {
          id: "salt",
          sol: "WHII.11.a",
          stem: "Why was the salt law an effective target for protest?",
          choices: [
            { letter: "A", text: "Every Indian needed salt, so the tax touched rich and poor alike." },
            { letter: "B", text: "Salt was India's most valuable export to British factories." },
            { letter: "C", text: "The salt law forced Indians to serve in the British army." },
            { letter: "D", text: "Only Indian Muslims were required to pay the salt tax." }
          ],
          correct: "A"
        },
        {
          id: "boycott",
          sol: "WHII.11.a",
          stem: "The boycott of British cloth in sentence 3 was mainly intended to —",
          choices: [
            { letter: "A", text: "help British textile mills recover after the war" },
            { letter: "B", text: "end trade between India and Pakistan" },
            { letter: "C", text: "protect Indian farmers from famine" },
            { letter: "D", text: "hurt British business and build Indian self-reliance" }
          ],
          correct: "D"
        },
        {
          id: "partition",
          sol: "WHII.11.a",
          stem: "Which was a result of independence in 1947?",
          choices: [
            { letter: "A", text: "the return of India to Mughal rule" },
            { letter: "B", text: "the end of religious conflict in South Asia" },
            { letter: "C", text: "the partition of British India into two nations" },
            { letter: "D", text: "the union of India and Britain as one country" }
          ],
          correct: "C"
        },
        {
          id: "method",
          sol: "WHII.11.d",
          stem: "Gandhi's campaign is an example of which method of gaining independence?",
          choices: [
            { letter: "A", text: "a military coup" },
            { letter: "B", text: "a long guerrilla war" },
            { letter: "C", text: "nonviolent mass protest" },
            { letter: "D", text: "a purchase of land from Britain" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "cold-terror-timeline",
      family: "COLD",
      title: "Attacks on civilians",
      kind: "Cold War & the Modern World · WHII.12",
      blurb: "Five acts of international terrorism, 1983–2011.",
      level: 1,
      passage: "<p>" + N(1) + "<strong>Terrorism</strong> is violence against civilians meant to spread fear for political goals.</p>" +
        "<ul><li><strong>1983</strong> A suicide bombing destroys the U.S. Embassy in Beirut, Lebanon.</li>" +
        "<li><strong>1988</strong> A bomb downs Pan Am Flight 103 over Lockerbie, Scotland; a Libyan agent is convicted.</li>" +
        "<li><strong>1998</strong> Al-Qaeda bombs U.S. embassies in Nairobi, Kenya, and Dar es Salaam, Tanzania.</li>" +
        "<li><strong>2001</strong> Al-Qaeda hijackers attack the United States.</li>" +
        "<li><strong>2011</strong> Norwegian extremist Anders Breivik kills 77 people in Norway.</li></ul>",
      claims: [
        {
          id: "define",
          sol: "WHII.12.d",
          stem: "Based on sentence 1, what sets terrorism apart from ordinary warfare?",
          choices: [
            { letter: "A", text: "It deliberately targets civilians to create fear." },
            { letter: "B", text: "It is carried out only by national armies." },
            { letter: "C", text: "It always stays inside a single country." },
            { letter: "D", text: "It is aimed only at soldiers and bases." }
          ],
          correct: "A"
        },
        {
          id: "africa",
          sol: "WHII.12.d",
          stem: "Which attack on the timeline took place in Africa?",
          choices: [
            { letter: "A", text: "the 1983 embassy bombing" },
            { letter: "B", text: "the 1988 Lockerbie bombing" },
            { letter: "C", text: "the 2011 attacks in Norway" },
            { letter: "D", text: "the 1998 embassy bombings" }
          ],
          correct: "D"
        },
        {
          id: "homegrown",
          sol: "WHII.12.d",
          stem: "Which attack took place in Europe and was carried out by a citizen of the country that was attacked?",
          choices: [
            { letter: "A", text: "the 1988 Lockerbie bombing" },
            { letter: "B", text: "the 1998 Nairobi bombing" },
            { letter: "C", text: "the 2011 attacks in Norway" },
            { letter: "D", text: "the 1983 Beirut bombing" }
          ],
          correct: "C"
        },
        {
          id: "conclude",
          sol: "WHII.12.d",
          stem: "Which conclusion about terrorism is best supported by the timeline?",
          choices: [
            { letter: "A", text: "Terrorism ended when the Cold War ended in 1991." },
            { letter: "B", text: "Terrorist attacks have struck several continents." },
            { letter: "C", text: "One group carried out every attack shown." },
            { letter: "D", text: "Terrorists have attacked only military targets." }
          ],
          correct: "B"
        },
        {
          id: "group",
          sol: "WHII.12.d",
          stem: "Which group carried out both the 1998 embassy bombings and the September 11 attacks?",
          choices: [
            { letter: "A", text: "al-Qaeda" },
            { letter: "B", text: "the Irish Republican Army" },
            { letter: "C", text: "the Khmer Rouge" },
            { letter: "D", text: "the Mau Mau" }
          ],
          correct: "A"
        }
      ]
    },

    /* ---------- short ---------- */
    {
      id: "cold-domino",
      family: "COLD",
      title: "Falling dominoes in Vietnam",
      kind: "Cold War & the Modern World · WHII.10",
      blurb: "Why the United States went to war in Southeast Asia.",
      level: 2,
      passage: "<p>" + N(1) + "After World War II, Ho Chi Minh led the Viet Minh in a war for Vietnam's independence from France. " + N(2) + "The French were defeated at Dien Bien Phu in 1954, and Vietnam was divided into a communist North and a non-communist South. " + N(3) + "American leaders accepted the <strong>domino theory</strong>: if one country in Southeast Asia fell to communism, its neighbors would follow, one after another. " + N(4) + "To stop that chain, the United States sent aid and advisers to South Vietnam and, by 1965, combat troops. " + N(5) + "In 1975, two years after U.S. troops left, North Vietnam conquered the South and united the country under communist rule.</p>",
      claims: [
        {
          id: "vocab",
          sol: "WHII.10.a",
          stem: "In sentence 3, the domino theory was the belief that —",
          choices: [
            { letter: "A", text: "communism in one country would spread to its neighbors" },
            { letter: "B", text: "colonial empires would collapse once a war began" },
            { letter: "C", text: "nuclear weapons made war between superpowers impossible" },
            { letter: "D", text: "trade between neighbors would end regional wars" }
          ],
          correct: "A"
        },
        {
          id: "leader",
          sol: "WHII.10.c",
          stem: "Who led the fight for Vietnam's independence from France?",
          choices: [
            { letter: "A", text: "Mao Zedong" },
            { letter: "B", text: "Chiang Kai-shek" },
            { letter: "C", text: "Ho Chi Minh" },
            { letter: "D", text: "Deng Xiaoping" }
          ],
          correct: "C"
        },
        {
          id: "policy",
          sol: "WHII.10.a",
          stem: "The U.S. actions described in sentence 4 are an example of which policy?",
          choices: [
            { letter: "A", text: "appeasement" },
            { letter: "B", text: "isolationism" },
            { letter: "C", text: "mercantilism" },
            { letter: "D", text: "containment" }
          ],
          correct: "D"
        },
        {
          id: "last",
          sol: "WHII.10.c",
          stem: "Which event happened LAST?",
          choices: [
            { letter: "A", text: "U.S. combat troops arrive in Vietnam" },
            { letter: "B", text: "North Vietnam conquers the South" },
            { letter: "C", text: "France is defeated at Dien Bien Phu" },
            { letter: "D", text: "the Viet Minh begin fighting France" }
          ],
          correct: "B"
        },
        {
          id: "outcome",
          sol: "WHII.10.a",
          stem: "Which statement about the outcome of the war is supported by the passage?",
          choices: [
            { letter: "A", text: "U.S. troops kept South Vietnam independent." },
            { letter: "B", text: "Vietnam was united under a communist government." },
            { letter: "C", text: "France regained control of Vietnam in 1975." },
            { letter: "D", text: "Vietnam remained divided into two countries." }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "cold-cuba",
      family: "COLD",
      title: "Thirteen days",
      kind: "Cold War & the Modern World · WHII.10",
      blurb: "From the Bay of Pigs to the Cuban Missile Crisis, 1959–1962.",
      level: 2,
      passage: "<p>" + N(1) + "In 1959 Fidel Castro's revolution took power in Cuba, and Castro soon allied with the Soviet Union. " + N(2) + "In April 1961 Cuban exiles trained and armed by the CIA landed at the <strong>Bay of Pigs</strong>, but Castro's forces defeated them within days. " + N(3) + "The failed <strong>covert</strong> operation embarrassed President John F. Kennedy. " + N(4) + "In October 1962 American spy planes photographed Soviet nuclear missile sites being built in Cuba. " + N(5) + "Kennedy ordered a naval <strong>quarantine</strong> of the island, and for thirteen days the world feared nuclear war. " + N(6) + "Soviet leader Nikita Khrushchev agreed to remove the missiles, and the United States promised not to invade Cuba.</p>",
      claims: [
        {
          id: "covert",
          sol: "WHII.10.b",
          stem: "In sentence 3, the word covert most nearly means —",
          choices: [
            { letter: "A", text: "secret" },
            { letter: "B", text: "public" },
            { letter: "C", text: "naval" },
            { letter: "D", text: "costly" }
          ],
          correct: "A"
        },
        {
          id: "cause",
          sol: "WHII.10.b",
          stem: "What was the main cause of the Cuban Missile Crisis?",
          choices: [
            { letter: "A", text: "Cuba's attack on a U.S. naval base" },
            { letter: "B", text: "Soviet nuclear missiles placed in Cuba" },
            { letter: "C", text: "the building of the Berlin Wall" },
            { letter: "D", text: "Cuba's seizure of the Panama Canal" }
          ],
          correct: "B"
        },
        {
          id: "bayofpigs",
          sol: "WHII.10.b",
          stem: "Based on the passage, the Bay of Pigs invasion was —",
          choices: [
            { letter: "A", text: "the event that ended Castro's rule" },
            { letter: "B", text: "the reason the Soviets left Cuba" },
            { letter: "C", text: "a failed U.S.-backed effort against Castro" },
            { letter: "D", text: "a Soviet attempt to invade Florida" }
          ],
          correct: "C"
        },
        {
          id: "quarantine",
          sol: "WHII.10.b",
          stem: "Kennedy most likely chose a naval quarantine instead of bombing the missile sites in order to —",
          choices: [
            { letter: "A", text: "give the Soviets time to finish the sites" },
            { letter: "B", text: "force Cuba to hold free elections" },
            { letter: "C", text: "move U.S. ships away from the region" },
            { letter: "D", text: "stop new missiles without starting a war" }
          ],
          correct: "D"
        },
        {
          id: "geography",
          sol: "WHII.10.a",
          stem: "Cuba's alliance with the Soviet Union alarmed U.S. leaders mainly because Cuba —",
          choices: [
            { letter: "A", text: "lies about 90 miles from Florida" },
            { letter: "B", text: "controlled the Suez Canal" },
            { letter: "C", text: "was the largest oil producer in the world" },
            { letter: "D", text: "bordered several NATO countries" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "cold-africa-indep",
      family: "COLD",
      title: "Africa's road to independence",
      kind: "Cold War & the Modern World · WHII.11",
      blurb: "Ghana, Kenya, Algeria and South Africa in one table.",
      level: 1,
      passage: "<p>" + N(1) + "After World War II, weakened European powers faced growing demands for self-rule across Africa. " + N(2) + "Leaders organized political parties, labor unions and, in some places, armed movements.</p>" +
        "<table><tr><th>Country</th><th>Ruled by</th><th>Freedom won</th><th>Path</th></tr>" +
        "<tr><td>Ghana</td><td>Britain</td><td>1957</td><td>Kwame Nkrumah led strikes, boycotts and elections</td></tr>" +
        "<tr><td>Kenya</td><td>Britain</td><td>1963</td><td>Mau Mau uprising; Jomo Kenyatta became its first leader</td></tr>" +
        "<tr><td>Algeria</td><td>France</td><td>1962</td><td>an eight-year war of independence</td></tr>" +
        "<tr><td>South Africa</td><td>white-minority government</td><td>1994 (majority rule)</td><td>Nelson Mandela and the ANC fought <strong>apartheid</strong></td></tr></table>",
      claims: [
        {
          id: "france",
          sol: "WHII.11.b",
          stem: "According to the table, which country won its independence from France?",
          choices: [
            { letter: "A", text: "Ghana" },
            { letter: "B", text: "Algeria" },
            { letter: "C", text: "Kenya" },
            { letter: "D", text: "South Africa" }
          ],
          correct: "B"
        },
        {
          id: "match",
          sol: "WHII.11.b",
          stem: "Which leader is correctly matched with his country?",
          choices: [
            { letter: "A", text: "Jomo Kenyatta — Kenya" },
            { letter: "B", text: "Kwame Nkrumah — Algeria" },
            { letter: "C", text: "Nelson Mandela — Ghana" },
            { letter: "D", text: "Gamal Abdel Nasser — Kenya" }
          ],
          correct: "A"
        },
        {
          id: "methods",
          sol: "WHII.11.d",
          stem: "Which conclusion about African independence is best supported by the table?",
          choices: [
            { letter: "A", text: "Every African colony won freedom in the same year." },
            { letter: "B", text: "France gave up its colonies before Britain did." },
            { letter: "C", text: "Africans won self-rule by both peaceful and violent means." },
            { letter: "D", text: "South Africa was the first African colony to gain independence." }
          ],
          correct: "C"
        },
        {
          id: "algeria",
          sol: "WHII.11.b",
          stem: "Which statement best explains why Algeria's struggle for independence was especially violent?",
          choices: [
            { letter: "A", text: "Algeria had no independence leaders of its own." },
            { letter: "B", text: "Britain refused to let France give up Algeria." },
            { letter: "C", text: "United Nations troops fought to keep Algeria French." },
            { letter: "D", text: "Many French settlers lived there, and France called it part of France." }
          ],
          correct: "D"
        },
        {
          id: "effect",
          sol: "WHII.11.d",
          stem: "Which was a common effect of decolonization in Africa?",
          choices: [
            { letter: "A", text: "the return of North Africa to the Ottoman Empire" },
            { letter: "B", text: "new nations with borders drawn by Europeans" },
            { letter: "C", text: "an end to all trade with European countries" },
            { letter: "D", text: "automatic membership in the NATO alliance" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "cold-tech",
      family: "COLD",
      title: "Connected and engineered",
      kind: "Cold War & the Modern World · WHII.12",
      blurb: "The internet, social media and biotechnology change the world.",
      level: 2,
      passage: "<p>" + N(1) + "In the 1990s the <strong>internet</strong> spread from universities and governments into homes and businesses around the world. " + N(2) + "Smartphones and <strong>social media</strong> later let ordinary people share news, photos and video instantly. " + N(3) + "During the Arab Spring of 2010–2011, protesters in Tunisia and Egypt used social media to organize demonstrations. " + N(4) + "Governments have also used the same tools to spread propaganda and track critics. " + N(5) + "Advances in <strong>biotechnology</strong> produced crops engineered to resist pests and drought, as well as new vaccines and medicines. " + N(6) + "Critics raise concerns about privacy, misinformation, and the safety and ethics of altering genes.</p>",
      claims: [
        {
          id: "biotech",
          sol: "WHII.12.c",
          stem: "In sentence 5, the word biotechnology refers to —",
          choices: [
            { letter: "A", text: "building faster computer chips" },
            { letter: "B", text: "mapping farmland with satellites" },
            { letter: "C", text: "using living things and genes to make products" },
            { letter: "D", text: "making weapons from new metals" }
          ],
          correct: "C"
        },
        {
          id: "twoedged",
          sol: "WHII.12.c",
          stem: "According to sentences 3 and 4, social media has been used —",
          choices: [
            { letter: "A", text: "both to organize protests and to watch critics" },
            { letter: "B", text: "only by democratic governments" },
            { letter: "C", text: "mainly to sell farm products overseas" },
            { letter: "D", text: "only to share family photos" }
          ],
          correct: "A"
        },
        {
          id: "interdependence",
          sol: "WHII.10.f",
          stem: "Which statement best explains how the internet increased global interdependence?",
          choices: [
            { letter: "A", text: "It ended the need for international trade agreements." },
            { letter: "B", text: "It allowed each country to produce everything it needs." },
            { letter: "C", text: "It made national governments unnecessary." },
            { letter: "D", text: "It let people and firms in different countries work together instantly." }
          ],
          correct: "D"
        },
        {
          id: "view",
          sol: "WHII.12.c",
          stem: "The author's view of new technology is best described as —",
          choices: [
            { letter: "A", text: "entirely positive, with no drawbacks" },
            { letter: "B", text: "balanced, noting benefits and concerns" },
            { letter: "C", text: "entirely negative, calling for a ban" },
            { letter: "D", text: "focused only on military uses" }
          ],
          correct: "B"
        },
        {
          id: "crops",
          sol: "WHII.12.c",
          stem: "Crops engineered to resist drought would most likely help —",
          choices: [
            { letter: "A", text: "factory workers in large cities" },
            { letter: "B", text: "fishing fleets in cold oceans" },
            { letter: "C", text: "farmers in regions with little rain" },
            { letter: "D", text: "software companies selling apps" }
          ],
          correct: "C"
        }
      ]
    },

    /* ---------- medium ---------- */
    {
      id: "cold-china",
      family: "COLD",
      title: "Three leaders, two Chinas",
      kind: "Cold War & the Modern World · WHII.10",
      blurb: "Mao, Chiang and Deng, from civil war to Tiananmen Square.",
      level: 2,
      passage: "<p>" + N(1) + "After Japan's defeat, China's civil war resumed between the Nationalists under Chiang Kai-shek and the Communists under Mao Zedong. " + N(2) + "In 1949 Mao proclaimed the People's Republic of China, and Chiang's government fled to the island of Taiwan.</p>" +
        "<table><tr><th>Leader</th><th>Rule</th><th>Key actions</th></tr>" +
        "<tr><td>Mao Zedong</td><td>1949–1976</td><td>collective farms; Great Leap Forward led to famine; launched the <strong>Cultural Revolution</strong> in 1966</td></tr>" +
        "<tr><td>Chiang Kai-shek</td><td>1949–1975 (Taiwan)</td><td>led the Nationalist government on Taiwan with U.S. support</td></tr>" +
        "<tr><td>Deng Xiaoping</td><td>1978–1990s</td><td>allowed private farming, foreign investment and some free markets; kept one-party rule</td></tr></table>" +
        "<p>" + N(3) + "In 1989 students gathered in Beijing's <strong>Tiananmen Square</strong> to demand democracy and free speech. " + N(4) + "The government sent troops and tanks, killing many protesters and ending the movement.</p>",
      claims: [
        {
          id: "taiwan",
          sol: "WHII.10.c",
          stem: "Which leader's government moved to Taiwan in 1949?",
          choices: [
            { letter: "A", text: "Mao Zedong" },
            { letter: "B", text: "Deng Xiaoping" },
            { letter: "C", text: "Chiang Kai-shek" },
            { letter: "D", text: "Ho Chi Minh" }
          ],
          correct: "C"
        },
        {
          id: "contrast",
          sol: "WHII.10.c",
          stem: "Based on the table, how did Deng Xiaoping's economic policy differ from Mao's?",
          choices: [
            { letter: "A", text: "Deng allowed some private enterprise, while Mao collectivized farming." },
            { letter: "B", text: "Deng created collective farms, while Mao invited foreign investment." },
            { letter: "C", text: "Deng ended one-party rule, while Mao held free elections." },
            { letter: "D", text: "Deng closed China to trade, while Mao opened it to the West." }
          ],
          correct: "A"
        },
        {
          id: "deng",
          sol: "WHII.10.c",
          stem: "Which conclusion about Deng's China is best supported by the table and sentences 3–4?",
          choices: [
            { letter: "A", text: "Deng gave up power to the student protesters." },
            { letter: "B", text: "Deng returned China to Mao's economic policies." },
            { letter: "C", text: "Deng allowed Taiwan to rejoin China in 1989." },
            { letter: "D", text: "Deng opened the economy but not the political system." }
          ],
          correct: "D"
        },
        {
          id: "cultrev",
          sol: "WHII.12.a",
          stem: "The Cultural Revolution is listed among crimes against humanity because —",
          choices: [
            { letter: "A", text: "it was a foreign invasion of Chinese territory" },
            { letter: "B", text: "millions were persecuted, jailed or killed as enemies of Mao" },
            { letter: "C", text: "it forced China to give Hong Kong back to Britain" },
            { letter: "D", text: "it ended the collective farms Mao had created" }
          ],
          correct: "B"
        },
        {
          id: "tiananmen",
          sol: "WHII.10.c",
          stem: "According to sentence 3, the students in Tiananmen Square wanted —",
          choices: [
            { letter: "A", text: "a return to Mao's Cultural Revolution" },
            { letter: "B", text: "a war to reunite China with Taiwan" },
            { letter: "C", text: "democracy and freedom of speech" },
            { letter: "D", text: "an end to foreign trade" }
          ],
          correct: "C"
        },
        {
          id: "alarm",
          sol: "WHII.10.a",
          stem: "The Communist victory in China in 1949 alarmed U.S. leaders mainly because it —",
          choices: [
            { letter: "A", text: "ended American trade with Japan" },
            { letter: "B", text: "brought China into NATO" },
            { letter: "C", text: "gave the Soviets control of Taiwan" },
            { letter: "D", text: "seemed to show communism spreading in Asia" }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "cold-middle-east",
      family: "COLD",
      title: "From mandates to nations",
      kind: "Cold War & the Modern World · WHII.11",
      blurb: "Israel, Egypt and the end of the mandate system.",
      level: 2,
      passage: "<p>" + N(1) + "After World War I, the League of Nations gave Britain and France <strong>mandates</strong> to govern former Ottoman lands until they were ready for independence. " + N(2) + "Iraq, Lebanon, Syria and Jordan became independent between 1932 and 1946. " + N(3) + "In 1947 the United Nations proposed dividing the British mandate of Palestine into a Jewish state and an Arab state. " + N(4) + "Jewish leaders accepted and declared the State of Israel in 1948; neighboring Arab states rejected the plan and attacked, and Israel won the war that followed. " + N(5) + "Hundreds of thousands of Palestinian Arabs fled or were forced from their homes and became refugees. " + N(6) + "Golda Meir, who signed Israel's declaration of independence, later served as prime minister and led Israel in the 1973 Yom Kippur War. " + N(7) + "In Egypt, Gamal Abdel Nasser <strong>nationalized</strong> the Suez Canal in 1956, and Britain, France and Israel invaded until the United States and the Soviet Union pressed them to withdraw.</p>",
      claims: [
        {
          id: "mandate",
          sol: "WHII.11.c",
          stem: "In sentence 1, a mandate was —",
          choices: [
            { letter: "A", text: "a peace treaty that ended World War I" },
            { letter: "B", text: "a territory governed by a European power for the League" },
            { letter: "C", text: "a permanent colony of the Ottoman Empire" },
            { letter: "D", text: "a United Nations peacekeeping force" }
          ],
          correct: "B"
        },
        {
          id: "meir",
          sol: "WHII.11.c",
          stem: "Who was Israel's prime minister during the 1973 war?",
          choices: [
            { letter: "A", text: "Gamal Abdel Nasser" },
            { letter: "B", text: "Anwar Sadat" },
            { letter: "C", text: "Jomo Kenyatta" },
            { letter: "D", text: "Golda Meir" }
          ],
          correct: "D"
        },
        {
          id: "suez",
          sol: "WHII.10.b",
          stem: "According to sentence 7, the Suez Crisis ended when —",
          choices: [
            { letter: "A", text: "both superpowers pressured the invaders to withdraw" },
            { letter: "B", text: "Britain took permanent control of the canal" },
            { letter: "C", text: "Israel annexed all of Egypt" },
            { letter: "D", text: "the United Nations gave the canal to France" }
          ],
          correct: "A"
        },
        {
          id: "nationalize",
          sol: "WHII.11.c",
          stem: "In sentence 7, the word nationalized most nearly means —",
          choices: [
            { letter: "A", text: "sold to a foreign company" },
            { letter: "B", text: "closed to all ships" },
            { letter: "C", text: "placed under government ownership" },
            { letter: "D", text: "divided between two countries" }
          ],
          correct: "C"
        },
        {
          id: "refugees",
          sol: "WHII.12.b",
          stem: "According to sentence 5, one result of the 1948 war was —",
          choices: [
            { letter: "A", text: "a large Palestinian Arab refugee population" },
            { letter: "B", text: "the return of Palestine to Ottoman rule" },
            { letter: "C", text: "Egypt's control of the Suez Canal" },
            { letter: "D", text: "the end of the British Empire in Africa" }
          ],
          correct: "A"
        },
        {
          id: "conclude",
          sol: "WHII.11.d",
          stem: "Which conclusion is best supported by the passage as a whole?",
          choices: [
            { letter: "A", text: "The mandates ended without any conflict in the region." },
            { letter: "B", text: "Britain and France kept their mandates until the 1970s." },
            { letter: "C", text: "The League of Nations created the State of Israel in 1948." },
            { letter: "D", text: "The end of the mandates created new states and new conflicts." }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "cold-trade",
      family: "COLD",
      title: "A phone from everywhere",
      kind: "Cold War & the Modern World · WHII.12",
      blurb: "Multinational corporations, trade agreements and world organizations.",
      level: 2,
      passage: "<table><tr><th>Organization</th><th>Founded</th><th>Purpose</th></tr>" +
        "<tr><td>OPEC</td><td>1960</td><td>oil-exporting nations coordinate production and prices</td></tr>" +
        "<tr><td>European Union (EU)</td><td>1993</td><td>a common market; most members share the euro</td></tr>" +
        "<tr><td>NAFTA (USMCA since 2020)</td><td>1994</td><td>removed most tariffs among the United States, Canada and Mexico</td></tr>" +
        "<tr><td>World Trade Organization (WTO)</td><td>1995</td><td>sets rules for trade among members and settles disputes</td></tr></table>" +
        "<p>" + N(1) + "A <strong>multinational corporation</strong> is a company that operates in many countries. " + N(2) + "A smartphone may be designed in California, use minerals mined in Africa, and be assembled in China from parts made in South Korea and Japan. " + N(3) + "Lower <strong>tariffs</strong> make such supply chains cheaper, but workers in some industries lose jobs when factories move abroad. " + N(4) + "Such agreements tie national economies closely together.</p>",
      claims: [
        {
          id: "tariff",
          sol: "WHII.12.e",
          stem: "In sentence 3, tariffs are —",
          choices: [
            { letter: "A", text: "loans from world banks" },
            { letter: "B", text: "limits on immigration" },
            { letter: "C", text: "taxes on imported goods" },
            { letter: "D", text: "shipping containers" }
          ],
          correct: "C"
        },
        {
          id: "wto",
          sol: "WHII.12.e",
          stem: "According to the table, which organization sets rules for trade and settles disputes among its members?",
          choices: [
            { letter: "A", text: "the WTO" },
            { letter: "B", text: "the EU" },
            { letter: "C", text: "OPEC" },
            { letter: "D", text: "NAFTA" }
          ],
          correct: "A"
        },
        {
          id: "opec",
          sol: "WHII.10.f",
          stem: "Based on the table, which organization unites countries that depend on exporting one natural resource?",
          choices: [
            { letter: "A", text: "the European Union" },
            { letter: "B", text: "the World Trade Organization" },
            { letter: "C", text: "NAFTA" },
            { letter: "D", text: "OPEC" }
          ],
          correct: "D"
        },
        {
          id: "phone",
          sol: "WHII.10.f",
          stem: "The smartphone example in sentence 2 best illustrates —",
          choices: [
            { letter: "A", text: "the closed-country policy of a single nation" },
            { letter: "B", text: "the interdependence of the world economy" },
            { letter: "C", text: "a command economy run by one government" },
            { letter: "D", text: "the decline of trade after the Cold War" }
          ],
          correct: "B"
        },
        {
          id: "tradeoff",
          sol: "WHII.12.e",
          stem: "A company moves its factory to a country with lower wages. Which trade-off does sentence 3 suggest?",
          choices: [
            { letter: "A", text: "higher tariffs but more jobs at home" },
            { letter: "B", text: "lower costs but lost jobs at home" },
            { letter: "C", text: "higher prices but better products" },
            { letter: "D", text: "fewer imports but more exports" }
          ],
          correct: "B"
        },
        {
          id: "postsoviet",
          sol: "WHII.10.e",
          stem: "After the Soviet Union broke apart, many former Soviet republics and Eastern European nations —",
          choices: [
            { letter: "A", text: "moved toward market economies and trade with the West" },
            { letter: "B", text: "joined OPEC to control world oil prices" },
            { letter: "C", text: "returned to command economies run from Moscow" },
            { letter: "D", text: "closed their borders to all foreign trade" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "cold-hungary-prague",
      family: "COLD",
      title: "Budapest 1956, Prague 1968",
      kind: "Cold War & the Modern World · WHII.10",
      blurb: "Two reform movements in Eastern Europe and how they ended.",
      level: 3,
      passage: "<p><strong>Source A — Hungary, 1956.</strong> " + N(1) + "In October 1956, students and workers in Budapest demanded free elections and the withdrawal of Soviet troops. " + N(2) + "The reform communist Imre Nagy became prime minister and announced that Hungary would leave the <strong>Warsaw Pact</strong>. " + N(3) + "In November, Soviet tanks crushed the uprising; thousands were killed, Nagy was later executed, and about 200,000 Hungarians fled abroad.</p>" +
        "<p><strong>Source B — Czechoslovakia, 1968.</strong> " + N(4) + "In 1968 Czechoslovak leader Alexander Dubček promised \"socialism with a human face,\" easing censorship and allowing open debate. " + N(5) + "This <strong>Prague Spring</strong> ended in August, when Warsaw Pact troops led by the Soviet Union invaded and restored strict communist control. " + N(6) + "Twenty-one years later, the peaceful Velvet Revolution ended communist rule, and the playwright and former dissident Václav Havel became president.</p>",
      claims: [
        {
          id: "differ",
          sol: "WHII.10.b",
          stem: "Based on the two sources, one difference between the two reform movements is that —",
          choices: [
            { letter: "A", text: "only the Prague Spring was ended by Soviet-led troops" },
            { letter: "B", text: "only the Hungarian movement succeeded in ending communism" },
            { letter: "C", text: "only Czechoslovakia's leader was executed" },
            { letter: "D", text: "only Hungary's leader announced leaving the Warsaw Pact" }
          ],
          correct: "D"
        },
        {
          id: "warsaw",
          sol: "WHII.10.b",
          stem: "In sentence 2, the Warsaw Pact was —",
          choices: [
            { letter: "A", text: "a trade agreement among Western European nations" },
            { letter: "B", text: "the military alliance of the Soviet Union and its satellites" },
            { letter: "C", text: "the treaty that ended World War II in Europe" },
            { letter: "D", text: "a United Nations plan to rebuild Eastern Europe" }
          ],
          correct: "B"
        },
        {
          id: "pattern",
          sol: "WHII.10.a",
          stem: "Taken together, the events in both sources show that the Soviet Union —",
          choices: [
            { letter: "A", text: "allowed its satellites to choose their own governments" },
            { letter: "B", text: "relied on NATO to keep order in Eastern Europe" },
            { letter: "C", text: "would use force to keep control of Eastern Europe" },
            { letter: "D", text: "supported reform movements that eased censorship" }
          ],
          correct: "C"
        },
        {
          id: "us",
          sol: "WHII.10.b",
          stem: "Which statement best explains why the United States did not send troops to help the Hungarian rebels in 1956?",
          choices: [
            { letter: "A", text: "It feared a direct war with the Soviet Union." },
            { letter: "B", text: "It was at war with Cuba at the time." },
            { letter: "C", text: "Hungary was a member of NATO." },
            { letter: "D", text: "The rebels asked for help from China instead." }
          ],
          correct: "A"
        },
        {
          id: "havel",
          sol: "WHII.10.d",
          stem: "According to sentence 6, Václav Havel —",
          choices: [
            { letter: "A", text: "commanded the troops that invaded Prague in 1968" },
            { letter: "B", text: "became president after communism ended peacefully in 1989" },
            { letter: "C", text: "was executed after the Hungarian uprising" },
            { letter: "D", text: "founded the Warsaw Pact to defend Czechoslovakia" }
          ],
          correct: "B"
        },
        {
          id: "results",
          sol: "WHII.10.b",
          stem: "According to Source A, which TWO were results of the Hungarian Revolution of 1956? Select TWO.",
          choices: [
            { letter: "A", text: "Soviet tanks crushed the uprising." },
            { letter: "B", text: "Hungary left the Warsaw Pact for good." },
            { letter: "C", text: "About 200,000 Hungarians fled the country." },
            { letter: "D", text: "NATO troops occupied Budapest." }
          ],
          correct: ["A", "C"]
        }
      ]
    },

    /* ---------- long ---------- */
    {
      id: "cold-collapse",
      family: "COLD",
      title: "The wall comes down",
      kind: "Cold War & the Modern World · WHII.10",
      blurb: "Gorbachev, Reagan, Thatcher, John Paul II and Havel, 1978–1991.",
      level: 3,
      passage: "<p>" + N(1) + "By the 1980s the Soviet economy was stagnating, weighed down by inefficient central planning, heavy military spending and a costly war in Afghanistan. " + N(2) + "British prime minister Margaret Thatcher, a firm anti-communist and ally of Ronald Reagan, judged after meeting Mikhail Gorbachev in 1984 that the West could do business with him (summary).</p>" +
        "<ul><li><strong>1978</strong> Polish cardinal Karol Wojtyła becomes Pope John Paul II; his 1979 visit to Poland inspires millions.</li>" +
        "<li><strong>1980</strong> Polish workers form Solidarity, an independent labor union led by Lech Wałęsa.</li>" +
        "<li><strong>1985</strong> Gorbachev becomes Soviet leader and introduces <strong>glasnost</strong> (openness) and <strong>perestroika</strong> (restructuring).</li>" +
        "<li><strong>1987</strong> In West Berlin, President Reagan declares, \"Mr. Gorbachev, tear down this wall!\"</li>" +
        "<li><strong>1989</strong> Poland holds partly free elections; the Berlin Wall falls in November; Havel leads Czechoslovakia's Velvet Revolution.</li>" +
        "<li><strong>1990</strong> East and West Germany reunite.</li>" +
        "<li><strong>1991</strong> Hard-line communists fail in an August coup; in December the Soviet Union dissolves into 15 independent republics.</li></ul>" +
        "<p>" + N(3) + "The breakup left Russia the largest successor state, created new nations such as Ukraine and the Baltic states, and brought years of hardship as they shifted toward market economies.</p>",
      claims: [
        {
          id: "glasnost",
          sol: "WHII.10.d",
          stem: "On the timeline, the term glasnost refers to —",
          choices: [
            { letter: "A", text: "a plan to rebuild the Soviet army" },
            { letter: "B", text: "a policy of more open discussion" },
            { letter: "C", text: "a treaty that reunited Germany" },
            { letter: "D", text: "an independent Polish labor union" }
          ],
          correct: "B"
        },
        {
          id: "economy",
          sol: "WHII.10.e",
          stem: "Which economic cause of the Soviet collapse is described in sentence 1?",
          choices: [
            { letter: "A", text: "too much competition among private firms" },
            { letter: "B", text: "a sudden end to its trade with Cuba" },
            { letter: "C", text: "a stock market crash in Moscow" },
            { letter: "D", text: "a weak command economy strained by military costs" }
          ],
          correct: "D"
        },
        {
          id: "pope",
          sol: "WHII.10.d",
          stem: "Which statement best describes the role of Pope John Paul II in the end of the Cold War?",
          choices: [
            { letter: "A", text: "He inspired Poles to resist communist rule peacefully." },
            { letter: "B", text: "He ordered NATO troops into Poland in 1980." },
            { letter: "C", text: "He negotiated nuclear arms treaties for the United States." },
            { letter: "D", text: "He led the Velvet Revolution in Czechoslovakia." }
          ],
          correct: "A"
        },
        {
          id: "reagan",
          sol: "WHII.10.d",
          stem: "Reagan's words in Berlin in 1987 were mainly intended to —",
          choices: [
            { letter: "A", text: "announce that U.S. troops would leave Germany" },
            { letter: "B", text: "praise East Germany's communist government" },
            { letter: "C", text: "challenge the Soviet leader to end the division of Berlin" },
            { letter: "D", text: "warn Britain against trading with the Soviets" }
          ],
          correct: "C"
        },
        {
          id: "wall",
          sol: "WHII.10.b",
          stem: "The fall of the Berlin Wall in 1989 mattered so much because the wall had been —",
          choices: [
            { letter: "A", text: "built by NATO to keep Soviet troops out" },
            { letter: "B", text: "the border between Germany and Poland" },
            { letter: "C", text: "a defense line left from World War II" },
            { letter: "D", text: "a symbol of the Cold War division of Europe" }
          ],
          correct: "D"
        },
        {
          id: "consequences",
          sol: "WHII.10.e",
          stem: "Which TWO were consequences of the breakup of the Soviet Union? Select TWO.",
          choices: [
            { letter: "A", text: "Fifteen independent republics replaced a single country." },
            { letter: "B", text: "Gorbachev became the leader of a reunited Germany." },
            { letter: "C", text: "Former republics faced hardship shifting to market economies." },
            { letter: "D", text: "The Warsaw Pact expanded into Western Europe." }
          ],
          correct: ["A", "C"]
        }
      ]
    },
    {
      id: "cold-genocide",
      family: "COLD",
      title: "Never again?",
      kind: "Cold War & the Modern World · WHII.12",
      blurb: "Genocides and crimes against humanity, and the refugees they create.",
      level: 3,
      passage: "<p>" + N(1) + "A <strong>genocide</strong> is the deliberate attempt to destroy a national, ethnic, racial or religious group. " + N(2) + "<strong>Crimes against humanity</strong> are widespread attacks on civilians, such as mass murder, forced labor and persecution.</p>" +
        "<table><tr><th>Event</th><th>Years</th><th>Victims</th><th>Perpetrators</th></tr>" +
        "<tr><td>Armenian Genocide</td><td>1915–1923</td><td>up to 1.5 million Armenians</td><td>Ottoman government</td></tr>" +
        "<tr><td>Stalin's regime</td><td>1930s–1953</td><td>millions of Soviet citizens, including Ukrainians in a man-made famine</td><td>Soviet government</td></tr>" +
        "<tr><td>Cambodia</td><td>1975–1979</td><td>1.5 to 2 million Cambodians</td><td>Khmer Rouge under Pol Pot</td></tr>" +
        "<tr><td>Rwanda</td><td>1994</td><td>about 800,000 people, mostly Tutsi</td><td>Hutu extremist government and militias</td></tr>" +
        "<tr><td>Darfur, Sudan</td><td>2003–</td><td>hundreds of thousands killed; millions driven from home</td><td>Sudanese government and allied militias</td></tr></table>" +
        "<p>" + N(3) + "Other governments are accused of crimes against humanity, including Fidel Castro's Cuba, which imprisoned and executed political opponents, and China, which has held large numbers of Uyghurs, a mostly Muslim minority, in detention camps. " + N(4) + "Violence and persecution create <strong>refugees</strong>: the civil war that began in Syria in 2011 forced millions to flee to Turkey, Lebanon, Jordan and Europe, one of the largest refugee crises of the 21st century.</p>",
      claims: [
        {
          id: "define",
          sol: "WHII.12.a",
          stem: "In sentence 1, genocide is defined as —",
          choices: [
            { letter: "A", text: "any war fought between two nations" },
            { letter: "B", text: "the forced movement of workers to cities" },
            { letter: "C", text: "the deliberate attempt to destroy a whole group" },
            { letter: "D", text: "the overthrow of a government by its army" }
          ],
          correct: "C"
        },
        {
          id: "khmer",
          sol: "WHII.10.c",
          stem: "The Khmer Rouge took power in Cambodia in 1975, the same year that —",
          choices: [
            { letter: "A", text: "the Berlin Wall fell" },
            { letter: "B", text: "North Vietnam took over South Vietnam" },
            { letter: "C", text: "Mao proclaimed the People's Republic" },
            { letter: "D", text: "the Soviet Union dissolved" }
          ],
          correct: "B"
        },
        {
          id: "conclude",
          sol: "WHII.12.a",
          stem: "Which conclusion about the perpetrators is best supported by the table?",
          choices: [
            { letter: "A", text: "Every genocide shown was carried out by a foreign invader." },
            { letter: "B", text: "Genocide ended after the Universal Declaration of Human Rights." },
            { letter: "C", text: "Each genocide shown targeted a single religious group." },
            { letter: "D", text: "Governments carried out or backed the crimes shown." }
          ],
          correct: "D"
        },
        {
          id: "syria",
          sol: "WHII.12.b",
          stem: "According to sentence 4, what caused millions of Syrians to become refugees after 2011?",
          choices: [
            { letter: "A", text: "a civil war in their country" },
            { letter: "B", text: "a drought in Europe" },
            { letter: "C", text: "higher wages in Lebanon" },
            { letter: "D", text: "the breakup of the Soviet Union" }
          ],
          correct: "A"
        },
        {
          id: "push",
          sol: "WHII.12.b",
          stem: "Which TWO are push factors that force people to become refugees? Select TWO.",
          choices: [
            { letter: "A", text: "ethnic or religious persecution" },
            { letter: "B", text: "civil war in their home country" },
            { letter: "C", text: "higher wages offered in another country" },
            { letter: "D", text: "free elections in their home country" }
          ],
          correct: ["A", "B"]
        },
        {
          id: "rwanda",
          sol: "WHII.12.a",
          stem: "Which pairing of victims and perpetrators is correct, according to the table?",
          choices: [
            { letter: "A", text: "Rwanda — Hutu victims, Tutsi perpetrators" },
            { letter: "B", text: "Armenia — Turkish victims, Armenian perpetrators" },
            { letter: "C", text: "Cambodia — Thai victims, Vietnamese perpetrators" },
            { letter: "D", text: "Rwanda — Tutsi victims, Hutu extremist perpetrators" }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "cold-india-mandela",
      family: "COLD",
      title: "Two roads to freedom",
      kind: "Cold War & the Modern World · WHII.11",
      blurb: "India's democracy after 1947 and South Africa's fight against apartheid.",
      level: 3,
      passage: "<p><strong>Source A — India.</strong> " + N(1) + "When India became independent in 1947, Jawaharlal Nehru became its first prime minister. " + N(2) + "The partition of British India into India and Pakistan was followed by violence among Hindus, Muslims and Sikhs in which hundreds of thousands died and more than 10 million people were uprooted. " + N(3) + "Gandhi was assassinated in 1948 by a Hindu extremist who opposed his tolerance toward Muslims. " + N(4) + "India's constitution of 1950 created a parliamentary <strong>democracy</strong> in which all adults could vote; today India is the world's largest democracy.</p>" +
        "<p><strong>Source B — South Africa.</strong> " + N(5) + "Beginning in 1948, South Africa's white-minority government enforced <strong>apartheid</strong>, a system of strict racial segregation. " + N(6) + "Nelson Mandela and the African National Congress (ANC) led the resistance; after the government banned the ANC, Mandela was arrested and spent 27 years in prison. " + N(7) + "International <strong>sanctions</strong> and protests inside the country pressured President F. W. de Klerk to release Mandela in 1990 and repeal apartheid laws. " + N(8) + "In 1994, in the first elections open to citizens of all races, Mandela was elected president.</p>",
      claims: [
        {
          id: "india-gov",
          sol: "WHII.11.a",
          stem: "According to Source A, the government India created after independence was —",
          choices: [
            { letter: "A", text: "a monarchy ruled by a Mughal emperor" },
            { letter: "B", text: "a colony still governed from London" },
            { letter: "C", text: "a one-party communist dictatorship" },
            { letter: "D", text: "a democracy with votes for all adults" }
          ],
          correct: "D"
        },
        {
          id: "partition",
          sol: "WHII.11.a",
          stem: "Which was a result of the partition of British India, according to Source A?",
          choices: [
            { letter: "A", text: "mass migration and violence among religious groups" },
            { letter: "B", text: "the return of British troops to rule India" },
            { letter: "C", text: "a united government for India and Pakistan" },
            { letter: "D", text: "an immediate end to tension between India and Pakistan" }
          ],
          correct: "A"
        },
        {
          id: "apartheid",
          sol: "WHII.11.b",
          stem: "In sentence 5, the word apartheid means —",
          choices: [
            { letter: "A", text: "a peaceful march to the sea" },
            { letter: "B", text: "an election open to all races" },
            { letter: "C", text: "a system of strict racial segregation" },
            { letter: "D", text: "a ban on trade with other countries" }
          ],
          correct: "C"
        },
        {
          id: "sanctions",
          sol: "WHII.11.b",
          stem: "Based on sentence 7, international sanctions most likely pressured South Africa's government by —",
          choices: [
            { letter: "A", text: "sending foreign armies to free Mandela" },
            { letter: "B", text: "hurting its economy through limits on trade and investment" },
            { letter: "C", text: "removing South Africa from the African continent" },
            { letter: "D", text: "giving the government loans to build new prisons" }
          ],
          correct: "B"
        },
        {
          id: "compare",
          sol: "WHII.11.d",
          stem: "Which statement best compares the two sources?",
          choices: [
            { letter: "A", text: "Both countries won freedom only through a foreign invasion." },
            { letter: "B", text: "Both struggles ended with the United Nations taking control." },
            { letter: "C", text: "Both struggles led to governments in which all adults could vote." },
            { letter: "D", text: "Both countries kept colonial governors in power after 1950." }
          ],
          correct: "C"
        },
        {
          id: "mandela",
          sol: "WHII.11.b",
          stem: "Nelson Mandela's role in South Africa is best described as —",
          choices: [
            { letter: "A", text: "ANC leader and the first president chosen by voters of all races" },
            { letter: "B", text: "leader of the Mau Mau uprising against British rule in Kenya" },
            { letter: "C", text: "first prime minister of Ghana after independence from Britain" },
            { letter: "D", text: "the prime minister who began the apartheid system in 1948" }
          ],
          correct: "A"
        }
      ]
    }
  ];

  for (var i = 0; i < PACKS.length; i++) P.push(PACKS[i]);
})(typeof window !== "undefined" ? window : global);
