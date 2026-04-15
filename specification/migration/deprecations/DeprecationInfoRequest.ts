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
import { IndexName, MediaType } from '@_types/common'

/**
 * Get deprecation information.
 *
 * Returns information about deprecated features which are in use in the cluster.
 * The reported features include cluster, node, and index level settings that will be removed or changed in the next major version.
 * You must address the reported issues before upgrading to the next major version.
 * However, no action is required when upgrading within the current major version.
 * Deprecated features remain fully supported and will continue to work in the current version, and when upgrading to a newer minor or patch release in the same major version.
 * Use this API to review your usage of these features and migrate away from them at your own pace, before upgrading to a new major version.
 *
 * > info
 * > This API is designed for indirect use by the [Upgrade Assistant](https://www.elastic.co/docs/deploy-manage/upgrade/prepare-to-upgrade/upgrade-assistant).
 * > We recommend learning about deprecated features using the Upgrade Assistant rather than calling this API directly.
 *
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
  response_media_type: MediaType.Json
}
