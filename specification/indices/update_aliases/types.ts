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

import { Routing, IndexName, IndexAlias, Indices } from '@_types/common'
import { QueryContainer } from '@_types/query_dsl/abstractions'

/** @variants container */
export class Action {
  add?: AddAction
  remove?: RemoveAction
  remove_index?: RemoveIndexAction
}

export class AddAction {
  alias?: IndexAlias
  aliases?: IndexAlias | IndexAlias[]
  filter?: QueryContainer
  index?: IndexName
  indices?: Indices
  index_routing?: Routing
  /** @server_default false */
  is_hidden?: boolean
  is_write_index?: boolean
  routing?: Routing
  search_routing?: Routing
}

export class RemoveAction {
  alias?: IndexAlias
  aliases?: IndexAlias | IndexAlias[]
  index?: IndexName
  indices?: Indices
  /** @server_default false */
  must_exist?: boolean
}

export class RemoveIndexAction {
  index?: IndexName
  indices?: Indices
}
