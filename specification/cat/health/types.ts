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

import { EpochTime, TimeOfDay, UnitSeconds } from '@_types/Time'
import { Stringified } from '@spec_utils/Stringified'

export class HealthRecord {
  /**
   * seconds since 1970-01-01 00:00:00
   * @aliases time
   */
  'epoch'?: Stringified<EpochTime<UnitSeconds>>
  /**
   * time in HH:MM:SS
   * @aliases ts,hms,hhmmss
   */
  'timestamp'?: TimeOfDay
  /**
   * cluster name
   * @aliases cl
   */
  'cluster'?: string
  /**
   * health status
   * @aliases st
   */
  'status'?: string
  /**
   * total number of nodes
   * @aliases nt,nodeTotal
   */
  'node.total'?: string
  /**
   * number of nodes that can store data
   * @aliases nd,nodeData
   */
  'node.data'?: string
  /**
   * total number of shards
   * @aliases t,sh,shards.total,shardsTotal
   */
  'shards'?: string
  /**
   * number of primary shards
   * @aliases p,shards.primary,shardsPrimary
   */
  'pri'?: string
  /**
   * number of relocating nodes
   * @aliases r,shards.relocating,shardsRelocating
   */
  'relo'?: string
  /**
   * number of initializing nodes
   * @aliases i,shards.initializing,shardsInitializing
   */
  'init'?: string
  /**
   * number of unassigned primary shards
   * @aliases up,shards.unassigned.primary,shardsUnassignedPrimary
   */
  'unassign.pri'?: string
  /**
   * number of unassigned shards
   * @aliases u,shards.unassigned,shardsUnassigned
   */
  'unassign'?: string
  /**
   * number of pending tasks
   * @aliases pt,pendingTasks
   */
  'pending_tasks'?: string
  /**
   * wait time of longest task pending
   * @aliases mtwt,maxTaskWaitTime
   */
  'max_task_wait_time'?: string
  /**
   * active number of shards in percent
   * @aliases asp,activeShardsPercent
   */
  'active_shards_percent'?: string
}
