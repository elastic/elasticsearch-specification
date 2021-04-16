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

import { Id, IndexName, integer } from "@common/common"
import { QueryContainer } from "@common/query_dsl/abstractions/container/QueryContainer"
import { Dictionary } from "@spec_utils/Dictionary"
import { UserDefinedValue } from "@spec_utils/UserDefinedValue"

export class RankEvalRequestItem {
  /** The search request’s ID, used to group result details later. */
  id: Id
  /** The query being evaluated. */
  request?: RankEvalQuery
  /** List of document ratings */
  ratings: DocumentRating[]
  /** The search template Id */
  template_id?: Id
  /** The search template parameters. */
  params?: Dictionary<string, UserDefinedValue>
}

class RankEvalQuery {
  query: QueryContainer
  size?: integer
}

class DocumentRating {
  /** The document ID. */
  _id: Id
  /** The document’s index. For data streams, this should be the document’s backing index. */
  _index: IndexName
  /** The document’s relevance with regard to this search request. */
  rating: integer
}
