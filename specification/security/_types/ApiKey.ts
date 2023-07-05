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

import { Role } from '@security/get_role/types'
import { Dictionary } from '@spec_utils/Dictionary'
import { Id, Metadata, Name, Username } from '@_types/common'
import { long } from '@_types/Numeric'
import { SortResults } from '@_types/sort'
import { RoleDescriptor } from './RoleDescriptor'

export class ApiKey {
  /**
   * Creation time for the API key in milliseconds.
   */
  creation?: long
  /**
   * Expiration time for the API key in milliseconds.
   */
  expiration?: long
  /**
   * Id for the API key
   */
  id: Id
  /**
   * Invalidation status for the API key.
   * If the key has been invalidated, it has a value of `true`. Otherwise, it is `false`.
   */
  invalidated?: boolean
  /**
   * Name of the API key.
   */
  name: Name
  /**
   * Realm name of the principal for which this API key was created.
   */
  realm?: string
  /**
   * Principal for which this API key was created
   */
  username?: Username
  /**
   * Metadata of the API key
   * @availability stack since=7.13.0
   * @availability serverless
   */
  metadata?: Metadata
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
  _sort?: SortResults
}
