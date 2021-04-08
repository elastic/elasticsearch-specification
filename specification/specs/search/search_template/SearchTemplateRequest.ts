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

/**
 * @rest_spec_name search_template
 * @since 2.0.0
 * @stability TODO
 */
interface SearchTemplateRequest extends RequestBase {
  path_parts?: {
    index?: Indices
    type?: Types // deprecated: 7.0
  }
  query_parameters?: {
    /** @default true */
    allow_no_indices?: boolean
    /** @default false */
    ccs_minimize_roundtrips?: boolean
    expand_wildcards?: ExpandWildcards
    /** default false */
    explain?: boolean
    /** @default true */
    ignore_throttled?: boolean
    /** @default false */
    ignore_unavailable?: boolean
    preference?: string
    /** @default false */
    profile?: boolean
    routing?: Routing
    scroll?: Time
    search_type?: SearchType
    /**
     * @since 7.0.0
     * @default false
     */
    total_hits_as_integer?: boolean
    /** @default false */
    typed_keys?: boolean
  }
  body?: {
    id?: string
    params?: Dictionary<string, UserDefinedValue>
    source?: string
  }
}
