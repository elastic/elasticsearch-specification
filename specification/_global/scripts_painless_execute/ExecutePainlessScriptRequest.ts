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
import { InlineScript } from '@_types/Scripting'
import { PainlessContextSetup } from './types'

/**
 * Runs a script and returns a result.
 * @rest_spec_name scripts_painless_execute
 * @availability stack since=6.3.0 stability=experimental
 * @availability serverless stability=experimental visibility=public
 */
export interface Request extends RequestBase {
  body: {
    /**
     * The context that the script should run in.
     * @server_default painless_test
     */
    context?: string
    /**
     * Additional parameters for the `context`.
     */
    context_setup?: PainlessContextSetup
    /**
     * The Painless script to execute.
     */
    script?: InlineScript
  }
}
