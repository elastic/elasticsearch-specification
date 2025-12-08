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
  Routing,
  SearchType,
  SuggestMode
} from '@_types/common'
import { KnnSearch } from '@_types/Knn'
import { RuntimeFields } from '@_types/mapping/RuntimeFields'
import { double, integer, long } from '@_types/Numeric'
import { FieldAndFormat, QueryContainer } from '@_types/query_dsl/abstractions'
import { Operator } from '@_types/query_dsl/Operator'
import { ScriptField } from '@_types/Scripting'
import { SlicedScroll } from '@_types/SlicedScroll'
import { Sort, SortResults } from '@_types/sort'
import { Duration } from '@_types/Time'
import { FieldCollapse } from '@global/search/_types/FieldCollapse'
import { Highlight } from '@global/search/_types/highlighting'
import { TrackHits } from '@global/search/_types/hits'
import { PointInTimeReference } from '@global/search/_types/PointInTimeReference'
import { Rescore } from '@global/search/_types/rescoring'
import {
  SourceConfig,
  SourceConfigParam
} from '@global/search/_types/SourceFilter'
import { Suggester } from '@global/search/_types/suggester'
import { Dictionary, SingleKeyDictionary } from '@spec_utils/Dictionary'
import { UserDefinedValue } from '@spec_utils/UserDefinedValue'

/**
 * Run an async search.
 *
 * When the primary sort of the results is an indexed field, shards get sorted based on minimum and maximum value that they hold for that field. Partial results become available following the sort criteria that was requested.
 *
 * Warning: Asynchronous search does not support scroll or search requests that include only the suggest section.
 *
 * By default, Elasticsearch does not allow you to store an async search response larger than 10Mb and an attempt to do this results in an error.
 * The maximum allowed size for a stored async search response can be set by changing the `search.max_async_search_response_size` cluster level setting.
 * @rest_spec_name async_search.submit
 * @availability stack since=7.7.0 stability=stable
 * @availability serverless stability=stable visibility=public
 * @doc_id async-search
 * @doc_tag search
 */
