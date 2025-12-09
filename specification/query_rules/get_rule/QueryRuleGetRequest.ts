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

/**
 * Get a query rule.
 * Get details about a query rule within a query ruleset.
 * @rest_spec_name query_rules.get_rule
 * @availability stack since=8.15.0 stability=stable
 * @availability serverless stability=stable visibility=public
 * @cluster_privileges manage_search_query_rules
 * @doc_id query-rule-get
 * @ext_doc_id query-rule
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_query_rules/{ruleset_id}/_rule/{rule_id}'
      methods: ['GET']
    }
  ]
  path_parts: {
    /**
     * The unique identifier of the query ruleset containing the rule to retrieve
     */
    ruleset_id: Id

    /**
     * The unique identifier of the query rule within the specified ruleset to retrieve
     */
    rule_id: Id
  }
  response_media_type: MediaType.Json
}
