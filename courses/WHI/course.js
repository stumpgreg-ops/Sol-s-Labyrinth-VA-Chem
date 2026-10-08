/* SOL Lab — World History and Geography to 1500 A.D. (Virginia 2023 History and Social Science SOL, grade 9).
   The course definition js/content.js reads instead of its Chemistry defaults: the units (title-screen cards), the
   standards map (WHI.1–WHI.13 with their lettered key concepts), the skill cards per unit and the progress-code tag.
   The packs live in the other files of this folder (one per unit) and push into HEIST_PACKS. */
(function (global) {
  global.HEIST_COURSE = {
    tag: "WHI",
    prefix: "WHI",
    title: "World History & Geography to 1500 A.D.",
    name: "Virginia World History I",
    short: "World History I",
    grade: "Grade 9",
    kicker: "Virginia World History I SOL · 100 levels",
    source: "sources",
    families: [
      { id: "ALL", label: "Full review", short: "Full review", kind: "All units", meta: "Every unit mixed, leaning toward the standards you miss most. Best in the last weeks before the test.", stds: ["WHI.1", "WHI.2", "WHI.3", "WHI.4", "WHI.5", "WHI.6", "WHI.7", "WHI.8", "WHI.9", "WHI.10", "WHI.11", "WHI.12", "WHI.13"] },
      { id: "EARLY", label: "Early Humans & the Fertile Crescent", short: "Early Humans", kind: "WHI.1–2", meta: "Paleolithic and Neolithic life, archaeology, Egypt and Nubia, Mesopotamia, the Israelites and Judaism, the Phoenicians.", stds: ["WHI.1", "WHI.2"] },
      { id: "ASIA", label: "Ancient India & China", short: "India & China", kind: "WHI.3", meta: "Geography of India and China, varna and jati, Hinduism, Buddhism, Chinese dynasties, Confucianism, Taoism and Legalism.", stds: ["WHI.3"] },
      { id: "CLASS", label: "Persia, Greece & Rome", short: "Greece & Rome", kind: "WHI.4–5", meta: "Persia, Athens and Sparta, the Persian and Peloponnesian wars, Alexander, the Roman Republic and Empire, Christianity, Byzantium.", stds: ["WHI.4", "WHI.5"] },
      { id: "ISLAM", label: "Islamic Civilization & West Africa", short: "Islam & West Africa", kind: "WHI.6 · WHI.8", meta: "Arabia, the origins and spread of Islam, the Qur'an and Sunnah, Muslim trade and cities, Ghana and Mali, the trans-Saharan trade.", stds: ["WHI.6", "WHI.8"] },
      { id: "EASIA", label: "Medieval China & Japan", short: "China & Japan", kind: "WHI.7 · WHI.9", meta: "Tang and Song China, the Mongols and Ming voyages, Chinese inventions, Prince Shotoku, shoguns and samurai, the Tale of Genji.", stds: ["WHI.7", "WHI.9"] },
      { id: "EUROPE", label: "Medieval Europe & the Renaissance", short: "Medieval Europe", kind: "WHI.10–11 · WHI.13", meta: "Feudalism and the manor, monasteries, Magna Carta, the Great Schism, the Crusades, the Reconquista, the Italian Renaissance.", stds: ["WHI.10", "WHI.11", "WHI.13"] },
      { id: "AMER", label: "Maya, Aztec & Inca", short: "Americas", kind: "WHI.12", meta: "Geography of Mesoamerica and the Andes, how the empires rose and fell, calendars, astronomy, architecture and social classes.", stds: ["WHI.12"] }
    ],
    standards: {
      "WHI.1": { name: "Paleolithic era into the Neolithic era", keys: {
        a: "archaeological evidence of the first humans and their locations",
        b: "effect of geography on hunter-gatherer emergence and migration",
        c: "hunter-gatherer societies, tools and fire",
        d: "technological and social developments that led to settled life",
        e: "how archaeological discoveries change our understanding of early societies" } },
      "WHI.2": { name: "Early societies of the Fertile Crescent", keys: {
        a: "Egypt and Nubia",
        b: "Mesopotamia",
        c: "the Israelites and the origins, beliefs and spread of Judaism",
        d: "the Phoenicians" } },
      "WHI.3": { name: "Ancient India and China", keys: {
        a: "geography of ancient India and China",
        b: "society of the Indian subcontinent, varna and jati",
        c: "origins, beliefs and spread of Hinduism",
        d: "origins, beliefs and spread of Buddhism",
        e: "development of ancient China",
        f: "Confucianism, Taoism and Legalism" } },
      "WHI.4": { name: "Persia and Greece", keys: {
        a: "geography of Persia and Greece",
        b: "ancient Persia",
        c: "Greece: Athens, Sparta, citizenship and democracy",
        d: "the Persian and Peloponnesian wars",
        e: "Alexander the Great and Hellenistic culture",
        f: "Greek contributions to science, art, architecture, philosophy and mathematics" } },
      "WHI.5": { name: "Rome and the Byzantine Empire", keys: {
        a: "geography of Rome and threats to its unity",
        b: "the Roman Republic and the Roman Empire compared",
        c: "the Byzantine Empire and Constantinople",
        d: "origins, beliefs and spread of Christianity",
        e: "Roman influence: citizenship, law, art, architecture, engineering" } },
      "WHI.6": { name: "Islamic societies", keys: {
        a: "geography and ways of life of the Arabian Peninsula",
        b: "origins, beliefs and spread of Islam",
        c: "the Qur'an and the Sunnah",
        d: "expansion of Muslim rule and the Arabic language",
        e: "cities, merchants and trade routes of the Muslim world" } },
      "WHI.7": { name: "China in the Middle Ages", keys: {
        a: "Tang reunification and the spread of Buddhism to China, Korea and Japan",
        b: "Tang and Song agriculture, technology and commerce",
        c: "Confucian thought in the Song and Mongol periods",
        d: "overland trade and maritime expeditions under the Mongols and Ming",
        e: "tea, paper, woodblock printing, the compass and gunpowder",
        f: "the imperial state and the scholar-official class" } },
      "WHI.8": { name: "Ghana and Mali in medieval Africa", keys: {
        a: "the Niger River, vegetation zones and the gold-salt trade",
        b: "family, labor specialization and regional commerce",
        c: "the trans-Saharan caravan trade and the influence of Islam",
        d: "the Arabic language in government, trade and religion",
        e: "written and oral traditions" } },
      "WHI.9": { name: "Medieval Japan", keys: {
        a: "influence of China and Korea on Japan",
        b: "Prince Shotoku and Japanese society",
        c: "shogun, daimyo, samurai and the warrior code",
        d: "Japanese forms of Buddhism",
        e: "the golden age of literature, art and drama",
        f: "the rise of a military society and the samurai" } },
      "WHI.10": { name: "Medieval Europe", keys: {
        a: "geography of Europe and ways of life",
        b: "spread of Christianity, the early church and monasteries",
        c: "feudalism and the manor",
        d: "growth of towns and trade" } },
      "WHI.11": { name: "Papacy and monarchs", keys: {
        a: "Magna Carta, Parliament, habeas corpus and an independent judiciary",
        b: "the Great Schism of 1054",
        c: "causes, course and effects of the Crusades",
        d: "the decline of Muslim rule in Iberia and the rise of Spain and Portugal",
        e: "the Catholic Church as a political and intellectual institution" } },
      "WHI.12": { name: "Mesoamerican and Andean civilizations", keys: {
        a: "geography and its effects on the Maya, Aztec and Inca",
        b: "rise of the empires and Spanish conquest",
        c: "art, oral traditions and architecture",
        d: "astronomy, mathematics and calendars",
        e: "social classes, family life, warfare and religion" } },
      "WHI.13": { name: "The Italian Renaissance", keys: {
        a: "economic, political and cultural foundations of the Renaissance",
        b: "Italian city-states and Machiavelli",
        c: "artists and thinkers: Leonardo, Michelangelo, Petrarch" } }
    },
    skills: {
      EARLY: [
        { strand: "WHI.1.A", kind: "WHI.1 a · e", name: "Archaeology & first humans", meta: "Fossils and artifacts, where the first humans lived, and how new discoveries change what we know." },
        { strand: "WHI.1.B", kind: "WHI.1 b · c", name: "Hunter-gatherers", meta: "Migration, tools, fire, cave art and life on the move." },
        { strand: "WHI.1.D", kind: "WHI.1 d", name: "The Agricultural Revolution", meta: "Farming, domesticated animals, villages and what settled life changed." },
        { strand: "WHI.2.A", kind: "WHI.2 a · b", name: "Egypt, Nubia & Mesopotamia", meta: "River valleys, pharaohs and pyramids, Kush, Sumer, cuneiform and Hammurabi's Code." },
        { strand: "WHI.2.C", kind: "WHI.2 c · d", name: "Israelites & Phoenicians", meta: "Monotheism, the Torah and the spread of Judaism; Phoenician trade and the alphabet." }
      ],
      ASIA: [
        { strand: "WHI.3.A", kind: "WHI.3 a", name: "Geography of India & China", meta: "Himalayas, the Indus and Ganges, monsoons, the Huang He and Yangtze, and isolation." },
        { strand: "WHI.3.B", kind: "WHI.3 b", name: "Indian society", meta: "Varna and jati, the Mauryan and Gupta empires, Asoka, and Indian contributions." },
        { strand: "WHI.3.C", kind: "WHI.3 c · d", name: "Hinduism & Buddhism", meta: "Karma, dharma, reincarnation, the Vedas; Siddhartha Gautama, the Four Noble Truths and the Eightfold Path." },
        { strand: "WHI.3.E", kind: "WHI.3 e", name: "Ancient China", meta: "Dynastic cycle, Mandate of Heaven, Qin and Han, the Great Wall and the Silk Road." },
        { strand: "WHI.3.F", kind: "WHI.3 f", name: "Chinese philosophies", meta: "Confucianism, Taoism and Legalism and how each shaped government and life." }
      ],
      CLASS: [
        { strand: "WHI.4.A", kind: "WHI.4 a · b", name: "Geography & Persia", meta: "Mountains, seas and city-states; the Persian Empire, Zoroastrianism, roads and satraps." },
        { strand: "WHI.4.C", kind: "WHI.4 c · d · e", name: "Greek city-states & wars", meta: "Athens and Sparta, democracy, the Persian and Peloponnesian wars, Alexander and Hellenistic culture." },
        { strand: "WHI.4.F", kind: "WHI.4 f", name: "Greek contributions", meta: "Philosophy, drama, architecture, mathematics and science that still shape the world." },
        { strand: "WHI.5.A", kind: "WHI.5 a · b", name: "Roman Republic & Empire", meta: "The Italian peninsula, the Republic, the Punic Wars, Augustus and the Pax Romana, decline." },
        { strand: "WHI.5.C", kind: "WHI.5 c · d", name: "Christianity & Byzantium", meta: "The origins and spread of Christianity, Constantine, Constantinople and Justinian." },
        { strand: "WHI.5.E", kind: "WHI.5 e", name: "Roman legacy", meta: "Citizenship, Roman law, the Twelve Tables, roads, aqueducts, arches and Latin." }
      ],
      ISLAM: [
        { strand: "WHI.6.A", kind: "WHI.6 a", name: "Arabia", meta: "Deserts, oases, nomads and towns of the Arabian Peninsula." },
        { strand: "WHI.6.B", kind: "WHI.6 b · c", name: "Islam: beliefs & sources", meta: "Muhammad, the Five Pillars, Mecca and Medina, the Qur'an and the Sunnah." },
        { strand: "WHI.6.D", kind: "WHI.6 d · e", name: "Expansion & trade", meta: "Caliphates, Sunni and Shia, Arabic, Baghdad and Cordoba, trade routes and inventions." },
        { strand: "WHI.8.A", kind: "WHI.8 a · b", name: "Ghana & Mali", meta: "The Niger River, forest, savanna and desert, the gold-salt trade, Timbuktu and Mansa Musa." },
        { strand: "WHI.8.C", kind: "WHI.8 c · d · e", name: "Caravans, Islam & griots", meta: "Trans-Saharan caravans, Islam and Arabic in West Africa, and oral and written traditions." }
      ],
      EASIA: [
        { strand: "WHI.7.A", kind: "WHI.7 a · b", name: "Tang & Song China", meta: "Reunification, Buddhism in East Asia, rice, canals, markets and cities." },
        { strand: "WHI.7.C", kind: "WHI.7 c · f", name: "Confucian state", meta: "Neo-Confucianism, the civil service exam and the scholar-officials." },
        { strand: "WHI.7.D", kind: "WHI.7 d · e", name: "Mongols, Ming & inventions", meta: "Pax Mongolica, Zheng He's voyages, tea, paper, printing, the compass and gunpowder." },
        { strand: "WHI.9.A", kind: "WHI.9 a · b · d", name: "Early Japan", meta: "Influence of China and Korea, Prince Shotoku, Shinto and Japanese Buddhism." },
        { strand: "WHI.9.C", kind: "WHI.9 c · e · f", name: "Samurai Japan", meta: "Shogun, daimyo and samurai, bushido, and the Heian golden age of the Tale of Genji." }
      ],
      EUROPE: [
        { strand: "WHI.10.A", kind: "WHI.10 a · b", name: "Geography & the Church", meta: "Europe's rivers, plains and seas; monasteries and the spread of Christianity north of the Alps." },
        { strand: "WHI.10.C", kind: "WHI.10 c · d", name: "Feudalism, manors & towns", meta: "Lords, vassals, knights and serfs; the manor; guilds, fairs and the growth of towns." },
        { strand: "WHI.11.A", kind: "WHI.11 a · e", name: "Law & the Church", meta: "Magna Carta, Parliament, habeas corpus, and the Church in politics and learning." },
        { strand: "WHI.11.B", kind: "WHI.11 b · c · d", name: "Schism, Crusades & Reconquista", meta: "The Great Schism of 1054, the Crusades and their effects, and the Reconquista." },
        { strand: "WHI.13", kind: "WHI.13 a–c", name: "The Italian Renaissance", meta: "Florence and Venice, the Medici, humanism, Machiavelli, Petrarch, Leonardo and Michelangelo." }
      ],
      AMER: [
        { strand: "WHI.12.A", kind: "WHI.12 a", name: "Geography of the Americas", meta: "Rain forests, highlands, the Valley of Mexico and the Andes, and how each shaped farming and trade." },
        { strand: "WHI.12.B", kind: "WHI.12 b", name: "Rise & conquest", meta: "How the Maya, Aztec and Inca arose; Cortes, Pizarro, disease and the fall of the empires." },
        { strand: "WHI.12.C", kind: "WHI.12 c · d", name: "Achievements", meta: "Pyramids, Machu Picchu, the quipu, Mayan writing, calendars and astronomy." },
        { strand: "WHI.12.E", kind: "WHI.12 e", name: "Society & religion", meta: "Class structure, family life, warfare, religious practice and slavery." }
      ]
    },
    aliases: {
      "WHI.1.A": ["WHI.1.E"], "WHI.1.B": ["WHI.1.C"],
      "WHI.2.A": ["WHI.2.B"], "WHI.2.C": ["WHI.2.D"],
      "WHI.3.C": ["WHI.3.D"],
      "WHI.4.A": ["WHI.4.B"], "WHI.4.C": ["WHI.4.D", "WHI.4.E"],
      "WHI.5.A": ["WHI.5.B"], "WHI.5.C": ["WHI.5.D"],
      "WHI.6.B": ["WHI.6.C"], "WHI.6.D": ["WHI.6.E"],
      "WHI.8.A": ["WHI.8.B"], "WHI.8.C": ["WHI.8.D", "WHI.8.E"],
      "WHI.7.A": ["WHI.7.B"], "WHI.7.C": ["WHI.7.F"], "WHI.7.D": ["WHI.7.E"],
      "WHI.9.A": ["WHI.9.B", "WHI.9.D"], "WHI.9.C": ["WHI.9.E", "WHI.9.F"],
      "WHI.10.A": ["WHI.10.B"], "WHI.10.C": ["WHI.10.D"],
      "WHI.11.A": ["WHI.11.E"], "WHI.11.B": ["WHI.11.C", "WHI.11.D"],
      "WHI.12.C": ["WHI.12.D"]
    }
  };
})(typeof window !== "undefined" ? window : global);
