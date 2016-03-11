
/**namespace:Modules.SnapshotAndRestore.Snapshot.SnapshotStatus */
interface snapshot_stats {
	number_of_files: long;
	processed_files: long;
	total_size_in_bytes: long;
	processed_size_in_bytes: long;
	start_time_in_millis: long;
	time_in_millis: long;
}