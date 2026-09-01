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

import { Field } from '@_types/common'
import { double } from '@_types/Numeric'
import { Dictionary } from '@spec_utils/Dictionary'
import { FilterRef } from './Filter'

export class DetectionRule {
  /**
   * The set of actions to be triggered when the rule applies. If more than one action is specified the effects of all actions are combined.
   * @server_default ['skip_result']
   */
  actions?: RuleAction[]
  /**
   * An array of numeric conditions when the rule applies. A rule must either have a non-empty scope or at least one condition. Multiple conditions are combined together with a logical AND.
   */
  conditions?: RuleCondition[]
  /**
   * A scope of series where the rule applies. A rule must either have a non-empty scope or at least one condition. By default, the scope includes all series. Scoping is allowed for any of the fields that are also specified in `by_field_name`, `over_field_name`, or `partition_field_name`.
   */
  scope?: Dictionary<Field, FilterRef>
}

export enum RuleAction {
  /**
   * The result will not be created. Unless you also specify `skip_model_update`, the model will be updated as usual with the corresponding series value.
   */
  skip_result,
  /**
   * The value for that series will not be used to update the model. Unless you also specify `skip_result`, the results will be created as usual. This action is suitable when certain values are expected to be consistently anomalous and they affect the model in a way that negatively impacts the rest of the results.
   */
  skip_model_update
}

export class RuleCondition {
  /**
   * Specifies the result property to which the condition applies. If your detector uses `lat_long`, `metric`, `rare`, or `freq_rare` functions, you can only specify conditions that apply to time.
   */
  applies_to: AppliesTo
  /**
   * Specifies the condition operator. The available options are greater than, greater than or equals, less than, and less than or equals.
   */
  operator: ConditionOperator
  /**
   * The value that is compared against the `applies_to` field using the operator.
   */
  value: double
}

export enum AppliesTo {
  actual,
  typical,
  diff_from_typical,
  time
}

export enum ConditionOperator {
  gt,
  gte,
  lt,
  lte
}
