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

import { Id } from '@_types/common'
import { integer } from '@_types/Numeric'
import { UserDefinedValue } from '@spec_utils/UserDefinedValue'
import { PinnedDoc } from '../../_types/query_dsl/specialized'

export class QueryRuleset {
  /**
   * A unique identifier for the ruleset.
   */
  ruleset_id: Id
  /**
   * Rules associated with the query ruleset.
   */
  rules: QueryRule[]
}

export class QueryRule {
  /**
   * A unique identifier for the rule.
   */
  rule_id: Id
  /**
   * The type of rule.
   * `pinned` will identify and pin specific documents to the top of search results.
   * `exclude` will exclude specific documents from search results.
   */
  type: QueryRuleType
  /**
   * The criteria that must be met for the rule to be applied.
   * If multiple criteria are specified for a rule, all criteria must be met for the rule to be applied.
   */

  criteria: QueryRuleCriteria | QueryRuleCriteria[]
  /**
   * The actions to take when the rule is matched.
   * The format of this action depends on the rule type.
   */
  actions: QueryRuleActions
  priority?: integer
}

export enum QueryRuleType {
  pinned,
  exclude
}

export class QueryRuleCriteria {
  /**
   * The type of criteria. The following criteria types are supported:
   *
   * * `always`: Matches all queries, regardless of input.
   * * `contains`: Matches that contain this value anywhere in the field meet the criteria defined by the rule. Only applicable for string values.
   * * `exact`: Only exact matches meet the criteria defined by the rule. Applicable for string or numerical values.
   * * `fuzzy`: Exact matches or matches within the allowed Levenshtein Edit Distance meet the criteria defined by the rule. Only applicable for string values.
   * * `gt`: Matches with a value greater than this value meet the criteria defined by the rule. Only applicable for numerical values.
   * * `gte`: Matches with a value greater than or equal to this value meet the criteria defined by the rule. Only applicable for numerical values.
   * * `lt`: Matches with a value less than this value meet the criteria defined by the rule. Only applicable for numerical values.
   * * `lte`: Matches with a value less than or equal to this value meet the criteria defined by the rule. Only applicable for numerical values.
   * * `prefix`: Matches that start with this value meet the criteria defined by the rule. Only applicable for string values.
   * * `suffix`: Matches that end with this value meet the criteria defined by the rule. Only applicable for string values.
   */
  type: QueryRuleCriteriaType
  /**
   * The metadata field to match against.
   * This metadata will be used to match against `match_criteria` sent in the rule.
   * It is required for all criteria types except `always`.
   */
  metadata?: string
  /**
   * The values to match against the `metadata` field.
   * Only one value must match for the criteria to be met.
   * It is required for all criteria types except `always`.
   */
  values?: UserDefinedValue[]
}

export enum QueryRuleCriteriaType {
  global,
  exact,
  exact_fuzzy,
  fuzzy,
  prefix,
  suffix,
  contains,
  lt,
  lte,
  gt,
  gte,
  always
}

export class QueryRuleActions {
  /**
   * The unique document IDs of the documents to apply the rule to.
   * Only one of `ids` or `docs` may be specified and at least one must be specified.
   */
  ids?: Id[]
  /**
   * The documents to apply the rule to.
   * Only one of `ids` or `docs` may be specified and at least one must be specified.
   * There is a maximum value of 100 documents in a rule.
   * You can specify the following attributes for each document:
   *
   * * `_index`: The index of the document to pin.
   * * `_id`: The unique document ID.
   */
  docs?: PinnedDoc[]
}
