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

/**
 * Get cluster info.
 *
 * Get basic build, version, and cluster information.
 * ::: In Serverless, this API is retained for backward compatibility only. Some response fields, such as the version number, should be ignored.
 * @rest_spec_name info
 * @availability stack stability=stable
 * @availability serverless stability=stable visibility=public
 * @cluster_privileges monitor
 * @doc_id api-root
 * @doc_tag info
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/'
      methods: ['GET']
    }
  ]
}
