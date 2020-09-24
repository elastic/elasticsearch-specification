#!/usr/bin/env bash
set -euo pipefail

FAST=${FAST=false}

[[ "$FAST" != "false" ]] && npm install --prefix specification
[[ "$FAST" != "false" ]] && npm install --prefix typescript-generator

npm run compile:brain
npm run compile:specs
npm run compile:ts-validation

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



