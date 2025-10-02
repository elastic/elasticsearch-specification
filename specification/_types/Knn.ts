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

import { Field } from '@_types/common'
import { float, integer } from '@_types/Numeric'
import { InnerHits } from '@global/search/_types/hits'
import { QueryBase, QueryContainer } from './query_dsl/abstractions'

export type QueryVector = float[]

/* KnnSearch (used in kNN search) and KnnQuery (ued in kNN queries) are close
 * but different enough to require different classes */

export interface RescoreVector {
  /** Applies the specified oversample factor to k on the approximate kNN search */
  oversample: float
}

export interface KnnSearch {
  /** The name of the vector field to search against */
  field: Field
  /** The query vector */
  query_vector?: QueryVector
  /** The query vector builder. You must provide a query_vector_builder or query_vector, but not both. */
  query_vector_builder?: QueryVectorBuilder
  /** The final number of nearest neighbors to return as top hits */
  k?: integer
  /** The number of nearest neighbor candidates to consider per shard */
  num_candidates?: integer
  /** Boost value to apply to kNN scores */
  boost?: float
  /** Filters for the kNN search query */
  filter?: QueryContainer | QueryContainer[]
  /** The minimum similarity for a vector to be considered a match */
  similarity?: float
  /**
   * If defined, each search hit will contain inner hits.
   * @doc_id knn-inner-hits
   */
  inner_hits?: InnerHits
  /** Apply oversampling and rescoring to quantized vectors
   * @availability stack since=8.18.0
   * @availability serverless
   */
  rescore_vector?: RescoreVector
}

/**
 * @ext_doc_id query-dsl-knn-query
 */
export interface KnnQuery extends QueryBase {
  /** The name of the vector field to search against */
  field: Field
  /** The query vector */
  query_vector?: QueryVector
  /** The query vector builder. You must provide a query_vector_builder or query_vector, but not both. */
  query_vector_builder?: QueryVectorBuilder
  /** The number of nearest neighbor candidates to consider per shard */
  num_candidates?: integer
  /** The final number of nearest neighbors to return as top hits */
  k?: integer
  /** Filters for the kNN search query */
  filter?: QueryContainer | QueryContainer[]
  /** The minimum similarity for a vector to be considered a match */
  similarity?: float
  /** Apply oversampling and rescoring to quantized vectors
   * @availability stack since=8.18.0
   * @availability serverless
   */
  rescore_vector?: RescoreVector
}

/** @variants container */
export interface QueryVectorBuilder {
  text_embedding?: TextEmbedding
}

export interface TextEmbedding {
  /**
   * Model ID is required for all dense_vector fields but
   * may be inferred for semantic_text fields
   * @availability stack since=8.18.0
   * @availability serverless
   */
  model_id?: string
  model_text: string
}
