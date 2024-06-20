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
import {
  ExpandWildcards,
  Fields,
  Indices,
  Level,
  Metrics
} from '@_types/common'

/**
 * Returns statistics for one or more indices.
 * For data streams, the API retrieves statistics for the stream’s backing indices.
 * @rest_spec_name indices.stats
 * @availability stack since=1.3.0 stability=stable
 * @availability serverless stability=stable visibility=private
 * @index_privileges manage, monitor
 */
export interface Request extends RequestBase {
  path_parts: {
    metric?: Metrics
    index?: Indices
  }
  query_parameters: {
    /**
     * Comma-separated list or wildcard expressions of fields to include in fielddata and suggest statistics.
     */
    completion_fields?: Fields
    /**
     * Type of index that wildcard patterns can match. If the request can target data streams, this argument
     * determines whether wildcard expressions match hidden data streams. Supports comma-separated values,
     * such as `open,hidden`.
     */
    expand_wildcards?: ExpandWildcards
    /**
     * Comma-separated list or wildcard expressions of fields to include in fielddata statistics.
     */
    fielddata_fields?: Fields
    /**
     * Comma-separated list or wildcard expressions of fields to include in the statistics.
     */
    fields?: Fields
    /**
     * If true, statistics are not collected from closed indices.
     * @server_default true
     */
    forbid_closed_indices?: boolean
    /**
     * Comma-separated list of search groups to include in the search statistics.
     */
    groups?: string | string[]
    /**
     * If true, the call reports the aggregated disk usage of each one of the Lucene index files (only applies if segment stats are requested).
     * @server_default false
     */
    include_segment_file_sizes?: boolean
    /**
     * If true, the response includes information from segments that are not loaded into memory.
     * @server_default false
     */
    include_unloaded_segments?: boolean
    /**
     * Indicates whether statistics are aggregated at the cluster, index, or shard level.
     */
    level?: Level
  }
}
