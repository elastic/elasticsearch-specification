class SnapshotInfo {
  data_streams: Array<string>;
  duration_in_millis: long;
  end_time?: Date;
  end_time_in_millis?: long;
  failures?: SnapshotShardFailure[];
  include_global_state?: boolean;
  indices: IndexName[];
  metadata?: Dictionary<string, UserDefinedValue>;
  reason?: string;
  snapshot: string;
  shards?: ShardStatistics;
  start_time?: Date;
  start_time_in_millis?: long;
  state?: string;
  uuid: string;
  version?: string;
  version_id?: integer;
}
