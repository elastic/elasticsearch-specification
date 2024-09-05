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
import { long } from '@_types/Numeric'
import { Duration, DurationValue, UnitMillis } from '@_types/Time'

export class RolloverConditions {
  min_age?: Duration
  max_age?: Duration
  max_age_millis?: DurationValue<UnitMillis>
  min_docs?: long
  max_docs?: long
  max_size?: ByteSize
  max_size_bytes?: long
  min_size?: ByteSize
  min_size_bytes?: long
  max_primary_shard_size?: ByteSize
  max_primary_shard_size_bytes?: long
  min_primary_shard_size?: ByteSize
  min_primary_shard_size_bytes?: long
  max_primary_shard_docs?: long
  min_primary_shard_docs?: long
}
