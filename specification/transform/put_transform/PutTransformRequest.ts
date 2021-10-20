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

import { Destination, Source } from '@global/reindex/types'
import {
  Latest,
  Pivot,
  RetentionPolicyContainer,
  Settings,
  SyncContainer
} from '@transform/_types/Transform'
import { RequestBase } from '@_types/Base'
import { Id } from '@_types/common'
import { Time } from '@_types/Time'

/**
 * @rest_spec_name transform.put_transform
 * @since 7.2.0
 * @stability stable
 */
export interface Request extends RequestBase {
  path_parts: {
    /** Identifier for the transform. This identifier can contain lowercase alphanumeric characters (a-z and 0-9), hyphens, and underscores. It must start and end with alphanumeric characters. */
    transform_id: Id
  }
  query_parameters: {
    /** When true, deferrable validations are not run. This behavior may be desired if the source index does not exist until after the transform is created. */
    defer_validation?: boolean
  }
  body: {
    /** The destination for the transform. */
    dest: Destination
    /** Free text description of the transform. */
    description?: string
    /**
     * The interval between checks for changes in the source indices when the transform is running continuously. Also determines the retry interval in the event of transient failures while the transform is searching or indexing. The minimum value is 1s and the maximum is 1h.
     * @server_default 1m
     */
    frequency?: Time
    /** The pivot method transforms the data by aggregating and grouping it. These objects define the group by fields and the aggregation to reduce the data. */
    pivot?: Pivot
    /** The source of the data for the transform. */
    source: Source
    /** Defines optional transform settings. */
    settings?: Settings
    /**  Defines the properties transforms require to run continuously. */
    sync?: SyncContainer
    /** Defines a retention policy for the transform. Data that meets the defined criteria is deleted from the destination index. */
    retention_policy?: RetentionPolicyContainer
    /**  The latest method transforms the data by finding the latest document for each unique key. */
    latest?: Latest
  }
}
