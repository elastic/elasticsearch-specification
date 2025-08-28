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

import { Duration, EpochTime, TimeOfDay, UnitSeconds } from '@_types/Time'
import { Stringified } from '@spec_utils/Stringified'
import { ScheduleTimeOfDay } from '@watcher/_types/Schedule'

export class SnapshotsRecord {
  /**
   * The unique identifier for the snapshot.
   * @aliases snapshot
   */
  'id'?: string
  /**
   * The repository name.
   * @aliases re,repo
   */
  'repository'?: string
  /**
   * The state of the snapshot process.
   * Returned values include:
   * `FAILED`: The snapshot process failed.
   * `INCOMPATIBLE`: The snapshot process is incompatible with the current cluster version.
   * `IN_PROGRESS`: The snapshot process started but has not completed.
   * `PARTIAL`: The snapshot process completed with a partial success.
   * `SUCCESS`: The snapshot process completed with a full success.
   * @aliases s
   */
  'status'?: string
  /**
   * The Unix epoch time (seconds since 1970-01-01 00:00:00) at which the snapshot process started.
   * @aliases ste,startEpoch
   */
  'start_epoch'?: Stringified<EpochTime<UnitSeconds>>
  /**
   * The time (HH:MM:SS) at which the snapshot process started.
   * @aliases sti,startTime
   */
  'start_time'?: ScheduleTimeOfDay
  /**
   * The Unix epoch time (seconds since 1970-01-01 00:00:00) at which the snapshot process ended.
   * @aliases ete,endEpoch
   */
  'end_epoch'?: Stringified<EpochTime<UnitSeconds>>
  /**
   * The time (HH:MM:SS) at which the snapshot process ended.
   * @aliases eti,endTime
   */
  'end_time'?: TimeOfDay
  /**
   * The time it took the snapshot process to complete, in time units.
   * @aliases dur
   */
  'duration'?: Duration
  /**
   * The number of indices in the snapshot.
   * @aliases i
   */
  'indices'?: string
  /**
   * The number of successful shards in the snapshot.
   * @aliases ss
   */
  'successful_shards'?: string
  /**
   * The number of failed shards in the snapshot.
   * @aliases fs
   */
  'failed_shards'?: string
  /**
   * The total number of shards in the snapshot.
   * @aliases ts
   */
  'total_shards'?: string
  /**
   * The reason for any snapshot failures.
   * @aliases r
   */
  'reason'?: string
}
