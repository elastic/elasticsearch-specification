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
import { MediaType, Metadata } from '@_types/common'
import { Duration } from '@_types/Time'
import { RoleDescriptor } from '@security/_types/RoleDescriptor'
import { Dictionary } from '@spec_utils/Dictionary'

/**
 * Bulk update API keys.
 * Update the attributes for multiple API keys.
 *
 * IMPORTANT: It is not possible to use an API key as the authentication credential for this API. To update API keys, the owner user's credentials are required.
 *
 * This API is similar to the update API key API but enables you to apply the same update to multiple API keys in one API call. This operation can greatly improve performance over making individual updates.
 *
 * It is not possible to update expired or invalidated API keys.
 *
 * This API supports updates to API key access scope, metadata and expiration.
 * The access scope of each API key is derived from the `role_descriptors` you specify in the request and a snapshot of the owner user's permissions at the time of the request.
 * The snapshot of the owner's permissions is updated automatically on every call.
 *
 * IMPORTANT: If you don't specify `role_descriptors` in the request, a call to this API might still change an API key's access scope. This change can occur if the owner user's permissions have changed since the API key was created or last modified.
 *
 * A successful request returns a JSON structure that contains the IDs of all updated API keys, the IDs of API keys that already had the requested changes and did not require an update, and error details for any failed update.
 * @rest_spec_name security.bulk_update_api_keys
 * @availability stack since=8.5.0 stability=stable visibility=public
 * @doc_id security-api-bulk-update-key
 * @cluster_privileges manage_own_api_key
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_security/api_key/_bulk_update'
      methods: ['POST']
    }
  ]
  request_media_type: MediaType.Json
  response_media_type: MediaType.Json
  body: {
    /**
     * Expiration time for the API keys.
     * By default, API keys never expire.
     * This property can be omitted to leave the value unchanged.
     */
    expiration?: Duration
    /**
     * The API key identifiers.
     */
    ids: string | string[]
    /**
     * Arbitrary nested metadata to associate with the API keys.
     * Within the `metadata` object, top-level keys beginning with an underscore (`_`) are reserved for system usage.
     * Any information specified with this parameter fully replaces metadata previously associated with the API key.
     */
    metadata?: Metadata
    /**
     * The role descriptors to assign to the API keys.
     * An API key's effective permissions are an intersection of its assigned privileges and the point-in-time snapshot of permissions of the owner user.
     * You can assign new privileges by specifying them in this parameter.
     * To remove assigned privileges, supply the `role_descriptors` parameter as an empty object `{}`.
     * If an API key has no assigned privileges, it inherits the owner user's full permissions.
     * The snapshot of the owner's permissions is always updated, whether you supply the `role_descriptors` parameter.
     * The structure of a role descriptor is the same as the request for the create API keys API.
     */
    role_descriptors?: Dictionary<string, RoleDescriptor>
  }
}
