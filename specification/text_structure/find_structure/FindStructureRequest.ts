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

import { Field } from '@_types/common'
import { uint } from '@_types/Numeric'
import { Duration } from '@_types/Time'

/**
 * @rest_spec_name text_structure.find_structure
 * @since 7.13.0
 * @stability stable
 */
export interface Request<TJsonDocument> {
  query_parameters: {
    /** The text’s character set. It must be a character set that is supported by the JVM that Elasticsearch uses. For example, UTF-8, UTF-16LE, windows-1252, or EUC-JP. If this parameter is not specified, the structure finder chooses an appropriate character set. */
    charset?: string
    /** If you have set format to delimited, you can specify the column names in a comma-separated list. If this parameter is not specified, the structure finder uses the column names from the header row of the text. If the text does not have a header role, columns are named "column1", "column2", "column3", etc. */
    column_names?: string
    /** If you have set format to delimited, you can specify the character used to delimit the values in each row. Only a single character is supported; the delimiter cannot have multiple characters. By default, the API considers the following possibilities: comma, tab, semi-colon, and pipe (|). In this default scenario, all rows must have the same number of fields for the delimited format to be detected. If you specify a delimiter, up to 10% of the rows can have a different number of columns than the first row. */
    delimiter?: string
    /**
     * If this parameter is set to true, the response includes a field named explanation, which is an array of strings that indicate how the structure finder produced its result.
     * @server_default false
     */
    explain?: boolean
    /** The high level structure of the text. Valid values are ndjson, xml, delimited, and semi_structured_text. By default, the API chooses the format. In this default scenario, all rows must have the same number of fields for a delimited format to be detected. If the format is set to delimited and the delimiter is not set, however, the API tolerates up to 5% of rows that have a different number of columns than the first row. */
    format?: string
    /** If you have set format to semi_structured_text, you can specify a Grok pattern that is used to extract fields from every message in the text. The name of the timestamp field in the Grok pattern must match what is specified in the timestamp_field parameter. If that parameter is not specified, the name of the timestamp field in the Grok pattern must match "timestamp". If grok_pattern is not specified, the structure finder creates a Grok pattern. */
    grok_pattern?: string
    /** If you have set format to delimited, you can use this parameter to indicate whether the column names are in the first row of the text. If this parameter is not specified, the structure finder guesses based on the similarity of the first row of the text to other rows. */
    has_header_row?: boolean
    /**
     * The maximum number of characters in a message when lines are merged to form messages while analyzing semi-structured text. If you have extremely long messages you may need to increase this, but be aware that this may lead to very long processing times if the way to group lines into messages is misdetected.
     * @server_default 10000
     */
    line_merge_size_limit?: uint
    /**
     * The number of lines to include in the structural analysis, starting from the beginning of the text. The minimum is 2; If the value of this parameter is greater than the number of lines in the text, the analysis proceeds (as long as there are at least two lines in the text) for all of the lines.
     * @server_default 1000
     */
    lines_to_sample?: uint
    /** If you have set format to delimited, you can specify the character used to quote the values in each row if they contain newlines or the delimiter character. Only a single character is supported. If this parameter is not specified, the default value is a double quote ("). If your delimited text format does not use quoting, a workaround is to set this argument to a character that does not appear anywhere in the sample. */
    quote?: string
    /** If you have set format to delimited, you can specify whether values between delimiters should have whitespace trimmed from them. If this parameter is not specified and the delimiter is pipe (|), the default value is true. Otherwise, the default value is false. */
    should_trim_fields?: boolean
    /**
     * Sets the maximum amount of time that the structure analysis make take. If the analysis is still running when the timeout expires then it will be aborted.
     * @server_default 25s
     */
    timeout?: Duration
    timestamp_field?: Field
    /** The Java time format of the timestamp field in the text. */
    timestamp_format?: string
  }
  /** @codegen_name text_files */
  body: Array<TJsonDocument>
}
