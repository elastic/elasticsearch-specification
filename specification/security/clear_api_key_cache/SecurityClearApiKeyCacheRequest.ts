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
import { Ids } from '@_types/common'

/**
 * Evicts a subset of all entries from the API key cache.
 * The cache is also automatically cleared on state changes of the security index.
 * @rest_spec_name security.clear_api_key_cache
 * @availability stack since=7.10.0 stability=stable
 * @availability serverless stability=stable visibility=private
 * @cluster_privileges manage_security
 */
export interface Request extends RequestBase {
  path_parts: {
    /**
     * Comma-separated list of API key IDs to evict from the API key cache.
     * To evict all API keys, use `*`.
     * Does not support other wildcard patterns.
     */
    ids: Ids
  }
}
