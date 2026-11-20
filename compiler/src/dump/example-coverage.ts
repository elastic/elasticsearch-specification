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

// Reports the example coverage of the public endpoints in a compiled schema.
//
// Usage: npm run example-coverage --prefix compiler -- [--schema <schema.json>] [--output <dir>]
//          [--baseline <schema.json> [--report <comparison.md>]]
//
// Writes report.md and coverage.json to --output (default: output/example-coverage).
// With --baseline it also compares the schema with its base: it writes the
// comparison to --report (or stdout) and, inside GitHub Actions, prints
// annotations, writes the job summary and sets a `has_changes` step output.

import { readFile, writeFile, appendFile, mkdir } from 'fs/promises'
import { join } from 'path'
import { argv } from 'zx'
import * as model from '../model/metamodel'

export const MARKER = '<!-- example-coverage-report -->'
const MAX_LISTED = 100 // keeps the PR comment under GitHub's size limit

// shortcut: mirrors LANGUAGES in docs/examples/generate-language-examples.js plus Java; update both together.
export const LANGUAGES = ['Python', 'JavaScript', 'Ruby', 'PHP', 'Java', 'C#', 'curl']
// Each public endpoint needs one example per language, and a 200-response example.
export const COLUMNS = [...LANGUAGES, 'Response']

export interface EndpointCoverage {
  namespace: string
  public: boolean
  requestLocation?: string
  responseLocation?: string
  // example name -> languages of its alternatives
  requestExamples: Map<string, string[]>
  // examples of the 200 response
  okResponseExamples: number
  // examples of any response, including other status codes
  responseExamples: number
}

// endpoint name -> coverage
export type Coverage = Map<string, EndpointCoverage>

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
  const coverage: Coverage = new Map()
  for (const endpoint of schema.endpoints) {
    const request = typeOf(endpoint.request)
    const response = typeOf(endpoint.response) as model.Response | undefined
    const flavors = publicFlavors(endpoint.availability)
    // Only examples shown in at least one of the endpoint's public flavors count.
    const shown = (examples?: Record<string, model.Example>): Array<[string, model.Example]> =>
      Object.entries(examples ?? {}).filter(([, ex]) => ex.availability == null || Object.keys(ex.availability).some(f => flavors.includes(f)))
    const okResponseExamples = shown(response?.examples).length
    coverage.set(endpoint.name, {
      namespace: endpoint.name.includes('.') ? endpoint.name.split('.')[0] : '_global',
      public: flavors.length > 0,
      requestLocation: request?.specLocation,
      responseLocation: response?.specLocation,
      requestExamples: new Map(shown(request?.examples).map(([name, ex]) => [name, (ex.alternatives ?? []).map(a => a.language)])),
      okResponseExamples,
      // Examples for other status codes live on the exceptions.
      responseExamples: (response?.exceptions ?? []).reduce((n, e) => n + shown(e.examples).length, okResponseExamples)
    })
  }
  return coverage
}

// 1 when the endpoint has the example for a column, 0 when it doesn't.
export function cells (e: EndpointCoverage): Record<string, number> {
  const examples = [...e.requestExamples.values()]
  const out: Record<string, number> = {}
  for (const l of LANGUAGES) out[l] = examples.some(langs => langs.includes(l)) ? 1 : 0
  out.Response = e.okResponseExamples > 0 ? 1 : 0
  return out
}

const sum = (c: Record<string, number>): number => Object.values(c).reduce((a, b) => a + b, 0)
const pct = (n: number, d: number): string => d === 0 ? 'n/a' : `${n}/${d} (${(100 * n / d).toFixed(1)}%)`
const publicEndpoints = (c: Coverage): Array<[string, EndpointCoverage]> =>
  [...c].filter(([, e]) => e.public).sort(([a], [b]) => a.localeCompare(b))

