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

import { Dictionary } from '@spec_utils/Dictionary'
import { UserDefinedValue } from '@spec_utils/UserDefinedValue'
import { ActionStatusOptions } from '@watcher/_types/Action'
import {
  Id,
  IndexName,
  Name,
  Type,
  VersionNumber,
  VersionType
} from '@_types/common'
import { DateString } from '@_types/Time'
import { AdditionalProperties } from '@spec_utils/behaviors'
import { Stringified } from '@spec_utils/Stringified'

export class Ingest {
  timestamp: DateString
  pipeline?: Name
}

export class PipelineSimulation {
  doc?: DocumentSimulation
  processor_results?: PipelineSimulation[]
  tag?: string
  processor_type?: string
  status?: ActionStatusOptions
}

export class Document {
  _id?: Id
  _index?: IndexName
  _source: UserDefinedValue
}

/**
 * The simulated document, with optional metadata.
 */
export class DocumentSimulation
  implements AdditionalProperties<string, string>
{
  _id: Id
  _index: IndexName
  _ingest: Ingest
  _routing?: string
  _source: Dictionary<string, UserDefinedValue>
  _type?: Type
  _version?: Stringified<VersionNumber>
  _version_type?: VersionType
}
