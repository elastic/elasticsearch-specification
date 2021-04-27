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

import { TransformDestination } from '@transform/_types/TransformDestination'
import { TransformLatest } from '@transform/_types/TransformLatest'
import { TransformPivot } from '@transform/_types/TransformPivot'
import { TransformRetentionPolicyContainer } from '@transform/_types/TransformRetentionPolicy'
import { TransformSettings } from '@transform/_types/TransformSettings'
import { TransformSource } from '@transform/_types/TransformSource'
import { TransformSyncContainer } from '@transform/_types/TransformSyncContainer'
import { RequestBase } from '@_types/Base'
import { Time } from '@_types/Time'

/**
 * @rest_spec_name transform.preview_transform
 * @since 7.2.0
 * @stability TODO
 */
export interface PreviewTransformRequest extends RequestBase {
  body?: {
    /** The destination for the transform. */
    dest?: TransformDestination
    /** Free text description of the transform. */
    description?: string
    /**
     * The interval between checks for changes in the source indices when the transform is running continuously. Also determines the retry interval in the event of transient failures while the transform is searching or indexing. The minimum value is 1s and the maximum is 1h.
     * @server_default 1m
     */
    frequency?: Time
    /** The pivot method transforms the data by aggregating and grouping it. These objects define the group by fields and the aggregation to reduce the data. */
    pivot?: TransformPivot
    /** The source of the data for the transform. */
    source?: TransformSource
    /** Defines optional transform settings. */
    settings?: TransformSettings
    /**  Defines the properties transforms require to run continuously. */
    sync?: TransformSyncContainer
    /** Defines a retention policy for the transform. Data that meets the defined criteria is deleted from the destination index. */
    retention_policy?: TransformRetentionPolicyContainer
    /**  The latest method transforms the data by finding the latest document for each unique key. */
    latest?: TransformLatest
  }
}
