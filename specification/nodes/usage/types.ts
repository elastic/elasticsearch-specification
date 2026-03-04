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

import { integer } from '@_types/Numeric'
import { EpochTime, UnitMillis } from '@_types/Time'
import { Dictionary } from '@spec_utils/Dictionary'
import { UserDefinedValue } from '@spec_utils/UserDefinedValue'

export class NodeUsage {
  /**
   *  The total number of times each REST endpoint has been called on this node since the last restart.
   *  Note that the REST endpoint names are not considered stable.
   */
  rest_actions: Dictionary<string, integer>
  /**
   * The timestamp for when the collection of these statistics started.
   */
  since: EpochTime<UnitMillis>
  /**
   * The timestamp for when these statistics were collected.
   */
  timestamp: EpochTime<UnitMillis>
  /**
   * The total number of times search aggregations have been called on this node since the last restart.
   */
  aggregations: Dictionary<string, UserDefinedValue>
}
