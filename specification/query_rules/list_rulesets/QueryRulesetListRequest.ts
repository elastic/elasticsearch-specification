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
import { integer } from '@_types/Numeric'

/**
 * Get all query rulesets.
 *
 * Get summarized information about the query rulesets.
 * @rest_spec_name query_rules.list_rulesets
 * @availability stack since=8.10.0 stability=stable
 * @availability serverless stability=stable visibility=public
 * @cluster_privileges manage_search_query_rules
 * @doc_id query-ruleset-list
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_query_rules'
      methods: ['GET']
    }
  ]
  query_parameters: {
    /**
     * The offset from the first result to fetch.
     * @server_default 0
     */
    from?: integer
    /**
     * The maximum number of results to retrieve.
     * @server_default 100
     */
    size?: integer
  }
}
