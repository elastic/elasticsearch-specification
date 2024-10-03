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
import { NodeIds } from '@_types/common'
import { long } from '@_types/Numeric'

/**
 * You can use this API to clear the archived repositories metering information in the cluster.
 * @rest_spec_name nodes.clear_repositories_metering_archive
 * @availability stack since=7.16.0 stability=experimental
 * @availability serverless stability=experimental visibility=private
 * @cluster_privileges monitor, manage
 * @doc_tag cluster
 */
export interface Request extends RequestBase {
  path_parts: {
    /**
     * Comma-separated list of node IDs or names used to limit returned information.
     * All the nodes selective options are explained [here](https://www.elastic.co/guide/en/elasticsearch/reference/current/cluster.html#cluster-nodes).
     */
    node_id: NodeIds
    /**
     * Specifies the maximum [archive_version](https://www.elastic.co/guide/en/elasticsearch/reference/current/get-repositories-metering-api.html#get-repositories-metering-api-response-body) to be cleared from the archive.
     */
    max_archive_version: long
  }
}
