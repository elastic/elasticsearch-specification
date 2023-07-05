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
import { Password, Username } from '@_types/common'
import { GrantApiKey, ApiKeyGrantType } from './types'

/**
 * Creates an API key on behalf of another user.
 * This API is similar to Create API keys, however it creates the API key for a user that is different than the user that runs the API.
 * The caller must have authentication credentials (either an access token, or a username and password) for the user on whose behalf the API key will be created.
 * It is not possible to use this API to create an API key without that user’s credentials.
 * The user, for whom the authentication credentials is provided, can optionally "run as" (impersonate) another user.
 * In this case, the API key will be created on behalf of the impersonated user.
 *
 * This API is intended be used by applications that need to create and manage API keys for end users, but cannot guarantee that those users have permission to create API keys on their own behalf.
 *
 * A successful grant API key API call returns a JSON structure that contains the API key, its unique id, and its name.
 * If applicable, it also returns expiration information for the API key in milliseconds.
 *
 * By default, API keys never expire. You can specify expiration information when you create the API keys.
 * @rest_spec_name security.grant_api_key
 * @availability stack since=7.9.0 stability=stable
 * @availability serverless stability=stable visibility=private
 * @cluster_privileges grant_api_key
 */
export interface Request extends RequestBase {
  body: {
    /**
     * Defines the API key.
     */
    api_key: GrantApiKey
    /**
     * The type of grant. Supported grant types are: `access_token`, `password`.
     */
    grant_type: ApiKeyGrantType
    /**
     * The user’s access token.
     * If you specify the `access_token` grant type, this parameter is required.
     * It is not valid with other grant types.
     */
    access_token?: string
    /**
     * The user name that identifies the user.
     * If you specify the `password` grant type, this parameter is required.
     * It is not valid with other grant types.
     */
    username?: Username
    /**
     * The user’s password. If you specify the `password` grant type, this parameter is required.
     * It is not valid with other grant types.
     */
    password?: Password
    /**
     * The name of the user to be impersonated.
     */
    run_as?: Username
  }
}
