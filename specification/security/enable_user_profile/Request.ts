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
import { Refresh } from '@_types/common'

/**
 * Enables a user profile so it's visible in user profile searches.
 * @rest_spec_name security.enable_user_profile
 * @since 8.2.0
 * @stability experimental
 */
export interface Request extends RequestBase {
  path_parts: {
    /**
     * Unique identifier for the user profile.
     */
    uid: string
  }
  query_parameters: {
    /**
     * If 'true', Elasticsearch refreshes the affected shards to make this operation
     * visible to search, if 'wait_for' then wait for a refresh to make this operation
     * visible to search, if 'false' do nothing with refreshes.
     * @server_default false
     */
    refresh?: Refresh
  }
}
