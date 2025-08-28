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

import { FieldValue } from '@_types/common'
import { ScriptLanguage, ScriptSource } from '@_types/Scripting'
import { AdditionalProperty } from '@spec_utils/behaviors'
import { Dictionary, SingleKeyDictionary } from '@spec_utils/Dictionary'
import { UserDefinedValue } from '@spec_utils/UserDefinedValue'

export class AlwaysCondition {}

export class ArrayCompareOpParams {
  quantifier: Quantifier
  value: FieldValue
}

/**
 * @behavior_meta AdditionalProperty key=operator value=params
 */
export class ArrayCompareCondition
  implements AdditionalProperty<ConditionOp, ArrayCompareOpParams>
{
  path: string
}

export enum ConditionOp {
  not_eq,
  eq,
  lt,
  gt,
  lte,
  gte
}

/**
 * @variants container
 */
export class ConditionContainer {
  always?: AlwaysCondition
  array_compare?: SingleKeyDictionary<string, ArrayCompareCondition>
  compare?: SingleKeyDictionary<
    string,
    SingleKeyDictionary<ConditionOp, FieldValue>
  >
  never?: NeverCondition
  script?: ScriptCondition
}

export enum ConditionType {
  always,
  never,
  script,
  compare,
  array_compare
}

export class NeverCondition {}

export enum Quantifier {
  some,
  all
}

export class ScriptCondition {
  /**
   * @server_default painless
   */
  lang?: ScriptLanguage
  params?: Dictionary<string, UserDefinedValue>
  source?: ScriptSource
  id?: string
}
