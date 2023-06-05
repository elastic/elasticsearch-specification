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

import { Name, NodeId, VersionString } from '@_types/common'

export class PluginsRecord {
  /**
   * The unique node identifier.
   */
  'id'?: NodeId
  /**
   * The node name.
   * @aliases n
   */
  'name'?: Name
  /**
   * The component name.
   * @aliases c
   */
  'component'?: string
  /**
   * The component version.
   * @aliases v
   */
  'version'?: VersionString
  /**
   * The plugin details.
   * @aliases d
   */
  'description'?: string
  /**
   * The plugin type.
   * @aliases t
   */
  'type'?: string
}
