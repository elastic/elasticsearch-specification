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

import { Missing } from '@common/aggregations/AggregationContainer'
import { Field } from '@common/common'
import { DistanceUnit, GeoDistanceType } from '@common/Geo'
import { FieldType } from '@common/mapping/types/FieldType'
import { double, long } from '@common/Numeric'
import { GeoLocation } from '@common/query_dsl/geo/GeoLocation'
import { Script } from '@common/Scripting'
import { AdditionalProperties } from '@spec_utils/behaviors'
import { NestedSortValue } from './NestedSort'
import { SortMode } from './SortMode'
import { SortOrder } from './SortOrder'

export class FieldSort {
  missing?: Missing
  mode?: SortMode
  nested?: NestedSortValue
  order?: SortOrder
  unmapped_type?: FieldType
}

export class ScoreSort {
  mode?: SortMode
  order?: SortOrder
}
export class GeoDistanceSort
  implements AdditionalProperties<string, GeoLocation | GeoLocation[]> {
  mode?: SortMode
  distance_type?: GeoDistanceType
  order?: SortOrder
  unit?: DistanceUnit
}

export class ScriptSort {
  order?: SortOrder
  script: Script
  type?: string
}

export class SortContainer
  implements AdditionalProperties<string, FieldSort | SortOrder> {
  _score?: ScoreSort
  _doc?: ScoreSort
  _geo_distance?: GeoDistanceSort
  _script?: ScriptSort
}

export type SortCombinations = Field | SortContainer | SortOrder

export type Sort = SortCombinations | SortCombinations[]

export type SortResults = Array<long | double | string | null>

/*
sort?:
| string
| Dictionary<Field, Sort | SortOrder | NestedSort>
| Array<
  SingleKeyDictionary<Sort | SortOrder | Dictionary<Field, NestedSort>>
  >
*/
