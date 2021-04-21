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

import { TransientMetadata } from '@security/_types/XPackRole'
import { RequestBase } from '@_types/Base'
import { Name, Refresh } from '@_types/common'
import { Dictionary } from '_spec_utils/Dictionary'
import { UserDefinedValue } from '_spec_utils/UserDefinedValue'
import { ApplicationPrivileges } from './ApplicationPrivileges'
import { IndicesPrivileges } from './IndicesPrivileges'

/**
 * @rest_spec_name security.put_role
 * @since 0.0.0
 * @stability TODO
 */
export interface SecurityPutRoleRequest extends RequestBase {
  path_parts: {
    name: Name
  }
  query_parameters?: {
    refresh?: Refresh
  }
  body?: {
    applications?: ApplicationPrivileges[]
    cluster?: string[]
    global?: Dictionary<string, UserDefinedValue>
    indices?: IndicesPrivileges[]
    metadata?: Dictionary<string, UserDefinedValue>
    run_as?: string[]
    transient_metadata?: TransientMetadata
  }
}
