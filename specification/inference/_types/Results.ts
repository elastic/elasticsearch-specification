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

import { float, byte, integer } from '@_types/Numeric'
import { Dictionary } from '@spec_utils/Dictionary'
import { AcknowledgedResponseBase } from '@_types/Base'

/**
 * Sparse Embedding tokens are represented as a dictionary
 * of string to double.
 */
export type SparseVector = Dictionary<string, float>

/**
 * Text Embedding results are represented as Dense Vectors
 * of floats.
 */
export type DenseVector = Array<float>

export class SparseEmbeddingResult {
  embedding: SparseVector
}

/**
 * Text Embedding results containing bytes are represented as Dense
 * Vectors of bytes.
 */
export type DenseByteVector = Array<byte>

/**
 * The text embedding result object for byte representation
 */
export class TextEmbeddingByteResult {
  embedding: DenseByteVector
}

/**
 * The text embedding result object
 */
export class TextEmbeddingResult {
  embedding: DenseVector
}

/**
 * The completion result object
 */
export class CompletionResult {
  result: string
}

/**
 * The rerank result object representing a single ranked document
 * id: the original index of the document in the request
 * score: the score of the document relative to the query
 * text: Optional, the text of the document, if requested
 */
export class RankedDocument {
  index: integer
  score: float
  text?: string
}

/**
 * InferenceResult is an aggregation of mutually exclusive variants
 * @variants container
 */
export class InferenceResult {
  text_embedding_bytes?: Array<TextEmbeddingByteResult>
  text_embedding?: Array<TextEmbeddingResult>
  sparse_embedding?: Array<SparseEmbeddingResult>
  completion?: Array<CompletionResult>
  rerank?: Array<RankedDocument>
}

/**
 * Acknowledged response. For dry_run, contains the list of pipelines which reference the inference endpoint
 */
export class DeleteInferenceEndpointResult extends AcknowledgedResponseBase {
  pipelines: Array<string>
}
