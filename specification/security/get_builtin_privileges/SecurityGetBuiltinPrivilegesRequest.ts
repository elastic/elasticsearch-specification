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

/**
 * Get builtin privileges.
 *
 * Get the list of cluster privileges and index privileges that are available in this version of Elasticsearch.
 * @rest_spec_name security.get_builtin_privileges
 * @availability stack since=7.3.0 stability=stable
 * @availability serverless stability=stable visibility=private
 * @cluster_privileges manage_security
 * @doc_id security-api-get-builtin-privileges
 * @ext_doc_id security-privileges
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_security/privilege/_builtin'
      methods: ['GET']
    }
  ]
  response_media_type: MediaType.Json
}
