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
import { ConnectorFeatures } from '../_types/Connector'

/**
 * Update the connector features.
 *
 * Update the connector features in the connector document.
 * This API can be used to control the following aspects of a connector:
 *
 * * document-level security
 * * incremental syncs
 * * advanced sync rules
 * * basic sync rules
 *
 * Normally, the running connector service automatically manages these features.
 * However, you can use this API to override the default behavior.
 *
 * To sync data using self-managed connectors, you need to deploy the Elastic connector service on your own infrastructure.
 * This service runs automatically on Elastic Cloud for Elastic managed connectors.
 * @rest_spec_name connector.update_features
 * @category management
 * @availability stack stability=experimental visibility=public
 * @doc_id connector-features
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_connector/{connector_id}/_features'
      methods: ['PUT']
    }
  ]
  path_parts: {
    /**
     * The unique identifier of the connector to be updated.
     */
    connector_id: Id
  }
  request_media_type: MediaType.Json
  response_media_type: MediaType.Json
  /**
   * The connector configuration
   */
  body: {
    features: ConnectorFeatures
  }
}
