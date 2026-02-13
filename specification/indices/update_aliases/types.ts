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

import { IndexAlias, IndexName, Indices } from '@_types/common'
import { QueryContainer } from '@_types/query_dsl/abstractions'

/** @variants container */
export class Action {
  /**
   * Adds a data stream or index to an alias.
   * If the alias doesn’t exist, the `add` action creates it.
   */
  add?: AddAction
  /**
   * Removes a data stream or index from an alias.
   */
  remove?: RemoveAction
  /**
   * Deletes an index.
   * You cannot use this action on aliases or data streams.
   */
  remove_index?: RemoveIndexAction
}

export class AddAction {
  /**
   * Alias for the action.
   * Index alias names support date math.
   */
  alias?: IndexAlias
  /**
   * Aliases for the action.
   * Index alias names support date math.
   */
  aliases?: IndexAlias | IndexAlias[]
  /**
   * Query used to limit documents the alias can access.
   */
  filter?: QueryContainer
  /**
   * Data stream or index for the action.
   * Supports wildcards (`*`).
   */
  index?: IndexName
  /**
   * Data streams or indices for the action.
   * Supports wildcards (`*`).
   */
  indices?: Indices
  /**
   * Value used to route indexing operations to a specific shard.
   * If specified, this overwrites the `routing` value for indexing operations.
   * Data stream aliases don’t support this parameter.
   */
  index_routing?: string
  /**
   * If `true`, the alias is hidden.
   * @server_default false */
  is_hidden?: boolean
  /**
   * If `true`, sets the write index or data stream for the alias.
   */
  is_write_index?: boolean
  /**
   * Value used to route indexing and search operations to a specific shard.
   * Data stream aliases don’t support this parameter.
   */
  routing?: string
  /**
   * Value used to route search operations to a specific shard.
   * If specified, this overwrites the `routing` value for search operations.
   * Data stream aliases don’t support this parameter.
   */
  search_routing?: string
  /**
   * If `true`, the alias must exist to perform the action.
   * @server_default false */
  must_exist?: boolean
}

export class RemoveAction {
  /**
   * Alias for the action.
   * Index alias names support date math.
   */
  alias?: IndexAlias
  /**
   * Aliases for the action.
   * Index alias names support date math.
   */
  aliases?: IndexAlias | IndexAlias[]
  /**
   * Data stream or index for the action.
   * Supports wildcards (`*`).
   */
  index?: IndexName
  /**
   * Data streams or indices for the action.
   * Supports wildcards (`*`).
   */
  indices?: Indices
  /**
   * If `true`, the alias must exist to perform the action.
   * @server_default false */
  must_exist?: boolean
}

export class RemoveIndexAction {
  /**
   * Data stream or index for the action.
   * Supports wildcards (`*`).
   */
  index?: IndexName
  /**
   * Data streams or indices for the action.
   * Supports wildcards (`*`).
   */
  indices?: Indices
  /**
   * If `true`, the alias must exist to perform the action.
   * @server_default false */
  must_exist?: boolean
}
