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

import { IndexPattern, IndexPatterns, Name } from '@_types/common'
import { integer } from '@_types/Numeric'

export class AutoFollowPattern {
  name: Name
  pattern: AutoFollowPatternSummary
}

export class AutoFollowPatternSummary {
  active: boolean
  /**
   * The remote cluster containing the leader indices to match against.
   */
  remote_cluster: string
  /**
   * The name of follower index.
   */
  follow_index_pattern?: IndexPattern
  /**
   * An array of simple index patterns to match against indices in the remote cluster specified by the remote_cluster field.
   */
  leader_index_patterns: IndexPatterns
  /**
   * An array of simple index patterns that can be used to exclude indices from being auto-followed.
   * @availability stack since=7.14.0
   * @availability serverless
   */
  leader_index_exclusion_patterns: IndexPatterns
  /**
   * The maximum number of outstanding reads requests from the remote cluster.
   */
  max_outstanding_read_requests: integer
}
