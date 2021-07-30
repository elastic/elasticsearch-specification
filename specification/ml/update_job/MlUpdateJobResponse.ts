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

import { AnalysisConfig, AnalysisLimits } from '@ml/_types/Analysis'
import { DataDescription } from '@ml/_types/Job'
import { ModelPlotConfig } from '@ml/_types/ModelPlot'
import { CustomSettings } from '@ml/_types/Settings'
import { Id } from '@_types/common'
import { long } from '@_types/Numeric'
import { DateString, Time } from '@_types/Time'
import { Datafeed } from '@ml/_types/Datafeed'

export class Response {
  body: {
    allow_lazy_open: boolean
    analysis_config: AnalysisConfig
    analysis_limits: AnalysisLimits
    background_persist_interval?: Time
    create_time: Time
    custom_settings?: CustomSettings
    daily_model_snapshot_retention_after_days: long
    data_description: DataDescription
    datafeed_config?: Datafeed
    description?: string
    groups?: string[]
    job_id: Id
    job_type: string
    job_version: string
    finished_time?: Time
    model_plot_config?: ModelPlotConfig
    model_snapshot_id?: Id
    model_snapshot_retention_days: long
    renormalization_window_days?: long
    results_index_name: string
    results_retention_days?: long
  }
}
