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
import { Id } from '@_types/common'
import { long } from '@_types/Numeric'
import { DateTime } from '@_types/Time'
import { Dictionary } from '@spec_utils/Dictionary'
import { UserDefinedValue } from '@spec_utils/UserDefinedValue'
import {
  ConnectorConfiguration,
  FilteringRules,
  IngestPipelineParams,
  SyncStatus
} from './Connector'

interface SyncJobConnectorReference {
  configuration: ConnectorConfiguration
  filtering: FilteringRules
  id: Id
  index_name: string
  language?: string
  pipeline?: IngestPipelineParams
  service_type: string
  sync_cursor?: UserDefinedValue
}

export enum SyncJobType {
  full,
  incremental,
  access_control
}

export enum SyncJobTriggerMethod {
  on_demand,
  scheduled
}

export interface ConnectorSyncJob {
  cancelation_requested_at?: DateTime
  canceled_at?: DateTime
  completed_at?: DateTime
  connector: SyncJobConnectorReference
  created_at: DateTime
  deleted_document_count: long
  error?: string
  id: Id
  indexed_document_count: long
  indexed_document_volume: long
  job_type: SyncJobType
  last_seen?: DateTime
  metadata: Dictionary<string, UserDefinedValue>
  started_at?: DateTime
  status: SyncStatus
  total_document_count: long
  trigger_method: SyncJobTriggerMethod
  worker_hostname?: string
}
