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
import { ExpandWildcards, Id, IndexName } from '@_types/common'
import { long } from '@_types/Numeric'
import { Duration } from '@_types/Time'
import { AnalysisConfig, AnalysisLimits } from '@ml/_types/Analysis'
import { DatafeedConfig } from '@ml/_types/Datafeed'
import { DataDescription } from '@ml/_types/Job'
import { ModelPlotConfig } from '@ml/_types/ModelPlot'
import { CustomSettings } from '@ml/_types/Settings'

/**
 * Create an anomaly detection job.
 *
 * If you include a `datafeed_config`, you must have read index privileges on the source index.
 * If you include a `datafeed_config` but do not provide a query, the datafeed uses `{"match_all": {"boost": 1}}`.
 * @rest_spec_name ml.put_job
 * @availability stack since=5.4.0 stability=stable
 * @availability serverless stability=stable visibility=public
 * @index_privileges read
 * @cluster_privileges manage_ml
 * @doc_tag ml anomaly
 * @doc_id ml-put-job
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_ml/anomaly_detectors/{job_id}'
      methods: ['PUT']
    }
  ]
  path_parts: {
    /**
     * The identifier for the anomaly detection job. This identifier can contain lowercase alphanumeric characters (a-z and 0-9), hyphens, and underscores. It must start and end with alphanumeric characters.
     */
    job_id: Id
  }
  query_parameters: {
    /**
     * If `true`, wildcard indices expressions that resolve into no concrete indices are ignored. This includes the
     * `_all` string or when no indices are specified.
     * @server_default true
     */
    allow_no_indices?: boolean
    /**
     * Type of index that wildcard patterns can match. If the request can target data streams, this argument determines
     * whether wildcard expressions match hidden data streams. Supports comma-separated values.
     * @server_default open
     */
    expand_wildcards?: ExpandWildcards
    /**
     * If `true`, concrete, expanded or aliased indices are ignored when frozen.
     * @server_default true
     * @deprecated 7.16.0
     */
    ignore_throttled?: boolean
    /**
     * If `true`, unavailable indices (missing or closed) are ignored.
     * @server_default false
     */
    ignore_unavailable?: boolean
  }
  body: {
    /**
     * Advanced configuration option. Specifies whether this job can open when there is insufficient machine learning node capacity for it to be immediately assigned to a node. By default, if a machine learning node with capacity to run the job cannot immediately be found, the open anomaly detection jobs API returns an error. However, this is also subject to the cluster-wide `xpack.ml.max_lazy_ml_nodes` setting. If this option is set to true, the open anomaly detection jobs API does not return an error and the job waits in the opening state until sufficient machine learning node capacity is available.
     * @server_default false
     */
    allow_lazy_open?: boolean
    /**
     * Specifies how to analyze the data. After you create a job, you cannot change the analysis configuration; all the properties are informational.
     */
    analysis_config: AnalysisConfig
    /**
     * Limits can be applied for the resources required to hold the mathematical models in memory. These limits are approximate and can be set per job. They do not control the memory used by other processes, for example the Elasticsearch Java processes.
     */
    analysis_limits?: AnalysisLimits
    /**
     * Advanced configuration option. The time between each periodic persistence of the model. The default value is a randomized value between 3 to 4 hours, which avoids all jobs persisting at exactly the same time. The smallest allowed value is 1 hour. For very large models (several GB), persistence could take 10-20 minutes, so do not set the `background_persist_interval` value too low.
     */
    background_persist_interval?: Duration
    /**
     *  Advanced configuration option. Contains custom meta data about the job.
     */
    custom_settings?: CustomSettings
    /**
     * Advanced configuration option, which affects the automatic removal of old model snapshots for this job. It specifies a period of time (in days) after which only the first snapshot per day is retained. This period is relative to the timestamp of the most recent snapshot for this job. Valid values range from 0 to `model_snapshot_retention_days`.
     * @server_default 1
     */
    daily_model_snapshot_retention_after_days?: long
    /**
     * Defines the format of the input data when you send data to the job by using the post data API. Note that when configure a datafeed, these properties are automatically set. When data is received via the post data API, it is not stored in Elasticsearch. Only the results for anomaly detection are retained.
     */
    data_description: DataDescription
    /**
     * Defines a datafeed for the anomaly detection job. If Elasticsearch security features are enabled, your datafeed remembers which roles the user who created it had at the time of creation and runs the query using those same roles. If you provide secondary authorization headers, those credentials are used instead.
     */
    datafeed_config?: DatafeedConfig
    /**
     *  A description of the job.
     */
    description?: string
    /**
     * The identifier for the anomaly detection job. This identifier can contain lowercase alphanumeric characters (a-z and 0-9), hyphens, and underscores. It must start and end with alphanumeric characters.
     */
    job_id?: Id
    /**
     * A list of job groups. A job can belong to no groups or many.
     */
    groups?: string[]
    /**
     * This advanced configuration option stores model information along with the results. It provides a more detailed view into anomaly detection. If you enable model plot it can add considerable overhead to the performance of the system; it is not feasible for jobs with many entities. Model plot provides a simplified and indicative view of the model and its bounds. It does not display complex features such as multivariate correlations or multimodal data. As such, anomalies may occasionally be reported which cannot be seen in the model plot. Model plot config can be configured when the job is created or updated later. It must be disabled if performance issues are experienced.
     */
    model_plot_config?: ModelPlotConfig
    /**
     * Advanced configuration option, which affects the automatic removal of old model snapshots for this job. It specifies the maximum period of time (in days) that snapshots are retained. This period is relative to the timestamp of the most recent snapshot for this job. By default, snapshots ten days older than the newest snapshot are deleted.
     * @server_default 10
     */
    model_snapshot_retention_days?: long
    /**
     * Advanced configuration option. The period over which adjustments to the score are applied, as new data is seen. The default value is the longer of 30 days or 100 bucket spans.
     */
    renormalization_window_days?: long
    /**
     * A text string that affects the name of the machine learning results index. By default, the job generates an index named `.ml-anomalies-shared`.
     *  @server_default shared
     */
    results_index_name?: IndexName
    /***
     * Advanced configuration option. The period of time (in days) that results are retained. Age is calculated relative to the timestamp of the latest bucket result. If this property has a non-null value, once per day at 00:30 (server time), results that are the specified number of days older than the latest bucket result are deleted from Elasticsearch. The default value is null, which means all results are retained. Annotations generated by the system also count as results for retention purposes; they are deleted after the same number of days as results. Annotations added by users are retained forever.
     */
    results_retention_days?: long
  }
}
