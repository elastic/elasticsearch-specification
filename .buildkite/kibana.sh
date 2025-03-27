#!/usr/bin/env bash

set -euo pipefail

set -x
pwd
ls
ls .buildkite
set +x

# Since we're into the current repo, move to the top-level
cd ..

echo "--- Install dependencies"
lsb_release -a
apt-get update -y
apt-get install -y unzip

echo "--- Clone elasticsearch-js"
git clone -v -- git@github.com:elastic/elasticsearch-js.git

echo "--- Clone elastic-client-generator-js"
git clone -v -- git@github.com:elastic/elastic-client-generator-js.git
mkdir elastic-client-generator-js/output

echo "--- Clone Kibana"
git clone -v --reference /usr/local/git-references/git-github-com-elastic-kibana-git -- git@github.com:elastic/kibana.git
pushd kibana

echo "--- Checkout upgrade PR"
git fetch origin pull/213375/head:es-9.0.0-alpha.4
git checkout es-9.0.0-alpha.4
git config --global user.email "clients-team@elastic.co"
git config --global user.name "Clients CI"
set -x
pwd
ls
ls ..
ls ../kibana-type-checks
ls ../kibana-type-checks/.buildkite
set +x
git am ../kibana-type-checks/.buildkite/0001-Fix-require_alias-use.patch

echo "--- Install Node.js and Yarn"
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash
set +e # https://github.com/nvm-sh/nvm/issues/3117
export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
set -e

nvm install
nvm use
npm install --global yarn
popd

echo "--- Install elasticsearch-js"
pushd elasticsearch-js
npm install
node .buildkite/make.mjs --task codegen main
npm run build
npm pack
popd

pushd kibana
yarn add ../elasticsearch-js/elastic-elasticsearch-*.tgz

echo "--- Bootstrap Kibana"
git --no-pager diff
yarn kbn bootstrap --allow-root

echo "--- Check types"
node scripts/type_check.js
