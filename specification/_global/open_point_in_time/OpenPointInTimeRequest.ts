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
  Indices,
  ProjectRouting,
  Routing
} from '@_types/common'
import { integer } from '@_types/Numeric'
import { QueryContainer } from '@_types/query_dsl/abstractions'
import { Duration } from '@_types/Time'

/**
 * Open a point in time.
 *
 * A search request by default runs against the most recent visible data of the target indices,
 * which is called point in time. Elasticsearch pit (point in time) is a lightweight view into the
 * state of the data as it existed when initiated. In some cases, it’s preferred to perform multiple
 * search requests using the same point in time. For example, if refreshes happen between
 * `search_after` requests, then the results of those requests might not be consistent as changes happening
 * between searches are only visible to the more recent point in time.
 *
 * A point in time must be opened explicitly before being used in search requests.
 *
 * A subsequent search request with the `pit` parameter must not specify `index`, `routing`, or `preference` values as these parameters are copied from the point in time.
 *
 * Just like regular searches, you can use `from` and `size` to page through point in time search results, up to the first 10,000 hits.
 * If you want to retrieve more hits, use PIT with `search_after`.
 *
 * IMPORTANT: The open point in time request and each subsequent search request can return different identifiers; always use the most recently received ID for the next search request.
 *
 * When a PIT that contains shard failures is used in a search request, the missing are always reported in the search response as a `NoShardAvailableActionException` exception.
 * To get rid of these exceptions, a new PIT needs to be created so that shards missing from the previous PIT can be handled, assuming they become available in the meantime.
 *
 * **Keeping point in time alive**
 *
 * The `keep_alive` parameter, which is passed to a open point in time request and search request, extends the time to live of the corresponding point in time.
 * The value does not need to be long enough to process all data — it just needs to be long enough for the next request.
 *
 * Normally, the background merge process optimizes the index by merging together smaller segments to create new, bigger segments.
 * Once the smaller segments are no longer needed they are deleted.
 * However, open point-in-times prevent the old segments from being deleted since they are still in use.
 *
 * TIP: Keeping older segments alive means that more disk space and file handles are needed.
 * Ensure that you have configured your nodes to have ample free file handles.
 *
 * Additionally, if a segment contains deleted or updated documents then the point in time must keep track of whether each document in the segment was live at the time of the initial search request.
 * Ensure that your nodes have sufficient heap space if you have many open point-in-times on an index that is subject to ongoing deletes or updates.
 * Note that a point-in-time doesn't prevent its associated indices from being deleted.
 * You can check how many point-in-times (that is, search contexts) are open with the nodes stats API.
 * @rest_spec_name open_point_in_time
 * @availability stack since=7.10.0 stability=stable
 * @availability serverless stability=stable visibility=public
 * @doc_id point-in-time-api
 * @index_privileges read
 * @doc_tag search
 * @doc_id point-in-time-api
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/{index}/_pit'
      methods: ['POST']
    }
  ]
  path_parts: {
    /**
     * A comma-separated list of index names to open point in time; use `_all` or empty string to perform the operation on all indices
     */
    index: Indices
  }
  query_parameters: {
    /**
     * Extend the length of time that the point in time persists.
     */
    keep_alive: Duration
    /**
     * If `false`, the request returns an error if it targets a missing or closed index.
     * @server_default false
     */
    ignore_unavailable?: boolean
    /**
     * The node or shard the operation should be performed on.
     * By default, it is random.
     */
    preference?: string
    /**
     * Specifies a subset of projects to target for the PIT request using project
     * metadata tags in a subset of Lucene query syntax.
     * Allowed Lucene queries: the _alias tag and a single value (possibly wildcarded).
     * Examples:
     *  _alias:my-project
     *  _alias:_origin
     *  _alias:*pr*
     * Supported in serverless only.
     * @availability serverless stability=stable visibility=feature_flag feature_flag=serverless.cross_project.enabled
     */
    project_routing?: ProjectRouting
    /**
     * A custom value that is used to route operations to a specific shard.
     */
    routing?: Routing
    /**
     * The type of index that wildcard patterns can match.
     * If the request can target data streams, this argument determines whether wildcard expressions match hidden data streams.
     * It supports comma-separated values, such as `open,hidden`.
     * @server_default open
     */
    expand_wildcards?: ExpandWildcards
    /**
     * Indicates whether the point in time tolerates unavailable shards or shard failures when initially creating the PIT.
     * If `false`, creating a point in time request when a shard is missing or unavailable will throw an exception.
     * If `true`, the point in time will contain all the shards that are available at the time of the request.
     * @server_default false
     */
    allow_partial_search_results?: boolean
    /**
     * Maximum number of concurrent shard requests that each sub-search request executes per node.
     * @server_default 5
     */
    max_concurrent_shard_requests?: integer
  }
  body?: {
    /**
     * Filter indices if the provided query rewrites to `match_none` on every shard.
     */
    index_filter?: QueryContainer
    /**
     * Specifies a subset of projects to target for the PIT request using project
     * metadata tags in a subset of Lucene query syntax.
     * Allowed Lucene queries: the _alias tag and a single value (possibly wildcarded).
     * Examples:
     *  _alias:my-project
     *  _alias:_origin
     *  _alias:*pr*
     * Supported in serverless only.
     * @availability serverless stability=stable visibility=feature_flag feature_flag=serverless.cross_project.enabled
     */
    project_routing?: ProjectRouting
  }
}
