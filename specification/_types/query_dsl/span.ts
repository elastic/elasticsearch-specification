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
import { SingleKeyDictionary } from '@spec_utils/Dictionary'
import { QueryBase, QueryContainer } from './abstractions'

/**
 * @ext_doc_id query-dsl-span-containing-query
 */
export class SpanContainingQuery extends QueryBase {
  /**
   * Can be any span query.
   * Matching spans from `big` that contain matches from `little` are returned.
   */
  big: SpanQuery
  /**
   * Can be any span query.
   * Matching spans from `big` that contain matches from `little` are returned.
   */
  little: SpanQuery
}

/**
 * @ext_doc_id query-dsl-span-field-masking-query
 */
export class SpanFieldMaskingQuery extends QueryBase {
  field: Field
  query: SpanQuery
}

/**
 * @ext_doc_id query-dsl-span-first-query
 */
export class SpanFirstQuery extends QueryBase {
  /**
   * Controls the maximum end position permitted in a match.
   */
  end: integer
  /**
   * Can be any other span type query.
   */
  match: SpanQuery
}

/** Can only be used as a clause in a span_near query. */
// The integer value is the span width
export type SpanGapQuery = SingleKeyDictionary<Field, integer>

/**
 * @ext_doc_id query-dsl-span-multi-term-query
 */
export class SpanMultiTermQuery extends QueryBase {
  /**
   * Should be a multi term query (one of `wildcard`, `fuzzy`, `prefix`, `range`, or `regexp` query).
   */
  match: QueryContainer
}

/**
 * @ext_doc_id query-dsl-span-near-query
 */
export class SpanNearQuery extends QueryBase {
  /**
   * Array of one or more other span type queries.
   */
  clauses: SpanQuery[]
  /**
   * Controls whether matches are required to be in-order.
   */
  in_order?: boolean
  /**
   * Controls the maximum number of intervening unmatched positions permitted.
   */
  slop?: integer
}

/**
 * @ext_doc_id query-dsl-span-not-query
 */
export class SpanNotQuery extends QueryBase {
  /**
   * The number of tokens from within the include span that can’t have overlap with the exclude span.
   * Equivalent to setting both `pre` and `post`.
   */
  dist?: integer
  /**
   * Span query whose matches must not overlap those returned.
   */
  exclude: SpanQuery
  /**
   * Span query whose matches are filtered.
   */
  include: SpanQuery
  /**
   * The number of tokens after the include span that can’t have overlap with the exclude span.
   * @server_default 0
   */
  post?: integer
  /**
   * The number of tokens before the include span that can’t have overlap with the exclude span.
   * @server_default 0
   */
  pre?: integer
}

/**
 * @ext_doc_id query-dsl-span-or-query
 */
export class SpanOrQuery extends QueryBase {
  /**
   * Array of one or more other span type queries.
   */
  clauses: SpanQuery[]
}

/**
 * @shortcut_property value
 * @ext_doc_id query-dsl-span-term-query
 */
export class SpanTermQuery extends QueryBase {
  value: string
}

/**
 * @ext_doc_id query-dsl-span-within-query
 */
export class SpanWithinQuery extends QueryBase {
  /**
   * Can be any span query.
   * Matching spans from `little` that are enclosed within `big` are returned.
   */
  big: SpanQuery
  /**
   * Can be any span query.
   * Matching spans from `little` that are enclosed within `big` are returned.
   */
  little: SpanQuery
}

/**
 * @variants container
 * @non_exhaustive
 */
export class SpanQuery {
  /**
   * Accepts a list of span queries, but only returns those spans which also match a second span query.
   */
  span_containing?: SpanContainingQuery
  /**
   * Allows queries like `span_near` or `span_or` across different fields.
   */
  span_field_masking?: SpanFieldMaskingQuery
  /**
   * Accepts another span query whose matches must appear within the first N positions of the field.
   */
  span_first?: SpanFirstQuery
  span_gap?: SpanGapQuery
  /**
   * Wraps a `term`, `range`, `prefix`, `wildcard`, `regexp`, or `fuzzy` query.
   */
  span_multi?: SpanMultiTermQuery
  /**
   * Accepts multiple span queries whose matches must be within the specified distance of each other, and possibly in the same order.
   */
  span_near?: SpanNearQuery
  /**
   * Wraps another span query, and excludes any documents which match that query.
   */
  span_not?: SpanNotQuery
  /**
   * Combines multiple span queries and returns documents which match any of the specified queries.
   */
  span_or?: SpanOrQuery
  /**
   * The equivalent of the `term` query but for use with other span queries.
   */
  span_term?: SingleKeyDictionary<Field, SpanTermQuery>
  /**
   * The result from a single span query is returned as long is its span falls within the spans returned by a list of other span queries.
   */
  span_within?: SpanWithinQuery
}

export class SpanSubQuery extends QueryBase {}
