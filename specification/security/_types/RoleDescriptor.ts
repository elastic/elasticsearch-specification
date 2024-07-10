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

import { ClusterPrivilege, GlobalPrivilege } from './Privileges'
import { IndicesPrivileges } from './Privileges'
import { ApplicationPrivileges } from './Privileges'
import { Metadata } from '@_types/common'
import { OverloadOf } from '@spec_utils/behaviors'
import { Dictionary } from '@spec_utils/Dictionary'
import { UserDefinedValue } from '@spec_utils/UserDefinedValue'

export class RoleDescriptor {
  /**
   * A list of cluster privileges. These privileges define the cluster level actions that API keys are able to execute.
   */
  cluster?: ClusterPrivilege[]
  /**
   * A list of indices permissions entries.
   * @aliases index
   */
  indices?: IndicesPrivileges[]
  /**
   * An object defining global privileges. A global privilege is a form of cluster privilege that is request-aware. Support for global privileges is currently limited to the management of application privileges.
   */
  global?: GlobalPrivilege[] | GlobalPrivilege
  /**
   * A list of application privilege entries
   */
  applications?: ApplicationPrivileges[]
  /**
   * Optional meta-data. Within the metadata object, keys that begin with `_` are reserved for system usage.
   */
  metadata?: Metadata
  /**
   * A list of users that the API keys can impersonate.
   * @doc_id run-as-privilege
   */
  run_as?: string[]
  /**
   * Optional description of the role descriptor
   */
  description?: string
  transient_metadata?: Dictionary<string, UserDefinedValue>
}

export class RoleDescriptorRead implements OverloadOf<RoleDescriptor> {
  /**
   * A list of cluster privileges. These privileges define the cluster level actions that API keys are able to execute.
   */
  cluster: string[]
  /**
   * A list of indices permissions entries.
   * @aliases index
   */
  indices: IndicesPrivileges[]
  /**
   * An object defining global privileges. A global privilege is a form of cluster privilege that is request-aware. Support for global privileges is currently limited to the management of application privileges.
   */
  global?: GlobalPrivilege[] | GlobalPrivilege
  /**
   * A list of application privilege entries
   */
  applications?: ApplicationPrivileges[]
  /**
   * Optional meta-data. Within the metadata object, keys that begin with `_` are reserved for system usage.
   */
  metadata?: Metadata
  /**
   * A list of users that the API keys can impersonate.
   * @doc_id run-as-privilege
   */
  run_as?: string[]
  /**
   * Optional description of the role descriptor
   */
  description?: string
  transient_metadata?: Dictionary<string, UserDefinedValue>
}
