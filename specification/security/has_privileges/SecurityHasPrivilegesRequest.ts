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
import { MediaType, Name } from '@_types/common'
import { ClusterPrivilege } from '@security/_types/Privileges'
import { ApplicationPrivilegesCheck, IndexPrivilegesCheck } from './types'

/**
 * Check user privileges.
 *
 * Determine whether the specified user has a specified list of privileges.
 * All users can use this API, but only to determine their own privileges.
 * To check the privileges of other users, you must use the run as feature.
 * @rest_spec_name security.has_privileges
 * @category security
 * @availability stack since=6.4.0 stability=stable
 * @availability serverless stability=stable visibility=public
 * @doc_id security-api-has-privileges
 * @ext_doc_id security-privileges
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_security/user/_has_privileges'
      methods: ['GET', 'POST']
    },
    {
      path: '/_security/user/{user}/_has_privileges'
      methods: ['GET', 'POST']
    }
  ]
  path_parts: {
    /** Username */
    user?: Name
  }
  request_media_type: MediaType.Json
  response_media_type: MediaType.Json
  body: {
    application?: ApplicationPrivilegesCheck[]
    /**
     * A list of the cluster privileges that you want to check.
     */
    cluster?: ClusterPrivilege[]
    index?: IndexPrivilegesCheck[]
  }
}
