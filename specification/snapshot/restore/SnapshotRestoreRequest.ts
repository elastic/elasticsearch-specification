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
import { Indices, Name } from '@_types/common'
import { Duration } from '@_types/Time'
import { IndexSettings } from '@indices/_types/IndexSettings'

/**
 * Restore a snapshot.
 * Restore a snapshot of a cluster or data streams and indices.
 *
 * You can restore a snapshot only to a running cluster with an elected master node.
 * The snapshot repository must be registered and available to the cluster.
 * The snapshot and cluster versions must be compatible.
 *
 * To restore a snapshot, the cluster's global metadata must be writable. Ensure there are't any cluster blocks that prevent writes. The restore operation ignores index blocks.
 *
 * Before you restore a data stream, ensure the cluster contains a matching index template with data streams enabled. To check, use the index management feature in Kibana or the get index template API:
 *
 * ```
 * GET _index_template/*?filter_path=index_templates.name,index_templates.index_template.index_patterns,index_templates.index_template.data_stream
 * ```
 *
 * If no such template exists, you can create one or restore a cluster state that contains one. Without a matching index template, a data stream can't roll over or create backing indices.
 *
 * If your snapshot contains data from App Search or Workplace Search, you must restore the Enterprise Search encryption key before you restore the snapshot.
 * @rest_spec_name snapshot.restore
 * @availability stack since=0.0.0 stability=stable
 * @availability serverless stability=stable visibility=private
 * @cluster_privileges manage
 * @doc_id snapshot-restore-api
 * @ext_doc_id restore-snapshot
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_snapshot/{repository}/{snapshot}/_restore'
      methods: ['POST']
    }
  ]
  path_parts: {
    repository: Name
    snapshot: Name
  }
  query_parameters: {
    master_timeout?: Duration
    wait_for_completion?: boolean
  }
  body: {
    feature_states?: string[]
    ignore_index_settings?: string[]
    ignore_unavailable?: boolean
    include_aliases?: boolean
    include_global_state?: boolean
    index_settings?: IndexSettings
    indices?: Indices
    partial?: boolean
    rename_pattern?: string
    rename_replacement?: string
  }
}
