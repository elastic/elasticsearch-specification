#!/bin/bash

if [[ -z $VERSION ]]; then
  echo "Required environment variable VERSION not set"
  exit 1;
fi

# If VERSION is x.y.z, set it to x.y
if [[ ${VERSION} =~ [0-9]+\.[0-9]+\.[0-9]+ ]]; then
  VERSION=${VERSION%.*}
fi

sed -r -i "s/(SNAPSHOT_BRANCH:\s)([0-9.]+|main)/\1$VERSION/" .github/workflows/validate-pr.yml
