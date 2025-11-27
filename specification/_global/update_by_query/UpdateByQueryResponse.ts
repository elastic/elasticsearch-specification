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
import { float, long } from '@_types/Numeric'
import { Retries } from '@_types/Retries'
import { Duration, DurationValue, UnitMillis } from '@_types/Time'

export class Response {
  body: {
    /** The number of scroll responses pulled back by the update by query. */
    batches?: long
    /**
     * Array of failures if there were any unrecoverable errors during the process.
     * If this is non-empty then the request ended because of those failures.
     * Update by query is implemented using batches.
     * Any failure causes the entire process to end, but all failures in the current batch are collected into the array.
     * You can use the `conflicts` option to prevent reindex from ending when version conflicts occur.
     */
    failures?: BulkIndexByScrollFailure[]
    /** The number of documents that were ignored because the script used for the update by query returned a noop value for `ctx.op`. */
    noops?: long
    /** The number of documents that were successfully deleted. */
    deleted?: long
    /** The number of requests per second effectively run during the update by query. */
    requests_per_second?: float
    /**
     * The number of retries attempted by update by query.
     * `bulk` is the number of bulk actions retried.
     * `search` is the number of search actions retried.
     */
    retries?: Retries
    task?: TaskId
    /** If true, some requests timed out during the update by query. */
    timed_out?: boolean
    /** The number of milliseconds from start to end of the whole operation. */
    took?: DurationValue<UnitMillis>
    /** The number of documents that were successfully processed. */
    total?: long
    /** The number of documents that were successfully updated. */
    updated?: long
    /** The number of version conflicts that the update by query hit. */
    version_conflicts?: long
    throttled?: Duration
    /** The number of milliseconds the request slept to conform to `requests_per_second`. */
    throttled_millis?: DurationValue<UnitMillis>
    throttled_until?: Duration
    /**
     * This field should always be equal to zero in an _update_by_query response.
     * It only has meaning when using the task API, where it indicates the next time (in milliseconds since epoch) a throttled request will be run again in order to conform to `requests_per_second`.
     */
    throttled_until_millis?: DurationValue<UnitMillis>
  }
}
