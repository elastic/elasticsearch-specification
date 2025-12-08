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

import * as model from '../model/metamodel'

/**
 * Populates the `deprecation` field for endpoints from the value of the corresponding request definition.
 */
export default async function addContentType (model: model.Model): Promise<model.Model> {
  for (const endpoint of model.endpoints) {
    if (endpoint.deprecation != null) {
      continue
    }

    if (endpoint.request == null) {
      continue
    }

    const request = model.types.find(x => x.kind === 'request' && x.name === endpoint.request)
    if (request == null) {
      continue
    }

    if (request.deprecation == null) {
      continue
    }

    endpoint.deprecation = request.deprecation
  }

  return model
}
