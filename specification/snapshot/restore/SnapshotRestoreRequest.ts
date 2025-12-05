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
import { Indices, MediaType, Name } from '@_types/common'
import { Duration } from '@_types/Time'
import { IndexSettings } from '@indices/_types/IndexSettings'

/**
 * Restore a snapshot.
 *
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
 * @availability stack stability=stable
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
    /**
     * The name of the repository to restore a snapshot from.
     */
    repository: Name
    /**
     * The name of the snapshot to restore.
     */
    snapshot: Name
  }
  request_media_type: MediaType.Json
  response_media_type: MediaType.Json
  query_parameters: {
    /**
     * The period to wait for the master node.
     * If the master node is not available before the timeout expires, the request fails and returns an error.
     * To indicate that the request should never timeout, set it to `-1`.
     * @server_default 30s
     */
    master_timeout?: Duration
    /**
     * If `true`, the request returns a response when the restore operation completes.
     * The operation is complete when it finishes all attempts to recover primary shards for restored indices.
     * This applies even if one or more of the recovery attempts fail.
     *
     * If `false`, the request returns a response when the restore operation initializes.
     * @server_default false
     */
    wait_for_completion?: boolean
  }
  body?: {
    /**
     * The feature states to restore.
     * If `include_global_state` is `true`, the request restores all feature states in the snapshot by default.
     * If `include_global_state` is `false`, the request restores no feature states by default.
     * Note that specifying an empty array will result in the default behavior.
     * To restore no feature states, regardless of the `include_global_state` value, specify an array containing only the value `none` (`["none"]`).
     * @ext_doc_id snapshot-restore-feature-state
     */
    feature_states?: string[]
    /**
     * The index settings to not restore from the snapshot.
     * You can't use this option to ignore `index.number_of_shards`.
     *
     * For data streams, this option applies only to restored backing indices.
     * New backing indices are configured using the data stream's matching index template.
     */
    ignore_index_settings?: string[]
    /**
     * If `true`, the request ignores any index or data stream in indices that's missing from the snapshot.
     * If `false`, the request returns an error for any missing index or data stream.
     * @server_default false
     */
    ignore_unavailable?: boolean
    /**
     * If `true`, the request restores aliases for any restored data streams and indices.
     * If `false`, the request doesn’t restore aliases.
     * @server_default true
     */
    include_aliases?: boolean
    /**
     * If `true`, restore the cluster state. The cluster state includes:
     *
     * * Persistent cluster settings
     * * Index templates
     * * Legacy index templates
     * * Ingest pipelines
     * * Index lifecycle management (ILM) policies
     * * Stored scripts
     * * For snapshots taken after 7.12.0, feature states
     *
     * If `include_global_state` is `true`, the restore operation merges the legacy index templates in your cluster with the templates contained in the snapshot, replacing any existing ones whose name matches one in the snapshot.
     * It completely removes all persistent settings, non-legacy index templates, ingest pipelines, and ILM lifecycle policies that exist in your cluster and replaces them with the corresponding items from the snapshot.
     *
     * Use the `feature_states` parameter to configure how feature states are restored.
     *
     * If `include_global_state` is `true` and a snapshot was created without a global state then the restore request will fail.
     * @server_default false
     */
    include_global_state?: boolean
    /**
     * Index settings to add or change in restored indices, including backing indices.
     * You can't use this option to change `index.number_of_shards`.
     *
     * For data streams, this option applies only to restored backing indices.
     * New backing indices are configured using the data stream's matching index template.
     */
    index_settings?: IndexSettings
    /**
     * A comma-separated list of indices and data streams to restore.
     * It supports a multi-target syntax.
     * The default behavior is all regular indices and regular data streams in the snapshot.
     *
     * You can't use this parameter to restore system indices or system data streams.
     * Use `feature_states` instead.
     */
    indices?: Indices
    /**
     * If `false`, the entire restore operation will fail if one or more indices included in the snapshot do not have all primary shards available.
     *
     * If true, it allows restoring a partial snapshot of indices with unavailable shards.
     * Only shards that were successfully included in the snapshot will be restored.
     * All missing shards will be recreated as empty.
     * @server_default false
     */
    partial?: boolean
    /**
     * A rename pattern to apply to restored data streams and indices.
     * Data streams and indices matching the rename pattern will be renamed according to `rename_replacement`.
     *
     * The rename pattern is applied as defined by the regular expression that supports referencing the original text, according to the `appendReplacement` logic.
     * @ext_doc_id snapshot-restore-amend-replacement
     */
    rename_pattern?: string
    /**
     * The rename replacement string that is used with the `rename_pattern`.
     */
    rename_replacement?: string
  }
}
