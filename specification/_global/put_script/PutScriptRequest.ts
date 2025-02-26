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
import { Id, Name } from '@_types/common'
import { StoredScript } from '@_types/Scripting'
import { Duration } from '@_types/Time'

/**
 * Create or update a script or search template.
 * Creates or updates a stored script or search template.
 * @rest_spec_name put_script
 * @availability stack stability=stable
 * @availability serverless stability=stable visibility=public
 * @cluster_privileges manage
 * @doc_tag script
 * @doc_id script-put
 * @ext_doc_id search-template
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_scripts/{id}'
      methods: ['PUT', 'POST']
    },
    {
      path: '/_scripts/{id}/{context}'
      methods: ['PUT', 'POST']
    }
  ]
  path_parts: {
    /**
     * The identifier for the stored script or search template.
     * It must be unique within the cluster.
     */
    id: Id
    /**
     * The context in which the script or search template should run.
     * To prevent errors, the API immediately compiles the script or template in this context.
     */
    context?: Name
  }
  query_parameters: {
    /**
     * The context in which the script or search template should run.
     * To prevent errors, the API immediately compiles the script or template in this context.
     * If you specify both this and the `<context>` path parameter, the API uses the request path parameter.
     */
    context?: Name
    /**
     * The period to wait for a connection to the master node.
     * If no response is received before the timeout expires, the request fails and returns an error.
     * It can also be set to `-1` to indicate that the request should never timeout.
     * @server_default 30s
     */
    master_timeout?: Duration
    /**
     * The period to wait for a response.
     * If no response is received before the timeout expires, the request fails and returns an error.
     * It can also be set to `-1` to indicate that the request should never timeout.
     * @server_default 30s
     */
    timeout?: Duration
  }
  body: {
    /**
     * The script or search template, its parameters, and its language.
     */
    script: StoredScript
  }
}
