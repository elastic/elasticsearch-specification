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
import { UserProfileId } from '@security/_types/UserProfile'

/**
 * Get a user profile.
 *
 * Get a user's profile using the unique profile ID.
 *
 * NOTE: The user profile feature is designed only for use by Kibana and Elastic's Observability, Enterprise Search, and Elastic Security solutions.
 * Individual users and external applications should not call this API directly.
 * Elastic reserves the right to change or remove this feature in future releases without prior notice.
 * @rest_spec_name security.get_user_profile
 * @availability stack since=8.2.0 stability=stable
 * @availability serverless stability=stable visibility=private
 * @cluster_privileges read_security
 * @doc_id security-api-get-user-profile
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_security/profile/{uid}'
      methods: ['GET']
    }
  ]
  path_parts: {
    /**
     * A unique identifier for the user profile.
     */
    uid: UserProfileId | UserProfileId[]
  }
  query_parameters: {
    /**
     * A comma-separated list of filters for the `data` field of the profile document.
     * To return all content use `data=*`.
     * To return a subset of content use `data=<key>` to retrieve content nested under the specified `<key>`.
     * By default returns no `data` content.
     */
    data?: string | string[]
  }
}
