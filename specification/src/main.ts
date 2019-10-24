// tslint:disable:no-console
import {Specification} from "./api-specification";

const specification = Specification.loadWithValidation();

const errorsLength = specification.domain_errors.length + specification.endpoint_errors.length;

//const searchAPI = specification.endpoints.find(e => e.name === "search");
//const searchRequest = specification.typeLookup[searchAPI.typeMapping.request];
//const searchResponse = specification.typeLookup[searchAPI.typeMapping.response];

console.log(`
The specification contains
  - ${errorsLength} Errors
  - ${specification.endpoints.length} API Endpoints
  - ${specification.types.length} Types.
`);

console.log("Done!");
