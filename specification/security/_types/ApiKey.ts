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
  creation?: long
  expiration?: long
  id: Id
  invalidated?: boolean
  name: Name
  realm?: string
  username?: Username
  /**
   * @availability stack since=7.13.0
   * @availability serverless
   */
  metadata?: Metadata
  role_descriptors?: Dictionary<string, RoleDescriptor>
  /**
   * @availability stack since=8.5.0
   * @availability serverless
   */
  limited_by?: Array<Dictionary<string, RoleDescriptor>>
  _sort?: SortResults
}
