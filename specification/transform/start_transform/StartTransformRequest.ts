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
 * Start a transform.
 *
 * When you start a transform, it creates the destination index if it does not already exist. The `number_of_shards` is
 * set to `1` and the `auto_expand_replicas` is set to `0-1`. If it is a pivot transform, it deduces the mapping
 * definitions for the destination index from the source indices and the transform aggregations. If fields in the
 * destination index are derived from scripts (as in the case of `scripted_metric` or `bucket_script` aggregations),
 * the transform uses dynamic mappings unless an index template exists. If it is a latest transform, it does not deduce
 * mapping definitions; it uses dynamic mappings. To use explicit mappings, create the destination index before you
 * start the transform. Alternatively, you can create an index template, though it does not affect the deduced mappings
 * in a pivot transform.
 *
 * When the transform starts, a series of validations occur to ensure its success. If you deferred validation when you
 * created the transform, they occur when you start the transform—​with the exception of privilege checks. When
 * Elasticsearch security features are enabled, the transform remembers which roles the user that created it had at the
 * time of creation and uses those same roles. If those roles do not have the required privileges on the source and
 * destination indices, the transform fails when it attempts unauthorized operations.
 * @rest_spec_name transform.start_transform
 * @availability stack since=7.5.0 stability=stable
 * @availability serverless stability=stable visibility=public
 * @cluster_privileges manage_transform
 * @index_privileges read, view_index_metadata
 * @doc_id start-transform
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_transform/{transform_id}/_start'
      methods: ['POST']
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
     * Period to wait for a response. If no response is received before the timeout expires, the request fails and returns an error.
     * @server_default 30s
     */
    timeout?: Duration
    /**
     * Restricts the set of transformed entities to those changed after this time. Relative times like now-30d are supported. Only applicable for continuous transforms.
     */
    from?: string
  }
}
