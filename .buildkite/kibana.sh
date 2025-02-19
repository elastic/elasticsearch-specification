#!/usr/bin/env bash

set -euo pipefail

# Since we're into the current repo, move to the top-level
cd ..

echo "--- Clone elasticsearch-js"
git clone -v -- git@github.com:elastic/elasticsearch-js.git
pushd elasticsearch-js
git checkout $BUILDKITE_BRANCH
popd

echo "--- Clone Kibana"
git clone -v --reference /usr/local/git-references/git-github-com-elastic-kibana-git -- git@github.com:elastic/kibana.git
cd kibana

echo "--- Install Node.js and Yarn"
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash
set +e # https://github.com/nvm-sh/nvm/issues/3117
export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
set -e

nvm install
nvm use
npm install --global yarn

echo "--- Install elasticsearch-js"
pushd ../elasticsearch-js
npm install
npm run build
npm pack
popd
yarn add ../elasticsearch-js/elastic-elasticsearch-*.tgz

echo "--- Bootstrap Kibana"
git --no-pager diff
yarn kbn bootstrap --allow-root

echo "--- Check types"
node scripts/type_check.js
