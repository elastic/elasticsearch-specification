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

import { Explanation } from '@global/explain/types'
import { Dictionary } from '@spec_utils/Dictionary'
import { UserDefinedValue } from '@spec_utils/UserDefinedValue'
import {
  Field,
  Fields,
  Id,
  IndexName,
  Name,
  SequenceNumber,
  Type,
  VersionNumber
} from '@_types/common'
import { double, integer, long } from '@_types/Numeric'
import { ScriptField } from '@_types/Scripting'
import { FieldCollapse } from './FieldCollapse'
import { Highlight } from './highlighting'
import { Sort, SortResults } from './sort'
import { SourceFilter } from './SourceFilter'

export class Hit<TDocument> {
  _index: IndexName
  _id: Id

  _score?: double
  _type?: Type

  _explanation?: Explanation
  fields?: Dictionary<string, UserDefinedValue>
  highlight?: Dictionary<string, string[]>
  inner_hits?: Dictionary<string, InnerHitsResult>
  matched_queries?: string[]
  _nested?: NestedIdentity
  _ignored?: string[]

  _shard?: string
  _node?: string
  _routing?: string
  _source?: TDocument
  _seq_no?: SequenceNumber
  _primary_term?: long
  _version?: VersionNumber
  sort?: SortResults
}

export class HitsMetadata<T> {
  total: TotalHits | long
  hits: Hit<T>[]

  max_score?: double
}

export class HitMetadata<TDocument> {
  _id: Id
  _index: IndexName
  _primary_term: long
  _routing: string
  _seq_no: SequenceNumber
  _source: TDocument
  _type: Type
  _version: VersionNumber
}

export class InnerHitsMetadata {
  total: TotalHits | long
  hits: Hit<Dictionary<string, UserDefinedValue>>[]

  max_score?: double
}

export class InnerHitsResult {
  hits: InnerHitsMetadata
}

export class NestedIdentity {
  field: Field
  offset: integer
  _nested?: NestedIdentity
}

export class TotalHits {
  relation: TotalHitsRelation
  value: long
}

export enum TotalHitsRelation {
  /** Accurate */
  eq = 0,
  /** Lower bound, including returned events or sequences */
  gte = 1
}

export class InnerHits {
  name?: Name
  size?: integer
  from?: integer
  collapse?: FieldCollapse
  docvalue_fields?: FieldAndFormat[]
  explain?: boolean
  highlight?: Highlight
  ignore_unmapped?: boolean
  script_fields?: Dictionary<Field, ScriptField>
  seq_no_primary_term?: boolean
  fields?: Fields
  sort?: Sort
  _source?: boolean | SourceFilter
  stored_field?: Fields
  /** @server_default false */
  track_scores?: boolean
  version?: boolean
}

/** @shortcut_property field */
export class FieldAndFormat {
  field: Field
  format?: string
  include_unmapped?: boolean
}
