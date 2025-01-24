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

import { RequestBase } from '@_types/Base'
import { NodeIds } from '@_types/common'
import { Duration } from '@_types/Time'

/**
 * Get cache statistics.
 * Get statistics about the shared cache for partially mounted indices.
 * @rest_spec_name searchable_snapshots.cache_stats
 * @availability stack since=7.13.0 stability=experimental
 * @cluster_privileges manage
 * @doc_id searchable-snapshots-api-cache-stats
 * @ext_doc_id searchable-snapshots
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_searchable_snapshots/cache/stats'
      methods: ['GET']
    },
    {
      path: '/_searchable_snapshots/{node_id}/cache/stats'
      methods: ['GET']
    }
  ]
  path_parts: {
    /**
     * The names of the nodes in the cluster to target.
     */
    node_id?: NodeIds
  }
  query_parameters: {
    master_timeout?: Duration
  }
}
