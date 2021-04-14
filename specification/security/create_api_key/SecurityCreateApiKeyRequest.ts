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

import { Name } from '../../__common/common'
import { Refresh } from '../../__common/common/Refresh'
import { RequestBase } from '../../__common/common_abstractions/request/RequestBase'
import { Time } from '../../__common/common_options/time_unit/Time'
import { Dictionary } from '../../__spec_utils/Dictionary'
import { ApiKeyRole } from './ApiKeyRole'

/**
 * @rest_spec_name security.create_api_key
 * @since 6.7.0
 * @stability TODO
 */
export interface SecurityCreateApiKeyRequest extends RequestBase {
  query_parameters?: {
    refresh?: Refresh
  }
  body?: {
    expiration?: Time
    name?: Name
    role_descriptors?: Dictionary<string, ApiKeyRole>
  }
}
