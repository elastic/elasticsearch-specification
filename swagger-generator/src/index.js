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

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const api_specification_1 = require("../../specification/src/api-specification");
const swagger_generator_1 = require("./swagger-generator");
const specification = api_specification_1.Specification.loadWithValidation();
if (specification.endpoint_errors.length > 0)
    console.error("The specification contains the following endpoint mapping errors:");
for (const e of specification.endpoint_errors)
    console.error("  - " + e);
if (specification.domain_errors.length + specification.endpoint_errors.length === 0)
    console.log("The specification contains no errors in any of the " +
        specification.endpoints.length + " endpoints yielding " + specification.types.length + " types");
console.log("The specification contains " + specification.endpoints.length + " endpoints yielding " + specification.types.length + " types");
const swaggerGenerator = new swagger_generator_1.SwaggerGenerator(specification);
swaggerGenerator.export("../swagger-output");
//# sourceMappingURL=index.js.map