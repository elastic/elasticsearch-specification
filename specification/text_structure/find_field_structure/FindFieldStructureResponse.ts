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

import { Field, GrokPattern } from '@_types/common'
import { TypeMapping } from '@_types/mapping/TypeMapping'
import { integer } from '@_types/Numeric'
import { PipelineConfig } from '@ingest/_types/Pipeline'
import { Dictionary } from '@spec_utils/Dictionary'
import {
  EcsCompatibilityType,
  FieldStat,
  FormatType
} from '../_types/Structure'

export class Response {
  body: {
    charset: string
    ecs_compatibility?: EcsCompatibilityType
    field_stats: Dictionary<Field, FieldStat>
    format: FormatType
    grok_pattern?: GrokPattern
    java_timestamp_formats?: string[]
    joda_timestamp_formats?: string[]
    ingest_pipeline: PipelineConfig
    mappings: TypeMapping
    multiline_start_pattern?: string
    need_client_timezone: boolean
    num_lines_analyzed: integer
    num_messages_analyzed: integer
    sample_start: string
    timestamp_field?: Field
  }
}
