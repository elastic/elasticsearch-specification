"use strict";
var spec = require("./spec");
var typescript = require('ntypescript');
var _ = require('lodash');
var specification = new spec.Specification();
if (specification.errors.length > 0) {
    for (var _i = 0, _a = specification.errors; _i < _a.length; _i++) {
        var e = _a[_i];
        console.error(e);
    }
}
else {
    console.log("specification loaded with no errors");
}
