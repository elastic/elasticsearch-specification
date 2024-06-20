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

import { NodeId } from '@_types/common'

export class ThreadPoolRecord {
  /**
   * The node name.
   * @aliases nn
   */
  'node_name'?: string
  /**
   * The persistent node identifier.
   * @aliases id
   */
  'node_id'?: NodeId
  /**
   * The ephemeral node identifier.
   * @aliases eid
   */
  'ephemeral_node_id'?: string
  /**
   * The process identifier.
   * @aliases p
   */
  'pid'?: string
  /**
   * The host name for the current node.
   * @aliases h
   */
  'host'?: string
  /**
   * The IP address for the current node.
   * @aliases i
   */
  'ip'?: string
  /**
   * The bound transport port for the current node.
   * @aliases po
   */
  'port'?: string
  /**
   * The thread pool name.
   * @aliases n
   */
  'name'?: string
  /**
   * The thread pool type.
   * Returned values include `fixed`, `fixed_auto_queue_size`, `direct`, and `scaling`.
   * @aliases t
   */
  'type'?: string
  /**
   * The number of active threads in the current thread pool.
   * @aliases a
   */
  'active'?: string
  /**
   * The number of threads in the current thread pool.
   * @aliases psz
   */
  'pool_size'?: string
  /**
   * The number of tasks currently in queue.
   * @aliases q
   */
  'queue'?: string
  /**
   * The maximum number of tasks permitted in the queue.
   * @aliases qs
   */
  'queue_size'?: string
  /**
   * The number of rejected tasks.
   * @aliases r
   */
  'rejected'?: string
  /**
   * The highest number of active threads in the current thread pool.
   * @aliases l
   */
  'largest'?: string
  /**
   * The number of completed tasks.
   * @aliases c
   */
  'completed'?: string
  /**
   * The core number of active threads allowed in a scaling thread pool.
   * @aliases cr
   */
  'core'?: string | null
  /**
   * The maximum number of active threads allowed in a scaling thread pool.
   * @aliases mx
   */
  'max'?: string | null
  /**
   * The number of active threads allowed in a fixed thread pool.
   * @aliases sz
   */
  'size'?: string | null
  /**
   * The thread keep alive time.
   * @aliases ka
   */
  'keep_alive'?: string | null
}
