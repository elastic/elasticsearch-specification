"use strict";
var spec = require("./spec");
var typescript = require('ntypescript');
var _ = require('lodash');
var specification = new spec.Specification();
if (specification.domain_errors.length > 0)
    console.error("The specification contains the following type mapping errors:");
for (var _i = 0, _a = specification.domain_errors; _i < _a.length; _i++) {
    var e = _a[_i];
    console.error("  - " + e);
}
if (specification.endpoint_errors.length > 0)
    console.error("The specification contains the following endpoint mapping errors:");
for (var _b = 0, _c = specification.endpoint_errors; _b < _c.length; _b++) {
    var e = _c[_b];
    console.error("  - " + e);
}
if (specification.domain_errors.length + specification.endpoint_errors.length == 0)
    console.log("The specification contains no errors in any of the " + specification.endpoints.length + " endpoints");
