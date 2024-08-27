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

import { Id, NodeId, VersionString } from '@_types/common'

export class TasksRecord {
  /**
   * The identifier of the task with the node.
   */
  'id'?: Id
  /**
   * The task action.
   * @aliases ac
   */
  'action'?: string
  /**
   * The unique task identifier.
   * @aliases ti
   */
  'task_id'?: Id
  /**
   * The parent task identifier.
   * @aliases pti
   */
  'parent_task_id'?: string
  /**
   * The task type.
   * @aliases ty
   */
  'type'?: string
  /**
   * The start time in milliseconds.
   * @aliases start
   */
  'start_time'?: string
  /**
   * The start time in `HH:MM:SS` format.
   * @aliases ts,hms,hhmmss
   */
  'timestamp'?: string
  /**
   * The running time in nanoseconds.
   */
  'running_time_ns'?: string
  /**
   * The running time.
   * @aliases time
   */
  'running_time'?: string
  /**
   * The unique node identifier.
   * @aliases ni
   */
  'node_id'?: NodeId
  /**
   * The IP address for the node.
   * @aliases i
   */
  'ip'?: string
  /**
   * The bound transport port for the node.
   * @aliases po
   */
  'port'?: string
  /**
   * The node name.
   * @aliases n
   */
  'node'?: string
  /**
   * The Elasticsearch version.
   * @aliases v
   */
  'version'?: VersionString
  /**
   * The X-Opaque-ID header.
   * @aliases x
   */
  'x_opaque_id'?: string
  /**
   * The task action description.
   * @aliases desc
   */
  'description'?: string
}
