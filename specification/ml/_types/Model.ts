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
  /**  If true, this snapshot will not be deleted during automatic cleanup of snapshots older than model_snapshot_retention_days. However, this snapshot will be deleted when the job is deleted. The default value is false. */
  retain: boolean
  /** For internal use only. */
  snapshot_doc_count: long
  /** A numerical character string that uniquely identifies the model snapshot. */
  snapshot_id: Id
  /** The creation timestamp for the snapshot. */
  timestamp: integer
}

export class ModelSizeStats {
  bucket_allocation_failures_count: long
  job_id: Id
  log_time: Time
  memory_status: MemoryStatus
  model_bytes: long
  model_bytes_exceeded: long
  model_bytes_memory_limit: long
  peak_model_bytes: long
  assignment_memory_basis?: string
  result_type: string
  total_by_field_count: long
  total_over_field_count: long
  total_partition_field_count: long
  categorization_status: CategorizationStatus
  categorized_doc_count: integer
  dead_category_count: integer
  failed_category_count: integer
  frequent_category_count: integer
  rare_category_count: integer
  total_category_count: integer
  timestamp?: long
}

export enum CategorizationStatus {
  ok = 0,
  warn = 1
}

export enum MemoryStatus {
  ok = 0,
  soft_limit = 1,
  hard_limit = 2
}
