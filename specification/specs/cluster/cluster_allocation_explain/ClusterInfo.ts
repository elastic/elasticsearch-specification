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
