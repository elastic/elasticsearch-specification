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
 * @rest_spec_name index
 * @availability serverless visibility=private stability=experimental
 * @availability stack stability=beta since=1.2.3 visibility=feature_flag feature_flag=abc
 * @doc_id docs-index
 */
export interface Request<TDocument> {
  urls: [
    {
      path: '/{index}/_doc/{id}'
      methods: ['POST', 'PUT']
    }
  ]
  path_parts: {
    id?: string
    index: string
  }
  query_parameters: {
    if_primary_term?: number
    if_seq_no?: number
    op_type?: string
    pipeline?: string
    refresh?: string
    routing?: string
    timeout?: string
    version?: number
    version_type?: string
    wait_for_active_shards?: string
    require_alias?: boolean
  }
  /** @codegen_name document */
  body?: TDocument
}
