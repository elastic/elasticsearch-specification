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
// TODO remap this as a good bulk response item and an error response item

import { InlineGet } from '@_types/common'
import { Dictionary } from '@spec_utils/Dictionary'
import { UserDefinedValue } from '@spec_utils/UserDefinedValue'
import {
  Id,
  IndexName,
  Routing,
  SequenceNumber,
  VersionNumber,
  VersionType
} from '@_types/common'
import { ErrorCause } from '@_types/Errors'
import { integer, long } from '@_types/Numeric'
import { ShardStatistics } from '@_types/Stats'

export class ResponseItemBase {
  _id?: string | null
  _index: string
  status: integer

  error?: ErrorCause
  _primary_term?: long
  result?: string
  _seq_no?: SequenceNumber
  _shards?: ShardStatistics
  _type?: string
  _version?: VersionNumber
  forced_refresh?: boolean
  get?: InlineGet<Dictionary<string, UserDefinedValue>>
}

/** @variants container */
export class ResponseItemContainer {
  index?: IndexResponseItem
  create?: CreateResponseItem
  update?: UpdateResponseItem
  delete?: DeleteResponseItem
}

export class IndexResponseItem extends ResponseItemBase {}

export class CreateResponseItem extends ResponseItemBase {}

export class UpdateResponseItem extends ResponseItemBase {}

export class DeleteResponseItem extends ResponseItemBase {}

export class Operation {
  _id?: Id
  _index?: IndexName
  retry_on_conflict?: integer
  routing?: Routing
  version?: VersionNumber
  version_type?: VersionType
}

/** @variants container */
export class OperationContainer {
  index?: IndexOperation
  create?: CreateOperation
  update?: UpdateOperation
  delete?: DeleteOperation
}

export class IndexOperation extends Operation {}

export class CreateOperation extends Operation {}

export class UpdateOperation extends Operation {}

export class DeleteOperation extends Operation {}
