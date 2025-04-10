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

import { integer } from "@_types/Numeric"

export class ChunkingSettings {

  /**
   * Indicates the type of strategy to use.
   */
  type: ChunkingStrategy

  /**
   * The maximum number of words in a chunk.
   */
  max_chunk_size: integer

  /**
   * The number of overlapping words allowed in chunks. This cannot be 
   * defined as more than half of the max_chunk_size. Required for `word`
   * type chunking settings.
   */
  overlap?: integer

  /**
   * The number of overlapping sentences allowed in chunks. Required for `sentence` type chunking settings. 
   */
  sentence_overlap?: 0 | 1
}

export enum ChunkingStrategy {
  word,
  sentence
}
