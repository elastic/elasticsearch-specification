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

import { Id, IndexName, long } from '../../__common/common';
import { RequestBase } from '../../__common/common_abstractions/request/RequestBase';
import { AnalysisConfig } from '../job/config/AnalysisConfig';
import { AnalysisLimits } from '../job/config/AnalysisLimits';
import { DataDescription } from '../job/config/DataDescription';
import { ModelPlotConfig } from '../job/config/ModelPlotConfig';

/**
 * @rest_spec_name ml.validate
 * @since 6.3.0
 * @stability TODO
 */
export interface ValidateJobRequest extends RequestBase {
  query_parameters?: {}
  body?: {
    job_id?: Id
    analysis_config?: AnalysisConfig
    analysis_limits?: AnalysisLimits
    data_description?: DataDescription
    description?: string
    model_plot?: ModelPlotConfig
    model_snapshot_retention_days?: long
    results_index_name?: IndexName
  }
}
