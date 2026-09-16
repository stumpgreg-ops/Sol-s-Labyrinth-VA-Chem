# SOL Lab — Virginia EOC Chemistry

The SOL Labyrinth maze-chase engine rebuilt for the **Virginia End-of-Course Chemistry SOL**. 100 levels. Solo Chromebook play.

**Theme (Norse × SOL):** You are **Sol**, the Norse sun goddess, collecting letter slips in a Pac-like school labyrinth. Ravenous wolves — **Hati** — patrol the corridors. Read the lab notes and the question in the side panel, grab the **correct** letter to summon Sol's **CHARIOT** and smash Hati by contact (they return from the Wolf Pen). A wrong letter sets off the alarm and costs a life. Fruit = coins. Ice = brief escape freeze. **Only one power/effect active at a time.** Every fifth level won earns a piece for the student's own Town or Castle, and coins buy more in the shop.

Play: `index.html`. Teacher monitor: `admin.html` (PIN lock; FERPA nicknames only).

Progress saves in this browser profile (`afterHours.v1.night`). Itch login does not store progress.

## What changed from SOL Labyrinth (Chemistry 1.0, 2026-09-16)

- **All English content removed.** The Reading packs (Virginia grades 9–11 and New Jersey grade 5), the grade cards and the state gateway are gone. Nothing from the Reading build's item bank remains.
- **One course, five units.** The title screen shows **Full review** plus one card per reporting category of the EOC Chemistry test blueprint:

  | card | standard | what it covers |
  |---|---|---|
  | Full review | CH.1–CH.5 | every unit mixed, leaning toward the standards the student misses most |
  | Scientific Investigation | CH.1 a–j | lab technique and safety, variables and repeated trials, data, error analysis, SI units, significant digits, dimensional analysis, defending a claim, current applications |
  | Atomic Structure & Periodic Relationships | CH.2 a–i | atomic number and mass, isotopes and half-life, subatomic particles, groups and periods, periodic trends, electron configurations and oxidation numbers, properties, atomic models |
  | Nomenclature, Formulas & Reactions | CH.3 a–f | naming, formulas, balancing, bonding, reaction types, rates and equilibrium |
  | Molar Relationships | CH.4 a–d | Avogadro's principle and molar volume, stoichiometry, solution concentration, acids and bases (electrolytes, dissociation, pH/pOH, titration) |
  | Phases of Matter & Kinetic Molecular Theory | CH.5 a–g | pressure, temperature and volume, gas laws and partial pressure, vapor pressure, phase changes, heats of fusion and vaporization, specific heat, colligative properties |

- **Skill screen = key concepts.** Each unit's skill cards are the lettered key concepts of its standard, grouped where the test treats them together (for Phases of Matter: Pressure, temperature & volume CH.5 a · Gas laws & partial pressure CH.5 b · Vapor pressure & phase changes CH.5 c·d · Heat CH.5 e·f · Colligative properties CH.5 g · All). Full review's skill cards are the five standards themselves. The filter matches on the question's `sol` code prefix; `HEIST_STRAND_ALIASES` in `js/content.js` lets one card keep several letters.
- **Lab notes instead of passages.** Every question pack is a short stimulus — a procedure, a data table, a set of equations, a model described in words — with 4–6 test-style items. Any molar mass, constant or formula an item needs is printed in the stimulus, the way the real test supplies a periodic table and formula sheet. The HUD reads `SOL · CH.4.b · Level 2`.
- **Item bank.** `js/content2.js`–`content6.js`, one file per unit, about 14 packs and 75–80 questions each. Every item is original and keyed to a CH.1–CH.5 key concept; numeric items were worked before the key was set, and the distractors are the results of the usual mistakes (no kelvin conversion, mass ratio for mole ratio, an inverted factor).
- Engine, maze, wolves, traps, music, coins, shop, Town & Castle builder, teacher monitor, adaptive picker and stamina schedule: unchanged from the Biology build (SOL Lab v6.0) and SOL Labyrinth v5.1.1.

## The standards this build reviews

The Chemistry SOL test is an end-of-course test whose blueprint groups the Chemistry Standards of Learning into five **reporting categories**, one per standard:

1. **Scientific Investigation** — CH.1
2. **Atomic Structure and Periodic Relationships** — CH.2
3. **Nomenclature, Chemical Formulas, and Reactions** — CH.3
4. **Molar Relationships** — CH.4
5. **Phases of Matter and Kinetic Molecular Theory** — CH.5

CH.6 (organic chemistry and biochemistry) is excluded from the test blueprint, so it has no unit here. Students take a periodic table and a formula sheet into the test; this build prints the needed values inside each stimulus instead.

The lettered key concepts in `js/content.js` (`HEIST_STANDARDS`) are the ones the Chemistry blueprint cites (the 2010 Chemistry standards, which the Chemistry test is still built on; the 2018 Chemistry standards reorganize the same content). They were written from memory of the published documents because the build environment could not reach the Virginia Department of Education site. **Check them against the two documents below before the first classroom run**, and if a letter differs, fix the map in `content.js` — the pack codes and skill cards follow it:

- Test blueprints: https://www.doe.virginia.gov/teaching-learning-assessment/student-assessment/virginia-sol-assessment-program/test-blueprints (Chemistry SOL Test)
- Science Standards of Learning and curriculum frameworks: https://www.doe.virginia.gov/teaching-learning-assessment/k-12-standards-instruction/science/standards-of-learning

## Files

- `js/content.js` — units (`HEIST_FAMILIES`), the standards map (`HEIST_STANDARDS`), the skill cards per unit (`HEIST_SKILLS`), the strand filter and its aliases, the difficulty estimate and the stamina schedule. No packs.
- `js/content2.js` Scientific Investigation (CH.1) · `content3.js` Atomic Structure & Periodic Relationships (CH.2) · `content4.js` Nomenclature, Formulas & Reactions (CH.3) · `content5.js` Molar Relationships (CH.4) · `content6.js` Phases of Matter & Kinetic Molecular Theory (CH.5).
- `tools/CONTENT-GUIDE.md` — pack format, the standards table, the molar-mass and constant values to use, subscript conventions and the writing rules. `node tools/validate-content.js` checks every file (codes, units, keys, lengths, duplicates); `node tools/validate-content.js js/content5.js` checks one.
- `tools/smoke.js` — headless Playwright run of the title screen, the pools, the builder, the shop and a level (screenshots in `tools/shots/`).
- `tools/make-itch-zip.sh` — builds the itch.io HTML5 upload (`sh tools/make-itch-zip.sh`): index.html at the zip root, under itch.io's 1,000-file limit. Upload it as an HTML project with "This file will be played in the browser" ticked.

## Engine history

The SOL Labyrinth changelog (v4 → v5.1.1: maze generator, Hati navigator, reading pop-up, coins, shop, Town & Castle builder, atlas sheets) lives in the SOL Labyrinth repository; the science rebuild (unit cards, lab-note stimuli, data tables, unit-pool picker) is described in the SOL Lab Biology repository. Credits for every third-party asset are in `CREDITS.md`.
