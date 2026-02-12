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
import { MediaType, Refresh } from '@_types/common'
import { UserProfileId } from '@security/_types/UserProfile'

/**
 * Disable a user profile.
 *
 * Disable user profiles so that they are not visible in user profile searches.
 *
 * NOTE: The user profile feature is designed only for use by Kibana and Elastic's Observability, Enterprise Search, and Elastic Security solutions.
 * Individual users and external applications should not call this API directly.
 * Elastic reserves the right to change or remove this feature in future releases without prior notice.
 *
 * When you activate a user profile, its automatically enabled and visible in user profile searches. You can use the disable user profile API to disable a user profile so it’s not visible in these searches.
 * To re-enable a disabled user profile, use the enable user profile API .
 * @rest_spec_name security.disable_user_profile
 * @category security
 * @availability stack since=8.2.0 stability=stable
 * @availability serverless stability=stable visibility=private
 * @cluster_privileges manage_user_profile
 * @doc_id security-api-disable-user-profile
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_security/profile/{uid}/_disable'
      methods: ['PUT', 'POST']
    }
  ]
  path_parts: {
    /**
     * Unique identifier for the user profile.
     */
    uid: UserProfileId
  }
  response_media_type: MediaType.Json
  query_parameters: {
    /**
     * If 'true', Elasticsearch refreshes the affected shards to make this operation visible to search.
     * If 'wait_for', it waits for a refresh to make this operation visible to search.
     * If 'false', it does nothing with refreshes.
     * @server_default false
     */
    refresh?: Refresh
  }
}
