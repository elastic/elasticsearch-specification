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
import { Ids } from '@_types/common'

/**
 * Get the rollup index capabilities.
 *
 * Get the rollup capabilities of all jobs inside of a rollup index.
 * A single rollup index may store the data for multiple rollup jobs and may have a variety of capabilities depending on those jobs. This API enables you to determine:
 *
 * * What jobs are stored in an index (or indices specified via a pattern)?
 * * What target indices were rolled up, what fields were used in those rollups, and what aggregations can be performed on each job?
 * @rest_spec_name rollup.get_rollup_index_caps
 * @availability stack since=6.4.0 stability=experimental
 * @index_privileges read
 * @deprecated 8.11.0
 * @doc_id rollup-get-rollup-index-caps
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/{index}/_rollup/data'
      methods: ['GET']
    }
  ]
  path_parts: {
    /**
     * Data stream or index to check for rollup capabilities.
     * Wildcard (`*`) expressions are supported.
     */
    index: Ids
  }
}
