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
import { Fields, Level, Metrics, NodeIds } from '@_types/common'
import { Duration } from '@_types/Time'

/**
 * Returns cluster nodes statistics.
 * @rest_spec_name nodes.stats
 * @availability stack stability=stable
 * @availability serverless stability=stable visibility=private
 * @doc_id cluster-nodes-stats
 * @cluster_privileges monitor,manage
 */
export interface Request extends RequestBase {
  path_parts: {
    /** Comma-separated list of node IDs or names used to limit returned information. */
    node_id?: NodeIds
    /*+ Limits the information returned to the specific metrics. */
    metric?: Metrics
    /** Limit the information returned for indices metric to the specific index metrics. It can be used only if indices (or all) metric is specified.*/
    index_metric?: Metrics
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
    /** Indicates whether statistics are aggregated at the cluster, index, or shard level. */
    level?: Level
    /**
     * Period to wait for a connection to the master node. If no response is received before the timeout expires, the request fails and returns an error.
     * @server_default 30s
     */
    master_timeout?: Duration
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
