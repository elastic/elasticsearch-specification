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

import { Duration } from '@_types/Time'
import { long } from '@_types/Numeric'
import { ByteSize } from '@_types/common'

/**
 * Data lifecycle denotes that a data stream is managed by DLM and contains the configuration.
 */
export class DataLifecycle {
  data_retention?: Duration | null
}

/**
 * Data lifecycle with rollover can be used to display the configuration including the default rollover conditions,
 * if asked.
 */
export class DataLifecycleWithRollover {
  /**
   * If defined, every document added to this data stream will be stored at least for this time frame.
   * Any time after this duration the document could be deleted.
   * When empty, every document in this data stream will be stored indefinitely.
   */
  data_retention?: Duration
  /**
   * The conditions which will trigger the rollover of a backing index as configured by the cluster setting `cluster.lifecycle.default.rollover`.
   * This property is an implementation detail and it will only be retrieved when the query param `include_defaults` is set to true.
   * The contents of this field are subject to change.
   */
  rollover?: DlmRolloverConditions
}

class DlmRolloverConditions {
  min_age?: Duration
  // max_age is a string because it can contain a label to signal that it's automatically calculated
  max_age?: string
  min_docs?: long
  max_docs?: long
  min_size?: ByteSize
  max_size?: ByteSize
  min_primary_shard_size?: ByteSize
  max_primary_shard_size?: ByteSize
  min_primary_shard_docs?: long
  max_primary_shard_docs?: long
}
