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

import { Id } from '@_types/common'
import { long } from '@_types/Numeric'
import { DateTime } from '@_types/Time'
import { ExecutionPhase, ExecutionThreadPool } from '@watcher/_types/Execution'

// Identical to DatafeedState, but kept separate as they're different enums in ES
export enum WatcherState {
  stopped,
  starting,
  started,
  stopping
}

export class WatcherNodeStats {
  /**
   * The current executing watches metric gives insight into the watches that are currently being executed by Watcher.
   * Additional information is shared per watch that is currently executing.
   * This information includes the `watch_id`, the time its execution started and its current execution phase.
   * To include this metric, the `metric` option should be set to `current_watches` or `_all`.
   * In addition you can also specify the `emit_stacktraces=true` parameter, which adds stack traces for each watch that is being run.
   * These stack traces can give you more insight into an execution of a watch.
   */
  current_watches?: WatchRecordStats[]
  execution_thread_pool: ExecutionThreadPool
  /**
   * Watcher moderates the execution of watches such that their execution won't put too much pressure on the node and its resources.
   * If too many watches trigger concurrently and there isn't enough capacity to run them all, some of the watches are queued, waiting for the current running watches to finish.s
   * The queued watches metric gives insight on these queued watches.
   *
   * To include this metric, the `metric` option should include `queued_watches` or `_all`.
   */
  queued_watches?: WatchRecordQueuedStats[]
  /**
   * The number of watches currently registered.
   */
  watch_count: long
  /**
   * The current state of Watcher.
   */
  watcher_state: WatcherState
  node_id: Id
}

export enum WatcherMetric {
  /** @aliases all */
  '_all',
  'queued_watches',
  'current_watches',
  'pending_watches'
}

export class WatchRecordQueuedStats {
  /**
   * The time the watch was run.
   * This is just before the input is being run.
   */
  execution_time: DateTime
}

export class WatchRecordStats extends WatchRecordQueuedStats {
  /**
   * The current watch execution phase.
   */
  execution_phase: ExecutionPhase
  /**
   * The time the watch was triggered by the trigger engine.
   */
  triggered_time: DateTime
  executed_actions?: Array<string>
  watch_id: Id
  /**
   * The watch record identifier.
   */
  watch_record_id: Id
}
