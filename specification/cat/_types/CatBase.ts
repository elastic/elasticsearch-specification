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
// Cat APIs are sharing many query parameters, those are defined
// in the CommonCatQueryParameters behavior, which every Cat*Request
// API will inherit because extends CatRequestBase.
// Cat*Request APIs will inherit the CommonQueryParameters behavior
// as well, as CatRequestBase extends RequestBase.

import { CommonCatQueryParameters } from '@spec_utils/behaviors'
import { RequestBase } from '@_types/Base'

export class CatRequestBase
  extends RequestBase
  implements CommonCatQueryParameters {}

export enum CatDfaColumn {
  /**
   * Contains messages relating to the selection of a node.
   * @aliases ae
   */
  assignment_explanation,
  /**
   * The time when the data frame analytics job was created.
   * @aliases ct, createTime
   */
  create_time,
  /**
   * A description of a job.
   * @aliases d
   */
  description,
  /**
   * Name of the destination index.
   * @aliases di, destIndex
   */
  dest_index,
  /**
   * Contains messages about the reason why a data frame analytics job failed.
   * @aliases fr, failureReason
   */
  failure_reason,
  /**
   * Identifier for the data frame analytics job.
   */
  id,
  /**
   * The approximate maximum amount of memory resources that are permitted for
   * the data frame analytics job.
   * @aliases mml, modelMemoryLimit
   */
  model_memory_limit,
  /**
   * The network address of the node that the data frame analytics job is
   * assigned to.
   * @aliases na, nodeAddress
   */
  'node.address',
  /**
   * The ephemeral ID of the node that the data frame analytics job is assigned
   * to.
   * @aliases ne, nodeEphemeralId
   */
  'node.ephemeral_id',
  /**
   * The unique identifier of the node that the data frame analytics job is
   * assigned to.
   * @aliases ni, nodeId
   */
  'node.id',
  /**
   * The name of the node that the data frame analytics job is assigned to.
   * @aliases nn, nodeName
   */
  'node.name',
  /**
   * The progress report of the data frame analytics job by phase.
   * @aliases p
   */
  progress,
  /**
   * Name of the source index.
   * @aliases si, sourceIndex
   */
  source_index,
  /**
   * Current state of the data frame analytics job.
   * @aliases s
   */
  state,
  /**
   * The type of analysis that the data frame analytics job performs.
   * @aliases t
   */
  type,
  /**
   * The Elasticsearch version number in which the data frame analytics job was
   * created.
   * @aliases v
   */
  version
}
export type CatDfaColumns = CatDfaColumn | CatDfaColumn[]
