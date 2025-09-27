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

import {
  DataStreamName,
  Field,
  HealthStatus,
  IndexName,
  Metadata,
  Name,
  Uuid
} from '@_types/common'
import { integer } from '@_types/Numeric'
import { DataStreamLifecycleWithRollover } from '@indices/_types/DataStreamLifecycle'
import { IndexSettings } from '@indices/_types/IndexSettings'

enum ManagedBy {
  ilm = 'Index Lifecycle Management',
  // This should have been written with capital letters, it's a known typo and should not be corrected.
  datastream = 'Data stream lifecycle',
  unmanaged = 'Unmanaged'
}

export class FailureStore {
  enabled: boolean
  indices: DataStreamIndex[]
  rollover_on_write: boolean
}

export class DataStream {
  /**
   * Custom metadata for the stream, copied from the `_meta` object of the stream’s matching index template.
   * If empty, the response omits this property.
   * @doc_id mapping-meta-field
   */
  _meta?: Metadata
  /**
   *  If `true`, the data stream allows custom routing on write request.
   */
  allow_custom_routing?: boolean
  /**
   * Information about failure store backing indices
   *
   */
  failure_store?: FailureStore
  /**
   * Current generation for the data stream. This number acts as a cumulative count of the stream’s rollovers, starting at 1.
   */
  generation: integer
  /**
   *  If `true`, the data stream is hidden.
   */
  hidden: boolean
  /**
   * Name of the current ILM lifecycle policy in the stream’s matching index template.
   * This lifecycle policy is set in the `index.lifecycle.name` setting.
   * If the template does not include a lifecycle policy, this property is not included in the response.
   * NOTE: A data stream’s backing indices may be assigned different lifecycle policies. To retrieve the lifecycle policy for individual backing indices, use the get index settings API.
   */
  ilm_policy?: Name
  /**
   * Name of the lifecycle system that'll manage the next generation of the data stream.
   */
  next_generation_managed_by: ManagedBy
  /**
   * Indicates if ILM should take precedence over DSL in case both are configured to managed this data stream.
   */
  prefer_ilm: boolean
  /**
   * Array of objects containing information about the data stream’s backing indices.
   * The last item in this array contains information about the stream’s current write index.
   */
  indices: DataStreamIndex[]
  /**
   * Contains the configuration for the data stream lifecycle of this data stream.
   * @availability stack since=8.11.0 stability=stable
   * @availability serverless stability=stable
   */
  lifecycle?: DataStreamLifecycleWithRollover
  /**
   * Name of the data stream.
   */
  name: DataStreamName
  /**
   *  If `true`, the data stream is created and managed by cross-cluster replication and the local cluster can not write into this data stream or change its mappings.
   */
  replicated?: boolean
  /**
   * If `true`, the next write to this data stream will trigger a rollover first and the document will be indexed in the new backing index. If the rollover fails the indexing request will fail too.
   */
  rollover_on_write: boolean
  /**
   * The settings specific to this data stream that will take precedence over the settings in the matching index
   * template.
   */
  settings: IndexSettings
  /**
   * Health status of the data stream.
   * This health status is based on the state of the primary and replica shards of the stream’s backing indices.
   */
  status: HealthStatus
  /**
   * If `true`, the data stream is created and managed by an Elastic stack component and cannot be modified through normal user interaction.
   * @availability stack since=7.10.0
   * @availability serverless
   */
  system?: boolean
  /**
   * Name of the index template used to create the data stream’s backing indices.
   * The template’s index pattern must match the name of this data stream.
   */
  template: Name
  /**
   * Information about the `@timestamp` field in the data stream.
   */
  timestamp_field: DataStreamTimestampField
}

export class DataStreamTimestampField {
  /**
   * Name of the timestamp field for the data stream, which must be `@timestamp`. The `@timestamp` field must be included in every document indexed to the data stream.
   */
  name: Field
}

export class DataStreamIndex {
  /**
   * Name of the backing index.
   */
  index_name: IndexName
  /**
   * Universally unique identifier (UUID) for the index.
   */
  index_uuid: Uuid
  /**
   * Name of the current ILM lifecycle policy configured for this backing index.
   */
  ilm_policy?: Name
  /**
   * Name of the lifecycle system that's currently managing this backing index.
   */
  managed_by?: ManagedBy
  /**
   * Indicates if ILM should take precedence over DSL in case both are configured to manage this index.
   */
  prefer_ilm?: boolean
}

export class DataStreamVisibility {
  hidden?: boolean
  allow_custom_routing?: boolean
}
