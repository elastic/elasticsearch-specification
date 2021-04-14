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

import { double, Field, long } from '@common/common'
import { DateMath } from '@common/common_options/date_math/DateMath'
import { Distance } from '@common/common_options/geo/Distance'
import { Script } from '@common/common_options/scripting/Script'
import { Time } from '@common/common_options/time_unit/Time'
import { QueryContainer } from '@common/query_dsl/abstractions/container/QueryContainer'
import { GeoLocation } from '@common/query_dsl/geo/GeoLocation'
import { AdditionalProperties } from '__spec_utils/behaviors'
import { MultiValueMode } from './decay/MultiValueMode'
import { FieldValueFactorModifier } from './field_value/FieldValueFactorModifier'

export class ScoreFunctionBase {
  filter?: QueryContainer
  weight?: double
}

export class WeightScoreFunction extends ScoreFunctionBase {}

export class ScriptScoreFunction extends ScoreFunctionBase {
  script: Script
}

export class RandomScoreFunction extends ScoreFunctionBase {
  field?: Field
  seed?: long | string
}

export class FieldValueFactorScoreFunction extends ScoreFunctionBase {
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
export class DecayFunctionBase extends ScoreFunctionBase {
  multi_value_mode?: MultiValueMode
}

export class NumericDecayFunction
  extends DecayFunctionBase
  implements AdditionalProperties<string, DecayPlacement<double, double>> {}

export class DateDecayFunction
  extends DecayFunctionBase
  implements AdditionalProperties<string, DecayPlacement<DateMath, Time>> {}

export class GeoDecayFunction
  extends DecayFunctionBase
  implements
    AdditionalProperties<string, DecayPlacement<GeoLocation, Distance>> {}

export type DecayFunction =
  | DateDecayFunction
  | NumericDecayFunction
  | GeoDecayFunction

export class FunctionScoreContainer {
  exp?: DecayFunction
  gauss?: DecayFunction
  linear?: DecayFunction
  field_value_factor?: FieldValueFactorScoreFunction
  random_score?: RandomScoreFunction
  script_score?: ScriptScoreFunction
  filter?: QueryContainer
  weight?: double
}
