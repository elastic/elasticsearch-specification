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

import { FieldCollapse } from '@global/search/_types/FieldCollapse'
import { Highlight } from '@global/search/_types/highlighting'
import { TrackHits } from '@global/search/_types/hits'
import { PointInTimeReference } from '@global/search/_types/PointInTimeReference'
import { Rescore } from '@global/search/_types/rescoring'
import { SourceConfig } from '@global/search/_types/SourceFilter'
import { Suggester } from '@global/search/_types/suggester'
import { Dictionary } from '@spec_utils/Dictionary'
import { UserDefinedValue } from '@spec_utils/UserDefinedValue'
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

// We should keep this in sync with the normal search request body.
// Extracted so that it can be used by other classes
export class SearchRequestBody {
  /**
   * Defines the aggregations that are run as part of the search request.
   * @aliases aggs */ // ES uses "aggregations" in serialization
  aggregations?: Dictionary<string, AggregationContainer>
  /**
   * Collapses search results the values of the specified field.
   */
  collapse?: FieldCollapse
  /**
   * Array of wildcard (`*`) patterns.
   * The request returns doc values for field names matching these patterns in the `hits.fields` property of the response.
   */
  docvalue_fields?: FieldAndFormat[]
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
   * Array of wildcard (`*`) patterns.
   * The request returns values for field names matching these patterns in the `hits.fields` property of the response.
   */
  fields?: Array<FieldAndFormat>
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
   * Boosts the _score of documents from specified indices.
   */
  indices_boost?: Array<Dictionary<IndexName, double>>
  /**
   * Defines the approximate kNN search to run.
   * @availability stack since=8.4.0
   * @availability serverless
   */
  knn?: KnnSearch | KnnSearch[]
  /**
   * Minimum `_score` for matching documents.
   * Documents with a lower `_score` are not included in the search results.
   */
  min_score?: double
  /**
   * Limits the search to a point in time (PIT).
   * If you provide a PIT, you cannot specify an `<index>` in the request path.
   */
  pit?: PointInTimeReference
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
   * Defines the Reciprocal Rank Fusion (RRF) to use.
   * @availability stack since=8.8.0
   */
  rank?: RankContainer
  /**
   * Can be used to improve precision by reordering just the top (for example 100 - 500) documents returned by the `query` and `post_filter` phases.
   */
  rescore?: Rescore | Rescore[]
  /**
   * A retriever is a specification to describe top documents returned from a search. A retriever replaces other elements of the search API that also return top documents such as query and knn.
   * @availability stack since=8.14.0
   * @availability serverless
   */
  retriever?: RetrieverContainer
  /**
   * Defines one or more runtime fields in the search request.
   * These fields take precedence over mapped fields with the same name.
   */
  runtime_mappings?: RuntimeFields
  /**
   * Retrieve a script evaluation (based on different fields) for each hit.
   */
  script_fields?: Dictionary<string, ScriptField>
  /**
   * Used to retrieve the next page of hits using a set of sort values from the previous page.
   */
  search_after?: SortResults
  /**
   * If `true`, returns sequence number and primary term of the last modification of each hit.
   */
  seq_no_primary_term?: boolean
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
   * Stats groups to associate with the search.
   * Each group maintains a statistics aggregation for its associated searches.
   * You can retrieve these stats using the indices stats API.
   */
  stats?: string[]
  /**
   * List of stored fields to return as part of a hit.
   * If no fields are specified, no stored fields are included in the response.
   * If this field is specified, the `_source` parameter defaults to `false`.
   * You can pass `_source: true` to return both source fields and stored fields in the search response.
   */
  stored_fields?: Fields
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
   * Number of hits matching the query to count accurately.
   * If `true`, the exact number of hits is returned at the cost of some performance.
   * If `false`, the  response does not include the total number of hits matching the query.
   * @server_default 10000
   */
  track_total_hits?: TrackHits
  /**
   * If true, returns document version as part of a hit.
   * @server_default false
   */
  version?: boolean
}
