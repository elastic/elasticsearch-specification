"use strict";
var ApiSpecification = require("./api-specification");
var _ = require('lodash');
var specification = ApiSpecification.loadWithValidation();
if (specification.endpoint_errors.length > 0)
    console.error("The specification contains the following endpoint mapping errors:");
for (var _i = 0, _a = specification.endpoint_errors; _i < _a.length; _i++) {
    var e = _a[_i];
    console.error("  - " + e);
}
if (specification.domain_errors.length + specification.endpoint_errors.length == 0)
    console.log("The specification contains no errors in any of the " + specification.endpoints.length + " endpoints yielding " + specification.types.length + " types");
