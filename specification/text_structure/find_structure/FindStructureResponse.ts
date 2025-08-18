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
import { FieldStat } from '../_types/Structure'

export class Response {
  body: {
    /**
     * The character encoding used to parse the text.
     */
    charset: string
    has_header_row?: boolean
    /**
     * For UTF character encodings, it indicates whether the text begins with a byte order marker.
     */
    has_byte_order_marker: boolean
    /**
     * Valid values include `ndjson`, `xml`, `delimited`, and `semi_structured_text`.
     */
    format: string
    /**
     * The most common values of each field, plus basic numeric statistics for the numeric `page_count` field.
     * This information may provide clues that the data needs to be cleaned or transformed prior to use by other Elastic Stack functionality.
     */
    field_stats: Dictionary<Field, FieldStat>
    /**
     * The first two messages in the text verbatim.
     * This may help diagnose parse errors or accidental uploads of the wrong text.
     */
    sample_start: string
    /**
     * The number of distinct messages the lines contained.
     * For NDJSON, this value is the same as `num_lines_analyzed`.
     * For other text formats, messages can span several lines.
     */
    num_messages_analyzed: integer
    /**
     * Some suitable mappings for an index into which the data could be ingested.
     */
    mappings: TypeMapping
    quote?: string
    delimiter?: string
    /**
     * If a timestamp format is detected that does not include a timezone, `need_client_timezone` is `true`.
     * The server that parses the text must therefore be told the correct timezone by the client.
     */
    need_client_timezone: boolean
    /**
     * The number of lines of the text that were analyzed.
     */
    num_lines_analyzed: integer
    /**
     * If `format` is `delimited`, the `column_names` field lists the column names in the order they appear in the sample.
     */
    column_names?: string[]
    explanation?: string[]
    grok_pattern?: GrokPattern
    multiline_start_pattern?: string
    exclude_lines_pattern?: string
    /**
     * The Java time formats recognized in the time fields.
     * Elasticsearch mappings and ingest pipelines use this format.
     */
    java_timestamp_formats?: string[]
    /**
     * Information that is used to tell Logstash how to parse timestamps.
     */
    joda_timestamp_formats?: string[]
    /**
     * The field considered most likely to be the primary timestamp of each document.
     */
    timestamp_field?: Field
    should_trim_fields?: boolean
    ingest_pipeline: PipelineConfig
  }
}
