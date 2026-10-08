/* SOL Lab — World History II · Age of Revolutions (WHII.4). Original text only. */
(function (global) {
  var P = global.HEIST_PACKS;
  if (!P || !P.push) return;
  var N = function (i) { return '<span class="n">(' + i + ')</span> '; };   // numbered sentence

  var PACKS = [
    /* ---------- tiny ---------- */
    {
      id: "revo-thirty-years",
      family: "REVO",
      title: "The Thirty Years' War",
      kind: "Age of Revolutions · WHII.4",
      blurb: "A window in Prague, a war across Europe and a peace at Westphalia.",
      level: 1,
      passage: "<p>" + N(1) + "The <strong>Thirty Years' War</strong> began as a religious conflict inside the Holy Roman Empire and grew into a struggle for power among Europe's states.</p><ul><li><strong>1618</strong> Protestant nobles in Bohemia throw two royal officials from a castle window in Prague</li><li><strong>1630</strong> Lutheran Sweden enters the war against the Hapsburgs</li><li><strong>1635</strong> Catholic France declares war on Hapsburg Spain</li><li><strong>1648</strong> The <strong>Peace of Westphalia</strong> ends the war</li></ul>",
      claims: [
        {
          id: "begin",
          sol: "WHII.4.a",
          stem: "According to the passage, how did the Thirty Years' War begin?",
          choices: [
            { letter: "A", text: "as a revolt of peasants against high rents and taxes" },
            { letter: "B", text: "as a religious conflict inside the Holy Roman Empire" },
            { letter: "C", text: "as a war between England and Spain over colonies" },
            { letter: "D", text: "as a rebellion of the Dutch against Spanish rule" }
          ],
          correct: "B"
        },
        {
          id: "first",
          sol: "WHII.4.a",
          stem: "Which event on the timeline happened FIRST?",
          choices: [
            { letter: "A", text: "Sweden enters the war against the Hapsburgs" },
            { letter: "B", text: "France declares war on Spain" },
            { letter: "C", text: "The Peace of Westphalia is signed" },
            { letter: "D", text: "Officials are thrown from a window in Prague" }
          ],
          correct: "D"
        },
        {
          id: "politics",
          sol: "WHII.4.a",
          stem: "Catholic France went to war against the Catholic Hapsburgs. This best shows that by 1635 the war had become —",
          choices: [
            { letter: "A", text: "mostly a contest for political power" },
            { letter: "B", text: "a war fought only by Protestant states" },
            { letter: "C", text: "a war that was nearly over" },
            { letter: "D", text: "a conflict limited to Bohemia" }
          ],
          correct: "A"
        },
        {
          id: "westphalia",
          sol: "WHII.4.a",
          stem: "Which was a result of the Peace of Westphalia?",
          choices: [
            { letter: "A", text: "The Hapsburgs gained control of every German state." },
            { letter: "B", text: "Protestant worship was banned throughout the empire." },
            { letter: "C", text: "Independence for the Dutch Republic was recognized." },
            { letter: "D", text: "France was placed under the Holy Roman Emperor." }
          ],
          correct: "C"
        },
        {
          id: "effect",
          sol: "WHII.4.a",
          stem: "The Thirty Years' War left the Holy Roman Empire —",
          choices: [
            { letter: "A", text: "united under a single, strong emperor" },
            { letter: "B", text: "divided, weakened and far less populous" },
            { letter: "C", text: "a Protestant kingdom ruled by Sweden" },
            { letter: "D", text: "the richest and strongest power in Europe" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "revo-sun-king",
      family: "REVO",
      title: "The Sun King",
      kind: "Age of Revolutions · WHII.4",
      blurb: "Louis XIV, Versailles and the meaning of divine right.",
      level: 1,
      passage: "<p>" + N(1) + "Louis XIV ruled France from 1643 to 1715, one of the longest reigns in European history. " + N(2) + "He chose the sun as his symbol and claimed to rule by <strong>divine right</strong>, answering to God alone. " + N(3) + "At his palace of Versailles, nobles competed for small honors while the king kept the real power. " + N(4) + "He never once called the Estates-General, France's assembly of representatives.</p>",
      claims: [
        {
          id: "divine",
          sol: "WHII.4.d",
          stem: "In sentence 2, divine right means that a king —",
          choices: [
            { letter: "A", text: "is chosen by a vote of the great nobles" },
            { letter: "B", text: "gets his power from God, not the people" },
            { letter: "C", text: "shares power with an elected assembly" },
            { letter: "D", text: "must obey laws passed by the church" }
          ],
          correct: "B"
        },
        {
          id: "form",
          sol: "WHII.4.d",
          stem: "Louis XIV is the best example of which form of government?",
          choices: [
            { letter: "A", text: "absolute monarchy" },
            { letter: "B", text: "constitutional monarchy" },
            { letter: "C", text: "direct democracy" },
            { letter: "D", text: "representative republic" }
          ],
          correct: "A"
        },
        {
          id: "versailles",
          sol: "WHII.4.d",
          stem: "Why did Louis XIV bring the great nobles to live at Versailles?",
          choices: [
            { letter: "A", text: "to train them as officers for his navy" },
            { letter: "B", text: "to prepare them to run for Parliament" },
            { letter: "C", text: "to protect them from revolts in the provinces" },
            { letter: "D", text: "to watch them and weaken their power at home" }
          ],
          correct: "D"
        },
        {
          id: "evidence",
          sol: "WHII.4.d",
          stem: "Which detail from the passage best shows that Louis XIV avoided any check on his power?",
          choices: [
            { letter: "A", text: "He chose the rising sun as his symbol." },
            { letter: "B", text: "He ruled from 1643 to 1715." },
            { letter: "C", text: "He never called the Estates-General." },
            { letter: "D", text: "He held court at Versailles." }
          ],
          correct: "C"
        },
        {
          id: "rivals",
          sol: "WHII.4.d",
          stem: "Louis XIV's great rivals, who ruled Spain and Austria, belonged to which royal family?",
          choices: [
            { letter: "A", text: "the Tudors" },
            { letter: "B", text: "the Hapsburgs" },
            { letter: "C", text: "the Romanovs" },
            { letter: "D", text: "the Stuarts" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "revo-new-science",
      family: "REVO",
      title: "A new view of the heavens",
      kind: "Age of Revolutions · WHII.4",
      blurb: "Copernicus, Galileo and Newton overturn an ancient picture of the universe.",
      level: 1,
      passage: "<p>" + N(1) + "For centuries most Europeans accepted the <strong>geocentric</strong> view that the sun and planets circle Earth. " + N(2) + "In 1543 Copernicus argued instead that Earth circles the sun. " + N(3) + "Galileo's telescope supported this idea, but the Church put him on trial in 1633. " + N(4) + "In 1687 Isaac Newton explained that one force, gravity, governs both falling objects and the planets.</p>",
      claims: [
        {
          id: "geo",
          sol: "WHII.4.b",
          stem: "In sentence 1, the word geocentric describes a model in which —",
          choices: [
            { letter: "A", text: "Earth is at the center of the universe" },
            { letter: "B", text: "the sun is at the center of the system" },
            { letter: "C", text: "gravity holds the planets in orbit" },
            { letter: "D", text: "observation replaces ancient authority" }
          ],
          correct: "A"
        },
        {
          id: "telescope",
          sol: "WHII.4.b",
          stem: "Which scientist used a telescope to gather evidence for a sun-centered model?",
          choices: [
            { letter: "A", text: "Isaac Newton" },
            { letter: "B", text: "Nicolaus Copernicus" },
            { letter: "C", text: "Galileo Galilei" },
            { letter: "D", text: "René Descartes" }
          ],
          correct: "C"
        },
        {
          id: "trial",
          sol: "WHII.4.b",
          stem: "Why was Galileo put on trial?",
          choices: [
            { letter: "A", text: "He refused to pay the taxes owed to the Church." },
            { letter: "B", text: "He led a revolt against the Hapsburg emperor." },
            { letter: "C", text: "He wrote his books in a language the Church banned." },
            { letter: "D", text: "His findings went against Church teaching." }
          ],
          correct: "D"
        },
        {
          id: "method",
          sol: "WHII.4.b",
          stem: "Thinkers of the Scientific Revolution relied most on —",
          choices: [
            { letter: "A", text: "the writings of ancient authorities" },
            { letter: "B", text: "observation, experiment and reason" },
            { letter: "C", text: "decrees issued by kings" },
            { letter: "D", text: "votes taken by university scholars" }
          ],
          correct: "B"
        },
        {
          id: "laws",
          sol: "WHII.4.b",
          stem: "Newton's work encouraged Enlightenment thinkers to believe that —",
          choices: [
            { letter: "A", text: "natural laws can be discovered by reason" },
            { letter: "B", text: "kings rule by the will of God" },
            { letter: "C", text: "the heavens cannot be studied" },
            { letter: "D", text: "only the Church may explain the natural world" }
          ],
          correct: "A"
        }
      ]
    },
    /* ---------- short ---------- */
    {
      id: "revo-wars-table",
      family: "REVO",
      title: "A century of religious wars",
      kind: "Age of Revolutions · WHII.4",
      blurb: "Peasants, Huguenots, the Dutch and the Tudors: a table of conflicts.",
      level: 2,
      passage: "<p>" + N(1) + "Between 1520 and 1650, disputes over religion mixed with struggles over land, taxes and power. " + N(2) + "The table lists some of these conflicts.</p><table><tr><th>Conflict</th><th>Dates</th><th>Main sides</th></tr><tr><td>German Peasants' War</td><td>1524–1525</td><td>Peasants vs. German princes</td></tr><tr><td>Pilgrimage of Grace (a Tudor rebellion)</td><td>1536</td><td>Northern English Catholics vs. Henry VIII</td></tr><tr><td>French Wars of Religion</td><td>1562–1598</td><td>Catholics vs. <strong>Huguenots</strong></td></tr><tr><td>Dutch Revolt</td><td>1568–1648</td><td>Dutch provinces vs. Philip II of Spain</td></tr><tr><td>Thirty Years' War</td><td>1618–1648</td><td>Catholic and Protestant states of Europe</td></tr></table>",
      claims: [
        {
          id: "first",
          sol: "WHII.4.a",
          stem: "Which conflict in the table began FIRST?",
          choices: [
            { letter: "A", text: "the Dutch Revolt" },
            { letter: "B", text: "the French Wars of Religion" },
            { letter: "C", text: "the German Peasants' War" },
            { letter: "D", text: "the Pilgrimage of Grace" }
          ],
          correct: "C"
        },
        {
          id: "huguenots",
          sol: "WHII.4.a",
          stem: "In the table, the Huguenots were —",
          choices: [
            { letter: "A", text: "French Protestants who followed Calvin" },
            { letter: "B", text: "Spanish troops sent to crush the Dutch" },
            { letter: "C", text: "German peasants who rose against lords" },
            { letter: "D", text: "English Catholics loyal to the pope" }
          ],
          correct: "A"
        },
        {
          id: "nantes",
          sol: "WHII.4.a",
          stem: "The French Wars of Religion ended in 1598 when Henry IV issued the Edict of Nantes, which —",
          choices: [
            { letter: "A", text: "expelled all Protestants from France" },
            { letter: "B", text: "made France part of the Holy Roman Empire" },
            { letter: "C", text: "gave the Netherlands independence from Spain" },
            { letter: "D", text: "allowed Huguenots to worship in many places" }
          ],
          correct: "D"
        },
        {
          id: "grace",
          sol: "WHII.4.a",
          stem: "The Pilgrimage of Grace was a protest against Henry VIII's —",
          choices: [
            { letter: "A", text: "decision to marry Catherine of Aragon" },
            { letter: "B", text: "break with Rome and closing of the monasteries" },
            { letter: "C", text: "alliance with Philip II of Spain against France" },
            { letter: "D", text: "plan to invade the Netherlands with a fleet" }
          ],
          correct: "B"
        },
        {
          id: "conclude",
          sol: "WHII.4.a",
          stem: "Which conclusion is best supported by the table?",
          choices: [
            { letter: "A", text: "Most of these wars were settled within a single year." },
            { letter: "B", text: "Religious conflict lasted in Europe for over a century." },
            { letter: "C", text: "Spain fought on the Protestant side in each war." },
            { letter: "D", text: "Peasants won most of the conflicts in the table." }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "revo-charles-v",
      family: "REVO",
      title: "The empire of Charles V",
      kind: "Age of Revolutions · WHII.4",
      blurb: "One Hapsburg ruler, lands on two continents and enemies on every side.",
      level: 2,
      passage: "<p>" + N(1) + "In 1519 Charles V, already king of Spain, was elected <strong>Holy Roman Emperor</strong>. " + N(2) + "Through inheritance he ruled Spain and its American colonies, the Netherlands, parts of Italy and the Hapsburg lands of Austria. " + N(3) + "On a map, his lands nearly surround France. " + N(4) + "Charles spent his reign at war: against France, against the Ottoman Turks, who besieged Vienna in 1529, and against Protestant princes in Germany. " + N(5) + "Worn out, he gave up his thrones in 1556. " + N(6) + "His son Philip II received Spain, the Netherlands and the Americas, while his brother Ferdinand received Austria and later the imperial title.</p>",
      claims: [
        {
          id: "inherit",
          sol: "WHII.4.d",
          stem: "According to the passage, how did Charles V gain most of his lands?",
          choices: [
            { letter: "A", text: "by conquering them in war" },
            { letter: "B", text: "through inheritance" },
            { letter: "C", text: "by buying them from France" },
            { letter: "D", text: "by a vote of the people" }
          ],
          correct: "B"
        },
        {
          id: "map",
          sol: "WHII.4.d",
          stem: "Based on sentence 3, why did French kings see the Hapsburgs as a threat?",
          choices: [
            { letter: "A", text: "The Hapsburgs controlled the pope's lands in Rome." },
            { letter: "B", text: "Hapsburg ships blocked all French trade with Asia." },
            { letter: "C", text: "Hapsburg lands nearly encircled France." },
            { letter: "D", text: "The Hapsburgs ruled the island of Britain." }
          ],
          correct: "C"
        },
        {
          id: "protestant",
          sol: "WHII.4.a",
          stem: "Charles V's wars against German princes were part of the conflict that followed the teachings of —",
          choices: [
            { letter: "A", text: "Martin Luther" },
            { letter: "B", text: "John Locke" },
            { letter: "C", text: "Ignatius of Loyola" },
            { letter: "D", text: "Henry VIII" }
          ],
          correct: "A"
        },
        {
          id: "divide",
          sol: "WHII.4.d",
          stem: "Which statement best explains why Charles V divided his empire in 1556?",
          choices: [
            { letter: "A", text: "The pope ordered him to give his Italian lands to France." },
            { letter: "B", text: "The Peace of Westphalia forced him to step down." },
            { letter: "C", text: "His subjects in Spain voted to replace him with his son." },
            { letter: "D", text: "His realm was too large and threatened for one ruler." }
          ],
          correct: "D"
        },
        {
          id: "compare",
          sol: "WHII.4.d",
          stem: "Charles V and Louis XIV are both examples of —",
          choices: [
            { letter: "A", text: "rulers who shared power with parliaments" },
            { letter: "B", text: "powerful monarchs of the Age of Absolutism" },
            { letter: "C", text: "leaders of the Protestant Reformation" },
            { letter: "D", text: "kings removed from power by revolutions" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "revo-thinkers",
      family: "REVO",
      title: "Thinkers of the Enlightenment",
      kind: "Age of Revolutions · WHII.4",
      blurb: "Locke, Montesquieu, Voltaire, Rousseau and Hume in one table.",
      level: 1,
      passage: "<p>" + N(1) + "Enlightenment writers applied the reason of the Scientific Revolution to government and society.</p><table><tr><th>Thinker</th><th>Key idea</th></tr><tr><td>John Locke (England)</td><td>People have <strong>natural rights</strong> to life, liberty and property; government rests on the consent of the governed.</td></tr><tr><td>Montesquieu (France)</td><td>Power should be separated into legislative, executive and judicial branches.</td></tr><tr><td>Voltaire (France)</td><td>Freedom of religion and of expression; criticism of intolerance.</td></tr><tr><td>Jean-Jacques Rousseau (Geneva)</td><td>A social contract binds people to the general will of the community.</td></tr><tr><td>David Hume (Scotland)</td><td>Knowledge comes from experience and observation.</td></tr></table>",
      claims: [
        {
          id: "branches",
          sol: "WHII.4.c",
          stem: "Which thinker's idea is the basis for the three branches of the United States government?",
          choices: [
            { letter: "A", text: "John Locke" },
            { letter: "B", text: "Voltaire" },
            { letter: "C", text: "Montesquieu" },
            { letter: "D", text: "David Hume" }
          ],
          correct: "C"
        },
        {
          id: "natural",
          sol: "WHII.4.b",
          stem: "In the table, natural rights are rights that —",
          choices: [
            { letter: "A", text: "a king grants to loyal subjects" },
            { letter: "B", text: "people have simply by being human" },
            { letter: "C", text: "only owners of property may claim" },
            { letter: "D", text: "the church grants to its members" }
          ],
          correct: "B"
        },
        {
          id: "statute",
          sol: "WHII.4.c",
          stem: "The Virginia Statute for Religious Freedom (1786) most closely reflects the ideas of —",
          choices: [
            { letter: "A", text: "Voltaire" },
            { letter: "B", text: "Montesquieu" },
            { letter: "C", text: "David Hume" },
            { letter: "D", text: "Thomas Hobbes" }
          ],
          correct: "A"
        },
        {
          id: "replace",
          sol: "WHII.4.b",
          stem: "Which thinker in the table would most clearly support the right of a people to replace a government that violates their rights?",
          choices: [
            { letter: "A", text: "David Hume" },
            { letter: "B", text: "Montesquieu" },
            { letter: "C", text: "Voltaire" },
            { letter: "D", text: "John Locke" }
          ],
          correct: "D"
        },
        {
          id: "hume",
          sol: "WHII.4.b",
          stem: "Hume's idea in the table is closest to the method of —",
          choices: [
            { letter: "A", text: "the Renaissance study of ancient art" },
            { letter: "B", text: "the Scientific Revolution" },
            { letter: "C", text: "the Catholic Reformation" },
            { letter: "D", text: "divine right monarchy" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "revo-bill-of-rights",
      family: "REVO",
      title: "The English Bill of Rights",
      kind: "Age of Revolutions · WHII.4",
      blurb: "Three clauses of 1689 that limited the crown and echoed in Virginia.",
      level: 2,
      passage: "<p>" + N(1) + "After the Glorious Revolution of 1688, Parliament offered the throne to William and Mary on the condition that they accept a <strong>Bill of Rights</strong>. " + N(2) + "Three of its clauses are below.</p><blockquote>That levying money for or to the use of the Crown by pretence of prerogative, without grant of Parliament ... is illegal. That election of members of Parliament ought to be free. That excessive bail ought not to be required, nor excessive fines imposed, nor cruel and unusual punishments inflicted.</blockquote><p class=\"src\">— English Bill of Rights, 1689</p>",
      claims: [
        {
          id: "purpose",
          sol: "WHII.4.e",
          stem: "The main purpose of the Bill of Rights was to —",
          choices: [
            { letter: "A", text: "restore the king's divine right to rule" },
            { letter: "B", text: "make England a republic without a monarch" },
            { letter: "C", text: "limit the monarch and protect Parliament" },
            { letter: "D", text: "create the Church of England" }
          ],
          correct: "C"
        },
        {
          id: "levy",
          sol: "WHII.4.e",
          stem: "In the first clause, the phrase levying money most nearly means —",
          choices: [
            { letter: "A", text: "spending money on the army" },
            { letter: "B", text: "collecting taxes" },
            { letter: "C", text: "lending money to the king" },
            { letter: "D", text: "printing paper money" }
          ],
          correct: "B"
        },
        {
          id: "virginia",
          sol: "WHII.4.c",
          stem: "Which clause was later copied almost word for word into Virginia's Declaration of Rights and the Eighth Amendment?",
          choices: [
            { letter: "A", text: "the clause on free elections to Parliament" },
            { letter: "B", text: "the clause on taxes without Parliament's grant" },
            { letter: "C", text: "the clause naming William and Mary" },
            { letter: "D", text: "the clause on bail, fines and punishments" }
          ],
          correct: "D"
        },
        {
          id: "glorious",
          sol: "WHII.4.e",
          stem: "Why is the Revolution of 1688 called \"glorious\"?",
          choices: [
            { letter: "A", text: "Parliament replaced the king with little bloodshed." },
            { letter: "B", text: "England won a great victory over France." },
            { letter: "C", text: "The king defeated Parliament on the battlefield." },
            { letter: "D", text: "It brought the Thirty Years' War to an end." }
          ],
          correct: "A"
        },
        {
          id: "result",
          sol: "WHII.4.e",
          stem: "The Bill of Rights helped make England —",
          choices: [
            { letter: "A", text: "an absolute monarchy" },
            { letter: "B", text: "a constitutional monarchy" },
            { letter: "C", text: "a theocracy ruled by bishops" },
            { letter: "D", text: "a direct democracy" }
          ],
          correct: "B"
        }
      ]
    },
    /* ---------- medium ---------- */
    {
      id: "revo-civil-war",
      family: "REVO",
      title: "King versus Parliament",
      kind: "Age of Revolutions · WHII.4",
      blurb: "From the Petition of Right to the flight of James II: a timeline.",
      level: 2,
      passage: "<p>" + N(1) + "In the 1600s the Stuart kings of England clashed with Parliament over taxes, religion and the limits of royal power. " + N(2) + "The timeline traces the result.</p><ul><li><strong>1628</strong> Parliament forces Charles I to accept the <strong>Petition of Right</strong>, limiting taxes without its consent and imprisonment without cause</li><li><strong>1642</strong> Civil war begins between the king's Cavaliers and Parliament's Roundheads</li><li><strong>1649</strong> Charles I is tried and executed; England becomes a commonwealth without a king</li><li><strong>1653</strong> Oliver Cromwell takes power as Lord Protector</li><li><strong>1660</strong> The monarchy is restored under Charles II</li><li><strong>1679</strong> The Habeas Corpus Act protects people from being jailed without a legal reason</li><li><strong>1688</strong> James II flees; Parliament invites William and Mary to rule</li></ul>",
      claims: [
        {
          id: "between",
          sol: "WHII.4.e",
          stem: "Which event came between the execution of Charles I and the restoration of the monarchy?",
          choices: [
            { letter: "A", text: "the Petition of Right" },
            { letter: "B", text: "Cromwell's rule as Lord Protector" },
            { letter: "C", text: "the Habeas Corpus Act" },
            { letter: "D", text: "the invitation to William and Mary" }
          ],
          correct: "B"
        },
        {
          id: "petition",
          sol: "WHII.4.e",
          stem: "On the timeline, the Petition of Right was a document that —",
          choices: [
            { letter: "A", text: "let the king dissolve Parliament forever" },
            { letter: "B", text: "ended the war between Cavaliers and Roundheads" },
            { letter: "C", text: "limited the king's power to tax and jail" },
            { letter: "D", text: "named Oliver Cromwell ruler of England" }
          ],
          correct: "C"
        },
        {
          id: "cause",
          sol: "WHII.4.e",
          stem: "Which was a main cause of the English Civil War?",
          choices: [
            { letter: "A", text: "quarrels between king and Parliament over power" },
            { letter: "B", text: "a Spanish invasion of southern England" },
            { letter: "C", text: "the spread of the Thirty Years' War to Britain" },
            { letter: "D", text: "a peasant revolt over the price of bread" }
          ],
          correct: "A"
        },
        {
          id: "habeas",
          sol: "WHII.4.c",
          stem: "The Habeas Corpus Act protected which right that later appears in the U.S. Constitution?",
          choices: [
            { letter: "A", text: "the right of citizens to keep and bear arms" },
            { letter: "B", text: "the right to trial by a jury" },
            { letter: "C", text: "the right of all adults to vote" },
            { letter: "D", text: "the right not to be jailed without cause" }
          ],
          correct: "D"
        },
        {
          id: "trend",
          sol: "WHII.4.e",
          stem: "Which conclusion is best supported by the timeline as a whole?",
          choices: [
            { letter: "A", text: "Parliament gained power at the crown's expense." },
            { letter: "B", text: "English kings grew more absolute after 1660." },
            { letter: "C", text: "Cromwell restored the Stuart family to the throne." },
            { letter: "D", text: "England ended its monarchy for good in 1649." }
          ],
          correct: "A"
        },
        {
          id: "contrast",
          sol: "WHII.4.d",
          stem: "Unlike Louis XIV of France, English monarchs after 1689 —",
          choices: [
            { letter: "A", text: "ruled without any council or advisers" },
            { letter: "B", text: "shared power with an elected Parliament" },
            { letter: "C", text: "were chosen by the pope" },
            { letter: "D", text: "also governed the Holy Roman Empire" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "revo-virginia-rights",
      family: "REVO",
      title: "Two declarations of 1776",
      kind: "Age of Revolutions · WHII.4",
      blurb: "George Mason and Thomas Jefferson put Enlightenment ideas into words.",
      level: 3,
      passage: "<p>" + N(1) + "Enlightenment ideas about <strong>natural rights</strong> crossed the Atlantic in books read by Virginia's leaders. " + N(2) + "Compare these two documents from 1776.</p><blockquote>That all men are by nature equally free and independent, and have certain inherent rights, of which, when they enter into a state of society, they cannot, by any compact, deprive or divest their posterity; namely, the enjoyment of life and liberty, with the means of acquiring and possessing property, and pursuing and obtaining happiness and safety.</blockquote><p class=\"src\">— Virginia Declaration of Rights, Section 1, drafted by George Mason, June 1776</p><blockquote>We hold these truths to be self-evident, that all men are created equal, that they are endowed by their Creator with certain unalienable Rights, that among these are Life, Liberty and the pursuit of Happiness.</blockquote><p class=\"src\">— Declaration of Independence, July 1776</p>",
      claims: [
        {
          id: "locke",
          sol: "WHII.4.c",
          stem: "Which Enlightenment thinker's ideas are most clearly reflected in both excerpts?",
          choices: [
            { letter: "A", text: "Montesquieu" },
            { letter: "B", text: "John Locke" },
            { letter: "C", text: "David Hume" },
            { letter: "D", text: "Immanuel Kant" }
          ],
          correct: "B"
        },
        {
          id: "inherent",
          sol: "WHII.4.c",
          stem: "In the first excerpt, the word inherent most nearly means —",
          choices: [
            { letter: "A", text: "granted by the king" },
            { letter: "B", text: "earned through a lifetime of hard labor" },
            { letter: "C", text: "belonging to a person by nature" },
            { letter: "D", text: "handed down in a will" }
          ],
          correct: "C"
        },
        {
          id: "only",
          sol: "WHII.4.c",
          stem: "Which idea appears in the Virginia excerpt but NOT in the Declaration of Independence excerpt?",
          choices: [
            { letter: "A", text: "All people have certain rights." },
            { letter: "B", text: "All people are created equal." },
            { letter: "C", text: "Liberty is a right." },
            { letter: "D", text: "Owning property is a right." }
          ],
          correct: "D"
        },
        {
          id: "echo",
          sol: "WHII.4.c",
          stem: "Which conclusion is best supported by the dates and wording of the two documents?",
          choices: [
            { letter: "A", text: "Jefferson's words echoed Mason's from weeks before." },
            { letter: "B", text: "Mason copied his ideas from the Declaration of Independence." },
            { letter: "C", text: "Both documents were written in London." },
            { letter: "D", text: "Neither shows any Enlightenment influence." }
          ],
          correct: "A"
        },
        {
          id: "consent",
          sol: "WHII.4.b",
          stem: "The Declaration of Independence goes on to say that governments derive \"their just powers from the consent of the governed.\" This idea is called —",
          choices: [
            { letter: "A", text: "the divine right of kings" },
            { letter: "B", text: "absolute monarchy" },
            { letter: "C", text: "government by consent" },
            { letter: "D", text: "mercantilist trade policy" }
          ],
          correct: "C"
        },
        {
          id: "appeal",
          sol: "WHII.4.f",
          stem: "Why did these Enlightenment ideas appeal to American colonists in 1776?",
          choices: [
            { letter: "A", text: "They supported the king's claim to rule by divine right." },
            { letter: "B", text: "They called for a state church in every colony." },
            { letter: "C", text: "They held that colonies exist to enrich the home country." },
            { letter: "D", text: "They justified breaking from a government seen as unjust." }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "revo-three-estates",
      family: "REVO",
      title: "France in 1789",
      kind: "Age of Revolutions · WHII.4",
      blurb: "Three estates, one tax burden and a government out of money.",
      level: 2,
      passage: "<p>" + N(1) + "In 1789 French society was still divided into three <strong>estates</strong>, or legal classes. " + N(2) + "The table shows each estate's approximate share of the population and of the direct tax burden.</p><table><tr><th>Estate</th><th>Members</th><th>Share of population</th><th>Direct taxes paid</th></tr><tr><td>First</td><td>Clergy</td><td>under 1%</td><td>very little</td></tr><tr><td>Second</td><td>Nobles</td><td>about 2%</td><td>very little</td></tr><tr><td>Third</td><td>Peasants, workers and the middle class</td><td>about 97%</td><td>nearly all</td></tr></table><p>" + N(3) + "Poor harvests had sent the price of bread soaring. " + N(4) + "The royal government was also deeply in debt, partly from helping the Americans win their war for independence. " + N(5) + "When Louis XVI called the Estates-General in 1789, each estate traditionally had one vote, so the Third Estate could be outvoted two to one.</p>",
      claims: [
        {
          id: "table",
          sol: "WHII.4.f",
          stem: "Which conclusion about taxes is best supported by the table?",
          choices: [
            { letter: "A", text: "The largest group carried nearly all the direct taxes." },
            { letter: "B", text: "The nobles paid most of the kingdom's direct taxes." },
            { letter: "C", text: "The clergy made up a majority of the population." },
            { letter: "D", text: "Taxes were shared equally among the estates." }
          ],
          correct: "A"
        },
        {
          id: "estates",
          sol: "WHII.4.f",
          stem: "In sentence 1, the word estates refers to —",
          choices: [
            { letter: "A", text: "large country houses owned by nobles" },
            { letter: "B", text: "legal classes or orders of society" },
            { letter: "C", text: "provinces of the French kingdom" },
            { letter: "D", text: "property left to heirs in a will" }
          ],
          correct: "B"
        },
        {
          id: "debt",
          sol: "WHII.4.f",
          stem: "According to sentence 4, how did the American Revolution help cause the French Revolution?",
          choices: [
            { letter: "A", text: "American soldiers invaded France in 1789." },
            { letter: "B", text: "Britain forced France to pay for the war." },
            { letter: "C", text: "The Americans refused to trade with France." },
            { letter: "D", text: "Aid to the Americans deepened France's debt." }
          ],
          correct: "D"
        },
        {
          id: "vote",
          sol: "WHII.4.f",
          stem: "Why did the Third Estate object to the voting rule described in sentence 5?",
          choices: [
            { letter: "A", text: "The king alone could break a tie between estates." },
            { letter: "B", text: "Only the clergy could propose new taxes." },
            { letter: "C", text: "The two smallest estates could outvote the largest." },
            { letter: "D", text: "Peasants had more votes than the middle class." }
          ],
          correct: "C"
        },
        {
          id: "absolute",
          sol: "WHII.4.d",
          stem: "Before 1789, French kings had not called the Estates-General since 1614. This tradition reflects —",
          choices: [
            { letter: "A", text: "constitutional monarchy" },
            { letter: "B", text: "the absolutism of rulers like Louis XIV" },
            { letter: "C", text: "the Enlightenment idea of consent" },
            { letter: "D", text: "the influence of the Congress of Vienna" }
          ],
          correct: "B"
        },
        {
          id: "rights",
          sol: "WHII.4.b",
          stem: "Which document, adopted in August 1789, drew on Enlightenment ideas and the American Declaration of Independence?",
          choices: [
            { letter: "A", text: "the Napoleonic Code of 1804" },
            { letter: "B", text: "the English Bill of Rights of 1689" },
            { letter: "C", text: "the Declaration of the Rights of Man" },
            { letter: "D", text: "the Edict of Nantes of 1598" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "revo-latin-america",
      family: "REVO",
      title: "Independence in Latin America",
      kind: "Age of Revolutions · WHII.4",
      blurb: "Haiti, Bolívar, San Martín and Hidalgo follow the revolutionary example.",
      level: 2,
      passage: "<p>" + N(1) + "The success of the American Revolution and the ideals of the French Revolution inspired independence movements in Latin America. " + N(2) + "In the French colony of Saint-Domingue, enslaved people led by Toussaint L'Ouverture rose up in 1791, and in 1804 the colony became independent Haiti. " + N(3) + "In Spanish America, <strong>creoles</strong>, people of European descent born in the colonies, resented the power of officials sent from Spain. " + N(4) + "When Napoleon invaded Spain in 1808, they seized their chance. " + N(5) + "Simón Bolívar led armies that freed much of northern South America, while José de San Martín fought in Argentina, Chile and Peru. " + N(6) + "In Mexico, the priest Miguel Hidalgo called for revolt in 1810, and independence came in 1821. " + N(7) + "On a map of 1830, nearly all of Spain's mainland empire, from Mexico to Argentina, had become independent nations.</p>",
      claims: [
        {
          id: "first",
          sol: "WHII.4.f",
          stem: "Which event in the passage happened FIRST?",
          choices: [
            { letter: "A", text: "Haiti declares its independence from France." },
            { letter: "B", text: "Hidalgo calls for revolt." },
            { letter: "C", text: "Napoleon invades Spain." },
            { letter: "D", text: "Enslaved people rise up in Saint-Domingue." }
          ],
          correct: "D"
        },
        {
          id: "creoles",
          sol: "WHII.4.f",
          stem: "In sentence 3, creoles were —",
          choices: [
            { letter: "A", text: "officials sent from Spain to govern the colonies" },
            { letter: "B", text: "colonists of European descent born in America" },
            { letter: "C", text: "enslaved Africans on sugar plantations" },
            { letter: "D", text: "Native Americans who lived in the Andes" }
          ],
          correct: "B"
        },
        {
          id: "napoleon",
          sol: "WHII.4.g",
          stem: "According to the passage, why did 1808 give Spanish colonists an opening to revolt?",
          choices: [
            { letter: "A", text: "Napoleon's invasion weakened Spain's control." },
            { letter: "B", text: "Spain had freed all enslaved people in its colonies." },
            { letter: "C", text: "Britain had invaded and occupied Mexico." },
            { letter: "D", text: "The pope had declared the colonies free." }
          ],
          correct: "A"
        },
        {
          id: "haiti",
          sol: "WHII.4.f",
          stem: "Haiti's revolution was unusual among the independence movements because it —",
          choices: [
            { letter: "A", text: "was led by officials born in Spain" },
            { letter: "B", text: "ended with the return of French rule" },
            { letter: "C", text: "began as a revolt by enslaved people" },
            { letter: "D", text: "was led by Simón Bolívar of Venezuela" }
          ],
          correct: "C"
        },
        {
          id: "ideas",
          sol: "WHII.4.b",
          stem: "Bolívar and other leaders drew on ideas such as natural rights and government by consent. These ideas came mainly from —",
          choices: [
            { letter: "A", text: "the Enlightenment" },
            { letter: "B", text: "the Congress of Vienna" },
            { letter: "C", text: "absolute monarchy" },
            { letter: "D", text: "the Catholic Reformation" }
          ],
          correct: "A"
        },
        {
          id: "map",
          sol: "WHII.4.f",
          stem: "Based on sentence 7, which statement about Spain's empire is accurate?",
          choices: [
            { letter: "A", text: "By 1830 Spain had gained new colonies in South America." },
            { letter: "B", text: "Mexico remained a Spanish colony until 1900." },
            { letter: "C", text: "Only Argentina won independence before 1830." },
            { letter: "D", text: "By 1830 Spain had lost almost all its mainland colonies." }
          ],
          correct: "D"
        }
      ]
    },
    /* ---------- long ---------- */
    {
      id: "revo-louis-power",
      family: "REVO",
      title: "Absolutism and its critics",
      kind: "Age of Revolutions · WHII.4",
      blurb: "How Louis XIV governed, and two opposite views of royal power.",
      level: 3,
      passage: "<p>" + N(1) + "Louis XIV became king of France in 1643 at age four and ruled on his own from 1661 until his death in 1715. " + N(2) + "He built a strong central government, appointing officials called <strong>intendants</strong> who answered directly to him rather than to local nobles. " + N(3) + "His finance minister, Jean-Baptiste Colbert, followed mercantilist policies, building roads and canals and taxing foreign goods to increase France's wealth. " + N(4) + "In 1685 Louis revoked the Edict of Nantes, and many skilled Huguenots fled abroad. " + N(5) + "His long wars for territory made France the strongest power in Europe but left the treasury deeply in debt.</p><p>" + N(6) + "Two views of royal power from the same era are summarized below.</p><blockquote>The king's power comes from God. Kings are God's ministers on earth, and to rebel against the king is to rebel against God.</blockquote><p class=\"src\">— Jacques-Bénigne Bossuet, bishop and royal tutor, late 1600s (adapted)</p><blockquote>Government is formed by the consent of the people to protect their lives, liberties and estates. A ruler who abuses that trust may be resisted.</blockquote><p class=\"src\">— John Locke, Two Treatises of Government (adapted)</p>",
      claims: [
        {
          id: "intendants",
          sol: "WHII.4.d",
          stem: "In sentence 2, intendants were —",
          choices: [
            { letter: "A", text: "royal agents who enforced the king's orders" },
            { letter: "B", text: "nobles who ruled their lands on their own" },
            { letter: "C", text: "members elected to a national parliament" },
            { letter: "D", text: "Protestant ministers who led Huguenot churches" }
          ],
          correct: "A"
        },
        {
          id: "colbert",
          sol: "WHII.4.d",
          stem: "Colbert's policies in sentence 3 were designed mainly to —",
          choices: [
            { letter: "A", text: "lower taxes on goods from other countries" },
            { letter: "B", text: "build French industry and limit imports" },
            { letter: "C", text: "give land to peasants who had none" },
            { letter: "D", text: "end France's trade with its colonies" }
          ],
          correct: "B"
        },
        {
          id: "nantes",
          sol: "WHII.4.a",
          stem: "Which was an effect of revoking the Edict of Nantes in 1685?",
          choices: [
            { letter: "A", text: "France became a Protestant kingdom." },
            { letter: "B", text: "The Thirty Years' War broke out." },
            { letter: "C", text: "Many skilled Protestants left France." },
            { letter: "D", text: "The Estates-General met to protest." }
          ],
          correct: "C"
        },
        {
          id: "bossuet",
          sol: "WHII.4.d",
          stem: "Bossuet's view in the first excerpt supports —",
          choices: [
            { letter: "A", text: "the right of the people to resist a ruler" },
            { letter: "B", text: "a parliament that limits the king" },
            { letter: "C", text: "religious toleration for all faiths" },
            { letter: "D", text: "absolute rule by divine right" }
          ],
          correct: "D"
        },
        {
          id: "contrast",
          sol: "WHII.4.b",
          stem: "Which statement best describes the difference between the two excerpts?",
          choices: [
            { letter: "A", text: "Bossuet traces power to God; Locke, to the people." },
            { letter: "B", text: "Both argue that rebellion is always wrong." },
            { letter: "C", text: "Bossuet favors a parliament; Locke favors a king." },
            { letter: "D", text: "Both reject every form of monarchy." }
          ],
          correct: "A"
        },
        {
          id: "legacy",
          sol: "WHII.4.f",
          stem: "How did Louis XIV's reign help set the stage for the French Revolution of 1789?",
          choices: [
            { letter: "A", text: "He gave the Third Estate a majority of votes." },
            { letter: "B", text: "He created a constitutional monarchy in France." },
            { letter: "C", text: "His wars and spending left France heavily in debt." },
            { letter: "D", text: "He freed all French peasants from taxes." }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "revo-napoleon",
      family: "REVO",
      title: "The rise and fall of Napoleon",
      kind: "Age of Revolutions · WHII.4",
      blurb: "From a coup in 1799 to exile on Saint Helena.",
      level: 2,
      passage: "<p>" + N(1) + "Napoleon Bonaparte, an army officer from Corsica, rose to power in the disorder that followed the French Revolution. " + N(2) + "He seized control in 1799 and crowned himself emperor in 1804. " + N(3) + "His <strong>Napoleonic Code</strong> made male citizens equal before the law, protected property and ended privileges based on birth, though it limited the rights of women. " + N(4) + "His armies spread these reforms across Europe, but they also stirred <strong>nationalism</strong>, a strong pride in one's own nation, among the peoples he conquered. " + N(5) + "At its height, his power stretched from Spain to the borders of Russia.</p><ul><li><strong>1799</strong> Napoleon takes power in a coup</li><li><strong>1803</strong> France sells the Louisiana Territory to the United States</li><li><strong>1804</strong> Napoleon crowns himself emperor</li><li><strong>1806</strong> He ends the Holy Roman Empire and blocks British trade with the Continental System</li><li><strong>1812</strong> His invasion of Russia ends in disaster as most of his army is lost</li><li><strong>1814</strong> He is defeated and exiled to the island of Elba</li><li><strong>1815</strong> He returns, is defeated at Waterloo and is exiled to Saint Helena</li></ul>",
      claims: [
        {
          id: "rise",
          sol: "WHII.4.f",
          stem: "According to sentence 1, Napoleon's rise to power was made possible by —",
          choices: [
            { letter: "A", text: "his victory at Waterloo" },
            { letter: "B", text: "a vote taken at the Congress of Vienna in 1815" },
            { letter: "C", text: "the disorder after the French Revolution" },
            { letter: "D", text: "the support of the Hapsburg emperor" }
          ],
          correct: "C"
        },
        {
          id: "nationalism",
          sol: "WHII.4.g",
          stem: "In sentence 4, nationalism most nearly means —",
          choices: [
            { letter: "A", text: "loyalty to a single empire ruled by France" },
            { letter: "B", text: "strong pride in and loyalty to one's nation" },
            { letter: "C", text: "the belief that kings rule by divine right" },
            { letter: "D", text: "a plan to share land among peasants" }
          ],
          correct: "B"
        },
        {
          id: "code",
          sol: "WHII.4.b",
          stem: "The Napoleonic Code's equality before the law and end of privileges of birth reflected the ideas of —",
          choices: [
            { letter: "A", text: "the divine right of kings to rule" },
            { letter: "B", text: "the conservative Congress of Vienna" },
            { letter: "C", text: "the Catholic Reformation's councils" },
            { letter: "D", text: "the Enlightenment and the Revolution" }
          ],
          correct: "D"
        },
        {
          id: "backfire",
          sol: "WHII.4.g",
          stem: "Why did the nationalism stirred by Napoleon's conquests help lead to his defeat?",
          choices: [
            { letter: "A", text: "Conquered peoples rose up and allied against France." },
            { letter: "B", text: "It made the French army refuse to fight." },
            { letter: "C", text: "It persuaded Britain to join the Continental System." },
            { letter: "D", text: "It caused Russia to become a loyal French ally." }
          ],
          correct: "A"
        },
        {
          id: "exile",
          sol: "WHII.4.g",
          stem: "According to the timeline, which event came just before Napoleon's first exile?",
          choices: [
            { letter: "A", text: "his crowning as emperor" },
            { letter: "B", text: "the start of the Continental System" },
            { letter: "C", text: "the invasion of Russia" },
            { letter: "D", text: "the sale of Louisiana" }
          ],
          correct: "C"
        },
        {
          id: "assess",
          sol: "WHII.4.g",
          stem: "Which statement best assesses Napoleon's effect on political power in Europe?",
          choices: [
            { letter: "A", text: "He left Europe's borders just as he found them." },
            { letter: "B", text: "He toppled old rulers and redrew the map of Europe." },
            { letter: "C", text: "He made Britain the master of continental Europe." },
            { letter: "D", text: "He united Italy and Germany into single nations." }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "revo-congress-vienna",
      family: "REVO",
      title: "The Congress of Vienna",
      kind: "Age of Revolutions · WHII.4",
      blurb: "Metternich and the great powers rebuild Europe after Napoleon.",
      level: 3,
      passage: "<p>" + N(1) + "After Napoleon's defeat, diplomats from Austria, Prussia, Russia, Great Britain and France met at the <strong>Congress of Vienna</strong> from 1814 to 1815. " + N(2) + "The host, the Austrian minister Prince Klemens von Metternich, was a conservative who feared revolution. " + N(3) + "The delegates had three main goals. " + N(4) + "First, they wanted to contain France so it could never again overrun Europe. " + N(5) + "Second, they restored <strong>legitimate</strong> rulers, the royal families who had governed before the revolution, such as the Bourbons in France. " + N(6) + "Third, they sought a <strong>balance of power</strong> so that no single country could dominate the continent.</p><p>" + N(7) + "On a map of 1815, France is ringed by stronger neighbors: an enlarged Kingdom of the Netherlands to the north, Prussian lands along the Rhine to the east, and a strengthened Kingdom of Sardinia to the southeast. " + N(8) + "The old Holy Roman Empire is replaced by a loose German Confederation of 39 states.</p><p>" + N(9) + "The settlement kept the peace among the great powers for decades. " + N(10) + "Yet the ideas of liberty and nationalism spread by the revolution did not disappear, and revolts broke out across Europe in 1830 and 1848.</p>",
      claims: [
        {
          id: "legit",
          sol: "WHII.4.g",
          stem: "In sentence 5, legitimate rulers were —",
          choices: [
            { letter: "A", text: "leaders elected by the people after 1789" },
            { letter: "B", text: "royal families who reigned before 1789" },
            { letter: "C", text: "generals who had served under Napoleon" },
            { letter: "D", text: "officials appointed by the Congress" }
          ],
          correct: "B"
        },
        {
          id: "ring",
          sol: "WHII.4.g",
          stem: "Based on sentence 7, the Congress strengthened France's neighbors mainly to —",
          choices: [
            { letter: "A", text: "block any future French expansion" },
            { letter: "B", text: "reward them for adopting Napoleon's laws" },
            { letter: "C", text: "create a single German nation" },
            { letter: "D", text: "help France recover its colonies" }
          ],
          correct: "A"
        },
        {
          id: "fear",
          sol: "WHII.4.f",
          stem: "Why did Metternich and other conservatives fear the ideas spread by the French Revolution?",
          choices: [
            { letter: "A", text: "They thought the ideas would bankrupt France." },
            { letter: "B", text: "The ideas called for restoring the Holy Roman Empire." },
            { letter: "C", text: "The ideas favored Britain's navy over Europe's armies." },
            { letter: "D", text: "Liberty and nationalism threatened their monarchies." }
          ],
          correct: "D"
        },
        {
          id: "final",
          sol: "WHII.4.g",
          stem: "Which conclusion is best supported by the final paragraph?",
          choices: [
            { letter: "A", text: "The Congress wiped out revolutionary ideas in Europe." },
            { letter: "B", text: "The Congress led directly to a world war in 1830." },
            { letter: "C", text: "The peace held, but revolutionary ideas survived." },
            { letter: "D", text: "Nationalism faded away soon after 1815." }
          ],
          correct: "C"
        },
        {
          id: "host",
          sol: "WHII.4.d",
          stem: "The Congress met in the capital of the Hapsburg lands that Charles V had passed to his brother Ferdinand. Which state was this?",
          choices: [
            { letter: "A", text: "Austria" },
            { letter: "B", text: "Spain" },
            { letter: "C", text: "Prussia" },
            { letter: "D", text: "Russia" }
          ],
          correct: "A"
        },
        {
          id: "westphalia",
          sol: "WHII.4.a",
          stem: "Which earlier settlement, like the Congress of Vienna, redrew the map of Europe after a long war and recognized new states?",
          choices: [
            { letter: "A", text: "the Edict of Nantes (1598)" },
            { letter: "B", text: "the Petition of Right (1628)" },
            { letter: "C", text: "the Peace of Augsburg (1555)" },
            { letter: "D", text: "the Peace of Westphalia (1648)" }
          ],
          correct: "D"
        }
      ]
    }
  ];

  for (var i = 0; i < PACKS.length; i++) P.push(PACKS[i]);
})(typeof window !== "undefined" ? window : global);
