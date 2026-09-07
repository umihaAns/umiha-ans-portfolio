#!/usr/bin/env bash
# Render cv.html to assets/Umiha-Ans-CV.pdf using headless Chrome.
# Run from the repo root:  bash tools/build-cv.sh
set -euo pipefail

CHROME="/c/Program Files/Google/Chrome/Application/chrome.exe"
[ -x "$CHROME" ] || CHROME="/c/Program Files (x86)/Microsoft/Edge/Application/msedge.exe"

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
OUT="$ROOT/assets/Umiha-Ans-CV.pdf"

"$CHROME" \
  --headless=new \
  --disable-gpu \
  --no-pdf-header-footer \
  --virtual-time-budget=10000 \
  --print-to-pdf="$(cygpath -w "$OUT" 2>/dev/null || echo "$OUT")" \
  "file:///$(echo "$ROOT/cv.html" | sed 's|^/\([a-z]\)/|\1:/|')" 2>/dev/null

echo "wrote $OUT ($(du -h "$OUT" | cut -f1))"
