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
import { Refresh, SequenceNumber } from '@_types/common'
import { long } from '@_types/Numeric'

/**
 * Updates specific data for the user profile that's associated with the specified unique ID.
 * @rest_spec_name security.update_user_profile_data
 * @since 8.2.0
 * @stability experimental
 */
export interface Request extends RequestBase {
  path_parts: {
    /**
     * A unique identifier for the user profile.
     */
    uid: string
  }
  query_parameters: {
    /**
     * Only perform the operation if the document has this sequence number.
     */
    if_seq_no?: SequenceNumber
    /**
     * Only perform the operation if the document has this primary term.
     */
    if_primary_term?: long
    /**
     * If 'true', Elasticsearch refreshes the affected shards to make this operation
     * visible to search, if 'wait_for' then wait for a refresh to make this operation
     * visible to search, if 'false' do nothing with refreshes.
     * @server_default false
     */
    refresh?: Refresh
  }
  body: {
    /**
     * Searchable data that you want to associate with the user profile. This
     * field supports a nested data structure.
     */
    access?: Dictionary<string, UserDefinedValue>
    /**
     * Non-searchable data that you want to associate with the user profile.
     * This field supports a nested data structure.
     */
    data?: Dictionary<string, UserDefinedValue>
  }
}
