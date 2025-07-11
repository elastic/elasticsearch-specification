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
import { ExpandWildcards, Indices } from '@_types/common'

/**
 * Clear the cache.
 * Clear indices and data streams from the shared cache for partially mounted indices.
 * @rest_spec_name searchable_snapshots.clear_cache
 * @availability stack since=7.10.0 stability=experimental
 * @cluster_privileges manage
 * @index_privileges manage
 * @doc_id searchable-snapshots-api-clear-cache
 * @ext_doc_id searchable-snapshots
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_searchable_snapshots/cache/clear'
      methods: ['POST']
    },
    {
      path: '/{index}/_searchable_snapshots/cache/clear'
      methods: ['POST']
    }
  ]
  path_parts: {
    /**
     * A comma-separated list of data streams, indices, and aliases to clear from the cache.
     * It supports wildcards (`*`).
     */
    index?: Indices
  }
  query_parameters: {
    expand_wildcards?: ExpandWildcards
    allow_no_indices?: boolean
    ignore_unavailable?: boolean
  }
}
