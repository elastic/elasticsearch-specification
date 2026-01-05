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
import { MediaType, Metadata, Name, Refresh } from '@_types/common'
import { Duration } from '@_types/Time'
import { RoleDescriptor } from '@security/_types/RoleDescriptor'
import { Dictionary } from '@spec_utils/Dictionary'

/**
 * Create an API key.
 *
 * Create an API key for access without requiring basic authentication.
 *
 * IMPORTANT: If the credential that is used to authenticate this request is an API key, the derived API key cannot have any privileges.
 * If you specify privileges, the API returns an error.
 *
 * A successful request returns a JSON structure that contains the API key, its unique id, and its name.
 * If applicable, it also returns expiration information for the API key in milliseconds.
 *
 * NOTE: By default, API keys never expire. You can specify expiration information when you create the API keys.
 *
 * The API keys are created by the Elasticsearch API key service, which is automatically enabled.
 * To configure or turn off the API key service, refer to API key service setting documentation.
 * @rest_spec_name security.create_api_key
 * @availability stack since=6.7.0 stability=stable
 * @availability serverless stability=stable visibility=public
 * @cluster_privileges manage_own_api_key
 * @doc_id security-api-create-api-key
 * @ext_doc_id security-settings-api-keys
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_security/api_key'
      methods: ['PUT', 'POST']
    }
  ]
  request_media_type: MediaType.Json
  response_media_type: MediaType.Json
  query_parameters: {
    /**
     * If `true` (the default) then refresh the affected shards to make this operation visible to search, if `wait_for` then wait for a refresh to make this operation visible to search, if `false` then do nothing with refreshes.
     */
    refresh?: Refresh
  }
  body: {
    /**
     * The expiration time for the API key.
     * By default, API keys never expire.
     */
    expiration?: Duration
    /** A name for the API key. */
    name?: Name
    /**
     * An array of role descriptors for this API key.
     * When it is not specified or it is an empty array, the API key will have a point in time snapshot of permissions of the authenticated user.
     * If you supply role descriptors, the resultant permissions are an intersection of API keys permissions and the authenticated user's permissions thereby limiting the access scope for API keys.
     * The structure of role descriptor is the same as the request for the create role API.
     * For more details, refer to the create or update roles API.
     *
     * NOTE: Due to the way in which this permission intersection is calculated, it is not possible to create an API key that is a child of another API key, unless the derived key is created without any privileges.
     * In this case, you must explicitly specify a role descriptor with no privileges.
     * The derived API key can be used for authentication; it will not have authority to call Elasticsearch APIs.
     * @ext_doc_id security-api-put-role
     */
    role_descriptors?: Dictionary<string, RoleDescriptor>
    /**
     * Arbitrary metadata that you want to associate with the API key. It supports nested data structure. Within the metadata object, keys beginning with `_` are reserved for system usage.
     * @availability stack since=7.13.0
     * @availability serverless
     */
    metadata?: Metadata
  }
}
