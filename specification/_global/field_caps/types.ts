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

import { Dictionary } from '@spec_utils/Dictionary'
import { IndexName, Indices } from '@_types/common'
import { TimeSeriesMetricType } from '@_types/mapping/TimeSeriesMetricType'

export class FieldCapability {
  aggregatable: boolean
  indices?: Indices
  meta?: Dictionary<string, string[]>
  non_aggregatable_indices?: Indices
  non_searchable_indices?: Indices
  searchable: boolean
  type: string
  metadata_field?: boolean
  /**
   * [experimental] Whether this field is used as a time series dimension.
   * @since 8.0.0
   */
  time_series_dimension?: boolean
  /**
   * [experimental] Contains metric type if this fields is used as a time series
   * metrics, absent if the field is not used as metric.
   * @since 8.0.0
   */
  time_series_metric?: TimeSeriesMetricType
  /**
   * [experimental] If this list is present in response then some indices have the
   * field marked as a dimension and other indices, the ones in this list, do not.
   * @since 8.0.0
   */
  non_dimension_indices?: IndexName[]
  /**
   * [experimental] The list of indices where this field is present if these indices
   * don’t have the same `time_series_metric` value for this field.
   * @since 8.0.0
   */
  metric_conflicts_indices?: IndexName[]
}
