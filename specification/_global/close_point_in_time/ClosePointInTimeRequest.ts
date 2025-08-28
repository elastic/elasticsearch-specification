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
 * Close a point in time.
 * A point in time must be opened explicitly before being used in search requests.
 * The `keep_alive` parameter tells Elasticsearch how long it should persist.
 * A point in time is automatically closed when the `keep_alive` period has elapsed.
 * However, keeping points in time has a cost; close them as soon as they are no longer required for search requests.
 * @rest_spec_name close_point_in_time
 * @availability stack since=7.10.0 stability=stable
 * @availability serverless stability=stable visibility=public
 * @doc_id point-in-time-api
 * @doc_tag search
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_pit'
      methods: ['DELETE']
    }
  ]
  body: {
    /**
     * The ID of the point-in-time.
     */
    id: Id
  }
}
