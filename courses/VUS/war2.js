/* SOL Lab — Virginia & U.S. History · The 1920s, Depression & World War II (VUS.12–14). Original text only. */
(function (global) {
  var P = global.HEIST_PACKS;
  if (!P || !P.push) return;
  var N = function (i) { return '<span class="n">(' + i + ')</span> '; };   // numbered sentence
  // one question: id, standard, plain-text stem, four choice texts (A–D), key ("B" or ["A", "C"])
  var Q = function (id, sol, stem, ch, correct) {
    return { id: id, sol: sol, stem: stem, correct: correct, choices: [
      { letter: "A", text: ch[0] }, { letter: "B", text: ch[1] }, { letter: "C", text: ch[2] }, { letter: "D", text: ch[3] }] };
  };

  var PACKS = [
    /* ---------- tiny ---------- */
    {
      id: "war2-crash-timeline",
      family: "WAR2",
      title: "From crash to depression",
      kind: "1920s–WWII · VUS.13",
      blurb: "A timeline of the years 1929–1933.",
      level: 1,
      passage: "<p>" + N(1) + "The prosperity of the 1920s ended suddenly, and the nation slid into the <strong>Great Depression</strong>.</p>" +
        "<ul><li><strong>Oct. 24, 1929</strong> Panic selling begins on the stock market (\"Black Thursday\")</li>" +
        "<li><strong>Oct. 29, 1929</strong> Stock prices collapse (\"Black Tuesday\")</li>" +
        "<li><strong>1930</strong> Congress passes the Smoot-Hawley Tariff, raising taxes on imports</li>" +
        "<li><strong>1930–1933</strong> About 9,000 banks fail, wiping out depositors' savings</li>" +
        "<li><strong>1933</strong> About one in four workers is unemployed</li></ul>",
      claims: [
        Q("first", "VUS.13.a", "Which of these events happened FIRST?", [
          "the wave of bank failures",
          "the Smoot-Hawley Tariff",
          "the stock market collapse of Black Tuesday",
          "unemployment reaching one worker in four"], "C"),
        Q("banks", "VUS.13.a", "Bank failures made the Depression worse mainly because —", [
          "depositors lost savings that were not insured, so spending fell further",
          "banks raised interest rates on savings accounts",
          "the government took over the banks and closed factories",
          "farmers stopped borrowing money to buy land"], "A"),
        Q("tariff", "VUS.13.a", "The Smoot-Hawley Tariff harmed the economy mainly because —", [
          "it lowered the prices of imported goods too far",
          "it ended all trade between the states",
          "it gave foreign companies control of American factories",
          "other nations raised their own tariffs, and world trade shrank"], "D"),
        Q("unemployed", "VUS.13.a", "According to the timeline, by 1933 about what share of workers had no job?", [
          "one in ten",
          "one in four",
          "one in two",
          "nine in ten"], "B"),
        Q("fdic", "VUS.13.b", "In 1933 the Roosevelt administration responded to bank failures by —", [
          "closing the stock market for the rest of the decade",
          "returning the nation's money to a silver standard",
          "creating the FDIC to insure bank deposits",
          "letting the remaining banks fail without help"], "C")
      ]
    },
    {
      id: "war2-amendments",
      family: "WAR2",
      title: "Two amendments, one decade",
      kind: "1920s–WWII · VUS.12",
      blurb: "Prohibition and woman suffrage in the words of the Constitution.",
      level: 1,
      passage: "<p>" + N(1) + "Two long reform campaigns, temperance and woman suffrage, ended in constitutional amendments.</p>" +
        "<blockquote>… the manufacture, sale, or transportation of intoxicating liquors … for beverage purposes is hereby prohibited.</blockquote>" +
        "<p class=\"src\">— Eighteenth Amendment, ratified 1919</p>" +
        "<blockquote>The right of citizens of the United States to vote shall not be denied or abridged by the United States or by any State on account of sex.</blockquote>" +
        "<p class=\"src\">— Nineteenth Amendment, ratified 1920</p>",
      claims: [
        Q("nineteenth", "VUS.12.f", "The Nineteenth Amendment guaranteed —", [
          "an end to the sale of alcohol",
          "the right of women to vote",
          "the direct election of senators",
          "voting rights regardless of race"], "B"),
        Q("vocab", "VUS.12.f", "In the Nineteenth Amendment, the word abridged most nearly means —", [
          "limited",
          "counted",
          "protected",
          "explained"], "A"),
        Q("bootleg", "VUS.12.f", "Which was an unintended result of the Eighteenth Amendment?", [
          "Americans stopped drinking alcohol entirely.",
          "Women lost the right to vote in state elections.",
          "Farmers grew more grain for breweries.",
          "Bootlegging, speakeasies and organized crime spread."], "D"),
        Q("flappers", "VUS.12.e", "Young women called flappers challenged older customs in the 1920s by —", [
          "leading the national campaign to ban alcohol",
          "refusing to take any jobs outside the home",
          "wearing short skirts and bobbed hair in public",
          "moving back to family farms in the rural South"], "C"),
        Q("repeal", "VUS.12.f", "Prohibition ended in 1933 when —", [
          "the Twenty-first Amendment repealed the Eighteenth",
          "the Supreme Court struck down the Eighteenth Amendment",
          "Congress refused to fund the Nineteenth Amendment",
          "each state was allowed to repeal the Constitution"], "A")
      ]
    },
    {
      id: "war2-pearl-harbor",
      family: "WAR2",
      title: "A date which will live in infamy",
      kind: "1920s–WWII · VUS.14",
      blurb: "Roosevelt's words the day after Pearl Harbor.",
      level: 1,
      passage: "<blockquote>Yesterday, December 7, 1941—a date which will live in <strong>infamy</strong>—the United States of America was suddenly and deliberately attacked by naval and air forces of the Empire of Japan.</blockquote>" +
        "<p class=\"src\">— Franklin D. Roosevelt, December 8, 1941</p>" +
        "<p>" + N(1) + "Japan hoped to cripple the U.S. Pacific Fleet to expand freely in Asia. " + N(2) + "Congress declared war on Japan that day; on December 11, Germany and Italy declared war on the United States.</p>",
      claims: [
        Q("vocab", "VUS.14.b", "In the excerpt, the word infamy most nearly means —", [
          "great fame",
          "lasting disgrace",
          "military victory",
          "sudden surprise"], "B"),
        Q("purpose", "VUS.14.b", "The main purpose of Roosevelt's address was to —", [
          "ask Congress to declare war on Japan",
          "announce a peace treaty with Japan",
          "explain why the fleet was moved to Hawaii",
          "warn Germany not to enter the war"], "A"),
        Q("why", "VUS.14.b", "According to sentence 1, Japan attacked Pearl Harbor mainly to —", [
          "force the United States to sell it more oil",
          "seize Hawaii as a home for Japanese settlers",
          "keep the U.S. Navy from blocking Japan's expansion in Asia",
          "draw Germany and Italy into a war with Japan"], "C"),
        Q("axis", "VUS.14.c", "After December 11, 1941, the United States was at war with —", [
          "Japan, but not yet Germany or Italy",
          "Great Britain and the Soviet Union",
          "Japan and its ally, the Soviet Union",
          "Japan, Germany and Italy"], "D"),
        Q("expansion", "VUS.14.a", "Before Pearl Harbor, Japan's military government had already —", [
          "joined the Allies against Germany",
          "invaded Manchuria and China",
          "given up its colonies in Korea",
          "signed a defense treaty with the United States"], "B")
      ]
    },

    /* ---------- short ---------- */
    {
      id: "war2-red-scare",
      family: "WAR2",
      title: "The First Red Scare",
      kind: "1920s–WWII · VUS.12",
      blurb: "Revolution in Russia, bombs at home and the Palmer Raids.",
      level: 2,
      passage: "<p>" + N(1) + "In 1917 the Bolsheviks, led by Vladimir Lenin, seized power in Russia and called for a worldwide workers' revolution. " + N(2) + "In 1919 a wave of strikes and a series of bombings by anarchists, including one at the home of Attorney General A. Mitchell Palmer, set off the First <strong>Red Scare</strong>. " + N(3) + "In the Palmer Raids of 1919 and 1920, federal agents arrested thousands of suspected radicals, often without warrants, and hundreds of immigrants were deported. " + N(4) + "The Immigration Act of 1918 had already made it easier to deport immigrants who were anarchists. " + N(5) + "In 1920, critics of the raids founded the American Civil Liberties Union (ACLU) to defend free speech and other rights.</p>",
      claims: [
        Q("vocab", "VUS.12.b", "In sentence 2, the term Red Scare refers to —", [
          "a disease that spread through American cities after the war",
          "fear that communists and other radicals would overthrow the government",
          "a wave of bank failures that began in 1919",
          "Russian attacks on American ships in the Atlantic"], "B"),
        Q("cause", "VUS.12.b", "Which statement best explains how the Bolshevik Revolution contributed to the Red Scare?", [
          "Many Americans feared a similar revolution could spread to the United States.",
          "Russia declared war on the United States in 1919.",
          "Russian troops landed on the American West Coast.",
          "Lenin asked the United States to join the League of Nations."], "A"),
        Q("link", "VUS.12.c", "Sentences 3 and 4 show a link between —", [
          "the women's movement and the Nineteenth Amendment",
          "the stock market and bank failures",
          "fear of radicals and immigration policy",
          "the Great Migration and Northern factories"], "C"),
        Q("aclu", "VUS.12.d", "The ACLU was founded mainly to —", [
          "help the government find and deport radicals",
          "end the sale of alcohol in the United States",
          "promote immigration from eastern Europe",
          "defend civil liberties such as freedom of speech"], "D"),
        Q("quota", "VUS.12.c", "The Immigration Act of 1924 responded to nativist fears by —", [
          "opening the country to unlimited immigration from Asia",
          "setting quotas that favored immigrants from northern and western Europe",
          "requiring all immigrants to become citizens within one year",
          "ending all deportations of immigrants for political beliefs"], "B")
      ]
    },
    {
      id: "war2-harlem",
      family: "WAR2",
      title: "The Great Migration and Harlem",
      kind: "1920s–WWII · VUS.12",
      blurb: "From the rural South to Northern cities and a cultural renaissance.",
      level: 2,
      passage: "<p>" + N(1) + "During the <strong>Great Migration</strong>, more than a million African Americans left the rural South for Northern cities, seeking factory jobs and escape from Jim Crow. " + N(2) + "In New York's Harlem neighborhood, this movement helped spark the Harlem Renaissance, a flowering of Black literature, music and art. " + N(3) + "Langston Hughes wrote poems in the rhythms of jazz and the blues, and Zora Neale Hurston wrote novels and collected the folklore of the rural South. " + N(4) + "Duke Ellington and Louis Armstrong carried jazz to audiences across the nation through radio and records. " + N(5) + "The painter Jacob Lawrence later told the story of the migration in a series of sixty panels.</p>",
      claims: [
        Q("vocab", "VUS.12.g", "In sentence 1, the Great Migration refers to —", [
          "the movement of African Americans from the rural South to Northern cities",
          "the arrival of immigrants from southern Europe at Ellis Island",
          "the movement of farm families from the Dust Bowl to California",
          "the return of soldiers from France after World War I"], "A"),
        Q("why", "VUS.12.g", "According to sentence 1, which TWO factors led African Americans to move north? Select TWO.", [
          "free land offered in the Northern states",
          "jobs in Northern factories",
          "the wish to escape Jim Crow laws",
          "new laws requiring them to leave the South"], ["B", "C"]),
        Q("writers", "VUS.12.g", "Langston Hughes and Zora Neale Hurston are best known as —", [
          "jazz musicians who played at the Cotton Club",
          "painters who showed the Great Migration",
          "leaders of the Back-to-Africa movement",
          "writers of the Harlem Renaissance"], "D"),
        Q("radio", "VUS.12.e", "Sentence 4 shows that new technology in the 1920s helped —", [
          "spread a shared popular culture across the nation",
          "keep jazz music limited to Harlem",
          "end the Great Migration by creating jobs in the South",
          "replace live music with silent films"], "A"),
        Q("garvey", "VUS.12.d", "Marcus Garvey, another leader based in Harlem, is best known for urging —", [
          "integration of Southern schools through the courts",
          "Black pride, economic independence and a return to Africa",
          "vocational training as the path to equality",
          "an end to Prohibition"], "B")
      ]
    },
    {
      id: "war2-alphabet",
      family: "WAR2",
      title: "Relief, recovery and reform",
      kind: "1920s–WWII · VUS.13",
      blurb: "A table of New Deal programs and the CCC in Virginia.",
      level: 2,
      passage: "<p>" + N(1) + "Roosevelt's New Deal aimed at three goals: <strong>relief</strong> for the needy, recovery of the economy and reform to prevent another depression.</p>" +
        "<table><tr><th>Program</th><th>Year</th><th>What it did</th></tr>" +
        "<tr><td>Civilian Conservation Corps (CCC)</td><td>1933</td><td>Gave young men jobs planting trees and building parks</td></tr>" +
        "<tr><td>Agricultural Adjustment Act (AAA)</td><td>1933</td><td>Paid farmers to grow less to raise crop prices</td></tr>" +
        "<tr><td>Federal Deposit Insurance Corporation (FDIC)</td><td>1933</td><td>Insured bank deposits</td></tr>" +
        "<tr><td>Works Progress Administration (WPA)</td><td>1935</td><td>Hired millions to build roads, schools and other public works</td></tr></table>" +
        "<p>" + N(2) + "The first CCC camp opened in 1933 in Virginia's George Washington National Forest, and CCC workers built trails and overlooks in Shenandoah National Park.</p>",
      claims: [
        Q("vocab", "VUS.13.b", "In sentence 1, the word relief most nearly means —", [
          "lower taxes for businesses",
          "a sense of calm after a crisis",
          "direct help for people in need",
          "new rules for the stock market"], "C"),
        Q("reform", "VUS.13.b", "Which program in the table was aimed mainly at reform, to keep a past problem from happening again?", [
          "the Civilian Conservation Corps",
          "the Works Progress Administration",
          "the Agricultural Adjustment Act",
          "the Federal Deposit Insurance Corporation"], "D"),
        Q("aaa", "VUS.13.b", "The AAA tried to help farmers by —", [
          "reducing the supply of crops so that prices would rise",
          "buying farmland and giving it to city workers",
          "lowering tariffs on imported crops",
          "requiring farmers to plant more cotton and wheat"], "A"),
        Q("role", "VUS.13.b", "Which conclusion about the New Deal is best supported by the table?", [
          "The New Deal left the economy entirely to private business.",
          "The New Deal expanded the federal government's role in the economy.",
          "Most New Deal programs ended within a year of starting.",
          "The New Deal helped only bankers and stockholders."], "B"),
        Q("virginia", "VUS.13.b", "Sentence 2 shows that in Virginia the CCC —", [
          "built the state's first public schools",
          "paid farmers to leave the Shenandoah Valley",
          "put young men to work improving forests and parks",
          "insured the savings of Virginia families"], "C")
      ]
    },
    {
      id: "war2-manhattan",
      family: "WAR2",
      title: "Island hopping, the bomb and the peace",
      kind: "1920s–WWII · VUS.14",
      blurb: "How the Pacific war ended and what came after.",
      level: 2,
      passage: "<p>" + N(1) + "In the Pacific, American forces used <strong>island hopping</strong>: they captured key islands, bypassed heavily defended ones, and moved steadily closer to Japan. " + N(2) + "Meanwhile, the secret Manhattan Project, led by General Leslie Groves and the physicist J. Robert Oppenheimer, built the first atomic bombs. " + N(3) + "After costly battles at Iwo Jima and Okinawa, President Harry S. Truman decided to use the bomb rather than invade Japan. " + N(4) + "Atomic bombs destroyed Hiroshima on August 6 and Nagasaki on August 9, 1945, killing well over 100,000 people, and Japan soon surrendered. " + N(5) + "In October 1945 the United Nations was founded, and in 1948 the Marshall Plan began sending billions of dollars to Western Europe.</p>",
      claims: [
        Q("vocab", "VUS.14.g", "In sentence 1, island hopping most nearly means —", [
          "capturing selected islands while skipping others on the way to Japan",
          "moving civilians from island to island to escape the fighting",
          "landing on every island in the Pacific one at a time",
          "using small boats to deliver supplies between islands"], "A"),
        Q("truman", "VUS.14.g", "According to sentence 3, Truman decided to use the atomic bomb mainly to —", [
          "test a new weapon before the war ended",
          "avoid a costly invasion of Japan",
          "punish Japan for the attack on Pearl Harbor",
          "keep the Soviet Union out of the war in Europe"], "B"),
        Q("manhattan", "VUS.14.g", "The Manhattan Project was —", [
          "a plan to rebuild New York after the war",
          "the code name for the D-Day invasion",
          "a secret program to develop the atomic bomb",
          "a New Deal program that built public housing"], "C"),
        Q("marshall", "VUS.14.h", "The main purpose of the Marshall Plan was to —", [
          "punish Germany by taking its factories",
          "pay the costs of the war in the Pacific",
          "move European refugees to the United States",
          "rebuild Western Europe's economies and resist communism"], "D"),
        Q("un", "VUS.14.h", "The United Nations was created in 1945 mainly to —", [
          "keep international peace and encourage cooperation",
          "replace the governments of the Axis nations",
          "build atomic weapons for its member nations",
          "manage the Marshall Plan in Western Europe"], "A")
      ]
    },

    /* ---------- medium ---------- */
    {
      id: "war2-tulsa",
      family: "WAR2",
      title: "Violence, redlining and the wealth gap",
      kind: "1920s–WWII · VUS.12",
      blurb: "The Klan, the 1919 riots, Tulsa and redlining.",
      level: 3,
      passage: "<p>" + N(1) + "After World War I, attacks on the lives and civil liberties of African Americans increased. " + N(2) + "A revived Ku Klux Klan, refounded in 1915, grew to millions of members by the mid-1920s and targeted Black Americans, immigrants, Catholics and Jews. " + N(3) + "In the summer of 1919, white mobs attacked Black neighborhoods in many cities; in Chicago, violence that began at a segregated beach left 38 people dead. " + N(4) + "In 1921 a white mob destroyed the Greenwood district of Tulsa, Oklahoma, a prosperous Black community known as <strong>Black Wall Street</strong>; as many as 300 people may have been killed. " + N(5) + "In the 1930s, federal maps rated neighborhoods for home loans and outlined many Black neighborhoods in red as hazardous, a practice called <strong>redlining</strong>. " + N(6) + "Denied loans, Black families had fewer chances to buy homes, a main source of wealth for American families.</p>",
      claims: [
        Q("vocab", "VUS.12.a", "In sentence 5, redlining most nearly means —", [
          "drawing new state borders on federal maps",
          "marking neighborhoods as too risky for home loans, often because of race",
          "building highways through crowded city neighborhoods",
          "setting aside land for public housing projects"], "B"),
        Q("wealth", "VUS.12.a", "Which conclusion is best supported by sentences 5 and 6?", [
          "Redlining helped Black families buy homes more cheaply.",
          "Redlining affected only neighborhoods in the rural South.",
          "Federal maps had little effect on who could borrow money.",
          "Redlining contributed to a lasting racial gap in wealth."], "D"),
        Q("klan", "VUS.12.a", "Based on sentence 2, how did the Klan of the 1920s differ from the Klan of Reconstruction?", [
          "It also targeted immigrants, Catholics and Jews.",
          "It operated only in the Southern states.",
          "It opposed the Prohibition laws.",
          "It was organized by the federal government."], "A"),
        Q("tulsa", "VUS.12.a", "Sentence 4 describes —", [
          "a strike by Black workers in the Oklahoma oil fields",
          "the destruction of a thriving Black business district",
          "a federal program to build homes in Tulsa",
          "a riot that began at a segregated beach"], "B"),
        Q("migration", "VUS.12.g", "The violence of 1919 in Northern cities grew partly out of the Great Migration, which —", [
          "moved most white workers from Chicago to the South",
          "ended segregation in Northern cities",
          "increased competition for jobs and housing in growing cities",
          "brought European immigrants to Southern farms"], "C"),
        Q("adl", "VUS.12.d", "Which organization was founded in 1913 to fight antisemitism and defend fair treatment for all?", [
          "the American Civil Liberties Union",
          "the Universal Negro Improvement Association",
          "the National Association for the Advancement of Colored People",
          "the Anti-Defamation League"], "D")
      ]
    },
    {
      id: "war2-dictators",
      family: "WAR2",
      title: "Four totalitarian states",
      kind: "1920s–WWII · VUS.14",
      blurb: "Comparing Germany, Italy, the Soviet Union and Japan before the war.",
      level: 2,
      passage: "<p>" + N(1) + "All four governments in the table were <strong>totalitarian</strong>: one party or group controlled the government, the economy, the press and daily life, and crushed all opposition.</p>" +
        "<table><tr><th>Nation</th><th>Leader</th><th>Ideology</th><th>Actions before 1941</th></tr>" +
        "<tr><td>Germany</td><td>Adolf Hitler</td><td>Nazism (fascism)</td><td>Persecuted Jews; took Austria and Czechoslovakia; invaded Poland in 1939</td></tr>" +
        "<tr><td>Italy</td><td>Benito Mussolini</td><td>Fascism</td><td>Invaded Ethiopia in 1935</td></tr>" +
        "<tr><td>Soviet Union</td><td>Joseph Stalin</td><td>Communism</td><td>Forced farmers onto collective farms; purged rivals</td></tr>" +
        "<tr><td>Japan</td><td>Military leaders under Emperor Hirohito</td><td>Militarism</td><td>Invaded Manchuria in 1931 and China in 1937</td></tr></table>" +
        "<p>" + N(2) + "Fascists glorified the nation, its leader and its military, while Communists in the Soviet Union claimed to be building a classless society with no private property. " + N(3) + "Each regime used secret police and propaganda to stay in power.</p>",
      claims: [
        Q("vocab", "VUS.14.a", "In sentence 1, a totalitarian government is one that —", [
          "shares power among several elected parties",
          "controls nearly every part of public and private life",
          "lets the market decide what is produced",
          "is ruled by a king with limited powers"], "B"),
        Q("contrast", "VUS.14.a", "Which statement best contrasts fascism and Soviet communism?", [
          "Fascism allowed free elections, while communism did not.",
          "Fascism opposed military expansion, while communism supported it.",
          "Fascism stressed national glory, while communism claimed to aim at a classless society.",
          "Fascism ended private property, while communism protected it."], "C"),
        Q("asia", "VUS.14.a", "According to the table, which nation expanded by force in Asia?", [
          "Japan",
          "Italy",
          "Germany",
          "the Soviet Union"], "A"),
        Q("alike", "VUS.14.a", "Which statement is true of ALL four governments in the table?", [
          "They were led by elected presidents.",
          "They were allies of the United States in 1939.",
          "They followed the same economic system.",
          "They crushed opposition and controlled the press."], "D"),
        Q("bolshevik", "VUS.12.b", "The Communist government of the Soviet Union first came to power through —", [
          "the Bolshevik Revolution of 1917",
          "the Treaty of Versailles",
          "a free election held after World War I",
          "an alliance with Germany in 1939"], "A"),
        Q("poland", "VUS.14.c", "Germany's invasion of Poland in 1939 led most directly to —", [
          "the American declaration of war on Germany",
          "Britain and France declaring war on Germany",
          "the Japanese attack on Pearl Harbor",
          "the creation of the United Nations"], "B")
      ]
    },
    {
      id: "war2-home-front",
      family: "WAR2",
      title: "Riveters, airmen and the Bedford Boys",
      kind: "1920s–WWII · VUS.14",
      blurb: "Women, minority units and Virginia in World War II.",
      level: 2,
      passage: "<p>" + N(1) + "Millions of women took jobs in factories and shipyards, symbolized by the poster figure <strong>Rosie the Riveter</strong>, and about 350,000 women served in the armed forces. " + N(2) + "Families used ration books for sugar, meat and gasoline, and factories turned from cars to tanks and planes. " + N(3) + "Minority units served with distinction while the military remained <strong>segregated</strong>: the Tuskegee Airmen escorted bombers over Europe, Navajo code talkers sent messages the enemy never broke, and the Japanese American 442nd Regimental Combat Team became one of the most decorated units for its size. " + N(4) + "In Virginia, the Newport News shipyard built aircraft carriers, and the Pentagon rose in Arlington. " + N(5) + "On D-Day, the 116th Infantry Regiment of the Virginia National Guard landed at Omaha Beach, and the small town of Bedford lost more men for its size than almost any other American community.</p>",
      claims: [
        Q("vocab", "VUS.14.d", "In sentence 1, Rosie the Riveter was a symbol of —", [
          "women who served as nurses overseas",
          "women who campaigned for the right to vote",
          "women who worked in war industries",
          "women who led rationing programs"], "C"),
        Q("units", "VUS.14.d", "Which conclusion is best supported by sentence 3?", [
          "Minority soldiers served heroically even though the military was segregated.",
          "The military ended segregation at the start of World War II.",
          "Minority units served only in the United States during the war.",
          "Most minority units fought in the Pacific against Japan."], "A"),
        Q("navajo", "VUS.14.d", "Navajo code talkers helped the war effort by —", [
          "flying bombers over Germany",
          "building aircraft carriers in Virginia",
          "translating German messages into English",
          "sending messages in a code based on their language"], "D"),
        Q("virginia", "VUS.14.d", "Sentences 4 and 5 show that Virginia contributed to the war through —", [
          "its farms and crops alone",
          "both its industries and its soldiers",
          "its governor's role in peace talks",
          "its growing trade with Japan"], "B"),
        Q("omaha", "VUS.14.e", "The 116th Infantry landed at Omaha Beach as part of —", [
          "the invasion of Normandy in June 1944",
          "the island-hopping campaign in the Pacific",
          "the invasion of North Africa in 1942",
          "the Battle of the Bulge in Belgium"], "A"),
        Q("arsenal", "VUS.14.h", "The factory changes in sentence 2 helped the Allies win mainly by —", [
          "ending the need for a draft",
          "selling weapons to the Axis nations",
          "lowering prices for American consumers",
          "supplying huge amounts of weapons and equipment"], "D")
      ]
    },
    {
      id: "war2-korematsu",
      family: "WAR2",
      title: "Executive Order 9066",
      kind: "1920s–WWII · VUS.14",
      blurb: "The incarceration of Japanese Americans and Korematsu v. United States.",
      level: 3,
      passage: "<p>" + N(1) + "After Pearl Harbor, fear and prejudice against Japanese Americans spread on the West Coast. " + N(2) + "In February 1942, President Roosevelt signed <strong>Executive Order 9066</strong>, which allowed the military to remove people from areas it named military zones. " + N(3) + "About 120,000 people of Japanese ancestry, most of them U.S. citizens, were forced from their homes into guarded camps, and many lost their farms, businesses and property. " + N(4) + "Fred Korematsu refused to leave and was convicted. " + N(5) + "In Korematsu v. United States (1944), the Supreme Court upheld his conviction, ruling that wartime necessity justified the order. " + N(6) + "Meanwhile, thousands of Japanese American men served in the 442nd Regimental Combat Team. " + N(7) + "In 1988 Congress passed the Civil Liberties Act, which apologized and paid $20,000 to each surviving incarceree.</p>",
      claims: [
        Q("vocab", "VUS.14.b", "An executive order, like the one in sentence 2, is —", [
          "a law passed by both houses of Congress",
          "a directive issued by the president",
          "a ruling made by the Supreme Court",
          "an amendment to the Constitution"], "B"),
        Q("ruling", "VUS.14.b", "In Korematsu v. United States, the Supreme Court ruled that —", [
          "the order was unconstitutional and the camps must close",
          "only Japanese citizens, not American citizens, could be removed",
          "the removal was justified by wartime necessity",
          "Congress, not the president, had to approve the camps"], "C"),
        Q("rights", "VUS.14.b", "Critics of the order argued that it violated the Constitution mainly because it —", [
          "took away people's liberty because of their ancestry, without trials",
          "gave the military too little power in wartime",
          "let the states decide who could live near the coast",
          "allowed Japanese Americans to serve in the army"], "A"),
        Q("later", "VUS.14.b", "Which conclusion is best supported by sentences 3 and 7?", [
          "The camps were closed before any families moved into them.",
          "The incarcerees were paid in full for their losses in 1945.",
          "Most people removed under the order were not citizens.",
          "The government later admitted that the incarceration was wrong."], "D"),
        Q("442nd", "VUS.14.d", "Sentence 6 shows that many Japanese Americans —", [
          "refused to serve in the military during the war",
          "served the United States even while their families were confined",
          "were drafted into the Japanese army",
          "served only as workers in war factories"], "B"),
        Q("japan", "VUS.14.a", "During the war, Japan's government was best described as —", [
          "a democracy led by an elected parliament",
          "a communist state allied with the Soviet Union",
          "a militarist state dominated by army and navy leaders",
          "a colony governed by Great Britain"], "C")
      ]
    },

    /* ---------- long ---------- */
    {
      id: "war2-margin",
      family: "WAR2",
      title: "Buying on margin",
      kind: "1920s–WWII · VUS.13",
      blurb: "Credit, overproduction, the Crash and the bank failures.",
      level: 3,
      passage: "<p>" + N(1) + "The 1920s looked prosperous: new consumer goods such as cars, radios and refrigerators filled stores, and many families bought them on <strong>installment credit</strong>, paying a little each month. " + N(2) + "But wealth was unevenly divided, and farmers suffered all decade from low prices caused by <strong>overproduction</strong>. " + N(3) + "Factories also produced more goods than consumers could afford to buy. " + N(4) + "Meanwhile, investors bought stocks <strong>on margin</strong>, paying as little as 10 percent of the price and borrowing the rest. " + N(5) + "When prices fell in October 1929, brokers demanded repayment, and panicked selling turned a decline into a crash. " + N(6) + "Banks had lent money to investors and invested depositors' money in stocks; as loans went unpaid and frightened depositors withdrew their savings, thousands of banks failed. " + N(7) + "Because deposits were not insured, many families lost everything. " + N(8) + "In 1930 Congress passed the Smoot-Hawley Tariff to protect American industry, but other nations raised their own tariffs, and world trade collapsed. " + N(9) + "President Herbert Hoover urged voluntary action and believed recovery would come through business, but unemployment kept rising.</p>",
      claims: [
        Q("vocab", "VUS.13.a", "In sentence 4, buying stocks on margin means —", [
          "buying stocks with money borrowed from a broker",
          "buying stocks only at the lowest price of the day",
          "selling stocks before the market closes",
          "buying stocks from the government"], "A"),
        Q("causes", "VUS.13.a", "Which TWO were causes of the Great Depression described in the passage? Select TWO.", [
          "the creation of Social Security",
          "overproduction on farms and in factories",
          "the ratification of the Nineteenth Amendment",
          "speculation in stocks bought on margin"], ["B", "D"]),
        Q("families", "VUS.13.a", "According to sentences 6 and 7, why did the crash hurt families who never owned stock?", [
          "The government taxed their savings to repay brokers.",
          "They had to buy stocks to keep their jobs.",
          "Their uninsured savings vanished when banks failed.",
          "Stores refused to sell goods on credit after 1929."], "C"),
        Q("protection", "VUS.13.a", "Sentence 8 suggests that the protectionism of the Smoot-Hawley Tariff —", [
          "backfired by shrinking the foreign markets for American goods",
          "ended the Depression by creating new factory jobs",
          "had no effect on trade between nations",
          "lowered prices for American consumers"], "A"),
        Q("credit", "VUS.12.e", "Sentence 1 shows that the prosperity of the 1920s depended partly on —", [
          "high tariffs that ended foreign competition",
          "government ownership of major industries",
          "rising farm prices across the decade",
          "new inventions and consumer credit"], "D"),
        Q("hoover", "VUS.13.b", "Roosevelt's New Deal differed from Hoover's approach in sentence 9 mainly because Roosevelt —", [
          "waited for businesses to end the Depression on their own",
          "used federal programs to provide relief, jobs and reform",
          "raised tariffs higher than the Smoot-Hawley Tariff",
          "returned control of the economy to the states"], "B")
      ]
    },
    {
      id: "war2-new-deal-debate",
      family: "WAR2",
      title: "Fear itself and the New Deal debate",
      kind: "1920s–WWII · VUS.13",
      blurb: "Roosevelt's first inaugural, the New Deal and its critics.",
      level: 3,
      passage: "<blockquote>So, first of all, let me assert my firm belief that the only thing we have to fear is fear itself—nameless, unreasoning, unjustified terror which paralyzes needed efforts to convert retreat into advance.</blockquote>" +
        "<p class=\"src\">— Franklin D. Roosevelt, First Inaugural Address, March 4, 1933</p>" +
        "<p>" + N(1) + "Roosevelt's New Deal greatly expanded the federal government's role in the economy. " + N(2) + "The Wagner Act of 1935 protected workers' right to join unions and bargain collectively, and the Social Security Act created old-age pensions and unemployment insurance. " + N(3) + "Critics objected for different reasons. " + N(4) + "Many business leaders and conservatives argued that the New Deal spent too much, ran up <strong>deficits</strong>, and gave Washington too much power over private business. " + N(5) + "Others, such as Senator Huey Long of Louisiana, argued that it did too little and called for heavy taxes on great fortunes to share the wealth. " + N(6) + "In 1935 the Supreme Court struck down the National Recovery Administration, and in 1937 Roosevelt proposed adding as many as six justices to the Court, a plan Congress rejected. " + N(7) + "The New Deal did not end the Depression, but programs such as Social Security and the FDIC still exist today.</p>",
      claims: [
        Q("fear", "VUS.13.b", "Roosevelt's main purpose in the excerpt was to —", [
          "warn Americans that another war was coming",
          "blame the Depression on the previous president",
          "restore the public's confidence so recovery could begin",
          "announce that the Depression had already ended"], "C"),
        Q("vocab", "VUS.13.b", "In sentence 4, deficits most nearly means —", [
          "spending more money than the government collects",
          "shortages of food in large cities",
          "losses suffered by private companies",
          "taxes paid by wealthy Americans"], "A"),
        Q("critics", "VUS.13.b", "Which statement best compares the critics in sentences 4 and 5?", [
          "Both groups wanted the New Deal to spend much more money.",
          "One group thought the New Deal went too far; the other thought it did too little.",
          "Both groups wanted to end Social Security at once.",
          "One group supported the Court plan; the other supported the NRA."], "B"),
        Q("redline", "VUS.12.a", "Which 1930s federal practice marked many Black neighborhoods as poor risks for home loans?", [
          "deficit spending",
          "collective bargaining",
          "deposit insurance",
          "redlining"], "D"),
        Q("legacy", "VUS.13.b", "Which conclusion about the New Deal is best supported by sentences 1 and 7?", [
          "It ended the Depression by 1934.",
          "It left a lasting expansion of the federal government's role.",
          "It was struck down entirely by the Supreme Court.",
          "It reduced the size of the federal government."], "B"),
        Q("bankruns", "VUS.13.a", "The fear Roosevelt described had helped deepen the Depression by causing —", [
          "rising stock prices in 1932",
          "farmers to plant larger crops",
          "Congress to cut tariffs",
          "panicked runs on banks by depositors"], "D")
      ]
    },
    {
      id: "war2-battles",
      family: "WAR2",
      title: "Europe first",
      kind: "1920s–WWII · VUS.14",
      blurb: "Allied strategy, leaders and a timeline of major battles.",
      level: 2,
      passage: "<p>" + N(1) + "The Allies agreed on a <strong>Europe First</strong> strategy: defeat Germany first while holding the line against Japan in the Pacific. " + N(2) + "Allied leaders included President Franklin Roosevelt, British Prime Minister Winston Churchill and Soviet leader Joseph Stalin. " + N(3) + "General Dwight D. Eisenhower commanded in Europe, while General Douglas MacArthur and Admiral Chester Nimitz led in the Pacific. " + N(4) + "On a map of Europe in 1944, Allied armies close in on Germany from three directions: from Normandy in the west, from Italy in the south, and Soviet forces from the east.</p>" +
        "<ul><li><strong>June 1942</strong> Midway: the U.S. Navy sinks four Japanese carriers, a turning point in the Pacific</li>" +
        "<li><strong>Nov. 1942</strong> American and British troops land in North Africa</li>" +
        "<li><strong>1943</strong> The Allies invade Sicily and then mainland Italy</li>" +
        "<li><strong>June 6, 1944</strong> D-Day: Allied troops land at Normandy, France</li>" +
        "<li><strong>Sept. 1944</strong> An Allied airborne attack in Holland fails to cross the Rhine</li>" +
        "<li><strong>Dec. 1944</strong> Battle of the Bulge: Germany's last major offensive in the west is stopped</li>" +
        "<li><strong>Feb.–Mar. 1945</strong> U.S. Marines capture Iwo Jima</li>" +
        "<li><strong>Apr.–June 1945</strong> The Battle of Okinawa, the last major battle of the war</li></ul>",
      claims: [
        Q("midway", "VUS.14.e", "According to the timeline, which battle was a turning point in the Pacific?", [
          "Okinawa",
          "Iwo Jima",
          "Midway",
          "Normandy"], "C"),
        Q("first", "VUS.14.e", "According to the timeline, which event took place EARLIEST?", [
          "the landing at Normandy",
          "the Battle of the Bulge",
          "the Battle of Okinawa",
          "the landing in North Africa"], "D"),
        Q("strategy", "VUS.14.c", "The Europe First strategy in sentence 1 meant that the Allies would —", [
          "put most of their strength into defeating Germany before Japan",
          "fight only in Europe and make peace with Japan",
          "defeat Japan first and then turn to Germany",
          "stay on the defensive in Europe until 1945"], "A"),
        Q("bulge", "VUS.14.e", "The Battle of the Bulge is best described as —", [
          "the first American landing in Europe",
          "Germany's last major offensive in the west",
          "the battle that ended the war in the Pacific",
          "an Allied attack on the city of Rome"], "B"),
        Q("eisenhower", "VUS.14.c", "Based on sentence 3 and the timeline, Eisenhower's command included —", [
          "the Battle of Midway",
          "the capture of Iwo Jima",
          "the D-Day invasion of Normandy",
          "the Battle of Okinawa"], "C"),
        Q("islands", "VUS.14.g", "The battles for Iwo Jima and Okinawa were steps in which American strategy?", [
          "island hopping toward Japan",
          "the Europe First strategy",
          "the invasion of North Africa",
          "the airborne attack in Holland"], "A")
      ]
    },
    {
      id: "war2-holocaust",
      family: "WAR2",
      title: "The Holocaust",
      kind: "1920s–WWII · VUS.14",
      blurb: "From persecution to genocide, liberation and the postwar world.",
      level: 3,
      passage: "<p>" + N(1) + "<strong>Antisemitism</strong>, hatred of and discrimination against Jews, had existed in Europe for centuries, and the Nazis made it government policy. " + N(2) + "The Nuremberg Laws of 1935 stripped German Jews of their citizenship, and in November 1938, during Kristallnacht, mobs burned synagogues and attacked Jewish homes and businesses. " + N(3) + "Many Jews tried to flee, but the United States and other nations kept strict immigration limits; in 1939 the ship St. Louis, carrying more than 900 Jewish refugees, was turned away from Cuba and the United States. " + N(4) + "During the war, Nazi leaders carried out the <strong>Final Solution</strong>, the planned murder of all of Europe's Jews, through mass shootings and in death camps such as Auschwitz-Birkenau. " + N(5) + "About six million Jews were murdered, along with millions of others the Nazis targeted, including Roma, people with disabilities, Poles, Soviet prisoners of war, gay men and political opponents. " + N(6) + "In 1945 Allied soldiers liberated the camps, and at the Nuremberg trials Nazi leaders were tried for crimes against humanity. " + N(7) + "Many survivors later immigrated to the United States, and in 1948 the State of Israel was established.</p>",
      claims: [
        Q("vocab", "VUS.14.f", "In sentence 1, antisemitism most nearly means —", [
          "support for a Jewish homeland",
          "hatred of and discrimination against Jews",
          "opposition to all organized religion",
          "fear of immigrants from eastern Europe"], "B"),
        Q("first", "VUS.14.f", "Which of these steps in Nazi persecution came FIRST?", [
          "the Nuremberg trials",
          "Kristallnacht",
          "the voyage of the St. Louis",
          "the Nuremberg Laws"], "D"),
        Q("stlouis", "VUS.12.c", "The fate of the St. Louis is best explained by —", [
          "immigration quotas set by laws such as the Immigration Act of 1924",
          "a ban on all ships from Europe after 1939",
          "the refugees' refusal to leave the ship in Cuba",
          "an agreement between the United States and Germany"], "A"),
        Q("final", "VUS.14.f", "The Final Solution described in sentence 4 was —", [
          "the Allied plan to end the war in Europe",
          "a treaty that divided Germany after the war",
          "the Nazi plan to murder all of Europe's Jews",
          "a plan to move German Jews to the United States"], "C"),
        Q("trials", "VUS.14.f", "The Nuremberg trials established the principle that —", [
          "only nations, not individuals, could be blamed for war",
          "leaders could be held personally responsible for crimes against humanity",
          "soldiers who followed orders could never be punished",
          "the Allies would pay reparations to Germany"], "B"),
        Q("israel", "VUS.14.h", "Before Israel was established in 1948, which international organization voted in 1947 for a plan to divide Palestine?", [
          "the League of Nations",
          "NATO",
          "the Red Cross",
          "the United Nations"], "D")
      ]
    }
  ];

  for (var i = 0; i < PACKS.length; i++) P.push(PACKS[i]);
})(typeof window !== "undefined" ? window : global);
