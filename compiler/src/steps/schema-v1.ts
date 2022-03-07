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
import { writeFile } from 'fs/promises'
import { join } from 'path'
import stringify from 'safe-stable-stringify'
import { JsonSpec } from '../model/json-spec'

interface ResponseV1 extends model.BaseType {
  kind: 'response'
  generics?: model.TypeName[]
  inherits?: model.Inherits
  implements?: model.Inherits[]
  body: model.Body
  behaviors?: model.Inherits[]
  attachedBehaviors?: string[]
}

type TypeDefinitionV1 = model.Interface | model.Request | ResponseV1 | model.Enum | model.TypeAlias

interface ModelV1 {
  _info?: {
    title: string
    schemaVersion: number
    license: {
      name: string
      url: string
    }
  }

  types: TypeDefinitionV1[]
  endpoints: model.Endpoint[]
}

/**
 * Adds the `accept` and `contentType` fields to every endpoint
 * from the rest-api-spec if present.
 */
export default async function buildSchemaV1 (model: model.Model, jsonSpec: Map<string, JsonSpec>): Promise<model.Model> {
  const modelV1: ModelV1 = {
    _info: model._info,
    endpoints: model.endpoints,
    types: model.types.map(update)
  }

  if (modelV1._info != null) {
    modelV1._info.schemaVersion = 1
  }

  await writeFile(
    join(__dirname, '..', '..', '..', 'output', 'schema', 'schema.json'),
    stringify(modelV1, null, 2),
    'utf8'
  )
  return model
}

function update (type: model.TypeDefinition): TypeDefinitionV1 {
  if (type.kind !== 'response') return type
  const successResponse = type.responses.find(r => r.statusCodes.some(s => s.startsWith('2')))
  assert(successResponse != null, `Can't find successful response for ${type.name.namespace}`)
  const responseV1: ResponseV1 = JSON.parse(JSON.stringify(type))
  // @ts-expect-error
  delete responseV1.responses
  responseV1.body = successResponse.body
  return responseV1
}
