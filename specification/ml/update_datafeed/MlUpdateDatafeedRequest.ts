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
import { ExpandWildcards, Id, IndicesOptions } from '@_types/common'
import { Dictionary } from '@spec_utils/Dictionary'
import { AggregationContainer } from '@_types/aggregations/AggregationContainer'
import { ChunkingConfig, DelayedDataCheckConfig } from '@ml/_types/Datafeed'
import { Duration } from '@_types/Time'
import { integer } from '@_types/Numeric'
import { QueryContainer } from '@_types/query_dsl/abstractions'
import { RuntimeFields } from '@_types/mapping/RuntimeFields'
import { ScriptField } from '@_types/Scripting'

/**
 * Updates the properties of a datafeed.
 * You must stop and start the datafeed for the changes to be applied.
 * When Elasticsearch security features are enabled, your datafeed remembers which roles the user who updated it had at
 * the time of the update and runs the query using those same roles. If you provide secondary authorization headers,
 * those credentials are used instead.
 * @rest_spec_name ml.update_datafeed
 * @since 6.4.0
 * @stability stable
 * @cluster_privileges manage_ml
 */
export interface Request extends RequestBase {
  path_parts: {
    /**
     * A numerical character string that uniquely identifies the datafeed.
     * This identifier can contain lowercase alphanumeric characters (a-z and 0-9), hyphens, and underscores.
     * It must start and end with alphanumeric characters.
     */
    datafeed_id: Id
  }
  query_parameters: {
    /**
     * If `true`, wildcard indices expressions that resolve into no concrete indices are ignored. This includes the
     * `_all` string or when no indices are specified.
     * @server_default true
     */
    allow_no_indices?: boolean
    /**
     * Type of index that wildcard patterns can match. If the request can target data streams, this argument determines
     * whether wildcard expressions match hidden data streams. Supports comma-separated values. Valid values are:
     *
     * * `all`: Match any data stream or index, including hidden ones.
     * * `closed`: Match closed, non-hidden indices. Also matches any non-hidden data stream. Data streams cannot be closed.
     * * `hidden`: Match hidden data streams and hidden indices. Must be combined with `open`, `closed`, or both.
     * * `none`: Wildcard patterns are not accepted.
     * * `open`: Match open, non-hidden indices. Also matches any non-hidden data stream.
     * @server_default open
     */
    expand_wildcards?: ExpandWildcards
    /**
     * If `true`, concrete, expanded or aliased indices are ignored when frozen.
     * @server_default true
     * @deprecated 7.16.0
     */
    ignore_throttled?: boolean
    /**
     * If `true`, unavailable indices (missing or closed) are ignored.
     * @server_default false
     */
    ignore_unavailable?: boolean
  }
  body: {
    /**
     * If set, the datafeed performs aggregation searches. Support for aggregations is limited and should be used only
     * with low cardinality data.
     */
    aggregations?: Dictionary<string, AggregationContainer>
    /**
     * Datafeeds might search over long time periods, for several months or years. This search is split into time
     * chunks in order to ensure the load on Elasticsearch is managed. Chunking configuration controls how the size of
     * these time chunks are calculated; it is an advanced configuration option.
     */
    chunking_config?: ChunkingConfig
    /**
     * Specifies whether the datafeed checks for missing data and the size of the window. The datafeed can optionally
     * search over indices that have already been read in an effort to determine whether any data has subsequently been
     * added to the index. If missing data is found, it is a good indication that the `query_delay` is set too low and
     * the data is being indexed after the datafeed has passed that moment in time. This check runs only on real-time
     * datafeeds.
     */
    delayed_data_check_config?: DelayedDataCheckConfig
    /**
     * The interval at which scheduled queries are made while the datafeed runs in real time. The default value is
     * either the bucket span for short bucket spans, or, for longer bucket spans, a sensible fraction of the bucket
     * span. When `frequency` is shorter than the bucket span, interim results for the last (partial) bucket are
     * written then eventually overwritten by the full bucket results. If the datafeed uses aggregations, this value
     * must be divisible by the interval of the date histogram aggregation.
     */
    frequency?: Duration
    /**
     * An array of index names. Wildcards are supported. If any of the indices are in remote clusters, the machine
     * learning nodes must have the `remote_cluster_client` role.
     * @aliases indexes
     * */
    indices?: string[]
    /**
     * Specifies index expansion options that are used during search.
     */
    indices_options?: IndicesOptions
    /**
     * If a real-time datafeed has never seen any data (including during any initial training period), it automatically
     * stops and closes the associated job after this many real-time searches return no documents. In other words,
     * it stops after `frequency` times `max_empty_searches` of real-time operation. If not set, a datafeed with no
     * end time that sees no data remains started until it is explicitly stopped. By default, it is not set.
     */
    max_empty_searches?: integer
    /**
     * The Elasticsearch query domain-specific language (DSL). This value corresponds to the query object in an
     * Elasticsearch search POST body. All the options that are supported by Elasticsearch can be used, as this
     * object is passed verbatim to Elasticsearch. Note that if you change the query, the analyzed data is also
     * changed. Therefore, the time required to learn might be long and the understandability of the results is
     * unpredictable. If you want to make significant changes to the source data, it is recommended that you
     * clone the job and datafeed and make the amendments in the clone. Let both run in parallel and close one
     * when you are satisfied with the results of the job.
     * @server_default {"match_all": {"boost": 1}}
     */
    query?: QueryContainer
    /**
     * The number of seconds behind real time that data is queried. For example, if data from 10:04 a.m. might
     * not be searchable in Elasticsearch until 10:06 a.m., set this property to 120 seconds. The default
     * value is randomly selected between `60s` and `120s`. This randomness improves the query performance
     * when there are multiple jobs running on the same node.
     */
    query_delay?: Duration
    /**
     * Specifies runtime fields for the datafeed search.
     */
    runtime_mappings?: RuntimeFields
    /**
     * Specifies scripts that evaluate custom expressions and returns script fields to the datafeed.
     * The detector configuration objects in a job can contain functions that use these script fields.
     */
    script_fields?: Dictionary<string, ScriptField>
    /**
     * The size parameter that is used in Elasticsearch searches when the datafeed does not use aggregations.
     * The maximum value is the value of `index.max_result_window`.
     * @server_default 1000
     */
    scroll_size?: integer
  }
}
