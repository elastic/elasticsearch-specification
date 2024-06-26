#!/usr/bin/env bash

# Check that source code files in this repo have the appropriate license
# header.

if [ "$TRACE" != "" ]; then
    export PS4='${BASH_SOURCE}:${LINENO}: ${FUNCNAME[0]:+${FUNCNAME[0]}(): }'
    set -o xtrace
fi
set -o errexit
set -o pipefail

TOP=$(cd "$(dirname "$0")/.." >/dev/null && pwd)
NLINES=$(wc -l .github/license-header.txt | awk '{print $1}')

function check_license_header {
    local f
    f=$1
    if ! diff .github/license-header.txt <(head -$NLINES "$f") >/dev/null; then
        echo "check-license-headers: error: '$f' does not have required license header, see 'diff -u .github/license-header.txt <(head -$NLINES $f)'"
        return 1
    else
        return 0
    fi
}


cd "$TOP"
nErrors=0
for f in $(git ls-files | grep -v compiler-wasm-lib/pkg | grep '\.ts$'); do
    if ! check_license_header $f; then
        nErrors=$((nErrors+1))
    fi
done

for f in $(git ls-files | grep -v compiler-wasm-lib/pkg |grep '\.js$'); do
    if ! check_license_header $f; then
        nErrors=$((nErrors+1))
    fi
done

if [[ $nErrors -eq 0 ]]; then
    exit 0
else
    exit 1
fi
