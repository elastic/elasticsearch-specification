class SnapshotLifecycleInProgress {
	name: string;
	uuid: string;
	state: string;
	@prop_serializer("DateTimeOffsetEpochMillisecondsFormatter")
	start_time_millis: Date;
}
