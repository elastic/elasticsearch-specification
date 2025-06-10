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

import { Name, VersionNumber } from '@_types/common'
import { ErrorCause } from '@_types/Errors'
import { long } from '@_types/Numeric'
import { DurationValue, UnitMillis } from '@_types/Time'
import { FollowIndexStats } from '@ccr/_types/FollowIndexStats'

export class AutoFollowedCluster {
  cluster_name: Name
  last_seen_metadata_version: VersionNumber
  time_since_last_check_millis: DurationValue<UnitMillis>
}

export class AutoFollowStats {
  auto_followed_clusters: AutoFollowedCluster[]
  /**
   * The number of indices that the auto-follow coordinator failed to automatically follow.
   * The causes of recent failures are captured in the logs of the elected master node and in the `auto_follow_stats.recent_auto_follow_errors` field.
   */
  number_of_failed_follow_indices: long
  /**
   * The number of times that the auto-follow coordinator failed to retrieve the cluster state from a remote cluster registered in a collection of auto-follow patterns.
   */
  number_of_failed_remote_cluster_state_requests: long
  /** The number of indices that the auto-follow coordinator successfully followed. */
  number_of_successful_follow_indices: long
  /** An array of objects representing failures by the auto-follow coordinator. */
  recent_auto_follow_errors: ErrorCause[]
}

export class FollowStats {
  indices: FollowIndexStats[]
}
