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
  IndexName,
  MultiTermQueryRewrite,
  Routing
} from '@_types/common'
import { double, float, integer, long } from '@_types/Numeric'
import { Script } from '@_types/Scripting'
import { DateMath } from '@_types/Time'
import { QueryBase } from './abstractions'

export class ExistsQuery extends QueryBase {
  field?: Field
}

export class FuzzyQuery extends QueryBase {
  max_expansions?: integer
  prefix_length?: integer
  rewrite?: MultiTermQueryRewrite
  transpositions?: boolean
  fuzziness?: Fuzziness
  value: UserDefinedValue
}

export class IdsQuery extends QueryBase {
  values?: Id[] | long[]
}

export class PrefixQuery extends QueryBase {
  rewrite?: MultiTermQueryRewrite
  value: string
}

export class RangeQuery extends QueryBase {
  gt?: double | DateMath
  gte?: double | DateMath
  lt?: double | DateMath
  lte?: double | DateMath
  relation?: RangeRelation

  time_zone?: string

  //TODO obsolete, update yaml tests to no longer use this
  from?: double | DateMath
  to?: double | DateMath
}

export enum RangeRelation {
  within = 0,
  contains = 1,
  intersects = 2
}

export class RegexpQuery extends QueryBase {
  flags?: string
  max_determinized_states?: integer
  value?: string
}

export class TermQuery extends QueryBase {
  value?: string | float | boolean
}

export class TermsQuery extends QueryBase {
  terms?: string[]
  index?: IndexName
  id?: Id
  path?: string
  routing?: Routing
}

export class TermsSetQuery extends QueryBase {
  minimum_should_match_field?: Field
  minimum_should_match_script?: Script
  terms?: string[]
}

export class TypeQuery extends QueryBase {
  value: string
}

export class WildcardQuery extends QueryBase {
  rewrite?: MultiTermQueryRewrite
  value: string
}
