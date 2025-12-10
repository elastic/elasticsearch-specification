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
import { Id, MediaType } from '@_types/common'

/**
 * Check in a connector sync job.
 * Check in a connector sync job and set the `last_seen` field to the current time before updating it in the internal index.
 *
 * To sync data using self-managed connectors, you need to deploy the Elastic connector service on your own infrastructure.
 * This service runs automatically on Elastic Cloud for Elastic managed connectors.
 * @rest_spec_name connector.sync_job_check_in
 * @availability stack stability=experimental visibility=public
 * @doc_id connector-sync-job-checkin
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_connector/_sync_job/{connector_sync_job_id}/_check_in'
      methods: ['PUT']
    }
  ]
  path_parts: {
    /**
     * The unique identifier of the connector sync job to be checked in.
     */
    connector_sync_job_id: Id
  }
  response_media_type: MediaType.Json
}
