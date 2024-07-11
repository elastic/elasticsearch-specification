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

import { Dictionary } from '@spec_utils/Dictionary'
import { UserDefinedValue } from '@spec_utils/UserDefinedValue'
import { ActionExecutionMode, SimulatedActions } from '@watcher/_types/Action'
import { ScheduleTriggerEvent } from '@watcher/_types/Schedule'
import { Watch } from '@watcher/_types/Watch'
import { RequestBase } from '@_types/Base'
import { Id } from '@_types/common'

/**
 * This API can be used to force execution of the watch outside of its triggering logic or to simulate the watch execution for debugging purposes.
 * For testing and debugging purposes, you also have fine-grained control on how the watch runs. You can execute the watch without executing all of its actions or alternatively by simulating them. You can also force execution by ignoring the watch condition and control whether a watch record would be written to the watch history after execution.
 * @rest_spec_name watcher.execute_watch
 * @availability stack stability=stable
 * @cluster_privileges manage_watcher
 */
export interface Request extends RequestBase {
  path_parts: {
    /**
     * Identifier for the watch.
     */
    id?: Id
  }
  query_parameters: {
    /**
     * Defines whether the watch runs in debug mode.
     * @server_default false
     */
    debug?: boolean
  }
  body: {
    /**
     * Determines how to handle the watch actions as part of the watch execution.
     */
    action_modes?: Dictionary<string, ActionExecutionMode>
    /**
     * When present, the watch uses this object as a payload instead of executing its own input.
     */
    alternative_input?: Dictionary<string, UserDefinedValue>
    /**
     * When set to `true`, the watch execution uses the always condition. This can also be specified as an HTTP parameter.
     * @server_default false
     */
    ignore_condition?: boolean
    /**
     * When set to `true`, the watch record representing the watch execution result is persisted to the `.watcher-history` index for the current time. In addition, the status of the watch is updated, possibly throttling subsequent executions. This can also be specified as an HTTP parameter.
     * @server_default false
     */
    record_execution?: boolean
    simulated_actions?: SimulatedActions
    /**
     * This structure is parsed as the data of the trigger event that will be used during the watch execution
     */
    trigger_data?: ScheduleTriggerEvent
    /**
     * When present, this watch is used instead of the one specified in the request. This watch is not persisted to the index and record_execution cannot be set.
     * @server_default null
     */
    watch?: Watch
  }
}
