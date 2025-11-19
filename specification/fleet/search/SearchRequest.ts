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
  IndexAlias,
  IndexName,
  Routing,
  SearchType,
  SuggestMode
} from '@_types/common'
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
import { Checkpoint } from '../_types/Checkpoints'

/**
 * Run a Fleet search.
 *
 * The purpose of the Fleet search API is to provide an API where the search will be run only
 * after the provided checkpoint has been processed and is visible for searches inside of Elasticsearch.
 * @rest_spec_name fleet.search
 * @availability stack since=7.16.0 stability=experimental
 * @availability serverless stability=experimental visibility=private
 * @index_privileges read
 * @doc_id fleet-search
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/{index}/_fleet/_fleet_search'
      methods: ['GET', 'POST']
    }
  ]
  path_parts: {
    /**
     * A single target to search. If the target is an index alias, it must resolve to a single index.
     */
    index: IndexName | IndexAlias
  }
  query_parameters: {
    allow_no_indices?: boolean
    analyzer?: string
    analyze_wildcard?: boolean
    batched_reduce_size?: long
    ccs_minimize_roundtrips?: boolean
    default_operator?: Operator
    df?: string
    docvalue_fields?: Fields
    expand_wildcards?: ExpandWildcards
    explain?: boolean
    ignore_throttled?: boolean
    ignore_unavailable?: boolean
    lenient?: boolean
    max_concurrent_shard_requests?: integer
    preference?: string
    pre_filter_shard_size?: long
    request_cache?: boolean
    routing?: Routing
    scroll?: Duration
    search_type?: SearchType
    stats?: string[]
    stored_fields?: Fields
    /**
     * Specifies which field to use for suggestions.
     */
    suggest_field?: Field
    suggest_mode?: SuggestMode
    suggest_size?: long
    /**
     * The source text for which the suggestions should be returned.
     */
    suggest_text?: string
    terminate_after?: long
    timeout?: Duration
    track_total_hits?: TrackHits
    track_scores?: boolean
    typed_keys?: boolean
    rest_total_hits_as_int?: boolean
    version?: boolean
    _source?: SourceConfigParam
    _source_excludes?: Fields
    _source_includes?: Fields
    seq_no_primary_term?: boolean
    q?: string
    size?: integer
    from?: integer
    sort?: string | string[]
    /**
     *  A comma separated list of checkpoints. When configured, the search API will only be executed on a shard
     * after the relevant checkpoint has become visible for search. Defaults to an empty list which will cause
     * Elasticsearch to immediately execute the search.
     * @server_default []
     */
    wait_for_checkpoints?: Checkpoint[]
    /**
     * If true, returns partial results if there are shard request timeouts or shard failures.
     * If false, returns an error with no partial results.
     * Defaults to the configured cluster setting `search.default_allow_partial_results`, which is true by default.
     */
    allow_partial_search_results?: boolean
  }
  body: {
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
