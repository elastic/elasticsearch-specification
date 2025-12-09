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

import { Indices, Name } from '@_types/common'
import { IndexPrivilege } from '@security/_types/Privileges'
import { Dictionary } from '@spec_utils/Dictionary'

export class ApplicationPrivilegesCheck {
  /** The name of the application. */
  application: string
  /**
   * A list of the privileges that you want to check for the specified resources.
   * It may be either application privilege names or the names of actions that are granted by those privileges
   */
  privileges: string[]
  /** A list of resource names against which the privileges should be checked. */
  resources: string[]
}

export class IndexPrivilegesCheck {
  /** A list of indices. */
  names: Indices
  /** A list of the privileges that you want to check for the specified indices. */
  privileges: IndexPrivilege[]
  /**
   * This needs to be set to `true` (default is `false`) if using wildcards or regexps for patterns that cover restricted indices.
   * Implicitly, restricted indices do not match index patterns because restricted indices usually have limited privileges and including them in pattern tests would render most such tests false.
   * If restricted indices are explicitly included in the names list, privileges will be checked against them regardless of the value of `allow_restricted_indices`.
   */
  allow_restricted_indices?: boolean
}

export type ApplicationsPrivileges = Dictionary<Name, ResourcePrivileges>
export type ResourcePrivileges = Dictionary<Name, Privileges>
export type Privileges = Dictionary<string, boolean>
