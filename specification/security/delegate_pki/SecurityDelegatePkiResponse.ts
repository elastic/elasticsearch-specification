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

import { Metadata } from '@_types/common'
import { long } from '@_types/Numeric'
import { Dictionary } from '@spec_utils/Dictionary'

export class Response {
  body: {
    /**
     * An access token associated with the subject distinguished name of the client's certificate.
     */
    access_token: string
    /**
     * The amount of time (in seconds) before the token expires.
     */
    expires_in: long
    /**
     * The type of token.
     */
    type: string

    authentication?: Authentication
  }
}

export class Authentication {
  username: string
  roles: string[]
  full_name: string | null
  email: string | null
  token?: Dictionary<string, string>
  metadata: Metadata
  enabled: boolean
  authentication_realm: AuthenticationRealm
  lookup_realm: AuthenticationRealm
  authentication_type: string
  api_key?: Dictionary<string, string>
}

export class AuthenticationRealm {
  name: string
  type: string
  domain?: string
}
