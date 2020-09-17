#!/usr/bin/env bash
set -euo pipefail

[ -z "$FAST" ] && npm install --prefix specification
[ -z "$FAST" ] && npm install --prefix typescript-generator

[ -z "$FAST" ] && npm run compile:brain
[ -z "$FAST" ] && npm run compile:specs
[ -z "$FAST" ] && npm run compile:ts-validation

recorderFolder="../clients-flight-recorder"
recorderScript="${recorderFolder}/run-validations.sh"
if [[ ! -f "${recorderScript}" ]]; then
  echo "Skipping running spec validation tests, not found: ${recorderScript}"
  exit
fi

# assumes the flight recorder is checked out next to generator
pushd "${recorderFolder}"
function finish { popd; }
trap finish EXIT
./run-validations.sh $@



