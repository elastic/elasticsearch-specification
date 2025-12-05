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
import { Dictionary } from '@spec_utils/Dictionary'
import { Actions } from './types'

/**
 * Create or update application privileges.
 *
 * To use this API, you must have one of the following privileges:
 *
 * * The `manage_security` cluster privilege (or a greater privilege such as `all`).
 * * The "Manage Application Privileges" global privilege for the application being referenced in the request.
 *
 * Application names are formed from a prefix, with an optional suffix that conform to the following rules:
 *
 * * The prefix must begin with a lowercase ASCII letter.
 * * The prefix must contain only ASCII letters or digits.
 * * The prefix must be at least 3 characters long.
 * * If the suffix exists, it must begin with either a dash `-` or `_`.
 * * The suffix cannot contain any of the following characters: `\`, `/`, `*`, `?`, `"`, `<`, `>`, `|`, `,`, `*`.
 * * No part of the name can contain whitespace.
 *
 * Privilege names must begin with a lowercase ASCII letter and must contain only ASCII letters and digits along with the characters `_`, `-`, and `.`.
 *
 * Action names can contain any number of printable ASCII characters and must contain at least one of the following characters: `/`, `*`, `:`.
 * @rest_spec_name security.put_privileges
 * @availability stack since=6.4.0 stability=stable
 * @availability serverless stability=stable visibility=private
 * @cluster_privileges manage_security
 * @doc_id security-api-put-privileges
 * @ext_doc_id security-privileges
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_security/privilege'
      methods: ['PUT', 'POST']
    }
  ]
  query_parameters: {
    /**
     * If `true` (the default) then refresh the affected shards to make this operation visible to search, if `wait_for` then wait for a refresh to make this operation visible to search, if `false` then do nothing with refreshes.
     */
    refresh?: Refresh
  }
  /**
   * The body is a JSON object where the names of the fields are the application names and the value of each field is an object.
   * The fields in this inner object are the names of the privileges and each value is a JSON object,
   * @codegen_name privileges */
  body: Dictionary<string, Dictionary<string, Actions>>
}
