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

import { ErrorResponseBase } from '@_types/Base'
import {
  ExpandWildcards,
  Indices,
  ProjectRouting,
  Routing,
  SearchType
} from '@_types/common'
import { integer, long } from '@_types/Numeric'
import { SearchRequestBody } from '@global/search/_types/SearchRequestBody'
import { ResponseBody as SearchResponse } from '@global/search/SearchResponse'

/**
 * @codegen_names header, body
 */
export type RequestItem = MultisearchHeader | SearchRequestBody

/**
 * Contains parameters used to limit or change the subsequent search body request.
 */
export class MultisearchHeader {
  allow_no_indices?: boolean
  expand_wildcards?: ExpandWildcards
  ignore_unavailable?: boolean
  index?: Indices
  preference?: string
  project_routing?: ProjectRouting
  request_cache?: boolean
  routing?: Routing
  search_type?: SearchType
  ccs_minimize_roundtrips?: boolean
  allow_partial_search_results?: boolean
  ignore_throttled?: boolean
}

export class MultiSearchResult<TDocument> {
  took: long
  responses: Array<ResponseItem<TDocument>>
}

/** @codegen_names result, failure */
export type ResponseItem<TDocument> =
  | MultiSearchItem<TDocument>
  | ErrorResponseBase

export class MultiSearchItem<TDocument> extends SearchResponse<TDocument> {
  // Not returned in MultiSearchTemplateResponse
  status?: integer
}
