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
import {
  ExpandWildcards,
  Id,
  Indices,
  ProjectRouting,
  Routing,
  SearchType
} from '@_types/common'
import { ScriptSource } from '@_types/Scripting'
import { Duration } from '@_types/Time'
import { Dictionary } from '@spec_utils/Dictionary'
import { UserDefinedValue } from '@spec_utils/UserDefinedValue'

/**
 * Run a search with a search template.
 *
 * @rest_spec_name search_template
 * @availability stack since=2.0.0 stability=stable
 * @availability serverless stability=stable visibility=public
 * @index_privileges read
 * @doc_tag search
 * @doc_id search-template-api
 * @ext_doc_id search-template
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_search/template'
      methods: ['GET', 'POST']
    },
    {
      path: '/{index}/_search/template'
      methods: ['GET', 'POST']
    }
  ]
  path_parts: {
    /**
     * A comma-separated list of data streams, indices, and aliases to search.
     * It supports wildcards (`*`).
     */
    index?: Indices
  }
  query_parameters: {
    /**
     * If `false`, the request returns an error if any wildcard expression, index alias, or `_all` value targets only missing or closed indices.
     * This behavior applies even if the request targets other open indices.
     * For example, a request targeting `foo*,bar*` returns an error if an index starts with `foo` but no index starts with `bar`.
     * @server_default true
     */
    allow_no_indices?: boolean
    /**
     * Indicates whether network round-trips should be minimized as part of cross-cluster search requests execution.
     * @server_default true */
    ccs_minimize_roundtrips?: boolean
    /**
     * The type of index that wildcard patterns can match.
     * If the request can target data streams, this argument determines whether wildcard expressions match hidden data streams.
     * Supports comma-separated values, such as `open,hidden`.
     * @server_default open
     */
    expand_wildcards?: ExpandWildcards
    /**
     * If `true`, the response includes additional details about score computation as part of a hit.
     * @server_default false */
    explain?: boolean
    /**
     * If `true`, specified concrete, expanded, or aliased indices are not included in the response when throttled.
     * @server_default true
     * @deprecated 7.16.0
     */
    ignore_throttled?: boolean
    /**
     * If `false`, the request returns an error if it targets a missing or closed index.
     * @server_default false */
    ignore_unavailable?: boolean
    /**
     * The node or shard the operation should be performed on.
     * It is random by default.
     */
    preference?: string
    /**
     * If `true`, the query execution is profiled.
     * @server_default false */
    profile?: boolean
    /**
     * Specifies a subset of projects to target for the search using project
     * metadata tags in a subset of Lucene query syntax.
     * Allowed Lucene queries: the _alias tag and a single value (possibly wildcarded).
     * Examples:
     *  _alias:my-project
     *  _alias:_origin
     *  _alias:*pr*
     * Supported in serverless only.
     * @availability serverless stability=stable visibility=feature_flag feature_flag=serverless.cross_project.enabled
     */
    project_routing?: ProjectRouting
    /**  A custom value used to route operations to a specific shard. */
    routing?: Routing
    /**
     * Specifies how long a consistent view of the index
     * should be maintained for scrolled search.
     */
    scroll?: Duration
    /**
     * The type of the search operation.
     */
    search_type?: SearchType
    /**
     * If `true`, `hits.total` is rendered as an integer in the response.
     * If `false`, it is rendered as an object.
     * @server_default false
     * @availability stack since=7.0.0
     * @availability serverless
     */
    rest_total_hits_as_int?: boolean
    /**
     * If `true`, the response prefixes aggregation and suggester names with their respective types.
     * @server_default false */
    typed_keys?: boolean
  }
  body: {
    /**
     * If `true`, returns detailed information about score calculation as part of each hit.
     * If you specify both this and the `explain` query parameter, the API uses only the query parameter.
     * @server_default false */
    explain?: boolean
    /**
     * The ID of the search template to use. If no `source` is specified,
     * this parameter is required.
     */
    id?: Id
    /**
     * Key-value pairs used to replace Mustache variables in the template.
     * The key is the variable name.
     * The value is the variable value.
     */
    params?: Dictionary<string, UserDefinedValue>
    /**
     * If `true`, the query execution is profiled.
     * @server_default false */
    profile?: boolean
    /**
     * An inline search template. Supports the same parameters as the search API's
     * request body. It also supports Mustache variables. If no `id` is specified, this
     * parameter is required.
     */
    source?: ScriptSource
  }
}
