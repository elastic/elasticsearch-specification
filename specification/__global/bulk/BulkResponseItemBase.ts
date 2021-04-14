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

import {
  ErrorCause,
  integer,
  long,
  SequenceNumber,
  VersionNumber
} from '../../__common/common'
import { ShardStatistics } from '../../__common/common_options/hit/ShardStatistics'
import { Dictionary } from '../../__spec_utils/Dictionary'
import { UserDefinedValue } from '../../__spec_utils/UserDefinedValue'
import { InlineGet } from '../explain/InlineGet'

export class BulkResponseItemBase {
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

export class BulkResponseItemContainer {
  index?: BulkIndexResponseItem
  create?: BulkCreateResponseItem
  update?: BulkUpdateResponseItem
  delete?: BulkDeleteResponseItem
}

export class BulkIndexResponseItem extends BulkResponseItemBase {}

export class BulkCreateResponseItem extends BulkResponseItemBase {}

export class BulkUpdateResponseItem extends BulkResponseItemBase {}

export class BulkDeleteResponseItem extends BulkResponseItemBase {}
