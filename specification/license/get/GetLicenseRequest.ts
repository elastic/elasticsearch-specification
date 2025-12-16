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
import { MediaType } from '@_types/common'

/**
 * Get license information.
 *
 * Get information about your Elastic license including its type, its status, when it was issued, and when it expires.
 *
 * >info
 * > If the master node is generating a new cluster state, the get license API may return a `404 Not Found` response.
 * > If you receive an unexpected 404 response after cluster startup, wait a short period and retry the request.
 * @rest_spec_name license.get
 * @availability stack stability=stable
 * @availability serverless stability=stable visibility=public
 * @doc_id get-license
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_license'
      methods: ['GET']
    }
  ]
  response_media_type: MediaType.Json
  query_parameters: {
    /**
     * If `true`, this parameter returns enterprise for Enterprise license types. If `false`, this parameter returns platinum for both platinum and enterprise license types. This behavior is maintained for backwards compatibility.
     * This parameter is deprecated and will always be set to true in 8.x.
     * @deprecated 7.6.0
     * @server_default true
     */
    accept_enterprise?: boolean
    /**
     * Specifies whether to retrieve local information.
     * From 9.2 onwards the default value is `true`, which means the information is retrieved from the responding node.
     * In earlier versions the default is `false`, which means the information is retrieved from the elected master node.
     * @server_default true
     */
    local?: boolean
  }
}
