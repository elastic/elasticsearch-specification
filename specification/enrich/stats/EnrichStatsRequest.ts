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
import { Duration } from '@_types/Time'

/**
 * Get enrich stats.
 *
 * Returns enrich coordinator statistics and information about enrich policies that are currently executing.
 * @rest_spec_name enrich.stats
 * @availability stack since=7.5.0 stability=stable
 * @availability serverless stability=stable visibility=private
 * @doc_id enrich-stats-api
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_enrich/_stats'
      methods: ['GET']
    }
  ]
  query_parameters: {
    /**
     * Period to wait for a connection to the master node.
     * @server_default 30s
     */
    master_timeout?: Duration
  }
}
