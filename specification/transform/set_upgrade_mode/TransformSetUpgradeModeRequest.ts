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
import { Duration } from '@_types/Time'
import { MediaType } from '@_types/common'

/**
 * Set upgrade_mode for transform indices.
 *
 * Sets a cluster wide upgrade_mode setting that prepares transform
 * indices for an upgrade.
 * When upgrading your cluster, in some circumstances you must restart your
 * nodes and reindex your transform indices. In those circumstances,
 * there must be no transforms running. You can close the transforms,
 * do the upgrade, then open all the transforms again. Alternatively,
 * you can use this API to temporarily halt tasks associated with the transforms
 * and prevent new transforms from opening. You can also use this API
 * during upgrades that do not require you to reindex your transform
 * indices, though stopping transforms is not a requirement in that case.
 * You can see the current value for the upgrade_mode setting by using the get
 * transform info API.
 * @rest_spec_name transform.set_upgrade_mode
 * @category ingest
 * @availability stack since=8.18.0 stability=stable
 * @availability serverless stability=stable visibility=private
 * @cluster_privileges manage_transform
 * @doc_id transform-set-upgrade-mode
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_transform/set_upgrade_mode'
      methods: ['POST']
    }
  ]
  response_media_type: MediaType.Json
  query_parameters: {
    /**
     * When `true`, it enables `upgrade_mode` which temporarily halts all
     * transform tasks and prohibits new transform tasks from
     * starting.
     * @server_default false
     */
    enabled?: boolean
    /**
     * The time to wait for the request to be completed.
     * @server_default 30s
     */
    timeout?: Duration
  }
}
