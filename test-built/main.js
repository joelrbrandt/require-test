require.config({
    paths: {
        "lib" : "../build/lib-built",
    }
});

define(function (require) {
    "use strict";

    var lib = require("lib");
    lib.addThenMult(2,3,4).then(alert);

});