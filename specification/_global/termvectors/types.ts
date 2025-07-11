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

import { double, integer, long } from '@_types/Numeric'
import { Dictionary } from '@spec_utils/Dictionary'

export class TermVector {
  field_statistics?: FieldStatistics
  terms: Dictionary<string, Term>
}

export class FieldStatistics {
  doc_count: integer
  sum_doc_freq: long
  sum_ttf: long
}

export class Term {
  doc_freq?: integer
  score?: double
  term_freq: integer
  tokens?: Token[]
  ttf?: integer
}

export class Token {
  end_offset?: integer
  payload?: string
  position: integer
  start_offset?: integer
}

export class Filter {
  /**
   * Ignore words which occur in more than this many docs.
   * Defaults to unbounded.
   */
  max_doc_freq?: integer
  /**
   * The maximum number of terms that must be returned per field.
   * @server_default 25
   */
  max_num_terms?: integer
  /**
   * Ignore words with more than this frequency in the source doc.
   * It defaults to unbounded.
   */
  max_term_freq?: integer
  /**
   * The maximum word length above which words will be ignored.
   * Defaults to unbounded.
   * @server_default 0
   */
  max_word_length?: integer
  /**
   * Ignore terms which do not occur in at least this many docs.
   * @server_default 1
   */
  min_doc_freq?: integer
  /**
   * Ignore words with less than this frequency in the source doc.
   * @server_default 1
   */
  min_term_freq?: integer
  /**
   * The minimum word length below which words will be ignored.
   * @server_default 0
   */
  min_word_length?: integer
}
