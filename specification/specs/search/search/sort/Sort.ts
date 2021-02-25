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

class FieldSort {
  missing?: Missing
  mode?: SortMode
  nested?: NestedSortValue
  order?: SortOrder
  unmapped_type?: FieldType
}

class ScoreSort {
  mode?: SortMode
  order?: SortOrder
}
class GeoDistanceSort implements AdditionalProperties<string, GeoLocation[]> {
  mode?: SortMode
  distance_type?: GeoDistanceType
  order?: SortOrder
  unit?: DistanceUnit
}

class ScriptSort {
  order?: SortOrder
  script: Script
  type?: string
}

class SortContainer
  implements AdditionalProperties<string, FieldSort | SortOrder> {
  _score?: ScoreSort
  _doc?: ScoreSort
  _geo_distance?: GeoDistanceSort
  _script?: ScriptSort
}

type SortCombinations = Field | SortContainer | SortOrder

type Sort = SortCombinations | SortCombinations[]

type SortResults = Array<long | double | string | null>

/*
sort?:
| string
| Dictionary<Field, Sort | SortOrder | NestedSort>
| Array<
  SingleKeyDictionary<Sort | SortOrder | Dictionary<Field, NestedSort>>
  >
*/
