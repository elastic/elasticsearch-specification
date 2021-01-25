// tslint:disable:no-console
import { Specification } from './api-specification'

const specification = Specification.loadWithValidation()

const errorsLength = specification.domain_errors.length + specification.endpoint_errors.length

// const searchAPI = specification.endpoints.find(e => e.name === "search");
// const searchRequest = specification.typeLookup[searchAPI.typeMapping.request];
// const searchResponse = specification.typeLookup[searchAPI.typeMapping.response];

console.log(`
The specification contains
  - ${errorsLength} Errors
  - ${specification.endpoints.length} API Endpoints
  - ${specification.types.length} Types.
`)
for (const e of specification.endpoints) {
  const type = specification.typeLookup[e.typeMapping.request]
  // if (["IndexRequest", "SearchRequest"].includes(type.name))
  //  console.log(type);
}
for (const t of specification.types) {
  if (['CompositeBucket'].includes(t.name)) { console.dir(t, {depth: 20} ) }
}

console.log('Done!')
