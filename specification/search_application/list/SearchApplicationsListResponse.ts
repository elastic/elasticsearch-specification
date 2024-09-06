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

import { IndexName, Name } from '@_types/common'
import { long } from '@_types/Numeric'
import { EpochTime, UnitMillis } from '@_types/Time'

export class Response {
  body: {
    count: long
    results: SearchApplicationListItem[]
  }
}

export class SearchApplicationListItem {
  /**
   * Search Application name
   */
  name: Name
  /**
   * Indices that are part of the Search Application
   */
  indices: IndexName[]
  /**
   * Last time the Search Application was updated
   */
  updated_at_millis: EpochTime<UnitMillis>
  /**
   * Analytics collection associated to the Search Application
   */
  analytics_collection_name?: Name
}
