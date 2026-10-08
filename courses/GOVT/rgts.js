/* SOL Lab — Virginia & U.S. Government · Civil Liberties & Civil Rights (GOVT.11). Original text only;
   quotations from the Constitution, the Virginia Declaration of Rights, the Virginia Statute for Religious Freedom
   and Supreme Court opinions are public domain. */
(function (global) {
  var P = global.HEIST_PACKS;
  if (!P || !P.push) return;
  var N = function (i) { return '<span class="n">(' + i + ')</span> '; };   // numbered sentence

  var PACKS = [
    /* ---------- tiny ---------- */
    {
      id: "rgts-first-amendment-text",
      family: "RGTS",
      title: "Forty-five words",
      kind: "Civil Liberties & Civil Rights · GOVT.11",
      blurb: "The First Amendment, read slowly.",
      level: 1,
      passage: "<blockquote><p>" + N(1) + "Congress shall make no law respecting an establishment of religion, or prohibiting the free exercise thereof; or abridging the freedom of speech, or of the press; or the right of the people peaceably to assemble, and to <strong>petition</strong> the Government for a redress of grievances.</p></blockquote>" +
        "<p class=\"src\">— First Amendment, Constitution of the United States, 1791</p>" +
        "<p>" + N(2) + "These are civil liberties: limits on what government may do to the individual.</p>",
      claims: [
        {
          id: "petition",
          sol: "GOVT.11.b",
          stem: "In sentence 1, to petition the government means to —",
          choices: [
            { letter: "A", text: "refuse to pay a tax" },
            { letter: "B", text: "run for public office" },
            { letter: "C", text: "formally ask officials to fix a problem" },
            { letter: "D", text: "print a newspaper without first getting a license" }
          ],
          correct: "C"
        },
        {
          id: "freedoms",
          sol: "GOVT.11.b",
          stem: "Which freedom is NOT protected by the First Amendment?",
          choices: [
            { letter: "A", text: "the right to a speedy trial" },
            { letter: "B", text: "freedom of the press to report the news" },
            { letter: "C", text: "freedom of assembly" },
            { letter: "D", text: "free exercise of religion" }
          ],
          correct: "A"
        },
        {
          id: "establishment",
          sol: "GOVT.11.b",
          stem: "The establishment clause in sentence 1 forbids the government to —",
          choices: [
            { letter: "A", text: "allow citizens to practice any religion they choose" },
            { letter: "B", text: "set up an official national church" },
            { letter: "C", text: "let religious groups hold public meetings" },
            { letter: "D", text: "permit houses of worship to own property" }
          ],
          correct: "B"
        },
        {
          id: "liberty",
          sol: "GOVT.11.a",
          stem: "According to sentence 2, civil liberties are best described as —",
          choices: [
            { letter: "A", text: "services the government must provide to every citizen" },
            { letter: "B", text: "duties citizens owe to the government in return for protection" },
            { letter: "C", text: "powers shared by the national and state governments" },
            { letter: "D", text: "freedoms protected from interference by government" }
          ],
          correct: "D"
        },
        {
          id: "congress",
          sol: "GOVT.11.b",
          stem: "The first words of the amendment show that, as written in 1791, it was meant to limit —",
          choices: [
            { letter: "A", text: "the state legislatures" },
            { letter: "B", text: "private employers and businesses" },
            { letter: "C", text: "churches and religious leaders" },
            { letter: "D", text: "the national government" }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "rgts-liberties-or-rights",
      family: "RGTS",
      title: "Liberties or rights?",
      kind: "Civil Liberties & Civil Rights · GOVT.11",
      blurb: "Two terms that sound alike but mean different things.",
      level: 1,
      passage: "<p>" + N(1) + "<strong>Civil liberties</strong> are freedoms that government may not take away, such as freedom of speech or the right to a fair trial. " + N(2) + "They mainly tell government what it must not do. " + N(3) + "<strong>Civil rights</strong> are guarantees of equal treatment under the law, such as the right to vote or to be served in a restaurant regardless of race. " + N(4) + "They often require government to act against discrimination.</p>",
      claims: [
        {
          id: "civil-right",
          sol: "GOVT.11.a",
          stem: "Which situation is mainly about a civil right?",
          choices: [
            { letter: "A", text: "A city bans a protest march because officials dislike its message." },
            { letter: "B", text: "An employer refuses to hire workers because of their race." },
            { letter: "C", text: "Police search a home without a warrant." },
            { letter: "D", text: "A state closes a newspaper that criticized the governor." }
          ],
          correct: "B"
        },
        {
          id: "civil-liberty",
          sol: "GOVT.11.a",
          stem: "Which situation is mainly about a civil liberty?",
          choices: [
            { letter: "A", text: "A man is held in jail without being told the charges against him." },
            { letter: "B", text: "A hotel turns away guests because of their national origin." },
            { letter: "C", text: "A county places fewer polling places in some neighborhoods because of race." },
            { letter: "D", text: "A school refuses to admit students because of their sex." }
          ],
          correct: "A"
        },
        {
          id: "difference",
          sol: "GOVT.11.a",
          stem: "Based on sentences 2 and 4, how do civil liberties and civil rights differ?",
          choices: [
            { letter: "A", text: "Liberties apply only to citizens, but rights apply to everyone." },
            { letter: "B", text: "Liberties come from state law, but rights come from treaties." },
            { letter: "C", text: "Liberties limit government; rights often require it to act." },
            { letter: "D", text: "Liberties were added in the 1960s, but rights date from 1791." }
          ],
          correct: "C"
        },
        {
          id: "source",
          sol: "GOVT.11.f",
          stem: "Which part of the Constitution is the main source of civil rights protection against unequal treatment by the states?",
          choices: [
            { letter: "A", text: "the Second Amendment's right to bear arms" },
            { letter: "B", text: "the Tenth Amendment's reserved powers" },
            { letter: "C", text: "the necessary and proper clause of Article I" },
            { letter: "D", text: "the Fourteenth Amendment" }
          ],
          correct: "D"
        },
        {
          id: "example-law",
          sol: "GOVT.11.f",
          stem: "The restaurant example in sentence 3 was addressed by which federal law?",
          choices: [
            { letter: "A", text: "the Civil Rights Act of 1964" },
            { letter: "B", text: "the Pendleton Act of 1883" },
            { letter: "C", text: "the War Powers Resolution of 1973" },
            { letter: "D", text: "the Judiciary Act of 1789" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "rgts-fourth-amendment",
      family: "RGTS",
      title: "Secure in their houses",
      kind: "Civil Liberties & Civil Rights · GOVT.11",
      blurb: "The Fourth Amendment and the warrant.",
      level: 1,
      passage: "<blockquote><p>" + N(1) + "The right of the people to be secure in their persons, houses, papers, and effects, against unreasonable searches and seizures, shall not be violated, and no Warrants shall issue, but upon <strong>probable cause</strong>, supported by Oath or affirmation, and particularly describing the place to be searched, and the persons or things to be seized.</p></blockquote>" +
        "<p class=\"src\">— Fourth Amendment, 1791</p>",
      claims: [
        {
          id: "probable",
          sol: "GOVT.11.c",
          stem: "In sentence 1, probable cause means —",
          choices: [
            { letter: "A", text: "a written confession signed by a suspect" },
            { letter: "B", text: "a fact-based reason to believe evidence will be found" },
            { letter: "C", text: "a hunch by an officer that someone looks suspicious or nervous" },
            { letter: "D", text: "an order from the president to search a home" }
          ],
          correct: "B"
        },
        {
          id: "particular",
          sol: "GOVT.11.c",
          stem: "A warrant reads \"search any house in the county for stolen goods.\" Under sentence 1, what is wrong with it?",
          choices: [
            { letter: "A", text: "It does not describe a particular place to be searched." },
            { letter: "B", text: "It was not approved by a jury before being issued." },
            { letter: "C", text: "It names the specific stolen goods the police are looking for." },
            { letter: "D", text: "It was issued by a judge rather than the police." }
          ],
          correct: "A"
        },
        {
          id: "mapp",
          sol: "GOVT.11.d",
          stem: "In Mapp v. Ohio (1961), the Supreme Court ruled that evidence taken in an illegal search —",
          choices: [
            { letter: "A", text: "may be used if the suspect is later found guilty" },
            { letter: "B", text: "must be returned to the police department that first seized it" },
            { letter: "C", text: "cannot be used in state courts, just as in federal courts" },
            { letter: "D", text: "may be used only in civil lawsuits for damages" }
          ],
          correct: "C"
        },
        {
          id: "purpose",
          sol: "GOVT.11.c",
          stem: "The main purpose of the Fourth Amendment is to —",
          choices: [
            { letter: "A", text: "let police enter homes freely during emergencies" },
            { letter: "B", text: "guarantee every accused person a free lawyer" },
            { letter: "C", text: "prevent cruel and unusual punishment after a person is convicted" },
            { letter: "D", text: "protect privacy against unreasonable government searches" }
          ],
          correct: "D"
        }
      ]
    },

    /* ---------- short ---------- */
    {
      id: "rgts-schoolhouse-gate",
      family: "RGTS",
      title: "Black armbands in Des Moines",
      kind: "Civil Liberties & Civil Rights · GOVT.11",
      blurb: "Tinker v. Des Moines and student speech.",
      level: 2,
      passage: "<p>" + N(1) + "In December 1965, students in Des Moines, Iowa, wore black armbands to school to protest the Vietnam War. " + N(2) + "The school district had banned the armbands, and the students were suspended. " + N(3) + "In Tinker v. Des Moines (1969), the Supreme Court ruled 7–2 for the students, treating the armbands as <strong>symbolic speech</strong> protected by the First Amendment.</p>" +
        "<blockquote><p>" + N(4) + "It can hardly be argued that either students or teachers shed their constitutional rights to freedom of speech or expression at the schoolhouse gate.</p></blockquote>" +
        "<p class=\"src\">— Justice Abe Fortas, majority opinion, Tinker v. Des Moines, 1969</p>" +
        "<p>" + N(5) + "The Court added that schools may limit speech that would substantially disrupt school activities.</p>",
      claims: [
        {
          id: "symbolic",
          sol: "GOVT.11.b",
          stem: "In sentence 3, symbolic speech is —",
          choices: [
            { letter: "A", text: "a speech given at a public meeting" },
            { letter: "B", text: "written words printed in a newspaper or magazine" },
            { letter: "C", text: "a message expressed through actions or objects" },
            { letter: "D", text: "a statement made under oath in court" }
          ],
          correct: "C"
        },
        {
          id: "main-idea",
          sol: "GOVT.11.b",
          stem: "Sentence 4 best supports which conclusion?",
          choices: [
            { letter: "A", text: "Students keep free-speech rights at public school." },
            { letter: "B", text: "Teachers may decide which opinions students may express." },
            { letter: "C", text: "The First Amendment does not apply to anyone under 18." },
            { letter: "D", text: "Schools must allow any speech, even if it disrupts classes." }
          ],
          correct: "A"
        },
        {
          id: "balance",
          sol: "GOVT.11.e",
          stem: "Sentence 5 shows that the Court tried to balance students' liberty against —",
          choices: [
            { letter: "A", text: "the wishes of the students' parents" },
            { letter: "B", text: "the power of Congress to declare war" },
            { letter: "C", text: "the rights of the press to report on schools" },
            { letter: "D", text: "the school's need for order and learning" }
          ],
          correct: "D"
        },
        {
          id: "apply",
          sol: "GOVT.11.e",
          stem: "Under the Tinker standard, which school rule would most likely be upheld?",
          choices: [
            { letter: "A", text: "a ban on buttons that support any political candidate" },
            { letter: "B", text: "a ban on shouting that drowns out a teacher's lesson" },
            { letter: "C", text: "a ban on T-shirts that criticize a war" },
            { letter: "D", text: "a ban on wearing armbands of any color" }
          ],
          correct: "B"
        },
        {
          id: "state-actor",
          sol: "GOVT.11.d",
          stem: "The First Amendment limits a public school district in Iowa, a part of state government, because —",
          choices: [
            { letter: "A", text: "Iowa's constitution copied the Bill of Rights word for word" },
            { letter: "B", text: "Congress runs public schools in every state" },
            { letter: "C", text: "the Fourteenth Amendment applies free speech to the states" },
            { letter: "D", text: "the students were protesting a federal war" }
          ],
          correct: "C"
        }
      ]
    },
    {
      id: "rgts-gideon-letter",
      family: "RGTS",
      title: "A letter in pencil",
      kind: "Civil Liberties & Civil Rights · GOVT.11",
      blurb: "Clarence Earl Gideon and the right to a lawyer.",
      level: 2,
      passage: "<p>" + N(1) + "In 1961, Clarence Earl Gideon was charged in Florida with breaking into a pool hall. " + N(2) + "He could not afford a lawyer and asked the court to appoint one, but Florida then provided lawyers only in cases that could bring the death penalty. " + N(3) + "Gideon defended himself and was convicted. " + N(4) + "From prison, he wrote a petition to the Supreme Court in pencil. " + N(5) + "In Gideon v. Wainwright (1963), the Court ruled unanimously that the Sixth Amendment's right to the <strong>assistance of counsel</strong> applies to the states through the Fourteenth Amendment. " + N(6) + "Gideon was retried with a lawyer and found not guilty.</p>",
      claims: [
        {
          id: "counsel",
          sol: "GOVT.11.c",
          stem: "In sentence 5, assistance of counsel means —",
          choices: [
            { letter: "A", text: "help from a lawyer" },
            { letter: "B", text: "advice from a jury" },
            { letter: "C", text: "a delay of the trial" },
            { letter: "D", text: "a hearing before a judge" }
          ],
          correct: "A"
        },
        {
          id: "result",
          sol: "GOVT.11.c",
          stem: "What was the main result of Gideon v. Wainwright?",
          choices: [
            { letter: "A", text: "Police had to read suspects their rights before questioning." },
            { letter: "B", text: "States had to give poor felony defendants lawyers." },
            { letter: "C", text: "Illegally seized evidence was barred from state trials." },
            { letter: "D", text: "The death penalty was banned in Florida and other states." }
          ],
          correct: "B"
        },
        {
          id: "incorporation",
          sol: "GOVT.11.d",
          stem: "Sentence 5 is an example of selective incorporation because the Court —",
          choices: [
            { letter: "A", text: "added a new amendment to the Constitution" },
            { letter: "B", text: "struck down an act of Congress" },
            { letter: "C", text: "applied a Bill of Rights protection to a state" },
            { letter: "D", text: "allowed Florida to keep setting its own rules for trials" }
          ],
          correct: "C"
        },
        {
          id: "evidence",
          sol: "GOVT.11.c",
          stem: "Which detail best supports the argument that a lawyer can change the outcome of a trial?",
          choices: [
            { letter: "A", text: "Gideon was charged with breaking into a pool hall." },
            { letter: "B", text: "Gideon wrote his petition in pencil." },
            { letter: "C", text: "The Court's decision was unanimous." },
            { letter: "D", text: "Gideon was acquitted once he had a lawyer." }
          ],
          correct: "D"
        },
        {
          id: "petition",
          sol: "GOVT.11.f",
          stem: "Gideon's handwritten petition shows that the rights of the accused are protected mainly through —",
          choices: [
            { letter: "A", text: "the courts, which can review a trial's fairness" },
            { letter: "B", text: "Congress, which votes on each criminal case" },
            { letter: "C", text: "the president, who approves every conviction" },
            { letter: "D", text: "the states, which are free to ignore the Bill of Rights" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "rgts-civil-rights-laws",
      family: "RGTS",
      title: "Laws that protect civil rights",
      kind: "Civil Liberties & Civil Rights · GOVT.11",
      blurb: "Four federal laws and what each one does.",
      level: 2,
      passage: "<table><tr><th>Law</th><th>Year</th><th>Main protection</th></tr>" +
        "<tr><td>Civil Rights Act</td><td>1964</td><td>Bans discrimination by race, color, religion, sex or national origin in jobs and public accommodations</td></tr>" +
        "<tr><td>Voting Rights Act</td><td>1965</td><td>Suspends literacy tests and adds federal oversight to end racial barriers to voting</td></tr>" +
        "<tr><td>Title IX</td><td>1972</td><td>Bans sex discrimination in schools that receive federal funds</td></tr>" +
        "<tr><td>Americans with Disabilities Act</td><td>1990</td><td>Bans discrimination against people with disabilities in jobs and public places</td></tr></table>" +
        "<p>" + N(1) + "Each law rests on powers the Constitution gives Congress, such as the power to <strong>enforce</strong> the Fourteenth and Fifteenth Amendments, to regulate commerce, or to set conditions on federal funds.</p>",
      claims: [
        {
          id: "title-ix",
          sol: "GOVT.11.f",
          stem: "A public high school gives its boys' teams new uniforms every year but never buys any for its girls' teams. Which law in the table most directly applies?",
          choices: [
            { letter: "A", text: "the Voting Rights Act" },
            { letter: "B", text: "the Americans with Disabilities Act" },
            { letter: "C", text: "Title IX" },
            { letter: "D", text: "the Twenty-sixth Amendment" }
          ],
          correct: "C"
        },
        {
          id: "ada",
          sol: "GOVT.11.f",
          stem: "Requiring ramps and accessible entrances at new public buildings carries out which law?",
          choices: [
            { letter: "A", text: "the Civil Rights Act of 1964" },
            { letter: "B", text: "the Voting Rights Act of 1965" },
            { letter: "C", text: "Title IX of the Education Amendments" },
            { letter: "D", text: "the Americans with Disabilities Act" }
          ],
          correct: "D"
        },
        {
          id: "conclusion",
          sol: "GOVT.11.a",
          stem: "Which conclusion about these civil rights laws is best supported by the table?",
          choices: [
            { letter: "A", text: "Protections were extended to more groups over time." },
            { letter: "B", text: "Congress passed all four laws in the same session." },
            { letter: "C", text: "These laws mainly limit the power of police to search homes." },
            { letter: "D", text: "Each law repealed the one listed before it." }
          ],
          correct: "A"
        },
        {
          id: "enforce",
          sol: "GOVT.11.f",
          stem: "In sentence 1, the word enforce most nearly means —",
          choices: [
            { letter: "A", text: "amend" },
            { letter: "B", text: "carry out" },
            { letter: "C", text: "repeal" },
            { letter: "D", text: "interpret" }
          ],
          correct: "B"
        },
        {
          id: "vra",
          sol: "GOVT.11.f",
          stem: "The Voting Rights Act of 1965 was passed mainly to —",
          choices: [
            { letter: "A", text: "lower the voting age from 21 to 18" },
            { letter: "B", text: "end the poll tax in federal elections" },
            { letter: "C", text: "give women the right to vote in every state" },
            { letter: "D", text: "remove racial barriers to voting" }
          ],
          correct: "D"
        }
      ]
    },

    /* ---------- medium ---------- */
    {
      id: "rgts-miranda",
      family: "RGTS",
      title: "\"You have the right to remain silent\"",
      kind: "Civil Liberties & Civil Rights · GOVT.11",
      blurb: "The Fifth Amendment and the Miranda warnings.",
      level: 2,
      passage: "<blockquote><p>" + N(1) + "No person shall … be compelled in any criminal case to be a witness against himself, nor be deprived of life, liberty, or property, without due process of law.</p></blockquote>" +
        "<p class=\"src\">— Fifth Amendment (excerpt)</p>" +
        "<p>" + N(2) + "In 1963, Ernesto Miranda was arrested in Phoenix, Arizona, and questioned by police for two hours. " + N(3) + "He signed a confession without being told that he could stay silent or ask for a lawyer. " + N(4) + "In Miranda v. Arizona (1966), the Supreme Court ruled 5–4 that his confession could not be used. " + N(5) + "Before questioning a suspect in custody, police must explain that the suspect may remain silent, that anything said can be used in court, and that the suspect may have a lawyer, appointed if necessary. " + N(6) + "The decision protects the right against <strong>self-incrimination</strong>. " + N(7) + "Miranda was later retried using other evidence and convicted.</p>",
      claims: [
        {
          id: "self-incrim",
          sol: "GOVT.11.c",
          stem: "In sentence 6, self-incrimination means —",
          choices: [
            { letter: "A", text: "being tried twice in court for the same crime" },
            { letter: "B", text: "being forced to testify against oneself" },
            { letter: "C", text: "being held in jail without bail" },
            { letter: "D", text: "having property taken without payment" }
          ],
          correct: "B"
        },
        {
          id: "when",
          sol: "GOVT.11.c",
          stem: "According to sentence 5, when must police give the Miranda warnings?",
          choices: [
            { letter: "A", text: "before questioning a person who is in custody" },
            { letter: "B", text: "whenever they speak with any witness to a crime" },
            { letter: "C", text: "only after the suspect has been convicted" },
            { letter: "D", text: "only when a judge has issued a search warrant" }
          ],
          correct: "A"
        },
        {
          id: "due-process",
          sol: "GOVT.11.c",
          stem: "The due process clause in sentence 1 requires the government to —",
          choices: [
            { letter: "A", text: "convict every person who confesses to a crime, without a trial" },
            { letter: "B", text: "allow suspects to choose their own judges" },
            { letter: "C", text: "use fair procedures before taking life, liberty or property" },
            { letter: "D", text: "hold all criminal trials in federal court" }
          ],
          correct: "C"
        },
        {
          id: "retrial",
          sol: "GOVT.11.e",
          stem: "Sentence 7 is most useful for answering critics who argued that the Miranda rule would —",
          choices: [
            { letter: "A", text: "make police questioning longer than two hours" },
            { letter: "B", text: "force states to hire more judges" },
            { letter: "C", text: "end the use of juries in criminal trials" },
            { letter: "D", text: "let guilty suspects go free" }
          ],
          correct: "D"
        },
        {
          id: "fourteenth",
          sol: "GOVT.11.d",
          stem: "The Fifth Amendment limits the federal government. Arizona, a state, was bound by the protection in this case because —",
          choices: [
            { letter: "A", text: "Arizona had asked to be covered by the Bill of Rights" },
            { letter: "B", text: "the Fourteenth Amendment applies it to the states" },
            { letter: "C", text: "Miranda had been arrested by federal agents" },
            { letter: "D", text: "Congress passed a law requiring the warnings in 1963" }
          ],
          correct: "B"
        },
        {
          id: "close-vote",
          sol: "GOVT.11.e",
          stem: "The 5–4 vote in sentence 4 best suggests that —",
          choices: [
            { letter: "A", text: "the justices were sharply divided on the issue" },
            { letter: "B", text: "most justices believed Miranda was innocent" },
            { letter: "C", text: "the case was decided by the Arizona Supreme Court" },
            { letter: "D", text: "the Court refused to hear arguments in the case" }
          ],
          correct: "A"
        }
      ]
    },
    {
      id: "rgts-incorporation-timeline",
      family: "RGTS",
      title: "Applying the Bill of Rights to the states",
      kind: "Civil Liberties & Civil Rights · GOVT.11",
      blurb: "From Barron v. Baltimore to selective incorporation.",
      level: 3,
      passage: "<ul><li><strong>1833</strong> Barron v. Baltimore: the Bill of Rights limits only the national government.</li>" +
        "<li><strong>1868</strong> The Fourteenth Amendment says no state may deprive any person of life, liberty or property without due process of law.</li>" +
        "<li><strong>1925</strong> Gitlow v. New York: the Court says freedom of speech and press are protected from the states.</li>" +
        "<li><strong>1961</strong> Mapp v. Ohio: the exclusionary rule applies in state courts.</li>" +
        "<li><strong>1963</strong> Gideon v. Wainwright: states must provide lawyers to poor defendants.</li>" +
        "<li><strong>2010</strong> McDonald v. Chicago: the Second Amendment applies to the states.</li></ul>" +
        "<p>" + N(1) + "This case-by-case process is called <strong>selective incorporation</strong>. " + N(2) + "Today nearly all of the Bill of Rights applies to the states. " + N(3) + "A few parts, such as the Fifth Amendment's grand jury requirement and the Seventh Amendment's civil jury right, have never been incorporated.</p>",
      claims: [
        {
          id: "define",
          sol: "GOVT.11.d",
          stem: "In sentence 1, selective incorporation refers to —",
          choices: [
            { letter: "A", text: "the process by which new territories join the Union as states" },
            { letter: "B", text: "Congress choosing which amendments to repeal" },
            { letter: "C", text: "applying the Bill of Rights to the states case by case" },
            { letter: "D", text: "states writing and adopting their own declarations of rights" }
          ],
          correct: "C"
        },
        {
          id: "barron",
          sol: "GOVT.11.d",
          stem: "Before 1868, a person whose property was taken by a state without payment could not rely on the Fifth Amendment because —",
          choices: [
            { letter: "A", text: "the Bill of Rights then limited only the national government" },
            { letter: "B", text: "the Fifth Amendment had not yet been ratified" },
            { letter: "C", text: "the Supreme Court did not yet exist" },
            { letter: "D", text: "property rights were not mentioned anywhere in the Constitution" }
          ],
          correct: "A"
        },
        {
          id: "vehicle",
          sol: "GOVT.11.d",
          stem: "Which part of the Constitution made incorporation possible?",
          choices: [
            { letter: "A", text: "the necessary and proper clause of Article I, Section 8" },
            { letter: "B", text: "the due process clause of the Fourteenth Amendment" },
            { letter: "C", text: "the reserved powers of the Tenth Amendment" },
            { letter: "D", text: "the supremacy clause of Article VI" }
          ],
          correct: "B"
        },
        {
          id: "first",
          sol: "GOVT.11.d",
          stem: "According to the timeline, which protection was applied to the states FIRST?",
          choices: [
            { letter: "A", text: "the right to a lawyer" },
            { letter: "B", text: "the exclusionary rule" },
            { letter: "C", text: "the right to keep and bear arms" },
            { letter: "D", text: "freedom of speech" }
          ],
          correct: "D"
        },
        {
          id: "not-incorporated",
          sol: "GOVT.11.c",
          stem: "Based on sentence 3, which statement is accurate?",
          choices: [
            { letter: "A", text: "Every protection in the Bill of Rights now limits the states." },
            { letter: "B", text: "States may still charge serious crimes without a grand jury." },
            { letter: "C", text: "States may ignore the right to counsel in minor felony cases." },
            { letter: "D", text: "The Seventh Amendment was repealed in 1925." }
          ],
          correct: "B"
        },
        {
          id: "effect",
          sol: "GOVT.11.f",
          stem: "Which statement best explains the overall effect of the cases on the timeline?",
          choices: [
            { letter: "A", text: "They reduced the power of federal courts over state laws." },
            { letter: "B", text: "They let states choose which rights to protect." },
            { letter: "C", text: "They moved criminal trials from state to federal courts." },
            { letter: "D", text: "They widened protection of rights against the states." }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "rgts-clear-and-present",
      family: "RGTS",
      title: "Shouting fire in a theatre",
      kind: "Civil Liberties & Civil Rights · GOVT.11",
      blurb: "Schenck v. United States and the limits of speech.",
      level: 3,
      passage: "<p>" + N(1) + "During World War I, Charles Schenck mailed leaflets urging men to resist the draft. " + N(2) + "He was convicted under the Espionage Act of 1917, and in Schenck v. United States (1919) the Supreme Court unanimously upheld the conviction.</p>" +
        "<blockquote><p>" + N(3) + "The most stringent protection of free speech would not protect a man in falsely shouting fire in a theatre and causing a panic. " + N(4) + "The question in every case is whether the words used are used in such circumstances and are of such a nature as to create a <strong>clear and present danger</strong> that they will bring about the substantive evils that Congress has a right to prevent.</p></blockquote>" +
        "<p class=\"src\">— Justice Oliver Wendell Holmes, Jr., Schenck v. United States, 1919</p>" +
        "<p>" + N(5) + "Fifty years later, in Brandenburg v. Ohio (1969), the Court narrowed the limit: government may punish advocacy only when it is aimed at producing imminent lawless action and is likely to do so.</p>",
      claims: [
        {
          id: "fire",
          sol: "GOVT.11.e",
          stem: "Holmes uses the example in sentence 3 to argue that —",
          choices: [
            { letter: "A", text: "theatres should be closed during wartime" },
            { letter: "B", text: "freedom of speech is not absolute" },
            { letter: "C", text: "all speech about the war is illegal" },
            { letter: "D", text: "only Congress may decide what speech is false" }
          ],
          correct: "B"
        },
        {
          id: "danger",
          sol: "GOVT.11.e",
          stem: "In sentence 4, the clear and present danger test asks whether speech —",
          choices: [
            { letter: "A", text: "is popular with most citizens" },
            { letter: "B", text: "criticizes the president or members of Congress" },
            { letter: "C", text: "was printed rather than spoken aloud" },
            { letter: "D", text: "creates a real, immediate risk of harm" }
          ],
          correct: "D"
        },
        {
          id: "context",
          sol: "GOVT.11.e",
          stem: "Which fact from sentences 1 and 2 most likely shaped the Court's decision in 1919?",
          choices: [
            { letter: "A", text: "The nation was at war and needed soldiers." },
            { letter: "B", text: "Schenck used the mail instead of giving speeches." },
            { letter: "C", text: "The Espionage Act was more than fifty years old." },
            { letter: "D", text: "Schenck was a member of Congress." }
          ],
          correct: "A"
        },
        {
          id: "change",
          sol: "GOVT.11.e",
          stem: "How did Brandenburg v. Ohio change the rule from Schenck?",
          choices: [
            { letter: "A", text: "It allowed government to ban any speech that criticizes a war." },
            { letter: "B", text: "It ended First Amendment protection for written leaflets." },
            { letter: "C", text: "It protected more speech than the Schenck test did." },
            { letter: "D", text: "It applied the First Amendment only to the federal government." }
          ],
          correct: "C"
        },
        {
          id: "unprotected",
          sol: "GOVT.11.b",
          stem: "Which TWO kinds of expression have been held NOT to be protected by the First Amendment? Select TWO.",
          choices: [
            { letter: "A", text: "peaceful criticism of a government policy" },
            { letter: "B", text: "true threats of violence against a person" },
            { letter: "C", text: "burning a flag at a political protest" },
            { letter: "D", text: "false statements of fact that harm a person's reputation (libel)" }
          ],
          correct: ["B", "D"]
        }
      ]
    },

    /* ---------- long ---------- */
    {
      id: "rgts-religion-clauses",
      family: "RGTS",
      title: "Virginia and religious freedom",
      kind: "Civil Liberties & Civil Rights · GOVT.11",
      blurb: "Jefferson's statute and two modern cases on the religion clauses.",
      level: 3,
      passage: "<blockquote><p>" + N(1) + "… that all men shall be free to profess, and by argument to maintain, their opinions in matters of religion, and that the same shall in no wise diminish, enlarge, or affect their civil capacities.</p></blockquote>" +
        "<p class=\"src\">— Thomas Jefferson, Virginia Statute for Religious Freedom, adopted 1786</p>" +
        "<p>" + N(2) + "Jefferson's statute, which James Madison guided through the General Assembly, declared that no one could be forced to attend or support any church. " + N(3) + "Its ideas shaped the two religion clauses of the First Amendment. " + N(4) + "The <strong>establishment clause</strong> keeps government from favoring or setting up a religion; Jefferson later described it as building a wall of separation between church and state. " + N(5) + "The <strong>free exercise clause</strong> protects the right to practice one's faith.</p>" +
        "<p>" + N(6) + "Two modern cases show each clause at work. " + N(7) + "In Engel v. Vitale (1962), the Court ruled that a New York public school could not lead students in a prayer written by state officials, even though students were not required to join in. " + N(8) + "In Wisconsin v. Yoder (1972), the Court ruled that Amish parents did not have to send their children to school past the eighth grade, because the state's interest did not outweigh the parents' religious beliefs.</p>",
      claims: [
        {
          id: "civil-capacities",
          sol: "GOVT.11.b",
          stem: "In sentence 1, the statute says a person's religious opinions shall not affect his \"civil capacities.\" This means a person's religion should not —",
          choices: [
            { letter: "A", text: "be discussed in public places" },
            { letter: "B", text: "be taught to his children" },
            { letter: "C", text: "change his rights as a citizen" },
            { letter: "D", text: "be different from his neighbors' faith" }
          ],
          correct: "C"
        },
        {
          id: "engel",
          sol: "GOVT.11.b",
          stem: "Engel v. Vitale is an example of the Court applying the —",
          choices: [
            { letter: "A", text: "free exercise clause" },
            { letter: "B", text: "establishment clause" },
            { letter: "C", text: "due process clause" },
            { letter: "D", text: "free press clause" }
          ],
          correct: "B"
        },
        {
          id: "yoder",
          sol: "GOVT.11.e",
          stem: "In Wisconsin v. Yoder, the Court weighed the parents' religious liberty against —",
          choices: [
            { letter: "A", text: "the power of Congress to regulate commerce" },
            { letter: "B", text: "the rights of the press to report on schools" },
            { letter: "C", text: "the federal government's control of education" },
            { letter: "D", text: "the state's interest in educating children" }
          ],
          correct: "D"
        },
        {
          id: "influence",
          sol: "GOVT.11.b",
          stem: "Which conclusion is best supported by sentences 2 and 3?",
          choices: [
            { letter: "A", text: "Virginia's religious freedom law shaped the Bill of Rights." },
            { letter: "B", text: "Virginia kept an official state church until the 1900s." },
            { letter: "C", text: "The First Amendment was written by the General Assembly." },
            { letter: "D", text: "Madison opposed adding religious freedom to the Constitution." }
          ],
          correct: "A"
        },
        {
          id: "apply",
          sol: "GOVT.11.e",
          stem: "A student organizes a voluntary prayer group that meets before school, led by students. Based on the passage, how does this differ from the situation in Engel?",
          choices: [
            { letter: "A", text: "It is led by state officials, so it is more clearly unconstitutional." },
            { letter: "B", text: "It is private student prayer, not prayer led by the government." },
            { letter: "C", text: "It violates the free exercise clause because it meets on school grounds." },
            { letter: "D", text: "It is the same situation, so the Engel ruling forbids it." }
          ],
          correct: "B"
        },
        {
          id: "free-exercise",
          sol: "GOVT.11.a",
          stem: "The free exercise of religion is best classified as a —",
          choices: [
            { letter: "A", text: "civil right, because it requires the government to end discrimination by businesses" },
            { letter: "B", text: "power reserved to the states by the Tenth Amendment" },
            { letter: "C", text: "duty that every citizen owes the government" },
            { letter: "D", text: "civil liberty, because it limits what government may do" }
          ],
          correct: "D"
        }
      ]
    },
    {
      id: "rgts-loving-v-virginia",
      family: "RGTS",
      title: "Loving v. Virginia",
      kind: "Civil Liberties & Civil Rights · GOVT.11",
      blurb: "A Caroline County couple, the Fourteenth Amendment and the freedom to marry.",
      level: 3,
      passage: "<p>" + N(1) + "In 1958, Mildred Jeter, a woman of Black and Native American descent, and Richard Loving, a white man, were married in Washington, D.C. " + N(2) + "When they returned home to Caroline County, Virginia, they were arrested under a state law that banned interracial marriage. " + N(3) + "They pleaded guilty and were sentenced to a year in jail, suspended on the condition that they leave Virginia for 25 years. " + N(4) + "With help from American Civil Liberties Union lawyers, the Lovings challenged the law. " + N(5) + "In 1967 the Supreme Court ruled unanimously that the law violated both the equal protection clause and the due process clause of the Fourteenth Amendment.</p>" +
        "<blockquote><p>" + N(6) + "No State shall make or enforce any law which shall abridge the privileges or immunities of citizens of the United States; nor shall any State deprive any person of life, liberty, or property, without due process of law; nor deny to any person within its jurisdiction the equal protection of the laws.</p></blockquote>" +
        "<p class=\"src\">— Fourteenth Amendment, Section 1, 1868</p>" +
        "<p>" + N(7) + "Chief Justice Earl Warren wrote that the freedom to marry a person of another race \"resides with the individual and cannot be infringed by the State.\" " + N(8) + "The ruling struck down similar <strong>statutes</strong> in fifteen other states.</p>",
      claims: [
        {
          id: "statutes",
          sol: "GOVT.11.f",
          stem: "In sentence 8, the word statutes most nearly means —",
          choices: [
            { letter: "A", text: "court decisions" },
            { letter: "B", text: "laws passed by legislatures" },
            { letter: "C", text: "amendments to the Constitution" },
            { letter: "D", text: "monuments in public places" }
          ],
          correct: "B"
        },
        {
          id: "equal-protection",
          sol: "GOVT.11.f",
          stem: "Which phrase in sentence 6 most directly supports the ruling that Virginia's law treated people unequally because of race?",
          choices: [
            { letter: "A", text: "\"privileges or immunities of citizens\"" },
            { letter: "B", text: "\"life, liberty, or property\"" },
            { letter: "C", text: "\"within its jurisdiction\"" },
            { letter: "D", text: "\"the equal protection of the laws\"" }
          ],
          correct: "D"
        },
        {
          id: "right-or-liberty",
          sol: "GOVT.11.a",
          stem: "The Loving case involved both civil rights and civil liberties because the law —",
          choices: [
            { letter: "A", text: "denied the couple a jury trial and the right to vote" },
            { letter: "B", text: "was passed by Congress and then enforced by the federal courts" },
            { letter: "C", text: "classified people by race and limited a personal freedom" },
            { letter: "D", text: "restricted speech and the free exercise of religion" }
          ],
          correct: "C"
        },
        {
          id: "warren",
          sol: "GOVT.11.e",
          stem: "In sentence 7, Warren's words emphasize that —",
          choices: [
            { letter: "A", text: "the choice of a spouse belongs to the person, not the state" },
            { letter: "B", text: "each state may set its own rules about marriage between races" },
            { letter: "C", text: "Congress must pass a law before couples may marry" },
            { letter: "D", text: "marriage is a duty citizens owe the government" }
          ],
          correct: "A"
        },
        {
          id: "sequence",
          sol: "GOVT.11.f",
          stem: "Which event described in the passage happened FIRST?",
          choices: [
            { letter: "A", text: "The Lovings were arrested in Caroline County." },
            { letter: "B", text: "The Supreme Court decided Loving v. Virginia." },
            { letter: "C", text: "The Fourteenth Amendment was ratified." },
            { letter: "D", text: "Laws in fifteen other states were struck down." }
          ],
          correct: "C"
        },
        {
          id: "state-limit",
          sol: "GOVT.11.d",
          stem: "Sentence 6 differs from the First Amendment because its words —",
          choices: [
            { letter: "A", text: "apply only to members of Congress" },
            { letter: "B", text: "directly limit the actions of state governments" },
            { letter: "C", text: "were first written by the Virginia General Assembly" },
            { letter: "D", text: "protect only citizens born before 1868" }
          ],
          correct: "B"
        }
      ]
    },
    {
      id: "rgts-liberty-and-security",
      family: "RGTS",
      title: "Liberty and security",
      kind: "Civil Liberties & Civil Rights · GOVT.11",
      blurb: "A Virginia founding principle, two viewpoints and two cases.",
      level: 3,
      passage: "<blockquote><p>" + N(1) + "That the freedom of the press is one of the great bulwarks of liberty, and can never be restrained but by despotic governments.</p></blockquote>" +
        "<p class=\"src\">— George Mason, Virginia Declaration of Rights, 1776</p>" +
        "<p>" + N(2) + "In 1971 the Nixon administration asked the courts to stop newspapers from printing the Pentagon Papers, a secret study of the Vietnam War. " + N(3) + "In New York Times Co. v. United States, the Supreme Court refused, ruling that the government had not justified such <strong>prior restraint</strong>, or censorship before publication. " + N(4) + "In wartime the Court has not always sided with liberty: in Korematsu v. United States (1944), it upheld the forced removal of Japanese Americans from the West Coast, a decision Congress later apologized for in the Civil Liberties Act of 1988.</p>" +
        "<p><strong>Viewpoint 1:</strong> " + N(5) + "After the attacks of September 11, 2001, the government needed broader power to track terrorists, and laws like the USA PATRIOT Act provided it.</p>" +
        "<p><strong>Viewpoint 2:</strong> " + N(6) + "Wider surveillance powers risk intruding on the privacy of innocent people, so courts and Congress must keep watch over how they are used.</p>" +
        "<p>(The two viewpoints are summaries of common arguments, not quotations.)</p>",
      claims: [
        {
          id: "prior-restraint",
          sol: "GOVT.11.b",
          stem: "In sentence 3, prior restraint means —",
          choices: [
            { letter: "A", text: "punishing a newspaper after a story has already been printed" },
            { letter: "B", text: "government blocking material before it is published" },
            { letter: "C", text: "a reporter's refusal to name a source" },
            { letter: "D", text: "an editor's choice not to print a story" }
          ],
          correct: "B"
        },
        {
          id: "mason",
          sol: "GOVT.11.b",
          stem: "George Mason, the author of sentence 1, would most likely have agreed with the ruling in —",
          choices: [
            { letter: "A", text: "the Pentagon Papers case (1971)" },
            { letter: "B", text: "Korematsu v. United States (1944)" },
            { letter: "C", text: "Schenck v. United States (1919)" },
            { letter: "D", text: "Barron v. Baltimore (1833)" }
          ],
          correct: "A"
        },
        {
          id: "viewpoints",
          sol: "GOVT.11.e",
          stem: "Viewpoint 1 and Viewpoint 2 disagree mainly about how to balance —",
          choices: [
            { letter: "A", text: "state power and national power over elections" },
            { letter: "B", text: "freedom of religion and freedom of speech" },
            { letter: "C", text: "public safety and individual privacy" },
            { letter: "D", text: "the powers of the president and the courts in trade" }
          ],
          correct: "C"
        },
        {
          id: "korematsu",
          sol: "GOVT.11.e",
          stem: "Which conclusion is best supported by sentence 4?",
          choices: [
            { letter: "A", text: "The Court has never upheld limits on liberty during wartime." },
            { letter: "B", text: "Congress has no role in protecting civil liberties." },
            { letter: "C", text: "Japanese Americans were removed only after being convicted in court." },
            { letter: "D", text: "Wartime fears have led to policies later seen as unjust." }
          ],
          correct: "D"
        },
        {
          id: "check",
          sol: "GOVT.11.f",
          stem: "Viewpoint 2 suggests that civil liberties are protected mainly by —",
          choices: [
            { letter: "A", text: "the oversight of courts and Congress" },
            { letter: "B", text: "the decisions of private companies" },
            { letter: "C", text: "the goodwill of government agencies alone" },
            { letter: "D", text: "the votes of the United Nations" }
          ],
          correct: "A"
        },
        {
          id: "searches",
          sol: "GOVT.11.c",
          stem: "Supporters of Viewpoint 2 would most likely cite which amendment to defend their concern about surveillance?",
          choices: [
            { letter: "A", text: "the Second Amendment" },
            { letter: "B", text: "the Third Amendment" },
            { letter: "C", text: "the Tenth Amendment" },
            { letter: "D", text: "the Fourth Amendment" }
          ],
          correct: "D"
        }
      ]
    }
  ];

  for (var i = 0; i < PACKS.length; i++) P.push(PACKS[i]);
})(typeof window !== "undefined" ? window : global);
