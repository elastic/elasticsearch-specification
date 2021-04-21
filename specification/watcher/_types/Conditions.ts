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

import { Dictionary } from '@spec_utils/Dictionary'
import { UserDefinedValue } from '@spec_utils/UserDefinedValue'

export class AlwaysCondition {}

export class ArrayCompareCondition {
  array_path: string
  comparison: string
  path: string
  quantifier: Quantifier
  value: UserDefinedValue
}

export class CompareCondition {
  comparison?: string
  path?: string
  value?: UserDefinedValue
  'ctx.payload.match'?: CompareContextPayloadCondition
  'ctx.payload.value'?: CompareContextPayloadCondition
}

export class CompareContextPayloadCondition {
  eq?: UserDefinedValue
  lt?: UserDefinedValue
  gt?: UserDefinedValue
  lte?: UserDefinedValue
  gte?: UserDefinedValue
}

export class Condition {}

/**
 * @variants container
 */
export class ConditionContainer {
  always?: AlwaysCondition
  array_compare?: ArrayCompareCondition
  compare?: CompareCondition
  never?: NeverCondition
  script?: ScriptCondition
}

export enum ConditionType {
  always = 0,
  never = 1,
  script = 2,
  compare = 3,
  array_compare = 4
}

export class NeverCondition {}

export enum Quantifier {
  some = 0,
  all = 1
}

export class ScriptCondition {
  lang: string
  params?: Dictionary<string, UserDefinedValue>
  source: string
}
