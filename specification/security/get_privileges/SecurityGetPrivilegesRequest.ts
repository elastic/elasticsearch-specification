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
import { MediaType, Name, Names } from '@_types/common'

/**
 * Get application privileges.
 *
 * To use this API, you must have one of the following privileges:
 *
 * * The `read_security` cluster privilege (or a greater privilege such as `manage_security` or `all`).
 * * The "Manage Application Privileges" global privilege for the application being referenced in the request.
 * @rest_spec_name security.get_privileges
 * @category security
 * @availability stack since=6.4.0 stability=stable
 * @availability serverless stability=stable visibility=private
 * @cluster_privileges read_security
 * @doc_id security-api-get-privileges
 * @ext_doc_id security-privileges
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_security/privilege'
      methods: ['GET']
    },
    {
      path: '/_security/privilege/{application}'
      methods: ['GET']
    },
    {
      path: '/_security/privilege/{application}/{name}'
      methods: ['GET']
    }
  ]
  path_parts: {
    /**
     * The name of the application.
     * Application privileges are always associated with exactly one application.
     * If you do not specify this parameter, the API returns information about all privileges for all applications.
     */
    application?: Name
    /**
     * The name of the privilege.
     * If you do not specify this parameter, the API returns information about all privileges for the requested application.
     */
    name?: Names
  }
  response_media_type: MediaType.Json
}
