
/**namespace:Indices.Monitoring.IndicesRecovery */
interface RecoveryIndexStatus {
	total_time_in_millis: long;
	bytes: RecoveryBytes;
	files: RecoveryFiles;
}