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

import { Id, IndexName, Name, Type, VersionString } from '@common/common'

export class CatDataFrameAnalyticsRecord {
  /**
   * the id
   */
  'id'?: Id
  /**
   * analysis type
   * @aliases t
   */
  'type'?: Type
  /**
   * job creation time
   * @aliases ct, createTime
   */
  'create_time'?: string
  /**
   * the version of Elasticsearch when the analytics was created
   * @aliases v
   */
  'version'?: VersionString
  /**
   * source index
   * @aliases si, sourceIndex
   */
  'source_index'?: IndexName
  /**
   * destination index
   * @aliases di, destIndex
   */
  'dest_index'?: IndexName
  /**
   * description
   * @aliases d
   */
  'description'?: string
  /**
   * model memory limit
   * @aliases mml, modelMemoryLimit
   */
  'model_memory_limit'?: string
  /**
   * job state
   * @aliases s
   */
  'state'?: string
  /**
   * failure reason
   * @aliases fr, failureReason
   */
  'failure_reason'?: string
  /**
   * progress
   * @aliases p
   */
  'progress'?: string
  /**
   * why the job is or is not assigned to a node
   * @aliases ae, assignmentExplanation
   */
  'assignment_explanation'?: string
  /**
   * id of the assigned node
   * @aliases ni, nodeId
   */
  'node.id'?: Id
  /**
   * name of the assigned node
   * @aliases nn, nodeName
   */
  'node.name'?: Name
  /**
   * ephemeral id of the assigned node
   * @aliases ne, nodeEphemeralId
   */
  'node.ephemeral_id'?: Id
  /**
   * network address of the assigned node
   * @aliases na, nodeAddress
   */
  'node.address'?: string
}
