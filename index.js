"use strict";

var foldl = require("fj-fold").foldl;



var _flatten = function (list) {
    return foldl([])(function (prev, curr) {
        return prev.concat(Array.isArray(curr) ? _flatten(curr) : curr);
    })(list);
};


module.exports = _flatten;