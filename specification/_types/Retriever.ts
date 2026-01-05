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
import { QueryVector, QueryVectorBuilder, RescoreVector } from '@_types/Knn'
import { float, integer } from '@_types/Numeric'
import { Sort, SortResults } from '@_types/sort'
import { FieldCollapse } from '@global/search/_types/FieldCollapse'
import { Rescore } from '@global/search/_types/rescoring'
import { UserDefinedValue } from '@spec_utils/UserDefinedValue'
import { Id, IndexName } from './common'
import { QueryContainer } from './query_dsl/abstractions'

/**
 * @variants container
 */
export class RetrieverContainer {
  /** A retriever that replaces the functionality of a traditional query. */
  standard?: StandardRetriever
  /** A retriever that replaces the functionality  of a knn search. */
  knn?: KnnRetriever
  /** A retriever that produces top documents from reciprocal rank fusion (RRF). */
  rrf?: RRFRetriever
  /** A retriever that reranks the top documents based on a reranking model using the InferenceAPI */
  text_similarity_reranker?: TextSimilarityReranker
  /** A retriever that replaces the functionality of a rule query. */
  rule?: RuleRetriever
  /** A retriever that re-scores only the results produced by its child retriever. */
  rescorer?: RescorerRetriever
  /** A retriever that supports the combination of different retrievers through a weighted linear combination. */
  linear?: LinearRetriever
  /**
   * A pinned retriever applies pinned documents to the underlying retriever.
   * This retriever will rewrite to a PinnedQueryBuilder.
   */
  pinned?: PinnedRetriever
}

export class RetrieverBase {
  /** Query to filter the documents that can match. */
  filter?: QueryContainer | QueryContainer[]
  /** Minimum _score for matching documents. Documents with a lower _score are not included in the top documents. */
  min_score?: float
  /** Retriever name. */
  _name?: string
}

export class RescorerRetriever extends RetrieverBase {
  /** Inner retriever. */
  retriever: RetrieverContainer
  rescore: Rescore | Rescore[]
}

export class LinearRetriever extends RetrieverBase {
  /** Inner retrievers. */
  retrievers?: InnerRetriever[]
  rank_window_size?: integer
  query?: string
  fields?: string[]
  normalizer?: ScoreNormalizer
}

export class PinnedRetriever extends RetrieverBase {
  /** Inner retriever. */
  retriever: RetrieverContainer
  ids?: string[]
  docs?: SpecifiedDocument[]
  rank_window_size?: integer
}

export class InnerRetriever {
  retriever: RetrieverContainer
  weight: float
  normalizer: ScoreNormalizer
}

export enum ScoreNormalizer {
  none,
  minmax,
  l2_norm
}

export class SpecifiedDocument {
  index?: IndexName
  id: Id
}

export class StandardRetriever extends RetrieverBase {
  /** Defines a query to retrieve a set of top documents. */
  query?: QueryContainer
  /** Defines a search after object parameter used for pagination. */
  search_after?: SortResults
  /** Maximum number of documents to collect for each shard. */
  terminate_after?: integer
  /** A sort object that that specifies the order of matching documents. */
  sort?: Sort
  /** Collapses the top documents by a specified key into a single top document per key. */
  collapse?: FieldCollapse
}

export class KnnRetriever extends RetrieverBase {
  /** The name of the vector field to search against. */
  field: string
  /** Query vector. Must have the same number of dimensions as the vector field you are searching against. You must provide a query_vector_builder or query_vector, but not both. */
  query_vector?: QueryVector
  /** Defines a model to build a query vector. */
  query_vector_builder?: QueryVectorBuilder
  /** Number of nearest neighbors to return as top hits. */
  k: integer
  /** Number of nearest neighbor candidates to consider per shard. */
  num_candidates: integer
  /** The minimum similarity required for a document to be considered a match.  */
  similarity?: float
  /**
   * Apply oversampling and rescoring to quantized vectors
   * @availability stack since=8.18.0
   * @availability serverless
   */
  rescore_vector?: RescoreVector
}

export class RRFRetriever extends RetrieverBase {
  /** A list of child retrievers to specify which sets of returned top documents will have the RRF formula applied to them.  */
  retrievers: RetrieverContainer[]
  /** This value determines how much influence documents in individual result sets per query have over the final ranked result set. */
  rank_constant?: integer
  /** This value determines the size of the individual result sets per query.  */
  rank_window_size?: integer
  query?: string
  fields?: string[]
}

export class TextSimilarityReranker extends RetrieverBase {
  /** The nested retriever which will produce the first-level results, that will later be used for reranking. */
  retriever: RetrieverContainer
  /** This value determines how many documents we will consider from the nested retriever.  */
  rank_window_size?: integer
  /** Unique identifier of the inference endpoint created using the inference API. */
  inference_id?: string
  /** The text snippet used as the basis for similarity comparison */
  inference_text: string
  /** The document field to be used for text similarity comparisons. This field should contain the text that will be evaluated against the inference_text */
  field: string
}

export class RuleRetriever extends RetrieverBase {
  /** The ruleset IDs containing the rules this retriever is evaluating against. */
  ruleset_ids: Id | Id[]
  /** The match criteria that will determine if a rule in the provided rulesets should be applied. */
  match_criteria: UserDefinedValue
  /** The retriever whose results rules should be applied to. */
  retriever: RetrieverContainer
  /** This value determines the size of the individual result set.  */
  rank_window_size?: integer
}
