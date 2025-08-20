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

/**
 * Delete a query ruleset.
 * Remove a query ruleset and its associated data.
 * This is a destructive action that is not recoverable.
 * @rest_spec_name query_rules.delete_ruleset
 * @availability stack since=8.10.0 stability=stable
 * @availability serverless stability=stable visibility=public
 * @cluster_privileges manage_search_query_rules
 * @doc_id query-ruleset-delete
 * @ext_doc_id delete-query-ruleset-from-ui
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_query_rules/{ruleset_id}'
      methods: ['DELETE']
    }
  ]
  path_parts: {
    /**
     * The unique identifier of the query ruleset to delete
     */
    ruleset_id: Id
  }
}
