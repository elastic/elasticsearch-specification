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

import {
  double,
  Field,
  Fields,
  Fuzziness,
  integer,
  MultiTermQueryRewrite,
} from "../../../common";
import { MinimumShouldMatch } from "../../../common_options/minimum_should_match/MinimumShouldMatch";
import { QueryBase } from "../../abstractions/query/Query";
import { Operator } from "../../Operator";
import { TextQueryType } from "../multi_match/TextQueryType";

export class QueryStringQuery extends QueryBase {
  allow_leading_wildcard?: boolean;
  analyzer?: string;
  analyze_wildcard?: boolean;
  auto_generate_synonyms_phrase_query?: boolean;
  default_field?: Field;
  default_operator?: Operator;
  enable_position_increments?: boolean;
  escape?: boolean;
  fields?: Fields;
  fuzziness?: Fuzziness;
  fuzzy_max_expansions?: integer;
  fuzzy_prefix_length?: integer;
  fuzzy_rewrite?: MultiTermQueryRewrite;
  fuzzy_transpositions?: boolean;
  lenient?: boolean;
  max_determinized_states?: integer;
  minimum_should_match?: MinimumShouldMatch;
  phrase_slop?: double;
  query?: string;
  quote_analyzer?: string;
  quote_field_suffix?: string;
  rewrite?: MultiTermQueryRewrite;
  tie_breaker?: double;
  time_zone?: string;
  type?: TextQueryType;
}
