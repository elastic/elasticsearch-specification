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
import { integer, long } from '@_types/Numeric'
import { Time } from '@_types/Time'

export class ModelSnapshot {
  /** An optional description of the job. */
  description?: string
  /** A numerical character string that uniquely identifies the job that the snapshot was created for. */
  job_id: Id
  /** The timestamp of the latest processed record. */
  latest_record_time_stamp: integer
  /** The timestamp of the latest bucket result. */
  latest_result_time_stamp: integer
  /** The minimum version required to be able to restore the model snapshot. */
  min_version: VersionString
  /** Summary information describing the model. */
  model_size_stats: ModelSizeStats
  /**  If true, this snapshot will not be deleted during automatic cleanup of snapshots older than
   * `model_snapshot_retention_days`. However, this snapshot will be deleted when the job is deleted.
   */
  retain: boolean
  /** For internal use only. */
  snapshot_doc_count: long
  /** A numerical character string that uniquely identifies the model snapshot. */
  snapshot_id: Id
  /** The creation timestamp for the snapshot. */
  timestamp: integer
}

export class ModelSizeStats {
  /**
   * Indicates where to find the memory requirement that is used to decide where the job runs. The possible values are:
   * 
   * * `model_memory_limit`: The job’s memory requirement is calculated on the basis that its model memory will grow to
   * the `model_memory_limit` specified in the `analysis_limits` of its config.
   *  * `current_model_bytes`: The job’s memory requirement is calculated on the basis that its current model memory
   * size is a good reflection of what it will be in the future.
   * * `peak_model_bytes`: The job’s memory requirement is calculated on the basis that its peak model memory size
   * is a good reflection of what the model size will be in the future.
   */
  assignment_memory_basis?: string
  /**
   * The number of buckets for which entities were not processed due to memory limit constraints.
   */
  bucket_allocation_failures_count: long
  /**
   * The number of documents that have had a field categorized.
   */
  categorized_doc_count: integer
  /**
   * The status of categorization for this job.
   */
  categorization_status: CategorizationStatus
  /**
   * The number of categories created by categorization that will never be assigned again because another category’s
   * definition makes it a superset of the dead category. Dead categories are a side effect of the way categorization
   * has no prior training.
   */
  dead_category_count: integer
  /**
   * The number of times that categorization wanted to create a new category but couldn’t because the job had hit its
   * `model_memory_limit`. This count does not track which specific categories failed to be created. Therefore, you
   * cannot use this value to determine the number of unique categories that were missed.
   */
  failed_category_count: integer
  /**
   * The number of categories that match more than 1% of categorized documents.
   */
  frequent_category_count: integer
  /**
   * Identifier for the anomaly detection job.
   */
  job_id: Id
  /**
   * The timestamp that the model size stats were recorded, according to server-time.
   */
  log_time: Time
  /**
   * The status of the memory in relation to its `model_memory_limit`.
   */
  memory_status: MemoryStatus
  /**
   * An approximation of the memory resources required for this analysis.
   */
  model_bytes: ByteSize
  /**
   * The number of bytes over the high limit for memory usage at the last allocation failure.
   */
  model_bytes_exceeded?: ByteSize
  /**
   * The upper limit for memory usage, checked on increasing values.
   */
  model_bytes_memory_limit?: ByteSize
  /**
   * The highest recorded value for the model memory usage.
   */
  peak_model_bytes?: ByteSize
  /**
   * The number of categories that match just one categorized document.
   */
  rare_category_count: integer
  /**
   * Internal. This value is always `model_size_stats`.
   */
  result_type: string
  /**
   * The timestamp that the model size stats were recorded, according to the bucket timestamp of the data.
   */
  timestamp?: long
  /**
   * The number of by field values analyzed. Note that these are counted separately for each detector and partition.
   */
  total_by_field_count: long
  /**
   * The number of categories created by categorization.
   */
  total_category_count: integer
  /**
   * The number of over field values analyzed. Note that these are counted separately for each detector and partition.
   */
  total_over_field_count: long
  /**
   * The number of partition field values analyzed.
   */
  total_partition_field_count: long
}

export enum CategorizationStatus {
  /**
   *  This status indicates that categorization is performing acceptably well (or not being used at all).
   */
  ok = 0,
  /** 
   * This status indicates that categorization is detecting a distribution of categories that suggests the input data
   * is inappropriate for categorization. Problems could be that there is only one category, more than 90% of
   * categories are rare, the number of categories is greater than 50% of the number of categorized documents, there
   * are no frequently matched categories, or more than 50% of categories are dead.
  */
  warn = 1
}

export enum MemoryStatus {
  /**
   * This status indicates that the internal models stayed below the configured value.
   */
  ok = 0,
  /**
   * This status indicates that the internal models require more than 60% of the configured memory limit and more
   * aggressive pruning will be performed in order to try to reclaim space.
   */
  soft_limit = 1,
  /**
   * This status indicates that the internal models require more space than the configured memory limit. Some incoming
   * data could not be processed.
   */
  hard_limit = 2
}
