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
 * Clear the user cache.
 *
 * Evict users from the user cache.
 * You can completely clear the cache or evict specific users.
 *
 * User credentials are cached in memory on each node to avoid connecting to a remote authentication service or hitting the disk for every incoming request.
 * There are realm settings that you can use to configure the user cache.
 * For more information, refer to the documentation about controlling the user cache.
 * @rest_spec_name security.clear_cached_realms
 * @category security
 * @availability stack stability=stable
 * @availability serverless stability=stable visibility=private
 * @doc_id security-api-clear-cache
 * @ext_doc_id security-user-cache
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_security/realm/{realms}/_clear_cache'
      methods: ['POST']
    }
  ]
  path_parts: {
    /**
     * A comma-separated list of realms.
     * To clear all realms, use an asterisk (`*`).
     * It does not support other wildcard patterns.
     */
    realms: Names
  }
  response_media_type: MediaType.Json
  query_parameters: {
    /**
     * A comma-separated list of the users to clear from the cache.
     * If you do not specify this parameter, the API evicts all users from the user cache.
     */
    usernames?: string[]
  }
}
