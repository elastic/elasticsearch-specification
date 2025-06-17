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

import { CharFilter } from '@_types/analysis/char_filters'
import { TokenFilter } from '@_types/analysis/token_filters'
import { Tokenizer } from '@_types/analysis/tokenizers'
import { RequestBase } from '@_types/Base'
import { Field, IndexName } from '@_types/common'
import { TextToAnalyze } from './types'

/**
 * Get tokens from text analysis.
 * The analyze API performs analysis on a text string and returns the resulting tokens.
 *
 * Generating excessive amount of tokens may cause a node to run out of memory.
 * The `index.analyze.max_token_count` setting enables you to limit the number of tokens that can be produced.
 * If more than this limit of tokens gets generated, an error occurs.
 * The `_analyze` endpoint without a specified index will always use `10000` as its limit.
 * @doc_id indices-analyze
 * @ext_doc_id analysis
 * @rest_spec_name indices.analyze
 * @availability stack stability=stable
 * @availability serverless stability=stable visibility=public
 * @index_privileges index
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_analyze'
      methods: ['GET', 'POST']
    },
    {
      path: '/{index}/_analyze'
      methods: ['GET', 'POST']
    }
  ]
  path_parts: {
    /**
     * Index used to derive the analyzer.
     * If specified, the `analyzer` or field parameter overrides this value.
     * If no index is specified or the index does not have a default analyzer, the analyze API uses the standard analyzer.
     * @doc_id analysis-standard-analyzer
     */
    index?: IndexName
  }
  query_parameters: {
    /**
     * Index used to derive the analyzer.
     * If specified, the `analyzer` or field parameter overrides this value.
     * If no index is specified or the index does not have a default analyzer, the analyze API uses the standard analyzer.
     * @doc_id analysis-standard-analyzer
     */
    index?: IndexName
  }
  body: {
    /**
     * The name of the analyzer that should be applied to the provided `text`.
     * This could be a built-in analyzer, or an analyzer that’s been configured in the index.
     * @doc_id analysis-analyzers
     */
    analyzer?: string
    /**
     * Array of token attributes used to filter the output of the `explain` parameter.
     */
    attributes?: string[]
    /**
     * Array of character filters used to preprocess characters before the tokenizer.
     * @doc_id analysis-charfilters
     */
    char_filter?: Array<CharFilter>
    /**
     * If `true`, the response includes token attributes and additional details.
     * @server_default false
     */
    explain?: boolean
    /**
     * Field used to derive the analyzer.
     * To use this parameter, you must specify an index.
     * If specified, the `analyzer` parameter overrides this value.
     */
    field?: Field
    /**
     * Array of token filters used to apply after the tokenizer.
     * @doc_id analysis-tokenfilters
     */
    filter?: Array<TokenFilter>
    /**
     * Normalizer to use to convert text into a single token.
     * @doc_id analysis-normalizers
     */
    normalizer?: string
    /**
     * Text to analyze.
     * If an array of strings is provided, it is analyzed as a multi-value field.
     */
    text?: TextToAnalyze
    /**
     * Tokenizer to use to convert text into tokens.
     * @doc_id analysis-tokenizers
     */
    tokenizer?: Tokenizer
  }
}
