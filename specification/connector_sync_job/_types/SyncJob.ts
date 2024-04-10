import { Id } from '@_types/common'
import { long } from '@_types/Numeric'
import { Dictionary } from '@spec_utils/Dictionary'
import { UserDefinedValue } from '@spec_utils/UserDefinedValue'
import { WithNullValue } from '@spec_utils/utils'
import {
  ConnectorConfiguration,
  FilteringConfig,
  IngestPipelineParams,
  SyncStatus
} from '../../connector/_types/Connector'

interface SyncJobConnectorReference {
  configuration: ConnectorConfiguration
  filtering: FilteringConfig
  id: Id
  index_name: string
  language?: string
  pipeline: IngestPipelineParams
  service_type: string
}

enum SyncJobType {
  full,
  incremental,
  access_control
}

enum TriggerMethod {
  on_demand,
  scheduled
}

export interface ConnectorSyncJob {
  cancelation_requested_at?: string
  canceled_at?: string
  completed_at?: string
  connector: SyncJobConnectorReference
  created_at: string
  deleted_document_count: long
  error: WithNullValue<string>
  id: Id
  indexed_document_count: long
  indexed_document_volume: long
  job_type: SyncJobType
  last_seen?: string
  metadata: Dictionary<string, UserDefinedValue>
  started_at?: string
  status: SyncStatus
  total_document_count?: long
  trigger_method: TriggerMethod
  worker_hostname?: string
}
