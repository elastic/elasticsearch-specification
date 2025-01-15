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

import { TaskType } from '@inference/_types/TaskType'
import { RequestBase } from '@_types/Base'
import { Id } from '@_types/common'

/**
 * Get an inference endpoint
 * @rest_spec_name inference.get
 * @availability stack since=8.11.0 stability=stable visibility=public
 * @availability serverless stability=stable visibility=public
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_inference'
      methods: ['GET']
    },
    {
      path: '/_inference/{inference_id}'
      methods: ['GET']
    },
    {
      path: '/_inference/{task_type}/{inference_id}'
      methods: ['GET']
    }
  ]
  path_parts: {
    /**
     * The task type
     */
    task_type?: TaskType
    /**
     * The inference Id
     */
    inference_id?: Id
  }
}
