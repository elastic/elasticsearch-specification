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
import { JsonSpec } from '../model/json-spec'

/**
 * Removes incomplete endpoints from the model (missing request or response).
 *
 * This filter should be removed once the API model is complete.
 */
export default async function removeIncompleteEndpoints (apiModel: model.Model, jsonSpec: Map<string, JsonSpec>): Promise<model.Model> {
  const initialLength = apiModel.endpoints.length

  apiModel.endpoints = apiModel.endpoints.filter(endpoint => endpoint.request !== null && endpoint.response !== null)

  if (apiModel.endpoints.length !== initialLength) {
    console.info(`${initialLength - apiModel.endpoints.length} endpoints removed because of missing request or response`)
  }

  return apiModel
}
