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
import { Id, MediaType } from '@_types/common'

/**
 * Get a recovery.
 *
 * Get the status and details of a recovery that was started with the start recovery API.
 * This API is intended for internal operator use.
 * The progress of a running recovery is reported as a percentage, and the repository and audit details of the recovery are not exposed.
 * @rest_spec_name data_recovery.get_recovery
 * @availability serverless visibility=private
 * @doc_id data-recovery-get-recovery
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_data_recovery/recoveries/{recovery_id}'
      methods: ['GET']
    }
  ]
  response_media_type: MediaType.Json
  path_parts: {
    /** The identifier of the recovery, as returned when the recovery was started. */
    recovery_id: Id
  }
}
