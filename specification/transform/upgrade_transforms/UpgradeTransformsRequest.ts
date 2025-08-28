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

/**
 * Upgrade all transforms.
 *
 * Transforms are compatible across minor versions and between supported major versions.
 * However, over time, the format of transform configuration information may change.
 * This API identifies transforms that have a legacy configuration format and upgrades them to the latest version.
 * It also cleans up the internal data structures that store the transform state and checkpoints.
 * The upgrade does not affect the source and destination indices.
 * The upgrade also does not affect the roles that transforms use when Elasticsearch security features are enabled; the role used to read source data and write to the destination index remains unchanged.
 *
 * If a transform upgrade step fails, the upgrade stops and an error is returned about the underlying issue.
 * Resolve the issue then re-run the process again.
 * A summary is returned when the upgrade is finished.
 *
 * To ensure continuous transforms remain running during a major version upgrade of the cluster – for example, from 7.16 to 8.0 – it is recommended to upgrade transforms before upgrading the cluster.
 * You may want to perform a recent cluster backup prior to the upgrade.
 * @rest_spec_name transform.upgrade_transforms
 * @availability stack since=7.16.0 stability=stable
 * @availability serverless stability=stable visibility=private
 * @cluster_privileges manage_transform
 * @doc_id upgrade-transforms
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_transform/_upgrade'
      methods: ['POST']
    }
  ]
  query_parameters: {
    /**
     * When true, the request checks for updates but does not run them.
     * @server_default false
     */
    dry_run?: boolean
    /**
     * Period to wait for a response. If no response is received before the timeout expires, the request fails and
     * returns an error.
     * @server_default 30s
     */
    timeout?: Duration
  }
}
