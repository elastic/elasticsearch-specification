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

import { Dictionary } from '@spec_utils/Dictionary'
import { Field, Id, IndexName, VersionNumber } from '@_types/common'
import { double, integer, long } from '@_types/Numeric'

export class FieldStatistics {
  doc_count: integer
  sum_doc_freq: long
  sum_ttf: long
}

export class TermVector {
  field_statistics: FieldStatistics
  terms: Dictionary<string, TermVectorTerm>
}

export class TermVectorFilter {
  max_doc_freq?: integer
  max_num_terms?: integer
  max_term_freq?: integer
  max_word_length?: integer
  min_doc_freq?: integer
  min_term_freq?: integer
  min_word_length?: integer
}

export class TermVectorsResult {
  found: boolean
  id: Id
  index: IndexName
  term_vectors: Dictionary<Field, TermVector>
  took: long
  version: VersionNumber
}

export class TermVectorTerm {
  doc_freq?: integer
  score?: double
  term_freq: integer
  tokens: Token[]
  ttf?: integer
}

export class Token {
  end_offset?: integer
  payload?: string
  position: integer
  start_offset?: integer
}
