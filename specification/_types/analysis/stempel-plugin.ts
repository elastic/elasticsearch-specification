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

import { StopWords } from './StopWords'
import { TokenFilterBase } from './token_filters'

/**
 * An analyzer for Polish text, provided by the `analysis-stempel` plugin.
 * The analyzer is not configurable.
 */
export class PolishAnalyzer {
  type: 'polish'
}

/**
 * Stems Polish words with the Stempel stemmer, provided by the `analysis-stempel` plugin.
 * The token filter is not configurable.
 */
export class PolishStemTokenFilter extends TokenFilterBase {
  type: 'polish_stem'
}

/**
 * Removes Polish stop words, along with any custom stop words, provided by the `analysis-stempel` plugin.
 */
export class PolishStopTokenFilter extends TokenFilterBase {
  type: 'polish_stop'
  /**
   * The stop words to remove.
   * This filter supports only the `_polish_` predefined list. Use `_none_` for no stop words, or an array of stop words
   * that can include `_polish_` to add the predefined list to custom stop words.
   * Defaults to `_polish_`.
   * @server_default _polish_
   */
  stopwords?: StopWords
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
