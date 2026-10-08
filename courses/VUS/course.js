/* SOL Lab — Virginia and United States History (Virginia 2023 History and Social Science SOL, grade 11).
   The course definition js/content.js reads: units, the standards map (VUS.1–VUS.17), the skill cards per unit and
   the progress-code tag. The packs live in the other files of this folder (one per unit). */
(function (global) {
  global.HEIST_COURSE = {
    tag: "VUS",
    prefix: "VUS",
    title: "Virginia & United States History",
    name: "Virginia & U.S. History",
    short: "VA & US History",
    grade: "Grade 11",
    kicker: "Virginia & U.S. History SOL · 100 levels",
    source: "sources",
    families: [
      { id: "ALL", label: "Full review", short: "Full review", kind: "All units", meta: "Every unit mixed, leaning toward the standards you miss most. Best in the last weeks before the test.", stds: ["VUS.1", "VUS.2", "VUS.3", "VUS.4", "VUS.5", "VUS.6", "VUS.7", "VUS.8", "VUS.9", "VUS.10", "VUS.11", "VUS.12", "VUS.13", "VUS.14", "VUS.15", "VUS.16", "VUS.17"] },
      { id: "COLO", label: "Early America & the Colonies", short: "Colonies", kind: "VUS.1–4", meta: "Indigenous nations, explorers, the thirteen colonies, the Great Awakening, slavery and African American culture, Bacon's Rebellion.", stds: ["VUS.1", "VUS.2", "VUS.3", "VUS.4"] },
      { id: "REVO", label: "Revolution & the Constitution", short: "Revolution", kind: "VUS.5–6", meta: "The French and Indian War, the road to revolution, the Declaration, the Articles, the Constitution, the Bill of Rights, Marbury v. Madison.", stds: ["VUS.5", "VUS.6"] },
      { id: "CIVW", label: "Expansion, Civil War & Reconstruction", short: "Civil War", kind: "VUS.7–9", meta: "The War of 1812, Jackson, the Trail of Tears, Manifest Destiny, abolition, the compromises, the Civil War, Reconstruction and the Readjusters.", stds: ["VUS.7", "VUS.8", "VUS.9"] },
      { id: "INDU", label: "Industry, Reform & World War I", short: "Industry & WWI", kind: "VUS.10–11", meta: "The West, immigration, industry and labor, the Progressives, Jim Crow, the Byrd machine, the Spanish-American War and World War I.", stds: ["VUS.10", "VUS.11"] },
      { id: "WAR2", label: "The 1920s, Depression & World War II", short: "1920s–WWII", kind: "VUS.12–14", meta: "The Red Scare, the Roaring 20s, the Harlem Renaissance, the Great Depression and New Deal, World War II at home and abroad.", stds: ["VUS.12", "VUS.13", "VUS.14"] },
      { id: "CRM", label: "The Civil Rights Movement", short: "Civil Rights", kind: "VUS.16", meta: "Segregation, Brown v. Board, Massive Resistance in Virginia, Dr. King, the sit-ins, the Freedom Rides, the Civil Rights and Voting Rights Acts.", stds: ["VUS.16"] },
      { id: "MODN", label: "Cold War & Modern America", short: "Cold War & Today", kind: "VUS.15 · VUS.17", meta: "Containment, NATO, Korea, Cuba and Vietnam, the end of the Cold War, landmark laws and cases, terrorism, social movements, technology.", stds: ["VUS.15", "VUS.17"] }
    ],
    standards: {
      "VUS.1": { name: "Early North America", keys: {
        a: "Indigenous peoples of North America and their use of resources",
        b: "early explorers and the technology of navigation",
        c: "explorers and the Reconquista, Reformation and Counter-Reformation",
        d: "trade routes linking Africa, the West Indies, the colonies and Europe" } },
      "VUS.2": { name: "The thirteen colonies", keys: {
        a: "reasons for the colonies and their founders",
        b: "settlement, the Great Awakening and religious toleration",
        c: "self-government, free markets and the British, Spanish and French systems",
        d: "early democratic ideas: representative assemblies and town meetings" } },
      "VUS.3": { name: "African American culture and slavery", keys: {
        a: "cultures and skills of enslaved Africans",
        b: "the Middle Passage, the slave trade and forced labor",
        c: "the slave trade in the U.S., Virginia and Richmond",
        d: "indentured servitude, race-based slavery and the colonial economy",
        e: "cultures of the enslaved and their persistence toward freedom" } },
      "VUS.4": { name: "Indigenous people and settlers", keys: {
        a: "competition for control of North America",
        b: "cooperation between colonists and Indigenous people",
        c: "Bacon's Rebellion",
        d: "conflicts before the Revolutionary War",
        e: "conflicts among Indigenous nations over land" } },
      "VUS.5": { name: "The revolutionary period", keys: {
        a: "results of the French and Indian War",
        b: "ideas and events that led to the American Revolution",
        c: "Minutemen, Sons of Liberty, Continental Congresses, Committees of Correspondence",
        d: "the Declaration of Independence and its authors",
        e: "French alliance and colonial victory",
        f: "principles of the Declaration as unifying ideas",
        g: "future presidents in the revolutionary era" } },
      "VUS.6": { name: "The American political system", keys: {
        a: "founding documents, the Virginia Declaration of Rights and the Statute for Religious Freedom",
        b: "strengths and weaknesses of the Articles of Confederation",
        c: "compromises, ratification and the Bill of Rights",
        d: "powers of citizens, Congress, the president, the Court and the states",
        e: "debates over federal power and the first political parties",
        f: "John Marshall and Marbury v. Madison" } },
      "VUS.7": { name: "The first half of the 19th century", keys: {
        a: "Madison and the War of 1812",
        b: "broken treaties, Indian removal and the Trail of Tears",
        c: "leaders: Marshall, Jackson, Tecumseh, Logan, Ross, Sequoyah",
        d: "later U.S. policy toward Indigenous people",
        e: "territorial expansion and its effect on Indigenous people",
        f: "immigration and the Age of the Common Man",
        g: "the Texas Revolution and the Mexican-American War",
        h: "slavery, abolition and tariffs as causes of the Civil War" } },
      "VUS.8": { name: "Slavery and abolition", keys: {
        a: "slavery as the antithesis of freedom",
        b: "abolitionists: Truth, Garrison, Douglass, Stowe",
        c: "the compromises, Kansas-Nebraska, Dred Scott and emancipation",
        d: "the Thirteenth, Fourteenth and Fifteenth Amendments" } },
      "VUS.9": { name: "Civil War and Reconstruction", keys: {
        a: "events and leaders of the Civil War",
        b: "Lincoln's leadership, the Emancipation Proclamation and the Gettysburg Address",
        c: "the war's impact on Virginians, African Americans, soldiers and the home front",
        d: "Reconstruction plans",
        e: "the amendments, sharecropping, the Freedmen's Bureau and white supremacist groups",
        f: "Virginia, the Fourteenth Amendment and the 1870 Constitution",
        g: "the Readjuster Party in Virginia" } },
      "VUS.10": { name: "Reconstruction to the early 20th century", keys: {
        a: "westward movement and conflict with Indigenous nations",
        b: "immigrants: motives, contributions and challenges",
        c: "industrial growth, railroads and industrial leaders",
        d: "urbanization, working conditions and labor unions",
        e: "the Progressive Movement and its laws",
        f: "the Byrd machine in Virginia",
        g: "Jim Crow, discrimination and responses",
        h: "public colleges, HBCUs and land-grant institutions" } },
      "VUS.11": { name: "The U.S. in world affairs to World War I", keys: {
        a: "foreign policy toward Latin America and Asia",
        b: "the Roosevelt Corollary, Alaska, Hawaii and the Panama Canal",
        c: "leaving isolation to enter World War I",
        d: "U.S. involvement in World War I and the Fourteen Points",
        e: "the Treaty of Versailles and the League debate" } },
      "VUS.12": { name: "The 1920s and 1930s", keys: {
        a: "attacks on civil liberties: the Klan, riots, Tulsa, redlining",
        b: "the Bolshevik Revolution and the First Red Scare",
        c: "changes in immigration law",
        d: "Garvey, the ACLU, the NAACP and the ADL",
        e: "the Roaring 20s, innovation and popular culture",
        f: "women, Prohibition and suffrage",
        g: "the Great Migration and the Harlem Renaissance" } },
      "VUS.13": { name: "The Great Depression and New Deal", keys: {
        a: "causes of the Great Depression",
        b: "the New Deal and the government's role in the economy" } },
      "VUS.14": { name: "World War II", keys: {
        a: "totalitarianism in Japan, the USSR, Italy and Germany",
        b: "Pearl Harbor, Executive Order 9066 and Korematsu",
        c: "strategy and leaders of the Axis and Allies",
        d: "heroic and segregated units, women and Virginia units",
        e: "major battles",
        f: "the Holocaust",
        g: "island hopping, the Manhattan Project and the atomic bomb",
        h: "Allied victory, the Marshall Plan and the United Nations" } },
      "VUS.15": { name: "Cold War foreign policy", keys: {
        a: "origins of the Cold War, the Truman Doctrine and containment",
        b: "the Marshall Plan, NATO and the Warsaw Pact",
        c: "the Bay of Pigs, the Cuban Missile Crisis, Kennedy and Khrushchev",
        d: "Korea, Vietnam, China and refugees",
        e: "the end of the Cold War" } },
      "VUS.16": { name: "The Civil Rights Movement", keys: {
        a: "origins of the movement and desegregation efforts",
        b: "Brown v. Board and Massive Resistance in Virginia",
        c: "the legacy of Dr. Martin Luther King, Jr.",
        d: "key events of the movement",
        e: "the NAACP, the March on Washington and the civil rights laws",
        f: "the Black Power Movement" } },
      "VUS.17": { name: "Late 20th and early 21st centuries", keys: {
        a: "Supreme Court decisions and acts of Congress",
        b: "terrorism and the defense of democracy",
        c: "social movements",
        d: "the Civil Rights legacy and the election of Barack Obama",
        e: "science, technology and media" } }
    },
    skills: {
      COLO: [
        { strand: "VUS.1.A", kind: "VUS.1 a–d", name: "Indigenous nations & explorers", meta: "Native cultures of North America, Columbus, Coronado, Ponce de Leon, navigation and Atlantic trade routes." },
        { strand: "VUS.2.A", kind: "VUS.2 a · b", name: "Founding the colonies", meta: "Jamestown, Plymouth, Massachusetts Bay, Rhode Island, Pennsylvania, Maryland and the Great Awakening." },
        { strand: "VUS.2.C", kind: "VUS.2 c · d", name: "Colonial government & economy", meta: "The House of Burgesses, town meetings, the Mayflower Compact and colonial economies." },
        { strand: "VUS.3", kind: "VUS.3 a–e", name: "Slavery & African American culture", meta: "The Middle Passage, indentured servitude, race-based slavery, Richmond's slave trade and resistance." },
        { strand: "VUS.4", kind: "VUS.4 a–e", name: "Cooperation & conflict", meta: "European rivalry, the fur trade and alliances, Bacon's Rebellion and conflicts over land." }
      ],
      REVO: [
        { strand: "VUS.5.A", kind: "VUS.5 a · b · c", name: "Road to revolution", meta: "The French and Indian War, the Stamp Act, the Tea Party, Patrick Henry, Lexington, Common Sense." },
        { strand: "VUS.5.D", kind: "VUS.5 d · f", name: "The Declaration of Independence", meta: "Jefferson, natural rights, consent of the governed and the Declaration's legacy." },
        { strand: "VUS.5.E", kind: "VUS.5 e · g", name: "Winning the war", meta: "Saratoga, the French alliance, Yorktown, Washington and other future presidents." },
        { strand: "VUS.6.A", kind: "VUS.6 a · b · c", name: "Making the Constitution", meta: "The Articles, the Virginia Declaration of Rights, the Great Compromise, ratification and the Bill of Rights." },
        { strand: "VUS.6.D", kind: "VUS.6 d · e · f", name: "The new government", meta: "Federalism, Hamilton and Jefferson, the first parties, John Marshall and Marbury v. Madison." }
      ],
      CIVW: [
        { strand: "VUS.7.A", kind: "VUS.7 a · f · g", name: "A growing nation", meta: "The War of 1812, the Jacksonian Era, immigration, Texas and the Mexican-American War." },
        { strand: "VUS.7.B", kind: "VUS.7 b–e", name: "Indigenous nations & removal", meta: "Tecumseh, Sequoyah, John Ross, Indian removal, the Trail of Tears and later U.S. policy." },
        { strand: "VUS.7.H", kind: "VUS.7 h · VUS.8", name: "Slavery & the road to war", meta: "Abolitionists, the Missouri Compromise, the Compromise of 1850, Kansas-Nebraska and Dred Scott." },
        { strand: "VUS.9.A", kind: "VUS.9 a · b · c", name: "The Civil War", meta: "Lincoln, Davis, Grant, Lee, Douglass, the Emancipation Proclamation, Gettysburg and the home front." },
        { strand: "VUS.9.D", kind: "VUS.9 d–g", name: "Reconstruction", meta: "Reconstruction plans, the Freedmen's Bureau, sharecropping, Virginia's 1870 Constitution and the Readjusters." }
      ],
      INDU: [
        { strand: "VUS.10.A", kind: "VUS.10 a · b", name: "West & immigrants", meta: "Railroads and settlers, Little Bighorn and Wounded Knee, Ellis Island and new immigrants." },
        { strand: "VUS.10.C", kind: "VUS.10 c · d", name: "Industry & labor", meta: "Carnegie, Rockefeller, Mellon, mass production, cities, tenements and labor unions." },
        { strand: "VUS.10.E", kind: "VUS.10 e · f · h", name: "Progressives & Virginia", meta: "Muckrakers, food safety, child labor, the Byrd machine, HBCUs and land-grant colleges." },
        { strand: "VUS.10.G", kind: "VUS.10 g", name: "Jim Crow", meta: "Segregation, voting restrictions, Booker T. Washington, W.E.B. Du Bois and Ida B. Wells-Barnett." },
        { strand: "VUS.11", kind: "VUS.11 a–e", name: "A world power & World War I", meta: "The Spanish-American War, the Panama Canal, the Roosevelt Corollary, World War I and the League debate." }
      ],
      WAR2: [
        { strand: "VUS.12.A", kind: "VUS.12 a–d", name: "Fear & civil liberties", meta: "The Red Scare, the Palmer Raids, immigration quotas, the Klan, Tulsa, redlining, the NAACP and Garvey." },
        { strand: "VUS.12.E", kind: "VUS.12 e · f · g", name: "The Roaring 20s", meta: "Cars, radio and movies, the 18th and 19th Amendments, the Great Migration and the Harlem Renaissance." },
        { strand: "VUS.13", kind: "VUS.13 a · b", name: "Depression & New Deal", meta: "Buying on margin, bank failures, the Crash, FDR, relief, recovery and reform." },
        { strand: "VUS.14.A", kind: "VUS.14 a–e", name: "World War II", meta: "Dictators, Pearl Harbor, Japanese American incarceration, D-Day, Midway and the units that served." },
        { strand: "VUS.14.F", kind: "VUS.14 f · g · h", name: "Holocaust, the bomb & victory", meta: "The Holocaust, island hopping, the Manhattan Project, the Marshall Plan and the United Nations." }
      ],
      CRM: [
        { strand: "VUS.16.A", kind: "VUS.16 a", name: "Segregation & its origins", meta: "Jim Crow, Plessy, early challenges and the fight to desegregate schools and public places." },
        { strand: "VUS.16.B", kind: "VUS.16 b", name: "Brown & Massive Resistance", meta: "Barbara Johns, R.R. Moton High School, Thurgood Marshall, Oliver Hill and Virginia's response." },
        { strand: "VUS.16.C", kind: "VUS.16 c", name: "Dr. Martin Luther King, Jr.", meta: "Civil disobedience, the SCLC, the Letter from Birmingham Jail and the I Have a Dream speech." },
        { strand: "VUS.16.D", kind: "VUS.16 d", name: "Key events", meta: "Emmett Till, bus boycotts, Little Rock, Greensboro, Freedom Rides, Birmingham, Selma and Virginia events." },
        { strand: "VUS.16.E", kind: "VUS.16 e · f", name: "Laws & Black Power", meta: "The March on Washington, the Civil Rights Act of 1964, the Voting Rights Act of 1965 and Black Power." }
      ],
      MODN: [
        { strand: "VUS.15.A", kind: "VUS.15 a · b", name: "Origins of the Cold War", meta: "Containment, the Truman Doctrine, the Marshall Plan, NATO and the Warsaw Pact." },
        { strand: "VUS.15.C", kind: "VUS.15 c · d · e", name: "Cold War conflicts & its end", meta: "Korea, Cuba, Vietnam, China, refugees and how the Cold War ended." },
        { strand: "VUS.17.A", kind: "VUS.17 a", name: "Landmark laws & cases", meta: "Gideon, Miranda, Title IX, the ADA, the Highway Act, Obergefell, Roe and Dobbs." },
        { strand: "VUS.17.B", kind: "VUS.17 b · c · d", name: "Terrorism & social movements", meta: "9/11 and earlier attacks, the anti-war, women's and conservative movements, and Barack Obama." },
        { strand: "VUS.17.E", kind: "VUS.17 e", name: "Science, technology & media", meta: "Computers, the internet, space, medicine, television and their effect on American life." }
      ]
    },
    aliases: {
      "VUS.1.A": ["VUS.1.B", "VUS.1.C", "VUS.1.D"], "VUS.2.A": ["VUS.2.B"], "VUS.2.C": ["VUS.2.D"],
      "VUS.5.A": ["VUS.5.B", "VUS.5.C"], "VUS.5.D": ["VUS.5.F"], "VUS.5.E": ["VUS.5.G"],
      "VUS.6.A": ["VUS.6.B", "VUS.6.C"], "VUS.6.D": ["VUS.6.E", "VUS.6.F"],
      "VUS.7.A": ["VUS.7.F", "VUS.7.G"], "VUS.7.B": ["VUS.7.C", "VUS.7.D", "VUS.7.E"], "VUS.7.H": ["VUS.8"],
      "VUS.9.A": ["VUS.9.B", "VUS.9.C"], "VUS.9.D": ["VUS.9.E", "VUS.9.F", "VUS.9.G"],
      "VUS.10.A": ["VUS.10.B"], "VUS.10.C": ["VUS.10.D"], "VUS.10.E": ["VUS.10.F", "VUS.10.H"],
      "VUS.12.A": ["VUS.12.B", "VUS.12.C", "VUS.12.D"], "VUS.12.E": ["VUS.12.F", "VUS.12.G"],
      "VUS.14.A": ["VUS.14.B", "VUS.14.C", "VUS.14.D", "VUS.14.E"], "VUS.14.F": ["VUS.14.G", "VUS.14.H"],
      "VUS.16.E": ["VUS.16.F"],
      "VUS.15.A": ["VUS.15.B"], "VUS.15.C": ["VUS.15.D", "VUS.15.E"], "VUS.17.B": ["VUS.17.C", "VUS.17.D"]
    }
  };
})(typeof window !== "undefined" ? window : global);
