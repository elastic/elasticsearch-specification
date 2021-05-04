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

import { VersionNumber } from '@_types/common'
import { ProcessorContainer } from './Processors'

export class Pipeline {
  description?: string
  on_failure?: ProcessorContainer[]
  processors?: ProcessorContainer[]
  version?: VersionNumber
}

// Unused .. but let's keep it for now
export enum PipelineFailure {
  BadAuthentication = 0,
  BadResponse = 1,
  PingFailure = 2,
  SniffFailure = 3,
  CouldNotStartSniffOnStartup = 4,
  MaxTimeoutReached = 5,
  MaxRetriesReached = 6,
  Unexpected = 7,
  BadRequest = 8,
  NoNodesAttempted = 9
}

export class PipelineConfig {
  description?: string
  version?: VersionNumber
  processors: ProcessorContainer[]
}


