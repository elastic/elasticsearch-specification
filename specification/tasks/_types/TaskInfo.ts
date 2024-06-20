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
import { Dictionary } from '@spec_utils/Dictionary'
import {
  Duration,
  DurationValue,
  EpochTime,
  UnitMillis,
  UnitNanos
} from '@_types/Time'
import { UserDefinedValue } from '@spec_utils/UserDefinedValue'

export class TaskInfo {
  action: string
  cancelled?: boolean
  cancellable: boolean
  description?: string
  headers: Dictionary<string, string>
  id: long
  node: NodeId
  running_time?: Duration
  running_time_in_nanos: DurationValue<UnitNanos>
  start_time_in_millis: EpochTime<UnitMillis>
  /** Task status information can vary wildly from task to task. */
  status?: UserDefinedValue
  type: string
  parent_task_id?: TaskId
}
