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
  GlobalPrivilege,
  ApplicationPrivileges
} from '@security/_types/Privileges'

export class Response {
  body: {
    applications: ApplicationPrivileges[]
    cluster: string[]
    global: GlobalPrivilege[]
    /**
     * In this context `IndicesPrivileges.query` property can only be a string, see `IndicesPrivileges` documentation for detail.
     */
    indices: IndicesPrivileges[]
    run_as: string[]
  }
}
