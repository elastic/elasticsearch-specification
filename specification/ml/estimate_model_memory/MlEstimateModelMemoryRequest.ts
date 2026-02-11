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
import { Field, MediaType } from '@_types/common'
import { long } from '@_types/Numeric'
import { AnalysisConfig } from '@ml/_types/Analysis'
import { Dictionary } from '@spec_utils/Dictionary'

/**
 * Estimate job model memory usage.
 *
 * Make an estimation of the memory usage for an anomaly detection job model.
 * The estimate is based on analysis configuration details for the job and cardinality
 * estimates for the fields it references.
 * @rest_spec_name ml.estimate_model_memory
 * @category ai/ml
 * @availability stack since=7.7.0 stability=stable
 * @availability serverless stability=stable visibility=public
 * @cluster_privileges manage_ml
 * @doc_tag ml anomaly
 * @doc_id ml-estimate-memory
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_ml/anomaly_detectors/_estimate_model_memory'
      methods: ['POST']
    }
  ]
  request_media_type: MediaType.Json
  response_media_type: MediaType.Json
  body: {
    /**
     * For a list of the properties that you can specify in the
     * `analysis_config` component of the body of this API.
     */
    analysis_config?: AnalysisConfig
    /**
     * Estimates of the highest cardinality in a single bucket that is observed
     * for influencer fields over the time period that the job analyzes data.
     * To produce a good answer, values must be provided for all influencer
     * fields. Providing values for fields that are not listed as `influencers`
     * has no effect on the estimation.
     */
    max_bucket_cardinality?: Dictionary<Field, long>
    /**
     *  Estimates of the cardinality that is observed for fields over the whole
     * time period that the job analyzes data. To produce a good answer, values
     * must be provided for fields referenced in the `by_field_name`,
     * `over_field_name` and `partition_field_name` of any detectors. Providing
     * values for other fields has no effect on the estimation. It can be
     * omitted from the request if no detectors have a `by_field_name`,
     * `over_field_name` or `partition_field_name`.
     */
    overall_cardinality?: Dictionary<Field, long>
  }
}
