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
import { TrainedModelStats } from '@ml/_types/TrainedModel'

/**
 * 404 (Missing resources) If allow_no_match is false, this code indicates that there are no resources that match the request or only partial matches for the request.
 */
export class Response {
  body: {
    /** The total number of trained model statistics that matched the requested ID patterns. Could be higher than the number of items in the trained_model_stats array as the size of the array is restricted by the supplied size parameter. */
    count: integer
    /** An array of trained model statistics, which are sorted by the model_id value in ascending order. */
    trained_model_stats: TrainedModelStats[]
  }
}
