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

import { AcknowledgedResponseBase } from '@_types/Base'
import { byte, float, integer } from '@_types/Numeric'
import { Dictionary } from '@spec_utils/Dictionary'

/**
 * Sparse Embedding tokens are represented as a dictionary
 * of string to double.
 */
export type SparseVector = Dictionary<string, float>

/**
 * Dense Embedding results are represented as Dense Vectors
 * of floats.
 */
export type DenseVector = Array<float>

export class SparseEmbeddingResult {
  /**
   * Indicates if the text input was truncated in the request sent to the service
   */
  is_truncated: boolean
  embedding: SparseVector
}

/**
 * The response format for the sparse embedding request.
 */
export class SparseEmbeddingInferenceResult {
  sparse_embedding: Array<SparseEmbeddingResult>
}

/**
 * Dense Embedding results containing bytes are represented as Dense
 * Vectors of bytes.
 */
export type DenseByteVector = Array<byte>

/**
 * The dense embedding result object for byte representation
 */
export class DenseEmbeddingByteResult {
  embedding: DenseByteVector
}

/**
 * The dense embedding result object for float representation
 */
export class DenseEmbeddingResult {
  embedding: DenseVector
}

/**
 * TextEmbeddingInferenceResult is an aggregation of mutually exclusive text_embedding variants
 * @variants container
 */
export class TextEmbeddingInferenceResult {
  text_embedding_bytes?: Array<DenseEmbeddingByteResult>
  text_embedding_bits?: Array<DenseEmbeddingByteResult>
  text_embedding?: Array<DenseEmbeddingResult>
}

/**
 * EmbeddingInferenceResult is an aggregation of mutually exclusive embeddings variants
 * @variants container
 */
export class EmbeddingInferenceResult {
  embeddings_bytes?: Array<DenseEmbeddingByteResult>
  embeddings_bits?: Array<DenseEmbeddingByteResult>
  embeddings?: Array<DenseEmbeddingResult>
}

/**
 * The completion result object
 */
export class CompletionResult {
  result: string
}

/**
 * Defines the completion result.
 */
export class CompletionInferenceResult {
  completion: Array<CompletionResult>
}

/**
 * The rerank result object representing a single ranked document
 * id: the original index of the document in the request
 * relevance_score: the relevance_score of the document relative to the query
 * text: Optional, the text of the document, if requested
 */
export class RankedDocument {
  index: integer
  relevance_score: float
  text?: string
}

/**
 * Defines the response for a rerank request.
 */
export class RerankedInferenceResult {
  rerank: Array<RankedDocument>
}

/**
 * Acknowledged response. For dry_run, contains the list of pipelines which reference the inference endpoint
 */
export class DeleteInferenceEndpointResult extends AcknowledgedResponseBase {
  pipelines: Array<string>
}

/**
 * InferenceResult is an aggregation of mutually exclusive variants
 * @variants container
 */
export class InferenceResult {
  embeddings_bytes?: Array<DenseEmbeddingByteResult>
  embeddings_bits?: Array<DenseEmbeddingByteResult>
  embeddings?: Array<DenseEmbeddingResult>
  text_embedding_bytes?: Array<DenseEmbeddingByteResult>
  text_embedding_bits?: Array<DenseEmbeddingByteResult>
  text_embedding?: Array<DenseEmbeddingResult>
  sparse_embedding?: Array<SparseEmbeddingResult>
  completion?: Array<CompletionResult>
  rerank?: Array<RankedDocument>
}
