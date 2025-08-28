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

import { Field, Id, IndexName } from '@_types/common'
import { Duration, TimeZone } from '@_types/Time'
import { Dictionary } from '@spec_utils/Dictionary'

export class IndexCapabilities {
  rollup_jobs: RollupJobSummary[]
}

export class RollupJobSummary {
  fields: Dictionary<Field, RollupJobSummaryField[]>
  index_pattern: string
  job_id: Id
  rollup_index: IndexName
}

export class RollupJobSummaryField {
  agg: string
  time_zone?: TimeZone
  calendar_interval?: Duration
}
