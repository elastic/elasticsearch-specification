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

import { Access } from '@security/_types/Access'
import { RequestBase } from '@_types/Base'
import { Id, Metadata } from '@_types/common'
import { Duration } from '@_types/Time'

/**
 * Update a cross-cluster API key.
 *
 * Update the attributes of an existing cross-cluster API key, which is used for API key based remote cluster access.
 * @rest_spec_name security.update_cross_cluster_api_key
 * @availability stack stability=stable
 * @ext_doc_id remote-clusters-api-key
 */
export interface Request extends RequestBase {
  path_parts: {
    /**
     * The ID of the cross-cluster API key to update.
     */
    id: Id
  }
  body: {
    /**
     * The access to be granted to this API key.
     * The access is composed of permissions for cross cluster search and cross cluster replication.
     * At least one of them must be specified.
     * When specified, the new access assignment fully replaces the previously assigned access.
     */
    access: Access
    /**
     * Expiration time for the API key.
     * By default, API keys never expire. This property can be omitted to leave the value unchanged.
     */
    expiration?: Duration
    /**
     * Arbitrary metadata that you want to associate with the API key.
     * It supports nested data structure.
     * Within the metadata object, keys beginning with `_` are reserved for system usage.
     * When specified, this information fully replaces metadata previously associated with the API key.
     */
    metadata?: Metadata
  }
}
