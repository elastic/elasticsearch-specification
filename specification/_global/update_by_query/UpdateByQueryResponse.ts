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

import { TaskId } from '@_types/common'
import { BulkIndexByScrollFailure } from '@_types/Errors'
import { float, long, ulong } from '@_types/Numeric'
import { Retries } from '@_types/Retries'

export class Response {
  '200': {
    body: {
      batches?: long
      failures?: BulkIndexByScrollFailure[]
      noops?: long
      deleted?: long
      requests_per_second?: float
      retries?: Retries
      task?: TaskId
      timed_out?: boolean
      took?: long
      total?: long
      updated?: long
      version_conflicts?: long
      throttled_millis?: ulong
      throttled_until_millis?: ulong
    }
  }
}
