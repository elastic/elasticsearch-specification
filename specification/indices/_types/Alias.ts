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

import { QueryContainer } from '@_types/query_dsl/abstractions'

export class Alias {
  /**
   * Query used to limit documents the alias can access.
   */
  filter?: QueryContainer
  /**
   * Value used to route indexing operations to a specific shard.
   * If specified, this overwrites the `routing` value for indexing operations.
   */
  index_routing?: string
  /**
   * If `true`, the alias is hidden.
   * All indices for the alias must have the same `is_hidden` value.
   * @server_default false
   */
  is_hidden?: boolean
  /**
   *  If `true`, the index is the write index for the alias.
   * @server_default false
   */
  is_write_index?: boolean
  /**
   * Value used to route indexing and search operations to a specific shard.
   */
  routing?: string
  /**
   * Value used to route search operations to a specific shard.
   * If specified, this overwrites the `routing` value for search operations.
   */
  search_routing?: string
}
