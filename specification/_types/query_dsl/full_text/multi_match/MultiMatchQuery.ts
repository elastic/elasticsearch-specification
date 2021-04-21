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

import { Fields, Fuzziness, MinimumShouldMatch, MultiTermQueryRewrite } from '@_types/common'
import { double, integer } from '@_types/Numeric'
import { QueryBase } from '@_types/query_dsl/abstractions/query/Query'
import { Operator } from '@_types/query_dsl/Operator'
import { TextQueryType } from './TextQueryType'
import { ZeroTermsQuery } from './ZeroTermsQuery'

export class MultiMatchQuery extends QueryBase {
  analyzer?: string
  auto_generate_synonyms_phrase_query?: boolean
  cutoff_frequency?: double
  fields?: Fields
  fuzziness?: Fuzziness
  fuzzy_rewrite?: MultiTermQueryRewrite
  fuzzy_transpositions?: boolean
  lenient?: boolean
  max_expansions?: integer
  minimum_should_match?: MinimumShouldMatch
  operator?: Operator
  prefix_length?: integer
  query?: string
  slop?: integer
  tie_breaker?: double
  type?: TextQueryType
  use_dis_max?: boolean
  zero_terms_query?: ZeroTermsQuery
}
