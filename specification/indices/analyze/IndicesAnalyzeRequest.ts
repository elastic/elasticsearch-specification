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

import { CharFilter } from '@_types/analysis/char_filters/CharFilterBase'
import { Tokenizer } from '@_types/analysis/tokenizers/TokenizerBase'
import { TokenFilter } from '@_types/analysis/token_filters/TokenFilterBase'
import { RequestBase } from '@_types/Base'
import { Field, IndexName } from '@_types/common'

/**
 * @rest_spec_name indices.analyze
 * @since 0.0.0
 * @stability TODO
 */
export interface Request extends RequestBase {
  path_parts?: {
    index?: IndexName
  }
  query_parameters?: {}
  body?: {
    analyzer?: string
    attributes?: string[]
    char_filter?: Array<string | CharFilter>
    explain?: boolean
    field?: Field
    filter?: Array<string | TokenFilter>
    normalizer?: string
    text?: TextToAnalyze
    tokenizer?: string | Tokenizer
  }
}

export type TextToAnalyze = string | Array<string>
