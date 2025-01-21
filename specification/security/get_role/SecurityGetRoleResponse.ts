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

import { Dictionary } from '@spec_utils/Dictionary'
import { Role } from './types'

export class Response {
  /**
   * A successful call returns an array of roles with the JSON representation of the role.
   * The returned role format is a simple extension of the role definition format, only adding an extra field `transient_metadata.enabled`.
   * This field is false in case the role is automatically disabled, for example when the license level does not allow some permissions that the role grants.
   * If the role is not defined in the native realm, the request returns 404.
   * @codegen_name roles */
  body: Dictionary<string, Role>
}
