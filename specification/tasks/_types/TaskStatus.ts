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

import { float, long } from '@_types/Numeric'
import { Retries } from '@_types/Retries'
import { Duration } from '@_types/Time'

export class TaskStatus {
  batches: long
  canceled?: string
  created: long
  deleted: long
  noops: long
  failures?: string[]
  requests_per_second: float
  retries: Retries
  throttled?: Duration
  throttled_millis: long
  throttled_until?: Duration
  throttled_until_millis: long
  timed_out?: boolean
  took?: long
  total: long
  updated: long
  version_conflicts: long
}
