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

import { FollowIndexStats } from '@ccr/_types/FollowIndexStats'
import { ErrorCause } from '@_types/Errors'
import { long } from '@_types/Numeric'

import { Name, VersionNumber } from '@_types/common'
import { DateTime, DurationValue, UnitMillis } from '@_types/Time'

export class AutoFollowedCluster {
  cluster_name: Name
  last_seen_metadata_version: VersionNumber
  time_since_last_check_millis: DurationValue<UnitMillis>
}

export class AutoFollowStats {
  auto_followed_clusters: AutoFollowedCluster[]
  number_of_failed_follow_indices: long
  number_of_failed_remote_cluster_state_requests: long
  number_of_successful_follow_indices: long
  recent_auto_follow_errors: ErrorCause[]
}

export class FollowStats {
  indices: FollowIndexStats[]
}
