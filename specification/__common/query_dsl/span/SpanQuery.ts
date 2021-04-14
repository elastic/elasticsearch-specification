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

import { integer } from "../../common";
import { NamedQuery, QueryBase } from "../abstractions/query/Query";
import { SpanContainingQuery } from "./containing/SpanContainingQuery";
import { SpanFieldMaskingQuery } from "./field_masking/SpanFieldMaskingQuery";
import { SpanFirstQuery } from "./first/SpanFirstQuery";
import { SpanGapQuery } from "./gap/SpanGapQuery";
import { SpanMultiTermQuery } from "./multi_term/SpanMultiTermQuery";
import { SpanNearQuery } from "./near/SpanNearQuery";
import { SpanNotQuery } from "./not/SpanNotQuery";
import { SpanOrQuery } from "./or/SpanOrQuery";
import { SpanTermQuery } from "./term/SpanTermQuery";
import { SpanWithinQuery } from "./within/SpanWithinQuery";

export class SpanQuery extends QueryBase {
  span_containing?: NamedQuery<SpanContainingQuery | string>;
  field_masking_span?: NamedQuery<SpanFieldMaskingQuery | string>;
  span_first?: NamedQuery<SpanFirstQuery | string>;
  span_gap?: NamedQuery<SpanGapQuery | integer>;
  span_multi?: SpanMultiTermQuery;
  span_near?: NamedQuery<SpanNearQuery | string>;
  span_not?: NamedQuery<SpanNotQuery | string>;
  span_or?: NamedQuery<SpanOrQuery | string>;
  span_term?: NamedQuery<SpanTermQuery | string>;
  span_within?: NamedQuery<SpanWithinQuery | string>;
}
