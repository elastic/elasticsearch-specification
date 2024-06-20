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
import { GridAggregationType, GridType } from './_types/GridType'
import { Coordinate } from './_types/Coordinate'
import { Sort } from '@_types/sort'
import { QueryContainer } from '@_types/query_dsl/abstractions'
import { RuntimeFields } from '@_types/mapping/RuntimeFields'
import { integer } from '@_types/Numeric'
import { ZoomLevel } from './_types/ZoomLevel'
import { TrackHits } from '@global/search/_types/hits'

/**
 * @rest_spec_name search_mvt
 * @availability stack since=7.15.0 stability=stable
 * @availability serverless stability=stable visibility=public
 */
export interface Request extends RequestBase {
  path_parts: {
    /* List of indices, data streams, or aliases to search */
    index: Indices
    /* Field containing geospatial data to return */
    field: Field
    /* Zoom level of the vector tile to search */
    zoom: ZoomLevel
    /* X coordinate for the vector tile to search */
    x: Coordinate
    /* Y coordinate for the vector tile to search */
    y: Coordinate
  }
  query_parameters: {
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
     * Aggregation used to create a grid for `field`.
     */
    grid_agg?: GridAggregationType
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
    /**
     * If `true`, the hits and aggs layers will contain additional point features representing
     * suggested label positions for the original features.
     */
    with_labels?: boolean
  }
  body: {
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
     * Size, in pixels, of a clipping buffer outside the tile. This allows renderers
     * to avoid outline artifacts from geometries that extend past the extent of the tile.
     * @server_default 5
     */
    buffer?: integer
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
     * Aggregation used to create a grid for the `field`.
     */
    grid_agg?: GridAggregationType
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
    /**
     * Number of hits matching the query to count accurately. If `true`, the exact number
     * of hits is returned at the cost of some performance. If `false`, the response does
     * not include the total number of hits matching the query.
     * @server_default 10000
     */
    track_total_hits?: TrackHits
    /**
     * If `true`, the hits and aggs layers will contain additional point features representing
     * suggested label positions for the original features.
     */
    with_labels?: boolean
  }
}
