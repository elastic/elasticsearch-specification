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

import { ErrorCause } from '@_types/Errors'
import { QueryVector, RescoreVector } from '@_types/Knn'
import { double, float, integer, long } from '@_types/Numeric'
import { DurationValue, UnitMillis } from '@_types/Time'

/**
 * The source of the query vectors of a kNN evaluation.
 * @variants internal tag='from'
 */
export type KnnEvalQuerySource =
  | KnnEvalDocsQuerySource
  | KnnEvalVectorsQuerySource

/**
 * Samples the query vectors from the stored documents.
 */
export class KnnEvalDocsQuerySource {
  from: 'docs'
  /**
   * The number of documents to sample, from 1 to 1000.
   */
  size: integer
  /**
   * The seed of the sampling, to sample the same documents across requests.
   */
  seed?: integer
}

/**
 * Uses the query vectors in the request.
 */
export class KnnEvalVectorsQuerySource {
  from: 'vectors'
  /**
   * The query vectors, from 1 to 1000 entries with unique identifiers.
   */
  vectors: KnnEvalQueryVector[]
}

export class KnnEvalQueryVector {
  /**
   * The identifier of the query, which identifies it in the `failures` of the response.
   */
  id: string
  /**
   * The query vector.
   */
  query_vector: QueryVector
}

export class KnnEvalSettings {
  /**
   * The percentage of postings to visit, from 0 to 100.
   * `0` selects the automatic visit calculation.
   */
  visit_percentage?: float
  /**
   * The number of nearest neighbor candidates to consider per shard.
   * It can't be less than `k`, or more than 10000 (9999 with sampling).
   */
  num_candidates?: integer
  /**
   * The rescoring of the candidates. Only applies to quantized fields.
   */
  rescore_vector?: RescoreVector
  /**
   * If `true`, compares every vector at full precision.
   * Only applies to the `baseline`, requires `allow_exact_baseline`, and can't be combined with other settings.
   * @server_default false
   */
  exact?: boolean
}

export class KnnEvalQuerySourceSummary {
  /**
   * How the query vectors were chosen.
   */
  from: KnnEvalQuerySourceType
}

export enum KnnEvalQuerySourceType {
  docs,
  vectors
}

export class KnnEvalReportedSettings extends KnnEvalSettings {
  /**
   * If `true`, the number of vectors to rescore exceeded the limit of 10000.
   * @server_default false
   */
  rescore_window_capped?: boolean
  /**
   * If `true`, the hits were not rescored, so their scores are estimates, and no query is excluded from the mean recall.
   * @server_default false
   */
  quantized_scores?: boolean
}

export enum KnnEvalVectorOpsKind {
  /**
   * Full-precision comparisons across all the matching vectors.
   */
  full_precision_scan,
  /**
   * Quantized visits plus full-precision rescoring.
   */
  quantized_visit_plus_rescore
}

export class KnnEvalResult {
  /**
   * The evaluated settings.
   */
  knn_settings: KnnEvalReportedSettings
  /**
   * The mean recall of the included queries, or `null` if no query is included.
   */
  recall: double | null
  /**
   * The number of queries included in the mean recall.
   */
  included_queries: long
  /**
   * The number of queries excluded from the mean recall, because the search found a document scoring above the baseline's lowest top `k` score.
   */
  excluded_queries: long
  /**
   * The time the searches took, in milliseconds.
   */
  took_ms: DurationValue<UnitMillis>
  /**
   * The number of vector operations of the searches.
   */
  vector_ops: long
}

export class KnnEvalFailure {
  error: ErrorCause
}
