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

import { Duration } from '@_types/Time'
import { RequestBase } from '@_types/Base'
import { Id } from '@_types/common'
import { TaskType } from '@inference/_types/TaskType'
import { TaskSettings } from '@inference/_types/Services'

/**
 * Perform inference on the service
 * @rest_spec_name inference.inference
 * @availability stack since=8.11.0 stability=experimental visibility=public
 * @availability serverless stability=experimental visibility=public
 */
export interface Request extends RequestBase {
  path_parts: {
    /**
     * The task type
     */
    task_type?: TaskType
    /**
     * The inference Id
     */
    inference_id: Id
  }
  query_parameters: {
    /**
     * Specifies the amount of time to wait for the inference request to complete.
     * @server_default 30s
     */
    timeout?: Duration
  }
  body: {
    /**
     * Query input, required for rerank task.
     * Not required for other tasks.
     */
    query?: string
    /**
     * Inference input.
     * Either a string or an array of strings.
     */
    input: string | Array<string>
    /**
     * Optional task settings
     */
    task_settings?: TaskSettings
  }
}
