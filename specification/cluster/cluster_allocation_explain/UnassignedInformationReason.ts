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
 * @doc_url https://www.elastic.co/guide/en/elasticsearch/reference/current/cat-shards.html#cat-shards-query-params
 */
export enum UnassignedInformationReason {
  INDEX_CREATED = 0,
  CLUSTER_RECOVERED = 1,
  INDEX_REOPENED = 2,
  DANGLING_INDEX_IMPORTED = 3,
  NEW_INDEX_RESTORED = 4,
  EXISTING_INDEX_RESTORED = 5,
  REPLICA_ADDED = 6,
  ALLOCATION_FAILED = 7,
  NODE_LEFT = 8,
  REROUTE_CANCELLED = 9,
  REINITIALIZED = 10,
  REALLOCATED_REPLICA = 11,
  PRIMARY_FAILED = 12,
  FORCED_EMPTY_PRIMARY = 13,
  MANUAL_ALLOCATION = 14,
}
