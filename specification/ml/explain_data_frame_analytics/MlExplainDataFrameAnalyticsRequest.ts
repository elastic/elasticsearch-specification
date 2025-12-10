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
import { Id, MediaType } from '@_types/common'
import { integer } from '@_types/Numeric'
import {
  DataframeAnalysisAnalyzedFields,
  DataframeAnalysisContainer,
  DataframeAnalyticsDestination,
  DataframeAnalyticsSource
} from '@ml/_types/DataframeAnalytics'

/**
 * Explain data frame analytics config.
 *
 * This API provides explanations for a data frame analytics config that either
 * exists already or one that has not been created yet. The following
 * explanations are provided:
 * * which fields are included or not in the analysis and why,
 * * how much memory is estimated to be required. The estimate can be used when deciding the appropriate value for model_memory_limit setting later on.
 * If you have object fields or fields that are excluded via source filtering, they are not included in the explanation.
 * @rest_spec_name ml.explain_data_frame_analytics
 * @availability stack since=7.3.0 stability=stable
 * @availability serverless stability=stable visibility=private
 * @cluster_privileges monitor_ml
 * @doc_tag ml data frame
 * @doc_id explain-dfanalytics
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_ml/data_frame/analytics/_explain'
      methods: ['GET', 'POST']
    },
    {
      path: '/_ml/data_frame/analytics/{id}/_explain'
      methods: ['GET', 'POST']
    }
  ]
  path_parts: {
    /**
     * Identifier for the data frame analytics job. This identifier can contain
     * lowercase alphanumeric characters (a-z and 0-9), hyphens, and
     * underscores. It must start and end with alphanumeric characters.
     */
    id?: Id
  }
  request_media_type: MediaType.Json
  response_media_type: MediaType.Json
  body?: {
    /**
     * The configuration of how to source the analysis data. It requires an
     * index. Optionally, query and _source may be specified.
     */
    source?: DataframeAnalyticsSource
    /**
     * The destination configuration, consisting of index and optionally
     * results_field (ml by default).
     */
    dest?: DataframeAnalyticsDestination
    /**
     * The analysis configuration, which contains the information necessary to
     * perform one of the following types of analysis: classification, outlier
     * detection, or regression.
     */
    analysis?: DataframeAnalysisContainer
    /**
     * A description of the job.
     */
    description?: string
    /**
     * The approximate maximum amount of memory resources that are permitted for
     * analytical processing. If your `elasticsearch.yml` file contains an
     * `xpack.ml.max_model_memory_limit` setting, an error occurs when you try to
     * create data frame analytics jobs that have `model_memory_limit` values
     * greater than that setting.
     * @server_default 1gb
     * @doc_id ml-settings
     */
    model_memory_limit?: string
    /**
     * The maximum number of threads to be used by the analysis. Using more
     * threads may decrease the time necessary to complete the analysis at the
     * cost of using more CPU. Note that the process may use additional threads
     * for operational functionality other than the analysis itself.
     * @server_default 1
     */
    max_num_threads?: integer
    /**
     * Specify includes and/or excludes patterns to select which fields will be
     * included in the analysis. The patterns specified in excludes are applied
     * last, therefore excludes takes precedence. In other words, if the same
     * field is specified in both includes and excludes, then the field will not
     * be included in the analysis.
     */
    analyzed_fields?: DataframeAnalysisAnalyzedFields
    /**
     * Specifies whether this job can start when there is insufficient machine
     * learning node capacity for it to be immediately assigned to a node.
     * @server_default false
     * @doc_id ml-settings
     */
    allow_lazy_start?: boolean
  }
}
