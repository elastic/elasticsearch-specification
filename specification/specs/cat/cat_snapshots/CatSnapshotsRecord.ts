class CatSnapshotsRecord implements ICatRecord {
	duration: Time;
	@prop_serializer("StringLongFormatter")
	end_epoch: long;
	end_time: string;
	@prop_serializer("StringLongFormatter")
	failed_shards: long;
	id: string;
	@prop_serializer("StringLongFormatter")
	indices: long;
	@prop_serializer("StringLongFormatter")
	start_epoch: long;
	start_time: string;
	status: string;
	@prop_serializer("StringLongFormatter")
	successful_shards: long;
	@prop_serializer("StringLongFormatter")
	total_shards: long;
}
