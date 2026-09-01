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

import { Field, Fields } from '@_types/common'
import { double } from '@_types/Numeric'
import { SortMode } from '@_types/sort'
import { Dictionary } from '@spec_utils/Dictionary'
import { Aggregation } from './Aggregation'

export class MatrixAggregation extends Aggregation {
  /**
   * An array of fields for computing the statistics.
   */
  fields?: Fields
  /**
   * The value to apply to documents that do not have a value.
   * By default, documents without a value are ignored.
   */
  missing?: Dictionary<Field, double>
}

export class MatrixStatsAggregation extends MatrixAggregation {
  /**
   * Array value the aggregation will use for array or multi-valued fields.
   * @server_default avg
   */
  mode?: SortMode
}
