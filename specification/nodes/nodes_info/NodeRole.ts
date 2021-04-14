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

/**
 * @doc_url https://www.elastic.co/guide/en/elasticsearch/reference/current/modules-node.html#node-roles
 */
export enum NodeRole {
  master = 0,
  data = 1,
  data_cold = 2,
  data_content = 3,
  data_frozen = 4,
  data_hot = 5,
  data_warm = 6,
  client = 7,
  ingest = 8,
  ml = 9,
  voting_only = 10,
  transform = 11,
  remote_cluster_client = 12,
  coordinating_only = 13
}

/**
 * * @doc_url https://www.elastic.co/guide/en/elasticsearch/reference/current/modules-node.html#node-roles
 */
export type NodeRoles = NodeRole[]
