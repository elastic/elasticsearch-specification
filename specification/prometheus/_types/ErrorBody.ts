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

/**
 * Prometheus `errorType` values, mapped from the HTTP status of the failure.
 */
export enum ErrorType {
  /**
   * HTTP `400`. The request or expression is not valid.
   */
  bad_data,
  /**
   * HTTP `503`, `408`, or `504`. The query timed out or a gateway timed out.
   */
  timeout,
  /**
   * Every other status, including HTTP `403` and `500`.
   */
  execution
}

/**
 * The Prometheus error body written by a handler or listener that calls `PrometheusErrorResponse.send`.
 */
export class ErrorBody {
  /**
   * The status of the request: `error`.
   */
  status: 'error'
  /**
   * The Prometheus error type, from the HTTP status: `400` is `bad_data`; `503`, `408`, and `504` are `timeout`; every other status is `execution`.
   */
  errorType: ErrorType
  /**
   * The error message.
   */
  error: string
}
