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
import { Field, Id, IndexName, ScalarValue } from '@_types/common'
import { double, integer, long } from '@_types/Numeric'
import { DateTime } from '@_types/Time'
import { Dictionary } from '@spec_utils/Dictionary'
import { UserDefinedValue } from '@spec_utils/UserDefinedValue'

interface SelectOption {
  label: string
  value: ScalarValue
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

/** @variants internal tag='type' */
type Validation =
  | LessThanValidation
  | GreaterThanValidation
  | ListTypeValidation
  | IncludedInValidation
  | RegexValidation

export interface LessThanValidation {
  type: 'less_than'
  constraint: double
}

export interface GreaterThanValidation {
  type: 'greater_than'
  constraint: double
}

export interface ListTypeValidation {
  type: 'list_type'
  constraint: string
}

export interface IncludedInValidation {
  type: 'included_in'
  constraint: ScalarValue[]
}

export interface RegexValidation {
  type: 'regex'
  constraint: string
}

export interface ConnectorConfigProperties {
  category?: string
  default_value: ScalarValue
  depends_on: Dependency[]
  display: DisplayType
  label: string
  options: SelectOption[]
  order?: integer
  placeholder?: string
  required: boolean
  sensitive: boolean
  tooltip?: string | null
  type?: ConnectorFieldType
  ui_restrictions?: string[]
  validations?: Validation[]
  value: UserDefinedValue
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
  max_crawl_depth?: integer
  sitemap_discovery_disabled?: boolean
  domain_allowlist?: string[]
  sitemap_urls?: string[]
  seed_urls?: string[]
}

interface CustomScheduling {
  configuration_overrides: CustomSchedulingConfigurationOverrides
  enabled: boolean
  interval: string
  last_synced?: DateTime
  name: string
}

export type ConnectorCustomScheduling = Dictionary<string, CustomScheduling>

export enum ConnectorStatus {
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

export interface FilteringRule {
  created_at?: DateTime
  field: Field
  id: Id
  order: integer
  policy: FilteringPolicy
  rule: FilteringRuleRule
  updated_at?: DateTime
  value: string
}

interface FilteringValidation {
  ids: Id[]
  messages: string[]
}

enum FilteringValidationState {
  edited,
  invalid,
  valid
}

export interface FilteringAdvancedSnippet {
  created_at?: DateTime
  updated_at?: DateTime
  value: UserDefinedValue
}

export interface FilteringRulesValidation {
  errors: FilteringValidation[]
  state: FilteringValidationState
}

export interface FilteringRules {
  advanced_snippet: FilteringAdvancedSnippet
  rules: FilteringRule[]
  validation: FilteringRulesValidation
}

export interface FilteringConfig {
  active: FilteringRules
  domain?: string
  draft: FilteringRules
}

interface FeatureEnabled {
  enabled: boolean
}

interface SyncRulesFeature {
  /**
   * Indicates whether advanced sync rules are enabled.
   */
  advanced?: FeatureEnabled
  /**
   * Indicates whether basic sync rules are enabled.
   */
  basic?: FeatureEnabled
}

export interface ConnectorFeatures {
  /**
   * Indicates whether document-level security is enabled.
   */
  document_level_security?: FeatureEnabled
  /**
   * Indicates whether incremental syncs are enabled.
   */
  incremental_sync?: FeatureEnabled
  /**
   *  Indicates whether managed connector API keys are enabled.
   */
  native_connector_api_keys?: FeatureEnabled
  sync_rules?: SyncRulesFeature
}

export interface SchedulingConfiguration {
  access_control?: ConnectorScheduling
  full?: ConnectorScheduling
  incremental?: ConnectorScheduling
}

export interface Connector {
  api_key_id?: string
  api_key_secret_id?: string
  configuration: ConnectorConfiguration
  custom_scheduling: ConnectorCustomScheduling
  deleted: boolean
  description?: string
  error?: string | null
  features?: ConnectorFeatures
  filtering: FilteringConfig[]
  id?: Id
  index_name?: IndexName | null
  is_native: boolean
  language?: string
  last_access_control_sync_error?: string
  last_access_control_sync_scheduled_at?: DateTime
  last_access_control_sync_status?: SyncStatus
  last_deleted_document_count?: long
  last_incremental_sync_scheduled_at?: DateTime
  last_indexed_document_count?: long
  last_seen?: DateTime
  last_sync_error?: string
  last_sync_scheduled_at?: DateTime
  last_sync_status?: SyncStatus
  last_synced?: DateTime
  name?: string
  pipeline?: IngestPipelineParams
  scheduling: SchedulingConfiguration
  service_type?: string
  status: ConnectorStatus
  sync_cursor?: UserDefinedValue
  sync_now: boolean
}
