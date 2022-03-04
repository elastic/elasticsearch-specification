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

import { RequestBase } from '@_types/Base'
import { ExpandWildcards, Fields, Indices } from '@_types/common'
import { RuntimeFields } from '@_types/mapping/RuntimeFields'
import { QueryContainer } from '@_types/query_dsl/abstractions'

/**
 * @rest_spec_name field_caps
 * @since 5.4.0
 * @stability stable
 */
export interface Request extends RequestBase {
  path_parts: {
    index?: Indices
  }
  query_parameters: {
    allow_no_indices?: boolean
    expand_wildcards?: ExpandWildcards
    fields: Fields
    ignore_unavailable?: boolean
    include_unmapped?: boolean
  }
  body: {
    index_filter?: QueryContainer
    /** @since 7.12.0 */
    runtime_mappings?: RuntimeFields
  }
}
