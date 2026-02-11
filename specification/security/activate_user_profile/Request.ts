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
import { GrantType } from '@security/_types/GrantType'

/**
 * Activate a user profile.
 *
 * Create or update a user profile on behalf of another user.
 *
 * NOTE: The user profile feature is designed only for use by Kibana and Elastic's Observability, Enterprise Search, and Elastic Security solutions.
 * Individual users and external applications should not call this API directly.
 * The calling application must have either an `access_token` or a combination of `username` and `password` for the user that the profile document is intended for.
 * Elastic reserves the right to change or remove this feature in future releases without prior notice.
 *
 * This API creates or updates a profile document for end users with information that is extracted from the user's authentication object including `username`, `full_name,` `roles`, and the authentication realm.
 * For example, in the JWT `access_token` case, the profile user's `username` is extracted from the JWT token claim pointed to by the `claims.principal` setting of the JWT realm that authenticated the token.
 *
 * When updating a profile document, the API enables the document if it was disabled.
 * Any updates do not change existing content for either the `labels` or `data` fields.
 * @rest_spec_name security.activate_user_profile
 * @category security
 * @availability stack since=8.2.0 stability=stable
 * @availability serverless stability=stable visibility=private
 * @cluster_privileges manage_user_profile
 * @doc_id security-api-activate-user-profile
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_security/profile/_activate'
      methods: ['POST']
    }
  ]
  request_media_type: MediaType.Json
  response_media_type: MediaType.Json
  body: {
    /**
     * The user's Elasticsearch access token or JWT.
     * Both `access` and `id` JWT token types are supported and they depend on the underlying JWT realm configuration.
     * If you specify the `access_token` grant type, this parameter is required.
     * It is not valid with other grant types.
     */
    access_token?: string
    /**
     * The type of grant.
     */
    grant_type: GrantType
    /**
     * The user's password.
     * If you specify the `password` grant type, this parameter is required.
     * It is not valid with other grant types.
     */
    password?: string
    /**
     * The username that identifies the user.
     * If you specify the `password` grant type, this parameter is required.
     * It is not valid with other grant types.
     */
    username?: string
  }
}
