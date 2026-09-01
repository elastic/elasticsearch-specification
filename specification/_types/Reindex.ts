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
  Duration,
  DurationValue,
  EpochTime,
  UnitMillis,
  UnitNanos
} from './Time'

export class ReindexStatus {
  /**
   * The slice ID
   */
  slice_id?: integer
  /**
   * The number of scroll responses pulled back by the reindex.
   */
  batches: long
  /**
   * The number of documents that were successfully created.
   */
  created?: long
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
  updated?: long
  /**
   * The number of version conflicts that reindex hits.
   */
  version_conflicts: long
  /**
   * The reason for cancellation if the slice was canceled
   */
  cancelled?: string
}

/**
 * The final result of a completed reindex operation, as stored in the task result.
 * This is the serialized form of `BulkByScrollResponse`.
 */
export class ReindexTaskResult {
  /**
   * The number of scroll responses pulled back by the reindex.
   */
  batches?: long
  /**
   * The number of documents that were successfully created.
   */
  created?: long
  /**
   * The number of documents that were successfully deleted.
   */
  deleted?: long
  /**
   * Any failures encountered during the reindex. If non-empty, the reindex ended because of these failures.
   */
  failures?: BulkIndexByScrollFailure[]
  /**
   * The number of documents that were ignored because the script returned a `noop` value for `ctx.op`.
   */
  noops?: long
  /**
   * The number of requests per second effectively executed during the reindex.
   */
  requests_per_second?: float
  /**
   * The number of retries attempted by reindex.
   */
  retries?: Retries
  /**
   * Number of milliseconds the request slept to conform to `requests_per_second`.
   */
  throttled_millis?: DurationValue<UnitMillis>
  /**
   * This field should always be equal to zero in a completed reindex result.
   */
  throttled_until_millis?: DurationValue<UnitMillis>
  /**
   * Whether any of the requests executed during the reindex timed out.
   */
  timed_out?: boolean
  /**
   * The total milliseconds the entire operation took.
   */
  took?: DurationValue<UnitMillis>
  /**
   * The number of documents that were successfully processed.
   */
  total?: long
  /**
   * The number of documents that were successfully updated.
   */
  updated?: long
  /**
   * The number of version conflicts that occurred.
   */
  version_conflicts?: long
}

/**
 * Information about a single parent reindex task, as returned by the reindex management APIs.
 */
export class ReindexTaskInfo {
  /**
   * The ID of the reindex task. The ID is assigned when the task was first created and remains the same across graceful shutdown relocations.
   */
  id: TaskId
  /**
   * A sanitized description of the reindex operation (source and destination indices, and optionally remote host info).
   */
  description?: string
  /**
   * The time at which the reindex task started, in milliseconds since the Unix epoch. Remains the same across graceful shutdown relocations.
   */
  start_time_in_millis: EpochTime<UnitMillis>
  /**
   * The time at which the reindex task started, as an ISO-8601 formatted string. Remains the same across graceful shutdown relocations.
   * Only present when the request includes the `?human=true` query parameter.
   */
  start_time?: string
  /**
   * The elapsed running time of the reindex task, including relocations, in a human-readable format.
   * Only present when the request includes the `?human=true` query parameter.
   */
  running_time?: Duration
  /**
   * The elapsed running time of the reindex task, including relocations, in nanoseconds.
   */
  running_time_in_nanos: DurationValue<UnitNanos>
  /**
   * Whether the reindex task has been cancelled.
   */
  cancelled: boolean
  /**
   * The current progress of the reindex operation.
   */
  status?: ReindexStatus
}
