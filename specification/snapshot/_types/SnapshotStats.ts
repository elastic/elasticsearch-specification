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

import { Duration, DurationValue, EpochTime, UnitMillis } from '@_types/Time'
import { FileCountSnapshotStats } from './FileCountSnapshotStats'

export class SnapshotStats {
  /**
   * The number and size of files that still need to be copied as part of the incremental snapshot.
   * For completed snapshots, this property indicates the number and size of files that were not already in the repository and were copied as part of the incremental snapshot.
   */
  incremental: FileCountSnapshotStats
  /**
   * The time, in milliseconds, when the snapshot creation process started.
   */
  start_time_in_millis: EpochTime<UnitMillis>
  time?: Duration
  /**
   * The total time, in milliseconds, that it took for the snapshot process to complete.
   */
  time_in_millis: DurationValue<UnitMillis>
  /**
   * The total number and size of files that are referenced by the snapshot.
   */
  total: FileCountSnapshotStats
}
