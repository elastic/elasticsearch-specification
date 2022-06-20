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

import { TaskId } from '@_types/common'
import { BulkIndexByScrollFailure } from '@_types/Errors'
import { float, integer, long } from '@_types/Numeric'
import { Retries } from '@_types/Retries'
import { Duration, DurationValue, UnitMillis } from '@_types/Time'

export class Response {
  body: {
    batches?: long
    deleted?: long
    failures?: BulkIndexByScrollFailure[]
    noops?: long
    requests_per_second?: float
    retries?: Retries
    slice_id?: integer
    task?: TaskId
    throttled?: Duration
    throttled_millis: DurationValue<UnitMillis>
    throttled_until?: Duration
    throttled_until_millis: DurationValue<UnitMillis>
    timed_out?: boolean
    took?: DurationValue<UnitMillis>
    total?: long
    version_conflicts?: long
  }
}
