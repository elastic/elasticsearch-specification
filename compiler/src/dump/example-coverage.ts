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

// Reports the request/response example coverage of the public endpoints in a
// compiled schema. Given a baseline schema, it only reports what got worse.
//
// Usage: npm run example-coverage --prefix compiler -- [--schema <schema.json>] [--baseline <schema.json>] [--report <report.md>]
// Inside GitHub Actions it also prints annotations and writes the job summary
// and a `has_findings` step output.

import { readFile, writeFile, appendFile } from 'fs/promises'
import { join } from 'path'
import { argv } from 'zx'
import * as model from '../model/metamodel'

export const MARKER = '<!-- example-coverage-report -->'
const MAX_LISTED = 100 // keeps the PR comment under GitHub's size limit

interface EndpointCoverage {
  public: boolean
  requestLocation?: string
  responseLocation?: string
  // example name -> languages of its alternatives
  requestExamples: Map<string, string[]>
  responseExamples: number
}

export interface Coverage {
  endpoints: Map<string, EndpointCoverage>
  languages: Set<string>
}

export interface Finding {
  level: 'warning' | 'notice'
  location?: string
  message: string
}

// The flavors in which something shows up in the public docs. A missing
// availability means unrestricted; an empty one means no flavor, as in
// filter-by-availability.
function publicFlavors (availability?: model.Availabilities): string[] {
  if (availability == null) return ['stack', 'serverless']
  return Object.entries(availability)
    .filter(([, a]) => a.visibility == null || a.visibility === model.Visibility.public)
    .map(([flavor]) => flavor)
}

export function analyze (schema: model.Model): Coverage {
  const types = new Map(schema.types.map(t => [`${t.name.namespace}:${t.name.name}`, t]))
  const typeOf = (ref: model.TypeName | null): model.Request | model.Response | undefined =>
    ref == null ? undefined : types.get(`${ref.namespace}:${ref.name}`) as model.Request | model.Response | undefined
  const endpoints = new Map<string, EndpointCoverage>()
  const languages = new Set<string>()
  for (const endpoint of schema.endpoints) {
    const request = typeOf(endpoint.request)
    const response = typeOf(endpoint.response) as model.Response | undefined
    const flavors = publicFlavors(endpoint.availability)
    // Only examples shown in at least one of the endpoint's public flavors count.
    const shown = (examples?: Record<string, model.Example>): Array<[string, model.Example]> =>
      Object.entries(examples ?? {}).filter(([, ex]) => ex.availability == null || Object.keys(ex.availability).some(f => flavors.includes(f)))
    const requestExamples = new Map<string, string[]>()
    for (const [name, example] of shown(request?.examples)) {
      const langs = (example.alternatives ?? []).map(a => a.language)
      langs.forEach(l => languages.add(l))
      requestExamples.set(name, langs)
    }
    endpoints.set(endpoint.name, {
      public: flavors.length > 0,
      requestLocation: request?.specLocation,
      responseLocation: response?.specLocation,
      requestExamples,
      // Examples for other status codes live on the exceptions.
      responseExamples: [response?.examples, ...(response?.exceptions ?? []).map(e => e.examples)]
        .reduce((n, examples) => n + shown(examples).length, 0)
    })
  }
  return { endpoints, languages }
}

// Coverage problems in `pr` that `base` didn't already have. Without a
// baseline, every gap is reported, including missing languages.
export function findings (pr: Coverage, base?: Coverage): Finding[] {
  const out: Finding[] = []
  for (const [name, e] of pr.endpoints) {
    if (!e.public) continue
    const before = base?.endpoints.get(name)
    const knownGap = before?.public === true
    if (e.requestExamples.size === 0 && !(knownGap && before.requestExamples.size === 0)) {
      out.push({ level: 'warning', location: e.requestLocation, message: `\`${name}\` has no request examples` })
    }
    if (e.responseExamples === 0 && !(knownGap && before.responseExamples === 0)) {
      out.push({ level: 'notice', location: e.responseLocation, message: `\`${name}\` has no response examples` })
    }
    for (const [example, langs] of e.requestExamples) {
      // With a baseline, new examples have no alternatives until they're generated after merge.
      const expected = base == null ? [...pr.languages].sort() : before?.requestExamples.get(example) ?? []
      const missing = expected.filter(l => !langs.includes(l))
      if (missing.length > 0) {
        out.push({ level: 'warning', location: e.requestLocation, message: `\`${example}\` (\`${name}\`) ${base == null ? 'is missing' : 'lost'} its ${missing.join(', ')} examples` })
      }
    }
  }
  return out
}

