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

import { Aggregate } from '@_types/aggregations/Aggregate'
import {
  AggregateName,
  Id,
  ScrollId,
  SuggestionName,
  UserDefinedObject
} from '@_types/common'
import { double, long } from '@_types/Numeric'
import { ClusterStatistics, ShardStatistics } from '@_types/Stats'
import { Dictionary } from '@spec_utils/Dictionary'
import { HitsMetadata } from './_types/hits'
import { Profile } from './_types/profile'
import { Suggest } from './_types/suggester'

// Keep changes in sync with:
// - search
// - fleet.search
// - scroll
export class Response<TDocument> {
  /** @codegen_name result */
  body: ResponseBody<TDocument>
}

export class ResponseBody<TDocument> {
  // Has to be kept in sync with SearchTemplateResponse
  /**
   * The number of milliseconds it took Elasticsearch to run the request.
   * This value is calculated by measuring the time elapsed between receipt of a request on the coordinating node and the time at which the coordinating node is ready to send the response.
   * It includes:
   *
   * * Communication time between the coordinating node and data nodes
   * * Time the request spends in the search thread pool, queued for execution
   * * Actual run time
   *
   * It does not include:
   *
   * * Time needed to send the request to Elasticsearch
   * * Time needed to serialize the JSON response
   * * Time needed to send the response to a client
   */
  took: long
  /**
   * If `true`, the request timed out before completion; returned results may be partial or empty.
   */
  timed_out: boolean
  /**
   * A count of shards used for the request.
   */
  _shards: ShardStatistics
  /**
   * The returned documents and metadata.
   */
  hits: HitsMetadata<TDocument>
  aggregations?: Dictionary<AggregateName, Aggregate>
  _clusters?: ClusterStatistics
  fields?: UserDefinedObject
  max_score?: double
  num_reduce_phases?: long
  profile?: Profile
  pit_id?: Id
  /**
   * The identifier for the search and its search context.
   * You can use this scroll ID with the scroll API to retrieve the next batch of search results for the request.
   * This property is returned only if the `scroll` query parameter is specified in the request.
   * @ext_doc_id scroll-search-results
   */
  _scroll_id?: ScrollId
  suggest?: Dictionary<SuggestionName, Suggest<TDocument>[]>
  terminated_early?: boolean
}
