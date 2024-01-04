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

/**
 * Updates the ingestion stats in the sync job document
 * @rest_spec_name connector_sync_job.update_stats
 * @availability stack since=8.12.0 stability=experimental
 * @availability serverless stability=experimental visibility=public
 * @doc_id connector-sync-job-update-stats
 */
export interface Request extends RequestBase {
  path_parts: {
    /**
     * The unique identifier of the connector sync job to be updated
     */
    connector_sync_job_id: Id
  }
  /**
   * Ingestion stats
   */
  body: {
    deleted_document_count: number
    indexed_document_count: number
    indexed_document_volume: number
    last_seen?: string | null
    total_document_count?: number | null
  }
}
