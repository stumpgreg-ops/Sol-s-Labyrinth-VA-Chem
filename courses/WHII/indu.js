/* SOL Lab — World History II · Industry, Imperialism & Nationalism (WHII.7). Original text only. */
(function (global) {
  var P = global.HEIST_PACKS;
  if (!P || !P.push) return;
  var N = function (i) { return '<span class="n">(' + i + ')</span> '; };   // numbered sentence

  var PACKS = [
    /* ---------- tiny ---------- */
    {
      id: "indu-watt-steam",
      family: "INDU",
      title: "Watt's steam engine",
      kind: "Industry, Imperialism & Nationalism · WHII.7",
      blurb: "Coal, boiling water and the machine that moved factories to town.",
      level: 1,
      passage: "<p>" + N(1) + "In the 1760s and 1770s the Scottish inventor James Watt greatly improved the <strong>steam engine</strong>, making it far more <strong>efficient</strong>. " + N(2) + "Burning coal to boil water, the engine could power machines anywhere, not only beside a fast river. " + N(3) + "Factories soon gathered in towns near coal fields, and by the 1830s steam locomotives were pulling trains between British cities.</p>",
      claims: [
        {
          id: "coal",
          sol: "WHII.7.a",
          stem: "Which natural resource fueled Watt's steam engine?",
          choices: [
            { letter: "A", text: "coal" },
            { letter: "B", text: "oil" },
            { letter: "C", text: "natural gas" },
            { letter: "D", text: "wind" }
          ],
          correct: "A"
        },
        {
          id: "river",
          sol: "WHII.7.b",
          stem: "According to sentence 2, what advantage did steam power have over water power?",
          choices: [
            { letter: "A", text: "It needed no fuel of any kind to run." },
            { letter: "B", text: "Factories no longer had to be near rivers." },
            { letter: "C", text: "It ran without any workers at all." },
            { letter: "D", text: "It cost less than any of the hand tools." }
          ],
          correct: "B"
        },
        {
          id: "efficient",
          sol: "WHII.7.b",
          stem: "In sentence 1, the word efficient most nearly means —",
          choices: [
            { letter: "A", text: "very loud and very dangerous" },
            { letter: "B", text: "built entirely out of iron" },
            { letter: "C", text: "operated only by hand power" },
            { letter: "D", text: "doing more work with less fuel" }
          ],
          correct: "D"
        },
        {
          id: "where",
          sol: "WHII.7.b",
          stem: "In which country did the First Industrial Revolution begin?",
          choices: [
            { letter: "A", text: "France" },
            { letter: "B", text: "the German states" },
            { letter: "C", text: "Great Britain" },
            { letter: "D", text: "the Russian Empire" }
          ],
          correct: "C"
        },
        {
          id: "rail",
          sol: "WHII.7.b",
          stem: "Railroads like those in sentence 3 helped industry most by —",
          choices: [
            { letter: "A", text: "ending the need for coal mines" },
            { letter: "B", text: "keeping workers on their farms" },
            { letter: "C", text: "moving goods and raw materials cheaply" },
            { letter: "D", text: "replacing every canal within a year" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "indu-italy-leaders",
      family: "INDU",
      title: "Founders of a united Italy",
      kind: "Industry, Imperialism & Nationalism · WHII.7",
      blurb: "Mazzini, Cavour and Garibaldi each played a different part.",
      level: 1,
      passage: "<p>" + N(1) + "Three leaders are often called the founders of a united Italy.</p><table><tr><th>Leader</th><th>Role</th></tr><tr><td>Giuseppe Mazzini</td><td>Founded Young Italy (1831) to spread the idea of a united Italian <strong>republic</strong></td></tr><tr><td>Count Camillo di Cavour</td><td>Prime minister of the Kingdom of Sardinia; used diplomacy and war to unite the north</td></tr><tr><td>Giuseppe Garibaldi</td><td>Led the Red Shirts, who conquered southern Italy and Sicily in 1860</td></tr></table>",
      claims: [
        {
          id: "inspire",
          sol: "WHII.7.d",
          stem: "Which leader's main role was to inspire Italians with ideas of nationalism?",
          choices: [
            { letter: "A", text: "Count Cavour" },
            { letter: "B", text: "Giuseppe Garibaldi" },
            { letter: "C", text: "Giuseppe Mazzini" },
            { letter: "D", text: "Victor Emmanuel II" }
          ],
          correct: "C"
        },
        {
          id: "diplomat",
          sol: "WHII.7.d",
          stem: "Which leader used diplomacy, including an alliance with France, to win northern lands from Austria?",
          choices: [
            { letter: "A", text: "Giuseppe Garibaldi" },
            { letter: "B", text: "Count Cavour" },
            { letter: "C", text: "Giuseppe Mazzini" },
            { letter: "D", text: "Otto von Bismarck" }
          ],
          correct: "B"
        },
        {
          id: "south",
          sol: "WHII.7.d",
          stem: "According to the table, Garibaldi's Red Shirts conquered —",
          choices: [
            { letter: "A", text: "Lombardy and the city of Milan" },
            { letter: "B", text: "Venetia and the city of Venice" },
            { letter: "C", text: "Rome and the Papal States" },
            { letter: "D", text: "southern Italy and Sicily" }
          ],
          correct: "D"
        },
        {
          id: "republic",
          sol: "WHII.7.d",
          stem: "In the table, a republic is a government in which —",
          choices: [
            { letter: "A", text: "citizens choose their own leaders" },
            { letter: "B", text: "the pope rules over every region" },
            { letter: "C", text: "a king rules by divine right" },
            { letter: "D", text: "a foreign empire holds power" }
          ],
          correct: "A"
        },
        {
          id: "kingdom",
          sol: "WHII.7.d",
          stem: "Which state led the unification of Italy?",
          choices: [
            { letter: "A", text: "the Kingdom of the Two Sicilies" },
            { letter: "B", text: "the Kingdom of Sardinia" },
            { letter: "C", text: "the Papal States" },
            { letter: "D", text: "the Austrian Empire" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "indu-blood-iron",
      family: "INDU",
      title: "Blood and iron",
      kind: "Industry, Imperialism & Nationalism · WHII.7",
      blurb: "Bismarck tells Prussia's lawmakers how Germany will be united.",
      level: 1,
      passage: "<p>" + N(1) + "In 1862 Otto von Bismarck became the chief minister of Prussia. " + N(2) + "When lawmakers refused to fund a larger army, he replied:</p><blockquote>The great questions of the day will not be decided by speeches and majority decisions—that was the great mistake of 1848 and 1849—but by iron and blood.</blockquote><p class=\"src\">— Otto von Bismarck, speech to Prussian lawmakers, 1862 (translated, adapted)</p><p>" + N(3) + "His policy became known as <strong>\"blood and iron.\"</strong></p>",
      claims: [
        {
          id: "meaning",
          sol: "WHII.7.e",
          stem: "Bismarck's phrase \"blood and iron\" refers to —",
          choices: [
            { letter: "A", text: "trade treaties and tariffs" },
            { letter: "B", text: "votes and elections" },
            { letter: "C", text: "military force and war" },
            { letter: "D", text: "religion and family" }
          ],
          correct: "C"
        },
        {
          id: "core",
          sol: "WHII.7.e",
          stem: "Which state did Bismarck make the core of a united Germany?",
          choices: [
            { letter: "A", text: "Prussia" },
            { letter: "B", text: "Austria" },
            { letter: "C", text: "Bavaria" },
            { letter: "D", text: "Saxony" }
          ],
          correct: "A"
        },
        {
          id: "point",
          sol: "WHII.7.e",
          stem: "The main point of Bismarck's speech was that —",
          choices: [
            { letter: "A", text: "Prussia should become a democratic republic" },
            { letter: "B", text: "the people should vote on unity" },
            { letter: "C", text: "Prussia should shrink its army" },
            { letter: "D", text: "force, not debate, would unite Germany" }
          ],
          correct: "D"
        },
        {
          id: "mistake",
          sol: "WHII.7.e",
          stem: "The \"mistake of 1848 and 1849\" most likely refers to —",
          choices: [
            { letter: "A", text: "the peace made at the Congress of Vienna" },
            { letter: "B", text: "the failed liberal revolutions of that time" },
            { letter: "C", text: "the defeat of Napoleon at Waterloo" },
            { letter: "D", text: "the founding of the Zollverein" }
          ],
          correct: "B"
        },
        {
          id: "realpolitik",
          sol: "WHII.7.e",
          stem: "Bismarck's practical approach to politics, based on power rather than ideals, is called —",
          choices: [
            { letter: "A", text: "realpolitik" },
            { letter: "B", text: "laissez-faire" },
            { letter: "C", text: "absolutism" },
            { letter: "D", text: "socialism" }
          ],
          correct: "A"
        }
      ]
    },
    /* ---------- short ---------- */
    {
      id: "indu-why-britain",
      family: "INDU",
      title: "Why Britain came first",
      kind: "Industry, Imperialism & Nationalism · WHII.7",
      blurb: "The four factors of production, and how Britain had all of them.",
      level: 1,
      passage: "<p>" + N(1) + "Economists describe four <strong>factors of production</strong> needed to make goods. " + N(2) + "In the 1700s Great Britain had all four.</p><table><tr><th>Factor</th><th>Britain's advantage</th></tr><tr><td>Land (natural resources)</td><td>Large deposits of coal and iron ore; rivers and good harbors</td></tr><tr><td>Labor</td><td>A growing population; farmers pushed off the land by enclosure moved to towns</td></tr><tr><td><strong>Capital</strong></td><td>Money from overseas trade; banks willing to lend</td></tr><tr><td>Entrepreneurship</td><td>Inventors and business owners willing to take risks</td></tr></table><p>" + N(3) + "An empire overseas also supplied raw cotton and bought finished cloth.</p>",
      claims: [
        {
          id: "capital",
          sol: "WHII.7.a",
          stem: "In the table, capital means —",
          choices: [
            { letter: "A", text: "the city where Parliament meets" },
            { letter: "B", text: "money and tools used to make goods" },
            { letter: "C", text: "the workers in a cotton mill" },
            { letter: "D", text: "coal and iron in the ground" }
          ],
          correct: "B"
        },
        {
          id: "entre",
          sol: "WHII.7.a",
          stem: "An entrepreneur is a person who —",
          choices: [
            { letter: "A", text: "works for wages in a mill" },
            { letter: "B", text: "sets the tax rates passed by Parliament" },
            { letter: "C", text: "farms land owned by a noble" },
            { letter: "D", text: "starts a business and takes the risk" }
          ],
          correct: "D"
        },
        {
          id: "enclosure",
          sol: "WHII.7.a",
          stem: "According to the table, how did enclosure help industrialization?",
          choices: [
            { letter: "A", text: "It sent farmers to towns to work." },
            { letter: "B", text: "It gave farmers more land to plant." },
            { letter: "C", text: "It closed the coal mines." },
            { letter: "D", text: "It raised the price of cloth." }
          ],
          correct: "A"
        },
        {
          id: "empire",
          sol: "WHII.7.a",
          stem: "According to sentence 3, how did Britain's empire help its textile industry?",
          choices: [
            { letter: "A", text: "Colonies banned cloth from Britain." },
            { letter: "B", text: "Colonies built Britain's machines." },
            { letter: "C", text: "Colonies sent cotton and bought cloth." },
            { letter: "D", text: "Colonies sent coal to British mills." }
          ],
          correct: "C"
        },
        {
          id: "conclude",
          sol: "WHII.7.a",
          stem: "Which conclusion is best supported by the table?",
          choices: [
            { letter: "A", text: "Britain lacked resources but had cheap labor." },
            { letter: "B", text: "Britain had resources, workers, money and risk-takers." },
            { letter: "C", text: "Britain's factories were paid for by the king alone." },
            { letter: "D", text: "Inventors were the only factor that mattered." }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "indu-sepoy",
      family: "INDU",
      title: "The Indian Rebellion of 1857",
      kind: "Industry, Imperialism & Nationalism · WHII.7",
      blurb: "A rumor about rifle cartridges sets off a revolt against Company rule.",
      level: 2,
      passage: "<p>" + N(1) + "By the 1850s the British East India Company controlled much of India with armies of Indian soldiers called <strong>sepoys</strong>. " + N(2) + "Many Indians resented British efforts to change their customs and to take over Indian states. " + N(3) + "In 1857 a rumor spread that new rifle cartridges, which soldiers bit open, were greased with cow and pig fat. " + N(4) + "This offended both Hindus, who revere cows, and Muslims, who do not eat pork. " + N(5) + "Sepoys at Meerut rebelled, and fighting spread across northern India. " + N(6) + "After crushing the revolt in 1858, the British government ended the Company's rule and governed India directly.</p>",
      claims: [
        {
          id: "sepoys",
          sol: "WHII.7.c",
          stem: "In sentence 1, sepoys were —",
          choices: [
            { letter: "A", text: "British officers sent from London" },
            { letter: "B", text: "Indian soldiers serving the British" },
            { letter: "C", text: "Hindu priests in northern India" },
            { letter: "D", text: "merchants of the East India Company" }
          ],
          correct: "B"
        },
        {
          id: "rumor",
          sol: "WHII.7.c",
          stem: "Why did the cartridge rumor anger both Hindus and Muslims?",
          choices: [
            { letter: "A", text: "The cartridges cost a month's pay." },
            { letter: "B", text: "The rifles were made in Germany." },
            { letter: "C", text: "The cartridges did not fit the rifles." },
            { letter: "D", text: "Biting them broke religious rules." }
          ],
          correct: "D"
        },
        {
          id: "result",
          sol: "WHII.7.c",
          stem: "Which was a result of the Indian Rebellion of 1857?",
          choices: [
            { letter: "A", text: "Britain's government took direct control." },
            { letter: "B", text: "India won its independence from Britain." },
            { letter: "C", text: "The East India Company gained more power." },
            { letter: "D", text: "France took over the rule of India." }
          ],
          correct: "A"
        },
        {
          id: "spark",
          sol: "WHII.7.c",
          stem: "The cartridge rumor is best described as —",
          choices: [
            { letter: "A", text: "a long-term cause of the revolt" },
            { letter: "B", text: "a result of British direct rule" },
            { letter: "C", text: "the immediate spark of the revolt" },
            { letter: "D", text: "the reason the revolt succeeded" }
          ],
          correct: "C"
        },
        {
          id: "deeper",
          sol: "WHII.7.c",
          stem: "Sentence 2 shows that the rebellion was also a response to —",
          choices: [
            { letter: "A", text: "British changes to customs and land seizures" },
            { letter: "B", text: "a famine blamed on Chinese opium traders" },
            { letter: "C", text: "an invasion of India from Russia" },
            { letter: "D", text: "French control over Indian ports" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "indu-boxer",
      family: "INDU",
      title: "Carving up China",
      kind: "Industry, Imperialism & Nationalism · WHII.7",
      blurb: "A cartoon of a pie, spheres of influence and the Boxer Rebellion.",
      level: 2,
      passage: "<p>" + N(1) + "A European cartoon from about 1898 shows rulers of Britain, Germany, Russia, France and Japan seated around a pie labeled \"China,\" each cutting a slice, while a Chinese official behind them raises his hands in alarm. " + N(2) + "By then foreign powers had carved China into <strong>spheres of influence</strong>, areas where each controlled trade and investment. " + N(3) + "In 1899 and 1900 a secret society that Westerners called the Boxers attacked foreigners and Chinese Christians and besieged foreign embassies in Beijing. " + N(4) + "An international army crushed the uprising, and China was forced to pay heavy damages.</p>",
      claims: [
        {
          id: "cartoon",
          sol: "WHII.7.c",
          stem: "The cartoonist's main point is that —",
          choices: [
            { letter: "A", text: "China was conquering its neighbors" },
            { letter: "B", text: "the powers were feeding China's people" },
            { letter: "C", text: "outside powers were carving up China" },
            { letter: "D", text: "China had become a great naval power" }
          ],
          correct: "C"
        },
        {
          id: "sphere",
          sol: "WHII.7.c",
          stem: "In sentence 2, a sphere of influence is —",
          choices: [
            { letter: "A", text: "an area where a foreign power controls trade" },
            { letter: "B", text: "a round globe used to plan new conquests" },
            { letter: "C", text: "a region ruled by the emperor's family" },
            { letter: "D", text: "a zone closed to all foreign visitors" }
          ],
          correct: "A"
        },
        {
          id: "goal",
          sol: "WHII.7.c",
          stem: "The Boxers' main goal was to —",
          choices: [
            { letter: "A", text: "modernize China with Western help" },
            { letter: "B", text: "drive out foreigners and their ideas" },
            { letter: "C", text: "convert China to Christianity" },
            { letter: "D", text: "make China a British colony" }
          ],
          correct: "B"
        },
        {
          id: "opium",
          sol: "WHII.7.c",
          stem: "Which earlier conflict forced China to open ports to trade and give Hong Kong to Britain?",
          choices: [
            { letter: "A", text: "the Indian Rebellion of 1857" },
            { letter: "B", text: "the Franco-Prussian War" },
            { letter: "C", text: "the Russo-Japanese War" },
            { letter: "D", text: "the First Opium War" }
          ],
          correct: "D"
        },
        {
          id: "compare",
          sol: "WHII.7.c",
          stem: "How were the Indian Rebellion of 1857 and the Boxer Rebellion similar?",
          choices: [
            { letter: "A", text: "Both resisted foreign power and failed." },
            { letter: "B", text: "Both ended with full national independence." },
            { letter: "C", text: "Both were led by European generals." },
            { letter: "D", text: "Both took place in southern Africa." }
          ],
          correct: "A"
        }
      ]
    },
    /* ---------- medium ---------- */
    {
      id: "indu-second-wave",
      family: "INDU",
      title: "Two Industrial Revolutions",
      kind: "Industry, Imperialism & Nationalism · WHII.7",
      blurb: "Steam and iron, then steel, electricity and the telephone.",
      level: 2,
      passage: "<p>" + N(1) + "Historians divide industrialization into two waves. " + N(2) + "The First Industrial Revolution began in Great Britain in the late 1700s. " + N(3) + "The <strong>Second Industrial Revolution</strong>, from about 1870 to 1914, spread to Germany, the United States and other nations and relied heavily on science. " + N(4) + "Large corporations and banks raised the huge sums needed for steel mills and power plants. " + N(5) + "New inventions such as the light bulb and the automobile changed daily life. " + N(6) + "Germany and the United States soon passed Britain in steel output.</p><table><tr><th></th><th>First (about 1760–1850)</th><th>Second (about 1870–1914)</th></tr><tr><td>Main power source</td><td>Steam from coal</td><td>Electricity and oil</td></tr><tr><td>Key material</td><td>Iron</td><td>Steel, made cheap by the <strong>Bessemer process</strong></td></tr><tr><td>Leading industries</td><td>Textiles, railroads</td><td>Chemicals, electrical goods, automobiles</td></tr><tr><td>Communication</td><td>Telegraph (1840s)</td><td>Telephone, radio</td></tr></table>",
      claims: [
        {
          id: "germany",
          sol: "WHII.7.e",
          stem: "Sentence 3 names Germany as a leader of the second wave. Which development of 1871 most helped German industry grow?",
          choices: [
            { letter: "A", text: "the restoration of the Holy Roman Empire" },
            { letter: "B", text: "Napoleon's Continental System" },
            { letter: "C", text: "the union of the German states into one empire" },
            { letter: "D", text: "the breakup of the Zollverein customs union" }
          ],
          correct: "C"
        },
        {
          id: "invention",
          sol: "WHII.7.b",
          stem: "Which invention belongs to the Second Industrial Revolution?",
          choices: [
            { letter: "A", text: "the spinning jenny" },
            { letter: "B", text: "Watt's improved steam engine" },
            { letter: "C", text: "the steam locomotive" },
            { letter: "D", text: "the telephone" }
          ],
          correct: "D"
        },
        {
          id: "bessemer",
          sol: "WHII.7.b",
          stem: "In the table, the Bessemer process was a method of —",
          choices: [
            { letter: "A", text: "making steel cheaply" },
            { letter: "B", text: "spinning cotton thread" },
            { letter: "C", text: "refining crude oil" },
            { letter: "D", text: "producing electric power" }
          ],
          correct: "A"
        },
        {
          id: "banks",
          sol: "WHII.7.a",
          stem: "According to sentence 4, why did the Second Industrial Revolution depend on corporations and banks?",
          choices: [
            { letter: "A", text: "Governments banned small family businesses." },
            { letter: "B", text: "Steel mills and power plants cost huge sums." },
            { letter: "C", text: "Inventors refused to work on their own." },
            { letter: "D", text: "Workers demanded to own the factories." }
          ],
          correct: "B"
        },
        {
          id: "compare",
          sol: "WHII.7.b",
          stem: "Which statement best compares the two Industrial Revolutions?",
          choices: [
            { letter: "A", text: "The first used steam; the second added electricity." },
            { letter: "B", text: "The first spread widely; the second stayed in Britain." },
            { letter: "C", text: "Both relied mainly on wind and water power." },
            { letter: "D", text: "The second ended the use of railroads and iron." }
          ],
          correct: "A"
        },
        {
          id: "cities",
          sol: "WHII.7.b",
          stem: "Which was a social effect of both Industrial Revolutions?",
          choices: [
            { letter: "A", text: "a return of most people to farm work" },
            { letter: "B", text: "the end of all child labor by 1800" },
            { letter: "C", text: "a long decline in Europe's total population" },
            { letter: "D", text: "fast growth of cities as workers sought jobs" }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "indu-factory-life",
      family: "INDU",
      title: "Children in the mills",
      kind: "Industry, Imperialism & Nationalism · WHII.7",
      blurb: "Testimony before Parliament, the Factory Act and new responses to industry.",
      level: 3,
      passage: "<p>" + N(1) + "In 1832 a committee of Parliament led by Michael Sadler questioned workers about conditions in textile mills. " + N(2) + "The summary below is based on that testimony.</p><blockquote>A man who began work in a woolen mill at age eight said that in busy times the children worked from five in the morning until nine at night, with short breaks for meals. When they grew tired, an overseer struck them to keep them awake.</blockquote><p class=\"src\">— Testimony before the Sadler Committee, 1832 (summary)</p><p>" + N(3) + "Reports like this led Parliament to pass the <strong>Factory Act</strong> of 1833, which barred children under nine from working in most textile mills and limited the hours of older children. " + N(4) + "Later laws shortened hours further, and workers formed <strong>labor unions</strong> to bargain for better pay and safer conditions.</p>",
      claims: [
        {
          id: "purpose",
          sol: "WHII.7.b",
          stem: "The main purpose of the Sadler Committee's hearings was to —",
          choices: [
            { letter: "A", text: "train children to run new machines" },
            { letter: "B", text: "collect evidence about child labor" },
            { letter: "C", text: "set prices for British cloth" },
            { letter: "D", text: "choose new members of Parliament" }
          ],
          correct: "B"
        },
        {
          id: "unions",
          sol: "WHII.7.b",
          stem: "In sentence 4, labor unions are —",
          choices: [
            { letter: "A", text: "groups of workers who bargain as one" },
            { letter: "B", text: "laws that set the hours of factories" },
            { letter: "C", text: "groups of mill owners who set prices" },
            { letter: "D", text: "machines that join two tasks into one" }
          ],
          correct: "A"
        },
        {
          id: "link",
          sol: "WHII.7.b",
          stem: "Which statement best describes the link between the testimony and the Factory Act of 1833?",
          choices: [
            { letter: "A", text: "The Act was passed before any testimony was heard." },
            { letter: "B", text: "The testimony persuaded owners to raise wages." },
            { letter: "C", text: "The Act required all children to work in mills." },
            { letter: "D", text: "Evidence of abuse moved lawmakers to limit child labor." }
          ],
          correct: "D"
        },
        {
          id: "why",
          sol: "WHII.7.a",
          stem: "Why did many early factory owners hire children?",
          choices: [
            { letter: "A", text: "Laws required every mill to hire children." },
            { letter: "B", text: "Children were better educated than adults." },
            { letter: "C", text: "Children could be paid less than adults." },
            { letter: "D", text: "Parents were barred from working in mills." }
          ],
          correct: "C"
        },
        {
          id: "bismarck",
          sol: "WHII.7.e",
          stem: "In the 1880s, Bismarck's Germany responded to the demands of industrial workers by creating —",
          choices: [
            { letter: "A", text: "health and accident insurance for workers" },
            { letter: "B", text: "free farmland for each factory worker" },
            { letter: "C", text: "a law that made Germany a republic" },
            { letter: "D", text: "a law that closed Germany's steel mills" }
          ],
          correct: "A"
        },
        {
          id: "marx",
          sol: "WHII.7.a",
          stem: "In 1848 Karl Marx and Friedrich Engels responded to the conditions of industrial workers by publishing —",
          choices: [
            { letter: "A", text: "The Wealth of Nations" },
            { letter: "B", text: "The Communist Manifesto" },
            { letter: "C", text: "The Social Contract" },
            { letter: "D", text: "The Spirit of the Laws" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "indu-italy-map",
      family: "INDU",
      title: "Italy on the map",
      kind: "Industry, Imperialism & Nationalism · WHII.7",
      blurb: "A divided peninsula in 1850 and the steps to one kingdom.",
      level: 2,
      passage: "<p>" + N(1) + "In 1850 the Italian <strong>peninsula</strong> was divided among several states. " + N(2) + "On a map, the Kingdom of Sardinia, also called Piedmont, lies in the northwest, bordering France. " + N(3) + "Austria rules Lombardy and Venetia in the northeast. " + N(4) + "The Papal States, governed by the pope, stretch across the center, and the Kingdom of the Two Sicilies covers the south and the island of Sicily.</p><ul><li><strong>1859</strong> Sardinia, with help from France, defeats Austria and gains Lombardy</li><li><strong>1860</strong> Garibaldi conquers the Two Sicilies and hands them to King Victor Emmanuel II of Sardinia</li><li><strong>1861</strong> The Kingdom of Italy is proclaimed</li><li><strong>1866</strong> Italy gains Venetia after Prussia defeats Austria</li><li><strong>1870</strong> French troops leave Rome during the Franco-Prussian War, and Italian troops take the city</li></ul>",
      claims: [
        {
          id: "foreign",
          sol: "WHII.7.d",
          stem: "Based on the map description, which foreign power controlled part of northern Italy in 1850?",
          choices: [
            { letter: "A", text: "France" },
            { letter: "B", text: "Austria" },
            { letter: "C", text: "Spain" },
            { letter: "D", text: "Prussia" }
          ],
          correct: "B"
        },
        {
          id: "first",
          sol: "WHII.7.d",
          stem: "Which of these events happened FIRST?",
          choices: [
            { letter: "A", text: "Italy gains Venetia." },
            { letter: "B", text: "Italian troops take Rome." },
            { letter: "C", text: "Garibaldi conquers the south." },
            { letter: "D", text: "The Kingdom of Italy is proclaimed." }
          ],
          correct: "C"
        },
        {
          id: "prussia",
          sol: "WHII.7.e",
          stem: "Which conclusion is best supported by the entries for 1866 and 1870?",
          choices: [
            { letter: "A", text: "Italy gained land as Prussia fought Austria and France." },
            { letter: "B", text: "Italy and Prussia went to war against each other." },
            { letter: "C", text: "France helped Italian troops capture Rome by force." },
            { letter: "D", text: "Austria handed Venetia over to the pope in 1866." }
          ],
          correct: "A"
        },
        {
          id: "peninsula",
          sol: "WHII.7.d",
          stem: "In sentence 1, the word peninsula means —",
          choices: [
            { letter: "A", text: "a chain of high mountains" },
            { letter: "B", text: "a large inland lake" },
            { letter: "C", text: "an island far out from the shore" },
            { letter: "D", text: "land nearly surrounded by water" }
          ],
          correct: "D"
        },
        {
          id: "economy",
          sol: "WHII.7.a",
          stem: "Cavour also built railroads and encouraged industry in Sardinia. These policies most likely helped Sardinia —",
          choices: [
            { letter: "A", text: "build the economic strength to lead Italy" },
            { letter: "B", text: "win the support of the Austrian emperor" },
            { letter: "C", text: "become a colony of France" },
            { letter: "D", text: "persuade the pope to rule all of Italy" }
          ],
          correct: "A"
        },
        {
          id: "help",
          sol: "WHII.7.d",
          stem: "Why did Sardinia seek help from France in 1859?",
          choices: [
            { letter: "A", text: "France ruled the Papal States." },
            { letter: "B", text: "Austria was a close French ally." },
            { letter: "C", text: "It was too weak to defeat Austria alone." },
            { letter: "D", text: "France wanted Italy to become a republic." }
          ],
          correct: "C"
        }
      ]
    },
    /* ---------- long ---------- */
    {
      id: "indu-german-unity",
      family: "INDU",
      title: "Bismarck builds an empire",
      kind: "Industry, Imperialism & Nationalism · WHII.7",
      blurb: "A customs union, three wars and a crowning in the Hall of Mirrors.",
      level: 3,
      passage: "<p>" + N(1) + "In 1815 the Congress of Vienna left the German-speaking lands divided into 39 states in a loose confederation. " + N(2) + "Two powers, Austria and Prussia, competed to lead them. " + N(3) + "Prussia gained an edge through the <strong>Zollverein</strong>, a customs union formed in 1834 that ended tariffs among most German states but left out Austria. " + N(4) + "Railroads and coal mines in the Ruhr and Silesia made Prussia an industrial power. " + N(5) + "After 1862, Otto von Bismarck, Prussia's chief minister, followed <strong>realpolitik</strong>, a policy based on practical power rather than ideals. " + N(6) + "He planned to unite Germany under Prussia and to keep Austria out.</p><ul><li><strong>1864</strong> Prussia and Austria defeat Denmark and take Schleswig and Holstein</li><li><strong>1866</strong> Prussia defeats Austria in the Seven Weeks' War; Austria is shut out of German affairs</li><li><strong>1867</strong> Prussia forms the North German Confederation</li><li><strong>1870–1871</strong> The southern German states join Prussia in the Franco-Prussian War; France is defeated</li><li><strong>1871</strong> King Wilhelm I of Prussia is proclaimed German emperor, or <strong>kaiser</strong>, in the Hall of Mirrors at Versailles</li></ul>",
      claims: [
        {
          id: "zollverein",
          sol: "WHII.7.a",
          stem: "In sentence 3, the Zollverein was —",
          choices: [
            { letter: "A", text: "a Prussian army reserve" },
            { letter: "B", text: "the elected German parliament" },
            { letter: "C", text: "a union ending tariffs among states" },
            { letter: "D", text: "a treaty of alliance with France" }
          ],
          correct: "C"
        },
        {
          id: "firstwar",
          sol: "WHII.7.e",
          stem: "According to the timeline, which war came FIRST?",
          choices: [
            { letter: "A", text: "the war against Denmark" },
            { letter: "B", text: "the Seven Weeks' War" },
            { letter: "C", text: "the Franco-Prussian War" },
            { letter: "D", text: "the Crimean War" }
          ],
          correct: "A"
        },
        {
          id: "france",
          sol: "WHII.7.e",
          stem: "Why did a war with France in 1870 serve Bismarck's goals?",
          choices: [
            { letter: "A", text: "France had taken Schleswig and Holstein." },
            { letter: "B", text: "He hoped to make Prussia part of France." },
            { letter: "C", text: "France had refused to join the Zollverein." },
            { letter: "D", text: "A common enemy drew the south to Prussia." }
          ],
          correct: "D"
        },
        {
          id: "austria",
          sol: "WHII.7.e",
          stem: "Why was Austria left out of the new German Empire?",
          choices: [
            { letter: "A", text: "Austria joined France in the war of 1870." },
            { letter: "B", text: "Prussia defeated Austria in the war of 1866." },
            { letter: "C", text: "Austria had no German-speaking people." },
            { letter: "D", text: "The pope forbade Austria to join." }
          ],
          correct: "B"
        },
        {
          id: "mirrors",
          sol: "WHII.7.e",
          stem: "Proclaiming the German Empire in the Hall of Mirrors at Versailles most likely —",
          choices: [
            { letter: "A", text: "honored France as Germany's closest ally" },
            { letter: "B", text: "showed that Bismarck wanted a republic" },
            { letter: "C", text: "humiliated the defeated French" },
            { letter: "D", text: "returned Alsace and Lorraine to France" }
          ],
          correct: "C"
        },
        {
          id: "italy",
          sol: "WHII.7.d",
          stem: "How was the unification of Germany similar to the unification of Italy?",
          choices: [
            { letter: "A", text: "One strong state led each, using war and diplomacy." },
            { letter: "B", text: "Both were achieved through peaceful votes alone." },
            { letter: "C", text: "Both were led by the Austrian emperor." },
            { letter: "D", text: "Both new nations became republics in 1871." }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "indu-scramble",
      family: "INDU",
      title: "The scramble for Africa",
      kind: "Industry, Imperialism & Nationalism · WHII.7",
      blurb: "Motives, technology, the Berlin Conference and African resistance.",
      level: 3,
      passage: "<p>" + N(1) + "In 1880 Europeans controlled only small parts of Africa, mostly along the coasts. " + N(2) + "By 1914 they claimed nearly the whole continent. " + N(3) + "Industrial nations wanted raw materials such as rubber, copper and palm oil, and new markets for their factory goods. " + N(4) + "Nationalism pushed them to compete for colonies as symbols of power, and many Europeans held the racist belief that they had a duty to \"civilize\" Africans. " + N(5) + "Technology made conquest easier: steamships carried troops up rivers, quinine protected them from malaria, and the machine gun gave small European forces deadly firepower. " + N(6) + "At the <strong>Berlin Conference</strong> of 1884–1885, European leaders set rules for dividing Africa with no African representatives present.</p><p>" + N(7) + "Africans resisted in many ways, from armed revolt to diplomacy. " + N(8) + "The Zulu defeated a British army at Isandlwana in 1879 before Britain conquered their kingdom. " + N(9) + "In 1896 Emperor Menelik II of Ethiopia, whose army had bought modern rifles, defeated an Italian invasion at the Battle of Adwa. " + N(10) + "By 1914 only Ethiopia and Liberia remained independent of European rule.</p>",
      claims: [
        {
          id: "motive",
          sol: "WHII.7.a",
          stem: "According to sentence 3, which economic motive drove imperialism in Africa?",
          choices: [
            { letter: "A", text: "the wish to end the slave trade in Asia" },
            { letter: "B", text: "the need for raw materials and markets" },
            { letter: "C", text: "a shortage of farm workers in Europe" },
            { letter: "D", text: "the desire to spread Renaissance art" }
          ],
          correct: "B"
        },
        {
          id: "quinine",
          sol: "WHII.7.b",
          stem: "Which technology named in sentence 5 most helped Europeans survive disease in Africa?",
          choices: [
            { letter: "A", text: "steamships" },
            { letter: "B", text: "the machine gun" },
            { letter: "C", text: "quinine" },
            { letter: "D", text: "the telegraph" }
          ],
          correct: "C"
        },
        {
          id: "berlin",
          sol: "WHII.7.c",
          stem: "In sentence 6, the Berlin Conference was a meeting at which —",
          choices: [
            { letter: "A", text: "African kings formed an alliance" },
            { letter: "B", text: "the German states were united" },
            { letter: "C", text: "Ethiopia was granted its independence" },
            { letter: "D", text: "Europeans set rules for claiming Africa" }
          ],
          correct: "D"
        },
        {
          id: "ethiopia",
          sol: "WHII.7.c",
          stem: "Ethiopia kept its independence mainly because —",
          choices: [
            { letter: "A", text: "Menelik II's modern army defeated Italy" },
            { letter: "B", text: "the Berlin Conference agreed to leave it alone" },
            { letter: "C", text: "it had no resources that Europeans wanted" },
            { letter: "D", text: "Britain made it a protectorate in 1896" }
          ],
          correct: "A"
        },
        {
          id: "respond",
          sol: "WHII.7.c",
          stem: "Which statement best describes African responses to imperialism?",
          choices: [
            { letter: "A", text: "Africans welcomed European rule everywhere." },
            { letter: "B", text: "Africans resisted, sometimes winning battles." },
            { letter: "C", text: "Africans had no armies of their own." },
            { letter: "D", text: "Resistance began only after 1914." }
          ],
          correct: "B"
        },
        {
          id: "two",
          sol: "WHII.7.c",
          stem: "Select TWO events that were armed resistance to European imperialism.",
          choices: [
            { letter: "A", text: "the Battle of Adwa" },
            { letter: "B", text: "the Congress of Vienna" },
            { letter: "C", text: "the Indian Rebellion of 1857" },
            { letter: "D", text: "the founding of the Zollverein" }
          ],
          correct: ["A", "C"]
        }
      ]
    },
    {
      id: "indu-capital-ideas",
      family: "INDU",
      title: "Capital and its critics",
      kind: "Industry, Imperialism & Nationalism · WHII.7",
      blurb: "Corporations and banks fund industry; Smith and Marx disagree about the result.",
      level: 3,
      passage: "<p>" + N(1) + "Industrial growth required capital, money invested to build factories, mines and railroads. " + N(2) + "Entrepreneurs raised it by forming <strong>corporations</strong>, businesses owned by many investors who buy shares of stock. " + N(3) + "Banks pooled the savings of thousands of people and lent them to growing firms. " + N(4) + "Thinkers disagreed sharply about this new economy. " + N(5) + "The Scottish economist Adam Smith argued that free markets with little government interference, a policy called <strong>laissez-faire</strong>, would make nations rich. " + N(6) + "Two German writers, Karl Marx and Friedrich Engels, argued that factory owners exploited workers and predicted that workers would overthrow capitalism.</p><blockquote>He intends only his own gain, and he is in this, as in many other cases, led by an invisible hand to promote an end which was no part of his intention.</blockquote><p class=\"src\">— Adam Smith, The Wealth of Nations, 1776</p><blockquote>The workers have nothing to lose but their chains. They have a world to win. Workers of all countries, unite!</blockquote><p class=\"src\">— Karl Marx and Friedrich Engels, The Communist Manifesto, 1848 (translated, adapted)</p>",
      claims: [
        {
          id: "corp",
          sol: "WHII.7.a",
          stem: "In sentence 2, a corporation is —",
          choices: [
            { letter: "A", text: "a union of factory workers" },
            { letter: "B", text: "a government office that sets prices" },
            { letter: "C", text: "a bank owned by the king" },
            { letter: "D", text: "a business owned by shareholders" }
          ],
          correct: "D"
        },
        {
          id: "boxers",
          sol: "WHII.7.c",
          stem: "European investors also built railroads and telegraph lines in China. During the Boxer Rebellion, many Chinese showed their opposition by —",
          choices: [
            { letter: "A", text: "tearing up railroads and attacking foreigners" },
            { letter: "B", text: "buying shares in European railroad firms" },
            { letter: "C", text: "inviting more foreign investment" },
            { letter: "D", text: "building new factories for European owners" }
          ],
          correct: "A"
        },
        {
          id: "hand",
          sol: "WHII.7.a",
          stem: "Smith's \"invisible hand\" suggests that —",
          choices: [
            { letter: "A", text: "governments should plan every part of the economy" },
            { letter: "B", text: "people seeking their own gain can benefit society" },
            { letter: "C", text: "workers should seize the factories they work in" },
            { letter: "D", text: "kings should control all trade within their lands" }
          ],
          correct: "B"
        },
        {
          id: "contrast",
          sol: "WHII.7.a",
          stem: "Which statement best describes the difference between the two excerpts?",
          choices: [
            { letter: "A", text: "Both call on workers to seize the factories." },
            { letter: "B", text: "Smith calls for revolution; Marx defends owners." },
            { letter: "C", text: "Smith trusts markets; Marx and Engels urge revolt." },
            { letter: "D", text: "Both demand that kings control the economy." }
          ],
          correct: "C"
        },
        {
          id: "laissez",
          sol: "WHII.7.b",
          stem: "A supporter of laissez-faire would most likely oppose —",
          choices: [
            { letter: "A", text: "private ownership of factories" },
            { letter: "B", text: "government rules for business" },
            { letter: "C", text: "free trade between nations" },
            { letter: "D", text: "competition among companies" }
          ],
          correct: "B"
        },
        {
          id: "manifesto",
          sol: "WHII.7.b",
          stem: "The Communist Manifesto was mainly a response to which effect of industrialization?",
          choices: [
            { letter: "A", text: "the decline of cities in Europe" },
            { letter: "B", text: "the closing of Britain's coal mines" },
            { letter: "C", text: "the fall of Napoleon in 1815" },
            { letter: "D", text: "the hard lives of factory workers" }
          ],
          correct: "D"
        }
      ]
    }
  ];

  for (var i = 0; i < PACKS.length; i++) P.push(PACKS[i]);
})(typeof window !== "undefined" ? window : global);
