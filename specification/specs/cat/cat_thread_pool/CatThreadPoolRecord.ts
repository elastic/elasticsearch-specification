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

class CatThreadPoolRecord {
  /**
   * node name
   */
  'node_name'?:string
  /**
   * persistent node id
   */
  'node_id'?:NodeId
  /**
   * ephemeral node id
   */
  'ephemeral_node_id'?:string
  /**
   * process id
   */
  'pid'?:string
  /**
   * host name
   */
  'host'?:string
  /**
   * ip address
   */
  'ip'?:string
  /**
   * bound transport port
   */
  'port'?:string
  /**
   * thread pool name
   */
  'name'?:string
  /**
   * thread pool type
   * @aliases t
   */
  'type'?:string
  /**
   * number of active threads
   * @aliases a
   */
  'active'?:string
  /**
   * number of threads
   * @aliases psz
   */
  'pool_size'?:string
  /**
   * number of tasks currently in queue
   * @aliases q
   */
  'queue'?:string
  /**
   * maximum number of tasks permitted in queue
   * @aliases qs
   */
  'queue_size'?:string
  /**
   * number of rejected tasks
   * @aliases r
   */
  'rejected'?:string
  /**
   * highest number of seen active threads
   * @aliases l
   */
  'largest'?:string
  /**
   * number of completed tasks
   * @aliases c
   */
  'completed'?:string
  /**
   * core number of threads in a scaling thread pool
   * @aliases cr
   */
  'core'?:string
  /**
   * maximum number of threads in a scaling thread pool
   * @aliases mx
   */
  'max'?:string
  /**
   * number of threads in a fixed thread pool
   * @aliases sz
   */
  'size'?:string
  /**
   * thread keep alive time
   * @aliases ka
   */
  'keep_alive'?:string
}
