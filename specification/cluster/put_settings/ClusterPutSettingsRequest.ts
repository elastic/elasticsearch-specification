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

import { Dictionary } from '@spec_utils/Dictionary'
import { UserDefinedValue } from '@spec_utils/UserDefinedValue'
import { RequestBase } from '@_types/Base'
import { Duration } from '@_types/Time'

/**
 * @rest_spec_name cluster.put_settings
 * @availability stack since=0.0.0 stability=stable
 * @availability serverless stability=stable visibility=public
 * @doc_id cluster-update-settings
 */
export interface Request extends RequestBase {
  query_parameters: {
    flat_settings?: boolean
    /** @server_default 30s */
    master_timeout?: Duration
    /** @server_default 30s */
    timeout?: Duration
  }
  body: {
    persistent?: Dictionary<string, UserDefinedValue>
    transient?: Dictionary<string, UserDefinedValue>
  }
}
