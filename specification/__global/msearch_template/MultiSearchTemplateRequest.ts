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

import { Indices, long, Types } from '../../__common/common';
import { SearchType } from '../../__common/common/SearchType';
import { RequestBase } from '../../__common/common_abstractions/request/RequestBase';
import { Dictionary } from '../../__spec_utils/Dictionary';
import { SearchTemplateRequest } from '../search_template/SearchTemplateRequest';

/**
 * @rest_spec_name msearch_template
 * @since 5.0.0
 *
 * @stability TODO
 */
export interface MultiSearchTemplateRequest extends RequestBase {
  path_parts?: {
    index?: Indices
    type?: Types
  }
  query_parameters?: {
    ccs_minimize_roundtrips?: boolean
    max_concurrent_searches?: long
    search_type?: SearchType
    total_hits_as_integer?: boolean
    typed_keys?: boolean
  }
  body?: {
    operations?: Dictionary<string, SearchTemplateRequest>
  }
}
