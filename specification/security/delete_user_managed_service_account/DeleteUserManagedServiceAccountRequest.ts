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
 * Delete a user-managed service account.
 *
 * Delete a service account from a namespace of your own.
 *
 * Deleting an account that still has service tokens is rejected unless `force` is `true`.
 * A forced delete leaves the tokens behind: they cannot authenticate while no account of that name exists, and recreating the account is rejected until they are deleted.
 *
 * NOTE: The `elastic` namespace is reserved for the built-in service accounts that ship with Elasticsearch.
 * A name that no user-managed service account could have is rejected rather than reported as not found.
 * The `manage_service_account` privilege does not authorize this API.
 * @rest_spec_name security.delete_user_managed_service_account
 * @availability stack since=9.6.0 stability=experimental visibility=private
 * @cluster_privileges manage_security
 * @ext_doc_id service-accounts
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_security/service/{namespace}/{service}'
      methods: ['DELETE']
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
  response_media_type: MediaType.Json
  query_parameters: {
    /**
     * If `wait_for` (the default) then wait for a refresh to make this operation visible to search, if `true` then refresh the affected shards to make this operation visible to search, if `false` then do nothing with refreshes.
     * @server_default wait_for
     */
    refresh?: Refresh
    /**
     * If `false` (the default), deleting a service account that still has service tokens is rejected.
     * If `true`, the account is deleted and its tokens are left in place.
     * @server_default false
     */
    force?: boolean
  }
}
