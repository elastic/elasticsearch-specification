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
import { RoleMappingRule } from '@security/_types/RoleMappingRule'
import { RoleTemplate } from '@security/_types/RoleTemplate'

/**
 * Create or update role mappings.
 *
 * Role mappings define which roles are assigned to each user.
 * Each mapping has rules that identify users and a list of roles that are granted to those users.
 * The role mapping APIs are generally the preferred way to manage role mappings rather than using role mapping files. The create or update role mappings API cannot update role mappings that are defined in role mapping files.
 *
 * NOTE: This API does not create roles. Rather, it maps users to existing roles.
 * Roles can be created by using the create or update roles API or roles files.
 *
 * **Role templates**
 *
 * The most common use for role mappings is to create a mapping from a known value on the user to a fixed role name.
 * For example, all users in the `cn=admin,dc=example,dc=com` LDAP group should be given the superuser role in Elasticsearch.
 * The `roles` field is used for this purpose.
 *
 * For more complex needs, it is possible to use Mustache templates to dynamically determine the names of the roles that should be granted to the user.
 * The `role_templates` field is used for this purpose.
 *
 * NOTE: To use role templates successfully, the relevant scripting feature must be enabled.
 * Otherwise, all attempts to create a role mapping with role templates fail.
 *
 * All of the user fields that are available in the role mapping rules are also available in the role templates.
 * Thus it is possible to assign a user to a role that reflects their username, their groups, or the name of the realm to which they authenticated.
 *
 * By default a template is evaluated to produce a single string that is the name of the role which should be assigned to the user.
 * If the format of the template is set to "json" then the template is expected to produce a JSON string or an array of JSON strings for the role names.
 * @rest_spec_name security.put_role_mapping
 * @availability stack since=5.5.0 stability=stable
 * @availability serverless stability=stable visibility=private
 * @cluster_privileges manage_security
 * @doc_id security-api-put-role-mapping
 * @ext_doc_id mapping-roles
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_security/role_mapping/{name}'
      methods: ['PUT', 'POST']
    }
  ]
  path_parts: {
    /**
     * The distinct name that identifies the role mapping.
     * The name is used solely as an identifier to facilitate interaction via the API; it does not affect the behavior of the mapping in any way.
     */
    name: Name
  }
  request_media_type: MediaType.Json
  response_media_type: MediaType.Json
  query_parameters: {
    refresh?: Refresh
  }
  body: {
    /**
     * Mappings that have `enabled` set to `false` are ignored when role mapping is performed.
     */
    enabled?: boolean
    /**
     * Additional metadata that helps define which roles are assigned to each user.
     * Within the metadata object, keys beginning with `_` are reserved for system usage.
     */
    metadata?: Metadata
    /**
     * A list of role names that are granted to the users that match the role mapping rules.
     * Exactly one of `roles` or `role_templates` must be specified.
     */
    roles?: string[]
    /**
     * A list of Mustache templates that will be evaluated to determine the roles names that should granted to the users that match the role mapping rules.
     * Exactly one of `roles` or `role_templates` must be specified.
     */
    role_templates?: RoleTemplate[]
    /**
     * The rules that determine which users should be matched by the mapping.
     * A rule is a logical condition that is expressed by using a JSON DSL.
     */
    rules?: RoleMappingRule
    run_as?: string[]
  }
}
