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

import { HealthStatus, Id } from '@_types/common'
import { NodeAttributes } from '@_types/Node'
import { double, integer, long } from '@_types/Numeric'
import {
  DateTime,
  DurationValue,
  EpochTime,
  UnitFloatMillis,
  UnitMillis
} from '@_types/Time'

export class TransformStats {
  checkpointing: Checkpointing
  health?: TransformStatsHealth
  id: Id
  /**
   * @availability stack
   */
  node?: NodeAttributes
  reason?: string
  state: string
  stats: TransformIndexerStats
}

export class TransformStatsHealth {
  /* Health status of this transform. */
  status: HealthStatus
  /** If a non-healthy status is returned, contains a list of issues of the transform. */
  issues?: TransformHealthIssue[]
}

export class TransformHealthIssue {
  /** The type of the issue */
  type: string
  /** A description of the issue */
  issue: string
  /** Details about the issue */
  details?: string
  /** Number of times this issue has occurred since it started */
  count: integer
  /** The timestamp this issue occurred for for the first time */
  first_occurrence?: EpochTime<UnitMillis>
  first_occurence_string?: DateTime
}

export class TransformProgress {
  docs_indexed: long
  docs_processed: long
  docs_remaining?: long
  percent_complete?: double
  total_docs?: long
}

export class TransformIndexerStats {
  delete_time_in_ms?: EpochTime<UnitMillis>
  documents_indexed: long
  documents_deleted?: long
  documents_processed: long
  exponential_avg_checkpoint_duration_ms: DurationValue<UnitFloatMillis>
  exponential_avg_documents_indexed: double
  exponential_avg_documents_processed: double
  index_failures: long
  index_time_in_ms: DurationValue<UnitMillis>
  index_total: long
  pages_processed: long
  processing_time_in_ms: DurationValue<UnitMillis>
  processing_total: long
  search_failures: long
  search_time_in_ms: DurationValue<UnitMillis>
  search_total: long
  trigger_count: long
}

export class CheckpointStats {
  checkpoint: long
  checkpoint_progress?: TransformProgress
  timestamp?: DateTime
  timestamp_millis?: EpochTime<UnitMillis>
  time_upper_bound?: DateTime
  time_upper_bound_millis?: EpochTime<UnitMillis>
}

export class Checkpointing {
  changes_last_detected_at?: long
  changes_last_detected_at_string?: DateTime
  last: CheckpointStats
  next?: CheckpointStats
  operations_behind?: long
  last_search_time?: long
  last_search_time_string?: DateTime
}
