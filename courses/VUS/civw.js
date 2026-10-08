/* SOL Lab — Virginia & U.S. History · Expansion, Civil War & Reconstruction (VUS.7–9). Original text only;
   primary-source excerpts are public domain. */
(function (global) {
  var P = global.HEIST_PACKS;
  if (!P || !P.push) return;
  var N = function (i) { return '<span class="n">(' + i + ')</span> '; };   // numbered sentence

  var PACKS = [
    /* ---------- tiny ---------- */
    {
      id: "civw-war-of-1812",
      family: "CIVW",
      title: "Mr. Madison's War",
      kind: "Expansion, Civil War & Reconstruction · VUS.7",
      blurb: "A timeline of the War of 1812, from Madison's war message to New Orleans.",
      level: 1,
      passage: "<ul>" +
        "<li><strong>1812</strong> At President James Madison's urging, Congress declares war on Britain over the <strong>impressment</strong> of American sailors and British aid to Indigenous nations in the West.</li>" +
        "<li><strong>1813</strong> Tecumseh is killed at the Battle of the Thames.</li>" +
        "<li><strong>1814</strong> British troops burn the White House and the Capitol; Fort McHenry holds.</li>" +
        "<li><strong>Dec. 1814</strong> The Treaty of Ghent is signed.</li>" +
        "<li><strong>Jan. 1815</strong> Andrew Jackson wins the Battle of New Orleans.</li>" +
        "</ul>",
      claims: [
        {
          id: "cause",
          sol: "VUS.7.a",
          stem: "According to the timeline, which was a cause of the War of 1812?",
          choices: [
            { letter: "A", text: "a dispute with Spain over the border of Florida" },
            { letter: "B", text: "British seizure of American sailors for its navy" },
            { letter: "C", text: "Mexico's ban on new American settlers in Texas" },
            { letter: "D", text: "France's refusal to sell New Orleans" }
          ],
          correct: "B"
        },
        {
          id: "impress",
          sol: "VUS.7.a",
          stem: "In the timeline, the word impressment most nearly means —",
          choices: [
            { letter: "A", text: "forcing men to serve in a navy against their will" },
            { letter: "B", text: "taxing goods that enter a country's ports" },
            { letter: "C", text: "blocking an enemy's harbors with warships" },
            { letter: "D", text: "paying foreign sailors to change sides" }
          ],
          correct: "A"
        },
        {
          id: "jackson",
          sol: "VUS.7.c",
          stem: "The Battle of New Orleans made which future president a national hero?",
          choices: [
            { letter: "A", text: "James Monroe" },
            { letter: "B", text: "John Quincy Adams" },
            { letter: "C", text: "Andrew Jackson" },
            { letter: "D", text: "Martin Van Buren" }
          ],
          correct: "C"
        },
        {
          id: "result",
          sol: "VUS.7.a",
          stem: "Which was a result of the War of 1812?",
          choices: [
            { letter: "A", text: "The United States annexed most of Canada." },
            { letter: "B", text: "Britain agreed to pay for the burning of Washington." },
            { letter: "C", text: "France became a permanent American military ally." },
            { letter: "D", text: "American nationalism and home manufacturing grew." }
          ],
          correct: "D"
        },
        {
          id: "order",
          sol: "VUS.7.a",
          stem: "Based on the timeline, which statement about the Battle of New Orleans is accurate?",
          choices: [
            { letter: "A", text: "It caused Congress to declare war on Britain." },
            { letter: "B", text: "It took place before Tecumseh's death." },
            { letter: "C", text: "It forced the British to burn the Capitol." },
            { letter: "D", text: "It was fought after the peace treaty was signed." }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "civw-sequoyah",
      family: "CIVW",
      title: "Sequoyah's syllabary",
      kind: "Expansion, Civil War & Reconstruction · VUS.7",
      blurb: "How the Cherokee Nation built a written language, a newspaper and a constitution.",
      level: 1,
      passage: "<p>" + N(1) + "Sequoyah, a Cherokee silversmith, completed a <strong>syllabary</strong> for the Cherokee language around 1821, with one symbol for each syllable. " +
        N(2) + "Within a few years, thousands of Cherokee could read and write in their own language. " +
        N(3) + "In 1827 the Cherokee Nation adopted a written constitution, and in 1828 it began printing the <em>Cherokee Phoenix</em>, a newspaper in Cherokee and English. " +
        N(4) + "That same year John Ross was chosen principal chief.</p>",
      claims: [
        {
          id: "achieve",
          sol: "VUS.7.c",
          stem: "Sequoyah's main achievement was —",
          choices: [
            { letter: "A", text: "creating a way to write the Cherokee language" },
            { letter: "B", text: "leading Cherokee warriors in the War of 1812" },
            { letter: "C", text: "negotiating the Cherokee move to Indian Territory" },
            { letter: "D", text: "arguing the Cherokee case before the Supreme Court" }
          ],
          correct: "A"
        },
        {
          id: "vocab",
          sol: "VUS.7.c",
          stem: "In sentence 1, the word syllabary most nearly means —",
          choices: [
            { letter: "A", text: "a list of laws approved by a council" },
            { letter: "B", text: "a treaty written in two languages" },
            { letter: "C", text: "a set of written symbols that stand for syllables" },
            { letter: "D", text: "a school for training interpreters" }
          ],
          correct: "C"
        },
        {
          id: "ross",
          sol: "VUS.7.c",
          stem: "Principal Chief John Ross is best remembered for —",
          choices: [
            { letter: "A", text: "building a military alliance of nations in the Ohio Valley" },
            { letter: "B", text: "leading the Cherokee fight against removal through law and petitions" },
            { letter: "C", text: "giving a famous speech of grief after Lord Dunmore's War" },
            { letter: "D", text: "signing the Treaty of New Echota to trade away Cherokee land" }
          ],
          correct: "B"
        },
        {
          id: "evidence",
          sol: "VUS.7.b",
          stem: "Which conclusion about the Cherokee Nation in the 1820s is best supported by the passage?",
          choices: [
            { letter: "A", text: "The Cherokee had no interest in written laws." },
            { letter: "B", text: "The Cherokee Phoenix was printed only in English." },
            { letter: "C", text: "Few Cherokee learned to use Sequoyah's system." },
            { letter: "D", text: "The Cherokee built institutions to protect their nation." }
          ],
          correct: "D"
        },
        {
          id: "removal",
          sol: "VUS.7.b",
          stem: "Despite these achievements, in 1838 most Cherokee were —",
          choices: [
            { letter: "A", text: "granted U.S. citizenship and allowed to keep their land" },
            { letter: "B", text: "forced west to Indian Territory on the Trail of Tears" },
            { letter: "C", text: "moved onto small farms in western Virginia" },
            { letter: "D", text: "allied with Britain in a new war against the United States" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "civw-truth-stowe",
      family: "CIVW",
      title: "Voices against slavery",
      kind: "Expansion, Civil War & Reconstruction · VUS.8",
      blurb: "Sojourner Truth on the lecture circuit and Harriet Beecher Stowe's best seller.",
      level: 1,
      passage: "<p>" + N(1) + "Sojourner Truth gained her freedom from slavery in New York in 1826 and became a traveling speaker against slavery and for women's rights. " +
        N(2) + "Harriet Beecher Stowe's novel <em>Uncle Tom's Cabin</em> (1852) showed the cruelty of slavery to readers who had never seen it, and it sold hundreds of thousands of copies. " +
        N(3) + "Many Southerners called the book false and unfair, while in the North it deepened <strong>opposition</strong> to the Fugitive Slave Act.</p>",
      claims: [
        {
          id: "truth",
          sol: "VUS.8.b",
          stem: "Sojourner Truth was known for speaking out for —",
          choices: [
            { letter: "A", text: "abolition and women's rights" },
            { letter: "B", text: "Indian removal and western land" },
            { letter: "C", text: "lower tariffs and states' rights" },
            { letter: "D", text: "a national bank and new roads" }
          ],
          correct: "A"
        },
        {
          id: "stowe",
          sol: "VUS.8.b",
          stem: "Which was an effect of Uncle Tom's Cabin?",
          choices: [
            { letter: "A", text: "Congress repealed the Fugitive Slave Act in 1853." },
            { letter: "B", text: "Southern states agreed to end the slave trade." },
            { letter: "C", text: "Stowe was elected to Congress from Ohio." },
            { letter: "D", text: "Many Northern readers turned against slavery." }
          ],
          correct: "D"
        },
        {
          id: "compare",
          sol: "VUS.8.b",
          stem: "What did Sojourner Truth and Harriet Beecher Stowe have in common?",
          choices: [
            { letter: "A", text: "Both had escaped slavery in the South." },
            { letter: "B", text: "Both led raids to free enslaved people." },
            { letter: "C", text: "Both used words to persuade people that slavery was wrong." },
            { letter: "D", text: "Both founded the Republican Party." }
          ],
          correct: "C"
        },
        {
          id: "antithesis",
          sol: "VUS.8.a",
          stem: "Which statement best explains why slavery is called the opposite of freedom?",
          choices: [
            { letter: "A", text: "Slavery was limited by the Missouri Compromise line." },
            { letter: "B", text: "Enslaved people were held as property and denied control of their lives." },
            { letter: "C", text: "Enslaved people were counted in the national census." },
            { letter: "D", text: "Cotton planters earned large profits from enslaved labor." }
          ],
          correct: "B"
        },
        {
          id: "division",
          sol: "VUS.7.h",
          stem: "What does sentence 3 suggest about the nation in the 1850s?",
          choices: [
            { letter: "A", text: "Both regions praised the novel equally." },
            { letter: "B", text: "Southern writers soon stopped defending slavery." },
            { letter: "C", text: "Northerners and Southerners judged the same book in opposite ways." },
            { letter: "D", text: "Stowe changed her views after Southern criticism." }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "civw-amendments-table",
      family: "CIVW",
      title: "The Reconstruction amendments",
      kind: "Expansion, Civil War & Reconstruction · VUS.8",
      blurb: "Three amendments in five years: a table to read.",
      level: 1,
      passage: "<table><thead><tr><th>Amendment</th><th>Ratified</th><th>What it did</th></tr></thead><tbody>" +
        "<tr><td>Thirteenth</td><td>1865</td><td>Abolished slavery in the United States</td></tr>" +
        "<tr><td>Fourteenth</td><td>1868</td><td>Made all persons born or naturalized in the U.S. citizens; promised due process and <strong>equal protection</strong> of the laws</td></tr>" +
        "<tr><td>Fifteenth</td><td>1870</td><td>Barred denying the vote because of race, color or previous condition of servitude</td></tr>" +
        "</tbody></table>",
      claims: [
        {
          id: "thirteenth",
          sol: "VUS.8.d",
          stem: "Which amendment ended slavery in the United States?",
          choices: [
            { letter: "A", text: "the Fifteenth Amendment" },
            { letter: "B", text: "the Thirteenth Amendment" },
            { letter: "C", text: "the Fourteenth Amendment" },
            { letter: "D", text: "the Nineteenth Amendment" }
          ],
          correct: "B"
        },
        {
          id: "fourteenth",
          sol: "VUS.8.d",
          stem: "Which amendment made formerly enslaved people born in the United States citizens?",
          choices: [
            { letter: "A", text: "the Thirteenth Amendment" },
            { letter: "B", text: "the Fifteenth Amendment" },
            { letter: "C", text: "the First Amendment" },
            { letter: "D", text: "the Fourteenth Amendment" }
          ],
          correct: "D"
        },
        {
          id: "table",
          sol: "VUS.9.e",
          stem: "Which conclusion about the three amendments is best supported by the table?",
          choices: [
            { letter: "A", text: "All three were ratified within five years after the war." },
            { letter: "B", text: "All three gave women the right to vote." },
            { letter: "C", text: "The Fifteenth was ratified before the Fourteenth." },
            { letter: "D", text: "All three were ratified before the Civil War began." }
          ],
          correct: "A"
        },
        {
          id: "limits",
          sol: "VUS.9.e",
          stem: "Why did many Black men in the South lose the vote even after the Fifteenth Amendment?",
          choices: [
            { letter: "A", text: "The amendment applied only to Northern states." },
            { letter: "B", text: "The Supreme Court struck the amendment down in 1871." },
            { letter: "C", text: "States later used poll taxes and literacy tests against them." },
            { letter: "D", text: "The amendment let only Union veterans vote." }
          ],
          correct: "C"
        },
        {
          id: "equal",
          sol: "VUS.8.d",
          stem: "In the table, the phrase equal protection of the laws means that —",
          choices: [
            { letter: "A", text: "a state must apply its laws the same way to all persons" },
            { letter: "B", text: "each state has the same number of senators" },
            { letter: "C", text: "the army must guard every citizen's property" },
            { letter: "D", text: "every citizen must pay the same amount of tax" }
          ],
          correct: "A"
        }
      ]
    },

    /* ---------- short ---------- */
    {
      id: "civw-common-man",
      family: "CIVW",
      title: "The Age of the Common Man",
      kind: "Expansion, Civil War & Reconstruction · VUS.7",
      blurb: "Andrew Jackson, wider voting rights, the Bank War and the tariff fight.",
      level: 2,
      passage: "<p>" + N(1) + "By the 1820s most states had dropped property requirements for voting, so nearly all white men could vote. " +
        N(2) + "Andrew Jackson, a Tennessee war hero who presented himself as a champion of ordinary farmers and workers, won the presidency in 1828. " +
        N(3) + "Supporters called this the Age of the Common Man. " +
        N(4) + "Jackson rewarded loyal supporters with government jobs, a practice critics called the <strong>spoils system</strong>. " +
        N(5) + "He vetoed the recharter of the Second Bank of the United States, calling it a tool of the wealthy. " +
        N(6) + "Yet this wider democracy still shut out women, enslaved people and most free Black men.</p>",
      claims: [
        {
          id: "meaning",
          sol: "VUS.7.f",
          stem: "The phrase the Age of the Common Man refers to —",
          choices: [
            { letter: "A", text: "the growth of factories that employed common laborers" },
            { letter: "B", text: "the spread of voting and political participation among white men" },
            { letter: "C", text: "a movement to give women equal property rights" },
            { letter: "D", text: "the end of the Federalist Party's rule in New England" }
          ],
          correct: "B"
        },
        {
          id: "spoils",
          sol: "VUS.7.f",
          stem: "In sentence 4, the spoils system means —",
          choices: [
            { letter: "A", text: "selling public land at low prices to settlers" },
            { letter: "B", text: "dividing land taken in war among the soldiers" },
            { letter: "C", text: "giving government jobs to political supporters" },
            { letter: "D", text: "hiring officials only after a written exam" }
          ],
          correct: "C"
        },
        {
          id: "limits",
          sol: "VUS.7.f",
          stem: "Which sentence directly states that many Americans were still left out of political life?",
          choices: [
            { letter: "A", text: "sentence 6" },
            { letter: "B", text: "sentence 1" },
            { letter: "C", text: "sentence 3" },
            { letter: "D", text: "sentence 5" }
          ],
          correct: "A"
        },
        {
          id: "bank",
          sol: "VUS.7.c",
          stem: "Jackson's veto of the national bank's recharter shows that he —",
          choices: [
            { letter: "A", text: "supported Alexander Hamilton's economic program" },
            { letter: "B", text: "wanted to raise money for a war with Mexico" },
            { letter: "C", text: "hoped to give the bank's shares to Indigenous nations" },
            { letter: "D", text: "distrusted financial power held by a wealthy few" }
          ],
          correct: "D"
        },
        {
          id: "tariff",
          sol: "VUS.7.h",
          stem: "During Jackson's presidency, South Carolina declared the federal tariffs of 1828 and 1832 null and void within the state. This Nullification Crisis showed —",
          choices: [
            { letter: "A", text: "sectional conflict over tariffs and federal power" },
            { letter: "B", text: "Northern opposition to protective tariffs" },
            { letter: "C", text: "agreement between the states on trade policy" },
            { letter: "D", text: "Jackson's support for states leaving the Union" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "civw-immigration",
      family: "CIVW",
      title: "Newcomers before the war",
      kind: "Expansion, Civil War & Reconstruction · VUS.7",
      blurb: "Irish and German immigration, by the numbers.",
      level: 2,
      passage: "<table><thead><tr><th>Decade</th><th>Immigrants to the U.S. (approx.)</th></tr></thead><tbody>" +
        "<tr><td>1821–1830</td><td>143,000</td></tr><tr><td>1831–1840</td><td>599,000</td></tr>" +
        "<tr><td>1841–1850</td><td>1,713,000</td></tr><tr><td>1851–1860</td><td>2,598,000</td></tr></tbody></table>" +
        "<p>" + N(1) + "Many Irish fled the potato famine of the late 1840s and settled in Northern cities, where they built canals and railroads. " +
        N(2) + "Many Germans bought farms in the Midwest. " +
        N(3) + "<strong>Nativists</strong>, including the Know-Nothing Party, opposed the newcomers, especially Catholics. " +
        N(4) + "Few immigrants went South, where slavery left little demand for wage labor. " +
        N(5) + "Most newcomers in these decades came from Ireland and the German states.</p>",
      claims: [
        {
          id: "read",
          sol: "VUS.7.f",
          stem: "According to the table, immigration in the 1850s was about how many times the level of the 1830s?",
          choices: [
            { letter: "A", text: "about the same" },
            { letter: "B", text: "about twice" },
            { letter: "C", text: "about four times" },
            { letter: "D", text: "about ten times" }
          ],
          correct: "C"
        },
        {
          id: "famine",
          sol: "VUS.7.f",
          stem: "What was the main reason for the rise in Irish immigration in the late 1840s?",
          choices: [
            { letter: "A", text: "a famine caused by the failure of the potato crop" },
            { letter: "B", text: "the discovery of gold in California" },
            { letter: "C", text: "the end of the War of 1812" },
            { letter: "D", text: "a revolution against Ireland's king" }
          ],
          correct: "A"
        },
        {
          id: "nativist",
          sol: "VUS.7.f",
          stem: "In sentence 3, nativists were people who —",
          choices: [
            { letter: "A", text: "were members of Indigenous nations" },
            { letter: "B", text: "recruited workers in Europe for factories" },
            { letter: "C", text: "wanted all immigrants to settle in the West" },
            { letter: "D", text: "favored native-born Americans over immigrants" }
          ],
          correct: "D"
        },
        {
          id: "section",
          sol: "VUS.7.h",
          stem: "How did this immigration pattern add to tension between North and South?",
          choices: [
            { letter: "A", text: "It ended the South's need for enslaved labor." },
            { letter: "B", text: "It led Congress to ban immigration to Southern ports." },
            { letter: "C", text: "The North's population and House seats grew faster than the South's." },
            { letter: "D", text: "Most new immigrants joined the Southern Democrats." }
          ],
          correct: "C"
        },
        {
          id: "germans",
          sol: "VUS.7.f",
          stem: "Based on the passage, which statement about German immigrants is accurate?",
          choices: [
            { letter: "A", text: "Most worked on cotton plantations in the Deep South." },
            { letter: "B", text: "Many became farmers in the Midwest." },
            { letter: "C", text: "Most fled a potato famine in the 1840s." },
            { letter: "D", text: "Many founded the Know-Nothing Party." }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "civw-texas-mexico",
      family: "CIVW",
      title: "Texas and the Mexican-American War",
      kind: "Expansion, Civil War & Reconstruction · VUS.7",
      blurb: "From the Alamo to the Mexican Cession — and a new fight over slavery.",
      level: 2,
      passage: "<ul>" +
        "<li><strong>1821</strong> Mexico wins independence from Spain and invites American settlers into Texas.</li>" +
        "<li><strong>1836</strong> Texans declare independence; Mexican troops take the Alamo; Sam Houston's army wins at San Jacinto.</li>" +
        "<li><strong>1845</strong> The United States annexes Texas.</li>" +
        "<li><strong>1846</strong> War begins after fighting in land claimed by both nations between the Nueces River and the Rio Grande.</li>" +
        "<li><strong>1846</strong> The <strong>Wilmot Proviso</strong>, a plan to ban slavery in any land won from Mexico, passes the House but fails in the Senate.</li>" +
        "<li><strong>1848</strong> In the Treaty of Guadalupe Hidalgo, Mexico gives up California and much of the Southwest.</li>" +
        "</ul>",
      claims: [
        {
          id: "first",
          sol: "VUS.7.g",
          stem: "According to the timeline, which event happened FIRST?",
          choices: [
            { letter: "A", text: "the U.S. annexation of Texas" },
            { letter: "B", text: "the Battle of San Jacinto" },
            { letter: "C", text: "Mexican independence from Spain" },
            { letter: "D", text: "the Treaty of Guadalupe Hidalgo" }
          ],
          correct: "C"
        },
        {
          id: "cause",
          sol: "VUS.7.g",
          stem: "Which was a cause of the Texas Revolution?",
          choices: [
            { letter: "A", text: "conflict between American settlers and Mexico's government over self-rule and slavery" },
            { letter: "B", text: "a U.S. law that forbade Americans to settle outside the Louisiana Purchase" },
            { letter: "C", text: "British efforts to take Texas as a colony after the War of 1812" },
            { letter: "D", text: "the discovery of gold near San Antonio in the early 1830s" }
          ],
          correct: "A"
        },
        {
          id: "wilmot",
          sol: "VUS.7.h",
          stem: "The Wilmot Proviso shows that the war with Mexico —",
          choices: [
            { letter: "A", text: "united Northern and Southern Democrats" },
            { letter: "B", text: "reopened the debate over spreading slavery into new land" },
            { letter: "C", text: "settled the question of slavery in the territories" },
            { letter: "D", text: "was opposed by every member of the Senate" }
          ],
          correct: "B"
        },
        {
          id: "cession",
          sol: "VUS.7.g",
          stem: "Which present-day state was part of the land Mexico gave up in 1848?",
          choices: [
            { letter: "A", text: "Oregon" },
            { letter: "B", text: "Louisiana" },
            { letter: "C", text: "Florida" },
            { letter: "D", text: "California" }
          ],
          correct: "D"
        },
        {
          id: "native",
          sol: "VUS.7.e",
          stem: "How did this expansion most affect Indigenous nations of the Southwest and California?",
          choices: [
            { letter: "A", text: "They gained U.S. citizenship under the 1848 treaty." },
            { letter: "B", text: "They were moved east to lands in Georgia." },
            { letter: "C", text: "Settlers, miners and soldiers pushed them off their lands." },
            { letter: "D", text: "Their lands were protected by the Wilmot Proviso." }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "civw-virginia-readmitted",
      family: "CIVW",
      title: "Virginia rejoins the Union",
      kind: "Expansion, Civil War & Reconstruction · VUS.9",
      blurb: "The Fourteenth Amendment, military rule and the Constitution of 1870.",
      level: 2,
      passage: "<p>" + N(1) + "In 1867 Virginia's General Assembly rejected the Fourteenth Amendment, as most former Confederate states did. " +
        N(2) + "Congress then passed the Reconstruction Acts, which placed Virginia under military rule as Military District Number One. " +
        N(3) + "A convention elected by Black and white men wrote a new state constitution, approved by voters in 1869. " +
        N(4) + "Called the Constitution of 1870 or the Underwood Constitution, it gave Black men the vote and created Virginia's first statewide system of public schools. " +
        N(5) + "After the new legislature ratified the Fourteenth and Fifteenth Amendments, Congress <strong>readmitted</strong> Virginia in January 1870.</p>",
      claims: [
        {
          id: "last",
          sol: "VUS.9.f",
          stem: "Based on the passage, which of these events in Virginia happened LAST?",
          choices: [
            { letter: "A", text: "Virginia's rejection of the Fourteenth Amendment" },
            { letter: "B", text: "the start of military rule in Virginia" },
            { letter: "C", text: "the vote approving the new state constitution" },
            { letter: "D", text: "Virginia's return to representation in Congress" }
          ],
          correct: "D"
        },
        {
          id: "military",
          sol: "VUS.9.f",
          stem: "Why was Virginia placed under military rule in 1867?",
          choices: [
            { letter: "A", text: "Its voters had reelected Jefferson Davis." },
            { letter: "B", text: "It refused to ratify the Fourteenth Amendment." },
            { letter: "C", text: "Union troops had never captured Richmond." },
            { letter: "D", text: "Its legislature had voted to secede a second time." }
          ],
          correct: "B"
        },
        {
          id: "schools",
          sol: "VUS.9.f",
          stem: "Which was a feature of Virginia's Constitution of 1870?",
          choices: [
            { letter: "A", text: "a statewide system of public schools" },
            { letter: "B", text: "a poll tax required for voting" },
            { letter: "C", text: "a ban on Black men holding office" },
            { letter: "D", text: "a return of land to former Confederates" }
          ],
          correct: "A"
        },
        {
          id: "terms",
          sol: "VUS.9.e",
          stem: "Under the Reconstruction Acts, a former Confederate state had to do which TWO things to be readmitted? Select TWO.",
          choices: [
            { letter: "A", text: "ratify the Fourteenth Amendment" },
            { letter: "B", text: "pay the Union's war costs" },
            { letter: "C", text: "adopt a constitution letting Black men vote" },
            { letter: "D", text: "give forty acres to each freed family" }
          ],
          correct: ["A", "C"]
        },
        {
          id: "warimpact",
          sol: "VUS.9.c",
          stem: "Virginia faced an especially hard recovery after the war mainly because —",
          choices: [
            { letter: "A", text: "it had been the last state to join the Confederacy" },
            { letter: "B", text: "its leaders refused all federal aid until 1900" },
            { letter: "C", text: "more battles were fought there than in any other state" },
            { letter: "D", text: "it lost its seaports to Maryland in the peace treaty" }
          ],
          correct: "C"
        }
      ]
    },

    /* ---------- medium ---------- */
    {
      id: "civw-cherokee-removal",
      family: "CIVW",
      title: "The Court, the President and the Cherokee",
      kind: "Expansion, Civil War & Reconstruction · VUS.7",
      blurb: "Worcester v. Georgia, the Treaty of New Echota and the Trail of Tears.",
      level: 2,
      passage: "<p>" + N(1) + "In the late 1820s, after gold was found on Cherokee land, Georgia passed laws claiming control over the Cherokee Nation. " +
        N(2) + "The Cherokee, who held treaties with the United States, took the dispute to the Supreme Court. " +
        N(3) + "In <em>Worcester v. Georgia</em> (1832), Chief Justice John Marshall ruled that the Cherokee Nation was a distinct community where Georgia's laws had no force. " +
        N(4) + "President Andrew Jackson refused to enforce the ruling. " +
        N(5) + "Under the Indian Removal Act of 1830, the government made treaties trading eastern lands for land west of the Mississippi River. " +
        N(6) + "In 1835 a small group of Cherokee with no authority from their government signed the Treaty of New Echota. " +
        N(7) + "Chief John Ross gathered thousands of signatures protesting it, but the Senate approved the treaty. " +
        N(8) + "In 1838 the army forced about 16,000 Cherokee west to Indian Territory; thousands died on the journey known as the <strong>Trail of Tears</strong>.</p>",
      claims: [
        {
          id: "marshall",
          sol: "VUS.7.c",
          stem: "In Worcester v. Georgia, John Marshall's Court ruled that —",
          choices: [
            { letter: "A", text: "the Cherokee had to move west of the Mississippi" },
            { letter: "B", text: "Georgia's laws did not apply inside Cherokee territory" },
            { letter: "C", text: "the Indian Removal Act was unconstitutional" },
            { letter: "D", text: "the Cherokee were citizens of the state of Georgia" }
          ],
          correct: "B"
        },
        {
          id: "enforce",
          sol: "VUS.7.b",
          stem: "Which sentence shows the executive branch failing to uphold the Supreme Court's decision?",
          choices: [
            { letter: "A", text: "sentence 2" },
            { letter: "B", text: "sentence 6" },
            { letter: "C", text: "sentence 7" },
            { letter: "D", text: "sentence 4" }
          ],
          correct: "D"
        },
        {
          id: "echota",
          sol: "VUS.7.b",
          stem: "Why did most Cherokee consider the Treaty of New Echota illegitimate?",
          choices: [
            { letter: "A", text: "It was signed by a few Cherokee with no authority from their nation." },
            { letter: "B", text: "It was written only in the Cherokee language, which officials could not read." },
            { letter: "C", text: "It was rejected by the United States Senate after a long debate." },
            { letter: "D", text: "It gave the Cherokee more land than the state of Georgia had allowed." }
          ],
          correct: "A"
        },
        {
          id: "trail",
          sol: "VUS.7.b",
          stem: "In sentence 8, the Trail of Tears refers to —",
          choices: [
            { letter: "A", text: "a trade route the Cherokee used to reach Spanish Florida" },
            { letter: "B", text: "the path of Jackson's army during the War of 1812" },
            { letter: "C", text: "the forced removal of the Cherokee, during which thousands died" },
            { letter: "D", text: "a road Georgia built to reach the new gold fields" }
          ],
          correct: "C"
        },
        {
          id: "expansion",
          sol: "VUS.7.e",
          stem: "Which pattern of American expansion does this passage best illustrate?",
          choices: [
            { letter: "A", text: "Demand for land and resources led to the removal of Indigenous nations." },
            { letter: "B", text: "Federal courts usually decided where settlers could build farms." },
            { letter: "C", text: "Indigenous nations sold land mainly to pay off debts to Britain." },
            { letter: "D", text: "States rarely tried to govern land held by Indigenous nations." }
          ],
          correct: "A"
        },
        {
          id: "compare",
          sol: "VUS.7.c",
          stem: "How did John Ross's resistance to American expansion differ from Tecumseh's earlier resistance?",
          choices: [
            { letter: "A", text: "Ross sided with Britain, while Tecumseh sided with the United States." },
            { letter: "B", text: "Ross led a confederacy of many nations, while Tecumseh led only the Shawnee." },
            { letter: "C", text: "Ross accepted removal at once, while Tecumseh signed a removal treaty." },
            { letter: "D", text: "Ross used courts and petitions, while Tecumseh built a military alliance." }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "civw-compromises-table",
      family: "CIVW",
      title: "Compromises that could not hold",
      kind: "Expansion, Civil War & Reconstruction · VUS.8",
      blurb: "Four decisions about slavery in the West, from 1820 to 1857.",
      level: 3,
      passage: "<table><thead><tr><th>Measure</th><th>Year</th><th>Main terms</th></tr></thead><tbody>" +
        "<tr><td>Missouri Compromise</td><td>1820</td><td>Missouri admitted as a slave state and Maine as a free state; slavery banned in the rest of the Louisiana Purchase north of 36°30′</td></tr>" +
        "<tr><td>Compromise of 1850</td><td>1850</td><td>California admitted as a free state; slave trade ended in Washington, D.C.; stricter Fugitive Slave Act; <strong>popular sovereignty</strong> in the Utah and New Mexico territories</td></tr>" +
        "<tr><td>Kansas-Nebraska Act</td><td>1854</td><td>Settlers of the Kansas and Nebraska territories to decide on slavery by popular sovereignty, repealing the 36°30′ line; fighting soon breaks out in Kansas</td></tr>" +
        "<tr><td><em>Dred Scott v. Sandford</em></td><td>1857</td><td>Supreme Court rules that Black Americans are not citizens and cannot sue in federal court, and that Congress cannot ban slavery in the territories</td></tr>" +
        "</tbody></table>",
      claims: [
        {
          id: "balance",
          sol: "VUS.7.e",
          stem: "Under the Missouri Compromise, Maine entered the Union as a free state mainly to —",
          choices: [
            { letter: "A", text: "reward New England for supporting the War of 1812" },
            { letter: "B", text: "settle a border dispute with British Canada" },
            { letter: "C", text: "keep an equal number of free and slave states in the Senate" },
            { letter: "D", text: "give Northern states control of the Supreme Court" }
          ],
          correct: "C"
        },
        {
          id: "popsov",
          sol: "VUS.8.c",
          stem: "In the table, popular sovereignty means —",
          choices: [
            { letter: "A", text: "letting a territory's voters decide whether to allow slavery" },
            { letter: "B", text: "letting Congress alone decide where slavery is legal" },
            { letter: "C", text: "electing senators by direct popular vote" },
            { letter: "D", text: "allowing the president to admit new states" }
          ],
          correct: "A"
        },
        {
          id: "undo",
          sol: "VUS.8.c",
          stem: "Which TWO measures in the table removed or overturned the Missouri Compromise's ban on slavery north of 36°30′? Select TWO.",
          choices: [
            { letter: "A", text: "the Compromise of 1850" },
            { letter: "B", text: "the Kansas-Nebraska Act" },
            { letter: "C", text: "the admission of Maine" },
            { letter: "D", text: "the Dred Scott decision" }
          ],
          correct: ["B", "D"]
        },
        {
          id: "bleeding",
          sol: "VUS.7.h",
          stem: "The violence known as Bleeding Kansas was a direct result of —",
          choices: [
            { letter: "A", text: "the Missouri Compromise" },
            { letter: "B", text: "the Wilmot Proviso" },
            { letter: "C", text: "the Treaty of Guadalupe Hidalgo" },
            { letter: "D", text: "the Kansas-Nebraska Act" }
          ],
          correct: "D"
        },
        {
          id: "fugitive",
          sol: "VUS.8.c",
          stem: "Which part of the Compromise of 1850 angered many Northerners most?",
          choices: [
            { letter: "A", text: "the end of the slave trade in Washington, D.C." },
            { letter: "B", text: "the admission of California as a free state" },
            { letter: "C", text: "a law requiring help in capturing people who escaped slavery" },
            { letter: "D", text: "the creation of the Utah Territory" }
          ],
          correct: "C"
        },
        {
          id: "trend",
          sol: "VUS.7.h",
          stem: "Which conclusion is best supported by the table as a whole?",
          choices: [
            { letter: "A", text: "Each new settlement of the slavery question proved harder to keep." },
            { letter: "B", text: "Congress steadily banned slavery in more of the West." },
            { letter: "C", text: "The Supreme Court avoided ruling on slavery before the war." },
            { letter: "D", text: "Southern states lost interest in western territories after 1850." }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "civw-reconstruction-plans",
      family: "CIVW",
      title: "Whose Reconstruction?",
      kind: "Expansion, Civil War & Reconstruction · VUS.9",
      blurb: "Lincoln, Johnson and the Radical Republicans argue over how to rebuild the Union.",
      level: 2,
      passage: "<p>" + N(1) + "Before the war ended, President Lincoln proposed a lenient plan: a Southern state could form a new government once 10 percent of its 1860 voters swore loyalty to the Union and the state accepted the end of slavery. " +
        N(2) + "Lincoln hoped to <strong>reconcile</strong> the nation quickly, \"with malice toward none,\" as he said in his Second Inaugural Address. " +
        N(3) + "After Lincoln was assassinated in April 1865, President Andrew Johnson pardoned many former Confederates, and new Southern legislatures passed Black Codes that limited the freedom of African Americans. " +
        N(4) + "Radical Republicans in Congress demanded a stricter plan that punished Confederate leaders and protected the rights of freedmen. " +
        N(5) + "In 1867 Congress passed the Reconstruction Acts over Johnson's veto. " +
        N(6) + "In 1868 the House impeached Johnson, and the Senate fell one vote short of removing him.</p>",
      claims: [
        {
          id: "lincoln",
          sol: "VUS.9.d",
          stem: "Lincoln's plan for Reconstruction is best described as —",
          choices: [
            { letter: "A", text: "lenient, aiming to restore the Southern states quickly" },
            { letter: "B", text: "harsh, aiming to punish all who fought for the Confederacy" },
            { letter: "C", text: "a plan to keep the South under army rule for decades" },
            { letter: "D", text: "a plan to let each state decide whether to keep slavery" }
          ],
          correct: "A"
        },
        {
          id: "radical",
          sol: "VUS.9.d",
          stem: "How did the Radical Republicans' goals differ from Lincoln's plan?",
          choices: [
            { letter: "A", text: "They wanted to let Southern states return with no conditions." },
            { letter: "B", text: "They wanted to restore the Confederate leaders to office." },
            { letter: "C", text: "They wanted to punish Confederate leaders and protect freedmen's rights." },
            { letter: "D", text: "They wanted the federal government to stay out of Southern affairs." }
          ],
          correct: "C"
        },
        {
          id: "codes",
          sol: "VUS.9.e",
          stem: "According to sentence 3, the purpose of the Black Codes was to —",
          choices: [
            { letter: "A", text: "carry out the Thirteenth Amendment fully" },
            { letter: "B", text: "pay formerly enslaved people for lost wages" },
            { letter: "C", text: "open public schools to freedpeople" },
            { letter: "D", text: "limit the freedom of African Americans" }
          ],
          correct: "D"
        },
        {
          id: "reconcile",
          sol: "VUS.9.b",
          stem: "In sentence 2, the word reconcile most nearly means —",
          choices: [
            { letter: "A", text: "divide into separate regions" },
            { letter: "B", text: "bring back together after a conflict" },
            { letter: "C", text: "pay for damage caused in a war" },
            { letter: "D", text: "put under military control" }
          ],
          correct: "B"
        },
        {
          id: "bureau",
          sol: "VUS.9.e",
          stem: "Congress created the Freedmen's Bureau in 1865 mainly to —",
          choices: [
            { letter: "A", text: "collect taxes owed by former Confederate states" },
            { letter: "B", text: "provide food, schools and legal help to formerly enslaved people" },
            { letter: "C", text: "return confiscated plantations to their prewar owners" },
            { letter: "D", text: "organize the U.S. Colored Troops for the final campaigns" }
          ],
          correct: "B"
        },
        {
          id: "impeach",
          sol: "VUS.9.d",
          stem: "Which statement best explains why the House impeached Andrew Johnson?",
          choices: [
            { letter: "A", text: "He had refused to pardon any former Confederates." },
            { letter: "B", text: "He had lost the election of 1868 but would not leave office." },
            { letter: "C", text: "He had ordered the army to return land to freedpeople." },
            { letter: "D", text: "He clashed with Congress over control of Reconstruction." }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "civw-readjusters",
      family: "CIVW",
      title: "The Readjusters",
      kind: "Expansion, Civil War & Reconstruction · VUS.9",
      blurb: "A biracial party takes on Virginia's debt and expands public schools.",
      level: 3,
      passage: "<p>" + N(1) + "After the war, Virginia still owed a large debt from before the war, much of it for canals and railroads. " +
        N(2) + "Paying it in full meant cutting money for the new public schools. " +
        N(3) + "In 1879 a <strong>biracial</strong> coalition led by former Confederate general William Mahone formed the Readjuster Party, which wanted to \"readjust,\" or reduce, the debt. " +
        N(4) + "Black and white voters together gave the Readjusters control of the General Assembly, and in 1881 they also won the governorship. " +
        N(5) + "The Readjusters reduced the debt, spent more on public schools and hired many African American teachers. " +
        N(6) + "They also ended the poll tax as a requirement for voting and founded Virginia Normal and Collegiate Institute, which became Virginia State University. " +
        N(7) + "Their opponents, the Conservatives, appealed to white voters' racial fears, and by 1883 the Readjusters had lost control of the legislature.</p>",
      claims: [
        {
          id: "biracial",
          sol: "VUS.9.g",
          stem: "The Readjuster Party is described as biracial because —",
          choices: [
            { letter: "A", text: "it was founded by two leaders from different states" },
            { letter: "B", text: "Black and white Virginians voted and worked together in it" },
            { letter: "C", text: "it ran candidates in both Virginia and West Virginia" },
            { letter: "D", text: "it united former Union and Confederate soldiers" }
          ],
          correct: "B"
        },
        {
          id: "bureau",
          sol: "VUS.9.e",
          stem: "The Readjusters' support for Black teachers and schools built on work begun in the 1860s by which federal agency?",
          choices: [
            { letter: "A", text: "the Bureau of Indian Affairs" },
            { letter: "B", text: "the Department of Agriculture" },
            { letter: "C", text: "the Interstate Commerce Commission" },
            { letter: "D", text: "the Freedmen's Bureau" }
          ],
          correct: "D"
        },
        {
          id: "tradeoff",
          sol: "VUS.9.g",
          stem: "Sentences 1 and 2 describe a trade-off because —",
          choices: [
            { letter: "A", text: "money spent paying the debt in full could not also fund schools" },
            { letter: "B", text: "the debt had been created to pay for new public schools" },
            { letter: "C", text: "railroads agreed to cancel the debt in exchange for land" },
            { letter: "D", text: "voters chose both lower taxes and higher spending" }
          ],
          correct: "A"
        },
        {
          id: "achieve",
          sol: "VUS.9.g",
          stem: "Which TWO were achievements of the Readjusters? Select TWO.",
          choices: [
            { letter: "A", text: "more money and teachers for public schools" },
            { letter: "B", text: "ratifying the Fifteenth Amendment" },
            { letter: "C", text: "founding a public college for African Americans" },
            { letter: "D", text: "adding a poll tax to the state constitution" }
          ],
          correct: ["A", "C"]
        },
        {
          id: "constitution",
          sol: "VUS.9.f",
          stem: "School funding was a major issue in the 1870s partly because Virginia's Constitution of 1870 had —",
          choices: [
            { letter: "A", text: "banned all state spending on education" },
            { letter: "B", text: "given school funding to the federal government" },
            { letter: "C", text: "created a statewide public school system" },
            { letter: "D", text: "required private schools to close" }
          ],
          correct: "C"
        },
        {
          id: "decline",
          sol: "VUS.9.g",
          stem: "Which statement best explains why the Readjusters lost power by 1883?",
          choices: [
            { letter: "A", text: "The state debt grew too large for any party to manage." },
            { letter: "B", text: "Opponents used racial appeals to split their coalition." },
            { letter: "C", text: "Congress removed Mahone from the governor's office." },
            { letter: "D", text: "African American voters left to form a third party." }
          ],
          correct: "B"
        }
      ]
    },

    /* ---------- long ---------- */
    {
      id: "civw-gettysburg",
      family: "CIVW",
      title: "1863: Gettysburg and Vicksburg",
      kind: "Expansion, Civil War & Reconstruction · VUS.9",
      blurb: "The turning point of the war and the words Lincoln spoke at Gettysburg.",
      level: 2,
      passage: "<p>" + N(1) + "In early July 1863, Union forces under General George Meade turned back Robert E. Lee's invasion of Pennsylvania at Gettysburg, the largest battle of the war. " +
        N(2) + "On July 4, Vicksburg surrendered to General Ulysses S. Grant, giving the Union control of the Mississippi River. " +
        N(3) + "That November, President Abraham Lincoln spoke at the dedication of a cemetery for Union soldiers at Gettysburg.</p>" +
        "<blockquote>Four score and seven years ago our fathers brought forth on this continent, a new nation, conceived in Liberty, and dedicated to the <strong>proposition</strong> that all men are created equal. Now we are engaged in a great civil war, testing whether that nation, or any nation so conceived and so dedicated, can long endure. … that we here highly resolve that these dead shall not have died in vain—that this nation, under God, shall have a new birth of freedom—and that government of the people, by the people, for the people, shall not perish from the earth.</blockquote>" +
        "<p class=\"src\">— Abraham Lincoln, Gettysburg Address, November 19, 1863 (opening and closing)</p>" +
        "<p>" + N(4) + "Grant later took command of all Union armies, and in April 1865 Lee surrendered to him at Appomattox Court House, Virginia.</p>",
      claims: [
        {
          id: "turning",
          sol: "VUS.9.a",
          stem: "Why are the events of July 1863 considered a turning point of the war?",
          choices: [
            { letter: "A", text: "The Confederacy captured Washington, D.C." },
            { letter: "B", text: "Britain and France recognized the Confederacy." },
            { letter: "C", text: "Lee's invasion of the North failed and the Union won the Mississippi." },
            { letter: "D", text: "Lincoln issued the first call for volunteers." }
          ],
          correct: "C"
        },
        {
          id: "river",
          sol: "VUS.9.a",
          stem: "Union control of the Mississippi River helped the Union mainly by —",
          choices: [
            { letter: "A", text: "cutting the Confederacy in two" },
            { letter: "B", text: "opening a path to invade Canada" },
            { letter: "C", text: "letting Lee's army escape westward" },
            { letter: "D", text: "ending the Union blockade of Southern ports" }
          ],
          correct: "A"
        },
        {
          id: "equal",
          sol: "VUS.9.b",
          stem: "In the opening of the address, Lincoln ties the war to which founding idea?",
          choices: [
            { letter: "A", text: "the separation of powers in the Constitution" },
            { letter: "B", text: "the right of states to leave the Union" },
            { letter: "C", text: "the protection of property in the Bill of Rights" },
            { letter: "D", text: "the Declaration of Independence's ideal of equality" }
          ],
          correct: "D"
        },
        {
          id: "cemetery",
          sol: "VUS.9.c",
          stem: "The need for a large soldiers' cemetery at Gettysburg, described in sentence 3, best reflects which effect of the war?",
          choices: [
            { letter: "A", text: "the quick end of fighting after the first battles" },
            { letter: "B", text: "the enormous loss of life among common soldiers" },
            { letter: "C", text: "the small size of armies in the 1860s" },
            { letter: "D", text: "the safety of Northern towns from invasion" }
          ],
          correct: "B"
        },
        {
          id: "proposition",
          sol: "VUS.9.b",
          stem: "In the excerpt, the word proposition most nearly means —",
          choices: [
            { letter: "A", text: "a principle put forward as true" },
            { letter: "B", text: "a business offer between two parties" },
            { letter: "C", text: "a law passed by Congress" },
            { letter: "D", text: "a battle plan approved by generals" }
          ],
          correct: "A"
        },
        {
          id: "appomattox",
          sol: "VUS.9.a",
          stem: "What happened at Appomattox Court House in April 1865?",
          choices: [
            { letter: "A", text: "Lincoln delivered his Second Inaugural Address." },
            { letter: "B", text: "Jefferson Davis was elected Confederate president." },
            { letter: "C", text: "Lee surrendered his army to Grant." },
            { letter: "D", text: "Virginia voted to secede from the Union." }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "civw-garrison-douglass",
      family: "CIVW",
      title: "\"I will be heard\"",
      kind: "Expansion, Civil War & Reconstruction · VUS.8",
      blurb: "Two abolitionist voices: William Lloyd Garrison and Frederick Douglass.",
      level: 3,
      passage: "<p>" + N(1) + "In 1831 William Lloyd Garrison began publishing <em>The Liberator</em> in Boston, demanding the immediate end of slavery. " +
        N(2) + "Frederick Douglass escaped slavery in Maryland in 1838, wrote a best-selling narrative of his life and founded his own newspaper, <em>The North Star</em>.</p>" +
        "<p class=\"src\">Source 1</p>" +
        "<blockquote>I will be as harsh as truth, and as uncompromising as justice. … I am in earnest—I will not <strong>equivocate</strong>—I will not excuse—I will not retreat a single inch—AND I WILL BE HEARD.</blockquote>" +
        "<p class=\"src\">— William Lloyd Garrison, The Liberator, January 1, 1831</p>" +
        "<p class=\"src\">Source 2</p>" +
        "<blockquote>What, to the American slave, is your 4th of July? I answer: a day that reveals to him, more than all other days in the year, the gross injustice and cruelty to which he is the constant victim.</blockquote>" +
        "<p class=\"src\">— Frederick Douglass, speech at Rochester, New York, July 5, 1852</p>" +
        "<p>" + N(3) + "Many white Southerners saw such writings as dangerous. " +
        N(4) + "Some Southern states tried to keep abolitionist mail out, and slavery's defenders argued more forcefully that it was good for the nation.</p>",
      claims: [
        {
          id: "garrison",
          sol: "VUS.8.b",
          stem: "Source 1 shows that Garrison favored —",
          choices: [
            { letter: "A", text: "a slow end to slavery with payment to enslavers" },
            { letter: "B", text: "sending freed people to colonies in Africa" },
            { letter: "C", text: "letting each territory vote on slavery" },
            { letter: "D", text: "an immediate end to slavery without compromise" }
          ],
          correct: "D"
        },
        {
          id: "equivocate",
          sol: "VUS.8.b",
          stem: "In Source 1, the word equivocate most nearly means —",
          choices: [
            { letter: "A", text: "to argue loudly in public" },
            { letter: "B", text: "to speak vaguely to avoid a clear stand" },
            { letter: "C", text: "to publish a newspaper" },
            { letter: "D", text: "to treat two sides equally under law" }
          ],
          correct: "B"
        },
        {
          id: "douglass",
          sol: "VUS.8.a",
          stem: "What is Douglass's main point in Source 2?",
          choices: [
            { letter: "A", text: "A nation that celebrates liberty while allowing slavery contradicts its own ideals." },
            { letter: "B", text: "Enslaved people should be invited to Fourth of July celebrations." },
            { letter: "C", text: "The Declaration of Independence should be rewritten to allow slavery." },
            { letter: "D", text: "Independence Day should be moved to a different date in the year." }
          ],
          correct: "A"
        },
        {
          id: "agree",
          sol: "VUS.8.b",
          stem: "Garrison and Douglass would most likely agree that —",
          choices: [
            { letter: "A", text: "slavery should be left for the courts to settle" },
            { letter: "B", text: "abolitionists should avoid offending Southern readers" },
            { letter: "C", text: "slavery must be openly condemned, not quietly accepted" },
            { letter: "D", text: "the Missouri Compromise had solved the slavery question" }
          ],
          correct: "C"
        },
        {
          id: "voice",
          sol: "VUS.8.b",
          stem: "Douglass's speeches carried special weight with Northern audiences mainly because he —",
          choices: [
            { letter: "A", text: "was a member of Congress from New York" },
            { letter: "B", text: "had been a leader of the Whig Party" },
            { letter: "C", text: "owned the largest newspaper in the nation" },
            { letter: "D", text: "had himself been enslaved" }
          ],
          correct: "D"
        },
        {
          id: "response",
          sol: "VUS.7.h",
          stem: "Based on sentences 3 and 4, how did the abolitionist press add to division between the sections?",
          choices: [
            { letter: "A", text: "Southern defenders of slavery hardened their position in response." },
            { letter: "B", text: "Southern leaders agreed to end slavery gradually." },
            { letter: "C", text: "Northern states banned abolitionist newspapers." },
            { letter: "D", text: "Both sections lost interest in the slavery question." }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "civw-emancipation",
      family: "CIVW",
      title: "Forever free",
      kind: "Expansion, Civil War & Reconstruction · VUS.9",
      blurb: "The Emancipation Proclamation and African Americans' fight for freedom.",
      level: 3,
      passage: "<p>" + N(1) + "After the Union victory at Antietam in September 1862, Lincoln issued a preliminary proclamation, and the final Emancipation Proclamation took effect on January 1, 1863.</p>" +
        "<blockquote>… all persons held as slaves within any State or designated part of a State, the people whereof shall then be in rebellion against the United States, shall be then, thenceforward, and forever free …</blockquote>" +
        "<p class=\"src\">— Emancipation Proclamation, January 1, 1863, quoting the preliminary proclamation of September 22, 1862</p>" +
        "<p>" + N(2) + "The proclamation did not apply to the slave states that stayed loyal, such as Maryland and Kentucky. " +
        N(3) + "Still, it made ending slavery a Union war aim and made it harder for Britain and France, which had already abolished slavery, to aid the Confederacy. " +
        N(4) + "It also opened the Union army and navy to African American men; nearly 200,000 served, many in the United States Colored Troops. " +
        N(5) + "Frederick Douglass urged Black men to enlist, arguing that fighting would strengthen their claim to citizenship. " +
        N(6) + "Thousands of enslaved Virginians had already escaped to Union lines, beginning at Fort Monroe in 1861, where the army treated them as <strong>contraband</strong> of war rather than returning them to their enslavers.</p>",
      claims: [
        {
          id: "scope",
          sol: "VUS.9.b",
          stem: "Why did the Emancipation Proclamation not free every enslaved person at once?",
          choices: [
            { letter: "A", text: "Congress voted to delay it until the war ended." },
            { letter: "B", text: "It applied only to areas in rebellion, which the Union did not yet control." },
            { letter: "C", text: "The Supreme Court ruled it unconstitutional in 1863." },
            { letter: "D", text: "It freed only those who had served in the Union army." }
          ],
          correct: "B"
        },
        {
          id: "contraband",
          sol: "VUS.9.c",
          stem: "In sentence 6, the word contraband most nearly means —",
          choices: [
            { letter: "A", text: "soldiers who had deserted the army" },
            { letter: "B", text: "goods sold legally in wartime markets" },
            { letter: "C", text: "enemy property that may be seized in war" },
            { letter: "D", text: "prisoners exchanged after a battle" }
          ],
          correct: "C"
        },
        {
          id: "agency",
          sol: "VUS.9.c",
          stem: "Which conclusion about African Americans during the war is best supported by the passage?",
          choices: [
            { letter: "A", text: "They acted to win their own freedom by escaping and by serving." },
            { letter: "B", text: "They took little part in the war until it was nearly over." },
            { letter: "C", text: "They were barred from the Union army for the entire war." },
            { letter: "D", text: "Most remained neutral and waited for the outcome." }
          ],
          correct: "A"
        },
        {
          id: "douglassrole",
          sol: "VUS.9.a",
          stem: "During the Civil War, Frederick Douglass mainly —",
          choices: [
            { letter: "A", text: "served as a general in the Union army" },
            { letter: "B", text: "represented the Union as minister to Britain" },
            { letter: "C", text: "argued that the war should leave slavery alone" },
            { letter: "D", text: "recruited Black soldiers and pressed for emancipation" }
          ],
          correct: "D"
        },
        {
          id: "diplomacy",
          sol: "VUS.8.c",
          stem: "According to sentence 3, how did the proclamation affect the Confederacy's hopes abroad?",
          choices: [
            { letter: "A", text: "European nations opposed to slavery became less willing to help it." },
            { letter: "B", text: "Britain and France immediately declared war on the Union." },
            { letter: "C", text: "Europe stopped buying cotton from any American source." },
            { letter: "D", text: "The Confederacy gained new allies in Latin America." }
          ],
          correct: "A"
        },
        {
          id: "thirteenth",
          sol: "VUS.8.d",
          stem: "Which later action ended slavery everywhere in the United States, including Maryland and Kentucky?",
          choices: [
            { letter: "A", text: "the Compromise of 1850" },
            { letter: "B", text: "the Reconstruction Acts" },
            { letter: "C", text: "the Thirteenth Amendment" },
            { letter: "D", text: "the Fifteenth Amendment" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "civw-indigenous-policy",
      family: "CIVW",
      title: "Resistance, removal and sovereignty",
      kind: "Expansion, Civil War & Reconstruction · VUS.7",
      blurb: "Logan, Tecumseh and two centuries of U.S. policy toward Indigenous nations.",
      level: 3,
      passage: "<p>" + N(1) + "For more than two centuries, Indigenous nations resisted the loss of their lands through war, diplomacy and the courts. " +
        N(2) + "U.S. policy shifted among removal, <strong>assimilation</strong> and recognition of tribal self-government. " +
        N(3) + "The timeline below traces some of these changes, beginning on the Virginia frontier.</p>" +
        "<ul>" +
        "<li><strong>1774</strong> During Lord Dunmore's War on Virginia's frontier, the Mingo leader Logan, whose family had been killed by settlers, gives a speech of grief that Thomas Jefferson later prints in <em>Notes on the State of Virginia</em>.</li>" +
        "<li><strong>1811</strong> Troops under William Henry Harrison destroy Prophetstown at Tippecanoe, a blow to Tecumseh's alliance of nations against American expansion.</li>" +
        "<li><strong>1830</strong> The Indian Removal Act passes.</li>" +
        "<li><strong>1887</strong> The Dawes Act divides reservation land into individual plots and sells the \"surplus\"; tribes lose most of their land.</li>" +
        "<li><strong>1934</strong> The Indian Reorganization Act ends allotment and encourages tribal governments.</li>" +
        "<li><strong>2020</strong> In <em>McGirt v. Oklahoma</em>, the Supreme Court rules that the Muscogee (Creek) reservation still exists under federal law because Congress never ended it.</li>" +
        "</ul>",
      claims: [
        {
          id: "logan",
          sol: "VUS.7.c",
          stem: "Chief Logan is best remembered for —",
          choices: [
            { letter: "A", text: "a speech mourning his family, killed by settlers" },
            { letter: "B", text: "inventing a written form of the Mingo language" },
            { letter: "C", text: "winning a Supreme Court case against Virginia" },
            { letter: "D", text: "guiding Lewis and Clark to the Pacific" }
          ],
          correct: "A"
        },
        {
          id: "tecumseh",
          sol: "VUS.7.c",
          stem: "Tecumseh's main goal was to —",
          choices: [
            { letter: "A", text: "sell Shawnee land to pay for new schools" },
            { letter: "B", text: "help the United States defeat Britain in 1812" },
            { letter: "C", text: "unite Indigenous nations to stop American expansion" },
            { letter: "D", text: "move the Shawnee peacefully west of the Rockies" }
          ],
          correct: "C"
        },
        {
          id: "assimilation",
          sol: "VUS.7.d",
          stem: "In sentence 2, the word assimilation refers to a policy of —",
          choices: [
            { letter: "A", text: "moving nations to land west of the Mississippi" },
            { letter: "B", text: "signing treaties of military alliance" },
            { letter: "C", text: "paying nations for land at its full value" },
            { letter: "D", text: "pressing Indigenous people to give up their own cultures" }
          ],
          correct: "D"
        },
        {
          id: "ira",
          sol: "VUS.7.d",
          stem: "How did the Indian Reorganization Act of 1934 differ from the Dawes Act?",
          choices: [
            { letter: "A", text: "It ordered the removal of nations to Indian Territory." },
            { letter: "B", text: "It ended allotment and supported tribal self-government." },
            { letter: "C", text: "It divided reservations into more individual plots." },
            { letter: "D", text: "It made all Indigenous people leave their reservations." }
          ],
          correct: "B"
        },
        {
          id: "mcgirt",
          sol: "VUS.7.d",
          stem: "Based on the timeline, the decision in McGirt v. Oklahoma is significant because it held that —",
          choices: [
            { letter: "A", text: "states may end a reservation by passing their own laws" },
            { letter: "B", text: "the Indian Removal Act had been unconstitutional" },
            { letter: "C", text: "the Dawes Act gave all reservation land to Oklahoma" },
            { letter: "D", text: "a reservation set by treaty lasts unless Congress ends it" }
          ],
          correct: "D"
        },
        {
          id: "pattern",
          sol: "VUS.7.e",
          stem: "Which cause is shared by the conflicts involving Logan in 1774 and Tecumseh in 1811?",
          choices: [
            { letter: "A", text: "settlers moving onto Indigenous lands" },
            { letter: "B", text: "a dispute over tariffs on the fur trade" },
            { letter: "C", text: "the spread of cotton farming into Ohio" },
            { letter: "D", text: "Spanish attempts to control the Ohio River" }
          ],
          correct: "A"
        }
      ]
    }
  ];

  for (var i = 0; i < PACKS.length; i++) P.push(PACKS[i]);
})(typeof window !== "undefined" ? window : global);
