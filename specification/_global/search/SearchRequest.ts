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

import { Dictionary } from '@spec_utils/Dictionary'
import { AggregationContainer } from '@_types/aggregations/AggregationContainer'
import { RequestBase } from '@_types/Base'
import {
  ExpandWildcards,
  Field,
  Fields,
  IndexName,
  Indices,
  Routing,
  SearchType,
  SuggestMode,
  VersionString
} from '@_types/common'
import { RuntimeFields } from '@_types/mapping/RuntimeFields'
import { double, integer, long } from '@_types/Numeric'
import { FieldAndFormat, QueryContainer } from '@_types/query_dsl/abstractions'
import { ScriptField } from '@_types/Scripting'
import { SlicedScroll } from '@_types/SlicedScroll'
import { Duration } from '@_types/Time'
import { FieldCollapse } from './_types/FieldCollapse'
import { Highlight } from './_types/highlighting'
import { PointInTimeReference } from './_types/PointInTimeReference'
import { Rescore } from './_types/rescoring'
import { SourceConfigParam, SourceConfig } from './_types/SourceFilter'
import { Suggester } from './_types/suggester'
import { TrackHits } from '@global/search/_types/hits'
import { Operator } from '@_types/query_dsl/Operator'
import { Sort, SortResults } from '@_types/sort'
import { KnnSearch } from '@_types/Knn'
import { RankContainer } from '@_types/Rank'
import { UserDefinedValue } from '@spec_utils/UserDefinedValue'

/**
 * Returns search hits that match the query defined in the request.
 * You can provide search queries using the `q` query string parameter or the request body.
 * If both are specified, only the query parameter is used.
 * @rest_spec_name search
 * @availability stack since=0.0.0 stability=stable
 * @availability serverless stability=stable visibility=public
 * @index_privileges read
 */
