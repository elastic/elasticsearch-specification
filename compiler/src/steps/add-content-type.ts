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

import assert from 'assert'
import * as model from '../model/metamodel'
import { JsonSpec } from '../model/json-spec'

/**
 * Adds the `responseMediaType` (accept in the rest-api-spec)
 * and `responseMediaType` (content_type in the rest api spec)
 * fields to every endpoint from the rest-api-spec if present.
 */
export default async function addContentType (model: model.Model, jsonSpec: Map<string, JsonSpec>): Promise<model.Model> {
  for (const endpoint of model.endpoints) {
    const spec = jsonSpec.get(endpoint.name)
    assert(spec, `Can't find the json spec for ${endpoint.name}`)

    if (Array.isArray(spec.headers.accept)) {
      endpoint.responseMediaType = spec.headers.accept
    }

    if (Array.isArray(spec.headers.content_type)) {
      endpoint.requestMediaType = spec.headers.content_type
    }
  }

  return model
}
