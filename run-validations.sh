#!/usr/bin/env bash
set -euo pipefail

npm install --prefix specification
npm install --prefix typescript-generator

npm run compile:brain
npm run compile:specs
npm run compile:ts-validation

# assumes the flight recorder is checked out next to generator
pushd ../clients-flight-recorder



