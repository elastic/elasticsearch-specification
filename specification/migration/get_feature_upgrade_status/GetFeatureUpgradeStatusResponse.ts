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

import { IndexName, VersionString } from '@_types/common'
import { ErrorCause } from '@_types/Errors'

export class Response {
  body: {
    features: MigrationFeature[]
    migration_status: MigrationStatus
  }
}

export enum MigrationStatus {
  NO_MIGRATION_NEEDED,
  MIGRATION_NEEDED,
  IN_PROGRESS,
  ERROR
}

export class MigrationFeature {
  feature_name: string
  minimum_index_version: VersionString
  migration_status: MigrationStatus
  indices: MigrationFeatureIndexInfo[]
}

export class MigrationFeatureIndexInfo {
  index: IndexName
  version: VersionString
  failure_cause?: ErrorCause
}
