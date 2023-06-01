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

import { DataStreamVisibility } from '@indices/_types/DataStream'
import { RequestBase } from '@_types/Base'
import {
  IndexName,
  Indices,
  Metadata,
  Name,
  VersionNumber
} from '@_types/common'
import { Duration } from '@_types/Time'
import { integer } from '@_types/Numeric'
import { IndexTemplateMapping } from '../put_index_template/IndicesPutIndexTemplateRequest'

/**
 * @rest_spec_name indices.simulate_index_template
 * @availability stack since=7.9.0 stability=stable
 * @availability serverless stability=stable visibility=public
 */
export interface Request extends RequestBase {
  path_parts: {
    /** Index or template name to simulate */
    name: Name
  }
  query_parameters: {
    /**
     * If `true`, the template passed in the body is only used if no existing
     * templates match the same index patterns. If `false`, the simulation uses
     * the template with the highest priority. Note that the template is not
     * permanently added or updated in either case; it is only used for the
     * simulation.
     * @server_default false
     * */
    create?: boolean
    /**
     * Period to wait for a connection to the master node. If no response is received
     * before the timeout expires, the request fails and returns an error.
     * @server_default 30s
     */
    master_timeout?: Duration
    /**
     * If true, returns all relevant default configurations for the index template.
     * @server_default false
     * @availability stack since=8.8.0 stability=experimental
     * @availability serverless stability=experimental
     */
    include_defaults?: boolean
  }
  body: {
    allow_auto_create?: boolean
    index_patterns?: Indices
    composed_of?: Name[]
    template?: IndexTemplateMapping
    data_stream?: DataStreamVisibility
    priority?: integer
    version?: VersionNumber
    /** @doc_id mapping-meta-field */
    _meta?: Metadata
  }
}
