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

import { long } from '@_types/Numeric'
import { Duration, DurationValue, UnitMillis } from '@_types/Time'

/**
 * Response type for the get_random_samples API.
 * It reuses the standard SearchResponse structure.
 */
export class Response {
  body: { 
          potential_samples: long,
          samples_rejected_for_max_samples_exceeded: long,
          samples_rejected_for_condition: long,
          samples_rejected_for_rate: long,
          samples_rejected_for_exception: long,
          samples_rejected_for_size: long,
          samples_accepted: long,
          time_sampling?: Duration,
          time_sampling_millis: DurationValue<UnitMillis>,
          time_evaluating_condition?: Duration,
          time_evaluating_condition_millis: DurationValue<UnitMillis>,
          time_compiling_condition?: Duration,
          time_compiling_condition_millis: DurationValue<UnitMillis>,
          last_exception?: string
        }
}
