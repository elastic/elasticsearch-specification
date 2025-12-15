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
import { Fields, IndexName } from '@_types/common'
import { KnnSearch } from '@_types/Knn'
import { RuntimeFields } from '@_types/mapping/RuntimeFields'
import { double, integer, long } from '@_types/Numeric'
import { FieldAndFormat, QueryContainer } from '@_types/query_dsl/abstractions'
import { RankContainer } from '@_types/Rank'
import { RetrieverContainer } from '@_types/Retriever'
import { ScriptField } from '@_types/Scripting'
import { SlicedScroll } from '@_types/SlicedScroll'
import { Sort, SortResults } from '@_types/sort'
import { FieldCollapse } from '@global/search/_types/FieldCollapse'
import { Highlight } from '@global/search/_types/highlighting'
import { TrackHits } from '@global/search/_types/hits'
import { PointInTimeReference } from '@global/search/_types/PointInTimeReference'
import { Rescore } from '@global/search/_types/rescoring'
import { SourceConfig } from '@global/search/_types/SourceFilter'
import { Suggester } from '@global/search/_types/suggester'
import { Dictionary, SingleKeyDictionary } from '@spec_utils/Dictionary'
import { UserDefinedValue } from '@spec_utils/UserDefinedValue'

// Keep this in sync with the body of /_global/search/SearchRequest.ts
export class SearchRequestBody {
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
   * Documents with a lower `_score` are not included in search results or results collected by aggregations.
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
}
