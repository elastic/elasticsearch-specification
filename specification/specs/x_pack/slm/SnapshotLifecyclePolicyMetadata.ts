class SnapshotLifecyclePolicyMetadata {
	modified_date_millis: Date;
	next_execution_millis: Date;
	policy: SnapshotLifecyclePolicy;
	version: integer;
	in_progress: SnapshotLifecycleInProgress;
	last_success: SnapshotLifecycleInvocationRecord;
	last_failure: SnapshotLifecycleInvocationRecord;
}
