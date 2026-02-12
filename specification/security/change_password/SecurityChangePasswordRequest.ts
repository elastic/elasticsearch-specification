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
import { MediaType, Password, Refresh, Username } from '@_types/common'

/**
 * Change passwords.
 *
 * Change the passwords of users in the native realm and built-in users.
 * @rest_spec_name security.change_password
 * @category security
 * @availability stack stability=stable
 * @doc_id security-api-change-password
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_security/user/{username}/_password'
      methods: ['PUT', 'POST']
    },
    {
      path: '/_security/user/_password'
      methods: ['PUT', 'POST']
    }
  ]
  path_parts: {
    /**
     * The user whose password you want to change. If you do not specify this
     * parameter, the password is changed for the current user.
     */
    username?: Username
  }
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
     * The new password value. Passwords must be at least 6 characters long.
     */
    password?: Password
    /**
     * A hash of the new password value. This must be produced using the same
     * hashing algorithm as has been configured for password storage. For more details,
     * see the explanation of the `xpack.security.authc.password_hashing.algorithm`
     * setting.
     */
    password_hash?: string
  }
}
