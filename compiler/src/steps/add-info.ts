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
 * Adds the `_info` field to the JSON model.
 */
export default async function addInfo (model: model.Model, jsonSpec: Map<string, JsonSpec>): Promise<model.Model> {
  model._info = {
    title: 'Elasticsearch Request & Response Specification',
    license: {
      name: 'Apache 2.0',
      url: 'https://github.com/elastic/elasticsearch-specification/blob/main/LICENSE'
    }
  }

  return model
}
