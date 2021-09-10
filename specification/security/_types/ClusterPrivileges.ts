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
