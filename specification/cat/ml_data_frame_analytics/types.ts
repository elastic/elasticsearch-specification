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

import { Id, IndexName, Name, VersionString } from '@_types/common'

export class DataFrameAnalyticsRecord {
  /**
   * The identifier for the job.
   */
  'id'?: Id
  /**
   * The type of analysis that the job performs.
   * @aliases t
   */
  'type'?: string
  /**
   * The time when the job was created.
   * @aliases ct, createTime
   */
  'create_time'?: string
  /**
   * The version of Elasticsearch when the job was created.
   * @aliases v
   */
  'version'?: VersionString
  /**
   * The name of the source index.
   * @aliases si, sourceIndex
   */
  'source_index'?: IndexName
  /**
   * The name of the destination index.
   * @aliases di, destIndex
   */
  'dest_index'?: IndexName
  /**
   * A description of the job.
   * @aliases d
   */
  'description'?: string
  /**
   * The approximate maximum amount of memory resources that are permitted for the job.
   * @aliases mml, modelMemoryLimit
   */
  'model_memory_limit'?: string
  /**
   * The current status of the job.
   * @aliases s
   */
  'state'?: string
  /**
   * Messages about the reason why the job failed.
   * @aliases fr, failureReason
   */
  'failure_reason'?: string
  /**
   * The progress report for the job by phase.
   * @aliases p
   */
  'progress'?: string
  /**
   * Messages related to the selection of a node.
   * @aliases ae, assignmentExplanation
   */
  'assignment_explanation'?: string
  /**
   * The unique identifier of the assigned node.
   * @aliases ni, nodeId
   */
  'node.id'?: Id
  /**
   * The name of the assigned node.
   * @aliases nn, nodeName
   */
  'node.name'?: Name
  /**
   * The ephemeral identifier of the assigned node.
   * @aliases ne, nodeEphemeralId
   */
  'node.ephemeral_id'?: Id
  /**
   * The network address of the assigned node.
   * @aliases na, nodeAddress
   */
  'node.address'?: string
}
