#!/bin/bash

echo "" > dist/libs.js;

cat node_modules/angular/angular.min.js >> dist/libs.js;
cat node_modules/angular-ui-router/release/angular-ui-router.min.js >> dist/libs.js;

npm run build;
