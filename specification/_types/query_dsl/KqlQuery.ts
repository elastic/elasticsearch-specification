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
import { TimeZone } from '@_types/Time'
import { QueryBase } from './abstractions'

/**
 * Returns documents matching a provided Kibana Query Language (KQL) expression.
 * The expression is parsed and rewritten into standard Query DSL.
 * @ext_doc_id query-dsl-kql-query
 */
export class KqlQuery extends QueryBase {
  /**
   * If `true`, performs case-insensitive matching for field names and keyword or text terms.
   * @server_default false
   */
  case_insensitive?: boolean
  /**
   * Default field, or field pattern with wildcards, to target when a bare term does not specify a field.
   * Defaults to the `index.query.default_field` index setting, which has a default value of `*`.
   */
  default_field?: Field
  /**
   * The KQL expression to parse.
   */
  query: string
  /**
   * Coordinated Universal Time (UTC) offset or IANA time zone used to interpret date literals in the expression.
   */
  time_zone?: TimeZone
}
