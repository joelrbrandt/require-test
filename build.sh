#! /bin/bash

r.js -o name=lib baseUrl=src out=build/lib-built.js paths.bluebird=../bower_components/bluebird/js/browser/bluebird optimize=none
