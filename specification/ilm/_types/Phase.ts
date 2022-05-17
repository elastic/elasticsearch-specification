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

import { TimeSpan } from '@_types/Time'
import { UserDefinedValue } from '@spec_utils/UserDefinedValue'
import { RolloverConditions } from '@indices/rollover/types'
import { integer, long } from '@_types/Numeric'

export class Phase {
  actions?: Actions
  /**
   * @es_quirk output as a millis number in XPack usage stats, which cannot roundtrip with a TimeSpan as it requires a unit.
   */
  min_age?: TimeSpan | long
  /** @since 7.16.0 */
  configurations?: Configurations
}

export class Phases {
  cold?: Phase
  delete?: Phase
  hot?: Phase
  warm?: Phase
}

// TODO. This is a variants container.
// See https://www.elastic.co/guide/en/elasticsearch/reference/current/ilm-index-lifecycle.html#ilm-phase-actions
export type Actions = UserDefinedValue

export class Configurations {
  rollover?: RolloverConditions
  forcemerge?: ForceMergeConfiguration
  shrink?: ShrinkConfiguration
}

export class ForceMergeConfiguration {
  max_num_segments: integer
}

export class ShrinkConfiguration {
  number_of_shards: integer
}