export interface Request extends RequestBase {
  path_parts: {
    /**
     * Comma-separated list of data streams, indices, and aliases to search.
     * Supports wildcards (`*`).
     * To search all data streams and indices, omit this parameter or use `*` or `_all`.
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
     * If true, returns partial results if there are shard request timeouts or shard failures. If false, returns an error with no partial results.
     * @server_default true
     */
    allow_partial_search_results?: boolean
    /**
     * Analyzer to use for the query string.
     * This parameter can only be used when the q query string parameter is specified.
     */
    analyzer?: string
    /**
     *  If true, wildcard and prefix queries are analyzed.
     * This parameter can only be used when the q query string parameter is specified.
     * @server_default false
     */
    analyze_wildcard?: boolean
    /**
     * The number of shard results that should be reduced at once on the coordinating node.
     * This value should be used as a protection mechanism to reduce the memory overhead per search request if the potential number of shards in the request can be large.
     * @server_default 512
     */
    batched_reduce_size?: long
    /**
     * If true, network round-trips between the coordinating node and the remote clusters are minimized when executing cross-cluster search (CCS) requests.
     * @doc_id ccs-network-delays
     * @server_default true
     */
    ccs_minimize_roundtrips?: boolean
    /**
     * The default operator for query string query: AND or OR.
     * This parameter can only be used when the `q` query string parameter is specified.
     * @server_default OR
     */
    default_operator?: Operator
    /**
     * Field to use as default where no field prefix is given in the query string.
     * This parameter can only be used when the q query string parameter is specified.
     */
    df?: string
    /**
     * A comma-separated list of fields to return as the docvalue representation for each hit.
     */
    docvalue_fields?: Fields
    /**
     * Type of index that wildcard patterns can match.
     * If the request can target data streams, this argument determines whether wildcard expressions match hidden data streams.
     * Supports comma-separated values, such as `open,hidden`.
     */
    expand_wildcards?: ExpandWildcards
    /**
     * If `true`, returns detailed information about score computation as part of a hit.
     * @server_default false
     */
    explain?: boolean
    /**
     * If `true`, concrete, expanded or aliased indices will be ignored when frozen.
     * @server_default true
     */
    ignore_throttled?: boolean
    /**
     * If `false`, the request returns an error if it targets a missing or closed index.
     * @server_default false
     */
    ignore_unavailable?: boolean
    /**
     *  If `true`, format-based query failures (such as providing text to a numeric field) in the query string will be ignored.
     * This parameter can only be used when the `q` query string parameter is specified.
     * @server_default false
     */
    lenient?: boolean
    /**
     * Defines the number of concurrent shard requests per node this search executes concurrently.
     * This value should be used to limit the impact of the search on the cluster in order to limit the number of concurrent shard requests.
     * @server_default 5
     */
    max_concurrent_shard_requests?: long
    /**
     * The minimum version of the node that can handle the request
     * Any handling node with a lower version will fail the request.
     */
    min_compatible_shard_node?: VersionString
    /**
     * Nodes and shards used for the search.
     * By default, Elasticsearch selects from eligible nodes and shards using adaptive replica selection, accounting for allocation awareness. Valid values are:
     * `_only_local` to run the search only on shards on the local node;
     * `_local` to, if possible, run the search on shards on the local node, or if not, select shards using the default method;
     * `_only_nodes:<node-id>,<node-id>` to run the search on only the specified nodes IDs, where, if suitable shards exist on more than one selected node, use shards on those nodes using the default method, or if none of the specified nodes are available, select shards from any available node using the default method;
     * `_prefer_nodes:<node-id>,<node-id>` to if possible, run the search on the specified nodes IDs, or if not, select shards using the default method;
     * `_shards:<shard>,<shard>` to run the search only on the specified shards;
     * `<custom-string>` (any string that does not start with `_`) to route searches with the same `<custom-string>` to the same shards in the same order.
     */
    preference?: string
    /**
     * Defines a threshold that enforces a pre-filter roundtrip to prefilter search shards based on query rewriting if the number of shards the search request expands to exceeds the threshold.
     * This filter roundtrip can limit the number of shards significantly if for instance a shard can not match any documents based on its rewrite method (if date filters are mandatory to match but the shard bounds and the query are disjoint).
     * When unspecified, the pre-filter phase is executed if any of these conditions is met:
     * the request targets more than 128 shards;
     * the request targets one or more read-only index;
     * the primary sort of the query targets an indexed field.
     */
    pre_filter_shard_size?: long
    /**
     * If `true`, the caching of search results is enabled for requests where `size` is `0`.
     * Defaults to index level settings.
     */
    request_cache?: boolean
    /**
     * Custom value used to route operations to a specific shard.
     */
    routing?: Routing
    /**
     * Period to retain the search context for scrolling. See Scroll search results.
     * By default, this value cannot exceed `1d` (24 hours).
     * You can change this limit using the `search.max_keep_alive` cluster-level setting.
     * @doc_id scroll-search-results
     */
    scroll?: Duration
    /**
     * How distributed term frequencies are calculated for relevance scoring.
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
     */
    stored_fields?: Fields
    /**
     * Specifies which field to use for suggestions.
     */
    suggest_field?: Field
    /**
     * Specifies the suggest mode.
     * This parameter can only be used when the `suggest_field` and `suggest_text` query string parameters are specified.
     * @server_default missing
     */
    suggest_mode?: SuggestMode
    /**
     * Number of suggestions to return.
     * This parameter can only be used when the `suggest_field` and `suggest_text` query string parameters are specified.
     */
    suggest_size?: long
    /**
     * The source text for which the suggestions should be returned.
     * This parameter can only be used when the `suggest_field` and `suggest_text` query string parameters are specified.
     */
    suggest_text?: string
    /**
     * Maximum number of documents to collect for each shard.
     * If a query reaches this limit, Elasticsearch terminates the query early.
     * Elasticsearch collects documents before sorting.
     * Use with caution.
     * Elasticsearch applies this parameter to each shard handling the request.
     * When possible, let Elasticsearch perform early termination automatically.
     * Avoid specifying this parameter for requests that target data streams with backing indices across multiple data tiers.
     * If set to `0` (default), the query does not terminate early.
     * @server_default 0
     */
    terminate_after?: long
    /**
     * Specifies the period of time to wait for a response from each shard.
     * If no response is received before the timeout expires, the request fails and returns an error.
     */
    timeout?: Duration
    /**
     * Number of hits matching the query to count accurately.
     * If `true`, the exact number of hits is returned at the cost of some performance.
     * If `false`, the response does not include the total number of hits matching the query.
     * @server_default 10000
     */
    track_total_hits?: TrackHits
    /**
     * If `true`, calculate and return document scores, even if the scores are not used for sorting.
     * @server_default false
     */
    track_scores?: boolean
    /**
     * If `true`, aggregation and suggester names are be prefixed by their respective types in the response.
     * @server_default true
     */
    typed_keys?: boolean
    /**
     * Indicates whether `hits.total` should be rendered as an integer or an object in the rest search response.
     * @server_default false
     */
    rest_total_hits_as_int?: boolean
    /**
     * If `true`, returns document version as part of a hit.
     * @server_default false
     */
    version?: boolean
    /**
     * Indicates which source fields are returned for matching documents.
     * These fields are returned in the `hits._source` property of the search response.
     * Valid values are:
     * `true` to return the entire document source;
     * `false` to not return the document source;
     * `<string>` to return the source fields that are specified as a comma-separated list (supports wildcard (`*`) patterns).
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
     * A comma-separated list of source fields to include in the response.
     * If this parameter is specified, only these source fields are returned.
     * You can exclude fields from this subset using the `_source_excludes` query parameter.
     * If the `_source` parameter is `false`, this parameter is ignored.
     */
    _source_includes?: Fields
    /**
     * If `true`, returns sequence number and primary term of the last modification of each hit.
     */
    seq_no_primary_term?: boolean
    /**
     * Query in the Lucene query string syntax using query parameter search.
     * Query parameter searches do not support the full Elasticsearch Query DSL but are handy for testing.
     */
    q?: string
    /**
     * Defines the number of hits to return.
     * By default, you cannot page through more than 10,000 hits using the `from` and `size` parameters.
     * To page through more hits, use the `search_after` parameter.
     * @server_default 10
     */
    size?: integer
    /**
     * Starting document offset.
     * Needs to be non-negative.
     * By default, you cannot page through more than 10,000 hits using the `from` and `size` parameters.
     * To page through more hits, use the `search_after` parameter.
     * @server_default 0
     */
    from?: integer
    /**
     * A comma-separated list of <field>:<direction> pairs.
     * @doc_id sort-search-results
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
  // We should keep this in sync with the multi search request body.
  body: {
    /**
     * Defines the aggregations that are run as part of the search request.
     * @aliases aggs */ // ES uses "aggregations" in serialization
    aggregations?: Dictionary<string, AggregationContainer>
    /**
     * Collapses search results the values of the specified field.
     */
    collapse?: FieldCollapse
    /**
     * If true, returns detailed information about score computation as part of a hit.
     * @server_default false
     */
    explain?: boolean
    /**
     * Configuration of search extensions defined by Elasticsearch plugins.
     */
    ext?: Dictionary<string, UserDefinedValue>
    /**
     * Starting document offset.
     * Needs to be non-negative.
     * By default, you cannot page through more than 10,000 hits using the `from` and `size` parameters.
     * To page through more hits, use the `search_after` parameter.
     * @server_default 0
     */
    from?: integer
    /**
     * Specifies the highlighter to use for retrieving highlighted snippets from one or more fields in your search results.
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
     * Boosts the _score of documents from specified indices.
     */
    indices_boost?: Array<Dictionary<IndexName, double>>
    /**
     * Array of wildcard (`*`) patterns.
     * The request returns doc values for field names matching these patterns in the `hits.fields` property of the response.
     */
    docvalue_fields?: FieldAndFormat[]
    /**
     * Defines the approximate kNN search to run.
     * @availability stack since=8.4.0
     * @availability serverless
     */
    knn?: KnnSearch | KnnSearch[]
    /**
     * Defines the Reciprocal Rank Fusion (RRF) to use.
     * @availability stack since=8.8.0
     * @availability serverless
     */
    rank?: RankContainer
    /**
     * Minimum `_score` for matching documents.
     * Documents with a lower `_score` are not included in the search results.
     */
    min_score?: double
    /**
     * Use the `post_filter` parameter to filter search results.
     * The search hits are filtered after the aggregations are calculated.
     * A post filter has no impact on the aggregation results.
     */
    post_filter?: QueryContainer
    /**
     * Set to `true` to return detailed timing information about the execution of individual components in a search request.
     * NOTE: This is a debugging tool and adds significant overhead to search execution.
     * @server_default false
     */
    profile?: boolean
    /**
     * Defines the search definition using the Query DSL.
     */
    query?: QueryContainer
    /**
     * Can be used to improve precision by reordering just the top (for example 100 - 500) documents returned by the `query` and `post_filter` phases.
     */
    rescore?: Rescore | Rescore[]
    /**
     * Retrieve a script evaluation (based on different fields) for each hit.
     */
    script_fields?: Dictionary<string, ScriptField>
    /**
     * Used to retrieve the next page of hits using a set of sort values from the previous page.
     */
    search_after?: SortResults
    /**
     * The number of hits to return.
     * By default, you cannot page through more than 10,000 hits using the `from` and `size` parameters.
     * To page through more hits, use the `search_after` parameter.
     * @server_default 10
     */
    size?: integer
    /**
     * Can be used to split a scrolled search into multiple slices that can be consumed independently.
     */
    slice?: SlicedScroll
    /**
     * A comma-separated list of <field>:<direction> pairs.
     * @doc_id sort-search-results
     */
    sort?: Sort
    /**
     * Indicates which source fields are returned for matching documents.
     * These fields are returned in the hits._source property of the search response.
     */
    _source?: SourceConfig
    /**
     * Array of wildcard (`*`) patterns.
     * The request returns values for field names matching these patterns in the `hits.fields` property of the response.
     */
    fields?: Array<FieldAndFormat>
    /**
     * Defines a suggester that provides similar looking terms based on a provided text.
     */
    suggest?: Suggester
    /**
     * Maximum number of documents to collect for each shard.
     * If a query reaches this limit, Elasticsearch terminates the query early.
     * Elasticsearch collects documents before sorting.
     * Use with caution.
     * Elasticsearch applies this parameter to each shard handling the request.
     * When possible, let Elasticsearch perform early termination automatically.
     * Avoid specifying this parameter for requests that target data streams with backing indices across multiple data tiers.
     * If set to `0` (default), the query does not terminate early.
     * @server_default 0
     */
    terminate_after?: long
    /**
     * Specifies the period of time to wait for a response from each shard.
     * If no response is received before the timeout expires, the request fails and returns an error.
     * Defaults to no timeout.
     */
    timeout?: string
    /**
     * If true, calculate and return document scores, even if the scores are not used for sorting.
     * @server_default false
     */
    track_scores?: boolean
    /**
     * If true, returns document version as part of a hit.
     * @server_default false
     */
    version?: boolean
    /**
     * If `true`, returns sequence number and primary term of the last modification of each hit.
     */
    seq_no_primary_term?: boolean
    /**
     * List of stored fields to return as part of a hit.
     * If no fields are specified, no stored fields are included in the response.
     * If this field is specified, the `_source` parameter defaults to `false`.
     * You can pass `_source: true` to return both source fields and stored fields in the search response.
     */
    stored_fields?: Fields
    /**
     * Limits the search to a point in time (PIT).
     * If you provide a PIT, you cannot specify an `<index>` in the request path.
     */
    pit?: PointInTimeReference
    /**
     * Defines one or more runtime fields in the search request.
     * These fields take precedence over mapped fields with the same name.
     */
    runtime_mappings?: RuntimeFields
    /**
     * Stats groups to associate with the search.
     * Each group maintains a statistics aggregation for its associated searches.
     * You can retrieve these stats using the indices stats API.
     */
    stats?: string[]
  }
}
