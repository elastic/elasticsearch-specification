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

import { Id, Name, Username } from '@_types/common'
import { EpochTime, UnitMillis } from '@_types/Time'
import { RoleDescriptorRead } from '@security/_types/RoleDescriptor'

export enum ServiceAccountType {
  /** An account that ships with Elasticsearch, in the reserved `elastic` namespace. */
  built_in,
  /** An account created with the put user-managed service account API. */
  user_managed
}

/**
 * The two kinds of service account describe their privileges differently.
 * A built-in account includes its role descriptor. A user-managed account includes its role names and whether it is enabled.
 * @variants internal tag='type'
 */
export type ServiceAccountInfo =
  | BuiltInServiceAccount
  | UserManagedServiceAccount

export class BuiltInServiceAccount {
  /**
   * The account ships with Elasticsearch.
   * @availability stack since=9.6.0
   * @availability serverless
   */
  type: 'built_in'
  /**
   * The role descriptor declared for the account in the Elasticsearch distribution.
   */
  role_descriptor: RoleDescriptorRead
}

export class UserManagedServiceAccount {
  /**
   * The account was created with the put user-managed service account API.
   * @availability stack since=9.6.0
   */
  type: 'user_managed'
  /**
   * The names of the roles granted to the account, as sent on the last PUT of the account.
   * They are resolved when the account authenticates.
   */
  roles: string[]
  /**
   * Whether the account can authenticate.
   */
  enabled: boolean
  /**
   * A free-text description of the account, as sent on the last PUT of the account.
   * It has no meaning to Elasticsearch. Absent when the account has no description.
   */
  description?: string
  /**
   * The user who created the account.
   * Absent for an account that was created before Elasticsearch recorded its creator.
   * @availability stack since=9.6.0
   */
  created_by?: ServiceAccountAuthor
  /**
   * When the account was created, in milliseconds since the Unix epoch.
   * Absent for an account that was created before Elasticsearch recorded its creation time.
   * @availability stack since=9.6.0
   */
  created_at?: EpochTime<UnitMillis>
  /**
   * The profile UID of the user who created the account.
   * Returned only when `with_profile_uid` is `true` and that user has an activated user profile.
   * @availability stack since=9.6.0
   */
  created_by_profile_uid?: string
  /**
   * The user who last replaced the account with the put user-managed service account API.
   * Absent until the account is first replaced.
   * @availability stack since=9.6.0
   */
  updated_by?: ServiceAccountAuthor
  /**
   * When the account was last replaced, in milliseconds since the Unix epoch.
   * Absent until the account is first replaced.
   * @availability stack since=9.6.0
   */
  updated_at?: EpochTime<UnitMillis>
  /**
   * The profile UID of the user who last replaced the account.
   * Returned only when `with_profile_uid` is `true` and that user has an activated user profile.
   * @availability stack since=9.6.0
   */
  updated_by_profile_uid?: string
}

/**
 * The user who wrote a user-managed service account.
 * If the request ran as another user, that user is recorded.
 * If the request was made with an API key, the owner of the key is recorded, from the owner's own realm, together with the key itself.
 * For an older API key that does not record its owner's realm, the realm is the API key realm, `_es_api_key`.
 */
export class ServiceAccountAuthor {
  /**
   * The username of the user.
   */
  username: Username
  /**
   * The name of the realm that authenticated the user.
   */
  realm: string
  /**
   * The type of the realm that authenticated the user.
   */
  realm_type: string
  /**
   * The API key that the request was made with.
   * Absent when the request was not made with an API key, or when the API key ran as another user.
   */
  api_key?: ServiceAccountAuthorApiKey
}

export class ServiceAccountAuthorApiKey {
  /**
   * The ID of the API key.
   */
  id: Id
  /**
   * The name that the API key had when the request was made.
   * Absent when the API key has no name.
   */
  name?: Name
}
