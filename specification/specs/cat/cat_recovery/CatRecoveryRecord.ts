class CatRecoveryRecord implements ICatRecord {
	bytes: string;
	bytes_percent: string;
	bytes_recovered: string;
	bytes_total: string;
	files: string;
	files_percent: string;
	files_recovered: string;
	files_total: string;
	index: string;
	repository: string;
	shard: string;
	snapshot: string;
	source_host: string;
	source_node: string;
	stage: string;
	target_host: string;
	target_node: string;
	time: string;
	@prop_serializer("NullableStringLongFormatter")
	translog_ops: long;
	translog_ops_percent: string;
	@prop_serializer("NullableStringLongFormatter")
	translog_ops_recovered: long;
	type: string;
}
