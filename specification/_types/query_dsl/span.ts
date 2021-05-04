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
import { NamedQuery, QueryBase, QueryContainer } from './abstractions'

export class SpanContainingQuery extends QueryBase {
  big?: SpanQuery
  little?: SpanQuery
}

export class SpanFieldMaskingQuery extends QueryBase {
  field?: Field
  query?: SpanQuery
}

export class SpanFirstQuery extends QueryBase {
  end?: integer
  match?: SpanQuery
}

export class SpanGapQuery extends QueryBase {
  field?: Field
  width?: integer
}

export class SpanMultiTermQuery extends QueryBase {
  match?: QueryContainer
}

export class SpanNearQuery extends QueryBase {
  clauses?: SpanQuery[]
  in_order?: boolean
  slop?: integer
}

export class SpanNotQuery extends QueryBase {
  dist?: integer
  exclude?: SpanQuery
  include?: SpanQuery
  post?: integer
  pre?: integer
}

export class SpanOrQuery extends QueryBase {
  clauses?: SpanQuery[]
}

export class SpanTermQuery extends QueryBase {
  value: string
}

export class SpanWithinQuery extends QueryBase {
  big?: SpanQuery
  little?: SpanQuery
}

export class SpanQuery extends QueryBase {
  span_containing?: NamedQuery<SpanContainingQuery | string>
  field_masking_span?: NamedQuery<SpanFieldMaskingQuery | string>
  span_first?: NamedQuery<SpanFirstQuery | string>
  span_gap?: NamedQuery<SpanGapQuery | integer>
  span_multi?: SpanMultiTermQuery
  span_near?: NamedQuery<SpanNearQuery | string>
  span_not?: NamedQuery<SpanNotQuery | string>
  span_or?: NamedQuery<SpanOrQuery | string>
  span_term?: NamedQuery<SpanTermQuery | string>
  span_within?: NamedQuery<SpanWithinQuery | string>
}

export class SpanSubQuery extends QueryBase {}
