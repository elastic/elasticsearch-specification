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

import { RequestBase } from '@_types/Base'
import { MediaType, Metadata, Name, Refresh } from '@_types/common'
import {
  ApplicationPrivileges,
  ClusterPrivilege,
  IndicesPrivileges,
  RemoteClusterPrivileges,
  RemoteIndicesPrivileges
} from '@security/_types/Privileges'
import { Dictionary } from '@spec_utils/Dictionary'
import { UserDefinedValue } from '@spec_utils/UserDefinedValue'

/**
 * Create or update roles.
 *
 * The role management APIs are generally the preferred way to manage roles in the native realm, rather than using file-based role management.
 * The create or update roles API cannot update roles that are defined in roles files.
 * File-based role management is not available in Elastic Serverless.
 * @rest_spec_name security.put_role
 * @availability stack stability=stable
 * @availability serverless stability=stable visibility=private
 * @cluster_privileges manage_security
 * @doc_id security-api-put-role
 * @ext_doc_id defining-roles
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_security/role/{name}'
      methods: ['PUT', 'POST']
    }
  ]
  path_parts: {
    /**
     * The name of the role.
     */
    name: Name
  }
  request_media_type: MediaType.Json
  response_media_type: MediaType.Json
  query_parameters: {
    /**
     * If `true` (the default) then refresh the affected shards to make this operation visible to search, if `wait_for` then wait for a refresh to make this operation visible to search, if `false` then do nothing with refreshes.
     */
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
     * @availability stack
     */
    global?: Dictionary<string, UserDefinedValue>
    /**
     * A list of indices permissions entries.
     */
    indices?: IndicesPrivileges[]
    /**
     * A list of remote indices permissions entries.
     *
     * NOTE: Remote indices are effective for remote clusters configured with the API key based model.
     * They have no effect for remote clusters configured with the certificate based model.
     * @availability stack since=8.14.0
     *
     */
    remote_indices?: RemoteIndicesPrivileges[]
    /**
     * A list of remote cluster permissions entries.
     * @availability stack since=8.15.0
     */
    remote_cluster?: RemoteClusterPrivileges[]
    /**
     * Optional metadata. Within the metadata object, keys that begin with an underscore (`_`) are reserved for system use.
     */
    metadata?: Metadata
    /**
     * A list of users that the owners of this role can impersonate. *Note*: in Serverless, the run-as feature is disabled. For API compatibility, you can still specify an empty `run_as` field, but a non-empty list will be rejected.
     * @ext_doc_id run-as-privilege
     */
    run_as?: string[]
    /**
     * Optional description of the role descriptor
     */
    description?: string
    /**
     * Indicates roles that might be incompatible with the current cluster license, specifically roles with document and field level security. When the cluster license doesn’t allow certain features for a given role, this parameter is updated dynamically to list the incompatible features. If `enabled` is `false`, the role is ignored, but is still listed in the response from the authenticate API.
     */
    transient_metadata?: Dictionary<string, UserDefinedValue>
  }
}
