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

import { integer } from '@_types/Numeric'
import { DateTime } from '@_types/Time'

export class PipelineMetadata {
  type: string
  version: string
}

export class PipelineSettings {
  /**
   * The number of workers that will, in parallel, execute the filter and output stages of the pipeline.
   * @doc_id logstash-logstash-settings-file
   */
  'pipeline.workers': integer
  /**
   * The maximum number of events an individual worker thread will collect from inputs before attempting to execute its filters and outputs.
   */
  'pipeline.batch.size': integer
  /**
   * When creating pipeline event batches, how long in milliseconds to wait for each event before dispatching an undersized batch to pipeline workers.
   */
  'pipeline.batch.delay': integer
  /**
   * The internal queuing model to use for event buffering.
   * @doc_id logstash-logstash-settings-file
   */
  'queue.type': string
  /**
   * The total capacity of the queue (`queue.type: persisted`) in number of bytes.
   */
  'queue.max_bytes.number': integer
  /**
   * The total capacity of the queue (`queue.type: persisted`) in terms of units of bytes.
   */
  'queue.max_bytes.units': string
  /**
   * The maximum number of written events before forcing a checkpoint when persistent queues are enabled (`queue.type: persisted`).
   */
  'queue.checkpoint.writes': integer
}
export class Pipeline {
  /**
   * Description of the pipeline.
   * This description is not used by Elasticsearch or Logstash.
   */
  description: string
  /**
   * Date the pipeline was last updated.
   * Must be in the `yyyy-MM-dd'T'HH:mm:ss.SSSZZ` strict_date_time format.
   */
  last_modified: DateTime
  /**
   * Optional metadata about the pipeline.
   * May have any contents.
   * This metadata is not generated or used by Elasticsearch or Logstash.
   */
  pipeline_metadata: PipelineMetadata
  /**
   * User who last updated the pipeline.
   */
  username: string
  /**
   * Configuration for the pipeline.
   * @doc_id logstash-configuration-file-structure
   */
  pipeline: string
  /**
   * Settings for the pipeline.
   * Supports only flat keys in dot notation.
   * @doc_id logstash-logstash-settings-file
   */
  pipeline_settings: PipelineSettings
}
