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
import { ExpandWildcards, Indices, MediaType } from '@_types/common'
import { Duration } from '@_types/Time'
import { IndicesBlockOptions } from '@indices/_types/IndexSettings'

/**
 * Add an index block.
 *
 * Add an index block to an index.
 * Index blocks limit the operations allowed on an index by blocking specific operation types.
 * @rest_spec_name indices.add_block
 * @availability stack since=7.9.0 stability=stable
 * @availability serverless stability=stable visibility=public
 * @doc_id index-block-add
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/{index}/_block/{block}'
      methods: ['PUT']
    }
  ]
  path_parts: {
    /**
     * A comma-separated list or wildcard expression of index names used to limit the request.
     * By default, you must explicitly name the indices you are adding blocks to.
     * To allow the adding of blocks to indices with `_all`, `*`, or other wildcard expressions, change the `action.destructive_requires_name` setting to `false`.
     * You can update this setting in the `elasticsearch.yml` file or by using the cluster update settings API.
     */
    index: Indices
    /**
     * The block type to add to the index.
     */
    block: IndicesBlockOptions
  }
  response_media_type: MediaType.Json
  query_parameters: {
    /**
     * A setting that does two separate checks on the index expression.
     * If `false`, the request returns an error (1) if any wildcard expression
     * (including `_all` and `*`) resolves to zero matching indices or (2) if the
     * complete set of resolved indices, aliases or data streams is empty after all
     * expressions are evaluated. If `true`, index expressions that resolve to no
     * indices are allowed and the request returns an empty result.
     * @server_default true
     */
    allow_no_indices?: boolean
    /**
     * The type of index that wildcard patterns can match.
     * If the request can target data streams, this argument determines whether wildcard expressions match hidden data streams.
     * It supports comma-separated values, such as `open,hidden`.
     * @server_default open
     */
    expand_wildcards?: ExpandWildcards
    /**
     * If `false`, the request returns an error if it targets a concrete (non-wildcarded)
     * index, alias, or data stream that is missing, closed, or otherwise unavailable.
     * If `true`, unavailable concrete targets are silently ignored.
     * @server_default false
     */
    ignore_unavailable?: boolean
    /**
     * The period to wait for the master node.
     * If the master node is not available before the timeout expires, the request fails and returns an error.
     * It can also be set to `-1` to indicate that the request should never timeout.
     * @server_default 30s
     */
    master_timeout?: Duration
    /**
     * The period to wait for a response from all relevant nodes in the cluster after updating the cluster metadata.
     * If no response is received before the timeout expires, the cluster metadata update still applies but the response will indicate that it was not completely acknowledged.
     * It can also be set to `-1` to indicate that the request should never timeout.
     * @server_default 30s
     */
    timeout?: Duration
  }
}
