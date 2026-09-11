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
import { MediaType, Namespace, Service } from '@_types/common'
import { ServiceAccountType } from './types'

/**
 * Get service accounts.
 *
 * Get a list of service accounts that match the provided path parameters.
 * Built-in service accounts ship with Elasticsearch in the `elastic` namespace; user-managed service accounts are created with the put user-managed service account API.
 *
 * NOTE: When `type` is omitted, a request without a namespace reports built-in accounts only, which preserves the response of a whole-cluster listing.
 * A request scoped to a namespace reports both kinds, so an account you created is found without naming its kind.
 * @rest_spec_name security.get_service_accounts
 * @availability stack since=7.13.0 stability=stable
 * @availability serverless stability=stable visibility=private
 * @cluster_privileges manage_service_account
 * @doc_id security-api-get-service-accounts
 * @ext_doc_id service-accounts
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_security/service/{namespace}/{service}'
      methods: ['GET']
    },
    {
      path: '/_security/service/{namespace}'
      methods: ['GET']
    },
    {
      path: '/_security/service'
      methods: ['GET']
    }
  ]
  path_parts: {
    /**
     * The name of the namespace.
     * Omit this parameter to retrieve information about all service accounts.
     * If you omit this parameter, you must also omit the `service` parameter.
     */
    namespace?: Namespace
    /**
     * The service name.
     * Omit this parameter to retrieve information about all service accounts that belong to the specified `namespace`.
     */
    service?: Service
  }
  query_parameters: {
    /**
     * A comma-separated list of the kinds of service account to return.
     * If it is omitted, it defaults to `built_in` when no namespace is given and to `built_in,user_managed` otherwise.
     * @availability stack since=9.6.0
     * @availability serverless
     */
    type?: ServiceAccountType | ServiceAccountType[]
  }
  response_media_type: MediaType.Json
}
