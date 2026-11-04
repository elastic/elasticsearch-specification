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

import { Stringified } from '../../_spec_utils/Stringified'

/**
 * @rest_spec_name index
 * @availability stack stability=stable
 * @doc_id docs-index
 */
export interface Request {
  urls: [
    {
      path: '/{index}/_doc'
      methods: ['GET']
    }
  ]
  path_parts: {
    index: string
  }
  query_parameters: {
    /** @server_default true */
    nullable_boolean?: boolean | null
    /** @server_default 1 */
    lenient_number?: number | string
    /** @server_default auto */
    lenient_number_string?: number | string
    /** @server_default foo */
    single_or_array?: string | string[]
    /** @server_default ['foo', 'bar'] */
    single_or_array_array?: string | string[]
    /** @server_default false */
    stringified_boolean?: Stringified<boolean>
    /** @server_default 10 */
    stringified_number?: Stringified<number>
    /** @server_default 5 */
    nullable_stringified_number?: Stringified<number> | null
  }
}
