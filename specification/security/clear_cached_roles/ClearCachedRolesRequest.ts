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
import { MediaType, Names } from '@_types/common'

/**
 * Clear the roles cache.
 *
 * Evict roles from the native role cache.
 * @rest_spec_name security.clear_cached_roles
 * @availability stack stability=stable
 * @availability serverless stability=stable visibility=private
 * @cluster_privileges manage_security
 * @doc_id security-api-clear-role-cache
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_security/role/{name}/_clear_cache'
      methods: ['POST']
    }
  ]
  path_parts: {
    /**
     * A comma-separated list of roles to evict from the role cache.
     * To evict all roles, use an asterisk (`*`).
     * It does not support other wildcard patterns.
     */
    name: Names
  }
  response_media_type: MediaType.Json
}
