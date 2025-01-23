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
import { Name, Namespace } from '@_types/common'

/**
 * Get service account credentials.
 *
 * To use this API, you must have at least the `read_security` cluster privilege (or a greater privilege such as `manage_service_account` or `manage_security`).
 *
 * The response includes service account tokens that were created with the create service account tokens API as well as file-backed tokens from all nodes of the cluster.
 *
 * NOTE: For tokens backed by the `service_tokens` file, the API collects them from all nodes of the cluster.
 * Tokens with the same name from different nodes are assumed to be the same token and are only counted once towards the total number of service tokens.
 * @rest_spec_name security.get_service_credentials
 * @availability stack since=7.13.0 stability=stable
 * @availability serverless stability=stable visibility=private
 * @cluster_privileges read_security
 * @doc_id security-api-get-service-credentials
 * @ext_doc_id service-accounts
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_security/service/{namespace}/{service}/credential'
      methods: ['GET']
    }
  ]
  path_parts: {
    /**
     * The name of the namespace.
     */
    namespace: Namespace
    /**
     * The service name.
     */
    service: Name
  }
}
