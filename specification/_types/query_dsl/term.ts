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
  field: Field
}

/** @shortcut_property value */
export class FuzzyQuery extends QueryBase {
  max_expansions?: integer
  prefix_length?: integer
  rewrite?: MultiTermQueryRewrite
  transpositions?: boolean
  fuzziness?: Fuzziness
  // ES is lenient and accepts any primitive type, but ultimately converts it to a string.
  // Changing this field definition from UserDefinedValue to string breaks a recording produced from Nest tests,
  // but Nest is probably also overly flexible here and exposes an option that should not exist.
  value: string | double | boolean
}

export class IdsQuery extends QueryBase {
  values?: Ids
}

/** @shortcut_property value */
export class PrefixQuery extends QueryBase {
  rewrite?: MultiTermQueryRewrite
  value: string
  /**
   * @server_default false
   * @since 7.10.0
   */
  case_insensitive?: boolean
}

export class RangeQueryBase extends QueryBase {
  relation?: RangeRelation
}

export class DateRangeQuery extends RangeQueryBase {
  gt?: DateMath
  gte?: DateMath
  lt?: DateMath
  lte?: DateMath
  from?: DateMath | null
  to?: DateMath | null
  format?: DateFormat
  time_zone?: TimeZone
}

export class NumberRangeQuery extends RangeQueryBase {
  gt?: double
  gte?: double
  lt?: double
  lte?: double
  from?: double | null
  to?: double | null
}

/** @codegen_names date, number */
// Note: deserialization depends on value types
export type RangeQuery = DateRangeQuery | NumberRangeQuery

export enum RangeRelation {
  within = 0,
  contains = 1,
  intersects = 2
}

/** @shortcut_property value */
export class RegexpQuery extends QueryBase {
  /**
   * @since 7.10.0
   * @server_default false
   */
  case_insensitive?: boolean
  flags?: string
  /** @server_default 10000 */
  max_determinized_states?: integer
  rewrite?: MultiTermQueryRewrite
  value: string
}

/** @shortcut_property value */
export class TermQuery extends QueryBase {
  value: FieldValue
  /** @since 7.10.0 */
  case_insensitive?: boolean
}

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
  minimum_should_match_field?: Field
  minimum_should_match_script?: Script
  terms: string[]
}

export class TypeQuery extends QueryBase {
  value: string
}

/** @shortcut_property value */
export class WildcardQuery extends QueryBase {
  /**
   * Allows case insensitive matching of the pattern with the indexed field values when set to true. Default is false which means the case sensitivity of matching depends on the underlying field’s mapping.
   * @since 7.10.0
   */
  case_insensitive?: boolean
  /** Method used to rewrite the query */
  rewrite?: MultiTermQueryRewrite
  /** Wildcard pattern for terms you wish to find in the provided field. Required, when wildcard is not set. */
  value?: string
  /** Wildcard pattern for terms you wish to find in the provided field. Required, when value is not set. */
  wildcard?: string
}
