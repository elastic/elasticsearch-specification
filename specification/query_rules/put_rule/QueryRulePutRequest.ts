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
import { RequestBase } from '@_types/Base'
import { Id } from '@_types/common'
import { integer } from '@_types/Numeric'
import {
  QueryRuleActions,
  QueryRuleCriteria,
  QueryRuleType
} from '../_types/QueryRuleset'

/**
 * Create or update a query rule.
 * Create or update a query rule within a query ruleset.
 *
 * IMPORTANT: Due to limitations within pinned queries, you can only pin documents using ids or docs, but cannot use both in single rule.
 * It is advised to use one or the other in query rulesets, to avoid errors.
 * Additionally, pinned queries have a maximum limit of 100 pinned hits.
 * If multiple matching rules pin more than 100 documents, only the first 100 documents are pinned in the order they are specified in the ruleset.
 * @rest_spec_name query_rules.put_rule
 * @availability stack since=8.15.0 stability=stable
 * @availability serverless stability=stable visibility=public
 * @cluster_privileges manage_search_query_rules
 * @doc_id query-rule-put
 * @ext_doc_id edit-query-rule-from-ui
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_query_rules/{ruleset_id}/_rule/{rule_id}'
      methods: ['PUT']
    }
  ]
  path_parts: {
    /**
     * The unique identifier of the query ruleset containing the rule to be created or updated.
     */
    ruleset_id: Id

    /**
     * The unique identifier of the query rule within the specified ruleset to be created or updated.
     */
    rule_id: Id
  }
  /**
   * The query rule information.
   */
  /** @codegen_name query_rule */
  body: {
    /** The type of rule. */
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
}
