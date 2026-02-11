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
import { MediaType, Names, Namespace, Service } from '@_types/common'

/**
 * Clear service account token caches.
 *
 * Evict a subset of all entries from the service account token caches.
 * Two separate caches exist for service account tokens: one cache for tokens backed by the `service_tokens` file, and another for tokens backed by the `.security` index.
 * This API clears matching entries from both caches.
 *
 * The cache for service account tokens backed by the `.security` index is cleared automatically on state changes of the security index.
 * The cache for tokens backed by the `service_tokens` file is cleared automatically on file changes.
 * @rest_spec_name security.clear_cached_service_tokens
 * @category security
 * @availability stack stability=stable
 * @availability serverless stability=stable visibility=private
 * @cluster_privileges manage_security
 * @doc_id security-api-clear-service-token-caches
 * @ext_doc_id service-accounts
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_security/service/{namespace}/{service}/credential/token/{name}/_clear_cache'
      methods: ['POST']
    }
  ]
  path_parts: {
    /** The namespace, which is a top-level grouping of service accounts. */
    namespace: Namespace
    /** The name of the service, which must be unique within its namespace. */
    service: Service
    /**
     * A comma-separated list of token names to evict from the service account token caches.
     * Use a wildcard (`*`) to evict all tokens that belong to a service account.
     * It does not support other wildcard patterns.
     */
    name: Names
  }
  response_media_type: MediaType.Json
}
