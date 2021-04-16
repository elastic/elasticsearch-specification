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

import {
  DateString,
  EpochMillis,
  Id,
  long,
  VersionNumber
} from '@common/common'
import { SnapshotLifecycleStats } from '@xpack/usage/SnapshotLifecycleStats'
import { SnapshotLifecycleInProgress } from './SnapshotLifecycleInProgress'
import { SnapshotLifecycleInvocationRecord } from './SnapshotLifecycleInvocationRecord'
import { SnapshotLifecyclePolicy } from './SnapshotLifecyclePolicy'

export class SnapshotLifecyclePolicyMetadata {
  in_progress?: SnapshotLifecycleInProgress
  last_failure?: SnapshotLifecycleInvocationRecord
  last_success?: SnapshotLifecycleInvocationRecord
  modified_date?: DateString
  modified_date_millis: EpochMillis
  next_execution?: DateString
  next_execution_millis: EpochMillis
  policy: SnapshotLifecyclePolicy
  version: VersionNumber
  stats: SnapshotLifecycleStats
}

export class SnapshotLifecyclePolicyMetadataStats {
  policy: Id
  snapshots_deleted: long
  snapshot_deletion_failures: long
  snapshots_failed: long
  snapshots_taken: long
}
