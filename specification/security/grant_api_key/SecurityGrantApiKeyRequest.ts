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
import {
  ApiKeyGrantType,
  GrantApiKey,
  GrantApiKeyClientAuthentication
} from './types'

/**
 * Grant an API key.
 *
 * Create an API key on behalf of another user.
 * This API is similar to the create API keys API, however it creates the API key for a user that is different than the user that runs the API.
 * The caller must have authentication credentials for the user on whose behalf the API key will be created.
 * It is not possible to use this API to create an API key without that user's credentials.
 * The supported user authentication credential types are:
 *
 * * username and password
 * * Elasticsearch access tokens
 * * JWTs
 * * service account tokens of user-managed service accounts
 *
 * The user, for whom the authentication credentials is provided, can optionally "run as" (impersonate) another user.
 * In this case, the API key will be created on behalf of the impersonated user.
 * Run as is not supported with the `_user_managed_service_account` grant type.
 *
 * This API is intended be used by applications that need to create and manage API keys for end users, but cannot guarantee that those users have permission to create API keys on their own behalf.
 * The API keys are created by the Elasticsearch API key service, which is automatically enabled.
 *
 * A successful grant API key API call returns a JSON structure that contains the API key, its unique id, and its name.
 * If applicable, it also returns expiration information for the API key in milliseconds.
 *
 * By default, API keys never expire. You can specify expiration information when you create the API keys.
 * @rest_spec_name security.grant_api_key
 * @availability stack since=7.9.0 stability=stable
 * @availability serverless stability=stable visibility=private
 * @cluster_privileges grant_api_key
 * @doc_id security-api-grant-api-key
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_security/api_key/grant'
      methods: ['POST']
    }
  ]
  request_media_type: MediaType.Json
  response_media_type: MediaType.Json
  query_parameters: {
    /**
     * If 'true', Elasticsearch refreshes the affected shards to make this operation
     * visible to search.
     * If 'wait_for', it waits for a refresh to make this operation visible to search.
     * If 'false', nothing is done with refreshes.
     * @server_default false
     */
    refresh?: Refresh
  }
  body: {
    /**
     * The API key.
     */
    api_key: GrantApiKey
    /**
     * The type of grant. Supported grant types are: `access_token`, `password`, and `_user_managed_service_account`.
     */
    grant_type: ApiKeyGrantType
    /**
     * The user's access token.
     * If you specify the `access_token` grant type, this parameter is required.
     * It is not valid with other grant types.
     */
    access_token?: string
    /**
     * The client authentication for a JWT that requires it, which is what is normally sent in the `ES-Client-Authentication` request header.
     * It is valid only with the `access_token` grant type, when the access token is a JWT.
     * @availability stack since=8.12.0
     * @availability serverless
     */
    client_authentication?: GrantApiKeyClientAuthentication
    /**
     * The service account token of a user-managed service account, as returned by the create service account token API.
     * If you specify the `_user_managed_service_account` grant type, this parameter is required.
     * It is not valid with other grant types.
     * @availability stack since=9.6.0
     */
    service_account_token?: string
    /**
     * The user name that identifies the user.
     * If you specify the `password` grant type, this parameter is required.
     * It is not valid with other grant types.
     */
    username?: Username
    /**
     * The user's password.
     * If you specify the `password` grant type, this parameter is required.
     * It is not valid with other grant types.
     */
    password?: Password
    /**
     * The name of the user to be impersonated.
     * It is not valid with the `_user_managed_service_account` grant type.
     */
    run_as?: Username
  }
}
