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
 * Delete a connector.
 *
 * Removes a connector and associated sync jobs.
 * This is a destructive action that is not recoverable.
 * NOTE: This action doesn’t delete any API keys, ingest pipelines, or data indices associated with the connector.
 * These need to be removed manually.
 * @rest_spec_name connector.delete
 * @availability stack since=8.12.0 stability=beta
 * @availability serverless stability=beta visibility=public
 * @doc_id connector-delete
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_connector/{connector_id}'
      methods: ['DELETE']
    }
  ]
  path_parts: {
    /**
     * The unique identifier of the connector to be deleted
     */
    connector_id: Id
  }
  response_media_type: MediaType.Json
  query_parameters: {
    /**
     * A flag indicating if associated sync jobs should be also removed.
     * @server_default false
     */
    delete_sync_jobs?: boolean
    /**
     * A flag indicating if the connector should be hard deleted.
     * @server_default false
     */
    hard?: boolean
  }
}
