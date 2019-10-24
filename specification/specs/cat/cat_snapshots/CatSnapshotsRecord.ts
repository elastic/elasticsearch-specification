class CatSnapshotsRecord implements ICatRecord {
	duration: Time;
	end_epoch: long;
	end_time: string;
	failed_shards: long;
	id: string;
	indices: long;
	start_epoch: long;
	start_time: string;
	status: string;
	successful_shards: long;
	total_shards: long;
}
