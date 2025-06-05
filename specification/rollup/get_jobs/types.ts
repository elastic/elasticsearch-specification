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

import { Id, IndexName } from '@_types/common'
import { long } from '@_types/Numeric'
import { Duration, DurationValue, UnitMillis } from '@_types/Time'
import { Groupings } from '@rollup/_types/Groupings'
import { FieldMetric } from '@rollup/_types/Metric'
import { Dictionary } from '@spec_utils/Dictionary'
import { UserDefinedValue } from '@spec_utils/UserDefinedValue'

export class RollupJob {
  /**
   * The rollup job configuration.
   */
  config: RollupJobConfiguration
  /**
   * Transient statistics about the rollup job, such as how many documents have been processed and how many rollup summary docs have been indexed.
   * These stats are not persisted.
   * If a node is restarted, these stats are reset.
   */
  stats: RollupJobStats
  /**
   * The current status of the indexer for the rollup job.
   */
  status: RollupJobStatus
}

export class RollupJobConfiguration {
  cron: string
  groups: Groupings
  id: Id
  index_pattern: string
  metrics: FieldMetric[]
  page_size: long
  rollup_index: IndexName
  timeout: Duration
}

export class RollupJobStats {
  documents_processed: long
  index_failures: long
  index_time_in_ms: DurationValue<UnitMillis>
  index_total: long
  pages_processed: long
  rollups_indexed: long
  search_failures: long
  search_time_in_ms: DurationValue<UnitMillis>
  search_total: long
  trigger_count: long
  processing_time_in_ms: DurationValue<UnitMillis>
  processing_total: long
}

export class RollupJobStatus {
  current_position?: Dictionary<string, UserDefinedValue>
  job_state: IndexingJobState
  upgraded_doc_id?: boolean
}

export enum IndexingJobState {
  started,
  indexing,
  stopping,
  stopped,
  aborting
}
