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

import { double } from './Numeric'
import { UserDefinedValue } from '@spec_utils/UserDefinedValue'

export class DistanceParsed {
  precision: double
  unit: DistanceUnit
}

export type Distance = string

export enum DistanceUnit {
  in = 0,
  ft = 1,
  yd = 2,
  mi = 3,
  nmi = 4,
  km = 5,
  m = 6,
  cm = 7,
  mm = 8
}

export enum GeoDistanceType {
  arc = 0,
  plane = 1
}

/** A GeoJson shape, that can also use Elasticsearch's `envelope` extension. */
export type GeoShape = UserDefinedValue

export enum GeoShapeRelation {
  intersects = 0,
  disjoint = 1,
  within = 2,
  contains = 3
}

export type GeoTilePrecision = number
export type GeoHashPrecision = number

export class LatLon {
  lat: double
  lon: double
}
