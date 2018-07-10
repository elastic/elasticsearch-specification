"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Specification = require("../../specification/src/api-specification");
const swagger_generator_1 = require("./swagger-generator");
const specification = Specification.loadWithValidation();
if (specification.endpoint_errors.length > 0)
    console.error("The specification contains the following endpoint mapping errors:");
for (const e of specification.endpoint_errors)
    console.error("  - " + e);
if (specification.domain_errors.length + specification.endpoint_errors.length === 0) {
    console.log("The specification contains no errors in any of the " +
        specification.endpoints.length + " endpoints yielding " + specification.types.length + " types");
}
console.log("The specification contains " + specification.endpoints.length + " endpoints yielding " + specification.types.length + " types");
const swaggerGenerator = new swagger_generator_1.SwaggerGenerator(specification);
swaggerGenerator.export("../swagger-output");
//# sourceMappingURL=index.js.map