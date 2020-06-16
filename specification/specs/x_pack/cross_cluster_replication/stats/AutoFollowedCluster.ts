class AutoFollowedCluster {
	cluster_name: string;
	@prop_serializer("DateTimeOffsetEpochMillisecondsFormatter")
	time_since_last_check_millis: Date;
	last_seen_metadata_version: long;
}
