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
import { Id, ScalarValue } from '@_types/common'
import { Dictionary } from '@spec_utils/Dictionary'
import { UserDefinedValue } from '@spec_utils/UserDefinedValue'

interface SelectOption {
  label: string
  value: string
}

interface Dependency {
  field: string
  value: ScalarValue
}

enum DisplayType {
  textbox,
  textarea,
  numeric,
  toggle,
  dropdown
}

enum ConnectorFieldType {
  str,
  int,
  list,
  bool
}

interface Validation {
  constraint: string | number
  type: string
}

export interface ConnectorConfigProperties {
  category?: string
  default_value: ScalarValue
  depends_on: Dependency[]
  display: DisplayType
  label: string
  options: SelectOption[]
  order?: number
  placeholder?: string
  required: boolean
  sensitive: boolean
  tooltip?: string
  type: ConnectorFieldType
  ui_restrictions: string[]
  validations: Validation[]
  value: ScalarValue
}

export type ConnectorConfiguration = Dictionary<
  string,
  ConnectorConfigProperties
>

export interface ConnectorScheduling {
  enabled: boolean
  /** The interval is expressed using the crontab syntax */
  interval: string
}

interface CustomSchedulingConfigurationOverrides {
  max_crawl_depth?: number
  sitemap_discovery_disabled?: boolean
  domain_allowlist?: string[]
  sitemap_urls?: string[]
  seed_urls?: string[]
}

interface CustomScheduling {
  configuration_overrides: CustomSchedulingConfigurationOverrides
  enabled: boolean
  interval: string
  last_synced?: string
  name: string
}

export type ConnectorCustomScheduling = Dictionary<string, CustomScheduling>

enum ConnectorStatus {
  created,
  needs_configuration,
  configured,
  connected,
  error
}

export enum SyncStatus {
  canceling,
  canceled,
  completed,
  error,
  in_progress,
  pending,
  suspended
}

export interface IngestPipelineParams {
  extract_binary_content: boolean
  name: string
  reduce_whitespace: boolean
  run_ml_inference: boolean
}

enum FilteringPolicy {
  exclude,
  include
}

enum FilteringRuleRule {
  contains,
  ends_with,
  equals,
  regex,
  starts_with,
  greater_than = '>',
  less_than = '<'
}

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
  edited,
  invalid,
  valid
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
  api_key_id?: string
  configuration: ConnectorConfiguration
  custom_scheduling: ConnectorCustomScheduling
  description?: string
  error: string | null
  features: ConnectorFeatures
  filtering: FilteringConfig[]
  id?: Id
  index_name: string
  is_native: boolean
  language?: string
  last_access_control_sync_error?: string | null
  last_access_control_sync_scheduled_at?: string | null
  last_access_control_sync_status?: SyncStatus | null
  last_deleted_document_count?: number | null
  last_incremental_sync_scheduled_at?: string | null
  last_indexed_document_count?: number | null
  last_seen?: string | null
  last_sync_error?: string | null
  last_sync_scheduled_at?: string | null
  last_sync_status?: SyncStatus | null
  last_synced?: string | null
  name?: string
  pipeline?: IngestPipelineParams
  scheduling: SchedulingConfiguration
  service_type: string
  status: ConnectorStatus
  sync_now: boolean
}
