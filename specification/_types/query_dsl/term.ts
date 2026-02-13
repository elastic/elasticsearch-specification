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

import {
  Field,
  FieldValue,
  Fuzziness,
  Id,
  Ids,
  IndexName,
  MinimumShouldMatch,
  MultiTermQueryRewrite
} from '@_types/common'
import { double, integer } from '@_types/Numeric'
import { Script } from '@_types/Scripting'
import { DateFormat, DateMath, TimeZone } from '@_types/Time'
import { AdditionalProperty } from '@spec_utils/behaviors'
import { UserDefinedValue } from '@spec_utils/UserDefinedValue'
import { QueryBase } from './abstractions'

/**
 * @ext_doc_id query-dsl-exists-query
 */
export class ExistsQuery extends QueryBase {
  /**
   * Name of the field you wish to search.
   */
  field: Field
}

/**
 * @shortcut_property value
 * @ext_doc_id query-dsl-fuzzy-query
 */
export class FuzzyQuery extends QueryBase {
  /**
   * Maximum number of variations created.
   * @server_default 50
   */
  max_expansions?: integer
  /**
   * Number of beginning characters left unchanged when creating expansions.
   * @server_default 0
   */
  prefix_length?: integer
  /**
   * Number of beginning characters left unchanged when creating expansions.
   * @doc_id query-dsl-multi-term-rewrite
   * @server_default constant_score
   */
  rewrite?: MultiTermQueryRewrite
  /**
   * Indicates whether edits include transpositions of two adjacent characters (for example `ab` to `ba`).
   * @server_default true
   */
  transpositions?: boolean
  /**
   * Maximum edit distance allowed for matching.
   * @doc_id fuzziness
   */
  fuzziness?: Fuzziness
  /**
   * Term you wish to find in the provided field.
   */
  // ES is lenient and accepts any primitive type, but ultimately converts it to a string.
  // Changing this field definition from UserDefinedValue to string breaks a recording produced from Nest tests,
  // but Nest is probably also overly flexible here and exposes an option that should not exist.
  // eslint-disable-next-line es-spec-validator/no-inline-unions -- TODO: create named alias
  value: string | double | boolean
}

/**
 * @ext_doc_id query-dsl-ids-query
 */
export class IdsQuery extends QueryBase {
  /**
   * An array of document IDs.
   */
  values?: Ids
}

/**
 * @shortcut_property value
 * @ext_doc_id query-dsl-prefix-query
 */
export class PrefixQuery extends QueryBase {
  /**
   * Method used to rewrite the query.
   * @doc_id query-dsl-multi-term-rewrite
   */
  rewrite?: MultiTermQueryRewrite
  /**
   * Beginning characters of terms you wish to find in the provided field.
   */
  value: string
  /**
   * Allows ASCII case insensitive matching of the value with the indexed field values when set to `true`.
   * Default is `false` which means the case sensitivity of matching depends on the underlying field’s mapping.
   * @server_default false
   * @availability stack since=7.10.0
   * @availability serverless
   */
  case_insensitive?: boolean
}

export class RangeQueryBase<T> extends QueryBase {
  /**
   * Indicates how the range query matches values for `range` fields.
   * @server_default intersects
   */
  relation?: RangeRelation
  /**
   * Greater than.
   */
  gt?: T
  /**
   * Greater than or equal to.
   */
  gte?: T
  /**
   * Less than.
   */
  lt?: T
  /**
   * Less than or equal to.
   */
  lte?: T
}

export class UntypedRangeQuery extends RangeQueryBase<UserDefinedValue> {
  /**
   * Date format used to convert `date` values in the query.
   */
  format?: DateFormat
  /**
   *  Coordinated Universal Time (UTC) offset or IANA time zone used to convert `date` values in the query to UTC.
   */
  time_zone?: TimeZone
}

export class DateRangeQuery extends RangeQueryBase<DateMath> {
  /**
   * Date format used to convert `date` values in the query.
   */
  format?: DateFormat
  /**
   *  Coordinated Universal Time (UTC) offset or IANA time zone used to convert `date` values in the query to UTC.
   */
  time_zone?: TimeZone
}

export class NumberRangeQuery extends RangeQueryBase<double> {}

