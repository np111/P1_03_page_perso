#!/bin/bash
set -Eeuo pipefail

npm run build
git subtree push --prefix dist origin gh-pages
exit 0
