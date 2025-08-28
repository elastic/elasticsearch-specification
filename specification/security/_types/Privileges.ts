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

import { Id, IndexName, Names } from '@_types/common'
import { QueryContainer } from '@_types/query_dsl/abstractions'
import { ScriptLanguage } from '@_types/Scripting'
import { Dictionary } from '@spec_utils/Dictionary'
import { UserDefinedValue } from '@spec_utils/UserDefinedValue'
import { FieldSecurity } from './FieldSecurity'

export class ApplicationPrivileges {
  /**
   * The name of the application to which this entry applies.
   */
  application: string
  /**
   * A list of strings, where each element is the name of an application privilege or action.
   */
  privileges: string[]
  /**
   * A list resources to which the privileges are applied.
   */
  resources: string[]
}

/** @non_exhaustive */
export enum ClusterPrivilege {
  all,
  cancel_task,
  /**
   * @availability stack
   */
  create_snapshot,
  /**
   * @availability stack
   */
  cross_cluster_replication,
  /**
   * @availability stack
   */
  cross_cluster_search,
  /**
   * @availability stack
   */
  delegate_pki,
  /**
   * @availability stack
   */
  grant_api_key,
  manage,
  manage_api_key,
  /**
   * @availability stack
   */
  manage_autoscaling,
  manage_behavioral_analytics,
  /**
   * @availability stack
   */
  manage_ccr,
  /**
   * @availability stack
   */
  manage_data_frame_transforms,
  /**
   * @availability stack
   */
  manage_data_stream_global_retention,
  manage_enrich,
  manage_esql,
  /**
   * @availability stack
   */
  manage_ilm,
  manage_index_templates,
  manage_inference,
  manage_ingest_pipelines,
  manage_logstash_pipelines,
  manage_ml,
  /**
   * @availability stack
   */
  manage_oidc,
  manage_own_api_key,
  manage_pipeline,
  /**
   * @availability stack
   */
  manage_rollup,
  /**
   * @availability stack
   */
  manage_saml,
  manage_search_application,
  manage_search_query_rules,
  manage_search_synonyms,
  manage_security,
  /**
   * @availability stack
   */
  manage_service_account,
  /**
   * @availability stack
   */
  manage_slm,
  /**
   * @availability stack
   */
  manage_token,
  manage_transform,
  /**
   * @availability stack
   */
  manage_user_profile,
  /**
   * @availability stack
   */
  manage_watcher,
  monitor,
  /**
   * @availability stack
   */
  monitor_data_frame_transforms,
  /**
   * @availability stack
   */
  monitor_data_stream_global_retention,
  monitor_enrich,
  monitor_esql,
  monitor_inference,
  monitor_ml,
  /**
   * @availability stack
   */
  monitor_rollup,
  /**
   * @availability stack
   */
  monitor_snapshot,
  /**
   * @availability stack since=8.17.0
   */
  monitor_stats,
  /**
   * @availability stack
   */
  monitor_text_structure,
  monitor_transform,
  /**
   * @availability stack
   */
  monitor_watcher,
  none,
  post_behavioral_analytics_event,
  /**
   * @availability stack
   */
  read_ccr,
  /**
   * @availability stack
   */
  read_fleet_secrets,
  /**
   * @availability stack
   */
  read_ilm,
  read_pipeline,
  read_security,
  /**
   * @availability stack
   */
  read_slm,
  /**
   * @availability stack
   */
  transport_client,
  /**
   * @availability stack
   */
  write_connector_secrets,
  /**
   * @availability stack
   */
  write_fleet_secrets
}

/**
 * The subset of cluster level privileges that can be defined for remote clusters.
 */
export enum RemoteClusterPrivilege {
  /**
   * @availability stack since=8.14.0
   */
  monitor_enrich,
  /**
   * @availability stack since=8.17.0
   */
  monitor_stats
}

