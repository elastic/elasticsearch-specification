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

import { DateHistogramAggregation } from '../date_histogram/DateHistogramAggregation'
import { GeoTileGridAggregation } from '../geo_tile_grid/GeoTileGridAggregation'
import { HistogramAggregation } from '../histogram/HistogramAggregation'
import { TermsAggregation } from '../terms/TermsAggregation'

export class CompositeAggregationSource {
  // field: Field;
  // missing_bucket: boolean;
  // name: string;
  // order: SortOrder;
  // source_type: string;
  terms?: TermsAggregation
  histogram?: HistogramAggregation
  date_histogram?: DateHistogramAggregation
  geotile_grid?: GeoTileGridAggregation
}