// NOTE: this is a SearchRequest with:
//  * 2 added parameters: wait_for_completion_timeout, keep_on_completion and keep_alive
//  * 2 removed parameters: scroll, pre_filter_shard_size
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_async_search'
      methods: ['POST']
    },
    {
      path: '/{index}/_async_search'
      methods: ['POST']
    }
  ]
  path_parts: {
    /** A comma-separated list of index names to search; use `_all` or empty string to perform the operation on all indices */
    index?: Indices
  }
  query_parameters: {
    /**
     * Blocks and waits until the search is completed up to a certain timeout.
     * When the async search completes within the timeout, the response won’t include the ID as the results are not stored in the cluster.
     * @server_default 1s
     */
    wait_for_completion_timeout?: Duration
    /**
     * Specifies how long the async search needs to be available.
     * Ongoing async searches and any saved search results are deleted after this period.
     * @server_default 5d
     */
    keep_alive?: Duration
    /**
     * If `true`, results are stored for later retrieval when the search completes within the `wait_for_completion_timeout`.
     * @server_default false
     */
    keep_on_completion?: boolean
    /**
     * Whether to ignore if a wildcard indices expression resolves into no concrete indices.
     * (This includes `_all` string or when no indices have been specified)
     */
    allow_no_indices?: boolean
    /**
     * Indicate if an error should be returned if there is a partial search failure or timeout
     * @server_default true
     */
    allow_partial_search_results?: boolean
    /**
     * The analyzer to use for the query string
     */
    analyzer?: string
    /**
     * Specify whether wildcard and prefix queries should be analyzed
     * @server_default false
     */
    analyze_wildcard?: boolean
    /**
     * Affects how often partial results become available, which happens whenever shard results are reduced.
     * A partial reduction is performed every time the coordinating node has received a certain number of new shard responses (5 by default).
     * @server_default 5
     */
    batched_reduce_size?: long
    /**
     * The default value is the only supported value.
     * @server_default false
     */
    ccs_minimize_roundtrips?: boolean
    /**
     * The default operator for query string query (AND or OR)
     * @server_default or
     */
    default_operator?: Operator
    /**
     * The field to use as default where no field prefix is given in the query string
     */
    df?: string
    /**
     * A comma-separated list of fields to return as the docvalue representation of a field for each hit
     */
    docvalue_fields?: Fields
    /**
     * Whether to expand wildcard expression to concrete indices that are open, closed or both
     * @server_default open
     */
    expand_wildcards?: ExpandWildcards
    /**
     * Specify whether to return detailed information about score computation as part of a hit
     */
    explain?: boolean
    /**
     * Whether specified concrete, expanded or aliased indices should be ignored when throttled
     */
    ignore_throttled?: boolean
    /**
     * Whether specified concrete indices should be ignored when unavailable (missing or closed)
     */
    ignore_unavailable?: boolean
    /**
     * Specify whether format-based query failures (such as providing text to a numeric field) should be ignored
     */
    lenient?: boolean
    /**
     * The number of concurrent shard requests per node this search executes concurrently.
     * This value should be used to limit the impact of the search on the cluster in order to limit the number of concurrent shard requests
     * @server_default 5
     */
    max_concurrent_shard_requests?: integer
    /**
     * Specify the node or shard the operation should be performed on
     * @server_default random
     */
    preference?: string
    /**
     * Specify if request cache should be used for this request or not, defaults to true
     * @server_default true
     */
    request_cache?: boolean
    /**
     * A comma-separated list of specific routing values
     */
    routing?: Routing
    /**
     * Search operation type
     */
    search_type?: SearchType
    /**
     * Specific 'tag' of the request for logging and statistical purposes
     */
    stats?: string[]
    /**
     * A comma-separated list of stored fields to return as part of a hit
     */
    stored_fields?: Fields
    /**
     * Specifies which field to use for suggestions.
     */
    suggest_field?: Field
    /**
     * Specify suggest mode
     * @server_default missing
     */
    suggest_mode?: SuggestMode
    /**
     * How many suggestions to return in response
     */
    suggest_size?: long
    /**
     * The source text for which the suggestions should be returned.
     */
    suggest_text?: string
    /**
     * The maximum number of documents to collect for each shard, upon reaching which the query execution will terminate early
     */
    terminate_after?: long
    /**
     * Explicit operation timeout
     */
    timeout?: Duration
    /**
     * Indicate if the number of documents that match the query should be tracked.
     * A number can also be specified, to accurately track the total hit count up to the number.
     */
    track_total_hits?: TrackHits
    /**
     * Whether to calculate and return scores even if they are not used for sorting
     */
    track_scores?: boolean
    /**
     * Specify whether aggregation and suggester names should be prefixed by their respective types in the response
     */
    typed_keys?: boolean
    /**
     * Indicates whether hits.total should be rendered as an integer or an object in the rest search response
     * @server_default false
     */
    rest_total_hits_as_int?: boolean
    /**
     * Specify whether to return document version as part of a hit
     */
    version?: boolean
    /**
     * True or false to return the _source field or not, or a list of fields to return
     */
    _source?: SourceConfigParam
    /**
     * A list of fields to exclude from the returned _source field
     */
    _source_excludes?: Fields
    /**
     * A list of fields to extract and return from the _source field
     */
    _source_includes?: Fields
    /**
     * Specify whether to return sequence number and primary term of the last modification of each hit
     */
    seq_no_primary_term?: boolean
    /**
     * Query in the Lucene query string syntax
     */
    q?: string
    /**
     * Number of hits to return
     * @server_default 10
     */
    size?: integer
    /**
     * Starting offset
     * @server_default 0
     */
    from?: integer
    /**
     * A comma-separated list of <field>:<direction> pairs
     */
    sort?: string | string[]
  }
  body?: {
    /** @aliases aggs */
    aggregations?: Dictionary<string, AggregationContainer>
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
     * Starting document offset. By default, you cannot page through more than 10,000
     * hits using the from and size parameters. To page through more hits, use the
     * search_after parameter.
     * @server_default 0
     */
    from?: integer
    highlight?: Highlight
    /**
     * Number of hits matching the query to count accurately. If true, the exact
     * number of hits is returned at the cost of some performance. If false, the
     * response does not include the total number of hits matching the query.
     * Defaults to 10,000 hits.
     */
    track_total_hits?: TrackHits
    /**
     * Boosts the _score of documents from specified indices.
     */
    indices_boost?: Array<SingleKeyDictionary<IndexName, double>>
    /**
     * Array of wildcard (*) patterns. The request returns doc values for field
     * names matching these patterns in the hits.fields property of the response.
     */
    docvalue_fields?: FieldAndFormat[]
    /**
     * Defines the approximate kNN search to run.
     * @availability stack since=8.4.0
     * @availability serverless
     */
    knn?: KnnSearch | KnnSearch[]
    /**
     * Minimum _score for matching documents. Documents with a lower _score are
     * not included in search results and results collected by aggregations.
     */
    min_score?: double
    post_filter?: QueryContainer
    profile?: boolean
    /**
     * Defines the search definition using the Query DSL.
     */
    query?: QueryContainer
    rescore?: Rescore | Rescore[]
    /**
     * Retrieve a script evaluation (based on different fields) for each hit.
     */
    script_fields?: Dictionary<string, ScriptField>
    search_after?: SortResults
    /**
     * The number of hits to return. By default, you cannot page through more
     * than 10,000 hits using the from and size parameters. To page through more
     * hits, use the search_after parameter.
     * @server_default 10
     */
    size?: integer
    slice?: SlicedScroll
    /** @doc_id sort-search-results */
    sort?: Sort
    /**
     * Indicates which source fields are returned for matching documents. These
     * fields are returned in the hits._source property of the search response.
     */
    _source?: SourceConfig
    /**
     * Array of wildcard (*) patterns. The request returns values for field names
     * matching these patterns in the hits.fields property of the response.
     */
    fields?: Array<FieldAndFormat>
    suggest?: Suggester
    /**
     * Maximum number of documents to collect for each shard. If a query reaches this
     * limit, Elasticsearch terminates the query early. Elasticsearch collects documents
     * before sorting. Defaults to 0, which does not terminate query execution early.
     * @server_default 0
     */
    terminate_after?: long
    /**
     * Specifies the period of time to wait for a response from each shard. If no response
     * is received before the timeout expires, the request fails and returns an error.
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
     * If true, returns sequence number and primary term of the last modification
     * of each hit. See Optimistic concurrency control.
     */
    seq_no_primary_term?: boolean
    /**
     * List of stored fields to return as part of a hit. If no fields are specified,
     * no stored fields are included in the response. If this field is specified, the _source
     * parameter defaults to false. You can pass _source: true to return both source fields
     * and stored fields in the search response.
     */
    stored_fields?: Fields
    /**
     * Limits the search to a point in time (PIT). If you provide a PIT, you
     * cannot specify an <index> in the request path.
     */
    pit?: PointInTimeReference
    /**
     * Defines one or more runtime fields in the search request. These fields take
     * precedence over mapped fields with the same name.
     */
    runtime_mappings?: RuntimeFields
    /**
     * Stats groups to associate with the search. Each group maintains a statistics
     * aggregation for its associated searches. You can retrieve these stats using
     * the indices stats API.
     */
    stats?: string[]
  }
}
