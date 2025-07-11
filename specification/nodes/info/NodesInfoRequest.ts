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
import { Metrics, NodeIds } from '@_types/common'
import { Duration } from '@_types/Time'

/**
 * Get node information.
 *
 * By default, the API returns all attributes and core settings for cluster nodes.
 * @rest_spec_name nodes.info
 * @availability stack since=1.3.0 stability=stable
 * @availability serverless stability=stable visibility=private
 * @doc_id cluster-nodes-info
 * @doc_tag cluster
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_nodes'
      methods: ['GET']
    },
    {
      path: '/_nodes/{node_id}'
      methods: ['GET']
    },
    {
      path: '/_nodes/{metric}'
      methods: ['GET']
    },
    {
      path: '/_nodes/{node_id}/{metric}'
      methods: ['GET']
    }
  ]
  path_parts: {
    /** Comma-separated list of node IDs or names used to limit returned information. */
    node_id?: NodeIds
    /** Limits the information returned to the specific metrics. Supports a comma-separated list, such as http,ingest. */
    metric?: Metrics
  }
  query_parameters: {
    /**
     * If true, returns settings in flat format.
     * @server_default false
     */
    flat_settings?: boolean
    /**
     * Period to wait for a response. If no response is received before the timeout expires, the request fails and returns an error.
     * @server_default 30s
     */
    timeout?: Duration
  }
}
