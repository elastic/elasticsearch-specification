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
import { QueryVector, QueryVectorBuilder } from '@_types/Knn'
import { DenseVectorSimilarity } from '@_types/mapping/DenseVectorProperty'
import { QueryBase } from './abstractions'

/**
 * @ext_doc_id query-dsl-dense-vector-query
 */
export class DenseVectorQuery extends QueryBase {
  /**
   * The name of the `dense_vector` field to search against.
   * The field can be indexed, or not indexed (`index: false`).
   */
  field: Field
  /**
   * The query vector. It must have the same number of dimensions as the field.
   * You must provide either `query_vector` or `query_vector_builder`, but not both.
   */
  query_vector?: QueryVector
  /**
   * The configuration to build the query vector, for example by running a text embedding model.
   * You must provide either `query_vector` or `query_vector_builder`, but not both.
   */
  query_vector_builder?: QueryVectorBuilder
  /**
   * The similarity used for scoring, which overrides the similarity of the field for this query.
   * It defaults to the similarity of the field, or to `cosine` for a field that is not indexed.
   * For `bit` fields, only `l2_norm` is supported.
   * It can't be combined with `quantized: true`.
   */
  similarity_function?: DenseVectorSimilarity
  /**
   * If `false`, the documents are scored with the full-precision vectors, regardless of the index options of the field.
   * If `true`, the documents are scored with the quantized vectors of a quantized field, which is faster but less accurate.
   * For a field that is not quantized, `true` has no effect.
   * @server_default false
   */
  quantized?: boolean
}
