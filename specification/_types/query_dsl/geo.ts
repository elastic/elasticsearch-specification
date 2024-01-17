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

import { AdditionalProperty } from '@spec_utils/behaviors'
import {
  Distance,
  GeoBounds,
  GeoDistanceType,
  GeoLocation,
  GeoShape,
  GeoShapeRelation
} from '@_types/Geo'
import { FieldLookup, QueryBase } from './abstractions'
import { Field } from '@_types/common'

export class GeoBoundingBoxQuery
  extends QueryBase
  implements AdditionalProperty<Field, GeoBounds>
{
  /** @deprecated 7.14.0 */
  type?: GeoExecution
  /** @server_default 'strict' */
  validation_method?: GeoValidationMethod
  ignore_unmapped?: boolean
}

export enum GeoExecution {
  memory = 0,
  indexed = 1
}

export class GeoDistanceQuery
  extends QueryBase
  implements AdditionalProperty<Field, GeoLocation>
{
  distance?: Distance
  /** @server_default 'arc' */
  distance_type?: GeoDistanceType
  /** @server_default 'strict' */
  validation_method?: GeoValidationMethod
  /**
   * Set to `true` to ignore an unmapped field and not match any documents for this query.
   * Set to `false` to throw an exception if the field is not mapped.
   * @server_default false
   */
  ignore_unmapped?: boolean
}

export class GeoPolygonPoints {
  points: GeoLocation[]
}

/** @deprecated 7.12.0 Use geo-shape instead. */
export class GeoPolygonQuery
  extends QueryBase
  implements AdditionalProperty<Field, GeoPolygonPoints>
{
  /** @server_default 'strict' */
  validation_method?: GeoValidationMethod
  ignore_unmapped?: boolean
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
  implements AdditionalProperty<Field, GeoShapeFieldQuery>
{
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

export enum GeoValidationMethod {
  coerce = 0,
  ignore_malformed = 1,
  strict = 2
}
