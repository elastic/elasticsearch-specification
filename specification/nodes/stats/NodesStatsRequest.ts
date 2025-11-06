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
import { Fields, CommonStatsFlags, NodeIds, NodeStatsLevel } from '@_types/common'
import { Duration } from '@_types/Time'

/**
 * Get node statistics.
 * Get statistics for nodes in a cluster.
 * By default, all stats are returned. You can limit the returned information by using metrics.
 * @rest_spec_name nodes.stats
 * @availability stack stability=stable
 * @availability serverless stability=stable visibility=private
 * @doc_id cluster-nodes-stats
 * @cluster_privileges monitor,manage
 * @doc_tag cluster
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_nodes/stats'
      methods: ['GET']
    },
    {
      path: '/_nodes/{node_id}/stats'
      methods: ['GET']
    },
    {
      path: '/_nodes/stats/{metric}'
      methods: ['GET']
    },
    {
      path: '/_nodes/{node_id}/stats/{metric}'
      methods: ['GET']
    },
    {
      path: '/_nodes/stats/{metric}/{index_metric}'
      methods: ['GET']
    },
    {
      path: '/_nodes/{node_id}/stats/{metric}/{index_metric}'
      methods: ['GET']
    }
  ]
  path_parts: {
    /** Comma-separated list of node IDs or names used to limit returned information. */
    node_id?: NodeIds
    /*+ Limits the information returned to the specific metrics. */
    metric?: NodeStatsMetrics | NodeStatsMetrics[]
    /** Limit the information returned for indices metric to the specific index metrics. It can be used only if indices (or all) metric is specified.*/
    index_metric?: CommonStatsFlags
  }
  query_parameters: {
    /** Comma-separated list or wildcard expressions of fields to include in fielddata and suggest statistics. */
    completion_fields?: Fields
    /** Comma-separated list or wildcard expressions of fields to include in fielddata statistics. */
    fielddata_fields?: Fields
    /** Comma-separated list or wildcard expressions of fields to include in the statistics. */
    fields?: Fields
    /** Comma-separated list of search groups to include in the search statistics. */
    groups?: boolean
    /**
     * If true, the call reports the aggregated disk usage of each one of the Lucene index files (only applies if segment stats are requested).
     * @server_default false
     */
    include_segment_file_sizes?: boolean
    /**
     * Indicates whether statistics are aggregated at the node, indices, or shards level.
     * @server_default node
     */
    level?: NodeStatsLevel
    /**
     * Period to wait for a response. If no response is received before the timeout expires, the request fails and returns an error.
     * @server_default 30s
     */
    timeout?: Duration
    /** A comma-separated list of document types for the indexing index metric. */
    types?: string[]
    /**
     * If `true`, the response includes information from segments that are not loaded into memory.
     * @server_default false
     */
    include_unloaded_segments?: boolean
  }
}

export enum NodeStatsMetrics {
  _all,
  _none,
  os,
  process,
  jvm,
  thread_pool,
  fs,
  transport,
  http,
  breaker,
  script,
  discovery,
  ingest,
  adaptive_selection,
  script_cache,
  indexing_pressure,
  repositories,
  allocations
}