#!/bin/sh
# History 1.0: validate, write the pages, and build the Canvas zips of the four history games.
#   sh tools/build-history.sh            (all four)    sh tools/build-history.sh WHI VUS   (some)
# Writes WHI.html … and teacher/<ID>.html (commit them) and dist/canvas/SOL Lab VA <ID>.zip (+ update zip).
set -e
cd "$(dirname "$0")/.."
COURSES="${*:-WHI WHII VUS GOVT}"
for C in $COURSES; do
  node tools/validate-content.js "$C" | tail -1
  node tools/make-course-pages.js "$C"
  node tools/build-appsscript.js "$C"
  node tools/build-canvas.js "$C"
done
