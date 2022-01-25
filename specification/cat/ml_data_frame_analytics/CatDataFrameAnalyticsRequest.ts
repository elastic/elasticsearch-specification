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

import { CatRequestBase, CatDfaColumns } from '@cat/_types/CatBase'
import { Bytes, Id } from '@_types/common'
import { Time } from '@_types/Time'

/**
 * @rest_spec_name cat.ml_data_frame_analytics
 * @since 7.7.0
 * @stability stable
 * @doc_id cat-dfanalytics
 */
export interface Request extends CatRequestBase {
  path_parts: {
    id?: Id
  }
  query_parameters: {
    allow_no_match?: boolean
    bytes?: Bytes
    /**
     * Short version of the HTTP accept header. Valid values include JSON, YAML,
     * etc.
     */
    format?: string
    /**
     * Comma-separated list of column names to display.
     * @server_default create_time,id,state,type
     */
    h?: CatDfaColumns
    /**
     * If `true`, the response includes help information.
     * @server_default false
     */
    help?: boolean
    /** Comma-separated list of column names or column aliases used to sort the
     * response.
     */
    s?: CatDfaColumns
    /**
     * Unit used to display time values.
     */
    time?: Time
    /**
     * If `true`, the response includes column headings.
     * @server_default false
     */
    v?: boolean
  }
}
