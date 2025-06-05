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
import {
  ApplicationPrivileges,
  ClusterPrivilege,
  IndicesPrivileges,
  RemoteClusterPrivileges,
  RemoteIndicesPrivileges
} from '@security/_types/Privileges'
import { RoleTemplate } from '@security/_types/RoleTemplate'
import { Dictionary } from '@spec_utils/Dictionary'
import { UserDefinedValue } from '@spec_utils/UserDefinedValue'

export class Role {
  cluster: ClusterPrivilege[]
  indices: IndicesPrivileges[]
  /**
   * @availability stack since=8.14.0
   */
  remote_indices?: RemoteIndicesPrivileges[]
  /**
   * @availability stack since=8.15.0
   */
  remote_cluster?: RemoteClusterPrivileges[]
  metadata: Metadata
  description?: string
  run_as?: string[]
  transient_metadata?: Dictionary<string, UserDefinedValue>
  applications: ApplicationPrivileges[]
  role_templates?: RoleTemplate[]
  /**
   * @availability stack since=8.0.0
   * @availability serverless
   */
  global?: Dictionary<string, Dictionary<string, Dictionary<string, string[]>>>
}
