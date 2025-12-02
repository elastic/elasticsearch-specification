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

import { MediaType } from "@_types/common"

/**
 * Get CAT help.
 *
 * Get help for the CAT APIs.
 * @rest_spec_name cat.help
 * @availability stack stability=stable
 * @availability serverless stability=stable visibility=public
 * @doc_id cat
 */
export interface Request {
  urls: [
    {
      path: '/_cat'
      methods: ['GET']
    }
  ]
  response_media_type: MediaType.Text
}
