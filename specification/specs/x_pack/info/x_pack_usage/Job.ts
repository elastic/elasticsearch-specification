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

class Job {
  allow_lazy_open?: boolean
  analysis_config?: AnalysisConfig
  analysis_limits?: AnalysisLimits
  background_persist_interval?: Time
  count: integer
  created_by: EmptyObject
  create_time?: integer
  detectors?: JobStatistics
  data_description?: DataDescription
  description?: string
  finished_time?: integer
  forecasts: MlJobForecasts
  job_id?: Id
  job_type?: string
  model_plot?: ModelPlotConfig
  model_size?: JobStatistics
  model_snapshot_id?: Id
  model_snapshot_retention_days?: long
  renormalization_window_days?: long
  results_index_name?: IndexName
  results_retention_days?: long
  groups?: string[]
  model_plot_config?: ModelPlotConfig
  custom_settings?: CustomSettings
  job_version?: VersionString
  deleting?: boolean
  daily_model_snapshot_retention_after_days?: long
}

class CustomSettings {
  custom_urls?: UrlConfig[]
  created_by?: string
  job_tags?: Dictionary<string, string>
}

class BaseUrlConfig {
  url_name: string
  url_value: string
}

class KibanaUrlConfig extends BaseUrlConfig {
  time_range?: string
}

type UrlConfig = BaseUrlConfig | KibanaUrlConfig

class MlJobForecasts {
  total: long
  forecasted_jobs: long
}
