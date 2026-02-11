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
import { GrokPattern, MediaType } from '@_types/common'

/**
 * Test a Grok pattern.
 *
 * Test a Grok pattern on one or more lines of text.
 * The API indicates whether the lines match the pattern together with the offsets and lengths of the matched substrings.
 * @rest_spec_name text_structure.test_grok_pattern
 * @category ai/ml
 * @availability stack since=8.13.0 stability=stable
 * @availability serverless stability=stable visibility=private
 * @doc_id test-grok-pattern
 * @ext_doc_id grok
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_text_structure/test_grok_pattern'
      methods: ['GET', 'POST']
    }
  ]
  request_media_type: MediaType.Json
  response_media_type: MediaType.Json
  query_parameters: {
    /**
     * The mode of compatibility with ECS compliant Grok patterns.
     * Use this parameter to specify whether to use ECS Grok patterns instead of legacy ones when the structure finder creates a Grok pattern.
     * Valid values are `disabled` and `v1`.
     * @server_default disabled
     */
    ecs_compatibility?: string
  }
  body: {
    /**
     * The Grok pattern to run on the text.
     */
    grok_pattern: GrokPattern
    /**
     * The lines of text to run the Grok pattern on.
     */
    text: string[]
  }
}
