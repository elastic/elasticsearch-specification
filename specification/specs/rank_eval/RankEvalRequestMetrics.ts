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

class RankEvalMetricBase {
  /**
   * Sets the maximum number of documents retrieved per query. This value will act in place of the usual size parameter in the query.
   * @server_default 10
   */
  k?: integer
}

class RankEvalMetricRatingTreshold extends RankEvalMetricBase {
  /**
   * Sets the rating threshold above which documents are considered to be "relevant".
   * @server_default 1
   */
  relevant_rating_threshold?: integer
}

/**
 * Precision at K (P@k)
 * @doc_url https://www.elastic.co/guide/en/elasticsearch/reference/current/search-rank-eval.html#k-precision
 */
class RankEvalMetricPrecision extends RankEvalMetricRatingTreshold {
  /**
   * Controls how unlabeled documents in the search results are counted. If set to true, unlabeled documents are ignored and neither count as relevant or irrelevant. Set to false (the default), they are treated as irrelevant.
   * @server_default false
   */
  ignore_unlabeled?: boolean
}

/**
 * Recall at K (R@k)
 * @doc_url https://www.elastic.co/guide/en/elasticsearch/reference/current/search-rank-eval.html#k-recall
 */
class RankEvalMetricRecall extends RankEvalMetricRatingTreshold {}

/**
 * Mean Reciprocal Rank
 * @doc_url https://www.elastic.co/guide/en/elasticsearch/reference/current/search-rank-eval.html#_mean_reciprocal_rank
 */
class RankEvalMetricMeanReciprocalRank extends RankEvalMetricRatingTreshold {}

/**
 * Discounted cumulative gain (DCG)
 * @doc_url https://www.elastic.co/guide/en/elasticsearch/reference/current/search-rank-eval.html#_discounted_cumulative_gain_dcg
 */
class RankEvalMetricDiscountedCumulativeGain extends RankEvalMetricBase {
  /**
   * If set to true, this metric will calculate the Normalized DCG.
   * @server_default false
   * @doc_url https://en.wikipedia.org/wiki/Discounted_cumulative_gain#Normalized_DCG
   */
  normalize?: boolean
}

/**
 * Expected Reciprocal Rank (ERR)
 * @doc_url https://www.elastic.co/guide/en/elasticsearch/reference/current/search-rank-eval.html#_expected_reciprocal_rank_err
 */
class RankEvalMetricExpectedReciprocalRank extends RankEvalMetricBase {
  /**
   * The highest relevance grade used in the user-supplied relevance judgments.
   */
  maximum_relevance: integer
}

class RankEvalMetric {
  precision?: RankEvalMetricPrecision
  recall?: RankEvalMetricRecall
  mean_reciprocal_rank?: RankEvalMetricMeanReciprocalRank
  dcg?: RankEvalMetricDiscountedCumulativeGain
  expected_reciprocal_rank?: RankEvalMetricExpectedReciprocalRank
}