// Coverage problems in `pr` that `base` didn't already have.
export function findings (pr: Coverage, base: Coverage): Finding[] {
  const out: Finding[] = []
  for (const [name, e] of publicEndpoints(pr)) {
    const before = base.get(name)
    const knownGap = before?.public === true
    if (e.requestExamples.size === 0 && !(knownGap && before.requestExamples.size === 0)) {
      out.push({ level: 'warning', location: e.requestLocation, message: `\`${name}\` has no request examples` })
    }
    if (e.responseExamples === 0 && !(knownGap && before.responseExamples === 0)) {
      out.push({ level: 'notice', location: e.responseLocation, message: `\`${name}\` has no response examples` })
    }
    for (const [example, langs] of e.requestExamples) {
      // New examples have no alternatives until they're generated after merge.
      const lost = (before?.requestExamples.get(example) ?? []).filter(l => !langs.includes(l))
      if (lost.length > 0) {
        out.push({ level: 'warning', location: e.requestLocation, message: `\`${example}\` (\`${name}\`) lost its ${lost.join(', ')} examples` })
      }
    }
  }
  return out
}

// Gaps grouped by reason, each listing the affected endpoints.
function gaps (endpoints: Array<[string, EndpointCoverage]>): Map<string, string[]> {
  const out = new Map<string, string[]>([['No request example', []], ['Missing languages', []], ['No response example', []]])
  for (const [name, e] of endpoints) {
    const c = cells(e)
    const missing = LANGUAGES.filter(l => c[l] === 0)
    if (e.requestExamples.size === 0) out.get('No request example')?.push(`\`${name}\``)
    else if (missing.length > 0) out.get('Missing languages')?.push(`\`${name}\` (${missing.join(', ')})`)
    if (c.Response === 0) out.get('No response example')?.push(`\`${name}\``)
  }
  return out
}

const header = ['| Endpoint | ' + COLUMNS.join(' | ') + ' | Total |', '| --- |' + ' --- |'.repeat(COLUMNS.length + 1)]

// The full report: one section per namespace, one row per public endpoint.
export function fullReport (coverage: Coverage): string {
  const byNamespace = new Map<string, Array<[string, EndpointCoverage]>>()
  for (const entry of publicEndpoints(coverage)) {
    byNamespace.set(entry[1].namespace, [...(byNamespace.get(entry[1].namespace) ?? []), entry])
  }
  const namespaces = [...byNamespace.keys()].sort()
  const found = (endpoints: Array<[string, EndpointCoverage]>): number => endpoints.reduce((n, [, e]) => n + sum(cells(e)), 0)
  const all = publicEndpoints(coverage)
  const lines = [
    '# Example coverage',
    '',
    'Public endpoints only. Each cell is found/required: a request example with an alternative in that language, or a 200-response example. Generated by `make example-coverage`.',
    '',
    `**Total: ${pct(found(all), all.length * COLUMNS.length)}**`,
    '',
    '| Namespace | Endpoints | Covered |',
    '| --- | --- | --- |',
    ...namespaces.map(ns => {
      const endpoints = byNamespace.get(ns) ?? []
      return `| [${ns}](#${ns.replace(/[^\w-]/g, '')}) | ${endpoints.length} | ${pct(found(endpoints), endpoints.length * COLUMNS.length)} |`
    })
  ]
  for (const ns of namespaces) {
    const endpoints = byNamespace.get(ns) ?? []
    lines.push('', `## ${ns}`, '', ...header)
    for (const [name, e] of endpoints) {
      const c = cells(e)
      lines.push(`| \`${name}\` | ${COLUMNS.map(col => `${c[col]}/1`).join(' | ')} | ${sum(c)}/${COLUMNS.length} |`)
    }
    lines.push('', `Section total: ${found(endpoints)}/${endpoints.length * COLUMNS.length}`)
    const sectionGaps = [...gaps(endpoints)].filter(([, list]) => list.length > 0)
    if (sectionGaps.length > 0) {
      lines.push('', `Gaps in ${ns}:`, '', ...sectionGaps.map(([reason, list]) => `- ${reason}: ${list.join(', ')}`))
    }
  }
  return lines.join('\n') + '\n'
}

// The same data as the full report, for tooling.
export function toJson (coverage: Coverage): object {
  const endpoints = publicEndpoints(coverage)
  const found = endpoints.reduce((n, [, e]) => n + sum(cells(e)), 0)
  return {
    columns: COLUMNS,
    found,
    required: endpoints.length * COLUMNS.length,
    endpoints: Object.fromEntries(endpoints.map(([name, e]) => [name, {
      namespace: e.namespace,
      cells: cells(e),
      requestExamples: Object.fromEntries(e.requestExamples)
    }]))
  }
}

