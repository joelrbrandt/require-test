require.config({
    packages : [{ name: "lib", location: "../src", main: "lib" }],
    paths: {
        "bluebird" : "../bower_components/bluebird/js/browser/bluebird",
    }
});

define(function (require) {
    "use strict";

    var lib = require("lib");
    lib.addThenMult(2,3,4).then(alert);

});