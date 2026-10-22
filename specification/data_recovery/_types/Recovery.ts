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

import { Metadata } from '@_types/common'
import { integer } from '@_types/Numeric'
import { DateTime } from '@_types/Time'
import { RecoveryMode } from '../start_recovery/types'
import { Point } from './Point'
import { RecoveryRunStatus } from './RecoveryRunStatus'
import { ResolvedRecoverySource } from './ResolvedRecoverySource'

export class RecoveryProgress {
  /**
   * The estimated percentage of the recovery that has completed, from `0` to `100`.
   * It is omitted when the progress cannot currently be determined, for example before the recovery starts moving data.
   * It is `100` once the recovery has completed.
   */
  percent_complete?: integer
}

export class RecoveryFailure {
  /** The name of the source that could not be recovered. */
  source: string
  /** A stable, machine-readable code for the reason that the source could not be recovered. */
  reason: string
  /** Human-readable detail about the failure, which can be truncated. */
  detail?: string
}

export class Recovery {
  /** The identifier of the recovery. */
  recovery_id: string
  /** The status of the recovery. */
  status: RecoveryRunStatus
  /** The recovery point that the sources are recovered from. */
  recovery_point: Point
  /** Whether the sources are recovered in place (`replace`) or under new names (`rename`). */
  destination_mode: RecoveryMode
  /** The sources that the requested source expressions resolved to, with the destinations that they are recovered to. */
  sources: ResolvedRecoverySource[]
  /** The custom metadata that was provided when the recovery was started. */
  metadata: Metadata
  /** The time when the recovery started. */
  started_at: DateTime
  /** The time when the recovery finished. It is omitted while the recovery is running. */
  completed_at?: DateTime
  /** The progress of the recovery. */
  progress: RecoveryProgress
  /**
   * The sources that could not be recovered.
   * The list is capped, so it can be shorter than `total_failure_count`.
   */
  failures: RecoveryFailure[]
  /** The total number of sources that could not be recovered, including any that are not listed in `failures`. */
  total_failure_count: integer
}
