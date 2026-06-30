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
  Conflicts,
  Fields,
  Indices,
  MediaType,
  Refresh,
  Routing,
  SearchType,
  Slices,
  WaitForActiveShards
} from '@_types/common'
import { RuntimeFields } from '@_types/mapping/RuntimeFields'
import { float, integer, long } from '@_types/Numeric'
import { QueryContainer } from '@_types/query_dsl/abstractions'
import { Script } from '@_types/Scripting'
import { Duration } from '@_types/Time'
import { SourceConfigParam } from '@global/search/_types/SourceFilter'

/**
 * Update documents.
 *
 * Updates documents that match the specified query.
 * If no query is specified, performs an update on every document in the data stream or index without modifying the source, which is useful for picking up mapping changes.
 *
 * If the Elasticsearch security features are enabled, you must have the following index privileges for the target data stream, index, or alias:
 *
 * * `read`
 * * `index` or `write`
 *
 * @rest_spec_name update_by_query
 * @availability stack since=2.4.0 stability=stable
 * @availability serverless stability=stable visibility=public
 * @index_privileges read, index
 * @doc_tag document
 * @doc_id docs-update-by-query
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/{index}/_update_by_query'
      methods: ['POST']
    }
  ]
  path_parts: {
    /**
     * A comma-separated list of data streams, indices, and aliases to search.
     * Supports wildcards (`*`).
     * To search all data streams or indices, omit this parameter or use `*` or `_all`.
     */
    index: Indices
  }
  request_media_type: MediaType.Json
  response_media_type: MediaType.Json
  query_parameters: {
    /**
     * If `false`, the request returns an error if any wildcard expression, index alias, or `_all` value targets only missing or closed indices.
     * This behavior applies even if the request targets other open indices.
     * For example, a request targeting `foo*,bar*` returns an error if an index starts with `foo` but no index starts with `bar`.
     * @server_default true
     */
    allow_no_indices?: boolean
    /**
     * Analyze the request and collect statistics about each shard that would execute it, without actually running it.
     */
    analyze_wildcard?: boolean
    /**
     * The analyzer to use for the query string.
     */
    analyzer?: string
    /**
     * The default operator for query string query: `AND` or `OR`.
     * @server_default OR
     */
    default_operator?: string
    /**
     * The field to use as a default where no field prefix is given in the query string.
     */
    df?: string
    /**
     * The type of index that wildcard patterns can match.
     * If the request can target data streams, this argument determines whether wildcard expressions match hidden data streams.
     * Supports comma-separated values, such as `open,hidden`.
     * Valid values are: `all`, `open`, `closed`, `hidden`, `none`.
     * @server_default open
     */
    expand_wildcards?: string
    /**
     * If `true`, returns the `_source` of each hit.
     */
    from?: integer
    /**
     * If `false`, the request returns an error if it targets a missing or closed index.
     * @server_default false
     */
    ignore_unavailable?: boolean
    /**
     * If `true`, format-based query failures (such as providing text to a numeric field) in the query string will be ignored.
     * @server_default false
     */
    lenient?: boolean
    /**
     * The maximum number of documents to update.
     * By default, all matching documents are updated.
     */
    max_docs?: long
    /**
     * ID of the pipeline to use to preprocess incoming documents.
     * If the index has a default ingest pipeline specified, then setting the value to `_none` disables the default ingest pipeline for this request.
     * If a final pipeline is configured it will always run, regardless of the value of this parameter.
     */
    pipeline?: string
    /**
     * Specifies the node or shard the operation should be performed on.
     * Random by default.
     */
    preference?: string
    /**
     * If `true`, Elasticsearch refreshes affected shards to make the operation visible to search after the request completes.
     * @server_default false
     */
    refresh?: boolean
    /**
     * If `true`, the request cache is used for this request.
     * Defaults to the index-level setting.
     */
    request_cache?: boolean
    /**
     * The number of shard copies that must be active before proceeding with the operation.
     * Set to `all` or any positive integer up to the total number of shards in the index (`number_of_replicas+1`).
     * @server_default 1
     */
    requests_per_second?: float
    /**
     * A custom value used to route operations to a specific shard.
     */
    routing?: Routing
    /**
     * The period to retain the search context for scrolling.
     */
    scroll?: Duration
    /**
     * The size of the scroll request that powers the operation.
     * @server_default 1000
     */
    scroll_size?: integer
    /**
     * The type of the search operation.
     * Available options: `dfs_query_then_fetch`, `query_then_fetch`.
     * @server_default query_then_fetch
     */
    search_type?: SearchType
    /**
     * The period of time to wait for a response from each shard.
     * If no response is received before the timeout expires, the request fails and returns an error.
     * @server_default 30s
     */
    search_timeout?: Duration
    /**
     * The number of slices this task should be divided into.
     * @server_default 1
     */
    slices?: Slices
    /**
     * A comma-separated list of `<field>:<direction>` pairs.
     */
    sort?: string[]
    /**
     * Specific `tag` of the request for logging and statistical purposes.
     */
    stats?: string[]
    /**
     * The maximum number of documents to collect for each shard, upon which the coordinating node and batching is stopped.
     * If Elasticsearch estimates that the number of results to be returned is greater than `max_docs`, it terminates the query.
     */
    terminate_after?: integer
    /**
     * The period each update request waits for the following operations: dynamic mapping updates and waiting for active shards.
     * @server_default 1m
     */
    timeout?: Duration
    /**
     * If `true`, returns the document version as part of a hit.
     */
    version?: boolean
    /**
     * If `true`, the request uses optimistic concurrency control.
     */
    version_type?: boolean
    /**
     * The number of shard copies that must be active before proceeding with the operation.
     * Set to `all` or any positive integer up to the total number of shards in the index (`number_of_replicas+1`).
     * @server_default 1
     */
    wait_for_active_shards?: WaitForActiveShards
    /**
     * If `true`, the request blocks until the operation is complete.
     * @server_default true
     */
    wait_for_completion?: boolean
    /**
     * Indicates whether to return the `_source` field (`true` or `false`) or contains a list of fields to return.
     */
    _source?: SourceConfigParam
    /**
     * A comma-separated list of source fields to exclude from the response.
     */
    _source_excludes?: Fields
    /**
     * A comma-separated list of source fields to include in the response.
     */
    _source_includes?: Fields
    /**
     * What to do if update by query hits version conflicts: `abort` or `proceed`.
     * @server_default abort
     */
    conflicts?: Conflicts
  }
  body: {
    /**
     * What to do if update by query hits version conflicts: `abort` or `proceed`.
     * @server_default abort
     */
    conflicts?: Conflicts
    /**
     * The maximum number of documents to update.
     */
    max_docs?: long
    /**
     * The query definition using the Query DSL.
     */
    query?: QueryContainer
    /**
     * The script to run to update the document source or metadata when updating.
     */
    script?: Script
    /**
     * Defines one or more runtime fields in the search request.
     * These fields take precedence over mapped fields with the same name.
     */
    runtime_mappings?: RuntimeFields
    /**
     * Slice the request manually using the provided slice ID and total number of slices.
     */
    slice?: SlicedScroll
  }
}

export class SlicedScroll {
  /**
   * The slice ID.
   */
  id: integer
  /**
   * The maximum number of slices.
   */
  max: integer
  /**
   * The field to use for slicing.
   */
  field?: string
}