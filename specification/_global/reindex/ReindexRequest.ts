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
import { Conflicts, Slices, WaitForActiveShards } from '@_types/common'
import { float, integer, long } from '@_types/Numeric'
import { Script } from '@_types/Scripting'
import { Duration } from '@_types/Time'
import { Destination, Source } from './types'

/**
 * Reindex documents.
 *
 * Copy documents from a source to a destination.
 * You can copy all documents to the destination index or reindex a subset of the documents.
 * The source can be any existing index, alias, or data stream.
 * The destination must differ from the source.
 * For example, you cannot reindex a data stream into itself.
 *
 * IMPORTANT: Reindex requires `_source` to be enabled for all documents in the source.
 * The destination should be configured as wanted before calling the reindex API.
 * Reindex does not copy the settings from the source or its associated template.
 * Mappings, shard counts, and replicas, for example, must be configured ahead of time.
 *
 * If the Elasticsearch security features are enabled, you must have the following security privileges:
 *
 * * The `read` index privilege for the source data stream, index, or alias.
 * * The `write` index privilege for the destination data stream, index, or index alias.
 * * To automatically create a data stream or index with a reindex API request, you must have the `auto_configure`, `create_index`, or `manage` index privilege for the destination data stream, index, or alias.
 * * If reindexing from a remote cluster, the `source.remote.user` must have the `monitor` cluster privilege and the `read` index privilege for the source data stream, index, or alias.
 *
 * If reindexing from a remote cluster, you must explicitly allow the remote host in the `reindex.remote.whitelist` setting.
 * Automatic data stream creation requires a matching index template with data stream enabled.
 *
 * The `dest` element can be configured like the index API to control optimistic concurrency control.
 * Omitting `version_type` or setting it to `internal` causes Elasticsearch to blindly dump documents into the destination, overwriting any that happen to have the same ID.
 *
 * Setting `version_type` to `external` causes Elasticsearch to preserve the `version` from the source, create any documents that are missing, and update any documents that have an older version in the destination than they do in the source.
 *
 * Setting `op_type` to `create` causes the reindex API to create only missing documents in the destination.
 * All existing documents will cause a version conflict.
 *
 * IMPORTANT: Because data streams are append-only, any reindex request to a destination data stream must have an `op_type` of `create`.
 * A reindex can only add new documents to a destination data stream.
 * It cannot update existing documents in a destination data stream.
 *
 * By default, version conflicts abort the reindex process.
 * To continue reindexing if there are conflicts, set the `conflicts` request body property to `proceed`.
 * In this case, the response includes a count of the version conflicts that were encountered.
 * Note that the handling of other error types is unaffected by the `conflicts` property.
 * Additionally, if you opt to count version conflicts, the operation could attempt to reindex more documents from the source than `max_docs` until it has successfully indexed `max_docs` documents into the target or it has gone through every document in the source query.
 *
 * It's recommended to reindex on indices with a green status. Reindexing can fail when a node shuts down or crashes.
 * * When requested with `wait_for_completion=true` (default), the request fails if the node shuts down.
 * * When requested with `wait_for_completion=false`, a task id is returned, which can be used via the task management API to monitor, debug, or cancel the task. The task may disappear or fail if the node shuts down.
 * When retrying a failed reindex operation, it might be necessary to set `conflicts=proceed` or to first delete the partial destination index.
 * Additionally, dry runs, checking disk space, and fetching index recovery information can help address the root cause.
 *
 * Refer to the linked documentation for examples of how to reindex documents.
 * @rest_spec_name reindex
 * @availability stack since=2.3.0 stability=stable
 * @availability serverless stability=stable visibility=public
 * @index_privileges read, write
 * @doc_tag document
 * @ext_doc_id reindex-indices
 * @doc_id docs-reindex
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_reindex'
      methods: ['POST']
    }
  ]
  query_parameters: {
    /**
     * If `true`, the request refreshes affected shards to make this operation visible to search.
     * @server_default false
     */
    refresh?: boolean
    /**
     * The throttle for this request in sub-requests per second.
     * By default, there is no throttle.
     * @server_default -1
     */
    requests_per_second?: float
    /**
     * The period of time that a consistent view of the index should be maintained for scrolled search.
     */
    scroll?: Duration
    /**
     * The number of slices this task should be divided into.
     * It defaults to one slice, which means the task isn't sliced into subtasks.
     *
     * Reindex supports sliced scroll to parallelize the reindexing process.
     * This parallelization can improve efficiency and provide a convenient way to break the request down into smaller parts.
     *
     * NOTE: Reindexing from remote clusters does not support manual or automatic slicing.
     *
     * If set to `auto`, Elasticsearch chooses the number of slices to use.
     * This setting will use one slice per shard, up to a certain limit.
     * If there are multiple sources, it will choose the number of slices based on the index or backing index with the smallest number of shards.
     * @server_default 1
     * @ext_doc_id slice-scroll
     */
    slices?: Slices
    /**
     * The maximum number of documents to reindex.
     * By default, all documents are reindexed.
     * If it is a value less then or equal to `scroll_size`, a scroll will not be used to retrieve the results for the operation.
     *
     * If `conflicts` is set to `proceed`, the reindex operation could attempt to reindex more documents from the source than `max_docs` until it has successfully indexed `max_docs` documents into the target or it has gone through every document in the source query.
     */
    max_docs?: integer
    /**
     * The period each indexing waits for automatic index creation, dynamic mapping updates, and waiting for active shards.
     * By default, Elasticsearch waits for at least one minute before failing.
     * The actual wait time could be longer, particularly when multiple waits occur.
     * @server_default 1m
     */
    timeout?: Duration
    /**
     * The number of shard copies that must be active before proceeding with the operation.
     * Set it to `all` or any positive integer up to the total number of shards in the index (`number_of_replicas+1`).
     * The default value is one, which means it waits for each primary shard to be active.
     * @server_default 1
     */
    wait_for_active_shards?: WaitForActiveShards
    /**
     * If `true`, the request blocks until the operation is complete.
     * @server_default true
     */
    wait_for_completion?: boolean
    /**
     * If `true`, the destination must be an index alias.
     * @server_default false
     */
    require_alias?: boolean
  }
  body: {
    /**
     * Indicates whether to continue reindexing even when there are conflicts.
     * @server_default abort
     */
    conflicts?: Conflicts
    /**
     * The destination you are copying to.
     */
    dest: Destination
    /**
     * The maximum number of documents to reindex.
     * By default, all documents are reindexed.
     * If it is a value less then or equal to `scroll_size`, a scroll will not be used to retrieve the results for the operation.
     *
     * If `conflicts` is set to `proceed`, the reindex operation could attempt to reindex more documents from the source than `max_docs` until it has successfully indexed `max_docs` documents into the target or it has gone through every document in the source query.
     */
    max_docs?: long
    /**
     * The script to run to update the document source or metadata when reindexing.
     */
    script?: Script
    size?: long
    /**
     * The source you are copying from.
     */
    source: Source
  }
}
