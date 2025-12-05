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
import { MediaType, Names } from '@_types/common'

/**
 * Get roles.
 *
 * Get roles in the native realm.
 * The role management APIs are generally the preferred way to manage roles, rather than using file-based role management.
 * The get roles API cannot retrieve roles that are defined in roles files.
 * @rest_spec_name security.get_role
 * @availability stack stability=stable
 * @availability serverless stability=stable visibility=public
 * @cluster_privileges read_security
 * @doc_id security-api-get-role
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_security/role/{name}'
      methods: ['GET']
    },
    {
      path: '/_security/role'
      methods: ['GET']
    }
  ]
  path_parts: {
    /**
     * The name of the role.
     * You can specify multiple roles as a comma-separated list.
     * If you do not specify this parameter, the API returns information about all roles.
     */
    name?: Names
  }
  response_media_type: MediaType.Json
}
