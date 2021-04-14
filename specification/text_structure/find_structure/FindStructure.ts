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

import { Field, long, uint } from '../../__common/common'
import { Time } from '../../__common/common_options/time_unit/Time'
import { TypeMapping } from '../../__common/mapping/TypeMapping'
import { Dictionary } from '../../__spec_utils/Dictionary'
import { UserDefinedValue } from '../../__spec_utils/UserDefinedValue'

/**
 * @rest_spec_name text_structure.find_structure
 * @since 7.13.0
 * @stability TODO
 */
export interface FindStructureRequest<TBody> {
  query_parameters?: {
    charset?: string
    column_names?: string
    delimiter?: string
    explain?: boolean
    format?: string
    grok_pattern?: string
    has_header_row?: boolean
    lines_to_sample?: uint
    quote?: string
    should_trim_fields?: boolean
    timeout?: Time
    timestamp_field?: Field
    timestamp_format?: string
  }
  body: TBody
}

export class FieldStat {
  count: number
  cardinality: number
  top_hits: TopHit[]
  mean_value?: number
  median_value?: number
  max_value?: number
  min_value?: number
  earliest?: string
  latest?: string
}

export class TopHit {
  count: long
  value: UserDefinedValue
}

export class FindStructureResponse {
  charset: string
  has_header_row: boolean
  has_byte_order_marker: boolean
  format: string
  field_stats: Dictionary<Field, FieldStat>
  sample_start: string
  num_messages_analyzed: number
  mappings: TypeMapping
  quote: string
  delimiter: string
  need_client_timezone: boolean
  num_lines_analyzed: number
  column_names?: string[]
  explanation?: string[]
  grok_pattern?: string
  multiline_start_pattern?: string
  exclude_lines_pattern?: string
  java_timestamp_formats?: string[]
  joda_timestamp_formats?: string[]
  timestamp_field?: string
  should_trim_fields?: boolean
}
