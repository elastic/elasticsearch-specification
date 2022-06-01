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

import { EpochSeconds, TimeOfDay, Duration } from '@_types/Time'
import { ScheduleTimeOfDay } from '@watcher/_types/Schedule'
import { Stringified } from '@spec_utils/Stringified'

export class SnapshotsRecord {
  /**
   * unique snapshot
   * @aliases snapshot
   */
  'id'?: string
  /**
   * repository name
   * @aliases re,repo
   */
  'repository'?: string
  /**
   * snapshot name
   * @aliases s
   */
  'status'?: string
  /**
   * start time in seconds since 1970-01-01 00:00:00
   * @aliases ste,startEpoch
   */
  'start_epoch'?: Stringified<EpochSeconds>
  /**
   * start time in HH:MM:SS
   * @aliases sti,startTime
   */
  'start_time'?: ScheduleTimeOfDay
  /**
   * end time in seconds since 1970-01-01 00:00:00
   * @aliases ete,endEpoch
   */
  'end_epoch'?: Stringified<EpochSeconds>
  /**
   * end time in HH:MM:SS
   * @aliases eti,endTime
   */
  'end_time'?: TimeOfDay
  /**
   * duration
   * @aliases dur
   */
  'duration'?: Duration
  /**
   * number of indices
   * @aliases i
   */
  'indices'?: string
  /**
   * number of successful shards
   * @aliases ss
   */
  'successful_shards'?: string
  /**
   * number of failed shards
   * @aliases fs
   */
  'failed_shards'?: string
  /**
   * number of total shards
   * @aliases ts
   */
  'total_shards'?: string
  /**
   * reason for failures
   * @aliases r
   */
  'reason'?: string
}
