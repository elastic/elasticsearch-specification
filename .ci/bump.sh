#!/bin/bash

if [[ -z $VERSION ]]; then
  echo "Required environment variable VERSION not set"
  exit 1;
fi

# If VERSION is x.y.z, set it to x.y
if [[ ${VERSION} =~ [0-9]+\.[0-9]+\.[0-9]+ ]]; then
  VERSION=${VERSION%.*}
fi
sed -i "s/\([0-9.]\+\)\(-SNAPSHOT\)/$VERSION\2/" .github/workflows/validate-pr.yml
