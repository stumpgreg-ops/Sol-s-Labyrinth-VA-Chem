/* SOL Lab — Virginia and United States Government (Virginia 2023 History and Social Science SOL, grade 12).
   The course definition js/content.js reads: units, the standards map (GOVT.1–GOVT.14), the skill cards per unit and
   the progress-code tag. The packs live in the other files of this folder (one per unit). */
(function (global) {
  global.HEIST_COURSE = {
    tag: "GOVT",
    prefix: "GOVT",
    title: "Virginia & United States Government",
    name: "Virginia & U.S. Government",
    short: "VA & US Government",
    grade: "Grade 12",
    kicker: "Virginia & U.S. Government SOL · 100 levels",
    source: "sources",
    families: [
      { id: "ALL", label: "Full review", short: "Full review", kind: "All units", meta: "Every unit mixed, leaning toward the standards you miss most. Best in the last weeks before the final.", stds: ["GOVT.1", "GOVT.2", "GOVT.3", "GOVT.4", "GOVT.5", "GOVT.6", "GOVT.7", "GOVT.8", "GOVT.9", "GOVT.10", "GOVT.11", "GOVT.12", "GOVT.13", "GOVT.14"] },
      { id: "FOUN", label: "Foundations of Government", short: "Foundations", kind: "GOVT.1–2", meta: "Athens and Rome, Magna Carta, the Virginia Company charters, Enlightenment thinkers, founding documents and the principles of democracy.", stds: ["GOVT.1", "GOVT.2"] },
      { id: "CONS", label: "The Constitution & American Values", short: "Constitution", kind: "GOVT.3–4", meta: "The Federalist Papers, the Preamble, Articles I–III, federalism, checks and balances, amendments, Tocqueville and the national mottos.", stds: ["GOVT.3", "GOVT.4"] },
      { id: "CITZ", label: "Citizenship & Elections", short: "Citizens & Elections", kind: "GOVT.5–6", meta: "Paths to citizenship, duties and responsibilities, voting rights, campaigns and money, parties, media, the Electoral College and redistricting.", stds: ["GOVT.5", "GOVT.6"] },
      { id: "FED", label: "The Federal Government", short: "Three Branches", kind: "GOVT.7–9", meta: "Congress and how a bill becomes law, the presidency and the bureaucracy, the federal courts, Marbury v. Madison and judicial philosophies.", stds: ["GOVT.7", "GOVT.8", "GOVT.9"] },
      { id: "VAGOV", label: "Virginia & Local Government", short: "Virginia Government", kind: "GOVT.10", meta: "The General Assembly, the governor and the courts of Virginia, counties, cities and towns, regional authorities and citizen influence.", stds: ["GOVT.10"] },
      { id: "RGTS", label: "Civil Liberties & Civil Rights", short: "Liberties & Rights", kind: "GOVT.11", meta: "The First Amendment, due process and the rights of the accused, selective incorporation, and liberty balanced with the public interest.", stds: ["GOVT.11"] },
      { id: "ECON", label: "Foreign Policy & the Economy", short: "World & Economy", kind: "GOVT.12–14", meta: "Foreign policy and national security, economic systems and thinkers, markets, taxes, fiscal and monetary policy, and trade-offs.", stds: ["GOVT.12", "GOVT.13", "GOVT.14"] }
    ],
    standards: {
      "GOVT.1": { name: "Foundations of American constitutional government", keys: {
        a: "Athenian democracy and the Roman Republic",
        b: "Magna Carta, Virginia Company charters, Enlightenment thinkers, the Great Awakening, English Bill of Rights",
        c: "principles of the Virginia Constitution, the Declaration, the Articles and the Constitution",
        d: "Mason's Declaration of Rights, Jefferson's Statute for Religious Freedom and Madison's Bill of Rights" } },
      "GOVT.2": { name: "The concept of democracy", keys: {
        a: "popular sovereignty, natural rights, rule of law, self-government, consent of the governed",
        b: "structures of government",
        c: "equality of all citizens under the law",
        d: "majority rule and minority rights",
        e: "the necessity of compromise",
        f: "the freedom of the individual" } },
      "GOVT.3": { name: "The Constitutions and the Bill of Rights", keys: {
        a: "ratification debates and the Federalist Papers",
        b: "the purposes in the Preamble",
        c: "Articles I, II and III",
        d: "state and national powers",
        e: "checks and balances and separation of powers",
        f: "the Bill of Rights and natural rights",
        g: "the amendment process" } },
      "GOVT.4": { name: "The foundation of the American republic", keys: {
        a: "Tocqueville's five values",
        b: "E Pluribus Unum and In God We Trust",
        c: "power from the people and the primacy of individual liberty",
        d: "the American Creed",
        e: "how the Constitution and Bill of Rights protect freedom and limit government" } },
      "GOVT.5": { name: "Rights and responsibilities of citizenship", keys: {
        a: "paths to citizenship",
        b: "obeying the law and paying taxes",
        c: "serving as a juror",
        d: "participating in politics and voting",
        e: "performing public service",
        f: "keeping informed",
        g: "personal and fiscal responsibility",
        h: "the voluntary military and Selective Service" } },
      "GOVT.6": { name: "Elections", keys: {
        a: "extending the right to vote",
        b: "campaign finance and interest groups",
        c: "nominations, elections and political parties",
        d: "media, advertising, polls and social media",
        e: "the Electoral College and reapportionment",
        f: "redistricting and gerrymandering" } },
      "GOVT.7": { name: "The legislative branch", keys: {
        a: "structure of Congress and election of its members",
        b: "how Congress's power has changed",
        c: "how Congress's processes reflect democratic principles" } },
      "GOVT.8": { name: "The executive branch", keys: {
        a: "structure and organization of the executive branch",
        b: "how presidential power has changed: the 20th, 22nd and 25th Amendments",
        c: "executive and legislative processes compared" } },
      "GOVT.9": { name: "The federal judiciary", keys: {
        a: "organization, jurisdiction and proceedings of federal courts",
        b: "the Marshall Court and Marbury v. Madison",
        c: "how the Supreme Court decides cases",
        d: "originalism, pragmatism, activism and restraint" } },
      "GOVT.10": { name: "Virginia state and local government", keys: {
        a: "Virginia's legislative, executive and judicial branches",
        b: "law-making at the state and local levels",
        c: "counties, cities and towns",
        d: "state and local relations and regional authorities",
        e: "partisan and nonpartisan offices",
        f: "how individuals and groups influence state and local government" } },
      "GOVT.11": { name: "Civil liberties and civil rights", keys: {
        a: "civil rights and civil liberties",
        b: "the Bill of Rights and First Amendment freedoms",
        c: "rights of the accused and due process",
        d: "selective incorporation",
        e: "individual liberty and the public interest",
        f: "protecting civil liberties and civil rights under the law" } },
      "GOVT.12": { name: "The United States in a changing world", keys: {
        a: "federal responsibility for foreign policy and national security",
        b: "national interest, foreign policy and world peace",
        c: "Virginia and the U.S. in the global economy" } },
      "GOVT.13": { name: "Economic and political systems", keys: {
        a: "capitalism, communism, socialism, fascism, authoritarianism, totalitarianism",
        b: "Smith, Marx, Keynes, Hayek, Friedman and Sowell",
        c: "capitalism and socialism compared",
        d: "the Bill of Rights and the Communist Manifesto",
        e: "production and distribution in a market system",
        f: "competition and free enterprise" } },
      "GOVT.14": { name: "Government and the economy", keys: {
        a: "government's limited role in free enterprise",
        b: "public goods and services",
        c: "rules for markets: property, contracts, consumers, labor, environment, competition",
        d: "types and purposes of taxes",
        e: "fiscal policy",
        f: "the Federal Reserve and monetary policy",
        g: "trade-offs in government decisions" } }
    },
    skills: {
      FOUN: [
        { strand: "GOVT.1.A", kind: "GOVT.1 a · b", name: "Roots of self-government", meta: "Athens and Rome, Magna Carta, the Virginia Company charters, Locke, Hobbes, Rousseau and the English Bill of Rights." },
        { strand: "GOVT.1.C", kind: "GOVT.1 c · d", name: "Founding documents", meta: "The Declaration, the Articles, the Constitution, Mason, Jefferson and Madison." },
        { strand: "GOVT.2.A", kind: "GOVT.2 a · b", name: "Democratic principles & structures", meta: "Popular sovereignty, natural rights, rule of law; republics, autocracies, presidential and parliamentary systems." },
        { strand: "GOVT.2.C", kind: "GOVT.2 c–f", name: "Equality, majority & compromise", meta: "Equality under law, majority rule and minority rights, compromise and individual freedom." }
      ],
      CONS: [
        { strand: "GOVT.3.A", kind: "GOVT.3 a · b", name: "Ratification & the Preamble", meta: "Federalists and Anti-Federalists, Federalist No. 10 and No. 51, and the six purposes of government." },
        { strand: "GOVT.3.C", kind: "GOVT.3 c · e", name: "Three branches", meta: "Articles I, II and III, separation of powers and checks and balances." },
        { strand: "GOVT.3.D", kind: "GOVT.3 d · f · g", name: "Federalism, rights & amendments", meta: "Delegated, reserved and concurrent powers, the Bill of Rights and how the Constitution is amended." },
        { strand: "GOVT.4", kind: "GOVT.4 a–e", name: "American values", meta: "Tocqueville, E Pluribus Unum, In God We Trust, the American Creed and limited government." }
      ],
      CITZ: [
        { strand: "GOVT.5.A", kind: "GOVT.5 a–d", name: "Citizenship & duties", meta: "Birth and naturalization, obeying laws, paying taxes, jury duty and voting." },
        { strand: "GOVT.5.E", kind: "GOVT.5 e–h", name: "Responsible citizens", meta: "Public service, staying informed, fiscal responsibility, the volunteer military and Selective Service." },
        { strand: "GOVT.6.A", kind: "GOVT.6 a · c", name: "Voting & the election process", meta: "Suffrage amendments and the Voting Rights Act, primaries, conventions, parties and third parties." },
        { strand: "GOVT.6.B", kind: "GOVT.6 b · d", name: "Money, media & opinion", meta: "Campaign finance, PACs, Citizens United, interest groups, polls, ads and social media." },
        { strand: "GOVT.6.E", kind: "GOVT.6 e · f", name: "Electoral College & districts", meta: "Electors, the census, reapportionment, redistricting and gerrymandering." }
      ],
      FED: [
        { strand: "GOVT.7", kind: "GOVT.7 a–c", name: "Congress", meta: "House and Senate, terms and qualifications, committees, how a bill becomes law, expressed and implied powers." },
        { strand: "GOVT.8", kind: "GOVT.8 a–c", name: "The presidency", meta: "Roles of the president, the cabinet and agencies, executive orders, vetoes and the 20th, 22nd and 25th Amendments." },
        { strand: "GOVT.9.A", kind: "GOVT.9 a · b", name: "Federal courts", meta: "District courts, courts of appeals, the Supreme Court, jurisdiction and Marbury v. Madison." },
        { strand: "GOVT.9.C", kind: "GOVT.9 c · d", name: "How the Court decides", meta: "Writs of certiorari, briefs, oral argument, opinions, precedent and judicial philosophies." }
      ],
      VAGOV: [
        { strand: "GOVT.10.A", kind: "GOVT.10 a · b", name: "Virginia's branches & laws", meta: "The General Assembly, the governor, the Supreme Court of Virginia and how state and local laws are made." },
        { strand: "GOVT.10.C", kind: "GOVT.10 c · d", name: "Local governments", meta: "Counties, independent cities and towns, the Dillon Rule, boards and regional authorities." },
        { strand: "GOVT.10.E", kind: "GOVT.10 e · f", name: "Offices & influence", meta: "Partisan and nonpartisan offices, lobbying, public hearings, petitions and citizen action." }
      ],
      RGTS: [
        { strand: "GOVT.11.A", kind: "GOVT.11 a · b", name: "Liberties & the First Amendment", meta: "Civil rights vs. civil liberties; religion, speech, press, assembly and petition." },
        { strand: "GOVT.11.C", kind: "GOVT.11 c · d", name: "Due process & incorporation", meta: "The 4th, 5th, 6th and 8th Amendments, the 14th Amendment, Gideon, Miranda and selective incorporation." },
        { strand: "GOVT.11.E", kind: "GOVT.11 e · f", name: "Liberty & the public interest", meta: "Limits on rights, landmark cases, and laws that protect civil rights." }
      ],
      ECON: [
        { strand: "GOVT.12", kind: "GOVT.12 a–c", name: "Foreign policy", meta: "Who makes foreign policy, national interest, alliances, treaties and Virginia's global trade." },
        { strand: "GOVT.13.A", kind: "GOVT.13 a–d", name: "Economic & political systems", meta: "Capitalism, socialism, communism, fascism; Smith, Marx, Keynes, Hayek, Friedman and Sowell." },
        { strand: "GOVT.13.E", kind: "GOVT.13 e · f", name: "Markets & competition", meta: "Supply and demand, prices, profit, competition and free enterprise." },
        { strand: "GOVT.14.A", kind: "GOVT.14 a–d", name: "Government in the economy", meta: "Public goods, property rights and regulation, and the taxes that pay for services." },
        { strand: "GOVT.14.E", kind: "GOVT.14 e · f · g", name: "Fiscal & monetary policy", meta: "Taxing and spending, the Federal Reserve, interest rates, inflation and trade-offs." }
      ]
    },
    aliases: {
      "GOVT.1.A": ["GOVT.1.B"], "GOVT.1.C": ["GOVT.1.D"], "GOVT.2.A": ["GOVT.2.B"], "GOVT.2.C": ["GOVT.2.D", "GOVT.2.E", "GOVT.2.F"],
      "GOVT.3.A": ["GOVT.3.B"], "GOVT.3.C": ["GOVT.3.E"], "GOVT.3.D": ["GOVT.3.F", "GOVT.3.G"],
      "GOVT.5.A": ["GOVT.5.B", "GOVT.5.C", "GOVT.5.D"], "GOVT.5.E": ["GOVT.5.F", "GOVT.5.G", "GOVT.5.H"],
      "GOVT.6.A": ["GOVT.6.C"], "GOVT.6.B": ["GOVT.6.D"], "GOVT.6.E": ["GOVT.6.F"],
      "GOVT.9.A": ["GOVT.9.B"], "GOVT.9.C": ["GOVT.9.D"],
      "GOVT.10.A": ["GOVT.10.B"], "GOVT.10.C": ["GOVT.10.D"], "GOVT.10.E": ["GOVT.10.F"],
      "GOVT.11.A": ["GOVT.11.B"], "GOVT.11.C": ["GOVT.11.D"], "GOVT.11.E": ["GOVT.11.F"],
      "GOVT.13.A": ["GOVT.13.B", "GOVT.13.C", "GOVT.13.D"], "GOVT.13.E": ["GOVT.13.F"],
      "GOVT.14.A": ["GOVT.14.B", "GOVT.14.C", "GOVT.14.D"], "GOVT.14.E": ["GOVT.14.F", "GOVT.14.G"]
    }
  };
})(typeof window !== "undefined" ? window : global);
