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

import { EsqlColumns } from '@_types/Binary'

export class Response {
  body: {
    columns?: EsqlColumns
    /**
     * Indicates whether the query is still running.
     * If the value is false, the async query has finished and the results are returned.
     */
    is_running: boolean
    /**
     * Indicates whether the query returned partial result.
     * For example, this can occur because the query was stopped.
     */
    is_partial: boolean
  }
}
