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
import { ReindexStatus } from '@_types/Reindex'
import { Retries } from '@_types/Retries'
import { DurationValue, EpochTime, UnitMillis } from '@_types/Time'

export class Response {
  body: {
    /**
     * The number of scroll responses that were pulled back by the reindex.
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
     * If there were any unrecoverable errors during the process, it is an array of those failures.
     * If this array is not empty, the request ended because of those failures.
     * Reindex is implemented using batches and any failure causes the entire process to end but all failures in the current batch are collected into the array.
     * You can use the `conflicts` option to prevent the reindex from ending on version conflicts.
     */
    failures?: BulkIndexByScrollFailure[]
    /**
     * The number of documents that were ignored because the script used for the reindex returned a `noop` value for `ctx.op`.
     */
    noops?: long
    /**
     * The number of retries attempted by reindex.
     */
    retries?: Retries
    /**
     * The number of requests per second effectively run during the reindex.
     */
    requests_per_second?: float
    slice_id?: integer
    /**
     * Status of each slice if the reindex was sliced
     */
    slices?: ReindexStatus[]
    task?: TaskId
    /**
     * The number of milliseconds the request slept to conform to `requests_per_second`.
     */
    throttled_millis?: EpochTime<UnitMillis>
    /**
     * This field should always be equal to zero in a reindex response.
     * It has meaning only when using the task API, where it indicates the next time (in milliseconds since epoch) that a throttled request will be run again in order to conform to `requests_per_second`.
     */
    throttled_until_millis?: EpochTime<UnitMillis>
    /**
     * If any of the requests that ran during the reindex timed out, it is `true`.
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
     * That is to say, a document with the same ID already existed before the reindex updated it.
     */
    updated?: long
    /**
     * The number of version conflicts that occurred.
     */
    version_conflicts?: long
  }
}
