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

import { join } from 'path'
import test from 'ava'
import ExamplesProcessor from '../../src/steps/add-examples'
import * as model from '../../src/model/metamodel'

const specsFolder = join(__dirname, 'specification')

// A model with one endpoint whose response lives next to the examples folder in the fixture.
// The fixture has 200, 400 and 409 response example folders.
function buildModel (exceptions: model.ResponseException[]): model.Model {
  const name = { namespace: 'api', name: 'Response' }
  const response: model.Response = {
    kind: 'response',
    name,
    body: { kind: 'no_body' },
    exceptions,
    specLocation: 'api/op/Response.ts'
  }
  const endpoint = { name: 'op', request: null, response: name } as unknown as model.Endpoint
  return { types: [response], endpoints: [endpoint] } as unknown as model.Model
}

const exception = (...statusCodes: number[]): model.ResponseException =>
  ({ statusCodes, body: { kind: 'no_body' } })

// The jsonSpec argument is unused by the examples step in this branch.
const addExamples = async (m: model.Model): Promise<model.Model> =>
  await new ExamplesProcessor(specsFolder).addExamples(m, new Map())

function getResponse (m: model.Model): model.Response {
  return m.types[0] as model.Response
}

test('200 examples are added to the response', async t => {
  const m = await addExamples(buildModel([exception(400)]))
  t.deepEqual(Object.keys(getResponse(m).examples ?? {}), ['OpResponseExample1'])
})

test('non-200 examples are added to the exception declaring the status code', async t => {
  const m = await addExamples(buildModel([exception(404), exception(400)]))
  const [notFound, badRequest] = getResponse(m).exceptions ?? []
  t.is(notFound.examples, undefined)
  t.deepEqual(Object.keys(badRequest.examples ?? {}), ['OpResponseExample2'])
  t.is(badRequest.examples?.OpResponseExample2.summary, 'bad request')
})

test('an exception listing several status codes receives the examples of each matching folder', async t => {
  const m = await addExamples(buildModel([exception(400, 409)]))
  const [multi] = getResponse(m).exceptions ?? []
  t.deepEqual(Object.keys(multi.examples ?? {}).sort(), ['OpResponseExample2', 'OpResponseExample3'])
})

test('example folders without a matching exception are ignored', async t => {
  const m = await addExamples(buildModel([]))
  t.deepEqual(Object.keys(getResponse(m).examples ?? {}), ['OpResponseExample1'])
  t.deepEqual(getResponse(m).exceptions, [])
})

test('a response without exceptions does not fail', async t => {
  const m = buildModel([])
  delete getResponse(m).exceptions
  await t.notThrowsAsync(addExamples(m))
  t.is(getResponse(m).exceptions, undefined)
})
