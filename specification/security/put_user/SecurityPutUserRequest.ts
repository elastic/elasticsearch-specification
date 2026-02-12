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
import {
  MediaType,
  Metadata,
  Password,
  Refresh,
  Username
} from '@_types/common'

/**
 * Create or update users.
 *
 * Add and update users in the native realm.
 * A password is required for adding a new user but is optional when updating an existing user.
 * To change a user's password without updating any other fields, use the change password API.
 * @rest_spec_name security.put_user
 * @category security
 * @availability stack stability=stable
 * @cluster_privileges manage_security
 * @doc_id security-api-put-user
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_security/user/{username}'
      methods: ['PUT', 'POST']
    }
  ]
  path_parts: {
    /**
     * An identifier for the user.
     *
     * NOTE: Usernames must be at least 1 and no more than 507 characters.
     * They can contain alphanumeric characters (a-z, A-Z, 0-9), spaces, punctuation, and printable symbols in the Basic Latin (ASCII) block.
     * Leading or trailing whitespace is not allowed.
     */
    username: Username
  }
  request_media_type: MediaType.Json
  response_media_type: MediaType.Json
  query_parameters: {
    /**
     * Valid values are `true`, `false`, and `wait_for`.
     * These values have the same meaning as in the index API, but the default value for this API is true.
     * @server_default true
     */
    refresh?: Refresh
  }
  body: {
    username?: Username
    /**
     * The email of the user.
     */
    email?: string | null
    /**
     * The full name of the user.
     */
    full_name?: string | null
    /**
     * Arbitrary metadata that you want to associate with the user.
     */
    metadata?: Metadata
    /**
     * The user's password.
     * Passwords must be at least 6 characters long.
     * When adding a user, one of `password` or `password_hash` is required.
     * When updating an existing user, the password is optional, so that other fields on the user (such as their roles) may be updated without modifying the user's password
     */
    password?: Password
    /**
     * A hash of the user's password.
     * This must be produced using the same hashing algorithm as has been configured for password storage.
     * For more details, see the explanation of the `xpack.security.authc.password_hashing.algorithm` setting in the user cache and password hash algorithm documentation.
     * Using this parameter allows the client to pre-hash the password for performance and/or confidentiality reasons.
     * The `password` parameter and the `password_hash` parameter cannot be used in the same request.
     * @ext_doc_id security-settings-hashing
     */
    password_hash?: string
    /**
     * A set of roles the user has.
     * The roles determine the user's access permissions.
     * To create a user without any roles, specify an empty list (`[]`).
     */
    roles?: string[]
    /**
     * Specifies whether the user is enabled.
     * @server_default true
     */
    enabled?: boolean
  }
}
