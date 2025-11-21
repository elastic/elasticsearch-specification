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

import {
  Id,
  IndexName,
  SequenceNumber,
  UserDefinedObject,
  VersionNumber
} from '@_types/common'
import { long } from '@_types/Numeric'

export class GetResult<TDocument> {
  /**
   * The name of the index the document belongs to.
   */
  _index: IndexName
  /**
   * If the `stored_fields` parameter is set to `true` and `found` is `true`, it contains the document fields stored in the index.
   */
  fields?: UserDefinedObject
  _ignored?: string[]
  /**
   * Indicates whether the document exists.
   */
  found: boolean
  /**
   * The unique identifier for the document.
   */
  _id: Id
  /**
   * The primary term assigned to the document for the indexing operation.
   * @ext_doc_id optimistic_concurrency
   */
  _primary_term?: long
  /**
   * The explicit routing, if set.
   */
  _routing?: string
  /**
   * The sequence number assigned to the document for the indexing operation.
   * Sequence numbers are used to ensure an older version of a document doesn't overwrite a newer version.
   * @ext_doc_id optimistic_concurrency
   */
  _seq_no?: SequenceNumber
  /**
   * If `found` is `true`, it contains the document data formatted in JSON.
   * If the `_source` parameter is set to `false` or the `stored_fields` parameter is set to `true`, it is excluded.
   */
  _source?: TDocument
  /**
   * The document version, which is ncremented each time the document is updated.
   */
  _version?: VersionNumber
}
