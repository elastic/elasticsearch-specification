import { Specification } from './api-specification'

const specification = Specification.loadWithValidation()

const api = specification.endpoints.find(e => e.name === 'index')
const response = specification.typeLookup[api.typeMapping.response]
// const searchResponse = specification.typeLookup[searchAPI.typeMapping.responseBody];
// const searchResponse = specification.typeLookup[searchAPI.typeMapping.responseQuery];
// const searchResponse = specification.typeLookup[searchAPI.typeMapping.responsePath];
// console.log(searchAPI)
// @ts-ignore
console.log(response)
// console.log(specification.typeLookup)
/* console.log()
console.log(searchRequest)
console.log()
console.log(searchResponse) */
// @ts-ignore
/* for (const prop of searchRequest.properties) {
  console.log(prop)
} */
/* for (const t in specification.typeLookup) {
  // @ts-ignore
  if (t === 'Indices') console.log(specification.typeLookup[t]
} */
/* for (const t of specification.types) {
  if (t.name === 'SearchRequest') {
    console.log(t)
  }
} */
