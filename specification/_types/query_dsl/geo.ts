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

import { Field } from '@_types/common'
import {
  Distance,
  GeoBounds,
  GeoDistanceType,
  GeoHash,
  GeoHexCell,
  GeoLocation,
  GeoShape,
  GeoShapeRelation,
  GeoTile
} from '@_types/Geo'
import { AdditionalProperty } from '@spec_utils/behaviors'
import { FieldLookup, QueryBase } from './abstractions'

/**
 * @behavior_meta AdditionalProperty key=field value=bounding_box
 * @ext_doc_id query-dsl-geo-bounding-box-query
 */
export class GeoBoundingBoxQuery
  extends QueryBase
  implements AdditionalProperty<Field, GeoBounds>
{
  /** @deprecated 7.14.0 */
  type?: GeoExecution
  /**
   * Set to `IGNORE_MALFORMED` to accept geo points with invalid latitude or longitude.
   * Set to `COERCE` to also try to infer correct latitude or longitude.
   * @server_default 'strict'
   */
  validation_method?: GeoValidationMethod
  /**
   * Set to `true` to ignore an unmapped field and not match any documents for this query.
   * Set to `false` to throw an exception if the field is not mapped.
   * @server_default false
   */
  ignore_unmapped?: boolean
}

export enum GeoExecution {
  memory,
  indexed
}

/**
 * @behavior_meta AdditionalProperty key=field value=location
 * @ext_doc_id query-dsl-geo-distance-query
 */
export class GeoDistanceQuery
  extends QueryBase
  implements AdditionalProperty<Field, GeoLocation>
{
  /**
   * The radius of the circle centred on the specified location.
   * Points which fall into this circle are considered to be matches.
   * @doc_id distance-units
   */
  distance: Distance
  /**
   * How to compute the distance.
   * Set to `plane` for a faster calculation that's inaccurate on long distances and close to the poles.
   * @server_default 'arc'
   */
  distance_type?: GeoDistanceType
  /**
   * Set to `IGNORE_MALFORMED` to accept geo points with invalid latitude or longitude.
   * Set to `COERCE` to also try to infer correct latitude or longitude.
   * @server_default 'strict'
   */
  validation_method?: GeoValidationMethod
  /**
   * Set to `true` to ignore an unmapped field and not match any documents for this query.
   * Set to `false` to throw an exception if the field is not mapped.
   * @server_default false
   */
  ignore_unmapped?: boolean
}

/** @variants container */
export class GeoGridQuery extends QueryBase {
  geotile?: GeoTile
  geohash?: GeoHash
  geohex?: GeoHexCell
}

export class GeoPolygonPoints {
  points: GeoLocation[]
}

/**
 * @behavior_meta AdditionalProperty key=field value=polygon
 * @ext_doc_id query-dsl-geo-polygon-query
 */
export class GeoPolygonQuery
  extends QueryBase
  implements AdditionalProperty<Field, GeoPolygonPoints>
{
  /** @server_default 'strict' */
  validation_method?: GeoValidationMethod
  ignore_unmapped?: boolean
}

export enum GeoFormat {
  GeoJson,
  WellKnownText
}

export class GeoShapeFieldQuery {
  shape?: GeoShape
  /**
   * Query using an indexed shape retrieved from the the specified document and path.
   */
  indexed_shape?: FieldLookup
  /**
   * Spatial relation operator used to search a geo field.
   * @server_default intersects
   */
  relation?: GeoShapeRelation
}

/**
 * @behavior_meta AdditionalProperty key=field value=shape
 * @ext_doc_id query-dsl-geo-shape-query
 */
// GeoShape query doesn't follow the common pattern of having a single field-name property
// holding also the query base fields (boost and _name)
export class GeoShapeQuery
  extends QueryBase
  implements AdditionalProperty<Field, GeoShapeFieldQuery>
{
  /**
   * Set to `true` to ignore an unmapped field and not match any documents for this query.
   * Set to `false` to throw an exception if the field is not mapped.
   * @server_default false
   */
  ignore_unmapped?: boolean
}

export enum CharacterType {
  Whitespace,
  Alpha,
  Comment
}

export enum TokenType {
  None,
  Word,
  LParen,
  RParen,
  Comma
}

export enum GeoValidationMethod {
  /**
   * Accept geo points with invalid latitude or longitude and additionally try and infer correct coordinates.
   */
  coerce,
  /**
   * Accept geo points with invalid latitude or longitude.
   */
  ignore_malformed,
  strict
}
