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

import {
  IndicesPrivileges,
  ClusterPrivilege,
  ApplicationPrivileges
} from '@security/_types/Privileges'
import { TransientMetadataConfig } from '@security/_types/TransientMetadataConfig'
import { Dictionary } from '@spec_utils/Dictionary'
import { UserDefinedValue } from '@spec_utils/UserDefinedValue'
import { RequestBase } from '@_types/Base'
import { Metadata, Name, Refresh } from '@_types/common'

/**
 * The role management APIs are generally the preferred way to manage roles, rather than using file-based role management.
 * The create or update roles API cannot update roles that are defined in roles files.
 * @rest_spec_name security.put_role
 * @since 0.0.0
 * @stability stable
 * @cluster_privileges manage_enrich, manage_security
 */
export interface Request extends RequestBase {
  path_parts: {
    /**
     * The name of the role.
     */
    name: Name
  }
  query_parameters: {
    refresh?: Refresh
  }
  body: {
    /**
     * A list of application privilege entries.
     */
    applications?: ApplicationPrivileges[]
    /**
     * A list of cluster privileges. These privileges define the cluster-level actions for users with this role.
     */
    cluster?: ClusterPrivilege[]
    /**
     * An object defining global privileges. A global privilege is a form of cluster privilege that is request-aware. Support for global privileges is currently limited to the management of application privileges.
     */
    global?: Dictionary<string, UserDefinedValue>
    /**
     * A list of indices permissions entries.
     */
    indices?: IndicesPrivileges[]
    /**
     * Optional metadata. Within the metadata object, keys that begin with an underscore (`_`) are reserved for system use.
     */
    metadata?: Metadata
    /**
     * A list of users that the owners of this role can impersonate.
     * @doc_id run-as-privilege
     */
    run_as?: string[]
    /**
     * Indicates roles that might be incompatible with the current cluster license, specifically roles with document and field level security. When the cluster license doesn’t allow certain features for a given role, this parameter is updated dynamically to list the incompatible features. If `enabled` is `false`, the role is ignored, but is still listed in the response from the authenticate API.
     */
    transient_metadata?: TransientMetadataConfig
  }
}
