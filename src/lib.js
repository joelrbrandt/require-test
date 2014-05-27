define(function (require, exports, module) {
    "use strict";

    Promise = require("bluebird");

    var a = require("./sub/a"),
        b = require("./sub/b");

    exports.addThenMult = function (x, y, z) {
        return new Promise(function(resolve) {
            resolve(b.multiply(a.add(x, y), a.add(y, z)));
        });
    };

});