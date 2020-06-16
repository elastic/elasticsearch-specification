class SnapshotLifecyclePolicyMetadata {
	@prop_serializer("DateTimeOffsetEpochMillisecondsFormatter")
	modified_date_millis: Date;
	@prop_serializer("DateTimeOffsetEpochMillisecondsFormatter")
	next_execution_millis: Date;
	policy: SnapshotLifecyclePolicy;
	version: integer;
	in_progress: SnapshotLifecycleInProgress;
	last_success: SnapshotLifecycleInvocationRecord;
	last_failure: SnapshotLifecycleInvocationRecord;
}
