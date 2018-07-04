class CatRecoveryRecord implements ICatRecord {
	index: string;
	shard: string;
	time: string;
	type: string;
	stage: string;
	source_host: string;
	source_node: string;
	target_host: string;
	target_node: string;
	repository: string;
	snapshot: string;
	files: string;
	files_recovered: string;
	files_percent: string;
	files_total: string;
	bytes: string;
	bytes_recovered: string;
	bytes_percent: string;
	bytes_total: string;
	translog_ops: long;
	translog_ops_percent: string;
	translog_ops_recovered: long;
}
