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
import { Namespace, Service } from '@_types/common'

/**
 * Get service accounts.
 *
 * Get a list of service accounts that match the provided path parameters.
 * @rest_spec_name security.get_service_accounts
 * @availability stack since=7.13.0 stability=stable
 * @availability serverless stability=stable visibility=private
 * @cluster_privileges manage_service_account
 * @ext_doc_id service-accounts
 */
export interface Request extends RequestBase {
  path_parts: {
    /**
     * Name of the namespace. Omit this parameter to retrieve information about all service accounts. If you omit this parameter, you must also omit the `service` parameter.
     */
    namespace?: Namespace
    /**
     * Name of the service name. Omit this parameter to retrieve information about all service accounts that belong to the specified `namespace`.
     */
    service?: Service
  }
}
