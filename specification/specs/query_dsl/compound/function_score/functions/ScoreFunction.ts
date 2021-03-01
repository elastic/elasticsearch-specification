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

class ScoreFunctionBase {
  filter?: QueryContainer
  weight?: double
}

class WeightScoreFunction extends ScoreFunctionBase {}

class ScriptScoreFunction extends ScoreFunctionBase {
  script: Script
}

class RandomScoreFunction extends ScoreFunctionBase {
  field?: Field
  seed?: long | string
}

class FieldValueFactorScoreFunction extends ScoreFunctionBase {
  field: Field
  factor?: double
  missing?: double
  modifier?: FieldValueFactorModifier
}

class DecayPlacement<TOrigin, TScale> {
  decay?: double
  offset?: TScale
  scale?: TScale
  origin?: TOrigin
}
class DecayFunctionBase extends ScoreFunctionBase {
  multi_value_mode?: MultiValueMode
}

class NumericDecayFunction
  extends DecayFunctionBase
  implements AdditionalProperties<string, DecayPlacement<double, double>> {}

class DateDecayFunction
  extends DecayFunctionBase
  implements AdditionalProperties<string, DecayPlacement<DateMath, Time>> {}

class GeoDecayFunction
  extends DecayFunctionBase
  implements
    AdditionalProperties<string, DecayPlacement<GeoLocation, Distance>> {}

type DecayFunction = DateDecayFunction | NumericDecayFunction | GeoDecayFunction

class FunctionScoreContainer {
  exp?: DecayFunction
  gauss?: DecayFunction
  linear?: DecayFunction
  field_value_factor?: FieldValueFactorScoreFunction
  random_score?: RandomScoreFunction
  script_score?: ScriptScoreFunction
  filter?: QueryContainer
  weight?: double
}
