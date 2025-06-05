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

import { Names } from '@_types/common'
import { TimeUnit } from '@_types/Time'
import { CatRequestBase } from '@cat/_types/CatBase'

/**
 * Get the cluster health status.
 *
 * IMPORTANT: CAT APIs are only intended for human consumption using the command line or Kibana console.
 * They are not intended for use by applications. For application consumption, use the cluster health API.
 * This API is often used to check malfunctioning clusters.
 * To help you track cluster health alongside log files and alerting systems, the API returns timestamps in two formats:
 * `HH:MM:SS`, which is human-readable but includes no date information;
 * `Unix epoch time`, which is machine-sortable and includes date information.
 * The latter format is useful for cluster recoveries that take multiple days.
 * You can use the cat health API to verify cluster health across multiple nodes.
 * You also can use the API to track the recovery of a large cluster over a longer period of time.
 * @rest_spec_name cat.health
 * @availability stack stability=stable
 * @availability serverless stability=stable visibility=private
 * @doc_id cat-health
 * @cluster_privileges monitor
 */
export interface Request extends CatRequestBase {
  urls: [
    {
      path: '/_cat/health'
      methods: ['GET']
    }
  ]
  query_parameters: {
    /**
     * The unit used to display time values.
     */
    time?: TimeUnit
    /**
     * If true, returns `HH:MM:SS` and Unix epoch timestamps.
     * @server_default true
     */
    ts?: boolean
    /**
     * List of columns to appear in the response. Supports simple wildcards.
     */
    h?: Names
    /**
     * List of columns that determine how the table should be sorted.
     * Sorting defaults to ascending and can be changed by setting `:asc`
     * or `:desc` as a suffix to the column name.
     */
    s?: Names
  }
}
