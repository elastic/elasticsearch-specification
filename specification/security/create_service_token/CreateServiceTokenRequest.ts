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
import { Name, Namespace, Refresh, Service } from '@_types/common'

/**
 * Create a service account token.
 *
 * Create a service accounts token for access without requiring basic authentication.
 *
 * NOTE: Service account tokens never expire.
 * You must actively delete them if they are no longer needed.
 * @rest_spec_name security.create_service_token
 * @availability stack stability=stable
 * @availability serverless stability=stable visibility=private
 * @cluster_privileges manage_service_account
 * @doc_id security-api-create-service-token
 * @ext_doc_id service-accounts
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_security/service/{namespace}/{service}/credential/token/{name}'
      methods: ['PUT', 'POST']
    },
    {
      path: '/_security/service/{namespace}/{service}/credential/token'
      methods: ['POST']
    }
  ]
  path_parts: {
    /**
     * The name of the namespace, which is a top-level grouping of service accounts.
     */
    namespace: Namespace
    /**
     * The name of the service.
     */
    service: Service
    /**
     * The name for the service account token.
     * If omitted, a random name will be generated.
     *
     * Token names must be at least one and no more than 256 characters.
     * They can contain alphanumeric characters (a-z, A-Z, 0-9), dashes (`-`), and underscores (`_`), but cannot begin with an underscore.
     *
     * NOTE: Token names must be unique in the context of the associated service account.
     * They must also be globally unique with their fully qualified names, which are comprised of the service account principal and token name, such as `<namespace>/<service>/<token-name>`.
     */
    name?: Name
  }
  query_parameters: {
    /**
     * If `true` (the default) then refresh the affected shards to make this operation visible to search, if `wait_for` then wait for a refresh to make this operation visible to search, if `false` then do nothing with refreshes.
     */
    refresh?: Refresh
  }
}
