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

import { VersionString } from '@_types/common'
import { IcuNormalizationCharFilter } from './icu-plugin'
import { KuromojiIterationMarkCharFilter } from './kuromoji-plugin'

export class CharFilterBase {
  version?: VersionString
}

/**
 * @codegen_names name, definition
 * @ext_doc_id analysis-charfilters
 */
// ES: NameOrDefinition, used everywhere charfilter, tokenfilter or tokenizer is used
export type CharFilter = string | CharFilterDefinition

/**
 * @variants internal tag='type'
 * @non_exhaustive
 */
export type CharFilterDefinition =
  | HtmlStripCharFilter
  | MappingCharFilter
  | PatternReplaceCharFilter
  | IcuNormalizationCharFilter
  | KuromojiIterationMarkCharFilter

export class HtmlStripCharFilter extends CharFilterBase {
  type: 'html_strip'
  escaped_tags?: string[]
}

export class MappingCharFilter extends CharFilterBase {
  type: 'mapping'
  mappings?: string[]
  mappings_path?: string
}

export class PatternReplaceCharFilter extends CharFilterBase {
  type: 'pattern_replace'
  flags?: string
  pattern: string
  replacement?: string
}
