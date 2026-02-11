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
import { Id, MediaType, Metadata } from '@_types/common'
import { Duration } from '@_types/Time'
import { RoleDescriptor } from '@security/_types/RoleDescriptor'
import { Dictionary } from '@spec_utils/Dictionary'

/**
 * Update an API key.
 *
 * Update attributes of an existing API key.
 * This API supports updates to an API key's access scope, expiration, and metadata.
 *
 * To use this API, you must have at least the `manage_own_api_key` cluster privilege.
 * Users can only update API keys that they created or that were granted to them.
 * To update another user’s API key, use the `run_as` feature to submit a request on behalf of another user.
 *
 * IMPORTANT: It's not possible to use an API key as the authentication credential for this API. The owner user’s credentials are required.
 *
 * Use this API to update API keys created by the create API key or grant API Key APIs.
 * If you need to apply the same update to many API keys, you can use the bulk update API keys API to reduce overhead.
 * It's not possible to update expired API keys or API keys that have been invalidated by the invalidate API key API.
 *
 * The access scope of an API key is derived from the `role_descriptors` you specify in the request and a snapshot of the owner user's permissions at the time of the request.
 * The snapshot of the owner's permissions is updated automatically on every call.
 *
 * IMPORTANT: If you don't specify `role_descriptors` in the request, a call to this API might still change the API key's access scope.
 * This change can occur if the owner user's permissions have changed since the API key was created or last modified.
 * @rest_spec_name security.update_api_key
 * @category security
 * @availability stack since=8.4.0 stability=stable
 * @availability serverless stability=stable visibility=public
 * @cluster_privileges manage_own_api_key
 * @doc_id security-api-update-key
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_security/api_key/{id}'
      methods: ['PUT']
    }
  ]
  path_parts: {
    /**
     * The ID of the API key to update.
     */
    id: Id
  }
  request_media_type: MediaType.Json
  response_media_type: MediaType.Json
  body?: {
    /**
     * The role descriptors to assign to this API key.
     * The API key's effective permissions are an intersection of its assigned privileges and the point in time snapshot of permissions of the owner user.
     * You can assign new privileges by specifying them in this parameter.
     * To remove assigned privileges, you can supply an empty `role_descriptors` parameter, that is to say, an empty object `{}`.
     * If an API key has no assigned privileges, it inherits the owner user's full permissions.
     * The snapshot of the owner's permissions is always updated, whether you supply the `role_descriptors` parameter or not.
     * The structure of a role descriptor is the same as the request for the create API keys API.
     */
    role_descriptors?: Dictionary<string, RoleDescriptor>
    /**
     * Arbitrary metadata that you want to associate with the API key.
     * It supports a nested data structure.
     * Within the metadata object, keys beginning with `_` are reserved for system usage.
     * When specified, this value fully replaces the metadata previously associated with the API key.
     */
    metadata?: Metadata
    /**
     * The expiration time for the API key.
     * By default, API keys never expire.
     * This property can be omitted to leave the expiration unchanged.
     * */
    expiration?: Duration
  }
}
