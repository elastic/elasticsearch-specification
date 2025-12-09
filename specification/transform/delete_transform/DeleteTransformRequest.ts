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
 * Delete a transform.
 * @rest_spec_name transform.delete_transform
 * @availability stack since=7.5.0 stability=stable
 * @availability serverless stability=stable visibility=public
 * @cluster_privileges manage_transform
 * @doc_id delete-transform
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_transform/{transform_id}'
      methods: ['DELETE']
    }
  ]
  path_parts: {
    /**
     * Identifier for the transform.
     */
    transform_id: Id
  }
  response_media_type: MediaType.Json
  query_parameters: {
    /**
     * If this value is false, the transform must be stopped before it can be deleted. If true, the transform is
     * deleted regardless of its current state.
     * @server_default false
     */
    force?: boolean
    /**
     * If this value is true, the destination index is deleted together with the transform. If false, the destination
     * index will not be deleted
     * @server_default false
     */
    delete_dest_index?: boolean
    /**
     * Period to wait for a response. If no response is received before the timeout expires, the request fails and returns an error.
     * @server_default 30s
     */
    timeout?: Duration
  }
}
