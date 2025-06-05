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
import { Id, Metadata } from '@_types/common'
import { Duration } from '@_types/Time'
import {
  Destination,
  RetentionPolicyContainer,
  Settings,
  Source,
  SyncContainer
} from '@transform/_types/Transform'

/**
 * Update a transform.
 * Updates certain properties of a transform.
 *
 * All updated properties except `description` do not take effect until after the transform starts the next checkpoint,
 * thus there is data consistency in each checkpoint. To use this API, you must have `read` and `view_index_metadata`
 * privileges for the source indices. You must also have `index` and `read` privileges for the destination index. When
 * Elasticsearch security features are enabled, the transform remembers which roles the user who updated it had at the
 * time of update and runs with those privileges.
 * @rest_spec_name transform.update_transform
 * @availability stack since=7.2.0 stability=stable
 * @availability serverless stability=stable visibility=public
 * @cluster_privileges manage_transform
 * @index_privileges read, index, view_index_metadata
 * @doc_id update-transform
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_transform/{transform_id}/_update'
      methods: ['POST']
    }
  ]
  path_parts: {
    /**
     * Identifier for the transform.
     */
    transform_id: Id
  }
  query_parameters: {
    /**
     * When true, deferrable validations are not run. This behavior may be
     * desired if the source index does not exist until after the transform is
     * created.
     */
    defer_validation?: boolean
    /**
     * Period to wait for a response. If no response is received before the
     * timeout expires, the request fails and returns an error.
     * @server_default 30s
     */
    timeout?: Duration
  }
  body: {
    /**
     * The destination for the transform.
     */
    dest?: Destination
    /**
     * Free text description of the transform.
     */
    description?: string
    /**
     * The interval between checks for changes in the source indices when the
     * transform is running continuously. Also determines the retry interval in
     * the event of transient failures while the transform is searching or
     * indexing. The minimum value is 1s and the maximum is 1h.
     * @server_default 1m
     */
    frequency?: Duration
    /**
     * Defines optional transform metadata.
     */
    _meta?: Metadata
    /**
     * The source of the data for the transform.
     */
    source?: Source
    /**
     * Defines optional transform settings.
     */
    settings?: Settings
    /**
     * Defines the properties transforms require to run continuously.
     */
    sync?: SyncContainer
    /**
     * Defines a retention policy for the transform. Data that meets the defined
     * criteria is deleted from the destination index.
     */
    retention_policy?: RetentionPolicyContainer | null
  }
}
