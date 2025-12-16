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

import { Field, Id, RelationName } from '@_types/common'
import { integer } from '@_types/Numeric'
import { InnerHits } from '@global/search/_types/hits'
import { QueryBase, QueryContainer } from './abstractions'

/**
 * How to aggregate multiple child hit scores into a single parent score.
 */
export enum ChildScoreMode {
  /* Do no scoring. */
  none,
  /* Parent hit's score is the average of all child scores. */
  avg,
  /* Parent hit's score is the max of all child scores. */
  sum,
  /* Parent hit's score is the sum of all child scores. */
  max,
  /* Parent hit's score is the min of all child scores. */
  min
}

/**
 * @ext_doc_id query-dsl-has-child-query
 */
export class HasChildQuery extends QueryBase {
  /**
   * Indicates whether to ignore an unmapped `type` and not return any documents instead of an error.
   * @server_default false
   */
  ignore_unmapped?: boolean
  /**
   * If defined, each search hit will contain inner hits.
   * @doc_id inner-hits
   */
  inner_hits?: InnerHits
  /**
   * Maximum number of child documents that match the query allowed for a returned parent document.
   * If the parent document exceeds this limit, it is excluded from the search results.
   */
  max_children?: integer
  /**
   * Minimum number of child documents that match the query required to match the query for a returned parent document.
   * If the parent document does not meet this limit, it is excluded from the search results.
   */
  min_children?: integer
  /**
   * Query you wish to run on child documents of the `type` field.
   * If a child document matches the search, the query returns the parent document.
   */
  query: QueryContainer
  /**
   * Indicates how scores for matching child documents affect the root parent document’s relevance score.
   * @server_default 'none'
   */
  score_mode?: ChildScoreMode
  /**
   * Name of the child relationship mapped for the `join` field.
   */
  type: RelationName
}

/**
 * @ext_doc_id query-dsl-has-parent-query
 */
export class HasParentQuery extends QueryBase {
  /**
   * Indicates whether to ignore an unmapped `parent_type` and not return any documents instead of an error.
   * You can use this parameter to query multiple indices that may not contain the `parent_type`.
   * @server_default false
   */
  ignore_unmapped?: boolean
  /**
   * If defined, each search hit will contain inner hits.
   * @doc_id inner-hits
   */
  inner_hits?: InnerHits
  /**
   * Name of the parent relationship mapped for the `join` field.
   */
  parent_type: RelationName
  /**
   * Query you wish to run on parent documents of the `parent_type` field.
   * If a parent document matches the search, the query returns its child documents.
   */
  query: QueryContainer
  /**
   *  Indicates whether the relevance score of a matching parent document is aggregated into its child documents.
   * @server_default false
   */
  score?: boolean
}

/**
 * @ext_doc_id query-dsl-nested-query
 */
export class NestedQuery extends QueryBase {
  /**
   * Indicates whether to ignore an unmapped path and not return any documents instead of an error.
   * @server_default false
   */
  ignore_unmapped?: boolean
  /**
   * If defined, each search hit will contain inner hits.
   * @doc_id inner-hits
   */
  inner_hits?: InnerHits
  /**
   * Path to the nested object you wish to search.
   */
  path: Field
  /**
   * Query you wish to run on nested objects in the path.
   */
  query: QueryContainer
  /**
   * How scores for matching child objects affect the root parent document’s relevance score.
   * @server_default 'avg'
   */
  score_mode?: ChildScoreMode
}

/**
 * @ext_doc_id query-dsl-parent-id-query
 */
export class ParentIdQuery extends QueryBase {
  /**
   * ID of the parent document.
   */
  id?: Id
  /**
   * Indicates whether to ignore an unmapped `type` and not return any documents instead of an error.
   * @server_default false
   */
  ignore_unmapped?: boolean
  /**
   * Name of the child relationship mapped for the `join` field.
   */
  type?: RelationName
}
