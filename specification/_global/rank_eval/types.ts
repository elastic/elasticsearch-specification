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

import { Id, IndexName } from '@_types/common'
import { double, integer } from '@_types/Numeric'
import { QueryContainer } from '@_types/query_dsl/abstractions'
import { Dictionary } from '@spec_utils/Dictionary'
import { UserDefinedValue } from '@spec_utils/UserDefinedValue'

export class RankEvalMetricBase {
  /**
   * Sets the maximum number of documents retrieved per query. This value will act in place of the usual size parameter in the query.
   * @server_default 10
   */
  k?: integer
}

export class RankEvalMetricRatingTreshold extends RankEvalMetricBase {
  /**
   * Sets the rating threshold above which documents are considered to be "relevant".
   * @server_default 1
   */
  relevant_rating_threshold?: integer
}

/**
 * Precision at K (P@k)
 * @doc_id k-precision
 */
export class RankEvalMetricPrecision extends RankEvalMetricRatingTreshold {
  /**
   * Controls how unlabeled documents in the search results are counted. If set to true, unlabeled documents are ignored and neither count as relevant or irrelevant. Set to false (the default), they are treated as irrelevant.
   * @server_default false
   */
  ignore_unlabeled?: boolean
}

/**
 * Recall at K (R@k)
 * @doc_id k-recall
 */
export class RankEvalMetricRecall extends RankEvalMetricRatingTreshold {}

/**
 * Mean Reciprocal Rank
 * @doc_id mean-reciprocal
 */
export class RankEvalMetricMeanReciprocalRank extends RankEvalMetricRatingTreshold {}

/**
 * Discounted cumulative gain (DCG)
 * @doc_id dcg
 */
export class RankEvalMetricDiscountedCumulativeGain extends RankEvalMetricBase {
  /**
   * If set to true, this metric will calculate the Normalized DCG.
   * @server_default false
   * @doc_url https://en.wikipedia.org/wiki/Discounted_cumulative_gain#Normalized_DCG
   */
  normalize?: boolean
}

/**
 * Expected Reciprocal Rank (ERR)
 * @doc_id expected-reciprocal
 */
export class RankEvalMetricExpectedReciprocalRank extends RankEvalMetricBase {
  /**
   * The highest relevance grade used in the user-supplied relevance judgments.
   */
  maximum_relevance: integer
}

export class RankEvalMetric {
  precision?: RankEvalMetricPrecision
  recall?: RankEvalMetricRecall
  mean_reciprocal_rank?: RankEvalMetricMeanReciprocalRank
  dcg?: RankEvalMetricDiscountedCumulativeGain
  expected_reciprocal_rank?: RankEvalMetricExpectedReciprocalRank
}

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

/**
 * @shortcut_property query
 */
export class RankEvalQuery {
  query: QueryContainer
  size?: integer
}

export class DocumentRating {
  /** The document ID. */
  _id: Id
  /** The document’s index. For data streams, this should be the document’s backing index. */
  _index: IndexName
  /** The document’s relevance with regard to this search request. */
  rating: integer
}

export class RankEvalMetricDetail {
  /** The metric_score in the details section shows the contribution of this query to the global quality metric score */
  metric_score: double
  /** The unrated_docs section contains an _index and _id entry for each document in the search result for this query that didn’t have a ratings value. This can be used to ask the user to supply ratings for these documents */
  unrated_docs: UnratedDocument[]
  /** The hits section shows a grouping of the search results with their supplied ratings */
  hits: RankEvalHitItem[]
  /** The metric_details give additional information about the calculated quality metric (e.g. how many of the retrieved documents were relevant). The content varies for each metric but allows for better interpretation of the results */
  metric_details: Dictionary<string, Dictionary<string, UserDefinedValue>>
}

export class RankEvalHitItem {
  hit: RankEvalHit
  rating?: double | null
}

export class RankEvalHit {
  _id: Id
  _index: IndexName
  _score: double
}

export class UnratedDocument {
  _id: Id
  _index: IndexName
}
