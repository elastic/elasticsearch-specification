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

class CatTasksRecord {
  /**
   * id of the task with the node
   */
  'id'?: Id
  /**
   * task action
   * @aliases ac
   */
  'action'?: string
  /**
   * unique task id
   * @aliases ti
   */
  'task_id'?: Id
  /**
   * parent task id
   * @aliases pti
   */
  'parent_task_id'?: string
  /**
   * task type
   * @aliases ty
   */
  'type'?: Type
  /**
   * start time in ms
   * @aliases start
   */
  'start_time'?: string
  /**
   * start time in HH:MM:SS
   * @aliases ts,hms,hhmmss
   */
  'timestamp'?: string
  /**
   * running time ns
   */
  'running_time_ns'?: string
  /**
   * running time
   * @aliases time
   */
  'running_time'?: string
  /**
   * unique node id
   * @aliases ni
   */
  'node_id'?: NodeId
  /**
   * ip address
   * @aliases i
   */
  'ip'?: string
  /**
   * bound transport port
   * @aliases po
   */
  'port'?: string
  /**
   * node name
   * @aliases n
   */
  'node'?: string
  /**
   * es version
   * @aliases v
   */
  'version'?: VersionString
  /**
   * X-Opaque-ID header
   * @aliases x
   */
  'x_opaque_id'?: string
  /**
   * task action
   * @aliases desc
   */
  'description'?: string
}
