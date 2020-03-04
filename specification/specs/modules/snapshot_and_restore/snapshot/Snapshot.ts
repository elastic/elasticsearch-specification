class Snapshot {
	duration_in_millis: long;
	end_time: Date;
	end_time_in_millis: long;
	failures: SnapshotShardFailure[];
	indices: IndexName[];
	snapshot: string;
	shards: ShardStatistics;
	start_time: Date;
	start_time_in_millis: long;
	state: string;
	metadata: Dictionary<string, any>;
}
