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
import { Indices, MediaType } from '@_types/common'
import { StatsLevel } from '../_types/stats'

/**
 * Get searchable snapshot statistics.
 *
 * @rest_spec_name searchable_snapshots.stats
 * @availability stack since=7.10.0 stability=stable
 * @cluster_privileges manage
 * @index_privileges manage
 * @doc_id searchable-snapshots-api-stats
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_searchable_snapshots/stats'
      methods: ['GET']
    },
    {
      path: '/{index}/_searchable_snapshots/stats'
      methods: ['GET']
    }
  ]
  path_parts: {
    /**
     * A comma-separated list of data streams and indices to retrieve statistics for.
     */
    index?: Indices
  }
  response_media_type: MediaType.Json
  query_parameters: {
    /**
     * Return stats aggregated at cluster, index or shard level
     * @server_default indices
     */
    level?: StatsLevel
  }
}
