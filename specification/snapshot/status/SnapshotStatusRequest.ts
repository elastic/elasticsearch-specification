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
import { Name, Names } from '@_types/common'
import { Duration } from '@_types/Time'

/**
 * Get the snapshot status.
 * Get a detailed description of the current state for each shard participating in the snapshot.
 * Note that this API should be used only to obtain detailed shard-level information for ongoing snapshots.
 * If this detail is not needed or you want to obtain information about one or more existing snapshots, use the get snapshot API.
 *
 * WARNING: Using the API to return the status of any snapshots other than currently running snapshots can be expensive.
 * The API requires a read from the repository for each shard in each snapshot.
 * For example, if you have 100 snapshots with 1,000 shards each, an API request that includes all snapshots will require 100,000 reads (100 snapshots x 1,000 shards).
 *
 * Depending on the latency of your storage, such requests can take an extremely long time to return results.
 * These requests can also tax machine resources and, when using cloud storage, incur high processing costs.
 * @rest_spec_name snapshot.status
 * @availability stack since=7.8.0 stability=stable
 * @availability serverless stability=stable visibility=private
 * @cluster_privileges monitor_snapshot
 * @doc_id snapshot-status
 */
export interface Request extends RequestBase {
  path_parts: {
    repository?: Name
    snapshot?: Names
  }
  query_parameters: {
    ignore_unavailable?: boolean // default: false
    master_timeout?: Duration
  }
}
