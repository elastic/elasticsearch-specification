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

import { IndexName } from '@_types/common'
import { Percentage } from '@_types/Numeric'
import { DateTime, Duration, EpochTime, UnitMillis } from '@_types/Time'

export class RecoveryRecord {
  /**
   * The index name.
   * @aliases i,idx
   */
  'index'?: IndexName
  /**
   * The shard name.
   * @aliases s,sh
   */
  'shard'?: string
  /**
   * The recovery start time.
   * @aliases start
   */
  'start_time'?: DateTime
  /**
   * The recovery start time in epoch milliseconds.
   * @aliases start_millis
   */
  'start_time_millis'?: EpochTime<UnitMillis>
  /**
   * The recovery stop time.
   * @aliases stop
   */
  'stop_time'?: DateTime
  /**
   * The recovery stop time in epoch milliseconds.
   * @aliases stop_millis
   */
  'stop_time_millis'?: EpochTime<UnitMillis>
  /**
   * The recovery time.
   * @aliases t,ti
   */
  'time'?: Duration
  /**
   * The recovery type.
   * @aliases ty
   */
  'type'?: string
  /**
   * The recovery stage.
   * @aliases st
   */
  'stage'?: string
  /**
   * The source host.
   * @aliases shost
   */
  'source_host'?: string
  /**
   * The source node name.
   * @aliases snode
   */
  'source_node'?: string
  /**
   * The target host.
   * @aliases thost
   */
  'target_host'?: string
  /**
   * The target node name.
   * @aliases tnode
   */
  'target_node'?: string
  /**
   * The repository name.
   * @aliases rep
   */
  'repository'?: string
  /**
   * The snapshot name.
   * @aliases snap
   */
  'snapshot'?: string
  /**
   * The number of files to recover.
   * @aliases f
   */
  'files'?: string
  /**
   * The files recovered.
   * @aliases fr
   */
  'files_recovered'?: string
  /**
   * The ratio of files recovered.
   * @aliases fp
   */
  'files_percent'?: Percentage
  /**
   * The total number of files.
   * @aliases tf
   */
  'files_total'?: string
  /**
   * The number of bytes to recover.
   * @aliases b
   */
  'bytes'?: string
  /**
   * The bytes recovered.
   * @aliases br
   */
  'bytes_recovered'?: string
  /**
   * The ratio of bytes recovered.
   * @aliases bp
   */
  'bytes_percent'?: Percentage
  /**
   * The total number of bytes.
   * @aliases tb
   */
  'bytes_total'?: string
  /**
   * The number of translog operations to recover.
   * @aliases to
   */
  'translog_ops'?: string
  /**
   * The translog operations recovered.
   * @aliases tor
   */
  'translog_ops_recovered'?: string
  /**
   * The ratio of translog operations recovered.
   * @aliases top
   */
  'translog_ops_percent'?: Percentage
}
