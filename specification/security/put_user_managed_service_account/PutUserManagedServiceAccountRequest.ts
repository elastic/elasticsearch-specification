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
import { MediaType, Namespace, Refresh, Service } from '@_types/common'

/**
 * Create user-managed service accounts.
 *
 * Create a service account in a namespace of your own, or replace one that already exists.
 * A replacement is not a partial update: every write applies the defaults, so an account that was disabled and is then written again without `enabled` comes back enabled.
 *
 * Creating an account whose name still has leftover service tokens is rejected.
 * Delete those tokens first.
 *
 * NOTE: The `elastic` namespace is reserved for the built-in service accounts that ship with Elasticsearch.
 * The `manage_service_account` privilege does not authorize this API.
 * @rest_spec_name security.put_user_managed_service_account
 * @availability stack since=9.6.0 stability=stable
 * @cluster_privileges manage_security
 * @doc_id security-api-put-user-managed-service-account
 * @ext_doc_id service-accounts
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_security/service/{namespace}/{service}'
      methods: ['PUT']
    }
  ]
  path_parts: {
    /**
     * The namespace, which is a top-level grouping of service accounts.
     * It must start with a letter or digit and can contain only letters, digits, hyphens, and underscores, up to a maximum of 128 characters.
     * It cannot be `elastic`, which is reserved for built-in service accounts.
     */
    namespace: Namespace
    /**
     * The service name.
     * It must start with a letter or digit and can contain only letters, digits, hyphens, and underscores, up to a maximum of 128 characters.
     */
    service: Service
  }
  request_media_type: MediaType.Json
  response_media_type: MediaType.Json
  query_parameters: {
    /**
     * If `wait_for` (the default) then wait for a refresh to make this operation visible to search, if `true` then refresh the affected shards to make this operation visible to search, if `false` then do nothing with refreshes.
     * @server_default wait_for
     */
    refresh?: Refresh
  }
  body: {
    /**
     * The names of the roles to grant to the service account, up to a maximum of 1000.
     * The roles are resolved when the account authenticates, so they do not have to exist yet.
     */
    roles: string[]
    /**
     * Whether the account can authenticate.
     * Tokens can still be created for a disabled account; they just cannot be used until the account is enabled.
     * @server_default true
     */
    enabled?: boolean
  }
}
