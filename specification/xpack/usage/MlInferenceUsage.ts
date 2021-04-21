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

import { long } from '@common/Numeric'
import { Dictionary } from '@spec_utils/Dictionary'
import { JobStatistics } from './JobStatistics'

export class MlInferenceUsage {
  ingest_processors: Dictionary<string, MlInferenceIngestProcessorUsage>
  trained_models: MlInferenceTrainedModelsUsage
}

export class MlInferenceIngestProcessorUsage {
  num_docs_processed: MlInferenceIngestProcessorCountUsage
  pipelines: MlUsageCounter
  num_failures: MlInferenceIngestProcessorCountUsage
  time_ms: MlInferenceIngestProcessorCountUsage
}

export class MlInferenceTrainedModelsUsage {
  estimated_operations?: JobStatistics
  estimated_heap_memory_usage_bytes?: JobStatistics
  count?: MlInferenceTrainedModelsCountUsage
  _all: MlUsageCounter
}

export class MlInferenceIngestProcessorCountUsage {
  max: long
  sum: long
  min: long
}

export class MlInferenceTrainedModelsCountUsage {
  total: long
  prepackaged: long
  other: long
  regression: long
  classification: long
}

export class MlUsageCounter {
  count: long
}
