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

import { AggregationContainer } from '@_types/aggregations/AggregationContainer'
import { RequestBase } from '@_types/Base'
import {
  ExpandWildcards,
  Field,
  Fields,
  IndexName,
  Indices,
  MediaType,
  ProjectRouting,
  Routing,
  SearchType,
  SuggestMode
} from '@_types/common'
import { KnnSearch } from '@_types/Knn'
import { RuntimeFields } from '@_types/mapping/RuntimeFields'
import { double, integer, long } from '@_types/Numeric'
import { FieldAndFormat, QueryContainer } from '@_types/query_dsl/abstractions'
import { Operator } from '@_types/query_dsl/Operator'
import { RankContainer } from '@_types/Rank'
import { RetrieverContainer } from '@_types/Retriever'
import { ScriptField } from '@_types/Scripting'
import { SlicedScroll } from '@_types/SlicedScroll'
import { Sort, SortResults } from '@_types/sort'
import { Duration } from '@_types/Time'
import { FieldCollapse } from '@global/search/_types/FieldCollapse'
import { Highlight } from '@global/search/_types/highlighting'
import { TrackHits } from '@global/search/_types/hits'
import { PointInTimeReference } from '@global/search/_types/PointInTimeReference'
import { Rescore } from '@global/search/_types/rescoring'
import { Suggester } from '@global/search/_types/suggester'
import { Dictionary, SingleKeyDictionary } from '@spec_utils/Dictionary'
import { UserDefinedValue } from '@spec_utils/UserDefinedValue'
import { SourceConfig, SourceConfigParam } from './_types/SourceFilter'

