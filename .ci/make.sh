#!/usr/bin/env bash
# ------------------------------------------------------- #
#
# Build entry script for elasticsearch-specification
#
# Must be called: ./.ci/make.sh <target> <params>
#
# Version: 1.1.0
#
# Targets:
# ---------------------------
# bump     <VERSION> : bump client internals to version
# ------------------------------------------------------- #

# ------------------------------------------------------- #
# Bootstrap
# ------------------------------------------------------- #
script_path=$(dirname "$(realpath -s "$0")")
repo=$(realpath "$script_path/../")

# shellcheck disable=SC1090
CMD=$1
VERSION=$2
set -euo pipefail

product="elastic/elasticsearch-specification"
case $CMD in
  bump)
    if [ -v $VERSION ]; then
      echo -e "\033[31;1mTARGET: bump -> missing version parameter\033[0m"
      exit 1
    fi
    echo -e "\033[36;1mTARGET: bump to version $VERSION\033[0m"
    TASK=bump
    # VERSION is BRANCH here for now
    TASK_ARGS=("$VERSION")
    ;;
esac

# ------------------------------------------------------- #
# Build Container
# ------------------------------------------------------- #

echo -e "\033[34;1mINFO: building $product container\033[0m"
docker build -t ${product} ./.ci

# ------------------------------------------------------- #
# Run the Container
# ------------------------------------------------------- #

echo -e "\033[34;1mINFO: running $product container\033[0m"

docker run \
       --env "VERSION=${VERSION}" \
       --volume "${repo}:/usr/src/app" \
       --rm \
       "${product}" \
       make $TASK
