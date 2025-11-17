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
import { Id } from '@_types/common'
import { Duration } from '@_types/Time'
import {
  Destination,
  Latest,
  Pivot,
  RetentionPolicyContainer,
  Settings,
  Source,
  SyncContainer
} from '@transform/_types/Transform'

/**
 * Preview a transform.
 *
 * Generates a preview of the results that you will get when you create a transform with the same configuration.
 *
 * It returns a maximum of 100 results. The calculations are based on all the current data in the source index. It also
 * generates a list of mappings and settings for the destination index. These values are determined based on the field
 * types of the source index and the transform aggregations.
 * @rest_spec_name transform.preview_transform
 * @availability stack since=7.2.0 stability=stable
 * @availability serverless stability=stable visibility=public
 * @cluster_privileges manage_transform
 * @index_privileges read, view_index_metadata
 * @doc_id preview-transform
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_transform/{transform_id}/_preview'
      methods: ['GET', 'POST']
    },
    {
      path: '/_transform/_preview'
      methods: ['GET', 'POST']
    }
  ]
  path_parts: {
    /**
     * Identifier for the transform to preview. If you specify this path parameter, you cannot provide transform
     * configuration details in the request body.
     */
    transform_id?: Id
  }
  query_parameters: {
    /**
     * Period to wait for a response. If no response is received before the
     * timeout expires, the request fails and returns an error.
     * @server_default 30s
     */
    timeout?: Duration
  }
  body?: {
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
     * The pivot method transforms the data by aggregating and grouping it.
     * These objects define the group by fields and the aggregation to reduce
     * the data.
     */
    pivot?: Pivot
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
    retention_policy?: RetentionPolicyContainer
    /**
     * The latest method transforms the data by finding the latest document for
     * each unique key.
     */
    latest?: Latest
  }
}
