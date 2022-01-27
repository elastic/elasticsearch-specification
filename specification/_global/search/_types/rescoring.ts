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
  /** @codegen_name Query */
  rescore_query: QueryContainer
  query_weight?: double
  rescore_query_weight?: double
  score_mode?: ScoreMode
}

export enum ScoreMode {
  avg = 0,
  max = 1,
  min = 2,
  multiply = 3,
  total = 4
}
