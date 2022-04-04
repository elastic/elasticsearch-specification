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

/**
 * Retrieves a user's profile using the unique profile ID.
 * @rest_spec_name security.get_user_profile
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
     * List of filters for the `data` field of the profile document.
     * To return all content use `data=*`. To return a subset of content
     * use `data=<key>` to retrieve content nested under the specified `<key>`.
     * By default returns no `data` content.
     */
    data?: string | string[]
  }
}
