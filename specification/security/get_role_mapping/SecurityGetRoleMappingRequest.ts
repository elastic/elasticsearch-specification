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
 * Get role mappings.
 *
 * Role mappings define which roles are assigned to each user.
 * The role mapping APIs are generally the preferred way to manage role mappings rather than using role mapping files.
 * The get role mappings API cannot retrieve role mappings that are defined in role mapping files.
 * @rest_spec_name security.get_role_mapping
 * @category security
 * @availability stack since=5.5.0 stability=stable
 * @availability serverless stability=stable visibility=private
 * @cluster_privileges manage_security
 * @doc_id security-api-get-role-mapping
 * @ext_doc_id mapping-roles
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_security/role_mapping/{name}'
      methods: ['GET']
    },
    {
      path: '/_security/role_mapping'
      methods: ['GET']
    }
  ]
  path_parts: {
    /**
     * The distinct name that identifies the role mapping. The name is used solely as an identifier to facilitate interaction via the API; it does not affect the behavior of the mapping in any way. You can specify multiple mapping names as a comma-separated list. If you do not specify this parameter, the API returns information about all role mappings.
     */
    name?: Names
  }
  response_media_type: MediaType.Json
}
