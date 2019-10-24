class SnapshotLifecyclePolicyMetadata {
	modified_date: Date;
	next_execution: Date;
	policy: SnapshotLifecyclePolicy;
	version: integer;
	in_progress: SnapshotLifecycleInProgress;
	last_success: SnapshotLifecycleInvocationRecord;
	last_failure: SnapshotLifecycleInvocationRecord;
}
