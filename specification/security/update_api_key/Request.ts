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

import { RoleDescriptor } from '@security/_types/RoleDescriptor'
import { Dictionary } from '@spec_utils/Dictionary'
import { RequestBase } from '@_types/Base'
import { Id, Metadata } from '@_types/common'
import { Duration } from '@_types/Time'

/**
 * Update an API key.
 *
 * Updates attributes of an existing API key.
 * Users can only update API keys that they created or that were granted to them.
 * Use this API to update API keys created by the create API Key or grant API Key APIs.
 * If you need to apply the same update to many API keys, you can use bulk update API Keys to reduce overhead.
 * It’s not possible to update expired API keys, or API keys that have been invalidated by invalidate API Key.
 * This API supports updates to an API key’s access scope and metadata.
 * The access scope of an API key is derived from the `role_descriptors` you specify in the request, and a snapshot of the owner user’s permissions at the time of the request.
 * The snapshot of the owner’s permissions is updated automatically on every call.
 * If you don’t specify `role_descriptors` in the request, a call to this API might still change the API key’s access scope.
 * This change can occur if the owner user’s permissions have changed since the API key was created or last modified.
 * To update another user’s API key, use the `run_as` feature to submit a request on behalf of another user.
 * IMPORTANT: It’s not possible to use an API key as the authentication credential for this API.
 * To update an API key, the owner user’s credentials are required.
 * @rest_spec_name security.update_api_key
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
  body: {
    /**
     * An array of role descriptors for this API key. This parameter is optional. When it is not specified or is an empty array, then the API key will have a point in time snapshot of permissions of the authenticated user. If you supply role descriptors then the resultant permissions would be an intersection of API keys permissions and authenticated user’s permissions thereby limiting the access scope for API keys. The structure of role descriptor is the same as the request for create role API. For more details, see create or update roles API.
     * @doc_id security-api-put-role
     */
    role_descriptors?: Dictionary<string, RoleDescriptor>
    /**
     * Arbitrary metadata that you want to associate with the API key. It supports nested data structure. Within the metadata object, keys beginning with _ are reserved for system usage.
     */
    metadata?: Metadata
    /** Expiration time for the API key. */
    expiration?: Duration
  }
}
