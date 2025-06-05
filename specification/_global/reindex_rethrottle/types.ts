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

import { HttpHeaders, Name, TaskId } from '@_types/common'
import { float, long } from '@_types/Numeric'
import { Retries } from '@_types/Retries'
import {
  Duration,
  DurationValue,
  EpochTime,
  UnitMillis,
  UnitNanos
} from '@_types/Time'
import { BaseNode } from '@spec_utils/BaseNode'
import { Dictionary } from '@spec_utils/Dictionary'

export class ReindexNode extends BaseNode {
  tasks: Dictionary<TaskId, ReindexTask>
}

export class ReindexStatus {
  /**
   * The number of scroll responses pulled back by the reindex.
   */
  batches: long
  /**
   * The number of documents that were successfully created.
   */
  created: long
  /**
   * The number of documents that were successfully deleted.
   */
  deleted: long
  /**
   * The number of documents that were ignored because the script used for the reindex returned a `noop` value for `ctx.op`.
   */
  noops: long
  /**
   * The number of requests per second effectively executed during the reindex.
   */
  requests_per_second: float
  /**
   * The number of retries attempted by reindex. `bulk` is the number of bulk actions retried and `search` is the number of search actions retried.
   */
  retries: Retries
  throttled?: Duration
  /**
   * Number of milliseconds the request slept to conform to `requests_per_second`.
   */
  throttled_millis: DurationValue<UnitMillis>
  throttled_until?: Duration
  /**
   * This field should always be equal to zero in a `_reindex` response.
   * It only has meaning when using the Task API, where it indicates the next time (in milliseconds since epoch) a throttled request will be executed again in order to conform to `requests_per_second`.
   */
  throttled_until_millis: DurationValue<UnitMillis>
  /**
   * The number of documents that were successfully processed.
   */
  total: long
  /**
   * The number of documents that were successfully updated, for example, a document with same ID already existed prior to reindex updating it.
   */
  updated: long
  /**
   * The number of version conflicts that reindex hits.
   */
  version_conflicts: long
}

export class ReindexTask {
  action: string
  cancellable: boolean
  description: string
  id: long
  node: Name
  running_time_in_nanos: DurationValue<UnitNanos>
  start_time_in_millis: EpochTime<UnitMillis>
  status: ReindexStatus
  type: string
  headers: HttpHeaders
}
