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

import {Specification} from "../../specification/src/api-specification";
import {SwaggerEndpointBuilder} from "./swagger-enpoint-builder";
import {SwaggerGenerator} from "./swagger-generator";
// tslint:disable:no-console

const specification = Specification.loadWithValidation();

if (specification.endpoint_errors.length > 0) console.error("The specification contains the following endpoint mapping errors:");

for (const e of specification.endpoint_errors) console.error("  - " + e);

if (specification.domain_errors.length +  specification.endpoint_errors.length === 0)
  console.log("The specification contains no errors in any of the " +
    specification.endpoints.length + " endpoints yielding " + specification.types.length + " types");

console.log("The specification contains " + specification.endpoints.length + " endpoints yielding " + specification.types.length + " types");

const swaggerGenerator = new SwaggerGenerator(specification);
swaggerGenerator.export("../swagger-output");
