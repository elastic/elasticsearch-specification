
/**namespace:Indices.Monitoring.IndicesRecovery */
interface shard_recovery {
	id: long;
	type: string;
	stage: string;
	primary: boolean;
	start_time: Date;
	stop_time: Date;
	total_time_in_millis: long;
	source: recovery_origin;
	target: recovery_origin;
	index: recovery_index_status;
	translog: recovery_translog_status;
	start: recovery_start_status;
}