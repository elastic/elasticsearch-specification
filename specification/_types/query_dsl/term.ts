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
  Fuzziness,
  Id,
  Ids,
  IndexName,
  MultiTermQueryRewrite,
  Routing,
  FieldValue
} from '@_types/common'
import { double, float, integer, long } from '@_types/Numeric'
import { Script } from '@_types/Scripting'
import { DateFormat, DateMath, TimeZone } from '@_types/Time'
import { QueryBase } from './abstractions'
import { AdditionalProperty } from '@spec_utils/behaviors'

export class ExistsQuery extends QueryBase {
  /**
   * Name of the field you wish to search.
   */
  field: Field
}

/** @shortcut_property value */
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
  value: string | double | boolean
}

export class IdsQuery extends QueryBase {
  /**
   * An array of document IDs.
   */
  values?: Ids
}

/** @shortcut_property value */
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

export class RangeQueryBase extends QueryBase {
  /**
   * Indicates how the range query matches values for `range` fields.
   * @server_default intersects
   */
  relation?: RangeRelation
}

export class DateRangeQuery extends RangeQueryBase {
  /**
   * Greater than.
   */
  gt?: DateMath
  /**
   * Greater than or equal to.
   */
  gte?: DateMath
  /**
   * Less than.
   */
  lt?: DateMath
  /**
   * Less than or equal to.
   */
  lte?: DateMath
  from?: DateMath | null
  to?: DateMath | null
  /**
   * Date format used to convert `date` values in the query.
   */
  format?: DateFormat
  /**
   *  Coordinated Universal Time (UTC) offset or IANA time zone used to convert `date` values in the query to UTC.
   */
  time_zone?: TimeZone
}

export class NumberRangeQuery extends RangeQueryBase {
  /**
   * Greater than.
   */
  gt?: double
  /**
   * Greater than or equal to.
   */
  gte?: double
  /**
   * Less than.
   */
  lt?: double
  /**
   * Less than or equal to.
   */
  lte?: double
  from?: double | null
  to?: double | null
}

export class TermsRangeQuery extends RangeQueryBase {
  /**
   * Greater than.
   */
  gt?: string
  /**
   * Greater than or equal to.
   */
  gte?: string
  /**
   * Less than.
   */
  lt?: string
  /**
   * Less than or equal to.
   */
  lte?: string
  from?: string | null
  to?: string | null
}

/** @codegen_names date, number, terms */
// Note: deserialization depends on value types
export type RangeQuery = DateRangeQuery | NumberRangeQuery | TermsRangeQuery

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

/** @shortcut_property value */
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

/** @shortcut_property value */
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
 * @behavior_meta AdditionalProperty name=field value=term
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
  routing?: Routing
}

export class TermsSetQuery extends QueryBase {
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
  terms: string[]
}

export class TypeQuery extends QueryBase {
  value: string
}

/** @shortcut_property value */
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
