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

import { ResponseItem } from './types'

export class Response<TDocument> {
  body: {
    /**
     * The response includes a docs array that contains the documents in the order specified in the request.
     * The structure of the returned documents is similar to that returned by the get API.
     * If there is a failure getting a particular document, the error is included in place of the document.
     */
    docs: ResponseItem<TDocument>[]
  }
}
