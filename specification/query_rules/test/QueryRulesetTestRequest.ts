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
import { Dictionary } from '@spec_utils/Dictionary'
import { UserDefinedValue } from '@spec_utils/UserDefinedValue'

/**
 * Test a query ruleset.
 * Evaluate match criteria against a query ruleset to identify the rules that would match that criteria.
 * @rest_spec_name query_rules.test
 * @availability stack since=8.10.0 stability=stable
 * @availability serverless stability=stable visibility=public
 * @cluster_privileges manage_search_query_rules
 * @doc_id query-ruleset-test
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_query_rules/{ruleset_id}/_test'
      methods: ['POST']
    }
  ]
  path_parts: {
    /**
     * The unique identifier of the query ruleset to be created or updated
     */
    ruleset_id: Id
  }
  request_media_type: MediaType.Json
  response_media_type: MediaType.Json
  /**
   * The criteria we're testing for
   */
  /** @codegen_name match_criteria */
  body: {
    /**
     * The match criteria to apply to rules in the given query ruleset.
     * Match criteria should match the keys defined in the `criteria.metadata` field of the rule.
     */
    match_criteria: Dictionary<string, UserDefinedValue>
  }
}
