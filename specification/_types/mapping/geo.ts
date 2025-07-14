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

import { GeoLocation } from '@_types/Geo'
import { Script } from '@_types/Scripting'
import { DocValuesPropertyBase, OnScriptError } from './core'

export class GeoPointProperty extends DocValuesPropertyBase {
  ignore_malformed?: boolean
  ignore_z_value?: boolean
  null_value?: GeoLocation
  index?: boolean
  on_script_error?: OnScriptError
  script?: Script
  type: 'geo_point'
  time_series_metric?: GeoPointMetricType
}

export enum GeoPointMetricType {
  gauge,
  counter,
  position
}

export enum GeoOrientation {
  /** @aliases RIGHT, counterclockwise, ccw */
  right,
  /** @aliases LEFT, clockwise, cw */
  left
}

/**
 * The `geo_shape` data type facilitates the indexing of and searching with arbitrary geo shapes such as rectangles
 * and polygons.
 *
 * @doc_id geo-shape
 */
export class GeoShapeProperty extends DocValuesPropertyBase {
  coerce?: boolean
  ignore_malformed?: boolean
  ignore_z_value?: boolean
  index?: boolean
  orientation?: GeoOrientation
  strategy?: GeoStrategy
  type: 'geo_shape'
}

export enum GeoStrategy {
  recursive,
  term
}

export enum GeoTree {
  geohash,
  quadtree
}

export class PointProperty extends DocValuesPropertyBase {
  ignore_malformed?: boolean
  ignore_z_value?: boolean
  null_value?: string
  type: 'point'
}

/**
 * The `shape` data type facilitates the indexing of and searching with arbitrary `x, y` cartesian shapes such as
 * rectangles and polygons.
 *
 * @doc_id shape
 */
export class ShapeProperty extends DocValuesPropertyBase {
  coerce?: boolean
  ignore_malformed?: boolean
  ignore_z_value?: boolean
  orientation?: GeoOrientation
  type: 'shape'
}
