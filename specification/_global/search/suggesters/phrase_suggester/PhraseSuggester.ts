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

import { double, integer } from '@_types/Numeric'
import { SuggesterBase } from '../Suggester'
import { DirectGenerator } from './DirectGenerator'
import { PhraseSuggestCollate } from './PhraseSuggestCollate'
import { PhraseSuggestHighlight } from './PhraseSuggestHighlight'
import { SmoothingModelContainer } from './smoothing_model/SmoothingModelContainer'

export class PhraseSuggester extends SuggesterBase {
  collate?: PhraseSuggestCollate
  confidence?: double
  direct_generator?: DirectGenerator[]
  force_unigrams?: boolean
  gram_size?: integer
  highlight?: PhraseSuggestHighlight
  max_errors?: double
  real_word_error_likelihood?: double
  separator?: string
  shard_size?: integer
  smoothing?: SmoothingModelContainer
  text?: string
  token_limit?: integer
}
