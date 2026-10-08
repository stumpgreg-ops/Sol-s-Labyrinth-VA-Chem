/* SOL Lab — Virginia & U.S. Government · Foreign Policy & the Economy (GOVT.12–14). Original text only. */
(function (global) {
  var P = global.HEIST_PACKS;
  if (!P || !P.push) return;
  var N = function (i) { return '<span class="n">(' + i + ')</span> '; };   // numbered sentence

  var PACKS = [
    /* ---------- tiny ---------- */
    {
      id: "econ-treaty-power",
      family: "ECON",
      title: "Who speaks for the nation abroad?",
      kind: "Foreign Policy & the Economy · GOVT.12",
      blurb: "Article II on treaties and the commander in chief.",
      level: 1,
      passage: "<blockquote><p>" + N(1) + "\"The President shall be <strong>Commander in Chief</strong> of the Army and Navy of the United States...\"</p><p>" + N(2) + "\"He shall have Power, by and with the Advice and Consent of the Senate, to make Treaties, provided two thirds of the Senators present concur...\"</p></blockquote><p class=\"src\">— U.S. Constitution, Article II, Section 2</p><p>" + N(3) + "Article I gives Congress the power to declare war and to pay for the armed forces.</p>",
      claims: [
        {
          id: "treaty",
          sol: "GOVT.12.a",
          stem: "According to the excerpt, who must approve a treaty before it takes effect?",
          choices: [
            { letter: "A", text: "a majority of the House of Representatives" },
            { letter: "B", text: "the justices of the Supreme Court" },
            { letter: "C", text: "two-thirds of the senators present" },
            { letter: "D", text: "the governors of three-fourths of the states" }
          ],
          correct: "C"
        },
        {
          id: "congress",
          sol: "GOVT.12.a",
          stem: "Which foreign-policy power belongs to Congress rather than to the president?",
          choices: [
            { letter: "A", text: "declaring war" },
            { letter: "B", text: "commanding the armed forces" },
            { letter: "C", text: "negotiating treaties" },
            { letter: "D", text: "receiving foreign ambassadors" }
          ],
          correct: "A"
        },
        {
          id: "cinc",
          sol: "GOVT.12.a",
          stem: "In sentence 1, the title Commander in Chief means that the president —",
          choices: [
            { letter: "A", text: "may declare war on another nation without Congress" },
            { letter: "B", text: "sets the yearly military budget alone" },
            { letter: "C", text: "is the top commander of the armed forces" },
            { letter: "D", text: "appoints every military officer for life" }
          ],
          correct: "C"
        },
        {
          id: "checks",
          sol: "GOVT.12.b",
          stem: "Dividing foreign-policy powers between the president and Congress most directly reflects which principle?",
          choices: [
            { letter: "A", text: "federalism" },
            { letter: "B", text: "checks and balances" },
            { letter: "C", text: "popular sovereignty" },
            { letter: "D", text: "judicial review" }
          ],
          correct: "B"
        },
        {
          id: "state-dept",
          sol: "GOVT.12.a",
          stem: "Which executive department is chiefly responsible for carrying out U.S. diplomacy with other nations?",
          choices: [
            { letter: "A", text: "the Department of Defense" },
            { letter: "B", text: "the Department of Commerce" },
            { letter: "C", text: "the Department of Homeland Security" },
            { letter: "D", text: "the Department of State" }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "econ-butcher-baker",
      family: "ECON",
      title: "The butcher, the brewer and the baker",
      kind: "Foreign Policy & the Economy · GOVT.13",
      blurb: "Adam Smith on self-interest and the invisible hand.",
      level: 1,
      passage: "<p>" + N(1) + "In 1776, Scottish thinker Adam Smith published <em>The Wealth of Nations</em>.</p><blockquote><p>" + N(2) + "\"It is not from the <strong>benevolence</strong> of the butcher, the brewer, or the baker, that we expect our dinner, but from their regard to their own interest.\"</p></blockquote><p class=\"src\">— Adam Smith, <em>The Wealth of Nations</em></p><p>" + N(3) + "Smith argued that people seeking their own gain in competitive markets are led, as if by an <strong>invisible hand</strong>, to serve others.</p>",
      claims: [
        {
          id: "main",
          sol: "GOVT.13.b",
          stem: "What is Smith's main point in sentence 2?",
          choices: [
            { letter: "A", text: "Sellers serve customers mainly because doing so serves their own interest." },
            { letter: "B", text: "Government should set the price of bread, meat and beer." },
            { letter: "C", text: "Butchers and bakers should share their profits with their workers." },
            { letter: "D", text: "Trade between strangers usually harms one of the two sides." }
          ],
          correct: "A"
        },
        {
          id: "vocab",
          sol: "GOVT.13.b",
          stem: "In sentence 2, the word benevolence most nearly means —",
          choices: [
            { letter: "A", text: "selfishness" },
            { letter: "B", text: "kindness or goodwill" },
            { letter: "C", text: "skill at a trade" },
            { letter: "D", text: "personal wealth" }
          ],
          correct: "B"
        },
        {
          id: "competition",
          sol: "GOVT.13.f",
          stem: "In Smith's view, what keeps a self-interested baker from charging any price he likes?",
          choices: [
            { letter: "A", text: "laws that fix the price of each good" },
            { letter: "B", text: "guild rules that limit the number of bakers" },
            { letter: "C", text: "competition from other bakers" },
            { letter: "D", text: "the generosity of wealthy customers" }
          ],
          correct: "C"
        },
        {
          id: "role",
          sol: "GOVT.14.a",
          stem: "Which role for government is most consistent with Smith's ideas?",
          choices: [
            { letter: "A", text: "owning the nation's farms and bakeries" },
            { letter: "B", text: "setting the wages of every occupation" },
            { letter: "C", text: "planning what each workshop produces" },
            { letter: "D", text: "enforcing contracts and protecting property" }
          ],
          correct: "D"
        },
        {
          id: "hand",
          sol: "GOVT.13.e",
          stem: "In a market system, the invisible hand describes the way —",
          choices: [
            { letter: "A", text: "a central planning board assigns workers to jobs" },
            { letter: "B", text: "prices and self-interest coordinate production without central direction" },
            { letter: "C", text: "government officials quietly control what stores may sell" },
            { letter: "D", text: "a single large firm decides the supply of every good" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "econ-tax-types",
      family: "ECON",
      title: "Who collects which tax?",
      kind: "Foreign Policy & the Economy · GOVT.14",
      blurb: "A table of the taxes that pay for federal, state and local services.",
      level: 1,
      passage: "<p>" + N(1) + "Governments at every level collect taxes to pay for services.</p><table><tr><th>Tax</th><th>Collected by</th><th>Based on</th></tr><tr><td>Individual income tax</td><td>federal and Virginia</td><td>income</td></tr><tr><td>Sales tax</td><td>Virginia and localities</td><td>purchases</td></tr><tr><td>Real estate tax</td><td>counties and cities</td><td>property value</td></tr><tr><td>Payroll tax</td><td>federal</td><td>wages (funds Social Security and Medicare)</td></tr></table><p>" + N(2) + "A <strong>progressive</strong> tax takes a larger percentage of income as income rises; a <strong>regressive</strong> tax takes a larger share from low incomes.</p>",
      claims: [
        {
          id: "local",
          sol: "GOVT.14.d",
          stem: "Which tax is the largest local source of revenue for Virginia counties and cities?",
          choices: [
            { letter: "A", text: "the payroll tax" },
            { letter: "B", text: "the federal income tax" },
            { letter: "C", text: "the real estate tax" },
            { letter: "D", text: "the tax on imported goods" }
          ],
          correct: "C"
        },
        {
          id: "payroll",
          sol: "GOVT.14.d",
          stem: "According to the table, Social Security and Medicare are funded mainly by which tax?",
          choices: [
            { letter: "A", text: "the payroll tax" },
            { letter: "B", text: "the sales tax" },
            { letter: "C", text: "the real estate tax" },
            { letter: "D", text: "the Virginia income tax" }
          ],
          correct: "A"
        },
        {
          id: "progressive",
          sol: "GOVT.14.d",
          stem: "In sentence 2, a progressive tax is one that —",
          choices: [
            { letter: "A", text: "charges every taxpayer the same dollar amount" },
            { letter: "B", text: "takes a higher percentage from people with higher incomes" },
            { letter: "C", text: "is collected only by local governments" },
            { letter: "D", text: "falls only on goods such as gasoline and tobacco" }
          ],
          correct: "B"
        },
        {
          id: "regressive",
          sol: "GOVT.14.d",
          stem: "Which tax is usually classified as regressive?",
          choices: [
            { letter: "A", text: "the federal individual income tax" },
            { letter: "B", text: "the federal estate tax on large fortunes" },
            { letter: "C", text: "a tax whose rate rises as income rises" },
            { letter: "D", text: "a general sales tax on everyday purchases" }
          ],
          correct: "D"
        },
        {
          id: "schools",
          sol: "GOVT.14.b",
          stem: "Which service in a Virginia locality is paid for largely with local property taxes?",
          choices: [
            { letter: "A", text: "public schools" },
            { letter: "B", text: "the U.S. Postal Service" },
            { letter: "C", text: "national defense" },
            { letter: "D", text: "Social Security checks" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "econ-fed-timeline",
      family: "ECON",
      title: "A century of the Fed",
      kind: "Foreign Policy & the Economy · GOVT.14",
      blurb: "The Federal Reserve from 1913 to the inflation of 2022.",
      level: 1,
      passage: "<p>" + N(1) + "The Federal Reserve makes U.S. monetary policy.</p><ul><li><strong>1913</strong> Congress creates the Federal Reserve System as the central bank of the United States.</li><li><strong>1977</strong> Congress directs the Fed to pursue maximum employment and stable prices, later called its <strong>dual mandate</strong>.</li><li><strong>2008</strong> During a financial crisis, the Fed cuts its target interest rate to near zero.</li><li><strong>2022</strong> Facing the highest inflation in 40 years, the Fed raises interest rates quickly.</li></ul>",
      claims: [
        {
          id: "who",
          sol: "GOVT.14.f",
          stem: "Which institution is the central bank of the United States?",
          choices: [
            { letter: "A", text: "the Department of the Treasury" },
            { letter: "B", text: "the Congressional Budget Office" },
            { letter: "C", text: "the Bureau of Labor Statistics" },
            { letter: "D", text: "the Federal Reserve System" }
          ],
          correct: "D"
        },
        {
          id: "raise",
          sol: "GOVT.14.f",
          stem: "Based on the timeline, the Fed raised interest rates in 2022 mainly to —",
          choices: [
            { letter: "A", text: "slow the rise in prices" },
            { letter: "B", text: "lower unemployment quickly" },
            { letter: "C", text: "pay off the national debt" },
            { letter: "D", text: "make borrowing cheaper" }
          ],
          correct: "A"
        },
        {
          id: "first",
          sol: "GOVT.14.f",
          stem: "Which event on the timeline happened FIRST?",
          choices: [
            { letter: "A", text: "the Fed cuts its target rate to near zero" },
            { letter: "B", text: "Congress creates the Federal Reserve System" },
            { letter: "C", text: "Congress gives the Fed its employment and price goals" },
            { letter: "D", text: "the Fed raises rates to fight inflation" }
          ],
          correct: "B"
        },
        {
          id: "fiscal",
          sol: "GOVT.14.e",
          stem: "How does monetary policy differ from fiscal policy?",
          choices: [
            { letter: "A", text: "Monetary policy is set by Congress; fiscal policy is set by the Fed." },
            { letter: "B", text: "Monetary policy changes taxes; fiscal policy changes interest rates." },
            { letter: "C", text: "The Fed sets monetary policy; Congress and the president set fiscal policy." },
            { letter: "D", text: "Both are set by the president alone through executive orders." }
          ],
          correct: "C"
        },
        {
          id: "mandate",
          sol: "GOVT.14.f",
          stem: "In the timeline, the dual mandate refers to the Fed's two goals of —",
          choices: [
            { letter: "A", text: "balanced budgets and lower taxes" },
            { letter: "B", text: "maximum employment and stable prices" },
            { letter: "C", text: "free trade and higher exports" },
            { letter: "D", text: "bank profits and a strong dollar" }
          ],
          correct: "B"
        }
      ]
    },

    /* ---------- short ---------- */
    {
      id: "econ-port-virginia",
      family: "ECON",
      title: "From Jamestown tobacco to Hampton Roads containers",
      kind: "Foreign Policy & the Economy · GOVT.12",
      blurb: "Virginia's ports tie farms and factories to the world.",
      level: 1,
      passage: "<p>" + N(1) + "Virginia's location on the Chesapeake Bay and the Atlantic Ocean has tied it to world trade since tobacco ships sailed from Jamestown in the 1600s. " + N(2) + "Today the Port of Virginia, centered in Hampton Roads, is one of the busiest container ports on the East Coast. " + N(3) + "Ships leave carrying Virginia exports such as soybeans, wood products and coal, and arrive with imports such as furniture, machinery and clothing. " + N(4) + "Jobs from truck drivers in Norfolk to farmers in the Shenandoah Valley depend on this <strong>international trade</strong>. " + N(5) + "Trade agreements such as the United States-Mexico-Canada Agreement, which replaced NAFTA in 2020, lower <strong>tariffs</strong> and set rules for trade.</p>",
      claims: [
        {
          id: "geo",
          sol: "GOVT.12.c",
          stem: "Which geographic feature most helped Virginia take part in world trade?",
          choices: [
            { letter: "A", text: "the ridges of the Blue Ridge Mountains" },
            { letter: "B", text: "access to the Chesapeake Bay and the Atlantic" },
            { letter: "C", text: "the fertile soil of the Shenandoah Valley" },
            { letter: "D", text: "the coal deposits of the Appalachian Plateau" }
          ],
          correct: "B"
        },
        {
          id: "conclude",
          sol: "GOVT.12.c",
          stem: "Which conclusion is best supported by the passage?",
          choices: [
            { letter: "A", text: "Virginia's economy is largely isolated from world markets." },
            { letter: "B", text: "Virginia exports mainly factory goods and imports mainly crops." },
            { letter: "C", text: "Only workers on the coast are affected by foreign trade." },
            { letter: "D", text: "Global trade affects jobs in both coastal and inland Virginia." }
          ],
          correct: "D"
        },
        {
          id: "tariff",
          sol: "GOVT.12.c",
          stem: "In sentence 5, the word tariffs most nearly means —",
          choices: [
            { letter: "A", text: "taxes on imported goods" },
            { letter: "B", text: "limits on immigration" },
            { letter: "C", text: "loans to foreign nations" },
            { letter: "D", text: "fees for using a port" }
          ],
          correct: "A"
        },
        {
          id: "consumers",
          sol: "GOVT.13.f",
          stem: "How does competition from foreign producers most likely affect Virginia consumers?",
          choices: [
            { letter: "A", text: "It removes most goods from store shelves." },
            { letter: "B", text: "It forces consumers to buy only Virginia products." },
            { letter: "C", text: "It tends to widen choices and hold down prices." },
            { letter: "D", text: "It raises prices because fewer goods are sold." }
          ],
          correct: "C"
        },
        {
          id: "interest",
          sol: "GOVT.12.b",
          stem: "A trade agreement such as the one in sentence 5 serves the U.S. national interest mainly by —",
          choices: [
            { letter: "A", text: "ending all U.S. imports from other continents" },
            { letter: "B", text: "opening foreign markets to American goods" },
            { letter: "C", text: "letting other nations set U.S. tax rates" },
            { letter: "D", text: "replacing the Senate's role in approving treaties" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "econ-manifesto",
      family: "ECON",
      title: "The Communist Manifesto",
      kind: "Foreign Policy & the Economy · GOVT.13",
      blurb: "Marx and Engels on class struggle and private property.",
      level: 2,
      passage: "<p>" + N(1) + "In 1848 Karl Marx and Friedrich Engels published <em>The Communist Manifesto</em>.</p><blockquote><p>" + N(2) + "\"The history of all hitherto existing society is the history of class struggles.\"</p><p>" + N(3) + "\"In this sense, the theory of the Communists may be summed up in the single sentence: Abolition of private property.\"</p></blockquote><p class=\"src\">— <em>The Communist Manifesto</em>, 1848 (1888 English translation)</p><p>" + N(4) + "Marx predicted that the workers, or <strong>proletariat</strong>, would overthrow the owners of factories, the bourgeoisie, and build a classless society.</p>",
      claims: [
        {
          id: "history",
          sol: "GOVT.13.b",
          stem: "According to sentence 2, Marx viewed history mainly as —",
          choices: [
            { letter: "A", text: "the story of great kings and generals" },
            { letter: "B", text: "steady progress through free trade" },
            { letter: "C", text: "conflict between social classes" },
            { letter: "D", text: "the spread of religious ideas" }
          ],
          correct: "C"
        },
        {
          id: "fifth",
          sol: "GOVT.13.d",
          stem: "Which guarantee in the Bill of Rights most directly conflicts with sentence 3?",
          choices: [
            { letter: "A", text: "No one may be deprived of property without due process of law." },
            { letter: "B", text: "Excessive bail shall not be required of an accused person." },
            { letter: "C", text: "Congress may not abridge the freedom of the press." },
            { letter: "D", text: "The accused has the right to a speedy and public trial." }
          ],
          correct: "A"
        },
        {
          id: "contrast",
          sol: "GOVT.13.d",
          stem: "A key difference between the Bill of Rights and the Communist Manifesto is that the Bill of Rights —",
          choices: [
            { letter: "A", text: "calls on workers to overthrow the owners of factories" },
            { letter: "B", text: "transfers private property to the government" },
            { letter: "C", text: "grants rights to social classes rather than persons" },
            { letter: "D", text: "limits government to protect individual rights" }
          ],
          correct: "D"
        },
        {
          id: "vocab",
          sol: "GOVT.13.a",
          stem: "In sentence 4, the word proletariat refers to —",
          choices: [
            { letter: "A", text: "the owners of land and factories" },
            { letter: "B", text: "workers who earn wages for their labor" },
            { letter: "C", text: "elected members of a legislature" },
            { letter: "D", text: "merchants who trade overseas" }
          ],
          correct: "B"
        },
        {
          id: "compare",
          sol: "GOVT.13.c",
          stem: "Compared with capitalism, socialist and communist systems generally —",
          choices: [
            { letter: "A", text: "rely more on private owners to make economic decisions" },
            { letter: "B", text: "give individuals more freedom to start their own businesses" },
            { letter: "C", text: "give government a larger role in owning the means of production" },
            { letter: "D", text: "leave prices to be set entirely by supply and demand" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "econ-strawberry-freeze",
      family: "ECON",
      title: "A late freeze and the price of strawberries",
      kind: "Foreign Policy & the Economy · GOVT.13",
      blurb: "Supply, demand and the signals that prices send.",
      level: 1,
      passage: "<p>" + N(1) + "A late spring freeze destroys half of the strawberry crop in a farming region. " + N(2) + "At the farmers' market, strawberries that sold for $3 a quart last year now sell for $5. " + N(3) + "Shoppers buy fewer strawberries and more blueberries. " + N(4) + "Seeing the higher price, a grower in a nearby county that escaped the freeze ships more of his berries to the market. " + N(5) + "Price acts as a <strong>signal</strong>: it tells buyers to use less and tells sellers to bring more. " + N(6) + "By midsummer, as new supplies arrive, the price begins to fall.</p>",
      claims: [
        {
          id: "cause",
          sol: "GOVT.13.e",
          stem: "Which statement best explains why the price of strawberries rose?",
          choices: [
            { letter: "A", text: "Demand for strawberries rose sharply." },
            { letter: "B", text: "Supply fell while demand stayed about the same." },
            { letter: "C", text: "The government set a higher price." },
            { letter: "D", text: "Growers agreed together to raise prices." }
          ],
          correct: "B"
        },
        {
          id: "signal",
          sol: "GOVT.13.e",
          stem: "In sentence 5, the word signal most nearly means —",
          choices: [
            { letter: "A", text: "a law that buyers must follow" },
            { letter: "B", text: "a tax added to the price" },
            { letter: "C", text: "a warning issued by the government" },
            { letter: "D", text: "information that guides people's choices" }
          ],
          correct: "D"
        },
        {
          id: "blueberries",
          sol: "GOVT.13.e",
          stem: "Sentence 3 shows that when the price of a good rises, consumers often —",
          choices: [
            { letter: "A", text: "switch to a substitute good" },
            { letter: "B", text: "buy more of the same good" },
            { letter: "C", text: "stop shopping at markets" },
            { letter: "D", text: "ask the state to pay the difference" }
          ],
          correct: "A"
        },
        {
          id: "grower",
          sol: "GOVT.13.f",
          stem: "The grower in sentence 4 best illustrates which feature of free enterprise?",
          choices: [
            { letter: "A", text: "government ownership of farmland" },
            { letter: "B", text: "central planning of food supplies" },
            { letter: "C", text: "the profit motive drawing in new supply" },
            { letter: "D", text: "a monopoly limiting what reaches market" }
          ],
          correct: "C"
        },
        {
          id: "ceiling",
          sol: "GOVT.14.g",
          stem: "Suppose the government had required strawberries to sell for no more than $3 a quart after the freeze. Which result would most likely follow?",
          choices: [
            { letter: "A", text: "a shortage, with many shoppers unable to buy berries" },
            { letter: "B", text: "a surplus of unsold berries at the market" },
            { letter: "C", text: "growers shipping in more berries than before" },
            { letter: "D", text: "no change at all in what shoppers could buy" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "econ-lighthouse",
      family: "ECON",
      title: "Why no one sells lighthouse tickets",
      kind: "Foreign Policy & the Economy · GOVT.14",
      blurb: "Public goods, free riders and taxes.",
      level: 2,
      passage: "<p>" + N(1) + "Some goods are hard for private businesses to sell. " + N(2) + "A lighthouse warns every passing ship, whether or not its owner pays, and one ship's use of the light does not dim it for others. " + N(3) + "Economists call such things <strong>public goods</strong>: no one can easily be excluded from using them, and one person's use does not reduce what others receive. " + N(4) + "Because people can enjoy them without paying, a <strong>free rider</strong> problem appears, and few firms will supply them. " + N(5) + "Governments therefore provide goods such as national defense, flood control and street lights, paying for them with taxes.</p>",
      claims: [
        {
          id: "example",
          sol: "GOVT.14.b",
          stem: "Which is the best example of a public good as defined in sentence 3?",
          choices: [
            { letter: "A", text: "a slice of pizza" },
            { letter: "B", text: "a movie ticket" },
            { letter: "C", text: "national defense" },
            { letter: "D", text: "a cell phone plan" }
          ],
          correct: "C"
        },
        {
          id: "freerider",
          sol: "GOVT.14.b",
          stem: "In sentence 4, a free rider is a person who —",
          choices: [
            { letter: "A", text: "benefits from a good without paying for it" },
            { letter: "B", text: "volunteers to build public projects" },
            { letter: "C", text: "rides public transit at a discount" },
            { letter: "D", text: "sells goods without a business license" }
          ],
          correct: "A"
        },
        {
          id: "why",
          sol: "GOVT.14.b",
          stem: "According to the passage, why do private firms supply few public goods?",
          choices: [
            { letter: "A", text: "The law forbids businesses from selling them." },
            { letter: "B", text: "Few people want or need such goods." },
            { letter: "C", text: "Such goods cost nothing to produce." },
            { letter: "D", text: "Firms cannot easily collect payment from users." }
          ],
          correct: "D"
        },
        {
          id: "pay",
          sol: "GOVT.14.d",
          stem: "How are the public goods named in sentence 5 mainly paid for?",
          choices: [
            { letter: "A", text: "fees charged to each person who uses them" },
            { letter: "B", text: "taxes collected by government" },
            { letter: "C", text: "donations from private charities" },
            { letter: "D", text: "profits earned by private firms" }
          ],
          correct: "B"
        },
        {
          id: "limited",
          sol: "GOVT.14.a",
          stem: "Which statement best describes government's role in the U.S. free enterprise system?",
          choices: [
            { letter: "A", text: "Government owns most businesses and decides what each produces." },
            { letter: "B", text: "Government plays no role, leaving every good to private firms." },
            { letter: "C", text: "Government's role is limited but important, such as supplying public goods." },
            { letter: "D", text: "Government sets the price of most goods sold in stores." }
          ],
          correct: "C"
        }
      ]
    },

    /* ---------- medium ---------- */
    {
      id: "econ-systems-table",
      family: "ECON",
      title: "Four economic systems side by side",
      kind: "Foreign Policy & the Economy · GOVT.13",
      blurb: "Who owns, who decides, and how much power the state holds.",
      level: 2,
      passage: "<table><tr><th>System</th><th>Who owns major industries</th><th>Who makes key economic decisions</th><th>Historical example</th></tr><tr><td>Capitalism</td><td>private individuals and businesses</td><td>consumers and producers in markets</td><td>the United States (a mixed economy)</td></tr><tr><td>Socialism</td><td>government or the public owns key industries</td><td>government planning alongside markets</td><td>Britain's nationalized coal and railways after 1945</td></tr><tr><td>Communism</td><td>the state, in the name of the people</td><td>central planners of a single ruling party</td><td>the Soviet Union, 1922–1991</td></tr><tr><td>Fascism</td><td>private owners, under tight state control</td><td>a nationalist dictatorship</td><td>Mussolini's Italy, 1922–1943</td></tr></table><p>" + N(1) + "Political systems are a related question. " + N(2) + "An <strong>authoritarian</strong> government concentrates power and limits political opposition, while a <strong>totalitarian</strong> government seeks to control nearly every part of public and private life.</p>",
      claims: [
        {
          id: "private",
          sol: "GOVT.13.a",
          stem: "According to the table, in which TWO systems do private owners keep most businesses? Select TWO.",
          choices: [
            { letter: "A", text: "capitalism" },
            { letter: "B", text: "socialism" },
            { letter: "C", text: "fascism" },
            { letter: "D", text: "communism" }
          ],
          correct: ["A", "C"]
        },
        {
          id: "contrast",
          sol: "GOVT.13.c",
          stem: "Which statement best contrasts capitalism and socialism?",
          choices: [
            { letter: "A", text: "Capitalism bans government services; socialism bans private property of every kind." },
            { letter: "B", text: "Capitalism relies on private ownership and markets; socialism gives government more ownership of key industries." },
            { letter: "C", text: "Capitalism requires a single ruling party; socialism requires a king and nobility." },
            { letter: "D", text: "Capitalism sets prices by central planning; socialism sets all prices by supply and demand." }
          ],
          correct: "B"
        },
        {
          id: "vocab",
          sol: "GOVT.13.a",
          stem: "In sentence 2, a totalitarian government is one that —",
          choices: [
            { letter: "A", text: "shares power among several elected branches" },
            { letter: "B", text: "allows open opposition parties to compete" },
            { letter: "C", text: "leaves private life to individuals and families" },
            { letter: "D", text: "tries to control almost every part of life" }
          ],
          correct: "D"
        },
        {
          id: "stalin",
          sol: "GOVT.13.a",
          stem: "The Soviet Union under Joseph Stalin is a historical example of a government that was both communist and —",
          choices: [
            { letter: "A", text: "democratic" },
            { letter: "B", text: "federal" },
            { letter: "C", text: "totalitarian" },
            { letter: "D", text: "fascist" }
          ],
          correct: "C"
        },
        {
          id: "freedom",
          sol: "GOVT.13.c",
          stem: "Which individual economic freedom is generally greatest under capitalism?",
          choices: [
            { letter: "A", text: "starting a business and keeping its profits" },
            { letter: "B", text: "receiving a job assigned by state planners" },
            { letter: "C", text: "buying goods at prices fixed by the state" },
            { letter: "D", text: "working only in a state-owned industry" }
          ],
          correct: "A"
        },
        {
          id: "firstamend",
          sol: "GOVT.13.d",
          stem: "Which feature of the communist system in the table would most conflict with First Amendment freedoms?",
          choices: [
            { letter: "A", text: "ownership of industries by the state" },
            { letter: "B", text: "a single ruling party that allows no organized opposition" },
            { letter: "C", text: "economic decisions made by central planners" },
            { letter: "D", text: "the claim to act in the name of the people" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "econ-market-rules",
      family: "ECON",
      title: "The rules of the game",
      kind: "Foreign Policy & the Economy · GOVT.14",
      blurb: "Property, contracts, consumers, labor, the environment and competition.",
      level: 2,
      passage: "<p>" + N(1) + "Markets need rules to work. " + N(2) + "Governments define and protect <strong>property rights</strong>, so owners can use, sell or rent what they own, and courts enforce <strong>contracts</strong>, so people can trust the agreements they make. " + N(3) + "To protect consumers, the Pure Food and Drug Act of 1906 began federal food and drug safety rules, work the Food and Drug Administration carries on today. " + N(4) + "The National Labor Relations Act of 1935 protected workers' right to form unions and bargain collectively; Virginia's 1947 <strong>right-to-work</strong> law says no worker can be required to join a union to keep a job. " + N(5) + "The Environmental Protection Agency, created in 1970, enforces laws such as the Clean Air Act. " + N(6) + "To keep competition alive, the Sherman Antitrust Act of 1890 outlawed monopolizing trade.</p>",
      claims: [
        {
          id: "consumer",
          sol: "GOVT.14.c",
          stem: "Which law named in the passage was mainly meant to protect consumers?",
          choices: [
            { letter: "A", text: "the National Labor Relations Act" },
            { letter: "B", text: "the Pure Food and Drug Act" },
            { letter: "C", text: "the Sherman Antitrust Act" },
            { letter: "D", text: "Virginia's right-to-work law" }
          ],
          correct: "B"
        },
        {
          id: "antitrust",
          sol: "GOVT.14.c",
          stem: "A company buys up its rivals and uses its power to block new competitors. Which law in the passage would federal officials most likely use?",
          choices: [
            { letter: "A", text: "the Clean Air Act" },
            { letter: "B", text: "the Pure Food and Drug Act" },
            { letter: "C", text: "the National Labor Relations Act" },
            { letter: "D", text: "the Sherman Antitrust Act" }
          ],
          correct: "D"
        },
        {
          id: "rtw",
          sol: "GOVT.14.c",
          stem: "Under Virginia's right-to-work law, a worker —",
          choices: [
            { letter: "A", text: "cannot be required to join a union to keep a job" },
            { letter: "B", text: "is guaranteed a job by the state government" },
            { letter: "C", text: "must join a union after ninety days of work" },
            { letter: "D", text: "may not bargain collectively with an employer" }
          ],
          correct: "A"
        },
        {
          id: "vocab",
          sol: "GOVT.14.c",
          stem: "In sentence 2, contracts are best described as —",
          choices: [
            { letter: "A", text: "taxes paid on the sale of property" },
            { letter: "B", text: "licenses a business needs to open" },
            { letter: "C", text: "legally binding agreements between parties" },
            { letter: "D", text: "government rules on product safety" }
          ],
          correct: "C"
        },
        {
          id: "compete",
          sol: "GOVT.13.f",
          stem: "Why do governments act to keep markets competitive?",
          choices: [
            { letter: "A", text: "Competition guarantees every firm a profit." },
            { letter: "B", text: "Competition lets one firm set prices for an industry." },
            { letter: "C", text: "Competition tends to lower prices and spur new ideas." },
            { letter: "D", text: "Competition removes the need for any laws at all." }
          ],
          correct: "C"
        },
        {
          id: "conclude",
          sol: "GOVT.14.a",
          stem: "Which conclusion about government and markets is best supported by the passage?",
          choices: [
            { letter: "A", text: "Government decides what most private firms produce." },
            { letter: "B", text: "Government sets the rules, while private choices drive most economic activity." },
            { letter: "C", text: "Government rules for markets ended with the Sherman Act." },
            { letter: "D", text: "Government owns most of the nation's land and factories." }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "econ-recession-tools",
      family: "ECON",
      title: "Fighting the 2020 recession",
      kind: "Foreign Policy & the Economy · GOVT.14",
      blurb: "Fiscal and monetary policy when unemployment soars.",
      level: 2,
      passage: "<p>" + N(1) + "In a <strong>recession</strong>, output falls and unemployment rises. " + N(2) + "Congress and the president can respond with <strong>fiscal policy</strong>: cutting taxes or increasing government spending to raise demand for goods and services. " + N(3) + "The Federal Reserve can respond with monetary policy, lowering interest rates so that borrowing is cheaper. " + N(4) + "A line graph of the unemployment rate shows it jumping from under 4 percent in early 2020 to nearly 15 percent in April 2020, then sliding back below 4 percent by 2022. " + N(5) + "During that time Congress passed several large relief laws, including the CARES Act of March 2020, and the Fed cut its target interest rate to near zero. " + N(6) + "Federal spending rose far above tax revenue, adding trillions of dollars to the national debt.</p>",
      claims: [
        {
          id: "example",
          sol: "GOVT.14.e",
          stem: "Which action is an example of fiscal policy meant to fight a recession?",
          choices: [
            { letter: "A", text: "Congress passes a bill cutting income taxes." },
            { letter: "B", text: "The Fed lowers its target interest rate." },
            { letter: "C", text: "The Fed sells government bonds to banks." },
            { letter: "D", text: "Congress raises taxes and cuts spending." }
          ],
          correct: "A"
        },
        {
          id: "cares",
          sol: "GOVT.14.e",
          stem: "The CARES Act described in sentence 5 is best classified as —",
          choices: [
            { letter: "A", text: "monetary policy carried out by the Fed" },
            { letter: "B", text: "a regulation issued by an agency" },
            { letter: "C", text: "fiscal policy passed by Congress" },
            { letter: "D", text: "a trade agreement with other nations" }
          ],
          correct: "C"
        },
        {
          id: "keynes",
          sol: "GOVT.13.b",
          stem: "The approach in sentence 2 is most closely associated with which economist?",
          choices: [
            { letter: "A", text: "Karl Marx" },
            { letter: "B", text: "Friedrich Hayek" },
            { letter: "C", text: "Milton Friedman" },
            { letter: "D", text: "John Maynard Keynes" }
          ],
          correct: "D"
        },
        {
          id: "tradeoff",
          sol: "GOVT.14.g",
          stem: "Which trade-off is described in sentence 6?",
          choices: [
            { letter: "A", text: "lower taxes now in exchange for fewer jobs later" },
            { letter: "B", text: "relief during the crisis in exchange for a larger national debt" },
            { letter: "C", text: "higher interest rates in exchange for lower prices" },
            { letter: "D", text: "more imports in exchange for fewer exports" }
          ],
          correct: "B"
        },
        {
          id: "rates",
          sol: "GOVT.14.f",
          stem: "According to sentence 3, lower interest rates help a weak economy mainly by —",
          choices: [
            { letter: "A", text: "encouraging people and businesses to borrow and spend" },
            { letter: "B", text: "raising the taxes that fund public programs" },
            { letter: "C", text: "reducing the amount of money in circulation" },
            { letter: "D", text: "increasing the price of goods in stores" }
          ],
          correct: "A"
        },
        {
          id: "graph",
          sol: "GOVT.14.e",
          stem: "Which conclusion is best supported by the graph described in sentence 4?",
          choices: [
            { letter: "A", text: "Unemployment stayed near 15 percent through 2022." },
            { letter: "B", text: "Unemployment fell steadily throughout 2020." },
            { letter: "C", text: "Unemployment rose sharply in 2020, then recovered." },
            { letter: "D", text: "Unemployment did not change during the crisis." }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "econ-foreign-tools",
      family: "ECON",
      title: "Rebuilding Europe, defending the West",
      kind: "Foreign Policy & the Economy · GOVT.12",
      blurb: "National interest and the tools of foreign policy after 1945.",
      level: 2,
      passage: "<p>" + N(1) + "A nation's <strong>national interest</strong> includes its security, its economic prosperity and the promotion of values such as democracy and human rights. " + N(2) + "To pursue it, the United States uses many tools: diplomacy, treaties and alliances, foreign aid, economic sanctions and, as a last resort, military force. " + N(3) + "After World War II, the United States helped found the United Nations in 1945 and offered the Marshall Plan, which sent billions of dollars to rebuild Western Europe. " + N(4) + "In 1949 it joined NATO, a military alliance whose members pledged that an armed attack on one would be considered an attack on all. " + N(5) + "American leaders argued that a prosperous, secure Europe would make another world war less likely and would resist the spread of communism.</p>",
      claims: [
        {
          id: "marshall",
          sol: "GOVT.12.b",
          stem: "The Marshall Plan is an example of which foreign-policy tool from sentence 2?",
          choices: [
            { letter: "A", text: "economic sanctions" },
            { letter: "B", text: "military force" },
            { letter: "C", text: "foreign aid" },
            { letter: "D", text: "a military alliance" }
          ],
          correct: "C"
        },
        {
          id: "why",
          sol: "GOVT.12.b",
          stem: "According to sentence 5, American leaders supported Europe mainly because —",
          choices: [
            { letter: "A", text: "a secure, prosperous Europe served U.S. interests and peace" },
            { letter: "B", text: "the Constitution requires aid to former allies" },
            { letter: "C", text: "European nations had agreed to join the United States" },
            { letter: "D", text: "the United Nations ordered the United States to pay" }
          ],
          correct: "A"
        },
        {
          id: "federal",
          sol: "GOVT.12.a",
          stem: "Which of these is a responsibility of the federal government rather than the states?",
          choices: [
            { letter: "A", text: "running public school systems" },
            { letter: "B", text: "issuing driver's licenses" },
            { letter: "C", text: "creating counties and towns" },
            { letter: "D", text: "making treaties with foreign nations" }
          ],
          correct: "D"
        },
        {
          id: "vocab",
          sol: "GOVT.12.b",
          stem: "In sentence 1, the term national interest most nearly means —",
          choices: [
            { letter: "A", text: "the interest rate charged on national debt" },
            { letter: "B", text: "the goals a nation sees as vital to its security and well-being" },
            { letter: "C", text: "the opinions of the nation's largest businesses" },
            { letter: "D", text: "the share of citizens who follow world news" }
          ],
          correct: "B"
        },
        {
          id: "trade",
          sol: "GOVT.12.c",
          stem: "How did rebuilding Western Europe also benefit the U.S. economy?",
          choices: [
            { letter: "A", text: "Recovering European nations became customers for American goods." },
            { letter: "B", text: "Europe agreed to stop all trade with the United States." },
            { letter: "C", text: "The aid ended the need for U.S. exports." },
            { letter: "D", text: "European factories closed and left the market to U.S. firms." }
          ],
          correct: "A"
        }
      ]
    },

    /* ---------- long ---------- */
    {
      id: "econ-four-economists",
      family: "ECON",
      title: "Four economists on government and markets",
      kind: "Foreign Policy & the Economy · GOVT.13",
      blurb: "Keynes, Hayek, Friedman and Sowell compared.",
      level: 3,
      passage: "<p>" + N(1) + "Economists have long disagreed about how much government should guide the economy.</p><p><strong>View 1.</strong> " + N(2) + "John Maynard Keynes, writing during the Great Depression in <em>The General Theory</em> (1936), argued that when private spending collapses, total demand can stay too low for years. " + N(3) + "He urged governments to fill the gap by spending more, even if that meant borrowing.</p><p><strong>View 2.</strong> " + N(4) + "Friedrich Hayek, in <em>The Road to Serfdom</em> (1944), warned that central planning concentrates power and can erode individual freedom. " + N(5) + "He argued that prices carry knowledge scattered among millions of people, knowledge no planning board could gather.</p><p><strong>View 3.</strong> " + N(6) + "Milton Friedman, in <em>Capitalism and Freedom</em> (1962), argued that economic freedom is a necessary condition for political freedom. " + N(7) + "He also held that inflation is caused mainly by the money supply growing too fast, a view called <strong>monetarism</strong>.</p><p><strong>View 4.</strong> " + N(8) + "Thomas Sowell, in books such as <em>Basic Economics</em>, stresses that every policy involves trade-offs and urges people to ask what happens next, after a decision's first effects.</p>",
      claims: [
        {
          id: "recession",
          sol: "GOVT.13.b",
          stem: "Which economist would most likely support increased government spending during a deep recession?",
          choices: [
            { letter: "A", text: "Friedrich Hayek" },
            { letter: "B", text: "Milton Friedman" },
            { letter: "C", text: "Thomas Sowell" },
            { letter: "D", text: "John Maynard Keynes" }
          ],
          correct: "D"
        },
        {
          id: "agree",
          sol: "GOVT.13.b",
          stem: "Based on Views 2 and 3, Hayek and Friedman would most likely agree that —",
          choices: [
            { letter: "A", text: "free markets help protect individual liberty" },
            { letter: "B", text: "central planning uses knowledge better than prices do" },
            { letter: "C", text: "government should own the major industries" },
            { letter: "D", text: "deficit spending is the cure for every downturn" }
          ],
          correct: "A"
        },
        {
          id: "fed",
          sol: "GOVT.14.f",
          stem: "Based on View 3, Friedman would most likely advise the Federal Reserve to —",
          choices: [
            { letter: "A", text: "print money freely whenever unemployment rises" },
            { letter: "B", text: "let Congress decide each change in interest rates" },
            { letter: "C", text: "keep the money supply growing slowly and steadily" },
            { letter: "D", text: "fix the prices of food and fuel by law" }
          ],
          correct: "C"
        },
        {
          id: "sowell",
          sol: "GOVT.14.g",
          stem: "A city council debates a law capping rents. Which question would Sowell, as described in View 4, most urge voters to ask?",
          choices: [
            { letter: "A", text: "Will renters feel better about the city this year?" },
            { letter: "B", text: "How will the supply of rental housing change over time?" },
            { letter: "C", text: "Do other cities already have a similar law?" },
            { letter: "D", text: "Which council members proposed the idea first?" }
          ],
          correct: "B"
        },
        {
          id: "disagree",
          sol: "GOVT.13.c",
          stem: "Which pair of economists most clearly disagreed about how large a role government should play in the economy?",
          choices: [
            { letter: "A", text: "Hayek and Friedman" },
            { letter: "B", text: "Keynes and Hayek" },
            { letter: "C", text: "Friedman and Sowell" },
            { letter: "D", text: "Hayek and Sowell" }
          ],
          correct: "B"
        },
        {
          id: "vocab",
          sol: "GOVT.13.b",
          stem: "In sentence 7, monetarism is the view that —",
          choices: [
            { letter: "A", text: "too-rapid growth in the money supply is the main cause of inflation" },
            { letter: "B", text: "government spending is the best tool against recessions" },
            { letter: "C", text: "workers should own the businesses where they work" },
            { letter: "D", text: "gold and silver are the only true forms of money" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "econ-war-powers",
      family: "ECON",
      title: "Who decides on war?",
      kind: "Foreign Policy & the Economy · GOVT.12",
      blurb: "From Pearl Harbor to the War Powers Resolution and September 11.",
      level: 3,
      passage: "<p>" + N(1) + "The Constitution divides war powers: Congress may declare war and fund the military, while the president serves as commander in chief of the armed forces.</p><ul><li><strong>1941</strong> Congress declares war on Japan the day after the attack on Pearl Harbor, Hawaii.</li><li><strong>1950</strong> President Truman sends U.S. troops to defend South Korea under a United Nations resolution, without a declaration of war.</li><li><strong>1964</strong> Congress passes the Gulf of Tonkin Resolution, giving President Johnson broad authority to use force in Vietnam.</li><li><strong>1973</strong> Congress passes the War Powers Resolution over President Nixon's veto.</li><li><strong>2001</strong> Days after the September 11 attacks, Congress authorizes the president to use force against those responsible.</li></ul><p>" + N(2) + "The <strong>War Powers Resolution</strong> requires the president to notify Congress within 48 hours of sending troops into combat and to withdraw them within 60 days unless Congress approves, with up to 30 more days allowed for a safe withdrawal. " + N(3) + "Presidents of both parties have questioned whether the law is constitutional, but they have generally filed the reports it requires.</p>",
      claims: [
        {
          id: "first",
          sol: "GOVT.12.a",
          stem: "Which event happened FIRST?",
          choices: [
            { letter: "A", text: "Congress passes the War Powers Resolution." },
            { letter: "B", text: "Truman sends troops to defend South Korea." },
            { letter: "C", text: "Congress passes the Gulf of Tonkin Resolution." },
            { letter: "D", text: "Congress authorizes force after September 11." }
          ],
          correct: "B"
        },
        {
          id: "cause",
          sol: "GOVT.12.a",
          stem: "Which development most likely led Congress to pass the War Powers Resolution in 1973?",
          choices: [
            { letter: "A", text: "Japan's surprise attack on Pearl Harbor" },
            { letter: "B", text: "the founding of the United Nations" },
            { letter: "C", text: "the terrorist attacks of September 11" },
            { letter: "D", text: "long wars fought without a declaration of war" }
          ],
          correct: "D"
        },
        {
          id: "notify",
          sol: "GOVT.12.a",
          stem: "Under the War Powers Resolution, a president who sends troops into combat must —",
          choices: [
            { letter: "A", text: "notify Congress within 48 hours" },
            { letter: "B", text: "win a declaration of war beforehand" },
            { letter: "C", text: "obtain approval from the Supreme Court" },
            { letter: "D", text: "bring the troops home within 10 days" }
          ],
          correct: "A"
        },
        {
          id: "interest",
          sol: "GOVT.12.b",
          stem: "The 2001 authorization was most directly shaped by which national interest?",
          choices: [
            { letter: "A", text: "opening new markets for American exports" },
            { letter: "B", text: "rebuilding nations damaged by a world war" },
            { letter: "C", text: "protecting Americans from terrorist attacks" },
            { letter: "D", text: "lowering tariffs among trading partners" }
          ],
          correct: "C"
        },
        {
          id: "override",
          sol: "GOVT.12.a",
          stem: "Passing the War Powers Resolution over Nixon's veto required —",
          choices: [
            { letter: "A", text: "a two-thirds vote in both the House and the Senate" },
            { letter: "B", text: "a ruling by the Supreme Court" },
            { letter: "C", text: "approval by three-fourths of the states" },
            { letter: "D", text: "a simple majority in the Senate alone" }
          ],
          correct: "A"
        },
        {
          id: "tradeoff",
          sol: "GOVT.14.g",
          stem: "Requiring congressional approval for long military actions involves which trade-off?",
          choices: [
            { letter: "A", text: "lower military spending in exchange for higher taxes" },
            { letter: "B", text: "more power for the states in exchange for less for Congress" },
            { letter: "C", text: "stronger alliances in exchange for less foreign trade" },
            { letter: "D", text: "more public debate in exchange for less speed and flexibility" }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "econ-county-budget",
      family: "ECON",
      title: "Teachers or a fire station?",
      kind: "Foreign Policy & the Economy · GOVT.14",
      blurb: "A Virginia county budget, its taxes and its opportunity costs.",
      level: 3,
      passage: "<p>" + N(1) + "Each spring, the elected board of supervisors in a Virginia county adopts a budget for the coming year. " + N(2) + "The table shows a simplified plan for a hypothetical county.</p><table><tr><th>Revenue source</th><th>Share</th><th>Spending</th><th>Share</th></tr><tr><td>Real estate and personal property taxes</td><td>60%</td><td>Public schools</td><td>55%</td></tr><tr><td>State aid, mostly for schools</td><td>25%</td><td>Sheriff, fire and rescue</td><td>20%</td></tr><tr><td>Local sales tax share and fees</td><td>15%</td><td>Libraries, parks and other services</td><td>25%</td></tr></table><p>" + N(3) + "This year the supervisors must choose between hiring ten more teachers and building a new fire station; the county cannot afford both unless it raises the real estate tax rate. " + N(4) + "Supervisors must also weigh how a higher tax rate would affect homeowners, renters and local businesses. " + N(5) + "Every dollar spent on one project is a dollar not spent on the other, an <strong>opportunity cost</strong>. " + N(6) + "Economists such as Thomas Sowell stress this point, arguing that public choices offer trade-offs rather than costless solutions. " + N(7) + "Before the vote, residents may speak at a public hearing on the proposed budget.</p>",
      claims: [
        {
          id: "largest",
          sol: "GOVT.14.d",
          stem: "According to the table, which source provides the largest share of the county's revenue?",
          choices: [
            { letter: "A", text: "state aid for schools" },
            { letter: "B", text: "the local sales tax share" },
            { letter: "C", text: "real estate and personal property taxes" },
            { letter: "D", text: "fees for parks and libraries" }
          ],
          correct: "C"
        },
        {
          id: "oppcost",
          sol: "GOVT.14.g",
          stem: "If the supervisors choose to hire the ten teachers, what is the opportunity cost of that choice?",
          choices: [
            { letter: "A", text: "the new fire station that is not built" },
            { letter: "B", text: "the salaries paid to the new teachers" },
            { letter: "C", text: "the state aid the schools receive" },
            { letter: "D", text: "the time spent at the public hearing" }
          ],
          correct: "A"
        },
        {
          id: "both",
          sol: "GOVT.14.g",
          stem: "If the county pays for both projects by raising the real estate tax rate, which trade-off results?",
          choices: [
            { letter: "A", text: "Schools lose funds so that the fire station can open." },
            { letter: "B", text: "The state must cut its aid to the county's schools." },
            { letter: "C", text: "The county must close its libraries and parks." },
            { letter: "D", text: "Property owners keep less money for their own spending." }
          ],
          correct: "D"
        },
        {
          id: "public",
          sol: "GOVT.14.b",
          stem: "Which service in the table is one that markets alone do not readily provide to everyone, so local government supplies it?",
          choices: [
            { letter: "A", text: "restaurant meals" },
            { letter: "B", text: "fire and rescue protection" },
            { letter: "C", text: "cell phone service" },
            { letter: "D", text: "groceries and clothing" }
          ],
          correct: "B"
        },
        {
          id: "vocab",
          sol: "GOVT.14.g",
          stem: "In sentence 5, opportunity cost means —",
          choices: [
            { letter: "A", text: "the price printed on a bill of sale" },
            { letter: "B", text: "the value of the next best choice given up" },
            { letter: "C", text: "the interest paid on borrowed money" },
            { letter: "D", text: "the total of all taxes a county collects" }
          ],
          correct: "B"
        },
        {
          id: "values",
          sol: "GOVT.14.d",
          stem: "Based on the table, a sharp drop in home values across the county would most directly reduce —",
          choices: [
            { letter: "A", text: "the state's aid for the county's schools" },
            { letter: "B", text: "the fees charged at parks and libraries" },
            { letter: "C", text: "the federal income taxes paid by residents" },
            { letter: "D", text: "the county's property tax revenue" }
          ],
          correct: "D"
        }
      ]
    }
  ];

  for (var i = 0; i < PACKS.length; i++) P.push(PACKS[i]);
})(typeof window !== "undefined" ? window : global);
