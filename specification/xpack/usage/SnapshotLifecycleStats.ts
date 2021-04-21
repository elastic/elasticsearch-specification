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

import { Id } from '@common/common'
import { long } from '@common/Numeric'
import { DateString, EpochMillis } from '@common/Time'

export class SnapshotLifecycleStats {
  retention_deletion_time?: DateString
  retention_deletion_time_millis?: EpochMillis
  retention_failed?: long
  retention_runs?: long
  retention_timed_out?: long
  policy?: Id
  /**
   * @aliases snapshots_deleted
   */
  total_snapshots_deleted?: long
  /**
   * @aliases snapshot_deletion_failures
   */
  total_snapshot_deletion_failures?: long
  /**
   * @aliases snapshots_failed
   */
  total_snapshots_failed?: long
  /**
   * @aliases snapshots_taken
   */
  total_snapshots_taken?: long
}
