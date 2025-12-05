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
import { Id, MediaType } from '@_types/common'
import { Duration } from '@_types/Time'

/**
 * Reset a transform.
 *
 * Before you can reset it, you must stop it; alternatively, use the `force` query parameter.
 * If the destination index was created by the transform, it is deleted.
 * @rest_spec_name transform.reset_transform
 * @availability stack since=8.1.0 stability=stable
 * @availability serverless stability=stable visibility=public
 * @cluster_privileges manage_transform
 * @doc_id reset-transform
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_transform/{transform_id}/_reset'
      methods: ['POST']
    }
  ]
  path_parts: {
    /**
     * Identifier for the transform. This identifier can contain lowercase alphanumeric characters (a-z and 0-9),
     * hyphens, and underscores. It has a 64 character limit and must start and end with alphanumeric characters.
     */
    transform_id: Id
  }
  response_media_type: MediaType.Json
  query_parameters: {
    /**
     * If this value is `true`, the transform is reset regardless of its current state. If it's `false`, the transform
     * must be stopped before it can be reset.
     * @server_default false
     */
    force?: boolean
    /**
     * Period to wait for a response. If no response is received before the timeout expires, the request fails and returns an error.
     * @server_default 30s
     */
    timeout?: Duration
  }
}
