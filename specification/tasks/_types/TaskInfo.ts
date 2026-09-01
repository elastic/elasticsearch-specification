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

import { NodeId, TaskId } from '@_types/common'
import { long } from '@_types/Numeric'
import {
  Duration,
  DurationValue,
  EpochTime,
  UnitMillis,
  UnitNanos
} from '@_types/Time'
import { Dictionary } from '@spec_utils/Dictionary'
import { UserDefinedValue } from '@spec_utils/UserDefinedValue'

export class TaskInfo {
  action: string
  cancelled?: boolean
  cancellable: boolean
  /**
   * Human readable text that identifies the particular request that the task is performing.
   * For example, it might identify the search request being performed by a search task.
   * Other kinds of tasks have different descriptions, like `_reindex` which has the source and the destination, or `_bulk` which just has the number of requests and the destination indices.
   * Many requests will have only an empty description because more detailed information about the request is not easily available or particularly helpful in identifying the request.
   */
  description?: string
  headers: Dictionary<string, string>
  id: long
  node: NodeId
  running_time?: Duration
  running_time_in_nanos: DurationValue<UnitNanos>
  start_time_in_millis: EpochTime<UnitMillis>
  /**
   * The internal status of the task, which varies from task to task.
   * The format also varies.
   * While the goal is to keep the status for a particular task consistent from version to version, this is not always possible because sometimes the implementation changes.
   * Fields might be removed from the status for a particular request so any parsing you do of the status might break in minor releases.
   */
  status?: UserDefinedValue
  type: string
  parent_task_id?: TaskId
  /**
   * The task ID of the original task. Only present when the task is continuing the work of an earlier task that was running on a node which has since shut down (i.e. a relocatable task).
   * For tasks that have not been relocated this is always equal to the task's own ID and is omitted from the response.
   */
  original_task_id?: TaskId
  /**
   * The time at which the original task started, in milliseconds since the Unix epoch. Only present together with `original_task_id`.
   */
  original_start_time_in_millis?: EpochTime<UnitMillis>
  /**
   * The time at which the original task started, as an ISO 8601 formatted string. Only present together with `original_task_id` and when the request includes the `?human=true` query parameter.
   */
  original_start_time?: string
}
