require.config({
    packages : [{ name: "lib", location: "../src", main: "lib" }],
    paths: {
        "bluebird" : "../bower_components/bluebird/js/browser/bluebird",
        "jquery" : "../bower_components/jquery/dist/jquery.min"
    }
});

define(function (require) {
    "use strict";

    var lib = require("lib"),
    	$ = require("jquery");

    lib.addThenMult(2,3,4).then(function (answer) {
    	$(".answer-text").text(answer);
    });

});