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
import { IndexAlias, IndexName, MediaType } from '@_types/common'
import { Duration } from '@_types/Time'
import { Checkpoint } from '../_types/Checkpoints'

/**
 * Get global checkpoints.
 *
 * Get the current global checkpoints for an index.
 * This API is designed for internal use by the Fleet server project.
 * @rest_spec_name fleet.global_checkpoints
 * @category ingest
 * @availability stack since=7.13.0 stability=stable
 * @availability serverless stability=stable visibility=private
 * @doc_id get-global-checkpoints
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/{index}/_fleet/global_checkpoints'
      methods: ['GET']
    }
  ]
  path_parts: {
    /**
     * A single index or index alias that resolves to a single index.
     */
    // eslint-disable-next-line es-spec-validator/no-inline-unions -- TODO: create named alias
    index: IndexName | IndexAlias
  }
  request_media_type: MediaType.Json
  response_media_type: MediaType.Json
  query_parameters: {
    /**
     * A boolean value which controls whether to wait (until the timeout) for the global checkpoints
     * to advance past the provided `checkpoints`.
     * @server_default false
     */
    wait_for_advance?: boolean
    /**
     * A boolean value which controls whether to wait (until the timeout) for the target index to exist
     * and all primary shards be active. Can only be true when `wait_for_advance` is true.
     * @server_default false
     */
    wait_for_index?: boolean
    /**
     * A comma separated list of previous global checkpoints. When used in combination with `wait_for_advance`,
     * the API will only return once the global checkpoints advances past the checkpoints. Providing an empty list
     * will cause Elasticsearch to immediately return the current global checkpoints.
     * @server_default []
     */
    checkpoints?: Checkpoint[]
    /**
     * Period to wait for a global checkpoints to advance past `checkpoints`.
     * @server_default 30s
     */
    timeout?: Duration
  }
}
