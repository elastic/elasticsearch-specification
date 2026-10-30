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

import { TaskId } from '@_types/common'
import { long } from '@_types/Numeric'
import { DurationValue, UnitMillis } from '@_types/Time'
import { Dictionary } from '@spec_utils/Dictionary'
import {
  KnnEvalFailure,
  KnnEvalQuerySourceSummary,
  KnnEvalReportedSettings,
  KnnEvalResult,
  KnnEvalVectorOpsKind
} from './types'

export class Response {
  body: {
    /**
     * The source of the query vectors.
     * Not returned when `wait_for_completion` is `false`.
     */
    query_source?: KnnEvalQuerySourceSummary
    /**
     * The settings of the baseline search.
     * Not returned when `wait_for_completion` is `false`.
     */
    baseline?: KnnEvalReportedSettings
    /**
     * The time the baseline searches took, in milliseconds.
     * Not returned when `wait_for_completion` is `false`.
     */
    baseline_took_ms?: DurationValue<UnitMillis>
    /**
     * The number of vector operations of the baseline searches.
     * Not returned when `wait_for_completion` is `false`.
     */
    baseline_vector_ops?: long
    /**
     * What `baseline_vector_ops` counts.
     * Not returned when `wait_for_completion` is `false`.
     */
    baseline_vector_ops_kind?: KnnEvalVectorOpsKind
    /**
     * The results of each `knn_settings` entry, in the order of the request.
     * Not returned when `wait_for_completion` is `false`.
     */
    results?: KnnEvalResult[]
    /**
     * The queries that failed, by query identifier.
     * Not returned when `wait_for_completion` is `false`.
     */
    failures?: Dictionary<string, KnnEvalFailure>
    /**
     * The identifier of the task that runs the evaluation.
     * Only returned when `wait_for_completion` is `false`.
     */
    task?: TaskId
  }
}
