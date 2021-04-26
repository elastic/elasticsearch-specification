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

import { float, integer } from '@_types/Numeric'

/**
 * The source of the data for the transform.
 */
export class TransformSettings {
  /**
   * Defines if dates in the ouput should be written as ISO formatted string (default) or as millis since epoch. epoch_millis has been the default for transforms created before version 7.11. For compatible output set this to true.
   * @server_default false
   */
  dates_as_epoch_millis?: boolean
  /**
   * Specifies a limit on the number of input documents per second. This setting throttles the transform by adding a wait time between search requests. The default value is null, which disables throttling.
   */
  docs_per_second?: float
  /**
   * Defines the initial page size to use for the composite aggregation for each checkpoint. If circuit breaker exceptions occur, the page size is dynamically adjusted to a lower value. The minimum value is 10 and the maximum is 10,000.
   * @server_default 500
   */
  max_page_search_size?: integer
}
