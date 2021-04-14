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
  integer,
  Routing,
  VersionNumber
} from '../../__common/common'
import { VersionType } from '../../__common/common/VersionType'

export class BulkOperation {
  _id: Id
  _index: IndexName
  retry_on_conflict: integer
  routing: Routing
  version: VersionNumber
  version_type: VersionType
}

export class BulkOperationContainer {
  index?: BulkIndexOperation
  create?: BulkCreateOperation
  update?: BulkUpdateOperation
  delete?: BulkDeleteOperation
}

export class BulkIndexOperation extends BulkOperation {}

export class BulkCreateOperation extends BulkOperation {}

export class BulkUpdateOperation extends BulkOperation {}

export class BulkDeleteOperation extends BulkOperation {}
