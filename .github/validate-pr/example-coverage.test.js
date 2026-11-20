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

// Run with: node --test .github/validate-pr/
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { analyze, findings } from './example-coverage.js'

// A schema with one endpoint per entry: [name, visibility, request examples, response example count].
function schema (entries) {
  const types = []
  const endpoints = []
  for (const [name, visibility, examples, responses] of entries) {
    const ref = kind => ({ namespace: name, name: kind })
    types.push({ name: ref('Request'), specLocation: `${name}/Request.ts#L5-L9`, examples: Object.fromEntries(examples.map(([ex, langs]) => [ex, { alternatives: langs.map(language => ({ language })) }])) })
    types.push({ name: ref('Response'), specLocation: `${name}/Response.ts#L1-L2`, examples: Object.fromEntries(Array.from({ length: responses }, (_, i) => [`R${i}`, {}])) })
    endpoints.push({ name, availability: { stack: visibility === 'public' ? {} : { visibility } }, request: ref('Request'), response: ref('Response') })
  }
  return analyze({ types, endpoints })
}

const messages = (pr, base) => findings(pr, base).map(f => `${f.level}: ${f.message}`)

test('existing gaps are not reported again', () => {
  const s = schema([['a', 'public', [], 0]])
  assert.deepEqual(messages(s, s), [])
})

test('new public endpoint without examples is flagged', () => {
  const base = schema([])
  const pr = schema([['a', 'public', [], 0], ['b', 'private', [], 0]])
  assert.deepEqual(messages(pr, base), [
    'warning: `a` has no request examples',
    'notice: `a` has no response examples'
  ])
})

test('endpoint made public without examples is flagged', () => {
  const base = schema([['a', 'private', [], 1]])
  const pr = schema([['a', 'public', [], 1]])
  assert.deepEqual(messages(pr, base), ['warning: `a` has no request examples'])
})

test('removed examples and lost languages are flagged', () => {
  const base = schema([['a', 'public', [['A1', ['curl', 'Python']]], 1], ['b', 'public', [['B1', []]], 1]])
  const pr = schema([['a', 'public', [['A1', ['curl']]], 1], ['b', 'public', [], 1]])
  assert.deepEqual(messages(pr, base), [
    'warning: `A1` (`a`) lost its Python examples',
    'warning: `b` has no request examples'
  ])
})
