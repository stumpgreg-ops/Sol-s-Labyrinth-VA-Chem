# Writing question packs for SOL Lab — Virginia History & Social Science (WHI, WHII, VUS, GOVT)

The four history games use the same engine and the same pack format as the Chemistry game
(`tools/CONTENT-GUIDE.md`); only the units, the standards and the kind of stimulus change.
Each course lives in `courses/<ID>/`:

- `course.js` — the units (`families`), the standards map (the 2023 Virginia History and Social
  Science Standards of Learning, with every lettered key concept), the skill cards and the code tag.
- `units.json` — the pack files in load order, one per unit (`early.js`, `asia.js`, …).
- one pack file per unit. Each is an IIFE that pushes into the live `HEIST_PACKS` array:

```js
/* SOL Lab — World History I · Persia, Greece & Rome (WHI.4–5). Original text only. */
(function (global) {
  var P = global.HEIST_PACKS;
  if (!P || !P.push) return;
  var N = function (i) { return '<span class="n">(' + i + ')</span> '; };   // numbered sentence

  var PACKS = [
    { /* pack */ },
    ...
  ];

  for (var i = 0; i < PACKS.length; i++) P.push(PACKS[i]);
})(typeof window !== "undefined" ? window : global);
```

Validate with `node tools/validate-content.js courses/WHI/class.js` — it must print `OK — no errors`.
`node tools/validate-content.js WHI` checks the whole course and warns about any key concept with no item.
Fix warnings where you can (spread the answer keys, keep the correct choice from being the longest).

## Pack shape

```js
{
  id: "class-athens-assembly",       // unique in the course, lowercase, starts with the unit's file name
  family: "CLASS",                   // the unit id from course.js
  title: "A day in the Athenian Assembly",
  kind: "Persia, Greece & Rome · WHI.4",   // unit label · standard
  blurb: "One line shown on the pack card.",
  level: 2,                          // 1 easy · 2 medium · 3 hard (reading + reasoning load)
  passage: "<p>" + N(1) + "First sentence. " + N(2) + "Second sentence. ... </p>",
  claims: [
    {
      id: "direct",                  // unique within the pack
      sol: "WHI.4.c",                // standard and key-concept letter from course.js (lower-case letter)
      stem: "Which statement best describes democracy in Athens in the 400s B.C.?",
      choices: [
        { letter: "A", text: "..." },
        { letter: "B", text: "..." },
        { letter: "C", text: "..." },
        { letter: "D", text: "..." }
      ],
      correct: "B"                   // or ["A", "C"] for a Select TWO item (the stem must say "Select TWO")
    }
  ]
}
```

## The stimulus ("sources")

The Virginia history tests put a stimulus in front of many items: a short reading, a primary-source
excerpt, a timeline, a chart or table, a political cartoon or a map. The game shows it in the side panel.
Write it as HTML:

