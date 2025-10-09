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
import { Uuid } from '@_types/common'
import { Duration } from '@_types/Time'

/**
 * Import a dangling index.
 *
 * If Elasticsearch encounters index data that is absent from the current cluster state, those indices are considered to be dangling.
 * For example, this can happen if you delete more than `cluster.indices.tombstones.size` indices while an Elasticsearch node is offline.
 * @rest_spec_name dangling_indices.import_dangling_index
 * @availability stack since=7.9.0 stability=stable
 * @doc_tag indices
 * @doc_id dangling-index-import
 * @cluster_privileges manage
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_dangling/{index_uuid}'
      methods: ['POST']
    }
  ]
  path_parts: {
    /**
     * The UUID of the index to import. Use the get dangling indices API to locate the UUID.
     */
    index_uuid: Uuid
  }
  query_parameters: {
    /**
     * This parameter must be set to true to import a dangling index.
     * Because Elasticsearch cannot know where the dangling index data came from or determine which shard copies are fresh and which are stale, it cannot guarantee that the imported data represents the latest state of the index when it was last in the cluster.
     */
    accept_data_loss: boolean
    /**
     * @server_default 30s
     */
    master_timeout?: Duration
    timeout?: Duration
  }
}
