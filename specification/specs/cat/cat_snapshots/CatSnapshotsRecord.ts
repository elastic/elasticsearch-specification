class CatSnapshotsRecord implements ICatRecord {
	id: string;
	status: string;
	start_epoch: long;
	start_time: string;
	end_epoch: long;
	end_time: string;
	duration: Time;
	indices: long;
	succesful_shards: long;
	failed_shards: long;
	total_shards: long;
}