// Keep in sync with RemoteIndicesPrivileges
export class IndicesPrivileges {
  /**
   * The document fields that the owners of the role have read access to.
   * @ext_doc_id field-and-document-access-control
   */
  field_security?: FieldSecurity
  // We're using IndexName | IndexName[] instead of Indices in this file on purpose:
  // https://github.com/elastic/elasticsearch-specification/pull/3127
  /**
   * A list of indices (or index name patterns) to which the permissions in this entry apply.
   */
  names: IndexName | IndexName[]
  /**
   * The index level privileges that owners of the role have on the specified indices.
   */
  privileges: IndexPrivilege[]
  /**
   * A search query that defines the documents the owners of the role have access to. A document within the specified indices must match this query for it to be accessible by the owners of the role.
   */
  query?: IndicesPrivilegesQuery
  /**
   * Set to `true` if using wildcard or regular expressions for patterns that cover restricted indices. Implicitly, restricted indices have limited privileges that can cause pattern tests to fail. If restricted indices are explicitly included in the `names` list, Elasticsearch checks privileges against these indices regardless of the value set for `allow_restricted_indices`.
   * @server_default false
   * @availability stack
   */
  allow_restricted_indices?: boolean
}

/**
 * The subset of index level privileges that can be defined for remote clusters.
 */
// Keep in sync with IndicesPrivileges
export class RemoteIndicesPrivileges {
  /**
   *  A list of cluster aliases to which the permissions in this entry apply.
   */
  clusters: Names
  /**
   * The document fields that the owners of the role have read access to.
   * @ext_doc_id field-and-document-access-control
   */
  field_security?: FieldSecurity
  /**
   * A list of indices (or index name patterns) to which the permissions in this entry apply.
   */
  names: IndexName | IndexName[]
  /**
   * The index level privileges that owners of the role have on the specified indices.
   */
  privileges: IndexPrivilege[]
  /**
   * A search query that defines the documents the owners of the role have access to. A document within the specified indices must match this query for it to be accessible by the owners of the role.
   */
  query?: IndicesPrivilegesQuery
  /**
   * Set to `true` if using wildcard or regular expressions for patterns that cover restricted indices. Implicitly, restricted indices have limited privileges that can cause pattern tests to fail. If restricted indices are explicitly included in the `names` list, Elasticsearch checks privileges against these indices regardless of the value set for `allow_restricted_indices`.
   * @server_default false
   * @availability stack
   */
  allow_restricted_indices?: boolean
}

/**
 * The subset of cluster level privileges that can be defined for remote clusters.
 */
export class RemoteClusterPrivileges {
  /**
   *  A list of cluster aliases to which the permissions in this entry apply.
   */
  clusters: Names
  /**
   * The cluster level privileges that owners of the role have on the remote cluster.
   */
  privileges: RemoteClusterPrivilege[]
}

export class UserIndicesPrivileges {
  /**
   * The document fields that the owners of the role have read access to.
   * @ext_doc_id field-and-document-access-control
   */
  field_security?: FieldSecurity[]
  /**
   * A list of indices (or index name patterns) to which the permissions in this entry apply.
   */
  names: IndexName | IndexName[]
  /**
   * The index level privileges that owners of the role have on the specified indices.
   */
  privileges: IndexPrivilege[]
  /**
   * Search queries that define the documents the user has access to. A document within the specified indices must match these queries for it to be accessible by the owners of the role.
   */
  query?: IndicesPrivilegesQuery[]
  /**
   * Set to `true` if using wildcard or regular expressions for patterns that cover restricted indices. Implicitly, restricted indices have limited privileges that can cause pattern tests to fail. If restricted indices are explicitly included in the `names` list, Elasticsearch checks privileges against these indices regardless of the value set for `allow_restricted_indices`.
   */
  allow_restricted_indices: boolean
}

export class RemoteUserIndicesPrivileges {
  /**
   * The document fields that the owners of the role have read access to.
   * @ext_doc_id field-and-document-access-control
   */
  field_security?: FieldSecurity[]
  /**
   * A list of indices (or index name patterns) to which the permissions in this entry apply.
   */
  names: IndexName | IndexName[]
  /**
   * The index level privileges that owners of the role have on the specified indices.
   */
  privileges: IndexPrivilege[]
  /**
   * Search queries that define the documents the user has access to. A document within the specified indices must match these queries for it to be accessible by the owners of the role.
   */
  query?: IndicesPrivilegesQuery[]
  /**
   * Set to `true` if using wildcard or regular expressions for patterns that cover restricted indices. Implicitly, restricted indices have limited privileges that can cause pattern tests to fail. If restricted indices are explicitly included in the `names` list, Elasticsearch checks privileges against these indices regardless of the value set for `allow_restricted_indices`.
   */
  allow_restricted_indices: boolean
  clusters: string[]
}

