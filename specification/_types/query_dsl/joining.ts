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

import { InnerHits } from '@global/search/_types/hits'
import { Field, Id, RelationName } from '@_types/common'
import { integer } from '@_types/Numeric'
import { QueryBase, QueryContainer } from './abstractions'

export enum ChildScoreMode {
  none = 0,
  avg = 1,
  sum = 2,
  max = 3,
  min = 4
}

export class HasChildQuery extends QueryBase {
  /** @server_default false */
  ignore_unmapped?: boolean
  inner_hits?: InnerHits
  max_children?: integer
  min_children?: integer
  query: QueryContainer
  /** @server_default 'none' */
  score_mode?: ChildScoreMode
  type: RelationName
}

export class HasParentQuery extends QueryBase {
  /** @server_default false */
  ignore_unmapped?: boolean
  inner_hits?: InnerHits
  parent_type: RelationName
  query: QueryContainer
  /** @server_default false */
  score?: boolean
}

export class NestedQuery extends QueryBase {
  /** @server_default false */
  ignore_unmapped?: boolean
  inner_hits?: InnerHits
  path: Field
  query: QueryContainer
  /** @server_default 'avg' */
  score_mode?: NestedScoreMode
}

export enum NestedScoreMode {
  avg = 0,
  sum = 1,
  min = 2,
  max = 3,
  none = 4
}

export class ParentIdQuery extends QueryBase {
  id?: Id
  /** @server_default false */
  ignore_unmapped?: boolean
  type?: RelationName
}
