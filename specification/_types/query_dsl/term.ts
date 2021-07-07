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

import { UserDefinedValue } from '@spec_utils/UserDefinedValue'
import {
  Field,
  Fuzziness,
  Id,
  Ids,
  IndexName,
  MultiTermQueryRewrite,
  Routing
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
  value: string
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

/** @variant name=date */
export class DateRangeQuery extends RangeQueryBase {
  gt?: DateMath
  gte?: DateMath
  lt?: DateMath
  lte?: DateMath

  format?: DateFormat
  time_zone?: TimeZone
}

/** @variant name=number */
export class NumberRangeQuery extends RangeQueryBase {
  gt?: double
  gte?: double
  lt?: double
  lte?: double
}

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
  value: string | float | boolean
  /** @since 7.10.0 */
  case_insensitive?: boolean
}

export class TermsQuery
  extends QueryBase
  implements AdditionalProperty<Field, string[] | long[] | TermsLookup> {}

export class TermsLookup {
  index: IndexName
  id: Id
  path: Field
  routing?: Routing
}

export class TermsSetQuery
  extends QueryBase
  implements AdditionalProperty<Field, TermsSetFieldQuery> {}

export class TermsSetFieldQuery {
  minimum_should_match_field?: Field
  minimum_should_match_script?: Script
  terms: string[]
}

export class TypeQuery extends QueryBase {
  value: string
}

/** @shortcut_property value */
export class WildcardQuery extends QueryBase {
  /** @since 7.10.0 */
  case_insensitive?: boolean
  rewrite?: MultiTermQueryRewrite
  value: string
}
