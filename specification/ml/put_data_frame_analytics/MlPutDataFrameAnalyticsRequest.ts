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
import { HttpHeaders, Id, Metadata, VersionString } from '@_types/common'
import { integer } from '@_types/Numeric'
import {
  DataframeAnalysisAnalyzedFields,
  DataframeAnalysisContainer,
  DataframeAnalyticsDestination,
  DataframeAnalyticsSource
} from '@ml/_types/DataframeAnalytics'

/**
 * Create a data frame analytics job.
 *
 * This API creates a data frame analytics job that performs an analysis on the
 * source indices and stores the outcome in a destination index.
 * By default, the query used in the source configuration is `{"match_all": {}}`.
 *
 * If the destination index does not exist, it is created automatically when you start the job.
 *
 * If you supply only a subset of the regression or classification parameters, hyperparameter optimization occurs. It determines a value for each of the undefined parameters.
 * @rest_spec_name ml.put_data_frame_analytics
 * @availability stack since=7.3.0 stability=stable
 * @availability serverless stability=stable visibility=public
 * @cluster_privileges manage_ml
 * @index_privileges create_index, index, manage, read, view_index_metadata
 * @doc_id put-dfanalytics
 * @doc_tag ml data frame
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_ml/data_frame/analytics/{id}'
      methods: ['PUT']
    }
  ]
  path_parts: {
    /**
     * Identifier for the data frame analytics job. This identifier can contain
     * lowercase alphanumeric characters (a-z and 0-9), hyphens, and
     * underscores. It must start and end with alphanumeric characters.
     */
    id: Id
  }
  body: {
    /**
     * Specifies whether this job can start when there is insufficient machine
     * learning node capacity for it to be immediately assigned to a node. If
     * set to `false` and a machine learning node with capacity to run the job
     * cannot be immediately found, the API returns an error. If set to `true`,
     * the API does not return an error; the job waits in the `starting` state
     * until sufficient machine learning node capacity is available. This
     * behavior is also affected by the cluster-wide
     * `xpack.ml.max_lazy_ml_nodes` setting.
     * @server_default false
     * @doc_id ml-settings
     */
    allow_lazy_start?: boolean
    /**
     * The analysis configuration, which contains the information necessary to
     * perform one of the following types of analysis: classification, outlier
     * detection, or regression.
     */
    analysis: DataframeAnalysisContainer
    /**
     * Specifies `includes` and/or `excludes` patterns to select which fields
     * will be included in the analysis. The patterns specified in `excludes`
     * are applied last, therefore `excludes` takes precedence. In other words,
     * if the same field is specified in both `includes` and `excludes`, then
     * the field will not be included in the analysis. If `analyzed_fields` is
     * not set, only the relevant fields will be included. For example, all the
     * numeric fields for outlier detection.
     * The supported fields vary for each type of analysis. Outlier detection
     * requires numeric or `boolean` data to analyze. The algorithms don’t
     * support missing values therefore fields that have data types other than
     * numeric or boolean are ignored. Documents where included fields contain
     * missing values, null values, or an array are also ignored. Therefore the
     * `dest` index may contain documents that don’t have an outlier score.
     * Regression supports fields that are numeric, `boolean`, `text`,
     * `keyword`, and `ip` data types. It is also tolerant of missing values.
     * Fields that are supported are included in the analysis, other fields are
     * ignored. Documents where included fields contain an array with two or
     * more values are also ignored. Documents in the `dest` index that don’t
     * contain a results field are not included in the regression analysis.
     * Classification supports fields that are numeric, `boolean`, `text`,
     * `keyword`, and `ip` data types. It is also tolerant of missing values.
     * Fields that are supported are included in the analysis, other fields are
     * ignored. Documents where included fields contain an array with two or
     * more values are also ignored. Documents in the `dest` index that don’t
     * contain a results field are not included in the classification analysis.
     * Classification analysis can be improved by mapping ordinal variable
     * values to a single number. For example, in case of age ranges, you can
     * model the values as `0-14 = 0`, `15-24 = 1`, `25-34 = 2`, and so on.
     */
    analyzed_fields?: DataframeAnalysisAnalyzedFields
    /**
     * A description of the job.
     */
    description?: string
    /**
     * The destination configuration.
     */
    dest: DataframeAnalyticsDestination
    /**
     * The maximum number of threads to be used by the analysis. Using more
     * threads may decrease the time necessary to complete the analysis at the
     * cost of using more CPU. Note that the process may use additional threads
     * for operational functionality other than the analysis itself.
     * @server_default 1
     */
    max_num_threads?: integer

    _meta?: Metadata
    /**
     * The approximate maximum amount of memory resources that are permitted for
     * analytical processing. If your `elasticsearch.yml` file contains an
     * `xpack.ml.max_model_memory_limit` setting, an error occurs when you try
     * to create data frame analytics jobs that have `model_memory_limit` values
     * greater than that setting.
     * @server_default 1gb
     */
    model_memory_limit?: string
    /**
     * The configuration of how to source the analysis data.
     */
    source: DataframeAnalyticsSource
    /**
     * @availability stack since=8.0.0
     * @availability serverless
     */
    headers?: HttpHeaders
    /**
     * @availability stack since=7.16.0
     * @availability serverless
     */
    version?: VersionString
  }
}
