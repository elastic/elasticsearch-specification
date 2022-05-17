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
import {
  EpochMillis,
  TimeSpan,
  TimeSpanMillis,
  TimeSpanSeconds
} from '@_types/Time'

export class Response {
  body: {
    batches?: long
    created?: long
    deleted?: long
    failures?: BulkIndexByScrollFailure[]
    noops?: long
    retries?: Retries
    requests_per_second?: float
    slice_id?: integer
    task?: TaskId
    throttled_millis?: EpochMillis
    throttled_until_millis?: EpochMillis
    timed_out?: boolean
    took?: long
    total?: long
    updated?: long
    version_conflicts?: long
  }
}
