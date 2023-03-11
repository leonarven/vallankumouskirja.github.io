#!/bin/bash

set -e;

sed -i 's/ type="module"//g' docs/index.html;

mkdir -p docs/babelized/origs && cp docs/*.js docs/babelized/origs/.

./node_modules/.bin/babel docs/babelized/origs/* --out-dir docs/babelized && cp docs/babelized/*.js docs/.


# ./node_modules/.bin/webpack --mode production ./testi.js --output-filename testi_out.js -o testi_out && ./node_modules/.bin/babel testi_out/testi_out.js --out-dir docs/

