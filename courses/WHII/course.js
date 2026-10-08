/* SOL Lab — World History and Geography: 1500 A.D. to the Present (Virginia 2023 History and Social Science SOL,
   grade 10). The course definition js/content.js reads: units, the standards map (WHII.1–WHII.12), the skill cards
   per unit and the progress-code tag. The packs live in the other files of this folder (one per unit). */
(function (global) {
  global.HEIST_COURSE = {
    tag: "WHII",
    prefix: "WHII",
    title: "World History & Geography: 1500 A.D. to the Present",
    name: "Virginia World History II",
    short: "World History II",
    grade: "Grade 10",
    kicker: "Virginia World History II SOL · 100 levels",
    source: "sources",
    families: [
      { id: "ALL", label: "Full review", short: "Full review", kind: "All units", meta: "Every unit mixed, leaning toward the standards you miss most. Best in the last weeks before the test.", stds: ["WHII.1", "WHII.2", "WHII.3", "WHII.4", "WHII.5", "WHII.6", "WHII.7", "WHII.8", "WHII.9", "WHII.10", "WHII.11", "WHII.12"] },
      { id: "R1500", label: "The World in 1500, Renaissance & Reformation", short: "1500 & Reformation", kind: "WHII.1–2", meta: "States, empires, world religions and trade around 1500; Luther, Calvin, Henry VIII, Elizabeth I, the printing press and the Catholic Reformation.", stds: ["WHII.1", "WHII.2"] },
      { id: "EXPL", label: "Exploration & Colonization", short: "Exploration", kind: "WHII.3", meta: "Gold, God and glory; colonies in Africa, Asia and the Americas; the Columbian Exchange; mercantilism and rivalry for empire.", stds: ["WHII.3"] },
      { id: "REVO", label: "Age of Revolutions", short: "Revolutions", kind: "WHII.4", meta: "Wars of religion, the Scientific Revolution and Enlightenment, absolutism, the English, American, French and Latin American revolutions, Napoleon.", stds: ["WHII.4"] },
      { id: "GLOB", label: "Asia & Africa, 1500–1800", short: "Asia & Africa", kind: "WHII.5–6", meta: "Ottoman, Mughal, Ming and Qing, Tokugawa Japan; Songhai, Ethiopia, Asante, Kongo, Zulu, the Swahili coast and the slave trade.", stds: ["WHII.5", "WHII.6"] },
      { id: "INDU", label: "Industry, Imperialism & Nationalism", short: "Industry & Empire", kind: "WHII.7", meta: "The Industrial Revolutions, capital and entrepreneurs, responses to imperialism, and the unification of Italy and Germany.", stds: ["WHII.7"] },
      { id: "WARS", label: "World Wars & Depression", short: "World Wars", kind: "WHII.8–9", meta: "World War I, Versailles and the mandates, the Russian Revolution, the Depression, totalitarianism, World War II and the Holocaust.", stds: ["WHII.8", "WHII.9"] },
      { id: "COLD", label: "Cold War & the Modern World", short: "Cold War & Today", kind: "WHII.10–12", meta: "Containment and the Cold War, Asia after 1945, independence movements, genocide, terrorism, technology and global interdependence.", stds: ["WHII.10", "WHII.11", "WHII.12"] }
    ],
    standards: {
      "WHII.1": { name: "The world around 1500 A.D.", keys: {
        a: "major states and empires",
        b: "beliefs and growth of major religions",
        c: "trade patterns and cultural, technological and scientific exchange" } },
      "WHII.2": { name: "Renaissance and Protestant Reformation", keys: {
        a: "Luther, Calvin, Henry VIII and Elizabeth I",
        b: "changing values, philosophies and the printing press",
        c: "religious conflict, the Inquisition and the Catholic Reformation" } },
      "WHII.3": { name: "European exploration", keys: {
        a: "goals of European exploration and colonization",
        b: "effects of colonization and responses of Indigenous people",
        c: "competition for colonies and the change in Europe's economy" } },
      "WHII.4": { name: "Age of Revolutions", keys: {
        a: "European wars of religion and revolt",
        b: "the Scientific Revolution and the Enlightenment",
        c: "Enlightenment themes and the foundations of Virginia and the United States",
        d: "absolutism: Louis XIV and the Hapsburgs under Charles V",
        e: "constitutional monarchy in Great Britain",
        f: "the American, French and Latin American revolutions",
        g: "Napoleon and the Congress of Vienna" } },
      "WHII.5": { name: "Asia, 1500 to 1800", keys: {
        a: "the Ottoman Empire",
        b: "the Mughal Empire, India and Sikhism",
        c: "Ming and Qing China",
        d: "Tokugawa Japan and the closed-country policy" } },
      "WHII.6": { name: "Sub-Saharan Africa, 1500 to 1800", keys: {
        a: "eastern and western Africa",
        b: "Askia Muhammad I",
        c: "religion in Songhai, Ethiopia and Asante",
        d: "African empires and the Transatlantic Slave Trade",
        e: "the Swahili trade network",
        f: "Songhai, Asante, Kongo and Zulu political systems",
        g: "Christianity in Kongo and religion in the Zulu Empire",
        h: "trading partners, resources and products" } },
      "WHII.7": { name: "Europe and the world, 1800 to 1900", keys: {
        a: "resources, capital and entrepreneurship in industrialization",
        b: "the First and Second Industrial Revolutions",
        c: "responses to imperialism",
        d: "unification of Italy",
        e: "unification of Germany and Bismarck" } },
      "WHII.8": { name: "World War I and the interwar years", keys: {
        a: "causes, events and leaders of World War I",
        b: "modern warfare on the Eastern and Western Fronts",
        c: "major battles of World War I",
        d: "Treaty of Versailles, League of Nations and mandates",
        e: "the Russian Revolution",
        f: "the worldwide depression of the 1930s",
        g: "the rise of totalitarianism" } },
      "WHII.9": { name: "World War II", keys: {
        a: "causes, events and leaders of World War II",
        b: "major battles of World War II",
        c: "technology in the war",
        d: "the Holocaust",
        e: "effects of the war and the postwar world",
        f: "heroic actions: D-Day, the Resistance, Dunkirk" } },
      "WHII.10": { name: "The Cold War", keys: {
        a: "causes, containment and the domino theory",
        b: "Cold War crises and revolutions",
        c: "conflicts and leaders in Asia",
        d: "the collapse of communism and the end of the Cold War",
        e: "the breakup of the Soviet Union",
        f: "global interdependence" } },
      "WHII.11": { name: "Independence movements and decolonization", keys: {
        a: "Gandhi and the independence of India",
        b: "independence in Ghana, Algeria, Kenya and South Africa",
        c: "the end of the mandates and new states in the Middle East",
        d: "effects of decolonization" } },
      "WHII.12": { name: "Global changes, late 20th and 21st centuries", keys: {
        a: "modern genocides and crimes against humanity",
        b: "economic, political, ethnic and religious conflict and refugees",
        c: "technology, social media and biotechnology",
        d: "international terrorism",
        e: "economic interdependence and trade agreements" } }
    },
    skills: {
      R1500: [
        { strand: "WHII.1.A", kind: "WHII.1 a · c", name: "The world in 1500", meta: "Major states and empires, trade routes and the exchange of goods and ideas." },
        { strand: "WHII.1.B", kind: "WHII.1 b", name: "World religions", meta: "Judaism, Christianity, Islam, Hinduism, Buddhism and Sikhism: founders, texts and beliefs." },
        { strand: "WHII.2.A", kind: "WHII.2 a", name: "The Reformation", meta: "Luther's 95 Theses, Calvin, Henry VIII and the Church of England, Elizabeth I." },
        { strand: "WHII.2.B", kind: "WHII.2 b · c", name: "Printing press & Catholic Reformation", meta: "Gutenberg, the spread of ideas, the Council of Trent, the Jesuits and the Inquisition." }
      ],
      EXPL: [
        { strand: "WHII.3.A", kind: "WHII.3 a", name: "Why Europe explored", meta: "God, gold and glory; new technology; Portugal, Spain, England, France and the Netherlands." },
        { strand: "WHII.3.B", kind: "WHII.3 b", name: "Effects of colonization", meta: "The Columbian Exchange, disease, the encomienda system and Indigenous responses." },
        { strand: "WHII.3.C", kind: "WHII.3 c", name: "Mercantilism & rivalry", meta: "Mercantilism, joint-stock companies, the triangular trade and competition for colonies." }
      ],
      REVO: [
        { strand: "WHII.4.A", kind: "WHII.4 a · d", name: "Religious wars & absolutism", meta: "Thirty Years' War, the Dutch Revolt, Louis XIV, divine right, Charles V and the Hapsburgs." },
        { strand: "WHII.4.B", kind: "WHII.4 b · c", name: "Scientific Revolution & Enlightenment", meta: "Newton, Descartes, Locke, Montesquieu, Rousseau, Voltaire and their influence on Virginia and the U.S." },
        { strand: "WHII.4.E", kind: "WHII.4 e", name: "Constitutional monarchy", meta: "The English Civil War, the Glorious Revolution and the English Bill of Rights." },
        { strand: "WHII.4.F", kind: "WHII.4 f · g", name: "Revolutions & Napoleon", meta: "The American, French and Latin American revolutions; Napoleon and the Congress of Vienna." }
      ],
      GLOB: [
        { strand: "WHII.5.A", kind: "WHII.5 a · b", name: "Ottomans & Mughals", meta: "Suleiman, Istanbul and trade; Akbar, the Taj Mahal, Sikhism and European trading posts." },
        { strand: "WHII.5.C", kind: "WHII.5 c · d", name: "China & Japan", meta: "Ming and Qing China, the Forbidden City, the shogun and emperor, Tokugawa's closed country." },
        { strand: "WHII.6.A", kind: "WHII.6 a · b · c", name: "Songhai, Ethiopia & religion", meta: "Askia Muhammad, Timbuktu, Islam, Coptic Christianity and animism." },
        { strand: "WHII.6.D", kind: "WHII.6 d · f · g", name: "African states & the slave trade", meta: "Asante, Kongo and Zulu governments, Christianity in Kongo, and the Transatlantic Slave Trade." },
        { strand: "WHII.6.E", kind: "WHII.6 e · h", name: "Swahili coast & trade", meta: "Indian Ocean trade, Swahili city-states, trading partners, resources and products." }
      ],
      INDU: [
        { strand: "WHII.7.A", kind: "WHII.7 a · b", name: "Industrial Revolutions", meta: "Capital, resources and entrepreneurs; steam, textiles, steel, electricity, cities, workers and reform." },
        { strand: "WHII.7.C", kind: "WHII.7 c", name: "Imperialism & resistance", meta: "The scramble for Africa, the Sepoy Mutiny, the Opium Wars and the Boxer Rebellion." },
        { strand: "WHII.7.D", kind: "WHII.7 d · e", name: "Nationalism & unification", meta: "Cavour, Garibaldi and Italy; Bismarck, blood and iron, and Germany." }
      ],
      WARS: [
        { strand: "WHII.8.A", kind: "WHII.8 a · b · c", name: "World War I", meta: "MAIN causes, Franz Ferdinand, trench warfare, new weapons, the Marne, Verdun, the Somme, Gallipoli." },
        { strand: "WHII.8.D", kind: "WHII.8 d · e", name: "Versailles & Russia", meta: "The Treaty of Versailles, the League of Nations, mandates, Lenin and the Bolsheviks." },
        { strand: "WHII.8.F", kind: "WHII.8 f · g", name: "Depression & dictators", meta: "The global depression, fascism in Italy, Nazism in Germany, Stalin and Imperial Japan." },
        { strand: "WHII.9.A", kind: "WHII.9 a · b · c · f", name: "World War II", meta: "Leaders, appeasement, Stalingrad, Midway, Normandy, Okinawa, radar, ENIAC and the atomic bomb." },
        { strand: "WHII.9.D", kind: "WHII.9 d · e", name: "Holocaust & aftermath", meta: "Antisemitism, Kristallnacht, ghettos and camps, Nuremberg, the UN, the Declaration of Human Rights and Israel." }
      ],
      COLD: [
        { strand: "WHII.10.A", kind: "WHII.10 a · b", name: "Cold War", meta: "Containment, the domino theory, Berlin, Suez, Hungary, Cuba and the Prague Spring." },
        { strand: "WHII.10.C", kind: "WHII.10 c · d · e", name: "Asia & the end of the Cold War", meta: "Mao, Chiang, Deng, Ho Chi Minh, Tiananmen; Gorbachev, Reagan, Thatcher, John Paul II, Havel." },
        { strand: "WHII.11", kind: "WHII.11 a–d", name: "Independence movements", meta: "Gandhi, Kenyatta, Mandela, Algeria, Ghana, Meir, Nasser and the effects of decolonization." },
        { strand: "WHII.12.A", kind: "WHII.12 a · b · d", name: "Genocide, refugees & terrorism", meta: "Crimes against humanity, ethnic conflict and refugees, and international terrorism." },
        { strand: "WHII.10.F", kind: "WHII.10 f · WHII.12 c · e", name: "Global interdependence", meta: "Technology, social media, multinational corporations, trade agreements and international organizations." }
      ]
    },
    aliases: {
      "WHII.1.A": ["WHII.1.C"], "WHII.2.B": ["WHII.2.C"],
      "WHII.4.A": ["WHII.4.D"], "WHII.4.B": ["WHII.4.C"], "WHII.4.F": ["WHII.4.G"],
      "WHII.5.A": ["WHII.5.B"], "WHII.5.C": ["WHII.5.D"],
      "WHII.6.A": ["WHII.6.B", "WHII.6.C"], "WHII.6.D": ["WHII.6.F", "WHII.6.G"], "WHII.6.E": ["WHII.6.H"],
      "WHII.7.A": ["WHII.7.B"], "WHII.7.D": ["WHII.7.E"],
      "WHII.8.A": ["WHII.8.B", "WHII.8.C"], "WHII.8.D": ["WHII.8.E"], "WHII.8.F": ["WHII.8.G"],
      "WHII.9.A": ["WHII.9.B", "WHII.9.C", "WHII.9.F"], "WHII.9.D": ["WHII.9.E"],
      "WHII.10.A": ["WHII.10.B"], "WHII.10.C": ["WHII.10.D", "WHII.10.E"],
      "WHII.12.A": ["WHII.12.B", "WHII.12.D"], "WHII.10.F": ["WHII.12.C", "WHII.12.E"]
    }
  };
})(typeof window !== "undefined" ? window : global);
