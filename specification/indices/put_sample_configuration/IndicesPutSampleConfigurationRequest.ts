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
import { ByteSize, IndexName } from '@_types/common'
import { double, integer } from '@_types/Numeric'
import { Duration } from '@_types/Time'
import { Stringified } from '@spec_utils/Stringified'

/**
 * Create or update sampling configuration.
 * Create or update the sampling configuration for the specified index.
 * @rest_spec_name indices.put_sample_configuration
 * @availability stack visibility=feature_flag feature_flag=random_sampling since=9.3.0 stability=experimental
 * @doc_id indices-put-sample-configuration
 * @doc_tag random_sample
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/{index}/_sample/config'
      methods: ['PUT']
    }
  ]
  path_parts: {
    /**
     * The name of the index or data stream.
     */
    index: IndexName
  }
  query_parameters: {
    /**
     * Period to wait for a connection to the master node. If no response is
     * received before the timeout expires, the request fails and returns an
     * error.
     * @server_default 30s
     */
    master_timeout?: Duration
    /**
     * Period to wait for a response.
     * If no response is received before the timeout expires, the request fails and returns an error.
     * @server_default 30s
     */
    timeout?: Duration
  }
  body: {
    /**
     * The fraction of documents to sample. Must be greater than 0 and less than or equal to 1.
     * Can be specified as a number or a string.
     */
    rate: Stringified<double>
    /**
     * The maximum number of documents to sample. Must be greater than 0 and less than or equal to 10,000.
     * @server_default 100
     */
    max_samples?: integer
    /**
     * The maximum total size of sampled documents. Must be greater than 0 and less than or equal to 5GB.
     * @server_default 1GB
     */
    max_size?: ByteSize
    /**
     * The duration for which the sampled documents should be retained.
     * Must be greater than 0 and less than or equal to 30 days.
     * @server_default 10d
     */
    time_to_live?: Duration
    /**
     * An optional condition script that sampled documents must satisfy.
     */
    if?: string
  }
}
