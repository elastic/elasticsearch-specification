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
import { Id, Metadata } from '@_types/common'
import { Dictionary } from '@spec_utils/Dictionary'
import { RoleDescriptor } from '@security/_types/RoleDescriptor'

/**
 * Updates attributes of an existing API key.
 * @rest_spec_name security.update_api_key
 * @since 8.4.0
 * @stability stable
 */
export interface Request extends RequestBase {
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
  }
}
