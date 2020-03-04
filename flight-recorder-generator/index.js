"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const api_specification_1 = require("../specification/src/api-specification");
const flight_recorder_json_generator_1 = require("./flight-recorder-json-generator");
const specification = api_specification_1.Specification.load();
if (specification.endpoint_errors.length > 0)
    console.error("The specification contains the following endpoint mapping errors:");
for (const e of specification.endpoint_errors)
    console.error("  - " + e);
if (specification.domain_errors.length + specification.endpoint_errors.length === 0)
    console.log("The specification contains no errors in any of the " +
        specification.endpoints.length + " endpoints yielding " + specification.types.length + " types");
console.log("The specification contains " + specification.endpoints.length + " endpoints yielding " + specification.types.length + " types");
const swaggerGenerator = new flight_recorder_json_generator_1.FlightRecorderJsonGenerator(specification);
swaggerGenerator.export("output");
//# sourceMappingURL=index.js.map