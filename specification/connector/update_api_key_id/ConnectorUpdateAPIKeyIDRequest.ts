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
import { WithNullValue } from '@spec_utils/utils'

/**
 * Updates the API key id in the connector document
 * @rest_spec_name connector.update_api_key_id
 * @availability stack since=8.12.0 stability=beta
 * @availability serverless stability=beta visibility=public
 * @doc_id connector-update-api-key-id
 */
export interface Request extends RequestBase {
  path_parts: {
    /**
     * The unique identifier of the connector to be updated
     */
    connector_id: Id
  }
  /**
   * The connector api key request body
   */
  body: {
    api_key_id?: string
    api_key_secret_id?: string
  }
}
