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
// TODO: once the compiler can handle it, the body should use the commented classes in this file

import { RequestBase } from '@_types/Base'
import { Password, Username } from '@_types/common'
import { AccessTokenGrantType } from './types'

/**
 * Get a token.
 *
 * Create a bearer token for access without requiring basic authentication.
 * The tokens are created by the Elasticsearch Token Service, which is automatically enabled when you configure TLS on the HTTP interface.
 * Alternatively, you can explicitly enable the `xpack.security.authc.token.enabled` setting.
 * When you are running in production mode, a bootstrap check prevents you from enabling the token service unless you also enable TLS on the HTTP interface.
 *
 * The get token API takes the same parameters as a typical OAuth 2.0 token API except for the use of a JSON request body.
 *
 * A successful get token API call returns a JSON structure that contains the access token, the amount of time (seconds) that the token expires in, the type, and the scope if available.
 *
 * The tokens returned by the get token API have a finite period of time for which they are valid and after that time period, they can no longer be used.
 * That time period is defined by the `xpack.security.authc.token.timeout` setting.
 * If you want to invalidate a token immediately, you can do so by using the invalidate token API.
 * @rest_spec_name security.get_token
 * @availability stack since=5.5.0 stability=stable
 * @availability serverless stability=stable visibility=private
 * @cluster_privileges manage_token
 * @doc_id security-api-get-token
 * @ext_doc_id security-encrypt-http
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_security/oauth2/token'
      methods: ['POST']
    }
  ]
  body: {
    /**
     * The type of grant.
     * Supported grant types are: `password`, `_kerberos`, `client_credentials`, and `refresh_token`.
     */
    grant_type?: AccessTokenGrantType
    /**
     * The scope of the token.
     * Currently tokens are only issued for a scope of FULL regardless of the value sent with the request.
     */
    scope?: string
    /**
     * The user's password.
     * If you specify the `password` grant type, this parameter is required.
     * This parameter is not valid with any other supported grant type.
     */
    password?: Password
    /**
     * The base64 encoded kerberos ticket.
     * If you specify the `_kerberos` grant type, this parameter is required.
     * This parameter is not valid with any other supported grant type.
     */
    kerberos_ticket?: string
    /**
     * The string that was returned when you created the token, which enables you to extend its life.
     * If you specify the `refresh_token` grant type, this parameter is required.
     * This parameter is not valid with any other supported grant type.
     */
    refresh_token?: string
    /**
     * The username that identifies the user.
     * If you specify the `password` grant type, this parameter is required.
     * This parameter is not valid with any other supported grant type.
     */
    username?: Username
  }
}
