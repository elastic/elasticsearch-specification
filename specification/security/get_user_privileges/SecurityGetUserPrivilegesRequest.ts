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
import { MediaType } from '@_types/common'

/**
 * Get user privileges.
 *
 * Get the security privileges for the logged in user.
 * All users can use this API, but only to determine their own privileges.
 * To check the privileges of other users, you must use the run as feature.
 * To check whether a user has a specific list of privileges, use the has privileges API.
 * @rest_spec_name security.get_user_privileges
 * @category security
 * @availability stack since=6.5.0 stability=stable
 * @availability serverless stability=stable visibility=private
 * @doc_id security-api-get-user-privileges
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_security/user/_privileges'
      methods: ['GET']
    }
  ]
  response_media_type: MediaType.Json
}
