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

import { RoleDescriptorRead } from '@security/_types/RoleDescriptor'

export enum ServiceAccountType {
  /** An account that ships with Elasticsearch, in the reserved `elastic` namespace. */
  built_in,
  /** An account created with the put user-managed service account API. */
  user_managed
}

/**
 * The two kinds of service account describe their privileges differently, so the reported
 * information is a union tagged by `type`.
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
   * The names of the roles granted to the account, as they were given when it was created.
   * They are resolved when the account authenticates.
   */
  roles: string[]
  /**
   * Whether the account can authenticate.
   */
  enabled: boolean
}
