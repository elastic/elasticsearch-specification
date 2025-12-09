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

/**
 * Data stream failure store contains the configuration of the failure store for a given data stream.
 */
export class DataStreamFailureStore {
  /**
   * If defined, it turns the failure store on/off (`true`/`false`) for this data stream. A data stream failure store
   * that's disabled (enabled: `false`) will redirect no new failed indices to the failure store; however, it will
   * not remove any existing data from the failure store.
   * @server_default true
   */
  enabled?: boolean
  /**
   * If defined, it specifies the lifecycle configuration for the failure store of this data stream.
   */
  lifecycle?: FailureStoreLifecycle
}

/**
 * Template equivalent of DataStreamFailureStore that allows nullable values.
 */
export class DataStreamFailureStoreTemplate {
  /**
   * If defined, it turns the failure store on/off (`true`/`false`) for this data stream. A data stream failure store
   * that's disabled (enabled: `false`) will redirect no new failed indices to the failure store; however, it will
   * not remove any existing data from the failure store.
   * @server_default true
   */
  enabled?: boolean | null
  /**
   * If defined, it specifies the lifecycle configuration for the failure store of this data stream.
   */
  lifecycle?: FailureStoreLifecycleTemplate | null
}

/**
 * The failure store lifecycle configures the data stream lifecycle configuration for failure indices.
 */
export class FailureStoreLifecycle {
  /**
   * If defined, every document added to this data stream will be stored at least for this time frame.
   * Any time after this duration the document could be deleted.
   * When empty, every document in this data stream will be stored indefinitely.
   */
  data_retention?: Duration
  /**
   * If defined, it turns data stream lifecycle on/off (`true`/`false`) for this data stream. A data stream lifecycle
   * that's disabled (enabled: `false`) will have no effect on the data stream.
   * @server_default true
   */
  enabled?: boolean
}

/**
 * Template equivalent of FailureStoreLifecycle that allows nullable values.
 */
export class FailureStoreLifecycleTemplate {
  /**
   * If defined, every document added to this data stream will be stored at least for this time frame.
   * Any time after this duration the document could be deleted.
   * When empty, every document in this data stream will be stored indefinitely.
   */
  data_retention?: Duration | null
  /**
   * If defined, it turns data stream lifecycle on/off (`true`/`false`) for this data stream. A data stream lifecycle
   * that's disabled (enabled: `false`) will have no effect on the data stream.
   * @server_default true
   */
  enabled?: boolean
}
