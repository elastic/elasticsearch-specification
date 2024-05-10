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

import { float, integer, long } from '@_types/Numeric'
import { QueryContainer } from './query_dsl/abstractions'
import { QueryVector, QueryVectorBuilder } from '@_types/Knn'
import { Sort, SortResults } from '@_types/sort'
import { FieldCollapse } from '@global/search/_types/FieldCollapse'

/**
 * @variants container
 * @non_exhaustive
 */
export class RetrieverContainer {
  /** A retriever that replaces the functionality of a traditional query. */
  standard?: StandardRetriever
  /** A retriever that replaces the functionality  of a knn search. */
  knn?: KnnRetriever
  /** A retriever that produces top documents from reciprocal rank fusion (RRF). */
  rrf?: RRFRetriever
}

export class RetrieverBase {}

export class StandardRetriever extends RetrieverBase {
  /** Defines a query to retrieve a set of top documents. */
  query?: QueryContainer
  /** Applies a boolean query filter to this retriever where all documents must match this query but do not contribute to the score. */
  filter?: QueryContainer | QueryContainer[]
  /** Defines a search after object parameter used for pagination. */
  search_after?: SortResults
  /** Maximum number of documents to collect for each shard. */
  terminate_after?: integer
  /** A sort object that that specifies the order of matching documents. */
  sort?: Sort
  /** Minimum _score for matching documents. Documents with a lower _score are not included in the top documents. */
  min_score?: float
  /** Collapses the top documents by a specified key into a single top document per key. */
  collapse?: FieldCollapse
}

export class KnnRetriever extends RetrieverBase {
  /** The name of the vector field to search against. */
  field: String
  /** Query vector. Must have the same number of dimensions as the vector field you are searching against. You must provide a query_vector_builder or query_vector, but not both. */
  query_vector?: QueryVector
  /** Defines a model to build a query vector. */
  query_vector_builder?: QueryVectorBuilder
  /** Number of nearest neighbors to return as top hits. */
  k: long
  /** Number of nearest neighbor candidates to consider per shard. */
  num_candidates: long
  /** Query to filter the documents that can match. The kNN search will return the top k documents that also match this filter. */
  filter?: QueryContainer | QueryContainer[]
  /** The minimum similarity required for a document to be considered a match.  */
  similarity?: float
}

export class RRFRetriever extends RetrieverBase {
  /** A list of child retrievers to specify which sets of returned top documents will have the RRF formula applied to them.  */
  retrievers: RetrieverContainer[]
  /** This value determines how much influence documents in individual result sets per query have over the final ranked result set. */
  rank_constant?: long
  /** This value determines the size of the individual result sets per query.  */
  window_size?: long
}
