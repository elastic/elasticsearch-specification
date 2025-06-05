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

import { Id, IndexName, Name, VersionNumber, VersionType } from '@_types/common'
import { ErrorCause } from '@_types/Errors'
import { DateTime } from '@_types/Time'
import { AdditionalProperties } from '@spec_utils/behaviors'
import { Dictionary } from '@spec_utils/Dictionary'
import { Stringified } from '@spec_utils/Stringified'
import { UserDefinedValue } from '@spec_utils/UserDefinedValue'

export class Ingest {
  /**
   * @availability stack since=8.16.0
   * @availability serverless
   */
  _redact?: Redact
  timestamp: DateTime
  pipeline?: Name
}

export class Redact {
  /**
   * indicates if document has been redacted
   */
  _is_redacted: boolean
}

export class SimulateDocumentResult {
  doc?: DocumentSimulation
  error?: ErrorCause
  processor_results?: PipelineProcessorResult[]
}

export enum PipelineSimulationStatusOptions {
  success,
  error,
  error_ignored,
  skipped,
  dropped
}

export class PipelineProcessorResult {
  doc?: DocumentSimulation
  tag?: string
  processor_type?: string
  status?: PipelineSimulationStatusOptions
  description?: string
  ignored_error?: ErrorCause
  error?: ErrorCause
}

export class Document {
  /**
   * Unique identifier for the document.
   * This ID must be unique within the `_index`.
   */
  _id?: Id
  /**
   * Name of the index containing the document.
   */
  _index?: IndexName
  /**
   * JSON body for the document.
   */
  _source: UserDefinedValue
}

/**
 * The simulated document, with optional metadata.
 *
 * @behavior_meta AdditionalProperties fieldname=metadata description="Additional metadata"
 */
export class DocumentSimulation
  implements AdditionalProperties<string, string>
{
  /**
   * Unique identifier for the document. This ID must be unique within the `_index`.
   */
  _id: Id
  /**
   * Name of the index containing the document.
   */
  _index: IndexName
  _ingest: Ingest
  /**
   * Value used to send the document to a specific primary shard.
   */
  _routing?: string
  /**
   * JSON body for the document.
   */
  _source: Dictionary<string, UserDefinedValue>
  /**
   *
   */
  _version?: Stringified<VersionNumber>
  _version_type?: VersionType
}