- `<p>` paragraphs, every sentence numbered with `N(i)` so stems can say "In sentence 3, …".
- Kinds of stimulus to mix in every unit:
  - **Secondary reading** — an original, textbook-style paragraph or two about the topic (your own words).
  - **Primary source** — a short excerpt of a public-domain document, set off with
    `<blockquote>` and a source line: `<p class="src">— Magna Carta, 1215 (translated)</p>`.
    Quote only text you are certain of, word for word (the Declaration of Independence, the
    Constitution, the Gettysburg Address, Magna Carta in a standard translation, Hammurabi's Code,
    Confucius's Analects, Pericles' Funeral Oration, Federalist No. 10, Supreme Court opinions …).
    When you are not certain of the exact words, write a faithful paraphrase and label it
    `(adapted)` or `(summary)`. **Never invent a quotation and attribute it to a real person.**
    Do not quote copyrighted modern texts at length (for example, King's speeches and letters, recent
    books): summarize them, or quote no more than a short well-known phrase.
  - **Timeline** — a `<ul>` of dated events: `<ul><li><strong>1517</strong> Luther posts the Ninety-five Theses</li>…</ul>`.
  - **Table or chart** — a real `<table>` (2–4 columns, 3–6 rows), for example population, trade
    goods, vote counts, the powers of each branch, a comparison of two empires. Describe a graph in
    words when the item needs its shape ("The line rises steadily from 1870 to 1900, then doubles by 1910").
  - **Map described in words** — "On the map, the Nile flows north from the highlands of East Africa to
    the Mediterranean; desert lies on both sides of a narrow green strip." No images.
  - **Cartoon or poster described in words** — "A cartoon from 1898 shows Uncle Sam …" (describe a
    realistic cartoon of the period; do not claim it is a specific real cartoon unless it is a famous
    one you can describe accurately, such as Franklin's "Join, or Die").
  - **Two sources** — two short excerpts or viewpoints to compare (Federalist vs. Anti-Federalist,
    Booker T. Washington vs. W.E.B. Du Bois, Hamilton vs. Jefferson).
- Bold key terms with `<strong>` (they feed the vocabulary-in-context items).
- No images, no links, no scripts.
- Word counts (excluding the sentence numbers) by tier; table cells and list items count too:

| tier   | levels  | words   | questions |
|--------|---------|---------|-----------|
| tiny   | 1–15    | 40–70   | 4–5       |
| short  | 16–40   | 70–110  | 5         |
| medium | 41–70   | 110–160 | 5–6       |
| long   | 71–100  | 160–220 | 6         |

The picker aims for a longer stimulus as levels go by, so **each unit file needs every tier**:
aim for 3 tiny, 3 short, 3 medium and 3 long packs (12 packs, about 60–70 questions per unit).

## Questions

- About half of a pack's items should need the stimulus (read the source, the table, the timeline);
  the rest test the standard's content knowledge the stimulus is about, as the real test does.
- Build in the 2023 **skills** (they are not a separate unit; tag the item with its content standard):
  sequencing and chronology, cause and effect, comparing and contrasting, using a map or geographic
  reasoning, reading a primary source (purpose, point of view, audience, bias), using evidence to
  support a conclusion, and economic decision-making (incentives, trade-offs, opportunity cost).
- Stem phrasing from the test: "Which statement best explains why…", "The main purpose of this
  document was to —", "Which conclusion is best supported by the table?", "Which event happened
  FIRST?", "Which of these was a result of…", "The author of this excerpt would most likely support —",
  "Which geographic feature most helped…", "In sentence 4, the word <term> most nearly means —",
  "Select TWO …". Stems that end in a dash have choices that complete the sentence (lower-case start).
- **Stems are plain text** (the game sets them with `textContent`): no HTML tags in stems. Use plain
  apostrophes and quotes; escape double quotes inside JS strings (`\"`). Use "B.C." and "A.D." as the
  Virginia standards do.
- **Choices**: four, similar in length and grammar; one clearly best answer. Distractors are real but
  wrong-for-this-question facts (the right era but the wrong empire, a true effect of a different
  cause, the reverse of the relationship, a common misconception). Never let the correct choice be the
  only one that repeats a phrase from the stem, or the only long and qualified one.
- **Spread the keys**: across a pack's items use each letter at least once, no letter more than twice.
- **Skills per pack** (6 items): mix at least three different key concepts, include at least one
  source/evidence item and one vocabulary-in-context item (a bold term from the stimulus).
- **Level tags**: spread levels in each file. Level 1 = one-step recall or a direct read of the
  stimulus; level 3 = inference across two sources, cause-and-effect chains, a Select TWO, or applying
  a principle to a new case.
- **Every key concept** of the unit's standards (every letter in course.js) appears in at least one
  item, and the main ones in three or more.

## Accuracy and tone

- **Facts must be textbook-correct**: names, dates, places, who-did-what, the content of documents,
  amendments and court cases. When a date is debated, use the one in standard high-school textbooks
  or avoid testing it. Use well-established facts, not trivia.
- Follow the standards' own emphasis and vocabulary (the course.js key concepts).
- **Original text only**: no copied test items or textbook passages. Primary sources must be
  public-domain and accurately quoted (or labeled adapted/summary).
- Treat slavery, genocide, the Holocaust, terrorism and other atrocities factually and respectfully,
  without graphic detail; name the victims and the perpetrators accurately.
- Political and contested topics (parties, court cases such as Roe and Dobbs, economic systems,
  social movements): describe what happened, what each side argued and what the law says, neutrally.
  The question tests knowledge, never an opinion.
- Religions: describe beliefs as their followers hold them ("Muslims believe…", "According to the
  Torah…"); never test a religious claim as historical fact.
- **Virginia where it fits** (VUS and GOVT especially): Jamestown, the House of Burgesses, Mason,
  Jefferson, Madison, Richmond, the Readjusters, Prince Edward County, the General Assembly.