function pct (n: number, d: number): string {
  return d === 0 ? 'n/a' : `${n}/${d} (${(100 * n / d).toFixed(1)}%)`
}

function stats ({ endpoints }: Coverage, languages: string[]): { request: string, response: string, languages: string } {
  const pub = [...endpoints.values()].filter(e => e.public)
  const examples = pub.flatMap(e => [...e.requestExamples.values()])
  return {
    request: pct(pub.filter(e => e.requestExamples.size > 0).length, pub.length),
    response: pct(pub.filter(e => e.responseExamples > 0).length, pub.length),
    languages: pct(examples.filter(langs => languages.every(l => langs.includes(l))).length, examples.length)
  }
}

export function report (pr: Coverage, base: Coverage, found: Finding[], limit: number): string {
  const languages = [...new Set([...pr.languages, ...base.languages])].sort()
  const prStats = stats(pr, languages)
  const baseStats = stats(base, languages)
  const lines = [
    MARKER,
    '## Example coverage',
    '',
    '| Public endpoints | Base | This PR |',
    '| --- | --- | --- |',
    `| With request examples | ${baseStats.request} | ${prStats.request} |`,
    `| With response examples | ${baseStats.response} | ${prStats.response} |`,
    `| Request examples in all ${languages.length} languages | ${baseStats.languages} | ${prStats.languages} |`,
    ''
  ]
  if (found.length === 0) {
    lines.push('No example coverage regressions found.')
  } else {
    lines.push(`### ${found.length} finding${found.length === 1 ? '' : 's'}`, '')
    for (const f of found.slice(0, limit)) {
      lines.push(`- ${f.level === 'warning' ? ':warning:' : ':information_source:'} ${f.message}`)
    }
    if (found.length > limit) lines.push(`- …and ${found.length - limit} more, see the job summary.`)
  }
  lines.push('', '> Language examples are generated after merge by the `generate-language-examples` workflow, so new request examples aren\'t expected to have them yet.')
  return lines.join('\n') + '\n'
}

// A GitHub Actions workflow command; `specLocation` is relative to specification/.
export function annotation ({ level, location, message }: Finding): string {
  const [file, lines] = (location ?? '').split('#L')
  const line = parseInt(lines, 10)
  const props = file !== '' ? ` file=specification/${file},line=${Number.isNaN(line) ? 1 : line},title=Example coverage` : ''
  return `::${level}${props}::${message.replace(/`/g, '').replace(/%/g, '%25')}`
}

async function load (path: string): Promise<Coverage> {
  return analyze(JSON.parse(await readFile(path, 'utf8')))
}

async function run (): Promise<void> {
  const schemaPath: string = argv.schema ?? join(__dirname, '..', '..', '..', 'output', 'schema', 'schema.json')
  const pr = await load(schemaPath)
  // Without a baseline, every gap is reported: the full backlog.
  const baseline = argv.baseline != null ? await load(argv.baseline) : undefined
  const found = findings(pr, baseline)
  const base: Coverage = baseline ?? { endpoints: new Map(), languages: new Set() }

  if (process.env.GITHUB_ACTIONS === 'true') found.forEach(f => console.log(annotation(f)))
  if (argv.report != null) {
    await writeFile(argv.report, report(pr, base, found, MAX_LISTED))
  } else {
    process.stdout.write(report(pr, base, found, Infinity))
  }
  if (process.env.GITHUB_STEP_SUMMARY != null) {
    await appendFile(process.env.GITHUB_STEP_SUMMARY, report(pr, base, found, Infinity))
  }
  if (process.env.GITHUB_OUTPUT != null) {
    await appendFile(process.env.GITHUB_OUTPUT, `has_findings=${String(found.length > 0)}\n`)
  }
}

if (require.main === module) {
  run().catch(reason => {
    console.error(reason)
    process.exit(1)
  })
}
