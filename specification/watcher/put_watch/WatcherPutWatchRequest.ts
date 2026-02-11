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
import {
  Id,
  MediaType,
  Metadata,
  SequenceNumber,
  VersionNumber
} from '@_types/common'
import { long } from '@_types/Numeric'
import { Duration, DurationValue, UnitMillis } from '@_types/Time'
import { TransformContainer } from '@_types/Transform'
import { Dictionary } from '@spec_utils/Dictionary'
import { Action } from '@watcher/_types/Action'
import { ConditionContainer } from '@watcher/_types/Conditions'
import { InputContainer } from '@watcher/_types/Input'
import { TriggerContainer } from '@watcher/_types/Trigger'

/**
 * Create or update a watch.
 *
 * When a watch is registered, a new document that represents the watch is added to the `.watches` index and its trigger is immediately registered with the relevant trigger engine.
 * Typically for the `schedule` trigger, the scheduler is the trigger engine.
 *
 * IMPORTANT: You must use Kibana or this API to create a watch.
 * Do not add a watch directly to the `.watches` index by using the Elasticsearch index API.
 * If Elasticsearch security features are enabled, do not give users write privileges on the `.watches` index.
 *
 * When you add a watch you can also define its initial active state by setting the *active* parameter.
 *
 * When Elasticsearch security features are enabled, your watch can index or search only on indices for which the user that stored the watch has privileges.
 * If the user is able to read index `a`, but not index `b`, the same will apply when the watch runs.
 * @rest_spec_name watcher.put_watch
 * @category info
 * @availability stack stability=stable
 * @cluster_privileges manage_watcher
 * @doc_id watcher-api-put-watch
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_watcher/watch/{id}'
      methods: ['PUT', 'POST']
    }
  ]
  path_parts: {
    /**
     * The identifier for the watch.
     */
    id: Id
  }
  request_media_type: MediaType.Json
  response_media_type: MediaType.Json
  query_parameters: {
    /**
     * The initial state of the watch.
     * The default value is `true`, which means the watch is active by default.
     * @server_default true
     */
    active?: boolean
    /**
     * Only update the watch if the last operation that has changed the watch has the specified primary term
     */
    if_primary_term?: long
    /** Only update the watch if the last operation that has changed the watch has the specified sequence number */
    if_seq_no?: SequenceNumber
    /** Explicit version number for concurrency control */
    version?: VersionNumber
  }
  body: {
    /**
     * The list of actions that will be run if the condition matches.
     */
    actions?: Dictionary<string, Action>
    /**
     * The condition that defines if the actions should be run.
     */
    condition?: ConditionContainer
    /**
     * The input that defines the input that loads the data for the watch.
     */
    input?: InputContainer
    /**
     * Metadata JSON that will be copied into the history entries.
     */
    metadata?: Metadata
    /**
     * The minimum time between actions being run.
     * The default is 5 seconds.
     * This default can be changed in the config file with the setting `xpack.watcher.throttle.period.default_period`.
     * If both this value and the `throttle_period_in_millis` parameter are specified, Watcher uses the last parameter included in the request.
     */
    throttle_period?: Duration
    /**
     * Minimum time in milliseconds between actions being run. Defaults to 5000. If both this value and the throttle_period parameter are specified, Watcher uses the last parameter included in the request.
     */
    throttle_period_in_millis?: DurationValue<UnitMillis>
    /**
     * The transform that processes the watch payload to prepare it for the watch actions.
     */
    transform?: TransformContainer
    /**
     * The trigger that defines when the watch should run.
     */
    trigger?: TriggerContainer
  }
}
