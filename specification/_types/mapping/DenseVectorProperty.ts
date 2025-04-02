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

import { float, integer } from '@_types/Numeric'
import { PropertyBase } from './Property'

export class DenseVectorProperty extends PropertyBase {
  type: 'dense_vector'
  /**
   * Number of vector dimensions. Can't exceed `4096`. If `dims` is not specified, it will be set to the length of
   * the first vector added to the field.
   */
  dims?: integer
  /**
   * The data type used to encode vectors. The supported data types are `float` (default), `byte`, and `bit`.
   * @server_default float
   */
  element_type?: DenseVectorElementType
  /**
   * If `true`, you can search this field using the kNN search API.
   * @server_default true
   */
  index?: boolean
  /**
   * An optional section that configures the kNN indexing algorithm. The HNSW algorithm has two internal parameters
   * that influence how the data structure is built. These can be adjusted to improve the accuracy of results, at the
   * expense of slower indexing speed.
   *
   * This parameter can only be specified when `index` is `true`.
   */
  index_options?: DenseVectorIndexOptions
  /**
   * The vector similarity metric to use in kNN search.
   *
   * Documents are ranked by their vector field's similarity to the query vector. The `_score` of each document will
   * be derived from the similarity, in a way that ensures scores are positive and that a larger score corresponds
   * to a higher ranking.
   *
   * Defaults to `l2_norm` when `element_type` is `bit` otherwise defaults to `cosine`.
   *
   * `bit` vectors only support `l2_norm` as their similarity metric.
   *
   * This parameter can only be specified when `index` is `true`.
   */
  similarity?: DenseVectorSimilarity
}

export enum DenseVectorElementType {
  /**
   * Indexes a single bit per dimension. Useful for very high-dimensional vectors or models that specifically support
   * bit vectors.
   *
   * NOTE: when using `bit`, the number of dimensions must be a multiple of `8` and must represent the number of bits.
   */
  bit,
  /**
   * Indexes a 1-byte integer value per dimension.
   */
  byte,
  /**
   * Indexes a 4-byte floating-point value per dimension.
   */
  float
}

export enum DenseVectorSimilarity {
  /**
   * Computes the cosine similarity. During indexing Elasticsearch automatically normalizes vectors with `cosine`
   * similarity to unit length. This allows to internally use `dot_product` for computing similarity, which is more
   * efficient. Original un-normalized vectors can be still accessed through scripts.
   *
   * The document `_score` is computed as `(1 + cosine(query, vector)) / 2`.
   *
   * The `cosine` similarity does not allow vectors with zero magnitude, since cosine is not defined in this case.
   */
  cosine,
  /**
   * Computes the dot product of two unit vectors. This option provides an optimized way to perform cosine similarity.
   * The constraints and computed score are defined by `element_type`.
   *
   * When `element_type` is `float`, all vectors must be unit length, including both document and query vectors.
   *
   * The document `_score` is computed as `(1 + dot_product(query, vector)) / 2`.
   *
   * When `element_type` is `byte`, all vectors must have the same length including both document and query vectors or
   * results will be inaccurate.
   *
   * The document `_score` is computed as `0.5 + (dot_product(query, vector) / (32768 * dims))` where `dims` is the
   * number of dimensions per vector.
   */
  dot_product,
  /**
   * Computes similarity based on the `L2` distance (also known as Euclidean distance) between the vectors.
   *
   * The document `_score` is computed as `1 / (1 + l2_norm(query, vector)^2)`.
   *
   * For `bit` vectors, instead of using `l2_norm`, the `hamming` distance between the vectors is used.
   *
   * The `_score` transformation is `(numBits - hamming(a, b)) / numBits`.
   */
  l2_norm,
  /**
   * Computes the maximum inner product of two vectors. This is similar to `dot_product`, but doesn't require vectors
   * to be normalized. This means that each vector’s magnitude can significantly effect the score.
   *
   * The document `_score` is adjusted to prevent negative values. For `max_inner_product` values `< 0`, the `_score`
   * is `1 / (1 + -1 * max_inner_product(query, vector))`. For non-negative `max_inner_product` results the `_score`
   * is calculated `max_inner_product(query, vector) + 1`.
   */
  max_inner_product
}

