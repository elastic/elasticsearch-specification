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
import { createRule } from '../utils/rule.js'
import { PROPERTY_SELECTOR, propertyName, propertyType, referenceName } from '../utils/spec.js'

export default createRule({
  name: 'prefer-time-types',
  meta: {
    type: 'suggestion',
    docs: {
      description: 'Dates, times and durations use the types of `specification/_types/Time.ts` and never a plain `string` or number, because code generators map those types to the time types of their platform. The rule finds the properties by their name.'
    },
    messages: {
      dateWithoutTimeType: "The name of '{{name}}' says that it is a date, but its type is a primitive. Use '{{suggestion}}'. See https://github.com/elastic/elasticsearch-specification/blob/main/docs/modeling-guide.md#dates",
      durationAsString: "The name of '{{name}}' says that it is a duration, but its type is 'string'. Use 'Duration'. See https://github.com/elastic/elasticsearch-specification/blob/main/docs/modeling-guide.md#dates",
      unitMismatch: "The name of '{{name}}' has the unit '{{unit}}', but its type has the unit '{{actual}}'.",
      unitWithoutTimeType: "The name of '{{name}}' has a time unit, but its type is a plain number. Use 'DurationValue<Unit{{unit}}>' for a duration or 'EpochTime<Unit{{unit}}>' for a point in time. See https://github.com/elastic/elasticsearch-specification/blob/main/docs/modeling-guide.md#dates"
    },
    schema: []
  },
  defaultOptions: [],
  create
})

const NUMBER_TYPES = new Set(['byte', 'double', 'float', 'integer', 'long', 'short', 'uint', 'ulong'])

// Microseconds have no unit type in `Time.ts`, so a `_micros` suffix has no entry.
const UNIT_SUFFIXES = [
  [/_(millis|ms)$/, 'Millis'],
  [/_nanos$/, 'Nanos'],
  [/_(seconds|secs)$/, 'Seconds']
]
const DATE_NAME = /(^|_)(date|datetime|timestamp)$|_at$/
// A numeric `interval` is the width of a histogram bucket in most places, so only strings match.
const DURATION_NAME = /(^|_)(delay|duration|interval|keep_alive|max_age|timeout|ttl)$/

function primitive (type) {
  if (type.type === 'TSStringKeyword') return 'string'
  if (type.type === 'TSNumberKeyword' || NUMBER_TYPES.has(referenceName(type))) return 'number'
  return undefined
}

/** The unit of `DurationValue<UnitMillis>` or `EpochTime<UnitFloatMillis>`: `Millis`. */
function unitOfType (type) {
  const name = referenceName(type)
  if (name !== 'DurationValue' && name !== 'EpochTime') return undefined
  return referenceName(type.typeArguments?.params[0])?.match(/^Unit(?:Float)?(Millis|Nanos|Seconds)$/)?.[1]
}

function create (context) {
  return {
    [PROPERTY_SELECTOR] (node) {
      const type = propertyType(node)
      if (type == null) return

      const name = propertyName(node)
      const kind = primitive(type)
      const unit = UNIT_SUFFIXES.find(([suffix]) => suffix.test(name))?.[1]

      if (unit != null) {
        const actual = unitOfType(type)
        if (kind === 'number') {
          context.report({ node, messageId: 'unitWithoutTimeType', data: { name, unit } })
        } else if (actual != null && actual !== unit) {
          context.report({ node, messageId: 'unitMismatch', data: { name, unit, actual } })
        }
      } else if (DATE_NAME.test(name) && kind != null) {
        const suggestion = kind === 'string' ? 'DateTime' : 'EpochTime<UnitMillis>'
        context.report({ node, messageId: 'dateWithoutTimeType', data: { name, suggestion } })
      } else if (DURATION_NAME.test(name) && kind === 'string') {
        context.report({ node, messageId: 'durationAsString', data: { name } })
      }
    }
  }
}
