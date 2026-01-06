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
import { IndexName, MediaType } from '@_types/common'
import { Duration } from '@_types/Time'

/**
 * Convert an index alias to a data stream.
 *
 * Converts an index alias to a data stream.
 * You must have a matching index template that is data stream enabled.
 * The alias must meet the following criteria:
 * The alias must have a write index;
 * All indices for the alias must have a `@timestamp` field mapping of a `date` or `date_nanos` field type;
 * The alias must not have any filters;
 * The alias must not use custom routing.
 * If successful, the request removes the alias and creates a data stream with the same name.
 * The indices for the alias become hidden backing indices for the stream.
 * The write index for the alias becomes the write index for the stream.
 * @rest_spec_name indices.migrate_to_data_stream
 * @availability stack since=7.9.0 stability=stable
 * @availability serverless stability=stable visibility=public
 * @index_privileges manage
 * @doc_tag data stream
 * @doc_id data-stream-migrate
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_data_stream/_migrate/{name}'
      methods: ['POST']
    }
  ]
  path_parts: {
    /** Name of the index alias to convert to a data stream. */
    name: IndexName
  }
  response_media_type: MediaType.Json
  query_parameters: {
    /**
     * Period to wait for a connection to the master node. If no response is received before the timeout expires, the request fails and returns an error.
     * @server_default 30s
     */
    master_timeout?: Duration
    /**
     * Period to wait for a response. If no response is received before the timeout expires, the request fails and returns an error.
     * @server_default 30s
     */
    timeout?: Duration
  }
}
