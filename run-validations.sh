#!/usr/bin/env bash

function require_stack_version() {
  if [[ -z $STACK_VERSION ]]; then
    echo -e "\033[31;1mERROR:\033[0m Required environment variable [STACK_VERSION] not set\033[0m"
    exit 1
  fi
}

require_stack_version

set -euo pipefail

npm install --prefix compiler
npm install --prefix typescript-generator

npm run compile:specification --prefix compiler
npm run generate-schema --prefix compiler
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
STACK_VERSION=${STACK_VERSION} ./run-validations.sh $@