// Public endpoints in `pr` that are new or whose cells differ from `base`.
export function changedEndpoints (pr: Coverage, base: Coverage): string[] {
  return publicEndpoints(pr)
    .filter(([name, e]) => {
      const before = base.get(name)
      return before?.public !== true || COLUMNS.some(col => cells(before)[col] !== cells(e)[col])
    })
    .map(([name]) => name)
}

// The pull request comment: totals, the endpoints whose cells changed, and the findings.
export function comparison (pr: Coverage, base: Coverage, found: Finding[], limit: number): string {
  const totals = (c: Coverage): string[] => {
    const endpoints = publicEndpoints(c)
    return [
      pct(endpoints.reduce((n, [, e]) => n + sum(cells(e)), 0), endpoints.length * COLUMNS.length),
      pct(endpoints.filter(([, e]) => e.requestExamples.size > 0).length, endpoints.length),
      pct(endpoints.filter(([, e]) => e.okResponseExamples > 0).length, endpoints.length)
    ]
  }
  const [prTotals, baseTotals] = [totals(pr), totals(base)]
  const lines = [
    MARKER,
    '## Example coverage',
    '',
    '| Public endpoints | Base | This PR |',
    '| --- | --- | --- |',
    ...['Cells covered', 'With a request example', 'With a 200-response example'].map((label, i) => `| ${label} | ${baseTotals[i]} | ${prTotals[i]} |`),
    ''
  ]
  const changed = changedEndpoints(pr, base)
  if (changed.length === 0 && found.length === 0) {
    lines.push('No example coverage changes.')
  }
  if (changed.length > 0) {
    lines.push(`### ${changed.length} changed endpoint${changed.length === 1 ? '' : 's'}`, '', ...header)
    for (const name of changed.slice(0, limit)) {
      const now = cells(pr.get(name) as EndpointCoverage)
      const before = base.get(name)?.public === true ? cells(base.get(name) as EndpointCoverage) : undefined
      const cell = (col: string): string => before == null || before[col] === now[col] ? `${now[col]}/1` : `${before[col]}/1 → **${now[col]}/1**`
      lines.push(`| \`${name}\`${before == null ? ' (new)' : ''} | ${COLUMNS.map(cell).join(' | ')} | ${sum(now)}/${COLUMNS.length} |`)
    }
    if (changed.length > limit) lines.push('', `…and ${changed.length - limit} more, see the job summary.`)
    lines.push('')
  }
  if (found.length > 0) {
    lines.push(`### ${found.length} finding${found.length === 1 ? '' : 's'}`, '')
    for (const f of found.slice(0, limit)) {
      lines.push(`- ${f.level === 'warning' ? ':warning:' : ':information_source:'} ${f.message}`)
    }
    if (found.length > limit) lines.push(`- …and ${found.length - limit} more, see the job summary.`)
    lines.push('')
  }
  lines.push('> Language examples are generated after merge by the `generate-language-examples` workflow, so new request examples aren\'t expected to have them yet.')
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
  const pr = await load(argv.schema ?? join(__dirname, '..', '..', '..', 'output', 'schema', 'schema.json'))
  const outputDir: string = argv.output ?? join(__dirname, '..', '..', '..', 'output', 'example-coverage')
  await mkdir(outputDir, { recursive: true })
  await writeFile(join(outputDir, 'report.md'), fullReport(pr))
  await writeFile(join(outputDir, 'coverage.json'), JSON.stringify(toJson(pr), null, 2) + '\n')
  if (argv.baseline == null) return

  const base = await load(argv.baseline)
  const found = findings(pr, base)
  if (process.env.GITHUB_ACTIONS === 'true') found.forEach(f => console.log(annotation(f)))
  if (argv.report != null) {
    await writeFile(argv.report, comparison(pr, base, found, MAX_LISTED))
  } else {
    process.stdout.write(comparison(pr, base, found, Infinity))
  }
  if (process.env.GITHUB_STEP_SUMMARY != null) {
    await appendFile(process.env.GITHUB_STEP_SUMMARY, comparison(pr, base, found, Infinity))
  }
  if (process.env.GITHUB_OUTPUT != null) {
    const hasChanges = found.length > 0 || changedEndpoints(pr, base).length > 0
    await appendFile(process.env.GITHUB_OUTPUT, `has_changes=${String(hasChanges)}\n`)
  }
}

if (require.main === module) {
  run().catch(reason => {
    console.error(reason)
    process.exit(1)
  })
}
