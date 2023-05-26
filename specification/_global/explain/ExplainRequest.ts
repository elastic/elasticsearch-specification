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
import { Fields, Id, IndexName, Routing } from '@_types/common'
import { QueryContainer } from '@_types/query_dsl/abstractions'
import { SourceConfigParam } from '@global/search/_types/SourceFilter'
import { Operator } from '@_types/query_dsl/Operator'

/**
 * @rest_spec_name explain
 * @availability stack since=0.0.0 stability=stable
 */
export interface Request extends RequestBase {
  path_parts: {
    id: Id
    index: IndexName
  }
  query_parameters: {
    analyzer?: string
    analyze_wildcard?: boolean
    default_operator?: Operator
    df?: string
    lenient?: boolean
    preference?: string
    routing?: Routing
    _source?: SourceConfigParam
    _source_excludes?: Fields
    _source_includes?: Fields
    stored_fields?: Fields
    q?: string
  }
  body: {
    query?: QueryContainer
  }
}
