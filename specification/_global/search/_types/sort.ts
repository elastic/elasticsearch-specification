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

import { AdditionalProperties } from '@spec_utils/behaviors'
import { Missing } from '@_types/aggregations/AggregationContainer'
import { Field } from '@_types/common'
import { DistanceUnit, GeoDistanceType } from '@_types/Geo'
import { FieldType } from '@_types/mapping/Property'
import { double, integer, long } from '@_types/Numeric'
import { QueryContainer } from '@_types/query_dsl/abstractions'
import { GeoLocation } from '@_types/query_dsl/geo'
import { Script } from '@_types/Scripting'

export class NestedSortValue {
  filter?: QueryContainer
  max_children?: integer
  path: Field
  // nested: NestedSortValue
}

// export type NestedSort = Dictionary<Field, NestedSortKey>

export enum NumericType {
  long = 0,
  double = 1,
  date = 2,
  date_nanos = 3
}

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
  implements AdditionalProperties<Field, GeoLocation | GeoLocation[]> {
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
  implements AdditionalProperties<Field, FieldSort | SortOrder> {
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

export enum SortMode {
  min = 0,
  max = 1,
  sum = 2,
  avg = 3,
  median = 4
}

export enum SortOrder {
  asc = 0,
  desc = 1,
  /** @identifier Document */
  _doc = 2
}

export enum SortSpecialField {
  _score = 0,
  _doc = 1
}
