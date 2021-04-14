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

import { Id, long, VersionString } from '../../../__common/common'
import { Time } from '../../../__common/common_options/time_unit/Time'
import { ModelSizeStats } from './ModelSizeStats'

export class ModelSnapshot {
  description: string
  job_id: Id
  latest_record_time_stamp: Time
  latest_result_time_stamp: Time
  model_size_stats: ModelSizeStats
  retain: boolean
  snapshot_doc_count: long
  snapshot_id: Id
  timestamp: Time
  min_version: VersionString
}
