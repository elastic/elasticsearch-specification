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
import { UserDefinedValue } from '@spec_utils/UserDefinedValue'

/**
 * Claim a connector sync job.
 * This action updates the job status to `in_progress` and sets the `last_seen` and `started_at` timestamps to the current time.
 * Additionally, it can set the `sync_cursor` property for the sync job.
 *
 * This API is not intended for direct connector management by users.
 * It supports the implementation of services that utilize the connector protocol to communicate with Elasticsearch.
 *
 * To sync data using self-managed connectors, you need to deploy the Elastic connector service on your own infrastructure.
 * This service runs automatically on Elastic Cloud for Elastic managed connectors.
 * @rest_spec_name connector.sync_job_claim
 * @availability stack stability=experimental visibility=public
 * @doc_id connector-sync-job-claim
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_connector/_sync_job/{connector_sync_job_id}/_claim'
      methods: ['PUT']
    }
  ]
  path_parts: {
    /**
     * The unique identifier of the connector sync job.
     */
    connector_sync_job_id: Id
  }
  body: {
    /**
     * The cursor object from the last incremental sync job.
     * This should reference the `sync_cursor` field in the connector state for which the job runs.
     */
    sync_cursor?: UserDefinedValue
    /**
     * The host name of the current system that will run the job.
     */
    worker_hostname: string
  }
}
