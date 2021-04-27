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

import { DataFrameEvaluationContainer } from '@ml/_types/DataFrameEvaluation'
import { RequestBase } from '@_types/Base'
import { IndexName } from '@_types/common'
import { QueryContainer } from '@_types/query_dsl/abstractions/container/QueryContainer'

/**
 * @rest_spec_name ml.evaluate_data_frame
 * @since 7.3.0
 * @stability TODO
 */
export interface Request extends RequestBase {
  body: {
    /**
     * Defines the type of evaluation you want to perform.
     * @doc_url https://www.elastic.co/guide/en/elasticsearch/reference/current/evaluate-dfanalytics.html#ml-evaluate-dfanalytics-resources
     */
    evaluation: DataFrameEvaluationContainer
    /**
     * Defines the index in which the evaluation will be performed.
     */
    index: IndexName
    /**
     * A query clause that retrieves a subset of data from the source index.
     * @doc_url https://www.elastic.co/guide/en/elasticsearch/reference/current/query-dsl.html
     */
    query?: QueryContainer
  }
}
