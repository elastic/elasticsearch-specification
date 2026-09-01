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

import { AggregateName } from '@_types/common'
import { integer } from '@_types/Numeric'
import { ApiKey } from '@security/_types/ApiKey'
import { Dictionary } from '@spec_utils/Dictionary'
import { ApiKeyAggregate } from './types'

export class Response {
  body: {
    /**
     * The total number of API keys found.
     */
    total: integer
    /**
     * The number of API keys returned in the response.
     */
    count: integer
    /**
     * A list of API key information.
     */
    api_keys: ApiKey[]
    /**
     * The aggregations result, if requested.
     */
    aggregations?: Dictionary<AggregateName, ApiKeyAggregate>
  }
}
