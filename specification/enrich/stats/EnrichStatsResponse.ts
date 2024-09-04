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

import { CacheStats, CoordinatorStats, ExecutingPolicy } from './types'

export class Response {
  body: {
    /**
     * Objects containing information about each coordinating ingest node for configured enrich processors.
     */
    coordinator_stats: CoordinatorStats[]
    /**
     * Objects containing information about each enrich policy that is currently executing.
     */
    executing_policies: ExecutingPolicy[]
    /**
     * Objects containing information about the enrich cache stats on each ingest node.
     * @availability stack since=7.16.0
     * @availability serverless
     */
    cache_stats?: CacheStats[]
  }
}
