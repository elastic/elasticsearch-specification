import { Id } from '@_types/common'
import { Dictionary } from '@spec_utils/Dictionary'
import { UserDefinedValue } from '@spec_utils/UserDefinedValue'

import {
  ConnectorConfiguration,
  FilteringConfig,
  IngestPipelineParams,
  SyncStatus
} from '../../connector/_types/Connector'

export enum SyncJobType {
  FULL = 'full',
  INCREMENTAL = 'incremental',
  ACCESS_CONTROL = 'access_control'
}

export enum TriggerMethod {
  ON_DEMAND = 'on_demand',
  SCHEDULED = 'scheduled'
}

interface SyncJobConnector {
  configuration: ConnectorConfiguration
  filtering: FilteringConfig[]
  id: Id
  index_name: string
  language: string | null
  pipeline: IngestPipelineParams | null
  service_type: string | null
}

export interface ConnectorSyncJob {
  cancelation_requested_at: string | null
  canceled_at: string | null
  completed_at: string | null
  connector: SyncJobConnector
  created_at: string
  deleted_document_count: number
  error: string | null
  id: Id
  indexed_document_count: number
  indexed_document_volume: number
  job_type: SyncJobType
  last_seen: string | null
  metadata: Dictionary<string, UserDefinedValue>
  started_at: string | null
  status: SyncStatus
  total_document_count: number | null
  trigger_method: TriggerMethod
  worker_hostname: string | null
}
