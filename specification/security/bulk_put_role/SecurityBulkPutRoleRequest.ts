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
import { Refresh } from '@_types/common'
import { RoleDescriptor } from '@security/_types/RoleDescriptor'
import { Dictionary } from '@spec_utils/Dictionary'

/**
 * Bulk create or update roles.
 *
 * The role management APIs are generally the preferred way to manage roles, rather than using file-based role management.
 * The bulk create or update roles API cannot update roles that are defined in roles files.
 * @rest_spec_name security.bulk_put_role
 * @availability stack since=8.15.0 stability=stable
 * @availability serverless stability=stable visibility=private
 * @cluster_privileges manage_security
 * @doc_id security-api-bulk-put-role
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_security/role'
      methods: ['POST']
    }
  ]
  query_parameters: {
    refresh?: Refresh
  }
  body: {
    /**
     * A dictionary of role name to RoleDescriptor objects to add or update
     */
    roles: Dictionary<string, RoleDescriptor>
  }
}
