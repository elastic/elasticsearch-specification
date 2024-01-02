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
import { Id } from '@_types/common'
import { Dictionary } from '@spec_utils/Dictionary'
import { UserDefinedValue } from '@spec_utils/UserDefinedValue'

interface SelectOption {
  label: string
  value: string
}

interface Dependency {
  field: string
  value: string | number | boolean | null
}

enum DisplayType {
  TEXTBOX = 'textbox',
  TEXTAREA = 'textarea',
  NUMERIC = 'numeric',
  TOGGLE = 'toggle',
  DROPDOWN = 'dropdown'
}

enum ConnectorFieldType {
  STRING = 'str',
  INTEGER = 'int',
  LIST = 'list',
  BOOLEAN = 'bool'
}

interface ConnectorConfigCategoryProperties {
  label: string
  order: number
  type: 'category'
}

interface Validation {
  constraint: string | number
  type: string
}

export interface ConnectorConfigProperties {
  category?: string
  default_value: string | number | boolean | null
  depends_on: Dependency[]
  display: DisplayType
  label: string
  options: SelectOption[]
  order?: number | null
  placeholder?: string
  required: boolean
  sensitive: boolean
  tooltip: string | null
  type: ConnectorFieldType
  ui_restrictions: string[]
  validations: Validation[]
  value: string | number | boolean | null
}

export type ConnectorConfiguration = Dictionary<
  string,
  ConnectorConfigProperties | ConnectorConfigCategoryProperties | null
>

export interface ConnectorScheduling {
  enabled: boolean
  interval: string // interval has crontab syntax
}

interface CustomScheduling {
  configuration_overrides: Dictionary<string, UserDefinedValue>
  enabled: boolean
  interval: string
  last_synced: string | null
  name: string
}

export type ConnectorCustomScheduling = Dictionary<
  string,
  CustomScheduling | null
>

enum ConnectorStatus {
  CREATED = 'created',
  NEEDS_CONFIGURATION = 'needs_configuration',
  CONFIGURED = 'configured',
  CONNECTED = 'connected',
  ERROR = 'error'
}

export enum SyncStatus {
  CANCELING = 'canceling',
  CANCELED = 'canceled',
  COMPLETED = 'completed',
  ERROR = 'error',
  IN_PROGRESS = 'in_progress',
  PENDING = 'pending',
  SUSPENDED = 'suspended'
}

export interface IngestPipelineParams {
  extract_binary_content: boolean
  name: string
  reduce_whitespace: boolean
  run_ml_inference: boolean
}

type FilteringPolicy = 'exclude' | 'include'

type FilteringRuleRule =
  | 'contains'
  | 'ends_with'
  | 'equals'
  | '>'
  | '<'
  | 'regex'
  | 'starts_with'

interface FilteringRule {
  created_at: string
  field: string
  id: string
  order: number
  policy: FilteringPolicy
  rule: FilteringRuleRule
  updated_at: string
  value: string
}

interface FilteringValidation {
  ids: string[]
  messages: string[]
}

enum FilteringValidationState {
  EDITED = 'edited',
  INVALID = 'invalid',
  VALID = 'valid'
}

interface FilteringAdvancedSnippet {
  created_at: string
  updated_at: string
  value: Dictionary<string, UserDefinedValue>
}

interface FilteringRulesValidation {
  errors: FilteringValidation[]
  state: FilteringValidationState
}

interface FilteringRules {
  advanced_snippet: FilteringAdvancedSnippet
  rules: FilteringRule[]
  validation: FilteringRulesValidation
}

export interface FilteringConfig {
  active: FilteringRules
  domain: string
  draft: FilteringRules
}


interface FeatureEnabled {
  enabled: boolean
}

interface SyncRulesFeature {
  advanced?: FeatureEnabled
  basic?: FeatureEnabled
}

export interface ConnectorFeatures {
  document_level_security?: FeatureEnabled
  filtering_advanced_config?: boolean
  filtering_rules?: boolean
  incremental_sync?: FeatureEnabled
  sync_rules?: SyncRulesFeature
}

export interface SchedulingConfiguration {
  access_control: ConnectorScheduling
  full: ConnectorScheduling
  incremental: ConnectorScheduling
}

export interface Connector {
  api_key_id: string | null
  configuration: ConnectorConfiguration
  custom_scheduling: ConnectorCustomScheduling
  description: string | null
  error: string | null
  features: ConnectorFeatures
  filtering: FilteringConfig[]
  id?: Id
  index_name: string
  is_native: boolean
  language: string | null
  last_access_control_sync_error: string | null
  last_access_control_sync_scheduled_at: string | null
  last_access_control_sync_status: SyncStatus | null
  last_deleted_document_count: number | null
  last_incremental_sync_scheduled_at: string | null
  last_indexed_document_count: number | null
  last_seen: string | null
  last_sync_error: string | null
  last_sync_scheduled_at: string | null
  last_sync_status: SyncStatus | null
  last_synced: string | null
  name: string | null
  pipeline?: IngestPipelineParams | null
  scheduling: SchedulingConfiguraton
  service_type: string | null
  status: ConnectorStatus
  sync_now: boolean
}
