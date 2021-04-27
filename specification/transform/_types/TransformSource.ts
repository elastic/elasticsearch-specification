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

import { Indices } from '@_types/common'
import { RuntimeFields } from '@_types/mapping/runtime_fields/RuntimeFields'
import { QueryContainer } from '@_types/query_dsl/abstractions/container/QueryContainer'

export class TransformSource {
  /**The source indices for the transform. */
  index: Indices
  /**
   * A query clause that retrieves a subset of data from the source index.
   * @doc_url https://www.elastic.co/guide/en/elasticsearch/reference/current/query-dsl.html
   */
  query?: QueryContainer
  /**
   * Definitions of search-time runtime fields that can be used by the transform. For search runtime fields all data nodes, including remote nodes, must be 7.12 or later.
   * @since 7.12.0
   */
  runtime_mappings?: RuntimeFields
}
