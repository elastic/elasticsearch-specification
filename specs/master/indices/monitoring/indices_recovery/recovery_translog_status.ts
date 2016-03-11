
/**namespace:Indices.Monitoring.IndicesRecovery */
interface recovery_translog_status {
	recovered: long;
	total: long;
	percent: string;
	total_on_start: long;
	total_time: string;
	total_time_in_millis: long;
}