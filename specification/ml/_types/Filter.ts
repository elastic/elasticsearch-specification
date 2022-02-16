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

import { Id } from '@_types/common'

export class Filter {
  /** A description of the filter. */
  description?: string
  /** A string that uniquely identifies a filter. */
  filter_id: Id
  /** An array of strings which is the filter item list. */
  items: string[]
}

export class FilterRef {
  /**
   * The identifier for the filter.
   */
  filter_id: Id
  /**
   * If set to `include`, the rule applies for values in the filter. If set to `exclude`, the rule applies for values not in the filter.
   * @server_default include
   */
  filter_type?: FilterType
}

export enum FilterType {
  include,
  exclude
}
