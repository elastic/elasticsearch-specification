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
  Metrics,
  VersionNumber
} from '@_types/common'
import { Duration } from '@_types/Time'

/**
 * Get the cluster state.
 * Get comprehensive information about the state of the cluster.
 *
 * The cluster state is an internal data structure which keeps track of a variety of information needed by every node, including the identity and attributes of the other nodes in the cluster; cluster-wide settings; index metadata, including the mapping and settings for each index; the location and status of every shard copy in the cluster.
 *
 * The elected master node ensures that every node in the cluster has a copy of the same cluster state.
 * This API lets you retrieve a representation of this internal state for debugging or diagnostic purposes.
 * You may need to consult the Elasticsearch source code to determine the precise meaning of the response.
 *
 * By default the API will route requests to the elected master node since this node is the authoritative source of cluster states.
 * You can also retrieve the cluster state held on the node handling the API request by adding the `?local=true` query parameter.
 *
 * Elasticsearch may need to expend significant effort to compute a response to this API in larger clusters, and the response may comprise a very large quantity of data.
 * If you use this API repeatedly, your cluster may become unstable.
 *
 * WARNING: The response is a representation of an internal data structure.
 * Its format is not subject to the same compatibility guarantees as other more stable APIs and may change from version to version.
 * Do not query this API using external monitoring tools.
 * Instead, obtain the information you require using other more stable cluster APIs.
 * @rest_spec_name cluster.state
 * @availability stack since=1.3.0 stability=stable
 * @availability serverless stability=stable visibility=private
 * @cluster_privileges monitor, manage
 * @doc_id cluster-state
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_cluster/state'
      methods: ['GET']
    },
    {
      path: '/_cluster/state/{metric}'
      methods: ['GET']
    },
    {
      path: '/_cluster/state/{metric}/{index}'
      methods: ['GET']
    }
  ]
  path_parts: {
    metric?: Metrics
    index?: Indices
  }
  query_parameters: {
    /** @server_default true */
    allow_no_indices?: boolean
    expand_wildcards?: ExpandWildcards
    /** @server_default false */
    flat_settings?: boolean
    /** @server_default false */
    ignore_unavailable?: boolean
    /** @server_default false */
    local?: boolean
    /**
     * Timeout for waiting for new cluster state in case it is blocked
     * @deprecated 9.2.0
     * @server_default 30s
     * */
    master_timeout?: Duration
    wait_for_metadata_version?: VersionNumber
    wait_for_timeout?: Duration
  }
}
