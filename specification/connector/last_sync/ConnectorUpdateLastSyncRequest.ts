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
import { long } from '@_types/Numeric'
import { DateTime } from '@_types/Time'
import { UserDefinedValue } from '@spec_utils/UserDefinedValue'
import { SyncStatus } from '../_types/Connector'

/**
 * Update the connector last sync stats.
 *
 * Update the fields related to the last sync of a connector.
 * This action is used for analytics and monitoring.
 * @rest_spec_name connector.last_sync
 * @availability stack since=8.12.0 stability=experimental visibility=private
 * @availability serverless stability=experimental visibility=private
 * @doc_id connector-last-sync
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_connector/{connector_id}/_last_sync'
      methods: ['PUT']
    }
  ]
  path_parts: {
    /**
     * The unique identifier of the connector to be updated
     */
    connector_id: Id
  }
  /**
   * Connector last sync stats
   */
  body: {
    last_access_control_sync_error?: string
    last_access_control_sync_scheduled_at?: DateTime
    last_access_control_sync_status?: SyncStatus
    last_deleted_document_count?: long
    last_incremental_sync_scheduled_at?: DateTime
    last_indexed_document_count?: long
    last_seen?: DateTime
    last_sync_error?: string
    last_sync_scheduled_at?: DateTime
    last_sync_status?: SyncStatus
    last_synced?: DateTime
    sync_cursor?: UserDefinedValue
  }
}
