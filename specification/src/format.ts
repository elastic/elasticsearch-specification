/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import { Specification } from './api-specification'

const specification = Specification.loadWithValidation()

const api = specification.endpoints.find(e => e.name === 'index')
const response = specification.typeLookup[api.typeMapping.response]
// const searchResponse = specification.typeLookup[searchAPI.typeMapping.responseBody];
// const searchResponse = specification.typeLookup[searchAPI.typeMapping.responseQuery];
// const searchResponse = specification.typeLookup[searchAPI.typeMapping.responsePath];
// console.log(searchAPI)
// @ts-expect-error
console.log(response)
// console.log(specification.typeLookup)
/* console.log()
console.log(searchRequest)
console.log()
console.log(searchResponse) */
// @ts-expect-error
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
