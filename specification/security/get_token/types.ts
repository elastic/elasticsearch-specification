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

import { User } from '@security/_types/User'
import { Name } from '@_types/common'

export enum AccessTokenGrantType {
  password,
  client_credentials,
  _kerberos,
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
