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

import { Indices } from '@_types/common'
import { QueryContainer } from '@_types/query_dsl/abstractions'
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

export enum ClusterPrivilege {
  all,
  cancel_task,
  create_snapshot,
  grant_api_key,
  manage,
  manage_api_key,
  manage_ccr,
  manage_ilm,
  manage_index_templates,
  manage_ingest_pipelines,
  manage_logstash_pipelines,
  manage_ml,
  manage_oidc,
  manage_own_api_key,
  manage_pipeline,
  manage_rollup,
  manage_saml,
  manage_security,
  manage_service_account,
  manage_slm,
  manage_token,
  manage_transform,
  manage_watcher,
  monitor,
  monitor_ml,
  monitor_rollup,
  monitor_snapshot,
  monitor_text_structure,
  monitor_transform,
  monitor_watcher,
  read_ccr,
  read_ilm,
  read_pipeline,
  read_slm,
  transport_client
}

export class IndicesPrivileges {
  /**
   * The document fields that the owners of the role have read access to.
   * @doc_url https://www.elastic.co/guide/en/elasticsearch/reference/current/field-and-document-access-control.html
   */
  field_security?: FieldSecurity | FieldSecurity[]
  /**
   * A list of indices (or index name patterns) to which the permissions in this entry apply.
   */
  names: Indices
  /**
   * The index level privileges that owners of the role have on the specified indices.
   */
  privileges: IndexPrivilege[]
  /**
   * A search query that defines the documents the owners of the role have read access to. A document within the specified indices must match this query for it to be accessible by the owners of the role.
   */
  query?: string | string[]
  /**
   * Set to `true` if using wildcard or regular expressions for patterns that cover restricted indices. Implicitly, restricted indices have limited privileges that can cause pattern tests to fail. If restricted indices are explicitly included in the `names` list, Elasticsearch checks privileges against these indices regardless of the value set for `allow_restricted_indices`.
   * @server_default false
   */
  allow_restricted_indices?: boolean
}

export enum IndexPrivilege {
  all,
  auto_configure,
  create,
  create_doc,
  create_index,
  delete,
  delete_index,
  index,
  maintenance,
  manage,
  manage_follow_index,
  manage_ilm,
  manage_leader_index,
  monitor,
  read,
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
