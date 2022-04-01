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

import { long } from '@_types/Numeric'
import { EpochMillis } from '@_types/Time'

export class Response {
  body: {
    retention_deletion_time: string
    retention_deletion_time_millis: EpochMillis
    retention_failed: long
    retention_runs: long
    retention_timed_out: long
    total_snapshots_deleted: long
    total_snapshot_deletion_failures: long
    total_snapshots_failed: long
    total_snapshots_taken: long
    policy_stats: string[]
  }
}
