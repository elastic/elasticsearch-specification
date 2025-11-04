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
import { OverloadOf } from '@spec_utils/behaviors'
import { Dictionary } from '@spec_utils/Dictionary'
import { UserDefinedValue } from '@spec_utils/UserDefinedValue'
import {
  ApplicationPrivileges,
  ClusterPrivilege,
  GlobalPrivilege,
  IndicesPrivileges,
  RemoteClusterPrivileges,
  RemoteIndicesPrivileges
} from './Privileges'

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
   * A list of indices permissions for remote clusters.
   * @availability stack since=8.14.0
   */
  remote_indices?: RemoteIndicesPrivileges[]
  /**
   * A list of cluster permissions for remote clusters.
   * NOTE: This is limited a subset of the cluster permissions.
   * @availability stack since=8.15.0
   */
  remote_cluster?: RemoteClusterPrivileges[]
  /**
   * An object defining global privileges. A global privilege is a form of cluster privilege that is request-aware. Support for global privileges is currently limited to the management of application privileges.
   * @availability stack
   */
  // eslint-disable-next-line es-spec-validator/no-inline-unions, es-spec-validator/prefer-tagged-variants -- TODO: use tagged variant
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
   * NOTE: In Elastic Cloud Serverless, the run-as feature is disabled.
   * For API compatibility, you can still specify an empty `run_as` field, but a non-empty list will be rejected.
   * @ext_doc_id run-as-privilege
   */
  run_as?: string[]
  /**
   * Optional description of the role descriptor
   */
  description?: string
  /**
   * Restriction for when the role descriptor is allowed to be effective.
   */
  restriction?: Restriction
  transient_metadata?: Dictionary<string, UserDefinedValue>
}

export class RoleDescriptorRead implements OverloadOf<RoleDescriptor> {
  /**
   * A list of cluster privileges. These privileges define the cluster level actions that API keys are able to execute.
   */
  cluster: ClusterPrivilege[]
  /**
   * A list of indices permissions entries.
   * @aliases index
   */
  indices: IndicesPrivileges[]
  /**
   * A list of indices permissions for remote clusters.
   * @availability stack since=8.14.0
   */
  remote_indices?: RemoteIndicesPrivileges[]
  /**
   * A list of cluster permissions for remote clusters.
   * NOTE: This is limited a subset of the cluster permissions.
   * @availability stack since=8.15.0
   */
  remote_cluster?: RemoteClusterPrivileges[]
  /**
   * An object defining global privileges. A global privilege is a form of cluster privilege that is request-aware. Support for global privileges is currently limited to the management of application privileges.
   */
  // eslint-disable-next-line es-spec-validator/no-inline-unions, es-spec-validator/prefer-tagged-variants -- TODO: use tagged variant
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
   * @ext_doc_id run-as-privilege
   */
  run_as?: string[]
  /**
   * An optional description of the role descriptor.
   */
  description?: string
  /**
   * A restriction for when the role descriptor is allowed to be effective.
   * @ext_doc_id role-restriction
   */
  restriction?: Restriction
  transient_metadata?: Dictionary<string, UserDefinedValue>
}

export class Restriction {
  /**
   * A list of workflows to which the API key is restricted.
   * NOTE: In order to use a role restriction, an API key must be created with a single role descriptor.
   */
  workflows: RestrictionWorkflow[]
}

/** @non_exhaustive */
export enum RestrictionWorkflow {
  search_application_query
}
