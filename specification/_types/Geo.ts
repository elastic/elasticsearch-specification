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

import { UserDefinedValue } from '@spec_utils/UserDefinedValue'
import { double, integer } from './Numeric'

export class DistanceParsed {
  precision: double
  unit: DistanceUnit
}

export type Distance = string

export enum DistanceUnit {
  inches = 'in',
  'feet' = 'ft',
  'yards' = 'yd',
  miles = 'mi',
  nautic_miles = 'nmi',
  kilometers = 'km',
  meters = 'm',
  centimeters = 'cm',
  millimeters = 'mm'
}

export enum GeoDistanceType {
  /**
   * The `arc` calculation is the most accurate.
   */
  arc,
  /**
   * The `plane` calculation is faster but less accurate.
   */
  plane
}

/** A GeoJson shape, that can also use Elasticsearch's `envelope` extension. */
export type GeoShape = UserDefinedValue

/** A GeoJson GeoLine. */
export class GeoLine {
  /** Always `"LineString"` */
  type: string
  /** Array of `[lon, lat]` coordinates */
  coordinates: Array<Array<double>>
}

export enum GeoShapeRelation {
  /**
   * Return all documents whose `geo_shape` or `geo_point` field intersects the query geometry.
   */
  intersects,
  /**
   * Return all documents whose `geo_shape` or `geo_point` field has nothing in common with the query geometry.
   */
  disjoint,
  /**
   * Return all documents whose `geo_shape` or `geo_point` field is within the query geometry.
   * Line geometries are not supported.
   */
  within,
  /**
   * Return all documents whose `geo_shape` or `geo_point` field contains the query geometry.
   */
  contains
}

export type GeoTilePrecision = integer

/**
 * A precision that can be expressed as a geohash length between 1 and 12, or a distance measure like "1km", "10m".
 * @codegen_names geohash_length, distance
 */
export type GeoHashPrecision = integer | string
export type GeoHash = string

/** A map tile reference, represented as `{zoom}/{x}/{y}` */
export type GeoTile = string

/** A map hex cell (H3) reference */
export type GeoHexCell = string
/**
 * A latitude/longitude as a 2 dimensional point. It can be represented in various ways:
 * - as a `{lat, long}` object
 * - as a geo hash value
 * - as a `[lon, lat]` array
 * - as a string in `"<lat>, <lon>"` or WKT point formats
 *
 * @codegen_names latlon, geohash, coords, text
 */
// ES: GeoUtils.parseGeoPoint()
export type GeoLocation =
  | LatLonGeoLocation
  | GeoHashLocation
  | double[]
  | string

export class LatLonGeoLocation {
  /**
   * Latitude
   */
  lat: double
  /**
   * Longitude
   */
  lon: double
}

export class CartesianPoint {
  x: double
  y: double
}

export class GeoHashLocation {
  geohash: GeoHash
}

/**
 * A geo bounding box. It can be represented in various ways:
 * - as 4 top/bottom/left/right coordinates
 * - as 2 top_left / bottom_right points
 * - as 2 top_right / bottom_left points
 * - as a WKT bounding box
 *
 * @codegen_names coords, tlbr, trbl, wkt
 */
export type GeoBounds =
  | CoordsGeoBounds
  | TopLeftBottomRightGeoBounds
  | TopRightBottomLeftGeoBounds
  | WktGeoBounds

export class WktGeoBounds {
  wkt: string
}

export class CoordsGeoBounds {
  top: double
  bottom: double
  left: double
  right: double
}

export class TopLeftBottomRightGeoBounds {
  top_left: GeoLocation
  bottom_right: GeoLocation
}

export class TopRightBottomLeftGeoBounds {
  top_right: GeoLocation
  bottom_left: GeoLocation
}
