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

import { Field, Fields } from '@_types/common'
import { integer } from '@_types/Numeric'
import { QueryContainer } from '@_types/query_dsl/abstractions'
import { Dictionary, SingleKeyDictionary } from '@spec_utils/Dictionary'
import { UserDefinedValue } from '@spec_utils/UserDefinedValue'

export enum BoundaryScanner {
  /**
   * Use the characters specified by `boundary_chars` as highlighting boundaries.
   * The `boundary_max_scan` setting controls how far to scan for boundary characters.
   * Only valid for the `fvh` highlighter.
   */
  chars,
  /**
   * Break highlighted fragments at the next sentence boundary, as determined by Java’s `BreakIterator`.
   * You can specify the locale to use with `boundary_scanner_locale`.
   * When used with the `unified` highlighter, the `sentence` scanner splits sentences bigger than `fragment_size` at the first word boundary next to fragment_size.
   * You can set `fragment_size` to `0` to never split any sentence.
   */
  sentence,
  /**
   * Break highlighted fragments at the next word boundary, as determined by Java’s `BreakIterator`.
   * You can specify the locale to use with `boundary_scanner_locale`.
   */
  word
}

export class HighlightBase {
  type?: HighlighterType
  /**
   * A string that contains each boundary character.
   * @server_default .,!? \t\n
   */
  boundary_chars?: string
  /**
   * How far to scan for boundary characters.
   * @server_default 20
   */
  boundary_max_scan?: integer
  /**
   * Specifies how to break the highlighted fragments: chars, sentence, or word.
   * Only valid for the unified and fvh highlighters.
   * Defaults to `sentence` for the `unified` highlighter. Defaults to `chars` for the `fvh` highlighter.
   */
  boundary_scanner?: BoundaryScanner
  /**
   * Controls which locale is used to search for sentence and word boundaries.
   * This parameter takes a form of a language tag, for example: `"en-US"`, `"fr-FR"`, `"ja-JP"`.
   * @server_default Locale.ROOT
   */
  boundary_scanner_locale?: string
  /**
   * @deprecated 8.8.0
   */
  force_source?: boolean
  /**
   * Specifies how text should be broken up in highlight snippets: `simple` or `span`.
   * Only valid for the `plain` highlighter.
   * @server_default span
   */
  fragmenter?: HighlighterFragmenter
  /**
   * The size of the highlighted fragment in characters.
   * @server_default 100
   */
  fragment_size?: integer
  highlight_filter?: boolean
  /**
   * Highlight matches for a query other than the search query.
   * This is especially useful if you use a rescore query because those are not taken into account by highlighting by default.
   */
  highlight_query?: QueryContainer
  max_fragment_length?: integer
  /**
   * If set to a non-negative value, highlighting stops at this defined maximum limit.
   * The rest of the text is not processed, thus not highlighted and no error is returned
   * The `max_analyzed_offset` query setting does not override the `index.highlight.max_analyzed_offset` setting, which prevails when it’s set to lower value than the query setting.
   */
  max_analyzed_offset?: integer
  /**
   * The amount of text you want to return from the beginning of the field if there are no matching fragments to highlight.
   * @server_default 0
   */
  no_match_size?: integer
  /**
   * The maximum number of fragments to return.
   * If the number of fragments is set to `0`, no fragments are returned.
   * Instead, the entire field contents are highlighted and returned.
   * This can be handy when you need to highlight short texts such as a title or address, but fragmentation is not required.
   * If `number_of_fragments` is `0`, `fragment_size` is ignored.
   * @server_default 5
   */
  number_of_fragments?: integer
  options?: Dictionary<string, UserDefinedValue>
  /**
   * Sorts highlighted fragments by score when set to `score`.
   * By default, fragments will be output in the order they appear in the field (order: `none`).
   * Setting this option to `score` will output the most relevant fragments first.
   * Each highlighter applies its own logic to compute relevancy scores.
   * @server_default none
   */
  order?: HighlighterOrder
  /**
   * Controls the number of matching phrases in a document that are considered.
   * Prevents the `fvh` highlighter from analyzing too many phrases and consuming too much memory.
   * When using `matched_fields`, `phrase_limit` phrases per matched field are considered. Raising the limit increases query time and consumes more memory.
   * Only supported by the `fvh` highlighter.
   * @server_default 256
   */
  phrase_limit?: integer
  /**
   * Use in conjunction with `pre_tags` to define the HTML tags to use for the highlighted text.
   * By default, highlighted text is wrapped in `<em>` and `</em>` tags.
   */
  post_tags?: string[]
  /**
   * Use in conjunction with `post_tags` to define the HTML tags to use for the highlighted text.
   * By default, highlighted text is wrapped in `<em>` and `</em>` tags.
   */
  pre_tags?: string[]
  /**
   * By default, only fields that contains a query match are highlighted.
   * Set to `false` to highlight all fields.
   * @server_default true
   */
  require_field_match?: boolean
  /**
   * Set to `styled` to use the built-in tag schema.
   */
  tags_schema?: HighlighterTagsSchema
}

export class Highlight extends HighlightBase {
  encoder?: HighlighterEncoder
  fields:
    | SingleKeyDictionary<Field, HighlightField>
    | SingleKeyDictionary<Field, HighlightField>[]
}

export enum HighlighterEncoder {
  default,
  html
}

export enum HighlighterFragmenter {
  simple,
  span
}

export enum HighlighterOrder {
  score
}

export enum HighlighterTagsSchema {
  styled
}

/** @non_exhaustive */
export enum HighlighterType {
  /**
   * The `plain` highlighter uses the standard Lucene highlighter
   */
  plain,
  /**
   * The fvh highlighter uses the Lucene Fast Vector highlighter.
   * @codegen_name fast_vector
   */
  fvh,
  /**
   * The unified highlighter uses the Lucene Unified Highlighter.
   */
  unified
}

export class HighlightField extends HighlightBase {
  fragment_offset?: integer
  matched_fields?: Fields
}
