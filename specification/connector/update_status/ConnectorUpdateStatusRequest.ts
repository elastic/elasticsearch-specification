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
import { ConnectorStatus } from '../_types/Connector'

/**
 * Update the connector status.
 * @rest_spec_name connector.update_status
 * @availability stack since=8.12.0 stability=experimental
 * @availability serverless stability=experimental visibility=public
 * @doc_id connector-update-status
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_connector/{connector_id}/_status'
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
   * The connector service type
   */
  body: {
    status: ConnectorStatus
  }
}
