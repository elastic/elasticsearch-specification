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
import { Id, MediaType } from '@_types/common'
import { QueryRule } from '../_types/QueryRuleset'

/**
 * Create or update a query ruleset.
 *
 * There is a limit of 100 rules per ruleset.
 * This limit can be increased by using the `xpack.applications.rules.max_rules_per_ruleset` cluster setting.
 *
 * IMPORTANT: Due to limitations within pinned queries, you can only select documents using `ids` or `docs`, but cannot use both in single rule.
 * It is advised to use one or the other in query rulesets, to avoid errors.
 * Additionally, pinned queries have a maximum limit of 100 pinned hits.
 * If multiple matching rules pin more than 100 documents, only the first 100 documents are pinned in the order they are specified in the ruleset.
 * @rest_spec_name query_rules.put_ruleset
 * @availability stack since=8.10.0 stability=stable
 * @availability serverless stability=stable visibility=public
 * @cluster_privileges manage_search_query_rules
 * @doc_id query-ruleset-put
 * @ext_doc_id query-rule
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_query_rules/{ruleset_id}'
      methods: ['PUT']
    }
  ]
  path_parts: {
    /**
     * The unique identifier of the query ruleset to be created or updated.
     */
    ruleset_id: Id
  }
  request_media_type: MediaType.Json
  response_media_type: MediaType.Json
  /**
   * The query rules in this ruleset
   */
  /** @codegen_name query_ruleset */
  body: {
    rules: QueryRule | QueryRule[]
  }
}
