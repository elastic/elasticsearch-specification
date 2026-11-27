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

import { Void } from '@spec_utils/VoidValue'

export class Response {
  /**
   * A successful request returns `204 No Content`.
   * Errors are returned as plain text rather than as a JSON error object:
   * `400` for an invalid message or rejected samples, `413` for a message that exceeds the size limit,
   * `415` for an unsupported `proto` parameter, and `429` when indexing is rejected and the client should retry.
   */
  body: Void
}