/**
 * Run a search.
 *
 * Get search hits that match the query defined in the request.
 * You can provide search queries using the `q` query string parameter or the request body.
 * If both are specified, only the query parameter is used.
 *
 * If the Elasticsearch security features are enabled, you must have the read index privilege for the target data stream, index, or alias. For cross-cluster search, refer to the documentation about configuring CCS privileges.
 * To search a point in time (PIT) for an alias, you must have the `read` index privilege for the alias's data streams or indices.
 *
 * **Search slicing**
 *
 * When paging through a large number of documents, it can be helpful to split the search into multiple slices to consume them independently with the `slice` and `pit` properties.
 * By default the splitting is done first on the shards, then locally on each shard.
 * The local splitting partitions the shard into contiguous ranges based on Lucene document IDs.
 *
 * For instance if the number of shards is equal to 2 and you request 4 slices, the slices 0 and 2 are assigned to the first shard and the slices 1 and 3 are assigned to the second shard.
 *
 * IMPORTANT: The same point-in-time ID should be used for all slices.
 * If different PIT IDs are used, slices can overlap and miss documents.
 * This situation can occur because the splitting criterion is based on Lucene document IDs, which are not stable across changes to the index.
 * @rest_spec_name search
 * @availability stack stability=stable
 * @availability serverless stability=stable visibility=public
 * @index_privileges read
 * @doc_id search-search
 * @ext_doc_id ccs-privileges
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_search'
      methods: ['GET', 'POST']
    },
    {
      path: '/{index}/_search'
      methods: ['GET', 'POST']
    }
  ]
  path_parts: {
    /**
     * A comma-separated list of data streams, indices, and aliases to search.
     * It supports wildcards (`*`).
     * To search all data streams and indices, omit this parameter or use `*` or `_all`.
     * @ext_doc_id search-multiple-indices
     */
    index?: Indices
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
     * If `true` and there are shard request timeouts or shard failures, the request returns partial results.
     * If `false`, it returns an error with no partial results.
     *
     * To override the default behavior, you can set the `search.default_allow_partial_results` cluster setting to `false`.
     * @server_default true
     */
    allow_partial_search_results?: boolean
    /**
     * The analyzer to use for the query string.
     * This parameter can be used only when the `q` query string parameter is specified.
     */
    analyzer?: string
    /**
     * If `true`, wildcard and prefix queries are analyzed.
     * This parameter can be used only when the `q` query string parameter is specified.
     * @server_default false
     */
    analyze_wildcard?: boolean
    /**
     * The number of shard results that should be reduced at once on the coordinating node.
     * If the potential number of shards in the request can be large, this value should be used as a protection mechanism to reduce the memory overhead per search request.
     * @server_default 512
     */
    batched_reduce_size?: long
    /**
     * If `true`, network round-trips between the coordinating node and the remote clusters are minimized when running cross-cluster search (CCS) requests.
     * @ext_doc_id ccs-network-delays
     * @server_default true
     */
    ccs_minimize_roundtrips?: boolean
    /**
     * The default operator for the query string query: `and` or `or`.
     * This parameter can be used only when the `q` query string parameter is specified.
     * @server_default or
     */
    default_operator?: Operator
    /**
     * The field to use as a default when no field prefix is given in the query string.
     * This parameter can be used only when the `q` query string parameter is specified.
     */
    df?: string
    /**
     * A comma-separated list of fields to return as the docvalue representation of a field for each hit.
     * @ext_doc_id docvalue-fields
     */
    docvalue_fields?: Fields
    /**
     * The type of index that wildcard patterns can match.
     * If the request can target data streams, this argument determines whether wildcard expressions match hidden data streams.
     * It supports comma-separated values such as `open,hidden`.
     * @server_default open
     */
    expand_wildcards?: ExpandWildcards
    /**
     * If `true`, the request returns detailed information about score computation as part of a hit.
     * @server_default false
     */
    explain?: boolean
    /**
     * If `true`, concrete, expanded or aliased indices will be ignored when frozen.
     * @server_default true
     * @deprecated 7.16.0
     */
    ignore_throttled?: boolean
    /**
     * If `false`, the request returns an error if it targets a missing or closed index.
     * @server_default false
     */
    ignore_unavailable?: boolean
    /**
     * If `true`, the response includes the score contribution from any named queries.
     *
     * This functionality reruns each named query on every hit in a search response.
     * Typically, this adds a small overhead to a request.
     * However, using computationally expensive named queries on a large number of hits may add significant overhead.
     * @server_default false
     */
    include_named_queries_score?: boolean
    /**
     *  If `true`, format-based query failures (such as providing text to a numeric field) in the query string will be ignored.
     * This parameter can be used only when the `q` query string parameter is specified.
     * @server_default false
     */
    lenient?: boolean
    /**
     * The number of concurrent shard requests per node that the search runs concurrently.
     * This value should be used to limit the impact of the search on the cluster in order to limit the number of concurrent shard requests.
     * @server_default 5
     */
    max_concurrent_shard_requests?: integer
    /**
     * The nodes and shards used for the search.
     * By default, Elasticsearch selects from eligible nodes and shards using adaptive replica selection, accounting for allocation awareness.
     * Valid values are:
     *
     * * `_only_local` to run the search only on shards on the local node.
     * * `_local` to, if possible, run the search on shards on the local node, or if not, select shards using the default method.
     * * `_only_nodes:<node-id>,<node-id>` to run the search on only the specified nodes IDs. If suitable shards exist on more than one selected node, use shards on those nodes using the default method. If none of the specified nodes are available, select shards from any available node using the default method.
     * * `_prefer_nodes:<node-id>,<node-id>` to if possible, run the search on the specified nodes IDs. If not, select shards using the default method.
     * * `_shards:<shard>,<shard>` to run the search only on the specified shards. You can combine this value with other `preference` values. However, the `_shards` value must come first. For example: `_shards:2,3|_local`.
     * * `<custom-string>` (any string that does not start with `_`) to route searches with the same `<custom-string>` to the same shards in the same order.
     */
    preference?: string
    /**
     * A threshold that enforces a pre-filter roundtrip to prefilter search shards based on query rewriting if the number of shards the search request expands to exceeds the threshold.
     * This filter roundtrip can limit the number of shards significantly if for instance a shard can not match any documents based on its rewrite method (if date filters are mandatory to match but the shard bounds and the query are disjoint).
     * When unspecified, the pre-filter phase is executed if any of these conditions is met:
     *
     * * The request targets more than 128 shards.
     * * The request targets one or more read-only index.
     * * The primary sort of the query targets an indexed field.
     */
    pre_filter_shard_size?: long
    /**
     * If `true`, the caching of search results is enabled for requests where `size` is `0`.
     * It defaults to index level settings.
     * @ext_doc_id shard-request-cache
     */
    request_cache?: boolean
    /**
     * A custom value that is used to route operations to a specific shard.
     * @ext_doc_id search-shard-routing
     */
    routing?: Routing
    /**
     * The period to retain the search context for scrolling.
     * By default, this value cannot exceed `1d` (24 hours).
     * You can change this limit by using the `search.max_keep_alive` cluster-level setting.
     * @ext_doc_id scroll-search-results
     */
    scroll?: Duration
    /**
     * Indicates how distributed term frequencies are calculated for relevance scoring.
     * @ext_doc_id relevance-scores
     */
    search_type?: SearchType
    /**
     * Specific `tag` of the request for logging and statistical purposes.
     */
    stats?: string[]
    /**
     * A comma-separated list of stored fields to return as part of a hit.
     * If no fields are specified, no stored fields are included in the response.
     * If this field is specified, the `_source` parameter defaults to `false`.
     * You can pass `_source: true` to return both source fields and stored fields in the search response.
     * @ext_doc_id stored-fields
     */
    stored_fields?: Fields
    /**
     * The field to use for suggestions.
     */
    suggest_field?: Field
    /**
     * The suggest mode.
     * This parameter can be used only when the `suggest_field` and `suggest_text` query string parameters are specified.
     * @server_default missing
     */
    suggest_mode?: SuggestMode
    /**
     * The number of suggestions to return.
     * This parameter can be used only when the `suggest_field` and `suggest_text` query string parameters are specified.
     */
    suggest_size?: long
    /**
     * The source text for which the suggestions should be returned.
     * This parameter can be used only when the `suggest_field` and `suggest_text` query string parameters are specified.
     */
    suggest_text?: string
    /**
     * The maximum number of documents to collect for each shard.
     * If a query reaches this limit, Elasticsearch terminates the query early.
     * Elasticsearch collects documents before sorting.
     *
     * IMPORTANT: Use with caution.
     * Elasticsearch applies this parameter to each shard handling the request.
     * When possible, let Elasticsearch perform early termination automatically.
     * Avoid specifying this parameter for requests that target data streams with backing indices across multiple data tiers.
     * If set to `0` (default), the query does not terminate early.
     * @server_default 0
     */
    terminate_after?: long
    /**
     * The period of time to wait for a response from each shard.
     * If no response is received before the timeout expires, the request fails and returns an error.
     * It defaults to no timeout.
     */
    timeout?: Duration
    /**
     * The number of hits matching the query to count accurately.
     * If `true`, the exact number of hits is returned at the cost of some performance.
     * If `false`, the response does not include the total number of hits matching the query.
     * @server_default 10000
     */
    track_total_hits?: TrackHits
    /**
     * If `true`, the request calculates and returns document scores, even if the scores are not used for sorting.
     * @server_default false
     */
    track_scores?: boolean
    /**
     * If `true`, aggregation and suggester names are be prefixed by their respective types in the response.
     * @server_default false
     */
    typed_keys?: boolean
    /**
     * Indicates whether `hits.total` should be rendered as an integer or an object in the rest search response.
     * @server_default false
     */
    rest_total_hits_as_int?: boolean
    /**
     * If `true`, the request returns the document version as part of a hit.
     * @server_default false
     */
    version?: boolean
    /**
     * The source fields that are returned for matching documents.
     * These fields are returned in the `hits._source` property of the search response.
     * Valid values are:
     *
     * * `true` to return the entire document source.
     * * `false` to not return the document source.
     * * `<string>` to return the source fields that are specified as a comma-separated list that supports wildcard (`*`) patterns.
     * @server_default true
     */
    _source?: SourceConfigParam
    /**
     * A comma-separated list of source fields to exclude from the response.
     * You can also use this parameter to exclude fields from the subset specified in `_source_includes` query parameter.
     * If the `_source` parameter is `false`, this parameter is ignored.
     */
    _source_excludes?: Fields
    /**
     * Whether vectors should be excluded from _source
     * @availability stack since=9.2.0
     * @availability serverless
     * @server_default false
     */
    _source_exclude_vectors?: boolean
    /**
     * A comma-separated list of source fields to include in the response.
     * If this parameter is specified, only these source fields are returned.
     * You can exclude fields from this subset using the `_source_excludes` query parameter.
     * If the `_source` parameter is `false`, this parameter is ignored.
     */
    _source_includes?: Fields
    /**
     * If `true`, the request returns the sequence number and primary term of the last modification of each hit.
     * @ext_doc_id optimistic-concurrency
     */
    seq_no_primary_term?: boolean
    /**
     * A query in the Lucene query string syntax.
     * Query parameter searches do not support the full Elasticsearch Query DSL but are handy for testing.
     *
     * IMPORTANT: This parameter overrides the query parameter in the request body.
     * If both parameters are specified, documents matching the query request body parameter are not returned.
     */
    q?: string
    /**
     * The number of hits to return.
     * By default, you cannot page through more than 10,000 hits using the `from` and `size` parameters.
     * To page through more hits, use the `search_after` parameter.
     * @server_default 10
     */
    size?: integer
    /**
     * The starting document offset, which must be non-negative.
     * By default, you cannot page through more than 10,000 hits using the `from` and `size` parameters.
     * To page through more hits, use the `search_after` parameter.
     * @server_default 0
     */
    from?: integer
    /**
     * A comma-separated list of `<field>:<direction>` pairs.
     * @ext_doc_id sort-search-results
     */
    sort?: string | string[]
    /**
     * Should this request force synthetic _source?
     * Use this to test if the mapping supports synthetic _source and to get a sense of the worst case performance.
     * Fetches with this enabled will be slower the enabling synthetic source natively in the index.
     * @availability stack since=8.4.0 visibility=feature_flag feature_flag=es.index_mode_feature_flag_registered
     */
    force_synthetic_source?: boolean
  }
  // Keep this in sync with global/search/_types/SearchRequestBody.ts
  body?: {
    /**
     * Defines the aggregations that are run as part of the search request.
     * @aliases aggs
     * @ext_doc_id search-aggregations
     */ // ES uses "aggregations" in serialization
    aggregations?: Dictionary<string, AggregationContainer>
    /**
     * Collapses search results the values of the specified field.
     */
    collapse?: FieldCollapse
    /**
     * If `true`, the request returns detailed information about score computation as part of a hit.
     * @server_default false
     */
    explain?: boolean
    /**
     * Configuration of search extensions defined by Elasticsearch plugins.
     */
    ext?: Dictionary<string, UserDefinedValue>
    /**
     * The starting document offset, which must be non-negative.
     * By default, you cannot page through more than 10,000 hits using the `from` and `size` parameters.
     * To page through more hits, use the `search_after` parameter.
     * @server_default 0
     */
    from?: integer
    /**
     * Specifies the highlighter to use for retrieving highlighted snippets from one or more fields in your search results.
     * @ext_doc_id search-highlight
     */
    highlight?: Highlight
    /**
     * Number of hits matching the query to count accurately.
     * If `true`, the exact number of hits is returned at the cost of some performance.
     * If `false`, the  response does not include the total number of hits matching the query.
     * @server_default 10000
     */
    track_total_hits?: TrackHits
    /**
     * Boost the `_score` of documents from specified indices.
     * The boost value is the factor by which scores are multiplied.
     * A boost value greater than `1.0` increases the score.
     * A boost value between `0` and `1.0` decreases the score.
     * @ext_doc_id relevance-scores
     */
    indices_boost?: Array<SingleKeyDictionary<IndexName, double>>
    /**
     * An array of wildcard (`*`) field patterns.
     * The request returns doc values for field names matching these patterns in the `hits.fields` property of the response.
     * @ext_doc_id docvalue-fields
     */
    docvalue_fields?: FieldAndFormat[]
    /**
     * The approximate kNN search to run.
     * @availability stack since=8.4.0
     * @availability serverless
     * @ext_doc_id knn-approximate
     */
    knn?: KnnSearch | KnnSearch[]
    /**
     * The Reciprocal Rank Fusion (RRF) to use.
     * @availability stack since=8.8.0
     */
    rank?: RankContainer
    /**
     * The minimum `_score` for matching documents.
     * Documents with a lower `_score` are not included in search results and results collected by aggregations.
     */
    min_score?: double
    /**
     * Use the `post_filter` parameter to filter search results.
     * The search hits are filtered after the aggregations are calculated.
     * A post filter has no impact on the aggregation results.
     * @ext_doc_id filter-search-results
     */
    post_filter?: QueryContainer
    /**
     * Set to `true` to return detailed timing information about the execution of individual components in a search request.
     * NOTE: This is a debugging tool and adds significant overhead to search execution.
     * @server_default false
     * @ext_doc_id search-profile
     */
    profile?: boolean
    /**
     * The search definition using the Query DSL.
     * @ext_doc_id query-dsl
     */
    query?: QueryContainer
    /**
     * Can be used to improve precision by reordering just the top (for example 100 - 500) documents returned by the `query` and `post_filter` phases.
     * @ext_doc_id rescore-search-results
     */
    rescore?: Rescore | Rescore[]
    /**
     * A retriever is a specification to describe top documents returned from a search.
     * A retriever replaces other elements of the search API that also return top documents such as `query` and `knn`.
     * @availability stack since=8.14.0 stability=stable
     * @availability serverless stability=stable
     * @ext_doc_id search-retrievers
     */
    retriever?: RetrieverContainer
    /**
     * Retrieve a script evaluation (based on different fields) for each hit.
     */
    script_fields?: Dictionary<string, ScriptField>
    /**
     * Used to retrieve the next page of hits using a set of sort values from the previous page.
     * @ext_doc_id search-after
     */
    search_after?: SortResults
    /**
     * The number of hits to return, which must not be negative.
     * By default, you cannot page through more than 10,000 hits using the `from` and `size` parameters.
     * To page through more hits, use the `search_after` property.
     * @server_default 10
     */
    size?: integer
    /**
     * Split a scrolled search into multiple slices that can be consumed independently.
     * @ext_doc_id slice-scroll
     */
    slice?: SlicedScroll
    /**
     * A comma-separated list of <field>:<direction> pairs.
     * @ext_doc_id sort-search-results
     */
    sort?: Sort
    /**
     * The source fields that are returned for matching documents.
     * These fields are returned in the `hits._source` property of the search response.
     * If the `stored_fields` property is specified, the `_source` property defaults to `false`.
     * Otherwise, it defaults to `true`.
     * @ext_doc_id source-filtering
     */
    _source?: SourceConfig
    /**
     * An array of wildcard (`*`) field patterns.
     * The request returns values for field names matching these patterns in the `hits.fields` property of the response.
     */
    fields?: Array<FieldAndFormat>
    /**
     * Defines a suggester that provides similar looking terms based on a provided text.
     * @ext_doc_id suggester
     */
    suggest?: Suggester
    /**
     * The maximum number of documents to collect for each shard.
     * If a query reaches this limit, Elasticsearch terminates the query early.
     * Elasticsearch collects documents before sorting.
     *
     * IMPORTANT: Use with caution.
     * Elasticsearch applies this property to each shard handling the request.
     * When possible, let Elasticsearch perform early termination automatically.
     * Avoid specifying this property for requests that target data streams with backing indices across multiple data tiers.
     *
     * If set to `0` (default), the query does not terminate early.
     * @server_default 0
     */
    terminate_after?: long
    /**
     * The period of time to wait for a response from each shard.
     * If no response is received before the timeout expires, the request fails and returns an error.
     * Defaults to no timeout.
     */
    timeout?: string
    /**
     * If `true`, calculate and return document scores, even if the scores are not used for sorting.
     * @server_default false
     */
    track_scores?: boolean
    /**
     * If `true`, the request returns the document version as part of a hit.
     * @server_default false
     */
    version?: boolean
    /**
     * If `true`, the request returns sequence number and primary term of the last modification of each hit.
     * @ext_doc_id optimistic-concurrency
     */
    seq_no_primary_term?: boolean
    /**
     * A comma-separated list of stored fields to return as part of a hit.
     * If no fields are specified, no stored fields are included in the response.
     * If this field is specified, the `_source` property defaults to `false`.
     * You can pass `_source: true` to return both source fields and stored fields in the search response.
     * @ext_doc_id stored-fields
     */
    stored_fields?: Fields
    /**
     * Limit the search to a point in time (PIT).
     * If you provide a PIT, you cannot specify an `<index>` in the request path.
     */
    pit?: PointInTimeReference
    /**
     * One or more runtime fields in the search request.
     * These fields take precedence over mapped fields with the same name.
     * @ext_doc_id runtime-search-request
     */
    runtime_mappings?: RuntimeFields
    /**
     * The stats groups to associate with the search.
     * Each group maintains a statistics aggregation for its associated searches.
     * You can retrieve these stats using the indices stats API.
     */
    stats?: string[]
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
  }
}
