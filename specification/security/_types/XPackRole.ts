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

import { ApplicationPrivileges } from '@security/put_role/ApplicationPrivileges'
import { IndicesPrivileges } from '@security/put_role/IndicesPrivileges'
import { Dictionary } from '@spec_utils/Dictionary'
import { UserDefinedValue } from '@spec_utils/UserDefinedValue'
import { Metadata } from '@_types/common'

export class XPackRole {
  cluster: string[]
  indices: IndicesPrivileges[]
  metadata: Metadata
  run_as: string[]
  transient_metadata: TransientMetadata
  applications: ApplicationPrivileges[]
  role_templates?: RoleTemplate[]
}

export class TransientMetadata {
  enabled: boolean
}

export enum RoleTemplateFormat {
  string = 0,
  json = 1
}

export class InlineRoleTemplate {
  template: InlineRoleTemplateSource
  format?: RoleTemplateFormat
}

export class InlineRoleTemplateSource {
  source: string
}

export class StoredRoleTemplate {
  template: StoredRoleTemplateId
  format?: RoleTemplateFormat
}

export class StoredRoleTemplateId {
  id: string
}

export class InvalidRoleTemplate {
  template: string
  format?: RoleTemplateFormat
}

export type RoleTemplate =
  | InlineRoleTemplate
  | StoredRoleTemplate
  | InvalidRoleTemplate
