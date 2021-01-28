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

class ClusterInfo {
  nodes: Dictionary<string, NodeDiskUsage>
  shard_sizes: Dictionary<string, long>
  shard_paths: Dictionary<string, string>
  reserved_sizes: ReservedSize[]
}

class NodeDiskUsage {
  node_name: string
  least_available: DiskUsage
  most_available: DiskUsage
}

class DiskUsage {
  path: string
  total_bytes: long
  used_bytes: long
  free_bytes: long
  free_disk_percent: double
  used_disk_percent: double
}

class ReservedSize {
  node_id: string
  path: string
  total: long
  shards: string[]
}
