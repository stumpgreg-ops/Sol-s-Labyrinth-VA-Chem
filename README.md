# SOL Lab — Virginia EOC Chemistry

The SOL Labyrinth maze-chase engine rebuilt for the **Virginia End-of-Course Chemistry SOL**. 100 levels. Solo Chromebook play.

**Theme (Norse × SOL):** You are **Sol**, the Norse sun goddess, collecting letter slips in a Pac-like school labyrinth. Ravenous wolves — **Hati** — patrol the corridors. Read the lab notes and the question in the side panel, grab the **correct** letter to summon Sol's **CHARIOT** and smash Hati by contact (they return from the Wolf Pen). A wrong letter sets off the alarm and costs a life. Fruit = coins. Ice = brief escape freeze. **Only one power/effect active at a time.** Every fifth level won earns a piece for the student's own Town or Castle, and coins buy more in the shop.

Play: `index.html`. Teacher monitor: `admin.html` (PIN lock; FERPA nicknames only).

Progress saves in this browser profile (`afterHours.v1.night`). Itch login does not store progress.

## Chemistry 1.4.1 (2026-10-08) — teacher screen update (SOL Labyrinth v5.16.1–v5.17.1)

- **Standards report, Class total first.** The report opens on a Class total page: every student's answers added together, standard by standard, with the class's % right and a bar, how many students are at 80%+, 60–79% and below 60% on it, the units in total, and the weakest key concepts to reteach first (ordered by standard or weakest first). Student by student is the second page. The standards CSV starts with the class total.
- **Key concepts nested under their standard.** `js/standards-chm.js` holds the five Chemistry standards and their 36 lettered key concepts (the same shape as SOL Labyrinth's `standards-va.js`), so the report shows CH.4 with CH.4.a–d under it, each with its wording. The Chemistry SOL has no lower-/higher-order (LOTS/HOTS) split, so no level badges or totals appear. The standard statements are paraphrased from the 2010 Chemistry SOL and belong with the rest of the standards text to be checked against the VDOE document.
- **Teacher screen order:** box 1 Scoring criteria (open by default), box 2 Add the codes, box 3 Your class. "Finish this grading round" is now **Submit codes** and the undo is "Undo: return to the previous codes"; the READ ME in the Canvas zips follows.
- The progress record takes a question's skill tag when one exists (`claim.sub`) and otherwise its standard (`claim.sol`); Chemistry questions name the key concept in `sol`, so nothing changes in the codes.
- Not carried over: the Reading game's 2024 standards table, the skill tags on its 10,562 questions and the validator rule that requires them.

## Chemistry 1.4.0 (2026-10-07) — engine update to SOL Labyrinth v5.16.0

The browser game, the Apps Script build and the Canvas build are on the SOL Labyrinth v5.16.0 engine (everything the SOL Labyrinth session shipped from v5.8.2 to v5.16.0 that is not Odyssey-only). The question bank is unchanged.

- **Pick a game mode** after the unit: Mixed (the full campaign), the Labyrinth on every level, or one shooter on every level. Each mode keeps its own level, so a student can be on level 40 in Eagle Swoop and level 12 in the maze.
- **Every mode gets harder at every level** (one difficulty curve per mode). Rune Rocks follows Asteroids: a new wave of big rocks with each question and dark-elf saucers; the beam stays locked on the rock it is pulling. Wolf Ring starts with four wolves. Eagle Swoop's beam captures Sol Galaga-style: a caught Sol rides the eagle back to the formation, the next arrow frees him, and two Sols shoot two arrows at a time; the capture costs a life only if he is still held when the question is answered.
- **Clear the field.** In Eagle Swoop and Root Worms the last answer no longer wins the level: a banner counts the birds or worm segments left, letters fall away, and the last kill wins. Root Worms also got the SOL Labyrinth session's fixes (off-edge worm pieces walk onto the field, a bite never eats a glowing segment, arrows cannot skip a mushroom on a slow frame, missing letters are re-laid).
- **Submit my progress.** Nothing leaves the Chromebook, so a student copies a progress code (`SOL3-CHM-…`) from the title screen or the end of a level and turns it in to a Canvas assignment. The code carries days and minutes played, levels, questions, every CH standard practiced (answered / right on the first try), each mode's levels, streaks, badges, and the restore part: the level of every mode, the Fangs and the town or castle. **Restore my progress** on the title screen brings all of it back on a new Chromebook. Chemistry codes have their own tag and secret, so they never read as the Reading game's and the Reading game's never read as Chemistry's.
- **Badges (82):** 47 general ones (questions, standards, streaks, perfect levels, days, time, Fangs, town, treasure, and one pair per Chemistry unit in place of the Reading game's strand badges) plus five per game mode. A pop-up when one is earned; My badges on the title screen is the gallery.
- **Teacher screen inside the game.** Type the word `teacher` in the nickname box on the title screen and say yes: a hidden Teacher link appears on that computer only. The teacher screen reads the Canvas "Download Submissions" zip (or pasted codes), suggests a participation grade from the teacher's goals, grades only the work since the last grading round, reads the gradebook export as the class list (real names, who has not turned in, a Canvas gradebook import file), and shows a leaderboard and a **standards report** by CH key concept (CH.1.a … CH.5.g) with its own CSV. The same page is `teacher/CHM.html` in the game and `SOLLab-VA-Chem-Teacher.html` in each Canvas zip (`tools/build-teacher.js CHM`).
- **Canvas: an update zip.** `node tools/build-canvas.js` now writes `dist/canvas/SOL Lab VA Chem.zip` (first-time setup) and `SOL Lab VA Chem update.zip` (the `.js` files only: upload them to the folder that already holds `SOLLab-VA-Chem.html` and choose Replace; the starter page, the embed code and every student's progress stay). Each zip carries a READ ME with the Canvas steps, the embed code and the grading steps.
- Tests: `node tools/smoke.js` (151 checks), `node tools/smoke-progress.js` (85: the record, the window, the code, restore, badges, the teacher screen and page), `node tools/smoke-canvas.js` (20, with restore and the Teacher screen inside Canvas) and `node tools/smoke-appsscript.js` (21). All pass.
- Not carried over: the Odyssey build and its five modes, and the Reading question expansion.

## Chemistry 1.3.0 (2026-10-03) — Root Worms, and Eagle Swoop's rows of birds

- **A fifth shooter: Root Worms (centipede style).** Nidhogg's worms wind down a mushroom field from the top, row by row, turning and dropping a row at every mushroom they meet. A few segments glow with a letter; shooting the right one answers. Shooting a plain segment breaks the worm in two and leaves a mushroom where it was; arrows chip away mushrooms (three hits). Sol walks the clearing at the bottom with one arrow in the air at a time. A worm reaching Sol bites. Realm by realm it adds Centipede's cast in Norse dress: a **wolf** that zig-zags through the clearing eating mushrooms (the spider), **ravens** that drop straight down planting mushrooms and take two arrows (the flea), a **wisp** that poisons mushrooms so a worm that meets one plunges straight down (the scorpion), then two and three worms, an iron-helmed lead worm, longer and faster worms, tougher mushrooms.
- **Five shooters in four slots.** The even levels of a realm (2, 4, 6, 8) still hold the shooters; the order turns one place every realm, so each mode comes round in four realms out of five. Realm 1 keeps the old order (Eagle Swoop, Rune Rocks, Sun Chariot, Wolf Ring); realm 2 runs Rune Rocks, Sun Chariot, Wolf Ring, Root Worms; and so on. When a mode has sat a realm out, its intro card lists what came in while it was away as well as what is new this time.
- **Eagle Swoop: the rows never refill.** A bird shot down stays down until the next question's wave, so the rows thin out as the student clears them (the two guard ravens under each eagle still fly back, as before).
- **Eagle Swoop: rows of different birds, Galaga style.** Each row is one kind of bird with its own trick, and the card lists the birds of the wave: **ravens** (plain divers), **magpies** from realm 2 (fast, zig-zag on the dive), **hawks** from realm 3 (two arrows; steer at Sol in mid-dive; no poo), **owls** from realm 5 (drop a spread of three), **falcons** from realm 7 (the fastest; dive straight at Sol and correct their aim). Ragnarok mixes every bird through the rows.
- `tools/smoke.js`: 117 checks, including the new rotation, the bird rows and no-refill rule, and Root Worms at levels 18 and 92.

## Engine update to SOL Labyrinth v5.8.0 (Chemistry 1.2.0, 2026-10-02)

The browser (HTML) game is now on the SOL Labyrinth v5.8.0 engine. Everything the SOL Labyrinth session shipped between v5.7.1 and v5.8.0 is in this build, with the Chemistry bank unchanged:

- **Shooters climb every realm** (v5.7.5–v5.7.9). Each shooter adds something every time it comes round, and its intro card names the new twist: Eagle Swoop (no shots until the flock forms, birds always diving, guard ravens, bird poo, iron helms, storm clouds), Rune Rocks (comets, iron rocks, guard stones, a valkyrie, rock showers), Sun Chariot (letter orbs inside turning shields with one gap, feathers, sparks, guard ravens; two horses pull the chariot), Wolf Ring (runestones rise one or two at a time after the wolves attack; packs, alpha wolf, poo ravens, sliding stones, quiver, leaping wolves).
- **Rune Rocks beam card** (v5.7.3–v5.7.4): a one-card "how to pull a rock in" pop-up after the lab-notes pop-up, shown until the student has pulled a rock in on that Chromebook. The left mouse button fires, the right button holds the beam; clicking never steers the ship or flies the chariot.
- **Fenrir hunts** (v5.7.6): the boss stalks Sol through the maze, charges every 10 s (sooner as chains break) and comes for her when she picks up a right letter. Beating him pays 100 coins + 25 per realm, **Fenrir's Fang** (+1 coin on every answer for good, shown on the win screen) and the realm's **monument**, one of ten castle pieces never sold or offered as rewards.
- **Chariot ride** (v5.7.9): the maze CHARIOT power shows Sol riding the horse team. Wrong-letter banner and the end screen name the letter picked and the one the key wanted, so a teacher checking a question sees at once what the game expected.
- **Town builder fixes** (v5.7.9): the view holds still while dragging, the dropped piece stays put, Turn mirrors a town picture.
- **Picker** (v5.7.2): late in the campaign, when few unused stimuli of the right length are left, the game asks again from right-length items not seen in the last 20 questions instead of dropping to a short one.
- **Class sessions** (v5.8.0): `js/classes.js` is loaded so a `?class=CODE` link can play a teacher's class settings (one unit, hidden or reworded questions, the class's own question sets). The plain link ignores it. The teacher page and the class store live in the SOL Labyrinth Google Apps Script build and are **not** part of this HTML build; nothing changes for a student opening `index.html`.
- Not carried over: the Reading question-list Word files under `docs/questions/`. The Chemistry equivalents are `tools/export-questions.js` and `tools/simulate-student.js`.

## Google Apps Script version (for schools that block github.io)

School filters often block github.io and itch.io but allow script.google.com. The Apps Script version is one small file, `appsscript/Code.gs`: the teacher pastes it into an Apps Script project and deploys it as a web app. The script runs on Google's servers, fetches the game bundle from this repository (`appsscript/manifest.json` and the `sol-*.bin` parts, read through raw.githubusercontent.com, with GitHub Pages as the fallback) and hands it to the Chromebook, which keeps it in IndexedDB so each student downloads it once per version. No music in this version (the 3D castle stays).

Set up once:

1. Open https://script.google.com → **New project**. Delete what is in `Code.gs`, paste the whole of `appsscript/Code.gs`, click **Save**.
2. **Deploy → New deployment → gear icon → Web app.** Execute as: **Me**. Who has access: **Anyone** (or Anyone in your school's domain). Click **Deploy**, then **Authorize access** and allow it (it needs "connect to an external service").
3. Copy the **Web app URL** (ends in `/exec`). That is the game link. In Google Sites: Insert → Embed → By URL → paste it → Insert, then drag the frame bigger.

Teacher page and classes (v5.8.0): the game link with `?admin=1` on the end opens a PIN-locked teacher page (choose the PIN the first time). There a teacher makes **classes**: pick a unit (or Full review), write the class's own **question sets** (lab notes plus 4-choice questions, each tagged with its CH standard), and **hide or reword** any regular question for that class only. A class's link is the game link with `?class=CODE` on the end; it asks each student once for a nickname and shows the teacher each student's highest level, right and wrong counts and current level. Everything is stored inside the Apps Script project; nothing is written to Google Drive. The plain link always plays the untouched core game.

## Canvas version (nothing hosted outside the school)

For a course in Canvas, where nothing may load from GitHub or any other outside site: `node tools/build-canvas.js` (after `node tools/build-appsscript.js`) writes `dist/canvas/VA-Chem/` and the same files zipped as `dist/canvas/SOLLab-VA-Chem-Canvas.zip` (about 5 MB). It is the SOL Labyrinth v5.8.2 Canvas build for the Chemistry game:

- `SOLLab-VA-Chem.html`: the starter page (3 KB), the loading screen and one `<script src>`. Canvas runs the scripts of a small uploaded page but not of a big one, and a small page can read files next to it in its folder.
- `SOLLab-VA-Chem-game.js`: the loader, the manifest and the list of data files.
- `SOLLab-VA-Chem-data-01.js` … `-09.js`: the gzip bundle (no music, 3D castle kept) as base64, 576 KB per file. Each file calls `solPart(i, hash, base64)`, and a file from another version is refused.

In Canvas:

1. Upload the zip to one folder in **Files** and let Canvas expand it (or upload the eleven files into one folder).
2. Embed the starter page in a Page: `<iframe src="/courses/<course>/files/<file id of SOLLab-VA-Chem.html>/preview" width="100%" height="700" allowfullscreen></iframe>`.
3. `tools/canvas-check.html` is a tiny page that says whether a given spot in Canvas runs a page's code and can save; upload and embed it the same way if the game sticks on its loading screen.

Saves live with the starter page's address under the prefix `solReading.va-chem:`, so an update that replaces only the `.js` files keeps every student's progress, and the Reading game's Canvas build (`solReading.va:`) on the same Canvas never shares saves with it. A missing or renamed data file is named on screen. Class sessions (the Apps Script teacher page) need the Apps Script server and are not in the Canvas files; the progress-code Teacher screen (1.4.0) is.

Smaller bundle (both versions, v5.8.1): castle models that differ only by colour are stored as deltas of one model, and PNGs travel as lossless WebP when smaller (`tools/webp-cache.py`, needs Pillow; without it PNGs stay PNG). The Apps Script download went from 8.5 MB to 5.0 MB.

Test: `node tools/smoke-canvas.js` serves the files from a Canvas-like folder path and embeds the starter page in a "course page" on another origin; it checks that the page reads only its own files, that a level starts and the castle draws in 3D, that saves carry the prefix and another game's saves stay untouched, and that a missing data file is named.

Rebuilding after a content or engine change: `node tools/build-appsscript.js` rewrites `appsscript/` (parts, manifest, loader.html, Code.gs) for the current branch; commit and push it, and every deployed script picks up the new version on the next load (nothing to redeploy). `node tools/smoke-appsscript.js` checks the build headlessly through a local stand-in for Apps Script (`appsscript/test.html`).

## Engine update to SOL Labyrinth v5.7.1 (Chemistry 1.1.0, 2026-09-28)

Everything the SOL Labyrinth session shipped between v5.2 and v5.7.1 is in this build, on top of the Chemistry bank:

- **Nine realms and Ragnarok** (v5.6). Every ten levels is a realm with its own colours, wall dressing, music and creature: ravens that call the wolves (Niflheim), trolls, fire vents, the serpent, golden boars, wisps, draugr that only move when Sol looks away, valkyries; Ragnarok mixes them. Every tenth level is a **Fenrir boss level**: the great wolf chains the gate with one chain per question, a banked answer breaks a chain, a wrong letter sets him off. Castle buildings on the student's field grant **perks** in the maze (Blessing 1UP, Castle guard, Rune of Sol, Swift feet, Trade).
- **Shooter levels** (v5.7 / v5.7.1) on levels 2, 4, 6 and 8 of each realm: Eagle Swoop (Galaga style), Rune Rocks (Asteroids style), Sun Chariot (side-scrolling flyer) and Wolf Ring. Same question, same lab notes in the side panel, same lives and coins; only the playfield changes. Mouse buttons shoot without moving Sol.
- **Castle in 3D** (v5.3–v5.5): KayKit Medieval Hexagon pieces drawn from their glTF models with three.js, so every piece turns with the map by the degree; walls, gates, hedges and fences drawn as geometry.
- **Logo and version label** (v5.4.1, v5.5.1) on the title screen; the Sol's Labyrinth favicon.
- **One game, locked to Virginia.** `index.html` sets `window.SOL_STATE = "VA"` before any script, the v5.2 locked-state path hides the state gateway for good, and the Chemistry units are the only cards. The New Jersey / Virginia two-build tooling (`tools/build-games.js`, `tools/publish-pages.sh`) is not carried over; `sh tools/make-itch-zip.sh` still builds the single upload.
- `tools/export-questions.js` writes the whole bank as one HTML document (unit → level → pack → questions with keys) for teacher review: `node tools/export-questions.js > questions.html`.

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
- Engine, maze, wolves, traps, music, coins, shop, Town & Castle builder, teacher monitor, adaptive picker and stamina schedule: from the Biology build (SOL Lab v6.0) and SOL Labyrinth v5.1.1, updated to v5.7.1 and then v5.8.0 above.

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
