class SnapshotInfo {
  duration_in_millis: long;
  end_time: Date;
  end_time_in_millis: long;
  failures: SnapshotShardFailure[];
  indices: IndexName[];
  metadata: Dictionary<string, any>;
  snapshot: string;
  shards: ShardStatistics;
  start_time: Date;
  start_time_in_millis: long;
  state: string;
}