/**
 * While creating or updating a role you can provide either a JSON structure or a string to the API.
 * However, the response provided by Elasticsearch will only be string with a json-as-text content.
 *
 * Since this is embedded in `IndicesPrivileges`, the same structure is used for clarity in both contexts.
 *
 * @codegen_names json_text, query, template
 */
export type IndicesPrivilegesQuery = string | QueryContainer | RoleTemplateQuery

export class RoleTemplateQuery {
  /**
   * When you create a role, you can specify a query that defines the document level security permissions. You can optionally
   * use Mustache templates in the role query to insert the username of the current authenticated user into the role.
   * Like other places in Elasticsearch that support templating or scripting, you can specify inline, stored, or file-based
   * templates and define custom parameters. You access the details for the current authenticated user through the _user parameter.
   *
   * @ext_doc_id templating-role-query
   */
  template?: RoleTemplateScript
}

/** @shortcut_property source */
export class RoleTemplateScript {
  source?: RoleTemplateInlineQuery
  /**
   * The `id` for a stored script.
   */
  id?: Id
  /**
   * Specifies any named parameters that are passed into the script as variables.
   * Use parameters instead of hard-coded values to decrease compile time.
   */
  params?: Dictionary<string, UserDefinedValue>
  /**
   * Specifies the language the script is written in.
   * @server_default painless
   */
  lang?: ScriptLanguage
  options?: Dictionary<string, string>
}

/** @codegen_names query_string, query_object */
export type RoleTemplateInlineQuery = string | QueryContainer

/** @non_exhaustive */
export enum IndexPrivilege {
  all,
  auto_configure,
  create,
  create_doc,
  create_index,
  /**
   * @availability stack
   */
  cross_cluster_replication,
  /**
   * @availability stack
   */
  cross_cluster_replication_internal,
  delete,
  delete_index,
  index,
  maintenance,
  manage,
  manage_data_stream_lifecycle,
  /**
   * @availability stack
   */
  manage_follow_index,
  /**
   * @availability stack
   */
  manage_ilm,
  /**
   * @availability stack
   */
  manage_leader_index,
  monitor,
  none,
  read,
  /**
   * @availability stack
   */
  read_cross_cluster,
  view_index_metadata,
  write
}

export class GlobalPrivilege {
  application: ApplicationGlobalUserPrivileges
}

export class ApplicationGlobalUserPrivileges {
  manage: ManageUserPrivileges
}

export class ManageUserPrivileges {
  applications: string[]
}

export class ReplicationAccess {
  /**
   * A list of indices (or index name patterns) to which the permissions in this entry apply.
   */
  names: IndexName | IndexName[]
  /**
   * This needs to be set to true if the patterns in the names field should cover system indices.
   * @server_default false
   */
  allow_restricted_indices?: boolean
}

export class SearchAccess {
  /**
   * The document fields that the owners of the role have read access to.
   * @ext_doc_id field-and-document-access-control
   */
  field_security?: FieldSecurity
  /**
   * A list of indices (or index name patterns) to which the permissions in this entry apply.
   */
  names: IndexName | IndexName[]
  /**
   * A search query that defines the documents the owners of the role have access to. A document within the specified indices must match this query for it to be accessible by the owners of the role.
   */
  query?: IndicesPrivilegesQuery
  /**
   * Set to `true` if using wildcard or regular expressions for patterns that cover restricted indices. Implicitly, restricted indices have limited privileges that can cause pattern tests to fail. If restricted indices are explicitly included in the `names` list, Elasticsearch checks privileges against these indices regardless of the value set for `allow_restricted_indices`.
   * @server_default false
   * @availability stack
   */
  allow_restricted_indices?: boolean
}
