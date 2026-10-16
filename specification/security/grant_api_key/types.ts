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

import { Metadata, Name } from '@_types/common'
import { DurationLarge } from '@_types/Time'
import { RoleDescriptor } from '@security/_types/RoleDescriptor'
import { Dictionary } from '@spec_utils/Dictionary'

export class GrantApiKey {
  name: Name
  /**
   * Expiration time for the API key. By default, API keys never expire.
   */
  expiration?: DurationLarge
  /**
   * The role descriptors for this API key.
   * When it is not specified or is an empty array, the API key has a point in time snapshot of permissions of the specified user or access token.
   * If you supply role descriptors, the resultant permissions are an intersection of API keys permissions and the permissions of the user or access token.
   */
  role_descriptors?:
    | Dictionary<string, RoleDescriptor>
    | Dictionary<string, RoleDescriptor>[]
  /**
   * Arbitrary metadata that you want to associate with the API key.
   * It supports nested data structure.
   * Within the `metadata` object, keys beginning with `_` are reserved for system usage.
   */
  metadata?: Metadata
}

export enum ApiKeyGrantType {
  access_token,
  password,
  /**
   * In this type of grant, you must supply a service account token of a user-managed service account in the `service_account_token` parameter.
   * The API key is owned by the service account and is limited by the roles assigned to it.
   * The service account token is authenticated on every grant, so a disabled account or an invalidated token is rejected.
   * Tokens that belong to built-in (`elastic/*`) service accounts are rejected.
   * @availability stack since=9.6.0
   */
  _user_managed_service_account
}

export class GrantApiKeyClientAuthentication {
  /**
   * The client authentication scheme.
   * The only supported scheme is `SharedSecret`.
   */
  scheme: string
  /**
   * The client authentication value, which is what normally follows the scheme in the `ES-Client-Authentication` request header.
   */
  value: string
}
