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
import { ExpandWildcards, IndexName } from '@_types/common'
import { Duration } from '@_types/Time'

/**
 * @rest_spec_name indices.add_block
 * @availability stack since=7.9.0 stability=stable
 */
export interface Request extends RequestBase {
  path_parts: {
    index: IndexName
    block: IndicesBlockOptions
  }
  query_parameters: {
    allow_no_indices?: boolean // default: true
    expand_wildcards?: ExpandWildcards // default: open
    ignore_unavailable?: boolean // default: false
    master_timeout?: Duration // default: 30s
    timeout?: Duration // default: 30s
  }
}

export enum IndicesBlockOptions {
  metadata = 0,
  read = 1,
  read_only = 2,
  write = 3
}
