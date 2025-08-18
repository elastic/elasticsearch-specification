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

import { Name } from '@_types/common'
import { ErrorCause } from '@_types/Errors'
import { integer } from '@_types/Numeric'
import { SnapshotInfo } from '@snapshot/_types/SnapshotInfo'

export class Response {
  body: {
    responses?: SnapshotResponseItem[]
    snapshots?: SnapshotInfo[]
    /**
     * The total number of snapshots that match the request when ignoring size limit or after query parameter.
     * @availability stack since=7.15.0
     * @availability serverless
     */
    total: integer
    /**
     * The number of remaining snapshots that were not returned due to size limits and that can be fetched by additional requests using the next field value.
     * @availability stack since=7.15.0
     * @availability serverless
     */
    remaining: integer
  }
}

export class SnapshotResponseItem {
  repository: Name
  snapshots?: SnapshotInfo[]
  error?: ErrorCause
}
