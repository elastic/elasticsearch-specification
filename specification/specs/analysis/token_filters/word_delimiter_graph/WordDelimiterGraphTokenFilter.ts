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

class WordDelimiterGraphTokenFilter extends TokenFilterBase {
  /** @prop_serializer NullableStringBooleanFormatter */
  adjust_offsets: boolean
  /** @prop_serializer NullableStringBooleanFormatter */
  catenate_all: boolean
  /** @prop_serializer NullableStringBooleanFormatter */
  catenate_numbers: boolean
  /** @prop_serializer NullableStringBooleanFormatter */
  catenate_words: boolean
  /** @prop_serializer NullableStringBooleanFormatter */
  generate_number_parts: boolean
  /** @prop_serializer NullableStringBooleanFormatter */
  generate_word_parts: boolean
  /** @prop_serializer NullableStringBooleanFormatter */
  preserve_original: boolean
  protected_words: string[]
  protected_words_path: string
  /** @prop_serializer NullableStringBooleanFormatter */
  split_on_case_change: boolean
  /** @prop_serializer NullableStringBooleanFormatter */
  split_on_numerics: boolean
  /** @prop_serializer NullableStringBooleanFormatter */
  stem_english_possessive: boolean
  type_table: string[]
  type_table_path: string
}
