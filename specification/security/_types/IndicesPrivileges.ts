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

import { FieldSecurity } from '@security/_types/FieldSecurity'
import { Indices } from '@_types/common'
import { QueryContainer } from '@_types/query_dsl/abstractions'

export class IndicesPrivileges {
  /**
   * The document fields that the owners of the role have read access to.
   * @doc_url https://www.elastic.co/guide/en/elasticsearch/reference/current/field-and-document-access-control.html
   */
  field_security?: FieldSecurity
  /**
   * A list of indices (or index name patterns) to which the permissions in this entry apply.
   */
  names: Indices
  /**
   * The index level privileges that owners of the role have on the specified indices.
   */
  privileges: string[]
  /**
   * A search query that defines the documents the owners of the role have read access to. A document within the specified indices must match this query for it to be accessible by the owners of the role.
   */
  query?: string | QueryContainer
  /**
   * Set to `true` if using wildcard or regular expressions for patterns that cover restricted indices. Implicitly, restricted indices have limited privileges that can cause pattern tests to fail. If restricted indices are explicitly included in the `names` list, Elasticsearch checks privileges against these indices regardless of the value set for `allow_restricted_indices`.
   * @server_default false
   */
  allow_restricted_indices?: boolean
}
