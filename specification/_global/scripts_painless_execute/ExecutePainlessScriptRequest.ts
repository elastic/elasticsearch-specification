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
import { Script } from '@_types/Scripting'
import { PainlessContext, PainlessContextSetup } from './types'

/**
 * Run a script.
 *
 * Runs a script and returns a result.
 * Use this API to build and test scripts, such as when defining a script for a runtime field.
 * This API requires very few dependencies and is especially useful if you don't have permissions to write documents on a cluster.
 *
 * The API uses several _contexts_, which control how scripts are run, what variables are available at runtime, and what the return type is.
 *
 * Each context requires a script, but additional parameters depend on the context you're using for that script.
 * @rest_spec_name scripts_painless_execute
 * @category unknown
 * @availability stack since=6.3.0 stability=experimental
 * @availability serverless stability=experimental visibility=public
 * @doc_tag script
 * @doc_id painless-execute-api
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_scripts/painless/_execute'
      methods: ['GET', 'POST']
    }
  ]
  request_media_type: MediaType.Json
  response_media_type: MediaType.Json
  body: {
    /**
     * The context that the script should run in.
     * NOTE: Result ordering in the field contexts is not guaranteed.
     * @server_default painless_test
     */
    context?: PainlessContext
    /**
     * Additional parameters for the `context`.
     * NOTE: This parameter is required for all contexts except `painless_test`, which is the default if no value is provided for `context`.
     */
    context_setup?: PainlessContextSetup
    /**
     * The Painless script to run.
     */
    script?: Script
  }
}
