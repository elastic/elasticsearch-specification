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

/**
 * Get remote cluster information.
 *
 * Get information about configured remote clusters.
 * The API returns connection and endpoint information keyed by the configured remote cluster alias.
 *
 * > info
 * > This API returns information that reflects current state on the local cluster.
 * > The `connected` field does not necessarily reflect whether a remote cluster is down or unavailable, only whether there is currently an open connection to it.
 * > Elasticsearch does not spontaneously try to reconnect to a disconnected remote cluster.
 * > To trigger a reconnection, attempt a cross-cluster search, ES|QL cross-cluster search, or try the `/_resolve/cluster` endpoint.
 * @rest_spec_name cluster.remote_info
 * @availability stack since=6.1.0 stability=stable
 * @cluster_privileges monitor
 * @doc_id cluster-remote-info
 * @ext_doc_id modules-cross-cluster-search
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_remote/info'
      methods: ['GET']
    }
  ]
}
