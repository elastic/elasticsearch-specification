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
 * Get a connector.
 *
 * Get the details about a connector.
 * @rest_spec_name connector.get
 * @availability stack since=8.12.0 stability=beta
 * @availability serverless stability=beta visibility=public
 * @doc_id connector-get
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_connector/{connector_id}'
      methods: ['GET']
    }
  ]
  path_parts: {
    /**
     * The unique identifier of the connector
     */
    connector_id: Id
  }
  query_parameters: {
    /**
     * A flag to indicate if the desired connector should be fetched, even if it was soft-deleted.
     * @server_default false
     */
    include_deleted?: boolean
  }
}
