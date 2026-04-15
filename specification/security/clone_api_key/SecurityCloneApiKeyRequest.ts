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
import { MediaType, Metadata, Name, Refresh } from '@_types/common'
import { Duration } from '@_types/Time'

/**
 * Clone an API key.
 *
 * Create a copy of an existing API key with a new ID.
 * The cloned key inherits the role descriptors of the source key.
 * This is intended for applications (such as Kibana) that need to
 * create API keys on behalf of a user using an existing API key credential,
 * since derived API keys (API keys created by API keys) are not otherwise supported.
 * @rest_spec_name security.clone_api_key
 * @availability stack since=9.4.0 stability=experimental
 * @availability serverless stability=experimental visibility=private
 * @cluster_privileges manage_own_api_key
 * @doc_id security-api-clone-api-key
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_security/api_key/clone'
      methods: ['POST', 'PUT']
    }
  ]
  request_media_type: MediaType.Json
  response_media_type: MediaType.Json
  query_parameters: {
    /**
     * If `true` (the default) then refresh the affected shards to make this operation visible to search, if `wait_for` then wait for a refresh to make this operation visible to search, if `false` then do nothing with refreshes.
     */
    refresh?: Refresh
  }
  body: {
    /**
     * The credentials of the API key to clone.
     * This is the secret value returned when the key was originally created.
     * @secret
     */
    api_key: string
    /**
     * A name for the cloned API key.
     * If not provided, the name of the source key is used.
     */
    name?: Name
    /**
     * The expiration time for the cloned API key.
     * By default, API keys never expire.
     * Set to `null` to explicitly create a key with no expiration.
     */
    expiration?: Duration
    /**
     * Arbitrary metadata to associate with the cloned API key.
     * It supports nested data structure.
     * Within the metadata object, keys beginning with `_` are reserved for system usage.
     */
    metadata?: Metadata
  }
}
