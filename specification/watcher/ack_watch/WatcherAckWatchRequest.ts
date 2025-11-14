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
import { Name, Names } from '@_types/common'

/**
 * Acknowledge a watch.
 *
 * Acknowledging a watch enables you to manually throttle the execution of the watch's actions.
 *
 * The acknowledgement state of an action is stored in the `status.actions.<id>.ack.state` structure.
 *
 * IMPORTANT: If the specified watch is currently being executed, this API will return an error
 * The reason for this behavior is to prevent overwriting the watch status from a watch execution.
 *
 * Acknowledging an action throttles further executions of that action until its `ack.state` is reset to `awaits_successful_execution`.
 * This happens when the condition of the watch is not met (the condition evaluates to false).
 * To demonstrate how throttling works in practice and how it can be configured for individual actions within a watch, refer to External documentation.
 * @rest_spec_name watcher.ack_watch
 * @availability stack stability=stable
 * @cluster_privileges manage_watcher
 * @doc_id watcher-api-ack-watch
 * @ext_doc_id ack-watch
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_watcher/watch/{watch_id}/_ack'
      methods: ['PUT', 'POST']
    },
    {
      path: '/_watcher/watch/{watch_id}/_ack/{action_id}'
      methods: ['PUT', 'POST']
    }
  ]
  path_parts: {
    /**
     * The watch identifier.
     */
    watch_id: Name
    /**
     * A comma-separated list of the action identifiers to acknowledge.
     * If you omit this parameter, all of the actions of the watch are acknowledged.
     */
    action_id?: Names
  }
}
