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
import { Id, MediaType, Metadata } from '@_types/common'
import { integer, long } from '@_types/Numeric'
import { Duration } from '@_types/Time'

/**
 * Set the connector sync job stats.
 *
 * Stats include: `deleted_document_count`, `indexed_document_count`, `indexed_document_volume`, and `total_document_count`.
 * You can also update `last_seen`.
 * This API is mainly used by the connector service for updating sync job information.
 *
 * To sync data using self-managed connectors, you need to deploy the Elastic connector service on your own infrastructure.
 * This service runs automatically on Elastic Cloud for Elastic managed connectors.
 * @rest_spec_name connector.sync_job_update_stats
 * @category management
 * @availability stack stability=experimental visibility=public
 * @doc_id connector-sync-job-stats
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_connector/_sync_job/{connector_sync_job_id}/_stats'
      methods: ['PUT']
    }
  ]
  /**
   * The sync job to be created
   */
  path_parts: {
    /**
     * The unique identifier of the connector sync job.
     */
    connector_sync_job_id: Id
  }
  request_media_type: MediaType.Json
  response_media_type: MediaType.Json
  body: {
    /**
     * The number of documents the sync job deleted.
     */
    deleted_document_count: long
    /**
     * The number of documents the sync job indexed.
     */
    indexed_document_count: long
    /**
     * The total size of the data (in MiB) the sync job indexed.
     */
    indexed_document_volume: long
    /**
     * The timestamp to use in the `last_seen` property for the connector sync job.
     */
    last_seen?: Duration
    /**
     * The connector-specific metadata.
     */
    metadata?: Metadata
    /**
     * The total number of documents in the target index after the sync job finished.
     */
    total_document_count?: integer
  }
}
