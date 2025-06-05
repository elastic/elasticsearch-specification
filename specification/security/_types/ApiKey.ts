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

import { Id, Metadata, Name, Username } from '@_types/common'
import { SortResults } from '@_types/sort'
import { EpochTime, UnitMillis } from '@_types/Time'
import { Dictionary } from '@spec_utils/Dictionary'
import { Access } from './Access'
import { RoleDescriptor } from './RoleDescriptor'

export class ApiKey {
  /**
   * Id for the API key
   */
  id: Id
  /**
   * Name of the API key.
   */
  name: Name
  /**
   * The type of the API key (e.g. `rest` or `cross_cluster`).
   * @availability stack since=8.10.0
   * @availability serverless
   */
  type: ApiKeyType
  /**
   * Creation time for the API key in milliseconds.
   */
  creation: EpochTime<UnitMillis>
  /**
   * Expiration time for the API key in milliseconds.
   */
  expiration?: EpochTime<UnitMillis>
  /**
   * Invalidation status for the API key.
   * If the key has been invalidated, it has a value of `true`. Otherwise, it is `false`.
   */
  invalidated: boolean
  /**
   * If the key has been invalidated, invalidation time in milliseconds.
   * @availability stack since=8.12.0
   * @availability serverless
   */
  invalidation?: EpochTime<UnitMillis>
  /**
   * Principal for which this API key was created
   */
  username: Username
  /**
   * Realm name of the principal for which this API key was created.
   */
  realm: string
  /**
   * Realm type of the principal for which this API key was created
   * @availability stack since=8.14.0
   * @availability serverless
   */
  realm_type?: string
  /**
   * Metadata of the API key
   * @availability stack since=7.13.0
   * @availability serverless
   */
  metadata: Metadata
  /**
   * The role descriptors assigned to this API key when it was created or last updated.
   * An empty role descriptor means the API key inherits the owner user’s permissions.
   */
  role_descriptors?: Dictionary<string, RoleDescriptor>
  /**
   * The owner user’s permissions associated with the API key.
   * It is a point-in-time snapshot captured at creation and subsequent updates.
   * An API key’s effective permissions are an intersection of its assigned privileges and the owner user’s permissions.
   * @availability stack since=8.5.0
   * @availability serverless
   */
  limited_by?: Array<Dictionary<string, RoleDescriptor>>
  /**
   * The access granted to cross-cluster API keys.
   * The access is composed of permissions for cross cluster search and cross cluster replication.
   * At least one of them must be specified.
   * When specified, the new access assignment fully replaces the previously assigned access.
   * @availability stack since=8.10.0
   * @availability serverless
   */
  access?: Access
  /**
   * The profile uid for the API key owner principal, if requested and if it exists
   * @availability stack since=8.14.0
   * @availability serverless
   */
  profile_uid?: string
  /**
   * Sorting values when using the `sort` parameter with the `security.query_api_keys` API.
   */
  _sort?: SortResults
}

export enum ApiKeyType {
  rest,
  cross_cluster
}
