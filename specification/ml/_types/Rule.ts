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
import { Field } from '@_types/common'
import { double } from '@_types/Numeric'
import { FilterRef } from './Filter'

export class DetectionRule {
  actions?: RuleAction[]
  conditions?: RuleCondition[]
  scope?: Dictionary<Field, FilterRef>
}

export enum RuleAction {
  skip_result = 0,
  skip_model_update = 1
}

export class RuleCondition {
  applies_to: AppliesTo
  operator: ConditionOperator
  value: double
}

export enum AppliesTo {
  actual = 0,
  typical = 1,
  diff_from_typical = 2,
  time = 3
}

export enum ConditionOperator {
  gt = 0,
  gte = 1,
  lt = 2,
  lte = 3
}
