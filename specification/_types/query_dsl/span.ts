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

import { Field } from '@_types/common'
import { integer } from '@_types/Numeric'
import { QueryBase, QueryContainer } from './abstractions'
import { SingleKeyDictionary } from '@spec_utils/Dictionary'

export class SpanContainingQuery extends QueryBase {
  big: SpanQuery
  little: SpanQuery
}

export class SpanFieldMaskingQuery extends QueryBase {
  field: Field
  query: SpanQuery
}

export class SpanFirstQuery extends QueryBase {
  end: integer
  match: SpanQuery
}

/** Can only be used as a clause in a span_near query. */
// The integer value is the span width
export type SpanGapQuery = SingleKeyDictionary<Field, integer>

export class SpanMultiTermQuery extends QueryBase {
  /** Should be a multi term query (one of wildcard, fuzzy, prefix, range or regexp query) */
  match: QueryContainer
}

export class SpanNearQuery extends QueryBase {
  clauses: SpanQuery[]
  in_order?: boolean
  slop?: integer
}

export class SpanNotQuery extends QueryBase {
  dist?: integer
  exclude: SpanQuery
  include: SpanQuery
  /** @server_default 0 */
  post?: integer
  /** @server_default 0 */
  pre?: integer
}

export class SpanOrQuery extends QueryBase {
  clauses: SpanQuery[]
}

/** @shortcut_property value */
export class SpanTermQuery extends QueryBase {
  value: string
}

export class SpanWithinQuery extends QueryBase {
  big: SpanQuery
  little: SpanQuery
}

/**
 * @variants container
 * @non_exhaustive
 */
export class SpanQuery {
  span_containing?: SpanContainingQuery
  field_masking_span?: SpanFieldMaskingQuery
  span_first?: SpanFirstQuery
  span_gap?: SpanGapQuery
  span_multi?: SpanMultiTermQuery
  span_near?: SpanNearQuery
  span_not?: SpanNotQuery
  span_or?: SpanOrQuery
  span_term?: SingleKeyDictionary<Field, SpanTermQuery>
  span_within?: SpanWithinQuery
}

export class SpanSubQuery extends QueryBase {}
