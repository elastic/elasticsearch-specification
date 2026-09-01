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

import { ByteSize, NodeId } from '@_types/common'

export class CircuitBreakerRecord {
  /**
   * Persistent node ID
   * @aliases id
   */
  node_id?: NodeId
  /**
   * Node name
   * @aliases nn
   */
  node_name?: string
  /**
   * Breaker name
   * @aliases br
   */
  breaker?: string
  /**
   * Limit size
   * @aliases l
   */
  limit?: string
  /**
   * Limit size in bytes
   * @aliases lb
   */
  limit_bytes?: ByteSize
  /**
   * Estimated size
   * @aliases e
   */
  estimated?: string
  /**
   * Estimated size in bytes
   * @aliases eb
   */
  estimated_bytes?: ByteSize
  /**
   * Tripped count
   * @aliases t
   */
  tripped?: string
  /**
   * Overhead
   * @aliases o
   */
  overhead?: string
}
