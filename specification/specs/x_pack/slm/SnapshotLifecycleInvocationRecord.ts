class SnapshotLifecycleInvocationRecord {
	snapshot_name: string;
	@prop_serializer("DateTimeOffsetEpochMillisecondsFormatter")
	time: Date;
}
