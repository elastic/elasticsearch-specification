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

import { ByteSize, VersionString } from '@_types/common'
import { integer } from '@_types/Numeric'
import { CategorizationAnalyzer } from '@ml/_types/Analysis'

export class Defaults {
  anomaly_detectors: AnomalyDetectors
  datafeeds: Datafeeds
}

export class NativeCode {
  build_hash: string
  version: VersionString
}

export class Limits {
  max_single_ml_node_processors?: integer
  total_ml_processors?: integer
  max_model_memory_limit?: ByteSize
  effective_max_model_memory_limit?: ByteSize
  total_ml_memory: ByteSize
}

export class Datafeeds {
  scroll_size: integer
}

export class AnomalyDetectors {
  categorization_analyzer: CategorizationAnalyzer
  categorization_examples_limit: integer
  model_memory_limit: string
  model_snapshot_retention_days: integer
  daily_model_snapshot_retention_after_days: integer
}
