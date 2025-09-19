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
 * Refresh an index.
 * A refresh makes recent operations performed on one or more indices available for search.
 * For data streams, the API runs the refresh operation on the stream’s backing indices.
 *
 * By default, Elasticsearch periodically refreshes indices every second, but only on indices that have received one search request or more in the last 30 seconds.
 * You can change this default interval with the `index.refresh_interval` setting.
 * 
 * In Elastic Cloud Serverless, the default refresh interval is 5 seconds.
 *
 * Refresh requests are synchronous and do not return a response until the refresh operation completes.
 *
 * Refreshes are resource-intensive.
 * To ensure good cluster performance, it's recommended to wait for Elasticsearch's periodic refresh rather than performing an explicit refresh when possible.
 *
 * If your application workflow indexes documents and then runs a search to retrieve the indexed document, it's recommended to use the index API's `refresh=wait_for` query parameter option.
 * This option ensures the indexing operation waits for a periodic refresh before running the search.
 * @rest_spec_name indices.refresh
 * @availability stack stability=stable
 * @availability serverless stability=stable visibility=public
 * @doc_id indices-refresh
 * @index_privileges maintenance
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_refresh'
      methods: ['POST', 'GET']
    },
    {
      path: '/{index}/_refresh'
      methods: ['POST', 'GET']
    }
  ]
  path_parts: {
    /**
     * Comma-separated list of data streams, indices, and aliases used to limit the request.
     * Supports wildcards (`*`).
     * To target all data streams and indices, omit this parameter or use `*` or `_all`.
     */
    index?: Indices
  }
  query_parameters: {
    /**
     * If `false`, the request returns an error if any wildcard expression, index alias, or `_all` value targets only missing or closed indices.
     * This behavior applies even if the request targets other open indices.
     * @server_default true
     */
    allow_no_indices?: boolean
    /**
     * Type of index that wildcard patterns can match.
     * If the request can target data streams, this argument determines whether wildcard expressions match hidden data streams.
     * Supports comma-separated values, such as `open,hidden`.
     * @server_default open
     */
    expand_wildcards?: ExpandWildcards
    /**
     * If `false`, the request returns an error if it targets a missing or closed index.
     * @server_default false
     */
    ignore_unavailable?: boolean
  }
}
