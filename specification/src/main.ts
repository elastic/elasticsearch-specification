// tslint:disable:no-console
import ApiSpecification = require("./api-specification");

console.log("start");

const specification = ApiSpecification.loadWithValidation();

if (specification.domain_errors.length +  specification.endpoint_errors.length === 0)
  console.log(
    "The specification contains no errors in any of the "
    + specification.endpoints.length
    + " endpoints yielding "
    + specification.types.length + " types");

else if (specification.endpoint_errors.length > 0)
  console.error("The specification contains the following endpoint mapping errors:");

for (const e of specification.endpoint_errors)
 console.error("  - " + e);
