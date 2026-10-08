/* SOL Lab — World History II · World Wars & Depression (WHII.8–9). Original text only. */
(function (global) {
  var P = global.HEIST_PACKS;
  if (!P || !P.push) return;
  var N = function (i) { return '<span class="n">(' + i + ')</span> '; };   // numbered sentence

  var PACKS = [
    /* ---------- tiny ---------- */
    {
      id: "wars-sarajevo-spark",
      family: "WARS",
      title: "Shots in Sarajevo",
      kind: "World Wars · WHII.8",
      blurb: "One assassination and a web of alliances pull Europe into war.",
      level: 1,
      passage: "<p>" + N(1) + "On June 28, 1914, a Bosnian Serb nationalist shot <strong>Archduke Franz Ferdinand</strong>, heir to the throne of Austria-Hungary, in Sarajevo. " +
        N(2) + "Austria-Hungary declared war on Serbia. " +
        N(3) + "Because of <strong>alliances</strong>, Russia backed Serbia and Germany backed Austria-Hungary. " +
        N(4) + "Germany declared war on Russia and France, and Britain entered after German troops invaded Belgium.</p>",
      claims: [
        {
          id: "spark",
          sol: "WHII.8.a",
          stem: "Which event was the immediate cause, or spark, of World War I?",
          choices: [
            { letter: "A", text: "the assassination of Archduke Franz Ferdinand" },
            { letter: "B", text: "the sinking of the passenger ship Lusitania" },
            { letter: "C", text: "the signing of the Treaty of Versailles" },
            { letter: "D", text: "the Russian Revolution against the czar" }
          ],
          correct: "A"
        },
        {
          id: "chain",
          sol: "WHII.8.a",
          stem: "According to sentences 3 and 4, alliances affected the crisis by —",
          choices: [
            { letter: "A", text: "keeping the conflict between Austria-Hungary and Serbia" },
            { letter: "B", text: "making Belgium the leader of the Allied Powers" },
            { letter: "C", text: "turning a local conflict into a wider European war" },
            { letter: "D", text: "allowing Serbia to defeat Austria-Hungary quickly" }
          ],
          correct: "C"
        },
        {
          id: "alliances",
          sol: "WHII.8.a",
          stem: "In sentence 3, the word alliances most nearly means —",
          choices: [
            { letter: "A", text: "colonies ruled by a European power" },
            { letter: "B", text: "agreements among nations to support one another" },
            { letter: "C", text: "lines of trenches along a border" },
            { letter: "D", text: "payments made by the loser of a war" }
          ],
          correct: "B"
        },
        {
          id: "longterm",
          sol: "WHII.8.a",
          stem: "Which was an economic and political cause of World War I, not just its spark?",
          choices: [
            { letter: "A", text: "the worldwide depression of the 1930s" },
            { letter: "B", text: "the rise of Nazi power in Germany" },
            { letter: "C", text: "the attack on Pearl Harbor" },
            { letter: "D", text: "rivalry among the powers for colonies and markets" }
          ],
          correct: "D"
        },
        {
          id: "kaiser",
          sol: "WHII.8.a",
          stem: "Who ruled Germany as kaiser during World War I?",
          choices: [
            { letter: "A", text: "Otto von Bismarck" },
            { letter: "B", text: "Georges Clemenceau" },
            { letter: "C", text: "Wilhelm II" },
            { letter: "D", text: "Nicholas II" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "wars-trench-front",
      family: "WARS",
      title: "Life and death in the trenches",
      kind: "World Wars · WHII.8",
      blurb: "Machine guns, wire and gas lock the Western Front in place.",
      level: 1,
      passage: "<p>" + N(1) + "On the <strong>Western Front</strong> in Belgium and France, armies dug lines of trenches from the North Sea to Switzerland. " +
        N(2) + "Machine guns, barbed wire and heavy artillery made attacks across \"no man's land\" deadly. " +
        N(3) + "Both sides tried poison gas, tanks and airplanes to break the <strong>stalemate</strong>. " +
        N(4) + "On the Eastern Front, the lines were far longer, and armies advanced and retreated across greater distances.</p>",
      claims: [
        {
          id: "deadly",
          sol: "WHII.8.b",
          stem: "According to sentence 2, why did attacks across no man's land cost so many lives?",
          choices: [
            { letter: "A", text: "Defenders had machine guns, wire and artillery." },
            { letter: "B", text: "Attacking armies had no rifles or helmets." },
            { letter: "C", text: "The trenches were flooded by the North Sea." },
            { letter: "D", text: "Generals refused to use any new weapons." }
          ],
          correct: "A"
        },
        {
          id: "stalemate",
          sol: "WHII.8.b",
          stem: "In sentence 3, the word stalemate most nearly means —",
          choices: [
            { letter: "A", text: "a quick and complete victory" },
            { letter: "B", text: "a signed peace treaty" },
            { letter: "C", text: "a surprise attack at dawn" },
            { letter: "D", text: "a deadlock neither side can break" }
          ],
          correct: "D"
        },
        {
          id: "tank",
          sol: "WHII.8.c",
          stem: "Which new weapon did the British first use at the Battle of the Somme in 1916?",
          choices: [
            { letter: "A", text: "the submarine" },
            { letter: "B", text: "the tank" },
            { letter: "C", text: "the atomic bomb" },
            { letter: "D", text: "radar" }
          ],
          correct: "B"
        },
        {
          id: "east",
          sol: "WHII.8.b",
          stem: "According to sentence 4, how was the Eastern Front different from the Western Front?",
          choices: [
            { letter: "A", text: "It had no fighting at all after 1914." },
            { letter: "B", text: "It was fought only at sea and in the air." },
            { letter: "C", text: "It was longer, and armies moved more." },
            { letter: "D", text: "It ran from the North Sea to Switzerland." }
          ],
          correct: "C"
        },
        {
          id: "conclude",
          sol: "WHII.8.b",
          stem: "Which conclusion is best supported by the passage?",
          choices: [
            { letter: "A", text: "New weapons made defending easier than attacking." },
            { letter: "B", text: "Cavalry charges won most battles in the West." },
            { letter: "C", text: "Poison gas quickly ended the war in 1915." },
            { letter: "D", text: "Airplanes were used only to carry the mail." }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "wars-dunkirk-beaches",
      family: "WARS",
      title: "The miracle of Dunkirk",
      kind: "World Wars · WHII.9",
      blurb: "Little ships, a rescued army and a defiant speech.",
      level: 1,
      passage: "<p>" + N(1) + "In May 1940, German forces trapped British and French troops at <strong>Dunkirk</strong>, France. " +
        N(2) + "Navy ships and civilian \"little ships\" carried about 338,000 soldiers to Britain.</p>" +
        "<blockquote>" + N(3) + "We shall fight on the beaches, we shall fight on the landing grounds, we shall fight in the fields and in the streets, we shall fight in the hills; we shall never surrender.</blockquote>" +
        "<p class=\"src\">— Winston Churchill, June 4, 1940</p>",
      claims: [
        {
          id: "heroic",
          sol: "WHII.9.f",
          stem: "Why is the Dunkirk evacuation remembered as a heroic event?",
          choices: [
            { letter: "A", text: "British troops captured Berlin in a single day." },
            { letter: "B", text: "Civilian boats helped the navy rescue a trapped army." },
            { letter: "C", text: "French troops drove the Germans out of France." },
            { letter: "D", text: "The Soviet Union sent ships to save the Allies." }
          ],
          correct: "B"
        },
        {
          id: "purpose",
          sol: "WHII.9.a",
          stem: "The main purpose of Churchill's words was to —",
          choices: [
            { letter: "A", text: "announce that Britain would seek peace terms" },
            { letter: "B", text: "ask the United States to declare war at once" },
            { letter: "C", text: "warn Germany that Britain would invade France" },
            { letter: "D", text: "strengthen the British people's will to keep fighting" }
          ],
          correct: "D"
        },
        {
          id: "churchill",
          sol: "WHII.9.a",
          stem: "In 1940, Winston Churchill was —",
          choices: [
            { letter: "A", text: "prime minister of Great Britain" },
            { letter: "B", text: "president of the United States" },
            { letter: "C", text: "commander of the Free French" },
            { letter: "D", text: "king of Great Britain" }
          ],
          correct: "A"
        },
        {
          id: "result",
          sol: "WHII.9.f",
          stem: "Which conclusion about Dunkirk is best supported by sentence 2?",
          choices: [
            { letter: "A", text: "Britain lost nearly all of its soldiers in France." },
            { letter: "B", text: "Germany agreed to let the Allied troops leave." },
            { letter: "C", text: "Britain saved an army that could fight again." },
            { letter: "D", text: "The rescue ended the war in western Europe." }
          ],
          correct: "C"
        },
        {
          id: "blitz",
          sol: "WHII.9.a",
          stem: "The Allied armies were trapped at Dunkirk after Germany used blitzkrieg, which was —",
          choices: [
            { letter: "A", text: "a naval blockade of British ports" },
            { letter: "B", text: "trench warfare along a fixed line" },
            { letter: "C", text: "lightning war with tanks and planes" },
            { letter: "D", text: "a bombing campaign against London" }
          ],
          correct: "C"
        }
      ]
    },

    /* ---------- short ---------- */
    {
      id: "wars-versailles-terms",
      family: "WARS",
      title: "The Treaty of Versailles",
      kind: "World Wars · WHII.8",
      blurb: "Article 231 and the price Germany was made to pay.",
      level: 2,
      passage: "<p>" + N(1) + "The Treaty of Versailles, signed in June 1919, ended the war between the Allies and Germany.</p>" +
        "<blockquote>" + N(2) + "The Allied and Associated Governments affirm and Germany accepts the responsibility of Germany and her allies for causing all the loss and damage to which the Allied and Associated Governments and their nationals have been subjected as a consequence of the war imposed upon them by the aggression of Germany and her allies.</blockquote>" +
        "<p class=\"src\">— Treaty of Versailles, Article 231, 1919</p>" +
        "<p>" + N(3) + "Germany also had to pay <strong>reparations</strong>, cut its army to 100,000 men, give Alsace-Lorraine to France, give up all its colonies, and keep troops out of the Rhineland.</p>",
      claims: [
        {
          id: "guilt",
          sol: "WHII.8.d",
          stem: "Article 231 is often called the —",
          choices: [
            { letter: "A", text: "Fourteen Points" },
            { letter: "B", text: "mandate clause" },
            { letter: "C", text: "Monroe Doctrine" },
            { letter: "D", text: "war guilt clause" }
          ],
          correct: "D"
        },
        {
          id: "reparations",
          sol: "WHII.8.d",
          stem: "In sentence 3, the word reparations most nearly means —",
          choices: [
            { letter: "A", text: "payments for damage caused by the war" },
            { letter: "B", text: "repairs to German factories by the Allies" },
            { letter: "C", text: "soldiers sent home at the end of the war" },
            { letter: "D", text: "lands given to Germany by the Allies" }
          ],
          correct: "A"
        },
        {
          id: "reaction",
          sol: "WHII.8.d",
          stem: "Which German reaction to these terms was most likely?",
          choices: [
            { letter: "A", text: "gratitude that the Allies had been generous" },
            { letter: "B", text: "resentment that later helped extreme parties gain support" },
            { letter: "C", text: "a demand that the Kaiser be restored at once" },
            { letter: "D", text: "an agreement to join France in a new alliance" }
          ],
          correct: "B"
        },
        {
          id: "clemenceau",
          sol: "WHII.8.a",
          stem: "Which leader pushed hardest at the peace conference for terms that would keep Germany weak?",
          choices: [
            { letter: "A", text: "Woodrow Wilson of the United States" },
            { letter: "B", text: "Vladimir Lenin of Soviet Russia" },
            { letter: "C", text: "Georges Clemenceau of France" },
            { letter: "D", text: "Wilhelm II of Germany" }
          ],
          correct: "C"
        },
        {
          id: "military",
          sol: "WHII.8.d",
          stem: "Which term in sentence 3 most directly limited Germany's military power?",
          choices: [
            { letter: "A", text: "giving Alsace-Lorraine to France" },
            { letter: "B", text: "giving up its overseas colonies" },
            { letter: "C", text: "paying reparations to the Allies" },
            { letter: "D", text: "cutting its army to 100,000 men" }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "wars-russia-timeline",
      family: "WARS",
      title: "Russia in revolution",
      kind: "World Wars · WHII.8",
      blurb: "From Bloody Sunday to the Soviet Union in seventeen years.",
      level: 1,
      passage: "<ul><li><strong>1905</strong> Bloody Sunday: troops fire on peaceful marchers in St. Petersburg.</li>" +
        "<li><strong>1914–1916</strong> Russia suffers huge losses in World War I; food and fuel run short.</li>" +
        "<li><strong>March 1917</strong> Czar Nicholas II gives up the throne; a Provisional Government takes over.</li>" +
        "<li><strong>November 1917</strong> Lenin's <strong>Bolsheviks</strong> seize power, promising \"Peace, Land, and Bread.\"</li>" +
        "<li><strong>March 1918</strong> The Treaty of Brest-Litovsk takes Russia out of the war.</li>" +
        "<li><strong>1918–1920</strong> Civil war between the Communist Reds and the anti-Communist Whites.</li>" +
        "<li><strong>1922</strong> The Union of Soviet Socialist Republics (USSR) is formed.</li></ul>",
      claims: [
        {
          id: "first",
          sol: "WHII.8.e",
          stem: "Which event happened FIRST?",
          choices: [
            { letter: "A", text: "The USSR is formed." },
            { letter: "B", text: "The Bolsheviks seize power." },
            { letter: "C", text: "Russia signs Brest-Litovsk." },
            { letter: "D", text: "Nicholas II gives up the throne." }
          ],
          correct: "D"
        },
        {
          id: "cause",
          sol: "WHII.8.e",
          stem: "Based on the timeline, which was a cause of the Russian Revolution of 1917?",
          choices: [
            { letter: "A", text: "war losses and shortages of food and fuel" },
            { letter: "B", text: "the formation of the Soviet Union" },
            { letter: "C", text: "the civil war between Reds and Whites" },
            { letter: "D", text: "the Treaty of Brest-Litovsk" }
          ],
          correct: "A"
        },
        {
          id: "slogan",
          sol: "WHII.8.e",
          stem: "The slogan \"Peace, Land, and Bread\" appealed most to —",
          choices: [
            { letter: "A", text: "nobles who wanted the czar to return" },
            { letter: "B", text: "war-weary soldiers, peasants and hungry workers" },
            { letter: "C", text: "British and French leaders fighting Germany" },
            { letter: "D", text: "factory owners who wanted lower taxes" }
          ],
          correct: "B"
        },
        {
          id: "effect",
          sol: "WHII.8.e",
          stem: "Which was a result of the Treaty of Brest-Litovsk for World War I?",
          choices: [
            { letter: "A", text: "The United States left the war in Europe." },
            { letter: "B", text: "Russia gained land from Germany and Austria." },
            { letter: "C", text: "Germany could move more troops to the Western Front." },
            { letter: "D", text: "Britain and France signed a separate peace." }
          ],
          correct: "C"
        },
        {
          id: "bolshevik",
          sol: "WHII.8.e",
          stem: "The Bolsheviks who won the civil war were —",
          choices: [
            { letter: "A", text: "Communists led by Lenin" },
            { letter: "B", text: "supporters of the czar" },
            { letter: "C", text: "Fascists led by Mussolini" },
            { letter: "D", text: "members of the Provisional Government" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "wars-pacific-war",
      family: "WARS",
      title: "From Pearl Harbor to Tokyo Bay",
      kind: "World Wars · WHII.9",
      blurb: "A date of infamy and the road across the Pacific.",
      level: 2,
      passage: "<blockquote>" + N(1) + "Yesterday, December 7th, 1941—a date which will live in infamy—the United States of America was suddenly and deliberately attacked by naval and air forces of the Empire of Japan.</blockquote>" +
        "<p class=\"src\">— President Franklin D. Roosevelt, address to Congress, December 8, 1941</p>" +
        "<ul><li><strong>June 1942</strong> Midway: the U.S. Navy under Admiral Chester Nimitz sinks four Japanese aircraft carriers.</li>" +
        "<li><strong>April–June 1945</strong> Okinawa: a long, costly battle on an island near Japan's home islands.</li>" +
        "<li><strong>August 1945</strong> Atomic bombs destroy Hiroshima and Nagasaki.</li>" +
        "<li><strong>September 2, 1945</strong> Japan signs the surrender aboard the USS Missouri; General Douglas MacArthur accepts it for the Allies.</li></ul>",
      claims: [
        {
          id: "purpose",
          sol: "WHII.9.a",
          stem: "Roosevelt gave this address mainly to —",
          choices: [
            { letter: "A", text: "announce that Japan had surrendered" },
            { letter: "B", text: "explain the plan for the Normandy landings" },
            { letter: "C", text: "ask Congress to declare war on Japan" },
            { letter: "D", text: "praise Japan's navy for its skill" }
          ],
          correct: "C"
        },
        {
          id: "midway",
          sol: "WHII.9.b",
          stem: "Why is the Battle of Midway considered a turning point in the Pacific?",
          choices: [
            { letter: "A", text: "Japan lost carriers it could not replace, and the U.S. went on the offensive." },
            { letter: "B", text: "Japan captured Hawaii and forced the U.S. Navy back to California." },
            { letter: "C", text: "The Soviet Union entered the Pacific war and invaded Japan's home islands." },
            { letter: "D", text: "The United States used the first atomic bomb against a Japanese fleet." }
          ],
          correct: "A"
        },
        {
          id: "okinawa",
          sol: "WHII.9.b",
          stem: "Which battle on the timeline was fought closest to Japan's home islands?",
          choices: [
            { letter: "A", text: "Pearl Harbor" },
            { letter: "B", text: "Midway" },
            { letter: "C", text: "Normandy" },
            { letter: "D", text: "Okinawa" }
          ],
          correct: "D"
        },
        {
          id: "bomb",
          sol: "WHII.9.c",
          stem: "The weapons used in August 1945 were developed by the secret Manhattan Project. They were —",
          choices: [
            { letter: "A", text: "radar-guided torpedoes" },
            { letter: "B", text: "atomic bombs" },
            { letter: "C", text: "rocket-powered jets" },
            { letter: "D", text: "poison gas shells" }
          ],
          correct: "B"
        },
        {
          id: "truman",
          sol: "WHII.9.a",
          stem: "Which U.S. president decided to use the atomic bomb against Japan?",
          choices: [
            { letter: "A", text: "Franklin D. Roosevelt" },
            { letter: "B", text: "Harry Truman" },
            { letter: "C", text: "Woodrow Wilson" },
            { letter: "D", text: "Dwight Eisenhower" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "wars-technology-table",
      family: "WARS",
      title: "Science goes to war",
      kind: "World Wars · WHII.9",
      blurb: "Radar, ENIAC, penicillin, carriers and the atomic bomb.",
      level: 2,
      passage: "<p>" + N(1) + "World War II pushed governments to pour money into science and engineering.</p>" +
        "<table><tr><th>Technology</th><th>Use in the war</th></tr>" +
        "<tr><td>Cavity magnetron and radar</td><td>small, powerful radar sets that found planes and submarines</td></tr>" +
        "<tr><td>ENIAC</td><td>early electronic computer built for the U.S. Army to calculate artillery tables</td></tr>" +
        "<tr><td>Penicillin</td><td><strong>antibiotic</strong> mass-produced to treat infected wounds</td></tr>" +
        "<tr><td>Aircraft carrier</td><td>floating airfield that decided naval battles in the Pacific</td></tr>" +
        "<tr><td>Atomic bomb</td><td>weapon of the Manhattan Project, used on Hiroshima and Nagasaki</td></tr></table>",
      claims: [
        {
          id: "radar",
          sol: "WHII.9.c",
          stem: "Which technology in the table helped Allied forces detect enemy aircraft and submarines?",
          choices: [
            { letter: "A", text: "penicillin" },
            { letter: "B", text: "ENIAC" },
            { letter: "C", text: "radar" },
            { letter: "D", text: "the atomic bomb" }
          ],
          correct: "C"
        },
        {
          id: "eniac",
          sol: "WHII.9.c",
          stem: "According to the table, ENIAC was —",
          choices: [
            { letter: "A", text: "an early electronic computer" },
            { letter: "B", text: "a new kind of aircraft carrier" },
            { letter: "C", text: "a code name for the D-Day landings" },
            { letter: "D", text: "a medicine for infected wounds" }
          ],
          correct: "A"
        },
        {
          id: "antibiotic",
          sol: "WHII.9.c",
          stem: "As used in the table, an antibiotic is a medicine that —",
          choices: [
            { letter: "A", text: "protects soldiers from poison gas" },
            { letter: "B", text: "helps pilots stay awake on missions" },
            { letter: "C", text: "replaces blood lost in battle" },
            { letter: "D", text: "kills or stops the growth of bacteria" }
          ],
          correct: "D"
        },
        {
          id: "carrier",
          sol: "WHII.9.b",
          stem: "Battles such as Midway were decided mainly by planes flying from —",
          choices: [
            { letter: "A", text: "bases in Britain" },
            { letter: "B", text: "aircraft carriers" },
            { letter: "C", text: "trenches on the coast" },
            { letter: "D", text: "submarines underwater" }
          ],
          correct: "B"
        },
        {
          id: "peacetime",
          sol: "WHII.9.c",
          stem: "Which conclusion about wartime technology is best supported by the table?",
          choices: [
            { letter: "A", text: "All of the technologies were used only as weapons." },
            { letter: "B", text: "Several wartime advances later had peacetime uses." },
            { letter: "C", text: "The Axis powers invented most of these technologies." },
            { letter: "D", text: "Technology had little effect on the war's outcome." }
          ],
          correct: "B"
        }
      ]
    },

    /* ---------- medium ---------- */
    {
      id: "wars-wwi-battles",
      family: "WARS",
      title: "Five battles of the Great War",
      kind: "World Wars · WHII.8",
      blurb: "Marne, Gallipoli, Verdun, the Somme and the Meuse-Argonne.",
      level: 2,
      passage: "<p>" + N(1) + "After 1914 the Western Front became a war of <strong>attrition</strong>, in which each side tried to wear the other down. " +
        N(2) + "Millions of soldiers died for small gains of ground. " +
        N(3) + "Machine guns and heavy artillery made it very hard for attackers to break through enemy lines.</p>" +
        "<table><tr><th>Battle</th><th>Year</th><th>What happened</th></tr>" +
        "<tr><td>Marne</td><td>1914</td><td>French and British stop the German drive on Paris; trench warfare begins</td></tr>" +
        "<tr><td>Gallipoli</td><td>1915</td><td>Allied landing to seize the Ottoman straits fails after months of fighting</td></tr>" +
        "<tr><td>Verdun</td><td>1916</td><td>ten-month German assault on a French fortress city; France holds</td></tr>" +
        "<tr><td>Somme</td><td>1916</td><td>British and French offensive; about 57,000 British casualties on the first day</td></tr>" +
        "<tr><td>Meuse-Argonne</td><td>1918</td><td>largest American offensive, led by General John J. Pershing</td></tr></table>",
      claims: [
        {
          id: "marne",
          sol: "WHII.8.c",
          stem: "Which battle ended Germany's hope of a quick victory in the West?",
          choices: [
            { letter: "A", text: "Gallipoli" },
            { letter: "B", text: "the Marne" },
            { letter: "C", text: "the Somme" },
            { letter: "D", text: "the Meuse-Argonne" }
          ],
          correct: "B"
        },
        {
          id: "gallipoli",
          sol: "WHII.8.c",
          stem: "The Allied goal in the Gallipoli campaign was to —",
          choices: [
            { letter: "A", text: "defend Paris from a German attack" },
            { letter: "B", text: "free Belgium from German occupation" },
            { letter: "C", text: "end the Russian Revolution by force" },
            { letter: "D", text: "knock the Ottoman Empire out of the war" }
          ],
          correct: "D"
        },
        {
          id: "attrition-evidence",
          sol: "WHII.8.c",
          stem: "Which conclusion about Verdun and the Somme is best supported by the passage?",
          choices: [
            { letter: "A", text: "Both cost huge numbers of lives for little ground." },
            { letter: "B", text: "Both were quick victories for the attacking side." },
            { letter: "C", text: "Both were fought by American troops alone." },
            { letter: "D", text: "Both took place on the Eastern Front." }
          ],
          correct: "A"
        },
        {
          id: "pershing",
          sol: "WHII.8.a",
          stem: "General John J. Pershing was —",
          choices: [
            { letter: "A", text: "the French premier at the peace talks" },
            { letter: "B", text: "the British commander at Gallipoli" },
            { letter: "C", text: "commander of the American Expeditionary Forces" },
            { letter: "D", text: "the German general who planned the attack on Verdun" }
          ],
          correct: "C"
        },
        {
          id: "usentry",
          sol: "WHII.8.a",
          stem: "Which actions most directly brought the United States into the war in 1917?",
          choices: [
            { letter: "A", text: "the Marne and the start of trench warfare" },
            { letter: "B", text: "German submarine attacks and the Zimmermann Telegram" },
            { letter: "C", text: "the Russian Revolution and the rise of Lenin" },
            { letter: "D", text: "the failure of the Allied landing at Gallipoli" }
          ],
          correct: "B"
        },
        {
          id: "attrition",
          sol: "WHII.8.b",
          stem: "In sentence 1, a war of attrition is one in which —",
          choices: [
            { letter: "A", text: "fast-moving armies capture capitals" },
            { letter: "B", text: "most fighting happens at sea" },
            { letter: "C", text: "neutral nations decide the outcome" },
            { letter: "D", text: "each side tries to wear the other down" }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "wars-depression-spiral",
      family: "WARS",
      title: "The world economy collapses",
      kind: "World Wars · WHII.8",
      blurb: "A crash, called-in loans, rising tariffs and desperate voters.",
      level: 3,
      passage: "<p>" + N(1) + "A line graph shows the value of world trade each year from 1929 to 1933. " +
        N(2) + "The line falls every year and ends at about one-third of its 1929 level.</p>" +
        "<p>" + N(3) + "The crisis began with the crash of the U.S. stock market in October 1929. " +
        N(4) + "American banks called in loans they had made to Europe, especially to Germany, which had used them to help pay reparations. " +
        N(5) + "Countries raised <strong>tariffs</strong> to protect their own industries, and their trading partners answered with tariffs of their own. " +
        N(6) + "Banks failed, factories closed, and by 1932 about six million Germans were out of work. " +
        N(7) + "Desperate voters turned to parties that promised strong leadership, and in 1932 the Nazis became the largest party in Germany's parliament.</p>",
      claims: [
        {
          id: "graph",
          sol: "WHII.8.f",
          stem: "What does the graph described in sentences 1 and 2 show?",
          choices: [
            { letter: "A", text: "World trade grew slowly but steadily." },
            { letter: "B", text: "World trade fell by about two-thirds." },
            { letter: "C", text: "World trade rose after the 1929 crash." },
            { letter: "D", text: "World trade stayed about the same." }
          ],
          correct: "B"
        },
        {
          id: "chain",
          sol: "WHII.8.f",
          stem: "Which chain of events is best supported by sentences 3 and 4?",
          choices: [
            { letter: "A", text: "German reparations → U.S. stock crash → loans to Europe" },
            { letter: "B", text: "Nazi victory → U.S. stock crash → bank failures in Europe" },
            { letter: "C", text: "U.S. stock crash → loans called in → German economy hurt" },
            { letter: "D", text: "loans called in → U.S. stock crash → higher world trade" }
          ],
          correct: "C"
        },
        {
          id: "tariffs",
          sol: "WHII.8.f",
          stem: "As used in sentence 5, tariffs are —",
          choices: [
            { letter: "A", text: "taxes on imported goods" },
            { letter: "B", text: "loans from foreign banks" },
            { letter: "C", text: "payments for war damage" },
            { letter: "D", text: "shares of company stock" }
          ],
          correct: "A"
        },
        {
          id: "tradeoff",
          sol: "WHII.8.f",
          stem: "Which statement best explains why raising tariffs made the depression worse?",
          choices: [
            { letter: "A", text: "Tariffs forced banks to lend more money to Germany." },
            { letter: "B", text: "Tariffs lowered the price of imported goods for everyone." },
            { letter: "C", text: "Tariffs ended the reparations Germany owed to the Allies." },
            { letter: "D", text: "Other nations struck back, so every country sold less abroad." }
          ],
          correct: "D"
        },
        {
          id: "nazis",
          sol: "WHII.8.g",
          stem: "Based on sentences 6 and 7, how did the depression help the rise of totalitarianism?",
          choices: [
            { letter: "A", text: "Mass unemployment led voters to back extreme parties." },
            { letter: "B", text: "Rising wages made voters trust the existing leaders." },
            { letter: "C", text: "The League of Nations put the Nazis in power." },
            { letter: "D", text: "The Allies chose Hitler to collect reparations." }
          ],
          correct: "A"
        },
        {
          id: "versailles-link",
          sol: "WHII.8.d",
          stem: "Sentence 4 shows a link between the Great Depression and which earlier event?",
          choices: [
            { letter: "A", text: "the Russian Revolution, which ended private banks" },
            { letter: "B", text: "the Treaty of Versailles, which required reparations" },
            { letter: "C", text: "the Munich Agreement, which gave away the Sudetenland" },
            { letter: "D", text: "the Battle of the Marne, which began trench warfare" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "wars-totalitarian-states",
      family: "WARS",
      title: "Dictators of the 1920s and 1930s",
      kind: "World Wars · WHII.8",
      blurb: "Mussolini, Stalin, Hitler and Japan's military leaders compared.",
      level: 2,
      passage: "<table><tr><th>Country</th><th>Leaders</th><th>Ideology</th><th>Rise to power</th></tr>" +
        "<tr><td>Italy</td><td>Benito Mussolini</td><td>Fascism</td><td>March on Rome, 1922</td></tr>" +
        "<tr><td>Soviet Union</td><td>Joseph Stalin</td><td>Communism</td><td>won the struggle after Lenin died in 1924</td></tr>" +
        "<tr><td>Germany</td><td>Adolf Hitler</td><td>Nazism</td><td>named chancellor, 1933</td></tr>" +
        "<tr><td>Japan</td><td>military leaders under Emperor Hirohito</td><td>militarism and nationalism</td><td>army gained control during the 1930s</td></tr></table>" +
        "<p>" + N(1) + "A <strong>totalitarian</strong> state seeks to control every part of public and private life. " +
        N(2) + "The Fascist, Nazi and Soviet governments allowed only one party, used secret police and censorship, and filled newspapers, films and schools with propaganda. " +
        N(3) + "Stalin's Five-Year Plans forced rapid industrial growth, and his seizure of farms for collectives caused a famine that killed millions, especially in Ukraine. " +
        N(4) + "Mussolini and Hitler, by contrast, let owners keep their businesses but directed the economy toward national power and rearmament.</p>",
      claims: [
        {
          id: "define",
          sol: "WHII.8.g",
          stem: "In sentence 1, a totalitarian state is one that —",
          choices: [
            { letter: "A", text: "shares power among several elected parties" },
            { letter: "B", text: "is ruled by a monarch with limited powers" },
            { letter: "C", text: "tries to control nearly all of public and private life" },
            { letter: "D", text: "lets each province write its own laws" }
          ],
          correct: "C"
        },
        {
          id: "shared",
          sol: "WHII.8.g",
          stem: "According to sentence 2, which feature did the Fascist, Nazi and Soviet governments share?",
          choices: [
            { letter: "A", text: "free elections between rival parties" },
            { letter: "B", text: "one-party rule, secret police and propaganda" },
            { letter: "C", text: "a free press that criticized the leader" },
            { letter: "D", text: "an economy run without any government role" }
          ],
          correct: "B"
        },
        {
          id: "first",
          sol: "WHII.8.g",
          stem: "According to the table, which leader came to power FIRST?",
          choices: [
            { letter: "A", text: "Benito Mussolini" },
            { letter: "B", text: "Adolf Hitler" },
            { letter: "C", text: "Joseph Stalin" },
            { letter: "D", text: "Japan's military leaders" }
          ],
          correct: "A"
        },
        {
          id: "differ",
          sol: "WHII.8.g",
          stem: "Which statement best contrasts fascism with Soviet communism?",
          choices: [
            { letter: "A", text: "Fascism ended private property; communism protected it." },
            { letter: "B", text: "Fascism allowed free elections; communism did not." },
            { letter: "C", text: "Fascism was internationalist; communism was nationalist." },
            { letter: "D", text: "Fascism kept private property; communism abolished it." }
          ],
          correct: "D"
        },
        {
          id: "stalin",
          sol: "WHII.8.e",
          stem: "Stalin's rule was a long-term consequence of which event?",
          choices: [
            { letter: "A", text: "the March on Rome" },
            { letter: "B", text: "the Treaty of Versailles" },
            { letter: "C", text: "the Bolshevik Revolution of 1917" },
            { letter: "D", text: "the stock market crash of 1929" }
          ],
          correct: "C"
        },
        {
          id: "hirohito",
          sol: "WHII.9.a",
          stem: "During World War II, Michinomiya Hirohito was —",
          choices: [
            { letter: "A", text: "the emperor of Japan" },
            { letter: "B", text: "the dictator of Italy" },
            { letter: "C", text: "the admiral who won Midway" },
            { letter: "D", text: "the leader of the Soviet army" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "wars-holocaust-steps",
      family: "WARS",
      title: "The Holocaust, step by step",
      kind: "World Wars · WHII.9",
      blurb: "From discriminatory laws to ghettos, killing centers, resistance and rescue.",
      level: 2,
      passage: "<p>" + N(1) + "The Holocaust was the systematic, state-sponsored persecution and murder of about six million Jews by Nazi Germany and its collaborators. " +
        N(2) + "Nazi ideology was built on <strong>antisemitism</strong>, hatred of and prejudice against Jews; Roma, people with disabilities and other groups were also targeted.</p>" +
        "<ul><li><strong>1933</strong> Nazis take power; Jews are pushed out of government jobs.</li>" +
        "<li><strong>1935</strong> The Nuremberg Laws strip German Jews of citizenship.</li>" +
        "<li><strong>November 1938</strong> Kristallnacht: synagogues burned, Jewish shops wrecked, about 30,000 Jewish men sent to camps.</li>" +
        "<li><strong>1939–1941</strong> Jews in occupied Poland forced into ghettos such as Warsaw.</li>" +
        "<li><strong>1941</strong> Mobile killing squads murder Jews in the occupied Soviet Union.</li>" +
        "<li><strong>1942</strong> Death camps such as Auschwitz-Birkenau and Treblinka operate.</li>" +
        "<li><strong>1943</strong> Warsaw Ghetto Uprising; Danes ferry about 7,000 Jews to Sweden.</li>" +
        "<li><strong>1944–1945</strong> Allied soldiers liberate the camps.</li></ul>",
      claims: [
        {
          id: "state",
          sol: "WHII.8.g",
          stem: "The 1933 and 1935 entries show that, once in power, the Nazi dictatorship —",
          choices: [
            { letter: "A", text: "protected the rights of Germany's minorities" },
            { letter: "B", text: "used laws and government power to persecute Jews" },
            { letter: "C", text: "left decisions about citizenship to the states" },
            { letter: "D", text: "allowed Jewish voters to elect new leaders" }
          ],
          correct: "B"
        },
        {
          id: "kristall",
          sol: "WHII.9.d",
          stem: "Kristallnacht, the \"Night of Broken Glass,\" was —",
          choices: [
            { letter: "A", text: "the first Allied bombing raid on Berlin" },
            { letter: "B", text: "a Jewish revolt inside the Warsaw ghetto" },
            { letter: "C", text: "a violent attack on Jewish synagogues, shops and homes" },
            { letter: "D", text: "the night the Allies liberated Auschwitz" }
          ],
          correct: "C"
        },
        {
          id: "resist",
          sol: "WHII.9.d",
          stem: "Which entry on the timeline is an example of Jewish armed resistance?",
          choices: [
            { letter: "A", text: "the Warsaw Ghetto Uprising" },
            { letter: "B", text: "the Nuremberg Laws" },
            { letter: "C", text: "the Danish boat rescue" },
            { letter: "D", text: "the liberation of the camps" }
          ],
          correct: "A"
        },
        {
          id: "rescue",
          sol: "WHII.9.d",
          stem: "Which entry is the best example of rescue by non-Jews?",
          choices: [
            { letter: "A", text: "Jews are pushed out of government jobs." },
            { letter: "B", text: "Death camps operate in occupied Poland." },
            { letter: "C", text: "Mobile killing squads operate in the east." },
            { letter: "D", text: "Danes ferry about 7,000 Jews to Sweden." }
          ],
          correct: "D"
        },
        {
          id: "antisemitism",
          sol: "WHII.9.d",
          stem: "In sentence 2, antisemitism means —",
          choices: [
            { letter: "A", text: "loyalty to a single political party" },
            { letter: "B", text: "hatred of and prejudice against Jews" },
            { letter: "C", text: "a plan to rebuild Europe after the war" },
            { letter: "D", text: "support for a homeland in Palestine" }
          ],
          correct: "B"
        },
        {
          id: "trials",
          sol: "WHII.9.e",
          stem: "After the war, surviving Nazi leaders were tried for crimes against humanity at —",
          choices: [
            { letter: "A", text: "Versailles" },
            { letter: "B", text: "Munich" },
            { letter: "C", text: "Yalta" },
            { letter: "D", text: "Nuremberg" }
          ],
          correct: "D"
        }
      ]
    },

    /* ---------- long ---------- */
    {
      id: "wars-league-mandates",
      family: "WARS",
      title: "Wilson's League and the mandate system",
      kind: "World Wars · WHII.8",
      blurb: "A peace plan, a covenant, and lands handed to new rulers.",
      level: 3,
      passage: "<blockquote>" + N(1) + "A general association of nations must be formed under specific covenants for the purpose of affording mutual guarantees of political independence and territorial integrity to great and small states alike.</blockquote>" +
        "<p class=\"src\">Source A — Woodrow Wilson, the Fourteen Points, Point 14, 1918</p>" +
        "<blockquote>" + N(2) + "The Members of the League undertake to respect and preserve as against external aggression the territorial integrity and existing political independence of all Members of the League.</blockquote>" +
        "<p class=\"src\">Source B — Covenant of the League of Nations, Article 10, 1919</p>" +
        "<p>" + N(3) + "This promise of <strong>collective security</strong> proved hard to keep. " +
        N(4) + "The U.S. Senate refused to approve the treaty, so the United States never joined, and the League had no army of its own. " +
        N(5) + "When Japan seized Manchuria in 1931 and Italy invaded Ethiopia in 1935, the League protested and placed weak sanctions on Italy, but it stopped neither attack. " +
        N(6) + "The League also oversaw the <strong>mandate system</strong>: former German colonies and Ottoman lands were placed under Allied control until judged ready for independence. " +
        N(7) + "Britain took Iraq, Palestine and Transjordan, and France took Syria and Lebanon, angering many Arabs who had hoped for independence.</p>",
      claims: [
        {
          id: "wilson",
          sol: "WHII.8.a",
          stem: "Source A shows that one of Wilson's main goals for the peace was —",
          choices: [
            { letter: "A", text: "a harsh punishment of Germany" },
            { letter: "B", text: "new colonies for the United States" },
            { letter: "C", text: "an organization of nations to keep the peace" },
            { letter: "D", text: "a return to the old alliance system" }
          ],
          correct: "C"
        },
        {
          id: "collective",
          sol: "WHII.8.d",
          stem: "Based on Source B, collective security in sentence 3 means that —",
          choices: [
            { letter: "A", text: "members agree to protect one another from attack" },
            { letter: "B", text: "each nation must defend itself without allies" },
            { letter: "C", text: "only the largest nations may join the League" },
            { letter: "D", text: "members share one army under a single general" }
          ],
          correct: "A"
        },
        {
          id: "weak",
          sol: "WHII.8.d",
          stem: "According to sentence 4, which factors weakened the League of Nations?",
          choices: [
            { letter: "A", text: "Germany controlled the League's army." },
            { letter: "B", text: "The U.S. stayed out, and the League had no army." },
            { letter: "C", text: "Britain and France refused to join the League." },
            { letter: "D", text: "The League had too many soldiers to pay." }
          ],
          correct: "B"
        },
        {
          id: "mandates",
          sol: "WHII.8.d",
          stem: "Under the mandate system, Syria and Lebanon were placed under the control of —",
          choices: [
            { letter: "A", text: "Great Britain" },
            { letter: "B", text: "the United States" },
            { letter: "C", text: "Italy" },
            { letter: "D", text: "France" }
          ],
          correct: "D"
        },
        {
          id: "aggression",
          sol: "WHII.9.a",
          stem: "The League's failure to stop Japan in Manchuria and Italy in Ethiopia most directly contributed to World War II by —",
          choices: [
            { letter: "A", text: "forcing the United States to join the League" },
            { letter: "B", text: "ending the Great Depression in Europe" },
            { letter: "C", text: "turning the mandates into independent states" },
            { letter: "D", text: "showing aggressors they would face few consequences" }
          ],
          correct: "D"
        },
        {
          id: "compare",
          sol: "WHII.8.d",
          stem: "Select TWO statements supported by the sources and the passage.",
          choices: [
            { letter: "A", text: "Article 10 put Point 14's idea into the League's founding rules." },
            { letter: "B", text: "The United States became the League's most powerful member." },
            { letter: "C", text: "Arab hopes for independence were not met by the mandates." },
            { letter: "D", text: "The League successfully forced Japan out of Manchuria." }
          ],
          correct: ["A", "C"]
        }
      ]
    },
    {
      id: "wars-europe-crusade",
      family: "WARS",
      title: "From Munich to Normandy",
      kind: "World Wars · WHII.9",
      blurb: "Appeasement fails, the Eastern Front turns and the Allies land in France.",
      level: 3,
      passage: "<ul><li><strong>Sept. 1938</strong> Munich Agreement: in a policy of <strong>appeasement</strong>, Britain and France let Germany take the Sudetenland.</li>" +
        "<li><strong>Aug. 1939</strong> Germany and the Soviet Union sign a nonaggression pact.</li>" +
        "<li><strong>Sept. 1939</strong> Germany invades Poland; Britain and France declare war.</li>" +
        "<li><strong>June 1940</strong> France falls to Germany.</li>" +
        "<li><strong>1941–1944</strong> Siege of Leningrad: for nearly 900 days, hundreds of thousands of civilians die, many of starvation.</li>" +
        "<li><strong>1942–1943</strong> Stalingrad: an entire German army is surrounded and surrenders.</li>" +
        "<li><strong>June 6, 1944</strong> D-Day: Allied forces under General Dwight D. Eisenhower land in Normandy.</li></ul>" +
        "<blockquote>" + N(1) + "You are about to embark upon the Great Crusade, toward which we have striven these many months. " +
        N(2) + "The eyes of the world are upon you.</blockquote>" +
        "<p class=\"src\">— General Dwight D. Eisenhower, message to Allied troops, June 6, 1944</p>" +
        "<p>" + N(3) + "Around D-Day, the French Resistance cut rail lines and sent intelligence to the Allies, while three-man <strong>Jedburgh</strong> teams parachuted into France to arm and guide Resistance fighters. " +
        N(4) + "Their sabotage slowed German tanks and troops rushing toward the Normandy beaches.</p>",
      claims: [
        {
          id: "appease",
          sol: "WHII.9.a",
          stem: "Based on the Munich entry, appeasement was a policy of —",
          choices: [
            { letter: "A", text: "giving in to an aggressor's demands to avoid war" },
            { letter: "B", text: "attacking first to prevent a stronger enemy" },
            { letter: "C", text: "staying neutral and trading with both sides" },
            { letter: "D", text: "forming alliances to surround an enemy" }
          ],
          correct: "A"
        },
        {
          id: "declare",
          sol: "WHII.9.a",
          stem: "Which event led directly to Britain and France declaring war on Germany?",
          choices: [
            { letter: "A", text: "the Munich Agreement" },
            { letter: "B", text: "the nonaggression pact" },
            { letter: "C", text: "the invasion of Poland" },
            { letter: "D", text: "the fall of France" }
          ],
          correct: "C"
        },
        {
          id: "stalingrad",
          sol: "WHII.9.b",
          stem: "Why is Stalingrad considered a turning point of the war in Europe?",
          choices: [
            { letter: "A", text: "Germany captured the city and reached Moscow soon after." },
            { letter: "B", text: "Germany lost a whole army, and Soviet forces began pushing west." },
            { letter: "C", text: "Britain and the United States first landed in France there." },
            { letter: "D", text: "The Soviet Union left the war after the battle ended." }
          ],
          correct: "B"
        },
        {
          id: "leningrad",
          sol: "WHII.9.b",
          stem: "According to the timeline, the Siege of Leningrad is remembered for —",
          choices: [
            { letter: "A", text: "the first use of the atomic bomb" },
            { letter: "B", text: "a quick German victory in the north" },
            { letter: "C", text: "the rescue of an army by small boats" },
            { letter: "D", text: "the long suffering and starvation of civilians" }
          ],
          correct: "D"
        },
        {
          id: "crusade",
          sol: "WHII.9.f",
          stem: "Eisenhower's main purpose in this message was to —",
          choices: [
            { letter: "A", text: "warn Germany that an invasion was coming" },
            { letter: "B", text: "explain why the landings had been delayed" },
            { letter: "C", text: "ask the French Resistance to stop fighting" },
            { letter: "D", text: "inspire the troops before a dangerous mission" }
          ],
          correct: "D"
        },
        {
          id: "jedburgh",
          sol: "WHII.9.f",
          stem: "Select TWO actions described in the passage that helped the Normandy invasion succeed.",
          choices: [
            { letter: "A", text: "the Munich Agreement over the Sudetenland" },
            { letter: "B", text: "French Resistance sabotage of rail lines" },
            { letter: "C", text: "Jedburgh teams arming Resistance fighters" },
            { letter: "D", text: "the German-Soviet nonaggression pact" }
          ],
          correct: ["B", "C"]
        }
      ]
    },
    {
      id: "wars-postwar-world",
      family: "WARS",
      title: "Building the postwar world",
      kind: "World Wars · WHII.9",
      blurb: "Occupation zones, trials, the Marshall Plan, the UN, human rights and Israel.",
      level: 2,
      passage: "<p>" + N(1) + "In 1945 the Allies divided Germany, and its capital, Berlin, into four zones run by the United States, Britain, France and the Soviet Union. " +
        N(2) + "At <strong>Nuremberg</strong>, an international court tried Nazi leaders for war crimes and crimes against humanity; similar trials were held in Tokyo. " +
        N(3) + "Under the Marshall Plan, the United States sent billions of dollars to rebuild Western Europe, including West Germany. " +
        N(4) + "In Japan, an American occupation led by General Douglas MacArthur oversaw a new democratic constitution in which Japan gave up the right to make war. " +
        N(5) + "The Allies founded the <strong>United Nations</strong> in 1945, with a Security Council on which the United States and the Soviet Union held permanent seats. " +
        N(6) + "In 1948 the UN adopted the Universal Declaration of Human Rights, drafted by a commission chaired by Eleanor Roosevelt.</p>" +
        "<blockquote>" + N(7) + "All human beings are born free and equal in dignity and rights.</blockquote>" +
        "<p class=\"src\">— Universal Declaration of Human Rights, Article 1, 1948</p>" +
        "<p>" + N(8) + "In 1947 the UN proposed dividing British-ruled Palestine into Jewish and Arab states. " +
        N(9) + "Israel declared independence in May 1948; neighboring Arab states invaded, Israel defended itself, and hundreds of thousands of Palestinian Arabs fled or were forced from their homes.</p>",
      claims: [
        {
          id: "un",
          sol: "WHII.8.d",
          stem: "According to sentence 5, the United Nations tried to avoid one weakness of the League of Nations by —",
          choices: [
            { letter: "A", text: "including the United States and the Soviet Union as permanent members" },
            { letter: "B", text: "placing its headquarters inside Germany's occupation zones" },
            { letter: "C", text: "letting only the nations that had lost the war vote on peace" },
            { letter: "D", text: "allowing each member to ignore any decision it disliked" }
          ],
          correct: "A"
        },
        {
          id: "marshall",
          sol: "WHII.9.e",
          stem: "The main purpose of the Marshall Plan was to —",
          choices: [
            { letter: "A", text: "punish Germany with new reparations" },
            { letter: "B", text: "pay for the trials at Nuremberg" },
            { letter: "C", text: "rebuild the economies of Western Europe" },
            { letter: "D", text: "give the Soviet Union control of Berlin" }
          ],
          correct: "C"
        },
        {
          id: "udhr",
          sol: "WHII.9.e",
          stem: "Article 1 of the Universal Declaration of Human Rights expresses the idea that —",
          choices: [
            { letter: "A", text: "nations may treat their own citizens as they wish" },
            { letter: "B", text: "all people share equal dignity and rights" },
            { letter: "C", text: "rights belong only to citizens of the victors" },
            { letter: "D", text: "the United Nations is a world government" }
          ],
          correct: "B"
        },
        {
          id: "division",
          sol: "WHII.9.e",
          stem: "Which later development grew most directly out of the arrangement in sentence 1?",
          choices: [
            { letter: "A", text: "the reunion of Germany under a single Allied army" },
            { letter: "B", text: "the return of the German kaiser to power" },
            { letter: "C", text: "the end of all Soviet influence in Europe" },
            { letter: "D", text: "the division of Europe and Germany in the Cold War" }
          ],
          correct: "D"
        },
        {
          id: "macarthur",
          sol: "WHII.9.a",
          stem: "After the war, General Douglas MacArthur —",
          choices: [
            { letter: "A", text: "commanded the D-Day landings in Normandy" },
            { letter: "B", text: "led the Soviet zone of occupied Germany" },
            { letter: "C", text: "directed the American occupation of Japan" },
            { letter: "D", text: "chaired the commission that wrote the Declaration" }
          ],
          correct: "C"
        },
        {
          id: "israel",
          sol: "WHII.9.e",
          stem: "Which event described in sentences 8 and 9 happened FIRST?",
          choices: [
            { letter: "A", text: "Neighboring Arab states invade Israel." },
            { letter: "B", text: "The UN proposes dividing Palestine." },
            { letter: "C", text: "Israel declares its independence." },
            { letter: "D", text: "Israel defends itself in its first war." }
          ],
          correct: "B"
        }
      ]
    }
  ];

  for (var i = 0; i < PACKS.length; i++) P.push(PACKS[i]);
})(typeof window !== "undefined" ? window : global);
