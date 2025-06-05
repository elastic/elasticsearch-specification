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
import { BoolQuery } from '@_types/query_dsl/compound'
import { MatchQuery, SimpleQueryStringQuery } from '@_types/query_dsl/fulltext'
import { MatchAllQuery } from '@_types/query_dsl/MatchAllQuery'
import {
  ExistsQuery,
  IdsQuery,
  PrefixQuery,
  RangeQuery,
  TermQuery,
  TermsQuery,
  WildcardQuery
} from '@_types/query_dsl/term'
import { SortResults } from '@_types/sort'
import { RoleDescriptor } from '@security/_types/RoleDescriptor'
import { SingleKeyDictionary } from '@spec_utils/Dictionary'

/**
 * @variants container
 * @non_exhaustive
 */
export class RoleQueryContainer {
  /**
   * matches roles matching boolean combinations of other queries.
   * @doc_id query-dsl-bool-query
   */
  bool?: BoolQuery
  /**
   * Returns roles that contain an indexed value for a field.
   * @doc_id query-dsl-exists-query
   */
  exists?: ExistsQuery
  /**
   * Returns roles based on their IDs.
   * This query uses role document IDs stored in the `_id` field.
   * @doc_id query-dsl-ids-query
   */
  ids?: IdsQuery
  /**
   * Returns roles that match a provided text, number, date or boolean value.
   * The provided text is analyzed before matching.
   * @doc_id query-dsl-match-query
   */
  match?: SingleKeyDictionary<Field, MatchQuery>
  /**
   * Matches all roles, giving them all a `_score` of 1.0.
   * @doc_id query-dsl-match-all-query
   */
  match_all?: MatchAllQuery
  /**
   * Returns roles that contain a specific prefix in a provided field.
   * @doc_id query-dsl-prefix-query
   */
  prefix?: SingleKeyDictionary<Field, PrefixQuery>
  /**
   * Returns roles that contain terms within a provided range.
   * @doc_id query-dsl-range-query
   */
  range?: SingleKeyDictionary<Field, RangeQuery>
  /**
   * Returns roles based on a provided query string, using a parser with a limited but fault-tolerant syntax.
   * @doc_id query-dsl-simple-query-string-query
   */
  simple_query_string?: SimpleQueryStringQuery
  /**
   * Returns roles that contain an exact term in a provided field.
   * To return a document, the query term must exactly match the queried field's value, including whitespace and capitalization.
   * @doc_id query-dsl-term-query
   */
  term?: SingleKeyDictionary<Field, TermQuery>
  /**
   * Returns roles that contain one or more exact terms in a provided field.
   * To return a document, one or more terms must exactly match a field value, including whitespace and capitalization.
   * @doc_id query-dsl-terms-query
   */
  terms?: TermsQuery
  /**
   * Returns roles that contain terms matching a wildcard pattern.
   * @doc_id query-dsl-wildcard-query
   */
  wildcard?: SingleKeyDictionary<Field, WildcardQuery>
}

export class QueryRole extends RoleDescriptor {
  _sort?: SortResults
  /**
   * Name of the role.
   */
  name: string
}
