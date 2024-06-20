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

import { Configuration, Retention } from '@slm/_types/SnapshotLifecycle'
import { CronExpression } from '@watcher/_types/Schedule'
import { RequestBase } from '@_types/Base'
import { Name } from '@_types/common'
import { Duration } from '@_types/Time'

/**
 * @rest_spec_name slm.put_lifecycle
 * @availability stack since=7.4.0 stability=stable
 * @availability serverless stability=stable visibility=private
 */
export interface Request extends RequestBase {
  path_parts: {
    /**
     * ID for the snapshot lifecycle policy you want to create or update.
     */
    policy_id: Name
  }
  query_parameters: {
    /**
     * Period to wait for a connection to the master node. If no response is received before the timeout expires, the request fails and returns an error.
     * @server_default 30s
     */
    master_timeout?: Duration
    /**
     * Period to wait for a response. If no response is received before the timeout expires, the request fails and returns an error.
     * @server_default 30s
     */
    timeout?: Duration
  }
  body: {
    /**
     * Configuration for each snapshot created by the policy.
     */
    config?: Configuration
    /**
     * Name automatically assigned to each snapshot created by the policy. Date math is supported. To prevent conflicting snapshot names, a UUID is automatically appended to each snapshot name.
     */
    name?: Name
    /**
     * Repository used to store snapshots created by this policy. This repository must exist prior to the policy’s creation. You can create a repository using the snapshot repository API.
     */
    repository?: string
    /**
     * Retention rules used to retain and delete snapshots created by the policy.
     */
    retention?: Retention
    /**
     * Periodic or absolute schedule at which the policy creates snapshots. SLM applies schedule changes immediately.
     */
    schedule?: CronExpression
  }
}
