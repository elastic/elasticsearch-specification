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
 * This API returns information about the type of license, when it was issued, and when it expires, for example.
 * For more information about the different types of licenses, see https://www.elastic.co/subscriptions.
 * @rest_spec_name license.get
 * @availability stack stability=stable
 * @availability serverless stability=stable visibility=public
 */
export interface Request extends RequestBase {
  query_parameters: {
    /**
     * If `true`, this parameter returns enterprise for Enterprise license types. If `false`, this parameter returns platinum for both platinum and enterprise license types. This behavior is maintained for backwards compatibility.
     * This parameter is deprecated and will always be set to true in 8.x.
     * @deprecated 7.6.0
     * @server_default true
     */
    accept_enterprise?: boolean
    /**
     * Specifies whether to retrieve local information. The default value is `false`, which means the information is retrieved from the master node.
     * @server_default false
     */
    local?: boolean
  }
}
