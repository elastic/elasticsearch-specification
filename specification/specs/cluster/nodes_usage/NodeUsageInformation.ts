class NodeUsageInformation {
	rest_actions: Dictionary<string, integer>;
	@prop_serializer("DateTimeOffsetEpochMillisecondsFormatter")
	since: Date;
	@prop_serializer("DateTimeOffsetEpochMillisecondsFormatter")
	timestamp: Date;
}
