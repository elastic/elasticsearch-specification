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

import { ElasticsearchVersionMinInfo } from '@_types/Base'
import { ClusterAlias } from '@_types/common'
import { Dictionary } from '@spec_utils/Dictionary'

export class Response {
  /** @codegen_name infos */
  body: Dictionary<ClusterAlias, ResolveClusterInfo>
}

/**
 * Provides information about each cluster request relevant to doing a cross-cluster search.
 */
export class ResolveClusterInfo {
  /**
   * Whether the remote cluster is connected to the local (querying) cluster.
   */
  connected: boolean
  /**
   * The `skip_unavailable` setting for a remote cluster.
   */
  skip_unavailable: boolean
  /**
   * Whether the index expression provided in the request matches any indices, aliases or data streams
   * on the cluster.
   */
  matching_indices?: boolean
  /**
   * Provides error messages that are likely to occur if you do a search with this index expression
   * on the specified cluster (for example, lack of security privileges to query an index).
   */
  error?: string
  /**
   * Provides version information about the cluster.
   */
  version?: ElasticsearchVersionMinInfo
}
