class Snapshot {
	duration_in_milliseconds: long;
	end_time: Date;
	end_time_in_milliseconds: long;
	failures: SnapshotShardFailure[];
	indices: IndexName[];
	name: string;
	shards: ShardStatistics;
	start_time: Date;
	start_time_in_milliseconds: long;
	state: string;
	metadata: Dictionary<string, any>;
}
