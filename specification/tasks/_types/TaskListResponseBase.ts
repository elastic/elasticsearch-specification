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
import { ErrorCause, TaskFailure } from '@_types/Errors'
import { Host, Ip, TransportAddress } from '@_types/Networking'
import { Dictionary } from '@spec_utils/Dictionary'
import { TaskInfo } from '@tasks/_types/TaskInfo'

export class TaskListResponseBase {
  node_failures?: ErrorCause[]
  task_failures?: TaskFailure[]
  /**
   * Task information grouped by node, if `group_by` was set to `node` (the default).
   */
  nodes?: Dictionary<string, NodeTasks>
  /**
   * Either a flat list of tasks if `group_by` was set to `none`, or grouped by parents if
   * `group_by` was set to `parents`.
   */
  tasks?: TaskInfos
}

/**
 * @codegen_names flat, grouped
 */
export type TaskInfos = TaskInfo[] | Dictionary<string, ParentTaskInfo>

export class ParentTaskInfo extends TaskInfo {
  children?: TaskInfo[]
}

export class NodeTasks {
  name?: NodeId
  transport_address?: TransportAddress
  host?: Host
  ip?: Ip
  roles?: string[]
  attributes?: Dictionary<string, string>
  tasks: Dictionary<TaskId, TaskInfo>
}
