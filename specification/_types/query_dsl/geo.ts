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

import { AdditionalProperties, AdditionalProperty } from '@spec_utils/behaviors'
import {
  Distance,
  GeoDistanceType,
  GeoShape,
  GeoShapeRelation,
  LatLon
} from '@_types/Geo'
import { double } from '@_types/Numeric'
import { FieldLookup, QueryBase } from './abstractions'
import { Field } from '@_types/common'
import { UserDefinedValue } from '@spec_utils/UserDefinedValue'

/**
 * A geo bounding box. The various coordinates can be mixed. When set, `wkt` takes precedence over all other fields.
 */
export class BoundingBox {
  bottom_right?: GeoLocation
  top_left?: GeoLocation

  top_right?: GeoLocation
  bottom_left?: GeoLocation

  top?: double
  left?: double
  right?: double
  bottom?: double

  wkt?: string
}

export class GeoBoundingBoxQuery
  extends QueryBase
  implements AdditionalProperty<Field, BoundingBox> {
  /** @obsolete 7.14.0 */
  type?: GeoExecution
  /** @server_default 'strict' */
  validation_method?: GeoValidationMethod
}

export enum GeoExecution {
  memory = 0,
  indexed = 1
}

export class GeoDistanceQuery
  extends QueryBase
  implements AdditionalProperty<Field, GeoLocation> {
  distance?: Distance
  /** @server_default 'arc' */
  distance_type?: GeoDistanceType
  /** @server_default 'strict' */
  validation_method?: GeoValidationMethod
}

export class GeoPolygonPoints {
  points: GeoLocation[]
}

/** @obsolete 7.12.0 Use geo-shape instead. */
export class GeoPolygonQuery
  extends QueryBase
  implements AdditionalProperty<Field, GeoPolygonPoints> {
  /** @server_default 'strict' */
  validation_method?: GeoValidationMethod
}

export enum GeoFormat {
  GeoJson = 0,
  WellKnownText = 1
}

export class GeoShapeFieldQuery {
  shape?: GeoShape
  indexed_shape?: FieldLookup
  relation?: GeoShapeRelation
}

// GeoShape query doesn't follow the common pattern of having a single field-name property
// holding also the query base fields (boost and _name)
export class GeoShapeQuery
  extends QueryBase
  implements AdditionalProperty<Field, GeoShapeFieldQuery> {
  ignore_unmapped?: boolean
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
