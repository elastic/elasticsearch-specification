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

/** The outcome of a data source connection test. */
export enum DataSourceTestStatus {
  /** The probe ran and the backend is reachable from every eligible data node. */
  success,
  /**
   * The probe ran but the backend was unreachable or rejected the connection.
   * The `error` field carries a human-readable reason.
   */
  failure,
  /**
   * The type is valid and registered, but the probe cannot give a meaningful result —
   * for example, no connectivity target, anonymous credentials, or bucket-scoped credentials.
   * The optional `message` field may carry user-visible guidance.
   */
  untestable
}

export class Response {
  /** @codegen_name result */
  body: {
    /** The outcome of the connection test. */
    status: DataSourceTestStatus
    /**
     * A human-readable description of why the connection failed.
     * Present only when `status` is `failure`.
     */
    error?: string
    /**
     * Optional user-visible guidance explaining why the connection could not be tested.
     * Present only when `status` is `untestable` and additional context is available.
     */
    message?: string
  }
}
