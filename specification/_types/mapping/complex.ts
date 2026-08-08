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

import { TimeSeriesMetricType } from '@_types/mapping/TimeSeriesMetricType'
import { double, integer } from '@_types/Numeric'
import { CorePropertyBase, IndexOptions } from './core'
import { PropertyBase } from './Property'
import { Subobjects } from './TypeMapping'

export class FlattenedProperty extends PropertyBase {
  boost?: double
  depth_limit?: integer
  doc_values?: boolean
  eager_global_ordinals?: boolean
  index?: boolean
  index_options?: IndexOptions
  null_value?: string
  /**
   * How leaf arrays are represented in synthetic source.
   * When set to `lossy`, leaf arrays are sorted, de-nulled, and deduplicated in the returned synthetic source.
   * When set to `exact`, leaf arrays preserve order, nulls, and duplicates.
   */
  preserve_leaf_arrays?: PreserveLeafArrays
  similarity?: string
  split_queries_on_whitespace?: boolean
  time_series_dimensions?: string[]
  /**
   * Controls how leaf arrays are reconstructed in synthetic `_source`. `lossy` (default) sorts, deduplicates, and
   * omits nulls. `exact` preserves order, duplicates, and nulls.
   * @server_default lossy
   * @availability stack since=9.4.0 stability=stable
   */
  preserve_leaf_arrays?: FlattenedPropertyPreserveLeafArrays
  /**
   * When set, typed sub-fields defined in `properties` become queryable at root level without the flattened field
   * prefix. `priority` (non-negative integer) resolves conflicts when multiple passthrough sources expose the same
   * sub-field name; higher wins.
   * @availability stack since=9.4.0 stability=stable
   */
  passthrough?: FlattenedPropertyPassthrough
  type: 'flattened'
}

export enum PreserveLeafArrays {
  lossy,
  exact
}

export class NestedProperty extends CorePropertyBase {
  enabled?: boolean
  include_in_parent?: boolean
  include_in_root?: boolean
  type: 'nested'
}

export class ObjectProperty extends CorePropertyBase {
  enabled?: boolean
  subobjects?: Subobjects
  type?: 'object'
}

export class PassthroughObjectProperty extends CorePropertyBase {
  type?: 'passthrough'
  enabled?: boolean
  priority?: integer
  time_series_dimension?: boolean
}

export class AggregateMetricDoubleProperty extends PropertyBase {
  type: 'aggregate_metric_double'
  default_metric: string
  ignore_malformed?: boolean
  metrics: string[]
  time_series_metric?: TimeSeriesMetricType
}

export class FlattenedPropertyPassthrough {
  priority: integer
}

export enum FlattenedPropertyPreserveLeafArrays {
  /** Sorts, deduplicates, and omits nulls. */
  lossy,
  /** Preserves order, duplicates, and nulls. */
  exact
}
