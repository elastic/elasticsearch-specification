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
import { RequestBase } from '@_types/Base'
import { Id } from '@_types/common'
import { SyncStatus } from '../_types/Connector'

/**
 * Updates the scheduling field in the connector document
 * @rest_spec_name connector.last_sync
 * @availability stack since=8.12.0 stability=experimental
 * @availability serverless stability=experimental visibility=public
 */
export interface Request extends RequestBase {
  path_parts: {
    /**
     * The unique identifier of the connector to be updated
     */
    connector_id: Id
  }
  /**
   * The connector scheduling object
   */
  body: {
    last_access_control_sync_error: string | null
    last_access_control_sync_scheduled_at: string | null
    last_access_control_sync_status: SyncStatus | null
    last_deleted_document_count: number | null
    last_incremental_sync_scheduled_at: string | null
    last_indexed_document_count: number | null
    last_seen: string | null
    last_sync_error: string | null
    last_sync_scheduled_at: string | null
    last_sync_status: SyncStatus | null
    last_synced: string | null
  }
}
