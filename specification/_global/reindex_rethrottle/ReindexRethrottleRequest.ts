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
import { float } from '@_types/Numeric'
import { GroupBy } from '@tasks/_types/GroupBy'

/**
 * Throttle a reindex operation.
 *
 * Change the maximum number of documents to ingest per second for a particular reindex operation.
 * For example, to unthrottle to unlimited documents per second:
 *
 * ```
 * POST _reindex/r1A2WoRbTwKZ516z6NEs5A:36619/_rethrottle?requests_per_second=-1
 * ```
 *
 * Rethrottling that speeds up the query takes effect immediately.
 * Rethrottling that slows down the query will take effect after completing the current batch of documents.
 * This behavior prevents scroll timeouts.
 *
 * This API follows reindex tasks across node-shutdown relocations, so callers can keep using
 * the original task ID throughout the lifetime of the operation.
 * The relocated task ID is also accepted and is followed transparently.
 * In either case, returned task IDs and timings reflect the original task, not its relocated successor.
 *
 * The API only returns `200 OK` (outside of network errors or responses returned by integrations
 * sitting between the client and Elasticsearch). The rethrottle may not have been applied to any
 * tasks if either `node_failures` or `task_failures` is non-empty, or if the response contains
 * no successfully rethrottled tasks — that is, no entries under `nodes` (returned with the default
 * `group_by=nodes` in stateful) or under `tasks` (returned in serverless, or in stateful with
 * `group_by=none` or `group_by=parents`).
 * @rest_spec_name reindex_rethrottle
 * @availability stack since=2.4.0 stability=stable
 * @availability serverless stability=stable visibility=public
 * @doc_tag document
 * @doc_id docs-reindex
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_reindex/{task_id}/_rethrottle'
      methods: ['POST']
    }
  ]
  path_parts: {
    /**
     * The task identifier, returned when creating a reindex task, or by listing tasks via
     * `GET /_reindex` or `GET /_tasks`.
     * In stateful, can be either the original task ID or the task ID of the relocated task.
     */
    task_id: Id
  }
  response_media_type: MediaType.Json
  query_parameters: {
    /**
     * The maximum number of documents to ingest per second, across the entire reindex operation (including slices).
     * It can be either `-1` to turn off throttling or any decimal number like `1.7` or `12` to throttle to that level.
     */
    requests_per_second: float
    /**
     * The way to group the tasks in the response.
     * @server_default nodes
     * @availability stack stability=stable
     */
    group_by?: GroupBy
  }
}
