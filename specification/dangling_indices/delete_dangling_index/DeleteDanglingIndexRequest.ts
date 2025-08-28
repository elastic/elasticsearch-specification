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
 * Delete a dangling index.
 * If Elasticsearch encounters index data that is absent from the current cluster state, those indices are considered to be dangling.
 * For example, this can happen if you delete more than `cluster.indices.tombstones.size` indices while an Elasticsearch node is offline.
 * @rest_spec_name dangling_indices.delete_dangling_index
 * @availability stack since=7.9.0 stability=stable
 * @doc_tag indices
 * @doc_id dangling-index-delete
 * @cluster_privileges manage
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_dangling/{index_uuid}'
      methods: ['DELETE']
    }
  ]
  path_parts: {
    /**
     * The UUID of the index to delete. Use the get dangling indices API to find the UUID.
     */
    index_uuid: Uuid
  }
  query_parameters: {
    /**
     * This parameter must be set to true to acknowledge that it will no longer be possible to recove data from the dangling index.
     */
    accept_data_loss: boolean
    master_timeout?: Duration
    timeout?: Duration
  }
}
