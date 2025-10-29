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
import { Id } from '@_types/common'
import { TaskType } from '@inference/_types/TaskType'

/**
 * Delete an inference endpoint
 * @rest_spec_name inference.delete
 * @availability stack since=8.11.0 stability=stable visibility=public
 * @availability serverless stability=stable visibility=public
 * @doc_id inference-api-delete
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_inference/{inference_id}'
      methods: ['DELETE']
    },
    {
      path: '/_inference/{task_type}/{inference_id}'
      methods: ['DELETE']
    }
  ]
  path_parts: {
    /**
     * The task type
     */
    task_type?: TaskType

    /**
     * The inference identifier.
     */
    inference_id: Id
  }
  query_parameters: {
    /**
     * When true, checks the semantic_text fields and inference processors that reference the endpoint and returns them in a list, but does not delete the endpoint.
     * @server_default false
     */
    dry_run?: boolean

    /**
     * When true, the inference endpoint is forcefully deleted even if it is still being used by ingest processors or semantic text fields.
     * @server_default false
     */
    force?: boolean
  }
}
