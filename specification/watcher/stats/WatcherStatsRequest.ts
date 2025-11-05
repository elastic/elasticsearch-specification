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

import { RequestBase } from '@_types/Base'
import { WatcherMetric } from './types'

/**
 * Get Watcher statistics.
 * This API always returns basic metrics.
 * You retrieve more metrics by using the metric parameter.
 * @rest_spec_name watcher.stats
 * @availability stack since=5.5.0 stability=stable
 * @cluster_privileges monitor_watcher
 * @doc_id watcher-api-stats
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_watcher/stats'
      methods: ['GET']
    },
    {
      path: '/_watcher/stats/{metric}'
      methods: ['GET']
    }
  ]
  path_parts: {
    /**
     * Defines which additional metrics are included in the response.
     */

    metric?: WatcherMetric | WatcherMetric[]
  }
  query_parameters: {
    /**
     * Defines whether stack traces are generated for each watch that is running.
     * @server_default false
     */
    emit_stacktraces?: boolean
    /**
     * Defines which additional metrics are included in the response.
     */

    metric?: WatcherMetric | WatcherMetric[]
  }
}
