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
import { Id, MediaType, Metadata } from '@_types/common'
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
 * Create a transform.
 *
 * Creates a transform.
 *
 * A transform copies data from source indices, transforms it, and persists it into an entity-centric destination index. You can also think of the destination index as a two-dimensional tabular data structure (known as
 * a data frame). The ID for each document in the data frame is generated from a hash of the entity, so there is a
 * unique row per entity.
 *
 * You must choose either the latest or pivot method for your transform; you cannot use both in a single transform. If
 * you choose to use the pivot method for your transform, the entities are defined by the set of `group_by` fields in
 * the pivot object. If you choose to use the latest method, the entities are defined by the `unique_key` field values
 * in the latest object.
 *
 * You must have `create_index`, `index`, and `read` privileges on the destination index and `read` and
 * `view_index_metadata` privileges on the source indices. When Elasticsearch security features are enabled, the
 * transform remembers which roles the user that created it had at the time of creation and uses those same roles. If
 * those roles do not have the required privileges on the source and destination indices, the transform fails when it
 * attempts unauthorized operations.
 *
 * NOTE: You must use Kibana or this API to create a transform. Do not add a transform directly into any
 * `.transform-internal*` indices using the Elasticsearch index API. If Elasticsearch security features are enabled, do
 * not give users any privileges on `.transform-internal*` indices. If you used transforms prior to 7.5, also do not
 * give users any privileges on `.data-frame-internal*` indices.
 *
 * @rest_spec_name transform.put_transform
 * @category ingest
 * @availability stack since=7.2.0 stability=stable
 * @availability serverless stability=stable visibility=public
 * @cluster_privileges manage_transform
 * @index_privileges create_index, read, index, view_index_metadata
 * @doc_id put-transform
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_transform/{transform_id}'
      methods: ['PUT']
    }
  ]
  path_parts: {
    /**
     * Identifier for the transform. This identifier can contain lowercase alphanumeric characters (a-z and 0-9),
     * hyphens, and underscores. It has a 64 character limit and must start and end with alphanumeric characters.
     */
    transform_id: Id
  }
  request_media_type: MediaType.Json
  response_media_type: MediaType.Json
  query_parameters: {
    /**
     * When the transform is created, a series of validations occur to ensure its success. For example, there is a
     * check for the existence of the source indices and a check that the destination index is not part of the source
     * index pattern. You can use this parameter to skip the checks, for example when the source index does not exist
     * until after the transform is created. The validations are always run when you start the transform, however, with
     * the exception of privilege checks.
     * @server_default false
     */
    defer_validation?: boolean
    /**
     * Period to wait for a response. If no response is received before the timeout expires, the request fails and returns an error.
     * @server_default 30s
     */
    timeout?: Duration
  }
  body: {
    /** The destination for the transform. */
    dest: Destination
    /** Free text description of the transform. */
    description?: string
    /**
     * The interval between checks for changes in the source indices when the transform is running continuously. Also
     * determines the retry interval in the event of transient failures while the transform is searching or indexing.
     * The minimum value is `1s` and the maximum is `1h`.
     * @server_default 1m
     */
    frequency?: Duration
    /**
     * The latest method transforms the data by finding the latest document for each unique key.
     */
    latest?: Latest
    /**
     * Defines optional transform metadata.
     */
    _meta?: Metadata
    /**
     * The pivot method transforms the data by aggregating and grouping it. These objects define the group by fields
     * and the aggregation to reduce the data.
     */
    pivot?: Pivot
    /**
     * Defines a retention policy for the transform. Data that meets the defined criteria is deleted from the
     * destination index.
     */
    retention_policy?: RetentionPolicyContainer
    /** Defines optional transform settings. */
    settings?: Settings
    /** The source of the data for the transform. */
    source: Source
    /**  Defines the properties transforms require to run continuously. */
    sync?: SyncContainer
  }
}
