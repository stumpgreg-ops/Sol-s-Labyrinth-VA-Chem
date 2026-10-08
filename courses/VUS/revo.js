/* SOL Lab — Virginia & United States History · Revolution & the Constitution (VUS.5–VUS.6). Original text only. */
(function (global) {
  var P = global.HEIST_PACKS;
  if (!P || !P.push) return;
  var N = function (i) { return '<span class="n">(' + i + ')</span> '; };   // numbered sentence

  var PACKS = [
    /* ---------- tiny ---------- */
    {
      id: "revo-treaty-1763",
      family: "REVO",
      title: "Victory, debt and a line on the map",
      kind: "Revolution & the Constitution · VUS.5",
      blurb: "How winning the French and Indian War set Britain and its colonies on a collision course.",
      level: 1,
      passage: "<p>" + N(1) + "The French and Indian War (1754–1763) ended with the <strong>Treaty of Paris of 1763</strong>. " + N(2) + "France gave up nearly all its land in North America: Canada and the lands east of the Mississippi went to Britain, and Louisiana went to Spain. " + N(3) + "Britain was left in debt. " + N(4) + "To avoid wars with Indigenous nations, King George III issued the <strong>Proclamation of 1763</strong>, banning settlement west of the Appalachian Mountains.</p>",
      claims: [
        {
          id: "france",
          sol: "VUS.5.a",
          stem: "Which was a result of the Treaty of Paris of 1763?",
          choices: [
            { letter: "A", text: "France won permanent control of the Ohio Valley." },
            { letter: "B", text: "Spain lost all of its colonies in the Americas." },
            { letter: "C", text: "France lost nearly all its North American lands." },
            { letter: "D", text: "The thirteen colonies became independent of Britain." }
          ],
          correct: "C"
        },
        {
          id: "resent",
          sol: "VUS.5.a",
          stem: "Colonists resented the Proclamation of 1763 mainly because it —",
          choices: [
            { letter: "A", text: "blocked settlement on western lands" },
            { letter: "B", text: "raised the tax on imported tea" },
            { letter: "C", text: "closed the port of Boston" },
            { letter: "D", text: "forced them to house British troops" }
          ],
          correct: "A"
        },
        {
          id: "debt",
          sol: "VUS.5.b",
          stem: "Britain's war debt most directly led Parliament to —",
          choices: [
            { letter: "A", text: "free the colonies from paying any trade duties at all" },
            { letter: "B", text: "tax the colonies to help pay for their defense" },
            { letter: "C", text: "give Canada back to France in exchange for money" },
            { letter: "D", text: "abolish every colonial assembly in North America" }
          ],
          correct: "B"
        },
        {
          id: "line",
          sol: "VUS.5.a",
          stem: "The boundary set by the Proclamation of 1763 followed which geographic feature?",
          choices: [
            { letter: "A", text: "the Mississippi River valley" },
            { letter: "B", text: "the Atlantic coast" },
            { letter: "C", text: "the Great Lakes" },
            { letter: "D", text: "the Appalachian Mountains" }
          ],
          correct: "D"
        },
        {
          id: "washington",
          sol: "VUS.5.g",
          stem: "Which future president served as a young Virginia militia officer in the French and Indian War?",
          choices: [
            { letter: "A", text: "John Adams" },
            { letter: "B", text: "George Washington" },
            { letter: "C", text: "Thomas Jefferson" },
            { letter: "D", text: "John Quincy Adams" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "revo-marbury",
      family: "REVO",
      title: "Marbury v. Madison",
      kind: "Revolution & the Constitution · VUS.6",
      blurb: "A missing commission and the power to say what the law is.",
      level: 2,
      passage: "<p>" + N(1) + "William Marbury asked the Supreme Court to order Secretary of State James Madison to deliver his commission as a justice of the peace. " + N(2) + "In 1803, Chief Justice John Marshall ruled that the law giving the Court this power violated the Constitution and was void.</p><blockquote>It is emphatically the province and duty of the judicial department to say what the law is.</blockquote><p class=\"src\">— Marbury v. Madison, 1803</p>",
      claims: [
        {
          id: "review",
          sol: "VUS.6.f",
          stem: "Marbury v. Madison established the principle of —",
          choices: [
            { letter: "A", text: "federalism" },
            { letter: "B", text: "popular sovereignty" },
            { letter: "C", text: "judicial review" },
            { letter: "D", text: "states' rights" }
          ],
          correct: "C"
        },
        {
          id: "quote",
          sol: "VUS.6.f",
          stem: "In the quotation, Marshall argues that the courts have the duty to —",
          choices: [
            { letter: "A", text: "make new laws when Congress fails to act" },
            { letter: "B", text: "decide what the law means in a case" },
            { letter: "C", text: "enforce the laws passed by Congress" },
            { letter: "D", text: "appoint judges to the lower courts" }
          ],
          correct: "B"
        },
        {
          id: "branch",
          sol: "VUS.6.d",
          stem: "Which branch of government gained the most power from this decision?",
          choices: [
            { letter: "A", text: "the judicial branch" },
            { letter: "B", text: "the legislative branch" },
            { letter: "C", text: "the executive branch" },
            { letter: "D", text: "the state legislatures" }
          ],
          correct: "A"
        },
        {
          id: "madison",
          sol: "VUS.5.g",
          stem: "James Madison, the Secretary of State named in the case, later became —",
          choices: [
            { letter: "A", text: "Chief Justice of the United States Supreme Court" },
            { letter: "B", text: "the first Secretary of the Treasury" },
            { letter: "C", text: "the nation's first vice president" },
            { letter: "D", text: "the fourth president of the United States" }
          ],
          correct: "D"
        },
        {
          id: "marshall",
          sol: "VUS.6.f",
          stem: "John Marshall, a Virginian, is significant mainly because as Chief Justice he —",
          choices: [
            { letter: "A", text: "wrote the Virginia Declaration of Rights in 1776" },
            { letter: "B", text: "strengthened the Court and the federal government" },
            { letter: "C", text: "led the opposition to the Constitution in Virginia" },
            { letter: "D", text: "commanded the army at Yorktown" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "revo-henry-1775",
      family: "REVO",
      title: "Liberty or death",
      kind: "Revolution & the Constitution · VUS.5",
      blurb: "Patrick Henry speaks to the Virginia Convention at St. John's Church.",
      level: 1,
      passage: "<p>" + N(1) + "In March 1775, Patrick Henry urged the Second Virginia Convention, meeting at St. John's Church in Richmond, to arm the militia.</p><blockquote>Is life so dear, or peace so sweet, as to be purchased at the price of chains and slavery? ... I know not what course others may take; but as for me, give me liberty or give me death!</blockquote><p class=\"src\">— Patrick Henry, 1775 (as reconstructed by William Wirt, 1817)</p>",
      claims: [
        {
          id: "purpose",
          sol: "VUS.5.b",
          stem: "The main purpose of Henry's speech was to —",
          choices: [
            { letter: "A", text: "ask the king to repeal the Stamp Act and Townshend duties" },
            { letter: "B", text: "persuade Virginians to arm for resistance" },
            { letter: "C", text: "praise Britain's victory in the Treaty of Paris" },
            { letter: "D", text: "call for a new constitution for the state" }
          ],
          correct: "B"
        },
        {
          id: "chains",
          sol: "VUS.5.b",
          stem: "In the speech, the phrase chains and slavery refers to —",
          choices: [
            { letter: "A", text: "the transatlantic trade in enslaved Africans" },
            { letter: "B", text: "the debts planters owed to British merchants" },
            { letter: "C", text: "submission to British rule without rights" },
            { letter: "D", text: "the punishment of captured soldiers" }
          ],
          correct: "C"
        },
        {
          id: "source",
          sol: "VUS.5.b",
          stem: "Why should a historian use the exact words of this speech with some care?",
          choices: [
            { letter: "A", text: "The speech was delivered entirely in French." },
            { letter: "B", text: "A biographer wrote it down decades later." },
            { letter: "C", text: "Henry was not actually present at the convention." },
            { letter: "D", text: "The delegates voted to burn every copy of it." }
          ],
          correct: "B"
        },
        {
          id: "committees",
          sol: "VUS.5.c",
          stem: "Like Henry's speech, the Committees of Correspondence helped the Patriot cause by —",
          choices: [
            { letter: "A", text: "spreading news and ideas of resistance" },
            { letter: "B", text: "negotiating the French alliance" },
            { letter: "C", text: "raising money for the British army" },
            { letter: "D", text: "drafting the Articles of Confederation" }
          ],
          correct: "A"
        },
        {
          id: "next",
          sol: "VUS.5.b",
          stem: "Which event took place about a month after Henry's speech?",
          choices: [
            { letter: "A", text: "the meeting of the Stamp Act Congress" },
            { letter: "B", text: "the dumping of tea in Boston Harbor" },
            { letter: "C", text: "the British surrender at Yorktown" },
            { letter: "D", text: "the Battles of Lexington and Concord" }
          ],
          correct: "D"
        }
      ]
    },
    /* ---------- short ---------- */
    {
      id: "revo-road-timeline",
      family: "REVO",
      title: "The road to Lexington",
      kind: "Revolution & the Constitution · VUS.5",
      blurb: "Ten years of taxes, protests and punishments on one timeline.",
      level: 1,
      passage: "<p>" + N(1) + "After 1763, Parliament passed a series of laws to tax and control the colonies.</p><ul><li><strong>1765</strong> The Stamp Act taxes newspapers, legal papers and other printed goods; colonists protest <strong>no taxation without representation</strong>.</li><li><strong>1767</strong> The Townshend Acts tax glass, paper, paint and tea.</li><li><strong>1770</strong> British soldiers fire on a crowd in the Boston Massacre.</li><li><strong>1773</strong> The Sons of Liberty dump British tea into Boston Harbor.</li><li><strong>1774</strong> The Coercive (Intolerable) Acts close Boston's port; the First Continental Congress meets.</li><li><strong>1775</strong> Fighting breaks out at Lexington and Concord, then at Bunker Hill.</li></ul>",
      claims: [
        {
          id: "slogan",
          sol: "VUS.5.b",
          stem: "Colonists who protested no taxation without representation argued that —",
          choices: [
            { letter: "A", text: "Parliament should pay off all of the colonies' debts" },
            { letter: "B", text: "only their own elected assemblies could tax them" },
            { letter: "C", text: "the king should choose colonial governors" },
            { letter: "D", text: "all taxes should be paid in tobacco" }
          ],
          correct: "B"
        },
        {
          id: "first",
          sol: "VUS.5.b",
          stem: "Which of these events happened FIRST?",
          choices: [
            { letter: "A", text: "the Boston Massacre" },
            { letter: "B", text: "the Boston Tea Party" },
            { letter: "C", text: "the Coercive Acts" },
            { letter: "D", text: "the Battle of Bunker Hill" }
          ],
          correct: "A"
        },
        {
          id: "coercive",
          sol: "VUS.5.b",
          stem: "The Coercive Acts were mainly Parliament's response to —",
          choices: [
            { letter: "A", text: "the Battle of Bunker Hill" },
            { letter: "B", text: "the French and Indian War" },
            { letter: "C", text: "the Boston Tea Party" },
            { letter: "D", text: "the Olive Branch Petition" }
          ],
          correct: "C"
        },
        {
          id: "congress",
          sol: "VUS.5.c",
          stem: "The First Continental Congress met in 1774 mainly to —",
          choices: [
            { letter: "A", text: "declare independence from Britain" },
            { letter: "B", text: "write the Articles of Confederation" },
            { letter: "C", text: "choose George Washington as the first president" },
            { letter: "D", text: "plan a united response, including a boycott" }
          ],
          correct: "D"
        },
        {
          id: "trend",
          sol: "VUS.5.b",
          stem: "Which conclusion is best supported by the timeline?",
          choices: [
            { letter: "A", text: "Conflict between Britain and the colonies grew worse." },
            { letter: "B", text: "Parliament quickly repealed every tax that it passed." },
            { letter: "C", text: "The colonies generally accepted Parliament's new taxes." },
            { letter: "D", text: "Fighting began before Parliament passed any new tax." }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "revo-declaration",
      family: "REVO",
      title: "We hold these truths",
      kind: "Revolution & the Constitution · VUS.5",
      blurb: "A Virginian's resolution, a committee of five and a famous sentence.",
      level: 2,
      passage: "<p>" + N(1) + "On June 7, 1776, Richard Henry Lee of Virginia proposed that the colonies declare independence. " + N(2) + "Congress named a committee that included Thomas Jefferson, John Adams and Benjamin Franklin, and Jefferson wrote the first draft. " + N(3) + "Congress adopted the Declaration of Independence on July 4.</p><blockquote>We hold these truths to be self-evident, that all men are created equal, that they are endowed by their Creator with certain <strong>unalienable</strong> Rights, that among these are Life, Liberty and the pursuit of Happiness. — That to secure these rights, Governments are instituted among Men, deriving their just powers from the consent of the governed...</blockquote><p class=\"src\">— Declaration of Independence, 1776</p>",
      claims: [
        {
          id: "author",
          sol: "VUS.5.d",
          stem: "Who was the principal author of the Declaration of Independence?",
          choices: [
            { letter: "A", text: "John Adams" },
            { letter: "B", text: "Benjamin Franklin" },
            { letter: "C", text: "Richard Henry Lee" },
            { letter: "D", text: "Thomas Jefferson" }
          ],
          correct: "D"
        },
        {
          id: "unalienable",
          sol: "VUS.5.f",
          stem: "In the excerpt, the word unalienable most nearly means —",
          choices: [
            { letter: "A", text: "granted by the king" },
            { letter: "B", text: "unable to be taken away" },
            { letter: "C", text: "limited to property owners" },
            { letter: "D", text: "decided by a vote" }
          ],
          correct: "B"
        },
        {
          id: "consent",
          sol: "VUS.5.f",
          stem: "According to the excerpt, governments get their just powers from —",
          choices: [
            { letter: "A", text: "the consent of the governed" },
            { letter: "B", text: "the will of the king and Parliament" },
            { letter: "C", text: "the wealthiest citizens" },
            { letter: "D", text: "the Church of England" }
          ],
          correct: "A"
        },
        {
          id: "legacy",
          sol: "VUS.5.d",
          stem: "Which later document most clearly borrowed the Declaration's language of equality?",
          choices: [
            { letter: "A", text: "the Proclamation of 1763" },
            { letter: "B", text: "the Articles of Confederation of 1781" },
            { letter: "C", text: "the Seneca Falls Declaration of Sentiments" },
            { letter: "D", text: "the Treaty of Paris that ended the war in 1783" }
          ],
          correct: "C"
        },
        {
          id: "adams",
          sol: "VUS.5.d",
          stem: "John Adams and Benjamin Franklin contributed to the Declaration mainly by —",
          choices: [
            { letter: "A", text: "refusing to sign it" },
            { letter: "B", text: "serving on the committee that drafted it" },
            { letter: "C", text: "carrying it across the ocean to King George III" },
            { letter: "D", text: "printing it in Common Sense" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "revo-common-sense",
      family: "REVO",
      title: "An olive branch and Common Sense",
      kind: "Revolution & the Constitution · VUS.5",
      blurb: "A last appeal for peace is rejected, and a pamphlet makes the case for independence.",
      level: 2,
      passage: "<p>" + N(1) + "In July 1775, the Second Continental Congress sent King George III the <strong>Olive Branch Petition</strong>, a final appeal for peace that asked the king to protect the colonists' rights. " + N(2) + "The king refused to receive it and proclaimed the colonies to be in rebellion. " + N(3) + "In January 1776, Thomas Paine published Common Sense, a best-selling pamphlet written in plain language.</p><blockquote>There is something very absurd, in supposing a continent to be perpetually governed by an island.</blockquote><p class=\"src\">— Thomas Paine, Common Sense, 1776</p><p>" + N(4) + "Paine argued that monarchy itself was wrong and that America should become an independent republic.</p>",
      claims: [
        {
          id: "olive",
          sol: "VUS.5.b",
          stem: "The Olive Branch Petition was named for a traditional symbol of —",
          choices: [
            { letter: "A", text: "victory" },
            { letter: "B", text: "wealth" },
            { letter: "C", text: "peace" },
            { letter: "D", text: "faith" }
          ],
          correct: "C"
        },
        {
          id: "island",
          sol: "VUS.5.b",
          stem: "In the quotation, Paine uses geography to argue that —",
          choices: [
            { letter: "A", text: "a small, distant island should not rule a continent" },
            { letter: "B", text: "Britain should build more forts along the frontier" },
            { letter: "C", text: "the colonies should expand west past the mountains" },
            { letter: "D", text: "the colonies needed the British navy for protection" }
          ],
          correct: "A"
        },
        {
          id: "impact",
          sol: "VUS.5.b",
          stem: "Common Sense was important mainly because it —",
          choices: [
            { letter: "A", text: "ended the war with Britain within a year" },
            { letter: "B", text: "persuaded many colonists to favor independence" },
            { letter: "C", text: "created the Continental Army" },
            { letter: "D", text: "was signed by every royal governor in the colonies" }
          ],
          correct: "B"
        },
        {
          id: "army",
          sol: "VUS.5.c",
          stem: "In 1775, the Second Continental Congress also —",
          choices: [
            { letter: "A", text: "ratified the Constitution of the United States" },
            { letter: "B", text: "repealed the Stamp Act" },
            { letter: "C", text: "signed an alliance with Spain" },
            { letter: "D", text: "formed the Continental Army under Washington" }
          ],
          correct: "D"
        },
        {
          id: "order",
          sol: "VUS.5.b",
          stem: "Which list shows these events in the correct order?",
          choices: [
            { letter: "A", text: "Common Sense; Olive Branch Petition; Declaration" },
            { letter: "B", text: "Declaration; Common Sense; Olive Branch Petition" },
            { letter: "C", text: "Olive Branch Petition; Common Sense; Declaration" },
            { letter: "D", text: "Olive Branch Petition; Declaration; Common Sense" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "revo-articles",
      family: "REVO",
      title: "The Articles of Confederation",
      kind: "Revolution & the Constitution · VUS.6",
      blurb: "What the first national government could and could not do.",
      level: 2,
      passage: "<p>" + N(1) + "The <strong>Articles of Confederation</strong>, the first national plan of government, took effect in 1781.</p><table><tr><th>Congress could</th><th>Congress could not</th></tr><tr><td>Make treaties and declare war</td><td>Collect taxes</td></tr><tr><td>Borrow and coin money</td><td>Regulate trade between the states</td></tr><tr><td>Organize western lands (Northwest Ordinance, 1787)</td><td>Enforce its laws; there was no executive and no national court</td></tr><tr><td>Pass major laws with 9 of 13 states</td><td>Amend the Articles without all 13 states</td></tr></table><p>" + N(2) + "In 1786 and 1787, <strong>Shays' Rebellion</strong> by indebted Massachusetts farmers showed how weak the national government was.</p>",
      claims: [
        {
          id: "strength",
          sol: "VUS.6.b",
          stem: "Which was a strength of the government under the Articles?",
          choices: [
            { letter: "A", text: "collecting taxes from every state" },
            { letter: "B", text: "passing the Northwest Ordinance" },
            { letter: "C", text: "enforcing laws through a national court" },
            { letter: "D", text: "regulating trade between the states" }
          ],
          correct: "B"
        },
        {
          id: "debts",
          sol: "VUS.6.b",
          stem: "Which weakness made it hardest for Congress to pay the nation's debts?",
          choices: [
            { letter: "A", text: "It could not regulate trade." },
            { letter: "B", text: "It needed all 13 states to amend." },
            { letter: "C", text: "It had no power to collect taxes." },
            { letter: "D", text: "It had no national court system." }
          ],
          correct: "C"
        },
        {
          id: "why",
          sol: "VUS.6.b",
          stem: "The authors of the Articles created a weak central government mainly because they —",
          choices: [
            { letter: "A", text: "feared a strong central government like Britain's" },
            { letter: "B", text: "wanted the states to be ruled directly by Congress" },
            { letter: "C", text: "planned to rejoin the British Empire after the war" },
            { letter: "D", text: "were ordered to by their French allies" }
          ],
          correct: "A"
        },
        {
          id: "shays",
          sol: "VUS.6.c",
          stem: "Shays' Rebellion most directly helped convince leaders to —",
          choices: [
            { letter: "A", text: "declare war on Britain for a second time" },
            { letter: "B", text: "abolish all of the state governments at once" },
            { letter: "C", text: "give the Northwest Territory back to Britain" },
            { letter: "D", text: "support a convention to revise the Articles" }
          ],
          correct: "D"
        },
        {
          id: "amend",
          sol: "VUS.6.b",
          stem: "The rule that all 13 states had to agree to an amendment meant that —",
          choices: [
            { letter: "A", text: "changing the Articles was nearly impossible" },
            { letter: "B", text: "small states had no voice at all in Congress" },
            { letter: "C", text: "the president could veto amendments" },
            { letter: "D", text: "amendments passed easily and often" }
          ],
          correct: "A"
        }
      ]
    },
    /* ---------- medium ---------- */
    {
      id: "revo-mobilizing",
      family: "REVO",
      title: "Organizing a revolution",
      kind: "Revolution & the Constitution · VUS.5",
      blurb: "Sons of Liberty, letter-writing committees, Congresses and Minutemen.",
      level: 2,
      passage: "<p>" + N(1) + "Colonial resistance grew because people organized it. " + N(2) + "The <strong>Sons of Liberty</strong>, led in Boston by Samuel Adams, protested the Stamp Act and later dumped British tea into Boston Harbor. " + N(3) + "<strong>Committees of Correspondence</strong> wrote letters to share news of British actions; in 1773, Virginia's House of Burgesses called for committees linking all the colonies. " + N(4) + "In 1774, delegates from twelve colonies met in Philadelphia as the First Continental Congress and agreed to boycott British goods. " + N(5) + "Massachusetts towns trained <strong>Minutemen</strong>, militia ready to fight at a minute's notice. " + N(6) + "In April 1775, British troops marching to seize weapons at Concord met Minutemen at Lexington, and the war began. " + N(7) + "The Second Continental Congress, meeting in May 1775, created the Continental Army and chose George Washington of Virginia as its commander.</p>",
      claims: [
        {
          id: "committees",
          sol: "VUS.5.c",
          stem: "The main purpose of the Committees of Correspondence was to —",
          choices: [
            { letter: "A", text: "collect taxes for Parliament" },
            { letter: "B", text: "share news and coordinate resistance" },
            { letter: "C", text: "train soldiers for the Continental Army" },
            { letter: "D", text: "write a new state constitution" }
          ],
          correct: "B"
        },
        {
          id: "minutemen",
          sol: "VUS.5.c",
          stem: "In sentence 5, Minutemen were —",
          choices: [
            { letter: "A", text: "British officers stationed in Boston" },
            { letter: "B", text: "delegates to the Continental Congress" },
            { letter: "C", text: "militia members ready on short notice" },
            { letter: "D", text: "merchants who refused to boycott" }
          ],
          correct: "C"
        },
        {
          id: "sons",
          sol: "VUS.5.c",
          stem: "Which group protested the Stamp Act and carried out the Boston Tea Party?",
          choices: [
            { letter: "A", text: "the Sons of Liberty" },
            { letter: "B", text: "the Minutemen of Concord" },
            { letter: "C", text: "the Continental Army" },
            { letter: "D", text: "the House of Burgesses" }
          ],
          correct: "A"
        },
        {
          id: "lexington",
          sol: "VUS.5.b",
          stem: "According to sentence 6, fighting began at Lexington when —",
          choices: [
            { letter: "A", text: "Congress voted to declare independence" },
            { letter: "B", text: "the Minutemen attacked the British in Boston" },
            { letter: "C", text: "France sent soldiers to help the colonists" },
            { letter: "D", text: "British troops marched to seize weapons" }
          ],
          correct: "D"
        },
        {
          id: "washington",
          sol: "VUS.5.g",
          stem: "Which fact best explains why Congress chose George Washington to command the army?",
          choices: [
            { letter: "A", text: "He had written the pamphlet Common Sense." },
            { letter: "B", text: "He had served as a British general in Europe." },
            { letter: "C", text: "He had fought in the French and Indian War." },
            { letter: "D", text: "He was then the governor of Massachusetts." }
          ],
          correct: "C"
        },
        {
          id: "networks",
          sol: "VUS.5.c",
          stem: "Which conclusion is best supported by the passage?",
          choices: [
            { letter: "A", text: "Organized groups turned local protests into a united cause." },
            { letter: "B", text: "Resistance was limited to the city of Boston until 1776." },
            { letter: "C", text: "Virginia stayed out of the protests until independence was declared." },
            { letter: "D", text: "The colonies acted alone without coordination." }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "revo-victory",
      family: "REVO",
      title: "From Trenton to Yorktown",
      kind: "Revolution & the Constitution · VUS.5",
      blurb: "A turning point, foreign allies and a surrender in Virginia.",
      level: 2,
      passage: "<ul><li><strong>1776</strong> Washington crosses the Delaware River and wins at Trenton; a young officer, James Monroe, is wounded there.</li><li><strong>1777</strong> Americans defeat a British army at <strong>Saratoga</strong>, New York.</li><li><strong>1778</strong> France signs an alliance with the United States.</li><li><strong>1779</strong> Spain enters the war against Britain.</li><li><strong>1781</strong> American and French troops trap General Cornwallis at <strong>Yorktown</strong>, Virginia, while a French fleet blocks the Chesapeake Bay; Cornwallis surrenders.</li><li><strong>1783</strong> In the Treaty of Paris, Britain recognizes American independence.</li></ul><p>" + N(1) + "Besides foreign help, the Americans benefited from fighting on home ground, from Washington's leadership, and from Britain's difficulty supplying an army 3,000 miles from home. " + N(2) + "The Marquis de Lafayette, a young French volunteer, served as one of Washington's generals.</p>",
      claims: [
        {
          id: "saratoga",
          sol: "VUS.5.e",
          stem: "Saratoga is called a turning point of the war mainly because it —",
          choices: [
            { letter: "A", text: "ended all of the fighting in the northern states" },
            { letter: "B", text: "convinced France to become an American ally" },
            { letter: "C", text: "was the last battle of the war" },
            { letter: "D", text: "forced Spain to leave Florida" }
          ],
          correct: "B"
        },
        {
          id: "yorktown",
          sol: "VUS.5.e",
          stem: "Why was Cornwallis forced to surrender at Yorktown?",
          choices: [
            { letter: "A", text: "Allied troops trapped him on land as French ships blocked the bay." },
            { letter: "B", text: "His army had run out of food and supplies after the Battle of Saratoga." },
            { letter: "C", text: "Spain attacked his forces from Florida." },
            { letter: "D", text: "Parliament ordered him to end the war." }
          ],
          correct: "A"
        },
        {
          id: "factor",
          sol: "VUS.5.e",
          stem: "Which factor besides foreign aid helped the Americans win?",
          choices: [
            { letter: "A", text: "The colonists had a much larger navy than Britain." },
            { letter: "B", text: "Britain had no professional army." },
            { letter: "C", text: "Most colonists were Loyalists." },
            { letter: "D", text: "Britain struggled to supply troops so far away." }
          ],
          correct: "D"
        },
        {
          id: "monroe",
          sol: "VUS.5.g",
          stem: "Which future president was wounded at the Battle of Trenton?",
          choices: [
            { letter: "A", text: "John Adams" },
            { letter: "B", text: "Thomas Jefferson" },
            { letter: "C", text: "James Monroe" },
            { letter: "D", text: "James Madison" }
          ],
          correct: "C"
        },
        {
          id: "declared",
          sol: "VUS.5.d",
          stem: "Britain's recognition of independence in 1783 confirmed the claim first made in which document?",
          choices: [
            { letter: "A", text: "the Olive Branch Petition" },
            { letter: "B", text: "the Articles of Confederation" },
            { letter: "C", text: "the Declaration of Independence" },
            { letter: "D", text: "the Proclamation of 1763 on settlement" }
          ],
          correct: "C"
        },
        {
          id: "treaty",
          sol: "VUS.5.g",
          stem: "Which future president helped negotiate the Treaty of Paris of 1783?",
          choices: [
            { letter: "A", text: "James Monroe" },
            { letter: "B", text: "John Adams" },
            { letter: "C", text: "James Madison" },
            { letter: "D", text: "Andrew Jackson" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "revo-virginia-rights",
      family: "REVO",
      title: "Virginia's charters of liberty",
      kind: "Revolution & the Constitution · VUS.6",
      blurb: "George Mason's Declaration of Rights and Jefferson's statute on religious freedom.",
      level: 3,
      passage: "<p><strong>Source 1</strong></p><blockquote>That all men are by nature equally free and independent, and have certain <strong>inherent</strong> rights, of which, when they enter into a state of society, they cannot, by any compact, deprive or divest their posterity; namely, the enjoyment of life and liberty, with the means of acquiring and possessing property, and pursuing and obtaining happiness and safety.</blockquote><p class=\"src\">— Virginia Declaration of Rights, Section 1, by George Mason, June 1776</p><p><strong>Source 2</strong></p><blockquote>No person shall be forced to attend or pay for any church or ministry, or be punished for his religious opinions or beliefs; all people shall be free to profess their opinions in matters of religion.</blockquote><p class=\"src\">— Virginia Statute for Religious Freedom, by Thomas Jefferson, passed 1786 (adapted)</p><p>" + N(1) + "James Madison guided the statute through the General Assembly, and both documents later influenced the Bill of Rights.</p>",
      claims: [
        {
          id: "mason",
          sol: "VUS.6.a",
          stem: "Source 1 was written by —",
          choices: [
            { letter: "A", text: "Thomas Jefferson" },
            { letter: "B", text: "George Mason" },
            { letter: "C", text: "Patrick Henry" },
            { letter: "D", text: "Alexander Hamilton" }
          ],
          correct: "B"
        },
        {
          id: "both",
          sol: "VUS.5.f",
          stem: "Which idea in Source 1 also appears in the Declaration of Independence?",
          choices: [
            { letter: "A", text: "Only property owners have rights." },
            { letter: "B", text: "The king grants rights to his subjects." },
            { letter: "C", text: "People are born with rights such as life and liberty." },
            { letter: "D", text: "Each state should have an official church supported by taxes." }
          ],
          correct: "C"
        },
        {
          id: "firstam",
          sol: "VUS.6.a",
          stem: "Source 2 most directly influenced which part of the Bill of Rights?",
          choices: [
            { letter: "A", text: "the First Amendment's freedom of religion" },
            { letter: "B", text: "the Second Amendment's right to bear arms" },
            { letter: "C", text: "the Fifth Amendment's protection of due process" },
            { letter: "D", text: "the Tenth Amendment's reserved powers" }
          ],
          correct: "A"
        },
        {
          id: "inherent",
          sol: "VUS.6.a",
          stem: "In Source 1, the word inherent most nearly means —",
          choices: [
            { letter: "A", text: "granted by the government" },
            { letter: "B", text: "earned through hard work" },
            { letter: "C", text: "inherited from one's parents' land" },
            { letter: "D", text: "belonging to a person by nature" }
          ],
          correct: "D"
        },
        {
          id: "objection",
          sol: "VUS.6.c",
          stem: "George Mason refused to sign the Constitution in 1787 mainly because it —",
          choices: [
            { letter: "A", text: "gave the states too much power" },
            { letter: "B", text: "did not include a bill of rights" },
            { letter: "C", text: "created an executive that was too weak" },
            { letter: "D", text: "ended the slave trade at once" }
          ],
          correct: "B"
        },
        {
          id: "ended",
          sol: "VUS.6.a",
          stem: "Which practice in Virginia did Source 2 bring to an end?",
          choices: [
            { letter: "A", text: "the use of public taxes to support one church" },
            { letter: "B", text: "the election of members to the General Assembly" },
            { letter: "C", text: "the freedom to print newspapers" },
            { letter: "D", text: "the trial of accused persons by jury" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "revo-compromises",
      family: "REVO",
      title: "The great compromises of 1787",
      kind: "Revolution & the Constitution · VUS.6",
      blurb: "Large states, small states and the bargains that made the Constitution.",
      level: 2,
      passage: "<p>" + N(1) + "At the Constitutional Convention of 1787 in Philadelphia, delegates disagreed over representation and slavery.</p><table><tr><th>Plan or compromise</th><th>Key idea</th></tr><tr><td>Virginia Plan (James Madison)</td><td>Two-house legislature; representation based on population</td></tr><tr><td>New Jersey Plan</td><td>One house; each state has an equal vote</td></tr><tr><td><strong>Great Compromise</strong></td><td>House of Representatives based on population; Senate with two members from each state</td></tr><tr><td>Three-Fifths Compromise</td><td>Three of every five enslaved people counted for representation and direct taxes</td></tr><tr><td>Slave trade compromise</td><td>Congress could not ban the importation of enslaved people before 1808</td></tr></table><p>" + N(2) + "George Washington presided over the convention, and Madison's ideas and careful notes later earned him the title Father of the Constitution. " + N(3) + "Delegates also created the <strong>Electoral College</strong> to choose the president, a compromise between election by Congress and by the people.</p>",
      claims: [
        {
          id: "large",
          sol: "VUS.6.c",
          stem: "Which states most favored the Virginia Plan?",
          choices: [
            { letter: "A", text: "states with small populations" },
            { letter: "B", text: "states with large populations" },
            { letter: "C", text: "states with no western lands" },
            { letter: "D", text: "states that had banned slavery" }
          ],
          correct: "B"
        },
        {
          id: "great",
          sol: "VUS.6.c",
          stem: "The Great Compromise settled the dispute over representation by —",
          choices: [
            { letter: "A", text: "giving every state one vote in a single house" },
            { letter: "B", text: "letting the president choose all of the members of Congress" },
            { letter: "C", text: "basing one house on population and making the other equal" },
            { letter: "D", text: "basing both houses on each state's wealth" }
          ],
          correct: "C"
        },
        {
          id: "threefifths",
          sol: "VUS.6.c",
          stem: "The Three-Fifths Compromise was needed mainly because delegates disagreed over —",
          choices: [
            { letter: "A", text: "counting enslaved people for representation" },
            { letter: "B", text: "how many years a president should serve in office" },
            { letter: "C", text: "where to build the new national capital city" },
            { letter: "D", text: "whether to keep the Articles of Confederation" }
          ],
          correct: "A"
        },
        {
          id: "washington",
          sol: "VUS.5.g",
          stem: "Who presided over the Constitutional Convention?",
          choices: [
            { letter: "A", text: "Benjamin Franklin" },
            { letter: "B", text: "John Adams" },
            { letter: "C", text: "Thomas Jefferson" },
            { letter: "D", text: "George Washington" }
          ],
          correct: "D"
        },
        {
          id: "senate",
          sol: "VUS.6.d",
          stem: "Under the Great Compromise, which body gives each state equal representation?",
          choices: [
            { letter: "A", text: "the House of Representatives" },
            { letter: "B", text: "the Senate" },
            { letter: "C", text: "the Supreme Court" },
            { letter: "D", text: "the Electoral College" }
          ],
          correct: "B"
        },
        {
          id: "notes",
          sol: "VUS.6.c",
          stem: "Madison's notes on the convention are valuable to historians mainly because they —",
          choices: [
            { letter: "A", text: "were approved and signed by every delegate present" },
            { letter: "B", text: "replaced the official Constitution" },
            { letter: "C", text: "give a detailed firsthand record of the debates" },
            { letter: "D", text: "were published the same week" }
          ],
          correct: "C"
        }
      ]
    },
    /* ---------- long ---------- */
    {
      id: "revo-ratification",
      family: "REVO",
      title: "To ratify or not",
      kind: "Revolution & the Constitution · VUS.6",
      blurb: "Madison and Mason disagree, and Virginia votes 89 to 79.",
      level: 3,
      passage: "<p>" + N(1) + "The Constitution needed approval by nine of the thirteen states. " + N(2) + "<strong>Federalists</strong> such as Alexander Hamilton, James Madison and John Jay defended it in newspaper essays later collected as The Federalist. " + N(3) + "<strong>Anti-Federalists</strong> feared that a strong central government would threaten the states and individual liberty.</p><p><strong>Source 1</strong></p><blockquote>Ambition must be made to counteract ambition. ... If men were angels, no government would be necessary.</blockquote><p class=\"src\">— James Madison, The Federalist No. 51, 1788</p><p><strong>Source 2</strong></p><blockquote>There is no declaration of rights, and because the laws of the national government are supreme over the laws of the states, the declarations of rights in the states give the people no security.</blockquote><p class=\"src\">— George Mason, Objections to the Constitution, 1787 (adapted)</p><p>" + N(4) + "In Virginia's ratifying convention of 1788, Patrick Henry opposed the Constitution and Madison defended it; Virginia approved it by a vote of 89 to 79. " + N(5) + "Madison then drafted amendments in the First Congress, and the <strong>Bill of Rights</strong>, ten amendments protecting individual liberties, was ratified in 1791.</p>",
      claims: [
        {
          id: "mason",
          sol: "VUS.6.c",
          stem: "The main argument of Source 2 is that the Constitution —",
          choices: [
            { letter: "A", text: "gave the states too much power over the people" },
            { letter: "B", text: "needed a bill of rights to protect liberty" },
            { letter: "C", text: "should be replaced by a monarchy" },
            { letter: "D", text: "should end the power of Congress to tax" }
          ],
          correct: "B"
        },
        {
          id: "ambition",
          sol: "VUS.6.d",
          stem: "In Source 1, Madison's statement that ambition must counteract ambition supports the idea of —",
          choices: [
            { letter: "A", text: "a single all-powerful legislature" },
            { letter: "B", text: "rule by the wealthiest and best-educated citizens" },
            { letter: "C", text: "states leaving the Union at will" },
            { letter: "D", text: "checks and balances among the branches" }
          ],
          correct: "D"
        },
        {
          id: "answer",
          sol: "VUS.6.c",
          stem: "Which action most directly answered the concern raised in Source 2?",
          choices: [
            { letter: "A", text: "the adoption of the Bill of Rights in 1791" },
            { letter: "B", text: "the election of George Washington as president" },
            { letter: "C", text: "the passage of the Northwest Ordinance" },
            { letter: "D", text: "the creation of the first national bank" }
          ],
          correct: "A"
        },
        {
          id: "henry",
          sol: "VUS.6.c",
          stem: "Which Virginian led the opposition to the Constitution at the ratifying convention?",
          choices: [
            { letter: "A", text: "James Madison" },
            { letter: "B", text: "George Washington" },
            { letter: "C", text: "Patrick Henry" },
            { letter: "D", text: "John Marshall" }
          ],
          correct: "C"
        },
        {
          id: "vadecl",
          sol: "VUS.6.a",
          stem: "Mason's concern about rights most likely came from his experience writing —",
          choices: [
            { letter: "A", text: "the Articles of Confederation in 1777" },
            { letter: "B", text: "the Virginia Declaration of Rights" },
            { letter: "C", text: "the Mayflower Compact" },
            { letter: "D", text: "the Proclamation of 1763" }
          ],
          correct: "B"
        },
        {
          id: "antifed",
          sol: "VUS.6.c",
          stem: "In sentence 3, Anti-Federalists were people who —",
          choices: [
            { letter: "A", text: "opposed ratifying the Constitution as written" },
            { letter: "B", text: "wanted to rejoin the British Empire" },
            { letter: "C", text: "wrote the essays collected in The Federalist" },
            { letter: "D", text: "supported a much stronger national government" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "revo-first-parties",
      family: "REVO",
      title: "Hamilton, Jefferson and the first parties",
      kind: "Revolution & the Constitution · VUS.6",
      blurb: "A national bank, two readings of the Constitution and Washington's warning.",
      level: 3,
      passage: "<p>" + N(1) + "Disagreements in President Washington's cabinet led to the first <strong>political parties</strong>. " + N(2) + "Secretary of the Treasury Alexander Hamilton and Secretary of State Thomas Jefferson clashed over how much power the national government should have and how to read the Constitution.</p><table><tr><th>Issue</th><th>Federalists (Alexander Hamilton)</th><th>Democratic-Republicans (Thomas Jefferson)</th></tr><tr><td>Power of government</td><td>Strong national government</td><td>Power kept closer to the states and the people</td></tr><tr><td>Reading the Constitution</td><td>Loose construction: implied powers allowed</td><td><strong>Strict construction</strong>: only listed powers</td></tr><tr><td>National bank</td><td>Supported it</td><td>Opposed it</td></tr><tr><td>Economy</td><td>Manufacturing, trade and banking</td><td>Farming</td></tr><tr><td>Foreign policy</td><td>Friendly to Britain</td><td>Friendly to France</td></tr><tr><td>Main supporters</td><td>Merchants and northeastern business interests</td><td>Farmers, especially in the South and West</td></tr></table><p>" + N(3) + "In his Farewell Address, Washington warned the nation about parties.</p><blockquote>...warn you in the most solemn manner against the baneful effects of the spirit of party generally.</blockquote><p class=\"src\">— George Washington, Farewell Address, 1796</p><p>" + N(4) + "John Adams, a Federalist, won the presidency in 1796; Jefferson defeated him in 1800, and power passed peacefully from one party to another.</p>",
      claims: [
        {
          id: "bank",
          sol: "VUS.6.e",
          stem: "Hamilton argued that a national bank was constitutional because —",
          choices: [
            { letter: "A", text: "the Constitution names a bank as a power of Congress" },
            { letter: "B", text: "the states had voted to create one" },
            { letter: "C", text: "the Constitution allows implied powers" },
            { letter: "D", text: "the Supreme Court had already approved it" }
          ],
          correct: "C"
        },
        {
          id: "farmer",
          sol: "VUS.6.e",
          stem: "Which person would most likely have supported Jefferson's party?",
          choices: [
            { letter: "A", text: "a Boston shipping merchant" },
            { letter: "B", text: "a New York banker" },
            { letter: "C", text: "a Philadelphia factory owner" },
            { letter: "D", text: "a Virginia tobacco farmer" }
          ],
          correct: "D"
        },
        {
          id: "strict",
          sol: "VUS.6.e",
          stem: "In the table, strict construction means that the government —",
          choices: [
            { letter: "A", text: "may use only the powers listed in the Constitution" },
            { letter: "B", text: "may do anything that the Constitution does not forbid" },
            { letter: "C", text: "must follow the wishes of the states" },
            { letter: "D", text: "may ignore the Bill of Rights in wartime" }
          ],
          correct: "A"
        },
        {
          id: "warning",
          sol: "VUS.6.e",
          stem: "Washington warned against the spirit of party mainly because he believed parties —",
          choices: [
            { letter: "A", text: "would give too much power to France" },
            { letter: "B", text: "could divide the nation into rival factions" },
            { letter: "C", text: "would end the independence of the Supreme Court" },
            { letter: "D", text: "were forbidden by the Constitution" }
          ],
          correct: "B"
        },
        {
          id: "rivals",
          sol: "VUS.5.g",
          stem: "Which two leaders of the revolutionary era faced each other in the presidential elections of 1796 and 1800?",
          choices: [
            { letter: "A", text: "John Adams and Thomas Jefferson" },
            { letter: "B", text: "George Washington and John Adams" },
            { letter: "C", text: "Alexander Hamilton and James Madison" },
            { letter: "D", text: "Patrick Henry and George Mason" }
          ],
          correct: "A"
        },
        {
          id: "clause",
          sol: "VUS.6.d",
          stem: "The debate over the national bank centered on the meaning of which part of the Constitution?",
          choices: [
            { letter: "A", text: "the treaty-making power of the Senate" },
            { letter: "B", text: "the president's oath of office" },
            { letter: "C", text: "the necessary and proper clause" },
            { letter: "D", text: "the Three-Fifths Compromise on representation" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "revo-federalism",
      family: "REVO",
      title: "Who holds which power?",
      kind: "Revolution & the Constitution · VUS.6",
      blurb: "Federalism, the three branches and the powers of citizens.",
      level: 3,
      passage: "<p>" + N(1) + "The Constitution divides power between the national government and the states, a system called <strong>federalism</strong>. " + N(2) + "It also separates national power among three branches, and each branch can check the others so that no branch becomes too powerful. " + N(3) + "Some powers, such as taxing, borrowing and setting up courts, are <strong>concurrent</strong>: both levels of government hold them. " + N(4) + "The Tenth Amendment, below, protects the powers left to the states.</p><table><tr><th>Who</th><th>Examples of powers</th></tr><tr><td>Congress</td><td>Makes laws, collects taxes, coins money, declares war, regulates trade between states, overrides a veto by a two-thirds vote</td></tr><tr><td>President</td><td>Enforces laws, commands the military, makes treaties with the Senate's approval, vetoes bills</td></tr><tr><td>Supreme Court</td><td>Decides cases about the Constitution and federal laws</td></tr><tr><td>States</td><td>Run elections and schools, create local governments, issue licenses</td></tr><tr><td>Citizens</td><td>Vote, petition the government, speak and worship freely, serve on juries</td></tr></table><blockquote>The powers not delegated to the United States by the Constitution, nor prohibited by it to the States, are reserved to the States respectively, or to the people.</blockquote><p class=\"src\">— Tenth Amendment, 1791</p>",
      claims: [
        {
          id: "tenth",
          sol: "VUS.6.d",
          stem: "According to the Tenth Amendment, powers not given to the national government or denied to the states belong to —",
          choices: [
            { letter: "A", text: "the president and the cabinet" },
            { letter: "B", text: "the states or the people" },
            { letter: "C", text: "the Supreme Court" },
            { letter: "D", text: "Congress and the federal courts" }
          ],
          correct: "B"
        },
        {
          id: "worship",
          sol: "VUS.6.a",
          stem: "The citizens' right to worship freely reflects the influence of which earlier Virginia document?",
          choices: [
            { letter: "A", text: "the Virginia Statute for Religious Freedom" },
            { letter: "B", text: "the 1606 charter of the Virginia Company of London" },
            { letter: "C", text: "the Proclamation of 1763" },
            { letter: "D", text: "the Articles of Confederation" }
          ],
          correct: "A"
        },
        {
          id: "checks",
          sol: "VUS.6.d",
          stem: "Which example from the table shows checks and balances?",
          choices: [
            { letter: "A", text: "States issue licenses to drivers and businesses." },
            { letter: "B", text: "Citizens serve on juries in federal courts." },
            { letter: "C", text: "Congress overrides a veto." },
            { letter: "D", text: "Congress coins money for the nation." }
          ],
          correct: "C"
        },
        {
          id: "concurrent",
          sol: "VUS.6.d",
          stem: "In sentence 3, concurrent powers are powers that are —",
          choices: [
            { letter: "A", text: "held only by the states" },
            { letter: "B", text: "held only by the president" },
            { letter: "C", text: "denied to both the national and state governments" },
            { letter: "D", text: "shared by the national and state governments" }
          ],
          correct: "D"
        },
        {
          id: "currency",
          sol: "VUS.6.d",
          stem: "A state passes a law to print its own paper money. Which conclusion is best supported by the table?",
          choices: [
            { letter: "A", text: "The law is valid because states run their own elections and schools." },
            { letter: "B", text: "The law is valid because taxing is a concurrent power." },
            { letter: "C", text: "The law conflicts with the power of Congress to coin money." },
            { letter: "D", text: "The law conflicts with the president's treaty power." }
          ],
          correct: "C"
        },
        {
          id: "antifed",
          sol: "VUS.6.c",
          stem: "The Tenth Amendment was most likely added to reassure people who —",
          choices: [
            { letter: "A", text: "wanted a king for the United States" },
            { letter: "B", text: "feared a national government that was too strong" },
            { letter: "C", text: "wanted Congress to run all of the nation's public schools" },
            { letter: "D", text: "opposed the Declaration of Independence" }
          ],
          correct: "B"
        }
      ]
    }
  ];

  for (var i = 0; i < PACKS.length; i++) P.push(PACKS[i]);
})(typeof window !== "undefined" ? window : global);
