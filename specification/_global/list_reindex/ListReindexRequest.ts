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
 * Get information about all currently running reindex tasks.
 *
 * Reindex tasks that are mid-relocation between nodes are reported once,
 * under their original task ID, so callers do not see duplicates across the relocation chain.
 *
 * The API only returns `200 OK` (outside of network errors or responses returned by integrations sitting between the client and Elasticsearch).
 * If `node_failures` or `task_failures` are non-empty in the body, the listing is not a complete authoritative listing and may be missing tasks.
 * @rest_spec_name list_reindex
 * @availability stack since=9.5.0 stability=stable visibility=public
 * @availability serverless stability=stable visibility=public
 * @doc_id docs-list-reindex
 * @doc_tag reindex
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_reindex'
      methods: ['GET']
    }
  ]
  response_media_type: MediaType.Json
  query_parameters: {
    /**
     * If `true`, include detailed task status information in the response.
     * @server_default false
     */
    detailed?: boolean
  }
}
