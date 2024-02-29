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

import { Id, VersionString } from '@_types/common'

export class TransformsRecord {
  /**
   * The transform identifier.
   */
  'id'?: Id
  /**
   * The status of the transform.
   * Returned values include:
   * `aborting`: The transform is aborting.
   * `failed: The transform failed. For more information about the failure, check the `reason` field.
   * `indexing`: The transform is actively processing data and creating new documents.
   * `started`: The transform is running but not actively indexing data.
   * `stopped`: The transform is stopped.
   * `stopping`: The transform is stopping.
   * @aliases s
   */
  'state'?: string
  /**
   * The sequence number for the checkpoint.
   * @aliases c
   */
  'checkpoint'?: string
  /**
   * The number of documents that have been processed from the source index of the transform.
   * @aliases docp, documentsProcessed
   */
  'documents_processed'?: string
  /**
   * The progress of the next checkpoint that is currently in progress.
   * @aliases cp, checkpointProgress
   */
  'checkpoint_progress'?: string | null
  /**
   * The timestamp of the last search in the source indices.
   * This field is shown only if the transform is running.
   * @aliases lst, lastSearchTime
   */
  'last_search_time'?: string | null
  /**
   * The timestamp when changes were last detected in the source indices.
   * @aliases cldt
   */
  'changes_last_detection_time'?: string | null
  /**
   * The time the transform was created.
   * @aliases ct, createTime
   */
  'create_time'?: string
  /**
   * The version of Elasticsearch that existed on the node when the transform was created.
   * @aliases v
   */
  'version'?: VersionString
  /**
   * The source indices for the transform.
   * @aliases si, sourceIndex
   */
  'source_index'?: string
  /**
   * The destination index for the transform.
   * @aliases di, destIndex
   */
  'dest_index'?: string
  /**
   * The unique identifier for the ingest pipeline.
   * @aliases p
   */
  'pipeline'?: string
  /**
   * The description of the transform.
   * @aliases d
   */
  'description'?: string
  /**
   * The type of transform: `batch` or `continuous`.
   * @aliases tt
   */
  'transform_type'?: string
  /**
   * The interval between checks for changes in the source indices when the transform is running continuously.
   * @aliases f
   */
  'frequency'?: string
  /**
   * The initial page size that is used for the composite aggregation for each checkpoint.
   * @aliases mpsz
   */
  'max_page_search_size'?: string
  /**
   * The number of input documents per second.
   * @aliases dps
   */
  'docs_per_second'?: string
  /**
   * If a transform has a `failed` state, these details describe the reason for failure.
   * @aliases r
   */
  'reason'?: string
  /**
   * The total number of search operations on the source index for the transform.
   * @aliases st
   */
  'search_total'?: string
  /**
   * The total number of search failures.
   * @aliases sf
   */
  'search_failure'?: string
  /**
   * The total amount of search time, in milliseconds.
   * @aliases stime
   */
  'search_time'?: string
  /**
   * The total number of index operations done by the transform.
   * @aliases it
   */
  'index_total'?: string
  /**
   * The total number of indexing failures.
   * @aliases if
   */
  'index_failure'?: string
  /**
   * The total time spent indexing documents, in milliseconds.
   * @aliases itime
   */
  'index_time'?: string
  /**
   * The number of documents that have been indexed into the destination index for the transform.
   * @aliases doci
   */
  'documents_indexed'?: string
  /**
   * The total time spent deleting documents, in milliseconds.
   * @aliases dtime
   */
  'delete_time'?: string
  /**
   * The number of documents deleted from the destination index due to the retention policy for the transform.
   * @aliases docd
   */
  'documents_deleted'?: string
  /**
   * The number of times the transform has been triggered by the scheduler.
   * For example, the scheduler triggers the transform indexer to check for updates or ingest new data at an interval specified in the `frequency` property.
   * @aliases tc
   */
  'trigger_count'?: string
  /**
   * The number of search or bulk index operations processed.
   * Documents are processed in batches instead of individually.
   * @aliases pp
   */
  'pages_processed'?: string
  /**
   * The total time spent processing results, in milliseconds.
   * @aliases pt
   */
  'processing_time'?: string
  /**
   * The exponential moving average of the duration of the checkpoint, in milliseconds.
   * @aliases cdtea, checkpointTimeExpAvg
   */
  'checkpoint_duration_time_exp_avg'?: string
  /**
   * The exponential moving average of the number of new documents that have been indexed.
   * @aliases idea
   */
  'indexed_documents_exp_avg'?: string
  /**
   * The exponential moving average of the number of documents that have been processed.
   * @aliases pdea
   */
  'processed_documents_exp_avg'?: string
}

export enum TransformState {
  STARTED,
  INDEXING,
  ABORTING,
  STOPPING,
  STOPPED,
  FAILED
}

export enum TransformType {
  batch,
  continuous
}
