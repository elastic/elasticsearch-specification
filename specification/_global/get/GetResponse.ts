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

import { ErrorResponseBase } from '@_types/Base'
import { GetResult } from '@global/get/types'

export class Response<TDocument> {
  /** @codegen_name result */
  body: GetResult<TDocument>
  exceptions: [
    {
      // Special case exception for 404 status code, Elasticsearch will return either:
      //  * index_not_found_exception as an error if the index doesn't exist
      //  * GetResult with only the requested _id, _index properties and found as a false boolean
      statusCodes: [404]
      // eslint-disable-next-line es-spec-validator/no-inline-unions, es-spec-validator/prefer-tagged-variants -- TODO: use tagged variant
      body: GetResult<TDocument> | ErrorResponseBase
    }
  ]
}
