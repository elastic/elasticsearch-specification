
/**namespace:Modules.SnapshotAndRestore.Snapshot */
interface Snapshot {
	snapshot: string;
	indices: IndexName[];
	state: string;
	start_time: Date;
	start_time_in_millis: long;
	end_time: Date;
	end_time_in_millis: long;
	duration_in_millis: long;
	shards: ShardsMetaData;
	failures: SnapshotShardFailure[];
	Failures: string[];
}