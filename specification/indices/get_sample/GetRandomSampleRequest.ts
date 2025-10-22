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
 * Request for a random sample of raw documents ingested into the given index or data stream.
 *
 * @rest_spec_name indices.get_sample
 * @availability stack visibility=feature_flag feature_flag=random_sampling since=9.3.0 stability=experimental
 * @doc_id random_sample
 * @doc_tag random_sample
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/{index}/_sample'
      methods: ['GET']
    }
  ]
  path_parts: {
    /**
     * Single index or data stream name. Wildcards are not supported.
     */
    index: IndexName
  }
}
