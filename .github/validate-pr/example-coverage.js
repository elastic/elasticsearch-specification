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

// Reports request/response example coverage of the public endpoints in a
// compiled schema.json. Given a baseline schema too, it only flags what got
// worse, as GitHub annotations and a Markdown report.
//
// Usage: node example-coverage.js <schema.json> [<baseline-schema.json>] [<report.md>]

import { readFile, writeFile, appendFile } from 'fs/promises'
import { fileURLToPath } from 'url'

export const MARKER = '<!-- example-coverage-report -->'
const MAX_LISTED = 100 // keeps the PR comment under GitHub's size limit

export function analyze (schema) {
  const types = new Map(schema.types.map(t => [`${t.name.namespace}:${t.name.name}`, t]))
  const typeOf = ref => ref == null ? undefined : types.get(`${ref.namespace}:${ref.name}`)
  const endpoints = new Map()
  const languages = new Set()
  for (const endpoint of schema.endpoints) {
    const request = typeOf(endpoint.request)
    const response = typeOf(endpoint.response)
    const flavors = Object.values(endpoint.availability ?? {})
    const requestExamples = new Map()
    for (const [name, example] of Object.entries(request?.examples ?? {})) {
      const langs = (example.alternatives ?? []).map(a => a.language)
      langs.forEach(l => languages.add(l))
      requestExamples.set(name, langs)
    }
    endpoints.set(endpoint.name, {
      // Public unless every flavor it's available in marks it private.
      public: flavors.length === 0 || flavors.some(f => f.visibility !== 'private'),
      requestLocation: request?.specLocation,
      responseLocation: response?.specLocation,
      requestExamples,
      responseExamples: Object.keys(response?.examples ?? {}).length
    })
  }
  return { endpoints, languages }
}

const pct = (n, d) => d === 0 ? 'n/a' : `${n}/${d} (${(100 * n / d).toFixed(1)}%)`

function stats ({ endpoints }, languages) {
  const pub = [...endpoints.values()].filter(e => e.public)
  const examples = pub.flatMap(e => [...e.requestExamples.values()])
  return {
    request: pct(pub.filter(e => e.requestExamples.size > 0).length, pub.length),
    response: pct(pub.filter(e => e.responseExamples > 0).length, pub.length),
    languages: pct(examples.filter(langs => languages.every(l => langs.includes(l))).length, examples.length)
  }
}

// Coverage problems in `pr` that `base` didn't already have.
export function findings (pr, base) {
  const out = []
  for (const [name, e] of pr.endpoints) {
    if (!e.public) continue
    const before = base.endpoints.get(name)
    const knownGap = before?.public === true
    if (e.requestExamples.size === 0 && !(knownGap && before.requestExamples.size === 0)) {
      out.push({ level: 'warning', location: e.requestLocation, message: `\`${name}\` has no request examples` })
    }
    if (e.responseExamples === 0 && !(knownGap && before.responseExamples === 0)) {
      out.push({ level: 'notice', location: e.responseLocation, message: `\`${name}\` has no response examples` })
    }
    for (const [example, langs] of e.requestExamples) {
      const lost = (before?.requestExamples.get(example) ?? []).filter(l => !langs.includes(l))
      if (lost.length > 0) {
        out.push({ level: 'warning', location: e.requestLocation, message: `\`${example}\` (\`${name}\`) lost its ${lost.join(', ')} examples` })
      }
    }
  }
  return out
}

function annotation ({ level, location, message }) {
  const [file, lines] = (location ?? '').split('#L')
  const props = file ? ` file=specification/${file},line=${parseInt(lines, 10) || 1},title=Example coverage` : ''
  return `::${level}${props}::${message.replaceAll('`', '').replaceAll('%', '%25')}`
}

function report (pr, base, found, languages, limit) {
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

async function main () {
  const [prPath, basePath, reportPath] = process.argv.slice(2)
  if (prPath == null) {
    console.error('Usage: node example-coverage.js <schema.json> [<baseline-schema.json>] [<report.md>]')
    process.exit(1)
  }
  const load = async p => analyze(JSON.parse(await readFile(p, 'utf8')))
  const pr = await load(prPath)
  // Without a baseline, every gap is reported: the full backlog.
  const base = basePath != null ? await load(basePath) : { endpoints: new Map(), languages: new Set() }
  const languages = [...new Set([...pr.languages, ...base.languages])].sort()
  const found = findings(pr, base)

  if (process.env.GITHUB_ACTIONS === 'true') found.forEach(f => console.log(annotation(f)))
  if (reportPath != null) {
    await writeFile(reportPath, report(pr, base, found, languages, MAX_LISTED))
  } else {
    process.stdout.write(report(pr, base, found, languages, Infinity))
  }
  if (process.env.GITHUB_STEP_SUMMARY) {
    await appendFile(process.env.GITHUB_STEP_SUMMARY, report(pr, base, found, languages, Infinity))
  }
  if (process.env.GITHUB_OUTPUT) {
    await appendFile(process.env.GITHUB_OUTPUT, `has_findings=${found.length > 0}\n`)
  }
}

if (process.argv[1] === fileURLToPath(import.meta.url)) await main()
