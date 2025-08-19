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

import { AggregationContainer } from '@_types/aggregations/AggregationContainer'
import { RequestBase } from '@_types/Base'
import {
  ExpandWildcards,
  HttpHeaders,
  Id,
  Indices,
  IndicesOptions
} from '@_types/common'
import { RuntimeFields } from '@_types/mapping/RuntimeFields'
import { integer } from '@_types/Numeric'
import { QueryContainer } from '@_types/query_dsl/abstractions'
import { ScriptField } from '@_types/Scripting'
import { Duration } from '@_types/Time'
import { ChunkingConfig, DelayedDataCheckConfig } from '@ml/_types/Datafeed'
import { Dictionary } from '@spec_utils/Dictionary'

/**
 * Create a datafeed.
 * Datafeeds retrieve data from Elasticsearch for analysis by an anomaly detection job.
 * You can associate only one datafeed with each anomaly detection job.
 * The datafeed contains a query that runs at a defined interval (`frequency`).
 * If you are concerned about delayed data, you can add a delay (`query_delay`) at each interval.
 * By default, the datafeed uses the following query: `{"match_all": {"boost": 1}}`.
 *
 * When Elasticsearch security features are enabled, your datafeed remembers which roles the user who created it had
 * at the time of creation and runs the query using those same roles. If you provide secondary authorization headers,
 * those credentials are used instead.
 * You must use Kibana, this API, or the create anomaly detection jobs API to create a datafeed. Do not add a datafeed
 * directly to the `.ml-config` index. Do not give users `write` privileges on the `.ml-config` index.
 * @rest_spec_name ml.put_datafeed
 * @availability stack since=5.4.0 stability=stable
 * @availability serverless stability=stable visibility=public
 * @index_privileges read
 * @cluster_privileges manage_ml
 * @doc_tag ml anomaly
 * @doc_id ml-put-datafeed
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_ml/datafeeds/{datafeed_id}'
      methods: ['PUT']
    }
  ]
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
     * If true, wildcard indices expressions that resolve into no concrete indices are ignored. This includes the `_all`
     * string or when no indices are specified.
     * @server_default true
     */
    allow_no_indices?: boolean
    /**
     * Type of index that wildcard patterns can match. If the request can target data streams, this argument determines
     * whether wildcard expressions match hidden data streams. Supports comma-separated values.
     * @server_default open
     */
    expand_wildcards?: ExpandWildcards
    /**
     * If true, concrete, expanded, or aliased indices are ignored when frozen.
     * @server_default true
     * @deprecated 7.16.0
     */
    ignore_throttled?: boolean
    /**
     * If true, unavailable indices (missing or closed) are ignored.
     * @server_default false
     */
    ignore_unavailable?: boolean
  }
  body: {
    /**
     * If set, the datafeed performs aggregation searches.
     * Support for aggregations is limited and should be used only with low cardinality data.
     * @aliases aggs
     */
    aggregations?: Dictionary<string, AggregationContainer>
    /**
     * Datafeeds might be required to search over long time periods, for several months or years.
     * This search is split into time chunks in order to ensure the load on Elasticsearch is managed.
     * Chunking configuration controls how the size of these time chunks are calculated;
     * it is an advanced configuration option.
     */
    chunking_config?: ChunkingConfig
    /**
     * Specifies whether the datafeed checks for missing data and the size of the window.
     * The datafeed can optionally search over indices that have already been read in an effort to determine whether
     * any data has subsequently been added to the index. If missing data is found, it is a good indication that the
     * `query_delay` is set too low and the data is being indexed after the datafeed has passed that moment in time.
     * This check runs only on real-time datafeeds.
     */
    delayed_data_check_config?: DelayedDataCheckConfig
    /**
     * The interval at which scheduled queries are made while the datafeed runs in real time.
     * The default value is either the bucket span for short bucket spans, or, for longer bucket spans, a sensible
     * fraction of the bucket span. When `frequency` is shorter than the bucket span, interim results for the last
     * (partial) bucket are written then eventually overwritten by the full bucket results. If the datafeed uses
     * aggregations, this value must be divisible by the interval of the date histogram aggregation.
     */
    frequency?: Duration
    /**
     * An array of index names. Wildcards are supported. If any of the indices are in remote clusters, the master
     * nodes and the machine learning nodes must have the `remote_cluster_client` role.
     * @aliases indexes
     * */
    indices?: Indices
    /**
     * Specifies index expansion options that are used during search
     */
    indices_options?: IndicesOptions
    /**
     * Identifier for the anomaly detection job.
     */
    job_id?: Id
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
     * object is passed verbatim to Elasticsearch.
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
     * The maximum value is the value of `index.max_result_window`, which is 10,000 by default.
     * @server_default 1000
     */
    scroll_size?: integer
    /**
     * @availability stack since=8.0.0
     * @availability serverless
     */
    headers?: HttpHeaders
  }
}
