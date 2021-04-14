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

import { EmptyObject, Fields, Indices, integer } from '../../__common/common'
import { ExpandWildcards } from '../../__common/common/ExpandWildcards'
import { RequestBase } from '../../__common/common_abstractions/request/RequestBase'

/**
 * @rest_spec_name field_caps
 * @since 5.4.0
 * @stability TODO
 */
export interface FieldCapabilitiesRequest extends RequestBase {
  path_parts?: {
    index?: Indices
  }
  query_parameters?: {
    allow_no_indices?: boolean
    expand_wildcards?: ExpandWildcards
    fields?: Fields
    ignore_unavailable?: boolean
    include_unmapped?: boolean
  }
  body?: {
    index_filter?: FieldCapabilitiesBodyIndexFilter
  }
}
export class FieldCapabilitiesBodyIndexFilter {
  range?: FieldCapabilitiesBodyIndexFilterRange
  match_none?: EmptyObject
  term?: FieldCapabilitiesBodyIndexFilterTerm
}

export class FieldCapabilitiesBodyIndexFilterRange {
  timestamp: FieldCapabilitiesBodyIndexFilterRangeTimestamp
}

export class FieldCapabilitiesBodyIndexFilterRangeTimestamp {
  gte?: integer
  gt?: integer
  lte?: integer
  lt?: integer
}

export class FieldCapabilitiesBodyIndexFilterTerm {
  versionControl: FieldCapabilitiesBodyIndexFilterTermVersionControl
}

export class FieldCapabilitiesBodyIndexFilterTermVersionControl {
  value: string
}
