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

/**
 * Get the rollup job capabilities.
 * Get the capabilities of any rollup jobs that have been configured for a specific index or index pattern.
 *
 * This API is useful because a rollup job is often configured to rollup only a subset of fields from the source index.
 * Furthermore, only certain aggregations can be configured for various fields, leading to a limited subset of functionality depending on that configuration.
 * This API enables you to inspect an index and determine:
 *
 * 1. Does this index have associated rollup data somewhere in the cluster?
 * 2. If yes to the first question, what fields were rolled up, what aggregations can be performed, and where does the data live?
 * @rest_spec_name rollup.get_rollup_caps
 * @availability stack since=6.3.0 stability=experimental
 * @cluster_privileges monitor_rollup
 * @deprecated 8.11.0
 * @doc_id rollup-get-rollup-caps
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_rollup/data/{id}'
      methods: ['GET']
    },
    {
      path: '/_rollup/data'
      methods: ['GET']
    }
  ]
  path_parts: {
    /**
     * Index, indices or index-pattern to return rollup capabilities for.
     * `_all` may be used to fetch rollup capabilities from all jobs.
     */
    id?: Id
  }
  response_media_type: MediaType.Json
}
