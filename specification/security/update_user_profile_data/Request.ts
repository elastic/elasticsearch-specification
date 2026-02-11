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
import { MediaType, Refresh, SequenceNumber } from '@_types/common'
import { long } from '@_types/Numeric'
import { UserProfileId } from '@security/_types/UserProfile'
import { Dictionary } from '@spec_utils/Dictionary'
import { UserDefinedValue } from '@spec_utils/UserDefinedValue'

/**
 * Update user profile data.
 *
 * Update specific data for the user profile that is associated with a unique ID.
 *
 * NOTE: The user profile feature is designed only for use by Kibana and Elastic's Observability, Enterprise Search, and Elastic Security solutions.
 * Individual users and external applications should not call this API directly.
 * Elastic reserves the right to change or remove this feature in future releases without prior notice.
 *
 * To use this API, you must have one of the following privileges:
 *
 * * The `manage_user_profile` cluster privilege.
 * * The `update_profile_data` global privilege for the namespaces that are referenced in the request.
 *
 * This API updates the `labels` and `data` fields of an existing user profile document with JSON objects.
 * New keys and their values are added to the profile document and conflicting keys are replaced by data that's included in the request.
 *
 * For both labels and data, content is namespaced by the top-level fields.
 * The `update_profile_data` global privilege grants privileges for updating only the allowed namespaces.
 * @rest_spec_name security.update_user_profile_data
 * @category security
 * @availability stack since=8.2.0 stability=stable
 * @availability serverless stability=stable visibility=private
 * @cluster_privileges manage_user_profile
 * @doc_id security-api-update-user-data
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_security/profile/{uid}/_data'
      methods: ['PUT', 'POST']
    }
  ]
  path_parts: {
    /**
     * A unique identifier for the user profile.
     */
    uid: UserProfileId
  }
  request_media_type: MediaType.Json
  response_media_type: MediaType.Json
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
     * visible to search.
     * If 'wait_for', it waits for a refresh to make this operation visible to search.
     * If 'false', nothing is done with refreshes.
     * @server_default false
     */
    refresh?: Refresh
  }
  body: {
    /**
     * Searchable data that you want to associate with the user profile.
     * This field supports a nested data structure.
     * Within the labels object, top-level keys cannot begin with an underscore (`_`) or contain a period (`.`).
     */
    labels?: Dictionary<string, UserDefinedValue>
    /**
     * Non-searchable data that you want to associate with the user profile.
     * This field supports a nested data structure.
     * Within the `data` object, top-level keys cannot begin with an underscore (`_`) or contain a period (`.`).
     * The data object is not searchable, but can be retrieved with the get user profile API.
     */
    data?: Dictionary<string, UserDefinedValue>
  }
}
