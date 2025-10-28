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

import { ByteSize } from '@_types/common'
import { double, integer, long } from '@_types/Numeric'
import { DateTime, Duration } from '@_types/Time'

/**
 * Sampling configuration as returned by the API.
 */
export class SamplingConfigurationOutput {
  /**
   * The fraction of documents to sample.
   */
  rate: double
  /**
   * The maximum number of documents to sample.
   */
  max_samples: integer
  /**
   * The maximum total size of sampled documents.
   */
  max_size?: ByteSize
  /**
   * The maximum total size of sampled documents in bytes.
   */
  max_size_in_bytes: long
  /**
   * The duration for which the sampled documents should be retained.
   */
  time_to_live?: Duration
  /**
   * The duration for which the sampled documents should be retained, in milliseconds.
   */
  time_to_live_in_millis: long
  /**
   * An optional condition script that sampled documents must satisfy.
   */
  if?: string
  /**
   * The time when the sampling configuration was created.
   */
  creation_time?: DateTime
  /**
   * The time when the sampling configuration was created, in milliseconds since epoch.
   */
  creation_time_in_millis: long
}
