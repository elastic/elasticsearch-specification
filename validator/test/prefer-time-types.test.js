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
import { ruleTester } from './_tester.js'
import rule from '../rules/prefer-time-types.js'

ruleTester.run('prefer-time-types', rule, {
  valid: [
    {
      name: 'duration with the unit of its name',
      code: 'class Foo { took_in_millis: DurationValue<UnitMillis> }'
    },
    {
      name: 'date with the date type',
      code: 'class Foo { timestamp: DateTime }'
    },
    {
      name: 'timeout with the duration type',
      code: 'class Foo { timeout?: Duration }'
    },
    {
      name: 'interval that is a number and not a time',
      code: 'class Histogram { interval?: double }'
    }
  ],
  invalid: [
    {
      name: 'number with a time unit in its name',
      code: 'class Foo { took_in_millis: long }',
      errors: [{ messageId: 'unitWithoutTimeType', data: { name: 'took_in_millis', unit: 'Millis' } }]
    },
    {
      name: 'unit of the type that differs from the unit of the name',
      code: 'class Foo { start_time_in_millis: EpochTime<UnitSeconds> }',
      errors: [{
        messageId: 'unitMismatch',
        data: { name: 'start_time_in_millis', unit: 'Millis', actual: 'Seconds' }
      }]
    },
    {
      name: 'date as a string',
      code: 'class Foo { timestamp: string }',
      errors: [{ messageId: 'dateWithoutTimeType', data: { name: 'timestamp', suggestion: 'DateTime' } }]
    },
    {
      name: 'date as a number',
      code: 'class Foo { created_at: long }',
      errors: [{
        messageId: 'dateWithoutTimeType',
        data: { name: 'created_at', suggestion: 'EpochTime<UnitMillis>' }
      }]
    },
    {
      name: 'timeout as a string',
      code: 'class Foo { timeout?: string }',
      errors: [{ messageId: 'durationAsString', data: { name: 'timeout' } }]
    }
  ]
})
