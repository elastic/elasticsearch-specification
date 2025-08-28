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
import { IndexName } from '@_types/common'

/**
 * Create a connector.
 *
 * Connectors are Elasticsearch integrations that bring content from third-party data sources, which can be deployed on Elastic Cloud or hosted on your own infrastructure.
 * Elastic managed connectors (Native connectors) are a managed service on Elastic Cloud.
 * Self-managed connectors (Connector clients) are self-managed on your infrastructure.
 * @rest_spec_name connector.post
 * @availability stack since=8.12.0 stability=beta
 * @availability serverless stability=beta visibility=public
 * @doc_id connector-post
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_connector'
      methods: ['POST']
    }
  ]
  /**
   * The connector document to be created
   */
  /** @codegen_name connector */
  body?: {
    description?: string
    index_name?: IndexName
    is_native?: boolean
    language?: string
    name?: string
    service_type?: string
  }
}
