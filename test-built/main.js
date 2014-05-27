require.config({
    paths: {
        "lib" : "../build/lib-built",
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