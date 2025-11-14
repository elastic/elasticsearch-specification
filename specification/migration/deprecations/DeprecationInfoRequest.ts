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
import { IndexName } from '@_types/common'

/**
 * Get deprecation information.
 *
 * Get information about different cluster, node, and index level settings that use deprecated features that will be removed or changed in the next major version.
 *
 * TIP: This APIs is designed for indirect use by the Upgrade Assistant.
 * You are strongly recommended to use the Upgrade Assistant.
 * @rest_spec_name migration.deprecations
 * @availability stack since=6.1.0 stability=stable
 * @cluster_privileges manage
 * @doc_id migration-api-deprecation
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_migration/deprecations'
      methods: ['GET']
    },
    {
      path: '/{index}/_migration/deprecations'
      methods: ['GET']
    }
  ]
  path_parts: {
    /** Comma-separate list of data streams or indices to check. Wildcard (*) expressions are supported. */
    index?: IndexName
  }
}
