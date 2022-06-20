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

import { ExecutionPhase, ExecutionThreadPool } from '@watcher/_types/Execution'
import { Id } from '@_types/common'
import { long } from '@_types/Numeric'
import { DateTime } from '@_types/Time'

// Identical to DatafeedState, but kept separate as they're different enums in ES
export enum WatcherState {
  stopped = 0,
  starting = 1,
  started = 2,
  stopping = 3
}

export class WatcherNodeStats {
  current_watches?: WatchRecordStats[]
  execution_thread_pool: ExecutionThreadPool
  queued_watches?: WatchRecordQueuedStats[]
  watch_count: long
  watcher_state: WatcherState
  node_id: Id
}

export enum WatcherMetric {
  /** @aliases all */
  '_all' = 0,
  'queued_watches' = 1,
  'current_watches' = 2,
  'pending_watches' = 3
}

export class WatchRecordQueuedStats {
  execution_time: DateTime
}

export class WatchRecordStats extends WatchRecordQueuedStats {
  execution_phase: ExecutionPhase
  triggered_time: DateTime
  executed_actions?: Array<string>
  watch_id: Id
  watch_record_id: Id
}
