#!/usr/bin/env bash
set -euo pipefail

npm install --prefix compiler
npm install --prefix typescript-generator

npm run compile:specification --prefix specification
npm run generate-schema --prefix specification
npm run start --prefix typescript-generator

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



