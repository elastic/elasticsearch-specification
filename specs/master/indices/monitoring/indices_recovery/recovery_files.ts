
/**namespace:Indices.Monitoring.IndicesRecovery */
interface recovery_files {
	total: long;
	reused: long;
	recovered: long;
	percent: string;
	details: recovery_file_details[];
}