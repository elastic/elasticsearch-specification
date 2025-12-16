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
import { MediaType } from '@_types/common'

/**
 * Get data stream lifecycle stats.
 *
 * Get statistics about the data streams that are managed by a data stream lifecycle.
 * @rest_spec_name indices.get_data_lifecycle_stats
 * @availability stack since=8.12.0 stability=stable
 * @cluster_privileges monitor
 * @doc_tag data stream
 * @doc_id data-stream-lifecycle-stats
 * @ext_doc_id data-stream-lifecycle
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_lifecycle/stats'
      methods: ['GET']
    }
  ]
  response_media_type: MediaType.Json
}
