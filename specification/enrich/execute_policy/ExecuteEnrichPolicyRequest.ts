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
import { Name } from '@_types/common'

/**
 * Creates the enrich index for an existing enrich policy.
 * The enrich index contains documents from the policy’s source indices. Enrich 
 * indices always begin with `.enrich-*`, are read-only, and are force merged.
 * Enrich indices should be used by the enrich processor only. Avoid using 
 * enrich indices for other purposes.
 * Once created, you cannot update or index documents to an enrich index. 
 * Instead, update your source indices and execute the enrich policy again. This 
 * creates a new enrich index from your updated source indices. The previous 
 * enrich index will deleted with a delayed maintenance job. By default this is 
 * done every 15 minutes. 
 * Because this API request performs several operations, it may take a while to 
 * return a response.
 * @rest_spec_name enrich.execute_policy
 * @availability stack since=7.5.0 stability=stable
 * @availability serverless stability=stable visibility=public
 */
export interface Request extends RequestBase {
  path_parts: {
    /**
     * Enrich policy to execute.
     */
    name: Name
  }
  query_parameters: {
    /**
     * If `true`, the request blocks other enrich policy execution requests 
     * until complete. Defaults to `true`.
     */
    wait_for_completion?: boolean
  }
}
