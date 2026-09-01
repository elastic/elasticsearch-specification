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
import { RegionPolicy } from '@inference/_types/RegionPolicy'

/**
 * Create or update the inference region policy.
 *
 * The region policy restricts inference to a set of allowed geographic areas or cloud service provider regions.
 * @rest_spec_name inference.put_region_policy
 * @availability stack since=9.5.0 stability=stable visibility=public
 * @availability serverless stability=stable visibility=public
 * @cluster_privileges manage_inference
 * @doc_id inference-api-put-region-policy
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_inference/_region_policy'
      methods: ['PUT']
    }
  ]
  request_media_type: MediaType.Json
  response_media_type: MediaType.Json
  query_parameters: {
    /**
     * If `true`, the region policy is applied even if it would deny access to inference endpoints that are currently in use by ingest pipeline or indices.
     * @server_default false
     */
    force?: boolean
  }
  body: {
    /**
     * The region policy configuration.
     */
    region_policy: RegionPolicy
  }
}
