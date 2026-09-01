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

import { Field } from '@_types/common'
import { Duration, TimeZone } from '@_types/Time'
import { Dictionary } from '@spec_utils/Dictionary'

export class RollupCapabilities {
  /**
   * There can be multiple, independent jobs configured for a single index or index pattern. Each of these jobs may have different configurations, so the API returns a list of all the various configurations available.
   */
  rollup_jobs: RollupCapabilitySummary[]
}

export class RollupCapabilitySummary {
  fields: Dictionary<Field, RollupFieldSummary[]>
  index_pattern: string
  job_id: string
  rollup_index: string
}

export class RollupFieldSummary {
  agg: string
  calendar_interval?: Duration
  time_zone?: TimeZone
}
