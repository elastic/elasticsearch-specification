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

import { DataframeAnalytics } from '@ml/_types/DataframeAnalytics'
import { DataframeState } from '@ml/_types/Dataframe'
import { long } from '@_types/Numeric'

export class Response {
  body: {
    count: long
    /** An array of objects that contain usage information for data frame analytics jobs, which are sorted by the id value in ascending order. */
    data_frame_analytics: DataframeAnalytics[]
  }
}