export class DenseVectorIndexOptions {
  /**
   * The confidence interval to use when quantizing the vectors. Can be any value between and including `0.90` and
   * `1.0` or exactly `0`. When the value is `0`, this indicates that dynamic quantiles should be calculated for
   * optimized quantization. When between `0.90` and `1.0`, this value restricts the values used when calculating
   * the quantization thresholds.
   *
   * For example, a value of `0.95` will only use the middle `95%` of the values when calculating the quantization
   * thresholds (e.g. the highest and lowest `2.5%` of values will be ignored).
   *
   * Defaults to `1/(dims + 1)` for `int8` quantized vectors and `0` for `int4` for dynamic quantile calculation.
   *
   * Only applicable to `int8_hnsw`, `int4_hnsw`, `int8_flat`, and `int4_flat` index types.
   */
  confidence_interval?: float
  /**
   * The number of candidates to track while assembling the list of nearest neighbors for each new node.
   *
   * Only applicable to `hnsw`, `int8_hnsw`, `bbq_hnsw`, and `int4_hnsw` index types.
   * @server_default 100
   */
  ef_construction?: integer
  /**
   * The number of neighbors each node will be connected to in the HNSW graph.
   *
   * Only applicable to `hnsw`, `int8_hnsw`, `bbq_hnsw`, and `int4_hnsw` index types.
   * @server_default 16
   */
  m?: integer
  /**
   * The type of kNN algorithm to use.
   */
  type: DenseVectorIndexOptionsType
  /**
   * The rescore vector options. This is only applicable to `bbq_hnsw`, `int4_hnsw`, `int8_hnsw`, `bbq_flat`, `int4_flat`, and `int8_flat` index types.
   */
  rescore_vector?: DenseVectorIndexOptionsRescoreVector
}

export enum DenseVectorIndexOptionsType {
  /**
   * This utilizes a brute-force search algorithm in addition to automatically quantizing to binary vectors.
   * Only supports `element_type` of `float`.
   */
  bbq_flat,
  /**
   * This utilizes the HNSW algorithm in addition to automatic binary quantization for scalable approximate kNN
   * search with `element_type` of `float`.
   *
   * This can reduce the memory footprint by nearly 32x at the cost of some accuracy.
   */
  bbq_hnsw,
  /**
   * This utilizes a brute-force search algorithm for exact kNN search. This supports all `element_type` values.
   */
  flat,
  /**
   * This utilizes the HNSW algorithm for scalable approximate kNN search. This supports all `element_type` values.
   */
  hnsw,
  /**
   * This utilizes a brute-force search algorithm in addition to automatically half-byte scalar quantization.
   * Only supports `element_type` of `float`.
   */
  int4_flat,
  /**
   * This utilizes the HNSW algorithm in addition to automatically scalar quantization for scalable approximate kNN
   * search with `element_type` of `float`.
   *
   * This can reduce the memory footprint by 8x at the cost of some accuracy.
   */
  int4_hnsw,
  /**
   * This utilizes a brute-force search algorithm in addition to automatically scalar quantization. Only supports
   * `element_type` of `float`.
   */
  int8_flat,
  /**
   * The default index type for `float` vectors. This utilizes the HNSW algorithm in addition to automatically scalar
   * quantization for scalable approximate kNN search with `element_type` of `float`.
   *
   * This can reduce the memory footprint by 4x at the cost of some accuracy.
   */
  int8_hnsw
}

export class DenseVectorIndexOptionsRescoreVector {
  /**
   * The oversampling factor to use when searching for the nearest neighbor. This is only applicable to the quantized formats: `bbq_*`, `int4_*`, and `int8_*`.
   * When provided, `oversample * k` vectors will be gathered and then their scores will be re-computed with the original vectors.
   *
   * valid values are between `1.0` and `10.0` (inclusive), or `0` exactly to disable oversampling.
   */
  oversample: float
}
