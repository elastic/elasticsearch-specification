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
import { IndexName, MediaType } from '@_types/common'
import { Duration } from '@_types/Time'

/**
 * Promote a data stream.
 *
 * Promote a data stream from a replicated data stream managed by cross-cluster replication (CCR) to a regular data stream.
 *
 * With CCR auto following, a data stream from a remote cluster can be replicated to the local cluster.
 * These data streams can't be rolled over in the local cluster.
 * These replicated data streams roll over only if the upstream data stream rolls over.
 * In the event that the remote cluster is no longer available, the data stream in the local cluster can be promoted to a regular data stream, which allows these data streams to be rolled over in the local cluster.
 *
 * NOTE: When promoting a data stream, ensure the local cluster has a data stream enabled index template that matches the data stream.
 * If this is missing, the data stream will not be able to roll over until a matching index template is created.
 * This will affect the lifecycle management of the data stream and interfere with the data stream size and retention.
 * @rest_spec_name indices.promote_data_stream
 * @availability stack since=7.9.0 stability=stable
 * @doc_tag data stream
 * @doc_id data-stream-promote
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_data_stream/_promote/{name}'
      methods: ['POST']
    }
  ]
  path_parts: {
    /** The name of the data stream to promote */
    name: IndexName
  }
  response_media_type: MediaType.Json
  query_parameters: {
    /**
     * Period to wait for a connection to the master node. If no response is received before the timeout expires, the request fails and returns an error.
     * @server_default 30s
     */
    master_timeout?: Duration
  }
}
