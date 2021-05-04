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

import { AdditionalProperties } from "@spec_utils/behaviors"
import { LatLon, Distance, GeoDistanceType, GeoShapeRelation } from "@_types/Geo"
import { double } from "@_types/Numeric"
import { QueryBase, FieldLookup } from "./abstractions"

export class BoundingBox {
  bottom_right?: GeoLocation
  top_left?: GeoLocation
  wkt?: string
}

export class GeoBoundingBoxQuery extends QueryBase {
  bounding_box?: BoundingBox
  type?: GeoExecution
  validation_method?: GeoValidationMethod
  top_left?: LatLon
  bottom_right?: LatLon
}

export enum GeoExecution {
  memory = 0,
  indexed = 1
}

export class GeoDistanceQuery
  extends QueryBase
  implements AdditionalProperties<string, GeoLocation> {
  distance?: Distance
  distance_type?: GeoDistanceType
  validation_method?: GeoValidationMethod
}

export class GeoPolygonQuery extends QueryBase {
  points?: GeoLocation[]
  validation_method?: GeoValidationMethod
}

export enum GeoFormat {
  GeoJson = 0,
  WellKnownText = 1
}

export class GeoShape {
  type?: string
}

export class GeoShapeQuery extends QueryBase {
  ignore_unmapped?: boolean
  indexed_shape?: FieldLookup
  relation?: GeoShapeRelation
  shape?: GeoShape
}

export enum CharacterType {
  Whitespace = 0,
  Alpha = 1,
  Comment = 2
}

export enum TokenType {
  None = 0,
  Word = 1,
  LParen = 2,
  RParen = 3,
  Comma = 4
}

// TODO -- is duplicate with LatLon
export class TwoDimensionalPoint {
  lat: double
  lon: double
}

export class ThreeDimensionalPoint {
  lat: double
  lon: double
  z?: double
}

/**
 * Represents a Latitude/Longitude as a 2 dimensional point
 */
export type GeoLocation = string | double[] | TwoDimensionalPoint

/**
 * Represents a Latitude/Longitude and optional Z value as a 2 or 3 dimensional point
 */
export type GeoCoordinate = string | double[] | ThreeDimensionalPoint

export enum GeoValidationMethod {
  coerce = 0,
  ignore_malformed = 1,
  strict = 2
}