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

import { Id, IndexName, Name } from '@_types/common'
import { EpochTime, UnitMillis } from '@_types/Time'
import { InlineScript } from '@_types/Scripting'
import { UserDefinedValue } from '@spec_utils/UserDefinedValue'
import { PinnedDoc } from '../../_types/query_dsl/specialized'

export class QueryRuleset {
  /**
   * Query Ruleset unique identifier
   */
  ruleset_id: Id
  /**
   * Rules associated with the query ruleset
   */
  rules: QueryRule[]
}

export class QueryRule {
  rule_id: Id
  type: QueryRuleType
  criteria: QueryRuleCriteria[]
  actions: QueryRuleActions
}

export enum QueryRuleType {
  pinned
}

export class QueryRuleCriteria {
  type: QueryRuleCriteriaType
  metadata: string
  values?: UserDefinedValue[]
}

export enum QueryRuleCriteriaType {
  global,
  exact,
  exact_fuzzy,
  prefix,
  suffix,
  contains,
  lt,
  lte,
  gt,
  gte
}

export class QueryRuleActions {
  ids?: Id[]
  docs?: PinnedDoc[]
}
