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

import { integer, long } from '@_types/Numeric'
import { Duration } from '@_types/Time'
import { Dictionary } from '@spec_utils/Dictionary'

export class Response {
  /** @codegen_name infos */
  body: Dictionary<string, ClusterRemoteInfo>
}

/** @variants internal tag='mode' */
export type ClusterRemoteInfo = ClusterRemoteSniffInfo | ClusterRemoteProxyInfo

export class ClusterRemoteSniffInfo {
  /** The connection mode for the remote cluster. */
  mode: 'sniff'
  /**
   * If it is `true`, there is at least one open connection to the remote cluster.
   * If it is `false`, it means that the cluster no longer has an open connection to the remote cluster.
   * It does not necessarily mean that the remote cluster is down or unavailable, just that at some point a connection was lost.
   */
  connected: boolean
  /** The maximum number of connections maintained for the remote cluster when sniff mode is configured. */
  max_connections_per_cluster: integer
  /** The number of connected nodes in the remote cluster when sniff mode is configured. */
  num_nodes_connected: long
  /** The initial connect timeout for remote cluster connections. */
  initial_connect_timeout: Duration
  /**
   * If `true`, cross-cluster search skips the remote cluster when its nodes are unavailable during the search and ignores errors returned by the remote cluster.
   * @ext_doc_id modules-cross-cluster-optional
   */
  skip_unavailable: boolean
  /**
   * The initial seed transport addresses of the remote cluster when sniff mode is configured.
   */
  seeds: string[]
}

export class ClusterRemoteProxyInfo {
  /** The connection mode for the remote cluster. */
  mode: 'proxy'
  /**
   * If it is `true`, there is at least one open connection to the remote cluster.
   * If it is `false`, it means that the cluster no longer has an open connection to the remote cluster.
   * It does not necessarily mean that the remote cluster is down or unavailable, just that at some point a connection was lost.
   */
  connected: boolean
  /** The initial connect timeout for remote cluster connections. */
  initial_connect_timeout: Duration
  /**
   * If `true`, cross-cluster search skips the remote cluster when its nodes are unavailable during the search and ignores errors returned by the remote cluster.
   * @ext_doc_id modules-cross-cluster-optional
   */
  skip_unavailable: boolean
  /** The address for remote connections when proxy mode is configured. */
  proxy_address: string
  server_name: string
  /** The number of open socket connections to the remote cluster when proxy mode is configured. */
  num_proxy_sockets_connected: integer
  /** The maximum number of socket connections to the remote cluster when proxy mode is configured. */
  max_proxy_socket_connections: integer
  /** This field is present and has a value of `::es_redacted::` only when the remote cluster is configured with the API key based model. Otherwise, the field is not present. */
  cluster_credentials?: string
}
