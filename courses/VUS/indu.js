/* SOL Lab — Virginia & U.S. History · Industry, Reform & World War I (VUS.10–11). Original text only. */
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
      id: "indu-west-timeline",
      family: "INDU",
      title: "Rails, homesteads and the Plains nations",
      kind: "Industry, Reform & WWI · VUS.10",
      blurb: "A timeline of the West from the Homestead Act to Wounded Knee.",
      level: 1,
      passage: "<p>" + N(1) + "As settlers and railroads pushed west, the U.S. government forced Indigenous nations onto shrinking <strong>reservations</strong>.</p>" +
        "<ul><li><strong>1862</strong> Homestead Act offers 160 acres of western land to settlers</li>" +
        "<li><strong>1869</strong> First transcontinental railroad completed in Utah</li>" +
        "<li><strong>1876</strong> Lakota and Cheyenne warriors defeat Custer's cavalry at the Little Bighorn</li>" +
        "<li><strong>1887</strong> Dawes Act divides reservation land into individual plots</li>" +
        "<li><strong>1890</strong> U.S. soldiers kill hundreds of Lakota men, women and children at Wounded Knee</li></ul>",
      claims: [
        Q("first", "VUS.10.a", "Which of these events in the West came first?", [
          "the Battle of the Little Bighorn",
          "the passage of the Dawes Act",
          "the first transcontinental railroad",
          "the killings at Wounded Knee"], "C"),
        Q("buffalo", "VUS.10.a", "Which statement best explains how the railroads affected the Plains nations?", [
          "They brought hunters and settlers who destroyed the buffalo herds the Plains nations relied on.",
          "They carried the Plains nations to new homelands east of the Mississippi River.",
          "They ended the fighting by giving each tribe a share of the profits from the rail lines.",
          "They made the reservations more valuable by bringing customers for tribal crops."], "A"),
        Q("dawes", "VUS.10.a", "The Dawes Act of 1887 was intended to —", [
          "create one large reservation shared by all of the Plains nations",
          "return the Black Hills to the Lakota after the Little Bighorn",
          "pay the tribes for land taken by the transcontinental railroad",
          "turn Indigenous people into individual farmers and end tribal landholding"], "D"),
        Q("resist", "VUS.10.a", "Taken together, the events of 1876 and 1890 show that —", [
          "the Plains nations moved to reservations willingly once the railroad arrived",
          "Indigenous nations resisted, but the U.S. Army used force to impose the reservation system",
          "the U.S. government stopped westward settlement after the Little Bighorn",
          "Congress admitted the Lakota homeland as a state in exchange for peace"], "B"),
        Q("vocab", "VUS.10.a", "In sentence 1, the word reservations most nearly means —", [
          "advance payments for railroad tickets to the West",
          "forts built to protect settlers on the Great Plains",
          "lands set aside by the government for Indigenous nations",
          "farms of 160 acres given to settlers under federal law"], "C")
      ]
    },
    {
      id: "indu-ellis-island",
      family: "INDU",
      title: "The new immigrants",
      kind: "Industry, Reform & WWI · VUS.10",
      blurb: "Why millions came, where they landed and what they faced.",
      level: 1,
      passage: "<p>" + N(1) + "Between 1880 and 1920, over 20 million immigrants arrived in the United States. " + N(2) + "Many came from southern and eastern Europe to escape poverty and persecution and to find work. " + N(3) + "Most Europeans were inspected at <strong>Ellis Island</strong> in New York Harbor, while many Asians were held at Angel Island near San Francisco. " + N(4) + "Newcomers faced crowded housing, low wages and <strong>nativism</strong>; the Chinese Exclusion Act of 1882 barred most Chinese laborers.</p>",
      claims: [
        Q("push", "VUS.10.b", "According to sentence 2, one reason immigrants LEFT their home countries was —", [
          "free land offered by the Homestead Act",
          "poverty and persecution at home",
          "the chance to vote in American elections",
          "high wages in American textile mills"], "B"),
        Q("ports", "VUS.10.b", "Which conclusion is best supported by sentences 3 and 4?", [
          "Immigrants from Europe and Asia entered at different ports and faced different laws.",
          "Most new immigrants entered the country through ports on the Gulf of Mexico.",
          "Asian immigrants were welcomed more warmly than European immigrants were.",
          "Immigration slowed after 1880 because of the Chinese Exclusion Act."], "A"),
        Q("nativism", "VUS.10.b", "In sentence 4, nativism most nearly means —", [
          "pride in one's homeland among immigrant families",
          "the belief that all nations should allow free movement",
          "the study of the languages spoken by immigrants",
          "hostility toward immigrants in favor of native-born Americans"], "D"),
        Q("exclusion", "VUS.10.b", "The Chinese Exclusion Act of 1882 is an example of —", [
          "a state law requiring immigrants to learn English",
          "a treaty that opened Chinese ports to American trade",
          "a federal law that limited immigration based on national origin",
          "a program that paid immigrants to settle in the West"], "C"),
        Q("cities", "VUS.10.d", "Many new immigrants settled in large cities mainly because —", [
          "factories there offered jobs that needed little training",
          "the government required immigrants to live near ports",
          "city land was cheaper than farmland in the Midwest",
          "most immigrants had worked in factories before arriving"], "A")
      ]
    },
    {
      id: "indu-new-lands",
      family: "INDU",
      title: "From Alaska to the Canal Zone",
      kind: "Industry, Reform & WWI · VUS.11",
      blurb: "A table of the lands the United States gained, 1867–1903.",
      level: 1,
      passage: "<p>" + N(1) + "Critics mocked the purchase of Alaska as \"Seward's Folly,\" but gold and other resources later proved its value.</p>" +
        "<table><tr><th>Year</th><th>Territory</th><th>How it was gained</th></tr>" +
        "<tr><td>1867</td><td>Alaska</td><td>Purchased from Russia</td></tr>" +
        "<tr><td>1898</td><td>Hawaii</td><td>Annexed after American planters overthrew its queen</td></tr>" +
        "<tr><td>1898</td><td>Puerto Rico, Guam, Philippines</td><td>Taken from Spain after the Spanish-American War</td></tr>" +
        "<tr><td>1903</td><td>Panama Canal Zone</td><td>Treaty with newly independent Panama</td></tr></table>",
      claims: [
        Q("first", "VUS.11.b", "According to the table, which territory did the United States gain FIRST?", [
          "Hawaii",
          "the Philippines",
          "the Panama Canal Zone",
          "Alaska"], "D"),
        Q("war", "VUS.11.b", "According to the table, which territories came to the United States as a result of a war?", [
          "Alaska and Hawaii",
          "Puerto Rico, Guam and the Philippines",
          "the Panama Canal Zone and Hawaii",
          "Alaska and the Panama Canal Zone"], "B"),
        Q("canal", "VUS.11.b", "The United States built the Panama Canal mainly to —", [
          "shorten sea travel between the Atlantic and Pacific for trade and the navy",
          "give Panama a way to ship its crops to European markets",
          "carry settlers to Alaska more quickly than by railroad",
          "end the Spanish-American War by cutting off Spanish ships"], "A"),
        Q("power", "VUS.11.a", "Taken together, the table shows that the United States —", [
          "gave up its overseas lands after the Spanish-American War",
          "gained most of its territory from France and Great Britain",
          "became a world power with lands in the Caribbean and the Pacific",
          "expanded only by buying land rather than by war or treaty"], "C"),
        Q("hawaii", "VUS.11.b", "American interest in Hawaii grew mainly because of —", [
          "its gold mines and fur trade",
          "its location on the route to the Panama Canal",
          "its large population of American farmers from the Plains",
          "its sugar plantations and the naval harbor at Pearl Harbor"], "D")
      ]
    },

    /* ---------- short ---------- */
    {
      id: "indu-steel-oil",
      family: "INDU",
      title: "Steel, oil and fortunes",
      kind: "Industry, Reform & WWI · VUS.10",
      blurb: "Carnegie, Rockefeller, Mellon and the rise of an industrial nation.",
      level: 2,
      passage: "<p>" + N(1) + "After the Civil War, the United States changed from a mostly agrarian nation into an industrial giant. " + N(2) + "Andrew Carnegie used <strong>vertical integration</strong>, owning the iron mines, ships, railroads and mills he needed, to make steel cheaply. " + N(3) + "John D. Rockefeller's Standard Oil bought out or crushed rivals until it controlled about 90 percent of American oil refining. " + N(4) + "The Pittsburgh banker Andrew Mellon financed new industries such as aluminum. " + N(5) + "Railroads and the telegraph linked national markets, and mass production made goods cheaper and faster to produce. " + N(6) + "Carnegie later argued that the rich had a duty to use their wealth for the public good, and he paid for thousands of public libraries.</p>",
      claims: [
        Q("vocab", "VUS.10.c", "In sentence 2, vertical integration most nearly means —", [
          "joining with rival companies that make the same product",
          "controlling every stage of making a product, from raw materials to sale",
          "building tall factories to save space in crowded cities",
          "letting workers share in the ownership of a company"], "B"),
        Q("agrarian", "VUS.10.c", "The change described in sentence 1 is best summarized as a shift from —", [
          "factory work to farming",
          "foreign trade to local trade",
          "farming to industry",
          "private business to government ownership"], "C"),
        Q("monopoly", "VUS.10.c", "Sentence 3 describes a company that was close to being —", [
          "a monopoly",
          "a labor union",
          "a cooperative",
          "a public utility"], "A"),
        Q("philanthropy", "VUS.10.c", "Which conclusion about American philanthropy is best supported by sentence 6?", [
          "Industrial leaders were required by law to give money to charity.",
          "Carnegie believed great fortunes should be passed down to family members.",
          "Libraries were built mainly with money from local taxes.",
          "Some industrialists gave large sums to build institutions that served the public."], "D"),
        Q("critics", "VUS.10.d", "Critics of industrial leaders such as Carnegie most often pointed out that —", [
          "their factories made goods too expensive for most families",
          "they refused to use new machines and inventions",
          "workers in their mills faced long hours, low pay and danger",
          "they moved most of their factories to other countries"], "C")
      ]
    },
    {
      id: "indu-muckrakers",
      family: "INDU",
      title: "The muckrakers and the Progressives",
      kind: "Industry, Reform & WWI · VUS.10",
      blurb: "From The Jungle to the Seventeenth Amendment.",
      level: 1,
      passage: "<p>" + N(1) + "Progressives were reformers who believed government should fix problems caused by industry and the rapid growth of cities. " + N(2) + "Journalists called <strong>muckrakers</strong> exposed these problems; Upton Sinclair's novel The Jungle (1906) described filthy conditions in Chicago meatpacking plants. " + N(3) + "That same year Congress passed the Meat Inspection Act and the Pure Food and Drug Act. " + N(4) + "Lewis Hine's photographs of children in mills and mines built support for child labor laws. " + N(5) + "President Theodore Roosevelt set aside millions of acres of national forests, and federal law limited dumping waste into rivers and harbors. " + N(6) + "Progressives also won the Seventeenth Amendment, which let voters elect U.S. senators directly.</p>",
      claims: [
        Q("vocab", "VUS.10.e", "In sentence 2, muckrakers most nearly means —", [
          "writers who exposed corruption and unsafe conditions",
          "farmers who cleared land for new railroads",
          "politicians who defended big business",
          "workers who went on strike for higher pay"], "A"),
        Q("jungle", "VUS.10.e", "Which cause-and-effect relationship is shown in sentences 2 and 3?", [
          "A strike by meatpackers led Congress to raise wages.",
          "A novel about meatpacking led to new food safety laws.",
          "New food laws led Sinclair to write a novel about Chicago.",
          "A food shortage led Roosevelt to buy meatpacking plants."], "B"),
        Q("hine", "VUS.10.e", "Hine's photographs were meant to address which problem?", [
          "pollution of rivers and harbors",
          "unsafe food and medicine",
          "the employment of young children",
          "corruption in city government"], "C"),
        Q("seventeenth", "VUS.10.e", "The Seventeenth Amendment made government more democratic by —", [
          "giving women the right to vote in federal elections",
          "creating a federal tax on personal income",
          "ending the poll tax in federal elections",
          "letting voters, not state legislatures, choose senators"], "D"),
        Q("hull", "VUS.10.d", "Reformers such as Jane Addams opened settlement houses in cities mainly to —", [
          "help poor and immigrant families with classes, child care and health care",
          "house soldiers returning from the Spanish-American War",
          "train factory owners in new ways to manage workers",
          "keep new immigrants from settling in crowded neighborhoods"], "A")
      ]
    },
    {
      id: "indu-byrd-machine",
      family: "INDU",
      title: "The Byrd machine",
      kind: "Industry, Reform & WWI · VUS.10",
      blurb: "How one organization ran Virginia government for forty years.",
      level: 3,
      passage: "<p>" + N(1) + "From the 1920s to the 1960s, a political organization led by Harry F. Byrd Sr. dominated Virginia government. " + N(2) + "Byrd served as governor from 1926 to 1930 and then as a U.S. senator from 1933 to 1965. " + N(3) + "His <strong>pay-as-you-go</strong> policy opposed state borrowing, even to build roads and schools. " + N(4) + "The <strong>Byrd machine</strong> worked through county courthouse officials who were loyal to the organization. " + N(5) + "Because the 1902 state constitution required a poll tax, only a small share of adult Virginians voted, which helped the organization stay in power. " + N(6) + "In the 1950s, Byrd led Massive Resistance against school desegregation.</p>",
      claims: [
        Q("machine", "VUS.10.f", "In sentence 4, the term Byrd machine refers to —", [
          "a voting device that counted ballots in state elections",
          "a group of apple-packing plants owned by the Byrd family",
          "a political organization run through loyal local officials",
          "a state highway agency created to build paved roads"], "C"),
        Q("payg", "VUS.10.f", "Under the pay-as-you-go policy in sentence 3, Virginia would —", [
          "pay for projects only with money already collected, not by borrowing",
          "charge drivers a toll on every new state road",
          "borrow money to build roads and repay it from future taxes",
          "let private companies build schools and charge tuition"], "A"),
        Q("polltax", "VUS.10.g", "The poll tax mentioned in sentence 5 affected Virginia mainly by —", [
          "raising enough money to end all other state taxes",
          "keeping many African American and poor white citizens from voting",
          "requiring every adult to vote in state elections",
          "giving more seats in the General Assembly to cities"], "B"),
        Q("evidence", "VUS.10.f", "Which evidence would best support the claim in sentence 5?", [
          "a list of roads built in Virginia during the 1920s",
          "a biography of Harry Byrd's early life in Winchester",
          "a map of Virginia's counties and their courthouses",
          "voter turnout figures for Virginia elections, 1925–1965"], "D"),
        Q("conclusion", "VUS.10.f", "Which conclusion about the Byrd organization is best supported by the passage?", [
          "The organization's power depended partly on keeping the number of voters small.",
          "The Byrd organization supported large state spending on public schools.",
          "Byrd's influence ended when he left the governor's office in 1930.",
          "The organization was led mainly by officials from Virginia's largest cities."], "A")
      ]
    },
    {
      id: "indu-road-to-war",
      family: "INDU",
      title: "From neutrality to war",
      kind: "Industry, Reform & WWI · VUS.11",
      blurb: "A timeline of the events that pulled the United States into World War I.",
      level: 2,
      passage: "<p>" + N(1) + "When war broke out in Europe, most Americans wanted to stay out, and President Woodrow Wilson declared American <strong>neutrality</strong>. " + N(2) + "Events between 1915 and 1917 slowly changed public opinion.</p>" +
        "<ul><li><strong>1914</strong> War begins in Europe; the United States declares neutrality</li>" +
        "<li><strong>1915</strong> A German submarine sinks the British liner Lusitania; 128 Americans die</li>" +
        "<li><strong>1916</strong> Wilson is reelected with the slogan \"He kept us out of war\"</li>" +
        "<li><strong>Jan. 1917</strong> Germany announces unrestricted submarine warfare</li>" +
        "<li><strong>Mar. 1917</strong> The Zimmermann Telegram, a German offer of alliance to Mexico, is published</li>" +
        "<li><strong>Apr. 1917</strong> Congress declares war on Germany</li></ul>",
      claims: [
        Q("first", "VUS.11.c", "Which of these steps toward war came first?", [
          "Germany announced unrestricted submarine warfare.",
          "The Zimmermann Telegram was published.",
          "Wilson was reelected president.",
          "A German submarine sank the Lusitania."], "D"),
        Q("vocab", "VUS.11.c", "In sentence 1, neutrality most nearly means —", [
          "sending troops to help both sides equally",
          "refusing to take sides in a war",
          "ending all trade with other nations",
          "joining an alliance for defense"], "B"),
        Q("zimmermann", "VUS.11.c", "The Zimmermann Telegram angered Americans mainly because Germany —", [
          "offered to help Mexico regain land it had lost to the United States",
          "demanded that the United States pay for the sinking of the Lusitania",
          "threatened to attack the Panama Canal with its navy",
          "asked Great Britain to stop trading with the United States"], "A"),
        Q("two", "VUS.11.c", "Which TWO events most directly led Congress to declare war in April 1917? Select TWO.", [
          "Wilson's reelection in 1916",
          "Germany's return to unrestricted submarine warfare",
          "the publication of the Zimmermann Telegram",
          "the assassination of Archduke Franz Ferdinand"], ["B", "C"]),
        Q("draft", "VUS.11.d", "After declaring war, the United States raised a large army mainly by —", [
          "hiring soldiers from Allied nations",
          "moving troops home from the Philippines",
          "relying only on volunteers",
          "drafting men under the Selective Service Act"], "D")
      ]
    },

    /* ---------- medium ---------- */
    {
      id: "indu-washington-dubois",
      family: "INDU",
      title: "Washington and Du Bois",
      kind: "Industry, Reform & WWI · VUS.10",
      blurb: "Two leaders, two strategies for answering Jim Crow.",
      level: 3,
      passage: "<p>" + N(1) + "Booker T. Washington, born enslaved in Virginia and educated at Hampton Institute, led Tuskegee Institute in Alabama and urged Black Southerners to build economic strength through <strong>vocational training</strong>. " + N(2) + "Speaking to a largely white audience in Atlanta in 1895, he said:</p>" +
        "<blockquote>In all things that are purely social we can be as separate as the fingers, yet one as the hand in all things essential to mutual progress.</blockquote>" +
        "<p class=\"src\">— Booker T. Washington, Atlanta Exposition Address, 1895</p>" +
        "<p>" + N(3) + "W.E.B. Du Bois, the first African American to earn a doctorate from Harvard, disagreed. " + N(4) + "In The Souls of Black Folk (1903), he wrote that Washington was asking Black Americans to give up, at least for now, political power, the demand for civil rights, and higher education for their young people (adapted). " + N(5) + "Du Bois helped found the Niagara Movement in 1905 and the NAACP in 1909.</p>",
      claims: [
        Q("fingers", "VUS.10.g", "In the excerpt, the image of the fingers and the hand suggests that —", [
          "Black and white Southerners should live in the same neighborhoods",
          "Black and white Southerners could stay socially separate but cooperate economically",
          "Southern states should end segregation in schools and trains at once",
          "the federal government should protect the voting rights of all citizens"], "B"),
        Q("critique", "VUS.10.g", "According to sentence 4, Du Bois criticized Washington for —", [
          "accepting, for the time being, the loss of political power and civil rights",
          "demanding that Black Southerners move at once to Northern cities",
          "opposing job training and trade schools for Black Southerners",
          "refusing to speak before white audiences in the South"], "A"),
        Q("contrast", "VUS.10.g", "Which statement best contrasts the two leaders?", [
          "Washington wanted immediate integration, while Du Bois accepted segregation for a time.",
          "Both men believed that Black Americans should leave the United States for Africa.",
          "Washington stressed economic progress first, while Du Bois demanded full rights at once.",
          "Du Bois supported vocational schools, while Washington supported only universities."], "C"),
        Q("hbcu", "VUS.10.h", "Washington's own path from Hampton Institute to Tuskegee Institute shows the role that —", [
          "land-grant colleges played in training Northern factory managers",
          "public universities played in admitting Black students across the South",
          "military academies played in educating freedmen after the war",
          "historically Black colleges played in expanding education and skills"], "D"),
        Q("naacp", "VUS.10.e", "The NAACP, which Du Bois helped found with white Progressive reformers, mainly worked for change through —", [
          "court cases, publicity and lobbying for new laws",
          "armed resistance against Southern state governments",
          "plans to resettle Black Southerners in Africa",
          "vocational schools run by Southern churches"], "A"),
        Q("audience", "VUS.10.g", "Which factor most likely shaped the tone of Washington's 1895 speech?", [
          "He was speaking to members of Congress about a new civil rights law.",
          "He was speaking in the Jim Crow South, where open demands for equality were dangerous.",
          "He had just been elected to public office in Georgia.",
          "He was writing for readers in Europe who opposed segregation."], "B")
      ]
    },
    {
      id: "indu-city-life",
      family: "INDU",
      title: "Tenements, mills and unions",
      kind: "Industry, Reform & WWI · VUS.10",
      blurb: "Census figures and city life in the age of industry.",
      level: 2,
      passage: "<table><tr><th>Year</th><th>Share of Americans living in urban areas</th></tr>" +
        "<tr><td>1870</td><td>26%</td></tr><tr><td>1890</td><td>35%</td></tr><tr><td>1910</td><td>46%</td></tr><tr><td>1920</td><td>51%</td></tr></table>" +
        "<p class=\"src\">— U.S. Census Bureau (rounded)</p>" +
        "<p>" + N(1) + "Many city families crowded into <strong>tenements</strong>, cheap apartment buildings with little light or fresh air. " + N(2) + "Workers, including children, often labored ten to twelve hours a day, six days a week. " + N(3) + "In 1911 a fire at the Triangle Shirtwaist Factory in New York killed 146 workers, most of them young immigrant women trapped behind locked doors. " + N(4) + "Workers formed unions such as the American Federation of Labor, led by Samuel Gompers, to bargain for better wages, hours and safety. " + N(5) + "Over time, shorter hours gave many city dwellers leisure time for baseball, amusement parks and vaudeville shows.</p>",
      claims: [
        Q("table", "VUS.10.d", "Which conclusion about urban growth is best supported by the census table?", [
          "The share of urban Americans fell between 1870 and 1920.",
          "Most Americans already lived in cities by 1870.",
          "By 1920, a majority of Americans lived in urban areas.",
          "The urban share stayed about the same after 1890."], "C"),
        Q("vocab", "VUS.10.d", "In sentence 1, tenements most nearly means —", [
          "crowded, low-cost apartment buildings",
          "factories that made clothing",
          "settlement houses run by reformers",
          "farms on the edge of a city"], "A"),
        Q("afl", "VUS.10.d", "The main goal of unions such as the American Federation of Labor was to —", [
          "replace private factories with government-owned industries",
          "win better wages, shorter hours and safer conditions for workers",
          "keep immigrants from working in American factories",
          "help factory owners train workers on new machines"], "B"),
        Q("triangle", "VUS.10.e", "The Triangle Shirtwaist fire most directly led to —", [
          "the end of immigration from southern Europe",
          "the first transcontinental railroad",
          "the breakup of Standard Oil",
          "new state laws on factory safety and working conditions"], "D"),
        Q("immigrant", "VUS.10.b", "Sentence 3 best illustrates which challenge many immigrants faced after they arrived?", [
          "being turned away at Ellis Island",
          "dangerous jobs with few legal protections",
          "being barred from living in cities",
          "losing the right to practice their religion"], "B"),
        Q("leisure", "VUS.10.d", "Sentence 5 describes which social effect of industrialization?", [
          "a decline in the number of city dwellers",
          "the end of child labor in factories",
          "new forms of leisure and entertainment",
          "a return to farming as the main way of life"], "C")
      ]
    },
    {
      id: "indu-land-grant",
      family: "INDU",
      title: "Colleges for a changing nation",
      kind: "Industry, Reform & WWI · VUS.10",
      blurb: "Land-grant colleges, HBCUs and public schools in Virginia.",
      level: 2,
      passage: "<p>" + N(1) + "In 1862 Congress passed the Morrill Act, which gave each state federal land to sell to fund colleges teaching agriculture and the mechanic arts, or engineering. " + N(2) + "These <strong>land-grant</strong> colleges spread scientific farming methods and technical skills. " + N(3) + "In Virginia, the land-grant college founded at Blacksburg in 1872 became Virginia Tech. " + N(4) + "Because Southern states barred Black students from these colleges, a second Morrill Act in 1890 required states to admit students without regard to race or to fund separate colleges for Black students. " + N(5) + "Virginia State in Petersburg, founded in 1882 by a Readjuster-led legislature, later became Virginia's land-grant college for Black students. " + N(6) + "Private historically Black colleges and universities (HBCUs), such as Hampton Institute and Virginia Union, trained teachers, nurses and skilled tradespeople. " + N(7) + "Virginia also opened public schools to train teachers, including the one at Harrisonburg that became James Madison University.</p>",
      claims: [
        Q("vocab", "VUS.10.h", "In sentence 2, land-grant colleges are best described as schools that —", [
          "were funded by selling federal land and taught farming and engineering",
          "gave free land to graduates who moved to the West",
          "trained lawyers to settle disputes over land titles",
          "were built only on former plantation land in the South"], "A"),
        Q("purpose", "VUS.10.h", "The main purpose of the Morrill Act of 1862 was to —", [
          "end racial segregation in Southern colleges and universities",
          "pay for building a transcontinental railroad to the Pacific",
          "expand practical higher education in agriculture and technology",
          "train new officers to lead the Union army in the Civil War"], "C"),
        Q("segregated", "VUS.10.g", "Sentence 4 shows that higher education in the South at this time was —", [
          "open to all students regardless of race",
          "segregated by race under Jim Crow",
          "paid for entirely by private churches",
          "limited to students from wealthy families"], "B"),
        Q("economy", "VUS.10.c", "Land-grant colleges most helped the American economy by —", [
          "lowering the tariffs charged on imported farm machinery",
          "replacing large factories with small family farms",
          "training factory workers to organize labor unions",
          "spreading scientific methods that made farms more productive"], "D"),
        Q("hbcu", "VUS.10.h", "Which of these Virginia schools is a private HBCU named in the passage?", [
          "Virginia Tech",
          "James Madison University",
          "the University of Virginia",
          "Hampton Institute"], "D"),
        Q("conclusion", "VUS.10.h", "Which conclusion is best supported by the passage as a whole?", [
          "Only private colleges trained teachers in Virginia before 1920.",
          "Public, land-grant and historically Black colleges all widened educational opportunity in Virginia.",
          "The federal government stopped funding colleges after the second Morrill Act.",
          "Virginia's colleges taught mainly the classics rather than practical skills."], "B")
      ]
    },
    {
      id: "indu-splendid-war",
      family: "INDU",
      title: "Remember the Maine",
      kind: "Industry, Reform & WWI · VUS.11",
      blurb: "The Spanish-American War and a new role in the world.",
      level: 2,
      passage: "<p>" + N(1) + "In the 1890s Cubans were fighting for independence from Spain, and newspapers owned by William Randolph Hearst and Joseph Pulitzer printed exaggerated stories of Spanish cruelty, a style called <strong>yellow journalism</strong>. " + N(2) + "In February 1898 the battleship USS Maine exploded in Havana Harbor, killing more than 260 American sailors. " + N(3) + "Many Americans blamed Spain, and Congress declared war in April. " + N(4) + "Theodore Roosevelt's Rough Riders fought at San Juan Hill in Cuba, and the U.S. Navy destroyed a Spanish fleet at Manila Bay in the Philippines. " + N(5) + "In the peace treaty, Spain gave up Puerto Rico, Guam and the Philippines to the United States, and Cuba became independent under strong American influence. " + N(6) + "A cartoon from 1899 (described) shows Uncle Sam standing astride a globe, one foot in the Caribbean and one in the Pacific.</p>",
      claims: [
        Q("vocab", "VUS.11.a", "In sentence 1, yellow journalism most nearly means —", [
          "careful reporting based on official records",
          "news printed in foreign languages for immigrants",
          "sensational reporting meant to stir up readers' emotions",
          "articles written by soldiers serving overseas"], "C"),
        Q("cause", "VUS.11.a", "Which TWO factors helped lead the United States into war with Spain in 1898? Select TWO.", [
          "the explosion of the USS Maine in Havana Harbor",
          "Spain's attack on the Panama Canal",
          "American sympathy for Cubans fighting for independence",
          "the Zimmermann Telegram"], ["A", "C"]),
        Q("markets", "VUS.10.c", "Many American business leaders supported expansion overseas in the 1890s mainly because they wanted —", [
          "places to send unemployed factory workers",
          "new markets for American factory and farm goods",
          "colonies that would grow cotton for Southern mills",
          "to end trade with European nations"], "B"),
        Q("cartoon", "VUS.11.a", "The cartoon described in sentence 6 most likely expresses the idea that —", [
          "the nation was returning to a policy of isolation",
          "Spain had become the strongest power in the world",
          "Americans opposed sending troops to Cuba",
          "the United States had become a power reaching across two oceans"], "D"),
        Q("opendoor", "VUS.11.a", "The Open Door policy of 1899 was intended to —", [
          "allow unlimited immigration from China",
          "keep trade with China open to all nations",
          "give the United States control of Chinese ports",
          "end the war in the Philippines"], "B"),
        Q("corollary", "VUS.11.b", "The Roosevelt Corollary to the Monroe Doctrine stated that the United States would —", [
          "act as a police power in Latin America to keep European nations out",
          "buy colonies from European powers in Africa and Asia",
          "never send troops to another nation in the Western Hemisphere",
          "share control of the Panama Canal with Great Britain"], "A")
      ]
    },

    /* ---------- long ---------- */
    {
      id: "indu-fourteen-points",
      family: "INDU",
      title: "Wilson's peace and the Senate",
      kind: "Industry, Reform & WWI · VUS.11",
      blurb: "The Fourteen Points, the Treaty of Versailles and the League debate.",
      level: 3,
      passage: "<p>" + N(1) + "In January 1918, President Woodrow Wilson, a Virginian born in Staunton, presented his plan for a lasting peace, the <strong>Fourteen Points</strong>. " + N(2) + "He called for freedom of the seas, lower trade barriers, smaller armies and self-determination, the right of peoples to choose their own government. " + N(3) + "Two of the points read:</p>" +
        "<blockquote>I. Open covenants of peace, openly arrived at, after which there shall be no private international understandings of any kind but diplomacy shall proceed always frankly and in the public view. … XIV. A general association of nations must be formed under specific covenants for the purpose of affording mutual guarantees of political independence and territorial integrity to great and small states alike.</blockquote>" +
        "<p class=\"src\">— Woodrow Wilson, address to Congress, January 8, 1918</p>" +
        "<p>" + N(4) + "The Treaty of Versailles (1919) was much harsher. " + N(5) + "Germany had to accept blame for the war, pay huge <strong>reparations</strong>, give up its colonies and some of its land, and limit its army to 100,000 men. " + N(6) + "The treaty also created the League of Nations. " + N(7) + "In the Senate, Henry Cabot Lodge and others objected to Article X of the League's covenant, which they feared could draw the nation into foreign wars without a vote of Congress. " + N(8) + "Wilson refused to accept their changes, and the Senate never ratified the treaty.</p>",
      claims: [
        Q("pointone", "VUS.11.d", "Point I of the excerpt opposes —", [
          "trade between the warring nations",
          "secret agreements between nations",
          "the use of submarines in war",
          "independence for small nations"], "B"),
        Q("pointfourteen", "VUS.11.d", "Point XIV led most directly to the creation of —", [
          "the League of Nations",
          "the United Nations",
          "the Allied Powers",
          "the Selective Service System"], "A"),
        Q("vocab", "VUS.11.e", "In sentence 5, reparations most nearly means —", [
          "apologies made in public by national leaders",
          "repairs to damaged ships and railroads",
          "loans made to Germany by the Allies",
          "payments for damages caused by the war"], "D"),
        Q("compare", "VUS.11.e", "Which statement best compares Wilson's plan with the Treaty of Versailles?", [
          "The treaty followed every one of the Fourteen Points.",
          "Both rejected the idea of an international organization.",
          "The treaty punished Germany more harshly than Wilson had proposed.",
          "Wilson's plan demanded larger reparations than the treaty did."], "C"),
        Q("lodge", "VUS.11.e", "Lodge and his allies objected to the League mainly because they believed it —", [
          "could commit the United States to wars without the approval of Congress",
          "would force the United States to pay Germany's reparations",
          "gave the United States too little power over its former colonies",
          "would end the Monroe Doctrine by banning trade with Latin America"], "A"),
        Q("isolation", "VUS.11.c", "The Senate's refusal to ratify the treaty suggests that many Americans in 1919 —", [
          "wanted the United States to take over Germany's colonies",
          "believed Germany had been treated too harshly at Paris",
          "wanted a larger army to enforce the Treaty of Versailles",
          "still hoped to avoid permanent commitments in world affairs"], "D")
      ]
    },
    {
      id: "indu-jim-crow",
      family: "INDU",
      title: "Jim Crow and the fight against it",
      kind: "Industry, Reform & WWI · VUS.10",
      blurb: "Segregation, disfranchisement, racial terror and Buck v. Bell.",
      level: 3,
      passage: "<p>" + N(1) + "After Reconstruction, Southern states passed <strong>Jim Crow</strong> laws that segregated schools, trains, restaurants and other public places. " + N(2) + "In Plessy v. Ferguson (1896), the Supreme Court ruled that separate facilities were constitutional if they were equal, though facilities for Black Americans rarely were. " + N(3) + "Virginia's Constitution of 1902, put into effect without a vote of the people, required a poll tax and a test of a voter's understanding of the constitution. " + N(4) + "The number of Black voters in Virginia fell sharply, and many poor white voters were also removed from the rolls. " + N(5) + "Racial terror enforced this system: thousands of African Americans were lynched, or murdered by mobs without a trial, and race riots such as the 1906 Atlanta riot destroyed Black lives and property. " + N(6) + "The journalist Ida B. Wells-Barnett investigated lynchings, showed that many victims had been killed for economic success or for challenging white control, and campaigned for anti-lynching laws. " + N(7) + "The false science of <strong>eugenics</strong> was also used to justify discrimination. " + N(8) + "In Buck v. Bell (1927), the Supreme Court upheld a Virginia law allowing the state to sterilize Carrie Buck and others it labeled unfit, and thousands of Virginians were later sterilized under that law.</p>",
      claims: [
        Q("vocab", "VUS.10.g", "In sentence 1, Jim Crow laws are best described as laws that —", [
          "required racial segregation in public places",
          "protected the voting rights of freedmen",
          "limited the working hours of children",
          "set aside land for formerly enslaved people"], "A"),
        Q("plessy", "VUS.10.g", "The ruling in Plessy v. Ferguson allowed states to —", [
          "deny citizenship to formerly enslaved people",
          "segregate public facilities under the idea of separate but equal",
          "end public schools for all children",
          "ban African Americans from serving in the military"], "B"),
        Q("voting", "VUS.10.g", "What do sentences 3 and 4 suggest about the 1902 Constitution?", [
          "It greatly increased voter turnout across Virginia.",
          "It applied its poll tax only to voters in cities.",
          "It shrank the electorate, especially the number of Black voters.",
          "It was approved by Virginia voters by a wide margin."], "C"),
        Q("byrd", "VUS.10.f", "The small electorate created by the 1902 Constitution later helped which organization dominate Virginia politics?", [
          "the Readjuster Party",
          "the Populist Party",
          "the Niagara Movement",
          "the Byrd machine"], "D"),
        Q("wells", "VUS.10.g", "Ida B. Wells-Barnett is best known for —", [
          "founding Tuskegee Institute",
          "arguing the Plessy v. Ferguson case",
          "leading a crusade against lynching",
          "serving as governor of Virginia"], "C"),
        Q("progressive", "VUS.10.e", "Which statement best describes a limit of the Progressive Movement shown by this passage?", [
          "Its reforms did little to protect Black Southerners from segregation or disfranchisement.",
          "Progressives refused to pass any reform laws at the state level of government.",
          "Progressives focused mostly on foreign policy and ignored problems at home.",
          "Progressive reforms quickly ended the poll tax in every Southern state."], "A")
      ]
    },
    {
      id: "indu-doughboys",
      family: "INDU",
      title: "Over there and over here",
      kind: "Industry, Reform & WWI · VUS.11",
      blurb: "American soldiers in France, the home front and Virginia in World War I.",
      level: 2,
      passage: "<p>" + N(1) + "For more than a century, the United States had mostly avoided alliances and wars in Europe, a policy often called <strong>isolationism</strong>. " + N(2) + "When the nation entered World War I in April 1917, its army was small, so Congress passed the Selective Service Act to <strong>draft</strong> young men. " + N(3) + "About two million soldiers of the American Expeditionary Forces, led by General John J. Pershing, reached France by late 1918. " + N(4) + "Fresh American troops helped stop Germany's last great offensive and fought in the Meuse-Argonne campaign. " + N(5) + "African Americans served in segregated units; the 369th Infantry, the Harlem Hellfighters, fought under French command and spent more time in combat than almost any other American unit. " + N(6) + "At home, the government sold Liberty Bonds and passed the Espionage and Sedition Acts, which punished criticism of the war. " + N(7) + "Virginia's Hampton Roads grew into a major naval and shipbuilding center, and Camp Lee near Petersburg trained tens of thousands of soldiers. " + N(8) + "After the armistice of November 11, 1918, Wilson sailed to Paris to help write the peace.</p>",
      claims: [
        Q("vocab", "VUS.11.d", "In sentence 2, the word draft most nearly means —", [
          "to write a first version of a law",
          "to require people to serve in the military",
          "to pay volunteers a bonus for enlisting",
          "to train officers at a military school"], "B"),
        Q("isolation", "VUS.11.c", "Based on sentence 1, entering World War I marked a change because the United States —", [
          "had already fought in several European wars that century",
          "had a large standing army ready for war in 1917",
          "was breaking with its tradition of staying out of European conflicts",
          "had signed a military alliance with Germany"], "C"),
        Q("hellfighters", "VUS.11.d", "Sentence 5 supports which conclusion about African American soldiers in World War I?", [
          "They served with distinction even though the army kept them in segregated units.",
          "They were not allowed to serve overseas during the war.",
          "They fought only in the Pacific against Japan.",
          "They served in integrated units commanded by Pershing."], "A"),
        Q("speech", "VUS.11.d", "Critics of the Espionage and Sedition Acts argued that the laws —", [
          "raised taxes too high to pay for the costs of the war",
          "drafted too many skilled workers away from war factories",
          "gave the states too much power over the national army",
          "limited the freedom of speech protected by the Constitution"], "D"),
        Q("virginia", "VUS.11.d", "According to sentence 7, the war affected Virginia mainly by —", [
          "closing its ports to all foreign shipping",
          "expanding its military bases and shipbuilding",
          "moving the state capital away from the coast",
          "ending the use of railroads in the state"], "B"),
        Q("paris", "VUS.11.e", "Wilson went to Paris after the armistice mainly to —", [
          "lead American troops in a final campaign",
          "sign a separate peace with Germany",
          "press for his Fourteen Points and a League of Nations",
          "ask France to repay its war loans"], "C")
      ]
    }
  ];

  for (var i = 0; i < PACKS.length; i++) P.push(PACKS[i]);
})(typeof window !== "undefined" ? window : global);
