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

import { GlobalPrivilege } from './Privileges'
import { IndicesPrivileges } from './Privileges'
import { ApplicationPrivileges } from './Privileges'
import { TransientMetadataConfig } from './TransientMetadataConfig'
import { Metadata } from '@_types/common'
import { OverloadOf } from '@spec_utils/behaviors'

export class RoleDescriptor {
  cluster?: string[]
  /** @aliases index */
  indices?: IndicesPrivileges[]
  global?: GlobalPrivilege[] | GlobalPrivilege
  applications?: ApplicationPrivileges[]
  metadata?: Metadata
  run_as?: string[]
  transient_metadata?: TransientMetadataConfig
}

export class RoleDescriptorRead implements OverloadOf<RoleDescriptor> {
  cluster: string[]
  /** @aliases index */
  indices: IndicesPrivileges[]
  global?: GlobalPrivilege[] | GlobalPrivilege
  applications?: ApplicationPrivileges[]
  metadata?: Metadata
  run_as?: string[]
  transient_metadata?: TransientMetadataConfig
}
