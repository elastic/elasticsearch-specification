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

class XPackRole {
  cluster: string[]
  indices: IndicesPrivileges[]
  metadata: Dictionary<string, UserDefinedValue>
  run_as: string[]
  transient_metadata: TransientMetadata
  applications: ApplicationPrivileges[]
  role_templates?: RoleTemplate[]
}

class TransientMetadata {
  enabled: boolean
}

enum RoleTemplateFormat {
  string = 0,
  json = 1
}

class InlineRoleTemplate {
  template: InlineRoleTemplateSource
  format?: RoleTemplateFormat
}

class InlineRoleTemplateSource {
  source: string
}

class StoredRoleTemplate {
  template: StoredRoleTemplateId
  format?: RoleTemplateFormat
}

class StoredRoleTemplateId {
  id: string
}

class InvalidRoleTemplate {
  template: string
  format?: RoleTemplateFormat
}

type RoleTemplate =
  | InlineRoleTemplate
  | StoredRoleTemplate
  | InvalidRoleTemplate
