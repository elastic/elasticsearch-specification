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
import { integer, long } from '@_types/Numeric'
import { QueryContainer } from '@_types/query_dsl/abstractions/container/QueryContainer'
import { BucketAggregationBase } from '../BucketAggregationBase'
import { TermsAggregationExecutionHint } from '../terms/TermsAggregationExecutionHint'
import { ChiSquareHeuristic } from './heuristics/ChiSquareHeuristic'
import { GoogleNormalizedDistanceHeuristic } from './heuristics/GoogleNormalizedDistanceHeuristic'
import { MutualInformationHeuristic } from './heuristics/MutualInformationHeuristic'
import { PercentageScoreHeuristic } from './heuristics/PercentageScoreHeuristic'
import { ScriptedHeuristic } from './heuristics/ScriptedHeuristic'

export class SignificantTermsAggregation extends BucketAggregationBase {
  background_filter?: QueryContainer
  chi_square?: ChiSquareHeuristic
  exclude?: string | string[]
  execution_hint?: TermsAggregationExecutionHint
  field?: Field
  gnd?: GoogleNormalizedDistanceHeuristic
  include?: string | string[]
  min_doc_count?: long
  mutual_information?: MutualInformationHeuristic
  percentage?: PercentageScoreHeuristic
  script_heuristic?: ScriptedHeuristic
  shard_min_doc_count?: long
  shard_size?: integer
  size?: integer
}
