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
import { Indices, SearchType } from '@_types/common'
import { long } from '@_types/Numeric'
import { RequestItem } from './types'

/**
 * Runs multiple templated searches with a single request.
 * @rest_spec_name msearch_template
 * @availability stack since=5.0.0 stability=stable
 * @availability serverless stability=stable visibility=public
 * @index_privileges read
 */
export interface Request extends RequestBase {
  path_parts: {
    index?: Indices
  }
  query_parameters: {
    ccs_minimize_roundtrips?: boolean
    max_concurrent_searches?: long
    search_type?: SearchType
    rest_total_hits_as_int?: boolean
    typed_keys?: boolean
  }
  /** @codegen_name search_templates */
  body: Array<RequestItem>
}
