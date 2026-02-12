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
 * Enroll Kibana.
 *
 * Enable a Kibana instance to configure itself for communication with a secured Elasticsearch cluster.
 *
 * NOTE: This API is currently intended for internal use only by Kibana.
 * Kibana uses this API internally to configure itself for communications with an Elasticsearch cluster that already has security features enabled.
 * @rest_spec_name security.enroll_kibana
 * @category security
 * @availability stack since=8.0.0 stability=stable
 * @doc_id security-api-kibana-enrollment
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_security/enroll/kibana'
      methods: ['GET']
    }
  ]
  request_media_type: MediaType.Json
  response_media_type: MediaType.Json
}
