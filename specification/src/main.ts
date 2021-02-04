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

console.log('Done!')
