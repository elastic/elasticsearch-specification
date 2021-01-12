class SnapshotInfo {
  duration_in_millis: long;
  end_time: Date;
  end_time_in_millis: long;
  failures: SnapshotShardFailure[];
  indices: IndexName[];
  metadata: Dictionary<string, UserDefinedValue>;
  snapshot: string;
  shards: ShardStatistics;
  start_time: Date;
  start_time_in_millis: long;
  state: string;
}
