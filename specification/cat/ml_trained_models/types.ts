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
   * the trained model id
   */
  'id'?: Id
  /**
   * who created the model
   * @aliases c, createdBy
   */
  'created_by'?: string
  /**
   * the estimated heap size to keep the model in memory
   * @aliases hs,modelHeapSize
   */
  'heap_size'?: ByteSize
  /**
   * the estimated number of operations to use the model
   * @aliases o, modelOperations
   */
  'operations'?: string
  /**
   * The license level of the model
   * @aliases l
   */
  'license'?: string
  /**
   * The time the model was created
   * @aliases ct
   */
  'create_time'?: DateTime
  /**
   * The version of Elasticsearch when the model was created
   * @aliases v
   */
  'version'?: VersionString
  /**
   * The model description
   * @aliases d
   */
  'description'?: string
  /**
   * The number of pipelines referencing the model
   * @aliases ip, ingestPipelines
   */
  'ingest.pipelines'?: string
  /**
   * The total number of docs processed by the model
   * @aliases ic, ingestCount
   */
  'ingest.count'?: string
  /**
   * The total time spent processing docs with this model
   * @aliases it, ingestTime
   */
  'ingest.time'?: string
  /**
   * The total documents currently being handled by the model
   * @aliases icurr, ingestCurrent
   */
  'ingest.current'?: string
  /**
   * The total count of failed ingest attempts with this model
   * @aliases if, ingestFailed
   */
  'ingest.failed'?: string

  /**
   * The data frame analytics config id that created the model (if still available)
   * @aliases dfid, dataFrameAnalytics
   */
  'data_frame.id'?: string
  /**
   * The time the data frame analytics config was created
   * @aliases dft, dataFrameAnalyticsTime
   */
  'data_frame.create_time'?: string
  /**
   * The source index used to train in the data frame analysis
   * @aliases dfsi, dataFrameAnalyticsSrcIndex
   */
  'data_frame.source_index'?: string
  /**
   * The analysis used by the data frame to build the model
   * @aliases dfa, dataFrameAnalyticsAnalysis
   */
  'data_frame.analysis'?: string
  /** @since 8.0.0 */
  type?: string
}
