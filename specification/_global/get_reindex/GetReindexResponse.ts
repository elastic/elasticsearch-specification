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
import { ErrorCause } from '@_types/Errors'
import { ReindexStatus } from '@_types/Reindex'
import { DurationValue, EpochTime, UnitMillis, UnitNanos } from '@_types/Time'
import { UserDefinedValue } from '@spec_utils/UserDefinedValue'

export class Response {
  body: {
    /**
     * Whether the reindex task has completed.
     */
    completed: boolean
    /**
     * The ID of the reindex task, in `nodeId:taskNum` format.
     */
    id: TaskId
    /**
     * A sanitized description of the reindex operation (source and destination indices, and optionally remote host info).
     */
    description?: string
    /**
     * The time at which the reindex task started, in milliseconds since the Unix epoch.
     */
    start_time_in_millis: EpochTime<UnitMillis>
    /**
     * The time at which the reindex task started, as an ISO 8601 formatted string.
     */
    start_time: string
    /**
     * The elapsed running time of the reindex task, in nanoseconds.
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
    /**
     * The error that caused the reindex task to fail, if any.
     */
    error?: ErrorCause
    /**
     * The final result of the completed reindex operation, if the task has finished successfully.
     */
    response?: UserDefinedValue
  }
}
