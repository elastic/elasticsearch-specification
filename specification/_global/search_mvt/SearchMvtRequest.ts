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

import { Dictionary } from '@spec_utils/Dictionary'
import { RequestBase } from '@_types/Base'
import { Field, Fields, Indices } from '@_types/common'
import { AggregationContainer } from '@_types/aggregations/AggregationContainer'
import { GridType } from './_types/GridType'
import { Sort } from '@global/search/_types/sort'
import { QueryContainer } from '@_types/query_dsl/abstractions'
import { RuntimeFields } from '@_types/mapping/RuntimeFields'
import { integer } from '@_types/Numeric'

/**
 * @rest_spec_name search_mvt
 * @since 7.15.0
 * @stability experimental
 */
export interface Request extends RequestBase {
  path_parts: {
    /* List of indices, data streams, or aliases to search */
    index: Indices
    /* Field containing geospatial data to return */
    field: Field
    /* Zoom level of the vector tile to search */
    zoom: integer
    /* X coordinate for the vector tile to search */
    x: integer
    /* Y coordinate for the vector tile to search */
    y: integer
  }
  query_parameters?: {
    /**
     * If false, the meta layer’s feature is the bounding box of the tile.
     * If true, the meta layer’s feature is a bounding box resulting from a
     * geo_bounds aggregation. The aggregation runs on <field> values that intersect
     * the <zoom>/<x>/<y> tile with wrap_longitude set to false. The resulting
     * bounding box may be larger than the vector tile.
     * @server_default false
     */
    exact_bounds?: boolean
    /**
     * Size, in pixels, of a side of the tile. Vector tiles are square with equal sides.
     * @server_default 4096
     */
    extent?: integer
    /**
     * Additional zoom levels available through the aggs layer. For example, if <zoom> is 7
     * and grid_precision is 8, you can zoom in up to level 15. Accepts 0-8. If 0, results
     * don’t include the aggs layer.
     * @server_default 8
     */
    grid_precision?: integer
    /**
     * Determines the geometry type for features in the aggs layer. In the aggs layer,
     * each feature represents a geotile_grid cell. If 'grid' each feature is a Polygon
     * of the cells bounding box. If 'point' each feature is a Point that is the centroid
     * of the cell.
     * @server_default grid
     */
    grid_type?: GridType
    /**
     * Maximum number of features to return in the hits layer. Accepts 0-10000.
     * If 0, results don’t include the hits layer.
     * @server_default 10000
     */
    size?: integer
  }
  body?: {
    /**
     * Sub-aggregations for the geotile_grid.
     *
     * Supports the following aggregation types:
     * - avg
     * - cardinality
     * - max
     * - min
     * - sum
     */
    aggs?: Dictionary<string, AggregationContainer>
    /**
     * If false, the meta layer’s feature is the bounding box of the tile.
     * If true, the meta layer’s feature is a bounding box resulting from a
     * geo_bounds aggregation. The aggregation runs on <field> values that intersect
     * the <zoom>/<x>/<y> tile with wrap_longitude set to false. The resulting
     * bounding box may be larger than the vector tile.
     * @server_default false
     */
    exact_bounds?: boolean
    /**
     * Size, in pixels, of a side of the tile. Vector tiles are square with equal sides.
     * @server_default 4096
     */
    extent?: integer
    /**
     * Fields to return in the `hits` layer. Supports wildcards (`*`).
     * This parameter does not support fields with array values. Fields with array
     * values may return inconsistent results.
     */
    fields?: Fields
    /**
     * Additional zoom levels available through the aggs layer. For example, if <zoom> is 7
     * and grid_precision is 8, you can zoom in up to level 15. Accepts 0-8. If 0, results
     * don’t include the aggs layer.
     * @server_default 8
     */
    grid_precision?: integer
    /**
     * Determines the geometry type for features in the aggs layer. In the aggs layer,
     * each feature represents a geotile_grid cell. If 'grid' each feature is a Polygon
     * of the cells bounding box. If 'point' each feature is a Point that is the centroid
     * of the cell.
     * @server_default grid
     */
    grid_type?: GridType
    /**
     * Query DSL used to filter documents for the search.
     */
    query?: QueryContainer
    /**
     * Defines one or more runtime fields in the search request. These fields take
     * precedence over mapped fields with the same name.
     */
    runtime_mappings?: RuntimeFields
    /**
     * Maximum number of features to return in the hits layer. Accepts 0-10000.
     * If 0, results don’t include the hits layer.
     * @server_default 10000
     */
    size?: integer
    /**
     * Sorts features in the hits layer. By default, the API calculates a bounding
     * box for each feature. It sorts features based on this box’s diagonal length,
     * from longest to shortest.
     */
    sort?: Sort
  }
}
