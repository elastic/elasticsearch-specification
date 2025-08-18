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
import { IndexName } from '@_types/common'
import { QueryContainer } from '@_types/query_dsl/abstractions'
import { DataframeEvaluationContainer } from '@ml/_types/DataframeEvaluation'

/**
 * Evaluate data frame analytics.
 *
 * The API packages together commonly used evaluation metrics for various types
 * of machine learning features. This has been designed for use on indexes
 * created by data frame analytics. Evaluation requires both a ground truth
 * field and an analytics result field to be present.
 * @rest_spec_name ml.evaluate_data_frame
 * @availability stack since=7.3.0 stability=stable
 * @availability serverless stability=stable visibility=public
 * @cluster_privileges monitor_ml
 * @doc_tag ml data frame
 * @doc_id evaluate-dfanalytics
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_ml/data_frame/_evaluate'
      methods: ['POST']
    }
  ]
  body: {
    /**
     * Defines the type of evaluation you want to perform.
     */
    evaluation: DataframeEvaluationContainer
    /**
     * Defines the `index` in which the evaluation will be performed.
     */
    index: IndexName
    /**
     * A query clause that retrieves a subset of data from the source index.
     * @doc_id query-dsl
     */
    query?: QueryContainer
  }
}