export class TermRangeQuery extends RangeQueryBase<string> {}

/**
 * @codegen_names untyped, date, number, term
 * @variants untagged untyped=_types.query_dsl.UntypedRangeQuery
 * @ext_doc_id query-dsl-range-query
 */
// Note: deserialization depends on value types
export type RangeQuery =
  | UntypedRangeQuery
  | DateRangeQuery
  | NumberRangeQuery
  | TermRangeQuery

export enum RangeRelation {
  /**
   * Matches documents with a range field value entirely within the query’s range.
   */
  within,
  /**
   * Matches documents with a range field value that entirely contains the query’s range.
   */
  contains,
  /**
   * Matches documents with a range field value that intersects the query’s range.
   */
  intersects
}

/**
 * @shortcut_property value
 * @ext_doc_id query-dsl-regexp-query
 */
export class RegexpQuery extends QueryBase {
  /**
   *  Allows case insensitive matching of the regular expression value with the indexed field values when set to `true`.
   * When `false`, case sensitivity of matching depends on the underlying field’s mapping.
   * @server_default false
   * @availability stack since=7.10.0
   * @availability serverless
   */
  case_insensitive?: boolean
  /**
   * Enables optional operators for the regular expression.
   * @doc_id regexp-syntax
   */
  flags?: string
  /**
   * Maximum number of automaton states required for the query.
   * @server_default 10000
   */
  max_determinized_states?: integer
  /**
   * Method used to rewrite the query.
   * @doc_id query-dsl-multi-term-rewrite
   */
  rewrite?: MultiTermQueryRewrite
  /**
   * Regular expression for terms you wish to find in the provided field.
   * @doc_id regexp-syntax
   */
  value: string
}

/**
 * @shortcut_property value
 * @ext_doc_id query-dsl-term-query
 */
export class TermQuery extends QueryBase {
  /**
   * Term you wish to find in the provided field.
   */
  value: FieldValue
  /**
   * Allows ASCII case insensitive matching of the value with the indexed field values when set to `true`.
   * When `false`, the case sensitivity of matching depends on the underlying field’s mapping.
   * @availability stack since=7.10.0
   * @availability serverless
   * @server_default false
   */
  case_insensitive?: boolean
}

/**
 * @behavior_meta AdditionalProperty key=field value=terms
 * @ext_doc_id query-dsl-terms-query
 */
export class TermsQuery
  extends QueryBase
  implements AdditionalProperty<Field, TermsQueryField> {}

/**
 * @codegen_names value, lookup
 */
export type TermsQueryField = FieldValue[] | TermsLookup

export class TermsLookup {
  index: IndexName
  id: Id
  path: Field
  routing?: string
}

/**
 * @ext_doc_id query-dsl-terms-set-query
 */
export class TermsSetQuery extends QueryBase {
  /**
   * Specification describing number of matching terms required to return a document.
   * @availability stack since=8.10.0
   * @availability serverless
   */
  minimum_should_match?: MinimumShouldMatch
  /**
   * Numeric field containing the number of matching terms required to return a document.
   */
  minimum_should_match_field?: Field
  /**
   * Custom script containing the number of matching terms required to return a document.
   */
  minimum_should_match_script?: Script
  /**
   *  Array of terms you wish to find in the provided field.
   */
  terms: FieldValue[]
}

export class TypeQuery extends QueryBase {
  value: string
}

/**
 * @shortcut_property value
 * @ext_doc_id query-dsl-wildcard-query
 */
export class WildcardQuery extends QueryBase {
  /**
   * Allows case insensitive matching of the pattern with the indexed field values when set to true. Default is false which means the case sensitivity of matching depends on the underlying field’s mapping.
   * @availability stack since=7.10.0
   * @availability serverless
   */
  case_insensitive?: boolean
  /**
   * Method used to rewrite the query.
   * @doc_id query-dsl-multi-term-rewrite
   */
  rewrite?: MultiTermQueryRewrite
  /** Wildcard pattern for terms you wish to find in the provided field. Required, when wildcard is not set. */
  value?: string
  /** Wildcard pattern for terms you wish to find in the provided field. Required, when value is not set. */
  wildcard?: string
}
