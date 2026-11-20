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

import test from 'ava'
import { analyze, annotation, cells, changedEndpoints, comparison, findings, fullReport, toJson, Coverage, LANGUAGES } from '../../src/dump/example-coverage'
import * as model from '../../src/model/metamodel'

// [endpoint name, visibility, request examples as [name, languages], response example count]
type Entry = [string, 'public' | 'private', Array<[string, string[]]>, number]

function coverage (entries: Entry[]): Coverage {
  const types: unknown[] = []
  const endpoints: unknown[] = []
  for (const [name, visibility, examples, responses] of entries) {
    const ref = (kind: string): model.TypeName => ({ namespace: name, name: kind })
    types.push({
      kind: 'request',
      name: ref('Request'),
      specLocation: `${name}/Request.ts#L5-L9`,
      examples: Object.fromEntries(examples.map(([ex, langs]) => [ex, { alternatives: langs.map(language => ({ language })) }]))
    })
    types.push({
      kind: 'response',
      name: ref('Response'),
      specLocation: `${name}/Response.ts#L1-L2`,
      examples: Object.fromEntries(Array.from({ length: responses }, (_, i) => [`R${i}`, {}]))
    })
    endpoints.push({
      name,
      availability: { stack: visibility === 'public' ? {} : { visibility } },
      request: ref('Request'),
      response: ref('Response')
    })
  }
  return analyze({ types, endpoints } as unknown as model.Model)
}

const messages = (pr: Coverage, base: Coverage): string[] => findings(pr, base).map(f => `${f.level}: ${f.message}`)

test('existing gaps are not reported again', t => {
  const c = coverage([['a', 'public', [], 0]])
  t.deepEqual(messages(c, c), [])
})

test('new public endpoint without examples is flagged', t => {
  const pr = coverage([['a', 'public', [], 0], ['b', 'private', [], 0]])
  t.deepEqual(messages(pr, coverage([])), [
    'warning: `a` has no request examples',
    'notice: `a` has no response examples'
  ])
})

test('endpoint made public without examples is flagged', t => {
  const base = coverage([['a', 'private', [], 1]])
  const pr = coverage([['a', 'public', [], 1]])
  t.deepEqual(messages(pr, base), ['warning: `a` has no request examples'])
})

test('removed examples and lost languages are flagged', t => {
  const base = coverage([['a', 'public', [['A1', ['curl', 'Python']]], 1], ['b', 'public', [['B1', []]], 1]])
  const pr = coverage([['a', 'public', [['A1', ['curl']]], 1], ['b', 'public', [], 1]])
  t.deepEqual(messages(pr, base), [
    'warning: `A1` (`a`) lost its Python examples',
    'warning: `b` has no request examples'
  ])
})

test('annotations point at the spec file', t => {
  const [finding] = findings(coverage([['a', 'public', [], 1]]), coverage([]))
  t.is(annotation(finding), '::warning file=specification/a/Request.ts,line=5,title=Example coverage::a has no request examples')
})

test('a language counts once any request example has it', t => {
  const c = coverage([['a', 'public', [['A1', ['curl']], ['A2', ['Python']]], 1]]).get('a')
  t.deepEqual(cells(c as never), { Python: 1, JavaScript: 0, Ruby: 0, PHP: 0, Java: 0, 'C#': 0, curl: 1, Response: 1 })
})

test('the full report has a section per namespace with totals and gaps', t => {
  const c = coverage([['cat.help', 'public', [], 0], ['cat.count', 'public', [['C1', LANGUAGES.filter(l => l !== 'C#')]], 1], ['search', 'public', [['S1', LANGUAGES]], 1], ['hidden', 'private', [], 0]])
  const report = fullReport(c)
  t.true(report.includes('**Total: 15/24 (62.5%)**'))
  t.true(report.includes('| `cat.help` | 0/1 | 0/1 | 0/1 | 0/1 | 0/1 | 0/1 | 0/1 | 0/1 | 0/8 |'))
  t.true(report.includes('## _global'))
  t.true(report.includes('Section total: 7/16'))
  t.true(report.includes('- No request example: `cat.help`\n- Missing languages: `cat.count` (C#)\n- No response example: `cat.help`'))
  t.false(report.includes('hidden'))
  t.deepEqual(toJson(c), {
    columns: [...LANGUAGES, 'Response'],
    found: 15,
    required: 24,
    endpoints: {
      'cat.count': { namespace: 'cat', cells: { Python: 1, JavaScript: 1, Ruby: 1, PHP: 1, Java: 1, 'C#': 0, curl: 1, Response: 1 }, requestExamples: { C1: LANGUAGES.filter(l => l !== 'C#') } },
      'cat.help': { namespace: 'cat', cells: { Python: 0, JavaScript: 0, Ruby: 0, PHP: 0, Java: 0, 'C#': 0, curl: 0, Response: 0 }, requestExamples: {} },
      search: { namespace: '_global', cells: { Python: 1, JavaScript: 1, Ruby: 1, PHP: 1, Java: 1, 'C#': 1, curl: 1, Response: 1 }, requestExamples: { S1: LANGUAGES } }
    }
  })
})

test('the comparison lists only new and changed endpoints', t => {
  const base = coverage([['a', 'public', [['A1', ['curl']]], 1], ['b', 'public', [], 0]])
  const pr = coverage([['a', 'public', [], 1], ['b', 'public', [], 0], ['c', 'public', [], 0]])
  t.deepEqual(changedEndpoints(pr, base), ['a', 'c'])
  const body = comparison(pr, base, findings(pr, base), 100)
  t.true(body.includes('| `a` | 0/1 | 0/1 | 0/1 | 0/1 | 0/1 | 0/1 | 1/1 → **0/1** | 1/1 | 1/8 |'))
  t.true(body.includes('| `c` (new) |'))
  t.true(comparison(base, base, [], 100).includes('No example coverage changes.'))
})

// One public endpoint `a`, with the given parts of its endpoint, request and response.
function single (endpoint: object, request: object, response: object): Coverage {
  const ref = (kind: string): model.TypeName => ({ namespace: 'a', name: kind })
  return analyze({
    types: [
      { kind: 'request', name: ref('Request'), specLocation: 'a/Request.ts#L1-L2', ...request },
      { kind: 'response', name: ref('Response'), specLocation: 'a/Response.ts#L1-L2', ...response }
    ],
    endpoints: [{ name: 'a', availability: { stack: {} }, request: ref('Request'), response: ref('Response'), ...endpoint }]
  } as unknown as model.Model)
}

test('an empty availability is not public, a missing one is', t => {
  t.false(single({ availability: {} }, {}, {}).get('a')?.public)
  t.true(single({ availability: undefined }, {}, {}).get('a')?.public)
})

test('examples only shown in private flavors do not count', t => {
  const c = single(
    { availability: { stack: { visibility: 'private' }, serverless: {} } },
    { examples: { OnlyStack: { availability: { stack: {} } }, Everywhere: {} } },
    {}
  )
  t.deepEqual([...(c.get('a')?.requestExamples.keys() ?? [])], ['Everywhere'])
})

test('examples for other status codes count for findings, not for the Response cell', t => {
  const c = single({}, {}, { exceptions: [{ statusCodes: [400], examples: { Bad: {} } }] })
  t.is(c.get('a')?.responseExamples, 1)
  t.is(cells(c.get('a') as never).Response, 0)
})
