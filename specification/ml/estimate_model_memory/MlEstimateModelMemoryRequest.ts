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

import { AnalysisConfig } from '@ml/_types/Analysis'
import { Dictionary } from '@spec_utils/Dictionary'
import { RequestBase } from '@_types/Base'
import { Field } from '@_types/common'
import { long } from '@_types/Numeric'

/**
 * @rest_spec_name ml.estimate_model_memory
 * @since 7.7.0
 * @stability TODO
 */
export interface Request extends RequestBase {
  body?: {
    analysis_config?: AnalysisConfig
    max_bucket_cardinality?: Dictionary<Field, long>
    overall_cardinality?: Dictionary<Field, long>
  }
}
