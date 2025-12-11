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
import { MediaType, Metadata, Name } from '@_types/common'
import { Duration } from '@_types/Time'
import { Access } from '@security/_types/Access'

/**
 * Create a cross-cluster API key.
 *
 * Create an API key of the `cross_cluster` type for the API key based remote cluster access.
 * A `cross_cluster` API key cannot be used to authenticate through the REST interface.
 *
 * IMPORTANT: To authenticate this request you must use a credential that is not an API key. Even if you use an API key that has the required privilege, the API returns an error.
 *
 * Cross-cluster API keys are created by the Elasticsearch API key service, which is automatically enabled.
 *
 * NOTE: Unlike REST API keys, a cross-cluster API key does not capture permissions of the authenticated user. The API key’s effective permission is exactly as specified with the `access` property.
 *
 * A successful request returns a JSON structure that contains the API key, its unique ID, and its name. If applicable, it also returns expiration information for the API key in milliseconds.
 *
 * By default, API keys never expire. You can specify expiration information when you create the API keys.
 *
 * Cross-cluster API keys can only be updated with the update cross-cluster API key API.
 * Attempting to update them with the update REST API key API or the bulk update REST API keys API will result in an error.
 * @rest_spec_name security.create_cross_cluster_api_key
 * @availability stack stability=stable
 * @cluster_privileges manage_security
 * @doc_id security-api-cross-cluster-key
 * @ext_doc_id remote-clusters-api-key
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_security/cross_cluster/api_key'
      methods: ['POST']
    }
  ]
  request_media_type: MediaType.Json
  response_media_type: MediaType.Json
  body: {
    /**
     * The access to be granted to this API key.
     * The access is composed of permissions for cross-cluster search and cross-cluster replication.
     * At least one of them must be specified.
     *
     * NOTE: No explicit privileges should be specified for either search or replication access.
     * The creation process automatically converts the access specification to a role descriptor which has relevant privileges assigned accordingly.
     */
    access: Access
    /**
     * Expiration time for the API key.
     * By default, API keys never expire.
     */
    expiration?: Duration
    /**
     * Arbitrary metadata that you want to associate with the API key.
     * It supports nested data structure.
     * Within the metadata object, keys beginning with `_` are reserved for system usage.
     */
    metadata?: Metadata
    /** Specifies the name for this API key. */
    name: Name
    /**
     * The certificate identity to associate with this API key.
     * This field is used to restrict the API key to connections authenticated by a specific TLS certificate.
     * The value should match the certificate's distinguished name (DN) pattern.
     */
    certificate_identity?: string
  }
}
