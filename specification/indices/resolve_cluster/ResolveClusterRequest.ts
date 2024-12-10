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
import { ExpandWildcards, Names } from '@_types/common'

/**
 * Resolve the cluster.
 * Resolve the specified index expressions to return information about each cluster, including the local cluster, if included.
 * Multiple patterns and remote clusters are supported.
 *
 * This endpoint is useful before doing a cross-cluster search in order to determine which remote clusters should be included in a search.
 *
 * You use the same index expression with this endpoint as you would for cross-cluster search.
 * Index and cluster exclusions are also supported with this endpoint.
 *
 * For each cluster in the index expression, information is returned about:
 *
 * * Whether the querying ("local") cluster is currently connected to each remote cluster in the index expression scope.
 * * Whether each remote cluster is configured with `skip_unavailable` as `true` or `false`.
 * * Whether there are any indices, aliases, or data streams on that cluster that match the index expression.
 * * Whether the search is likely to have errors returned when you do the cross-cluster search (including any authorization errors if you do not have permission to query the index).
 * * Cluster version information, including the Elasticsearch server version.
 *
 * @rest_spec_name indices.resolve_cluster
 * @availability stack since=8.13.0 stability=stable
 */
export interface Request extends RequestBase {
  path_parts: {
    /**
     * Comma-separated name(s) or index pattern(s) of the indices, aliases, and data streams to resolve.
     * Resources on remote clusters can be specified using the `<cluster>`:`<name>` syntax.
     */
    name: Names
  }
  query_parameters: {
    /**
     * If false, the request returns an error if any wildcard expression, index alias, or _all value targets only missing
     * or closed indices. This behavior applies even if the request targets other open indices. For example, a request
     * targeting foo*,bar* returns an error if an index starts with foo but no index starts with bar.
     */
    allow_no_indices?: boolean // default: true
    /**
     * Type of index that wildcard patterns can match.
     * If the request can target data streams, this argument determines whether wildcard expressions match hidden data streams.
     * Supports comma-separated values, such as `open,hidden`.
     * Valid values are: `all`, `open`, `closed`, `hidden`, `none`.
     * @server_default open
     */
    expand_wildcards?: ExpandWildcards
    /**
     * If true, concrete, expanded or aliased indices are ignored when frozen. Defaults to false.
     */
    ignore_throttled?: boolean // default: false
    /**
     * If false, the request returns an error if it targets a missing or closed index. Defaults to false.
     */
    ignore_unavailable?: boolean // default: false
  }
}
