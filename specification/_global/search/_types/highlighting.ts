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

import { Dictionary } from '@spec_utils/Dictionary'
import { Field, Fields } from '@_types/common'
import { integer } from '@_types/Numeric'
import { QueryContainer } from '@_types/query_dsl/abstractions'
import { UserDefinedValue } from '@spec_utils/UserDefinedValue'

export enum BoundaryScanner {
  chars = 0,
  sentence = 1,
  word = 2
}

export class HighlightBase {
  type?: HighlighterType
  boundary_chars?: string
  boundary_max_scan?: integer
  boundary_scanner?: BoundaryScanner
  boundary_scanner_locale?: string
  force_source?: boolean
  fragmenter?: HighlighterFragmenter
  fragment_size?: integer
  highlight_filter?: boolean
  highlight_query?: QueryContainer
  max_fragment_length?: integer
  max_analyzed_offset?: integer
  no_match_size?: integer
  number_of_fragments?: integer
  options?: Dictionary<string, UserDefinedValue>
  order?: HighlighterOrder
  phrase_limit?: integer
  post_tags?: string[]
  pre_tags?: string[]
  require_field_match?: boolean
  tags_schema?: HighlighterTagsSchema
}

export class Highlight extends HighlightBase {
  encoder?: HighlighterEncoder
  fields: Dictionary<Field, HighlightField>
}

export enum HighlighterEncoder {
  default = 0,
  html = 1
}

export enum HighlighterFragmenter {
  simple = 0,
  span = 1
}

export enum HighlighterOrder {
  score = 0
}

export enum HighlighterTagsSchema {
  styled = 0
}

/** @non_exhaustive */
export enum HighlighterType {
  plain = 0,
  /** @codegen_name fast_vector */
  fvh = 1,
  unified = 2
}

export class HighlightField extends HighlightBase {
  fragment_offset?: integer
  matched_fields?: Fields
}
