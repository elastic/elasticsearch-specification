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
import { Action } from '@watcher/_types/Action'
import { ConditionContainer } from '@watcher/_types/Conditions'
import { InputContainer } from '@watcher/_types/Input'
import { TriggerContainer } from '@watcher/_types/Trigger'
import { RequestBase } from '@_types/Base'
import { Id, Metadata, SequenceNumber, VersionNumber } from '@_types/common'
import { long } from '@_types/Numeric'
import { TransformContainer } from '@_types/Transform'

/**
 * Create or update a watch.
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
 * @availability stack stability=stable
 * @cluster_privileges manage_watcher
 */
export interface Request extends RequestBase {
  path_parts: {
    id: Id
  }
  query_parameters: {
    active?: boolean
    if_primary_term?: long
    if_seq_no?: SequenceNumber
    version?: VersionNumber
  }
  body: {
    actions?: Dictionary<string, Action>
    condition?: ConditionContainer
    input?: InputContainer
    metadata?: Metadata
    throttle_period?: string
    transform?: TransformContainer
    trigger?: TriggerContainer
  }
}
