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

import { Id, long } from '@common/common'
import { RequestBase } from '@common/common_abstractions/request/RequestBase'
import { Time } from '@common/common_options/time_unit/Time'
import { PerPartitionCategorization } from '@common/ml/AnalysisConfig'
import { AnalysisMemoryLimit } from '@common/ml/AnalysisMemoryLimit'
import { Detector } from '@common/ml/Detector'
import { ModelPlotConfigEnabled } from '@common/ml/ModelPlotConfigEnabled'
import { Dictionary } from '@spec_utils/Dictionary'
import { UserDefinedValue } from '@spec_utils/UserDefinedValue'

/**
 * @rest_spec_name ml.update_job
 * @since 5.5.0
 * @stability TODO
 */
export interface MlUpdateJobRequest extends RequestBase {
  path_parts: {
    /** Identifier for the job */
    job_id: Id
  }
  body?: {
    allow_lazy_open?: boolean
    analysis_limits?: AnalysisMemoryLimit
    /**
     * Advanced configuration option. The time between each periodic persistence of the model. See Job resources.
     * @doc_url https://www.elastic.co/guide/en/elasticsearch/reference/current/ml-job-resource.html
     */
    background_persist_interval?: Time
    /**
     * Advanced configuration option. Contains custom meta data about the job. For example, it can contain custom URL information as shown in Adding custom URLs to machine learning results.
     * @doc_url https://www.elastic.co/guide/en/machine-learning/7.12/ml-configuring-url.html
     */
    custom_settings?: Dictionary<string, UserDefinedValue>
    categorization_filters?: string[]
    /**
     * A description of the job. See Job resources.
     * @doc_url https://www.elastic.co/guide/en/elasticsearch/reference/current/ml-job-resource.html
     */
    description?: string
    model_plot_config?: ModelPlotConfigEnabled
    /**
     * @server_default 1
     */
    daily_model_snapshot_retention_after_days?: long
    /**
     * Advanced configuration option, which affects the automatic removal of old model snapshots for this job. It specifies the maximum period of time (in days) that snapshots are retained. This period is relative to the timestamp of the most recent snapshot for this job.
     * @server_default 10
     */
    model_snapshot_retention_days?: long
    /**
     * Advanced configuration option. The period over which adjustments to the score are applied, as new data is seen.
     */
    renormalization_window_days?: long
    /**
     * Advanced configuration option. The period of time (in days) that results are retained. Age is calculated relative to the timestamp of the latest bucket result. If this property has a non-null value, once per day at 00:30 (server time), results that are the specified number of days older than the latest bucket result are deleted from Elasticsearch. The default value is null, which means all results are retained.
     */
    results_retention_days?: long
    /**
     * A list of job groups. A job can belong to no groups or many.
     */
    groups?: string[]
    /**
     * An array of detector update objects.
     */
    detectors?: Detector[]
    /**
     * Settings related to how categorization interacts with partition fields.
     */
    per_partition_categorization?: PerPartitionCategorization
  }
}
