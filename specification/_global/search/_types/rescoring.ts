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

import { double, integer } from '@_types/Numeric'
import { QueryContainer } from '@_types/query_dsl/abstractions'

export class Rescore {
  query: RescoreQuery
  window_size?: integer
}

export class RescoreQuery {
  /**
   * The query to use for rescoring.
   * This query is only run on the Top-K results returned by the `query` and `post_filter` phases.
   * @codegen_name Query
   * */
  rescore_query: QueryContainer
  /**
   * Relative importance of the original query versus the rescore query.
   * @server_default 1.0
   */
  query_weight?: double
  /**
   * Relative importance of the rescore query versus the original query.
   * @server_default 1.0
   */
  rescore_query_weight?: double
  /**
   * Determines how scores are combined.
   * @server_default total
   */
  score_mode?: ScoreMode
}

export enum ScoreMode {
  /**
   * Average the original score and the rescore query score.
   */
  avg = 0,
  /**
   * Take the max of original score and the rescore query score.
   */
  max = 1,
  /**
   * Take the min of the original score and the rescore query score.
   */
  min = 2,
  /**
   * Multiply the original score by the rescore query score.
   * Useful for `function` query rescores.
   */
  multiply = 3,
  /**
   * Add the original score and the rescore query score.
   */
  total = 4
}
