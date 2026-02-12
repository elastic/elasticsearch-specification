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
import { ExpandWildcards, MediaType, Names } from '@_types/common'
import { Duration } from '@_types/Time'

/**
 * Resolve the cluster.
 *
 * Resolve the specified index expressions to return information about each cluster, including the local "querying" cluster, if included.
 * If no index expression is provided, the API will return information about all the remote clusters that are configured on the querying cluster.
 *
 * This endpoint is useful before doing a cross-cluster search in order to determine which remote clusters should be included in a search.
 *
 * You use the same index expression with this endpoint as you would for cross-cluster search.
 * Index and cluster exclusions are also supported with this endpoint.
 *
 * For each cluster in the index expression, information is returned about:
 *
 * * Whether the querying ("local") cluster is currently connected to each remote cluster specified in the index expression. Note that this endpoint actively attempts to contact the remote clusters, unlike the `remote/info` endpoint.
 * * Whether each remote cluster is configured with `skip_unavailable` as `true` or `false`.
 * * Whether there are any indices, aliases, or data streams on that cluster that match the index expression.
 * * Whether the search is likely to have errors returned when you do the cross-cluster search (including any authorization errors if you do not have permission to query the index).
 * * Cluster version information, including the Elasticsearch server version.
 *
 * For example, `GET /_resolve/cluster/my-index-*,cluster*:my-index-*` returns information about the local cluster and all remotely configured clusters that start with the alias `cluster*`.
 * Each cluster returns information about whether it has any indices, aliases or data streams that match `my-index-*`.
 *
 * ## Note on backwards compatibility
 * The ability to query without an index expression was added in version 8.18, so when
 * querying remote clusters older than that, the local cluster will send the index
 * expression `dummy*` to those remote clusters. Thus, if an errors occur, you may see a reference
 * to that index expression even though you didn't request it. If it causes a problem, you can
 * instead include an index expression like `*:*` to bypass the issue.
 *
 * ## Advantages of using this endpoint before a cross-cluster search
 *
 * You may want to exclude a cluster or index from a search when:
 *
 * * A remote cluster is not currently connected and is configured with `skip_unavailable=false`. Running a cross-cluster search under those conditions will cause the entire search to fail.
 * * A cluster has no matching indices, aliases or data streams for the index expression (or your user does not have permissions to search them). For example, suppose your index expression is `logs*,remote1:logs*` and the remote1 cluster has no indices, aliases or data streams that match `logs*`. In that case, that cluster will return no results from that cluster if you include it in a cross-cluster search.
 * * The index expression (combined with any query parameters you specify) will likely cause an exception to be thrown when you do the search. In these cases, the "error" field in the `_resolve/cluster` response will be present. (This is also where security/permission errors will be shown.)
 * * A remote cluster is an older version that does not support the feature you want to use in your search.
 *
 * ## Test availability of remote clusters
 *
 * The `remote/info` endpoint is commonly used to test whether the "local" cluster (the cluster being queried) is connected to its remote clusters, but it does not necessarily reflect whether the remote cluster is available or not.
 * The remote cluster may be available, while the local cluster is not currently connected to it.
 *
 * You can use the `_resolve/cluster` API to attempt to reconnect to remote clusters.
 * For example with `GET _resolve/cluster` or `GET _resolve/cluster/*:*`.
 * The `connected` field in the response will indicate whether it was successful.
 * If a connection was (re-)established, this will also cause the `remote/info` endpoint to now indicate a connected status.
 * @rest_spec_name indices.resolve_cluster
 * @category management
 * @availability stack since=8.13.0 stability=stable
 * @doc_id indices-resolve-cluster-api
 * @index_privileges view_index_metadata
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_resolve/cluster'
      methods: ['GET']
    },
    {
      path: '/_resolve/cluster/{name}'
      methods: ['GET']
    }
  ]
  path_parts: {
    /**
     * A comma-separated list of names or index patterns for the indices, aliases, and data streams to resolve.
     * Resources on remote clusters can be specified using the `<cluster>`:`<name>` syntax.
     * Index and cluster exclusions (e.g., `-cluster1:*`) are also supported.
     * If no index expression is specified, information about all remote clusters configured on the local cluster
     * is returned without doing any index matching
     */
    name?: Names
  }
  response_media_type: MediaType.Json
  query_parameters: {
    /**
     * If false, the request returns an error if any wildcard expression, index alias, or `_all` value targets only missing
     * or closed indices. This behavior applies even if the request targets other open indices. For example, a request
     * targeting `foo*,bar*` returns an error if an index starts with `foo` but no index starts with `bar`.
     * NOTE: This option is only supported when specifying an index expression. You will get an error if you specify index
     * options to the `_resolve/cluster` API endpoint that takes no index expression.
     * @server_default true
     */
    allow_no_indices?: boolean
    /**
     * Type of index that wildcard patterns can match.
     * If the request can target data streams, this argument determines whether wildcard expressions match hidden data streams.
     * Supports comma-separated values, such as `open,hidden`.
     * NOTE: This option is only supported when specifying an index expression. You will get an error if you specify index
     * options to the `_resolve/cluster` API endpoint that takes no index expression.
     * @server_default open
     */
    expand_wildcards?: ExpandWildcards
    /**
     * If true, concrete, expanded, or aliased indices are ignored when frozen.
     * NOTE: This option is only supported when specifying an index expression. You will get an error if you specify index
     * options to the `_resolve/cluster` API endpoint that takes no index expression.
     * @server_default false
     * @deprecated 7.16.0
     */
    ignore_throttled?: boolean
    /**
     * If false, the request returns an error if it targets a missing or closed index.
     * NOTE: This option is only supported when specifying an index expression. You will get an error if you specify index
     * options to the `_resolve/cluster` API endpoint that takes no index expression.
     * @server_default false
     */
    ignore_unavailable?: boolean
    /**
     * The maximum time to wait for remote clusters to respond.
     * If a remote cluster does not respond within this timeout period, the API response
     * will show the cluster as not connected and include an error message that the
     * request timed out.
     *
     * The default timeout is unset and the query can take
     * as long as the networking layer is configured to wait for remote clusters that are
     * not responding (typically 30 seconds).
     */
    timeout?: Duration
  }
}
