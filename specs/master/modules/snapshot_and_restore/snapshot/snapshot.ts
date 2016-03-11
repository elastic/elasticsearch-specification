
/**namespace:Modules.SnapshotAndRestore.Snapshot */
interface snapshot {
	snapshot: string;
	indices: index_name[];
	state: string;
	start_time: Date;
	start_time_in_millis: long;
	end_time: Date;
	end_time_in_millis: long;
	duration_in_millis: long;
	shards: shards_meta_data;
	failures: snapshot_shard_failure[];
	Failures: string[];
}