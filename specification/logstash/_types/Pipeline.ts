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
import { DateString } from '@_types/Time'

export class PipelineMetadata {
  type: string
  version: string
}

export class PipelineSettings {
  'pipeline.workers': integer
  'pipeline.batch.size': integer
  'pipeline.batch.delay': integer
  'queue.type': string
  'queue.max_bytes.number': integer
  'queue.max_bytes.units': string
  'queue.checkpoint.writes': integer
}
export class Pipeline {
  description: string
  last_modified: DateString
  pipeline_metadata: PipelineMetadata
  username: string
  pipeline: string
  pipeline_settings: PipelineSettings
}
