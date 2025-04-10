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
