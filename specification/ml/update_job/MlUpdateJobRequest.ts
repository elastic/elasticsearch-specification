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
import { long } from '@_types/Numeric'
import { Duration } from '@_types/Time'
import {
  AnalysisMemoryLimit,
  PerPartitionCategorization
} from '@ml/_types/Analysis'
import { DetectorUpdate } from '@ml/_types/Detector'
import { ModelPlotConfig } from '@ml/_types/ModelPlot'
import { Dictionary } from '@spec_utils/Dictionary'
import { UserDefinedValue } from '@spec_utils/UserDefinedValue'

/**
 * Update an anomaly detection job.
 * Updates certain properties of an anomaly detection job.
 * @rest_spec_name ml.update_job
 * @availability stack since=5.5.0 stability=stable
 * @availability serverless stability=stable visibility=public
 * @cluster_privileges manage_ml
 * @doc_tag ml anomaly
 * @doc_id ml-update-job
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_ml/anomaly_detectors/{job_id}/_update'
      methods: ['POST']
    }
  ]
  path_parts: {
    /**
     * Identifier for the job.
     */
    job_id: Id
  }
  request_media_type: MediaType.Json
  response_media_type: MediaType.Json
  body: {
    /**
     * Advanced configuration option. Specifies whether this job can open when
     * there is insufficient machine learning node capacity for it to be
     * immediately assigned to a node. If `false` and a machine learning node
     * with capacity to run the job cannot immediately be found, the open
     * anomaly detection jobs API returns an error. However, this is also
     * subject to the cluster-wide `xpack.ml.max_lazy_ml_nodes` setting. If this
     * option is set to `true`, the open anomaly detection jobs API does not
     * return an error and the job waits in the opening state until sufficient
     * machine learning node capacity is available.
     * @server_default false
     * @doc_id ml-settings
     */
    allow_lazy_open?: boolean
    analysis_limits?: AnalysisMemoryLimit
    /**
     * Advanced configuration option. The time between each periodic persistence
     * of the model.
     * The default value is a randomized value between 3 to 4 hours, which
     * avoids all jobs persisting at exactly the same time. The smallest allowed
     * value is 1 hour.
     * For very large models (several GB), persistence could take 10-20 minutes,
     * so do not set the value too low.
     * If the job is open when you make the update, you must stop the datafeed,
     * close the job, then reopen the job and restart the datafeed for the
     * changes to take effect.
     */
    background_persist_interval?: Duration
    /**
     * Advanced configuration option. Contains custom meta data about the job.
     * For example, it can contain custom URL information as shown in Adding
     * custom URLs to machine learning results.
     * @doc_id ml.customUrls
     */
    custom_settings?: Dictionary<string, UserDefinedValue>
    categorization_filters?: string[]
    /**
     * A description of the job.
     */
    description?: string
    model_plot_config?: ModelPlotConfig
    model_prune_window?: Duration
    /**
     * Advanced configuration option, which affects the automatic removal of old
     * model snapshots for this job. It specifies a period of time (in days)
     * after which only the first snapshot per day is retained. This period is
     * relative to the timestamp of the most recent snapshot for this job. Valid
     * values range from 0 to `model_snapshot_retention_days`. For jobs created
     * before version 7.8.0, the default value matches
     * `model_snapshot_retention_days`.
     * @server_default 1
     * @doc_id ml-model-snapshots
     */
    daily_model_snapshot_retention_after_days?: long
    /**
     * Advanced configuration option, which affects the automatic removal of old
     * model snapshots for this job. It specifies the maximum period of time (in
     * days) that snapshots are retained. This period is relative to the
     * timestamp of the most recent snapshot for this job.
     * @server_default 10
     * @doc_id ml-model-snapshots
     */
    model_snapshot_retention_days?: long
    /**
     * Advanced configuration option. The period over which adjustments to the
     * score are applied, as new data is seen.
     */
    renormalization_window_days?: long
    /**
     * Advanced configuration option. The period of time (in days) that results
     * are retained. Age is calculated relative to the timestamp of the latest
     * bucket result. If this property has a non-null value, once per day at
     * 00:30 (server time), results that are the specified number of days older
     * than the latest bucket result are deleted from Elasticsearch. The default
     * value is null, which means all results are retained.
     */
    results_retention_days?: long
    /**
     * A list of job groups. A job can belong to no groups or many.
     */
    groups?: string[]
    /**
     * An array of detector update objects.
     */
    detectors?: DetectorUpdate[]
    /**
     * Settings related to how categorization interacts with partition fields.
     */
    per_partition_categorization?: PerPartitionCategorization
  }
}
