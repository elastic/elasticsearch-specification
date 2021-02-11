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
 * @rest_spec_name termvectors
 * @since 0.0.0
 * @stability TODO
 */
interface TermVectorsRequest<TDocument> extends RequestBase {
  path_parts?: {
    index: IndexName
    id?: Id
    type?: TypeName
  }
  query_parameters?: {
    fields?: Field[]
    field_statistics?: boolean
    offsets?: boolean
    payloads?: boolean
    positions?: boolean
    preference?: string
    realtime?: boolean
    routing?: Routing
    term_statistics?: boolean
    version?: long
    version_type?: VersionType
  }
  body?: {
    /** @prop_serializer SourceFormatter`1 */
    doc?: TDocument
    filter?: TermVectorFilter
    per_field_analyzer?: Dictionary<Field, string>
  }
}
