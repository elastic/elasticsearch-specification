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

import { TokenFilterBase } from './token_filters'
import { TokenizerBase } from './tokenizers'

/**
 * An analyzer for Simplified Chinese or mixed Chinese-English text, provided by the `analysis-smartcn` plugin.
 * It uses probabilistic knowledge to find the optimal word segmentation.
 * The analyzer is not configurable.
 */
export class SmartcnAnalyzer {
  type: 'smartcn'
}

/**
 * Splits Simplified Chinese text into sentences and then into words, provided by the `analysis-smartcn` plugin.
 * The tokenizer is not configurable.
 */
export class SmartcnTokenizer extends TokenizerBase {
  type: 'smartcn_tokenizer'
}

/**
 * Legacy alias of the `smartcn_tokenizer` tokenizer, kept for backward compatibility.
 * Use `smartcn_tokenizer` instead.
 */
export class SmartcnSentenceTokenizer extends TokenizerBase {
  type: 'smartcn_sentence'
}

/**
 * Removes the stop words that the `smartcn` analyzer uses, along with any custom stop words, provided by the `analysis-smartcn` plugin.
 */
export class SmartcnStopTokenFilter extends TokenFilterBase {
  type: 'smartcn_stop'
  /**
   * The stop words to remove.
   * Accepts `_smartcn_` for the predefined Smart Chinese list, `_none_` for no stop words, or an array of stop words.
   * The array can include `_smartcn_` to add the predefined list to custom stop words.
   * Defaults to `_smartcn_`.
   * @server_default _smartcn_
   */
  stopwords?: string | string[]
  /**
   * The path to a file that contains a list of stop words to remove.
   * This path must be absolute or relative to the `config` location, and the file must be UTF-8 encoded. Each stop word in the file must be separated by a line break.
   */
  stopwords_path?: string
  /**
   * If `true`, stop word matching is case insensitive.
   * @server_default false
   */
  ignore_case?: boolean
  /**
   * If `true`, the last token of a stream is removed if it's a stop word.
   * @server_default true
   */
  remove_trailing?: boolean
}

/**
 * Legacy no-op token filter that returns tokens unchanged, kept for backward compatibility.
 */
export class SmartcnWordTokenFilter extends TokenFilterBase {
  type: 'smartcn_word'
}
