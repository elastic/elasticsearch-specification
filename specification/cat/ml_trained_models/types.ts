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

import { ByteSize, Id, VersionString } from '@_types/common'
import { DateTime } from '@_types/Time'

export class TrainedModelsRecord {
  /**
   * The model identifier.
   */
  'id'?: Id
  /**
   * Information about the creator of the model.
   * @aliases c, createdBy
   */
  'created_by'?: string
  /**
   * The estimated heap size to keep the model in memory.
   * @aliases hs,modelHeapSize
   */
  'heap_size'?: ByteSize
  /**
   * The estimated number of operations to use the model.
   * This number helps to measure the computational complexity of the model.
   * @aliases o, modelOperations
   */
  'operations'?: string
  /**
   * The license level of the model.
   * @aliases l
   */
  'license'?: string
  /**
   * The time the model was created.
   * @aliases ct
   */
  'create_time'?: DateTime
  /**
   * The version of Elasticsearch when the model was created.
   * @aliases v
   */
  'version'?: VersionString
  /**
   * A description of the model.
   * @aliases d
   */
  'description'?: string
  /**
   * The number of pipelines that are referencing the model.
   * @aliases ip, ingestPipelines
   */
  'ingest.pipelines'?: string
  /**
   * The total number of documents that are processed by the model.
   * @aliases ic, ingestCount
   */
  'ingest.count'?: string
  /**
   * The total time spent processing documents with thie model.
   * @aliases it, ingestTime
   */
  'ingest.time'?: string
  /**
   * The total number of documents that are currently being handled by the model.
   * @aliases icurr, ingestCurrent
   */
  'ingest.current'?: string
  /**
   * The total number of failed ingest attempts with the model.
   * @aliases if, ingestFailed
   */
  'ingest.failed'?: string
  /**
   * The identifier for the data frame analytics job that created the model.
   * Only displayed if the job is still available.
   * @aliases dfid, dataFrameAnalytics
   */
  'data_frame.id'?: string
  /**
   * The time the data frame analytics job was created.
   * @aliases dft, dataFrameAnalyticsTime
   */
  'data_frame.create_time'?: string
  /**
   * The source index used to train in the data frame analysis.
   * @aliases dfsi, dataFrameAnalyticsSrcIndex
   */
  'data_frame.source_index'?: string
  /**
   * The analysis used by the data frame to build the model.
   * @aliases dfa, dataFrameAnalyticsAnalysis
   */
  'data_frame.analysis'?: string
  /**
   * @availability stack since=8.0.0
   * @availability serverless
   */
  type?: string
}
