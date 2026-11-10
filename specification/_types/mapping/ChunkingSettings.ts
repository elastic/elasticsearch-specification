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

import { integer } from '@_types/Numeric'
import { InferenceChunkingSettings } from '@inference/_types/Services'
import { OverloadOf } from '@spec_utils/behaviors'

export class ChunkingSettings implements OverloadOf<InferenceChunkingSettings> {
  strategy: string
  max_chunk_size: integer
}

export class ChunkRescorerChunkingSettings
  implements OverloadOf<InferenceChunkingSettings>
{
  /**
   * The maximum size of a chunk in words.
   * It is required for the `sentence`, `word` and `recursive` strategies, and not allowed for the `none` strategy.
   * If it is the only setting, the documents are chunked by sentence, without overlap.
   * If no chunking settings are given, the documents are chunked by sentence, without overlap, and the maximum size of a chunk is the window size of the reranking model.
   */
  max_chunk_size?: integer
}
