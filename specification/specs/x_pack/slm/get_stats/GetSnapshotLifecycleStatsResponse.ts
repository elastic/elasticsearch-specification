class GetSnapshotLifecycleStatsResponse extends ResponseBase {
	retention_deletion_time: string;
	retention_deletion_time_millis: long;
	retention_failed: long;
	retention_runs: long;
	retention_timed_out: long;
	total_snapshots_deleted: long;
	total_snapshot_deletion_failures: long;
	total_snapshots_failed: long;
	total_snapshots_taken: long;
}
