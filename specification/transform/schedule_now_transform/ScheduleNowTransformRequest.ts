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
import { Duration } from '@_types/Time'

/**
 * Schedule a transform to start now.
 *
 * Instantly run a transform to process data.
 * If you run this API, the transform will process the new data instantly,
 * without waiting for the configured frequency interval. After the API is called,
 * the transform will be processed again at `now + frequency` unless the API
 * is called again in the meantime.
 * @rest_spec_name transform.schedule_now_transform
 * @availability stack since=8.7.0 stability=stable
 * @availability serverless stability=stable visibility=public
 * @cluster_privileges manage_transform
 * @doc_id schedule-now-transform
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_transform/{transform_id}/_schedule_now'
      methods: ['POST']
    }
  ]
  path_parts: {
    /**
     * Identifier for the transform.
     */
    transform_id: Id
  }
  query_parameters: {
    /**
     * Controls the time to wait for the scheduling to take place
     * @server_default 30s
     */
    timeout?: Duration
  }
}
