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
  Field,
  Fields,
  FieldValue,
  Id,
  IndexName,
  Name,
  SequenceNumber,
  VersionNumber
} from '@_types/common'
import { double, integer, long } from '@_types/Numeric'
import { FieldAndFormat } from '@_types/query_dsl/abstractions'
import { ScriptField } from '@_types/Scripting'
import { Sort, SortResults } from '@_types/sort'
import { Explanation } from '@global/explain/types'
import { Dictionary } from '@spec_utils/Dictionary'
import { UserDefinedValue } from '@spec_utils/UserDefinedValue'
import { FieldCollapse } from './FieldCollapse'
import { Highlight } from './highlighting'
import { SourceConfig } from './SourceFilter'

export class Hit<TDocument> {
  _index: IndexName
  /**
   * @es_quirk '_id' is not available when using 'stored_fields: _none_'
   * on a search request. Otherwise the field is always present on hits.
   */
  _id?: Id
  _score?: double | null
  _explanation?: Explanation
  fields?: Dictionary<string, UserDefinedValue>
  highlight?: Dictionary<string, string[]>
  inner_hits?: Dictionary<string, InnerHitsResult>
  matched_queries?: string[] | Dictionary<string, double>
  _nested?: NestedIdentity
  _ignored?: string[]
  ignored_field_values?: Dictionary<string, FieldValue[]>
  _shard?: string
  _node?: string
  _routing?: string
  _source?: TDocument
  _rank?: integer
  _seq_no?: SequenceNumber
  _primary_term?: long
  _version?: VersionNumber
  sort?: SortResults
}

export class HitsMetadata<T> {
  /** Total hit count information, present only if `track_total_hits` wasn't `false` in the search request. */
  total?: TotalHits | long
  hits: Hit<T>[]

  max_score?: double | null
}

export class HitMetadata<TDocument> {
  _id: Id
  _index: IndexName
  _primary_term: long
  _routing: string
  _seq_no: SequenceNumber
  _source: TDocument
  _version: VersionNumber
}

export class InnerHitsResult {
  hits: HitsMetadata<UserDefinedValue>
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
  eq,
  /** Lower bound, including returned events or sequences */
  gte
}

export class InnerHits {
  /**
   * The name for the particular inner hit definition in the response.
   * Useful when a search request contains multiple inner hits.
   */
  name?: Name
  /**
   * The maximum number of hits to return per `inner_hits`.
   * @server_default 3
   */
  size?: integer
  /**
   * Inner hit starting document offset.
   * @server_default 0
   */
  from?: integer
  collapse?: FieldCollapse
  docvalue_fields?: FieldAndFormat[]
  explain?: boolean
  highlight?: Highlight
  ignore_unmapped?: boolean
  script_fields?: Dictionary<Field, ScriptField>
  seq_no_primary_term?: boolean
  fields?: Field[]
  /**
   * How the inner hits should be sorted per `inner_hits`.
   * By default, inner hits are sorted by score.
   */
  sort?: Sort
  _source?: SourceConfig
  stored_fields?: Fields
  /** @server_default false */
  track_scores?: boolean
  version?: boolean
}

/**
 * Number of hits matching the query to count accurately. If true, the exact
 * number of hits is returned at the cost of some performance. If false, the
 * response does not include the total number of hits matching the query.
 * Defaults to 10,000 hits.
 *
 * @codegen_names enabled, count
 */
export type TrackHits = boolean | integer
