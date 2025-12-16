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
import { CharFilterBase } from './char_filters'
import { StopWords } from './StopWords'
import { TokenFilterBase } from './token_filters'
import { TokenizerBase } from './tokenizers'

export class KuromojiAnalyzer {
  type: 'kuromoji'
  mode?: KuromojiTokenizationMode
  user_dictionary?: string
}

export class JaStopTokenFilter extends TokenFilterBase {
  type: 'ja_stop'
  stopwords?: StopWords
}

export class KuromojiIterationMarkCharFilter extends CharFilterBase {
  type: 'kuromoji_iteration_mark'
  normalize_kana: boolean
  normalize_kanji: boolean
}

export class KuromojiPartOfSpeechTokenFilter extends TokenFilterBase {
  type: 'kuromoji_part_of_speech'
  stoptags: string[]
}

export class KuromojiReadingFormTokenFilter extends TokenFilterBase {
  type: 'kuromoji_readingform'
  use_romaji: boolean
}

export class KuromojiStemmerTokenFilter extends TokenFilterBase {
  type: 'kuromoji_stemmer'
  minimum_length: integer
}

export enum KuromojiTokenizationMode {
  normal,
  search,
  extended
}

export class KuromojiTokenizer extends TokenizerBase {
  type: 'kuromoji_tokenizer'
  discard_punctuation?: boolean
  mode: KuromojiTokenizationMode
  nbest_cost?: integer
  nbest_examples?: string
  user_dictionary?: string
  user_dictionary_rules?: string[]
  discard_compound_token?: boolean
}
