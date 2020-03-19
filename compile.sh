#!/bin/bash

babel node_modules/angular/angular.js --out-file dist/angular.min.js --source-maps --presets minify

npm run build;
