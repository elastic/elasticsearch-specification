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

import { AdditionalProperties, AdditionalProperty } from '@spec_utils/behaviors'
import { Field, MinimumShouldMatch } from '@_types/common'
import { Distance, GeoLocation } from '@_types/Geo'
import { double, float, long } from '@_types/Numeric'
import { Script } from '@_types/Scripting'
import { DateMath, Time } from '@_types/Time'
import { QueryBase, QueryContainer } from './abstractions'

export class BoolQuery extends QueryBase {
  filter?: QueryContainer | QueryContainer[]
  minimum_should_match?: MinimumShouldMatch
  must?: QueryContainer | QueryContainer[]
  must_not?: QueryContainer | QueryContainer[]
  should?: QueryContainer | QueryContainer[]
}

export class BoostingQuery extends QueryBase {
  negative_boost: double
  negative: QueryContainer
  positive: QueryContainer
}

export class ConstantScoreQuery extends QueryBase {
  filter: QueryContainer
}

export class DisMaxQuery extends QueryBase {
  queries: QueryContainer[]
  /** @server_default 0.0 */
  tie_breaker?: double
}

export class FunctionScoreQuery extends QueryBase {
  boost_mode?: FunctionBoostMode
  functions?: FunctionScoreContainer[]
  max_boost?: double
  min_score?: double
  query?: QueryContainer
  score_mode?: FunctionScoreMode
}

export class ScriptScoreFunction {
  script: Script
}

export class RandomScoreFunction {
  field?: Field
  seed?: long | string
}

export class FieldValueFactorScoreFunction {
  field: Field
  factor?: double
  missing?: double
  modifier?: FieldValueFactorModifier
}

export class DecayPlacement<TOrigin, TScale> {
  decay?: double
  offset?: TScale
  scale?: TScale
  origin?: TOrigin
}

export class DecayFunctionBase {
  multi_value_mode?: MultiValueMode
}

export class NumericDecayFunction
  extends DecayFunctionBase
  implements AdditionalProperty<Field, DecayPlacement<double, double>> {}

export class DateDecayFunction
  extends DecayFunctionBase
  implements AdditionalProperty<Field, DecayPlacement<DateMath, Time>> {}

export class GeoDecayFunction
  extends DecayFunctionBase
  implements AdditionalProperty<Field, DecayPlacement<GeoLocation, Distance>> {}

/** @codegen_names date, numeric, geo */
// Note: deserialization depends on value types
export type DecayFunction =
  | DateDecayFunction
  | NumericDecayFunction
  | GeoDecayFunction

/**
 * @variants container
 * @es_quirk this container is valid without a variant. Despite being documented as a function, 'weight'
 *   is actually a container property that can be combined with a function. Comment in the ES code
 *   (SearchModule#registerScoreFunctions) says: Weight doesn't have its own parser, so every function
 *   supports it out of the box. Can be a single function too when not associated to any other function,
 *   which is why it needs to be registered manually here.
 */
export class FunctionScoreContainer {
  exp?: DecayFunction
  gauss?: DecayFunction
  linear?: DecayFunction
  field_value_factor?: FieldValueFactorScoreFunction
  random_score?: RandomScoreFunction
  script_score?: ScriptScoreFunction

  /** @variant container_property */
  filter?: QueryContainer
  /** @variant container_property */
  weight?: double
}

export enum FunctionScoreMode {
  multiply = 0,
  sum = 1,
  avg = 2,
  first = 3,
  max = 4,
  min = 5
}

export enum FunctionBoostMode {
  multiply = 0,
  replace = 1,
  sum = 2,
  avg = 3,
  max = 4,
  min = 5
}

export enum FieldValueFactorModifier {
  none = 0,
  log = 1,
  log1p = 2,
  log2p = 3,
  ln = 4,
  ln1p = 5,
  ln2p = 6,
  square = 7,
  sqrt = 8,
  reciprocal = 9
}

export enum MultiValueMode {
  min = 0,
  max = 1,
  avg = 2,
  sum = 3
}
