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
import { MediaType } from '@_types/common'
import { ProjectRoutingExpression } from '../_types/RoutingExpression'


/**
 * Create of update a single named project routing expression.
 *
 * Create of update a single named project routing expression.
 * @doc_id project-routing
 * @rest_spec_name project_routing.create_single
 * @availability serverless stability=experimental visibility=public
 * @cluster_privileges manage
 * @doc_tag project-routing
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_project_routing/{name}'
      methods: ['PUT']
    }
  ]
  response_media_type: MediaType.Json
  path_parts: {
    /**
     * The name of project routing expression
     */
    name: string
  }
  /**
   * @codegen_name expressions
   */
  body: ProjectRoutingExpression
}
