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
const NO_JSDOC = Object.freeze({ description: '', tags: [] })

/**
 * Splits the text between the delimiters of a JSDoc block into the description and the tags.
 * A line that follows a tag and starts with no tag of its own continues the value of that tag,
 * which is how the spec compiler reads it.
 */
export function parseJsDocText (text) {
  const description = []
  const tags = []
  for (const rawLine of text.split('\n')) {
    const line = rawLine.trim().replace(/^\*+\s?/, '').trimEnd()
    const match = line.match(/^@(\w+)(?:\s+(.*))?$/)
    if (match != null) {
      tags.push({ tag: match[1], value: (match[2] ?? '').trim() })
    } else if (tags.length === 0) {
      description.push(line)
    } else if (line !== '') {
      const last = tags[tags.length - 1]
      last.value = `${last.value} ${line}`.trim()
    }
  }
  return { description: description.join('\n').trim(), tags }
}

/** The JSDoc block of an ESTree declaration, property or enum member. */
export function getJsDoc (sourceCode, node) {
  // The comment of an exported declaration sits before the `export` keyword.
  const target = node.parent?.type === 'ExportNamedDeclaration' ? node.parent : node
  const comment = sourceCode
    .getCommentsBefore(target)
    .filter((c) => c.type === 'Block' && c.value.startsWith('*'))
    .pop()
  return comment == null ? NO_JSDOC : parseJsDocText(comment.value)
}

export function tagValues (jsDoc, tag) {
  return jsDoc.tags.filter((t) => t.tag === tag).map((t) => t.value)
}

export function tagValue (jsDoc, tag) {
  return jsDoc.tags.find((t) => t.tag === tag)?.value
}

/** Same reading as the compiler: values split on commas, with optional quotes around each one. */
export function parseCommaSeparated (value) {
  return value
    .split(',')
    .map((v) => v.trim().replace(/["']/g, ''))
    .filter((v) => v !== '')
}

/** Reads `internal tag='type' default='object'` into `{ kind: 'internal', tag: 'type', default: 'object' }`. */
export function parseVariants (value) {
  const [kind, ...pairs] = value.split(/\s+/)
  const result = { kind }
  for (const pair of pairs) {
    const [key, val] = pair.split('=')
    result[key] = (val ?? 'true').replace(/["']/g, '')
  }
  return result
}
