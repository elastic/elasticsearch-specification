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
import { CorePropertyBase, IndexOptions } from './core'
import { DenseVectorIndexOptions } from './DenseVectorIndexOptions'
import { PropertyBase } from './Property'
import { TimeSeriesMetricType } from '@_types/mapping/TimeSeriesMetricType'

export class FlattenedProperty extends PropertyBase {
  boost?: double
  depth_limit?: integer
  doc_values?: boolean
  eager_global_ordinals?: boolean
  index?: boolean
  index_options?: IndexOptions
  null_value?: string
  similarity?: string
  split_queries_on_whitespace?: boolean
  type: 'flattened'
}

export class NestedProperty extends CorePropertyBase {
  enabled?: boolean
  include_in_parent?: boolean
  include_in_root?: boolean
  type: 'nested'
}

export class ObjectProperty extends CorePropertyBase {
  enabled?: boolean
  subobjects?: boolean
  type?: 'object'
}

export class DenseVectorProperty extends PropertyBase {
  type: 'dense_vector'
  element_type?: string
  dims?: integer
  similarity?: string
  index?: boolean
  index_options?: DenseVectorIndexOptions
}

export class AggregateMetricDoubleProperty extends PropertyBase {
  type: 'aggregate_metric_double'
  default_metric: string
  metrics: string[]
  time_series_metric?: TimeSeriesMetricType
}
