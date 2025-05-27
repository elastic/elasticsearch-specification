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

import {
  DataStreamFailureStore,
  DataStreamFailureStoreTemplate
} from '@indices/_types/DataStreamFailureStore'

/**
 * Data stream options contain the configuration of data stream level features for a given data stream, for example,
 * the failure store configuration.
 */
export class DataStreamOptions {
  /**
   * If defined, it specifies configuration for the failure store of this data stream.
   */
  failure_store?: DataStreamFailureStore
}

/**
 * Data stream options template contains the same information as DataStreamOptions but allows them to be set explicitly to null.
 */
export class DataStreamOptionsTemplate {
  failure_store?: DataStreamFailureStoreTemplate | null
}
