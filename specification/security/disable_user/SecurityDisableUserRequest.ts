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
import { Refresh, Username } from '@_types/common'

/**
 * Disable users.
 *
 * Disable users in the native realm.
 * By default, when you create users, they are enabled.
 * You can use this API to revoke a user's access to Elasticsearch.
 * @rest_spec_name security.disable_user
 * @availability stack stability=stable
 * @cluster_privileges manage_security
 * @doc_id security-api-disable-user
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_security/user/{username}/_disable'
      methods: ['PUT', 'POST']
    }
  ]
  path_parts: {
    /**
     * An identifier for the user.
     */
    username: Username
  }
  query_parameters: {
    /**
     * If `true` (the default) then refresh the affected shards to make this operation visible to search, if `wait_for` then wait for a refresh to make this operation visible to search, if `false` then do nothing with refreshes.
     */
    refresh?: Refresh
  }
}
