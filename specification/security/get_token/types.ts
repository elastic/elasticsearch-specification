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

import { Name } from '@_types/common'
import { User } from '@security/_types/User'

export enum AccessTokenGrantType {
  /**
   * This grant type implements the Resource Owner Password Credentials Grant of OAuth2.
   * In this grant, a trusted client exchanges the end user's credentials for an access token and (possibly) a refresh token.
   * The request needs to be made by an authenticated user but happens on behalf of another authenticated user (the one whose credentials are passed as request parameters).
   * This grant type is not suitable or designed for the self-service user creation of tokens.
   */
  password,
  /**
   * This grant type implements the Client Credentials Grant of OAuth2.
   * It is geared for machine to machine communication and is not suitable or designed for the self-service user creation of tokens.
   * It generates only access tokens that cannot be refreshed.
   * The premise is that the entity that uses `client_credentials` has constant access to a set of (client, not end-user) credentials and can authenticate itself at will.
   */
  client_credentials,
  /**
   * This grant type is supported internally and implements SPNEGO based Kerberos support.
   * The `_kerberos` grant type may change from version to version.
   */
  _kerberos,
  /**
   * This grant type implements the Refresh Token Grant of OAuth2.
   * In this grant a user exchanges a previously issued refresh token for a new access token and a new refresh token.
   */
  refresh_token
}

export class UserRealm {
  name: Name
  type: string
}

export class AuthenticationProvider {
  type: string
  name: Name
}

export class AuthenticatedUser extends User {
  authentication_realm: UserRealm
  lookup_realm: UserRealm
  authentication_provider?: AuthenticationProvider
  authentication_type: string
}
