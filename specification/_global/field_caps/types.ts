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

import { IndexName, Indices, Metadata } from '@_types/common'
import { TimeSeriesMetricType } from '@_types/mapping/TimeSeriesMetricType'

export class FieldCapability {
  /**
   * Whether this field can be aggregated on all indices.
   */
  aggregatable: boolean
  /**
   * The list of indices where this field has the same type family, or null if all indices have the same type family for the field.
   */
  indices?: Indices
  /**
   * Merged metadata across all indices as a map of string keys to arrays of values. A value length of 1 indicates that all indices had the same value for this key, while a length of 2 or more indicates that not all indices had the same value for this key.
   */
  meta?: Metadata
  /**
   * The list of indices where this field is not aggregatable, or null if all indices have the same definition for the field.
   */
  non_aggregatable_indices?: Indices
  /**
   * The list of indices where this field is not searchable, or null if all indices have the same definition for the field.
   */
  non_searchable_indices?: Indices
  /**
   * Whether this field is indexed for search on all indices.
   */
  searchable: boolean
  type: string
  /**
   * Whether this field is registered as a metadata field.
   * @doc_id mapping-metadata
   */
  metadata_field?: boolean
  /**
   * Whether this field is used as a time series dimension.
   * @stability experimental
   * @since 8.0.0
   */
  time_series_dimension?: boolean
  /**
   * Contains metric type if this fields is used as a time series
   * metrics, absent if the field is not used as metric.
   * @stability experimental
   * @since 8.0.0
   */
  time_series_metric?: TimeSeriesMetricType
  /**
   * If this list is present in response then some indices have the
   * field marked as a dimension and other indices, the ones in this list, do not.
   * @stability experimental
   * @since 8.0.0
   */
  non_dimension_indices?: IndexName[]
  /**
   * The list of indices where this field is present if these indices
   * don’t have the same `time_series_metric` value for this field.
   * @stability experimental
   * @since 8.0.0
   */
  metric_conflicts_indices?: IndexName[]
}
