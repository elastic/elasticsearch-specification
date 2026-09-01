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
import { MediaType, Name } from '@_types/common'
import { Duration } from '@_types/Time'

/**
 * Stop transforms.
 *
 * Stops one or more transforms.
 * @rest_spec_name transform.stop_transform
 * @availability stack since=7.5.0 stability=stable
 * @availability serverless stability=stable visibility=public
 * @cluster_privileges manage_transform
 * @doc_id stop-transform
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_transform/{transform_id}/_stop'
      methods: ['POST']
    }
  ]
  path_parts: {
    /**
     * Identifier for the transform. To stop multiple transforms, use a comma-separated list or a wildcard expression.
     * To stop all transforms, use `_all` or `*` as the identifier.
     */
    transform_id: Name
  }
  response_media_type: MediaType.Json
  query_parameters: {
    /**
     * Specifies what to do when the request: contains wildcard expressions and there are no transforms that match;
     * contains the `_all` string or no identifiers and there are no matches; contains wildcard expressions and there
     * are only partial matches.
     *
     * If it is true, the API returns a successful acknowledgement message when there are no matches. When there are
     * only partial matches, the API stops the appropriate transforms.
     *
     * If it is false, the request returns a 404 status code when there are no matches or only partial matches.
     * @server_default true
     */
    allow_no_match?: boolean
    /**
     * If it is true, the API forcefully stops the transforms.
     * @server_default false
     */
    force?: boolean
    /**
     * Period to wait for a response when `wait_for_completion` is `true`. If no response is received before the
     * timeout expires, the request returns a timeout exception. However, the request continues processing and
     * eventually moves the transform to a STOPPED state.
     * @server_default 30s */
    timeout?: Duration
    /**
     * If it is true, the transform does not completely stop until the current checkpoint is completed. If it is false,
     * the transform stops as soon as possible.
     * @server_default false
     */
    wait_for_checkpoint?: boolean
    /**
     * If it is true, the API blocks until the indexer state completely stops. If it is false, the API returns
     * immediately and the indexer is stopped asynchronously in the background.
     * @server_default false
     */
    wait_for_completion?: boolean
  }
}
